function changeTheme() {

    document.body.style.background =
        document.body.style.background === "lavender"
        ? "#f2f2f2"
        : "lavender";

    alert(
`🎓 CSS Types

🔴 Inline CSS
- Written inside the HTML element
- Uses the style attribute

🟡 Internal CSS
- Written inside <style> in the HTML file

🟢 External CSS
- Written in a separate .css file
- Linked using <link>`
    );

}