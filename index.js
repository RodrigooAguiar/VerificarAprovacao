

let estudantes = [
     {nome:"Rodrigo",
     nota1:7,
     nota2:9,
     nota3:6
    },
    {nome:"André",
     nota1:9,
     nota2:9,
     nota3:8
    },
    {nome:"Ana",
     nota1:7,
     nota2:5,
     nota3:4
    }
]

function calculoMedia(nota1, nota2, nota3){
    return (nota1+nota2+nota3)/3 
}
 
function verificarAprovacao() {
    for (let i = 0; i < estudantes.length; i++) {
        let estudante = estudantes[i];
        let media = calculoMedia(estudante.nota1, estudante.nota2, estudante.nota3);
        if (media >= 7) {
            alert(estudante.nome + " foi aprovado(a) com média " + media.toFixed(1) + ".");
        } else {
            alert(estudante.nome + " não foi aprovado(a), média " + media.toFixed(1) + ".");
        }
    }
}


verificarAprovacao(estudantes)