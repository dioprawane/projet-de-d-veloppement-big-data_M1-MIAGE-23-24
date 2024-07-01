package fr.miage.m1.big_data_m1_23_24;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import fr.miage.m1.big_data_m1_23_24.entity.*;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.AvisMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.PointInteretMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.RandonneMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.AvisRedisRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.PointInteretRedisRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.RandonneRedisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.List;
import java.util.UUID;


@SpringBootApplication
@EnableMongoRepositories(basePackages = "fr.miage.m1.big_data_m1_23_24.repositories.mongo") // Pour dire où se trouve les repositories mongo
@EnableRedisRepositories(basePackages = "fr.miage.m1.big_data_m1_23_24.repositories.redis") // Pour dire où se trouve les repositories redis
public class BigDataM12324Application {

	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Autowired
	private StringRedisTemplate template;
	private RandonneMongoDBRepository randonneMongoDBRepository;

	public static void main(String[] args) {
		SpringApplication.run(BigDataM12324Application.class, args);
	}

	@Bean
	CommandLineRunner commandLineRunner(PointInteretMongoDBRepository pointInteretMongoDBRepository,
										PointInteretRedisRepository pointInteretRedisRepository,
										AvisMongoDBRepository avisMongoDBRepository,
										AvisRedisRepository avisRedisRepository,
										RandonneMongoDBRepository randonneMongoDBRepository,
										RandonneRedisRepository randonneRedisRepository) {
		return args -> {
			// Create a new PointInteret
			/*PointInteret pointInteret = PointInteret.builder()
					.uuid(UUID.randomUUID())
					.po_id((int)(Math.random()*100))
					.po_description("Bis Description du point d'intérêt")
					.po_lien_photo("http://example.com/photo.jpg")
					.po_gps(new GPS(75, 9))
					.build();

			// Create a new Randonne
			Randonne randonne = Randonne.builder()
					.uuid(UUID.randomUUID())
					.ra_id((int) (Math.random() * 100))
					.ra_label("Random Label")
					.ra_gpx(new GPS(40.7128, -74.0060))
					.ra_description("Random description")
					.ra_duree(120)
					.ra_difficulte("Medium")
					.ra_denivele(200)
					.ra_distance(10.5)
					.ra_boucle(true)
					.po_id(pointInteret.getPo_id())
					.build();

			// Create a new Avis
			/*Avis avis = Avis.builder()
					.uuid(UUID.randomUUID())
					.av_id((int) (Math.random() * 100))
					.av_etoile(Rating.FIVE)
					.av_message("Great!")
					.randonne(null)
					.build();
			 */

			if (randonneMongoDBRepository.count() > 99999 && avisMongoDBRepository.count() > 99999 && pointInteretMongoDBRepository.count() > 99999) {
				System.out.println("Data already exists in MongoDB and Redis. Skipping data load.");
				return;
			}

			ObjectMapper objectMapper = new ObjectMapper();
			File file = new File("big_data_m1_23_24/src/main/resources/scripts/randonnes100000Donnees.json");
			File avisFile = new File("big_data_m1_23_24/src/main/resources/scripts/avis100000Donnees.json");
			File pointFile = new File("big_data_m1_23_24/src/main/resources/scripts/point_interets100000Donnees.json");

			try {
				// Lire le fichier JSON et convertir en liste d'objets Randonne
				List<Randonne> randonnes = objectMapper.readValue(file, new TypeReference<List<Randonne>>() {
				});
				List<Avis> avisList = objectMapper.readValue(avisFile, new TypeReference<List<Avis>>() {
				});
				List<PointInteret> pointList = objectMapper.readValue(pointFile, new TypeReference<List<PointInteret>>() {
				});

				// Enregistrer chaque Randonne dans MongoDB et Redis
				for (Randonne randonne : randonnes) {
					randonneMongoDBRepository.save(randonne);
					randonneRedisRepository.save(randonne);
				}

				// Enregistrer chaque Avis dans MongoDB et Redis
				for (Avis avis : avisList) {
					avisMongoDBRepository.save(avis);
					avisRedisRepository.save(avis);
				}

				// Enregistrer chaque Point Interet dans MongoDB et Redis
				for (PointInteret pt : pointList) {
					pointInteretMongoDBRepository.save(pt);
					pointInteretRedisRepository.save(pt);
				}

				System.out.println("Successfully saved all Point Interet, Randonne and Avis entries to MongoDB and Redis.");
			} catch (FileNotFoundException e) {
				System.err.println("File not found: " + file.getAbsolutePath());
			} catch (Exception e) {
				System.err.println("An error occurred while processing the file: " + e.getMessage());
			}

			// Save entities through Redis and MongoDB repositories
			/*pointInteretMongoDBRepository.save(pointInteret);
			pointInteretRedisRepository.save(pointInteret);
			randonneMongoDBRepository.save(randonne);
			randonneRedisRepository.save(randonne);
			avisMongoDBRepository.save(avis);
			avisRedisRepository.save(avis);*/


			// Fetch all points interets, randonnees, and avis from Redis and MongoDB repositories
			/*System.out.println(pointInteretMongoDBRepository.findAll());
			System.out.println(pointInteretRedisRepository.findAll());
			System.out.println(randonneMongoDBRepository.findAll());
			System.out.println(randonneRedisRepository.findAll());
			System.out.println(avisMongoDBRepository.findAll());
			System.out.println(avisRedisRepository.findAll());*/
			/*System.out.println("MongoDB Randonne Entries: " + randonneMongoDBRepository.findAll());
			System.out.println("Redis Randonne Entries: " + randonneRedisRepository.findAll());
			System.out.println("MongoDB Avis Entries: " + avisMongoDBRepository.findAll());
			System.out.println("Redis Avis Entries: " + avisRedisRepository.findAll());
			System.out.println("MongoDB Point Interet Entries: " + pointInteretMongoDBRepository.findAll());
			System.out.println("Redis Point Interet Entries: " + pointInteretRedisRepository.findAll());

			 */

		};
	}

	@Bean
	CommandLineRunner start() {
		return args -> {
			String originalValue = "value";
			template.opsForValue().set("key", originalValue);
			String returnedValue = template.opsForValue().get("key");

			if (originalValue.equals(returnedValue)) {
				System.out.println("Redis is working correctly");
			} else {
				System.out.println("There seems to be a problem with Redis");
			}

		};
	}

	@Bean
	CommandLineRunner startMongo(PointInteretMongoDBRepository pointInteretMongoDBRepository) {
		return args -> {
			try {
				long count = pointInteretMongoDBRepository.count();
				System.out.println("MongoDB is working correctly. Number of documents in PointInteret collection: " + count);
			} catch (Exception e) {
				System.out.println("There seems to be a problem with MongoDB: " + e.getMessage());
			}
		};
	}

	@Bean
	CommandLineRunner testGetRequest() {
		return args -> {
			// UUID of the Randonne to test
			UUID uuidToTest = UUID.fromString("ca4c2cb3-af62-49d2-97e9-c4abbb8b2974"); // Remplacez par un uuid valide existant

			// Use RestTemplate to send a GET request
			RestTemplate restTemplate = new RestTemplate();
			String baseUrl = "http://localhost:8080/randonne/mongo/" + uuidToTest;

			try {
				Randonne randonne = restTemplate.getForObject(baseUrl, Randonne.class);
				if (randonne != null) {
					System.out.println("Retrieved Randonne: " + randonne.toString());
				} else {
					System.out.println("Randonne not found");
				}
			} catch (Exception e) {
				System.err.println("Error retrieving Randonne: " + e.getMessage());
			}
		};
	}

	@Bean
	CommandLineRunner testCreateEditDeleteRequest() {
		return args -> {
			RestTemplate restTemplate = new RestTemplate();
			String baseUrl = "http://localhost:8080/randonne/mongo/";

			// Créer une nouvelle randonnée avec un UUID valide
			Randonne newRandonne = Randonne.builder()
					.uuid(UUID.fromString("e4a1c660-75c6-453e-8e02-b3d2f4edc23a"))
					.ra_id((int) (Math.random() * 100))
					.ra_label("Test Label")
					.ra_gpx(new GPS(40.7128, -74.0060))
					.ra_description("Test description")
					.ra_duree(120)
					.ra_difficulte("Easy")
					.ra_denivele(150)
					.ra_distance(5.5)
					.ra_boucle(true)
					.po_id(1)
					.av_id(1)
					.build();

			// Délai pour permettre au serveur de démarrer complètement
			Thread.sleep(5000);

			// Envoi de la requête POST pour créer la randonnée
			ResponseEntity<Randonne> createResponse = restTemplate.postForEntity(baseUrl, newRandonne, Randonne.class);
			if (createResponse.getStatusCode().is2xxSuccessful()) {
				Randonne createdRandonne = createResponse.getBody();
				if (createdRandonne != null) {
					System.out.println("Created Randonne: " + createdRandonne.toString());

					// Mettre à jour la randonnée créée
					createdRandonne.setRa_label("Updated Label");
					restTemplate.put(baseUrl + createdRandonne.getUuid(), createdRandonne);
					System.out.println("Updated Randonne: " + createdRandonne.toString());

					// UUID de la randonnée à supprimer
					UUID uuidToDelete = UUID.fromString("f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e"); // Remplacez par un UUID valide existant

					// Supprimer une randonnée spécifique
					restTemplate.delete(baseUrl + uuidToDelete);
					System.out.println("Deleted Randonne with UUID: " + uuidToDelete);
				}
			} else {
				System.out.println("Failed to create Randonne: " + createResponse.getStatusCode());
			}
		};
	}

	@Bean
	CommandLineRunner testCreateEditDeleteRequestAvisRedis() {
		return args -> {
			RestTemplate restTemplate = new RestTemplate();
			String baseUrl = "http://localhost:8080/avis/redis/";

			// Create a new Avis with a valid UUID
			Avis newAvis = Avis.builder()
					.uuid(UUID.fromString("e4a1c660-75c6-453e-8e02-b3d2f4edc23a"))
					.av_id((int) (Math.random() * 100))
					.av_etoile(Rating.FIVE)
					.av_message("Great hike!")
					.build();

			// Delay to allow the server to fully start
			Thread.sleep(5000);

			// Send the POST request to create the Avis
			ResponseEntity<Avis> createResponse = restTemplate.postForEntity(baseUrl, newAvis, Avis.class);
			if (createResponse.getStatusCode().is2xxSuccessful()) {
				Avis createdAvis = createResponse.getBody();
				if (createdAvis != null) {
					System.out.println("Created Avis: " + createdAvis.toString());

					// Update the created Avis
					createdAvis.setAv_message("Updated message");
					restTemplate.put(baseUrl + createdAvis.getUuid(), createdAvis);
					System.out.println("Updated Avis: " + createdAvis.toString());

					// UUID of the Avis to delete
					UUID uuidToDelete = UUID.fromString("f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e"); // Replace with an existing valid UUID

					// Delete a specific Avis
					restTemplate.delete(baseUrl + uuidToDelete);
					System.out.println("Deleted Avis with UUID: " + uuidToDelete);
				}
			} else {
				System.out.println("Failed to create Avis: " + createResponse.getStatusCode());
			}
		};
	}

	@Bean
	CommandLineRunner startRedis(PointInteretRedisRepository pointInteretRedisRepository) {
		return args -> {
			try {
				long count = pointInteretRedisRepository.count();
				System.out.println("Redis is working correctly. Number of documents in PointInteret collection: " + count);
			} catch (Exception e) {
				System.out.println("There seems to be a problem with Redis: " + e.getMessage());
			}
		};
	}

	@Bean
	CommandLineRunner testCreateEditDeleteRequestRedis(RandonneRedisRepository randonneRedisRepository) {
		return args -> {
			RestTemplate restTemplate = new RestTemplate();
			String baseUrl = "http://localhost:8080/randonne/redis/";

			// Create a new Randonne with a valid UUID
			Randonne newRandonne = Randonne.builder()
					.uuid(UUID.fromString("e4a1c660-75c6-453e-8e02-b3d2f4edc23a"))
					.ra_id((int) (Math.random() * 100))
					.ra_label("Test Label")
					.ra_gpx(new GPS(40.7128, -74.0060))
					.ra_description("Test description")
					.ra_duree(120)
					.ra_difficulte("Easy")
					.ra_denivele(150)
					.ra_distance(5.5)
					.ra_boucle(true)
					.po_id(1)
					.av_id(1)
					.build();

			// Delay to allow the server to fully start
			Thread.sleep(5000);

			// Send the POST request to create the Randonne
			ResponseEntity<Randonne> createResponse = restTemplate.postForEntity(baseUrl, newRandonne, Randonne.class);
			if (createResponse.getStatusCode().is2xxSuccessful()) {
				Randonne createdRandonne = createResponse.getBody();
				if (createdRandonne != null) {
					System.out.println("Created Randonne: " + createdRandonne.toString());

					// Update the created Randonne
					createdRandonne.setRa_label("Updated Label");
					restTemplate.put(baseUrl + createdRandonne.getUuid(), createdRandonne);
					System.out.println("Updated Randonne: " + createdRandonne.toString());

					// UUID of the Randonne to delete
					UUID uuidToDelete = UUID.fromString("f91bbdb5-2335-4f0f-8c5c-4d5cb5e6b98e"); // Replace with an existing valid UUID

					// Delete a specific Randonne
					restTemplate.delete(baseUrl + uuidToDelete);
					System.out.println("Deleted Randonne with UUID: " + uuidToDelete);
				}
			} else {
				System.out.println("Failed to create Randonne: " + createResponse.getStatusCode());
			}
		};
	}

}