import AJWipo from "./lib/AJWipo.min.js";
import "./app.js";
//import "./store/index.js";

const AJwipo = () => new AJWipo(".container").render("aj-wipo");

document.addEventListener("DOMContentLoaded", AJwipo);
