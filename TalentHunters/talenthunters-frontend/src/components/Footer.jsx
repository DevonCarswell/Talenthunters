import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter className='text-center text-white fixed-bottom' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn
                        rippleColor="dark"
                        link
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
                        link
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
                        link
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
                        link
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
                        link
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
                        link
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

            <div className='text-center text-dark p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                TalentHunters - 2022
            </div>
        </MDBFooter>
    );
}