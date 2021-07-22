package ru.flagman.secretario.client;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.client.RestTemplate;
import ru.flagman.secretario.model.api.egr.FnsEgrResponse;
import ru.flagman.secretario.model.api.fnsSearch.FnsSearchResponse;

public class FnsClient {

    private static String key = "e3863bcca13c2ee26cc3ee33f0151c5e75a0d4b4";
//    private static String urlSearch = "https://api-fns.ru/api/search?q={searchStr}&key={keyStr}";
//    private static String urlEgr = "https://api-fns.ru/api/egr?req={searchStr}&key={keyStr}";
    private static String urlSearch = "http://localhost:8080/api/hello2?q={searchStr}";
    private static String urlEgr = "http://localhost:8080/api/hello3?q={searchStr}";


    public static FnsSearchResponse search(String q) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String response =restTemplate.getForObject(urlSearch, String.class,q,key);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        FnsSearchResponse responseObj = objectMapper.readValue(response, FnsSearchResponse.class);
        return responseObj;
    }

    public static FnsEgrResponse egr(String q) throws JsonProcessingException {
        RestTemplate restTemplate = new RestTemplate();
        String response =restTemplate.getForObject(urlEgr, String.class,q,key);
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        FnsEgrResponse responseObj = objectMapper.readValue(response, FnsEgrResponse.class);
        return responseObj;
    }
}
