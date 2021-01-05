//imports
import React, { Component } from "react"
import Lottie from "react-lottie"
//assets
import Loading from "../../assets/lottie/GC-Rocket1.json"

//style
import Style from "./style"


class Featured extends Component {

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: Loading,
        }
        return (
            <Style className="page search">
                <div className="main fadeIn">
                    <Lottie options={defaultOptions} height={300} width={300} />
                    <section id="version2">
                        Loading<span class="one">.</span><span class="two">.</span><span class="three">.</span>
                    </section>
                </div>
            </Style>
        )
    }
}

export default Featured
