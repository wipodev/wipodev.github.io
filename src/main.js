import AJWipo from "./lib/AJWipo.js";
import "./app.js";
//import "./store/index.js";

const AJwipo = () => new AJWipo(".container").render("aj-wipo");

document.addEventListener("DOMContentLoaded", AJwipo);
