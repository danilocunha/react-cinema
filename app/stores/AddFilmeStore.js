import alt from '../alt';
import AddFilmeActions from '../actions/AddFilmeActions';

class AddFilmeStore {
  constructor() {
    this.bindActions(AddFilmeActions);
    this.nome = '';
    this.gender = '';
    this.helpBlock = '';
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  onAddFilmeSuccess(successMessage) {
    this.nameValidationState = 'has-success';
    this.helpBlock['geral'] = successMessage;
  }

  onAddFilmeFail(errorMessage) {
    this.nameValidationState = 'has-error';
    this.helpBlock['geral'] = errorMessage;
  }

  onUpdateNome(event) {
    this.name = event.target.value;
    this.nameValidationState = '';
    this.helpBlock['nome'] = '';
  }

  onUpdateGender(event) {
    this.gender = event.target.value;
    this.genderValidationState = '';
  }

  onInvalidNome() {
    this.nameValidationState = 'has-error';
    this.helpBlock['nome'] = 'Por favor, entre o nome do filme.';
  }

  onInvalidGender() {
    this.genderValidationState = 'has-error';
  }
}

export default alt.createStore(AddFilmeStore);