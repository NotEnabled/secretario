package ru.flagman.secretario.client;


import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.util.JSONPObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;
import ru.flagman.secretario.model.TestObj;

import java.util.Iterator;
import java.util.logging.Logger;


public class ТestClient {

    /*@Autowired
    private static RestTemplate restTemplate;*/


    public static void sendTest() throws JsonProcessingException {
        String url = "http://localhost:8080/api/hello2?q={str}";
        HttpHeaders headerSet = new HttpHeaders();
        headerSet.setContentType(MediaType.APPLICATION_JSON);
                HttpEntity<String> request =
                new HttpEntity<String>(headerSet);
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class,"searchStr");
        ObjectMapper objectMapper = new ObjectMapper();

        TestObj itemResponse = objectMapper.readValue(response,TestObj.class);

        System.out.println(response);
        System.out.println(itemResponse.toString());
    }


}
