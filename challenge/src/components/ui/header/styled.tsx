import styled from "styled-components"

export const HeaderArea = styled.div`
    box-shadow: 1px 2px 1px #CCC;
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    height: 90px;

    .logo{
        width: 100px;
        height: 28px;
        margin-right: 80px;
    }

    nav{
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;

        ul{
            display: flex;
            align-items: center;
            gap: 40px;
            list-style: none;

            li{
                display: flex;
                align-items: center;
                height: 88px;
                font-size: 18px;
                cursor: pointer;
            }

            li.active{
                border-bottom: 3px solid #D14B8F;
                color: #D14B8F;
            }

            li:hover{
                color: #D14B8F;
            }
        }

        .icons{
            display: flex;
            align-items: center;
            gap: 30px;

            img{
                width: 55px;
                height: 55px;
                cursor: pointer;
            }
        }
    }
`