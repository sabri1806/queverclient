import axios from "axios";

const getMovie = (id) => {
    return axios
      .get('http://localhost:8082/api/movies/' + id);

    //   .then(res => {
    //      console.log("Print-showMovieDetails-API-response: " + res.data);
    //     this.setState({
    //       movie: res.data
    //     })
    //   })
    //   .catch(err => {
    //     console.log("Error from ShowMovietails");
    //   })
}

export default {
    getMovie
} 