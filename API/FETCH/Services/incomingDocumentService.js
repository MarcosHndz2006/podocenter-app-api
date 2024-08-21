const API_URL = 'http://localhost:3000/incoming-documents';  // Base URL for incoming documents

// Get all incoming documents
export const getAllIncomingDocuments = async () => {
    try {
        const response = await fetch(`${API_URL}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching all incoming documents:', error);
        throw error;
    }
};

// Get a specific incoming document by ID
export const getIncomingDocumentById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching incoming document with ID ${id}:`, error);
        throw error;
    }
};

// Create a new incoming document
export const createIncomingDocument = async (incomingDocumentData) => {
    try {
        const response = await fetch(`${API_URL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(incomingDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error creating new incoming document:', error);
        throw error;
    }
};

// Update an existing incoming document by ID
export const updateIncomingDocument = async (id, incomingDocumentData) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(incomingDocumentData),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error updating incoming document with ID ${id}:`, error);
        throw error;
    }
};

// Delete an incoming document by ID
export const deleteIncomingDocument = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error(`Error deleting incoming document with ID ${id}:`, error);
        throw error;
    }
};
