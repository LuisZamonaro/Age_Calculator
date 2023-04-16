import { useEffect, useState } from 'react'
import iconArrow from '../../assets/images/icon-arrow.svg'
import dateCalculator from '../utils/dateCalculator'

import * as S from './styles'

export default function HeaderPage({date, setDate}) {

    // const [selected, setSelected] = useState(false)
    const [quantityState, setQuantityState] = useState('')
    const [quantityState2, setQuantityState2] = useState('')
    const [quantityState3, setQuantityState3] = useState('')
    const [emptyError, setEmptyError] = useState(false)
    const [emptyError2, setEmptyError2] = useState(false)
    const [emptyError3, setEmptyError3] = useState(false)


    function handleQuantity(event) {
        const newValue = parseInt(event.target.value);

        if (newValue > 31) {
            setQuantityState('')
        } else {
            setQuantityState(event.target.value.slice(0,2));
        }

        if (!event.target.value) {
            setQuantityState('')
            setEmptyError(true)
            return
        }else {
            setEmptyError(false)
        }
    }

    function handleQuantity2(event) {
        const newValue2 = parseInt(event.target.value)

        if (newValue2 > 12) {
            setQuantityState2('')
        }else {
            setQuantityState2(event.target.value.slice(0,2));
        }
        if (!event.target.value) {
            setQuantityState2('')
            setEmptyError2(true)
    }else {
        setEmptyError2(false)
    }
}

function handleQuantity3(event) {
    const newValue3 = parseInt(event.target.value)

    if (newValue3 > 2023 || 1 < newValue3 > 99 ) {
        setQuantityState3('')
    }else {
        setQuantityState3(event.target.value.slice(0,4))
    }

    if (!event.target.value) {
        setQuantityState3('')
        setEmptyError3(true)
    }else {
        setEmptyError3(false)
    }
}

    function handleClick() {
        if (quantityState && quantityState2 && quantityState3) {
            // se estiverem todos completos
            const date = dateCalculator(quantityState, quantityState2, quantityState3);
            setDate({
                day: date.day,
                month: date.month,
                year: date.year
            })
        }
    }

useEffect(() => {
    if (quantityState2 && [4,6,9,11].includes(parseInt(quantityState2))) {
        if (quantityState > 30) {
            setQuantityState('');
        }
        return;
    }
    if (quantityState2 && [2].includes(parseInt(quantityState2))) {
        if (quantityState > 28) {
            setQuantityState('');
        }
        return;
    }
}, [quantityState, quantityState2])

    return (
        <div className="containerHeader">
            <S.WrapperHeader>
                <div className="containerInfos">
                    <div className="containerPartTop">
                        <S.InfoTop error={emptyError}>
                            DAY
                        </S.InfoTop>
                        <S.InputAge error={emptyError}>
                            <input pattern="[0-9]*[.]?[0-9]+" type="number" placeholder="DD" id='inpPlaceholder' value={quantityState} onChange={handleQuantity} />
                        </S.InputAge>
                        {
                            emptyError && (<div className='errorEmpty'>this field is required</div>)
                        }
                        {/* <div className="errorInvalid">
                            must be a valid day
                        </div> */}
                    </div>
                    <div className="containerPartTop">
                        <S.InfoTop error={emptyError2}>
                            MONTH
                        </S.InfoTop>
                        <S.InputAge error={emptyError2}>
                            <input pattern="[0-9]*[.]?[0-9]+" type="number" placeholder="MM" id='inpPlaceholder' value={quantityState2} onChange={handleQuantity2}  />
                        </S.InputAge>
                        {
                            emptyError2 && (<div className='errorEmpty'>this field is required</div>)
                        }
                        {/* <div className="errorInvalid">
                            must be a valid day
                        </div> */}
                    </div>
                    <div className="containerPartTop">
                        <S.InfoTop error={emptyError3}>
                            Year
                        </S.InfoTop>
                        <S.InputAge error={emptyError3}>
                            <input pattern="[0-9]*[.]?[0-9]+" type="number" placeholder="YYYY" id='inpPlaceholder' value={quantityState3} onChange={handleQuantity3}  />
                        </S.InputAge>
                        {
                            emptyError3 && (<div className='errorEmpty'>this field is required</div>)
                        }
                        {/* <div className="errorInvalid">
                            must be a valid day
                        </div> */}
                    </div>
                </div>
                <S.Dividers>
                    <div className="dividers">
                        <div className="lineDividers">
                            _________________________________________________________________
                        </div>

                        <div className="iconArrow">
                            <img src={iconArrow} onClick={handleClick}/>
                        </div>
                        <div className="dividersMobile">
                            <div className="dividersM">
                                __________________________________
                            </div>
                            <div className="iconArrowM">
                                <img id='arrowMobile' src={iconArrow} onClick={handleClick}/>
                            </div>
                        </div>
                    </div>
                </S.Dividers>
            </S.WrapperHeader>

        </div>

    )
}