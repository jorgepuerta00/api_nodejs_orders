# Example Microservice with Clean Architecture

### Stack
  We’ll use a simple NodeJS service for our backend.

    NodeJS - Carbon
    NodeJS - Latest
    Docker for Linux

### Deploy in GCP Cloud Run

1- gcloud config set project PROJECT-ID
2- gcloud builds submit --tag gcr.io/PROJECT-ID/userservice
3- gcloud beta run deploy --image gcr.io/PROJECT-ID/userservice --platform managed

### Example
1- gcloud config set project pidenos-project-278118
2- gcloud config set run/region us-central1
3- gcloud builds submit --tag gcr.io/pidenos-project-278118/shops
4- gcloud beta run deploy --image gcr.io/pidenos-project-278118/shops --platform managed

### @jorgepuerta00# api_nodejs_orders
# api_nodejs_orders
