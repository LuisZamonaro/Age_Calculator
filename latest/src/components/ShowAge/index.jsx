import * as S from './syles'

export default function ShowAge({date}) {
    return (
        <div className="containerShowAge">
            <S.WrapperShowAge>
                <div className="infoAge">
                    <span className="hyphen">{date.year ? date.year : '--'}</span> years
                </div>
                <div className="infoAge">
                    <span className="hyphen">{date.month ? date.month : '--'}</span> months
                </div>
                <div className="infoAge">
                    <span className="hyphen">{date.day ? date.day : '--'}</span> days
                </div>
            </S.WrapperShowAge>
        </div>
    )
}