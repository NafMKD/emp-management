import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2';
import { employeeDelete, employeeStatus } from '../../Redux/Ducks/Employee';


const Delete = () => {
    const dispatch = useDispatch();
    const navigator = useNavigate();
    const { id } = useParams();
    var s = false;
    const { status } = useSelector(state => state.employee);
    // confirming submission
    if(status){
        s= true;
    }

    const loaderFunction = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(employeeDelete(id))
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              navigator('/');
            }
          })
    }

    const lf2 = () => {
        Swal.fire({
            title: 'Success!',
            html: '<i>Employee updated successfully!</i>',
            icon: 'success',
            showCancelButton: false,
            showConfirmButton: false
        }).then(res =>{
            dispatch(employeeStatus(false));
            navigator('/');
        });
    }

  return (
    <>
    {(s)?lf2():loaderFunction()}
    </>
  )
}

export default Delete