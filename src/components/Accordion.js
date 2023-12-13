import React, { useState, useEffect, useRef } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import bookdbtest from '../bookdbtest';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "#FDF6EA"}} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#202B32",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
    color: "#FDF6EA"
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: "#202B32",
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const TypographyStyles = styled(Typography)({
    fontFamily: 'Outfit',
    color: "#FDF6EA"
})

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('');
  const [allGenres,  setAllGenres] = useState([]);
  const [allAuthors, setAllAuthors] = useState([]);
  const genreRefs = useRef([]);

  const uniqueGenres = [...new Set(allGenres.map((genre) => genre.BookGenre))];
  const uniqueAuthors = [...new Set(allAuthors.map((author) => author.BookAuthor))];

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  console.log(bookdbtest)
  useEffect(() => {
      setAllGenres(bookdbtest)
  }, [])

  console.log(bookdbtest)
  useEffect(() => {
      setAllAuthors(bookdbtest)
  }, [])

  const scrollToGenre = (index) => {
    genreRefs.current[index].scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <TypographyStyles>About Us</TypographyStyles>
        </AccordionSummary>
        <AccordionDetails>
          <TypographyStyles>
            Book.it is a simple website that allows you to discover new books, learn more about said books, and find out where you can get your hands on them!
          </TypographyStyles>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <TypographyStyles>FAQ</TypographyStyles>
        </AccordionSummary>
        <AccordionDetails>
          <TypographyStyles>
            Question: What can I do on Book.it? <br/>
            Answer: You can search for books, and read them. <br/>

            <br/> More questions? Give us an email! See contact us below for details!
          </TypographyStyles>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <TypographyStyles>Contact Us</TypographyStyles>
        </AccordionSummary>
        <AccordionDetails>
          <TypographyStyles>
            You can reach us at book.it@gmail.com! Give us an email! We'd love to hear from you!
          </TypographyStyles>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'genres'} onChange={handleChange('genres')} style={{ width: "100%" }}>
        <AccordionSummary aria-controls="genres-content" id="genres-header">
            <TypographyStyles>Genres</TypographyStyles>
        </AccordionSummary>
        <AccordionDetails>
            <TypographyStyles>
                {uniqueGenres.map((genre, index) => (
                    <React.Fragment key={index}>
                        <span
                            id={`genre-header-${genre}`}
                            ref={(ref) => (genreRefs.current[index] = ref)}
                            style={{ cursor: 'pointer' }}
                        >
                            {genre}
                        </span>
                        <br />
                    </React.Fragment>
                ))}
            </TypographyStyles>
        </AccordionDetails>
    </Accordion>

    <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} style={{ width: "100%" }}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
            <TypographyStyles>Authors</TypographyStyles>
        </AccordionSummary>
        <AccordionDetails>
            <TypographyStyles>
                {uniqueAuthors.map((author) => (
                    <>
                        {author} <br/>
                    </>
                ))}
            </TypographyStyles>
        </AccordionDetails>
    </Accordion>
    </div>
  );
}
