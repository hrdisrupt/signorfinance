docker stop hrdisruptdashboard
docker rm hrdisruptdashboard

docker-compose build 

docker run -i -t -p 3000:3000 -p 7000:7000 --restart=always -e PRODUCTION="true" --network=testbridge --name=hrdisruptdashboard hrdisruptdashboard:latest

