import { connect } from 'react-redux'
import Form from '../components/Form'
import ErrorMessage from '../components/ErrorMessage'

const mapStateToProps = (state) => {
  return {
    status: state.success
  }
}

const mapDispatchToProps = (dispatch) =>({
  getImage(breed){
    dispatch(()=>{
      fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      .then(res =>res.json())
      .then(image =>{
        if (image.status === 'success') {
          dispatch({
            type:'ADD_IMAGE',
            image
          })
        } else {
          console.log('NO IMAGE');
        }
      })
    })
  }

})

const TempForm = connect(null, mapDispatchToProps)(Form)
const TempErrorMessage = connect(mapStateToProps)(ErrorMessage)


const simple = 'simple'
const simple2 = 'simple2'

export { TempForm, TempErrorMessage };
