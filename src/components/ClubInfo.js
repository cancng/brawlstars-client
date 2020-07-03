import React from 'react';
import { Badge, Col, Row, Table } from 'react-materialize';
import { Trophy } from '../img';

const ClubInfo = ({ club }) => {
  return (
    <>
      <Row className='center'>
        <h2>{club.name}</h2>
        <h5>Club Details</h5>
        <p className='grey-text'>{club.description}</p>
        <img src={Trophy} alt='trophy' width={24} /> {club.trophies} (Required:{' '}
        {club.requiredTrophies})
        <div>
          <ul>
            <li>
              Club type:{' '}
              <Badge
                className='blue white-text'
                style={{ float: 'none', marginLeft: 0, borderRadius: '5px' }}
              >
                {club.type}
              </Badge>
            </li>
            <li>Member count: {club.memberCount}</li>
          </ul>
        </div>
      </Row>
      <Row>
        <Col l={6} s={12} offset='l3'>
          <Table striped>
            <thead>
              <tr>
                <th data-field='id'>Name</th>
                <th data-field='role'>Role</th>
                <th data-field='trophy'>Trophies</th>
              </tr>
            </thead>
            <tbody>
              {club.members.map((member) => (
                <tr key={member.tag}>
                  <td>{member.name}</td>
                  <td>{member.role}</td>
                  <td>{member.trophies.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default ClubInfo;
