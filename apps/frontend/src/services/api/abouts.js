import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const api = {
  async getAbouts() {
    try {
      const response = await axios.get(`${API_URL}/about/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching about:", error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error Details:",
          error.response ? error.response.data : error.message
        );
      }
      throw error;
    }
  },
  async getEducations() {
    // MODIFICATO
    try {
      const response = await axios.get(`${API_URL}/education/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching education:", error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error Details:",
          error.response ? error.response.data : error.message
        );
      }
      throw error;
    }
  },
  async getExperiences() {
    try {
      const response = await axios.get(`${API_URL}/experience/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching experiences:", error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error Details:",
          error.response ? error.response.data : error.message
        );
      }
      throw error;
    }
  },
  async getSkills() {
    try {
      const response = await axios.get(`${API_URL}/skill/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching skills:", error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error Details:",
          error.response ? error.response.data : error.message
        );
      }
      throw error;
    }
  },
  async getSpeaks() {
    try {
      const response = await axios.get(`${API_URL}/speak/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching speaks:", error);
      if (axios.isAxiosError(error)) {
        console.error(
          "Axios Error Details:",
          error.response ? error.response.data : error.message
        );
      }
      throw error;
    }
  },
};
