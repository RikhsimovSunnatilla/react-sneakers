import ContentLoader from 'react-content-loader';

function Skeleton() {
  return (
    <div className="w-56 rounded-3xl border border-solid border-gray-200 bg-white px-8 pt-5 pb-8">
      <ContentLoader
        speed={1}
        width={150}
        height={188}
        viewBox="0 0 150 188"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
        <rect x="0" y="106" rx="3" ry="3" width="150" height="15" />
        <rect x="0" y="125" rx="3" ry="3" width="93" height="15" />
        <rect x="0" y="162" rx="8" ry="8" width="80" height="24" />
        <rect x="118" y="154" rx="8" ry="8" width="32" height="32" />
      </ContentLoader>
    </div>
  );
}

export default Skeleton;
