package com.guilhermekonell.approvalflow.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.guilhermekonell.approvalflow.exceptions.SolicitationNotFoundException;
import com.guilhermekonell.approvalflow.model.Solicitation;
import com.guilhermekonell.approvalflow.repository.SolicitationRepository;

@RestController
@RequestMapping(path="/solicitations")
public class SolicitationController {
	
	private SolicitationRepository repository;
	
	public SolicitationController(SolicitationRepository repository) {
		this.repository = repository;
	}
	
	@GetMapping
	public Iterable<Solicitation> getSolicitations() {
		return repository.findAll();
	}
	
	@GetMapping("{id}")
	public Solicitation getSolicitation(@PathVariable Long id) {
		System.out.println(id);
		return repository.findById(id).orElseThrow(SolicitationNotFoundException::new);
	}
	
	@PostMapping
	public Solicitation addSolicitation(@RequestBody Solicitation solicitation) {
		return repository.save(solicitation);
	}
	
	@PutMapping("{id}")
	public Solicitation updateSolicitation(@PathVariable Long id, @RequestBody Solicitation solicitation) {
		Solicitation solicitationToUpdate = getSolicitation(id);
		
		solicitationToUpdate.setObservation(solicitation.getObservation());
		solicitationToUpdate.setStatus(solicitation.getStatus());
		
		return repository.save(solicitationToUpdate);
	}
}
