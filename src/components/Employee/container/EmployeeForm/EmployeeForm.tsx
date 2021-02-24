import React, { Component, useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage, FieldArray  } from 'formik';
import * as Yup from 'yup';
import { IEmployee } from '../../model/EmployeeModel';
import { addEmployeeRequest, getByIdRequest, updateEmployeeRequest, resetEmployeeState } from './actions/EmployeeFormAction';
import { connect } from 'react-redux';

let initialValues = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    hobbies: [],
    city: '',
    dob: '',
    gender: '',
    address: [{ street : '' , pincode: ''}],
    file: ''
}

const EmployeeForm: React.FC<any> = (props) => {
    const { addEmployee, updateEmployee, success, getByIdEmployee, employeeEdit , resetState} = props;
    const { id } = useParams();
    const [fileObject, setfileObject] = useState( {file: ''});


    const validationScema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        hobbies: Yup.array().required('Required'),
        city: Yup.string().required('Required'),
        dob : Yup.string().required('Required'),
        gender: Yup.string().required('Required'),
         address: Yup.array().of(
           Yup.object().shape({
               street : Yup.string().required('Required'),
               pincode: Yup.number().required('Required')
           })
       ).required('Must have address'),
    })

    const onChangeFile = (event: any) => {
        let reader = new FileReader();
        let file = event.target.files[0];
        reader.onloadend = () => {
            setfileObject({ file : reader.result as string});
          };
          reader.readAsDataURL(file);
      
    }

    const onSubmit = (values: any, onSubmitProps: any) => {
        
        console.log(values);
        alert(JSON.stringify(values));
        onSubmitProps.setSubmitting(false);
        if(id > 0) {
            updateEmployee(values);
        } else  {
        addEmployee(values);
            
        }
    }

    useEffect(()=> {
         if(success){
          props.history.push('/employee');
        }
       
    },[success])


    useEffect(()=> {
       return () => {
           resetState()
       }
   },[])

    useEffect(() => {
        if (Number(id) > 0) {
            getByIdEmployee(id);
        }
     }, [])

    // if(id && !employeeEdit) {
    //     return <h1>Loading</h1>
    // }
    return (
    <div    key = { id ? (employeeEdit? employeeEdit.id : null) : null}>
    {/* <div> */}
    <Formik
     
        initialValues={ id > 0 ? employeeEdit :initialValues}
        validationSchema={validationScema}
        onSubmit={onSubmit}>
        {
            formik => {

                return (<Form>
                    <label htmlFor="firstName">First Name</label>
                    <Field id="firstName" name="firstName" type="text" />
                    <ErrorMessage name="firstName" component="div" />
                    <br />
                    <label htmlFor="lastName">Last Name</label>
                    <Field id="lastName" name="lastName" type="text" />
                    <ErrorMessage name="lastName" component="div" />
                    <br />
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" type="text" />
                    <ErrorMessage name="email" component="div" />
                    <br />
                    <label htmlFor="city">city</label>
                    <Field as="select" name="city">
                        <option value="">Select</option>
                        <option value="Surat">Surat</option>
                        <option value="Baroda">Baroda</option>
                        <option value="Ahemdabad">Ahemdabad</option>
                    </Field>
                    <ErrorMessage name="city" component="div" />
                    <br />

                    <label htmlFor="gender">Gender</label>
                    <div role="group">
                        <label>    <Field type="radio" name="gender" value="M" />Male</label>
                        <label>    <Field type="radio" name="gender" value="F" />Female</label>
                    </div>
                    <ErrorMessage name="gender" component="div" />

                    <label htmlFor="hobbies"> Hobbies</label>
                            <div role="group">
                                <label>   <Field type="checkbox" name="hobbies" value="cricket"/> Cricket  </label>
                                <label>   <Field type="checkbox" name="hobbies" value="football"/> Football  </label>
                                <label>   <Field type="checkbox" name="hobbies" value="readjng"/> Reading  </label>
                            </div>
                            <ErrorMessage name="hobbies" component="div"/>

                    <label htmlFor="dob">Birth date</label>
                            <Field id="dob" name="dob" type="date"/>
                            <ErrorMessage name="dob" component="div"/>
                    <br />
                   <label htmlFor="file">File</label>
                    <input type="file" name="file"  onChange={onChangeFile}/>
                    { fileObject.file &&  (<img style={{width: '100px',height :'50px'}} src={fileObject.file} />)}
                  
                    <br/>

                    <label htmlFor="address">Address</label>
                    <FieldArray name="address">
                     {fieldArrayProps => {
                        const {push,remove,form} = fieldArrayProps;
                        const {values} = form;
                        const {address} = values || {};
                         return (
                             <div>
                                 { (address || []).map((addr: any,index: number)=>(
                                     <div>
                                         <label htmlFor={`address.${index}.street`}> Street</label>
                                     <Field name={`address.${index}.street`} placeholder="street" type="text"/>
                                     <ErrorMessage name={`address.${index}.street`} />
                                     <br/>
                                     <label htmlFor={`address.${index}.pincode`}> Pincode</label>
                                     <Field name={`address.${index}.pincode`} placeholder="Pincode" type="text"/>
                                     <ErrorMessage name={`address.${index}.pincode`} />

                                     {index > 0 && (<button type="button" onClick={()=> remove(index)}> X</button>)}
                                     </div>
                                 ))}
                                 <br/>
                                 
                                 <button type="button" onClick={()=> push({street : '',pincode: ''})}> + </button>
                             </div>
                         )
                     }}
                    </FieldArray>
                    <br/>

                    <button type="button" onClick={() => formik.validateForm()}>Validate all</button>
                    <button type="submit"  >Submit</button>
                    {/* disabled={!formik.isValid || formik.isSubmitting} */}
                </Form>)
            }

        }

    </Formik>

    </div>)
}
{/* <NavLink to="/employee" className="nav-link"> <span className="icon icon-search mr-2"></span>Back to Employee</NavLink> */ }
// class EmployeeForm extends Component<any,any> {
//    render() {
//     return(<>
//         EmployeeForm
//         <NavLink to="/employee" className="nav-link"> <span className="icon icon-search mr-2"></span>Employee</NavLink>
//       </>)
//    }

// }


const mapStateToProps = (state: any) => {
    return {
        success: state.employeesDetails.success,
        employeeEdit: state.employeesDetails.employeeEdit
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addEmployee: (employee: IEmployee) => dispatch(addEmployeeRequest(employee)),
        getByIdEmployee: (id: number) => dispatch(getByIdRequest(id)),
        updateEmployee: (employee: IEmployee) => dispatch(updateEmployeeRequest(employee)),
        resetState: () => dispatch(resetEmployeeState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeForm)