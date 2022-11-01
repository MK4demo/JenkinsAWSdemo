pipeline {
    agent any

    tools {nodejs "Node16"}

    stages {

        stage('Test') {
            steps {
                dir('Cypress-ATF/src/test/javascript') {
                    sh 'npm install'
                    sh 'npx cypress run'
                }
            }
        }
        stage('deploy') {
            steps {
                sh 'aws s3 cp Public s3://jenkins-demo1 --recursive'
            }
        }
    }
}
