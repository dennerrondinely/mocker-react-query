import { useQuery } from "@tanstack/react-query";
import { CepServiceParams, cepService } from "../cepService";
import { CEP } from "../../types/cep";
import { QueryKeys } from "../types";

export const useCep = (params: CepServiceParams) => {
  return useQuery<CEP, Error>({
    queryKey: [QueryKeys.CEP],
    queryFn: () => cepService(params),
  });
};
