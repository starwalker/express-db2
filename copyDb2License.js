var fs = require('fs');
fs.createReadStream('db2-license/db2consv_ee.lic').pipe(fs.createWriteStream('node_modules/ibm_db/installer/clidriver/license/db2consv_ee.lic'));
fs.createReadStream('db2-license/sam32.lic').pipe(fs.createWriteStream('node_modules/ibm_db/installer/clidriver/license/sam32.lic'));
