package fr.miage.m1.big_data_m1_23_24.services.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.PointInteretMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.services.PointInteretService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class PointInteretMongoDBService implements PointInteretService {

    @Autowired
    private PointInteretMongoDBRepository pointInteretMongoDBRepository;

    @Override
    public Optional<PointInteret> get(UUID uuid) {
        return pointInteretMongoDBRepository.findById(uuid);
    }

    @Override
    public List<PointInteret> getAll() {
        return pointInteretMongoDBRepository.findAll();
    }

    @Override
    public PointInteret create(PointInteret pointInteret) {
        return pointInteretMongoDBRepository.save(pointInteret);
    }

    @Override
    public PointInteret edit(PointInteret pointInteret) {
        return pointInteretMongoDBRepository.save(pointInteret);
    }

    @Override
    public void delete(UUID uuid) {
        pointInteretMongoDBRepository.deleteById(uuid);
    }

    @Override
    public List<PointInteret> search(PointInteretSearchCriteria criteria) {
        return pointInteretMongoDBRepository.searchPointInteret(criteria);
    }

}
