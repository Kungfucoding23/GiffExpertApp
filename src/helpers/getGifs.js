

export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=KJYm7HX3CDWX39cn8b0AJKzwGZFDzKBG`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url  // EL ? ES PARA PREGUNTAR QUE SI VIENEN LAS IMAGENS ENTONCES LAS UTILICE
        }
    });

    return gifs;
}
