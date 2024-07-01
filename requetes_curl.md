```
curl -X GET http://localhost:8080/randonne/mongo/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974
```


```
curl -X PUT http://localhost:8080/randonne/mongo/483dbae9-89da-4021-86bf-e67f57fe20f0 -H "Content-Type: application/json" -d '{
  "uuid": "f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e",
  "ra_id": 101,
  "ra_label": "Updated Test Randonne",
  "ra_gpx": {
    "lon": 40.7128,
    "lat": -74.0060
  },
  "ra_description": "Updated test description",
  "ra_duree": 130,
  "ra_difficulte": "Medium",
  "ra_denivele": 200,
  "ra_distance": 6.0,
  "ra_boucle": false,
  "po_id": 1,
  "av_id": 1
}'
```

```
curl -X DELETE http://localhost:8080/randonne/mongo/ca4c2cb3-af62-49d2-97e9-c4abbb8b2974
```

```
curl -X POST http://localhost:8080/randonne/mongo/ -H "Content-Type: application/json" -d '{
  "uuid": "f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e",
  "ra_id": 101,
  "ra_label": "New Test Randonne",
  "ra_gpx": {
    "lon": 40.7128,
    "lat": -74.0060
  },
  "ra_description": "Test description",
  "ra_duree": 120,
  "ra_difficulte": "Easy",
  "ra_denivele": 150,
  "ra_distance": 5.5,
  "ra_boucle": true,
  "po_id": 1,
  "av_id": 1
}'
```

```
curl -X POST http://localhost:8080/randonne/mongo/ -H "Content-Type: application/json" -d '{
  "uuid": "f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e",
  "ra_id": 101,
  "ra_label": "New Test Randonne",
  "ra_gpx": {
    "lon": 40.7128,
    "lat": -74.0060
  },
  "ra_description": "Test description",
  "ra_duree": 120,
  "ra_difficulte": "Easy",
  "ra_denivele": 150,
  "ra_distance": 5.5,
  "ra_boucle": true,
  "po_id": 1,
  "av_id": 1
}'
```

```
curl -X POST http://localhost:8080/randonne/mongo/ \
-H "Content-Type: application/json" \
-d '{
  "uuid": "d3b07384-d9d9-47a5-9f3a-43c5242b3d77",
  "ra_id": 101,
  "ra_label": "New Test Randonne",
  "ra_gpx": {
    "lon": 40.7128,
    "lat": -74.0060
  },
  "ra_description": "Test description",
  "ra_duree": 120,
  "ra_difficulte": "Easy",
  "ra_denivele": 150,
  "ra_distance": 5.5,
  "ra_boucle": true,
  "po_id": 1,
  "av_id": 1
}'
```

```
curl -X POST http://localhost:8080/randonne/mongo/ \
-H "Content-Type: application/json" \
-d '{
  "uuid": "6f62b8d1-4b1b-4f7e-8ae8-8cdbb98f5b2b",
  "ra_id": 101,
  "ra_label": "Last Randonne",
  "ra_gpx": {
    "lon": 40.7128,
    "lat": -74.0060
  },
  "ra_description": "Test description",
  "ra_duree": 120,
  "ra_difficulte": "Easy Too",
  "ra_denivele": 1500,
  "ra_distance": 5.5,
  "ra_boucle": true,
  "po_id": 1,
  "av_id": 1
}'
```

```
curl -X GET http://localhost:8080/avis/mongo/4c972246-d7ad-4140-8935-e22c80e7be
```

```
curl -X DELETE http://localhost:8080/avis/mongo/1fbcf60d-942f-4c9a-887e-598969e6a4
```

```
curl -X POST http://localhost:8080/randonne/mongo/search \
     -H "Content-Type: application/json" \
     -d '{
           "ra_id": 919,
           "ra_label": "Randonne 16",
           "ra_description": "Description of the Randonne",
           "ra_duree": 149,
           "ra_difficulte": "Hard",
           "ra_denivele": 1721,
           "ra_distance": 48.86,
           "ra_boucle": false,
           "po_id": 336,
           "av_id": 52
         }'
```

```
curl -X POST http://localhost:8080/pointInteret/mongo/search \
     -H "Content-Type: application/json" \
     -d '{
           "po_id": 896,
           "po_description": "Description of the Point of Interest",
           "po_lien_photo": "http://example.com/photo.jpg",
           "randonne_uuid": "688618c2-27ce-463a-89a7-9c8f549271df"
         }'
```