import React from 'react'
// eslint-disable-next-line css-modules/no-unused-class
import css from './index.module.scss'

import ReadMore from '../../atoms/ReadMore'
import undraw from '../../../assets/graphics/undraw.webp'

import { GraphQLClient, gql } from 'graphql-request'
import { useState, useEffect } from 'react'

const client = new GraphQLClient('https://api-eu-central-1.graphcms.com/v2/cl4j01drm4lzm01z6bj5xgavr/master')

const GET_NEWS = gql`
  {
    posts {
      id
      title
      slug
      author {
        imieINazwisko
        avatar {
          url
        }
      }
      cover {
        url
      }
      content {
        html
      }
      publishedAt
      updatedAt
      date
    }
  }
`

const News = () => {
  const [news, setNews] = useState([])

  useEffect(() => {
    client.request(GET_NEWS).then((data) => setNews(data.posts))
  }, [])

  return (
    <div className={css.container} id="news">
      <div className={css.top}>
        <img loading="lazy" src={undraw} alt="Osoba czytająca artykuły" className={css.undraw} />
        <div className={css.newsInfo}>
          <h1 className={css.title}>Aktualne wydarzenia</h1>
          <p className={css.description}>
            Wydarzenia. Codzienność i nie tylko. Artykuły o bieżących wydarzeniach związanych z działalnością Design
            Thinking HuB. Czytaj i oglądaj najnowsze wiadomości. Udział w konkursach, sukcesy Koła, nowi członkowie,
            nowi partnerzy.{' '}
          </p>
        </div>
      </div>
      {news.map((article) => (
        <>
          <div className={css.grid}>
            <img loading="lazy" src={article.cover.url} alt="zespół szukający rozwiązania" className={css.image} />
            <div className={css.content}>
              <h3 className={css.articleTitle}>{article.title}</h3>
              <ReadMore btnColor="white" className={css.paragraphs} type="html">
                {article.content.html}
              </ReadMore>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default News
