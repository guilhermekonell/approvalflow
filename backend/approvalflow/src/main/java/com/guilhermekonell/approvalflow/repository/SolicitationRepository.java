package com.guilhermekonell.approvalflow.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.guilhermekonell.approvalflow.model.Solicitation;

public interface SolicitationRepository extends JpaRepository<Solicitation, Long> {
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE STATUS = 1", nativeQuery = true)
	List<Solicitation> findAllSolicitationsApproved();
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE STATUS = 0 AND OBSERVATION != ''", nativeQuery = true)
	List<Solicitation> findAllSolicitationsRejected();
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE NAME LIKE %:name%", nativeQuery = true)
	List<Solicitation> findAllSolicitationsByName(@Param("name") String name);
	
	@Query(value = "SELECT * FROM APPROVALFLOW.SOLICITATION WHERE DESCRIPTION LIKE %:description%", nativeQuery = true)
	List<Solicitation> findAllSolicitationsByDescription(@Param("description") String description);
	
}
