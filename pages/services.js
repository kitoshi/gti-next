import VoiceListContent from '../components/content/voicelistcontent'
import Navbar from '../components/navbar'
import InternetListContent from '../components/content/internetlistcontent'
import DataListContent from '../components/content/datalistcontent'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <VoiceListContent />
        <InternetListContent />
        <DataListContent />
      </main>
    </>
  )
}
