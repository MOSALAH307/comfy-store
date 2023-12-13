import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    // console.log(search);
    // console.log(pathname);
    // console.log('number',pageNumber);
    const searchParams = new URLSearchParams(search);
    // console.log(+(searchParams.get('page'))+1);
    // console.log(searchParams.toString());
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        className={`join-item btn btn-xs sm:btn-md border-none ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    //first page
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));
    //dots
    if (page > 2 && page < pageCount - 1) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none"
          key="dots-1"
        >
          ...
        </button>
      );
    }
    //current page
    if (page > 1 && page < pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    //dots
    if (page > 2 && page < pageCount - 1) {
      pageButtons.push(
        <button
          className="join-item btn btn-xs sm:btn-md border-none"
          key="dots-2"
        >
          ...
        </button>
      );
    }
    //last page
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 join flex justify-end">
      <button
        className="join-item btn btn-xs sm:btn-md"
        onClick={() => {
          let prevPage = page - 1;
          if (prevPage < 1) prevPage = pageCount;
          handlePageChange(prevPage);
        }}
      >
        Prev
      </button>
      {renderPageButtons()}
      <button
        className="join-item btn btn-xs sm:btn-md"
        onClick={() => {
          let nextPage = page + 1;
          if (nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default ComplexPaginationContainer;
