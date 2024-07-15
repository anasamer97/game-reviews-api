export class UI {
    displayGameDetails(APIResponse) {
        for (let i = 0; i < APIResponse.length; i++) {
            gameDetailsCard = `
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 border border-1 border-black  ">
                    <div class="game-card-content pt-3">
                        <img src="${APIResponse[i].thumbnail}" class="w-100" alt="Game Image">
                        <div class="game-status d-flex justify-content-between align-content-center">
                            <h6 class="game-name p-2" id="gameTitle">${APIResponse[i].title}

                            </h6>
                            <p class="game-status p-2 my-2 badge text-bg-secondary" id="gameDeveloper">${APIResponse[i].developer}</p>
                        </div>
                    </div>

                    <div class="game-description">
                        <p class="game-description p-2" id="gameDescription">${APIResponse[i].short_description}</p>
                    </div>


                    <div class="game-category-plateform">
                        <p class="game-category p-2 badge text-bg-secondary" id="gameCategory">${APIResponse[i].genre}</p>
                    </div>
                </div>`
        }

        document.getElementById("gamesData").innerHTML = gameDetailsCard;

    }




    extraDetails(APIResponse) {
        const content = `
        <div class="col-md-4">
            <img src="${APIResponse.thumbnail}" class="w-100" alt="image details" />
        </div>

        <div class="col-md-8">
            <h3>Title: ${APIResponse.title}</h3>
            <p>Category: <span class="badge text-bg-info"> ${APIResponse.genre}</span> </p>
            <p>Platform: <span class="badge text-bg-info"> ${APIResponse.platform}</span> </p>
            <p>Status: <span class="badge text-bg-info"> ${APIResponse.status}</span> </p>
            <p class="small">${APIResponse.description}</p>
            <a class="btn btn-outline-warning" target="_blank" href="${APIResponse.game_url}">Show Game</a>
        </div>
        
        `;

        document.getElementById("detailsContent").innerHTML = content;
    }
}
