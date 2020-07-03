import React from 'react';
import { Col, Preloader, Row, Table } from 'react-materialize';

const BestPlayersTable = ({ isFetching, lastRegion }) => {
  return (
    <Row>
      <Col l={6} s={12} offset='l3'>
        {isFetching ? (
          <Preloader size='big' color='blue' />
        ) : (
          // <p>{lastRegion.country}</p>
          <Table striped>
            <thead>
              <tr>
                <th>Rank #</th>
                <th>Player Tag</th>
                <th>Player Name</th>
                <th>Trophies</th>
              </tr>
            </thead>
            <tbody>
              {lastRegion.ranks &&
                lastRegion.ranks.map((player) => (
                  <tr key={player.tag}>
                    <td>{player.rank}</td>
                    <td>{player.tag}</td>
                    <td>{player.name}</td>
                    <td>{player.trophies}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default BestPlayersTable;
