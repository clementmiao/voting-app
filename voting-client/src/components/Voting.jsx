import React from 'react';

export default React.createClass({
  render: function() {
    return <div>
      {this.props.winner ?
        <Winner ref='Winner' winner={this.props.winner} /> :
        <Vote {...this.props} />}
    </div>;
  }
});
