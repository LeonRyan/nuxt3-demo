<template>
  <nav class="flex items-center justify-between flex-wrap bg-gray-800 px-6 py-4 w-full">
		<div class="flex items-center flex-shrink-0 text-white mr-6">
			<NuxtLink to="/" class="bg-white p-2 rounded-full">
				<img src="~/assets/logo.svg" alt="codeCat" class="h-8" />
			</NuxtLink>
		</div>
		<div class="w-full flex-grow flex items-center w-auto pt-0" id="nav-content">
			<ul class="list-reset flex justify-end flex-1 items-center">
				<li class="flex items-center">
					<NuxtLink class="inline-block text-gray-600 hover:text-gray-200 py-2" to="https://github.com/LeonRyan/nuxt3-demo">
						<IconMdi:github class="text-2xl" />
					</NuxtLink>
				</li>
			</ul>
		</div>
	</nav>
</template>