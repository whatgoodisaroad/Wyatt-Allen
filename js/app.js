var app = {
    roles:[ 
        "Designer", 
        "Gentleman",
        "Scholar",
        "Innovator", 
        "Nice Guy", 
        "Problem Solver",
        "Creative Spirit", 
        "Haskeller",
        "Bookworm",
        "JavaScript Ninja",
        "Leftie"
    ],
    roleIdx:0,
    roleInterval:2000,
    
    setupRoleSpinner:function() {
        app.roleIdx = (app.roleIdx + 1) % app.roles.length;
        
        $("<div/>")
            .text(app.roles[app.roleIdx])
            .appendTo("#spinning");
            
        $("#spinning")
            .animate(
                { scrollTop:$("#spinning > div:eq(1)").offset().top }, 
                1000,
                function() {
                    $("#spinning > div:eq(0)")
                        .remove();
                        
                    setTimeout(app.setupRoleSpinner, app.roleInterval);
                }
            );
    }
};

$(function() {
    setTimeout(app.setupRoleSpinner, app.roleInterval * 2);
});