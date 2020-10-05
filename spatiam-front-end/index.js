// Include it and extract some methods for convenience
fs = require('fs');

const server = require('server');
const { get, post } = server.router;

// Launch server with options and a couple of routes
server({ port: 8080 }, [
  get('/chats', ctx => {

    let carol_data = fs.readFileSync('./src/assets/carol/carol-log.ts', 'utf8');
    let rover_data = fs.readFileSync('./src/assets/rover/rover-log.ts', 'utf8');
    let houston_data = fs.readFileSync('./src/assets/houston/houston-log.ts', 'utf8');
    return('{'+carol_data+','+rover_data+','+houston_data+'}');
  }),
  post('/rover', ctx => {
    fs.writeFile('./src/assets/rover/rover-log.ts', ctx.data,function (err) {
      if (err) return console.log(err);
        console.log('Rover updated');
      });
    return 'ok';
  }),

  post('/houston', ctx => {

    fs.writeFile('./src/assets/houston/houston-log.ts', ctx.data,function (err) {
      if (err) return console.log(err);
        console.log('Houston updated');
      });
    return 'ok';
  })

]);
