// utils/dateFormatter.ts

/**
 * Capitaliza a primeira letra de uma string.
 * @param input - A string a ser capitalizada.
 * @returns A string com a primeira letra em maiúsculo.
 */
export function capitalizeFirstLetter(input: string): string {
  if (!input) return ""
  // Se você quiser garantir que o restante da string esteja em minúsculo:
  // return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();

  // Apenas capitaliza a primeira letra e mantém o restante como está:
  return input.charAt(0).toUpperCase() + input.slice(1)
}
