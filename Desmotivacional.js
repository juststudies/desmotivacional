import React, {Component} from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

class Desmotivacional extends Component{
    constructor(props){
        super(props);
        this.state={
            textoFrase:'Clique no botão e gere sua frase desmotivacional!'
        }

        this.mudarMensagem = this.mudarMensagem.bind(this);
        
        this.frases = [
                        'Você é nada.', 'Não se preocupe, você pode não acordar amanhã',
                        'Pra que se esforçar? Vai dar tudo errado!', 'Se esforçar não significa, necessáriamente, que algo dará certo!',
                        'Procrastinar é acreditar no potencial do seu \'eu\' do amanhã.', 'O caminho é longo e a derrota é certa.',
                        'Não desista com a derrota de hoje, amanhã terá outra', 'Desistir é para os fracos, o ideal é nem tentar!',
                        'Nada é tão ruim que não possa piorar.', 'O \'não\' você já tem, falta a humilhação!', 'Seja feliz! A base de remédios',
                        'Se você não conseguir de primeira, aja como se nem tivesse tentado.', 'Seus amigos parecem se divertir nesse rolê... justamente por que você não foi.',
                        'Finalmente aquela pessoa olhou pra você, e não gostou do que viu.', 'Você irá progredir muito na vida... de The Sims',
                        'Se não conseguiu por medo, tudo bem, você descende de covardes.', 'Não tenha pressa em fracassar, terá a vida toda pra isso'    
                        ]
    }

    mudarMensagem(){
        let state = this.state;
        let i = Math.floor(Math.random() * this.frases.length);
        state.textoFrase = this.frases[i];

        this.setState(state);
    };

    render(){
        return(
            <>
                <Text style={styles.message}>{this.state.textoFrase}</Text>  
                <View style={styles.button}>
                    <Button 
                        title= 'Gerar'
                        color= '#704523'
                        onPress={this.mudarMensagem} />
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    message:{
        color: '#957DAD',
        textAlign: 'center',
        marginTop: 100,
        fontWeight: "bold",
        fontSize: 24
        
    },

    button:{
        marginTop: 200,
        color: '#E9E2D7',
        fontWeight: 'bold',
        fontSize: 14,
        width: 200,  
    }
});

export default Desmotivacional;