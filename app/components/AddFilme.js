import React from 'react';
import AddFilmeStore from '../stores/AddFilmeStore';
import AddFilmeActions from '../actions/AddFilmeActions';
import Cinemas from './Cinemas';

class AddFilme extends React.Component {
  constructor(props) {
    super(props);
    this.state = AddFilmeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    AddFilmStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddFilmStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();

    var nome = this.state.nome.trim();
    var gender = this.state.gender;

    if (!nome) {
      AddFilmeActions.invalidNome();
      this.refs.nomeTextField.getDOMNode().focus();
    }

    if (!gender) {
      AddFilmeActions.invalidGender();
    }

    if (nome && gender) {
      AddFilmeActions.addCharacter(nome, gender);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row flipInX animated'>
          <div className='col-sm-8'>
            <div className='panel panel-default'>
              <div className='panel-heading'>Adicionar Filme</div>
              <div className='panel-body'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className={'form-group ' + this.state.nomeValidationState}>
                    <label className='control-label'>Nome do Filme</label>
                    <input type='text' className='form-control' ref='nomeTextField' value={this.state.nome}
                           onChange={AddFilmeActions.updateNome} autoFocus/>
                    <span className='help-block'>{this.state.helpBlock['nome']}</span>
                  </div>
                   <div className={'form-group ' + this.state.nomeValidationState}>
                    <label className='control-label'>Cinema</label>
                   Olaaa<br/>
                    <Cinemas/>
                    <span className='help-block'>{this.state.helpBlock['cinema']}</span>
                  </div>
                  <div className={'form-group ' + this.state.genderValidationState}>
                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='female' value='Female' checked={this.state.gender === 'Female'}
                             onChange={AddFilmeActions.updateGender}/>
                      <label htmlFor='female'>Female</label>
                    </div>
                    <div className='radio radio-inline'>
                      <input type='radio' name='gender' id='male' value='Male' checked={this.state.gender === 'Male'}
                             onChange={AddFilmeActions.updateGender}/>
                      <label htmlFor='male'>Male</label>
                    </div>
                  </div>
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

export default AddFilme;