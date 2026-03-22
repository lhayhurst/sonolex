import type { Request, Response, NextFunction } from 'express'
import multer from 'multer'

/**
 * Express error middleware for multer-specific errors (file too large, etc).
 * Must be registered after multer routes.
 */
export function multerErrorHandler(err: Error, _req: Request, res: Response, next: NextFunction): void {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      res.status(413).json({ error: 'File too large. Maximum size is 100MB.' })
      return
    }
    res.status(400).json({ error: err.message })
    return
  }
  next(err)
}

/**
 * Catch-all Express error middleware. Prevents unhandled errors from crashing the server.
 * Must be registered last.
 */
export function errorHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  console.error('Unhandled error:', err.message)
  if (!res.headersSent) {
    res.status(500).json({ error: err.message })
  }
}
