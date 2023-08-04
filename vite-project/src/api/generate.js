import {Configuration, OpenAIApi} from "openai";

const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  });

const openai = new OpenAIApi(configuration);
let resultList; // store output in formatted maner

// Handle ' Refused to set unsafe header "User-Agent" ' error
configuration.baseOptions.headers = {
  'Authorization': 'Bearer ' + configuration.apiKey
}

export default async function generatePrompt(choice, res){
  //console.log(choice)

  if (!configuration.apiKey) {
    res.status(500).json({
      error: {
        message: "OpenAI API key not configured properly."
      }
    })
  }

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: choice,
      max_tokens: 420,
      temperature: 1.0,
    })

    const userResult = response.data.choices[0].text.trim();
    resultList = userResult.split("\n\n");

  } catch (error) {

    if (error.response) {
      console.error(error.response.status, error.response.data);
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error(`Error with OpenAI API request: ${error.message}`);
      res.status(500).json({
        error: {
          message: "Error occured during request.",
        }
      });
    }
  }
  
  //console.log(resultList)
  return resultList;
}