import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useIntl } from 'react-intl';
import useStyles from './SearchMovie.styles';
import MovieActions from '../../../redux/actions/movie.actions';
import Box from '../../../components/box/Box';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';

//Consulta de peliculas - Búsqueda
const SearchMovie = ({ searchMovies }) => {
  const { formatMessage } = useIntl();
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  const search = () => {
    searchMovies(searchText);
  };

  const updateSearchText = e => {
    setSearchText(e.target.value);
  };

  return (
    <Box
      title={formatMessage({ id: 'searchPage.title' })}
      classes={{
        boxContent: classes.root,
      }}
    >
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor='email'>
          {formatMessage({ id: 'searchPage.text.placeholder' })}
        </InputLabel>
        <Input
          id='email'
          value={searchText}
          onChange={updateSearchText}
          classes={{
            root: classes.textFieldRoot,
          }}
        />
      </FormControl>
      <Button
        variant='contained'
        color='primary'
        classes={{
          root: classes.searchBtnRoot,
        }}
        disabled={searchText.trim().length === 0}
        onClick={search}
      >
        {formatMessage({ id: 'btnAction.search' })}
      </Button>
    </Box>
  );
};

const mapDispatchToProps = {
  searchMovies: MovieActions.searchMovies,
};

export default connect(null, mapDispatchToProps)(SearchMovie);
