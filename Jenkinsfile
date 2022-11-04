pipeline {
    agent any

    tools {nodejs "Node16"}

    stages {

        stage('Build') {
            steps {
                sh 'http-server -p 8081 &'
            }
        }

        stage('Test') {
            steps {
                dir('Cypress-ATF/src/test/javascript') {
                    sh 'npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator'
                    sh 'npm install -g mochawesome-report-generator'
                    sh 'npx cypress run'
                }
                 publishHTML([allowMissing: false, 
                alwaysLinkToLastBuild: true, 
                keepAll: false, 
                reportDir: '/var/lib/jenkins/workspace/JenkinsAWSdemoPIPELINE_main/Cypress-ATF/src/test/javascript/cypress/results', 
                reportFiles: 'mochawesome_November_4_2022_002.html', reportName: 'JenkinsAWS_report', 
                reportTitles: '', useWrapperFileDirectly: true])
            }
        }

        stage('Deploy') {
            steps {
                sh 'aws configure set region $AWS_DEFAULT_REGION' 
                sh 'aws configure set aws_access_key_id $AWS_ACCESS_KEY_ID'  
                sh 'aws configure set aws_secret_access_key $AWS_SECRET_ACCESS_KEY'
                sh 'aws s3 cp Public s3://jenkins-demo1 --recursive'
            }
        }
    }
}
