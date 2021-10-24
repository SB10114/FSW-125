const {v4: uuidv4} = require("uuid');


    var Image = [
        
            {
            "title": "A magnificent View",
            "description": "An abstract image seen through a lense ball",
            "orderNum": 1,
            "isComplete": true,
            "src": "./ImageFiles/lensBall_img.jpg",
            "id": uuidv4()
            },
            {
            "title": "Re-growth",
            "description": "Moss growing through gravel",
            "orderNum": 2,
            "isComplete": true,
            "src": "./ImageFiles/moss_img.jpg",
            "id": uuidv4()
            },
            {
            "title": "Gentle Curiosity",
            "description": "Saphira the cat looking on curiously",
            "orderNum": 3,
            "isComplete": false,
            "src": "./ImageFiles/saphira_img.jpg",
            "id": uuidv4()
            },
            {
            "title": "Simplicity",
            "description": "A unique view of a common plant",
            "orderNum": 4,
            "isComplete": true,
            "src": "./ImageFiles/wheat_img.jpg",
            "id": uuidv4()
            }
    ]

module.exports = Image;