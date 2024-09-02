function updateTime() {
    const tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });
    const newYorkTime = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });
    const londonTime = new Date().toLocaleString("en-US", { timeZone: "Europe/London" });

    document.getElementById("tokyo").querySelector(".time").textContent = new Date(tokyoTime).toLocaleTimeString();
    document.getElementById("newyork").querySelector(".time").textContent = new Date(newYorkTime).toLocaleTimeString();
    document.getElementById("london").querySelector(".time").textContent = new Date(londonTime).toLocaleTimeString();
}

setInterval(updateTime, 1000);
updateTime();
