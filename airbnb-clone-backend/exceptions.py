class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, error_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload
        self.error_code = error_code

    def to_dict(self):
        rv = dict()
        rv["message"] = self.message
        rv["error_code"] = self.error_code
        return rv
