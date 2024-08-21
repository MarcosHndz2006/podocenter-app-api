const API_URL = 'http://localhost:3000/inventory-items';  // Base URL for inventory items

// Get all inventory items
export const getAllInventoryItems = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all inventory items:', error);
        throw error;
    }
};

// Get a specific inventory item by ID
export const getInventoryItemById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching inventory item with ID ${id}:`, error);
        throw error;
    }
};

// Create a new inventory item
export const createInventoryItem = async (inventoryItemData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventoryItemData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new inventory item:', error);
        throw error;
    }
};

// Update an existing inventory item by ID
export const updateInventoryItem = async (id, inventoryItemData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inventoryItemData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating inventory item with ID ${id}:`, error);
        throw error;
    }
};

// Delete an inventory item by ID
export const deleteInventoryItem = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting inventory item with ID ${id}:`, error);
        throw error;
    }
};
