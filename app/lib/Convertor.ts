export function convertToSlug(input: string): string {
    const nonAccentVietnamese = input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/đ/g, "d")
        .replace(/Đ/g, "D");

    const slug = nonAccentVietnamese
        .toLowerCase()
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-");

    return slug;
}