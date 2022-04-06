import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../../components/Loader/Loader'
import { UseFormField } from '../../../hooks/UseForm'
import ValidateIIN from '../../../utils/ValidateIIN'
import { getListData } from '../actions/getList'
import SecondConfirmPage from '../components/SecondConfirmPage'
import { ListDataSelector } from '../selectors'

const SecondConfirmPageContainer = () => {

  const dispatch = useDispatch()

  const { listData, isLoading } = useSelector(ListDataSelector)
  const { obj, handleChange, setObj } = UseFormField();
  const IsError = !ValidateIIN(obj.inn)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(getListData());
  }, [dispatch])

  return (!isLoading
    ? <SecondConfirmPage
      listData={listData.list}
      IsError={IsError}
      obj={obj}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      setObj={setObj}
    />
    : <Loader />
  )
}

export default SecondConfirmPageContainer