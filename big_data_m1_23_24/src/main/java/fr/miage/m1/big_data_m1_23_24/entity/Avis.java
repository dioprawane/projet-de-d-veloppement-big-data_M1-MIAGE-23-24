package fr.miage.m1.big_data_m1_23_24.entity;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@Document(collection = "avis") // Mongo
@RedisHash("avis") // Redis
public class Avis {

    @Id
    @Indexed
    private UUID uuid;

    private int av_id;

    @Enumerated(EnumType.STRING)
    private Rating av_etoile;

    private String av_message;

    @ManyToOne
    @JoinColumn(name = "ra_id")
    private Randonne randonne;

    public void setAvId(int id) {
        this.av_id = id;
    }

    public String getRandonne_uuid() {
        return uuid.toString();
    }
}

