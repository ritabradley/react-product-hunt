class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const products = Seed.products.sort((a, b) => b.votes - a.votes);
        const productComponents = products.map((product) => (
            <Product
                key={`product-${product.id}`}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
            />
        ));
        return <div className='ui unstackable items'>{productComponents}</div>;
    }
}

class Product extends React.Component {
    render() {
        const {title, description, url, votes, submitterAvatarUrl, productImageUrl} = this.props;
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} alt=''/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a>
                            <i className='large caret up icon'></i>
                            {votes}
                        </a>
                    </div>
                    <div className='description'>
                        <a href={url}>{title}</a>
                        <p>{description}</p>
                    </div>
                    <div className='extra'>
                        <span>Submitted by: </span>
                        <img src={submitterAvatarUrl} alt='daniel' className='ui avatar image'/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<ProductList/>, document.getElementById('content'));
