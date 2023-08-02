import {Configuration, OpenAIApi} from "openai";
//TODO: Implement error handling
const configuration = new Configuration({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
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
// Fix to 'unsafe header "User-Agent" ' error

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + String(openAIKey)
  },
  body: JSON.stringify({
    'prompt': prompt,
    'temperature': 0.1,
    'max_tokens': Math.floor(fileLength/2),
    'top_p': 1,
    'frequency_penalty': 0,
    'presence_penalty': 0.5,
    'stop': ["\"\"\""],
  })
};
fetch('https://api.openai.com/v1/engines/code-davinci-001/completions', requestOptions)
    .then(response => response.json())
    .then(data => {
      # Do something with data
  }).catch(err => {
    console.log("Ran out of tokens for today! Try tomorrow!");
  });
}
*/