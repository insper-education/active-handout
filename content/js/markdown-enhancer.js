{
    // HACK: depends on mkdocs-material
    let home_link = document.querySelector(".md-header a.md-header-nav__button.md-logo");
    window.site_url = home_link.href;
    console.log(window.site_url + "config.yml");
    fetch(window.site_url + "config.yml").then((resp) => {
        return resp.text();
    }).then((text) => {
        let obj = jsyaml.load(text);
        obj.extensions.forEach((ext) => {
            let scr = document.createElement("script");
            scr.type = "text/javascript";
            scr.src = window.site_url + "js/" + ext + ".js";

            document.body.appendChild(scr);
        });

        window.ihandout_config = obj.config;
    });
    
}