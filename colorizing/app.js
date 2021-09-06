all_imgs_dict = {
    "cathedral": "Red: (13, -1) <br /> Green: (6, -1)",
    "church": "Red: (82, -10) <br /> Green: (50, -5)",
    "emir": "Red: (112, 20) <br /> Green: (56, 7)",
    "harvesters": "Red: (128, 8) <br /> Green: (63, 11)",
    "icon": "Red: (89, 22) <br /> Green: (41, 17)",
    "lady": "Red: (130, -16) <br /> Green: (76, -7)",
    "melons": "Red: (180, 7) <br /> Green: (84, 4)",
    "monastery": "Red: (3, 2) <br /> Green: (-3, 1)",
    "onion_church": "Red: (109, 34) <br /> Green: (52, 24)",
    "self_portrait": "Red: (174, 3) <br /> Green: (76, -4)",
    "three_generations": "Red: (112, 7) <br /> Green: (55, 7)",
    "tobolsk": "Red: (7, 3) <br /> Green: (3, 2)",
    "train": "Red: (102, 1) <br /> Green: (54, -2)",
    "workshop": "Red: (104, -15) <br /> Green: (52, -4)"
}

extra_imgs_dict = {
    "forest_road": "Forest Road",
    "rainbow": "Girvas waterfall",
    "models": "Samples of models",
    "lilacs": "Lilacs",
    "saimaa_canal": "On the Saimaa Canal. Finland",
    "church_transfiguration": "Church of the Transfiguration, inside the fortress wall"
}

low_res_imgs = {
    "cathedral": "Red: (13, -1) <br /> Green: (6, -1)",
    "monastery": "Red: (3, 2) <br /> Green: (-3, 1)",
    "tobolsk": "Red: (7, 3) <br /> Green: (3, 2)",
}

high_res_imgs = {
    "church": "Red: (82, -10) <br /> Green: (50, -5)",
    "emir": "Red: (112, 20) <br /> Green: (56, 7)",
    "harvesters": "Red: (128, 8) <br /> Green: (63, 11)",
    "icon": "Red: (89, 22) <br /> Green: (41, 17)",
    "lady": "Red: (130, -16) <br /> Green: (76, -7)",
    "melons": "Red: (180, 7) <br /> Green: (84, 4)",
    "onion_church": "Red: (109, 34) <br /> Green: (52, 24)",
    "self_portrait": "Red: (174, 3) <br /> Green: (76, -4)",
    "three_generations": "Red: (112, 7) <br /> Green: (55, 7)",
    "train": "Red: (102, 1) <br /> Green: (54, -2)",
    "workshop": "Red: (104, -15) <br /> Green: (52, -4)"
}

html_string = "<div class=\"container\"><div class=\"img-wrap\"><img src=\"{0}/{1}\" alt=\"{2}\" class=\"image\"></div><div class=\"overlay\"><div class=\"text\">{3}</div></div></div>"
cropped_html_string = "<div class=\"container\"><div class=\"img-wrap\"><img src=\"{0}/{1}\" alt=\"{2}\" class=\"image2\"></div><div class=\"overlay2\"><div class=\"img-wrap\"><img src=\"{3}/{1}\" alt=\"{2}\" class=\"image\"></div></div></div>"

function loadImages() {
    createOverlayImgGrid("def_all", "low-res-img-grid", low_res_imgs);
    createOverlayImgGrid("def_all", "high-res-img-grid", high_res_imgs);
    createImgCropGrid();
    createOverlayImgGrid("extras", "extras-img-grid", extra_imgs_dict);
}

function createOverlayImgGrid(img_dir, grid_name, img_dict) {
    var container = document.getElementsByName(grid_name)[0];
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('grid-container');
    String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i += 1) {
        var reg = new RegExp('\\{' + i + '\\}', 'gm');
        s = s.replace(reg, arguments[i + 1]);
      }
      return s;
    };
    for (var img_name in img_dict) {
        var img_filename = img_name + ".jpg"
        var destDiv = document.createElement("div");
        var offsetString = img_dict[img_name]
        destDiv.innerHTML = String.format(html_string, img_dir, img_filename, img_name, offsetString);
        imgContainer.appendChild(destDiv.firstChild);
    }
    container.appendChild(imgContainer);
}

function createImgCropGrid() {
    var container = document.getElementsByName("cropped-img-grid")[0];
    var imgContainer = document.createElement('div');
    imgContainer.classList.add('grid-container');
    String.format = function() {
      var s = arguments[0];
      for (var i = 0; i < arguments.length - 1; i += 1) {
        var reg = new RegExp('\\{' + i + '\\}', 'gm');
        s = s.replace(reg, arguments[i + 1]);
      }
      return s;
    };
    for (var img_name in all_imgs_dict) {
        var img_filename = img_name + ".jpg"
        var destDiv = document.createElement("div");
        destDiv.innerHTML = String.format(cropped_html_string, "def_cropped", img_filename, img_name, "def_all");
        imgContainer.appendChild(destDiv.firstChild);
    }
    container.appendChild(imgContainer);
}