package br.org.generation.cidadesupera.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.org.generation.cidadesupera.model.Postagem;

@Repository
public interface PostagemRepository extends JpaRepository <Postagem,Long>{

	
}
