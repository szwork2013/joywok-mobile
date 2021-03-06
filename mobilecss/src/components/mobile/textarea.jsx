import { Link } from 'dva/router';
import React,{ PropTypes } from 'react';
import { TextareaItem, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import  './button.css';

function textarea ({
  
}) {

  return (
  <div className="example">
     <div className="bar bar-header">                                    
        <div className="bar-w">                                      
          <Link to="/">
            <button type="button" className="btn">返回</button>
          </Link>                                                                        
          <h1 className="ellipsis">TextArea</h1>                               
        </div>                                  
       </div>
     <div className="textarea-container">
     
       <TextareaItem
        placeholder="请输入"
      />
     </div>
    </div>

  );
};

textarea.propTypes = {
};

export default createForm()(textarea);
