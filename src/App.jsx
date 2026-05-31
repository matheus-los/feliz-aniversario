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
        <h2>Você é minha:</h2>
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
            <p>Vou começar a carta contando uma coisa (acho que já te contei): quando eu era da outra igreja, a Ana sempre vinha com a brincadeira de “tamo sem guitarrista na igreja em?”. Mas junto com isso, ela e a Kau falavam “Vai que tua varoa tá lá?”. Kkkkkkkk e não é que tava mesmo??</p>
            <p>Você sempre chamou minha atenção (já disse que vc não aceitou quando eu pedi pra te seguir da primeira vez kkkkkk). Sempre achei você muito linda, e nada mudou hoje. Pelo contrário, cada dia que passa eu acho muito mais!</p>
            <p>Eu sou muito grato a Deus por ter você na minha vida. Você é com toda certeza a mulher da minha vida. Eu amo tudo em você: seu cabelo, seu beijo, seu cheiro, seu toque, seu abraço, seu carinho, seu jeito de falar, seu amor por Jesus, sua dedicação em tudo o que faz! Amo até as coisas que você faz mas sabemos que temos que controlar (safada véia 😏). Você me inspira e me motiva a ser alguém melhor. Eu nunca falei tão sério quando disse que você é meu orgulho. Você é! Tenho muito orgulho da mulher que você é e que se torna a cada dia. Eu aprendi muito e continuo aprendendo muito com você todos os dias.</p>
            <p>Eu oro pela sua vida, peço pra Deus te direcionar, te proteger quando estou longe, te encher do amor e da presença Dele em todo o momento, mostrar sempre que você é amada por Ele e também peço pra Ele me ajudar a demostrar cada dia mais o quanto sou apaixonado por você!</p>
            <p>Peço perdão por muitas vezes não agir como você espera, por te decepcionar muitas vezes, por não prestar atenção ou esquecer o que você me diz. Eu quero ser alguém melhor pra você sempre que eu puder. Sei que vou errar muito, te deixar chateada. E além de desculpa, eu te agradeço por me amar tanto, por querer tanto que eu melhore que briga comigo, por me corrigir e sempre querer o meu bem. Eu te amo tanto, de verdade. Você me ensina muito todos os dias a ser alguém melhor. E espero poder ser melhor pra você pra sempre.</p>
            <p>Ano passado eu não te conhecia; desde lá, eu não sei mais viver sem você! Eu te amo e quero te amar pra sempre!</p>

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