---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'
import {onMounted} from 'vue'

onMounted(()=>{
  const title = document.querySelector(".VPTeamPageTitle").classList.add("title-skill");
  const sections = document.querySelectorAll(".VPTeamPageSection");
  const shadows = document.querySelectorAll(".avatar");
  const logos = document.querySelectorAll(".avatar-img");
  sections.forEach((e) => e.classList.add("section-skill"));
  shadows.forEach((e) => e.classList.add("shadow-skill"));
  logos.forEach((e) => e.classList.add("logo-skill"));
})

const vanilla = [
  {
    avatar: '/assets/img/skills/html5.svg',
    name: 'HTML',
    title: 'Semi Senior',
  },
  {
    avatar: '/assets/img/skills/css3.svg',
    name: 'CSS',
    title: 'Semi Senior',
  },
  {
    avatar: '/assets/img/skills/javascript.svg',
    name: 'JavaScript',
    title: 'Semi Senior',
  },
  {
    avatar: '/assets/img/skills/kotlin.png',
    name: 'Kotlin',
    title: 'Junior',
  },
  {
    avatar: '/assets/img/skills/php.svg',
    name: 'PHP',
    title: 'Semi Senior',
  },
]
const frameworks = [
  {
    avatar: '/assets/img/skills/vue.svg',
    name: 'Vue',
    title: 'Junior',
  },
  {
    avatar: '/assets/img/skills/svelte.svg',
    name: 'Svelte',
    title: 'Junior',
  },
  {
    avatar: '/assets/img/skills/vitepress.png',
    name: 'VitePress',
    title: 'Junior',
  },
]
const tools = [
  {
    avatar: '/assets/img/skills/git.svg',
    name: 'Git',
    title: 'Junior',
  },
  {
    avatar: '/assets/img/skills/node.svg',
    name: 'Node',
    title: 'Junior',
  },
  {
    avatar: '/assets/img/skills/inkscape.svg',
    name: 'Inkscape',
    title: 'Semi Senior',
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Mis Habilidades
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Lenguajes Base</template>
    <template #members>
      <VPTeamMembers size="small" :members="vanilla" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>FrameWorks</template>
    <template #members>
      <VPTeamMembers size="small" :members="frameworks" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Herramientas</template>
    <template #members>
      <VPTeamMembers size="small" :members="tools" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
