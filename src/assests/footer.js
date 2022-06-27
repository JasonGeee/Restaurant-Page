// Footer section
export function footer() {
    const content = document.getElementById('content');

    const footer = document.createElement('footer');
    const signature = document.createElement('div');
    signature.setAttribute('class', 'signature');

    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.href = "https://github.com/JasonGeee";
    link.textContent = "Made By Master Jedi Jason";

    signature.appendChild(link);
    footer.appendChild(signature);
    content.appendChild(footer);
}