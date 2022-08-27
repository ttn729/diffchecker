
import { TextField, Container, Button } from "@mui/material";
import { margin } from "@mui/system";
import { useState } from "react";

const TextBoxes = () => {
    const [original, setOriginal] = useState('')
    const [actual, setActual] = useState('')
    const [percentage, setPercentage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if (original && actual) {
            var stringSimilarity = require("string-similarity");
            var similarity = stringSimilarity.compareTwoStrings(original, actual);
            setPercentage(parseInt(similarity * 100) + "%")
        }
    }

    return (    
        <Container>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setOriginal(e.target.value)}
                    label="Original"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx = {{
                        display: 'block'
                    }}
                />

<TextField
                    onChange={(e) => setActual(e.target.value)}

                    label="Actual"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx = {{
                        display: 'block'
                    }}
                />

                <Button type="submit">
                    Submit
                </Button>
            </form>

            <TextField disabled label={percentage} />
        </Container>
    )
}

export default TextBoxes;