import React from "react";
import PropTypes from "prop-types";

export default class Accordion extends React.Component {
  static propTypes = {
    items: PropTypes.array,
    defaultActive: PropTypes.number
  };

  static Item({ title, children }) {
    return (
      <div>
        <div className="title">{title}</div>
        <div className="body">{children}</div>
      </div>
    );
  }

  state = {
    active: this.props.defaultActive || 0
  };

  render() {
    let { items } = this.props;
    return (
      <div className="accordeon">{items && items.map(this._renderItem)}</div>
    );
  }

  _renderItem = (item, idx) => {
    let { active } = this.state;
    return (
      <div
        className={`box ${idx === active ? "active" : ""}`}
        onClick={() => this._handleClickTitle(idx)}
      >
        {item}
      </div>
    );
  };

  _handleClickTitle = idx => {
    this.setState(state => ({
      ...state,
      active: state.active === idx ? undefined : idx
    }));
  };
}
