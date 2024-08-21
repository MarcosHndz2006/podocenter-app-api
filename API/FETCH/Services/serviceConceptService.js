const API_URL = 'http://localhost:3000/service-concepts';  // Base URL for service concepts

// Get all service concepts
export const getAllServiceConcepts = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all service concepts:', error);
        throw error;
    }
};

// Get a specific service concept by ID
export const getServiceConceptById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching service concept with ID ${id}:`, error);
        throw error;
    }
};

// Create a new service concept
export const createServiceConcept = async (serviceConceptData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceConceptData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new service concept:', error);
        throw error;
    }
};

// Update an existing service concept by ID
export const updateServiceConcept = async (id, serviceConceptData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(serviceConceptData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating service concept with ID ${id}:`, error);
        throw error;
    }
};

// Delete a service concept by ID
export const deleteServiceConcept = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting service concept with ID ${id}:`, error);
        throw error;
    }
};
