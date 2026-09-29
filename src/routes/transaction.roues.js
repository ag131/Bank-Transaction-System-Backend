const { Router } = require('express')
const authMiddleware = require("../middleware/auth.midleware")
const transactionController = require("../controllers/transaction.controller")

const transactionRouter = Router()

transactionRouter.post("/", authMiddleware.authMiddleware, transactionController.createTransaction)

transactionRouter.post("/system/initial-funds", authMiddleware.authSystemUserMiddleware, transactionController.createInitialFundsTransaction)


module.exports = transactionRouter