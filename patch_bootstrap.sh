
VARIABLES=./node_modules/bootstrap/less/variables.less
VARIABLES_ORI=$VARIABLES.ori


rm -fr node_modules/bootstrap
npm install

cp $VARIABLES $VARIABLES_ORI
sed "s/@grid-float-breakpoint:     @screen-sm-min;/@grid-float-breakpoint:     @screen-md-min;/" $VARIABLES_ORI > $VARIABLES

rm $VARIABLES_ORI

cd node_modules/bootstrap/
npm install
grunt --force
