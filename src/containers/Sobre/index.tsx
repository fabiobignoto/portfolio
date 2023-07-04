import Paragraph from '../../components/Paragraph'
import Titulo from '../../components/Title'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ullam
      laborum ex perspiciatis enim, eligendi eos minima porro temporibus unde
      reiciendis adipisci voluptates nihil quam. Rem earum voluptas dolorum
      similique!
    </Paragraph>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=fabiobignoto&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=fabiobignoto&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
