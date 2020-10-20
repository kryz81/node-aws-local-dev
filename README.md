# node-aws-local-dev
Example of local development environment for AWS

### Goal

* Implement a small Node.js (with Nest.js) API application
* Use AWS technologies:    
   * DynamoDB as DB
   * S3 as storage
   * Elasticache (redis) for caching
   * SQS for queuing
* Use AWS CodePipeline for CI/CD (build, test, lint, build docker image)
* Use EKS to run the application for manual testing 
* Map a subdomain to the test environment  
* Create docker-compose files to speed up local development
* Evaluate various AWS mocking tools
