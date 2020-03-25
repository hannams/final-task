import React from 'react';
import { useFormik } from 'formik';
import { searchValue } from './../../store/actions/actions'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'

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

function mapStateToProps(state) {
    return {
      users: state.users
    }
  }

const mapDispatchToProps = dispatch => ({
    searchUsers: name => dispatch(searchValue(name.toLowerCase()))
})
  
Search.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);