import { getToken } from "./auth.js"

let REPORT_URL;
if (window.ihandout_config["report"] && window.ihandout_config["report"]["url"]) {
    REPORT_URL = window.ihandout_config["report"]["url"];
} else {
    REPORT_URL = '';
}

function sendAnswer(slug, points, summary, long_answer) {
    if (REPORT_URL === '' || getToken() === '') {
        return false;
    }

    const answer_url = REPORT_URL + slug + '/answers/'
    const answer_data = {
        slug: slug,
        submission_date: Date.now(),
        points: points,
        summary: summary,
        long_answer: long_answer  
    };

    fetch(answer_url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + getToken()
        },
        body: JSON.stringify(answer_data)
    }).then((resp) => {
        console.log(resp);
    });

    

    return false;
}

export default { sendAnswer };