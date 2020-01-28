const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstNAME: 'John', lastName: 'Doe'},
        { id: 1, firstNAME: 'Steve', lastName: 'Smith' },
        {id: 1, firstNAME: 'Mary', lastName: 'Swanson'}

    ];

    res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));