import { useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';
import { pageState } from 'src/atoms/page';
import { useEndPage } from 'src/lib/hooks/useEndPage';
import { PaginationItem } from './item';

interface PaginationProps {
  paginationItemCount: number;
}

const Pagination = ({ paginationItemCount }: PaginationProps) => {
  const [selected, setSelected] = useRecoilState(pageState);
  const [basePage, setBasePage] = useState<number>(1);
  const { isLoading, data, error } = useEndPage();

  const endPage = useMemo(() => {
    return !isLoading && !error && data?.endPage ? data.endPage : 10;
  }, [isLoading, data, error]);
  const pageItemArray = useMemo(() => {
    return Array.from({ length: paginationItemCount }, (_, i) => i + 1);
  }, [paginationItemCount]);

  const changePage = (page: number) => {
    setSelected(page);
    if (page < 3) setBasePage(1);
    else if (page > endPage - 2) setBasePage(endPage - 4 > 0 ? endPage - 4 : 1);
    else setBasePage(page - 2);
  };
  const changePageToStart = () => {
    setSelected(1);
    setBasePage(1);
  };
  const changePageToEnd = () => {
    setSelected(endPage);
    setBasePage(endPage - 4 > 0 ? endPage - 4 : 1);
  };

  return (
    <nav>
      <ul className="pagination">
        <PaginationItem onClick={changePageToStart}>&laquo;</PaginationItem>
        {pageItemArray.map((val, idx, arr) => {
          return (
            val <= endPage && (
              <PaginationItem
                key={idx}
                selected={selected}
                page={basePage + idx}
                onClick={changePage}
              >
                {basePage + idx + ''}
              </PaginationItem>
            )
          );
        })}
        <PaginationItem onClick={changePageToEnd}>&raquo;</PaginationItem>
      </ul>
    </nav>
  );
};

export { Pagination };
