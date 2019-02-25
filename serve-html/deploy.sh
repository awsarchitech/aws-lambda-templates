rm index.zip 
cd function
zip ../index.zip *
cd .. 
aws lambda update-function-code --function-name cloudarchitech-serve-html --zip-file fileb://index.zip