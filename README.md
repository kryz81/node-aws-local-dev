# node-aws-local-dev
Example of local development environment for AWS

### Goal

* [ ] Implement a small Node.js (with Nest.js) CRUD API application
   * [ ] Unit tests
   * [ ] e2e tests
   * [x] Lint and format (Eslint, Prettier)
* [ ] Use AWS technologies:    
   * [x] DynamoDB as DB
   * [ ] S3 as storage
   * [ ] Elasticache (redis) for caching
   * [ ] SQS for queuing
* [ ] Use AWS CodePipeline for Gi repo, CI/CD (build, test, lint, build docker image)
   * [x] CodeCommit for Repo
   * [ ] CodeBuild for linting, building, running tests and creating a docker image
   * [ ] CodeDeploy to deploy the app on EC2
* [ ] Use EKS to run the application for manual testing 
* [ ] Map a subdomain to the test environment  
* [ ] Create docker-compose files to speed up local development
* [ ] Evaluate various AWS mocking tools

### Install

* Generate access key and secret for your AWS user, put them into ~/.aws/credentials
* Set region in ~/.aws/config
* Edit .env file and set your aws profile name, for example: AWS_PROFILE=default
* Run: npm install

### Run

* Run the application: npm run start:dev
