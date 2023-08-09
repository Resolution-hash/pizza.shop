import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = () => (
  <ContentLoader
    speed={2}
    width={315}
    height={480}
    viewBox='0 0 315 480'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle cx='93' cy='57' r='2' />
    <rect x='0' y='270' rx='0' ry='0' width='240' height='0' />
    <rect x='2' y='310' rx='10' ry='10' width='280' height='88' />
    <rect x='8' y='424' rx='10' ry='10' width='90' height='27' />
    <rect x='77' y='435' rx='0' ry='0' width='2' height='0' />
    <rect x='199' y='427' rx='0' ry='0' width='2' height='6' />
    <circle cx='138' cy='120' r='120' />
    <rect x='0' y='254' rx='10' ry='10' width='280' height='42' />
    <rect x='133' y='413' rx='25' ry='25' width='152' height='45' />
  </ContentLoader>
);

export default MyLoader;
