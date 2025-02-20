class Aluno{
    constructor(nome, sobrenome, idade, notaUm, notaDois){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = parseFloat(idade);
    this.notaUm = parseFloat(notaUm);
    this.notaDois = parseFloat(notaDois);
    this.dataRegistro = new Date();
    }

    //quero retornar o nome junto com o sobrenome 
    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }
    //quero mostrar a média de notas do primeiro semestre e do segundo
    get notaFinal(){
        return (this.notaUm + this.notaDois) /2;
    }

    get dataHoraRegistro() {
        return this.dataRegistro.toLocaleString(); // Exibe a data e hora
    }
}

class SalaDeAula
{
    constructor(){
        this.estudantes = [];
    }

    adcionar(Aluno){
        this.estudantes.push(Aluno) //Adcionar produtos em uma lista
        console.log(`${Aluno.nome} - Adcionado no registro da Sala de Aula!`)
    }


    listarAlunos(){
        console.log("Alunos da Sala de Aula:")
        console.log("--------------------")
        this.estudantes.forEach((estudante, index) => {
            console.log(`${index + 1}° - ${estudante.nome} - R$ ${estudante.valor}`)
        })
    }

    removerAluno(index)
    {
        console.log(`ALUNO ${nome.Estudante} - FOI REMOVIDO`)
        this.estudantes.splice(index, 1)
    }

    remover(nomeEstudante){
        let index = this.estudantes.findIndex((estudante) => estudante.nome == nomeEstudante)
        if(index == -1){
            console.log("Ops! Aluno não encontrado!")
        }
        else{
            console.log(`ALUNO ${nomeEstudante} - FOI REMOVIDO`)
            this.estudantes.splice(index, 1)
        }
    }

    //cadastro, lista dos registros
    atualizaRegistro()
    {
        const listaRegistro = document.getElementById("listaEstudantes");
        
        listaRegistro.innerHTML = ""
        this.estudantes.forEach((estudante, index) => {

            listaRegistro.innerHTML += `
                <tr> 
                    <td>${estudante.nome}</td>
                    <td>${estudante.sobrenome}</td>
                    <td>${estudante.nomeCompleto}</td>
                    <td>${estudante.idade}</td>
                    <td>${estudante.notaUm.toFixed(2)}</td>
                    <td>${estudante.notaDois.toFixed(2)}</td>
                    <td>${estudante.notaFinal.toFixed(2)}</td>
                    <td>${estudante.dataHoraRegistro}</td>
                    <td> 
                        
                        <button class = 'btn btn-warning' onclick='editarAluno(${index})'>Editar</button>
                        <button class='btn btn-danger' onclick='removerAluno(${index})'>Remover</button>
                        
                        
                    </td>
                </tr>    
            `
        })// <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    }
}


let sala = new SalaDeAula()
let aluno1 = new Aluno("Dora", "Smiths", 17, 9, 8)
let aluno2 = new Aluno("Maria", "Silva", 19, 10, 9.2)

sala.adcionar(aluno1)
sala.adcionar(aluno2)
sala.atualizaRegistro()


const form = document.getElementById("form-registrar")
const form_index = document.getElementById("id-aluno")
const form_nome = document.getElementById("nome")
const form_sobrenome = document.getElementById("sobrenome")
const form_idade = document.getElementById("idade")
const form_notaUm = document.getElementById("notaUm")
const form_notaDois = document.getElementById("notaDois")

form.addEventListener("submit", function(event){
    event.preventDefault()

    const id = form_index.value.trim()
    const nome = form_nome.value.trim()
    const sobrenome = form_sobrenome.value.trim()
    const idade = form_idade.value.trim()
    const notaUm = form_notaUm.value.trim()
    const notaDois = form_notaDois.value.trim()

    let aluno = new Aluno(nome, sobrenome, idade, notaUm, notaDois)


    if(id === "") //verificar o id do aluno
    {
        sala.adicionar(aluno)
    }else{
        sala.estudantes[id] = aluno
    }

    sala.atualizaRegistro()

    form_index.value = ""
    form_nome.value = ""
    form_sobrenome.value = ""
    form_idade.value = ""
    form_notaUm.value = ""
    form_notaDois.value = ""
})

function removerAluno(index)
{
    sala.removerAluno(index)
    sala.atualizaRegistro()
}

function editarAluno(index)
{
    console.log(`Editando: ${index}`)

    const estudante = sala.estudantes[index]

    form_index.value = index
    form_nome.value = estudante.nome
    form_sobrenome.value = estudante.sobrenome
    form_idade.value = estudante.idade
    form_notaUm.value = estudante.notaUm
    form_notaDois.value = estudante.notaDois

}