import { getIds, getFavoriteData } from '../lib/process';

export async function getStaticProps({ params }) {
  const favoriteData = await getFavoriteData(params.id);
  return {
    props: {
      favoriteData
    }
  };
}

export async function getStaticPaths() {
  const paths = await getIds();
  return {
    paths,
    fallback: false
  };
}

export default function SelectedID({ favoriteData }) {
  return (
    <main> 
      <article className="favorite-place card col-12 bg-light px-3">
        <div>
          <h1 className="card-header text-uppercase text-center" key={favoriteData.ID}><strong>Title: {favoriteData.post_title}</strong></h1>
          <p className="card-text px-5 mx-5 my-2"><strong>Name:</strong> {favoriteData.acf_fields}</p>
          <p className="card-text px-5 mx-5 my-2"><strong>Status:</strong> {favoriteData.post_status}</p>
          <p className="card-text px-5 mx-5 my-2"><strong>Post ID:</strong> {favoriteData.ID}</p>
        </div>
      </article>
    </main>
  );
}