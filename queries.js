
//db.data_example.find( {isActive : true, age: {$gt:25}, age:{$lt:45}, favoriteFruit: { $in: [ "banana", "strawberry" ] } } ).pretty()
//db.data_example.find( {"name.first" : "Anne"},{name:1, index:1, eyeColor:1} ).sort({index:-1}).pretty()
//db.data_example.find( {"tags" : "commodo"},{tags:1, balance:1, name:1} ).pretty()
//db.data_example.find( {favoriteFruit : "banana"},{tags:1, balance:1, name:1} ).pretty()
//db.data_example.distinct('eyeColor', {favoriteFruit : "banana"})

//db.data_example.find( { 'friends.0.name': { $regex: 'ri' } } )


/*
db.data_example.find(
	{
		location:
			{ $near :
				 {
					 $geometry: { type: "Point",  coordinates: [ 143, 53 ] },
					 
					 $maxDistance: 400000
				 }
			}
	}
)
*/