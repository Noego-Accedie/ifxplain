package handlers

import (
    "encoding/json"
    "net/http"
)

func HelloHandler(w http.ResponseWriter, r *http.Request) {
    json.NewEncoder(w).Encode(map[string]string{"message": "Hello from Go!"})
}

func GetCode(w http.ResponseWriter, r *http.Request) {
	
}
