# My personal website

## Gomoku
most basic rules with 10 rollbacks.


## Deploy

Upload to gcloud bucket: app engine > Settings > Application Settings > Default Cloud Storage Bucket

Upload `npm run build` > build/ and app.yaml

Open gcloud terminal (top right)

```
# may need authorize
gsutil rsync -r gs://bucket-name ./wenhoujx-website
cd ./wenhoujx-website
gcloud app deploy

```
