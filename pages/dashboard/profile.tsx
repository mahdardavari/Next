import React, { PureComponent } from 'react'
import Input from '../../components/customize-input/CustomizeInput'

const Mahdar = () => {
    return (
      <>
        <div className="flex justify-center">
          <Input
            name="mahdar"
            lable="lblmahdar"
            className=""
            type="text"
            id="mahdar"
            value="1"
          />
        </div>
      </>
    );
}

export default Mahdar