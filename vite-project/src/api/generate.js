import {Configuration, OpenAIApi} from "openai";

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