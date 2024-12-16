import { Component } from "react";

class ButtonComponent extends Component {
    // Object way of creating a state in class-based components
    state = {
        message: "Subscribe",
        isSubscribed: false,
    };

    handleSubscribe = () => {
        this.setState(
            (prevState) => ({
                message: prevState.isSubscribed ? "Subscribe" : "Subscribed thanks",
                isSubscribed: !prevState.isSubscribed,
            }),
            () => {
                console.log("Subscribed successfully:", this.state.isSubscribed);
            }
        );
    };

    render() {
        return (
            <>
                {/* Button */}
                <button onClick={this.handleSubscribe}>{this.state.message}</button>

                {/* Conditional information */}
                {this.state.isSubscribed && (
                    <p>Thank you for subscribing! Stay tuned for updates.</p>
                )}
            </>
        );
    }
}

export default ButtonComponent;
