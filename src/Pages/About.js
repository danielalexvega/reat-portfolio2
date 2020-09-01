import React, { useState } from 'react';
import Hero from '../Components/Hero/Hero';
import { Container, Row, Col, Collapse, Button } from 'react-bootstrap';

function AboutPage(props) {

  const [showText, setShowText] = useState(false);



  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} />
      <Container fluid={true}>
        <Row className='justify-content-center'>
          <Col md={8}>
            <div>
              <p>In 5th grade, I overslept the morning of math triathlon auditions, and I didn't make the team.
              It
              was a real blow to my elementary ego, and so I regrettably joined the chess club instead. I had
              a
              pretty good season, and I think I only lost two matches. If it wasn’t cemented by then, it was
              clear
              to me now that I was a nerd; a badge I wear proudly still.
              </p>

              <Button variant='dark' onClick={() => setShowText((showText) ? false : true)} 
              style={(showText) ? {display:'none'}:{display:'block'}}> Read more... </Button>

              <Collapse in={showText}>
                <div>
                  <p>
                    In middle school, I started playing percussion, and for the first time started to take music
                    seriously. I took private lessons, and then after eighth grade my parents bought me my first
                    drum
                    set. I don’t know how they functioned in that house, because drums are so loud, and I don’t
                    remember
                    ever playing soft; I was really into punk rock and started my first band my sophomore year,
                    while
                    still being very active in marching band at school.
                        </p>
                  <p>
                    Drums, and music to an extent, are very logical; there are time signatures, keys, tempos,
                    and
                    patterns. Lyrics and rhyme schemes are patterns, repetitions of sounds and syllables focused
                    on
                    some
                    theme. I started writing lyrics in high school, and I’m so thankful no one can read them;
                    I’m
                    sure
                    they were terrible, but they were a start.
                        </p>
                  <p>
                    In college, I majored in Sound Recording Technology, a degree program in the school of music
                    that
                    focused evenly on physics, music theory, and performance. The further I advanced into music
                    theory,
                    learning about chords and progressions, the more patterns I was exposed to. I created a band
                    called
                    Zlam Dunk with some friends, and we played a lot of shows, first starting in apartments that
                    would
                    be shut down by noise complaints, and eventually we were playing around Austin at clubs I
                    would
                    see
                    my favorite bands in. We made an EP, and two full length records, recording in studios
                    around
                    Austin. I even engineered and produced our last record, which was an amazing learning
                    experiment. We
                    went on three East Coast tours, playing multiple shows in New York City, Boston,
                    Philadelphia,
                    and
                    more. Touring in a van is simultaneously amazing and horrible, and figuring out where to
                    sleep
                    or
                    eat can be a nightmare, but you also meet the nicest people and make wonderful memories.
                        </p>
                  <p>
                    After college, I continued to play music with bands, but quickly realized the life of a
                    musician
                    wasn’t going to allow me time to have a life outside of clubs and recording studios, and I
                    pivoted
                    towards education. I had flirted with the idea in college, and while working as temp in HR
                    at
                    Austin
                    ISD, the opportunity to earn an alternative certification presented itself, and in 2013 I
                    started
                    teaching high school math at the Alternative Learning Center, which is a discipline
                    alternative
                    education program. A true baptism by fire, reaching young adults who had been removed from
                    their
                    home schools due to drugs or gang behavior was a challenge, but I truly I thrived there. My
                    students
                    were punishing and challenging, but they were also sweet and kind and hoping to be heard; if
                    you
                    treated them with respect and tried to understand where they were coming from, they were the
                    same as
                    any student at any other school. They taught me a lot, and I miss working with them.
                        </p>
                  <p>
                    As you can imagine, working four years at an alternative school started to burn me out, and
                    eventually moved to McCallum High school, the fine arts magnet school for Austin. They asked
                    if
                    I
                    could teach AP Computer Science, and I knew I could learn. I got certified all while
                    finishing
                    Graduate School at the University of Texas. The next three years were my happiest in
                    education;
                    the
                    students at McCallum are quirky, creative, and hilarious. I taught some amazing students,
                    some
                    of
                    which were exceptionally intelligent, and pushed me to be a better teacher, to understand
                    concepts
                    deeper. My final year, I taught PreAP PreCalculus, PreAP Algebra 1, AP Computer Science, and
                    an
                    OnRamps Computer Science course. It was stressful, but immensely rewarding. After seven
                    years of
                    teaching, I have a new respect for thinking deeply on a subject. To teach anything you have
                    to
                    analyze a concept from several angles and really understand how it functions; I think the
                    ability to
                    do that will serve me well in my next career.
                        </p>
                  <p>
                    Through it all I have continued to make music, forming a couple of bands to handle different
                    genres
                    and aspects of my personality. In 2020 I put out an EP I’d been working on for four years on
                    some of
                    my most personal music, and another single for another band that probably took six years to
                    make. I
                    find the pursuit of writing and recording music to be the main driving force; I don’t think
                    I’ll
                    ever produce a track as good as the ones my idols have, but it’s something I can keep trying
                    to
                    do.
                        </p>
                  <Button variant="dark" onClick={() => setShowText((showText) ? false : true)}> Read less... </Button>
                </div>
              </Collapse>

            </div>
          </Col>
        </Row>
      </Container>
    </div>

  );
};

export default AboutPage;