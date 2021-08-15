import Head from 'next/head'
import { NextPage } from 'next'
import { TopProfile } from '../components/organisms/TopProfile'
import { HistoryItemList } from '../components/organisms/HistoryItemList'
import { History } from '../types/history'
import { fetchHistories } from '../service/history'

type Props = {
  histories: History[]
}

const Timeline: NextPage<Props> = ({ histories }) => {
  return (
    <section>
      <Head>
        <title>Crea7 timeline</title>
        <meta name="lang" content="ja"></meta>
        <meta name="keyword" content="Crea7 timeline"></meta>
        <meta
          name="description"
          content="Crea7 timeline. web/iOS application developer. This is my history. Follow @crea7_3tos for daily updates."
        ></meta>
      </Head>
      <div className="text-white py-8 bg-regal-weight-black">
        <div className="container mx-auto flex flex-col items-start xl:flex-row my-12 xl:my-24">
          <TopProfile />
          <HistoryItemList histories={histories} />
        </div>
      </div>
    </section>
  )
}

export const getStaticProps = async () => {
  const res = await fetchHistories()
  const data = await res.json()

  return {
    props: {
      histories: data.contents,
    },
  }
}

export default Timeline
