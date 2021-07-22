import { NextPage } from 'next'
import { Profile } from '../components/organisms/Profile'
import { HistoryItemList } from '../components/organisms/HistoryItemList'
import { History } from '../types/history'
import { fetchHistories } from '../service/history'

type Props = {
  histories: History[]
}

const Timeline: NextPage<Props> = ({ histories }) => {
  return (
    <section>
      <div className="text-white py-8 bg-regal-dark-black">
        <div className="container mx-auto flex flex-col items-start lg:flex-row my-12 lg:my-24">
          <Profile />
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
