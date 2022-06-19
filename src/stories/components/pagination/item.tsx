interface PaginationItemProps {
  children?: JSX.Element[] | JSX.Element | string;
  selected?: number;
  page?: number;
  [x: string]: any | undefined;
}

const PaginationItem = ({
  children,
  selected,
  page,
  ...props
}: PaginationItemProps) => {
  const handleClick = () => props?.onClick(page);
  return (
    <li
      {...props}
      className={`page-item ${page && selected === page ? 'active' : ''}`}
      onClick={handleClick}
    >
      <span className="page-link">{children}</span>
    </li>
  );
};

export { PaginationItem };
