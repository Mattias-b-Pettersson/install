import { faSquareFacebook, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container } from 'react-bootstrap'
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className="text-muted">
    <Container className='d-flex border-top border-1 py-4'>
        <p className='m-0 fs-5'>
            © 2021 Install Elteknik AB
        </p>
        <div className='ms-auto'>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faSquareFacebook} className={`${styles.icon} fs-2 mx-1`} />
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagramSquare} className={`${styles.icon} mx-1 fs-2 `} />
            </a>
        </div>
    </Container>
</footer>
  )
}

export default Footer