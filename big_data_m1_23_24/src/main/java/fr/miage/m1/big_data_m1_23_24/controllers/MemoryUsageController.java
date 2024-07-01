package fr.miage.m1.big_data_m1_23_24.controllers;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.Properties;

@RestController
@RequestMapping("/memory")
public class MemoryUsageController {

    @Autowired
    private MongoClient mongoClient;

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @GetMapping("/mongodb")
    public Map<String, Object> getMongoDBMemoryUsage() {
        MongoDatabase database = mongoClient.getDatabase("randonnees");
        Document stats = database.runCommand(new Document("dbStats", 1));
        Map<String, Object> memoryUsage = new HashMap<>();
        memoryUsage.put("db", stats.get("db"));
        memoryUsage.put("collections", stats.get("collections"));
        memoryUsage.put("views", stats.get("views"));
        memoryUsage.put("objects", stats.get("objects"));
        memoryUsage.put("avgObjSize", stats.get("avgObjSize"));
        memoryUsage.put("dataSize", stats.get("dataSize"));
        memoryUsage.put("storageSize", stats.get("storageSize"));
        memoryUsage.put("indexes", stats.get("indexes"));
        memoryUsage.put("indexSize", stats.get("indexSize"));
        memoryUsage.put("totalSize", stats.get("totalSize"));
        return memoryUsage;
    }

    @GetMapping("/redis")
    public Map<String, Object> getRedisMemoryUsage() {
        Map<String, Object> memoryUsage = new HashMap<>();
        Properties memoryInfo = stringRedisTemplate.execute((RedisConnection connection) -> connection.info("memory"));
        if (memoryInfo != null) {
            for (String name : memoryInfo.stringPropertyNames()) {
                memoryUsage.put(name, memoryInfo.getProperty(name));
            }
        }
        return memoryUsage;
    }
}
