const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'
  const context = err.context || `${req.method} ${req.originalUrl}`
  const details = err.details || {
    path: req.originalUrl,
    errorCode: statusCode,
    timestamp: new Date().toISOString()
  }

  console.error(`[ERROR] ${statusCode}: ${message}`)
  if (context) console.error(`[CONTEXT] ${context}`)

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      context,
      details
    }
  })
}

export default errorHandler



// const errorHandler = (err, req, res, next) => {
//   const statusCode = err.statusCode || 500
//   const message = err.message || 'Erreur serveur'
//   const context = err.context || null
//   console.error(`[ERROR] ${statusCode}: ${message}`)
//   if (context) console.error(`[CONTEXT] ${context}`)
//   res.status(statusCode).json({
//     success: false,
//     error: {
//       message,
//       ...(context && { context })
//     }
//   })
// }

// export default errorHandler
