import os
from cryptography.fernet import Fernet
from dotenv import load_dotenv

load_dotenv()


class Encrypt:
    def __init__(self) -> None:
        key = os.getenv("encrypt_key")
        self.f = Fernet(key)

    def encrypt(self, value):
        return str(self.f.encrypt(value.encode())).replace("b'", "'")

    def decrypt(self, token):
        return self.f.decrypt(bytes(token, "utf-8")).decode()
