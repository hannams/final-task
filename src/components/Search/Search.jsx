import React from 'react';
import { useFormik } from 'formik';
import { searchValue } from './../../store/actions/actions'
import { connect } from 'react-redux';

function Search({searchValue, searchUsers }) {

    const SearchForm = useFormik({
        initialValues: {
            search: searchValue
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

const mapStateToProps = (store) => ({
    searchValue: store.search
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);