import { ChevronRight } from "lucide-react";

interface BlogPaginationProps {
  currentPage?: number;
  totalPages?: number;
}

export function BlogPagination({ currentPage = 1, totalPages = 3 }: BlogPaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination-widget" aria-label="Blog pagination">
      <ul>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#"
              className={page === currentPage ? "active" : undefined}
              aria-current={page === currentPage ? "page" : undefined}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <a href="#" aria-label="Next page">
            <ChevronRight aria-hidden size={16} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
