cd build
cd common
scp ../../package-lock.json ./
npm install --omt=dev
cd ..
cd site
scp ../../package-lock.json ./
npm install --omit=dev
cd server
scp ../../package-lock.json ./
npm install --omit=dev
cd ../..
