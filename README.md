# node-aws-local-dev
Example of local development environment for AWS

### Goal

* [ ] Implement a small Node.js (with Nest.js) CRUD API application
   * [ ] Unit tests
   * [ ] e2e tests
   * [ ] Lint and format (Eslint, Prettier)
* [ ] Use AWS technologies:    
   * [x] DynamoDB as DB
   * [ ] S3 as storage
   * [ ] Elasticache (redis) for caching
   * [ ] SQS for queuing
* [ ] Use AWS CodePipeline for CI/CD (build, test, lint, build docker image)
* [ ] Use EKS to run the application for manual testing 
* [ ] Map a subdomain to the test environment  
* [ ] Create docker-compose files to speed up local development
* [ ] Evaluate various AWS mocking tools

### Install

* Generate access key and secret for your AWS user, put them into ~/.aws/credentials
* Edit .env file and set your aws profile name, for example: AWS_PROFILE=default

### Run

* Run the application: npm run start:dev
