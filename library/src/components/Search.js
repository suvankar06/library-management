import { useHistory } from 'react-router-dom';
import "./Search.css";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    const history = useHistory();
    const onSubmit = (e) => {
        history.push(`?s=${searchQuery}`);
        e.preventDefault();
    };

    return (
        <form
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <label htmlFor="header-search">
                <span className="visually-hidden">
                    Search your books here
                </span>
            </label>
            <input
                value={searchQuery}
                onInput={(e) => setSearchQuery(e.target.value)}
                type="text"
                id="header-search"
                placeholder="Search your books here"
                name="s"
            />
            <button type="submit" className='search-btn'>Search</button>
        </form>
    );
};

export default SearchBar;