package fr.miage.m1.big_data_m1_23_24.entity;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class RandonneSearchCriteria {

    private Integer ra_id;
    private String ra_label;
    private String ra_description;
    private Integer ra_duree;
    private String ra_difficulte;
    private Integer ra_denivele;
    private Double ra_distance;
    private Boolean ra_boucle;
    private Integer po_id;
    private Integer av_id;

}
