package fr.miage.m1.big_data_m1_23_24.controllers.redis;

import fr.miage.m1.big_data_m1_23_24.entity.PointInteret;
import fr.miage.m1.big_data_m1_23_24.entity.PointInteretSearchCriteria;
import fr.miage.m1.big_data_m1_23_24.repositories.redis.PointInteretRedisRepository;
import fr.miage.m1.big_data_m1_23_24.services.PointInteretService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/pointInteret/redis")
public class PointInteretRedisController {

    @Autowired
    private PointInteretRedisRepository pointInteretRedisRepository;

    @Autowired
    private PointInteretService pointInteretService;

    private PointInteret pointInteret;

    @PostConstruct
    public void init() {
        pointInteret = PointInteret.builder()
                .uuid(UUID.randomUUID())
                .po_id(1)
                .po_description("Sample Point Interet")
                .po_lien_photo("http://example.com/photo.jpg")
                .build();
        pointInteretService.create(pointInteret);
    }

    @PostMapping("/")
    public PointInteret createRandonne(@RequestBody PointInteret randonne) {
        return pointInteretRedisRepository.save(randonne);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable UUID id) {
        try {
            return ResponseEntity.ok(pointInteretService.get(id));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving PointInteret: " + e.getMessage());
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updatePointInteret(@PathVariable UUID id, @RequestBody PointInteret updatedPointInteret) {
        Optional<PointInteret> optionalPointInteret = pointInteretService.get(id);
        if (optionalPointInteret.isPresent()) {
            updatedPointInteret.setUuid(id);
            return ResponseEntity.ok(pointInteretService.edit(updatedPointInteret));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("PointInteret not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deletePointInteret(@PathVariable UUID id) {
        pointInteretService.delete(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/search")
    public ResponseEntity<List<PointInteret>> searchPointInteret(@RequestBody PointInteretSearchCriteria criteria) {
        List<PointInteret> results = pointInteretService.search(criteria);
        return ResponseEntity.ok(results);
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

    @GetMapping("/benchmark/search")
    public ResponseEntity<Map<String, Double>> benchmarkSearch() {
        List<Long> times = benchmarkOperation(100000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    private List<Long> benchmarkOperation(int count, String operation) {
        List<Long> times = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            long startTime = System.nanoTime();
            switch (operation) {
                case "create":
                    pointInteretService.create(PointInteret.builder()
                            .uuid(UUID.randomUUID())
                            .po_id(i)
                            .po_description("Point Interet " + i)
                            .po_lien_photo("http://example.com/photo" + i + ".jpg")
                            .build());
                    break;
                case "get":
                    pointInteretService.get(pointInteret.getUuid());
                    break;
                case "update":
                    pointInteret.setPo_description("Updated description " + i);
                    pointInteretService.edit(pointInteret);
                    break;
                case "delete":
                    pointInteretService.delete(pointInteret.getUuid());
                    pointInteret = PointInteret.builder()
                            .uuid(UUID.randomUUID())
                            .po_id(i)
                            .po_description("Point Interet " + i)
                            .po_lien_photo("http://example.com/photo" + i + ".jpg")
                            .build();
                    pointInteretService.create(pointInteret);
                    break;
                case "search":
                    PointInteretSearchCriteria criteria = new PointInteretSearchCriteria();
                    criteria.setPo_description("Point Interet " + i);
                    pointInteretService.search(criteria);
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
