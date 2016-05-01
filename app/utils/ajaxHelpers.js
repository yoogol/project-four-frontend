var axios = require('axios');

module.exports = {
  baseUrl: 'http://localhost:3000',

  addNew: function(image, type, color) {
    const uid = localStorage.uid;
    const accessToken = localStorage.accessToken;
    const client = localStorage.client;

    // switch to determine category from type
    switch(type) {
      case "skirt":
      case "pants":
      case "jeans":
      case "leggings":
      case "sweatpants":
      case "shorts":
        var category = "bottom";
        break;
      case "blouse":
      case "sweater":
      case "cardigan":
      case "turtle neck":
      case "tank-top":
      case "shirt":
      case "t-shirt":
      case "sweatshirt":
      case "jacket":
        var category = "top";
      case "shoes":
      case "sneakers":
      case "boots":
      case "sandals":
      case "flip-flops":
        var category = "shoes";
      case "dress":
      case "sweaterdress":
      case "one-piece suite":
        var category = "one piece";
      default:
        console.log("type not determined")
    };
    let today = new Date();
    let last_worn = today.setFullYear(today.getFullYear() - 1);
    console.log("last worn", last_worn);

    axios.post(this.baseUrl + '/lothing_items', {
      // these 3 tokens will be sent to server for auth
      headers: {
        'uid': uid,
        'access-token': accessToken,
        'client': client
      },
      body: {
        image: image,
        type: type,
        color: color,
        last_worn: last_worn,
        category: category
      }
    })
    .then(function (response) {
      console.log("response:", response.data);
    })

    .catch(function (response) {
      console.log('There was an error', response);
    });
  }
};
