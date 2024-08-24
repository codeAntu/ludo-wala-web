import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Wrap from '@/components/Wrap'
import React from 'react'

export default function CodeOfConduct() {
  return (
    <div>
      <Header />
      <div className='flex flex-col gap-20 px-5 pb-40 pt-16 sm:px-20 lg:gap-40'>
        <div className='prose-sm lg:prose-base mt-5'>
          <h1>Code of Conduct</h1>
          <h2>General Code of Conduct </h2>
          <p>
            All users of the Ludo app are expected to adhere to the following general guidelines across all game modes:
          </p>
          <ul className='list-decimal'>
            <li>
              {' '}
              Respect and Fair Play: Treat all players with respect and maintain a fair play attitude. Harassment,
              abusive language, or any form of discrimination is not tolerated.
            </li>
            <li>
              Integrity: Do not engage in cheating, exploiting bugs, or using third-party tools to gain an unfair
              advantage.
            </li>
            <li>
              Account Security: Protect your account credentials and do not share them with others. Report any
              suspicious activities immediately.
            </li>
            <li>
              Reporting Violations: Report any violations of the Code of Conduct through the app’s reporting features.
              All reports will be reviewed, and appropriate actions will be taken.
            </li>
          </ul>
          <h2>Classic Mode</h2>
          <ul className='list-disc pl-5'>
            <li>
              <strong>Objective:</strong> Play the traditional game of Ludo as intended, following the standard rules
              and regulations.
            </li>
            <li>
              <strong>Conduct:</strong> Adhere to the standard rules of Ludo. Any form of cheating or manipulation of
              game mechanics will result in penalties.
            </li>
            <li>
              <strong>Behavior:</strong> Engage in friendly competition and avoid disruptive behavior. Respect your
              opponents and play the game with sportsmanship.
            </li>
          </ul>

          <h2>Quick Mode</h2>
          <ul className='list-disc pl-5'>
            <li>
              <strong>Objective:</strong> Enjoy a faster-paced version of Ludo with quick matchups.
            </li>
            <li>
              <strong>Conduct:</strong> Follow the rules of Quick Mode as outlined in the app. Ensure that you are
              prepared to play promptly to maintain the flow of the game.
            </li>
            <li>
              <strong>Behavior:</strong> Be courteous and patient, especially if there are technical delays. Any form of
              disruptive behavior or intentional stalling will not be tolerated.
            </li>
          </ul>

          <h2>Challenge Mode</h2>
          <ul className='list-disc pl-5'>
            <li>
              <strong>Objective:</strong> Create and participate in user-generated challenges, allowing for personalized
              and creative gameplay.
            </li>
            <li>
              <strong>Conduct:</strong> Challenges must adhere to the app’s rules and should not include unfair or
              exploitative elements.
            </li>
            <li>
              <strong>Behavior:</strong> Engage in challenges respectfully and honor the terms of the challenge.
              Disputes should be resolved amicably, and any issues should be reported for review.
            </li>
          </ul>

          <h2>Tournament Mode (Special Emphasis)</h2>
          <ul className='list-disc pl-5'>
            <li>
              <strong>Objective:</strong> Compete in organized tournaments with structured rules and schedules.
            </li>
            <li>
              <strong>Conduct:</strong>
              <ul className='list-disc pl-5'>
                <li>
                  <strong>Registration:</strong> Ensure that all tournament entries are legitimate and comply with the
                  app’s registration requirements. Duplicate accounts or fraudulent registrations are prohibited.
                </li>
                <li>
                  <strong>Gameplay:</strong> Follow the specific rules and formats set for each tournament. Any form of
                  cheating, including using unauthorized software or devices, will result in immediate disqualification.
                </li>
                <li>
                  <strong>Behavior:</strong> Maintain professionalism and respect towards other participants,
                  organizers, and referees. Any form of unsportsmanlike conduct, including harassment or intimidation,
                  will lead to penalties.
                </li>
                <li>
                  <strong>Disputes:</strong> Report any disputes or issues to the tournament organizers promptly.
                  Provide accurate and honest information when resolving conflicts. Follow the decisions of the
                  organizers and referees.
                </li>
                <li>
                  <strong>Compliance:</strong> Adhere to all tournament schedules and deadlines. Failure to do so may
                  result in disqualification or forfeiture of rewards.
                </li>
                <li>
                  <strong>Rewards and Prizes:</strong> Only claim rewards and prizes through official channels. Any
                  attempt to exploit or manipulate the prize system will be dealt with severely.
                </li>
              </ul>
            </li>
          </ul>

          <h2>Enforcement</h2>
          <ul className='list-disc pl-5'>
            <li>
              <strong>Consequences:</strong> Violations of the Code of Conduct may result in penalties ranging from
              warnings to temporary or permanent suspension of accounts, depending on the severity of the offense.
            </li>
            <li>
              <strong>Appeals:</strong> Users may appeal any decisions made regarding their conduct by contacting
              customer support. Appeals will be reviewed, and final decisions will be communicated in a timely manner.
            </li>
          </ul>
          <p>
            By participating in any game mode, you agree to abide by this Code of Conduct. Let's work together to create
            a positive and enjoyable gaming experience for everyone.
          </p>
        </div>
        <Footer />
      </div>
    </div>
  )
}
