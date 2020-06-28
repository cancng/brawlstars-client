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

const BrawlerInfo = ({ brawler }) => {
  return (
    <Row>
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
              {brawler.trophies}
            </li>
            <li>
              <img src={Trophy} alt='trophies' width={36} /> Top Reached
              Trophies: {brawler.highestTrophies}
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
              <h4 className='red-text'>
                Basic statistics
              </h4>
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
              {brawler.highestTrophies}
            </li>
            <li>
              <img src={Bestasboss} alt='best boss' width={36} /> Best time as
              Boss : {brawler.bestTimeAsBigBrawler}
            </li>
            <li>
              <img src={Roborumble} alt='robo rumble' width={36} /> Best robo rumble time: {brawler.bestRoboRumbleTime}
            </li>
          </ul>
        </Card>
      </Col>
    </Row>
  );
};

export default BrawlerInfo;
