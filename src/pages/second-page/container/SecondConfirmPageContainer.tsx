import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListData } from '../actions/getList'
import SecondConfirmPage from '../components/SecondConfirmPage'
import { ListDataSelector } from '../selectors'

const SecondConfirmPageContainer = () => {

  const dispatch = useDispatch()
  const { listData, isLoading } = useSelector(ListDataSelector)

  console.log(listData)
  useEffect(() => {
    dispatch(getListData());
  }, [dispatch])

  return (
    <div>
      <SecondConfirmPage listData={listData} />
    </div>
  )
}

export default SecondConfirmPageContainer