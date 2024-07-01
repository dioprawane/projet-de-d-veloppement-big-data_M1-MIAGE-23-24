package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.ArrayList;
import java.util.List;

public class RandonneMongoDBRepositoryImpl implements RandonneMongoDBRepositoryCustom {

    @Autowired
    private MongoTemplate mongoTemplate;

    @Override
    public List<Randonne> searchRandonne(RandonneSearchCriteria criteria) {
        List<Criteria> criteriaList = new ArrayList<>();

        if (criteria.getRa_id() != null) {
            criteriaList.add(Criteria.where("ra_id").is(criteria.getRa_id()));
        }

        if (criteria.getRa_label() != null && !criteria.getRa_label().isEmpty()) {
            criteriaList.add(Criteria.where("ra_label").regex(criteria.getRa_label(), "i"));
        }

        if (criteria.getRa_description() != null && !criteria.getRa_description().isEmpty()) {
            criteriaList.add(Criteria.where("ra_description").regex(criteria.getRa_description(), "i"));
        }

        if (criteria.getRa_duree() != null) {
            criteriaList.add(Criteria.where("ra_duree").is(criteria.getRa_duree()));
        }

        if (criteria.getRa_difficulte() != null && !criteria.getRa_difficulte().isEmpty()) {
            criteriaList.add(Criteria.where("ra_difficulte").regex(criteria.getRa_difficulte(), "i"));
        }

        if (criteria.getRa_denivele() != null) {
            criteriaList.add(Criteria.where("ra_denivele").is(criteria.getRa_denivele()));
        }

        if (criteria.getRa_distance() != null) {
            criteriaList.add(Criteria.where("ra_distance").is(criteria.getRa_distance()));
        }

        if (criteria.getRa_boucle() != null) {
            criteriaList.add(Criteria.where("ra_boucle").is(criteria.getRa_boucle()));
        }

        if (criteria.getPo_id() != null) {
            criteriaList.add(Criteria.where("po_id").is(criteria.getPo_id()));
        }

        if (criteria.getAv_id() != null) {
            criteriaList.add(Criteria.where("av_id").is(criteria.getAv_id()));
        }

        Query query = new Query();
        if (!criteriaList.isEmpty()) {
            query.addCriteria(new Criteria().andOperator(criteriaList.toArray(new Criteria[0])));
        }

        return mongoTemplate.find(query, Randonne.class);
    }

}
