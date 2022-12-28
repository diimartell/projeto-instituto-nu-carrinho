export default function Header(props) {
    const { countCartItems } = props;
    return (
    <div className="row center block">
        <div>
            <a href="#/">
                <h2>Carrinho</h2>
            </a>
        </div>
        <div>
            <a href="#/cart">Carrinho
            {countCartItems ? (
            <button className="badge">{countCartItems}</button>
            ) : (
                ''
            )}
            </a> <a href="#/entrar">Entrar</a>
        </div>
    </div>
    );
}