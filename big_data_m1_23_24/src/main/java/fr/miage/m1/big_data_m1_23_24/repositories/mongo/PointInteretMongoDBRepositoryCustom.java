package fr.miage.m1.big_data_m1_23_24.repositories.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;

import java.util.List;

public interface PointInteretMongoDBRepositoryCustom {
    List<PointInteret> searchPointInteret(PointInteretSearchCriteria criteria);
}
