import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui";

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData();
  const { pageCount, page } = meta.pagination;

  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, active }) => (
    <Button
      key={pageNumber}
      variant={active ? "default" : "outline"}
      size="sm"
      className={active ? "pointer-events-none" : ""}
      onClick={() => handlePageChange(pageNumber)}
    >
      {pageNumber}
    </Button>
  );

  const renderPageButtons = () => {
    const buttons = [];

    // Перша сторінка
    buttons.push(addPageButton({ pageNumber: 1, active: page === 1 }));

    // ... якщо поточна сторінка далеко від початку
    if (page > 3) {
      buttons.push(
        <span
          key="dots-start"
          className="px-2 select-none text-muted-foreground"
        >
          ...
        </span>
      );
    }

    // Сторінки навколо поточної
    for (
      let i = Math.max(2, page - 1);
      i <= Math.min(pageCount - 1, page + 1);
      i++
    ) {
      buttons.push(addPageButton({ pageNumber: i, active: i === page }));
    }

    // ... якщо поточна сторінка далеко від кінця
    if (page < pageCount - 2) {
      buttons.push(
        <span key="dots-end" className="px-2 select-none text-muted-foreground">
          ...
        </span>
      );
    }

    // Остання сторінка (якщо більше 1)
    if (pageCount > 1) {
      buttons.push(
        addPageButton({ pageNumber: pageCount, active: page === pageCount })
      );
    }

    return buttons;
  };

  if (pageCount < 2) return null;

  return (
    <div className="flex justify-end mt-8 space-x-2">
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(page === 1 ? pageCount : page - 1)}
      >
        Prev
      </Button>

      {renderPageButtons()}

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(page === pageCount ? 1 : page + 1)}
      >
        Next
      </Button>
    </div>
  );
};

export default ComplexPaginationContainer;
