from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/")
def hello_geek():
    dictToReturn = {"text": "Hola mundo desde flask"}
    return jsonify(dictToReturn)


if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")
