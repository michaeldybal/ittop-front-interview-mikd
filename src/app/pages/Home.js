import React, {Fragment} from 'react';

import AuthorInfo from '../presentational/author/AuthorInfo';
import FavoriteTech from '../presentational/author/FavoriteTech';

export default function Home() {
  return (
    <Fragment>
      <AuthorInfo />
      <FavoriteTech />
    </Fragment>
  );
}
