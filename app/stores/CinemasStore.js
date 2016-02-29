import alt from '../alt';
import CinemasActions from '../actions/CinemasActions';

class CinemasStore {
  constructor() {
    this.bindActions(CinemasActions);
    this.nome = '';
    this.endereco = '';
    this.helpBlock = [];
    this.nameValidationState = '';
    this.genderValidationState = '';
  }

  onAddCinemaSuccess(successMessage) {
    this.nomeValidationState = 'has-success';
    this.helpBlock['geral'] = successMessage;
  }

  onAddCinemaFail(errorMessage) {
    this.nomeValidationState = 'has-error';
    this.helpBlock['geral'] = errorMessage;
  }

  onUpdateNome(event) {
    this.nome = event.target.value;
    this.nomeValidationState = '';
    this.helpBlock['nome'] = '';
  }

  onUpdateEndereco(event) {
    this.endereco = event.target.value;
    this.enderecoValidationState = '';
  }

  onInvalidNome() {
    this.nomeValidationState = 'has-error';
    this.helpBlock['nome'] = 'Por favor, preencha o nome.';
  }

  onInvalidEndereco() {
    this.enderecoValidationState = 'has-error';
    this.helpBlock['endereco'] = 'Por favor, preencha o endereço.';
  }


}

export default alt.createStore(CinemasStore);