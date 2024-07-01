package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.Avis;
import fr.miage.m1.big_data_m1_23_24.repositories.AvisRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface AvisMongoDBRepository extends MongoRepository<Avis, UUID>, AvisRepository {

}
