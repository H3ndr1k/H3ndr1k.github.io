export function fetchIcon(icon: string) {
  return `${import.meta.env.MODE === "development" ? "/" : "/"}icons/${icon}.svg`
}

export function fetchImage(image: string) {
  return `${import.meta.env.MODE === "development" ? "/" : "/"}images/${image}.png`
}