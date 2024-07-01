package fr.miage.m1.big_data_m1_23_24.repositories;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PointInteretRepository {

    // Definition of a common method to find all players, implemented in PointInteretRedisRepository, PointInteretMongoDBRepository through Spring Data
    // Only possible for methods that are common to MongoDb and Redis repositories
    public List<PointInteret> findAll();

}
