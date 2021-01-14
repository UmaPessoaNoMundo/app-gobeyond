import styled from 'styled-components/native';

export const Banner = styled.Image({
    height: 90,
    width:380,
    alignSelf:'center'
})

export const Confira = styled.TouchableOpacity({
    height: 33,
    width:147,
    backgroundColor:'black',
    alignSelf:'flex-end',
    justifyContent:'center',
    alignItems:'center',
    position:"absolute"
})

export const TextoConfira = styled.Text({
    color:'white'
})