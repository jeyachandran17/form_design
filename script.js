var form_submit = document.querySelector('#form-submit')

form_submit.addEventListener('submit',(e)=>{
    e.preventDefault()
    var first_name = document.querySelector('[placeholder="First name"]')
    var last_name = document.querySelector('[placeholder="Last name"]')
    var address = document.querySelector('[placeholder="Address"]')
    var pincode = document.querySelector('[placeholder="Pincode"]')
    var gender = document.querySelector('[placeholder="Gender"]')
    var state = document.querySelector('[placeholder="State"]')
    var country = document.querySelector('[placeholder="Country"]')
    var food = document.querySelector('#food')

    console.log('form submitted')
    console.log(first_name,last_name,address,pincode,gender,state,country,food)
    var data = [first_name,last_name,address,pincode,gender,state,country,food]
    // if(first_name!=''&&last_name!=''&&address!=''&&city!=''){

    // }
    var creating_tr = document.createElement('tr')
    for(var i=0;i<data.length;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = data[i].value
        creating_tr.append(creating_td)
    }

    document.querySelector('tbody').append(creating_tr)
    for(var i of data){
        i.value='';
    }
})