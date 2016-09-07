// Copyright (c) YugaByte, Inc.

import React, { Component, PropTypes } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import 'react-fa'

export default class ProgressList extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  }

  static defaultProps = {
    type: 'None'
  }

  getIconByType(type) {
    if ( type === "Initializing" ) {
      return "fa fa-clock-o"
    } else if ( type === "Success" ) {
      return "fa fa-check-square-o"
    } else if ( type === "Running" ) {
      return "fa fa-refresh"
    }
    return null
  }

  render() {
    const listItems = this.props.items.map(function(item, idx) {
      var iconType = this.getIconByType(item.type)
      return (
        <ListGroupItem key={idx} bsClass="progress-list-item">
          <i className={iconType}></i>{item.name}
        </ListGroupItem>);
    }, this);

    return (
      <ListGroup bsClass="progress-list">
        { listItems }
      </ListGroup>)
  }
}
