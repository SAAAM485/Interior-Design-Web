<script lang="ts">
	import Inview from '$lib/components/Inview.svelte';
	import { getOptimizedImage } from '$lib/data/image-loader';

	const square = getOptimizedImage('/src/lib/assets/images/contact/square.jpg');
</script>

<Inview>
	<div class="m-auto mt-10 hidden w-[90vw] text-center md:block">
		<h1 class="mb-3 text-center text-2xl font-bold text-primary">聯絡我們</h1>
		<hr class="border border-primary" />
	</div>
</Inview>
<div class="container mx-auto p-4 py-12 md:py-20">
	<Inview>
		<div class="flex flex-col items-center gap-8 md:flex-row md:gap-20">
			{#if square && square.sources && square.img}
				<picture>
					{#if square.sources.avif}
						<source srcset={square.sources.avif} type="image/avif" />
					{/if}
					{#if square.sources.webp}
						<source srcset={square.sources.webp} type="image/webp" />
					{/if}
					<img src={square.img.src} alt="A square pic" class="h-auto w-[100vw] md:w-[40vw]" />
				</picture>
			{/if}
			<form
				name="contact-form"
				method="POST"
				action="/thank-you.html"
				netlify
				data-netlify="true"
				netlify-honeypot="bot-field"
				class="ed-lg w-full space-y-6 bg-white p-8 md:w-[40vw]"
			>
				<input type="hidden" name="form-name" value="contact-form" />
				<p class="hidden">
					<label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
				</p>

				<div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
					<div>
						<label for="name" class="block text-sm font-medium text-paragraph">姓名</label>
						<input
							type="text"
							name="name"
							id="name"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<label for="phone" class="block text-sm font-medium text-paragraph">電話</label>
						<input
							type="tel"
							name="phone"
							id="phone"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>

					<div class="sm:col-span-2">
						<label for="email" class="block text-sm font-medium text-paragraph">Email</label>
						<input
							type="email"
							name="email"
							id="email"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>

					<div class="sm:col-span-2">
						<label for="line-id" class="block text-sm font-medium text-paragraph"
							>Line ID (選填)</label
						>
						<input
							type="text"
							name="line-id"
							id="line-id"
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<label for="area" class="block text-sm font-medium text-paragraph">地區</label>
						<select
							id="area"
							name="area"
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						>
							<option>台北市</option>
							<option>新北市</option>
						</select>
					</div>

					<div>
						<label for="house-condition" class="block text-sm font-medium text-paragraph"
							>屋況</label
						>
						<select
							id="house-condition"
							name="house-condition"
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						>
							<option>新屋</option>
							<option>中古屋</option>
							<option>商辦</option>
						</select>
					</div>

					<div>
						<label for="square-footage" class="block text-sm font-medium text-paragraph"
							>坪數 (選填)</label
						>
						<input
							type="number"
							name="square-footage"
							id="square-footage"
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						/>
					</div>

					<div>
						<label for="available-time" class="block text-sm font-medium text-paragraph"
							>可連絡時間</label
						>
						<select
							id="available-time"
							name="available-time"
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						>
							<option>9:00-12:00</option>
							<option>12:00-15:00</option>
							<option>15:00-18:00</option>
							<option>18:00-21:00</option>
						</select>
					</div>
				</div>

				<div>
					<label for="message" class="block text-sm font-medium text-paragraph"
						>想說的話 (選填)</label
					>
					<div class="mt-1">
						<textarea
							id="message"
							name="message"
							rows="4"
							class="form-textarea block w-full border border-paragraph text-paragraph focus:border-indigo-500 focus:ring-indigo-500"
						></textarea>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center border border-transparent bg-paragraph px-4 py-3 text-base font-medium text-secondary hover:bg-secondary hover:text-paragraph focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
					>
						送出表單
					</button>
				</div>
			</form>
		</div>
	</Inview>
</div>
