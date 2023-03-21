<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comandă produs</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div id="app">
		<h1>Comandă produs</h1>
		<form>
			<label for="product">Numele produsului:</label>
			<select id="product" v-model="selectedProduct">
				<option v-for="product in products" :value="product.name">{{ product.name }}</option>
			</select><br><br>
			<label for="price">Prețul unei cantități:</label>
			<input type="number" id="price" v-model="price"><br><br>
			<label for="quantity">Numărul de cantități:</label>
			<input type="number" id="quantity" v-model="quantity"><br><br>
			<button type="button" @click="addProduct">Add product</button>
			<button type="button" @click="resetForm">Reset</button>
		</form>
		<br>
		<table>
			<thead>
				<tr>
					<th>Nr</th>
					<th>Numele produsului</th>
					<th>Prețul unei cantități</th>
					<th>Numărul de cantități</th>
					<th>Prețul total</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(product, index) in productList" :class="{ highlight: isHighlighted(index) }">
					<td>{{ index + 1 }}</td>
					<td>{{ product.name }}</td>
					<td>{{ product.price }}</td>
					<td>{{ product.quantity }}</td>
					<td>{{ product.totalPrice }}</td>
				</tr>
			</tbody>
		</table>
	</div>
    <script src="https://unpkg.com/vue@next"></script>
    <script src="app.js"></script>
</body>
</html>