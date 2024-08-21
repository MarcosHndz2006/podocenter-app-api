require('dotenv').config();  // Load environment variables
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());  // Parse JSON bodies
app.use(cors());          // Enable CORS

const corsOptions = {
    origin: 'http://localhost:3000',  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
};

app.use(cors(corsOptions));  // Use customized CORS settings

// Import routes
const shelfRoutes = require('./routes/shelfRoutes');
const storageRoutes = require('./routes/storageRoutes');
const inventoryItemRoutes = require('./routes/inventoryItemRoutes');
const providerRoutes = require('./routes/providerRoutes');
const purchaseDocumentRoutes = require('./routes/purchaseDocumentRoutes');
const incomingDocumentRoutes = require('./routes/incomingDocumentRoutes');
const usersRoutes = require('./routes/usersRoutes');
const inventoryKardexRoutes = require('./routes/inventoryKardexRoutes');
const spacesRoutes = require('./routes/spacesRoutes');
const professionalRoutes = require('./routes/professionalRoutes');
const serviceConceptRoutes = require('./routes/serviceConceptRoutes');
const salesItemRoutes = require('./routes/salesItemRoutes');
const salesDocumentRoutes = require('./routes/salesDocumentRoutes');

// Use routes
app.use('/shelves', shelfRoutes);
app.use('/storages', storageRoutes);
app.use('/inventory-items', inventoryItemRoutes);
app.use('/providers', providerRoutes);
app.use('/purchase-documents', purchaseDocumentRoutes);
app.use('/incoming-documents', incomingDocumentRoutes);
app.use('/users', usersRoutes);
app.use('/inventory-kardex', inventoryKardexRoutes);
app.use('/spaces', spacesRoutes);
app.use('/professionals', professionalRoutes);
app.use('/service-concepts', serviceConceptRoutes);
app.use('/sales-items', salesItemRoutes);
app.use('/sales-documents', salesDocumentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
