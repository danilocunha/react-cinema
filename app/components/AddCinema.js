import React from 'react';
import AddCinemaStore from '../stores/AddCinemaStore';
import AddCinemaActions from '../actions/AddCinemaActions';

class AddCinema extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddCinemaStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddCinemaStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddCinemaStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var nome = this.state.nome.trim();
    var endereco = this.state.endereco.trim();

    if (!nome) {
      AddCinemaActions.invalidNome();
      this.refs.nomeTextField.getDOMNode().focus();
    }

    if (!endereco) {
      AddCinemaActions.invalidEndereco();
    }

    if (nome && endereco) {
      AddCinemaActions.addCinema(nome, endereco);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Adicionar Cinema</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nomeValidationState}>
                    <label className='control-label'>Nome do Cinema</label>
                    <input type='text' className='form-control' ref='nomeTextField' value={this.state.nome}
                           onChange={AddCinemaActions.updateNome} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock['nome']}</span>
                  </div>
                  <div className={'form-group ' + this.state.enderecoValidationState}>
                    <label className='control-label'>Endereço</label>
                    <input type='text' className='form-control' value={this.state.endereco}
                           onChange={AddCinemaActions.updateEndereco}/>
                    <span className='help-block'>{this.state.helpBlock['endereco']}</span>
                  </div>
                  <span className='help-block'>{this.state.helpBlock['geral']}</span>
                  <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddCinema;