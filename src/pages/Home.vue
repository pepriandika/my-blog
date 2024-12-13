<template>
  <div>
    <v-row no-gutters>
      <v-col cols="9">
        <ArtikelCard
            image-src="https://pepriandika.me/wp-content/uploads/2024/06/asset11-1024x768.png"
            title="Saya Memilih Berprofesi di Bidang IT Karena..."
            author="pepriandika"
            date="Juni 28, 2024"
            category="Story"
            description="Informasi lengkap mengenai syarat dan ketentuan beasiswa belajar teknologi. lorem ipsum dolor sit amet consectetur adipisicing elit."
            button-text="Read More"
        />
        <ArtikelCard
            image-src="https://pepriandika.me/wp-content/uploads/2024/06/asset11-1024x768.png"
            title="Saya Memilih Berprofesi di Bidang IT Karena..."
            author="pepriandika"
            date="Juni 28, 2024"
            category="Story"
            description="Informasi lengkap mengenai syarat dan ketentuan beasiswa belajar teknologi. lorem ipsum dolor sit amet consectetur adipisicing elit."
            button-text="Read More"
        />
        <ArtikelCard
            image-src="https://pepriandika.me/wp-content/uploads/2024/06/asset11-1024x768.png"
            title="Saya Memilih Berprofesi di Bidang IT Karena..."
            author="pepriandika"
            date="Juni 28, 2024"
            category="Story"
            description="Informasi lengkap mengenai syarat dan ketentuan beasiswa belajar teknologi. lorem ipsum dolor sit amet consectetur adipisicing elit."
            button-text="Read More"
        />
        <ArtikelCard
            image-src="https://pepriandika.me/wp-content/uploads/2024/06/asset11-1024x768.png"
            title="Saya Memilih Berprofesi di Bidang IT Karena..."
            author="pepriandika"
            date="Juni 28, 2024"
            category="Story"
            description="Informasi lengkap mengenai syarat dan ketentuan beasiswa belajar teknologi. lorem ipsum dolor sit amet consectetur adipisicing elit."
            button-text="Read More"
        />
      </v-col>
      <v-col cols="3">
        tes
      </v-col>
    </v-row>
    <button @click="navigateToAbout">Ke Halaman About</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import ArtikelCard from "@/components/ArtikelCard.vue"; // Import router hook

export default {
  components: {ArtikelCard},
  setup() {
    const router = useRouter();

    const navigateToAbout = () => {
      router.push('/about'); // Navigasi ke halaman lain
    };

    return {
      navigateToAbout,
    };
  },
};
</script>
