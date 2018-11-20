{   
    const createResultList = (results) => {
    }
    
    const search = value => {
        fetch(`https://musicdemons.com/api/v1/artist/autocomplete`{
            method : "POST"
            Headers: {
                "Content.Type":"application/x-www-form-urlencoded"
            },
            body
        }
    };

    const handleKeyUpSearch = e => {
        const $input = e.currentTarget;
        search($input.value);
    };

    const init = () => {
        document.querySelector(`.search`).addEventListener(`keyup`, handleKeyUpSearch);
    };

    init();

}