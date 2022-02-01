var jadwal = require('../models/jadwal');

module.exports = {
	configure: function(app) {
		app.get('/jadwal',function(req,res) {
			jadwal.get(res);
		});
		app.get('/jadwal/:id',function(req,res) {
			jadwal.getByID(req.params.id,res);
		});
		app.post('/jadwal',function(req,res) {
			jadwal.create(req.body,res)
		});
		app.put('/jadwal/:id',function(req,res) {
			jadwal.update(req.body.kelas,req.params.id,res);
		});
		app.delete('jadwal/:id',function(req,res) {
			jadwal.delete(req.params.id,res);
		});
	}
};