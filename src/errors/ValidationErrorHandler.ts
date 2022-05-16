export class ValidationErrorHandler extends Error {
  statusCode: number
  error: string[]
  constructor(statusCode: number, error?: string[]) {
    super('There are validation errors.')
    this.statusCode = statusCode
    this.error = error
  }
}
