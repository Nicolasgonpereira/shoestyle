export function slugify(text: string): string {
    return text
        .toLowerCase() // Converte para minúsculas
        .normalize('NFD') // Remove acentuação
        .replace(/[\u0300-\u036f]/g, '') // Remove marcas de acentuação
        .replace(/[^a-z0-9 ]/g, '') // Remove caracteres especiais
        .trim() // Remove espaços no início e no fim
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-'); // Remove hífens duplicados
}