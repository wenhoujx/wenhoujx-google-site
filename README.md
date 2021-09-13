# My personal website

## Gomoku
most basic rules with 10 rollbacks.


## Deploy

Upload to gcloud bucket: app engine > Settings > Application Settings > Default Cloud Storage Bucket

DELETE existing build/ folder from glcoud
Upload `npm run build` > the folder build/ and app.yaml 

Open gcloud terminal (top right)
may need to create wenhoujx-website folder 
```
# may need authorize
gsutil rsync -r gs://bucket-name ./wenhoujx-website
cd ./wenhoujx-website
gcloud app deploy
```

## ideas: 

- turn chinese charater to icon with different px size.
- time tracking app
- goodbye pets 
