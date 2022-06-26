class Turma 
{
	constructor(data) 
	{
		this.id = data["ID"];
		this.nome = data["Nome"];
		this.ano = data["Ano"];
		this.responsavel = data["Responsavel"];
		this.email_resresponsavel = data["Email_Responsavel"];
		this.curso = data["Curso"];
	}
}
class Aluno
{
	constructor(data) 
	{
		this.id = data["ID"];
		this.nome = data["Nome"];
		this.DataNascimento = data["Data_Nascimento"];
		this.genero = data["Genero"];
		this.email = data["Email"];
	}
}
class Disciplina
{
	constructor(data) 
	{
		this.id = data["ID"];
		this.nome = data["Nome"];
		this.professor = data["Professor"];
	}
}
class Inscricao
{
	constructor(data) 
	{
		this.id = data["ID"];
		this.Id_Disciplina = data["IdDisciplina"];
		this.Id_aluno = data["id_aluno"];
		this.nota = data["Nota"];
	}
}
class Revisao
{
	constructor(data) 
	{
		this.id = data["ID"];
		this.Dia_Revisao = data["Dia_Revisao"];
		this.Id_Disciplina = data["IDDisciplina"];
		this.Id_Aluno = data["IDAluno"];
		this.Nota_Antes = data["Nota_Antes"];
		this.Nota_depois = data["Nota_Depois"];
		this.Efetividade = data["Efetivada"];
		this.Fechada = data["Fechada"];
	}	
}

