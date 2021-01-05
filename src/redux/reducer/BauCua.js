
const initialState = {
    pic: { bau: 0, ca: 0, cua: 0, ga: 0, nai: 0, tom: 0 },
    point: {
        bau: 100,
        ca: 100,
        cua: 100,
        ga: 100,
        nai: 100,
        tom: 100
    },
    xoc: [
        { ma: "bau", img: "./image/bau.png" },
        { ma: "bau", img: "./image/bau.png" },
        { ma: "ca", img: "./image/ca.png" },

    ],
    total: 500
};

const baucuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case `THEM_${action.obj}`: {

            const picNew = { ...state.pic, [action.obj]: state.pic[action.obj] + action.index };
            const totalNew = state.total - action.index;
            if (picNew[action.obj] < 0 || totalNew < 0) {
                return state;
            }
            return { ...state, pic: picNew, total: totalNew }
        }
        case 'PLAYGAME': {
            let mangXoc = [];
            let totalNew = state.total;
            let picNew = { bau: 0, ca: 0, cua: 0, ga: 0, nai: 0, tom: 0 };
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xoc = "";
                if (soNgauNhien == 1) {
                    xoc = "cua"
                };
                if (soNgauNhien == 2) {
                    xoc = "nai"
                };
                if (soNgauNhien == 3) {
                    xoc = "ga"
                };
                if (soNgauNhien == 4) {
                    xoc = "tom"
                }
                if (soNgauNhien == 5) {
                    xoc = "ca"
                };
                if (soNgauNhien == 6) {
                    xoc = "bau"
                };
                let xocNgauNhien = { ma: xoc, img: `image/${xoc}.png` };

                let point = 0;        

                for (let cuoc in state.pic) {
                    console.log(cuoc);
                    if (cuoc == xoc) {
                        // state.pic[cuoc] *= 2;
                        point = state.pic[cuoc] * 2;
                        // picNew = { ...state.pic, [cuoc]: 0 };
                    };
                }
                totalNew += point;
    
                mangXoc.push(xocNgauNhien);

            };
            return { ...state, total: totalNew, xoc: mangXoc, pic: picNew };



            // return { ...state, xoc: mangXoc };
        }
        // case 'CHECK': {

        //     for (let cuoc in state.pic) {

        //         let totalNew = 0;
        //         let picNew = [];

        //         return state.xoc.map((item, index) => {
        //             if (cuoc == item.xoc) {
        //                 // state.pic[cuoc] *= 2;
        //                 totalNew = state.total + state.pic[cuoc] * 2;
        //                 picNew = { ...state.pic, [cuoc]: 0 };
        //                 return { ...state, pic: picNew, total: totalNew }

        //             };
        //             return state;
                   

        //         })
        //     }
        // }



        default:
            return state
    }
}
export default baucuaReducer
