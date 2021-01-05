import React, { Component } from 'react';
import { connect } from 'react-redux'

class Tom extends Component {
    render() {
        return (
            <div className="col-4 text-center mt-5">
                <img src="image/tom.png" alt="image/tom.png" style={{ width: 250 }} /><br /><br />
                <span className="p-3 pl-5 pr-5 bg-warning mt-2" style={{ borderRadius: '5%', fontSize: 25 }}>
                    Cược:<button className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }} 
                    onClick={() => this.props.cong(this.props.pic.tom, 100)}>+</button><span className="text-success">{this.props.pic.tom}</span>
                    <button className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }}
                     onClick={() => this.props.cong(this.props.pic.tom, -100)}>-</button></span>
            </div>
        )
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cong: (time, index) => {
            const action = {
                type: 'THEM_tom',
                value: time,
                index,
                obj: 'tom'
            };
            dispatch(action)

        }
    };
};
const mapStateToProps = state => {
    return {
        pic : state.baucuaReducer.pic,
        point : state.baucuaReducer.point,
        total : state.baucuaReducer.total

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Tom)