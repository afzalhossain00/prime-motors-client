import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';


const AddProduct = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();
    const postDate = new Date();

    const handleAddProduct = data => {
        const image = data.image[0]
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const product = {
                        title: data.title,
                        email: user?.email,
                        sellersName: user?.displayName,
                        categoryId: data.categoryId,
                        image: imgData.data.url,
                        resalePrice: data.resalePrice,
                        condition: data.condition,
                        location: data.location,
                        categoryName: data.categoryName,
                        postedTime: data.postedTime,
                        description: data.description,
                        postDate
                    }

                    console.log(product);

                    // Save sellers product to database
                    fetch('http://localhost:5000/bikes', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success('Posted Successfully')
                            // navigate('/dashboard/mycars')
                        })

                    //Selers product
                    fetch('http://localhost:5000/sellerProduct', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            // navigate('/dashboard/mycars')
                        })
                }
            })
    }

    return (
        <div className='w-9/12 mx-auto'>
            <h2 className='text-4xl mb-5'>Post Your Product for Selling</h2>
            <form onSubmit={handleSubmit(handleAddProduct)}>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Email</span></label>
                    <input type="email"
                        {...register("email")}
                        defaultValue={user?.email}
                        className="input input-bordered w-full" disabled />
                    {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Seller Name</span></label>
                    <input type="text"
                        {...register("sellerName")}
                        defaultValue={user?.displayName}
                        className="input input-bordered w-full" disabled />
                    {errors.sellerName && <p className='text-red-600'>{errors.sellerName?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Product Name</span></label>
                    <input type="text"
                        {...register("title", { required: "Name is required" })}
                        className="input input-bordered w-full" />
                    {errors.title && <p className='text-red-600'>{errors.title?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Price: In Dollar</span></label>
                    <input type="number"
                        {...register("resalePrice", { required: "Price is required" })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Condition</span></label>
                    <select
                        {...register('condition', { required: "Condition is required" })}
                        className="select input-bordered w-full">
                        <option value='Excellent'>Excellent</option>
                        <option value='Good'>Good</option>
                        <option value='Fair'>Fair</option>
                    </select>
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Mobile Number</span></label>
                    <input type="tel"
                        {...register("phone", { required: "Phone number is required" })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Location</span></label>
                    <input type="text"
                        {...register("location", { required: "Location is required" })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Years Of Purchase</span></label>
                    <input type="text"
                        {...register("onDate", { required: "Name is required" })}
                        className="input input-bordered w-full" />
                    {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Category Name</span></label>
                    <select
                        {...register('categoryName', { required: "Category Name is required" })}
                        className="select input-bordered w-full">
                        <option value='Sports Bike'>Sports Bike</option>
                        <option value='Luxury bike'>Luxury bike</option>
                        <option value='Scooter bike'>Scooter bike</option>
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Category ID</span></label>
                    <select
                        {...register('categoryId', { required: "Category Id is required" })}
                        className="select input-bordered w-full">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </select>
                </div>
                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Description</span></label>
                    <textarea
                        {...register('description')}
                        className="textarea textarea-bordered" placeholder="Short Description"></textarea>
                </div>

                <div className="form-control w-full">
                    <label className="label"><span className="label-text">Photo</span></label>
                    <input type="file"
                        {...register("image", { required: "Photo is required" })}
                        className="input input-bordered w-full p-2 " />
                    {errors.image && <p className='text-red-600'>{errors.image?.message}</p>}
                </div>
                <input className='btn btn-primary w-full mt-4 mb-2' type="submit" value="Post Product" />

            </form>
        </div>
    );
};

export default AddProduct;