// Utility for API requests
const API_BASE = 'http://localhost:5000';

export async function apiGet(path, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiPost(path, data, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    body: JSON.stringify(data),
    credentials: 'include',
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function apiUpload(path, formData, options = {}) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
    ...options,
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
