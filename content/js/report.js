{
    if(window.ihandout_config["report"]["progress"] == true) {
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
    function progressReport(usr_id, progress_id, page_id){
        var course_id = window.ihandout_config["report"]["id"];
        var sem_id = window.ihandout_config["report"]["semester"];
        var path = course_id + "/" + sem_id + progress_id

        var postListRef = firebase.database().ref(path);
        var newPostRef = postListRef.push();
        newPostRef.set({
            user: usr_id,
            ts: Date()
        });
    }
}
