package com.example.backend.Controllers;

import com.example.backend.DTOs.CityDTO;
import com.example.backend.DTOs.DepartmentRequest;
import com.example.backend.DTOs.DepartmentResponse;
import com.example.backend.Services.NovaPoshtaService;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/nova/poshta")
public class NovaPoshtaController {

    private final NovaPoshtaService novaPoshtaService;

    public NovaPoshtaController(NovaPoshtaService novaPoshtaService) {
        this.novaPoshtaService = novaPoshtaService;
    }

    @GetMapping("/get/cities")
    public Flux<CityDTO> getAllCities(){
        return novaPoshtaService.getCities();
    }

    @PostMapping("/get/departments")
    public Flux<DepartmentResponse> getAllDepartmentsByCity(@RequestBody DepartmentRequest department){
        return novaPoshtaService.getDepartmentsByCity(department.Ref(), department.page());
    }
}
