package com.guilhermekonell.approvalflow.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.guilhermekonell.approvalflow.repository.SolicitationRepository;

@Controller
@RequestMapping(path="/solicitation")
public class SolicitationController {
	
	private SolicitationRepository solicitationRepository;
	
	
}
