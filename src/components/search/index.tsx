import './index.css';

function SearchInput({ onChange }: SearchInputProps) {

    const handleChange = (event: Event) => {

        const term = ((event.currentTarget) as HTMLInputElement).value;
        onChange(term);
    }

    const root = (
        <div class="search-input">
            <i class="ti-zoom-in"></i>
            <input name="searchTerm" placeholder="Pesquisar" onkeyup={handleChange} />
        </div>
    );

    return root;
}

export type SearchInputProps = {
    onChange: (term: string) => void;
}

export default SearchInput;