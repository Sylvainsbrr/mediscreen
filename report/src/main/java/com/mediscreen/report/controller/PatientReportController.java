package com.mediscreen.report.controller;

import com.mediscreen.report.entity.Report;
import com.mediscreen.report.service.PatientReportService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@Api(description = "Génèration du rapport du patient en fonction des notes")
@RestController
public class PatientReportController {
    @Autowired
    PatientReportService patientReportService;


    @ApiOperation(value = "Génère le rapport de diabète du patient")
    @PostMapping(value = "/patient-report/{id}")
    public Report generatePatientDiabetesReport(@PathVariable("id") int id) {
        return patientReportService.generatePatientDiabetesReport(id);
    }


}
