pipeline {
    agent any

    stages {
        stage('deploy to S3'){
          steps{
              sh 'aws s3 cp public s3://jenkins-demo1 --recursive'
              sh 'aws s3api put-object-acl --bucket jenkins-demo1 --key index.html --acl public-read'
          }
      }
    }
}