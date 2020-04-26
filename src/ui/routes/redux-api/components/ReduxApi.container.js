import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { mathApiSelector } from 'redux-store/slices/mathApiSlice';
import fetchMathFact from 'api/numbersapi/';
import ReduxApiResults from './results';
import ReduxApiLoading from './loading';
import ReduxApiFetch from './fetch';
import ReduxApiError from './error';

const ReduxApi = () => {
  const dispatch = useDispatch();
  const { pending, result, hasError, errorMessage } = useSelector(
    mathApiSelector
  );
  const [number, setNumber] = useState(1999);
  const [searchNumber, setSearchNumber] = useState(number);

  useEffect(() => {
    dispatch(fetchMathFact(searchNumber));
  }, [dispatch, searchNumber]);

  const renderApi = () => {
    if (pending) return <ReduxApiLoading />;
    if (hasError)
      return (
        <>
          <ReduxApiError errorMessage={errorMessage} />
          <ReduxApiFetch
            number={number}
            setNumber={(value) => setNumber(value)}
            onSearchClick={() => setSearchNumber(number)}
          />
        </>
      );
    return (
      <>
        <ReduxApiFetch
          number={number}
          setNumber={(value) => setNumber(value)}
          onSearchClick={() => setSearchNumber(number)}
        />
        <ReduxApiResults
          number={result.number}
          text={result.text}
          found={result.found}
        />
      </>
    );
  };

  return renderApi();
};

export default ReduxApi;
