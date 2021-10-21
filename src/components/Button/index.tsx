
import * as S from './styles';

export interface ButtonProps {
  children: any;
  color: 'yellow' | 'blue' | 'purple';
  restricted?: boolean;
}

export default function Button({children, color, restricted}: ButtonProps){
  return (
    <S.Container color={color} restricted={restricted}>
      {children}
    </S.Container>
  )
}