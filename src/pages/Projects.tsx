import React from 'react';
import temp from '@/assets/icons/Zuxces.webp';
const Projects = () => {
  return (
    <React.Fragment>
      <h1 style={{ textAlign: 'center', color: '#fff', padding: '50px 0 50px' }}>
        No current new projects, so enjoy this pic of me and my coat in hot weather inside 😇
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '240px',
        }}>
        <img
          src={temp}
          width="300px"
          height="300px"
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </React.Fragment>
  );
};

export default Projects;
