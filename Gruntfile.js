
module.exports = function (grunt) {
    grunt.initConfig({
        clean: ["css/*.css"],

        cssmin: {
                "css/main.css": ["css/main.css"]
        },

        watch: {
            styles: {
                files: ["css/less/*"],
                tasks: "less"
            }
        },

        less: {
            compile: {
                options: {
                    paths: ["css/less"]
                },
                files: {
                    "css/main.css": "css/less/main.less"
                }
            }
        }
    });

	// Load tasks so we can use them
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-less");

    // The default task will show the usage
    grunt.registerTask("default", "Prints usage", function () {
        grunt.log.writeln("");
        grunt.log.writeln("Product site development");
        grunt.log.writeln("------------------------");
        grunt.log.writeln("");
        grunt.log.writeln("* run 'grunt --help' to get an overview of all commands.");
        grunt.log.writeln("* run 'grunt dev' to start developing.");
    });

    grunt.registerTask("dev", ["clean", "less:compile", "watch:styles"]);
};
