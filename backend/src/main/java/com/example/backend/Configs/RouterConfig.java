package com.example.backend.Configs;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.ServerResponse;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.RouterFunctions;

@Configuration
public class RouterConfig {

    @Bean
    public RouterFunction<ServerResponse> staticResourceRouter() {
        return RouterFunctions
                .resources("/assets/**", new ClassPathResource("static/assets/"))
                .andRoute(RequestPredicates.GET("/"),
                        request -> ServerResponse.ok().bodyValue(new ClassPathResource("static/index.html")))

                .andRoute(RequestPredicates.GET("/{path:^(?!api|ws|assets|favicon\\.ico).*$}"),
                        request -> ServerResponse.ok().bodyValue(new ClassPathResource("static/index.html")));
    }
}
