type Stock = {
    id: number;
    name: string;
    price: number;
}
async function getStocks(): Promise<Stock[]> {
    const resp = await fetch('http://localhost:3001/stocks', {next: {revalidate: 15}});
    return resp.json();
}

export default async function Stocks() {

    const stocks = await getStocks();
    return (
        <div>
            <h1>Olá Stocks</h1>
            <ul>
                {stocks.map((stock) => (
                    <li key={stock.id}>
                        {stock.name} - {stock.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
