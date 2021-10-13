import React from "react";
import s from './Pagination.module.css'
type PaginationPropsType = {
    totalUsersCount: number
    pageSize: number
    onClickPage: (page: number) => void
    activePage: number
}
export const Pagination: React.FC<PaginationPropsType> = (
    {
        totalUsersCount,
        pageSize,
        onClickPage,
        activePage,

    }
) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= 5; i++) {
        pages.push(i)
    }
    pages.push('...')
    pages.push(pagesCount)

    return <div>
        {pages.map(p => {
            return p === '...' ?
                <span key={p + 'page'} className={s.pages}>...</span> :
                <span key={p + ' page'}
                      onClick={() => onClickPage(+p)}
                      className={activePage === p ? `${s.activePage} ${s.pages}` : s.pages}>{p}</span>
        })}
    </div>
}

