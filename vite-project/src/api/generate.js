import {Configuration, OpenAIApi} from "openai"

const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);

export default async function generatePrompt(choice) {
  //console.log(choice);
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: choice,
    max_tokens: 300,
    temperature: 1.0,
  });

  const userResult = response.data.choices[0].text.trim();
  const resultList = userResult.split("\n\n");

  console.log(resultList)
  return resultList;
}


/*
export default async function(req, res) {
  // Ensure configuration of API key is initialized
  if (!configuration.apiKey) {
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
      prompt: genPrompt(input),
      temperature: 0.6,
      maxTokens: 500,
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
*/
