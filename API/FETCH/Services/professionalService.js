const API_URL = 'http://localhost:3000/professionals';  // Base URL for professionals

// Get all professionals
export const getAllProfessionals = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all professionals:', error);
        throw error;
    }
};

// Get a specific professional by ID
export const getProfessionalById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching professional with ID ${id}:`, error);
        throw error;
    }
};

// Create a new professional
export const createProfessional = async (professionalData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(professionalData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new professional:', error);
        throw error;
    }
};

// Update an existing professional by ID
export const updateProfessional = async (id, professionalData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(professionalData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating professional with ID ${id}:`, error);
        throw error;
    }
};

// Delete a professional by ID
export const deleteProfessional = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting professional with ID ${id}:`, error);
        throw error;
    }
};
