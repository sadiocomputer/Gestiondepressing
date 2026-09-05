import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { UserAlreadyExistsException } from 'src/domaines/exceptions/user.exception';
@Catch(UserAlreadyExistsException)
export class UserExcetiponFilter implements ExceptionFilter {
  catch(exception: UserAlreadyExistsException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status =
      exception instanceof UserAlreadyExistsException
        ? HttpStatus.CONFLICT
        : HttpStatus.NOT_FOUND;
    response.status(status).json({
      statusCode: status,
      message: exception.message,
    });
  }
}
