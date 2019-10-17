import * as React from "react";



interface IState {
}


interface IProps {
  onClick:  (ev: React.MouseEvent<HTMLLIElement>) => void;
}


class Navbar extends React.Component<IProps, IState> {

  render(){
      return (
        <>
          <div className="row main-header">
            <h1>Address Book</h1>
          </div>
          <div className="row top-navbar">
            <ul className="menubar">
              <li>HOME</li>
              <li id="btnAdd" onClick={this.props.onClick} >+ADD</li>
              <li className="float-right image-icon"> <img src="/assets/images/blog-icon.png" alt="icon" className="img-icon" /></li>
            </ul>
          </div>
        </>
    );
    }
    
}
 

export default Navbar;