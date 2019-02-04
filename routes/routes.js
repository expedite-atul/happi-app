module.exports = function(server) 
{
    //About the application
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h)=>{
    
            var data = '<h1>Welcome.. !! A Calculator app built using hapiJS && NodeJS...!!</h1>'
            
    
            return data;
        }
    });
    // root route 
    server.route({
        method: 'GET',
        path: '/calculator/about',
        handler: (request, h)=>{
    
            var data ='<h1>Welcome to my Calculator app...!! </h1>';
            return data;        
        }
    });
    // about / route
    server.route({
        method: 'GET',
        path: '/calculator/about/',
        handler: (request, h)=>{
    
            var data ='<h2>Here in this application by assigned routes you can perform basic calculation operation!! By going through the routes calculator /add/ / || /sub/ / || /multiple/ / || /division/ / </h2>';
            return data;        
        }
    });

    //Add operation route
    server.route({
        method: 'GET',
        path: '/calculator/add/{num1}/{num2}',
        handler: (request, h) => {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                output : num1 + num2
            };
    
            return data;
        }
    });

    //Subtract operation route
    server.route({
        method: 'GET',
        path: '/calculator/sub/{num1}/{num2}',
        handler: (request, h) => {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                output : num1 - num2
            };
    
            return data;
        }
    });

    //Multiply operation route
    server.route({
        method: 'GET',
        path: '/calculator/multi/{num1}/{num2}',
        handler: (request, h)=> {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                output : num1 * num2
            };
    
            return data;
        }
    });

    //Division operation route
    server.route({
        method: 'GET',
        path: '/calculator/div/{num1}/{num2}',
        handler: (request, h)=> {

            const num1 = parseInt(request.params.num1);
            const num2 = parseInt(request.params.num2);

            var data = {
                output: num1 / num2
            };
    
            return data;
        }
    });
}

