$(document).ready(function(){
	$('.dipi').click(function(){
		let isi = $(this).text();
		let isi2 = prompt('Anda sekarang berada dinama, ingin mengubahnya?',isi)
		if(!isi2) return;

		$(this).text(isi2);
	})

	$('.addres').click(function(){
		let isi = $(this).text();
		let isi2= prompt('Anda sekarang berada dialamat, ingin mengubahnya?',isi)
		if(!isi2) return;

		$(this).text(isi2);
	})

	$('.delete').click(function(){
		let yakin = confirm('Apakah anda yakin ingin menghapusnya?');
		if(!yakin) return;

		let id = $(this).prop('id');

		let rid = id.split("__");
		let baris_ke = rid[1];

		$('#row__'+baris_ke).slideUp()

	})

})