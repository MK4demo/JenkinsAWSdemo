
pipeline {
    agent any
    stages {
        stage('deploy') {
            steps {
              sh "aws configure set region $AWS_DEFAULT_REGION" 

              sh "aws s3 cp public/index.html s3://jenkins-demo1"
            }
        }
    }
}
