from flask import Flask, jsonify
from flask_json_schema import JsonSchema, JsonValidationError
from exceptions import InvalidUsage


app = Flask(__name__)
schema = JsonSchema(app)


@app.errorhandler(JsonValidationError)
def validation_error(e):
    return jsonify(
        {
            "error": e.message,
            "errors": [validation_error.message for validation_error in e.errors],
        }
    )


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response
