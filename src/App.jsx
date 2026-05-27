import { useState } from 'react';
import { memories } from './memories';
import { motion } from 'framer-motion';
import './App.css';

function App () {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="container">
      <header className="header">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Feliz Aniverário, meu amor!
        </motion.h1>
        <p>Um pequeno mural da nossa história</p>
      </header>

      <div className="mural-grid">
        {memories.map((item, index) => (
          <motion.div
            key={item.id}
            className="mural-item"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            {item.type === 'image' ? (
              <div className="card">
                <img src={item.url} alt="Nossa Memoria" />
                <p></p>
              </div>
            ) : (
              <div className="text-card">
                <p>{item.content}</p>
                <small style={{display: 'block', marginTop: '10px'}}>{item.author}</small>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="music-section">
        <h2>Uma musica que me faz lembrar de você!</h2>
        <div className="music-card">
          <iframe
            src="https://open.spotify.com/embed/track/4nTjkWK590oBDcnIxTr1mI?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay: clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            style={{ borderRadius: '12px' }}
          ></iframe>
        </div>
      </div>

      <button className="open-modal-btn" onClick={() => setIsModalOpen(true)}>
        Uma carta pra você!
      </button>

      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <div className="close-modal-container">
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                X
              </button>
            </div>

            <h2>Meu amor,</h2>
            <p></p>
            <p></p>

            <p style={{ textAlign: 'right', marginTop: '30px' }}>
              <strong>Com todo o meu amor, Math. ❤️</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;