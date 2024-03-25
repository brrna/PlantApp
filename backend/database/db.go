package database

import (
	"log"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func GetDB() (*gorm.DB, error) {
	gotoErr := godotenv.Load("../.env")
	if gotoErr != nil {
		log.Fatal("err:", gotoErr)
		return nil, gotoErr
	}
	dbUser := os.Getenv("mysqluser")
	dbPass := os.Getenv("mysqlpass")
	dbHost := os.Getenv("mysqlhost")
	dbName := os.Getenv("mysqldb")

	var DBError error
	dsn := dbUser + ":" + dbPass + "@tcp(" + dbHost + ":3306)/" + dbName
	DB, DBError = gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if DBError != nil {
		log.Fatal("err:", DBError)
		return nil, DBError
	}
	return DB, nil
}
