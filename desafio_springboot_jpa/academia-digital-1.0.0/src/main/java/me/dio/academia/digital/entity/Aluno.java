package me.dio.academia.digital.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
@Data //getters, setters, equals e hashcodes de nossos métodos sem precisar escrever (Lombok)
@NoArgsConstructor //Construtor vazio implicitamente determinado, sem precisar escrever (Lombok)
@AllArgsConstructor //Construtor com todos argumentos implicitamente determinado, sem precisar escrever (Lombok)
@Entity //Quem cria de fato a tabela no banco de dados, injeção. Toda entidade deve ter um id
@Table (name = "tb_alunos") //Mudar nome da tabela criada no banco de dados
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"}) //Forma de lidar com exceções
public class Aluno {

  @Id //Identificação do id da tabela
  @GeneratedValue(strategy = GenerationType.IDENTITY) //Forma de geração dos ids da tabela
  private Long id;

  private String nome;

  @Column(unique = true) //Coluna única. Campos únicos, sem valores repetidos
  private String cpf;

  private String bairro;

  private LocalDate dataDeNascimento;

  @OneToMany (mappedBy = "aluno", fetch = FetchType.LAZY) //OneToMany - Um aluno terá várias avaliações (Representam a relação entre tabelas)
  @JsonIgnore //Forma de lidar com exceções
  private List<AvaliacaoFisica> avaliacoes = new ArrayList<>();

}
