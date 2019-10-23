
let theGrid = function (opts) {
	this.gridContainer = document.querySelector(opts.el)
	this.columns = opts.columns;
	this.data = opts.data;

	this.generateBaseContainers = () => {
		let columns = document.createElement("div");
		columns.classList.add('columns');
		let filters = document.createElement("div");
		filters.classList.add('filters');
		let data = document.createElement("div");
		data.classList.add('data');
		this.gridContainer.append(columns);
		this.gridContainer.append(filters);
		this.gridContainer.append(data);
	}
	this.generateColumns = function () {
		this.columns.forEach((column) => {
			let columnHTML = document.createElement("div");
			columnHTML.innerHTML = column;			
			columnHTML.classList.add('column');
			this.gridContainer.querySelector(".columns").append(columnHTML);
		});
	}
	this.generateData = function () {
		this.data.forEach((userdata) => {
			let row = document.createElement('div');
			row.classList.add('row');
			this.columns.forEach((column) => {
				let userdataHTML = document.createElement("div");
				userdataHTML.innerHTML = userdata[column];
				userdataHTML.classList.add('userdata');
				row.append(userdataHTML);
			});
			this.gridContainer.querySelector(".data").append(row);
		});
	}


	this.init = function () {
		this.generateBaseContainers();
		this.generateColumns();
		this.generateData();
	}


	this.init();
}