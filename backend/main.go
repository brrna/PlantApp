package main

import (
	"PlantApp/backend/database"
	"fmt"
	"log"
)

func main() {
	_, err := database.GetDB()
	if err != nil {
		log.Fatal("err:", err)
	} else {
		fmt.Println("success")
	}

}
