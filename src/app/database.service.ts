import { Injectable } from '@angular/core';
import * as moment from 'moment';
import * as firebase from 'firebase';
// declare var firebase
@Injectable({
	providedIn: 'root'
})


export class DatabaseService {
	totalOutlets: number;
	database = firebase.database();
	authentication = firebase.auth();
	allDjSArray = new Array();
	houseDjsArray = new Array();
	hipHopDjsArray = new Array();
	RnBDjsArray = new Array();
	DeepHouseDjsArray = new Array();
	ElecroDancMusicArray = new Array();
	getAllUsers = new Array();
	idsArray = new Array();
	getTruckArray = [];
	userCommentsArray2 = [];
	state;
	KwaitoDJsArray = new Array()
	key;
	userid
	bio;
	city;
	email;
	fullname;
	gender;
	genre;
	payment;
	price;
	role;
	img;
	dstagename;

	constructor() { }

	DjUser(userid) {
		this.userid = userid;
		console.log(this.userid)
	}
	getKey(key) {
		this.key = key
		console.log(this.key)
	}

	assignIds(k) {
		this.idsArray = k;
	}
	retreiveDJs() {
		return new Promise((accpt, rej) => {
			this.allDjSArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.allDjSArray.length = 0;
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					console.log(x);
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						console.log(djInfomation)
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: x
								};

								if (obj.role == 'Dj') {
									this.allDjSArray.push(obj);
									console.log(this.allDjSArray)
								}
							}
						} else {
							this.allDjSArray = null;
							console.log(null);
						}
					});
					accpt(this.allDjSArray);
					console.log(this.allDjSArray);
				}
			});
		});

	}
	retreiveHouseDJs() {
		return new Promise((accpt, rej) => {
			this.houseDjsArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.houseDjsArray.length = 0;
				var Djs = data.val();
				console.log(Djs)
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						console.log(djInfomation)
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k
								};

								if (obj.genre == 'Commercial house') {
									this.houseDjsArray.push(obj);
									console.log(this.houseDjsArray);
								}
							}
						} else {
							this.houseDjsArray = null;
							console.log(null);
						}
					});
					accpt(this.houseDjsArray);
				}
			});
		});

	}
	retreiveHipHopDJs() {
		return new Promise((accpt, rej) => {
			this.hipHopDjsArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.hipHopDjsArray.length = 0;
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k
								};

								if (obj.genre == "Hip-Hop") {
									this.hipHopDjsArray.push(obj);
									console.log(obj);
								}
							}
						} else {
							this.hipHopDjsArray = null;
							console.log(null);
						}
					});
					accpt(this.hipHopDjsArray);
				}
			});
		});

	}
	retreiveDeepHouseDJs() {
		return new Promise((accpt, rej) => {
			this.DeepHouseDjsArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.DeepHouseDjsArray.length = 0;
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k
								};

								if (obj.genre == "Deep House") {
									this.DeepHouseDjsArray.push(obj);
									console.log(obj);
								}
							}
						} else {
							this.DeepHouseDjsArray = null;
							console.log(null);
						}
					});
					accpt(this.DeepHouseDjsArray);
				}
			});
		});

	}
	retreiveKwaitoDJs() {
		return new Promise((accpt, rej) => {
			this.KwaitoDJsArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.KwaitoDJsArray.length = 0;
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k
								};

								if (obj.genre == "Kwaito") {
									this.KwaitoDJsArray.push(obj);
									console.log(obj);
								}
							}
						} else {
							this.KwaitoDJsArray = null;
							console.log(null);
						}
					});
					accpt(this.KwaitoDJsArray);
				}
			});
		});

	}



	retreiveUsers() {
		return new Promise((accpt, rej) => {
			this.getAllUsers.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				this.getAllUsers.length = 0;
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				console.log(keys);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						var djInfomation = data2.val();
						if (data2.val() != null || data2.val() != undefined) {
							var keys2: any = Object.keys(djInfomation);
							console.log(djInfomation);
							console.log(keys2);
							for (var j = 0; j < keys2.length; j++) {
								var k = keys2[j];
								console.log(k);
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k
								};

								if (obj.role == 'Audience') {
									this.getAllUsers.push(obj);
									console.log(obj);
								}
							}
						} else {
							this.getAllUsers = null;
							console.log(null);
						}
					});
					accpt(this.getAllUsers);
					console.log(this.getAllUsers)
				}
			});
		});

	}

	houseDjs() {
		return new Promise((accpt, rej) => {
			this.database.ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys = Object.keys(Djs)
				for (var x = 0; x < keys.length; x++) {
					this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
						let displayHouseDj = data2.val();
						var keys2 = Object.keys(displayHouseDj)
						var k = keys[x];
						let obj = {
							bio: displayHouseDj[keys2[0]].bio,
							city: displayHouseDj[keys2[0]].city,
							email: displayHouseDj[keys2[0]].email,
							fullname: displayHouseDj[keys2[0]].fullname,
							gender: displayHouseDj[keys2[0]].gender,
							genre: displayHouseDj[keys2[0]].genre,
							payment: displayHouseDj[keys2[0]].payment,
							price: displayHouseDj[keys2[0]].price,
							role: displayHouseDj[keys2[0]].role,
							stagename: displayHouseDj[keys2[0]].stagename,
							img: displayHouseDj[keys2[0]].img,
						}
						// if (obj.role != null || obj.role != undefined) {
						if (obj.genre == "Commercial house") {
							this.houseDjsArray.push(obj)
							console.log(this.houseDjsArray)
						}
						// }
						this.houseDjsArray.push(obj);
						console.log(this.houseDjsArray)
					})
				}

			})
			accpt(this.houseDjsArray)
			console.log(this.houseDjsArray)
		})
	}


	SelectDj(category) {
		return new Promise((accpt, rej) => {
			this.allDjSArray.length = 0;
			firebase.database().ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys: any = Object.keys(Djs);
				for (var i = 0; i < keys.length; i++) {
					var x = keys[i];
					var y = 'Registration/' + x;
					firebase.database().ref(y).on('value', (data2: any) => {
						this.allDjSArray.length = 0;
						var djInfomation = data2.val();
						var keys2: any = Object.keys(djInfomation);
						console.log(djInfomation);
						console.log(keys2);
						for (var j = 0; j < keys2.length; j++) {
							var k = keys2[j];
							console.log(k);
							if (category == djInfomation[k].category) {
								let obj = {
									bio: djInfomation[k].bio,
									city: djInfomation[k].city,
									email: djInfomation[k].email,
									fullname: djInfomation[k].fullname,
									gender: djInfomation[k].gender,
									genre: djInfomation[k].genre,
									payment: djInfomation[k].payment,
									price: djInfomation[k].price,
									role: djInfomation[k].role,
									img: djInfomation[k].img,
									stagename: djInfomation[k].stagename,
									key: k,
									key2: x
								};

								if (obj.role == 'Dj') {
									this.allDjSArray.push(obj);
									console.log(obj);
								}
							}
						}
					});
					accpt(this.allDjSArray);
				}
			});
		});
	}

	DeepHouseDjs() {
		return new Promise((accpt, rej) => {
			this.database.ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys = Object.keys(Djs)
				for (var x = 0; x < keys.length; x++) {
					this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
						let displayHouseDj = data2.val();
						var keys2 = Object.keys(displayHouseDj)
						var k = keys[x];
						let obj = {
							bio: displayHouseDj[keys2[0]].bio,
							city: displayHouseDj[keys2[0]].city,
							email: displayHouseDj[keys2[0]].email,
							fullname: displayHouseDj[keys2[0]].fullname,
							gender: displayHouseDj[keys2[0]].gender,
							genre: displayHouseDj[keys2[0]].genre,
							payment: displayHouseDj[keys2[0]].payment,
							price: displayHouseDj[keys2[0]].price,
							role: displayHouseDj[keys2[0]].role,
							stagename: displayHouseDj[keys2[0]].stagename,
							img: displayHouseDj[keys2[0]].img,
						}
						if (obj.role != null || obj.role != undefined) {
							if (obj.genre == "Commercial house") {
								this.houseDjsArray.push(obj)
								console.log(this.houseDjsArray)
							}
						}
						this.DeepHouseDjsArray.push(obj);
						console.log(this.DeepHouseDjsArray)
					})
				}

			})
			accpt(this.DeepHouseDjsArray)
		})
	}

	HipHopDjs() {
		return new Promise((accpt, rej) => {
			this.database.ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys = Object.keys(Djs)
				for (var x = 0; x < keys.length; x++) {
					this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
						let displayHouseDj = data2.val();
						var keys2 = Object.keys(displayHouseDj)
						var k = keys[x];
						let obj = {
							bio: displayHouseDj[keys2[0]].bio,
							city: displayHouseDj[keys2[0]].city,
							email: displayHouseDj[keys2[0]].email,
							fullname: displayHouseDj[keys2[0]].fullname,
							gender: displayHouseDj[keys2[0]].gender,
							genre: displayHouseDj[keys2[0]].genre,
							payment: displayHouseDj[keys2[0]].payment,
							price: displayHouseDj[keys2[0]].price,
							role: displayHouseDj[keys2[0]].role,
							stagename: displayHouseDj[keys2[0]].stagename,
							img: displayHouseDj[keys2[0]].img,
						}
						if (obj.role != null || obj.role != undefined) {
							if (obj.genre == "Commercial house") {
								this.hipHopDjsArray.push(obj)
								console.log(this.hipHopDjsArray)
							}
						}
						this.hipHopDjsArray.push(obj);
						console.log(this.hipHopDjsArray)
					})
				}

			})
			accpt(this.hipHopDjsArray)
		})
	}

	RnBDjs() {
		return new Promise((accpt, rej) => {
			this.database.ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys = Object.keys(Djs)
				for (var x = 0; x < keys.length; x++) {
					this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
						let displayHouseDj = data2.val();
						var keys2 = Object.keys(displayHouseDj)
						var k = keys[x];
						let obj = {
							bio: displayHouseDj[keys2[0]].bio,
							city: displayHouseDj[keys2[0]].city,
							email: displayHouseDj[keys2[0]].email,
							fullname: displayHouseDj[keys2[0]].fullname,
							gender: displayHouseDj[keys2[0]].gender,
							genre: displayHouseDj[keys2[0]].genre,
							payment: displayHouseDj[keys2[0]].payment,
							price: displayHouseDj[keys2[0]].price,
							role: displayHouseDj[keys2[0]].role,
							stagename: displayHouseDj[keys2[0]].stagename,
							img: displayHouseDj[keys2[0]].img,
						}
						if (obj.role != null || obj.role != undefined) {
							if (obj.genre == "Commercial house") {
								this.RnBDjsArray.push(obj)
								console.log(this.RnBDjsArray)
							}
						}
						this.RnBDjsArray.push(obj);
						console.log(this.RnBDjsArray)
					})
				}

			})
			accpt(this.RnBDjsArray)
		})
	}

	ElecroDancMusic() {
		return new Promise((accpt, rej) => {
			this.database.ref('Registration/').on('value', (data: any) => {
				var Djs = data.val();
				var keys = Object.keys(Djs)
				for (var x = 0; x < keys.length; x++) {
					this.database.ref('Registration/' + keys[x]).on('value', (data2: any) => {
						let displayHouseDj = data2.val();
						var keys2 = Object.keys(displayHouseDj)
						var k = keys[x];
						let obj = {
							bio: displayHouseDj[keys2[0]].bio,
							city: displayHouseDj[keys2[0]].city,
							email: displayHouseDj[keys2[0]].email,
							fullname: displayHouseDj[keys2[0]].fullname,
							gender: displayHouseDj[keys2[0]].gender,
							genre: displayHouseDj[keys2[0]].genre,
							payment: displayHouseDj[keys2[0]].payment,
							price: displayHouseDj[keys2[0]].price,
							role: displayHouseDj[keys2[0]].role,
							stagename: displayHouseDj[keys2[0]].stagename,
							img: displayHouseDj[keys2[0]].img,
						}
						if (obj.role != null || obj.role != undefined) {
							if (obj.genre == "Commercial house") {
								this.ElecroDancMusicArray.push(obj)
								console.log(this.ElecroDancMusicArray)
							}
						}
						this.ElecroDancMusicArray.push(obj);
						console.log(this.ElecroDancMusicArray)
					})
				}

			})
			accpt(this.ElecroDancMusicArray)
		})
	}
	register(email: string, password: string) {
		return this.authentication.createUserWithEmailAndPassword(email, password);
	}

	login(email: string, password: string) {
		return this.authentication.signInWithEmailAndPassword(email, password);
	}

	resetpassword(email: string) {
		return this.authentication.sendPasswordResetEmail(email);
	}

	getUserState() {
		return new Promise((accpt, rej) => {
			this.authentication.onAuthStateChanged(user => {
				if (user != null || user != undefined) {
					this.state = 1;
				}
				else {
					this.state = 0;
				}
			})
			accpt(this.state)
		})
	}
	removeUser(userid) {
		console.log(userid)
		var user = firebase.auth().currentUser.uid;
		console.log(this.userid);
		return new Promise((accpt, rej) => {
			firebase.database().ref('Registration/' + userid).set({
	
			});
			accpt('scccessful');
			console.log('success');
		});
	}


	retrieveMusic(us) {
		return new Promise((resolve, reject) => {
			this.getTruckArray.length = 0;
			console.log(us)
			firebase.database().ref('uploadLink/').on('value', (data: any) => {
				var UploadDetails = data.val();
				console.log(UploadDetails)
				this.getTruckArray.length = 0;
				var k2 = Object.keys(UploadDetails);
				for (var i = 0; i < k2.length; i++) {
					var key2 = k2[i];
					if (UploadDetails[key2].uid == us) {
						let obj = {
							MusicName: UploadDetails[key2].MusicName,
							name: UploadDetails[key2].name,
							uid: UploadDetails[key2].uid
						};
						this.getTruckArray.push(obj);
						console.log(this.getTruckArray);
					}
				}
			});
			resolve(this.getTruckArray);
		});
	}

	getComments(key) {
		console.log(key)
		return new Promise((accpt, rej) => {
			// this.ngzone.run(() => {
			firebase.database().ref('Comments/' + key).on('value', (data: any) => {
				this.userCommentsArray2.length = 0;
				console.log(data.val());
				var djComments = data.val();
				if (data.val() != null || data.val() != undefined) {
					var k = Object.keys(djComments)
					console.log(k);
					console.log(key);
					for (var x = 0; x < k.length; x++) {
						var keys = k[x];
						console.log(keys);
						let obj2 = {
							comment: djComments[keys].comment,
							name: djComments[keys].username,
							date: moment(djComments[keys].date, "MMMM Do YYYY, h:mm:ss a").startOf("minutes").fromNow()
						};
						this.userCommentsArray2.push(obj2);
						console.log(this.userCommentsArray2);
					}
				}
			});
			accpt(this.userCommentsArray2);
			// })
		});
	}

}
