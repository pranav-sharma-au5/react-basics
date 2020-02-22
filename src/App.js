import React, { Component } from 'react';
import './App.css';
import { D3L1, D3L2, D3L3 } from "./day03"
import { D4L1, D4L2, D4L3, D4L4 } from "./day04";
import { D5L1, D5L2, D5L3, D5L4, D5L5 } from "./day05";
import { BrowserRouter, Route, Link } from "react-router-dom";
//functional
// function App(){
//     return (
//         <div>
//             Hello
//         </div>
//     )
// }

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="navbar">

                    <Link to="/day03">
                        Day 03
                </Link>
                    <br />
                    <br />
                    <Link to="/day04">
                        Day 04
                </Link>
                    <br />
                    <br />
                    <Link to="/day05">
                        Day 05
                </Link>
                </div>


                <div>
                    {/* day 03  */}
                    <Route path="/day03">
                        <Link to="/day03/D3L1">D3 L1</Link>
                        <br />
                        <br />
                        <Link to="/day03/D3L2">D3 L2</Link>
                        <br />
                        <br />
                        <Link to="/day03/D3L3">D3 L3</Link>
                        <br />
                        <div>
                            <Route path="/day03/D3L1" >
                                <h1>D3 L1</h1>
                                <D3L1 />
                            </Route>

                            <Route path="/day03/D3L2" >
                                <h1>D3 L2</h1>
                                <D3L2 />
                            </Route>

                            <Route path="/day03/D3L3" >
                                <h1>D3 L3</h1>
                                <D3L3 />
                            </Route>

                        </div>
                    </Route>
                    {/* day04 */}
                    <Route path="/day04">
                        <Link to="/day04/D4L1">D4 L1</Link>
                        <br />
                        <br />
                        <Link to="/day04/D4L2">D4 L2</Link>
                        <br />
                        <br />
                        <Link to="/day04/D4L3">D4 L3</Link>
                        <br />
                        <br />
                        <Link to="/day04/D4L4">D4 L4</Link>
                        <br />
                        <div>
                            <Route path="/day04/D4L1" >

                                <h1>D4 L1</h1>
                                <D4L1 />
                                <br />
                            </Route>
                            <Route path="/day04/D4L2" >
                                <h1>D4 L2</h1>
                                <D4L2 />
                                <br />
                            </Route>
                            <Route path="/day04/D4L3" >
                                <h1>D4 L3</h1>
                                <D4L3 />
                                <br />
                            </Route>
                            <Route path="/day04/D4L4" >
                                <h1>D4 L4</h1>
                                <D4L4 />
                            </Route>
                        </div>
                    </Route>
                    {/* day05 */}
                    <Route path="/day05">
                        <br />
                        <div  >
                            <Link to="/day05/D5L1">D5 L1</Link>
                            <br />
                            <br />
                            <Link to="/day05/D5L2">D5 L2</Link>
                            <br />
                            <br />
                            <Link to="/day05/D5L3">D5 L3</Link>
                            <br />
                            <br />
                            <Link to="/day05/D5L4">D5 L4</Link>
                            <br />
                            <br />
                            <Link to="/day05/D5L5">D5 L5</Link>

                            <Route path="/day05/D5L1" >
                                <h1>D5 L1</h1>
                                <D5L1 />
                            </Route>
                            <Route path="/day05/D5L2" >

                                <h1>D5 L2</h1>
                                <D5L2 />
                                <br />
                            </Route>
                            <Route path="/day05/D5L3" >
                                <h1>D5 L3</h1>
                                <D5L3 />
                                <br />
                            </Route>
                            <Route path="/day05/D5L4" >
                                <h1>D5 L4</h1>
                                <D5L4 />
                            </Route>
                            <Route path="/day05/D5L5" >
                                <h1>D5 L5</h1>
                                <D5L5 />
                                <br />
                            </Route>
                        </div>
                    </Route>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;

