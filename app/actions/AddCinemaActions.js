import alt from '../alt';

class AddCinemaActions {
    constructor() {
        this.generateActions(
            'addCinemaSuccess',
            'addCinemaFail',
            'updateNome',
            'updateEndereco',
            'invalidNome',
            'invalidEndereco'
        );
    }

    addCinema(nome, endereco) {
        $.ajax({
                type: 'POST',
                url: '/api/cinema',
                data: {
                    nome: nome,
                    endereco: endereco
                }
            })
            .done((data) => {
                this.actions.addCinemaSuccess(data.message);
            })
            .fail((jqXhr) => {
                this.actions.addCinemaFail(jqXhr.responseJSON.message);
            });
        //console.log("Vou adicionar o cinema " + nome + " com o endreco " + endereco);
    }
}

export default alt.createActions(AddCinemaActions);
