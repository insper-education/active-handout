{
    reportEnabled = window.ihandout_config["report"]["enable"];

    if (window.ihandout_config["report"]["enable"] == true) {
        var firebaseConfig = {
            apiKey: window.ihandout_config["report"]["firebase"]["apiKey"],
            authDomain: window.ihandout_config["report"]["firebase"]["authDomain"],
            databaseURL: window.ihandout_config["report"]["firebase"]["databaseURL"],
            projectId: window.ihandout_config["report"]["firebase"]["projectId"],
            storageBucket: window.ihandout_config["report"]["firebase"]["storageBucket"],
            messagingSenderId: window.ihandout_config["report"]["firebase"]["messagingSenderId"],
            appId: window.ihandout_config["report"]["firebase"]["appId"],
        };

        firebase.initializeApp(firebaseConfig);
    }

    function clearPath(path) {
        return(path.replace(/([^:]\/)\/+/g, "$1"));
    }

    function makeid(length) {
        var result           = [];
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    }

    function getUserId() {
        var pop = window.ihandout_config["report"]["identified-prompt-mesage"];
        if (pop == null){
            pop = "- Student: Please inform your instructor of this message. \n\r - Instructor: You need to fill in the field: identified-prompt-mesage in the settings file."
        }
        var identified = window.ihandout_config["report"]["identified"];
        user_id = localStorage.getItem('user_id')
        if ( user_id == null) {
            if (identified == true) {
                  user_id = prompt(pop, "");
            }
            else {
                user_id = makeid(15);
            }
            if (user_id != "" && user_id != null) {
                localStorage['user_id'] = user_id;
            }
        }
        return(user_id)
    }

    function checkpointReport(progress_id, page_id) {
        if(reportEnabled != true) {
            return true;
        }
        var course_id = window.ihandout_config["report"]["id"];
        var sem_id = window.ihandout_config["report"]["semester"];
        var path = course_id + "/" + sem_id + clearPath(progress_id);

        var postListRef = firebase.database().ref(path);
        var newPostRef = postListRef.push();

        var user_id = getUserId();
        if (user_id == "" || user_id == null) {
            return false;
        }

        newPostRef.set({
            user: user_id,
            ts: Date()
        });
        return true;
    }

    function quizReport(page_id, quiz_id, user_choice, correct_choice) {
        if(reportEnabled != true) {
            return true;
        }
        var course_id = window.ihandout_config["report"]["id"];
        var sem_id = window.ihandout_config["report"]["semester"];
        var path = course_id + "/" + sem_id + clearPath(quiz_id);

        var postListRef = firebase.database().ref(path);
        var newPostRef = postListRef.push();

        var user_id = getUserId();
        if (user_id == "" && user_id == null) {
            return false;
        }

        newPostRef.set({
            user: getUserId(),
            ts: Date(),
            user_choice: user_choice,
            correct_choice: correct_choice
        });
        return true;
    }

}
