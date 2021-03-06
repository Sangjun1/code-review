import React, {Component} from 'react';
import logo from '../logo.svg';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isRolling: true,
      title: 'Welcome to React',
    };
  };

  handleLogoClick = () =>{
    if (this.state.isRolling){
      this.setState({isRolling:false, title :'Stop React'});
    }else{
      this.setState({isRolling:true, title :'Start React'});
    }
  };

  render() {

    const {isRolling, title} = this.state;

    return (
      <header className={Header}>
        <div onClick={this.handleLogoClick}>
          <img
            src={logo}
            className={`App-logo ${isRolling ? 'rotate' : ''}`}
            alt="logo"
            />
        </div>
        <h1 className="App-title">{title}</h1>
      </header>
    );
  }
}

export default Header;
