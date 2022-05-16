export class Handler extends Error {
  public statusCode: number
  public error: string
  constructor(statusCode: number, error?: string) {
    super('Error')
    this.statusCode = statusCode
    this.error = error
  }
}
