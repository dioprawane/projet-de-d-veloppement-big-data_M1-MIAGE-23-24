package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.repositories.PointInteretRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface PointInteretMongoDBRepository extends MongoRepository<PointInteret, UUID>,  PointInteretRepository, PointInteretMongoDBRepositoryCustom {
}
