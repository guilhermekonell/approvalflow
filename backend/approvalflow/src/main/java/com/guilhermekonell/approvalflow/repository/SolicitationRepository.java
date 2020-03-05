package com.guilhermekonell.approvalflow.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.guilhermekonell.approvalflow.model.Solicitation;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
	
}
