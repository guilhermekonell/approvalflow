package com.guilhermekonell.approvalflow.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class SolicitationNotFoundException extends RuntimeException {

	private static final long serialVersionUID = 1L;

	public SolicitationNotFoundException() {
		super("Solicitation does not exist");
	}
}
