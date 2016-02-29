import alt from '../alt';

class AddFilmeActions {
  constructor() {
    this.generateActions(
      'addFilmuccess',
      'addFilmFail',
      'updateName',
      'updateGender',
      'invalidName',
      'invalidGender'
    );
  }

  addFilm(name, gender) {
    $.ajax({
      type: 'POST',
      url: '/api/filme',
      data: { name: name, gender: gender }
    })
      .done((data) => {
        this.actions.addCharacterSuccess(data.message);
      })
      .fail((jqXhr) => {
        this.actions.addCharacterFail(jqXhr.responseJSON.message);
      });
  }
}

export default alt.createActions(AddFilmeActions);