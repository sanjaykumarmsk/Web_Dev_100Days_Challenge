let url = "https://catfact.ninja/fact";

async function getFacts() {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
}