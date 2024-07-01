package fr.miage.m1.big_data_m1_23_24.services.redis;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.PointInteretRedisRepository;
import fr.miage.m1.big_data_m1_23_24.services.PointInteretService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public class PointInteretRedisService implements PointInteretService {

    @Autowired
    private PointInteretRedisRepository pointInteretRedisRepository;

    @Override
    public Optional<PointInteret> get(UUID uuid) {
        return pointInteretRedisRepository.findById(uuid);
    }

    @Override
    public List<PointInteret> getAll() {
        return (List<PointInteret>) pointInteretRedisRepository.findAll();
    }

    @Override
    public PointInteret create(PointInteret pointInteret) {
        return pointInteretRedisRepository.save(pointInteret);
    }

    @Override
    public PointInteret edit(PointInteret pointInteret) {
        return pointInteretRedisRepository.save(pointInteret);
    }

    @Override
    public void delete(UUID uuid) {
        pointInteretRedisRepository.deleteById(uuid);
    }


    @Override
    public List<PointInteret> search(PointInteretSearchCriteria criteria) {
        return pointInteretRedisRepository.searchPointInteretRedis(criteria);
    }


}
