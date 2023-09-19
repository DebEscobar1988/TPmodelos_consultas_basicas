const db = require('../database/models')

module.exports = {
    list:(req,res)=>{
        db.Movie.findAll()
        .then((movies) => {
            return res.render('moviesList',{ 
            movies,
        });
    })
    .catch((error)=>
        console.log("Upss,hubo un error en la conexión", error)
        );
        
    },
     new :(req,res)=>{
        db.Movie.finALL({
            order: [
                'release_date', 'DESC'
            ]
        })
        .then(movies=>{
            return res.render('newestMovies',{
                movies
            })
        })
        .catch(error=> console.log(error))
        return res.send('lista de extreno')
    },
      recomended :(req,res)=>{
        db.Movie.findAll({
            limit:5,
            order:[
                [ 'rating','DESC']
            ]
        })
           
       
        return res.send('lista de recomendadas')
    },
      detail :(req,res)=>{
        const {id} = req.params;
        db.Movie.findByPk(id)
        .then(movie=>{
            return res.render('moviesDetail',{
                movie })
            })
        return res.send('Detalle de la pelicula')
    }
}
