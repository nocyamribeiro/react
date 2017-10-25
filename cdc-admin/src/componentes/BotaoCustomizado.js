import React, { Component } from 'react';
export default class BotaoCustomizado extends Component{

    render() {
        return(
          <div className="pure-control-group">
            <button type={this.props.type} className="pure-button pure-button-primary">Gravar</button>
          </div>
      );
    }
}
