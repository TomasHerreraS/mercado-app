import '../../styles/create-account.css';
import FalseTopbar from '../topbar/false-topbar';
import FormCreateAccount from './form-create-account';

const CreateAccount = () => {
  return(
    <>
      <FalseTopbar/>
      <div className="center background">
        <h2 className='text-center mb-4'>Crear cuenta</h2>
        <FormCreateAccount/>
      </div>
    </>
  )
}

export default CreateAccount;