
import { ShoppingCart } from 'lucide-react';
import { useEffect, useState } from 'react';

const Employee = () => {
    const [exparts,setExperts] = useState([]);
    const[cart,setCart] = useState([]);

  useEffect(() => {
    fetch('./experts.JSON')
    .then(res => res.json())
    .then(data => {setExperts(data);
        console.log(data);
    })
  },[])
    return (
        <div className='p-2'>
           <div className='w-full mx-auto text-center px-2 py-3 bg-gray-100 shadow-md'>
            <h1 className='text-3xl font-bold font-serif'>Create a Cyber Security Team</h1>
            <h6 className='text-sm font-bold'>Our Server is under attact so we need to hire a special cyber Security team</h6>
            <h2 className='text-2xl font-bold '>Total Budget: $10 Million</h2>
           </div>
      

      <div className='flex justify-evenly'>

            <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 space-x-5 '>
            

            {
                
                exparts.map((expert) => {
                   return <div key={expert.id} className=' mt-5  text-center items-center bg-gray-100 px-2 py-3 shadow-sm rounded-sm'>
                    <img  className='mx-auto rounded-full w-20 h-20 border' src={expert.img || "#"} alt="" />
                    <h3 className='font-semibold font-serif'>Name:{expert.name}</h3>
                    <p className='font-semibold font-serif'>Age:{expert.age}</p>
                    <p className='text-sm font-serif'>Designation:{expert.designation}</p>
                    <p className='text-sm font-serif'>Address:{expert.address}</p>
                    <p className='font-semibold font-serif'>Salary: {expert.salary}</p>
                    <button className='px-3 py-2 mx-auto bg-blue-500 hover:bg-blue-700 text-sm font-bold rounded-md text-center flex  text-white items-center mt-20 cursor-pointer'><ShoppingCart/>Add to List</button>
                </div>
                })
            }
             
            </div>

            <div className=' h-fit w-[300px] px-2 py-3 bg-gray-100 shadow-sm text-center mt-5 sticky top-5'>
                <h1 className='font-semibold font-serif'>Expert Added:</h1>
                <h6 className='font-semibold font-serif'>Total Cost:$</h6>
                <div className='px-2 py-3 mt-4 flex text-center items-center space-x-1 bg-white rounded-2xl'>
                    <img className='w-15 h-15 rounded-full border' src="#" alt="" />
                    <h3 className='text-sm font-serif font-semibold'>Brian Krebs</h3>
                </div>
                <button className='mt-4 px-3 py-2 bg-blue-500 hover:bg-blue-700 text-white font-semibold rounded cursor-pointer' type="submit">Confirm List</button>

            </div>

      </div>
            


            

        </div>
    );
};

export default Employee;