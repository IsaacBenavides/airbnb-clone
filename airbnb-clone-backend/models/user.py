from db import DbConnection


class User:
    def __init__(self) -> None:
        user_validation = {
            "$jsonSchema": {
                "bsonType": "object",
            }
        }
