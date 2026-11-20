
import { useEffect, useMemo, useState } from 'react'
import './Academy.css'

const lessons = [
  {
    id: 1,
    title: 'What Makes a Robot Work?',
    subtitle: 'Understanding the systems inside a robot',
    duration: '15 min',
    level: 'Beginner',
    objectives: [
      'Identify the major components of an FLL robot.',
      'Explain how hardware and software work together.',
      'Understand the input-process-output cycle.',
      'Describe how engineers approach robot design.'
    ],
    sections: [
      {
        heading: '1. What exactly is a robot?',
        content: 'A robot is a programmable machine that senses information, processes instructions and performs physical actions. Unlike a simple machine that performs one fixed task, a programmable robot can respond to different situations based on its code and sensor readings.',
        bullets: [
          'It has a physical structure that supports its components.',
          'It uses electrical or mechanical systems to perform actions.',
          'It follows instructions created by a programmer.',
          'It can use sensors to respond to its environment.'
        ]
      },
      {
        heading: '2. The five major robot systems',
        content: 'An FLL robot is made of several interconnected systems. Each has a different responsibility, but none works independently.',
        bullets: [
          'Controller: The programmable hub that runs your program and coordinates the robot.',
          'Motors: Convert electrical energy into mechanical motion.',
          'Sensors: Collect information such as distance, color, force or orientation.',
          'Mechanical structure: Includes the chassis, wheels, axles, gears and attachments.',
          'Software: The instructions that control movement, decisions and timing.'
        ]
      },
      {
        heading: '3. Hardware versus software',
        content: 'Hardware refers to the physical parts of a robot. Software refers to the instructions that tell those parts what to do. Imagine building a robotic arm. The arm, gears, motor and controller are hardware. The program that tells the motor when to lift and lower the arm is software.',
        bullets: [
          'Hardware makes physical actions possible.',
          'Software determines when and how those actions happen.',
          'A well-designed robot needs both reliable hardware and reliable software.'
        ]
      },
      {
        heading: '4. The input-process-output cycle',
        content: 'Robots interact with their environment through a cycle called input-process-output. First, the robot collects information. Next, its controller processes that information using programmed instructions. Finally, the robot performs an action.',
        bullets: [
          'INPUT: A distance sensor detects an object.',
          'PROCESS: The program compares the reading with a target distance.',
          'OUTPUT: The controller commands the motors to stop.'
        ]
      },
      {
        heading: '5. Understanding the robot chassis',
        content: 'The chassis is the main supporting frame of a robot. It holds the controller, motors, wheels and attachments together. A strong chassis helps keep components aligned and reduces unwanted movement. A poorly constructed chassis can introduce friction, instability and inconsistent movement.',
        bullets: [
          'Keep the frame rigid and securely connected.',
          'Make sure wheels and axles are properly aligned.',
          'Avoid unnecessary weight and complicated structures.',
          'Leave room for attachments and easy maintenance.'
        ]
      },
      {
        heading: '6. Applying this to the FLL Robot Game',
        content: 'In FLL, your robot must complete missions on a competition table. Every successful mission depends on multiple systems working together. For example, a robot might use its drivetrain to approach a mission model, a sensor to determine its position and a motorized attachment to interact with the model.',
        bullets: [
          'Mechanical design determines what the robot can physically accomplish.',
          'Programming determines the sequence and timing of actions.',
          'Sensors can help improve consistency.',
          'Testing reveals weaknesses in the complete system.'
        ]
      }
    ],
    concept: 'A robot is an integrated system of mechanical components, electronics, sensors and software.',
    example: 'Imagine your robot approaching a mission model. Its distance sensor detects the model, the controller processes the reading, and the drivetrain stops at the programmed distance.',
    activity: 'Draw a labeled diagram of an FLL robot. Identify the controller, motors, sensors, drivetrain and one attachment. Use arrows to show how information and movement flow between the components.',
    vocabulary: [
      ['Controller', 'The computer or hub that executes the robot program.'],
      ['Actuator', 'A component that produces physical movement, such as a motor.'],
      ['Sensor', 'A device that measures information about the environment.'],
      ['Chassis', 'The main supporting frame of a robot.']
    ],
    quiz: [
      {
        question: 'A robot detects an object using a distance sensor. What role does the sensor play?',
        options: ['Output', 'Input', 'Mechanical structure', 'Power supply'],
        answer: 1,
        explanation: 'The sensor collects information from the environment. This information becomes an input to the robot program.'
      },
      {
        question: 'Which of the following is an example of software?',
        options: ['A LEGO wheel', 'A motor', 'A program that controls a motor', 'An axle'],
        answer: 2,
        explanation: 'Software consists of instructions that tell hardware what to do. A motor-control program is software.'
      },
      {
        question: 'What is the main purpose of a robot chassis?',
        options: [
          'To store all the program instructions',
          'To support and connect the robot components',
          'To measure distance',
          'To generate electricity'
        ],
        answer: 1,
        explanation: 'The chassis is the robot frame. It supports components and helps maintain their alignment.'
      }
    ]
  },
  {
    id: 2,
    title: 'Motors and Movement',
    subtitle: 'How robots turn electrical energy into motion',
    duration: '18 min',
    level: 'Beginner',
    objectives: [
      'Explain how electric motors produce movement.',
      'Understand motor speed and RPM.',
      'Distinguish between speed and torque.',
      'Recognize the importance of motor control.'
    ],
    sections: [
      {
        heading: '1. What does an electric motor do?',
        content: 'An electric motor converts electrical energy into mechanical energy. Inside a motor, electrical current interacts with magnetic fields to produce rotational motion. In an FLL robot, motors can power the drivetrain, operate lifting arms, rotate attachments and move other mechanisms.',
        bullets: [
          'A motor receives electrical energy from the robot system.',
          'Magnetic interactions create rotational movement.',
          'The rotating shaft can transfer movement to wheels or mechanisms.'
        ]
      },
      {
        heading: '2. Understanding motor speed',
        content: 'Motor speed describes how quickly a motor rotates. It is commonly measured in rotations per minute, abbreviated RPM. A motor rotating at 100 RPM completes 100 full rotations in one minute.',
        bullets: [
          'Higher RPM means faster rotation.',
          'Lower RPM means slower rotation.',
          'Actual speed can change depending on the load and mechanical setup.'
        ]
      },
      {
        heading: '3. Understanding torque',
        content: 'Torque describes the turning effect produced by a force. It is what allows a motor to rotate a wheel, lift an arm or turn a mechanism against resistance. A mechanism carrying a heavier load generally requires more torque.',
        bullets: [
          'Torque is measured in newton-meters (N·m).',
          'A lifting arm needs sufficient torque to raise its load.',
          'A mechanism with insufficient torque may struggle or stall.'
        ]
      },
      {
        heading: '4. Speed versus torque',
        content: 'Speed and torque are important but different characteristics. A fast mechanism rotates quickly, while a high-torque mechanism can produce a greater turning effect. Gear systems can change the balance between output speed and torque.',
        bullets: [
          'High speed is useful when a mechanism needs quick movement.',
          'High torque is useful when a mechanism must overcome resistance.',
          'Mechanical advantage often trades output speed for output torque.'
        ]
      },
      {
        heading: '5. Motor loading and performance',
        content: 'A motor does not always rotate at its advertised or unloaded speed. When a mechanism encounters resistance, the motor must produce more torque. Depending on the motor and its operating conditions, its speed may decrease. Engineers test mechanisms under realistic loads instead of assuming the motor will perform identically in every situation.',
        bullets: [
          'A heavier attachment can increase motor loading.',
          'Friction can reduce mechanical efficiency.',
          'Poor alignment can make a mechanism harder to move.',
          'Testing helps identify whether a motor or mechanism is struggling.'
        ]
      },
      {
        heading: '6. Applying motor knowledge to FLL',
        content: 'Consider a robot with two drive motors and one motorized attachment. The drive motors move the robot across the table, while the attachment motor operates a mechanism. These motors may need different speeds and mechanical setups because they perform different jobs.',
        bullets: [
          'Drivetrain motors need predictable movement.',
          'An attachment motor may need more torque.',
          'Motor synchronization can help a robot move straight.',
          'Controlled acceleration and stopping can improve repeatability.'
        ]
      }
    ],
    concept: 'Motor speed describes how quickly a motor rotates. Torque describes its turning effect.',
    example: 'A robot uses a motor to lift a mission attachment. If the arm struggles under its load, engineers might examine the gear ratio, friction, attachment weight and motor loading.',
    activity: 'Identify three mechanisms your team could build. Decide which needs high torque and which needs high speed. Explain your choices and identify what could happen if the motor is undersized.',
    vocabulary: [
      ['RPM', 'Rotations per minute; a measure of rotational speed.'],
      ['Torque', 'The turning effect of a force.'],
      ['Load', 'The resistance or demand placed on a motor or mechanism.'],
      ['Stall', 'A condition where a motor cannot continue rotating under its load.']
    ],
    quiz: [
      {
        question: 'Which mechanism would most likely benefit from a high-torque setup?',
        options: [
          'A lightweight decoration spinning freely',
          'A lifting arm carrying a heavy attachment',
          'A wheel spinning without a load',
          'A small indicator rotating slowly'
        ],
        answer: 1,
        explanation: 'A lifting arm must overcome the resistance created by its load. More available torque can help it lift successfully.'
      },
      {
        question: 'What does RPM measure?',
        options: [
          'Electrical voltage',
          'Rotations per minute',
          'Mechanical friction',
          'Robot weight'
        ],
        answer: 1,
        explanation: 'RPM measures how many complete rotations a motor makes in one minute.'
      },
      {
        question: 'What can happen when a motor experiences a larger mechanical load?',
        options: [
          'Its speed may decrease',
          'Its torque becomes irrelevant',
          'It automatically becomes more efficient',
          'Its wheel diameter increases'
        ],
        answer: 0,
        explanation: 'A greater load demands more torque. Depending on the motor and operating conditions, rotational speed may decrease.'
      }
    ]
  },
  {
    id: 3,
    title: 'Gear Ratios and Mechanical Advantage',
    subtitle: 'Designing mechanisms for speed and strength',
    duration: '20 min',
    level: 'Beginner to Intermediate',
    objectives: [
      'Identify driving and driven gears.',
      'Calculate simple gear ratios.',
      'Predict output speed and torque.',
      'Select gear setups for different mechanisms.'
    ],
    sections: [
      {
        heading: '1. How gears transfer motion',
        content: 'Gears are rotating mechanical components with teeth that mesh together. When one gear rotates, its teeth push against another gear, transferring rotational motion. Two directly meshing external gears rotate in opposite directions.',
        bullets: [
          'Gear teeth help transfer rotational motion.',
          'The gears must mesh correctly.',
          'Gear size and tooth count affect the relationship between input and output rotation.'
        ]
      },
      {
        heading: '2. Driving versus driven gears',
        content: 'The driving gear receives motion from the motor or input shaft. The driven gear receives motion from the driving gear. The number of teeth on each gear determines their rotational speed relationship.',
        bullets: [
          'Driving gear: Provides the input motion.',
          'Driven gear: Receives the transferred motion.',
          'A larger driven gear rotates more slowly than a smaller driving gear.'
        ]
      },
      {
        heading: '3. Calculating a gear ratio',
        content: 'A simple gear ratio can be calculated by dividing the number of teeth on the driven gear by the number of teeth on the driving gear.',
        bullets: [
          'Gear ratio = Driven gear teeth ÷ Driving gear teeth.',
          'A 12-tooth driving gear and 36-tooth driven gear produce a 3:1 reduction.',
          'A 20-tooth driving gear and 10-tooth driven gear produce a 0.5:1 ratio, increasing output speed.'
        ]
      },
      {
        heading: '4. What does a 3:1 reduction mean?',
        content: 'In an ideal 3:1 reduction, the driving gear rotates three times for every one rotation of the driven gear. Output speed becomes one-third of input speed. Ideally, output torque becomes three times as large, although real systems experience friction and mechanical losses.',
        bullets: [
          'Input speed: 300 RPM.',
          'Gear reduction: 3:1.',
          'Ideal output speed: 100 RPM.',
          'Ideal torque multiplier: 3×.'
        ]
      },
      {
        heading: '5. Gear reduction versus gear increase',
        content: 'A gear reduction decreases output speed and increases ideal output torque. A gear increase does the opposite: it increases output speed while reducing ideal output torque. Neither is automatically better. The correct design depends on the mechanism.',
        bullets: [
          'Reduction: Useful for lifting arms and mechanisms that need more torque.',
          'Increase: Useful when higher rotational speed is needed.',
          'Direct drive: Useful when the motor speed and torque are already suitable.'
        ]
      },
      {
        heading: '6. Gear systems in FLL',
        content: 'Gear systems can help your robot operate attachments and drivetrains. For example, a lifting arm might use a gear reduction to improve its ability to raise an attachment. A fast rotating mechanism might use a different ratio.',
        bullets: [
          'Check that gears are properly aligned.',
          'Avoid unnecessary friction between connected components.',
          'Make sure gear teeth remain securely engaged.',
          'Test the mechanism under its actual load.'
        ]
      }
    ],
    concept: 'A gear ratio changes the relationship between rotational speed and torque.',
    example: 'A 12-tooth driving gear turns a 36-tooth driven gear. The ratio is 36 ÷ 12 = 3:1. At an input speed of 300 RPM, the ideal output speed is 100 RPM.',
    activity: 'Use the gear simulator below. Test at least three gear combinations. Record the ratio, output speed and ideal torque multiplier. Decide which setup would be best for a lifting mechanism.',
    simulation: 'gears',
    vocabulary: [
      ['Driving gear', 'The gear receiving the input motion.'],
      ['Driven gear', 'The gear receiving motion from another gear.'],
      ['Gear reduction', 'A setup that decreases output speed and increases ideal output torque.'],
      ['Mechanical advantage', 'A measure of how a mechanism multiplies an applied force or torque.']
    ],
    quiz: [
      {
        question: 'A 10-tooth driving gear turns a 30-tooth driven gear. What is the ideal output speed?',
        options: [
          'Three times the input speed',
          'The same as the input speed',
          'One-third of the input speed',
          'Thirty times the input speed'
        ],
        answer: 2,
        explanation: 'The ratio is 30 ÷ 10 = 3:1. The driven gear rotates at one-third the input speed.'
      },
      {
        question: 'Which gear setup increases ideal output torque?',
        options: [
          'A smaller driven gear',
          'A larger driven gear',
          'Removing the driven gear',
          'Using two unrelated gears'
        ],
        answer: 1,
        explanation: 'A larger driven gear creates a reduction. This decreases output speed while increasing ideal output torque.'
      },
      {
        question: 'A 20-tooth driving gear turns a 10-tooth driven gear. What happens?',
        options: [
          'Output speed doubles',
          'Output speed is halved',
          'Output speed stays identical',
          'The gears cannot transfer motion'
        ],
        answer: 0,
        explanation: 'The ratio is 10 ÷ 20 = 0.5. The driven gear rotates twice as fast as the driving gear in the ideal model.'
      }
    ]
  },
  {
    id: 4,
    title: 'Wheels, Traction and Drivetrains',
    subtitle: 'Building a robot that moves reliably',
    duration: '22 min',
    level: 'Intermediate',
    objectives: [
      'Understand the purpose of a drivetrain.',
      'Calculate wheel circumference and distance.',
      'Explain traction and wheel slipping.',
      'Understand center of mass and stability.',
      'Identify factors affecting robot movement.'
    ],
    sections: [
      {
        heading: '1. What is a drivetrain?',
        content: 'A drivetrain is the mechanical system responsible for moving a robot. It commonly includes motors, axles, wheels, gears and the supporting chassis. The drivetrain determines how the robot travels, turns and interacts with the playing surface.',
        bullets: [
          'Motors provide rotational input.',
          'Gears and axles transfer motion.',
          'Wheels convert rotational motion into linear movement.',
          'The chassis supports the drivetrain components.'
        ]
      },
      {
        heading: '2. Wheel circumference',
        content: 'When a wheel completes one full rotation without slipping, the robot travels approximately one wheel circumference. Circumference is calculated using C = π × d, where d is the wheel diameter.',
        bullets: [
          'A 56 mm wheel has a circumference of approximately 175.9 mm.',
          'Five rotations cover approximately 879.6 mm.',
          'A larger wheel travels farther per rotation than a smaller wheel.'
        ]
      },
      {
        heading: '3. Traction and slipping',
        content: 'Traction is the grip between the wheel and the surface. When a wheel spins without producing the expected movement, it is slipping. Slipping makes it difficult to predict how far a robot will travel.',
        bullets: [
          'Wheel material affects grip.',
          'The weight distribution affects how much force presses the wheels against the surface.',
          'Surface conditions can change traction.',
          'Excessive acceleration can sometimes cause slipping.'
        ]
      },
      {
        heading: '4. Center of mass and stability',
        content: 'The center of mass is the point where the mass of an object can be considered concentrated. Its position influences how stable a robot is. A robot carrying a heavy attachment may become less stable if the attachment shifts its center of mass too far from the supporting wheels.',
        bullets: [
          'Keep heavy components securely mounted.',
          'Consider how attachments change the robot balance.',
          'A stable robot is less likely to tip during movement.',
          'Test stability with attachments installed.'
        ]
      },
      {
        heading: '5. Why robots turn differently',
        content: 'A differential-drive robot commonly uses two independently controlled drive wheels. By changing the relative speeds and directions of the wheels, the robot can move forward, reverse or turn. Small differences in wheel speed, traction and alignment can affect the final heading.',
        bullets: [
          'Equal wheel speeds in the same direction produce straight movement.',
          'Different wheel speeds create a curved path.',
          'Opposite wheel directions can create a turn around the robot center.',
          'A gyro sensor can help measure and correct heading.'
        ]
      },
      {
        heading: '6. Building a consistent drivetrain',
        content: 'A good drivetrain should move predictably across repeated runs. Consistency depends on more than motor power. Mechanical alignment, wheel condition, traction, weight distribution and programming all influence the result.',
        bullets: [
          'Check that wheels are aligned.',
          'Secure axles and structural connections.',
          'Avoid unnecessary friction.',
          'Test on the actual competition surface.',
          'Record repeated runs and compare results.'
        ]
      }
    ],
    concept: 'Drivetrain performance depends on wheel geometry, traction, mechanical alignment and control.',
    example: 'A 56 mm diameter wheel has a circumference of π × 56, or about 175.9 mm. If it completes five rotations without slipping, it travels about 879.6 mm.',
    activity: 'Use the wheel simulator to compare different wheel diameters. Calculate the distance traveled over five rotations. Then explain how slipping could make the real result different.',
    simulation: 'wheels',
    vocabulary: [
      ['Drivetrain', 'The system that moves a robot.'],
      ['Circumference', 'The distance around a circle.'],
      ['Traction', 'The grip between a wheel and a surface.'],
      ['Center of mass', 'The point representing the average position of an object’s mass.'],
      ['Differential drive', 'A drivetrain that steers by controlling two drive wheels independently.']
    ],
    quiz: [
      {
        question: 'What happens when a robot uses a larger wheel with the same number of rotations and no slipping?',
        options: [
          'It travels a greater distance',
          'It travels a shorter distance',
          'Its circumference decreases',
          'It cannot turn'
        ],
        answer: 0,
        explanation: 'A larger wheel has a greater circumference, so each rotation covers more distance.'
      },
      {
        question: 'What is traction?',
        options: [
          'The electrical power of a motor',
          'The grip between a wheel and a surface',
          'The weight of the controller',
          'The number of motor rotations'
        ],
        answer: 1,
        explanation: 'Traction describes how effectively the wheel grips the surface instead of slipping.'
      },
      {
        question: 'Why does center of mass matter?',
        options: [
          'It determines the color of the robot',
          'It affects balance and stability',
          'It controls the program directly',
          'It measures motor RPM'
        ],
        answer: 1,
        explanation: 'The location of the center of mass affects the robot’s balance, especially when turning or carrying attachments.'
      }
    ]
  },
  {
    id: 5,
    title: 'Sensors and Feedback Systems',
    subtitle: 'Helping robots understand their environment',
    duration: '22 min',
    level: 'Intermediate',
    objectives: [
      'Explain the role of sensors.',
      'Identify common robotics sensors.',
      'Understand open-loop and closed-loop control.',
      'Explain sensor limitations.',
      'Understand feedback-based corrections.'
    ],
    sections: [
      {
        heading: '1. What is a sensor?',
        content: 'A sensor is a device that measures information about a robot or its environment. Sensor readings allow a program to respond to conditions instead of relying entirely on a predetermined sequence of movements.',
        bullets: [
          'Sensors provide information to the controller.',
          'The program interprets sensor readings.',
          'The controller can use those readings to make decisions.'
        ]
      },
      {
        heading: '2. Common FLL sensors',
        content: 'Robotics systems use different sensors for different purposes. Understanding what each sensor measures helps engineers select the correct tool for a particular problem.',
        bullets: [
          'Color sensor: Detects colors or reflected light from a surface.',
          'Distance sensor: Estimates the distance to an object.',
          'Force sensor: Detects physical contact or applied pressure.',
          'Gyro sensor: Measures angular movement and orientation.'
        ]
      },
      {
        heading: '3. Open-loop control',
        content: 'Open-loop control performs an action without measuring whether the intended result actually occurred. For example, a robot might be programmed to drive forward for two seconds and then turn. The program does not automatically verify whether the robot reached the intended position.',
        bullets: [
          'The program sends commands.',
          'The robot performs the requested action.',
          'The program does not use feedback to verify the result.'
        ]
      },
      {
        heading: '4. Closed-loop control',
        content: 'Closed-loop control uses feedback to compare the actual result with the desired result. The system can then adjust its behavior to reduce the difference between them. This is especially useful when mechanical variation or environmental conditions affect movement.',
        bullets: [
          'Set a target value.',
          'Measure the current result using a sensor.',
          'Compare the measured value with the target.',
          'Adjust the robot behavior when necessary.'
        ]
      },
      {
        heading: '5. Understanding sensor limitations',
        content: 'Sensor readings are measurements, not perfect representations of reality. Lighting, surface color, distance, angles, electrical noise and environmental conditions can influence readings. Engineers should test sensors under the conditions in which the robot will actually operate.',
        bullets: [
          'Test color sensors on different surfaces.',
          'Check distance measurements at different angles.',
          'Repeat tests instead of trusting a single reading.',
          'Consider whether a reading is stable enough to use in a decision.'
        ]
      },
      {
        heading: '6. Applying feedback to the FLL Robot Game',
        content: 'Imagine a robot that needs to turn exactly 90 degrees. Instead of relying only on a timed motor command, the program can use a gyro measurement to monitor the robot heading. It can stop the turn when the measured angle reaches the target.',
        bullets: [
          'The desired heading is 90 degrees.',
          'The gyro reports the current heading.',
          'The program compares the reading with the target.',
          'The motor command changes as the robot approaches the target.'
        ]
      }
    ],
    concept: 'Closed-loop control uses measured feedback to reduce the difference between actual and desired behavior.',
    example: 'A robot needs to turn 90 degrees. Its gyro reports 82 degrees, so the program continues turning. When the measurement reaches the target, the program stops the turn.',
    activity: 'Design a sensor-based program for a robot that approaches an object and stops at a chosen distance. Identify the input, target, decision and output.',
    vocabulary: [
      ['Sensor', 'A device that measures information.'],
      ['Feedback', 'Information about the actual result of an action.'],
      ['Setpoint', 'The desired target value of a control system.'],
      ['Open-loop control', 'Control without measuring the result to make corrections.'],
      ['Closed-loop control', 'Control that uses feedback to adjust behavior.']
    ],
    quiz: [
      {
        question: 'What is the main advantage of closed-loop control?',
        options: [
          'It never needs sensors',
          'It always uses less electricity',
          'It can use feedback to correct its behavior',
          'It eliminates all mechanical errors'
        ],
        answer: 2,
        explanation: 'Closed-loop control measures the actual result and uses feedback to adjust behavior toward the target.'
      },
      {
        question: 'Which sensor would be most useful for measuring a robot’s turning angle?',
        options: [
          'Color sensor',
          'Gyro sensor',
          'Force sensor',
          'Distance sensor'
        ],
        answer: 1,
        explanation: 'A gyro sensor measures angular movement and orientation, making it useful for monitoring turns.'
      },
      {
        question: 'A color sensor gives inconsistent readings under different lighting conditions. What should an engineer do?',
        options: [
          'Assume the sensor is always correct',
          'Stop testing the robot',
          'Test the sensor under realistic lighting conditions',
          'Remove the controller'
        ],
        answer: 2,
        explanation: 'Sensor readings can be affected by environmental conditions. Testing under realistic conditions helps engineers understand and manage those limitations.'
      }
    ]
  },
  {
    id: 6,
    title: 'Programming and Robot Reliability',
    subtitle: 'Turning engineering ideas into repeatable actions',
    duration: '25 min',
    level: 'Intermediate',
    objectives: [
      'Understand sequences, loops and conditions.',
      'Recognize the purpose of variables and functions.',
      'Understand sensor-based programming.',
      'Develop a repeatable robot program.',
      'Use testing to improve reliability.'
    ],
    sections: [
      {
        heading: '1. Programs are instructions',
        content: 'A robot program is a set of instructions that tells the controller what actions to perform. Programs coordinate motors, read sensors, make decisions and repeat actions. A well-organized program makes it easier to understand how the robot behaves and diagnose problems.',
        bullets: [
          'Instructions tell components what to do.',
          'The order of instructions can change the result.',
          'Sensor readings can influence which instructions execute.'
        ]
      },
      {
        heading: '2. Sequences',
        content: 'A sequence is a group of instructions executed in a particular order. For example, a robot might drive forward, turn right, activate an attachment and stop. Changing the order could produce a completely different outcome.',
        bullets: [
          'First: Drive forward.',
          'Second: Turn right.',
          'Third: Activate the attachment.',
          'Fourth: Stop the motors.'
        ]
      },
      {
        heading: '3. Loops',
        content: 'A loop repeats a group of instructions. If a robot needs to perform the same action several times, a loop avoids writing the same instructions repeatedly. Loops can also allow a program to continuously monitor sensor readings.',
        bullets: [
          'A fixed loop repeats a set number of times.',
          'A conditional loop continues while a condition is true.',
          'Loops can simplify repeated actions and sensor monitoring.'
        ]
      },
      {
        heading: '4. Conditions',
        content: 'A condition allows a program to make a decision. A condition evaluates whether something is true or false, then determines which instructions should execute.',
        bullets: [
          'IF distance is less than 10 cm, stop.',
          'ELSE, continue moving.',
          'This allows the robot to respond to its surroundings.'
        ]
      },
      {
        heading: '5. Variables',
        content: 'A variable stores a value that a program can use or change. For example, a program might store a target distance, motor speed or sensor reading in a variable. Variables make programs easier to modify because important values can be changed without rewriting every instruction.',
        bullets: [
          'targetDistance = 10',
          'motorSpeed = 40',
          'currentDistance = readSensor()'
        ]
      },
      {
        heading: '6. Functions and reusable code',
        content: 'A function is a named group of instructions that performs a particular task. Instead of rewriting the same driving instructions throughout a program, you can create a driveForward function and reuse it whenever needed.',
        bullets: [
          'Functions reduce repeated code.',
          'They make programs easier to organize.',
          'They help teams test individual behaviors.',
          'They make debugging easier.'
        ]
      },
      {
        heading: '7. Testing and reliability',
        content: 'A program that works once is not necessarily reliable. Robot performance can change because of wheel slipping, attachment alignment, battery condition, mechanical friction and sensor variation. Repeated testing helps engineers understand how consistently a design performs.',
        bullets: [
          'Run the same test multiple times.',
          'Record the results instead of relying on memory.',
          'Identify the source of inconsistent behavior.',
          'Change one variable at a time when possible.',
          'Retest after every significant modification.'
        ]
      },
      {
        heading: '8. Debugging like an engineer',
        content: 'Debugging is the process of identifying and correcting problems in a program or system. When a robot fails a mission, do not immediately rewrite the entire program. First determine whether the problem is mechanical, electrical, sensor-related or software-related.',
        bullets: [
          'Observe exactly what the robot does.',
          'Identify the point where its behavior differs from the intended result.',
          'Check the relevant mechanical and programming components.',
          'Make a controlled change.',
          'Repeat the test to see whether the problem is resolved.'
        ]
      }
    ],
    concept: 'Reliable robotics combines organized programming, sensor feedback, mechanical consistency and repeated testing.',
    example: 'A robot approaches an object. A loop continuously checks the distance sensor. If the object is farther than 10 cm, the robot drives forward. Otherwise, it stops and activates an attachment.',
    activity: 'Write pseudocode for a robot that drives forward, detects an object, stops and activates an attachment. Identify where you would use a loop, condition and variable.',
    code: `START PROGRAM

targetDistance = 10

WHILE robot is running:

    distance = read_distance_sensor()

    IF distance > targetDistance:
        drive_forward()
    ELSE:
        stop_motors()
        activate_attachment()

END PROGRAM`,
    vocabulary: [
      ['Sequence', 'Instructions executed in a specific order.'],
      ['Loop', 'A programming structure that repeats instructions.'],
      ['Condition', 'A true-or-false test that controls program behavior.'],
      ['Variable', 'A named value stored and used by a program.'],
      ['Function', 'A reusable group of instructions.'],
      ['Debugging', 'Finding and correcting errors in a program or system.']
    ],
    quiz: [
      {
        question: 'Which programming structure is most useful when you want a robot to repeat an action?',
        options: ['A variable', 'A loop', 'A comment', 'A motor'],
        answer: 1,
        explanation: 'A loop repeats a group of instructions without requiring you to write them repeatedly.'
      },
      {
        question: 'What does a condition allow a program to do?',
        options: [
          'Make decisions based on whether something is true or false',
          'Increase wheel diameter',
          'Replace the controller',
          'Remove all sensor readings'
        ],
        answer: 0,
        explanation: 'Conditions allow programs to choose different actions depending on whether a statement is true or false.'
      },
      {
        question: 'Why should a team test a robot multiple times?',
        options: [
          'One successful run proves everything works',
          'Repeated testing helps measure consistency',
          'Testing makes the robot heavier',
          'It eliminates the need for programming'
        ],
        answer: 1,
        explanation: 'Repeated tests reveal inconsistencies and help engineers determine whether the robot performs reliably.'
      }
    ]
  }
]

const STORAGE_KEYS = {
  active: 'btb-academy-final-active',
  completed: 'btb-academy-final-completed',
  answers: 'btb-academy-final-answers',
  checked: 'btb-academy-final-checked'
}

function readStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key)
    return value === null ? fallback : JSON.parse(value)
  } catch {
    return fallback
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // The Academy remains usable if browser storage is unavailable.
  }
}

function getInitialLesson() {
  const saved = readStorage(STORAGE_KEYS.active, 0)
  return Number.isInteger(saved)
    ? Math.min(Math.max(saved, 0), lessons.length - 1)
    : 0
}

function getInitialCompleted() {
  const saved = readStorage(STORAGE_KEYS.completed, [])
  return Array.isArray(saved)
    ? saved.filter(id => lessons.some(lesson => lesson.id === id))
    : []
}

function getInitialAnswers() {
  const saved = readStorage(STORAGE_KEYS.answers, {})
  return saved && typeof saved === 'object' && !Array.isArray(saved)
    ? saved
    : {}
}

function getInitialChecked() {
  const saved = readStorage(STORAGE_KEYS.checked, {})
  return saved && typeof saved === 'object' && !Array.isArray(saved)
    ? saved
    : {}
}

export default function Academy() {
  const [activeLesson, setActiveLesson] = useState(getInitialLesson)
  const [completed, setCompleted] = useState(getInitialCompleted)
  const [answers, setAnswers] = useState(getInitialAnswers)
  const [checked, setChecked] = useState(getInitialChecked)

  const [driver, setDriver] = useState(12)
  const [driven, setDriven] = useState(36)
  const [wheelDiameter, setWheelDiameter] = useState(56)
  const [rotations, setRotations] = useState(5)

  const lesson = lessons[activeLesson]
  const progress = Math.round(completed.length / lessons.length * 100)

  const gearRatio = driven / driver
  const outputSpeed = 100 / gearRatio
  const distanceMm = Math.PI * wheelDiameter * rotations
  const distanceCm = distanceMm / 10

  const lessonAnswers = answers[lesson.id] || {}
  const lessonChecked = checked[lesson.id] || {}

  const correctCount = lesson.quiz.filter(
    (question, index) =>
      lessonAnswers[index] === question.answer &&
      lessonChecked[index] === true
  ).length

  const allCorrect = lesson.quiz.every(
    (question, index) =>
      lessonAnswers[index] === question.answer &&
      lessonChecked[index] === true
  )

  const answeredCount = lesson.quiz.filter(
    (_, index) => lessonAnswers[index] !== undefined
  ).length

  const wheelVisualSize = useMemo(
    () => Math.max(92, Math.min(190, 75 + wheelDiameter * 1.25)),
    [wheelDiameter]
  )

  useEffect(() => {
    writeStorage(STORAGE_KEYS.active, activeLesson)
  }, [activeLesson])

  useEffect(() => {
    writeStorage(STORAGE_KEYS.completed, completed)
  }, [completed])

  useEffect(() => {
    writeStorage(STORAGE_KEYS.answers, answers)
  }, [answers])

  useEffect(() => {
    writeStorage(STORAGE_KEYS.checked, checked)
  }, [checked])

  function selectLesson(index) {
    setActiveLesson(Math.min(Math.max(index, 0), lessons.length - 1))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function chooseAnswer(questionIndex, optionIndex) {
    setAnswers(previous => ({
      ...previous,
      [lesson.id]: {
        ...(previous[lesson.id] || {}),
        [questionIndex]: optionIndex
      }
    }))

    setChecked(previous => ({
      ...previous,
      [lesson.id]: {
        ...(previous[lesson.id] || {}),
        [questionIndex]: false
      }
    }))
  }

  function checkAnswer(questionIndex) {
    if (lessonAnswers[questionIndex] === undefined) return

    setChecked(previous => ({
      ...previous,
      [lesson.id]: {
        ...(previous[lesson.id] || {}),
        [questionIndex]: true
      }
    }))
  }

  function markComplete() {
    if (!allCorrect) return

    setCompleted(previous =>
      previous.includes(lesson.id)
        ? previous
        : [...previous, lesson.id]
    )
  }

  function resetProgress() {
    const confirmed = window.confirm(
      'Reset all Academy progress, quiz answers and saved lesson position?'
    )

    if (!confirmed) return

    setCompleted([])
    setAnswers({})
    setChecked({})
    setActiveLesson(0)

    Object.values(STORAGE_KEYS).forEach(key => {
      try {
        localStorage.removeItem(key)
      } catch {
        // Ignore unavailable browser storage.
      }
    })

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="academy">
      <section className="academy-hero">
        <div className="academy-hero-content">
          <span className="academy-eyebrow">
            BEYOND THE BRICKS / LEARNING
          </span>

          <h1>
            Build skills.
            <br />
            <span>Build the future.</span>
          </h1>

          <p>
            Learn the engineering, programming and problem-solving
            skills behind successful robotics teams.
          </p>

          <a href="#robot-course" className="academy-cta">
            Start learning →
          </a>
        </div>

        <div className="academy-hero-art" aria-hidden="true">
          <div className="orbit orbit-one">🤖</div>
          <div className="orbit orbit-two">💡</div>
          <div className="orbit orbit-three">⚙️</div>
          <div className="academy-center">BTB</div>
        </div>
      </section>

      <section className="academy-stats">
        <div>
          <strong>01</strong>
          <span>Featured course</span>
        </div>
        <div>
          <strong>{lessons.length}</strong>
          <span>Detailed lessons</span>
        </div>
        <div>
          <strong>{completed.length}/{lessons.length}</strong>
          <span>Lessons completed</span>
        </div>
      </section>

      <section className="academy-section" id="robot-course">
        <div className="academy-section-heading">
          <span>ROBOT GAME ACADEMY / COURSE 01</span>
          <h2>Introduction to Robot Engineering.</h2>
          <p>
            Start with the fundamentals. Learn how robots work,
            how mechanisms transfer movement, and how to design
            a robot that performs reliably.
          </p>
        </div>

        <div className="academy-progress">
          <div className="academy-progress-copy">
            <span>YOUR COURSE PROGRESS</span>
            <h2>{completed.length} of {lessons.length} lessons completed</h2>
            <p>Keep learning and building your engineering skills.</p>
          </div>

          <div className="progress-number">{progress}%</div>

          <div
            className="progress-track"
            role="progressbar"
            aria-label="Course progress"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="btb-course-layout">
          <aside className="btb-course-sidebar">
            <span className="btb-sidebar-label">COURSE CONTENT</span>

            {lessons.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`btb-lesson-nav ${activeLesson === index ? 'active' : ''}`}
                onClick={() => selectLesson(index)}
                aria-current={activeLesson === index ? 'step' : undefined}
              >
                <span className="btb-lesson-number">
                  {completed.includes(item.id)
                    ? '✓'
                    : String(index + 1).padStart(2, '0')}
                </span>

                <span className="btb-lesson-nav-text">
                  <strong>{item.title}</strong>
                  <small>{item.duration} · {item.level}</small>
                </span>
              </button>
            ))}
          </aside>

          <article className="btb-lesson-panel">
            <div className="btb-lesson-header">
              <span>LESSON {String(lesson.id).padStart(2, '0')} / 06</span>
              <span>{lesson.duration} · {lesson.level}</span>
            </div>

            <h2>{lesson.title}</h2>
            <p className="btb-lesson-subtitle">{lesson.subtitle}</p>

            <div className="btb-objectives">
              <h3>WHAT YOU'LL LEARN</h3>
              <ul>
                {lesson.objectives.map(objective => (
                  <li key={objective}>✓ {objective}</li>
                ))}
              </ul>
            </div>

            <div className="btb-lesson-body">
              {lesson.sections.map(section => (
                <section key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.content}</p>

                  {section.bullets && (
                    <ul>
                      {section.bullets.map(item => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <div className="btb-project-activity">
              <span>KEY ENGINEERING PRINCIPLE</span>
              <h3>Remember this.</h3>
              <p>{lesson.concept}</p>
            </div>

            <div className="btb-project-activity">
              <span>ENGINEERING IN ACTION</span>
              <h3>Worked example</h3>
              <p>{lesson.example}</p>
            </div>

            <div className="btb-project-activity">
              <span>ENGINEERING CHALLENGE</span>
              <h3>Put your knowledge to work.</h3>
              <p>{lesson.activity}</p>
            </div>

            {lesson.vocabulary && (
              <div className="btb-project-activity">
                <span>ENGINEERING VOCABULARY</span>
                <h3>Know the terminology.</h3>

                <div className="btb-vocabulary-list">
                  {lesson.vocabulary.map(([term, definition]) => (
                    <div key={term}>
                      <strong>{term}</strong>
                      <p>{definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {lesson.code && (
              <div className="btb-code-example">
                <h3>PROGRAMMING EXAMPLE</h3>
                <p>A simplified sensor-based control loop:</p>
                <pre><code>{lesson.code}</code></pre>
              </div>
            )}

            {lesson.simulation === 'gears' && (
              <div className="btb-simulation">
                <span className="btb-simulation-label">
                  INTERACTIVE ENGINEERING LAB
                </span>

                <h3>Build your gear system</h3>
                <p>
                  Change the number of teeth on each gear to explore
                  how a gear train changes speed and torque.
                </p>

                <div className="btb-visual-lab">
                  <div className="btb-visual-lab-header">
                    <span>LIVE MECHANICAL SIMULATION</span>
                    <h3>Watch the gears in action</h3>
                    <p>
                      The gears rotate in opposite directions.
                      Their tooth counts determine their relative speeds.
                    </p>
                  </div>

                  <div className="btb-gear-stage">
                    <div className="btb-gear-pair">
                      <div
                        className="btb-gear btb-gear-large"
                        style={{
                          '--gear-size': `${Math.max(100, driver * 5)}px`,
                          '--gear-duration': '5s'
                        }}
                      >
                        <span>{driver}T</span>
                      </div>

                      <div
                        className="btb-gear btb-gear-small"
                        style={{
                          '--gear-size': `${Math.max(100, driven * 5)}px`,
                          '--gear-duration': `${5 * driven / driver}s`
                        }}
                      >
                        <span>{driven}T</span>
                      </div>
                    </div>
                  </div>

                  <p className="btb-visual-caption">
                    Simplified animated gear visualization. Actual gear
                    spacing and tooth geometry depend on the physical gears.
                  </p>

                  <div className="btb-visual-facts">
                    <div className="btb-visual-fact">
                      <strong>DRIVING GEAR</strong>
                      <p>{driver} teeth · Input gear</p>
                    </div>
                    <div className="btb-visual-fact">
                      <strong>DRIVEN GEAR</strong>
                      <p>{driven} teeth · Output gear</p>
                    </div>
                  </div>

                  <div className="btb-visual-lab-note">
                    Two directly meshing external gears rotate in opposite
                    directions. A larger driven gear rotates more slowly.
                  </div>
                </div>

                <div className="btb-simulation-control">
                  <label htmlFor="driving-gear">
                    Driving gear
                    <strong>{driver} teeth</strong>
                  </label>
                  <input
                    id="driving-gear"
                    type="range"
                    min="8"
                    max="40"
                    step="4"
                    value={driver}
                    onChange={event => setDriver(Number(event.target.value))}
                  />
                </div>

                <div className="btb-simulation-control">
                  <label htmlFor="driven-gear">
                    Driven gear
                    <strong>{driven} teeth</strong>
                  </label>
                  <input
                    id="driven-gear"
                    type="range"
                    min="8"
                    max="40"
                    step="4"
                    value={driven}
                    onChange={event => setDriven(Number(event.target.value))}
                  />
                </div>

                <div className="btb-simulation-results">
                  <div>
                    <span>Gear ratio</span>
                    <strong>{gearRatio.toFixed(2)}:1</strong>
                  </div>
                  <div>
                    <span>Output speed</span>
                    <strong>{outputSpeed.toFixed(1)}%</strong>
                  </div>
                  <div>
                    <span>Ideal torque multiplier</span>
                    <strong>{gearRatio.toFixed(2)}×</strong>
                  </div>
                </div>

                <p className="btb-simulation-explanation">
                  {gearRatio > 1
                    ? 'GEAR REDUCTION: The driven gear is larger. Output speed decreases while ideal output torque increases.'
                    : gearRatio < 1
                      ? 'GEAR INCREASE: The driven gear is smaller. Output speed increases while ideal output torque decreases.'
                      : '1:1 RATIO: Both gears have the same tooth count. Their rotational speeds are equal.'}
                </p>

                <small>
                  Ideal model assuming no energy losses. Real systems
                  experience friction and mechanical inefficiency.
                </small>
              </div>
            )}

            {lesson.simulation === 'wheels' && (
              <div className="btb-simulation">
                <span className="btb-simulation-label">
                  INTERACTIVE ENGINEERING LAB
                </span>

                <h3>Experiment with wheel sizes</h3>
                <p>
                  Change the wheel diameter and number of rotations
                  to see how far a robot would travel.
                </p>

                <div className="btb-wheel-stage">
                  <div
                    className="btb-wheel-visual"
                    style={{
                      width: `${wheelVisualSize}px`,
                      height: `${wheelVisualSize}px`
                    }}
                  >
                    <div className="btb-wheel-hub" />
                  </div>
                  <span className="btb-wheel-label">
                    {wheelDiameter} mm diameter
                  </span>
                </div>

                <div className="btb-simulation-control">
                  <label htmlFor="wheel-diameter">
                    Wheel diameter
                    <strong>{wheelDiameter} mm</strong>
                  </label>
                  <input
                    id="wheel-diameter"
                    type="range"
                    min="40"
                    max="90"
                    step="2"
                    value={wheelDiameter}
                    onChange={event => setWheelDiameter(Number(event.target.value))}
                  />
                </div>

                <div className="btb-simulation-control">
                  <label htmlFor="wheel-rotations">
                    Number of rotations
                    <strong>{rotations}</strong>
                  </label>
                  <input
                    id="wheel-rotations"
                    type="range"
                    min="1"
                    max="20"
                    value={rotations}
                    onChange={event => setRotations(Number(event.target.value))}
                  />
                </div>

                <div className="btb-simulation-results">
                  <div>
                    <span>Circumference</span>
                    <strong>{(Math.PI * wheelDiameter).toFixed(1)} mm</strong>
                  </div>
                  <div>
                    <span>Total distance</span>
                    <strong>{distanceCm.toFixed(1)} cm</strong>
                  </div>
                </div>

                <p className="btb-simulation-explanation">
                  With no slipping, a wheel travels one circumference
                  per rotation. Increasing the diameter increases
                  distance traveled per rotation.
                </p>

                <small>
                  Ideal calculation assuming the wheel rolls without slipping.
                </small>
              </div>
            )}

            <div className="btb-knowledge-check">
              <span>KNOWLEDGE CHECK / {lesson.quiz.length} QUESTIONS</span>
              <h3>Test your understanding.</h3>
              <p>
                Answer each question and check your response.
                You need all questions correct to complete the lesson.
              </p>

              <div className="btb-quiz-progress">
                {correctCount} of {lesson.quiz.length} correct · {answeredCount} of {lesson.quiz.length} answered
              </div>

              <div className="btb-quiz-progress-track">
                <div
                  style={{
                    width: `${correctCount / lesson.quiz.length * 100}%`
                  }}
                />
              </div>

              {lesson.quiz.map((question, questionIndex) => {
                const selected = lessonAnswers[questionIndex]
                const isChecked = lessonChecked[questionIndex] === true
                const isCorrect = selected === question.answer

                return (
                  <div className="btb-question" key={question.question}>
                    <h3>
                      {questionIndex + 1}. {question.question}
                    </h3>

                    <div className="btb-answer-list">
                      {question.options.map((option, optionIndex) => (
                        <button
                          key={option}
                          type="button"
                          className={`btb-answer ${
                            isChecked && optionIndex === question.answer
                              ? 'correct'
                              : isChecked && selected === optionIndex
                                ? 'incorrect'
                                : selected === optionIndex
                                  ? 'selected'
                                  : ''
                          }`}
                          onClick={() => chooseAnswer(questionIndex, optionIndex)}
                          aria-pressed={selected === optionIndex}
                        >
                          <span>{String.fromCharCode(65 + optionIndex)}</span>
                          {option}
                        </button>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="btb-check-button"
                      disabled={selected === undefined || isChecked}
                      onClick={() => checkAnswer(questionIndex)}
                    >
                      {isChecked ? 'Answer checked' : 'Check answer →'}
                    </button>

                    {isChecked && (
                      <div className={`btb-feedback ${isCorrect ? 'success' : 'retry'}`}>
                        <strong>
                          {isCorrect ? 'Correct! Well done.' : 'Not quite. Select another answer to try again.'}
                        </strong>
                        <p>{question.explanation}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="btb-lesson-footer">
              <button
                type="button"
                className="btb-previous-button"
                disabled={activeLesson === 0}
                onClick={() => selectLesson(activeLesson - 1)}
              >
                ← Previous lesson
              </button>

              <button
                type="button"
                className="btb-complete-button"
                disabled={!completed.includes(lesson.id) && !allCorrect}
                onClick={markComplete}
              >
                {completed.includes(lesson.id)
                  ? '✓ Lesson completed'
                  : allCorrect
                    ? 'Mark lesson complete ✓'
                    : 'Complete all questions first'}
              </button>

              <button
                type="button"
                className="btb-next-button"
                disabled={activeLesson === lessons.length - 1}
                onClick={() => selectLesson(activeLesson + 1)}
              >
                Next lesson →
              </button>
            </div>
          </article>
        </div>

        {completed.length === lessons.length && (
          <section className="academy-graduation">
            <div className="graduation-icon">🏆</div>
            <span>COURSE COMPLETED</span>
            <h2>You've built your foundation.</h2>
            <p>
              You've completed all six introductory robotics engineering
              lessons. You're ready to take on more advanced challenges.
            </p>
            <button type="button" onClick={() => selectLesson(0)}>
              Review the course →
            </button>
          </section>
        )}

        <div className="academy-reset">
          <button type="button" onClick={resetProgress}>
            Reset course progress
          </button>
        </div>
      </section>

      <section className="academy-bottom">
        <span>THE FUTURE IS BUILT TOGETHER.</span>
        <h2>Think bigger. Build better.</h2>
        <p>
          Wherever you are in the world, your robotics journey starts here.
        </p>
      </section>
    </main>
  )
}


