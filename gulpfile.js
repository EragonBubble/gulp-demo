var 
	gulp = require('gulp')
	,del = require('del');

gulp.task('clean:mobile', function (cb) {
  del([
    // 'src/build/testToDel.txt',
    // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
    'src/build/mobile',
    // 我们不希望删掉这个文件，所以我们取反这个匹配模式
    '!src/build/test.txt'
  ], cb);
});

gulp.task('package', function(){
	  // 将你的默认的任务代码放在这
	  console.log('2222');
	  gulp.src('src/build/*.txt')
			.pipe(gulp.dest('./src/webapp/'));
});

gulp.task('default', ['clean:mobile', 'package']);

gulp.watch(['src/build/*.txt'], ['default']);