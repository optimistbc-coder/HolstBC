package com.example.backend.Controllers;

import com.example.backend.DTOs.RequestSendingDTO;
import com.example.backend.Services.ServiceSendingMessage;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
public class SendingController {


    private final ServiceSendingMessage serviceSendingMessage;

    public SendingController(ServiceSendingMessage serviceSendingMessage) {
        this.serviceSendingMessage = serviceSendingMessage;
    }

    @PostMapping("/send")
    public Mono<String> send(@RequestBody RequestSendingDTO requestSendingDTO){
        return serviceSendingMessage.sendText("optimistbc@gmail.com", requestSendingDTO, "НОВЕ ЗАМОВЛЕННЯ!!!");
    }
}
