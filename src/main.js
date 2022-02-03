import AJWipo from "./lib/AJWipo.js";
import "./app.js";

const AJwipo = () => new AJWipo(".container").render("aj-wipo");

document.addEventListener("DOMContentLoaded", AJwipo);
