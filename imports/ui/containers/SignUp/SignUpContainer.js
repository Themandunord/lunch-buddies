import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Accounts } from 'meteor/accounts-base';
import SignUp from '../../components/SignUp/SignUp';
import {
  updateEmailField,
  updatePasswordField,
  updateFullnameField,
  updatePhoneField
} from '../../../../client/redux/modules/forms';

class SignUpContainer extends Component {

  handleSignUp = ({ updateEmailField, updatePasswordField, updateFullnameField, updatePhoneField, dispatch }) => {
    const email = this.props.updateEmailField,
      password = this.props.updatePasswordField,
      fullName = this.props.updateFullnameField,
      phoneNumber = this.props.updatePhoneField,
      budget = this.props.budgetFilters,
      cuisines = this.props.cuisineFilters,
      interests = this.props.interestsFilters

    const user = {
      email: this.props.updateEmailField,
      password: this.props.updatePasswordField,
      profile: {
        fullName: this.props.updateFullnameField,
        budget: this.props.budgetFilters,
        cuisines: this.props.cuisineFilters,
        interests: this.props.interestsFilters,
        phoneNumber: this.props.updatePhoneField,
        currentLunch: null,
        pendingLunches: [],
        available: true
      }
    }

    if (user) {
      Meteor.call('users.createUser', user, (error) => {
        if (error) {
          console.log("There was an error: " + error.reason);
        } else {
          this.props.history.push('/')
        }
      }
      )
    }
  }

  handleEmail = (event) => {
    this.props.dispatch(updateEmailField(event.target.value));
  }

  handlePassword = (event) => {
    this.props.dispatch(updatePasswordField(event.target.value));
  }

  handleFullname = (event) => {
    this.props.dispatch(updateFullnameField(event.target.value));
  }

  handleBudget = (event) => {
    this.props.dispatch(updateBudgetField(event.target.value));
  }

  handleCuisines = (event) => {
    this.props.dispatch(updateCuisinesField(event.target.value));
  }

  handleInterests = (event) => {
    this.props.dispatch(updateInterestsField(event.target.value));
  }

  handlePhone = (event) => {
    this.props.dispatch(updatePhoneField(event.target.value));
  }
<<<<<<< HEAD

  render() {
    return (
      <div>
        <SignUp

          handleSignUp={(e) => {
            e.preventDefault();
            this.handleSignUp({
              email: this.props.updateEmailField,
              password: this.props.updatePasswordField,
              fullName: this.props.updateFullnameField,
              phoneNumber: this.props.updatePhoneField
            });
          }}

          handleEmail={(e) => {
            this.handleEmail(e);
          }}

          handlePassword={(e) => {
            this.handlePassword(e);
          }}

          handleFullname={(e) => {
            this.handleFullname(e);
          }}

          handleBudget={(e) => {
            this.handleBudget(e);
          }}

          handleCuisines={(e) => {
            this.handleCuisines(e);
          }}

          handleInterests={(e) => {
            this.handleInterests(e);
          }}

          handlePhone={(e) => {
            this.handlePhone(e);
          }}
=======
  
  render () {
    return (
      <div>
        <SignUp 

        handleSignUp={(e) => {
          e.preventDefault();
          this.handleSignUp({ 
            email: this.props.updateEmailField,
            password: this.props.updatePasswordField,
            fullName: this.props.updateFullnameField,
            phoneNumber: this.props.updatePhoneField
          });
        }}
        
        handleEmail={(e) => {
          this.handleEmail(e);
        }}

        handlePassword={(e) => {
          this.handlePassword(e);
        }}

        handleFullname={(e) => {
          this.handleFullname(e);
        }}

        handleBudget={(e) => {
          this.handleBudget(e);
        }}

        handleCuisines={(e) => {
          this.handleCuisines(e);
        }}

        handleInterests={(e) => {
          this.handleInterests(e);
        }}

        handlePhone={(e) => {
          this.handlePhone(e);
        }}
>>>>>>> dd43c060965cec14e432fefc4131c357d771c75d
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
<<<<<<< HEAD
  updateEmailField: state.forms.emailField,
  updatePasswordField: state.forms.passwordField,
  updateFullnameField: state.forms.fullnameField,
  updatePhoneField: state.forms.phoneField,
  interestsFilters: state.filters.interestsFilters,
  cuisineFilters: state.filters.cuisineFilters,
  budgetFilters: state.filters.budgetFilters
=======
    updateEmailField: state.forms.emailField,
    updatePasswordField: state.forms.passwordField,
    updateFullnameField: state.forms.fullnameField,
    updatePhoneField: state.forms.phoneField,
    interestsFilters: state.filters.interestsFilters,
    cuisineFilters: state.filters.cuisineFilters,
    budgetFilters: state.filters.budgetFilters
>>>>>>> dd43c060965cec14e432fefc4131c357d771c75d
});

export default connect(mapStateToProps)(SignUpContainer);