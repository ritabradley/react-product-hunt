class ProductList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        this.setState({products: Seed.products})
    }

    handleProductUpVote(productId) {
        console.log(`${productId} was upvoted.`)
    }

    render() {
        const products = this.state.products.sort((a, b) => b.votes - a.votes);
        const productComponents = products.map((product) => (
            <Product
                key={`product-${product.id}`}
                id={product.id}
                title={product.title}
                description={product.description}
                url={product.url}
                votes={product.votes}
                submitterAvatarUrl={product.submitterAvatarUrl}
                productImageUrl={product.productImageUrl}
                onVote={this.handleProductUpVote}
            />
        ));
        return <div className='ui unstackable items'>{productComponents}</div>;
    }
}

class Product extends React.Component {
    constructor(props) {
        super(props)

        this.handleUpVote = this.handleUpVote.bind(this);
    }

    handleUpVote() {
        this.props.onVote(this.props.id);
    }

    render() {
        const {title, description, url, votes, submitterAvatarUrl, productImageUrl} = this.props;
        return (
            <div className='item'>
                <div className='image'>
                    <img src={productImageUrl} alt=''/>
                </div>
                <div className='middle aligned content'>
                    <div className='header'>
                        <a onClick={this.handleUpVote}>
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
