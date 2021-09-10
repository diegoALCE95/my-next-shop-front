/**
 * Internal dependencies.
 */
import HEADER_FOOTER_ENDPOINT from '../src/utils/constants/endpoints'
import Header from '../src/components/layout/header/index'
import Footer from '../src/components/layout/footer/index'

/**
 * External dependencies.
 */
import axios from 'axios'

export default function Home({ data }) {

  const { header, footer } = data;

  return (
    <div>
      <Header header={header} />

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>Hel</p>
      </main>

      <Footer footer={footer} />
    </div>
  )
}

export async function getStaticProps() {
	const { data } = await axios.get( HEADER_FOOTER_ENDPOINT );
	
	return {
		props: data || {},
		
		/**
		 * Revalidate means that if a new request comes to server, then every 1 sec it will check
		 * if the data is changed, if it is changed then it will update the
		 * static file inside .next folder with the new data, so that any 'SUBSEQUENT' requests should have updated data.
		 */
		revalidate: 1,
	};
}