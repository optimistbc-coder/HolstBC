package com.example.backend.Services;

import com.example.backend.DTOs.CityDTO;
import com.example.backend.DTOs.DepartmentResponse;
import io.netty.channel.ChannelOption;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Flux;
import reactor.netty.http.client.HttpClient;

import java.time.Duration;

@Service
public class NovaPoshtaService {
    @Value("${nova-poshta.api-key}")
    private String apiKey;
    private final WebClient webClient;

    public NovaPoshtaService(WebClient.Builder builder) {
        this.webClient = builder
                .baseUrl("https://api.novaposhta.ua/v2.0/json/")
                .clientConnector(new ReactorClientHttpConnector(HttpClient.create()))
                .clientConnector(new ReactorClientHttpConnector(
                        HttpClient.create()
                                .responseTimeout(Duration.ofSeconds(10))
                                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
                ))
                .exchangeStrategies(ExchangeStrategies.builder()
                        .codecs(configurer ->
                                configurer.defaultCodecs().maxInMemorySize(16 * 1024 * 1024)
                        ).build())
                .build();
    }


    public Flux<CityDTO> getCities() {
        String request = String.format("""
                {
                  "apiKey": "%s",
                  "modelName": "Address",
                  "calledMethod": "getCities",
                  "methodProperties": {}
                }
                """, apiKey);


        return webClient.post()
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class)
                .flatMapMany(json -> {
                    try {
                        var mapper = new com.fasterxml.jackson.databind.ObjectMapper();
                        var root = mapper.readTree(json);
                        var data = root.get("data");
                        return Flux.fromIterable(data)
                                .map(node -> new CityDTO(
                                        node.get("Ref").asText(),
                                        node.get("Description").asText(),
                                        node.get("AreaDescription").asText()
                                ));
                    } catch (Exception e) {
                        return Flux.error(e);
                    }
                });
    }

    public Flux<DepartmentResponse> getDepartmentsByCity(String cityRef,String page) {
        String request = """
    {
      "apiKey": "%s",
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": { 
        "CityRef": "%s",
        "Limit": "100",
        "Page": "%s"
      }
    }
    """.formatted(apiKey, cityRef, page);

        return webClient.post()
                .header(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .bodyValue(request)
                .retrieve()
                .bodyToMono(String.class)
                .flatMapMany(json -> {
                    try {
                        var mapper = new com.fasterxml.jackson.databind.ObjectMapper();
                        var root = mapper.readTree(json);


                        var data = root.path("data");


                        return Flux.fromIterable(data)
                                .map(node -> new DepartmentResponse(
                                        node.path("Ref").asText(),
                                        node.path("Description").asText()
                                ));

                    } catch (Exception e) {
                        e.printStackTrace();
                        return Flux.error(e);
                    }
                });
    }
}
