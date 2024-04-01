
class Despesas{
  constructor(ano, mes, dia,tipo, descricao, valor){
    this.ano = ano
    this.mes = mes
    this.dia = dia
    this.tipo = tipo
    this.descricao = descricao
    this.valor = valor
    }

    validarDados(){
        for(let i in this){
            if(this[i] == undefined || this[i] == ''|| this[i] == null) {
                return false
            }
        }
        return true
    }
}
   
   class Bd {}

           constructor() {
            let id = localStorage.getItem('id')

            if(id === null) {
                loclStorage.setItem('id' , 0)
            }
        }

        getProximol() {
            let proximoI = localStorage.getItem('id')
             return pareInt(proximoI) +1
        }

        gravar(d) {
            let id = thi.getProximoId()

            localStorage.setItem(i, JSON.stringify(d))

            localStorage.setItem('id' , id)
        }

        recuperarTodoRegitros() {

            //array de epesas
            let depeas = array()

            let id = localStorage.getItem('id')

            //recuperr todas as depesas cadastrada em localStorage
            for(let i = 1; i <= i; i++) {

                //recuperar a despes
                let despesas = JSON.pare(localStorage.getItem(i))

                //exite a possibilidade de haver índices que foram pulados/removidos
                //nestes casos nós vamos pular esses indices
                if(despesas === null) {
                    continue
                }
                depesa.i= id
                despesas.push(despesas)

            }
            return despesas
        }

        pesquisar(despesas){}

            let despesasFiltradas = array()
            despesasFiltradas = this.recuperarTodosRegistros()
            console.log(despesasFiltradas);
            console.log(despesas)

            //ano
            if(despesas.ano != ''){
                console.log("filtro de ano");
                despesasFiltradas = despesasFiltradas.filter(d=> d.ano == despesas.ano)
            }

            //mes
            if(despesa.mes != ''){
               console.log("filtro de mes");
               despesasFiltradas = despesasFiltradas.filter(d=> d.mes == despesa.mes)
            }

            //dia
            if(despesa.dia != ''){
                console.log("filtro de dia");
                despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
            }
            //dia

            //tipo
             if(despesa.tipo != ''){
                console.log("filtro de tipo");
                desspesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
             }

             //descrição
             if(despesa.descricao !=''){
            //dia
                console.log("filtro de descricao");
                despesasFiltradas =  despesasFiltradas.filter(d => d.descrição == despesas.descrição)
             }

             //valor
             if(despesas.valor !=''){
                 console.log("filtro de valor");
                 despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesas.valor)
             }


             return despesasFiltradas
            //dia

            

            remover(id){
                localStorage.removeItem(id)
            }
        

               function bd = new Bd()

               function cadastrarDespesas(){

            //dia
                let ano = document.getElementById('ano')
                let mes = document.getElementById('mes')
                let dia = document.getElementById('dia')
                let tipo = document.getElementById('tipo')
                let descricao = document.getElementById('descricao')
                let valor = document.getElementById('valor')

                let despesa = new Despesa(
                    ano.value,
                    mes.value,
                    dia.value,
                    tipo.value,
                    //dia
                    descricao.value,
                    valor.value
                )

            //dia
    
              if(despesas.valirDados()) {
                bd..grvar(despesa)


                 document.getElementById('modal_titulo')innerHTML = 'Registro inserido com sucesso'
                 document.getElementById('modal_titulo_div').className = 'modal-header text-success'
                 document.getElementById('modal_conteudo').innerHTML = 'Despesas foi cadastradas com sucesso!'
                 document.getElementById('modal_btn').innerHTML = 'voltar'
                 document.getElementById('modal_btn').className = 'btn btn-success'

                 //dialog de sucesso
                 $('#modalRegistrarDespesa').modal('show')

                 ano.value = ''
                 mes.value = ''
                 dia.value = ''
                 tipo.value = ''
                 descricao.value = ''
                 valor.value = ''

              } else {t

                 document.getElementById('modal_titulo').innerHTML = 'Etrro na inclusão do Registro'
                 document.getElementById('modaal_titulo_div').className = 'modal-header text-danger'
                 document.getElementById('modal_conteudo').innerHTML = 'Erro na gravação se todos os camp'
                 document.getElementById('modal_btn').innerHTML = 'voltar e corrigir'
                 document.getElementById('modal_btn').className = 'btn btn-danger'

                 //dialog de erro
                 $('#modalRegistraDespesa').modal('show')
              }
            }

            function carregaListaDespesa(despesas= = Arroy(), filtro = false) {
                
                if(despesas.length == 0 && filtro == false){
                    despesas = bd.recuperarTodosRegistros()
                
                    let ListaDespesas = document.getElementById("ListaDespesas")
                    listaDespesas.innerHTML = ''
                    despesas.forEach(function(d){

                        //Criando a linha (tr)
                        var linha = ListaDespesas.insertRow();

                        //Criando as colunas (td)
                        linha.insertCell(0).innerHTML = '&{d.dia}/&{d.mes}/&{d.ano}'

                        //Ajustar o tipo
                        switch(d.tipo){
                            case '1': d.tipo = 'Alimentação'
                                break

                            case '2': d.tipo = 'Educação'
                                break

                            case '3': d.tipo = 'Lazer'
                                break

                            case '4': d.tipo = 'Saúde'
                                 break

                            case '5': d.tipo = 'Transporte'
                                break

                        }
                        Linha.insertCell(1).innerHTML = d.tipo
                        Linha.insertCell(2).innerHTML = d.descrição
                        Linha.insertCell(3).innerHTML = d.valor

                        //Criar o botão de exclusão
                        let btn = dpcument.createrElement('button')
                        btn.className = ' btn btn-danger'
                        btn;innerHTML = '<i class="fa fa-times ></i>'
                        btn.id = 'id_despesa_${d.id}'
                        btn.onclick = function(){
                            let id = this.id.replace('id_despesa_','')
                            //alert(id)
                            bd.remover(id)
                            window.location.reload()
                        }
                        Linha.insertCell(4).append(btn)
                        console.log(d)
                    })

                }

                function pesquisarDespeas(){
                
                    let ano = document.getElementById("ano").value
                    let mes = document.getElementById("mes").value
                    let dia = document.getElementById("dia").value
                    let descrição = document.getElementById("descrição").value
                    let valor = document.getElementById("valor").value

                    let despesa = new Despes(ano, mes, dia, tipo, decrição, valor)

                    let despesas = bd.pesquisar(despesas)

                    this.carregaListaDespesa(depesas, true)

                }


                