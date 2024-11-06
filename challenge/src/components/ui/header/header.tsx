import { useState } from "react"
import * as S from './styled'
import { Container } from "../../mainComponents";

export const Header = () => {

    const [currentPage, setCurrentPage] = useState(2);

    return(
        <S.HeaderArea>
            <Container>
                <S.Header>
                    <img className="logo" src="/black.png" alt="" />

                    <nav>
                        <ul>
                            <li className={`${currentPage === 1 ? 'active' : ''}`} onClick={() => setCurrentPage(1)}>Clube</li>
                            <li className={`${currentPage === 2 ? 'active' : ''}`} onClick={() => setCurrentPage(2)}>Loja</li>
                            <li className={`${currentPage === 3 ? 'active' : ''}`} onClick={() => setCurrentPage(3)}>Produtores</li>
                            <li className={`${currentPage === 4 ? 'active' : ''}`} onClick={() => setCurrentPage(4)}>Ofertas</li>
                            <li className={`${currentPage === 5 ? 'active' : ''}`} onClick={() => setCurrentPage(5)}>Eventos</li>
                        </ul>

                        <div className="icons">
                            <img src="/Busca.png" alt="" />
                            <img src="/conta.png" alt="" />
                            <img src="/vazio.png" alt="" />
                        </div>
                    </nav>
                </S.Header>
            </Container>    
        </S.HeaderArea>    
    )
}