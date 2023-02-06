package com.solar.controller;

import com.solar.dto.SolarFormDto;
import com.solar.modal.SolarForm;
import com.solar.service.SolarFormService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/solar-form")
public class SolarFormController {

    private SolarFormService solarFormService;

    public SolarFormController(SolarFormService solarFormService) {
        this.solarFormService = solarFormService;
    }

    @GetMapping("")
    public ResponseEntity<List<SolarForm>> getSolarForm() throws Exception {
        List<SolarForm> solarFormDto = solarFormService.getAllSolarForm();
        return  ResponseEntity.ok(solarFormDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SolarFormDto> getSolarFormById(@PathVariable Long id) throws Exception {
        SolarFormDto solarFormDto = solarFormService.getSolarFormById(id);
        return  ResponseEntity.ok(solarFormDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSolarForm(@PathVariable Long id) throws Exception {
        solarFormService.deleteSolarFormById(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<SolarFormDto> updateAchievementById(@PathVariable Long id , @RequestBody SolarFormDto solarFormDto) throws Exception {
        try{
            return ResponseEntity.ok(solarFormService.updateSolarForm(id, solarFormDto));
        }catch (Exception e){
            System.out.println(e);
            throw new Exception("Cannot update No Achievement Exist having id "+id);
        }
    }

    @PostMapping()
    public ResponseEntity<SolarFormDto> addAchievements(@RequestBody SolarFormDto solarFormDto) {
        try{
            return ResponseEntity.ok(solarFormService.addSolarForm(solarFormDto));
        }catch (Exception e){
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

}