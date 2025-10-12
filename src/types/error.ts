export interface ApiError {
  message: string;
  status?: number;
  code?: string;
  details?: unknown;
}

export interface AxiosErrorResponse {
  data?: {
    message?: string;
    error?: string;
    details?: unknown;
  };
  status?: number;
  statusText?: string;
}

export interface CustomError extends Error {
  response?: AxiosErrorResponse;
  request?: unknown;
  code?: string;
  status?: number;
}

/* 
* centralization and simplification of error handling
*/
export const createApiError = (error: unknown): ApiError => {
    if (error && typeof error === 'object') {
        const customError = error as CustomError;
        
        // Axios
        if (customError.response) {
        return {
            message: customError.response.data?.message || 
                customError.response.data?.error || 
                customError.response.statusText || 
                'Erro na comunicação com o servidor',
            status: customError.response.status,
            code: customError.code,
            details: customError.response.data?.details
        };
        }
        
        // Network
        if (customError.request) {
            return {
                message: 'Erro de conexão. Verifique sua internet.',
                code: customError.code || 'NETWORK_ERROR'
            };
        }
        
        // Generic
        if (customError.message) {
            return {
                message: customError.message,
                code: customError.code
            };
        }
    }

    return {
        message: 'Erro desconhecido ocorreu',
        code: 'UNKNOWN_ERROR'
    };
};