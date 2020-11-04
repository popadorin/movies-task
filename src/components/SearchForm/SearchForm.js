import React from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './styles.css'

export function SearchForm({onSubmit, proposedMovies, onQueryChange}) {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <Autocomplete
                    id="search-form"
                    options={proposedMovies ? proposedMovies.map(m => m.title) : []}
                    disableClearable
                    onChange={e => onQueryChange(e.target.innerText || e.target.defaultValue)}
                    onSelect={e => onQueryChange(e.target.defaultValue)}
                    renderInput={params => (
                        <TextField
                            {...params}
                            type={'text'}
                            label="Search"
                            margin="normal"
                            onChange={e => onQueryChange(e.target.value)}
                            style={{width: 400}}
                            InputProps={{...params.InputProps, style: {color: 'white'}, type: "search"}}
                            InputLabelProps={{style: {color: 'white'}}}
                        />
                    )}
                />
            </div>
            <Button className="search-form-submit-btn" variant={'contained'} type="submit">{'Search'}</Button>
        </form>
    )
}
