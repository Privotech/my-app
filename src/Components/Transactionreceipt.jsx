import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'


const Transactionreceipt = () => {
    // Get all receipts from localStorage
    const receipts = JSON.parse(localStorage.getItem('recentTransfers') || '[]');

    return (
        <div style={{ padding: '2rem', background: '#f8fafc', minHeight: '100vh' }}>
            <h1 style={{ color: '#2280e0', fontWeight: 700, fontSize: 32, marginBottom: 32 }}>All Transaction Receipts</h1>
            {receipts.length === 0 ? (
                <div style={{ color: '#888', fontSize: 18 }}>No transaction receipts found.</div>
            ) : (
                <table style={{ width: '100%', borderCollapse: 'collapse', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(34,128,224,0.07)', overflow: 'hidden' }}>
                    <thead>
                        <tr style={{ background: '#f5f8fd' }}>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Date</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Description</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Amount</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Status</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Sender</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Receiver Bank</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Receiver Account</th>
                            <th style={{ textAlign: 'left', padding: '0.7rem', color: '#2280e0', fontWeight: 600 }}>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {receipts.map((tx, idx) => (
                            <tr key={idx}>
                                <td style={{ padding: '0.7rem' }}>{tx.date}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.description}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.amount}</td>
                                <td style={{ padding: '0.7rem', color: '#27ae60', fontWeight: 600 }}>{tx.status}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.sender || '-'}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.receiverBank || '-'}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.receiverAccount || '-'}</td>
                                <td style={{ padding: '0.7rem' }}>{tx.note || '-'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Transactionreceipt