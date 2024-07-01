package fr.miage.m1.big_data_m1_23_24.services;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

public interface RandonneService {

    public List<Randonne> getAll();

    Optional<Randonne> get(UUID uuid);

    public Randonne create(Randonne randonne);

    public Randonne edit(Randonne randonne);

    void delete(UUID uuid);

    List<Randonne> search(RandonneSearchCriteria criteria);

    List<Map<String, Object>> findRandonneWithPointInteret();


}
