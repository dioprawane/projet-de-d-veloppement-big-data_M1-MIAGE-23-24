package fr.miage.m1.big_data_m1_23_24.services.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.PointInteretMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.repositories.mongo.RandonneMongoDBRepository;
import fr.miage.m1.big_data_m1_23_24.services.RandonneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class RandonneMongoDBService implements RandonneService {

    @Autowired
    private RandonneMongoDBRepository randonneMongoDBRepository;

    @Autowired
    private PointInteretMongoDBRepository pointInteretMongoDBRepository;

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public Optional<Randonne> get(UUID uuid) {
        return randonneMongoDBRepository.findById(uuid);
    }


    @Override
    public List<Randonne> getAll() {
        return randonneMongoDBRepository.findAll();
    }

    @Override
    public Randonne create(Randonne randonne) {
        return randonneMongoDBRepository.save(randonne);
    }

    @Override
    public Randonne edit(Randonne randonne) {
        return randonneMongoDBRepository.save(randonne);
    }

    @Override
    public void delete(UUID uuid) {
        randonneMongoDBRepository.deleteById(uuid);
    }

    @Override
    public List<Randonne> search(RandonneSearchCriteria criteria) {
        return randonneMongoDBRepository.searchRandonne(criteria);
    }

    @Override
    public List<Map<String, Object>> findRandonneWithPointInteret() {
        Aggregation aggregation = Aggregation.newAggregation(
                Aggregation.lookup("pointInteret", "ra_id", "ra_id", "pointInteretDetails"),
                Aggregation.unwind("pointInteretDetails", true)
        );

        AggregationResults<Randonne> results = mongoTemplate.aggregate(aggregation, "randonne", Randonne.class);
        List<Randonne> randonnes = results.getMappedResults();
        List<PointInteret> pointInterets = pointInteretMongoDBRepository.findAll();

        return randonnes.stream().map(r -> {
            Map<String, Object> map = new HashMap<>();
            map.put("randonne", r);
            map.put("pointInteretDetails", pointInterets.stream().filter(p -> p.getPo_id() == r.getPo_id()).collect(Collectors.toList()));
            return map;
        }).collect(Collectors.toList());
    }

}
