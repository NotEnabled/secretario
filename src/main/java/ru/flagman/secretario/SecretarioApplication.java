package ru.flagman.secretario;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;
import ru.flagman.secretario.client.FnsClient;
import ru.flagman.secretario.client.ТestClient;
import ru.flagman.secretario.templateProcess.Docx4j;

@SpringBootApplication
public class SecretarioApplication {

    public static void main(String[] args) {
        SpringApplication.run(SecretarioApplication.class, args);
    }

    @Bean
    public RestTemplate restTemplate(RestTemplateBuilder builder) {
        return builder.build();
    }

    /*@Bean
    public CommandLineRunner run() {
        
        return args -> {
            Docx4j.run();
        };
    }*/

}
