import { FlatList, StyleSheet, Text, View } from 'react-native'
import OrderItem from '../Components/OrderItem'
import { useGetOrdersQuery } from '../App/services/shopServices'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../Components/LoadingSpinner'


const Order = () => {
  const localId = useSelector(state => state.auth.value.localId)
  const {data,isSuccess,isError,error,isLoading} = useGetOrdersQuery(localId)
  
  const [info,setInfo] = useState(true)
  const [errorMenssage,setErrorMessage] = useState("")
  const [loading,setLoading] = useState(true)
  
  useEffect(()=>{
    if(isSuccess && data.lenght === 0) setInfo(false)
    if(isSuccess && data) setLoading(false)
    if(isError && error) setErrorMessage(error.message)
  },[data,isSuccess,isError,error])

  if(!info) return <View><Text>No hay ordenes</Text></View>
  if(errorMenssage) return <View><Text>Error al cargar</Text></View>
  if(loading) return <LoadingSpinner/>


  return (
    <FlatList
    data={data}
    keyExtractor={item=>item.id}
    renderItem={({item})=><OrderItem order={item}/>}
    />
  )
}

export default Order

const styles = StyleSheet.create({})