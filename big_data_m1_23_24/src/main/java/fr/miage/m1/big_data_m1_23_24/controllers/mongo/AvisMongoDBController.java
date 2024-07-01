package fr.miage.m1.big_data_m1_23_24.controllers.mongo;


import fr.miage.m1.big_data_m1_23_24.entity.Avis;
import fr.miage.m1.big_data_m1_23_24.entity.Rating;
import fr.miage.m1.big_data_m1_23_24.services.AvisService;
import fr.miage.m1.big_data_m1_23_24.services.mongo.AvisMongoDBService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/avis/mongo")
public class AvisMongoDBController {

    @Autowired
    private AvisMongoDBService avisMongoDBService;

    @Autowired
    private AvisService avisService;

    private Avis avis;

    @PostConstruct
    public void init() {
        avis = Avis.builder()
                .uuid(UUID.randomUUID())
                .av_id(1)
                .av_etoile(Rating.FIVE)
                .av_message("Great hike!")
                .build();
        avisService.create(avis);
    }

    @PostMapping("/")
    public Avis createRandonne(@RequestBody Avis avis) {
        return avisMongoDBService.create(avis);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable UUID id) {
        try {
            return ResponseEntity.ok(avisService.get(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Avis: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAvis(@PathVariable UUID id, @RequestBody Avis updatedAvis) {
        Optional<Avis> optionalAvis = avisMongoDBService.get(id);
        if (optionalAvis.isPresent()) {
            updatedAvis.setUuid(id);
            Avis savedAvis = avisMongoDBService.edit(updatedAvis);
            return ResponseEntity.ok(savedAvis);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Avis not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAvis(@PathVariable UUID id) {
        avisMongoDBService.delete(id);
        return ResponseEntity.ok().body("Avis deleted successfully");
    }


    // Benchmarks pour test de performance

    @GetMapping("/benchmark/create")
    public ResponseEntity<Map<String, Double>> benchmarkCreate() {
        List<Long> times = benchmarkOperation(100000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get")
    public ResponseEntity<Map<String, Double>> benchmarkGet() {
        List<Long> times = benchmarkOperation(100000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate() {
        List<Long> times = benchmarkOperation(100000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete")
    public ResponseEntity<Map<String, Double>> benchmarkDelete() {
        List<Long> times = benchmarkOperation(100000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    private List<Long> benchmarkOperation(int count, String operation) {
        List<Long> times = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            long startTime = System.nanoTime();
            switch (operation) {
                case "create":
                    avisService.create(Avis.builder()
                            .uuid(UUID.randomUUID())
                            .av_id(i)
                            .av_etoile(Rating.FIVE)
                            .av_message("Another great hike!")
                            .build());
                    break;
                case "get":
                    avisService.get(avis.getUuid());
                    break;
                case "update":
                    avis.setAv_message("Updated message " + i);
                    avisService.edit(avis);
                    break;
                case "delete":
                    avisService.delete(avis.getUuid());
                    avis = Avis.builder()
                            .uuid(UUID.randomUUID())
                            .av_id(i)
                            .av_etoile(Rating.FIVE)
                            .av_message("Another great hike!")
                            .build();
                    avisService.create(avis);
                    break;
            }
            long endTime = System.nanoTime();
            times.add(endTime - startTime);
        }
        return times;
    }

    private Map<String, Double> getBenchmarkMetrics(List<Long> times) {
        double sum = 0;
        double min = Long.MAX_VALUE;
        double max = Long.MIN_VALUE;

        for (long time : times) {
            sum += time;
            if (time < min) {
                min = time;
            }
            if (time > max) {
                max = time;
            }
        }

        double mean = sum / times.size();
        Map<String, Double> metrics = new HashMap<>();
        metrics.put("mean", mean / 1_000_000.0);  // Convert to milliseconds
        metrics.put("min", min / 1_000_000.0);    // Convert to milliseconds
        metrics.put("max", max / 1_000_000.0);    // Convert to milliseconds
        metrics.put("total", sum / 1_000_000.0);  // Convert to milliseconds

        return metrics;
    }

}
