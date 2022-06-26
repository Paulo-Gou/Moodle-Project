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

