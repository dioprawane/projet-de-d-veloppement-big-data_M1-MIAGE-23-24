package fr.miage.m1.big_data_m1_23_24.entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.Id; // Import Spring Data annotation
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

import java.util.UUID;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder // Lombok
@Document(collection = "pointInteret") // Mongo
@RedisHash("pointInteret") // Redis
public class PointInteret {

    @Id
    @Indexed // Redis index for faster querying
    private UUID uuid;

    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int po_id;

    @Embedded
    private GPS po_gps;

    private String po_description;

    private String po_lien_photo;

    @ManyToOne
    @JoinColumn(name = "ra_id")
    private Randonne randonne;

    public void setPoId(int id) {
        this.po_id = id;
    }

    public String getRandonne_uuid() {
        return uuid.toString();
    }
}

