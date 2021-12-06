import React, { Component } from "react";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  border: 1px solid lightgrey;
  padding: 8px;
  margin-bottom: 8px;
  border-radius: 2px;
  background-color: ${(props) =>
    props.isDragDisabled
      ? "lightgrey"
      : props.isDragging
      ? "lightgreen"
      : "white"};

  display: flex;
`;

{
  /* //below: for drag-handling UI */
}
// const Handle = styled.div`
//   width: 20px;
//   height: 20px;
//   background-color: orange;
//   border-radius: 4px;
//   margin-right: 8px;
// `;

class Task extends Component {
  render() {
    const isDragDisabled = this.props.task.id === "task-1"; //conditional disabling, can be ordered but not draggable
    return (
      <Draggable
        draggableId={this.props.task.id}
        index={this.props.index}
        isDragDisabled={isDragDisabled}
        // isDragDisabled={this.props.task.id === "task-1"} //conditional disabling
      >
        {(provided, snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {/* below: for drag-handling UI */}
            {/* <Handle {...provided.dragHandleProps} /> */}
            {this.props.task.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Task;
