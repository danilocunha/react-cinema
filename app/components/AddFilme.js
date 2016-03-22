import React from 'react';
import Select from 'react-select';
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
    AddFilmeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    AddFilmeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  logChange(val) {
    console.log("Selected: " + val);
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

    var options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two' }
    ];

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
                        <Cinemas/>
                    <span className='help-block'>{this.state.helpBlock['cinema']}</span>
                  </div>
                  <div className={'form-group ' + this.state.nomeValidationState}>
                    <label className='control-label'>Teste</label>
                        <Select
                          name="form-field-name"
                          value="one"
                          options={options}
                          onChange={this.logChange}
                        />
                    <span className='help-block'>{this.state.helpBlock['teste']}</span>
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