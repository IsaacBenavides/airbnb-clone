from conf import schema
from flask import Blueprint, request
from routes.user_routes import UserRoutes
from controllers.users import *
from bson.json_util import dumps, loads

user_views = Blueprint("user_views", __name__)

userController = UserController()


@user_views.route(UserRoutes.login, methods=["POST"])
def login():
    body = request.get_json(force=True)
    email = body.get("email")
    password = body.get("password")
    user = userController.getUser(email=email, password=password)
    return {"user": user}
