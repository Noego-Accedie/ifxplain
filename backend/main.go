package main

import (
    "log"
    "net/http"
    "github.com/Noego.Accedie/ifxplain/backend/routes"
)

func main() {
    router := routes.SetupRoutes()
    log.Println("Server running on http://localhost:8080")
    log.Fatal(http.ListenAndServe(":8080", router))
}

// func enableCors(w http.ResponseWriter){
//     w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
//     w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
//     w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
// }