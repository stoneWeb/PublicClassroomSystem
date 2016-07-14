cd PCM-Backend
path=`pwd`
mkdir tempStore1
echo Input MySQL username
read username
echo Input MySQL password
read password

cfg="export default {url: 'http://localhost:3001',basePath: '${path}',sql_name: 'pcm',sql_password: '${password}'
}"
cd src
touch config.js
echo $cfg > config.js

echo installing backend depencies...
cd ..
npm i

echo installing frontend depencies...
cd ../PCM-Frontend
npm i

cd ..

