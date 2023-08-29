from exceptions import InvalidUsage
from models.user import User
from validations import validEmail
from errors import INVALID_EMAIL, INVALID_PASSWORD
from utils import encrypt, decrypt


class UserController:
    def __init__(self) -> None:
        self.user = User()

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

        print(encrypt(password))
        # print(
        #     decrypt(
        #         "gAAAAABk7Nh2Jgp9yCHpoYhGIi9J3Npaax6h5RTgz4Xxru5DzdVghwLxpNL5C2UjGRwJRLOvX1a4jxvpoMgbGa8ikRAvw6S5Ow=="
        #     )
        # )
        return self.user.find_unique(email=email)
