//import logo from './logo.svg';
import React,{Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props){
      super(props);

      this.state = {
        theme:'Friendship', 
        tempo:'120', 
        key:'C', 
        submit: false,
        keywords : 'friends, lifetime, lean, pal, hardship, bond, carry, safe, mine, light, remind, rely',
        chordProgression: 'C F Am G'
      };
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleThemeChange = (event) => {
      this.setState({
        theme: event.target.value
      });
    }

    handleTempoChange = (event) => {
      this.setState({
        tempo: event.target.value
      });
    }

    handleKeyChange = (event) => {
      this.setState({
        key: event.target.value
      });
    }

    handleSubmit(event){
      if(this.state.theme === 'Friendship'){
        this.setState({
          keywords: 'friends, lifetime, lean, pal, hardship, bond, carry, safe, mine, light, remind, rely'
        });
          if(this.state.key === 'C'){
            this.setState({
              chordProgression: 'C F Am G'
            });
          }
          else if(this.state.key === 'D Flat'){
            this.setState({
              chordProgression: 'Dflat Gflat Bflatm Aflat'
            });
          }
          else if(this.state.key === 'D'){
            this.setState({
              chordProgression: 'D G Bm A'
            });
          }
          else if(this.state.key === 'E Flat'){
            this.setState({
              chordProgression: 'Eflat Aflat Cm Bflat'
            });
          }
          else if(this.state.key === 'E'){
            this.setState({
              chordProgression: 'E A C#m B'
            });
          }
          else if(this.state.key === 'F'){
            this.setState({
              chordProgression: 'F Bflat Dm C'
            });
          }
          else if(this.state.key === 'G Flat'){
            this.setState({
              chordProgression: 'Gflat Cflat Eflatm Dflat'
            });
          }
          else if(this.state.key === 'G'){
            this.setState({
              chordProgression: 'G C Em D'
            });
          }
          else if(this.state.key === 'A Flat'){
            this.setState({
              chordProgression: 'Aflat Dflat Fm Eflat'
            });
          }
          else if(this.state.key === 'A'){
            this.setState({
              chordProgression: 'A D F#m E'
            });
          }
          else if(this.state.key === 'B Flat'){
            this.setState({
              chordProgression: 'Bflat Eflat Gm F'
            });
          }
          else if(this.state.key === 'B'){
            this.setState({
              chordProgression: 'B E G#m F#'
            });
          }
      }

      else if(this.state.theme === 'Heartbreak'){
        this.setState({
          keywords: 'heart, broken, dark, forget, cold, find, crying, fear, alone, blue, wish, tear'
        });
        if(this.state.key === 'C'){
          this.setState({
            chordProgression: 'C F Em Bdim'
          });
        }
        else if(this.state.key === 'D Flat'){
          this.setState({
            chordProgression: 'Dflat Gflat Fm Cdim'
          });
        }
        else if(this.state.key === 'D'){
          this.setState({
            chordProgression: 'D G F#m C#dim'
          });
        }
        else if(this.state.key === 'E Flat'){
          this.setState({
            chordProgression: 'Eflat Aflat Gm Ddim'
          });
        }
        else if(this.state.key === 'E'){
          this.setState({
            chordProgression: 'E A G#m D#dim'
          });
        }
        else if(this.state.key === 'F'){
          this.setState({
            chordProgression: 'F Bflat Am Edim'
          });
        }
        else if(this.state.key === 'G Flat'){
          this.setState({
            chordProgression: 'Gflat Cflat A#m E#dim'
          });
        }
        else if(this.state.key === 'G'){
          this.setState({
            chordProgression: 'G C Bm F#dim'
          });
        }
        else if(this.state.key === 'A Flat'){
          this.setState({
            chordProgression: 'Aflat Dflat Cm Gdim'
          });
        }
        else if(this.state.key === 'A'){
          this.setState({
            chordProgression: 'A D C#m G#dim'
          });
        }
        else if(this.state.key === 'B Flat'){
          this.setState({
            chordProgression: 'Bflat Eflat Dm Adim'
          });
        }
        else if(this.state.key === 'B'){
          this.setState({
            chordProgression: 'B E D#m A#dim'
          });
        }
      }

      else if(this.state.theme === 'Angst'){
        this.setState({
          keywords: 'head, worry, fear, angst, stress, cry, breath, sigh, anxiety, feel, concern, uneasy'
        });
        if(this.state.key === 'C'){
          this.setState({
            chordProgression: 'C Bdim F Bdim'
          });
        }
        else if(this.state.key === 'D Flat'){
          this.setState({
            chordProgression: 'Dflat Cdim Gflat Cdim'
          });
        }
        else if(this.state.key === 'D'){
          this.setState({
            chordProgression: 'D C#dim G C#dim'
          });
        }
        else if(this.state.key === 'E Flat'){
          this.setState({
            chordProgression: 'Eflat Ddim Aflat Ddim'
          });
        }
        else if(this.state.key === 'E'){
          this.setState({
            chordProgression: 'E D#dim A D#dim'
          });
        }
        else if(this.state.key === 'F'){
          this.setState({
            chordProgression: 'F Edim Bflat Edim'
          });
        }
        else if(this.state.key === 'G Flat'){
          this.setState({
            chordProgression: 'Gflat E#dim B E#dim'
          });
        }
        else if(this.state.key === 'G'){
          this.setState({
            chordProgression: 'G F#dim C F#dim'
          });
        }
        else if(this.state.key === 'A Flat'){
          this.setState({
            chordProgression: 'Aflat Gdim Dflat Gdim'
          });
        }
        else if(this.state.key === 'A'){
          this.setState({
            chordProgression: 'A G#dim D G#dim'
          });
        }
        else if(this.state.key === 'B Flat'){
          this.setState({
            chordProgression: 'Bflat Adim Eflat Adim'
          });
        }
        else if(this.state.key === 'B'){
          this.setState({
            chordProgression: 'B A#dim E A#dim'
          });
        }
      }

      else if(this.state.theme === 'Aspiration'){
        this.setState({
          keywords: 'hope, light, bright, free, unleashed, remember, believe, desire, wish, faith, confident, proomise'
        });
        if(this.state.key === 'C'){
          this.setState({
            chordProgression: 'C F C G'
          });
        }
        else if(this.state.key === 'D Flat'){
          this.setState({
            chordProgression: 'Dflat Gflat Bflatm Aflat'
          });
        }
        else if(this.state.key === 'D'){
          this.setState({
            chordProgression: 'D G D A'
          });
        }
        else if(this.state.key === 'E Flat'){
          this.setState({
            chordProgression: 'Eflat Aflat Eflat Bflat'
          });
        }
        else if(this.state.key === 'E'){
          this.setState({
            chordProgression: 'E A E B'
          });
        }
        else if(this.state.key === 'F'){
          this.setState({
            chordProgression: 'F Bflat F C'
          });
        }
        else if(this.state.key === 'G Flat'){
          this.setState({
            chordProgression: 'Gflat Cflat Gflat Dflat'
          });
        }
        else if(this.state.key === 'G'){
          this.setState({
            chordProgression: 'G C G D'
          });
        }
        else if(this.state.key === 'A Flat'){
          this.setState({
            chordProgression: 'Aflat Dflat Aflat Eflat'
          });
        }
        else if(this.state.key === 'A'){
          this.setState({
            chordProgression: 'A D A E'
          });
        }
        else if(this.state.key === 'B Flat'){
          this.setState({
            chordProgression: 'Bflat Eflat Bflat F'
          });
        }
        else if(this.state.key === 'B'){
          this.setState({
            chordProgression: 'B E B F#'
          });
        }
      }

      this.setState({
        submit: true
      });
      event.preventDefault();
    }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1> Con Anima </h1>
        <form onSubmit={this.handleSubmit}>
            <label> 
              Theme:  
            </label>
            <select name='theme' value={this.state.theme} onChange={this.handleThemeChange}>
                <option value="Friendship">Friendship</option>
                <option selected value="Heartbreak">Heartbreak</option>
                <option value="Angst">Angst</option>
                <option value="Aspiration">Aspiration</option>
            </select>
            <p> </p>
            <label>
              Tempo:  
            </label>
            <select name='tempo' onChange={this.handleTempoChange}>
                <option value="60">60</option>
                <option value="70">70</option>
                <option value="80">80</option>
                <option value="90">90</option>
                <option value="100">100</option>
                <option value="110">110</option>
                <option selected value="120">120</option>
                <option value="130">130</option>
                <option value="140">140</option>
                <option value="150">150</option>
            </select>
            <p> </p>
            <label> 
              Key:  
            </label>
            <select name='key' onChange={this.handleKeyChange}>
                <option selected value="C">C</option>
                <option value="D Flat">D Flat</option>
                <option value="D">D</option>
                <option value="E Flat">E Flat</option>
                <option value="E">E</option>
                <option value="F">F</option>
                <option value="G Flat">G Flat</option>
                <option value="G">G</option>
                <option value="A Flat">A Flat</option>
                <option value="A">A</option>
                <option value="B Flat">B Flat</option>
                <option value="B">B</option>
            </select>
            <p> </p>
            <input type="submit" value="Generate Ideas" />
        </form>
        <p> </p>
        {this.state.submit &&
        <span>Suggested Words: {this.state.keywords}
            <br />
            Suggested Chord Progression: {this.state.chordProgression}
          </span>}
      </header>
    </div>
  );  
  }
}

export default App;