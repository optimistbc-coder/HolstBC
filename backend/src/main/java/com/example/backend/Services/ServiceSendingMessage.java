package com.example.backend.Services;

import com.example.backend.DTOs.RequestSendingDTO;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;
import java.util.Map;

@Service
public class ServiceSendingMessage {
    private final JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String emailFrom;

    public ServiceSendingMessage(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    public Mono<String> sendText(String to, RequestSendingDTO request, String title) {
        String requestToEmail = "НОВЕ ЗАМОВЛЕННЯ!!! \n" +
                "Ім'я замовника: " + request.getUserName() + " " + request.getUserSecondName() + " " + request.getUserSurname() + "\n" +
                "Телефон замовника: " + request.getUserPhone() + "\n" +
                "Місто замовника: " + request.getUserCity() + "\n" +
                "Відділення замовника: " + request.getUserDepartment() + "\n" +
                "Зв'язок з замовником: " + request.getConnectWithUs() + "\n" +
                "Посилання на зображення: " + request.getImageURL() + "\n" +
                "Інформація про зображення: " + request.getImageInfo() + "\n" +
                "Ціна замовлення: " + request.getPrice() + "\n" +
                "Як покращити зображення: " + request.getImproveImage() + "\n" +
                "Побажання до замовлення: " + request.getWishes() + "\n";


        return Mono.fromRunnable(() -> {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setTo(to);
            message.setSubject(title);
            message.setText(requestToEmail);
            message.setFrom(emailFrom);

            mailSender.send(message);
        })
                .onErrorResume(e -> Mono.just("/error"))
                .thenReturn("/thanks");
    }
}
