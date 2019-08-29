// DATA
const data = [{
		name: 'John Doe',
		age: 32,
		role: 'Photographer',
		lookingfor: 'Model',
		location: 'Boston MA',
		image: 'https://randomuser.me/api/portraits/men/82.jpg'
	},
	{
		name: 'Jen Smith',
		age: 26,
		role: 'Model',
		lookingfor: 'Photographer',
		location: 'Miami FL',
		image: 'https://randomuser.me/api/portraits/women/82.jpg'
	},
	{
		name: 'William Johnson',
		age: 38,
		role: 'Musician',
		lookingfor: 'videographer',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/men/83.jpg'
	},
	{
		name: 'Alice Stone',
		age: 21,
		role: 'Drummer',
		lookingfor: 'a Band',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/women/22.jpg'
	},
	{
		name: 'Jeremy Lee',
		age: 22,
		role: 'Front-end Developer',
		lookingfor: 'Freelance',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/men/56.jpg'
	},
	{
		name: 'Anthony Roberts',
		age: 24,
		role: 'Filmmaker',
		lookingfor: 'Actor/Actress',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/men/81.jpg'
	},
	{
		name: 'Autumn Ortiz',
		age: 26,
		role: 'Singer',
		lookingfor: 'videographer',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/women/24.jpg'
	},
	{
		name: 'Steve Williams',
		age: 31,
		role: 'Editor',
		lookingfor: 'Freelance',
		location: 'Adelanto CA',
		image: 'https://randomuser.me/api/portraits/men/43.jpg'
	},
];


const profiles = profileIterator(data);
// Call first profile
nextProfile();


// Next event
document.getElementById('next').addEventListener('click', nextProfile)



// Next profile display 
function nextProfile() {
	const currentProfile = profiles.next().value

	if (currentProfile !== undefined) {
		document.getElementById('profileDisplay').innerHTML = `
		<ul class="text-center list-group">
			<li class="list-group-item">Name: ${currentProfile.name}</li>
			<li class="list-group-item">Age: ${currentProfile.age}</li>
			<li class="list-group-item">Location: ${currentProfile.location}</li>
			<li class="list-group-item">Preference: I am a ${currentProfile.role} looking for ${currentProfile.lookingfor}</li>
		</ul>
	`;

		document.getElementById('imageDisplay').innerHTML =
			`<img src="${currentProfile.image}">`;
	} else {
		// No more Profiles to display
		window.location.reload();
	}
}

// Profile Iterater
function profileIterator(profiles) {
	let nextIndex = 0;

	return {
		next: function () {
			return nextIndex < profiles.length ? {
				value: profiles[nextIndex++],
				done: false
			} : {
				done: true
			}
		}
	};
}