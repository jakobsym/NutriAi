package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	var response APIResponse

	// Fetch API key from .env file
	err := godotenv.Load("../.env")
	if err != nil {
		log.Fatal("Error fetching .env variable.")
	}
	apikey := os.Getenv("OPENAI_API_KEY")

	// Create a JSON prompt
	prompt := []byte(`{ "model": "gpt-3.5-turbo",
						"messages": [{"role": "user", "content": "Say this is a test!"}],
						"temperature": 0.7
					}`)

	// Make curl request
	url := "https://api.openai.com/v1/chat/completions"
	req, err := http.NewRequest("POST", url, bytes.NewBuffer(prompt))
	if err != nil {
		fmt.Println("Error creating request: ", err)
		return
	}

	// Set header of request
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer "+apikey)

	// Send request
	client := &http.Client{}
	res, err := client.Do(req)
	if err != nil {
		fmt.Println("Error sending request: ", err)
		return
	}
	defer res.Body.Close()

	// Read response body
	body, err := io.ReadAll(res.Body) // TODO: Make an account that reads from body? Or have the data sent straight to the account(s) Result struct fields
	if err != nil {
		fmt.Println("Error reading response body: ", err)
		return
	}

	err = json.Unmarshal(body, &response)
	if err != nil {
		fmt.Println("Error unmarshalling res body: ", err)
	}

	fmt.Println(response.Choices[0].Message.Content) // This is a test!
}
