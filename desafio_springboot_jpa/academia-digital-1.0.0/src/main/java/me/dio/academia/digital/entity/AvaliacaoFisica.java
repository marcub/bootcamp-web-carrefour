package me.dio.academia.digital.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tb_avaliacoes")
public class AvaliacaoFisica {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @ManyToOne(cascade = CascadeType.ALL) //ManyToOne - Muitas avaliações para um aluno
  @JoinColumn(name = "aluno_id") //Especifica a coluna FOREIGN KEY, que indica a coluna responsável pelo relacionamento
  private Aluno aluno;

  private LocalDateTime dataDaAvaliacao = LocalDateTime.now();

  @Column(name = "peso_atual") //Mudança de nome da tabela
  private double peso;

  @Column(name = "altura_atual")
  private double altura;

}
