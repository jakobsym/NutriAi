package main

import (
	"encoding/json"
	"net/http"
)

const GetRequest = "GET"
const PostRequest = "POST"
const DeleteRequest = "DELETE"
const PutRequest = "PUT"
const PatchRequest = "PATCH"

type apiFunc func(http.ResponseWriter, *http.Request) error // function signature for function being used

type APIError struct {
	Error string `json:"error"`
}

type APIServer struct {
	listenAddr string
	store      Storage
}

// Init. Server
func (s *APIServer) Run() {
}

// Create server for backend
func newAPIServer(listenAddr string, store Storage) *APIServer {
	return &APIServer{
		listenAddr: listenAddr,
		store:      store,
	}
}

// Handle HTTP functions

// Return JSON response
func WriteJSON(w http.ResponseWriter, status int, v any) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	return json.NewEncoder(w).Encode(v)
}
