package fr.miage.m1.big_data_m1_23_24.repositories.redis;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Repository
public class RandonneRedisRepositoryImpl implements RandonneRedisRepositoryCustom {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public List<Randonne> searchRandonneRedis(RandonneSearchCriteria criteria) {
        Set<String> keys = redisTemplate.keys("*");
        List<Randonne> results = new ArrayList<>();

        for (String key : keys) {
            Randonne randonne = (Randonne) redisTemplate.opsForValue().get(key);

            if (randonne != null) {
                boolean matches = true;

                if (criteria.getRa_id() != null && !criteria.getRa_id().equals(randonne.getRa_id())) {
                    matches = false;
                }

                if (criteria.getRa_label() != null && !criteria.getRa_label().isEmpty() &&
                        !randonne.getRa_label().toLowerCase().contains(criteria.getRa_label().toLowerCase())) {
                    matches = false;
                }

                if (criteria.getRa_description() != null && !criteria.getRa_description().isEmpty() &&
                        !randonne.getRa_description().toLowerCase().contains(criteria.getRa_description().toLowerCase())) {
                    matches = false;
                }

                if (criteria.getRa_duree() != null && !criteria.getRa_duree().equals(randonne.getRa_duree())) {
                    matches = false;
                }

                if (criteria.getRa_difficulte() != null && !criteria.getRa_difficulte().isEmpty() &&
                        !randonne.getRa_difficulte().toLowerCase().contains(criteria.getRa_difficulte().toLowerCase())) {
                    matches = false;
                }

                if (criteria.getRa_denivele() != null && !criteria.getRa_denivele().equals(randonne.getRa_denivele())) {
                    matches = false;
                }

                if (criteria.getRa_distance() != null && !criteria.getRa_distance().equals(randonne.getRa_distance())) {
                    matches = false;
                }

                if (criteria.getRa_boucle() != null && !criteria.getRa_boucle().equals(randonne.getRa_boucle())) {
                    matches = false;
                }

                if (criteria.getPo_id() != null && !criteria.getPo_id().equals(randonne.getPo_id())) {
                    matches = false;
                }

                if (criteria.getAv_id() != null && !criteria.getAv_id().equals(randonne.getAv_id())) {
                    matches = false;
                }

                if (matches) {
                    results.add(randonne);
                }
            }
        }

        return results;
    }
}
