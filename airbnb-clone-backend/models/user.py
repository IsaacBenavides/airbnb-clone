import datetime
from db import DbConnection
import utils


class User:
    def __init__(self) -> None:
        self.db = DbConnection().connect()

    def insert_one(self, **kwargs):
        return self.db.user.insert_one({"updatedAt": str(datetime.datetime.now())})

    def find_unique(self, email):
        return self.db.user.find_one({"email": email})
