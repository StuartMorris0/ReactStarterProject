/* eslint-disable max-classes-per-file */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.message = message;
  }
}
class PermissionError extends Error {
  constructor(message) {
    super(message);
    this.name = 'PermissionError';
    this.message = message;
  }
}
class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = 'DatabaseError';
    this.message = message;
  }
}
class ApiError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ApiError';
    this.message = message;
  }
}

module.exports = {
  ValidationError,
  PermissionError,
  DatabaseError,
  ApiError,
};
