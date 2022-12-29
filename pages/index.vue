<template>
  <div>
    <article>
      <div id="news" class="nuxt-content">
        <h2>News</h2>
        <ul>
          <li v-for="(article, index) in data" :key="index">
            {{ article.date }}
            {{ article.title }}
            <a :href="article.link">
              <span v-if="article.link">link</span>
            </a>
          </li>
          <li><a href="/news">more...</a></li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("news", () => queryContent("/data")
      .limit(10)
      .sort({eventDate:-1, date:-1})
      .where({ date: { $gt: new Date(2020) } })
      .find());
//console.log(data)
</script>
