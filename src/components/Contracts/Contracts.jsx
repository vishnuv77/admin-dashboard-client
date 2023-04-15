import React from 'react';

const Contracts = () => {
  const contractsData = [
    { id: 1, name: 'Contract 1', amount: '$1000', status: 'Active' },
    { id: 2, name: 'Contract 2', amount: '$2000', status: 'Inactive' },
    { id: 3, name: 'Contract 3', amount: '$3000', status: 'Active' },
    { id: 4, name: 'Contract 4', amount: '$4000', status: 'Inactive' },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contracts</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>ID</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Name</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Amount</th>
            <th style={{ border: '1px solid black', padding: '8px', backgroundColor: '#f2f2f2' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {contractsData.map(contract => (
            <tr key={contract.id}>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{contract.id}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{contract.name}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>{contract.amount}</td>
              <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center', color: contract.status === 'Active' ? 'green' : 'red' }}>{contract.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contracts;
