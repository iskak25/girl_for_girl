import React from 'react'
import offerStyle from './WeOffer.module.scss'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const WeOffer = () => {
  const [expanded, setExpanded] = React.useState(false)

  const list = false
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
    // list == true
  }

  return (
    <>
      <div className={offerStyle.offer_container}>
        <div className={offerStyle.container}>
          <div className={offerStyle.header}>
            <h3 className={offerStyle.header_h3}>Часто задаваемые вопросы</h3>
          </div>
          <div className={offerStyle.content}>
            {/* {list.map((item, id) => {
              console.log(id)
            })} */}
            <div className={offerStyle.content_item}>
              <Accordion
                style={
                  expanded == 'panel1'
                    ? {
                        // alignItems: 'center',
                        borderRadius: '14px',
                        height: '230px',
                        borderWidth: '3px',
                        borderColor: '#c192ee',
                        borderStyle: 'solid',
                      }
                    : {
                        borderRadius: '18px',
                        height: '80px',
                        borderWidth: '2px',
                        borderColor: '#fff',
                        borderStyle: 'solid',
                      }
                }
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={
                        expanded == 'panel1'
                          ? {
                              height: '230px',
                              backgroundColor: '#C192EE',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                          : {
                              borderRadius: '18px',
                              height: '80px',
                              backgroundColor: '#fff',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                      }
                    />
                  }
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <h2 className={offerStyle.h2}>
                      Как проходит менторская программа?
                    </h2>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className={offerStyle.p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={offerStyle.content_item}>
              <Accordion
                style={
                  expanded == 'panel2'
                    ? {
                        borderRadius: '14px',
                        height: '230px',
                        borderWidth: '2px',
                        borderColor: '#c192ee',
                        borderStyle: 'solid',
                      }
                    : {
                        borderRadius: '18px',
                        height: '80px',
                        borderWidth: '2px',
                        borderColor: '#fff',
                        borderStyle: 'solid',
                      }
                }
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={
                        expanded == 'panel2'
                          ? {
                              borderRadius: '14px',
                              backgroundColor: '#C192EE',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                          : {
                              borderRadius: '18px',
                              backgroundColor: '#fff',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                      }
                    />
                  }
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <h2 className={offerStyle.h2}>
                      Когда пройдут следующие тренинги?
                    </h2>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className={offerStyle.p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className={offerStyle.content_item}>
              <Accordion
                style={
                  expanded == 'panel3'
                    ? {
                        borderRadius: '14px',
                        height: '230px',
                        borderWidth: '2px',
                        borderColor: '#c192ee',
                        borderStyle: 'solid',
                      }
                    : {
                        borderRadius: '18px',
                        height: '80px',
                        borderWidth: '2px',
                        borderColor: '#fff',
                        borderStyle: 'solid',
                      }
                }
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')}
              >
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={
                        expanded == 'panel3'
                          ? {
                              backgroundColor: '#C192EE',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                          : {
                              backgroundColor: '#fff',
                              borderRadius: '100%',
                              width: '50px',
                              height: '50px',
                            }
                      }
                    />
                  }
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>
                    <h2 className={offerStyle.h2}>
                      Как будут доставлять вещи из онлайн-магазина?
                    </h2>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className={offerStyle.p}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WeOffer
