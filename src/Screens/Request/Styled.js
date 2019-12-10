import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  BodyRequest: {
    backgroundColor: '#00b16A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FlexView: {
    flexDirection: 'row',
  },
  MainCard: {
    backgroundColor: '#f7f7f8',
    margin: 10,
    padding: 10,
  },
  ProfileCard: {
    borderColor: '#28323A',
    margin: 10,
    padding: 10,
    flex: 2,
    alignItems: 'center',
  },
  TaskCard: {
    borderColor: '#28323A',
    margin: 10,
    padding: 10,
    flex: 3,
  },
  ButtonContainer: {
    backgroundColor: '#28323A',
    paddingVertical: 15,
    marginHorizontal: 15,
    flex: 2,
    borderRadius: 10,
  },
  ButtonText: {
    textAlign: 'center',
    color: '#f7f7f8',
    fontWeight: '700',
  },
  avatar: {
    marginVertical: 20,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#28323A',
    width: "80%",
    height: 200,
  },
  NameText: {
    color: '#28323A',
    fontWeight: '700',
  },
  TitleText: {
    color: '#00b16a',
    fontWeight: '700',
  },
  PriceText: {
    color: '#28323A',
    fontSize: 40,
    fontWeight: '700',
  },
  PriceTitle: {
    color: '#00b16a',
    fontSize: 22,
    fontWeight: '700',
  },
  OtherTitles1: {
    color: '#00b16a',
    fontWeight: '700',
    fontSize: 15,
    fontWeight: '700',
  },
  OtherTitles2: {
    color: '#28323A',
    fontWeight: '700',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 15
  },
});