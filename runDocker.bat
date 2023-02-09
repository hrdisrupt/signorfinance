docker stop hrdisruptdashboard
docker rm hrdisruptdashboard

docker-compose build 

docker run -i -t -p 80:80 -p 3000:3000 -p 5000:5000 --restart=always -e PRODUCTION="true" --network=testbridge --name=hrdisruptdashboard hrdisruptdashboard:latest

