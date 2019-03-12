import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';

const fontSize = ['Times New Roman','Times','Arial','sans-serif','Helvetica','Charcoal'];

class Counter extends Component {

    
    state = {
    deadline: 'Mar,11,2019',
    days:'0',
    hours:'0',
    minutes:'0',
    seconds:'0',
    fontSize:[],
    textIdx: 0
    }
    gameUntil(deadline)
    {
   const time=Date.parse(deadline)-Date.parse(new Date());
   if(time<0){
   console.log("Date passed");
   }
   else
   {
      const seconds=Math.floor((time/1000)%60);
      const minutes=Math.floor((time/(1000/60))%60);
      const hours=Math.floor((time/(1000*60*60))%24);
      const days=Math.floor(time/(1000*60*60*24));

      this.setState(
          {
            days,
            hours,
            minutes,
            seconds
          }
      )
   }
    }

    
    componentDidMount()
    {
       setInterval(()=>this.gameUntil(this.state.deadline),10000);
       this.timeout = setInterval(() => {
        let currentIdx = this.state.textIdx;
        this.setState({ textIdx: currentIdx + 1 });
      },100000);
    }

    componentDidUnmount() {
        clearInterval(this.timeout);
      }
    render() {
        let textThatChanges = fontSize[this.state.textIdx % fontSize.length];
        return (
            <Slide left delay={1000}>

                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        <p style={{fontFamily:textThatChanges}}>Event Timer</p>
               </div>

                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                </div>
                            <div className="countdown_tag">
                                Days
                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.hours}
                </div>
                            <div className="countdown_tag">
                                HS
                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.minutes}
                </div>
                            <div className="countdown_tag">
                                MS
                </div>
                        </div>
                        <div className="countdown_item">
                            <div className="countdown_time">
                            {this.state.seconds}
                </div>
                            <div className="countdown_tag">
                                SEC
                </div>
                        </div>
                    </div>
                </div>
            </Slide>
        );
    }
}

export default Counter;