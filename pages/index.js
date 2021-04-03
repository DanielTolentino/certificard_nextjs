/* import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m Shu. I’m a software engineer and a translator (English/Japanese). You can contact me on Twitter.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
    </Layout>
  )
} */

import React from 'react'
import Layout from '../components/layout'
import MyDocument from '../pages/_document'


export default class IndexPage extends React.Component {
  render() {
      return (
          <Layout>
            <section>
	<header>
		<img src="https://unavatar.now.sh/github/DanielTolentino" />
	</header>

	<h1>Daniel Tolentino</h1>

	<div>
		<h2><a href="https://imersao.dev/" className="a-header" target="_blank">Insígnias da imersao.dev</a></h2>
		<ol>
			<li><a href="https://conversorimersaodev.netlify.app/" target="_blank">💰 Conversor de Moedas</a></li>
			<li><a href="https://codepen.io/danieltolentino/full/OJWPRVL" target="_blank">🔢 Calculadora</a></li>
			<li><a href="https://codepen.io/danieltolentino/full/RwKWbpP" target="_blank">🔮 Mentalista</a></li>
			<li><a href="https://codepen.io/danieltolentino/full/dyNXKRm" target="_blank">🎬 Aluraflix</a></li>
			<li><a href="https://codepen.io/danieltolentino/full/OJWWbvE" target="_blank">🏆 Tabela de Classificação</a></li>
			<li><a href="https://codepen.io/danieltolentino/full/OJWpJdK" target="_blank">🃏 Supertrunfo</a></li>
			<li><a href="https://danieltolentino.github.io/" target="_blank">🌐 Certificard</a></li>
		</ol>
	</div>
	<div class="div-buttons">
		<a href="https://github.com/DanielTolentino" className="a-git" target="_blank">Github<i class="fab fa-github"></i></a>
		<a href="https://www.facebook.com/Daniel.Tolentino0/" className="a-fb" target="_blank">Facebook</a>
		<a href="https://www.instagram.com/daniel.tolentino.0/" className="a-insta" target="_blank">Instagram</a>
		
	</div>
</section>
</Layout>
        )
    }
}