import React from 'react';
import { Col, Preloader, Row, Table } from 'react-materialize';

const BestClubsTable = ({ isFetching, lastRegion }) => {
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
                <th>Club Tag</th>
                <th>Club Name</th>
                <th>Trophies</th>
              </tr>
            </thead>
            <tbody>
              {lastRegion.ranks &&
                lastRegion.ranks.map((club) => (
                  <tr key={club.tag}>
                    <td>{club.rank}</td>
                    <td>{club.tag}</td>
                    <td>{club.name}</td>
                    <td>{club.trophies}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
  );
};

export default BestClubsTable;
