@ECHO OFF
npm run build
pause
scp -r ./build/* debian@10.0.0.165:~/tmp_deploy
pause