import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';
import CategoryDetails from './CategoryDetails';

const Category = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await axios.get('https://prime-motors-server.vercel.app/category')
            return res.data;
        }
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-12'>
            <h2 className='text-3xl text-center font-bold'>Our Categories</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {
                    categories.map(card => <CategoryDetails
                        key={card._id}
                        card={card}
                    ></CategoryDetails>)
                }
            </div>
        </div>
    );
};

export default Category;