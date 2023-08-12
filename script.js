var form_submit = document.querySelector('#form-submit')

form_submit.addEventListener('submit', (e) => {
    e.preventDefault()

    // get all elements
    var first_name = document.querySelector('[placeholder="First name"]')
    var last_name = document.querySelector('[placeholder="Last name"]')
    var address = document.querySelector('[placeholder="Address"]')
    var pincode = document.querySelector('[placeholder="Pincode"]')
    var gender = document.querySelector('[placeholder="Gender"]')   
    var state = document.querySelector('[placeholder="State"]')
    var country = document.querySelector('[placeholder="Country"]') 
    var food = document.querySelector('#food')
    
    // Get all elements values
    let FIRST_NAME = first_name.value;
    let LASTNAME = last_name.value;
    let FULLNAME = [FIRST_NAME, LASTNAME].join(" ");
    let ADDRESS = address.value;
    let PINCODE = pincode.value;
    let GENDER = gender.value;
    let STATE = state.value;
    let COUNTRY = country.value;
    let FOOD = food.value;

    var innerText_values = [first_name,last_name,address,pincode,gender,state,country,food]
    var details = [FULLNAME, ADDRESS, PINCODE, GENDER, STATE, COUNTRY, FOOD]
    
    if (FIRST_NAME != '' && LASTNAME != '' && ADDRESS != '' && PINCODE != '' && GENDER != '' && STATE != '' && COUNTRY != '' && FOOD != '' && FOOD != 'Empty') {
        var creating_tr = document.createElement('tr')
        for(var i=0;i<details.length;i++){
            var creating_td = document.createElement('td')
            creating_td.innerText = details[i]
            creating_tr.append(creating_td)
        }

        document.querySelector('tbody').append(creating_tr)
        for(var i of innerText_values){
            i.value='';
        }
        food.value = "Empty"
    }
})