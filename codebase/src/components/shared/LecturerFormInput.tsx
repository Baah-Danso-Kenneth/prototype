import React, { useState, useEffect } from 'react';
import filterIcon from '../../assets/images/fileter.jpg';
import { ButtonSection, FilterSection, FilterTitleImage, FormDirection, SubmitButton } from 'styles/LecturerPageStyled';
import { Formik, Form } from 'formik';
import { TextInput } from 'components/FormLib';
import { toast } from 'react-toastify';

function LecturerFormInput() {
  const [filterOptions, setFilterOptions] = useState({
    allTitle: '',
    date: '',
    deadline: '',
  });
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_BASEURL_APP}/filter/search?allTitle=${filterOptions.allTitle}&date=${filterOptions.date}&deadline=${filterOptions.deadline}&page=${page}`
        );
        const data = await response.json();
        setResults(data);
      } catch (error) {
        toast.error('error');
      }
    };

    fetchData();
  }, [filterOptions, page]);

  const handleSubmit = () => {
    setPage(1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  return (
    <FilterSection>
      <FilterTitleImage>
        <img src={filterIcon} alt="filter_img" />
        <p>Filters</p>
      </FilterTitleImage>

      <div>
        <Formik
          initialValues={{
            allTitle: '',
            date: '',
            deadline: '',
          }}
          onSubmit={() => handleSubmit()}
        >
          <Form>
            <FormDirection>
              <label>Title</label>
              <TextInput
                name="allTitle"
                type="text"
                placeholder="All title"
                icon=""
                value={filterOptions.allTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilterOptions({
                    ...filterOptions,
                    allTitle: e.target.value,
                  })
                }
              />

              <label className="second_label">Date</label>
              <TextInput
                name="date"
                type="text"
                placeholder="Date"
                icon=""
                className="input_text_2"
                value={filterOptions.date}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilterOptions({
                    ...filterOptions,
                    date: e.target.value,
                  })
                }
              />

              <label className="third_label">Deadline</label>
              <TextInput
                name="deadline"
                type="text"
                placeholder="Deadline"
                icon=""
                className="input_text_3"
                value={filterOptions.deadline}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFilterOptions({
                    ...filterOptions,
                    deadline: e.target.value,
                  })
                }
              />
            </FormDirection>

            <SubmitButton type="submit">Show result</SubmitButton>
          </Form>
        </Formik>
      </div>

      <ButtonSection>
        <button onClick={handlePrev} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNext} disabled={!results.length}>
          Next
        </button>
      </ButtonSection>
    </FilterSection>
  );
}

export default LecturerFormInput;