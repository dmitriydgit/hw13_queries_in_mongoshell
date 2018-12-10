
/*
Напишите запрос, который вернет все документы, у которых isAcitve — true, age от 25 до 45 и favoriteFruit — banana или strawberry.
Напишите запрос, который вернет все документы, у которых first name — Anne, полученный результат должен быть отсортирован по полю index в убывающем порядке и содержать поля name, index, eyeColor.
Напишите запрос, который вернет все документы, у которых поле tags содержится значение "commodo", полученный результат должен содержать поля tags, balance, name.
Напишите запрос, который вернет все уникальные значения поля eyeColor у документов, у которых поле favoriteFruit имеет значение banana.
Напишите запрос, который вернет все документы, у которых name первого друга в массиве friends содержит текст "ri" независимо от регистра.
Напишите запрос, который вернет все документы, у которых геопозиция в поле location находится в радиусе 400 км от точки с координатами longitude = 143 latitude = 53 .


*/




//db.data_example.find( {isActive : true, age: {$gt:25}, age:{$lt:45}, favoriteFruit: { $in: [ "banana", "strawberry" ] } } ).pretty()
//db.data_example.find( {"name.first" : "Anne"},{name:1, index:1, eyeColor:1} ).sort({index:-1}).pretty()
//db.data_example.find( {"tags" : "commodo"},{tags:1, balance:1, name:1} ).pretty()
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