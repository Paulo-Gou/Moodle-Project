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
