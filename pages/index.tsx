import {BackgroundImg, HomeContainer, ProductRows} from '@/styles/homestyles'
import Product from "@/components/Product";
import useProducts from "@/components/hooks/useProducts";
import Link from "next/link";


interface ImageProps {
    fileName: string
    width: number
    height: number
    id: string
    url: string
    __typename: string
}

interface ProductProps {
    id: string,
    name: string,
    image: string,
    price: number,
    images: Array<ImageProps>
}

export default function Home() {
    // https://www.youtube.com/watch?v=TS2X1Rl-YRg&list=PLmsBpw69UXdZWAUJGN--wszYWN3eWNTT7&index=1&pp=iAQB
    const { loading, error, data } = useProducts()

    if(loading) return <>Loading...</>
    if(error) return <>{error}</>

    return (
        <HomeContainer>
            <BackgroundImg
                src='https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.webp' alt='Amazon' />

            <ProductRows>
                {
                    !!data && data?.products.map((item: ProductProps) => {
                        return (
                            <Link href={'/product/' + item.id} key={item.id}>
                                <Product id={item.id}
                                         key={item.id}
                                         title={item.name}
                                         prise={item.price}
                                         rating={1}
                                         image={item?.images[0]?.url} />
                            </Link>
                        )
                    })
                }
            </ProductRows>
        </HomeContainer>
    );
}
