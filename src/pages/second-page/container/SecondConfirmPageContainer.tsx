import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import { UseFormField } from '../../../hooks/UseForm'
import { getListData } from '../actions/getList'
import SecondConfirmPage from '../components/SecondConfirmPage'
import { ListDataSelector } from '../selectors'

const SecondConfirmPageContainer = () => {

  const dispatch = useDispatch()

  const { listData, isLoading } = useSelector(ListDataSelector)

  useEffect(() => {
    dispatch(getListData());
  }, [dispatch])

  return (!isLoading
    ? <SecondConfirmPage listData={listData.list} />
    : <Loader />
  )
}

export default SecondConfirmPageContainer