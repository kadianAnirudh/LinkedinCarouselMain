import React from 'react'
import ConvertKitForm from 'convertkit-react'

// const MY_FORM_ID = 4857800

const Form = () => {

  const config = {
    formId: 4857800,
    template: 'clare',
    emailPlaceholder: 'Enter an email address',
    submitText: 'Sign up',
  }

  return (
    <div className="flex justify-center">
<div className="w-4/5 flex justify-center">
    <ConvertKitForm {...config}/>
</div>
    </div>
  )
}

export default Form