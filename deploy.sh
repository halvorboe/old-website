cd /home/halvor/writings
pipenv run python writings/sync.py
cd /home/halvor/complex.codes
npm install
npm run build
cp -r public/* /var/www/html
