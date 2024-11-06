import styled from "styled-components";

export const ItemArea = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    width: 33%;
    padding: 3px 6px;
    box-shadow: 1px 1px 1px #000;

    .wineImage{
        width: 80px;
        height: 80px;
    }

    .seal{
        position: absolute;
        right: 10px;
        top: 50px;
        width: 30px;
        height: 30px;
    }

    .tile{
        font-size: 15px;
        font-weight: semibold;
    }

    .priceArea{
        display: flex;
        align-items: center;
        gap: 2px;

        .price{
            font-size: 10px;
            color: #000;
        }

        .price.through{
            color: #CCC;
            text-decoration: line-through;        
        }

        .descount{
            padding: 1px;
            background-color: orange;
            color: #FFF;
            text-tranform: uppercase;
        }
    }

    .clubPriceArea{
        font-size: 13px;
        color: #000;
        text-transform: uppercase;

        .clubPrice{
            color: #D14B8F;        
        }
    }

    .normalPrice{
        font-size: 13px;
        color: #CCC;
        text-transform: uppercase;
    }
    
`