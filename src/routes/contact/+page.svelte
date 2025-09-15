<script>
    let loading = false;
    let success = false;
    let error = false;

    async function handleSubmit(event) {
        loading = true;
        success = false;
        error = false;

        const formElement = event.target;
        const formData = new FormData(formElement);

        const body = new URLSearchParams(formData).toString();

        try {
            // IMPORTANT: For AJAX submissions, Netlify requires you to POST to the same path
            // that contains the form, but with a specific header.
            const response = await fetch("/", { 
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body,
            });

            if (response.ok) {
                success = true;
                formElement.reset();
            } else {
                throw new Error(`Form submission failed with status: ${response.status}`);
            }
        } catch (e) {
            error = true;
            console.error(e);
        } finally {
            loading = false;
        }
    }
</script>

<div class="container mx-auto p-4 py-12 md:py-20">
    <div class="mx-auto max-w-2xl">
        <h1 class="mb-8 text-center text-4xl font-bold tracking-tight text-gray-800">聯絡我們</h1>
        <p class="mb-10 text-center text-lg text-gray-600">
            期待能為您服務，請填寫以下表單，我們將盡快與您聯繫。
        </p>

        {#if success}
            <div class="rounded-md bg-green-100 p-4 text-center">
                <h3 class="text-lg font-medium text-green-800">感謝您！</h3>
                <div class="mt-2 text-sm text-green-700">
                    <p>您的表單已成功送出，我們會盡快與您聯繫。</p>
                </div>
            </div>
        {:else}
            <!-- This form tag still needs the `netlify` attribute for build-time detection -->
            <form 
                name="contact-form" 
                netlify
                netlify-honeypot="bot-field"
                on:submit|preventDefault={handleSubmit}
                class="space-y-6 rounded-lg bg-white p-8 shadow-lg"
            >
                <input type="hidden" name="form-name" value="contact-form" />
                <p class="hidden">
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>
                
                <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
                        <input type="text" name="name" id="name" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                    </div>
                    
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">電話</label>
                        <input type="tel" name="phone" id="phone" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" id="email" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="line-id" class="block text-sm font-medium text-gray-700">Line ID (選填)</label>
                        <input type="text" name="line-id" id="line-id" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                    </div>

                    <div>
                        <label for="area" class="block text-sm font-medium text-gray-700">地區</label>
                        <select id="area" name="area" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                            <option>台北市</option>
                            <option>新北市</option>
                        </select>
                    </div>

                    <div>
                        <label for="house-condition" class="block text-sm font-medium text-gray-700">屋況</label>
                        <select id="house-condition" name="house-condition" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                            <option>新屋</option>
                            <option>中古屋</option>
                            <option>商辦</option>
                        </select>
                    </div>

                    <div>
                        <label for="square-footage" class="block text-sm font-medium text-gray-700">坪數 (選填)</label>
                        <input type="number" name="square-footage" id="square-footage" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                    </div>

                    <div>
                        <label for="available-time" class="block text-sm font-medium text-gray-700">可連絡時間</label>
                        <select id="available-time" name="available-time" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}>
                            <option>9:00-12:00</option>
                            <option>12:00-15:00</option>
                            <option>15:00-18:00</option>
                            <option>18:00-21:00</option>
                        </select>
                    </div>
                </div>

                <div>
                    <label for="message" class="block text-sm font-medium text-gray-700">想說的話 (選填)</label>
                    <div class="mt-1">
                        <textarea id="message" name="message" rows="4" class="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" disabled={loading}></textarea>
                    </div>
                </div>

                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50" disabled={loading}>
                        {loading ? '傳送中...' : '送出表單'}
                    </button>
                </div>

                {#if error}
                    <p class="text-sm text-red-600">抱歉，表單提交失敗，請稍後再試。</p>
                {/if}
            </form>
        {/if}
    </div>
</div>