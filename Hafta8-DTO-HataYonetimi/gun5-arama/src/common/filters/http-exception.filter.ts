import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';

// @Catch() parametresiz → uygulamada oluşan HER hata buraya düşer.
// Böylece istemciye giden hata formatı tek bir yerden kontrol edilir ve
// beklenmeyen hatalarda stack trace'in dışarı sızması engellenir.
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const bilinenHata = exception instanceof HttpException;

    // Bilinen (fırlatılmış) hatalarda Nest'in verdiği kodu ve gövdeyi kullan,
    // bilinmeyenlerde 500 + genel mesaj dön.
    const durumKodu = bilinenHata
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const hata = bilinenHata
      ? exception.getResponse()
      : 'Sunucuda beklenmeyen bir hata oluştu.';

    // Sadece beklenmeyen hataları detaylı logla — NotFound/Conflict gibi
    // kasıtlı hatalar log'u kirletmesin.
    if (!bilinenHata) {
      this.logger.error(
        `Beklenmeyen hata: ${request.method} ${request.url}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    response.status(durumKodu).json({
      basarili: false,
      durumKodu,
      zaman: new Date().toISOString(),
      yol: request.url,
      hata,
    });
  }
}
