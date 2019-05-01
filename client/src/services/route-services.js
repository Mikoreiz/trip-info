import 'whatwg-fetch';

class RouteService {
	getRoutes = () => {
		var promise = new Promise((resolve, reject) => {
			fetch('http://localhost:3001/route')
				.then(response => {
					resolve(response.json());
			})
		});
		return promise;
	}
}

export default RouteService;