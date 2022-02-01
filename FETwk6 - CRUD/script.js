class House {
    constructor(name) {
        this.name = name;
        this.rooms = [];
    }

    //method to add a room
    addRoom(name, area) {
        this.rooms.push(new Room(name, area));
    }
}

class Room {
    constructor(name, area) {
        this.name = name;
        this.area = area;
    }
}

//sending http requests
class HouseService {
    static url = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

    //methods for sending requests
    static getAllHouses() {
        return $.get(this.url); //get all the houses from the URL
    }

    //get a specific house
    static getHouse(id) {
        return $.get(this.url + `/${id}`);
    }

    //create a house
    static createHouse(house) {
        return $.post(this.url, house);
    }

    //update house
    static updateHouse(house) {
        return $.ajax({ //takes an object
            url: this.url + `/${house._id}`,
            dataType: 'json',
            data: JSON.stringify(house),
            contentType: 'application/json',
            type: 'PUT'
        });
    }

    //delete house
    static deleteHouse(id) {
        return $.ajax({
            url: this.url + `/${id}`,
            type: 'DELETE'
        });
    }
}

//DOM Manager (for rerendering the DOM each time we create a class)
class DOMManager {
    static houses; //variable to represent all houses in this class

    //create a house
    static createHouse(name) {
        HouseService.createHouse(new House(name))
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses));
    }

    //get all houses from service and render them to the DOM
    static getAllHouses() {
        HouseService.getAllHouses().then(houses => this.render(houses));
    }

    static deleteHouse(id) {
        //delete a house, get all houses left, rerender houses
        HouseService.deleteHouse(id)
            .then(() => {
                return HouseService.getAllHouses();
            })
            .then((houses) => this.render(houses));
    }

    //add rooms to a house
    static addRoom(id) { //*** */

        //look at each house in our house array
        for (let house of this.houses) {
            if (house._id == id) {
                //use jquery method and template literals, pound symbol to get by id
                house.rooms.push(new Room($(`#${house._id}-room-name`).val(), $(`#${house._id}-room-area`).val()));

                //send request to API to update house data
                HouseService.updateHouse(house) 
                    .then(() => {
                    return HouseService.getAllHouses();
                })
                    .then((houses) => this.render(houses));
       
            }
        }
    }

    //deleteRoom
    static deleteRoom(houseId, roomId) {
        for (let house of this.houses) {
            if (house._id == houseId) {
                for (let room of house.rooms) {
                    if (room._id == roomId) {
                        house.rooms.splice(house.rooms.indexOf(room), 1);
                        HouseService.updateHouse(house)
                            .then(() => {
                                return HouseService.getAllHouses();
                            })
                            .then((houses) => this.render(houses));
                    }
                    
                }
            }
        }
    }

    //render method to rerender the DOM
    static render(houses) {
        this.houses = houses;

        //grab reference to app div and empty it
        $('#app').empty();

        //for loop to go over houses and rerender (prepend so newest one shows up on top)
        for (let house of houses) {
            $('#app').prepend(
                //write HTML for each house
                `<div id="${house._id}" class="card">
                    <!--Card Header-->
                    <div class="card-header">
                        <h2>${house.name}</h2>
                        <!--Button for Deleting House-->
                        <button class="btn btn-danger" onclick="DOMManager.deleteHouse('${house._id}')">Delete</button>
                    </div>
                    <!--Card Body-->
                    <div class = "card-body">
                        <!--Rows that Show Different Room Names and Areas-->
                        <div class="card">
                            <div class="row">
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-name" class = "form-control" placeholder = "Room Name">
                                </div>
                                <div class="col-sm">
                                    <input type="text" id="${house._id}-room-area" class = "form-control" placeholder = "Room Area">
                                </div>
                            </div>
                            <!--Button to Create Room-->
                            <button id="${house._id}-new-room" onclick="DOMManager.addRoom('${house._id}')" class="btn btn-primary form-control">Add</button>
                        </div>
                    </div>
                </div><br>`

            );
            //Show each room in the house
            for (let room of house.rooms) {
                //grab id of the house and card body and append each room
                $(`#${house._id}`).find('.card-body').append(
                    `<p>
                        <span id="name-${room._id}"><strong>Name:</strong> ${room.name}</span>
                        <span id="area-${room._id}"><strong>Area:</strong> ${room.area}</span>
                        <!--Button to Delete a Single Room-->
                        <button class="btn btn-danger" onclick="DOMManager.deleteRoom('${house._id}', '${room._id}')">Delete Room</button>
                    </p>`
                )
            }
        }
    }
}

//grab create new house button and get the value of the new house name
$('#create-new-house').click(() => {
    DOMManager.createHouse($('#new-house-name').val())
    //set value back to empty
    $('new-house-name').val('');
});

DOMManager.getAllHouses(); //test

