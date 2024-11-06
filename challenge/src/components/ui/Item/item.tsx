import * as S from './styled'
import { itemType } from "../../../types/itemType"

type Props = {
    item: itemType
}

export const Item = ({ item }: Props) => {
    return(
        <S.ItemArea>
            
            <img className='wineImage' src={item.image} alt='' />

            {item.seal && 
                <img className='seal' src={item.seal} alt='' />
            } 

            <div className='title'>
                {item.title}
            </div>

            <div className='priceArea'>
                <p className={`price ${item.descount === true ? 'through' : ''}`}>
                    {item.price}
                </p>

                {item.descount && 
                    <div className='descount'>
                        {item.descount}% OFF
                    </div>                
                }
            </div>

            <div className='clubPriceArea'>
                Sócio Wine <span className='clubPrice'>R$ {item.clubPrice}</span>
            </div>

            <div className='normalPrice'>
                Não sócio {item.price}
            </div>
        </S.ItemArea>
    )
}