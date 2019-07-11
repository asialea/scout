import {Dimensions} from 'react-native'

export const colors = {
  main:"#ebebff",
  grey:"#949494",
  lightGrey: "rgb(242, 246, 252)",
  lightBlue:"#e8f4ff",
  darkBlue:"rgb(2,1,4)",
  font:"#464769",
  darkGrey:"#595959",
  blue1:"#ADD7F6",
  blue2:"#87BFFF",
  blue3:"#3F8EFC",
  blue4:"#2667FF",
  blue5:"#3B28CC",

};

export const screenWidth = Dimensions.get('window').width;

export const shadow = {
  shadowColor:"#000",
  shadowOffset:{height: 5,width: 0},
  shadowOpacity: 0.1,
  shadowRadius: 5,
};

export const input = {
  fontSize: 20,
  height: 40,
  borderRadius: 5,
  paddingLeft: 10,
};

export const logo = {
  fontFamily:'Avenir',
  fontWeight:"300",
  color:"#101c24"
}

export const overlay = {
  alignItems: "center",
  justifyContent: "center",
  width: '100%',
  height: '100%',

}

export const inline = {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding:0,
  margin:0,
}

export const header = {
  width:"100%",
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent:'center',
  top:0,
  flex:1,
  backgroundColor:colors.blue4,
}

export const navItems = {
  color:colors.darkGrey,
}

export const body = {
  flex:8,
  justifyContent:'center',
}
