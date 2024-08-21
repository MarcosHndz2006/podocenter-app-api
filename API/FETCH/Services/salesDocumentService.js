const API_URL = 'http://localhost:3000/sales-documents';  // Base URL for sales documents

// Get all sales documents
export const getAllSalesDocuments = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all sales documents:', error);
        throw error;
    }
};

// Get a specific sales document by ID
export const getSalesDocumentById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching sales document with ID ${id}:`, error);
        throw error;
    }
};

// Create a new sales document
export const createSalesDocument = async (salesDocumentData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salesDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new sales document:', error);
        throw error;
    }
};

// Update an existing sales document by ID
export const updateSalesDocument = async (id, salesDocumentData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(salesDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating sales document with ID ${id}:`, error);
        throw error;
    }
};

// Delete a sales document by ID
export const deleteSalesDocument = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting sales document with ID ${id}:`, error);
        throw error;
    }
};
