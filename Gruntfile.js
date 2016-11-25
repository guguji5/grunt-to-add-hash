module.exports = function(grunt) {

  // Project configuration.

  grunt.initConfig({
    usemin: {
      html: 'ngcvs.html',
    },
    filerev: {
      //这里不写option默认就是8位的md5
      js: {
        src: ['dest/js/*.js'],
        dest: 'js/'
      },
      css: {
        src: ['dest/css/*.css'],
        dest: 'css/'
      },
    },
    copy: {
      js: {
        expand: true,
        src: 'js/*',
        dest: 'dest/',
      },
      css:{
        expand: true,
        src: 'css/*',
        dest: 'dest/',
      },
      html:{
        expand: true,
        src: 'ngcvs.html',
        dest: 'dest/',
      },
      html1:{
        expand: true,
        cwd : 'dest',//相对路径
        src: 'ngcvs.html',
        dest: '',
      },
    },
    clean: ["js/*","css/*","ngcvs.html"],
  });


  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
   grunt.loadNpmTasks('grunt-contrib-clean');

  // 默认被执行的任务列表。
  
  grunt.registerTask('first', ['copy']);
  grunt.registerTask('default',['clean','filerev','copy:html1']);
  grunt.registerTask('build', ['usemin']);

};