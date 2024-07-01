package fr.miage.m1.big_data_m1_23_24.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder // Lombok
@Document(collection = "randonne") //Mongo
@RedisHash("randonne") // Redis
public class Randonne {

    @Id
    @Indexed
    private UUID uuid;

    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int ra_id;

    private String ra_label;

    @Embedded
    private GPS ra_gpx;

    private String ra_description;

    private int ra_duree;

    private String ra_difficulte;

    private int ra_denivele;

    private double ra_distance;

    private boolean ra_boucle;

    private int po_id;

    private int av_id;

    // getters et setters
    public UUID getUuid() {
        return uuid;
    }

    public void setUuid(UUID uuid) {
        this.uuid = uuid;
    }

    public void setid(int id) {
        this.ra_id = id;
    }

    public int getRa_id() {
        return ra_id;
    }

    @Override
    public String toString() {
        return "Randonne{" +
                "uuid=" + uuid +
                ", ra_id=" + ra_id +
                ", ra_label='" + ra_label + '\'' +
                ", ra_gpx=" + ra_gpx +
                ", ra_description='" + ra_description + '\'' +
                ", ra_duree=" + ra_duree +
                ", ra_difficulte='" + ra_difficulte + '\'' +
                ", ra_denivele=" + ra_denivele +
                ", ra_distance=" + ra_distance +
                ", ra_boucle=" + ra_boucle +
                ", po_id=" + po_id +
                ", av_id=" + av_id +
                '}';
    }

    public Boolean getRa_boucle() {
        return ra_boucle;
    }
}

