import React, {ChangeEvent, SyntheticEvent} from 'react';
import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './styles.css'
import {Movie} from "../../types";

interface Props {
    onSubmit: (e: SyntheticEvent) => void
    proposedMovies?: Movie[]
    onQueryChange: (query: string) => void
}

export function SearchForm({onSubmit, proposedMovies, onQueryChange}: Props) {
    return (
        <form onSubmit={onSubmit}>
            <div>
                <Autocomplete
                    id="search-form"
                    options={proposedMovies ? proposedMovies.map(m => m.title) : []}
                    disableClearable
                    onChange={(e: ChangeEvent<{}>) => {
                        const target = e.target as HTMLInputElement;
                        onQueryChange(target.innerText || target.defaultValue)
                    }}
                    onSelect={(e: SyntheticEvent) => {
                        const target = e.target as HTMLInputElement;
                        onQueryChange(target.defaultValue)
                    }}
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
