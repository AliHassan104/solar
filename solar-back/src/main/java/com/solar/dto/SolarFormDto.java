package com.solar.dto;

import com.solar.modal.Location;
import lombok.*;

import java.util.ArrayList;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Builder

public class SolarFormDto {
    private Long id;

    private String firstName;
    private String lastName;
    private String company;
    private String address;
    private String country;

    private String email;
    private String phoneNumber;
    private String consumption;
    private String notes;
    private Boolean privacyCheck;

//    private Location location;
    private String roofType;
    private String roofInclination;
    private String roofing;
    private String buildingHeight;

    private String area;
    private Boolean leaseRooftop;
    private Boolean rentRooftop;
    private Boolean buyRooftop;
}
