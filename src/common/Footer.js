import React, { Component } from 'react'
import './../css/footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='footer-text'>
                    All rights reserved.
                </div>

                <div className='footer-links'>
                    <div className='footer-link'>
                        <a target='_blank' href='https://vk.com/justrisya?z=photo371109987_457239070%2Fphotos371109987'><img src='https://i.pinimg.com/originals/d4/0e/1e/d40e1ed6bc563a0eb5fd06cee0d1ac37.jpg' alt='social-vk'/></a> 
                    </div>

                    <div className='footer-link'>
                        <a target='_blank' href='/#'><img src='https://cdn1.iconfinder.com/data/icons/social-black-buttons/512/telegram-512.png' alt='social-telegram'/></a> 
                    </div>

                    <div className='footer-link'>
                        <a target='_blank' href='https://github.com/bl1nkker/ict-project'><img src='https://b.thumbs.redditmedia.com/AltCa25flSy96k0VDTcXUseNPu25FWaInEl1LOvkbqs.png' alt='social-github'/></a> 
                    </div>
                </div>
                
            </footer>
        )
    }
}
