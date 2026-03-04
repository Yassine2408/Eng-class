import { Session, AppData, PhraseItem } from './types';

// Helper to generate IDs
const genId = () => Math.random().toString(36).substring(2, 9);

// Month 1 Sessions - Complete content
export const sessions: Session[] = [
  {
    id: 'session-1',
    number: 1,
    date: '2026-03-04',
    title: 'Introductions + Basics',
    goal: 'Introduce yourself confidently and ask simple questions. Master numbers 0-100 and basic time expressions.',
    vocab: [
      { id: genId(), word: 'Hello', meaning: 'A greeting', example: 'Hello, nice to meet you!', category: 'greetings' },
      { id: genId(), word: 'Goodbye', meaning: 'A farewell', example: 'Goodbye, see you tomorrow!', category: 'greetings' },
      { id: genId(), word: 'Nice to meet you', meaning: 'Polite expression when meeting someone', example: 'Nice to meet you. I\'m John.', category: 'greetings' },
      { id: genId(), word: 'My name is...', meaning: 'Way to introduce yourself', example: 'My name is Maria.', category: 'greetings' },
      { id: genId(), word: 'I\'m from...', meaning: 'Tell your country/city', example: 'I\'m from Spain.', category: 'introductions' },
      { id: genId(), word: 'Country', meaning: 'A nation', example: 'What country are you from?', category: 'places' },
      { id: genId(), word: 'Job', meaning: 'Work, occupation', example: 'What is your job?', category: 'work' },
      { id: genId(), word: 'Teacher', meaning: 'Someone who teaches', example: 'I am a teacher.', category: 'work' },
      { id: genId(), word: 'Student', meaning: 'Someone who studies', example: 'She is a student.', category: 'work' },
      { id: genId(), word: 'Today', meaning: 'This day', example: 'Today is Wednesday.', category: 'time' },
      { id: genId(), word: 'Tomorrow', meaning: 'The next day', example: 'Tomorrow is Thursday.', category: 'time' },
      { id: genId(), word: 'Yesterday', meaning: 'The day before', example: 'Yesterday was Tuesday.', category: 'time' },
    ],
    phrases: [
      { id: genId(), phrase: 'What\'s your name?', translation: 'ما اسمُكَ؟ / ما اسمُكِ؟', situation: 'First meeting' },
      { id: genId(), phrase: 'Where are you from?', translation: 'مِن أين أنت؟', situation: 'First meeting' },
      { id: genId(), phrase: 'What do you do?', translation: 'ماذا تعمل؟ / ما هي وظيفتُك؟', situation: 'Getting to know someone' },
      { id: genId(), phrase: 'How are you?', translation: 'كيف حالُك؟', situation: 'Greeting' },
      { id: genId(), phrase: 'Nice to meet you.', translation: 'تشرّفتُ بمعرفتِك', situation: 'First meeting' },
    ],
    grammar: {
      title: 'I am / You are + Simple Questions',
      explanation: 'Use "I am" (I\'m) to talk about yourself and "You are" (You\'re) to talk to someone. For questions, move "am/are/is" to the front.',
      examples: [
        'I am a teacher. / I\'m a teacher.',
        'You are a student. / You\'re a student.',
        'Are you from Spain? (Question)',
        'What is your name? / What\'s your name?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Warm-up', duration: 5, description: 'Greetings and small talk. How are you today?' },
      { id: genId(), title: 'Vocabulary Review', duration: 10, description: 'Learn greeting words and job vocabulary.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Practice "I am / You are" sentences.' },
      { id: genId(), title: 'Numbers Practice', duration: 10, description: 'Numbers 0-100. Teacher says, student writes.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Airport meeting scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Fill in the Blanks',
        instruction: 'Complete the sentences with: am, is, are, from, name',
        content: {
          sentences: [
            { id: genId(), text: 'My ___ is Maria.', answer: 'name' },
            { id: genId(), text: 'I ___ from Spain.', answer: 'am' },
            { id: genId(), text: 'Where ___ you from?', answer: 'are' },
            { id: genId(), text: 'What ___ your job?', answer: 'is' },
            { id: genId(), text: 'Nice to meet ___.', answer: 'you' },
          ]
        },
        answerKey: '1. name 2. am 3. are 4. is 5. you'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Build Questions',
        instruction: 'Choose the correct word order for each question.',
        content: {
          questions: [
            { id: genId(), question: 'How do you ask about someone\'s name?', options: ['What your name is?', 'What is your name?', 'Is what your name?'], correctIndex: 1 },
            { id: genId(), question: 'How do you ask about someone\'s country?', options: ['Where are you from?', 'From where you are?', 'You are from where?'], correctIndex: 0 },
            { id: genId(), question: 'How do you ask about someone\'s job?', options: ['Job what is your?', 'What do you do?', 'What your job is?'], correctIndex: 1 },
            { id: genId(), question: 'How do you ask if someone is a student?', options: ['Are you a student?', 'You are a student?', 'Is you a student?'], correctIndex: 0 },
          ]
        },
        answerKey: '1. b) What is your name? 2. a) Where are you from? 3. b) What do you do? 4. a) Are you a student?'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'Numbers Listening',
        instruction: 'Your teacher will say numbers. Write them down. Then practice saying them.',
        content: {
          prompt: 'Listen and write the numbers your teacher says. Then practice saying them aloud.',
          duration: 120,
          suggestedPoints: ['Numbers 0-20', 'Tens (20, 30, 40...)', 'Double digits (25, 47, 89...)']
        },
        answerKey: 'Teacher reads: 7, 15, 23, 42, 58, 76, 89, 100'
      }
    ],
    homework: [
      { id: genId(), task: 'Record a 60-second introduction about yourself.', type: 'recording', details: 'Include: name, country, job, and one hobby.' },
      { id: genId(), task: 'Learn 10 vocabulary words from this session.', type: 'study', details: 'Use flashcards or write them 3 times each.' },
      { id: genId(), task: 'Practice numbers 0-100 aloud.', type: 'speaking', details: 'Count forwards and backwards.' },
    ],
    roleplay: {
      title: 'Meeting Someone at the Airport',
      situation: 'You are at the airport waiting for your flight. A friendly traveler sits next to you and starts a conversation.',
      studentRole: 'A traveler from another country',
      teacherRole: 'A friendly local person',
      script: [
        { speaker: 'teacher', line: 'Hello! Is this seat taken?', cue: 'Greeting' },
        { speaker: 'student', line: 'No, please sit down.', cue: 'Respond politely' },
        { speaker: 'teacher', line: 'Thanks! My name is Alex. What\'s your name?', cue: 'Ask name' },
        { speaker: 'student', line: 'I\'m [your name]. Nice to meet you.', cue: 'Introduce yourself' },
        { speaker: 'teacher', line: 'Nice to meet you too! Where are you from?', cue: 'Ask origin' },
        { speaker: 'student', line: 'I\'m from [your country]. And you?', cue: 'Answer and ask back' },
        { speaker: 'teacher', line: 'I\'m from here. Is this your first time visiting?', cue: 'Ask about visit' },
        { speaker: 'student', line: 'Yes, I\'m here for [reason].', cue: 'Explain your trip' },
        { speaker: 'teacher', line: 'That sounds great! Have a wonderful trip!', cue: 'Closing' },
        { speaker: 'student', line: 'Thank you! Nice talking to you.', cue: 'Say goodbye' },
      ]
    },
    answerKey: 'Exercise 1: 1.name 2.am 3.are 4.is 5.you\nExercise 2: 1.b 2.a 3.b 4.a\nExercise 3: Numbers practice - teacher checks student answers',
    teacherNotes: 'Focus on confidence. Don\'t correct too much. Let student make mistakes and self-correct. Praise effort!'
  },
  {
    id: 'session-2',
    number: 2,
    date: '2026-03-07',
    title: 'Asking for Help + Polite Requests',
    goal: 'Ask for help politely and understand basic responses. Use "Can" and "Could" for requests.',
    vocab: [
      { id: genId(), word: 'Excuse me', meaning: 'Polite way to get attention', example: 'Excuse me, can you help me?', category: 'polite' },
      { id: genId(), word: 'Help', meaning: 'Assistance', example: 'Can you help me, please?', category: 'requests' },
      { id: genId(), word: 'Sorry', meaning: 'Apology or polite refusal', example: 'Sorry, I don\'t understand.', category: 'polite' },
      { id: genId(), word: 'Please', meaning: 'Polite word for requests', example: 'Can you help me, please?', category: 'polite' },
      { id: genId(), word: 'Understand', meaning: 'To know the meaning', example: 'I don\'t understand.', category: 'communication' },
      { id: genId(), word: 'Speak slowly', meaning: 'Ask someone to talk more slowly', example: 'Can you speak slowly, please?', category: 'communication' },
      { id: genId(), word: 'Repeat', meaning: 'Say again', example: 'Can you repeat that?', category: 'communication' },
      { id: genId(), word: 'Direction', meaning: 'The way to go', example: 'Can you give me directions?', category: 'navigation' },
    ],
    phrases: [
      { id: genId(), phrase: 'Excuse me, can you help me?', translation: 'عفواً، هل تستطيعُ مساعدتي؟', situation: 'Asking for help' },
      { id: genId(), phrase: 'Where is the...?', translation: 'أينَ يقعُ ...؟', situation: 'Finding places' },
      { id: genId(), phrase: 'How much is...?', translation: 'بكم هذا؟', situation: 'Shopping' },
      { id: genId(), phrase: 'Can you repeat that?', translation: 'هل يُمكِنُكَ أن تُعيد ذلك؟', situation: 'Not understanding' },
      { id: genId(), phrase: 'I don\'t understand.', translation: 'أنا لا أفهم', situation: 'Confusion' },
      { id: genId(), phrase: 'Could you speak slowly?', translation: 'هل يُمكِنُكَ أن تتحدّث ببطء، من فضلك؟', situation: 'Communication difficulty' },
    ],
    grammar: {
      title: 'Can / Could for Requests',
      explanation: '"Can" is common and friendly. "Could" is more formal and polite. Always add "please" for extra politeness.',
      examples: [
        'Can you help me? (friendly)',
        'Could you help me, please? (more polite)',
        'Can you tell me where the station is?',
        'Could you repeat that, please?',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Review', duration: 5, description: 'Review last session\'s vocabulary.' },
      { id: genId(), title: 'New Vocabulary', duration: 10, description: 'Learn polite request phrases.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Can vs Could for requests.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 15, description: 'Asking directions in the city.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Choose the Best Polite Sentence',
        instruction: 'Select the most polite way to make each request.',
        content: {
          questions: [
            { id: genId(), question: 'You want someone to help you:', options: ['Help me!', 'Can you help me?', 'You help me now!'], correctIndex: 1 },
            { id: genId(), question: 'You don\'t understand something:', options: ['I don\'t get it.', 'Can you repeat that, please?', 'Say again.'], correctIndex: 1 },
            { id: genId(), question: 'You need directions:', options: ['Where is the station?', 'Excuse me, could you tell me where the station is?', 'Station where?'], correctIndex: 1 },
            { id: genId(), question: 'You want someone to speak slowly:', options: ['Slow down!', 'Could you speak slowly, please?', 'Too fast!'], correctIndex: 1 },
          ]
        },
        answerKey: '1. b) Can you help me? 2. b) Can you repeat that, please? 3. b) Excuse me, could you tell me where the station is? 4. b) Could you speak slowly, please?'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Match Phrases to Situations',
        instruction: 'Match each phrase to the correct situation.',
        content: {
          pairs: [
            { id: genId(), left: 'Excuse me, can you help me?', right: 'You are lost in a new city' },
            { id: genId(), left: 'How much is this?', right: 'You want to buy something' },
            { id: genId(), left: 'Can you repeat that?', right: 'You didn\'t hear clearly' },
            { id: genId(), left: 'Could you speak slowly?', right: 'Someone is talking too fast' },
            { id: genId(), left: 'Where is the bathroom?', right: 'You need a toilet' },
            { id: genId(), left: 'I don\'t understand.', right: 'You are confused' },
          ]
        },
        answerKey: '1-You are lost, 2-You want to buy, 3-Didn\'t hear, 4-Talking too fast, 5-Need toilet, 6-Confused'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Hotel Lobby Dialogue',
        instruction: 'Complete the dialogue with: excuse, help, where, please, slowly',
        content: {
          sentences: [
            { id: genId(), text: '___ me, can you ___ me?', answer: 'Excuse, help' },
            { id: genId(), text: '___ is my room?', answer: 'Where' },
            { id: genId(), text: 'Can you speak ___, please?', answer: 'slowly' },
            { id: genId(), text: 'Thank you very much!', answer: 'please' },
          ]
        },
        answerKey: '1. Excuse, help 2. Where 3. slowly 4. please (in appropriate context)'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 polite request sentences.', type: 'writing', details: 'Use "Can you..." and "Could you..." patterns.' },
      { id: genId(), task: 'Record 1 minute: Asking for directions.', type: 'recording', details: 'Pretend you are lost and ask for help.' },
      { id: genId(), task: 'Practice polite phrases with a mirror.', type: 'speaking', details: 'Say each phrase 5 times.' },
    ],
    roleplay: {
      title: 'Asking Directions in the City',
      situation: 'You are walking in a new city and you\'re lost. You need to find the train station.',
      studentRole: 'A lost tourist',
      teacherRole: 'A helpful local person',
      script: [
        { speaker: 'student', line: 'Excuse me, can you help me?', cue: 'Get attention politely' },
        { speaker: 'teacher', line: 'Yes, of course! What do you need?', cue: 'Be helpful' },
        { speaker: 'student', line: 'I\'m looking for the train station. Where is it?', cue: 'Ask for location' },
        { speaker: 'teacher', line: 'Oh, it\'s not far. Go straight, then turn left at the traffic light.', cue: 'Give directions' },
        { speaker: 'student', line: 'Sorry, can you speak slowly, please?', cue: 'Ask for clarification' },
        { speaker: 'teacher', line: 'Of course. Go straight. Then turn left. Walk 5 minutes.', cue: 'Repeat slowly' },
        { speaker: 'student', line: 'Turn left, walk 5 minutes. Thank you!', cue: 'Confirm and thank' },
        { speaker: 'teacher', line: 'You\'re welcome! Good luck!', cue: 'Close politely' },
      ]
    },
    answerKey: 'Exercise 1: 1.b 2.b 3.b 4.b\nExercise 2: Match phrases correctly\nExercise 3: Excuse, help, Where, slowly, please',
    teacherNotes: 'Encourage student to use "please" and "thank you" naturally. Practice different situations.'
  },
  {
    id: 'session-3',
    number: 3,
    date: '2026-03-11',
    title: 'Airport: Check-in + Boarding',
    goal: 'Handle check-in confidently, talk about luggage, and understand gate information.',
    vocab: [
      { id: genId(), word: 'Passport', meaning: 'Official ID for travel', example: 'Can I see your passport, please?', category: 'documents' },
      { id: genId(), word: 'Boarding pass', meaning: 'Ticket to get on the plane', example: 'Here is your boarding pass.', category: 'documents' },
      { id: genId(), word: 'Luggage / Baggage', meaning: 'Suitcases and bags', example: 'How many pieces of luggage?', category: 'travel' },
      { id: genId(), word: 'Gate', meaning: 'Where you board the plane', example: 'Your gate is A12.', category: 'airport' },
      { id: genId(), word: 'Terminal', meaning: 'Airport building section', example: 'Go to Terminal 2.', category: 'airport' },
      { id: genId(), word: 'Delayed', meaning: 'Late, not on time', example: 'The flight is delayed.', category: 'status' },
      { id: genId(), word: 'On time', meaning: 'Not late', example: 'The flight is on time.', category: 'status' },
      { id: genId(), word: 'Check-in', meaning: 'Process before boarding', example: 'Please check in 2 hours before.', category: 'process' },
    ],
    phrases: [
      { id: genId(), phrase: 'Can I see your passport?', translation: 'هل يُمكِنُني رؤيةُ جوازِ سفرك؟', situation: 'Check-in' },
      { id: genId(), phrase: 'How many bags are you checking?', translation: 'كم حقيبةً تُريدُ شَحنَها؟', situation: 'Check-in' },
      { id: genId(), phrase: 'Window or aisle seat?', translation: 'مقعدٌ عند النافذة أم عند الممر؟', situation: 'Seat selection' },
      { id: genId(), phrase: 'Your gate is...', translation: 'بوّابةُ الصعودِ هي ...', situation: 'Information' },
      { id: genId(), phrase: 'Boarding at...', translation: 'يبدأُ الصعودُ إلى الطائرة في الساعة ...', situation: 'Information' },
    ],
    grammar: {
      title: 'My / Your Possessives',
      explanation: 'Use "my" for things that belong to you, "your" for things that belong to the person you\'re talking to.',
      examples: [
        'This is my passport.',
        'Where is your luggage?',
        'My flight is at 3 PM.',
        'Your gate is B24.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary Preview', duration: 10, description: 'Learn airport vocabulary with pictures.' },
      { id: genId(), title: 'Key Phrases', duration: 10, description: 'Practice check-in phrases.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Full check-in scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'matching',
        title: 'Match Word to Definition',
        instruction: 'Match each airport word to its meaning.',
        content: {
          pairs: [
            { id: genId(), left: 'Passport', right: 'Official document for travel' },
            { id: genId(), left: 'Boarding pass', right: 'Ticket to get on plane' },
            { id: genId(), left: 'Luggage', right: 'Suitcases and bags' },
            { id: genId(), left: 'Gate', right: 'Where you board the plane' },
            { id: genId(), left: 'Terminal', right: 'Airport building section' },
            { id: genId(), left: 'Delayed', right: 'Not on time' },
            { id: genId(), left: 'Check-in', right: 'Process before boarding' },
            { id: genId(), left: 'Aisle', right: 'Passage between seats' },
          ]
        },
        answerKey: 'All words matched to correct definitions'
      },
      {
        id: genId(),
        type: 'dialogue-builder',
        title: 'Check-in Dialogue',
        instruction: 'Put the dialogue lines in the correct order.',
        content: {
          lines: [
            { id: genId(), speaker: 'Agent', text: 'Good morning. Can I see your passport?', correctOrder: 1 },
            { id: genId(), speaker: 'Passenger', text: 'Here you go.', correctOrder: 2 },
            { id: genId(), speaker: 'Agent', text: 'How many bags are you checking?', correctOrder: 3 },
            { id: genId(), speaker: 'Passenger', text: 'Just one suitcase.', correctOrder: 4 },
            { id: genId(), speaker: 'Agent', text: 'Window or aisle seat?', correctOrder: 5 },
            { id: genId(), speaker: 'Passenger', text: 'Window seat, please.', correctOrder: 6 },
            { id: genId(), speaker: 'Agent', text: 'Here\'s your boarding pass. Gate A12. Have a nice flight!', correctOrder: 7 },
          ]
        },
        answerKey: 'Order: 1, 2, 3, 4, 5, 6, 7'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Flight Information',
        instruction: 'Complete the sentences with: gate, flight, delayed, boarding, terminal',
        content: {
          sentences: [
            { id: genId(), text: 'My ___ is at 3:00 PM.', answer: 'flight' },
            { id: genId(), text: 'My ___ is B24.', answer: 'gate' },
            { id: genId(), text: 'The flight is ___. It will be late.', answer: 'delayed' },
            { id: genId(), text: '___ starts at 2:30 PM.', answer: 'Boarding' },
            { id: genId(), text: 'Go to ___ 2 for international flights.', answer: 'terminal' },
          ]
        },
        answerKey: '1. flight 2. gate 3. delayed 4. Boarding 5. terminal'
      }
    ],
    homework: [
      { id: genId(), task: 'Create flashcards for 15 airport words.', type: 'study', details: 'Use paper or an app. Review daily.' },
      { id: genId(), task: 'Complete the airport vocabulary quiz.', type: 'quiz', details: 'Self-test with flashcards.' },
      { id: genId(), task: 'Record yourself doing a check-in roleplay.', type: 'recording', details: 'Play both roles if needed.' },
    ],
    roleplay: {
      title: 'Check-in Desk',
      situation: 'You are at the airport check-in counter. The airline agent will help you check in for your flight.',
      studentRole: 'Passenger checking in',
      teacherRole: 'Airline check-in agent',
      script: [
        { speaker: 'teacher', line: 'Good morning! May I see your passport, please?' },
        { speaker: 'student', line: 'Good morning. Here you go.', cue: 'Hand over passport' },
        { speaker: 'teacher', line: 'Thank you. Where are you flying to today?' },
        { speaker: 'student', line: 'I\'m flying to London.', cue: 'Say destination' },
        { speaker: 'teacher', line: 'How many bags are you checking?' },
        { speaker: 'student', line: 'I have one suitcase.', cue: 'Number of bags' },
        { speaker: 'teacher', line: 'Would you prefer a window or aisle seat?' },
        { speaker: 'student', line: 'Window seat, please.', cue: 'Choose seat' },
        { speaker: 'teacher', line: 'Here\'s your boarding pass. Your gate is C15. Boarding starts at 2:30. Have a great flight!' },
        { speaker: 'student', line: 'Thank you very much!', cue: 'Say goodbye' },
      ]
    },
    answerKey: 'Exercise 1: All matched correctly\nExercise 2: Order 1-7 as shown\nExercise 3: flight, gate, delayed, Boarding, terminal',
    teacherNotes: 'Practice real airport scenarios. Use actual boarding pass as visual aid if available.'
  },
  {
    id: 'session-4',
    number: 4,
    date: '2026-03-14',
    title: 'Hotel: Booking + Check-in',
    goal: 'Book a room, check in, give personal details, and ask about amenities.',
    vocab: [
      { id: genId(), word: 'Reservation', meaning: 'A booking', example: 'I have a reservation.', category: 'hotel' },
      { id: genId(), word: 'Single room', meaning: 'Room for one person', example: 'I\'d like a single room.', category: 'room types' },
      { id: genId(), word: 'Double room', meaning: 'Room for two people', example: 'We need a double room.', category: 'room types' },
      { id: genId(), word: 'Night', meaning: 'One night stay', example: 'For two nights, please.', category: 'duration' },
      { id: genId(), word: 'Breakfast', meaning: 'Morning meal', example: 'Is breakfast included?', category: 'amenities' },
      { id: genId(), word: 'Key card', meaning: 'Electronic room key', example: 'Here\'s your key card.', category: 'hotel' },
      { id: genId(), word: 'WiFi', meaning: 'Wireless internet', example: 'What\'s the WiFi password?', category: 'amenities' },
      { id: genId(), word: 'Check out', meaning: 'Leave the hotel', example: 'Check out is at 11 AM.', category: 'process' },
    ],
    phrases: [
      { id: genId(), phrase: 'I\'d like to book a room.', translation: 'أرغبُ في حجزِ غُرفةٍ، من فضلك.', situation: 'Booking' },
      { id: genId(), phrase: 'I have a reservation.', translation: 'لديَّ حجزٌ مُسبق.', situation: 'Check-in' },
      { id: genId(), phrase: 'Is breakfast included?', translation: 'هل يشملُ السعرُ وجبةَ الإفطار؟', situation: 'Amenities' },
      { id: genId(), phrase: 'What\'s the WiFi password?', translation: 'ما هي كلمةُ مرور الواي فاي؟', situation: 'Amenities' },
      { id: genId(), phrase: 'There is a problem with...', translation: 'هناكَ مشكلةٌ في ...', situation: 'Problems' },
    ],
    grammar: {
      title: 'I\'d like... / There is / There are',
      explanation: '"I\'d like" (I would like) is a polite way to make requests. "There is" for singular, "There are" for plural.',
      examples: [
        'I\'d like a single room, please.',
        'I\'d like to check in.',
        'There is a problem with my room.',
        'There are no towels in my room.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Hotel vocabulary with examples.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'I\'d like... and There is/are' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Hotel reception scenario.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Booking Dialogue',
        instruction: 'Complete the dialogue with: name, nights, room, breakfast, card',
        content: {
          sentences: [
            { id: genId(), text: 'I\'d like to book a ___.', answer: 'room' },
            { id: genId(), text: 'What\'s your ___?', answer: 'name' },
            { id: genId(), text: 'How many ___?', answer: 'nights' },
            { id: genId(), text: 'Is ___ included?', answer: 'breakfast' },
            { id: genId(), text: 'Here\'s my credit ___.', answer: 'card' },
          ]
        },
        answerKey: '1. room 2. name 3. nights 4. breakfast 5. card'
      },
      {
        id: genId(), type: 'multiple-choice',
        title: 'There is / There are',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: '___ a problem with the shower.', options: ['There is', 'There are'], correctIndex: 0 },
            { id: genId(), question: '___ no towels in my room.', options: ['There is', 'There are'], correctIndex: 1 },
            { id: genId(), question: '___ a restaurant in the hotel?', options: ['Is there', 'Are there'], correctIndex: 0 },
            { id: genId(), question: '___ any messages for me?', options: ['Is there', 'Are there'], correctIndex: 1 },
          ]
        },
        answerKey: '1. There is 2. There are 3. Is there 4. Are there'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Problem Solving',
        instruction: 'What do you say in each situation?',
        content: {
          questions: [
            { id: genId(), question: 'The WiFi doesn\'t work:', options: ['WiFi bad!', 'There\'s a problem with the WiFi.', 'No internet!'], correctIndex: 1 },
            { id: genId(), question: 'You need more towels:', options: ['Give me towels!', 'Could I have some more towels, please?', 'Towels!'], correctIndex: 1 },
            { id: genId(), question: 'The AC is too cold:', options: ['Too cold!', 'Can you help me with the AC? It\'s too cold.', 'AC broken!'], correctIndex: 1 },
          ]
        },
        answerKey: '1. b) There\'s a problem with the WiFi. 2. b) Could I have some more towels, please? 3. b) Can you help me with the AC?'
      }
    ],
    homework: [
      { id: genId(), task: 'Write a booking message for a hotel.', type: 'writing', details: 'Include: dates, room type, special requests.' },
      { id: genId(), task: 'Record 1 minute: Checking in at a hotel.', type: 'recording', details: 'Practice the full check-in dialogue.' },
      { id: genId(), task: 'Review hotel vocabulary flashcards.', type: 'study', details: 'Focus on amenities words.' },
    ],
    roleplay: {
      title: 'Hotel Reception',
      situation: 'You arrive at a hotel for your reservation. The receptionist will help you check in.',
      studentRole: 'Hotel guest',
      teacherRole: 'Hotel receptionist',
      script: [
        { speaker: 'student', line: 'Hello, I have a reservation.', cue: 'Start check-in' },
        { speaker: 'teacher', line: 'Good afternoon! May I have your name, please?' },
        { speaker: 'student', line: 'Yes, my name is [your name].', cue: 'Give your name' },
        { speaker: 'teacher', line: 'Thank you. I see your reservation. A double room for 3 nights?' },
        { speaker: 'student', line: 'Yes, that\'s correct.', cue: 'Confirm reservation' },
        { speaker: 'teacher', line: 'May I see your passport, please?' },
        { speaker: 'student', line: 'Here you go.', cue: 'Show passport' },
        { speaker: 'teacher', line: 'Thank you. Breakfast is included, from 7 to 10 AM. Here\'s your key card. Room 305.' },
        { speaker: 'student', line: 'Thank you. What\'s the WiFi password?', cue: 'Ask about WiFi' },
        { speaker: 'teacher', line: 'The password is GUEST2026. Enjoy your stay!' },
        { speaker: 'student', line: 'Thank you very much!', cue: 'Thank and leave' },
      ]
    },
    answerKey: 'Exercise 1: room, name, nights, breakfast, card\nExercise 2: There is, There are, Is there, Are there\nExercise 3: 1.b 2.b 3.b',
    teacherNotes: 'Practice both booking (by phone/message) and check-in scenarios. Talk about common problems.'
  },
  {
    id: 'session-5',
    number: 5,
    date: '2026-03-18',
    title: 'Restaurant: Ordering + Paying',
    goal: 'Order food and drinks, make special requests, ask for the bill, and handle problems.',
    vocab: [
      { id: genId(), word: 'Menu', meaning: 'List of food and drinks', example: 'Can I see the menu?', category: 'restaurant' },
      { id: genId(), word: 'Starter / Appetizer', meaning: 'First course', example: 'I\'ll have a soup as a starter.', category: 'food' },
      { id: genId(), word: 'Main course', meaning: 'The main dish', example: 'For my main, I\'ll have the pasta.', category: 'food' },
      { id: genId(), word: 'Dessert', meaning: 'Sweet after main', example: 'Do you have desserts?', category: 'food' },
      { id: genId(), word: 'Bill / Check', meaning: 'Payment request', example: 'Can I have the bill, please?', category: 'payment' },
      { id: genId(), word: 'Vegetarian', meaning: 'No meat', example: 'Do you have vegetarian options?', category: 'dietary' },
      { id: genId(), word: 'Sparkling water', meaning: 'Water with gas', example: 'Sparkling or still water?', category: 'drinks' },
      { id: genId(), word: 'Allergy', meaning: 'Bad reaction to food', example: 'I have a nut allergy.', category: 'dietary' },
    ],
    phrases: [
      { id: genId(), phrase: 'I\'d like to order, please.', translation: 'أودُّ أن أطلبَ الآن، من فضلك.', situation: 'Ordering' },
      { id: genId(), phrase: 'Could I have the menu?', translation: 'هل يُمكِنُني الحصولُ على قائمةِ الطعام؟', situation: 'Starting' },
      { id: genId(), phrase: 'What do you recommend?', translation: 'بماذا تُوصي؟', situation: 'Choosing' },
      { id: genId(), phrase: 'I\'ll have the...', translation: 'سآخُذُ طبقَ ...', situation: 'Ordering' },
      { id: genId(), phrase: 'Could I have the bill, please?', translation: 'هل يُمكِنُكَ إحضارُ الفاتورة، من فضلك؟', situation: 'Paying' },
      { id: genId(), phrase: 'Excuse me, this is cold.', translation: 'عفواً، هذا الطَّبقُ بارد.', situation: 'Complaint' },
    ],
    grammar: {
      title: 'Countable / Uncountable Nouns',
      explanation: 'Countable nouns can be counted (one, two, three...). Uncountable nouns cannot be counted separately.',
      examples: [
        'Countable: a table, two chairs, three menus',
        'Uncountable: water, bread, rice, coffee',
        'I\'d like some water. (not "a water")',
        'I\'d like a glass of water.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Restaurant vocabulary with menu practice.' },
      { id: genId(), title: 'Grammar Focus', duration: 10, description: 'Countable vs uncountable nouns.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Full restaurant scenario with complaint.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Ordering Practice',
        instruction: 'Convert these items into "I\'d like..." sentences.',
        content: {
          sentences: [
            { id: genId(), text: 'Item: pizza. Sentence: I\'d like ___.', answer: 'a pizza' },
            { id: genId(), text: 'Item: water. Sentence: I\'d like ___.', answer: 'some water / a glass of water' },
            { id: genId(), text: 'Item: coffee. Sentence: I\'d like ___.', answer: 'a coffee / some coffee' },
            { id: genId(), text: 'Item: bread. Sentence: I\'d like ___.', answer: 'some bread' },
            { id: genId(), text: 'Item: salad. Sentence: I\'d like ___.', answer: 'a salad' },
          ]
        },
        answerKey: '1. a pizza 2. some water / a glass of water 3. a coffee / some coffee 4. some bread 5. a salad'
      },
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Correct the Mistakes',
        instruction: 'Choose the correct form.',
        content: {
          questions: [
            { id: genId(), question: '"Two water" should be:', options: ['Two waters', 'Two glasses of water', 'Two water glasses'], correctIndex: 1 },
            { id: genId(), question: '"A bread" should be:', options: ['A bread', 'A piece of bread', 'One bread'], correctIndex: 1 },
            { id: genId(), question: '"Three coffee" should be:', options: ['Three coffees', 'Three cups of coffee', 'Both are OK'], correctIndex: 2 },
            { id: genId(), question: '"A rice" should be:', options: ['A rice', 'Some rice', 'A bowl of rice'], correctIndex: 2 },
          ]
        },
        answerKey: '1. b) Two glasses of water 2. b) A piece of bread 3. c) Both are OK 4. c) A bowl of rice'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Request and Response',
        instruction: 'Match each request to the waiter\'s response.',
        content: {
          pairs: [
            { id: genId(), left: 'Could I see the menu?', right: 'Here you are.' },
            { id: genId(), left: 'I\'d like the steak, please.', right: 'How would you like it cooked?' },
            { id: genId(), left: 'Could I have the bill?', right: 'Certainly. Cash or card?' },
            { id: genId(), left: 'Is this vegetarian?', right: 'Yes, it\'s made with vegetables.' },
            { id: genId(), left: 'Excuse me, this soup is cold.', right: 'I\'m sorry. Let me bring you a new one.' },
            { id: genId(), left: 'Do you have WiFi?', right: 'Yes, the password is on your receipt.' },
          ]
        },
        answerKey: 'All pairs matched correctly'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 10 sentences ordering food and drinks.', type: 'writing', details: 'Use "I\'d like..." and practice countable/uncountable.' },
      { id: genId(), task: 'Practice the restaurant dialogue aloud.', type: 'speaking', details: 'Record yourself if possible.' },
    ],
    roleplay: {
      title: 'Restaurant Order + Complaint',
      situation: 'You are at a restaurant. Order your meal, then there is a problem with your food.',
      studentRole: 'Restaurant customer',
      teacherRole: 'Waiter',
      script: [
        { speaker: 'teacher', line: 'Good evening! Here\'s your menu. Can I get you a drink?' },
        { speaker: 'student', line: 'Good evening. I\'d like a glass of water, please.', cue: 'Order drink' },
        { speaker: 'teacher', line: 'Of course. Are you ready to order?' },
        { speaker: 'student', line: 'Yes, I\'d like the soup as a starter, and the pasta for my main.', cue: 'Order food' },
        { speaker: 'teacher', line: 'Excellent choice! I\'ll be right back with your order.' },
        { speaker: 'student', line: '(Food arrives) Excuse me, this soup is cold.', cue: 'Make a complaint' },
        { speaker: 'teacher', line: 'Oh, I\'m very sorry! Let me bring you a hot one right away.' },
        { speaker: 'student', line: 'Thank you.', cue: 'Accept apology' },
        { speaker: 'teacher', line: 'Here\'s your hot soup. Enjoy your meal!' },
        { speaker: 'student', line: 'Thank you very much.', cue: 'Thank' },
        { speaker: 'teacher', line: 'Would you like dessert or the bill?' },
        { speaker: 'student', line: 'Just the bill, please.', cue: 'Ask for bill' },
        { speaker: 'teacher', line: 'Here you are. Cash or card?' },
        { speaker: 'student', line: 'Card, please.', cue: 'Pay' },
        { speaker: 'teacher', line: 'Thank you. Have a nice evening!' },
      ]
    },
    answerKey: 'Exercise 1: a pizza, some water, a coffee, some bread, a salad\nExercise 2: 1.b 2.b 3.c 4.c\nExercise 3: All matched correctly',
    teacherNotes: 'Focus on polite complaints. Practice intonation for "Excuse me..." (polite, not angry).'
  },
  {
    id: 'session-6',
    number: 6,
    date: '2026-03-21',
    title: 'Directions + Transport',
    goal: 'Ask for and understand directions. Talk about taxis, buses, and trains.',
    vocab: [
      { id: genId(), word: 'Straight ahead', meaning: 'Going forward', example: 'Go straight ahead.', category: 'directions' },
      { id: genId(), word: 'Turn left / right', meaning: 'Change direction', example: 'Turn left at the corner.', category: 'directions' },
      { id: genId(), word: 'Near / Far', meaning: 'Close / Distant', example: 'Is it near or far?', category: 'distance' },
      { id: genId(), word: 'Next to', meaning: 'Beside', example: 'It\'s next to the bank.', category: 'location' },
      { id: genId(), word: 'Opposite', meaning: 'Across from', example: 'It\'s opposite the station.', category: 'location' },
      { id: genId(), word: 'Ticket', meaning: 'Travel pass', example: 'One ticket to the city center.', category: 'transport' },
      { id: genId(), word: 'Platform', meaning: 'Train boarding area', example: 'The train leaves from platform 3.', category: 'transport' },
      { id: genId(), word: 'Station', meaning: 'Train/bus stop place', example: 'Where is the bus station?', category: 'transport' },
    ],
    phrases: [
      { id: genId(), phrase: 'How do I get to...?', translation: 'كيف أصلُ إلى ...؟', situation: 'Asking directions' },
      { id: genId(), phrase: 'Is it within walking distance?', translation: 'هل يُمكِنُ الوصولُ إليه سيراً على الأقدام؟', situation: 'Distance' },
      { id: genId(), phrase: 'Go straight, then turn left.', translation: 'اِمشِ مباشرةً ثُمَّ انعطِف يساراً.', situation: 'Giving directions' },
      { id: genId(), phrase: 'How much is a ticket to...?', translation: 'كَم ثمنُ التذكرة إلى ...؟', situation: 'Transport' },
      { id: genId(), phrase: 'Could you call a taxi?', translation: 'هل يُمكِنُكَ أن تستدعيَ لي سيَّارةَ أُجرة؟', situation: 'Transport' },
    ],
    grammar: {
      title: 'Imperatives for Directions',
      explanation: 'Use the base form of verbs to give directions. No subject needed.',
      examples: [
        'Go straight.',
        'Turn left at the traffic light.',
        'Walk for 5 minutes.',
        'Take the second right.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Direction words and transport vocabulary.' },
      { id: genId(), title: 'Map Practice', duration: 10, description: 'Use a simple map to give directions.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Taxi ride and asking directions.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Map Directions',
        instruction: 'Choose the correct direction based on the map scenario.',
        content: {
          questions: [
            { id: genId(), question: 'You are at the hotel. The bank is on the next street. What do you do?', options: ['Go straight and turn left.', 'Turn around.', 'Go backwards.'], correctIndex: 0 },
            { id: genId(), question: 'The restaurant is next to the post office. You see the post office. Where is the restaurant?', options: ['Far away', 'Beside the post office', 'Opposite'], correctIndex: 1 },
            { id: genId(), question: 'The station is 3 kilometers away. Is it within walking distance?', options: ['Yes, it\'s near.', 'No, it\'s far. Take a taxi.', 'Maybe.'], correctIndex: 1 },
            { id: genId(), question: 'The museum is opposite the park. Where is it?', options: ['Next to the park', 'Behind the park', 'Across from the park'], correctIndex: 2 },
          ]
        },
        answerKey: '1. a) Go straight and turn left. 2. b) Beside the post office 3. b) No, take a taxi. 4. c) Across from the park'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Direction Phrases',
        instruction: 'Complete with: straight, left, right, next to, opposite',
        content: {
          sentences: [
            { id: genId(), text: 'Go ___, then turn ___.', answer: 'straight, left' },
            { id: genId(), text: 'The bank is ___ the supermarket.', answer: 'next to' },
            { id: genId(), text: 'Turn ___ at the traffic light.', answer: 'right' },
            { id: genId(), text: 'The pharmacy is ___ the hospital.', answer: 'opposite' },
          ]
        },
        answerKey: '1. straight, left 2. next to 3. right 4. opposite'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Buying a Ticket',
        instruction: 'Complete the dialogue with: ticket, platform, much, station, return',
        content: {
          sentences: [
            { id: genId(), text: 'Where is the bus ___?', answer: 'station' },
            { id: genId(), text: 'One ___ to the city center, please.', answer: 'ticket' },
            { id: genId(), text: 'How ___ is it?', answer: 'much' },
            { id: genId(), text: 'A single or ___ ticket?', answer: 'return' },
            { id: genId(), text: 'Which ___ does the train leave from?', answer: 'platform' },
          ]
        },
        answerKey: '1. station 2. ticket 3. much 4. return 5. platform'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 8 direction sentences.', type: 'writing', details: 'Use all direction words: straight, left, right, next to, opposite.' },
      { id: genId(), task: 'Record 2 minutes: How to get from your home to a famous place.', type: 'recording', details: 'Give step-by-step directions.' },
    ],
    roleplay: {
      title: 'Taxi Ride + Fare Question',
      situation: 'You need to take a taxi to your hotel. Ask about the fare.',
      studentRole: 'Passenger',
      teacherRole: 'Taxi driver',
      script: [
        { speaker: 'student', line: 'Hello, could you take me to the Grand Hotel, please?', cue: 'Give destination' },
        { speaker: 'teacher', line: 'Sure! The Grand Hotel. Do you know where it is?' },
        { speaker: 'student', line: 'No, I don\'t. Is it far?', cue: 'Ask about distance' },
        { speaker: 'teacher', line: 'About 15 minutes. Traffic is okay right now.' },
        { speaker: 'student', line: 'How much will it cost?', cue: 'Ask about fare' },
        { speaker: 'teacher', line: 'Probably around 20 dollars. I\'ll use the meter.' },
        { speaker: 'student', line: 'Great, thank you.', cue: 'Agree' },
        { speaker: 'teacher', line: '(Arriving) Here we are. The Grand Hotel. That\'s $18.50.' },
        { speaker: 'student', line: 'Here\'s 20 dollars. Keep the change.', cue: 'Pay and tip' },
        { speaker: 'teacher', line: 'Thank you! Have a nice day!' },
      ]
    },
    answerKey: 'Exercise 1: 1.a 2.b 3.b 4.c\nExercise 2: straight/left, next to, right, opposite\nExercise 3: station, ticket, much, return, platform',
    teacherNotes: 'Use real maps if possible. Practice both asking and giving directions.'
  },
  {
    id: 'session-7',
    number: 7,
    date: '2026-03-25',
    title: 'Past Simple for Travel Stories',
    goal: 'Talk about what you did in the past. Share travel experiences.',
    vocab: [
      { id: genId(), word: 'Went (go)', meaning: 'Past of "go"', example: 'I went to Paris last year.', category: 'irregular' },
      { id: genId(), word: 'Stayed (stay)', meaning: 'Past of "stay"', example: 'We stayed at a hotel.', category: 'regular' },
      { id: genId(), word: 'Visited (visit)', meaning: 'Past of "visit"', example: 'I visited many museums.', category: 'regular' },
      { id: genId(), word: 'Ate (eat)', meaning: 'Past of "eat"', example: 'I ate pizza every day.', category: 'irregular' },
      { id: genId(), word: 'Saw (see)', meaning: 'Past of "see"', example: 'I saw the Eiffel Tower.', category: 'irregular' },
      { id: genId(), word: 'Enjoyed (enjoy)', meaning: 'Past of "enjoy"', example: 'I enjoyed the trip.', category: 'regular' },
      { id: genId(), word: 'Had (have)', meaning: 'Past of "have"', example: 'I had a great time.', category: 'irregular' },
      { id: genId(), word: 'Took (take)', meaning: 'Past of "take"', example: 'I took many photos.', category: 'irregular' },
    ],
    phrases: [
      { id: genId(), phrase: 'I went to... last year.', translation: 'ذهبتُ إلى ... العامَ الماضي.', situation: 'Travel stories' },
      { id: genId(), phrase: 'It was amazing/terrible.', translation: 'كانتِ التجربةُ رائعة / سيِّئة جداً.', situation: 'Describing experiences' },
      { id: genId(), phrase: 'I stayed there for...', translation: 'مكثتُ هناكَ لمدةِ ...', situation: 'Duration' },
      { id: genId(), phrase: 'Have you ever been to...?', translation: 'هل سبقَ أن زُرتَ ...؟', situation: 'Asking about experiences' },
    ],
    grammar: {
      title: 'Past Simple',
      explanation: 'Regular verbs add -ed (visited, stayed). Irregular verbs change form (go→went, eat→ate). Use for completed past actions.',
      examples: [
        'I visited London last summer. (regular)',
        'I went to the beach yesterday. (irregular)',
        'Did you enjoy your trip? (question)',
        'I didn\'t see that. (negative)',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Past tense verbs (regular & irregular).' },
      { id: genId(), title: 'Grammar Focus', duration: 15, description: 'Past simple: positive, negative, questions.' },
      { id: genId(), title: 'Exercises', duration: 15, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Speaking Practice', duration: 10, description: 'Share a short travel story.' },
      { id: genId(), title: 'Roleplay', duration: 10, description: 'Chat about past trips.' },
      { id: genId(), title: 'Wrap-up & Homework', duration: 5, description: 'Review and assign homework.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Past Tense Forms',
        instruction: 'Write the past tense of these verbs.',
        content: {
          sentences: [
            { id: genId(), text: 'go → ___', answer: 'went' },
            { id: genId(), text: 'eat → ___', answer: 'ate' },
            { id: genId(), text: 'visit → ___', answer: 'visited' },
            { id: genId(), text: 'see → ___', answer: 'saw' },
            { id: genId(), text: 'stay → ___', answer: 'stayed' },
            { id: genId(), text: 'have → ___', answer: 'had' },
            { id: genId(), text: 'take → ___', answer: 'took' },
            { id: genId(), text: 'enjoy → ___', answer: 'enjoyed' },
            { id: genId(), text: 'buy → ___', answer: 'bought' },
            { id: genId(), text: 'make → ___', answer: 'made' },
          ]
        },
        answerKey: 'went, ate, visited, saw, stayed, had, took, enjoyed, bought, made'
      },
      {
        id: genId(),
        type: 'fill-blank',
        title: 'Short Story',
        instruction: 'Complete the story with past tense verbs.',
        content: {
          sentences: [
            { id: genId(), text: 'Last summer, I ___ (go) to Spain.', answer: 'went' },
            { id: genId(), text: 'I ___ (stay) in a nice hotel near the beach.', answer: 'stayed' },
            { id: genId(), text: 'I ___ (eat) delicious seafood.', answer: 'ate' },
            { id: genId(), text: 'I ___ (see) many beautiful places.', answer: 'saw' },
            { id: genId(), text: 'I ___ (have) a wonderful time!', answer: 'had' },
          ]
        },
        answerKey: 'went, stayed, ate, saw, had'
      },
      {
        id: genId(),
        type: 'speaking-prompt',
        title: 'My Last Trip',
        instruction: 'Talk about your last trip or vacation. Use past tense.',
        content: {
          prompt: 'Tell me about a trip you took. Where did you go? What did you do? Did you enjoy it?',
          duration: 120,
          suggestedPoints: ['Where did you go?', 'Who did you go with?', 'What did you see/eat/do?', 'Did you enjoy it?']
        },
        answerKey: 'Student shares their own story. Check for correct past tense usage.'
      }
    ],
    homework: [
      { id: genId(), task: 'Write 6 sentences about last weekend.', type: 'writing', details: 'Use at least 4 different past tense verbs.' },
      { id: genId(), task: 'Practice past tense verb list.', type: 'study', details: 'Write each verb and its past form 3 times.' },
    ],
    roleplay: {
      title: 'Chatting About Trips',
      situation: 'You meet someone at a café. Start a conversation about travel.',
      studentRole: 'A traveler sharing experiences',
      teacherRole: 'A new friend asking questions',
      script: [
        { speaker: 'teacher', line: 'So, do you travel often?' },
        { speaker: 'student', line: 'Yes, I love traveling. I went to Italy last year.', cue: 'Share past experience' },
        { speaker: 'teacher', line: 'Oh, nice! Which cities did you visit?' },
        { speaker: 'student', line: 'I visited Rome and Florence. They were beautiful!', cue: 'Give details' },
        { speaker: 'teacher', line: 'What did you enjoy the most?' },
        { speaker: 'student', line: 'I really enjoyed the food. I ate pizza every day!', cue: 'Share highlights' },
        { speaker: 'teacher', line: 'That sounds amazing! How long did you stay?' },
        { speaker: 'student', line: 'I stayed for one week. It was too short!', cue: 'Talk about duration' },
        { speaker: 'teacher', line: 'Did you take many photos?' },
        { speaker: 'student', line: 'Yes, I took hundreds of photos. I saw so many beautiful things.', cue: 'More details' },
      ]
    },
    answerKey: 'Exercise 1: went, ate, visited, saw, stayed, had, took, enjoyed, bought, made\nExercise 2: went, stayed, ate, saw, had\nExercise 3: Student\'s own story',
    teacherNotes: 'Let student talk freely. Correct major errors only. Focus on confidence in storytelling.'
  },
  {
    id: 'session-8',
    number: 8,
    date: '2026-03-28',
    title: 'Emergencies + Pharmacy',
    goal: 'Handle urgent situations politely. Ask for medical help.',
    vocab: [
      { id: genId(), word: 'Headache', meaning: 'Pain in the head', example: 'I have a headache.', category: 'symptoms' },
      { id: genId(), word: 'Fever', meaning: 'High body temperature', example: 'I have a fever.', category: 'symptoms' },
      { id: genId(), word: 'Stomachache', meaning: 'Pain in stomach', example: 'My stomach hurts.', category: 'symptoms' },
      { id: genId(), word: 'Pain', meaning: 'Physical hurt', example: 'I have pain in my leg.', category: 'symptoms' },
      { id: genId(), word: 'Medicine', meaning: 'Treatment for illness', example: 'I need some medicine.', category: 'medical' },
      { id: genId(), word: 'Pharmacy', meaning: 'Shop for medicine', example: 'Where is the nearest pharmacy?', category: 'places' },
      { id: genId(), word: 'Police', meaning: 'Law enforcement', example: 'I need to call the police.', category: 'emergency' },
      { id: genId(), word: 'Lost', meaning: 'Cannot find something', example: 'I lost my passport.', category: 'problems' },
    ],
    phrases: [
      { id: genId(), phrase: 'I don\'t feel well.', translation: 'أنا لا أشعرُ بأنني بخير.', situation: 'Feeling sick' },
      { id: genId(), phrase: 'I lost my passport.', translation: 'أضعتُ جوازَ سفري.', situation: 'Lost item' },
      { id: genId(), phrase: 'I need help.', translation: 'أحتاجُ إلى المساعدة.', situation: 'Emergency' },
      { id: genId(), phrase: 'Where is the nearest hospital?', translation: 'أينَ أقربُ مستشفى؟', situation: 'Medical' },
      { id: genId(), phrase: 'Do you have something for...?', translation: 'هل لديكَ دواءٌ لِـ ...؟', situation: 'Pharmacy' },
      { id: genId(), phrase: 'I have a headache.', translation: 'لديَّ صُداع.', situation: 'Symptoms' },
    ],
    grammar: {
      title: 'I have... / I need...',
      explanation: 'Use "I have" for symptoms and possessions. Use "I need" for things you want or require.',
      examples: [
        'I have a headache.',
        'I have a fever.',
        'I need a doctor.',
        'I need some medicine for my headache.',
      ]
    },
    lessonSteps: [
      { id: genId(), title: 'Vocabulary', duration: 10, description: 'Emergency and medical vocabulary.' },
      { id: genId(), title: 'Key Phrases', duration: 10, description: 'Practice emergency phrases.' },
      { id: genId(), title: 'Exercises', duration: 20, description: 'Complete all exercises together.' },
      { id: genId(), title: 'Roleplay', duration: 20, description: 'Pharmacy and emergency scenarios.' },
      { id: genId(), title: 'Month Review', duration: 10, description: 'Review all topics from Month 1.' },
      { id: genId(), title: 'Wrap-up & Next Month', duration: 5, description: 'Celebrate progress! Plan ahead.' },
    ],
    exercises: [
      {
        id: genId(),
        type: 'multiple-choice',
        title: 'Emergency Situations',
        instruction: 'Choose the best sentence for each situation.',
        content: {
          questions: [
            { id: genId(), question: 'You lost your passport:', options: ['I lost my passport. Can you help me?', 'Passport gone!', 'No passport!'], correctIndex: 0 },
            { id: genId(), question: 'You feel very sick:', options: ['Bad!', 'I don\'t feel well. I need a doctor.', 'Sick!'], correctIndex: 1 },
            { id: genId(), question: 'Someone stole your bag:', options: ['Bag stolen!', 'I need to call the police. Someone took my bag.', 'My bag!'], correctIndex: 1 },
            { id: genId(), question: 'You need medicine:', options: ['Medicine please!', 'Where is the nearest pharmacy?', 'Drug store!'], correctIndex: 1 },
            { id: genId(), question: 'You have a terrible headache:', options: ['Head pain!', 'I have a bad headache. Do you have something for it?', 'Ouch!'], correctIndex: 1 },
            { id: genId(), question: 'You are lost and need help:', options: ['Lost!', 'Excuse me, I\'m lost. Can you help me?', 'Where am I?'], correctIndex: 1 },
          ]
        },
        answerKey: '1. a 2. b 3. b 4. b 5. b 6. b'
      },
      {
        id: genId(),
        type: 'matching',
        title: 'Symptom and Advice',
        instruction: 'Match each symptom to the advice.',
        content: {
          pairs: [
            { id: genId(), left: 'I have a headache.', right: 'Take a painkiller and rest.' },
            { id: genId(), left: 'I have a fever.', right: 'Drink water and see a doctor.' },
            { id: genId(), left: 'I have a stomachache.', right: 'Don\'t eat heavy food.' },
            { id: genId(), left: 'I lost my passport.', right: 'Go to your embassy.' },
            { id: genId(), left: 'I feel dizzy.', right: 'Sit down and drink water.' },
            { id: genId(), left: 'I have an allergy.', right: 'Take antihistamines and avoid the trigger.' },
          ]
        },
        answerKey: 'All matched correctly'
      },
      {
        id: genId(),
        type: 'roleplay-card',
        title: 'Pharmacy Roleplay Cards',
        instruction: 'Practice the pharmacy dialogue.',
        content: {
          situation: 'You are at a pharmacy. Describe your symptoms and ask for medicine.',
          studentRole: 'Customer with a headache',
          teacherRole: 'Pharmacist',
          studentLines: [
            { id: genId(), prompt: 'Greet and explain your problem.', suggestedResponse: 'Hello, I have a terrible headache. Do you have something for it?' },
            { id: genId(), prompt: 'Answer how long you\'ve had it.', suggestedResponse: 'Since this morning.' },
            { id: genId(), prompt: 'Ask about dosage.', suggestedResponse: 'How often should I take it?' },
            { id: genId(), prompt: 'Ask about side effects.', suggestedResponse: 'Are there any side effects?' },
            { id: genId(), prompt: 'Thank and pay.', suggestedResponse: 'Thank you. How much is it?' },
          ],
          teacherLines: [
            { id: genId(), line: 'Hello! How can I help you today?' },
            { id: genId(), line: 'I\'m sorry to hear that. How long have you had it?' },
            { id: genId(), line: 'Take this painkiller. It works well for headaches.' },
            { id: genId(), line: 'One pill every 6 hours, with food.' },
            { id: genId(), line: 'It might make you sleepy. Don\'t drive after taking it.' },
            { id: genId(), line: 'That\'s $8.50. Feel better soon!' },
          ]
        },
        answerKey: 'Students practice the dialogue. Check for polite requests and clear symptom description.'
      }
    ],
    homework: [
      { id: genId(), task: 'Memorize emergency phrases.', type: 'study', details: 'Write each phrase 3 times. Practice saying them.' },
      { id: genId(), task: 'Record 1 minute: "I need a doctor because..."', type: 'recording', details: 'Practice explaining symptoms clearly.' },
    ],
    roleplay: {
      title: 'At the Pharmacy',
      situation: 'You have a headache and need medicine. Go to a pharmacy.',
      studentRole: 'Customer',
      teacherRole: 'Pharmacist',
      script: [
        { speaker: 'student', line: 'Hello, I don\'t feel well. I have a bad headache.', cue: 'Explain symptom' },
        { speaker: 'teacher', line: 'I\'m sorry to hear that. How long have you had it?' },
        { speaker: 'student', line: 'Since this morning. I couldn\'t sleep well.', cue: 'Give details' },
        { speaker: 'teacher', line: 'I understand. Do you have any allergies?' },
        { speaker: 'student', line: 'No, I don\'t have any allergies.', cue: 'Answer about allergies' },
        { speaker: 'teacher', line: 'Good. This medicine is good for headaches. Take one pill with water.' },
        { speaker: 'student', line: 'How often can I take it?', cue: 'Ask about dosage' },
        { speaker: 'teacher', line: 'Every 6 hours. Don\'t take more than 4 pills a day.' },
        { speaker: 'student', line: 'Thank you. How much is it?', cue: 'Ask price' },
        { speaker: 'teacher', line: 'It\'s $7.99. I hope you feel better soon!' },
      ]
    },
    answerKey: 'Exercise 1: a, b, b, b, b, b\nExercise 2: All matched correctly\nExercise 3: Dialogue practice',
    teacherNotes: 'This is the last session. Celebrate progress! Review key topics. Encourage continued practice.'
  }
];

// Phrasebook data
export const phrasebook: PhraseItem[] = [
  // Airport
  { id: genId(), phrase: 'Where is the check-in counter?', translation: 'أينَ مكتبُ تسجيلِ الدُّخول؟', category: 'Airport', situation: 'Finding your way' },
  { id: genId(), phrase: 'What time does boarding start?', translation: 'متى يبدأُ الصعودُ إلى الطائرة؟', category: 'Airport', situation: 'Timing' },
  { id: genId(), phrase: 'Is this flight on time?', translation: 'هل هذهِ الرحلةُ في الموعد؟', category: 'Airport', situation: 'Status' },
  { id: genId(), phrase: 'Can I have a window seat?', translation: 'هل يُمكِنُني الحصولُ على مقعدٍ عند النافذة؟', category: 'Airport', situation: 'Seating' },
  { id: genId(), phrase: 'Where is gate A12?', translation: 'أينَ بوّابةُ A12؟', category: 'Airport', situation: 'Finding your way' },
  { id: genId(), phrase: 'My flight is delayed.', translation: 'رِحلتي مُتأخِّرة.', category: 'Airport', situation: 'Problems' },
  { id: genId(), phrase: 'I missed my connecting flight.', translation: 'فاتتني رحلةُ الرَّبط.', category: 'Airport', situation: 'Problems' },
  
  // Hotel
  { id: genId(), phrase: 'I have a reservation under [name].', translation: 'لديَّ حجزٌ باسم [الاسم].', category: 'Hotel', situation: 'Check-in' },
  { id: genId(), phrase: 'What time is breakfast?', translation: 'في أيِّ وقتٍ تُقدَّمُ وجبةُ الإفطار؟', category: 'Hotel', situation: 'Amenities' },
  { id: genId(), phrase: 'Is there a gym?', translation: 'هل يوجدُ نادٍ رياضي في الفندق؟', category: 'Hotel', situation: 'Amenities' },
  { id: genId(), phrase: 'Could I have extra towels?', translation: 'هل يُمكِنُني الحصولُ على مناشفَ إضافيّة؟', category: 'Hotel', situation: 'Requests' },
  { id: genId(), phrase: 'The AC doesn\'t work.', translation: 'مكيّفُ الهواء لا يعمل.', category: 'Hotel', situation: 'Problems' },
  { id: genId(), phrase: 'What time is check-out?', translation: 'متى موعدُ تسجيلِ الخروج؟', category: 'Hotel', situation: 'Check-out' },
  { id: genId(), phrase: 'Can I store my luggage here?', translation: 'هل يُمكِنُني تركُ أمتعتي هنا؟', category: 'Hotel', situation: 'Services' },
  
  // Restaurant
  { id: genId(), phrase: 'A table for two, please.', translation: 'طاولةٌ لشخصين، من فضلك.', category: 'Restaurant', situation: 'Arriving' },
  { id: genId(), phrase: 'Could I see the menu?', translation: 'هل يُمكِنُني رؤيةُ قائمةِ الطعام؟', category: 'Restaurant', situation: 'Ordering' },
  { id: genId(), phrase: 'I\'m allergic to nuts.', translation: 'أنا مُصابٌ بالحساسية من المكسَّرات.', category: 'Restaurant', situation: 'Dietary' },
  { id: genId(), phrase: 'Is this dish vegetarian?', translation: 'هل هذا الطبقُ نباتيّ؟', category: 'Restaurant', situation: 'Dietary' },
  { id: genId(), phrase: 'Could I have a glass of water?', translation: 'هل يُمكِنُني الحصولُ على كأسِ ماء؟', category: 'Restaurant', situation: 'Drinks' },
  { id: genId(), phrase: 'This is not what I ordered.', translation: 'هذا ليسَ ما طلبتُه.', category: 'Restaurant', situation: 'Problems' },
  { id: genId(), phrase: 'Could I have the bill, please?', translation: 'هل يُمكِنُكَ إحضارُ الفاتورة، من فضلك؟', category: 'Restaurant', situation: 'Paying' },
  { id: genId(), phrase: 'Can I pay by card?', translation: 'هل يُمكِنُني الدفعُ بالبطاقة؟', category: 'Restaurant', situation: 'Paying' },
  
  // Directions
  { id: genId(), phrase: 'How do I get to the station?', translation: 'كيف أصلُ إلى المحطّة؟', category: 'Directions', situation: 'Asking' },
  { id: genId(), phrase: 'Is it within walking distance?', translation: 'هل يُمكِنُ الوصولُ إليها سيراً على الأقدام؟', category: 'Directions', situation: 'Distance' },
  { id: genId(), phrase: 'Could you show me on the map?', translation: 'هل يُمكِنُكَ أن تُشيرَ إليّ على الخريطة؟', category: 'Directions', situation: 'Clarification' },
  { id: genId(), phrase: 'Turn left at the traffic light.', translation: 'انعطِف يساراً عند إشارة المرور.', category: 'Directions', situation: 'Giving' },
  { id: genId(), phrase: 'It\'s on the right side.', translation: 'إنَّهُ على الجهةِ اليُمنى.', category: 'Directions', situation: 'Giving' },
  { id: genId(), phrase: 'Go straight for two blocks.', translation: 'اِمشِ مباشرةً لمربَّعين سكنيَّين.', category: 'Directions', situation: 'Giving' },
  
  // Emergencies
  { id: genId(), phrase: 'I need help!', translation: 'أحتاجُ إلى المساعدة!', category: 'Emergencies', situation: 'Urgent' },
  { id: genId(), phrase: 'Call an ambulance!', translation: 'اتَّصِل بالإسعاف!', category: 'Emergencies', situation: 'Medical' },
  { id: genId(), phrase: 'I need to see a doctor.', translation: 'أحتاجُ أن أرى طبيباً.', category: 'Emergencies', situation: 'Medical' },
  { id: genId(), phrase: 'Where is the nearest hospital?', translation: 'أينَ أقربُ مستشفى؟', category: 'Emergencies', situation: 'Medical' },
  { id: genId(), phrase: 'I lost my passport.', translation: 'أضعتُ جوازَ سفري.', category: 'Emergencies', situation: 'Lost items' },
  { id: genId(), phrase: 'Someone stole my wallet.', translation: 'شخصٌ ما سرقَ محفظتي.', category: 'Emergencies', situation: 'Crime' },
  { id: genId(), phrase: 'I need to call the police.', translation: 'أحتاجُ أن أتَّصِل بالشرطة.', category: 'Emergencies', situation: 'Crime' },
  { id: genId(), phrase: 'I don\'t feel well.', translation: 'أنا لا أشعرُ بأنني بخير.', category: 'Emergencies', situation: 'Medical' },
];

// Default passwords
export const DEFAULT_TEACHER_PASSWORD = 'teacher123';
export const DEFAULT_STUDENT_PASSWORD = 'student123';

// Initial app data
export const initialAppData: AppData = {
  sessions,
  submissions: [],
  progress: [],
  teacherPassword: DEFAULT_TEACHER_PASSWORD,
  studentPassword: DEFAULT_STUDENT_PASSWORD,
  favoritePhraseIds: [],
  phrasebook,
};
