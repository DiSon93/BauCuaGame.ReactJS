import React, { Component } from 'react';
import { connect } from 'react-redux'

class Xoc extends Component {

    renderXucXac = () => {
        let { xoc } = this.props;
        return xoc.map((item, index) => {
            // console.log(item.ma)
            return (
            
                    <img key={index} className="mt-3" style={{ width: 50 }} src={item.img} />
             
            )
        })
      

    };
    // renderXucXac = () => {
    //     return this.props.xoc.map((item, index) => {
    //         return  <img key={index} className="mt-3" style={{ width: 50 }} src={item.img} alt="item.ma"/>
    //     })
    // }


    render() {
        // { this.props.kiemTra() };
        return (
            <div className="col-4">
                <div style={{ display: 'flex', height: '100%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <style dangerouslySetInnerHTML={{ __html: "@keyframes animBauCua1609255060501 { \n            0% {left: -50px}\n          25% {left: 50px}\n            50%{left: 0px}\n            75%{left: -50px}\n            100%{left: 50px}\n        }\n        .xucXac{\n            left: 0px;\n            position: relative;\n            animation: animBauCua1609255060501 1s;\n        }" }} />

                    {this.renderXucXac()}



                    <button className="btn btn-success pl-5 pr-5 mt-5 pt-3 pb-3" style={{ fontSize: 25 }}
                        onClick={() => this.props.playGame()}>Xốc</button>

                </div>
            </div>
        )
    };
};
const mapDispatchToProps = dispatch => {
    return {
        playGame: () => {
            const action = {
                type: 'PLAYGAME',
            };
            dispatch(action);
        },
        // kiemTra: () => {
        //     const action = {
        //         type: "CHECK",
        //     };
        //     dispatch(action);
        // }



    };
};

const mapStateToProps = state => {
    return {
        pic: state.baucuaReducer.pic,
        point: state.baucuaReducer.point,
        total: state.baucuaReducer.total,
        xoc: state.baucuaReducer.xoc

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Xoc)
