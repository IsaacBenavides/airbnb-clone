import json
from exceptions import InvalidUsage
from models.user import User
from validations import validEmail
from errors import INVALID_EMAIL, INVALID_PASSWORD
from utils import Encrypt
from bson.json_util import dumps


class UserController:
    def __init__(self) -> None:
        self.user = User()
        self.encrypt = Encrypt()

    def getUser(self, email, password):
        if not email:
            raise InvalidUsage(
                message="Email Is required", error_code=INVALID_EMAIL, status_code=400
            )
        if not password:
            raise InvalidUsage(
                message="Password Is required",
                error_code=INVALID_PASSWORD,
                status_code=400,
            )
        if not validEmail(email):
            raise InvalidUsage(
                message="Invalid Email", error_code=INVALID_EMAIL, status_code=400
            )
        user = self.user.find_unique(email=email)
        if not user:
            raise InvalidUsage(
                message="Incorrect user Credentials",
                error_code=INVALID_PASSWORD,
                status_code=401,
            )

        user = dumps(user)
        user = json.loads(user)
        user_password = self.encrypt.decrypt(user["hashedPassword"])
        isSamePassword = user_password == password

        if not isSamePassword:
            raise InvalidUsage(
                message="Incorrect User Credentials",
                error_code=INVALID_PASSWORD,
                status_code=401,
            )

        return user
