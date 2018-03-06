import React, { Component } from 'react';
import Modal from 'react-modal';
import TA from './TA pic.jpg'
import TA1 from './TA pic3.jpg'
import s from './MainBoard.css';


const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#container');

const TodoForm = ({addTodo}) => {
  // Input tracker
  let input;

  return (
    <div>

    </div>
  );
};

const Todo = ({todo, openModal, closeModal, modalIsOpen}) => {
  // Each Todo
  return (
    <div  className={s["todo-step"]} >
      <input onClick={() => {openModal()}} type="checkbox"/>{todo.text}1 <TAImg todo={todo}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        className={s["rectangle-14"]}
        contentLabel="Example Modal"
        >
        {/*<div className={s["rectangle-2"]["small"] }></div>*/}
        {/*<div className={s["rectangle-2"]}></div>*/}

        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
}

const TAImg = ({todo}) => {
  if(todo.img) {
    return (<img src={TA1} className={s["ta-image"]}/>);
  }

  return (<div></div>);
}

const TodoList = ({todos, openModal, closeModal, modalIsOpen}) => {
  // Map through the todos
  const todoNode = todos.map((todo) => {
    return (<Todo todo={todo} key={todo.id} openModal={openModal} closeModal={closeModal} modalIsOpen={modalIsOpen}/>)
  });
  return (<div className="list-group" style={{marginTop:'30px'}}>{todoNode}</div>);
}

const Title = ({todoCount}) => {
  return (
    <div>
      <div>
        <h6>Steps - To Do ({todoCount})</h6>
      </div>
    </div>
  );
}

class MainBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false,
          data: [
            {"id":"00001","text":"7 Functions", "img": {TA1}},
            {"id":"00002","text":"Problem Solving in Pre-algebra"},
            {"id":"00003","text":"5 Algebra"},
            {"id":"00004","text":"Help Your Fellows"},
            {"id":"00005","text":"Welcome"}
            ]
        };
        this.afterOpenModal = this.afterOpenModal.bind(this);
    }

    openModal() {
      debugger
      console.log('openModal-b', this.state.modalIsOpen)
        this.setState({modalIsOpen: true});
      console.log('openModal', this.state.modalIsOpen)

    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
//        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        console.log('closeModal')

        this.setState({modalIsOpen: false});
      console.log('closeModal', this.state.modalIsOpen)
    }

  addTodo(val){
    // Assemble data
    const todo = {text: val}
    // Update data

        this.state.data.push(todo);
        this.setState({data: this.state.data});
  }

  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate', nextProps, nextState)
      if(this.state.modalIsOpen !== nextState.modalIsOpen){
        return true
      }
      return true

  }




    render() {
        return (
            <div className={s.MainBoard}>
              <div>
                <Title todoCount={this.state.data.length}/>
                <TodoForm addTodo={this.addTodo.bind(this)}/>
                <TodoList
                  todos={this.state.data}
                  openModal={this.openModal.bind(this)}
                  closeModal={this.closeModal.bind(this)}
                  modalIsOpen={this.state.modalIsOpen}
                />
              </div>
              {/*<div className={s["rectangle-2"]}*/}
                     {/*onClick={this.openModal}>*/}
                    {/*<Modal*/}
                        {/*isOpen={this.state.modalIsOpen}*/}
                        {/*onAfterOpen={this.afterOpenModal}*/}
                        {/*onRequestClose={this.closeModal}*/}
                        {/*className={s["rectangle-14"]}*/}
                        {/*contentLabel="Example Modal"*/}
                    {/*>*/}
                        {/*<div className={s["rectangle-2"]["small"] }></div>*/}
                        {/*<div className={s["rectangle-2"]}></div>*/}

                        {/*<button onClick={this.closeModal}>close</button>*/}


                    {/*</Modal>*/}
                    {/*<img src={TA1} className={s["ta-image"]}/>*/}
                    {/*<div>7 Functions</div>*/}

                {/*</div>*/}
            </div>
        )}
}

export default MainBoard;


