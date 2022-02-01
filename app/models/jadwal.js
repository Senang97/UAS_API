var connection = require ('../config/connection');

function jadwal() {
	this.get = function(res) {
		connection.acquire(function(err,con) {
			con.query('SELECT *  from kelas JOIN matakuliah on kelas.id_mk = matakuliah.id_mk JOIN dosen on kelas.id_dosen = dosen.id_dosen ', function(err,result) {
				con.release ();
				res.send(result);
				console.log("get Successful");
			});
		});
	};
	this.getByID = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('SELECT *  from kelas JOIN matakuliah on kelas.id_mk = matakuliah.id_mk JOIN dosen on kelas.id_dosen = dosen.id_dosen where id = ?', id, function(err,result) {
				con.release();
				res.send(result);
				console.log("GET by id Successful");
			});
		});
	};
	this.create = function(jadwal,res) {
		connection.acquire(function(err,con) {
			con.query('insert into kelas set ?', jadwal, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'kelas creation fail'});
				} else {
					res.send({status:0, message:'kelas create Success'});
					console.log("POST Successful");
				}
			});
		});
	};
	this.update = function(jadwal,id,res) {
		connection.acquire(function(err,con) {
			con.query('update kelas set id = ? where id = ?', [jadwal,id], function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'kelas update fail'});
				} else {
					res.send({status:0, message: 'kelas update Success'});
					console.log("UPDATE Successful");
				}
			});
		});
	};
	this.delete = function(id,res) {
		connection.acquire(function(err,con) {
			con.query('delete from kelas where id = ?', id, function(err,result) {
				con.release();
				if (err) {
					res.send({status:1, message:'kelas delete fail'});
				} else {
					res.send({status:0, message: 'kelas delete Success'});
					console.log("delete Successful");
				}
			});
		});
	};
};
module.exports = new jadwal();