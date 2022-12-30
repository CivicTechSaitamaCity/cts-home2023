<template>
  <div>
    <article>
      <div id="news" class="nuxt-content">
        <h2>News</h2>
        <ul>
          <li v-for="(article, index) in news" :key="index">
            {{ article.date }}
            {{ article.title }}
            <a :href="article.link">
              <span v-if="article.link">link</span>
            </a>
          </li>
        </ul>
      </div>
    </article>

  </div>
</template>

<script setup>
const news = await queryContent("/data")
  .sort({ eventDate: -1 })
  .sort({ date: -1 })
  .where({ date: { $gt: new Date(2020) } })
  .find();
</script>

<style lang="scss" scoped>
/* ヘッダー */

#mainnav a {
  color: #000;
}

#mainImg {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 400px;

  img {
    position: absolute;
    left: 50%;
    max-width: 1280px;
    // width: 100%;

    width: 1280px;
    height: 528px;
    margin-left: -640px;
  }
}

#mainImg-2 {
  display: flex;

  img {
    width: 50%;
  }
}

section {
  clear: both;
  padding-top: 40px;

  h2 span {
    background: #fff;
  }
}

.panel li a {
  text-decoration: none;
}

/**
 * Nuxt content
 */
:deep(.nuxt-content) {
  // width: 100%;
  max-width: 1000px;
  margin: auto;
  font-size: clamp(18px, 1vw, 24px);

  h2 {
    font-family: "Noto Sans JP", cursive;
    width: 60%;
    margin: 20px auto 20px;
    font-size: 3rem;
    font-weight: normal;
    text-align: center;
    background-size: 1px 1px;
  }

  #event+ul,
  #project+ul {
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;

    li {
      width: calc(100% / 3);
      margin: 0;
      padding: 3px 6px;
      box-sizing: border-box;

      a img {
        width: 100%;
      }
    }
  }

  #contact+ul {
    list-style-type: none;

    img {
      width: 24px;
    }
  }

  .footer__list li {
    list-style-type: none;

    img {
      width: 24px;
    }
  }
}
</style>
