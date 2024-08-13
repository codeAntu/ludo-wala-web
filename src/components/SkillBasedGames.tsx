import Wrap from './Wrap'

const images = [
  './images/games/Brick Smash.png',
  './images/games/Call Break.png',
  './images/games/Carrom Freestyle.png',
  './images/games/Disc Football.png',
  './images/games/Fruit Fight.png',
  './images/games/Knife Master.png',
  './images/games/Pool Royale.png',
  './images/games/Quizzy.png',
  './images/games/Speed Ladders.png',
  './images/games/Speed Leedo.png',
  './images/games/Super Archery.png',
  './images/games/tez_ludo_logo.png',
]

export default function SkillBasedGames() {
  return (
    <Wrap>
      <p className='heading'>EXPERIENCE 15+</p>
      <p className='sub-heading'>Skill Based Games</p>
      <p className='body-content'>
        Download real money earning app & start playing 15+ skills based online games to earn money
      </p>
      <div className='flex flex-wrap w-full justify-center items-center mt-5 sm:mt-14'>
        {images.map((image, index) => (
          <div className='sm:w-1/5 w-1/3 sm:p-2 p-1' key={index}>
            <img key={index} src={image} alt='game' className='w-full h-full' />
          </div>
        ))}
      </div>
    </Wrap>
  )
}
