document.addEventListener("DOMContentLoaded", () => {
    console.log("[ZeroSpace] script loaded!");
    const data = {
        "python enumerate": ["-MZiQaNI0QA?si=BgYuEZa84-k_v766", "kGnYc_h1geM?si=PFdeNkbm7e-4i3uj"],
        "c program compilation process": ["ksJ9bdSX5Yo?si=tzQ_HxL6JxLZ0PfX"],
        "c memory management": ["udfbq4M2Kfc?si=jLgE0Izz9dg8PLvp"],
        "c pipeline": ["N2y6csonII4?si=GnVmt-c-vrI_9Nsf"],
        "c compiler": ["87SH2Cn0s9A?si=gUjqgLJol7hhQq6N"],
        "python generator": ["mziIj4M_uwk?si=jsp99RzUNe6ey02s", "ixd-u3pmsUc?si=ZsNpdUE1Ki_hbhaJ", "bD05uGo_sVI?si=sklGrjwF8d2J6cv_"],
        "python nested function": ["jXugs4B3lwU?si=SpyMQuu50A6Gt2kG"],
        "python closure": ["yiSdpYmZA2w?si=mdfQLr6GXa-yy6bz"],
        "add me to search": ["EpZVe7UvQpA?si=-NCZQedkywNWn0dg"],
        "google people card": ["JW1LnL-j1_I?si=e229qJtHt1dZrDrF"]
    };

    // Helper function to extract keywords from meta tags
    const getKeywords = () => {
        const title = document.querySelector('meta[name="title"]')?.content || document.title;
        const description = document.querySelector('meta[name="description"]')?.content || "";
        return `${title} ${description}`.toLowerCase().split(/\s+/);
    };

    // Extract keywords
    const keywords = getKeywords();

    // Find the first matching key in the JSON object
    const matchedKey = Object.keys(data).find(key => 
        key.toLowerCase().split(/\s+/).some(word => keywords.includes(word))
    );

    if (matchedKey && data[matchedKey].length > 0) {
        const firstLink = data[matchedKey][0];
        const iframeTemplate = `
                <div style="width:100%; clear:both; background-color:black; border-radius:10px; padding:10px">
            <iframe style="height:350px; width:100%; border-radius:5px;" src="https://www.youtube.com/embed/${firstLink}" title="ZeroSpace" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <div style="min-height: 20px;">
                <div style="color:white; font-family:'Inter'; font-size: 22px; padding:0; margin:0;">
              <a href="https://joinzerospace.com" target="_blank" rel="noopener noreferrer"  style="color:white;"><span style="font-weight:bold; ">Zero<span style="font-weight:100;">Space</span></span></a>
                </div>
            </div>
        </div>
        `;

        // Find the first paragraph tag and insert the iframe after it
        const firstParagraph = document.querySelector('p');
        if (firstParagraph) {
            firstParagraph.insertAdjacentHTML('afterend', iframeTemplate);
        }
    }
});