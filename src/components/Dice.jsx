import { useState } from "react";
import './Dice.css';

const Dice = () => {
    const i1 = "https://www.svgrepo.com/show/322173/dice-six-faces-one.svg";
    const i2 = "https://www.svgrepo.com/show/499122/dice-two.svg";
    const i3 = "https://www.svgrepo.com/show/499121/dice-three.svg";
    const i4 = "https://www.svgrepo.com/show/499119/dice-four.svg";
    const i5 = "https://www.svgrepo.com/show/499117/dice-five.svg";
    const i6 = "https://www.svgrepo.com/show/499120/dice-six.svg";
    const images = [i1, i2, i3, i4, i5, i6];

    const [score1, setScore1] = useState(0);
    const [score2, setScore2] = useState(0);
    const [turn1, setTurn1] = useState(0);
    const [turn2, setTurn2] = useState(0);
    const [player, setPlayer] = useState(1);
    const [img1, setImage1] = useState(1);
    const [img2, setImage2] = useState(1);
    const [img3, setImage3] = useState(1);
    const [winner, setWinner] = useState('');

    const resetGame = () => {
        setScore1(0);
        setScore2(0);
        setTurn1(0);
        setTurn2(0);
        setPlayer(1);
        setWinner('');
    };

    const Aléatoire = () => {
        if (turn1 >= 5 && turn2 >= 5) return;

        const val1 = Math.floor(Math.random() * images.length);
        const val2 = Math.floor(Math.random() * images.length);
        const val3 = Math.floor(Math.random() * images.length);

        setImage1(val1);
        setImage2(val2);
        setImage3(val3);

        if (val1 === val2 && val2 === val3) {
            if (player === 1) setScore1(s => s + 1);
            else setScore2(s => s + 1);
        }
        if (player === 1) setTurn1(t => t + 1);
        else setTurn2(t => t + 1);

        setPlayer(p => (p === 1 ? 2 : 1));

        // Après mise à jour des tours, voir si on a terminé
        setTimeout(() => {
            if ((turn1 + (player === 1 ? 1 : 0) >= 5) && (turn2 + (player === 2 ? 1 : 0) >= 5)) {
                if (score1 > score2) setWinner('Joueur 1 est le gagnant!');
                else if (score2 > score1) setWinner('Joueur 2 est le gagnant!');
                else setWinner('Égalité!');
                setTimeout(resetGame, 3000); // reset après affichage
            }
        }, 200);
    };

    return (
        <><div id="info"><h1>Score Joueur 1: {score1}</h1>
            <h1>Score Joueur 2: {score2}</h1>
            <h2>Tour du joueur: {player}</h2>
            <p>Chances restantes - Joueur 1: {5 - turn1} | Joueur 2: {5 - turn2}</p></div>
            
            <div id="container">
                
                <img src={images[img1]} alt="" />
                <img src={images[img2]} alt="" />
                <img src={images[img3]} alt="" />
            </div>
            <button onClick={Aléatoire} disabled={!!winner}>Jouer</button>
            {winner && <h2 id="résultat">{winner}</h2>}
        </>
    );
};

export default Dice;
