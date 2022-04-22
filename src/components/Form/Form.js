import { Component } from 'react';
export class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };
  reset = e => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>

        <label>
          Никнейм:
          <input
            type="text"
            name="tag"
            value={this.state.tag}
            onChange={this.handleChange}
          />
        </label>

        <p>Ваш уровень: </p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            onChange={this.handleChange}
            checked={this.state.experience === 'junior'}
          />
          Junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            onChange={this.handleChange}
            checked={this.state.experience === 'middle'}
          />
          Middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            onChange={this.handleChange}
            checked={this.state.experience === 'senior'}
          />
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="license"
            checked={this.state.license}
            onChange={this.handleLicenseChange}
          />
          Согласен с условием
        </label>

        <button type="submit" disabled={!this.state.license}>
          Отправить
        </button>
      </form>
    );
  }
}
