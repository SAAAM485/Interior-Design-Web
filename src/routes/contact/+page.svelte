<script lang="ts">
	import Inview from '$lib/components/Inview.svelte';
	import { getOptimizedImage } from '$lib/data/image-loader';

	const square = getOptimizedImage('/src/lib/assets/images/contact/square.jpg');
</script>

<Inview>
	<div class="m-auto mt-10 hidden w-[90vw] text-center md:block">
		<h1 class="mb-3 text-center text-2xl font-bold text-secondary dark:text-dark-secondary">
			聯絡我們
		</h1>
		<hr class="border border-secondary dark:border-dark-secondary" />
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
					<img
						src={square.img.src}
						alt="A square pic"
						class="h-auto w-[100vw] rounded-2xl md:w-[40vw]"
					/>
				</picture>
			{/if}
			<form
				name="contact-form"
				method="POST"
				action="/thank-you"
				netlify
				data-netlify="true"
				netlify-honeypot="bot-field"
				class="ed-lg w-full space-y-6 rounded-2xl bg-block p-8 md:w-[40vw] md:dark:bg-dark-block"
			>
				<input type="hidden" name="form-name" value="contact-form" />
				<p class="hidden">
					<label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
				</p>

				<div class="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
					<div>
						<label
							for="name"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">姓名</label
						>
						<input
							type="text"
							name="name"
							id="name"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div>
						<label
							for="phone"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">電話</label
						>
						<input
							type="tel"
							name="phone"
							id="phone"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div class="sm:col-span-2">
						<label
							for="email"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">Email</label
						>
						<input
							type="email"
							name="email"
							id="email"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div class="sm:col-span-2">
						<label
							for="line-id"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>Line ID (選填)</label
						>
						<input
							type="text"
							name="line-id"
							id="line-id"
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div>
						<label
							for="area"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">地區</label
						>
						<select
							id="area"
							name="area"
							required
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						>
							<option value="" disabled selected>- 請選擇 -</option>
							<option>台北</option>
							<option>新北</option>
							<option>桃園</option>
							<option>新竹</option>
						</select>
					</div>

					<div>
						<label
							for="budget-range"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>預算範圍</label
						>
						<select
							id="budget-range"
							name="budget-range"
							required
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						>
							<option value="" disabled selected>- 請選擇 -</option>
							<option>120萬</option>
							<option>150萬</option>
							<option>200萬</option>
							<option>250萬</option>
							<option>300萬</option>
							<option>350萬</option>
							<option>400萬</option>
							<option>450萬</option>
							<option>500萬</option>
							<option>500萬以上</option>
						</select>
					</div>

					<div>
						<label
							for="house-type"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>房屋類型</label
						>
						<select
							id="house-type"
							name="house-type"
							required
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						>
							<option value="" disabled selected>- 請選擇 -</option>
							<option>新成屋</option>
							<option>中古屋</option>
							<option>商用空間</option>
							<option>客變需求</option>
						</select>
					</div>

					<div>
						<label
							for="house-condition"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">屋況</label
						>
						<select
							id="house-condition"
							name="house-condition"
							required
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						>
							<option value="" disabled selected>- 請選擇 -</option>
							<option>毛胚屋</option>
							<option>已裝潢</option>
							<option>局部翻新</option>
						</select>
					</div>

					<div>
						<label
							for="house-age"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>屋齡 (年)</label
						>
						<input
							type="number"
							name="house-age"
							id="house-age"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div>
						<label
							for="square-footage"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">坪數</label
						>
						<input
							type="number"
							name="square-footage"
							id="square-footage"
							required
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>

					<div class="sm:col-span-2">
						<p class="block text-sm font-medium text-paragraph dark:text-dark-paragraph">
							居住人數
						</p>
						<div class="mt-1 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
							<div>
								<label
									for="residents-adults"
									class="block text-xs text-paragraph dark:text-dark-paragraph">成人 (人)</label
								>
								<select
									id="residents-adults"
									name="residents-adults"
									required
									class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
								>
									<option value="" disabled selected>- 請選擇 -</option>
									{#each Array(11).keys() as i}
										<option>{i}</option>
									{/each}
								</select>
							</div>
							<div>
								<label
									for="residents-children"
									class="block text-xs text-paragraph dark:text-dark-paragraph">小孩 (人)</label
								>
								<select
									id="residents-children"
									name="residents-children"
									required
									class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
								>
									<option value="" disabled selected>- 請選擇 -</option>
									{#each Array(11).keys() as i}
										<option>{i}</option>
									{/each}
								</select>
							</div>
							<div>
								<label
									for="residents-elders"
									class="block text-xs text-paragraph dark:text-dark-paragraph">長輩 (人)</label
								>
								<select
									id="residents-elders"
									name="residents-elders"
									required
									class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
								>
									<option value="" disabled selected>- 請選擇 -</option>
									{#each Array(11).keys() as i}
										<option>{i}</option>
									{/each}
								</select>
							</div>
							<div>
								<label
									for="residents-pets"
									class="block text-xs text-paragraph dark:text-dark-paragraph">寵物 (隻)</label
								>
								<select
									id="residents-pets"
									name="residents-pets"
									required
									class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
								>
									<option value="" disabled selected>- 請選擇 -</option>
									{#each Array(11).keys() as i}
										<option>{i}</option>
									{/each}
								</select>
							</div>
						</div>
					</div>

					<div>
						<label
							for="available-time"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>可連絡時間</label
						>
						<select
							id="available-time"
							name="available-time"
							required
							class="form-select mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						>
							<option value="" disabled selected>- 請選擇 -</option>
							<option>9:00-12:00</option>
							<option>12:00-15:00</option>
							<option>15:00-18:00</option>
							<option>18:00-21:00</option>
						</select>
					</div>

					<div>
						<label
							for="completion-date"
							class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
							>希望完工日期 (選填)</label
						>
						<input
							type="date"
							name="completion-date"
							id="completion-date"
							class="form-input mt-1 block w-full border border-paragraph p-2 text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						/>
					</div>
				</div>

				<div>
					<label
						for="message"
						class="block text-sm font-medium text-paragraph dark:text-dark-paragraph"
						>想說的話 / 特殊需求 (選填)</label
					>
					<div class="mt-1">
						<textarea
							id="message"
							name="message"
							rows="4"
							class="form-textarea block w-full border border-paragraph text-paragraph focus:border-indigo-500 focus:ring-indigo-500 dark:border-dark-paragraph dark:text-dark-paragraph"
						></textarea>
					</div>
				</div>

				<div>
					<button
						type="submit"
						class="flex w-full justify-center border border-transparent bg-paragraph px-4 py-3 text-base font-medium text-mb hover:bg-mb hover:text-paragraph focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none dark:bg-dark-paragraph"
					>
						送出表單
					</button>
				</div>
			</form>
		</div>
	</Inview>
</div>
