package com.example.backend.Controllers;

import com.example.backend.Services.CloudinaryService;
import org.springframework.http.codec.multipart.FilePart;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/cloudinary")
public class CloudinaryController {

    private final CloudinaryService cloudinaryService;

    public CloudinaryController(CloudinaryService cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }

    @PostMapping("/create/image")
    public Mono<String> createImage(@RequestPart("file") FilePart file) {
        return cloudinaryService.createImage(file);
    }
}
