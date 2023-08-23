// $(document).ready(function() {
//     $(".carousel-indicators button[type=button]").click(function() {
//         let idx = $(this).attr("data-bs-target");

//         $(".banner1 > div").hide();
//         $(".banner1 > div").eq(idx).show();
//     })
// });

function loadItems() {
    fetch("Descriptions.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)
            h += `
            <div class="item">
                <div>
                    <a href="#" class="product"></a>
                    <img src="Picture/${p.image}" class="width-pic" alt="${p.name}">
                    <h4>${p.name}</h4>
                    <p>${p.price}</p>
                </div>
            </div>
            `;
    
        let e = document.getElementById("items");
        e.innerHTML = h;

        // Gắn sự kiện
        // let buttons = document.getElementsByClassName("del");
        // for (let b of buttons)
        //     b.onclick = function() {
        //         if (confirm("Bạn chắc chắn xóa không?") === true)
        //             this.parentNode.parentNode.remove();
        //     }
    })
};

window.onload = function()
{
    loadItems();
}