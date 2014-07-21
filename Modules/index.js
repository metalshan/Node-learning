var Model = function(){
	this.name = {
		firstName:null, 
		middleName:null, 
		lastName:null	
	};

	this.assign = function(obj){
		this.name.firstName = obj.firstName;
		this.name.middleName = obj.middleName;
		this.name.lastName = obj.lastName
	};

	this.getName = function () {
		return this.name;
	}
};

module.exports = function (obj){
	var aNewModel = new Model();
	if(obj){
		aNewModel.assign(obj);
	}

	return aNewModel;
}
