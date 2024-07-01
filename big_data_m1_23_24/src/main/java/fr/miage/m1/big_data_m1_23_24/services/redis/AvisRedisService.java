package fr.miage.m1.big_data_m1_23_24.services.redis;

import fr.miage.m1.big_data_m1_23_24.entity.Avis;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.AvisRedisRepository;
import fr.miage.m1.big_data_m1_23_24.services.AvisService;
import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Primary
public class AvisRedisService implements AvisService {

    private AvisRedisRepository avisRedisRepository;

    public AvisRedisService(AvisRedisRepository avisRedisRepository) {
        this.avisRedisRepository = avisRedisRepository;
    }

    @Override
    public Optional<Avis> get(UUID uuid) {
        return avisRedisRepository.findById(uuid);
    }

    @Override
    public List<Avis> getAll() {
        return (List<Avis>) avisRedisRepository.findAll();
    }

    @Override
    public Avis create(Avis avis) {
        return avisRedisRepository.save(avis);
    }

    @Override
    public Avis edit(Avis avis) {
        return avisRedisRepository.save(avis);
    }

    @Override
    public void delete(UUID uuid) {
        avisRedisRepository.deleteById(uuid);
    }


}
