stages{
      stage('deploy to S3'){
          steps{
              sh 'aws s3 cp public/index.html s3://jenkins-demo1'
              sh 'aws s3api put-object-acl --bucket jenkins-demo1 --key index.html --acl public-read'
              sh 'aws s3 cp public/error.html s3://jenkins-demo1'
              sh 'aws s3api put-object-acl --bucket jenkins-demo1 --key error.html --acl public-read'
          }
      }
  }