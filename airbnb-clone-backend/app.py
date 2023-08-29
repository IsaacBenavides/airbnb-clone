from conf import app
from views.users import user_views
from flask_cors import CORS
from dotenv import load_dotenv

load_dotenv()


app.register_blueprint(user_views)
cors = CORS(app, resources={r"/*": {"origins": "*"}})


if __name__ == "__main__":
    app.run(debug=True, port=5001, host="0.0.0.0")
