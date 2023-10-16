import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
const {_id, name, quantity, supplier, taste, category, details, photo } = coffee;

const handleDelete = _id => {
console.log(_id);
Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
  .then((result) => {
    if (result.isConfirmed) {
   
    fetch(`http://localhost:5000/coffee/${_id}`, {
        method: 'DELETE'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if(data.deletedCount > 0){
           Swal.fire(
             'Deleted!',
             'Your Coffee has been deleted.',
             'success'
             )
             const remaining = coffees.filter(cof => cof._id !==_id);
             setCoffees(remaining);
        }
    });
    }
  })
}
    return (
        <div className="card card-side  bg-base-200 ">
                <img src={photo} className="w-36" />
                <div className="flex justify-between w-full px-4">
                    <div>
                    <h1 className="font-bold">Name: {name}</h1>
                    <p className="">Quantity: {quantity}</p>
                    <p className="">Supplier: {supplier}</p>
                    <p className="">Taste: {taste}</p>
                    <p className="">Category: {category}</p>
                    <p className="">Details: {details}</p>
                    </div>
                    <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-4">
                        <button className="btn btn-success">View</button>
                        <Link to={`updateCoffee/${_id}`}>
                        <button className="btn btn-warning">Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="btn btn-error">x</button>
                    </div>
                    </div>
                </div>
            
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.node,
    setCoffees: PropTypes.node,
    coffees: PropTypes.node,
};
