interface FetchOptions extends RequestInit {
    params?: Record<string, string | number | boolean>
}

const API_BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5001'

export async function apiFetch<T = any>(
    endpoint: string,
    options: FetchOptions = {}
): Promise<T> {
    const { method = 'GET', params, headers, ...rest } = options

    const queryString = params
        ? '?' + new URLSearchParams(params as Record<string, string>).toString()
        : ''

    const url = `${API_BASE_URL}${endpoint}${queryString}`

    const res = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            ...headers
        },
        ...rest
    })

    if (!res.ok) {
        const error = await res.text()
        throw new Error(`API Error ${res.status}: ${error}`)
    }

    return res.json()
}
