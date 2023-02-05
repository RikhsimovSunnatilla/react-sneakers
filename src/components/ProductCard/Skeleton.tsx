import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <ContentLoader
      speed={2}
      width={150}
      height={188}
      viewBox="0 0 150 90"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <rect x="0" y="0" rx="4" ry="4" width="150" height="90" />
      <rect x="0" y="294" rx="10" ry="10" width="150" height="23" />
      <rect x="0" y="345" rx="10" ry="10" width="150" height="88" />
      <rect x="125" y="447" rx="24" ry="24" width="152" height="45" />
      <rect x="0" y="455" rx="10" ry="10" width="95" height="30" />
    </ContentLoader>
  );
}

export default Skeleton;
