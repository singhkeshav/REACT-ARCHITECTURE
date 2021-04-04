import React, { memo } from 'react';
import Input from '@material-ui/core/Input';
//Input Field..
const Inputfield = ({id,name,value,handleChange,label,required,disabled, ...rest}) => {
    return (
        <Input id={id} label={label} value={value} name={name} required={required} disabled={disabled} onChange={handleChange} {...rest}/>
    )
}
export default  memo(Inputfield);