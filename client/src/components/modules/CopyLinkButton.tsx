import React, {useState } from "react";

const CopyLinkButton = (props) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () =>{
        try {
            navigator.clipboard.writeText(props.link + props.eventId);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 1000);
        } catch (err) {
            console.error("failed to copy text: " , err);
        }
    };

    return(
        <button onClick = {handleCopy}>
            {isCopied ? "Copied!" : "Copy Link"}
        </button>
    );
}

export default CopyLinkButton;