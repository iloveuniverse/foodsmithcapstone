import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';

const footer = ()=>{
         return(
            <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
              <section className='mb-4'>
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='facebook-f' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='twitter' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='google' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='instagram' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
      
                <a className='btn btn-outline-light btn-floating m-1' href='#!' role='button'>
                  <MDBIcon fab icon='github' />
                </a>
              </section>
      
              <section className=''>
                <form action=''>
                  <div className='row d-flex justify-content-center'>
                    <div className='col-auto'>
                      <p className='pt-2'>
                        <strong> Get Update's on Latest Recipes</strong>
                      </p>
                    </div>
      
                    <MDBCol md='5' start='12'>
                      <MDBInput contrast type='email' label='Email address' className='mb-4' />
                    </MDBCol>
      
                    <div className='col-auto'>
                      <MDBBtn outline color='light' type='submit' className='mb-4'>
                        Subscribe
                      </MDBBtn>
                    </div>
                  </div>
                </form>
              </section>
      
              <section className='mb-4'>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                  voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                  sequi voluptate quas.
                </p>
              </section>
      
            </MDBContainer>
      
            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
              © 2022 Copyright:
              <a className='text-white' href='#'>
                FoodSmith
              </a>
            </div>
          </MDBFooter>
         );
}

export default footer;