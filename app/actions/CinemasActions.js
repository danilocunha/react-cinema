import alt from '../alt';

class CinemasActions {
    constructor() {
        this.generateActions(
            
            'updateValue'
            
        );
    }

    getCinemas() {
        $.ajax({ url: url, data: params })
      .done((data) => {
        this.actions.getCinemasSuccess(data);
      })
      .fail((jqXhr) => {
        this.actions.getCinemasFail(jqXhr);
      });
        //console.log("Vou adicionar o cinema " + nome + " com o endreco " + endereco);
    }
    
}

export default alt.createActions(CinemasActions);
