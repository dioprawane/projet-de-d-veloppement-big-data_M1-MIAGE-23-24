package fr.miage.m1.big_data_m1_23_24.repositories.redis;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Repository
public class PointInteretRedisRepositoryImpl implements PointInteretRedisRepositoryCustom {

    @Autowired
    private RedisTemplate<String, Object> redisTemplate;

    @Override
    public List<PointInteret> searchPointInteretRedis(PointInteretSearchCriteria criteria) {
        Set<String> keys = redisTemplate.keys("*");
        List<PointInteret> results = new ArrayList<>();

        for (String key : keys) {
            PointInteret pointInteret = (PointInteret) redisTemplate.opsForValue().get(key);

            if (pointInteret != null) {
                boolean matches = true;

                if (criteria.getPo_id() != null && !criteria.getPo_id().equals(pointInteret.getPo_id())) {
                    matches = false;
                }

                if (criteria.getPo_description() != null && !criteria.getPo_description().isEmpty() &&
                        !pointInteret.getPo_description().toLowerCase().contains(criteria.getPo_description().toLowerCase())) {
                    matches = false;
                }

                if (criteria.getPo_lien_photo() != null && !criteria.getPo_lien_photo().isEmpty() &&
                        !pointInteret.getPo_lien_photo().toLowerCase().contains(criteria.getPo_lien_photo().toLowerCase())) {
                    matches = false;
                }

                if (criteria.getRandonne_uuid() != null && !criteria.getRandonne_uuid().equals(UUID.fromString(pointInteret.getRandonne_uuid()))) {
                    matches = false;
                }

                if (matches) {
                    results.add(pointInteret);
                }
            }
        }

        return results;
    }

}
