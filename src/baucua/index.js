import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cua from './cua';
import Ca from './ca';
import Tom from './tom';
import Nai from './nai';
import Bau from './bau';
import Ga from './ga';
import Xoc from './Xoc'

class BauCua extends Component {
    render() {
        return (
            <div className="container-fluid bg-dark gameBauCua ">
                <div class="text-center text-danger game__title ">BÀI TẬP BẦU CUA CYBERSOFT</div>

                <div className="row">
                    <div className="col-12 text-center">
                        <div className="text-center mt-5">
                            <span className="p-3 bg-warning tienThuong">Tiền thưởng:<span className="text-success">{this.props.total} điểm</span></span>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-8">
                        <div className="row text-left mt-5">
                            <Cua />
                            <Nai />
                            <Ga />
                            <Tom />
                            <Ca />
                            <Bau />
                        </div>
                    </div>


                    <Xoc />
                </div>


            </div>
        )
    };
};
const mapStateToProps = state => {
    return {
        pic: state.baucuaReducer.pic,
        point: state.baucuaReducer.point,
        total: state.baucuaReducer.total

    };
};
export default connect(mapStateToProps)(BauCua)
