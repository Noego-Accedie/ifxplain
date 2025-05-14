package routes

import (
    "github.com/gorilla/mux"
    "github.com/Noego.Accedie/ifxplain/backend/handlers"
)

func SetupRoutes() *mux.Router {
    r := mux.NewRouter()
    r.HandleFunc("/api/hello", handlers.HelloHandler).Methods("GET")
    return r
}
