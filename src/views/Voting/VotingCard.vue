<template>
    <section class="voting__container" :style="{'border': card.votes >= 20 ? '2px solid green' : ''}">
            <figure>
                <div class="voting__container--profile" :style="{'background': card.avatar}">
                    <i :class="card.icon"></i>
                </div>
            </figure>
            <article class="voting__container--desc">
                <h3>{{card.title}}</h3>
                <p>{{card.description}}</p>
                <div class="voting__container--desc__submission">
                    <p>Submitted by:</p>
                    <div :style="{'background': card.avatar}">
                          <i :class="card.icon"></i>
                    </div>
                </div>
            </article>
            <div class="voting__container--rating" @click="card.votes < 25 ? incrementVote(card.id) : ''">
                <i class="fas fa-chevron-up"></i>
                <p>{{card.votes}}</p>
            </div>
    </section>
</template>

<script>
export default {
    props: {
        card: Object,
        incrementVote: Function
    }
}
</script>