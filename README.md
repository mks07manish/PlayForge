# TestForge

A scalable Playwright-based automation framework designed to validate end-to-end e-commerce workflows through UI, API, Smoke, Regression, and Functional Testing.

## Overview

TestForge is a modern automation framework built using Playwright and JavaScript. The framework follows the Page Object Model (POM) design pattern and provides reusable components for creating maintainable, scalable, and robust automated test suites.

The framework automates critical e-commerce user journeys such as:

* User Authentication (Login/Logout)
* Product Search and Validation
* Add to Cart
* Checkout Process
* Order Placement
* Order Cancellation
* API Validation
* Smoke Testing
* Regression Testing
* End-to-End Functional Testing

---

## Tech Stack

* Playwright
* JavaScript
* Node.js
* Allure Reporting
* Winston Logging
* Page Object Model (POM)

---

## Framework Features

### UI Automation

* Cross-browser testing
* Element validations
* End-to-end workflow validation
* Data-driven execution

### API Automation

* REST API validation
* Response verification
* Status code validation
* JSON response assertions

### Reporting

* Playwright HTML Report
* Allure Report
* Execution Logs

### Logging

* Winston Logger Integration
* Step-level execution logs
* Failure tracking

### Test Execution

* Smoke Suite
* Regression Suite
* Full Test Suite
* Debug Execution

---

## Project Structure

```text
TestForge
│
├── pages/
│   ├── BasePage.js
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   └── LogoutPage.js
│
├── tests/
│   ├── ui/
│   └── api/
│
├── fixtures/
│   └── pageFixture.js
│
├── testdata/
│   └── userData.json
│
├── utils/
│   ├── ConfigReader.js
│   └── Logger.js
│
├── reports/
├── allure-results/
├── playwright.config.js
└── package.json
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd TestForge
```

Install dependencies:

```bash
npm install
```

---

## Test Execution

Run Smoke Suite

```bash
npm run smoke
```

Run Regression Suite

```bash
npm run regression
```

Run Complete Test Suite

```bash
npm run all
```

Debug Smoke Tests

```bash
npm run debug_smoke
```

Debug Regression Tests

```bash
npm run debug_regression
```

---

## Reporting

Generate Allure Report

```bash
allure generate allure-results --clean
```

Open Allure Report

```bash
allure open allure-report
```

Serve Allure Report

```bash
allure serve allure-results
```

Playwright HTML Report

```bash
npx playwright show-report
```

---

## Sample End-to-End Scenarios

### Complete Purchase Flow

* Login
* Select Product
* Add Product to Cart
* Checkout
* Enter Customer Details
* Review Order
* Complete Purchase
* Verify Order Confirmation

### Order Cancellation Flow

* Login
* Add Product to Cart
* Checkout
* Enter Customer Details
* Review Order
* Cancel Transaction
* Verify Navigation to Product Page

---

## Design Patterns Used

* Page Object Model (POM)
* Fixture-Based Dependency Injection
* Centralized Configuration Management
* Reusable Utility Components
* Data-Driven Testing

---

## Future Enhancements

* Jenkins CI/CD Integration
* Docker Execution
* Parallel Test Execution
* Environment Management
* Database Validation
* Visual Testing
* Contract Testing

---

## Author

Manish Kumar Sonkar

Software Engineer | Automation Engineer | Java Full Stack Developer
