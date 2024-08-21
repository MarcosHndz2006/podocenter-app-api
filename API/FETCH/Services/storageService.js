const API_URL = 'http://localhost:3000/storages';  // Replace with your actual API URL

// Get all storage records
export const getAllStorage = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all storage:', error);
        throw error;
    }
};

// Get a specific storage record by ID
export const getStorageById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching storage with ID ${id}:`, error);
        throw error;
    }
};

// Create a new storage record
export const createStorage = async (storageData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storageData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new storage:', error);
        throw error;
    }
};

// Update an existing storage record by ID
export const updateStorage = async (id, storageData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storageData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating storage with ID ${id}:`, error);
        throw error;
    }
};

// Delete a storage record by ID
export const deleteStorage = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting storage with ID ${id}:`, error);
        throw error;
    }
};
