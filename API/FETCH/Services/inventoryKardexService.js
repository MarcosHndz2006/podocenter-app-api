const API_URL = 'http://localhost:3000/inventory-kardex';  // Base URL for inventory kardex

// Get all inventory kardex entries
export const getAllInventoryKardex = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all inventory kardex entries:', error);
        throw error;
    }
};

// Get a specific inventory kardex entry by ID
export const getInventoryKardexById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching inventory kardex entry with ID ${id}:`, error);
        throw error;
    }
};

// Create a new inventory kardex entry
export const createInventoryKardex = async (inventoryKardexData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventoryKardexData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new inventory kardex entry:', error);
        throw error;
    }
};

// Update an existing inventory kardex entry by ID
export const updateInventoryKardex = async (id, inventoryKardexData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventoryKardexData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating inventory kardex entry with ID ${id}:`, error);
        throw error;
    }
};

// Delete an inventory kardex entry by ID
export const deleteInventoryKardex = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting inventory kardex entry with ID ${id}:`, error);
        throw error;
    }
};
