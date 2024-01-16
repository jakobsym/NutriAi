package main

import "time"

type Account struct {
	ID        int          `json:"id"`
	FistName  string       `json:"first_name"`
	LastName  string       `json:"last_name"`
	Email     string       `json:"email"`
	Password  string       `json:"password"`
	CreatedAt time.Time    `json:"created_at"`
	Results   *APIResponse `json:"results"`
}

/*
Model JSON response from API request
*/
type APIResponse struct {
	ID      string    `json:"id"`
	Object  string    `json:"object"`
	Created int       `json:"created"`
	Model   string    `json:"model"`
	Choices []Choices `json:"choices"`
}

type Choices struct {
	Message      Message `json:"message"`
	Logprobs     *string `json:"logprobs"` // Distinguish between 'null' and  "" as logprobs returns null
	FinishReason string  `json:"finish_reason"`
	Index        int     `json:"index"`
}

type Message struct {
	Role    string `json:"role"`
	Content string `json:"content"`
}

func NewAccount() (*Account, error) {
	return nil, nil
}
