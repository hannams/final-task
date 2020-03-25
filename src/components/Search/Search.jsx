import React from 'react';
import { useFormik } from 'formik';
import { searchValue } from './../../store/actions/actions'
import { connect } from 'react-redux';

function Search({ searchUsers }) {

    const SearchForm = useFormik({
        initialValues: {
            search: ''
        }
    })
    return (
            <input 
                className="form-control"
                type='text' 
                name='search' 
                placeholder="Search" 
                onChange= {event => {
                    SearchForm.handleChange(event)
                    searchUsers(event.target.value)
                }}
                value={SearchForm.values.search}
            />
    )

}



const mapDispatchToProps = dispatch => ({
    searchUsers: name => dispatch(searchValue(name.toLowerCase()))
})
  

export default connect(null, mapDispatchToProps)(Search);