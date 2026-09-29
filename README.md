# Bank Transaction System — Backend

A secure and scalable **Bank Transaction System backend** built using **Node.js, Express.js, and MongoDB**. The system provides user authentication, account management, user-to-user money transfers, system-user transactions, email notifications, transaction ledger management, and payment protection using **Idempotency Keys**.

## 🚀 Features

* 🔐 **User Registration & Authentication**

  * User registration with validation
  * Secure login and authentication
  * Cookie-based authentication
  * Token-based authorization
  * Email verification

* 💰 **Bank Transactions**

  * Transfer money from one user to another
  * Receive money from other users
  * Transfer and receive money from system users
  * Check current account balance
  * View account information
  * Maintain complete transaction records

* 📒 **Transaction Ledger**

  * Maintains a detailed ledger of financial transactions
  * Records every debit and credit transaction
  * Tracks sender and receiver information
  * Helps maintain a complete history of account activity
  * Allows transaction records to be retrieved for auditing and tracking

* 🔑 **Idempotency Key**

  * Every payment transaction uses an **Idempotency Key**
  * Prevents duplicate transactions when the same payment request is submitted multiple times
  * Helps maintain transaction consistency and reliability
  * Protects against duplicate payments caused by retries or network issues

* 📧 **Email Notifications**

  * Email verification during registration
  * Transaction notifications through email
  * Users receive email notifications after successfully creating a transaction

* 🗄️ **Database Management**

  * MongoDB for storing users, accounts, and transaction data
  * Ledger records are maintained in the database
  * Transaction information is securely persisted for future retrieval

* 🛡️ **Security & Validation**

  * Request validation
  * Authentication and authorization
  * Secure cookies and tokens
  * Protected transaction routes

## 🛠️ Tech Stack

| Technology           | Purpose                               |
| -------------------- | ------------------------------------- |
| **Node.js**          | Backend runtime                       |
| **Express.js**       | REST API and server framework         |
| **MongoDB**          | Database                              |
| **Nodemailer**       | Email verification and notifications  |
| **Cookies**          | Authentication/session handling       |
| **Tokens**           | Authorization                         |
| **Idempotency Keys** | Prevent duplicate payment processing  |
| **Ledger**           | Maintain complete transaction records |
| **Postman**          | API testing                           |

## 🔄 How It Works

### 1. User Registration

A new user registers an account by providing the required information.

After successful registration, the system performs the required validation and sends an **email verification/notification** using Nodemailer.

### 2. User Login

The registered user can log in using their credentials.

After successful authentication, the system provides the required authentication token/cookie, which is used to access protected APIs.

### 3. Create Transaction

An authenticated user can transfer money to another user.

Each payment request contains an **Idempotency Key** to prevent the same transaction from being processed more than once.

After a successful transaction:

* The transaction is stored in MongoDB.
* The sender's balance is updated.
* The receiver's balance is updated.
* A ledger entry is created for the transaction.
* Email notifications are sent to the relevant user(s).

### 4. Transaction Ledger

The system maintains a **ledger containing transaction records**.

The ledger provides a reliable record of financial activity, including:

* Transaction ID
* Sender
* Receiver
* Transaction amount
* Debit/Credit information
* Transaction status
* Transaction date/time
* Other transaction-related details

This allows transaction activity to be tracked and retrieved whenever required.

### 5. System User Transactions

The system also supports transactions involving a **system user**, allowing users to receive or transact with amounts provided by the system.

These transactions are also recorded in the ledger.

### 6. Check Balance & Account Information

Authenticated users can check their:

* Current account balance
* Account information
* Transaction records
* Debit and credit activity

## 🔐 Idempotent Payment Processing

A key feature of this project is the use of **Idempotency Keys for every payment**.

For example, if a client sends the same payment request multiple times because of a network issue or accidental retry, the same Idempotency Key allows the backend to recognize the request and prevent duplicate payment processing.

```text
Payment Request
      ↓
Idempotency Key
      ↓
Check Existing Transaction
      ↓
Already Processed?
   ↙          ↘
 Yes           No
 ↓              ↓
Return          Process Payment
Existing        ↓
Result          Update Balances
                ↓
                Create Ledger Entry
                ↓
                Send Email Notification
```

This improves the **reliability, consistency, and safety** of financial transactions.

## 📒 Ledger & Transaction Tracking

The ledger acts as a central record of transaction activity.

```text
User A
  │
  │ ₹500
  ↓
User B
  │
  ├── Update User A Balance
  ├── Update User B Balance
  ├── Create Transaction Record
  ├── Create Ledger Entry
  └── Send Email Notification
```

The ledger can then be used to retrieve and track the complete transaction history of the system.

## 📧 Email Notification Flow

The system uses **Nodemailer** to provide email communication.

```text
User Registration
       ↓
Email Verification
       ↓
Successful Authentication
       ↓
Create Transaction
       ↓
Payment Validation
       ↓
Ledger Entry Created
       ↓
Transaction Completed
       ↓
Email Notification
```

## 📁 Project Structure

```text
Bank-Transaction-System/
│
├── controllers/
├── models/
├── routes/
├── middleware/
├── utils/
├── config/
├── .env
├── server.js
├── package.json
└── README.md
```

> The folder structure may vary depending on the implementation.

## 🔑 Environment Variables

Create a `.env` file in the root directory and configure the required environment variables.

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

EMAIL_USER=your_email
EMAIL_PASSWORD=your_email_password
```

**Never commit your `.env` file to GitHub.** Add it to `.gitignore`.

```gitignore
node_modules/
.env
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the Project

```bash
cd Bank-Transaction-System
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file and add your MongoDB, JWT, and email configuration.

### 5. Start the Server

For development:

```bash
npm run dev
```

Or:

```bash
node server.js
```

The server will start on:

```text
http://localhost:5000
```

## 🧪 API Testing

The APIs can be tested using **Postman**.

The backend provides APIs for:

* User registration
* User login
* Email verification
* User authentication
* Account information
* Balance checking
* User-to-user transactions
* System-user transactions
* Transaction ledger
* Transaction history/information

## 🎯 Project Objectives

The main objective of this project is to develop a backend system that demonstrates how a basic banking/transaction platform can handle:

* Secure user authentication
* Account and balance management
* Money transfers
* System-user transactions
* Transaction persistence
* Ledger-based transaction tracking
* Email notifications
* API validation
* Duplicate payment prevention
* RESTful backend architecture

## 🚧 Future Improvements

* Transaction history with pagination
* Admin dashboard
* Transaction search and filtering
* Rate limiting
* Enhanced transaction monitoring
* Two-factor authentication
* Improved fraud detection
* Docker deployment
* Cloud deployment

## 👨‍💻 Author

**Abhishek Gupta**

B.Tech Computer Science Graduate
Backend / Full-Stack Developer

