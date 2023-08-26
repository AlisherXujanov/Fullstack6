import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Post from './Post.jsx'

function Items({ elements, elClass, containerClass, itemsPerPage }) {
    let [page, setPage] = useState(1);

    const pageNumbers = []
    const totalPages = Math.ceil(elements.length / itemsPerPage)

    for (let i = 0; i < totalPages; i++) {
        const current = i + 1;
        pageNumbers.push(
            <Pagination.Item
                key={i}
                active={current === page}
                onClick={() => setPage(current)}
            >
                {current}
            </Pagination.Item>
        );
    }
    const pageLinkStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px'
    }

    return (
        <div>
            {itemsPerPage < elements.length &&
                <Pagination style={pageLinkStyle}>
                    <Pagination.Prev
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    />
                    {pageNumbers}
                    <Pagination.Next
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    />
                </Pagination>
            }
            <div className={containerClass ?? 'all-items-pagination'}>
                {elements
                    .slice((page - 1) * itemsPerPage, page * itemsPerPage)
                    .map((element, index) => (
                        <div
                            key={index}
                            id={element.id + "-" + elClass}
                            className={elClass}
                        >
                            <Post
                                title={element.title}
                                description={element.description}
                                views={element.views}
                                date={element.date}
                                location={element.location}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default Items;