import React from 'react'
import { HistoryItem } from '../molecules/HistoryItem'
import { History } from '../../types/history'

export interface HistoryItemListProps {
  histories: History[]
}

export const HistoryItemList: React.VFC<HistoryItemListProps> = ({ histories }) => {
  if (histories.length < 1) {
    return (
      <div className="ml-0 xl:ml-3 xl:w-2/3 sticky">
        <div className="container mx-auto w-full h-full">
          <div className="relative wrap overflow-hidden p-3 h-full">
            <div className="container">
              <div className="flex flex-col lg:grid grid-cols-9 mx-auto p-2 ">
                <div className="title-message">You have no tasks</div>
                <div className="subtitle-message">Sit back and relax</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="ml-0 xl:ml-3 xl:w-2/3 sticky">
      <div className="container mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-3 h-full">
          <div className="container">
            <div className="flex flex-col lg:grid grid-cols-9 mx-auto p-2 ">
              {histories.map((history, index) => (
                <HistoryItem
                  key={history.id}
                  history={history}
                  position={index % 2 === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
