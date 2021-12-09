const validation = new JustValidate('#form');

validation
.addField('#name', [{
    rule: 'required'
}])
.onSuccess((ev) => {
    /* ev.preventDefault(); */
    console.log(ev);
})
