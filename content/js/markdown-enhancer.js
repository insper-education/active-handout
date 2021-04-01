{
    if (! window.site_url) {
        window.site_url = "http://127.0.0.1:8000/";
    }
    console.log(window.site_url + "config.yml");
    fetch(window.site_url + "config.yml").then((resp) => {
        return resp.text();
    }).then((text) => {
        console.log(text);
        let obj = jsyaml.load(text);
        obj.extensions.forEach((ext) => {
            let scr = document.createElement("script");
            scr.type = "text/javascript";
            scr.src = window.site_url + "js/" + ext + ".js";

            document.body.appendChild(scr);
        });
    });
    
}