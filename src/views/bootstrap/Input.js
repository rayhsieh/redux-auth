import React, { PropTypes } from 'react';
// import Input from 'react-bootstrap/lib/Input';
import { Glyphicon } from 'react-bootstrap';
// import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Immutable from 'immutable';

class AuthInput extends React.Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.object,
  };

  static defaultProps = {
    label: '',
    value: null,
    errors: Immutable.fromJS([]),
  };

  handleInput(ev) {
    this.props.onChange(ev.target.value);
  }

  renderErrorList() {
    if (this.props.errors.size) {
      return (
        <div className="auth-error-message has-error">
          {
        this.props.errors.map((err, i) => (
          <p
            className="control-label inline-error-item"
            style={{
              paddingLeft: '20px',
              position: 'relative',
              marginBottom: '28px',
            }}
            key={i}
          >
            <Glyphicon
              glyph="exclamation-sign"
              style={{
                position: 'absolute',
                left: 0,
                top: 2,
              }}
            /> {this.props.label} {err}
          </p>
        ))}
        </div>
        );
    } else {
      return <span />;
    }
  }

  render() {
    return (
      <div>
        {this.renderErrorList()}
      </div>
      );
  }
}

export default AuthInput;
