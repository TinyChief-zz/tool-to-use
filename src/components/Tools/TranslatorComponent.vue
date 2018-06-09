<template>
<div class="translate-container">
  <h1 class="tools-item__title">Переводчик</h1>
	<p class="part-title">Что переводим?</p>
	<textarea id="source" class="bx" placeholder="Ваш текст">
	</textarea>
	<p class="part-title">На какой язык?</p>	
	<div class="select-row">
		<select name="to" id="lang">
				<option value="en" selected="selected">Английский</option>
				<option value="nl">Голландский</option>
				<option value="el">Греческий</option>
				<option value="da">Датский</option>
				<option value="es">Испанский</option>
				<option value="it">Итальянский</option>
				<option value="de">Немецкий</option>
				<option value="no">Норвежский</option>
				<option value="pl">Польский</option>
				<option value="pt">Португальский</option>
				<option value="ru" >Русский</option>
				<option value="tr">Турецкий</option>
				<option value="uk">Украинский</option>
				<option value="fi">Финский</option>
				<option value="fr">Французский</option>
		</select>
		<button class="btn" id="translate" v-on:click="translate">
			Перевести
		</button>
	</div>
	<div id="output"></div>
</div>
</template>

<script>
export default {
  name: "TranslatorComponent",
  data () {
    return {
    	
    }
  },
  methods: {
  	translate: function () {
  		var url = "https://translate.yandex.net/api/v1.5/tr.json/translate",
    	keyAPI = "trnsl.1.1.20170930T224025Z.8a7302c8b33408ae.1c5c05c81fa4ce28d4447ed98b202efa4c0a01f7";

    		var xhr = new XMLHttpRequest(),
        	textAPI = document.querySelector('#source').value,
       		langAPI = document.querySelector('#lang').value,
        	data = "key="+keyAPI+"&text="+textAPI+"&lang="+langAPI;
   			xhr.open("POST",url,true);
    		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
   			xhr.send(data);
    		xhr.onreadystatechange = function() {
	        	if (this.readyState==4 && this.status==200) {
		            var res = this.responseText;
		            var json = JSON.parse(res);
		            if(json.code == 200) {
		                document.querySelector('#output').innerHTML = json.text[0];
		            }
		            else {
		                document.querySelector('#output').innerHTML = "Error Code: " + json.code;
		            }
	        	}
  			}
 	}
  }
}
</script>

<style>
.translate-container {
	padding-top: 40px;
}
.bx {
    width: 100%;
    display: block;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid #000;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
		border-radius: 20px;		
}
#output {
	font-size: 16px;
	min-height: 150px;
	background-color: silver;
	border-radius: 20px;
	padding: 10px;
	font-size: 18px;
	margin-top: 15px;
}
.select-row {
	display: flex;
	align-items: center;
}
select {
	height: 35px;
	font-size: 14px;
	margin-right: 30px;
}
.btn {
	padding: 8px 15px;
	border-style: none;
	background-color: cornflowerblue;
	border-radius: 5px;
	transition: all 0.2s ease-out;
	cursor: pointer;
	font-size: 16px;
	font-weight: bold;
}
.btn:hover {
	background-color: #cccccc
}


</style>