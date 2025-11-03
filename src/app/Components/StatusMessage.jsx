'use client'
// Shows  message based on (loading, error, or empty)
export default function StatusMessage({loading, error, empty}) {
    if (loading) {
        return <p>loading</p>
    }
    if (error) {
        return <p>Error loading </p>
    }
    if (empty) {
        return <p>No product </p>
    }
    return null;
}