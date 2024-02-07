enum HttpStatusCode {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  REDIRECT = 301,
  FOUND = 302,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  CONFLICT = 409,
  UNPROCCESABLE = 422,
  INTERNAL_SERVER_ERROR = 500,
}

class HttpError<T = unknown> extends Error {
  statusCode: HttpStatusCode;
  body: T | undefined;

  constructor(message: string, statusCode: HttpStatusCode, body?: T) {
    super(message);
    this.statusCode = statusCode;
    this.body = body;
  }
}

export { HttpStatusCode, HttpError };
