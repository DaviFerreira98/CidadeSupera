package br.org.generation.cidadesupera.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.org.generation.cidadesupera.model.Tema;
import br.org.generation.cidadesupera.repository.TemaRepository;

@RestController
@RequestMapping("/temas")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class TemaController {
	
	@Autowired
	private TemaRepository temaRepository;
	
	//Busca todos os temas 
	@GetMapping
	public ResponseEntity<List<Tema>> getAll(){
		return ResponseEntity.ok(temaRepository.findAll());
	}
	
	//Busca temas por id
	@GetMapping("/{id}")
	public ResponseEntity<Tema> getById(@PathVariable long id){
		return temaRepository.findById(id)
				.map(resposta -> ResponseEntity.ok(resposta))
				.orElse(ResponseEntity.notFound().build());
	}
	
	//Busca por categoria 
	@GetMapping("/categoria/{categoria}")
	public ResponseEntity<List<Tema>> getByTitle(@PathVariable String categoria){
		return ResponseEntity.ok(temaRepository.findByCategoriaContainingIgnoreCase(categoria));
	}
	
	@PostMapping
	public ResponseEntity<Tema> postTema(@Valid @RequestBody Tema tema){
		return ResponseEntity.status(HttpStatus.CREATED).body(temaRepository.save(tema));
	}
	
	@PutMapping 
	public ResponseEntity<Tema> putTema(@Valid @RequestBody Tema tema){
		return temaRepository.findById(tema.getId())
				.map(resposta -> ResponseEntity.ok().body(temaRepository.save(tema)))
				.orElse(ResponseEntity.notFound().build());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteTema(@PathVariable long id) {
		return temaRepository.findById(id).map(check -> {
			temaRepository.deleteById(id);
			return ResponseEntity.noContent().build();})
		.orElse(ResponseEntity.notFound().build());
	}
}
