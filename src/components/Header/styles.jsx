import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7407e0',
    width: '100%',
    height: '130px',
    flexDirection: 'column',
    padding: '14px'
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '25px',
    alignItems: 'center',
  },
  containerUser: {
    width: '50px',
    height: '50px',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#7407b5',
  },
  containerPlus: {
    width: '110px',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '12px',
  },
  containerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default styles;