# PublicClassroomSystem
Software Analysis and Design &amp; Software Design

## How to run
To run the projects, Node.js environment is needed. Besides, to start the database, MySQL server is required. Thus you have to install and config your Node.js development environment and MySQL before following steps.

0. Download the projects

```shell
git clone --recursive https://github.com/yickli/PublicClassroomSystem.git
cd PublicClassroomSystem
```

1. Config database and setup all required. NOTE that you must first create database named `pcm`

```shell
mysql> create database pcm
```

Run `setup.sh` then all of dependencies will be downloaded and installed. The duration depends on your network speed.

```shell
sh setup.sh
```

2. Run back end and the server will run at `http://localhost:3001`.

```shell
cd PCM-Backend
sh run.sh
```

3. Run front end and you can go to `http://localhost:8080` in your browser.

```shell
cd PCM-Frontend
npm run dev
```

## License
MIT
