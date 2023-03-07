export type PaginationProps = {
    previous?: string | null
    next?: string | null
    onPrevClick: () => void
    onNextClick: () => void
    onLimitChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    limit: number
  }
  