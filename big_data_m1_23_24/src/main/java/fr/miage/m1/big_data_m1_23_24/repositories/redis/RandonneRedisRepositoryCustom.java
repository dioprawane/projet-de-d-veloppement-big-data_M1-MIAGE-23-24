package fr.miage.m1.big_data_m1_23_24.repositories.redis;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;

import java.util.List;

public interface RandonneRedisRepositoryCustom {
    List<Randonne> searchRandonneRedis(RandonneSearchCriteria criteria);
}
