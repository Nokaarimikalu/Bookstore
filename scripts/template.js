function bookTemplate(i) {
    return `<div class="templateBook" id="${[i + 1]}">
                <div class="nameOfTheBook"><h2>${books[i].name}</h2></div>
                <div class="imageOfTheBook">
                    <img src="${books[i].image}" alt="" />
                </div>
                <div class="infoOfTheBook">
                    <div class="priceAndLikes">
                        <div class="price"><h2>${books[i].price}$</h2></div>
                        <div class="likes"><span id="likedNumber${[i]}">${books[i].likes}</span><div id="heart${i}"> </div></div>
                    </div>
                    <table class="infoBook">
                        <tr>
                            <td><b>Autor</b></td>
                            <td>: ${books[i].author}</td>
                        </tr>
                        <tr>
                            <td><b>Erscheinungsjahr</b></td>
                            <td>: ${books[i].publishedYear}</td>
                        </tr>
                        <tr>
                            <td><b>Genre</b></td>
                            <td>: ${books[i].genre}</td>
                        </tr>
                    </table>
                </div>
                <div class="whiteLine"></div>
                <div class="commentsOfTheBook">
                    <span> <b>Kommentare:</b></span>
                    <div id="commentsTemplate${i}"></div>
                </div>
                <div class="inputOfTheBook">
                    <div class="inputl"><input id="input${
                        i + 1
                    }" class="comments" type="text" placeholder="Schreibe dein Kommentar..." /></div>
                        <img class="sendComment" onclick="addComments(${i})" src="/Bookstore/assets/img/telegram-logo.png" alt="" />
                </div>
            </div>`;
}
function commentTemplate(i, j) {
    return `<div class="commentsName" id="commentsTemp${i}">
                <p class="nameOfPerson">${books[i].comments[j].name}:</p>
                <p class="commenOfPerson">${books[i].comments[j].comment}</p>
            </div>`;
}
