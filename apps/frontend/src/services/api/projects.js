import axios from "axios";

const API_URL = "http://localhost:8000/api";

export const api = {
  async getProjects(featured = false) {
    try {
      const response = await axios.get(`${API_URL}/projects/`, {
        params: { featured },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching projects:", error);
      throw error;
    }
  },

  async getProject(id) {
    try {
      const response = await axios.get(`${API_URL}/projects/${id}/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching project:", error);
      throw error;
    }
  },

  async getTechnologies() {
    try {
      const response = await axios.get(`${API_URL}/technologies/`);
      return response.data;
    } catch (error) {
      console.error("Error fetching technologies:", error);
      throw error;
    }
  },
};
