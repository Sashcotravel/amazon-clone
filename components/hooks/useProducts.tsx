import {GET_PRODUCTS} from "@/lib/qraphql/query";
import {useQuery} from "@apollo/client";

const UseProducts = () => {

    const { loading, error, data } = useQuery(GET_PRODUCTS);

    return { loading, error, data }
};

export default UseProducts;