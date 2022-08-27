
import { TextField, Container, Button } from "@mui/material";
import { useState } from "react";

const TextBoxes = () => {
    const [original, setOriginal] = useState('')
    const [actual, setActual] = useState('')
    const [percentage, setPercentage] = useState('')

    const formatString = (s) => {
        return s.toLocaleLowerCase().replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (original && actual) {
            var stringSimilarity = require("string-similarity");
            var similarity = stringSimilarity.compareTwoStrings(formatString(original), formatString(actual));

            setPercentage(parseInt(similarity * 100) + "%");
        }
    }

    return (
        <Container
        >
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setOriginal(e.target.value)}
                    label="Original"
                    variant="standard"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx={{
                        display: 'block'
                    }}
                />

                <TextField
                    onChange={(e) => setActual(e.target.value)}
                    label="Actual"
                    variant="standard"
                    fullWidth
                    required
                    multiline
                    rows={4}
                    sx={{
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