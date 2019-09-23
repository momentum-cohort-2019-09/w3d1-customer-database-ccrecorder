function customerCardToHtml(customer) {
	return `<div class="customerCard">
    <img src="${customer.picture.large}" alt="${customer.name} headshot" class="photo">
    <h2 class="nameInCard">${customer.name.first} ${customer.name.last}</h2>
    <ul class="datas">
        <li class="email">${customer.email}</li>
        <li class="addressLine1">${customer.location.street}</li>
        <li class="addressLine2">${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location
		.postcode}</li>
        <li class="dob">DOB: ${moment(customer.dob).format('MMM Do, YYYY')}</li>
        <li class="custSince">Customer since: ${moment(customer.registered).format('MMM Do, YYYY')}</li>
    </ul>
</div>`;
}

let databaseOfCustomers = customers.map((customer) => customerCardToHtml(customer));
// console.log(databaseOfCustomers.join('\n'));
let cards = databaseOfCustomers.join('\n');
document.querySelector('.container').innerHTML = cards;
