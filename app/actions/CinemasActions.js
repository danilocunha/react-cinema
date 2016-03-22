import alt from '../alt';

class CinemasActions {
    constructor() {
        this.generateActions(
            'getCinemasSuccess',
            'getCinemasFail'
            
        );
    }

    getCinemas() {

        

        let url = '/api/cinema';

        //console.log($.ajax);
        $.ajax({ url: url })
            .done((data) => {
                console.log("Olaaa Sucesso");
                this.actions.getCinemasSuccess(data);
            }).fail((jqXhr) => {
                console.log("Olaaa Fail");
                this.actions.getCinemasFail(jqXhr);
            });
}

    
}

export default alt.createActions(CinemasActions);
