import React from "react";
import { Formik, Form, Field } from "formik";
import { addUser } from "../../store/actions/userActions";
import { connect } from "react-redux";
import * as yup from "yup";
import getPropertyValue from "./../../api/getPropertyValue";
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types'

function UserForm({ user, addUser, updateUser, closeForm, isEditing }) {
   let history = useHistory();

  return (
    <Formik
      initialValues={
        isEditing
          ? {
              ...user,
              city: getPropertyValue(user.address, "city"),
              address: `${getPropertyValue(
                user.address,
                "street"
              )}, ${getPropertyValue(user.address, "suite")}`
            }
          : {
              name: "",
              phone: "",
              email: "",
              city: "",
              address: ""
            }
      }
      onSubmit={(values, { resetForm }) => {
        if (isEditing) {
          console.log(values);
          updateUser(values);
          history.push(`/about/${user.id}`)
        } else {
          addUser(values);
          resetForm();
          closeForm();
        }
      }}
      validationSchema={yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .email()
          .required()
      })}
    >
      <Form>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <Field
            className='form-control'
            name='name'
            type='text'
            placeholder='Name'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <Field
            className='form-control'
            name='phone'
            type='text'
            placeholder='Phone'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <Field
            className='form-control'
            name='email'
            type='email'
            placeholder='Email'
          />
        </div>

        <div className='form-group'>
          <label htmlFor='city'>City</label>
          <Field
            className='form-control'
            name='city'
            type='text'
            placeholder='City'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>Address</label>
          <Field
            className='form-control'
            name='address'
            type='text'
            placeholder='Address'
          />
        </div>

        <div className='btn-group '>
             <button type='submit' className='btn btn-success'>
             Submit
           </button>
            
        </div>
      </Form>
    </Formik>
  );
}

const mapStateToProps = store => ({
  users: store.users
});

const mapDispatchToProps = dispatch => ({
  addUser: user => dispatch(addUser(user))
});

UserForm.propTypes = {
  user: PropTypes.object,
  addUser: PropTypes.func, 
  updateUser: PropTypes.func, 
  closeForm: PropTypes.func, 
  isEditing: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);