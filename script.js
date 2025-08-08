document.querySelectorAll(".btn").forEach (button => {
    button.addEventListener("click", () => {
        if (button.value === "admin") {
            alert("This is the secret");
        } else {
            console.warn("You are not an admin");
        }
    })
})