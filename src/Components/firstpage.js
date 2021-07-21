import React from 'react';

function Shiv(){
    return (
        <div className='App container col-6'>
          <form id="shivamsform">  
          <fieldset id="myfirstform">
              <legend>registration form</legend>
            
              <div>  
            <label>Enter your full name</label><br/>  
            <input type="text" name="name"/><br/>
            </div>  
            <div>
             <label>Enter your email</label><br/>  
             <input type="email" name="email"/><br/>
             </div>
             <div>  
             <label>Enter your password</label><br/>  
             <input type="password" name="pass"/><br/>
             </div>
             <div>  
             <label>confirm your password</label><br/>  
             <input type="password" name="pass"/><br/>
             </div>
             <div>  
             <br/><label>Enter your gender</label><br/>  
             <input type="radio" id="gender" name="gender" value="male"/>male  
             <input type="radio" id="gender" name="gender" value="female"/>Female    
             <input type="radio" id="gender" name="gender" value="others"/>others   
                
              </div>
              <br/>

              <div>
              <label>SSC percentage</label><br/>
            <input type="text" id="rishabh" name="name"/><br/>
            <br/>
            </div>
            <div>

            <label for="caste">Choose your caste:</label><br/>
  <select name="caste" id="caste">
    <option value="open">OPEN</option>
    <option value="scst">SCST</option>
    <option value="OBC">OBCS</option>
  </select>
  <br/>
                  </div>
              <div>
              
             <input type="submit" value="sign-up"/>    
             </div> 
             
             </fieldset>
          </form>
        </div>
       
      );
  }
export default Shiv 