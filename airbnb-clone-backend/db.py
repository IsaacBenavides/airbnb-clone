import os
from flask_pymongo import pymongo
from dotenv import load_dotenv

load_dotenv()


class DbConnection:
    def __init__(self) -> None:
        self.mongo_url = os.getenv("mongo_url")

    def connect(self):
        try:
            client = pymongo.MongoClient(self.mongo_url)
            db = client.get_database("airbnb")
        except ConnectionError:
            print("error")
        return db
