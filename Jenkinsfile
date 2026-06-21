pipeline {
    agent any

    tools {
        nodejs 'node-20'
    }

    environment {
        BASE_URL    = 'https://www.saucedemo.com'
        API_URL     = 'https://reqres.in/api'
        DB_HOST     = credentials('db-host')
        DB_USER     = credentials('db-user')
        DB_PASSWORD = credentials('db-password')
        DB_NAME     = credentials('db-name')
        API_KEY     = credentials('api-key')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                bat 'npx playwright test --project=chromium --workers=3'
            }
        }
    }

    post {
        always {
            publishHTML(target: [
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
            archiveArtifacts artifacts: 'test-results/**', allowEmptyArchive: true
        }
    }
}