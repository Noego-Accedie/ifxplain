package routes

import (
    "net/http"
    "github.com/gorilla/mux"
    "github.com/yourname/Noego.Accedie/backend/handlers"
)

func SetupRoutes() *mux.Router {
    r := mux.NewRouter()
    r.HandleFunc("/api/hello", handlers.HelloHandler).Methods("GET")
    return r
}
