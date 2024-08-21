const API_URL = 'http://localhost:3000/purchase-documents';  // Base URL for purchase documents

// Get all purchase documents
export const getAllPurchaseDocuments = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all purchase documents:', error);
        throw error;
    }
};

// Get a specific purchase document by ID
export const getPurchaseDocumentById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching purchase document with ID ${id}:`, error);
        throw error;
    }
};

// Create a new purchase document
export const createPurchaseDocument = async (purchaseDocumentData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchaseDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new purchase document:', error);
        throw error;
    }
};

// Update an existing purchase document by ID
export const updatePurchaseDocument = async (id, purchaseDocumentData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(purchaseDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating purchase document with ID ${id}:`, error);
        throw error;
    }
};

// Delete a purchase document by ID
export const deletePurchaseDocument = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting purchase document with ID ${id}:`, error);
        throw error;
    }
};
