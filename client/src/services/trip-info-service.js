import 'whatwg-fetch';

class TripService {
	getTrips = () => {
		var promise = new Promise((resolve, reject) => {
			fetch('http://localhost:3001/trip-test/:route_id')
				.then(response => {
					resolve(response.json());
			})
		});
		return promise;
	}
}

export default TripService;