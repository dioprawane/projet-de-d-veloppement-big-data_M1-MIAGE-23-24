package fr.miage.m1.big_data_m1_23_24.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
public class PointInteretSearchCriteria {

    private Integer po_id;
    private String po_description;
    private String po_lien_photo;
    private UUID randonne_uuid;

}
