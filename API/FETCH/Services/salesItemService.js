const API_URL = 'http://localhost:3000/sales-items';  // Base URL for sales items

// Get all sales items
export const getAllSalesItems = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all sales items:', error);
        throw error;
    }
};

// Get a specific sales item by ID
export const getSalesItemById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching sales item with ID ${id}:`, error);
        throw error;
    }
};

// Create a new sales item
export const createSalesItem = async (salesItemData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salesItemData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new sales item:', error);
        throw error;
    }
};

// Update an existing sales item by ID
export const updateSalesItem = async (id, salesItemData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salesItemData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating sales item with ID ${id}:`, error);
        throw error;
    }
};

// Delete a sales item by ID
export const deleteSalesItem = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting sales item with ID ${id}:`, error);
        throw error;
    }
};
