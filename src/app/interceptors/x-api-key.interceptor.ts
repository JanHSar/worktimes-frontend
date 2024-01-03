import { HttpInterceptorFn } from '@angular/common/http';

/**
 * Add xApiKey to header
 * @param req 
 * @param next 
 * @returns Request with x-api-key header
 */
export const xApiKeyInterceptor: HttpInterceptorFn = (req, next) => {
  const xApiKey = localStorage.getItem('xApiKey');
  const reqXApiKey = req.clone({
    headers: req.headers.append('x-api-key', xApiKey ?? '')
  });
  return next(reqXApiKey);
};
