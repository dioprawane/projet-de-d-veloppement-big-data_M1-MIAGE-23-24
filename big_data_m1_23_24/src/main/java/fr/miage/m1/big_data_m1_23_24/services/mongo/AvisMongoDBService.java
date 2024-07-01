package fr.miage.m1.big_data_m1_23_24.services.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.Avis;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.AvisMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.services.AvisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AvisMongoDBService implements AvisService {

    //@Autowired
    private AvisMongoDBRepository avisMongoDBRepository;

    @Autowired
    public AvisMongoDBService(AvisMongoDBRepository avisMongoDBRepository) {
        this.avisMongoDBRepository = avisMongoDBRepository;
    }

    @Override
    public Optional<Avis> get(UUID uuid) {
        return avisMongoDBRepository.findById(uuid);
    }

    @Override
    public List<Avis> getAll() {
        return avisMongoDBRepository.findAll();
    }

    @Override
    public Avis create(Avis avis) {
        return avisMongoDBRepository.save(avis);
    }

    @Override
    public Avis edit(Avis avis) {
        return avisMongoDBRepository.save(avis);
    }

    @Override
    public void delete(UUID uuid) {
        avisMongoDBRepository.deleteById(uuid);
    }

}
