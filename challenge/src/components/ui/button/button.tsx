import * as S from './styled'

type Props = {
    label: string
}

export const Button = ({ label }: Props) => {
    return(
        <S.Button>
            {label}
        </S.Button>
    )
}