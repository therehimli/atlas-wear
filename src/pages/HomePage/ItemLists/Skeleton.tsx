import ContentLoader from 'react-content-loader'

const Skeleton = (props: any) => (
  <>
    <ContentLoader
      speed={2}
      width={300}
      height={200}
      viewBox="0 0 300 200"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="5" y="1" rx="10" ry="10" width="200" height="200" />
    </ContentLoader>
  </>
)

export default Skeleton
