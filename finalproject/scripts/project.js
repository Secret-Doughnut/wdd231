let url = "https://dogapi.dog/api/v2/facts?limit=5";

// https://catfact.ninja/facts?max_length=200&limit=200

// https://dogapi.dog/api/v2/facts?limit=5

let key = {
    "X-Api-Key": "kye6uDnCVXBAxLPpIMjNwol4m99CQ9NpRrFdpP6N"
};

async function apiFetch() {
    try {
        const response = await fetch(url, { headers: key });
        if (response.ok) {
            const data = await response.json();
            console.log(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}

apiFetch();