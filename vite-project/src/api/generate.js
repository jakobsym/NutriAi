import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

export default async function(req, res) {
  /* Implement API call here */

  // Ensure configuration of API key is initialized
  if (! configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI key is not configured."
      }
    });
    return;
  }
  // Ensure input is actually passed in
  const input = req.body.input || '';
  if (input.treim().length === 0){
    res.status(400).json({
      error: {
        message: "Input was invalid."
      }
    });
    return;
  }

  try{
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt(input),
      temperature: 0.6,
    });
    res.status(200).json({ result: completion.data.choices[0].text});
  } catch(error){
    if (error.response){
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.resposne.data);
    }
    else{
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: 'An error occurred during your request.',
        }
      });
    }
  }
}

// `choice` === userChoice[]: string[]
function genPrompt(choice){
  return `Based on provided prompts use 5 brief prompts to act as a personal trainer
    choice: Im a male that weighs 135lbs. I want to maintain weight doing weight training.
    answer: Caloric Surplus: Consume more calories than your body burns in a day to create a surplus for weight gain.
      High-Protein Diet: Include sufficient protein in your meals to support muscle growth and repair.
      Progressive Overload: Focus on compound weight training exercises and gradually increase the resistance to stimulate muscle growth.
      Consistent Training: Train with weights 3-4 times a week, allowing adequate rest for muscle recovery.
      Patience and Monitoring: Be patient with your progress and monitor weight, strength gains, and overall changes to adjust your approach if necessary.

    choice: Im a female that weighs 100lbs. I want to gain weight doing a little bit of everything.
    answer: Increase Caloric Intake: Consume more calories than your body burns in a day by adding nutrient-dense foods to your meals and snacks.
      Strength Training: Incorporate resistance exercises like weight lifting or bodyweight exercises to build muscle mass and add healthy weight.
      Balanced Diet: Ensure your diet includes a good balance of carbohydrates, proteins, and healthy fats to support overall weight gain and fuel your activities.
      Regular Meals and Snacks: Eat frequent, balanced meals, and include snacks throughout the day to maintain a steady supply of nutrients and energy.
      Stay Active: Engage in moderate cardiovascular activities like walking, cycling, or dancing to support a healthy appetite and overall well-being.
  
    choice: ${choice}
    answer:`;
}