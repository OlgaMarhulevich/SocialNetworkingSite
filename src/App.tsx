import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header>
                <div className='logo'>
                    <img src='https://img.apksum.com/9f/nicola.web/2.7/icon.png'/>
                    <a href='#'>Social networking site</a>
                </div>
                <div></div>
            </header>
            <main>
                <aside>
                    <nav>
                        <a href="#">Profile</a>
                        <a href="#">Messages</a>
                        <a href="#">News</a>
                        <a href="#">Music</a>
                        <a href="#" id="settings">Settings</a>
                    </nav>
                </aside>
                <div className='content'>
                    <div className="image"></div>
                    <div>ava + description</div>
                    <div>my post
                        <div>new post</div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </main>
            <footer>&copy; My first site on &nbsp;<a href='#'>React</a></footer>
        </div>
    );
}


export default App;
