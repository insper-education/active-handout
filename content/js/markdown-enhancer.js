'use-strict';

// HACK: depends on mkdocs-material
let home_link = document.querySelector("header.md-header a.md-logo");
window.site_url = home_link.href;
console.log(window.site_url + "config.yml");
fetch(window.site_url + "config.yml").then((resp) => {
    return resp.text();
}).then((text) => {
    let obj = jsyaml.load(text);
    obj.extensions.forEach((ext) => {
        import(window.site_url + "js/" + ext + ".js");
    });

    window.ihandout_config = obj.config;
});
