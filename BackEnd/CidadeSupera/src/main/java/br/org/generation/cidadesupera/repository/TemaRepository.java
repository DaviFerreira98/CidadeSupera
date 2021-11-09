package br.org.generation.cidadesupera.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.cidadesupera.model.Tema;

@Repository
public interface TemaRepository extends JpaRepository <Tema, Long> {
	
		public List<Tema>findByCategoriaContainingIgnoreCase(String categoria);
		
}
