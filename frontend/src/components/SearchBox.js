import React, { useState } from 'react'
import { Form, Button, InputGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ImSearch } from "react-icons/im";

const SearchBox = () => {
    const [keyword, setKeyword] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword.trim()) {
            navigate(`/search/${keyword}`)
        } else {
            navigate("/")
        }
    }

    return (
        <Form onSubmit={submitHandler} className="d-flex">
            <InputGroup>
                <Form.Control
                    type="text"
                    name="q"
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search Products..."
                    className="mr-sm-2"
                />
                <Button type="submit" variant='outline-success' >
                <ImSearch />
                </Button>
            </InputGroup>
        </Form>
    )
}

export default SearchBox