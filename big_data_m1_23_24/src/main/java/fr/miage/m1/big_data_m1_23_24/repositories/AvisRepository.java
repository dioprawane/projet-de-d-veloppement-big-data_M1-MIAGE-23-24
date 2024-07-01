package fr.miage.m1.big_data_m1_23_24.repositories;

import fr.miage.m1.big_data_m1_23_24.entity.Avis;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvisRepository {

    public List<Avis> findAll();

}
