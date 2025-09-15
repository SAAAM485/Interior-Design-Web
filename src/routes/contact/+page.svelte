<div class="container mx-auto p-4 py-12 md:py-20">
    <div class="mx-auto max-w-2xl">
        <h1 class="mb-8 text-center text-4xl font-bold tracking-tight text-gray-800">聯絡我們</h1>
        <p class="mb-10 text-center text-lg text-gray-600">
            期待能為您服務，請填寫以下表單，我們將盡快與您聯繫。
        </p>
        <form 
            name="contact-form" 
            method="POST"
            action="/forms.html"
            netlify
            netlify-honeypot="bot-field"
            class="space-y-6 rounded-lg bg-white p-8 shadow-lg"
        >
            <input type="hidden" name="form-name" value="contact-form" />
            <p class="hidden">
                <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
            </p>
            
            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">姓名</label>
                    <input type="text" name="name" id="name" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>
                
                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">電話</label>
                    <input type="tel" name="phone" id="phone" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div class="sm:col-span-2">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" name="email" id="email" required class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div class="sm:col-span-2">
                    <label for="line-id" class="block text-sm font-medium text-gray-700">Line ID (選填)</label>
                    <input type="text" name="line-id" id="line-id" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="area" class="block text-sm font-medium text-gray-700">地區</label>
                    <select id="area" name="area" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <option>台北市</option>
                        <option>新北市</option>
                    </select>
                </div>

                <div>
                    <label for="house-condition" class="block text-sm font-medium text-gray-700">屋況</label>
                    <select id="house-condition" name="house-condition" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                        <option>新屋</option>
                        <option>中古屋</option>
                        <option>商辦</option>
                    </select>
                </div>

                <div>
                    <label for="square-footage" class="block text-sm font-medium text-gray-700">坪數 (選填)</label>
                    <input type="number" name="square-footage" id="square-footage" class="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                </div>

                <div>
                    <label for="available-time" class="block text-sm font-medium text-gray-700">可連絡時間</label>
                    <select id="available-time" name="available-time" class="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
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
                    <textarea id="message" name="message" rows="4" class="form-textarea block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></textarea>
                </div>
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    送出表單
                </button>
            </div>
        </form>
    </div>
</div>
