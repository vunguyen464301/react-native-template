import {StyleSheet} from 'react-native';
import colors from './colors';

const s = StyleSheet.create({
  textError: {
    color: colors.error,
  },
  text_1_1_1_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.primary_1_1,
  },

  text_1_1_1_2: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.neutral_1_1,
  },

  text_2_1_1_2: {
    fontWeight: '400',
    fontSize: 13,
    color: colors.neutral_1_1,
  },
  text_2_1_1_3: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.neutral_1_1,
  },
  text_2_1_2_1: {
    fontWeight: '500',
    fontSize: 15,
    color: colors.neutral_1_2,
  },

  text_2_1_3_1: {
    fontWeight: '400',
    fontSize: 15,
    color: colors.neutral_1_3,
  },
  //

  //
  text_2_2_1_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.neutral_2_1,
  },
  text_2_2_1_2: {
    fontWeight: '700',
    fontSize: 24,
    color: colors.neutral_2_1,
  },
  text_2_2_1_3: {
    fontWeight: '400',
    fontSize: 13,
    color: colors.neutral_2_1,
  },
  text_2_2_1_4: {
    fontWeight: '700',
    fontSize: 17,
    color: colors.neutral_2_1,
  },
  text_2_2_1_5: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.neutral_2_1,
  },
  text_2_2_1_6: {
    fontWeight: '500',
    fontSize: 17,
    color: colors.neutral_2_1,
  },
  text_2_2_1_7: {
    fontWeight: '700',
    fontSize: 14,
    color: colors.neutral_2_1,
  },
  text_2_2_1_8: {
    fontWeight: '400',
    fontSize: 14,
    color: colors.neutral_2_1,
  },

  text_2_2_2_1: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.neutral_2_2,
  },
  //

  text_3_2_2_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.accent_2_2,
  },

  //
  text_3_4_2_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.accent_4_2,
  },
  text_3_4_1_2: {
    fontWeight: '500',
    fontSize: 17,
    color: colors.accent_4_2,
  },

  textWhite_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.white,
  },

  textCustom_2_1: {
    fontWeight: '600',
    fontSize: 17,
    color: colors.custom2,
  },
  textCustom_2_2: {
    fontWeight: '600',
    fontSize: 15,
    color: colors.custom2,
  },

  text_placeHolder_1: {
    fontWeight: '600',
    fontSize: 13,
    color: colors.placeholder,
  },
  text_placeHolder_2: {
    fontWeight: '300',
    fontSize: 15,
    color: colors.placeholder,
  },
  textVersion: {
    color: colors.blackDeep,
    fontSize: 12,
    fontWeight: 'bold',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
  fl1: {
    flex: 1,
  },
  textCenter: {
    textAlign: 'center',
  },
  fullViewParent: {
    width: '100%',
    height: '100%',
  },

  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  columnBetween: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  columnCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  columnReverse: {
    flexDirection: 'column-reverse',
  },
  alignItemEnd: {
    alignItems: 'flex-end',
  },
  alignItemStart: {
    alignItems: 'flex-start',
  },
  alignItemCenter: {
    alignItems: 'center',
  },
  mV5: {
    marginVertical: 5,
  },
  mV10: {
    marginVertical: 10,
  },
  mt0: {
    marginTop: 0,
  },
  mt2: {
    marginTop: 2,
  },
  mt3: {
    marginTop: 3,
  },
  mt5: {
    marginTop: 5,
  },
  mt8: {
    marginTop: 8,
  },
  mt10: {
    marginTop: 10,
  },
  mt11: {
    marginTop: 11,
  },
  mt15: {
    marginTop: 15,
  },
  mt16: {
    marginTop: 16,
  },
  mt20: {
    marginTop: 20,
  },
  mt30: {
    marginTop: 30,
  },
  mt40: {
    marginTop: 40,
  },
  mb0: {
    marginBottom: 0,
  },
  mb2: {
    marginBottom: 2,
  },
  mb3: {
    marginBottom: 3,
  },
  mb5: {
    marginBottom: 5,
  },
  mb10: {
    marginBottom: 10,
  },
  mb15: {
    marginBottom: 15,
  },
  mb20: {
    marginBottom: 20,
  },
  mb25: {
    marginBottom: 25,
  },
  mb40: {
    marginBottom: 40,
  },
  ml5: {
    marginLeft: 5,
  },
  ml7: {
    marginLeft: 7,
  },
  ml10: {
    marginLeft: 10,
  },
  ml20: {
    marginLeft: 20,
  },
  mr0: {
    marginRight: 0,
  },
  mr5: {
    marginRight: 5,
  },
  mr7: {
    marginRight: 7,
  },
  mr10: {
    marginRight: 10,
  },
  mr16: {
    marginRight: 16,
  },
  mr20: {
    marginRight: 20,
  },
  p10: {
    padding: 10,
  },
  pb20: {
    paddingBottom: 20,
  },
  pr5: {
    paddingRight: 5,
  },
  pr10: {
    paddingRight: 10,
  },
  pl5: {
    paddingLeft: 5,
  },
  mH16: {
    marginHorizontal: 16,
  },
  pH16: {
    paddingHorizontal: 16,
  },
  pV5: {
    paddingVertical: 5,
  },
  pV10: {
    paddingVertical: 10,
  },
  pV16: {
    paddingVertical: 16,
  },
  width5Percent: {
    width: '5%',
  },
  width6Percent: {
    width: '6%',
  },
  width7Percent: {
    width: '7%',
  },
  width8Percent: {
    width: '8%',
  },
  width10Percent: {
    width: '10%',
  },
  width11Percent: {
    width: '11%',
  },
  width12Percent: {
    width: '12%',
  },
  width15Percent: {
    width: '15%',
  },
  width17Percent: {
    width: '17%',
  },
  width20Percent: {
    width: '20%',
  },
  width22Percent: {
    width: '22%',
  },
  width23Percent: {
    width: '23%',
  },
  width25Percent: {
    width: '25%',
  },
  width27Percent: {
    width: '27%',
  },
  width30Percent: {
    width: '30%',
  },
  width35Percent: {
    width: '35%',
  },
  width38Percent: {
    width: '38%',
  },
  width40Percent: {
    width: '40%',
  },
  width48Percent: {
    width: '48%',
  },
  width50Percent: {
    width: '50%',
  },
  width55Percent: {
    width: '55%',
  },
  width60Percent: {
    width: '60%',
  },
  width68Percent: {
    width: '68%',
  },
  width70Percent: {
    width: '70%',
  },
  width73Percent: {
    width: '73%',
  },
  width75Percent: {
    width: '75%',
  },
  width77Percent: {
    width: '77%',
  },
  width80Percent: {
    width: '80%',
  },
  width83Percent: {
    width: '83%',
  },
  width85Percent: {
    width: '85%',
  },
  width88Percent: {
    width: '88%',
  },
  width90Percent: {
    width: '90%',
  },
  width92Percent: {
    width: '92%',
  },
  width93Percent: {
    width: '93%',
  },
  width94Percent: {
    width: '94%',
  },
  width95Percent: {
    width: '95%',
  },
  width96Percent: {
    width: '96%',
  },
  width100Percent: {
    width: '100%',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 10,
    elevation: 7,
  },
  lottieLoading: {
    width: 100,
    height: 100,
  },
});

/**
 * style common
 */
export default s;
