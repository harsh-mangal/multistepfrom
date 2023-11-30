import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Forms.css';
import Noc from './Noc';
import Aom from './Aom';
import Aof from './Aof';
import Medication from './Medication';
import Mod from './Mod';
import Hom from './Hom';
import Any from './Any';

const Form = () => {
  const [page, setPage] = useState(0);

  const FormTitles = [
    "name of the child",
    'age of the mother',
    "age of the father",
    "medication",
    "mode of delivery",
    "health of mother",
    "any other ND",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Noc />;
      case 1:
        return <Aom />;
      case 2:
        return <Aof />;
      case 3:
        return <Medication />;
      case 4:
        return <Mod />;
      case 5:
        return <Hom />;
      case 6:
        return <Any />;
      default:
        return null;
    }
  };

  return (
    <div className="form">
      <div className="progressbar"></div>
      <div className="form_container">
        <CSSTransition
          in={true}
          timeout={500}
          classNames="fade"
          unmountOnExit
        >
          <div>{PageDisplay()}</div>
        </CSSTransition>
        <button
          disabled={page === 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Prev
        </button>
        <button
          disabled={page === FormTitles.length - 1}
          onClick={() => {
            setPage((currPage) => currPage + 1);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Form;
