import { UI } from "./ui.module.js";

export class Games {
    constructor() {
        this.getGames("mmorpg");

        document.querySelectorAll(".menu a").forEach((link) => {
            link.addEventListener("click", (e) => {
                document.querySelector(".menu .active").classList.remove("active");
                e.target.classList.add("active");
                this.getGames(e.target.dataset.category);
            });
        });

        this.ui = new UI();
    }

    displayData() {
        let gamesBox = ``;

        for (let i = 0; i < gamesData.length; i++) {
            gamesBox += `
                
            <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 border border-1 border-black  ">
                        <div class="game-card-content pt-3">
                            <img src="${gamesData[i].thumbnail}" class="w-100" alt="Game Image">
                            <div class="game-status d-flex justify-content-between align-content-center">
                                <h6 class="game-name p-2" id="gameTitle">${gamesData[i].title}
    
                                </h6>
                                <p class="game-status p-2 my-2 badge text-bg-secondary" id="gameDeveloper">${gamesData[i].developer}</p>
                            </div>
                        </div>
    
                        <div class="game-description">
                            <p class="game-description p-2" id="gameDescription">${gamesData[i].short_description}</p>
                        </div>
    
    
                        <div class="game-category-plateform">
                            <p class="game-category p-2 badge text-bg-secondary" id="gameCategory">${gamesData[i].genre}</p>
                        </div>
                    </div>
            
            `
        }

        document.getElementById("gamesData").innerHTML = gamesBox;
    }



    async getGames(category) {
        // Show
        loadingScreen.classList.remove("d-none")
        let options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'a02f7e2ad7msh5b0419415932cb6p17aba8jsn6176fa0067d9',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };

        let apiResponse = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options);
        let data = await apiResponse.json();

        this.ui.displayGameDetails(data)
        this.startEvent()
        gamesData = data;
        displayData()
        loadingScreen.classList.add("d-none")
    }


    startEvent() {
        document.querySelectorAll(".card").forEach((item) => {
            item.addEventListener("click", () => {
                const id = item.dataset.id;
                this.showDetails(id);
            });
        });
    }

    showDetails(idGame) {
        const details = new Details(idGame);
        document.querySelector(".games").classList.add("d-none");
        document.querySelector(".details").classList.remove("d-none");
    }
}