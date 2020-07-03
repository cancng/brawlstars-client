import React from 'react';
import { Card, CardTitle, Col, Icon, Row } from 'react-materialize';
import {
  Bestasboss,
  Duoshw,
  Powertrophy,
  Roborumble,
  Soloshw,
  Three3,
  Trophy,
  Lvlinfo,
} from '../img';

const brawlerNameFixer = (brawlerName) => {
  const brawler = brawlerName.split(' ');

  if (brawler.length > 1) {
    return (
      brawler[0].charAt(0) +
      brawler[0].slice(1).toLowerCase() +
      '-' +
      brawler[1].charAt(0) +
      brawler[1].slice(1).toLowerCase()
    );
  }
  return brawler.join('').charAt(0) + brawler.join('').slice(1).toLowerCase();
};

const BrawlerInfo = ({ brawler }) => {

  return (
    <>
      <Row>
        <Row className='center'>
          <img
            src={`https://cdn.brawlstats.com/player-thumbnails/${brawler.icon.id}.png`}
            alt='brawler icon'
            style={{ width: 100 }}
          />
          <h4>
            Club name:{' '}
            {brawler.club.name ? (
              <span>
                {brawler.club.name} ({brawler.club.tag})
              </span>
            ) : (
              <Icon className='red-text'>remove_circle_outline</Icon>
            )}
          </h4>
        </Row>
        <Col m={6} s={12}>
          <Card>
            <ul>
              <li>
                <h4 className='green-text'>
                  {brawler.name} ({brawler.tag})
                </h4>
              </li>
              <li>
                <img src={Lvlinfo} alt='brawler level' width={36} /> Level:{' '}
                {brawler.expLevel}
              </li>
              <li>
                <img src={Trophy} alt='trophies' width={36} /> Trophies:{' '}
                {brawler.trophies.toLocaleString()}
              </li>
              <li>
                <img src={Trophy} alt='trophies' width={36} /> Top Reached
                Trophies: {brawler.highestTrophies.toLocaleString()}
              </li>
              <li>
                <img src={Powertrophy} alt='powertrophies' width={36} /> Power
                Play Trophies: {brawler.powerPlayPoints}
              </li>
              <li>
                <img src={Powertrophy} alt='powertrophies' width={36} /> Highest
                Power Play Trophies: {brawler.highestPowerPlayPoints}
              </li>
            </ul>
          </Card>
        </Col>
        <Col m={6} s={12}>
          <Card>
            <ul>
              <li>
                <h4 className='red-text'>Basic statistics</h4>
              </li>
              <li>
                <img src={Three3} alt='3v3 wins' width={36} /> 3v3 Victories:
                {brawler['3vs3Victories']}
              </li>
              <li>
                <img src={Soloshw} alt='solo showdown' width={36} /> Solo
                Victories:
                {brawler.soloVictories}
              </li>
              <li>
                <img src={Duoshw} alt='trophies' width={36} /> Duo Victories :
                {brawler.duoVictories}
              </li>
              <li>
                <img src={Bestasboss} alt='best boss' width={36} /> Best time as
                Boss : {brawler.bestTimeAsBigBrawler}
              </li>
              <li>
                <img src={Roborumble} alt='robo rumble' width={36} /> Best robo
                rumble time: {brawler.bestRoboRumbleTime}
              </li>
            </ul>
          </Card>
        </Col>
      </Row>

      <Row>
        {brawler.brawlers.map((owned) => (
          <Col m={4} key={owned.id}>
            <Card
              header={
                <CardTitle
                  image={`https://brawlace.com/assets/images/brawlers/${brawlerNameFixer(
                    owned.name
                  )}.png`}
                >
                  {owned.name}
                </CardTitle>
              }
            >
              <ul>
                <li>Power: {owned.power}</li>
                <li>Rank: {owned.rank}</li>
                <li>Trophies: {owned.trophies}</li>
                <li>Highest Trophies: {owned.highestTrophies}</li>
                <li>
                  {owned.gadgets.length > 0 ? (
                    <span>
                      Gadget:{' '}
                      <span className='green-text'>
                        {owned.gadgets[0].name}
                      </span>
                    </span>
                  ) : (
                    <span>
                      Gadget: <Icon className='red-text'>block</Icon>
                    </span>
                  )}
                </li>
                <li>
                  Star Powers:{' '}
                  {owned.starPowers.length > 0 ? (
                    owned.starPowers.map((starPower) => (
                      <span key={starPower.id}>-{starPower.name}-</span>
                    ))
                  ) : (
                    <Icon className='red-text'>block</Icon>
                  )}
                </li>
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default BrawlerInfo;
