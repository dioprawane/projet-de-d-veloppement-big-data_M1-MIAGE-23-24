package fr.miage.m1.big_data_m1_23_24.repositories.redis;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.repositories.PointInteretRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PointInteretRedisRepository extends CrudRepository<PointInteret, UUID>, PointInteretRepository, PointInteretRedisRepositoryCustom {
}
