import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <>
    {/**Aqui esta el skeleton loading, pero no lo utilize porque no funcionaba de la manera correcta.*/}
    <div className='card'>
      <div className=''>
        <div className='tag-container'>
          <h2 className='tag-style'><Skeleton /></h2>
          <h2 className='tag-style'><Skeleton /></h2>
          <h2 className='tag-style'><Skeleton /></h2>
        </div>
      </div>
      <div className='bottom-style'>
        <div className='section-1'>
          <h2><Skeleton /></h2>
          <a><Skeleton /></a>
        </div>
        <div className='section-2'>
          <button className='button-card'><Skeleton /></button>
          <button className='button-card'><Skeleton /></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default SkeletonCard