import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#07e3be' }}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn
                        rippleColor="dark"
                        //link//
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fab fa-facebook-f' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        //link//
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fa-twitter' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        //link//
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fa-google' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        //link//
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fa-instagram' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        //link
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fa-linkedin' />
                    </MDBBtn>

                    <MDBBtn
                        rippleColor="dark"
                        //link
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='#!'
                        role='button'
                    >
                        <MDBIcon fab className='fa-github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

        </MDBFooter>
    );
}