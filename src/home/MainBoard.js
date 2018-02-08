import React, { Component } from 'react';
import Modal from 'react-modal';
import TA from './TA pic.jpg'
import TA1 from './TA pic3.jpg'
import './MainBoard.css';


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

class MainBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalIsOpen: false
        };
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
//        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }


    render() {
        return (
            <div className="MainBoard">
                <p className="App-intro">

                </p>
                <div className="rectangle-2"
                     onClick={this.openModal}>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        className="rectangle-14"
                        contentLabel="Example Modal"
                    >
                        <div className="rectangle-2 small"></div>
                        <div className="rectangle-2"></div>

                        <button onClick={this.closeModal}>close</button>


                    </Modal>
                    <img src={TA1} className="ta-image"/>
                    <div>7 Functions</div>

                </div>
            </div>
        )}
}

export default MainBoard;


