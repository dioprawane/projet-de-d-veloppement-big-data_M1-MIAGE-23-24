package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.repositories.RandonneRepository;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.UUID;

public interface RandonneMongoDBRepository extends MongoRepository<Randonne, UUID>, RandonneRepository, RandonneMongoDBRepositoryCustom {
}
