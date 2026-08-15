console.log("TheDogAPI is working!");

const app = document.getElementById("app");

async function getBreeds() {
    try {
        const response = await fetch("https://api.thedogapi.com/v1/breeds", {
            headers: {
                "x-api-key": import.meta.env.VITE_DOG_API_KEY
             }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch dog breeds");
        }

        const data = await response.json();

        console.log(data);

        displayBreeds(data);
    } catch (error) {
        console.error(error);

        app.innerHTML = `
            <p>Sorry, we couldn't load the dog breeds.</p>
            <button onclick="getBreeds()">Try Again</button>
        `;
    }
}

function displayBreeds(breeds) {
    app.innerHTML = `
        <h2>Dog Breeds</h2>
        <ul>
            ${breeds.map(breed => `
                <li>
                    <button class="breed-button" data-id="${breed.id}">
                        ${breed.name}
                    </button>
                </li>
            `).join("")}
        </ul>
    `;

    const buttons = document.querySelectorAll(".breed-button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const breedId = button.dataset.id;
            getBreed(breedId);
        });
    });
}

async function getBreed(id) {
    try {
        const response = await fetch(
            `https://api.thedogapi.com/v1/breeds/${id}`,
            {
                headers: {
                    "x-api-key": import.meta.env.VITE_DOG_API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch breed details");
        }

        const breed = await response.json();

        console.log(breed);

        displayBreedDetails(breed);

    } catch (error) {
        console.error(error);

        app.innerHTML = `
            <p>Sorry, we couldn't load this breed.</p>
            <button id="back-button">Back to breeds</button>
        `;

        document
            .getElementById("back-button")
            .addEventListener("click", getBreeds);
    }
}

function displayBreedDetails(breed) {
    app.innerHTML = `
        <button id="back-button">← Back to Breeds</button>

        <h2>${breed.name}</h2>

        ${breed.image?.url
            ? `<img
                src="${breed.image.url}"
                alt="${breed.name}"
                class="main-dog-image"
            >`
            : "<p>No image available.</p>"
        }

        <div class="breed-info">
            <p><strong>Breed Group:</strong> ${breed.breed_group || "Unknown"}</p>
            <p><strong>Life Span:</strong> ${breed.life_span || "Unknown"}</p>
            <p><strong>Temperament:</strong> ${breed.temperament || "Unknown"}</p>
            <p><strong>Origin:</strong> ${breed.origin || "Unknown"}</p>
        </div>

        <button id="photos-button">Load More Photos</button>

        <div id="photo-gallery"></div>
    `;

    document
        .getElementById("back-button")
        .addEventListener("click", getBreeds);

    document
        .getElementById("photos-button")
        .addEventListener("click", () => getBreedImages(breed.id));
}

async function getBreedImages(breedId) {
    const gallery = document.getElementById("photo-gallery");

    gallery.innerHTML = "<p>Loading photos...</p>";

    try {
        const response = await fetch(
            `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&limit=6`,
            {
                headers: {
                    "x-api-key": import.meta.env.VITE_DOG_API_KEY
                }
            }
        );

        if (!response.ok) {
            throw new Error("Failed to fetch dog images");
        }

        const images = await response.json();

        console.log(images);

        displayBreedImages(images);

    } catch (error) {
        console.error(error);

        gallery.innerHTML = `
            <p>Sorry, we couldn't load the photos.</p>
        `;
    }
}

function displayBreedImages(images) {
    const gallery = document.getElementById("photo-gallery");

    if (images.length === 0) {
        gallery.innerHTML = "<p>No additional photos available.</p>";
        return;
    }

    gallery.innerHTML = `
        <h3>More Photos</h3>

        <div class="gallery">
            ${images.map(image => `
                <img
                    src="${image.url}"
                    alt="Dog breed photo"
                    class="gallery-image"
                >
            `).join("")}
        </div>
    `;
}

getBreeds();