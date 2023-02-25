---
layout: page
title: Mis Proyectos
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

const featured = [
  {
    avatar: '/assets/img/icons-projects/markforchat.svg',
    name: 'Mark For Chat',
    title: 'Chatea con cualquier persona en WhatsApp sin tener que agregarlos a tu libreta de contactos.',
    sponsor: 'https://wipodev.com/markforchat/es/'
  },
  {
    avatar: '/assets/img/icons-projects/liquidsimulator.svg',
    name: 'Liquid Simulator Godot',
    title: 'Simulador de Líquidos 2D con autómata celular en Godot Engine (GDNative / C++) - NativeScript 1.1',
    sponsor: 'https://wipodev.com/liquid-simulator-godot/es/'
  },
  {
    avatar: '/assets/img/icons-projects/themevuepress.svg',
    name: 'VuePress Theme AJWi',
    title: 'Tema personalizado para obtener un blog usando VuePress.',
    sponsor: 'https://wipodev.com/vuepress-theme-ajwi/'
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Mis Proyectos
    </template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Proyectos Destacados</template>
    <template #members>
      <VPTeamMembers size="small" :members="featured" />
    </template>
  </VPTeamPageSection>
  <!-- <VPTeamPageSection>
    <template #title>FrameWorks</template>
    <template #members>
      <VPTeamMembers size="small" :members="frameworks" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Tools</template>
    <template #members>
      <VPTeamMembers size="small" :members="tools" />
    </template>
  </VPTeamPageSection> -->
</VPTeamPage>
