
import { useState } from 'react'
import './Programming.css'

const initialBlocks = [
  { id: 1, type: 'drive', value: 20 },
  { id: 2, type: 'turn', value: 90 },
  { id: 3, type: 'drive', value: 20 },
  { id: 4, type: 'stop', value: 0 }
]

const blockInfo = {
  drive: { label: 'Drive forward', icon: '⬆️', color: 'blue' },
  turn: { label: 'Turn right', icon: '↪️', color: 'purple' },
  repeat: { label: 'Repeat last action', icon: '🔁', color: 'orange' },
  condition: { label: 'IF distance is below', icon: '📡', color: 'pink' },
  color: { label: 'Read color sensor', icon: '🎨', color: 'green' },
  stop: { label: 'Stop motors', icon: '⏹️', color: 'red' }
}

const challenges = [
  {
    title: 'The First Drive',
    description: 'Program your robot to drive forward 30 cm and then stop.',
    goal: 'drive30',
    hint: 'Add a Drive Forward block and a Stop Motors block.'
  },
  {
    title: 'The Right Turn',
    description: 'Make your robot drive forward, turn 90 degrees and stop.',
    goal: 'turn90',
    hint: 'You need a drive block, a turn block and a stop block.'
  },
  {
    title: 'Sensor Intelligence',
    description: 'Create a program that checks the distance sensor and stops when an object is closer than 15 cm.',
    goal: 'sensor',
    hint: 'Use the IF Distance block and set its threshold to 15 cm.'
  }
]

export default function Programming() {
  const [blocks, setBlocks] = useState(initialBlocks)
  const [nextId, setNextId] = useState(5)
  const [sensorDistance, setSensorDistance] = useState(12)
  const [sensorColor, setSensorColor] = useState('red')
  const [motorSpeed, setMotorSpeed] = useState(50)
  const [robot, setRobot] = useState({
    x: 50,
    y: 80,
    heading: 0
  })
  const [logs, setLogs] = useState([])
  const [running, setRunning] = useState(false)
  const [activeTab, setActiveTab] = useState('builder')
  const [challengeIndex, setChallengeIndex] = useState(0)
  const [challengeMessage, setChallengeMessage] = useState('')

  function addBlock(type) {
    setBlocks(previous => [
      ...previous,
      {
        id: nextId,
        type,
        value: type === 'drive' ? 20 :
          type === 'turn' ? 90 :
          type === 'condition' ? 15 : 0
      }
    ])
    setNextId(previous => previous + 1)
  }

  function updateBlock(id, value) {
    setBlocks(previous =>
      previous.map(block =>
        block.id === id
          ? { ...block, value: Number(value) }
          : block
      )
    )
  }

  function removeBlock(id) {
    setBlocks(previous => previous.filter(block => block.id !== id))
  }

  function moveBlock(index, direction) {
    setBlocks(previous => {
      const updated = [...previous]
      const target = index + direction

      if (target < 0 || target >= updated.length) return previous

      ;[updated[index], updated[target]] =
        [updated[target], updated[index]]

      return updated
    })
  }

  function resetRobot() {
    setRobot({ x: 50, y: 80, heading: 0 })
    setLogs([])
    setRunning(false)
    setChallengeMessage('')
  }

  function runProgram() {
    if (running) return

    setRunning(true)

    let position = { x: 50, y: 80, heading: 0 }
    const messages = []
    let lastAction = null

    function drive(distance) {
      const radians = position.heading * Math.PI / 180

      position.x = Math.max(
        3,
        Math.min(97, position.x + Math.sin(radians) * distance * 0.35)
      )

      position.y = Math.max(
        3,
        Math.min(97, position.y - Math.cos(radians) * distance * 0.35)
      )

      messages.push(`Robot drove forward ${distance} cm.`)
    }

    function turn(degrees) {
      position.heading = (position.heading + degrees) % 360
      messages.push(`Robot turned ${degrees} degrees.`)
    }

    function execute(block) {
      switch (block.type) {
        case 'drive':
          drive(block.value)
          lastAction = { ...block }
          break

        case 'turn':
          turn(block.value)
          lastAction = { ...block }
          break

        case 'repeat':
          if (lastAction) {
            for (let i = 0; i < 2; i++) {
              if (lastAction.type === 'drive') {
                drive(lastAction.value)
              } else if (lastAction.type === 'turn') {
                turn(lastAction.value)
              }
            }
            messages.push('Repeated the previous action twice.')
          } else {
            messages.push('Repeat skipped: no previous action.')
          }
          break

        case 'condition':
          if (sensorDistance < block.value) {
            messages.push(
              `Distance ${sensorDistance} cm is below ${block.value} cm. Condition TRUE: motors stopped.`
            )
          } else {
            drive(10)
            messages.push(
              `Distance ${sensorDistance} cm is not below ${block.value} cm. Condition FALSE: moving forward.`
            )
          }
          break

        case 'color':
          messages.push(`Color sensor detected ${sensorColor}.`)
          break

        case 'stop':
          messages.push('Both drive motors stopped.')
          break

        default:
          break
      }
    }

    blocks.forEach(execute)

    setRobot(position)
    setLogs(messages)
    setRunning(false)

    const challenge = challenges[challengeIndex]
    let success = false

    if (challenge.goal === 'drive30') {
      success = blocks.some(b => b.type === 'drive' && b.value === 30) &&
        blocks.some(b => b.type === 'stop')
    }

    if (challenge.goal === 'turn90') {
      success = blocks.some(b => b.type === 'turn' && b.value === 90) &&
        blocks.some(b => b.type === 'drive') &&
        blocks.some(b => b.type === 'stop')
    }

    if (challenge.goal === 'sensor') {
      success = blocks.some(b => b.type === 'condition' && b.value === 15) &&
        blocks.some(b => b.type === 'stop')
    }

    setChallengeMessage(
      success
        ? 'Challenge completed! Excellent programming.'
        : 'Program executed! Keep experimenting to complete the challenge.'
    )
  }

  function loadChallenge(index) {
    setChallengeIndex(index)
    setChallengeMessage('')
    setLogs([])
  }

  return (
    <main className="programming">

      <section className="program-hero">
        <div className="program-hero-content">
          <span className="program-eyebrow">
            BEYOND THE BRICKS / INTERACTIVE LAB
          </span>

          <h1>
            Think in code.
            <br />
            <span>Build with logic.</span>
          </h1>

          <p>
            Learn robotics programming by creating instructions,
            experimenting with sensors and controlling a virtual robot.
          </p>

          <button
            className="program-hero-button"
            onClick={() => {
              document.getElementById('program-workspace')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Enter programming lab →
          </button>
        </div>

        <div className="program-hero-visual">
          <div className="program-visual-circle">
            <span>01</span>
            <strong>{'{ }'}</strong>
            <small>ROBOT LOGIC</small>
          </div>
          <div className="program-floating floating-one">⚙️</div>
          <div className="program-floating floating-two">🤖</div>
          <div className="program-floating floating-three">💻</div>
        </div>
      </section>

      <section className="program-intro">
        <div>
          <span>LEARN BY BUILDING</span>
          <h2>Programming is a skill you practice.</h2>
          <p>
            Explore programming concepts, build your own instruction
            sequence and see how a virtual robot responds.
          </p>
        </div>

        <div className="program-concepts">
          <div><strong>01</strong><span>Sequences</span></div>
          <div><strong>02</strong><span>Loops</span></div>
          <div><strong>03</strong><span>Conditions</span></div>
          <div><strong>04</strong><span>Sensors</span></div>
        </div>
      </section>

      <section className="program-workspace-section" id="program-workspace">

        <div className="program-section-heading">
          <span>YOUR VIRTUAL ROBOTICS LAB</span>
          <h2>Build your first program.</h2>
          <p>
            Add programming blocks, arrange your instructions,
            adjust sensor readings and run your robot.
          </p>
        </div>

        <div className="program-tabs">
          <button
            className={activeTab === 'builder' ? 'active' : ''}
            onClick={() => setActiveTab('builder')}
          >
            <span>⌨️</span> Program Builder
          </button>

          <button
            className={activeTab === 'sensors' ? 'active' : ''}
            onClick={() => setActiveTab('sensors')}
          >
            <span>📡</span> Sensor Lab
          </button>

          <button
            className={activeTab === 'challenges' ? 'active' : ''}
            onClick={() => setActiveTab('challenges')}
          >
            <span>🎯</span> Challenges
          </button>
        </div>

        {activeTab === 'builder' && (
          <div className="program-builder">

            <div className="program-toolbox">
              <div className="program-panel-heading">
                <span>BLOCK LIBRARY</span>
                <small>Click to add</small>
              </div>

              <p className="program-toolbox-description">
                Select an instruction to add it to your program.
              </p>

              {Object.entries(blockInfo).map(([type, info]) => (
                <button
                  key={type}
                  className={`program-tool ${info.color}`}
                  onClick={() => addBlock(type)}
                >
                  <span>{info.icon}</span>
                  <strong>{info.label}</strong>
                  <small>+</small>
                </button>
              ))}

              <div className="program-tip">
                <strong>ENGINEERING TIP</strong>
                <p>
                  Instructions execute from top to bottom.
                  Their order changes how your robot behaves.
                </p>
              </div>
            </div>

            <div className="program-editor">
              <div className="program-panel-heading">
                <span>YOUR PROGRAM</span>
                <small>{blocks.length} instructions</small>
              </div>

              <div className="program-start">▶ START PROGRAM</div>

              <div className="program-block-list">
                {blocks.length === 0 && (
                  <div className="program-empty">
                    Your program is empty. Add a block from the library.
                  </div>
                )}

                {blocks.map((block, index) => {
                  const info = blockInfo[block.type]

                  return (
                    <div
                      key={block.id}
                      className={`program-code-block ${info.color}`}
                    >
                      <div className="program-block-icon">
                        {info.icon}
                      </div>

                      <div className="program-block-content">
                        <strong>{info.label}</strong>

                        {(block.type === 'drive' ||
                          block.type === 'turn' ||
                          block.type === 'condition') && (
                          <label>
                            {block.type === 'drive'
                              ? 'Distance (cm)'
                              : block.type === 'turn'
                                ? 'Degrees'
                                : 'Threshold (cm)'}

                            <input
                              type="number"
                              min="0"
                              max={block.type === 'drive' ? 200 : 360}
                              value={block.value}
                              onChange={event =>
                                updateBlock(block.id, event.target.value)
                              }
                            />
                          </label>
                        )}
                      </div>

                      <div className="program-block-actions">
                        <button
                          title="Move up"
                          disabled={index === 0}
                          onClick={() => moveBlock(index, -1)}
                        >↑</button>

                        <button
                          title="Move down"
                          disabled={index === blocks.length - 1}
                          onClick={() => moveBlock(index, 1)}
                        >↓</button>

                        <button
                          title="Remove block"
                          onClick={() => removeBlock(block.id)}
                        >×</button>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="program-end">■ END PROGRAM</div>

              <div className="program-editor-actions">
                <button onClick={() => setBlocks([])}>
                  Clear program
                </button>

                <button
                  className="program-run-button"
                  onClick={runProgram}
                  disabled={running || blocks.length === 0}
                >
                  ▶ Run program
                </button>
              </div>
            </div>

            <div className="program-simulator">
              <div className="program-panel-heading">
                <span>ROBOT SIMULATOR</span>
                <small>LIVE ENVIRONMENT</small>
              </div>

              <div className="robot-field">
                <div className="robot-grid" />

                <div
                  className="virtual-robot"
                  style={{
                    left: `${robot.x}%`,
                    top: `${robot.y}%`,
                    transform: `translate(-50%, -50%) rotate(${robot.heading}deg)`
                  }}
                >
                  <span>▲</span>
                </div>

                <div className="robot-field-label">
                  SIMULATED FIELD
                </div>
              </div>

              <div className="robot-stats">
                <div>
                  <span>POSITION X</span>
                  <strong>{robot.x.toFixed(1)}</strong>
                </div>
                <div>
                  <span>POSITION Y</span>
                  <strong>{robot.y.toFixed(1)}</strong>
                </div>
                <div>
                  <span>HEADING</span>
                  <strong>{robot.heading}°</strong>
                </div>
              </div>

              <button
                className="robot-reset-button"
                onClick={resetRobot}
              >
                ↻ Reset robot
              </button>

              <div className="program-console">
                <strong>PROGRAM OUTPUT</strong>

                {logs.length === 0 ? (
                  <p>Your robot's execution log will appear here.</p>
                ) : (
                  logs.map((log, index) => (
                    <p key={index}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      {log}
                    </p>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'sensors' && (
          <div className="sensor-lab">
            <div className="sensor-lab-heading">
              <span>EXPERIMENT 01</span>
              <h3>Explore robot sensors.</h3>
              <p>
                Change the environment and observe how sensor
                readings can influence a robot's decisions.
              </p>
            </div>

            <div className="sensor-experiments">

              <div className="sensor-card">
                <div className="sensor-card-icon">📏</div>
                <h3>Distance sensor</h3>
                <p>
                  Simulate an object at different distances from
                  your robot.
                </p>

                <div className="sensor-reading">
                  <span>DETECTED DISTANCE</span>
                  <strong>{sensorDistance} cm</strong>
                </div>

                <label className="sensor-slider-label">
                  Move the object
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={sensorDistance}
                    onChange={event =>
                      setSensorDistance(Number(event.target.value))
                    }
                  />
                </label>

                <div className={`sensor-status ${
                  sensorDistance < 15 ? 'warning' : 'safe'
                }`}>
                  {sensorDistance < 15
                    ? 'Object is very close!'
                    : 'Object detected at a safe distance.'}
                </div>

                <small>
                  Example threshold: 15 cm. This is a simulated
                  sensor reading, not a physical measurement.
                </small>
              </div>

              <div className="sensor-card">
                <div className="sensor-card-icon">🎨</div>
                <h3>Color sensor</h3>
                <p>
                  Change the surface color and observe the simulated
                  color sensor output.
                </p>

                <div
                  className="sensor-color-display"
                  style={{
                    background: sensorColor
                  }}
                >
                  <span>{sensorColor.toUpperCase()}</span>
                </div>

                <label className="sensor-select-label">
                  Surface color
                  <select
                    value={sensorColor}
                    onChange={event => setSensorColor(event.target.value)}
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                    <option value="white">White</option>
                  </select>
                </label>

                <div className="sensor-status safe">
                  Detected color: {sensorColor}
                </div>

                <small>
                  Illustrative color detection. Real sensors may
                  also measure reflected light.
                </small>
              </div>
            </div>

            <div className="sensor-explanation">
              <strong>WHY DOES THIS MATTER?</strong>
              <p>
                Sensors allow robots to respond to changing
                environments. A distance sensor can help a robot
                avoid an object, while a color sensor can help
                it identify a particular surface.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="program-challenges">
            <div className="challenge-heading">
              <span>TEST YOUR PROGRAMMING SKILLS</span>
              <h3>Can you complete the mission?</h3>
              <p>
                Choose a challenge, build the required program
                and run it in the simulator.
              </p>
            </div>

            <div className="challenge-list">
              {challenges.map((challenge, index) => (
                <button
                  key={challenge.title}
                  className={`challenge-card ${
                    challengeIndex === index ? 'selected' : ''
                  }`}
                  onClick={() => loadChallenge(index)}
                >
                  <span>CHALLENGE 0{index + 1}</span>
                  <h4>{challenge.title}</h4>
                  <p>{challenge.description}</p>
                  <small>
                    {challengeIndex === index
                      ? 'Currently selected ✓'
                      : 'Select challenge →'}
                  </small>
                </button>
              ))}
            </div>

            <div className="challenge-active">
              <span>YOUR CURRENT MISSION</span>
              <h3>{challenges[challengeIndex].title}</h3>
              <p>{challenges[challengeIndex].description}</p>

              <div className="challenge-hint">
                <strong>HINT</strong>
                <p>{challenges[challengeIndex].hint}</p>
              </div>

              {challengeMessage && (
                <div className={`challenge-result ${
                  challengeMessage.startsWith('Challenge completed')
                    ? 'success'
                    : ''
                }`}>
                  {challengeMessage}
                </div>
              )}

              <button
                onClick={() => {
                  setActiveTab('builder')
                  setChallengeMessage('')
                }}
              >
                Build my solution →
              </button>
            </div>
          </div>
        )}
      </section>

      <section className="program-bottom">
        <span>EVERY GREAT ROBOT STARTS WITH AN IDEA.</span>
        <h2>Learn the logic. Build the machine.</h2>
        <p>
          Your next breakthrough begins with your next line of code.
        </p>
      </section>

    </main>
  )
}
