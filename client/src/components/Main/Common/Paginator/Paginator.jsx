import React, {useState} from "react";
import style from "./Paginator.module.css";

const Paginator = (props) => {
    // Делим кол-во пользователей на размер страницы
    let countPages = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];

    for (let i = 1; i <= countPages; i++) {
        pages.push(i);
    }

    let portionSize;
    if (props.portionSize) {
        portionSize = props.portionSize;
    } else portionSize = 10;

    // Кол-во порций
    let portionCount = Math.ceil(countPages / portionSize);
    //
    let [portionNumber, setPortionNumber] = useState(1);
    // Левая и правая границы порции
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={style.paginator}>
            {portionNumber > 1 &&
            <i className={"fa fa-angle-left"} id={style.arrow}
               onClick={() => setPortionNumber(portionNumber - 1)}
               aria-hidden="true"/>
            }
            {pages
                .filter((page) => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(n => {
                    return <span className={props.currentPage === n ? style.selected : style.number}
                                 onClick={() => {
                                     props.onPageChange(n)
                                 }}>{n}</span>
                })
            }
            {portionNumber < portionCount &&
            <i className={"fa fa-angle-right"} id={style.arrow}
               onClick={() => setPortionNumber(portionNumber + 1)}
               aria-hidden="true"/>
            }
        </div>
    );
}

export default Paginator;