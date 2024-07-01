package fr.miage.m1.big_data_m1_23_24.services;



import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface PointInteretService {

    public List<PointInteret> getAll();

    Optional<PointInteret> get(UUID uuid);

    public PointInteret create(PointInteret pointInteret);

    public PointInteret edit(PointInteret pointInteret);

    void delete(UUID uuid);

    List<PointInteret> search(PointInteretSearchCriteria criteria);

}
