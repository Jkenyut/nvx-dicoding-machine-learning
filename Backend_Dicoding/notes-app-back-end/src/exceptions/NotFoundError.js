/* eslint-disable constructor-super */
/* eslint-disable no-empty-function */
/* eslint-disable no-unused-vars */
const ClientError = require('./ClientError');

class NotFoundError extends ClientError {
  constructor(message) {
    super(message, 404);
    this.name = 'NotFoundError';
  }
}

module.exports = NotFoundError;
