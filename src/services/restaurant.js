import http from "../http-common";

class RestaurantDataService {
  get(page = 0) {
    return http.get(`?page=${page}`);
  }

  getById(id) {
    return http.get(`/id/${id}`);
  }

  find(query, by = "name", page = 0) {
    return http.get(`?${by}=${query}&page=${page}`);
  }

  postReview(data) {
    return http.post("/review", data);
  }

  putReview(data) {
    return http.put("/review", data);
  }

  deleteReview(id, userId) {
    return http.delete(`/review?id=${id}`, { data: { user_id: userId } });
  }

  getCuisines(id) {
    return http.get("/cuisines");
  }
}

export default new RestaurantDataService();
