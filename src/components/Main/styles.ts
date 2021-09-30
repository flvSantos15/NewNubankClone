import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '350px',
    padding: '26px'
  },
  containerContent: {

  },
  containerAmount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '20px'
  },
  containerAmountText: {
    fontSize: 22,
    fontWeight: '600',
  },
  AmountText: {
    fontWeight: '700',
    fontSize: 25,
    marginBottom: '30px'
  },
  btnCard: {
    backgroundColor: '#ddd',
    borderRadius: 8,
    height: '45px',
    width: '370px',
    marginTop: '30px',
    flexDirection: 'row',
  },
  btnCardCredit: {
    alignSelf: 'center',
    marginLeft: '16px'
  }
  ,
  btnCardText: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: '18px',
    alignSelf: 'center'
  }
})

export default styles;