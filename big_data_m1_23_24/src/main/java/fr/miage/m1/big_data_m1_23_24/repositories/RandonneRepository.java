package fr.miage.m1.big_data_m1_23_24.repositories;


import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RandonneRepository {

    public List<Randonne> findAll();

}
