package fr.miage.m1.big_data_m1_23_24.services;

import fr.miage.m1.big_data_m1_23_24.entity.Avis;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface AvisService {

    public List<Avis> getAll();

    Optional<Avis> get(UUID uuid);

    public Avis create(Avis avis);

    public Avis edit(Avis avis);

    void delete(UUID uuid);

}
