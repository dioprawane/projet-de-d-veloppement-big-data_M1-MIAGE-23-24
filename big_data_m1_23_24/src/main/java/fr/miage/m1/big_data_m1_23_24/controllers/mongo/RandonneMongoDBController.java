package fr.miage.m1.big_data_m1_23_24.controllers.mongo;

import fr.miage.m1.big_data_m1_23_24.entity.Randonne;
import fr.miage.m1.big_data_m1_23_24.entity.RandonneSearchCriteria;
import fr.miage.m1.big_data_m1_23_24.services.RandonneService;
import fr.miage.m1.big_data_m1_23_24.services.mongo.RandonneMongoDBService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.*;

@RestController
@RequestMapping("/randonne/mongo")
public class RandonneMongoDBController {

    private static final Logger logger = LoggerFactory.getLogger(RandonneMongoDBController.class);

    @Autowired
    private RandonneMongoDBService randonneMongoDBService;

    @Autowired
    private RandonneService randonneService;

    private Randonne randonne;

    @PostConstruct
    public void init() {
        randonne = Randonne.builder()
                .uuid(UUID.randomUUID())
                .ra_id(1)
                .ra_label("Sample Randonne")
                .ra_description("This is a sample description")
                .ra_duree(120)
                .ra_difficulte("Medium")
                .ra_denivele(500)
                .ra_distance(10.5)
                .ra_boucle(true)
                .po_id(1)
                .av_id(1)
                .build();
        randonneService.create(randonne);
    }

    @PostMapping("/")
    public Randonne createRandonne(@RequestBody Randonne randonne) {
        return randonneMongoDBService.create(randonne);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable UUID id) {
        long startTime = System.currentTimeMillis();
        try {
            Optional<Randonne> randonneOptional = randonneService.get(id);
            if (randonneOptional.isPresent()) {
                long duration = System.currentTimeMillis() - startTime;
                logger.info("getById - Duration: {} ms", duration);
                return ResponseEntity.ok(randonneOptional.get());
            } else {
                long duration = System.currentTimeMillis() - startTime;
                logger.warn("getById - Duration: {} ms, Randonne not found", duration);
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Randonne not found");
            }
        } catch (Exception e) {
            long duration = System.currentTimeMillis() - startTime;
            logger.error("getById - Duration: {} ms", duration, e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error retrieving Randonne: " + e.getMessage());
        }
    }


    @PutMapping("/{id}")
    public ResponseEntity<?> updateRandonne(@PathVariable UUID id, @RequestBody Randonne updatedRandonne) {
        Optional<Randonne> optionalRandonne = randonneMongoDBService.get(id);
        if (optionalRandonne.isPresent()) {
            updatedRandonne.setUuid(id);
            Randonne savedRandonne = randonneMongoDBService.edit(updatedRandonne);
            return ResponseEntity.ok(savedRandonne);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Randonne not found");
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteRandonne(@PathVariable UUID id) {
        randonneMongoDBService.delete(id);
        return ResponseEntity.ok().body("Randonne deleted successfully");
    }

    /*@PostMapping("/search")
    public ResponseEntity<List<Randonne>> searchRandonne(@RequestBody RandonneSearchCriteria criteria) {
        List<Randonne> results = randonneService.search(criteria);
        return ResponseEntity.ok(results);
    }*/

    @PostMapping("/search")
    public ResponseEntity<List<Randonne>> searchRandonne(@RequestBody RandonneSearchCriteria criteria) {
        long startTime = System.currentTimeMillis();
        List<Randonne> results = randonneService.search(criteria);
        long duration = System.currentTimeMillis() - startTime;
        logger.info("searchRandonne - Duration: {} ms", duration);
        return ResponseEntity.ok(results);
    }

    @GetMapping("/join")
    public ResponseEntity<?> getRandonneWithPointInteret() {
        List<Map<String, Object>> results = randonneMongoDBService.findRandonneWithPointInteret();
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

    @GetMapping("/benchmark/join")
    public ResponseEntity<Map<String, Double>> benchmarkJoin() {
        List<Long> times = benchmarkOperation(1, "join");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/join/5")
    public ResponseEntity<Map<String, Double>> benchmarkJoin5() {
        List<Long> times = benchmarkOperation(5, "join");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/10000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate10000() {
        List<Long> times = benchmarkOperation(10000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/10000")
    public ResponseEntity<Map<String, Double>> benchmarkGet10000() {
        List<Long> times = benchmarkOperation(10000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/10000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate10000() {
        List<Long> times = benchmarkOperation(10000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/10000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete10000() {
        List<Long> times = benchmarkOperation(10000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/10000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch10000() {
        List<Long> times = benchmarkOperation(10000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/1000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch1000() {
        List<Long> times = benchmarkOperation(1000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/100")
    public ResponseEntity<Map<String, Double>> benchmarkSearch100() {
        List<Long> times = benchmarkOperation(100, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/20000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate20000() {
        List<Long> times = benchmarkOperation(20000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/20000")
    public ResponseEntity<Map<String, Double>> benchmarkGet20000() {
        List<Long> times = benchmarkOperation(20000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/20000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate20000() {
        List<Long> times = benchmarkOperation(20000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/20000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete20000() {
        List<Long> times = benchmarkOperation(20000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/20000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch20000() {
        List<Long> times = benchmarkOperation(20000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/50000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate50000() {
        List<Long> times = benchmarkOperation(50000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/50000")
    public ResponseEntity<Map<String, Double>> benchmarkGet50000() {
        List<Long> times = benchmarkOperation(50000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/50000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate50000() {
        List<Long> times = benchmarkOperation(50000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/50000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete50000() {
        List<Long> times = benchmarkOperation(50000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/50000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch50000() {
        List<Long> times = benchmarkOperation(50000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/1000000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate1000000() {
        List<Long> times = benchmarkOperation(1000000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/1000000")
    public ResponseEntity<Map<String, Double>> benchmarkGet1000000() {
        List<Long> times = benchmarkOperation(1000000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/1000000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate1000000() {
        List<Long> times = benchmarkOperation(1000000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/1000000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete1000000() {
        List<Long> times = benchmarkOperation(1000000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/1000000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch100000() {
        List<Long> times = benchmarkOperation(1000000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/250000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate250000() {
        List<Long> times = benchmarkOperation(250000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/250000")
    public ResponseEntity<Map<String, Double>> benchmarkGet250000() {
        List<Long> times = benchmarkOperation(250000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/250000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate250000() {
        List<Long> times = benchmarkOperation(250000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/250000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete250000() {
        List<Long> times = benchmarkOperation(250000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/250000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch250000() {
        List<Long> times = benchmarkOperation(250000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/create/500000")
    public ResponseEntity<Map<String, Double>> benchmarkCreate500000() {
        List<Long> times = benchmarkOperation(500000, "create");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/get/500000")
    public ResponseEntity<Map<String, Double>> benchmarkGet500000() {
        List<Long> times = benchmarkOperation(500000, "get");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/update/500000")
    public ResponseEntity<Map<String, Double>> benchmarkUpdate500000() {
        List<Long> times = benchmarkOperation(500000, "update");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/delete/500000")
    public ResponseEntity<Map<String, Double>> benchmarkDelete500000() {
        List<Long> times = benchmarkOperation(500000, "delete");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    @GetMapping("/benchmark/search/500000")
    public ResponseEntity<Map<String, Double>> benchmarkSearch500000() {
        List<Long> times = benchmarkOperation(500000, "search");
        return ResponseEntity.ok(getBenchmarkMetrics(times));
    }

    private List<Long> benchmarkOperation(int count, String operation) {
        List<Long> times = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            long startTime = System.nanoTime();
            switch (operation) {
                case "create":
                    randonneService.create(Randonne.builder()
                            .uuid(UUID.randomUUID())
                            .ra_id(i)
                            .ra_label("Randonne " + i)
                            .ra_description("Description " + i)
                            .ra_duree(120 + i)
                            .ra_difficulte("Medium")
                            .ra_denivele(500 + i)
                            .ra_distance(10.5 + i)
                            .ra_boucle(true)
                            .po_id(i)
                            .av_id(i)
                            .build());
                    break;
                case "get":
                    randonneService.get(randonne.getUuid());
                    break;
                case "update":
                    randonne.setRa_description("Updated description " + i);
                    randonneService.edit(randonne);
                    break;
                case "delete":
                    randonneService.delete(randonne.getUuid());
                    randonne = Randonne.builder()
                            .uuid(UUID.randomUUID())
                            .ra_id(i)
                            .ra_label("Randonne " + i)
                            .ra_description("Description " + i)
                            .ra_duree(120 + i)
                            .ra_difficulte("Medium")
                            .ra_denivele(500 + i)
                            .ra_distance(10.5 + i)
                            .ra_boucle(true)
                            .po_id(i)
                            .av_id(i)
                            .build();
                    randonneService.create(randonne);
                    break;
                case "search":
                    RandonneSearchCriteria criteria = new RandonneSearchCriteria();
                    criteria.setRa_label("Randonne " + i);
                    randonneService.search(criteria);
                    break;
                case "join":
                    randonneService.findRandonneWithPointInteret();
                    break;
            }
            long endTime = System.nanoTime();
            long duration = endTime - startTime;
            times.add(duration);
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
