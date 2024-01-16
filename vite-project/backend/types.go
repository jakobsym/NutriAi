package main

import "time"

type Account struct {
	ID        int
	FistName  string
	LastName  string
	Email     string
	Password  string
	CreatedAt time.Time
	Results   *APIResponse
}

/*
Model JSON response from API request
*/
type APIResponse struct {
	ID      string
	Object  string
	Created int
	Model   string
	Choices []Choices
}

type Choices struct {
	Message      Message
	Logprobs     *string // Distinguish between 'null' and  "" as logprobs returns null
	FinishReason string
	Index        int
}

type Message struct {
	Role    string
	Content string
}

func NewAccount() (*Account, error) {
	return nil, nil
}
