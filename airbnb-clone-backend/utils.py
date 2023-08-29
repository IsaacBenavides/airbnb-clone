import os
import base64
from cryptography.fernet import Fernet

print(os.getenv("encrypt_key"))


def encrypt(value):
    key = base64.urlsafe_b64encode(bytes(os.getenv("encrypt_key"), encoding="ascii"))
    f = Fernet(key)
    return f.encrypt(value.encode())


def decrypt(token):
    key = base64.urlsafe_b64encode(bytes(os.getenv("encrypt_key"), encoding="ascii"))
    f = Fernet(key)
    return f.decrypt(bytes(token, "utf-8")).decode()
