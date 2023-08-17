import { createApi } from "./api";

export interface CepServiceParams {
  cep: string;
  mock?: boolean;
}

const api = createApi({ baseURL: "https://viacep.com.br" });

export const cepService = async ({ cep, mock }: CepServiceParams) => {    
    const response = await api.get(`/ws/${cep}/json`, mock);    
    return response.data;
};
