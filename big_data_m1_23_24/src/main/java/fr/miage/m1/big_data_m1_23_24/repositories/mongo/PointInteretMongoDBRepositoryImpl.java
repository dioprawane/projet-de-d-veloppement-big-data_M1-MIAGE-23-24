package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

public class PointInteretMongoDBRepositoryImpl implements PointInteretMongoDBRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<PointInteret> searchPointInteret(PointInteretSearchCriteria criteria) {
        List<Criteria> criteriaList = new ArrayList<>();

        if (criteria.getPo_id() != null) {
            criteriaList.add(Criteria.where("po_id").is(criteria.getPo_id()));
        }

        if (criteria.getPo_description() != null && !criteria.getPo_description().isEmpty()) {
            criteriaList.add(Criteria.where("po_description").regex(criteria.getPo_description(), "i"));
        }

        if (criteria.getPo_lien_photo() != null && !criteria.getPo_lien_photo().isEmpty()) {
            criteriaList.add(Criteria.where("po_lien_photo").regex(criteria.getPo_lien_photo(), "i"));
        }

        if (criteria.getRandonne_uuid() != null) {
            criteriaList.add(Criteria.where("randonne.uuid").is(criteria.getRandonne_uuid()));
        }

        Query query = new Query();
        if (!criteriaList.isEmpty()) {
            query.addCriteria(new Criteria().andOperator(criteriaList.toArray(new Criteria[0])));
        }

        return mongoTemplate.find(query, PointInteret.class);
    }
}
