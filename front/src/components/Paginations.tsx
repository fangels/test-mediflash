import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  page: number;
  nbMaxPages: number;
};
export default function Paginations({ page, nbMaxPages }: Props) {
  return (
    <div className={'Pagination-container'}>
      {page > 1 && (
        <Link className={'Pagination Pagination-link'} to={'../pokedex/1'}>
          {'<< First'}
        </Link>
      )}
      {page > 1 && (
        <Link
          className={'Pagination Pagination-link'}
          to={`../pokedex/${page - 1}`}
        >
          {'< Previous'}
        </Link>
      )}
      <div className={'Pagination'}>{page}</div>
      {page < nbMaxPages && (
        <Link
          className={'Pagination Pagination-link'}
          to={`../pokedex/${page + 1}`}
        >
          {'Next >'}
        </Link>
      )}
      {page < nbMaxPages && (
        <Link
          className={'Pagination Pagination-link'}
          to={`../pokedex/${nbMaxPages}`}
        >
          {`Last >>`}
        </Link>
      )}
    </div>
  );
}
