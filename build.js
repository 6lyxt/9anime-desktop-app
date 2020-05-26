const electronInstaller = require('electron-winstaller');
try {
  electronInstaller.createWindowsInstaller({
    appDirectory: 'PATH_TO_SOURCEDIR',
    outputDirectory: 'PATH_TO_OUTDIR',
    authors: 'lyxt',
    exe: '9anime.exe'
  });
  console.log('It worked!');
} catch (e) {
  console.log(`No dice: ${e.message}`);
}