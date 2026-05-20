const DATA = {
    1994: {
        videos: [
            { title: "The WELL — Early Community Video Posts", tag: "Community", meta: "The WELL BBS · 1994", desc: "One of the earliest online communities experimenting with video-like multimedia posts before the web as we know it existed.", views: "Thousands of downloads", bar: 60 },
            { title: "Wired Magazine's First Website Tour", tag: "Tech", meta: "HotWired · Oct 1994", desc: "HotWired's debut online edition walked visitors through the brand-new concept of a commercial website — and ran the world's first banner ad.", views: "First web ad ever", bar: 75 },
            { title: "Mosaic Browser Demo Tape", tag: "Tech", meta: "NCSA · 1994", desc: "The tape that introduced university campuses to graphical web browsing, changing how an entire generation understood the internet.", views: "Campus screenings", bar: 70 },
            { title: "RealAudio — First Internet Radio Clips", tag: "Audio", meta: "Progressive Networks · 1994", desc: "The pioneering audio streams that let people hear content over a dial-up connection for the very first time.", views: "Pioneering streams", bar: 50 },
        ],
        music: [
            { num: "01", song: "The Sign", artist: "Ace of Base", wks: "6 wks at #1" },
            { num: "02", song: "I'll Make Love to You", artist: "Boyz II Men", wks: "14 wks at #1" },
            { num: "03", song: "Hero", artist: "Mariah Carey", wks: "4 wks at #1" },
            { num: "04", song: "Stay (I Missed You)", artist: "Lisa Loeb", wks: "3 wks at #1" },
            { num: "05", song: "I Swear", artist: "All-4-One", wks: "11 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-terminal", name: "Usenet Flame Wars", desc: "Before forums, there was Usenet. Heated debates in plain text, endlessly quoted and nested.", spread: "Usenet · 1994" },
            { icon: "fa-solid fa-at", name: "You've Got Mail", desc: "AOL's dial-up welcome sound becomes the sonic identity of a generation discovering email.", spread: "AOL · 1994" },
            { icon: "fa-solid fa-spider", name: "Web Crawler Launch", desc: "The first full-text web search engine. The internet was small enough to actually crawl.", spread: "University of Washington · Apr 1994" },
        ],
        sites: [
            { icon: "fa-solid fa-spider", name: "WebCrawler", desc: "The first full-text web search engine. Indexed the entire web in one afternoon.", visits: "~10K pages indexed" },
            { icon: "fa-solid fa-envelope", name: "AOL Dial-Up", desc: "The on-ramp for millions. Free CDs in every pizza box, cereal box, and mail slot.", visits: "1M subscribers" },
            { icon: "fa-solid fa-newspaper", name: "HotWired", desc: "The first commercial web magazine. Also ran the very first banner ad on Oct 27, 1994.", visits: "Pioneer site" },
            { icon: "fa-solid fa-network-wired", name: "The WELL", desc: "The early online community where internet culture was first being written.", visits: "10K members" },
        ],
        events: [
            { date: "Apr 1994", title: "Netscape Founded", desc: "Marc Andreessen and Jim Clark found Mosaic Communications, soon to become Netscape. The browser wars begin." },
            { date: "Oct 1994", title: "First Banner Ad Goes Live", desc: "HotWired runs the first clickable web banner ad for AT&T. 44% of viewers click it. It will never be that good again." },
            { date: "Nov 1994", title: "Amazon.com Domain Registered", desc: "Jeff Bezos registers amazon.com from his garage in Bellevue, Washington. He plans to sell books." },
        ]
    },
    1995: {
        videos: [
            { title: "Windows 95 Launch — Rolling Stones Ad", tag: "Tech", meta: "Microsoft · Aug 1995", desc: "Microsoft paid the Rolling Stones to license 'Start Me Up' for the most expensive OS launch in history — broadcasted and shared on early web pages.", views: "Millions on TV & early web", bar: 95 },
            { title: "RealAudio Live Streams Begin", tag: "Audio", meta: "Progressive Networks · 1995", desc: "Real-time audio over the internet becomes reality, laying the groundwork for everything from podcasts to Spotify.", views: "First real streaming", bar: 70 },
            { title: "The First YouTube-ish Video Clips (FTP)", tag: "Viral", meta: "FTP servers · 1995", desc: "Before video hosting existed, curious early adopters traded short video files through FTP servers — patience required.", views: "Slow but legendary", bar: 55 },
            { title: "Toy Story Trailer (Downloaded Online)", tag: "Film", meta: "Pixar / Disney · 1995", desc: "The first Pixar feature's trailer circulated on Usenet and IRC — a glimpse of a future where trailers would live online, not just in theaters.", views: "Shared on Usenet & IRC", bar: 80 },
        ],
        music: [
            { num: "01", song: "Gangsta's Paradise", artist: "Coolio ft. L.V.", wks: "3 wks at #1" },
            { num: "02", song: "Waterfalls", artist: "TLC", wks: "7 wks at #1" },
            { num: "03", song: "Take a Bow", artist: "Madonna", wks: "7 wks at #1" },
            { num: "04", song: "Creep", artist: "TLC", wks: "4 wks at #1" },
            { num: "05", song: "On Bended Knee", artist: "Boyz II Men", wks: "6 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-window-maximize", name: "Windows 95 Hype", desc: "Bill Gates and Jay Leno. The Rolling Stones. A billion-dollar OS launch treated like a rock concert.", spread: "TV → Early Web · Aug 1995" },
            { icon: "fa-solid fa-robot", name: "The Turing Test Jokes", desc: "Early chatbots like ALICE sparked 'can machines think?' debates on every BBS and mailing list.", spread: "Usenet · 1995" },
            { icon: "fa-solid fa-compact-disc", name: "AOL Free CD Spam", desc: "500 hours FREE! AOL mailed 250 million CDs. The internet's first junk mail campaign.", spread: "Every mailbox in America · 1995" },
        ],
        sites: [
            { icon: "fa-brands fa-amazon", name: "Amazon.com", desc: "Opened for business July 1995. Sold its first book: Fluid Concepts and Creative Analogies.", visits: "Books only" },
            { icon: "fa-solid fa-globe", name: "Yahoo!", desc: "Jerry and David's Guide to the World Wide Web officially becomes Yahoo! in 1995.", visits: "1M visits/day" },
            { icon: "fa-brands fa-windows", name: "Microsoft.com", desc: "Windows 95 launches and millions try to visit microsoft.com for the first time.", visits: "Crashed repeatedly" },
            { icon: "fa-solid fa-comment-dots", name: "mIRC / IRC Networks", desc: "Real-time chat before instant messaging. Channels, bots, and the /kick command.", visits: "Millions of users" },
        ],
        events: [
            { date: "Jul 1995", title: "Amazon Sells Its First Book", desc: "Jeff Bezos ships Fluid Concepts and Creative Analogies to a customer in Seattle. E-commerce is born." },
            { date: "Aug 1995", title: "Windows 95 Launches", desc: "Microsoft sells 7 million copies in five weeks. The Start button changes computing forever." },
            { date: "Aug 1995", title: "Netscape IPO", desc: "Netscape goes public. Shares double on day one. The dot-com gold rush officially begins." },
        ]
    },
    1996: {
        videos: [
            { title: "Space Jam Website Launch", tag: "Sports", meta: "Warner Bros · Nov 1996", desc: "Launched to promote the Michael Jordan film, the Space Jam site became one of the most visited pages of 1996 — and is still live, unchanged.", views: "2.1M pageviews", bar: 90 },
            { title: "Dancing Baby (Oogachaka)", tag: "Animation", meta: "Ron Lussier · 1996", desc: "A 3D-rendered baby dancing to 'Hooked on a Feeling' — the first true viral internet meme, shared endlessly via email attachment.", views: "Shared via email", bar: 100 },
            { title: "The Hampster Dance original", tag: "Flash", meta: "Hampton's Hamster House", desc: "A looping GIF page featuring speeded-up hamsters that spawned a hit song, chain emails, and the blueprint for viral absurdity.", views: "Millions of loops", bar: 85 },
            { title: "Mahir Cagri early homepage", tag: "Personal", meta: "GeoCities · 1996", desc: "A Turkish man's personal GeoCities page with the phrase 'I Kiss You!!!' unwittingly became an early viral celebrity moment.", views: "Growing global fan base", bar: 45 },
        ],
        music: [
            { num: "01", song: "Macarena", artist: "Los Del Rio", wks: "14 wks at #1" },
            { num: "02", song: "One Sweet Day", artist: "Mariah Carey & Boyz II Men", wks: "16 wks at #1" },
            { num: "03", song: "Because You Loved Me", artist: "Céline Dion", wks: "6 wks at #1" },
            { num: "04", song: "Give Me One Reason", artist: "Tracy Chapman", wks: "3 wks at #1" },
            { num: "05", song: "Always Be My Baby", artist: "Mariah Carey", wks: "2 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-baby", name: "Dancing Baby", desc: "The first viral internet meme — a 3D-rendered baby doing the Macarena, sent via email worldwide.", spread: "Email chains · 1996" },
            { icon: "fa-solid fa-circle-play", name: "Hampster Dance", desc: "Looping animated GIF of hamsters dancing to a sped-up version of a Disney song.", spread: "GeoCities · 1996" },
            { icon: "fa-solid fa-wrench", name: "Under Construction GIFs", desc: "Every website had blinking 'Under Construction' badges. Ironic nostalgia fuel.", spread: "Universal · 1994–2001" },
        ],
        sites: [
            { icon: "fa-solid fa-globe", name: "Yahoo!", desc: "THE web directory. If it wasn't on Yahoo, it didn't exist.", visits: "20M/month" },
            { icon: "fa-solid fa-envelope-open-text", name: "AOL.com", desc: "You've got mail. The internet for most of America.", visits: "35M/month" },
            { icon: "fa-solid fa-basketball", name: "Space Jam (1996)", desc: "The most famous website still online — unchanged since 1996.", visits: "3M/month" },
            { icon: "fa-solid fa-magnifying-glass", name: "AltaVista", desc: "Before Google, there was AltaVista.", visits: "12M/month" },
        ],
        events: [
            { date: "Aug 1996", title: "Hotmail Launches", desc: "Free web-based email becomes available to anyone, forever changing how people communicate online." },
            { date: "Sep 1996", title: "eBay Goes Public", desc: "Online auctions open to regular users — the first major e-commerce marketplace for individuals." },
            { date: "Dec 1996", title: "AltaVista Reaches 80M Pages", desc: "The first major search engine milestone, indexing more of the web than any human could read." },
        ]
    },
    1997: {
        videos: [
            { title: "Deep Blue vs. Kasparov — Online Coverage", tag: "Tech", meta: "IBM / Web · May 1997", desc: "For the first time, a chess match between a human and a computer was followed in near-real-time online. Deep Blue won game 6, and the web erupted.", views: "Millions of live text updates", bar: 90, featured: true },
            { title: "Daft Punk 'Da Funk' — First Major Music Video Streamed", tag: "Music", meta: "Various sites · 1997", desc: "Among the earliest music videos compressed and distributed online, showing a hint of what would eventually become YouTube.", views: "Pioneering streams", bar: 55 },
            { title: "Hanson 'MMMBop' on Early Fan Sites", tag: "Music", meta: "GeoCities fan pages · 1997", desc: "Teen pop exploded on the early web as fan sites dedicated to Hanson multiplied across GeoCities with midi soundtracks and blinking text.", views: "Millions of fan visits", bar: 70 },
            { title: "NetCam — First Webcam Clips Go Public", tag: "Tech", meta: "Various · 1997", desc: "Low-resolution webcam footage of office desks, coffee pots, and street corners — the mundane as spectacle — captivated early internet users.", views: "Novelty hits", bar: 40 },
        ],
        music: [
            { num: "01", song: "Candle in the Wind 1997", artist: "Elton John", wks: "14 wks at #1" },
            { num: "02", song: "I'll Be Missing You", artist: "Puff Daddy & Faith Evans", wks: "11 wks at #1" },
            { num: "03", song: "You Were Meant for Me", artist: "Jewel", wks: "3 wks at #1" },
            { num: "04", song: "MMMBop", artist: "Hanson", wks: "3 wks at #1" },
            { num: "05", song: "Return of the Mack", artist: "Mark Morrison", wks: "2 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-chess", name: "Deep Blue Beats Kasparov", desc: "IBM's chess computer defeated world champion Garry Kasparov. The web debated whether machines could 'think' — and whether humanity had already lost.", spread: "Web forums & newsgroups · May 1997" },
            { icon: "fa-solid fa-baby", name: "Tamagotchi Craze", desc: "The digital pet from Bandai took over schoolyards and sparked the first wave of 'virtual life' discussions online.", spread: "Email chains · 1997" },
            { icon: "fa-solid fa-globe", name: "AOL Keyword Culture", desc: "AOL's 'keywords' became the early web's version of URLs. 'AOL Keyword: Hanson' was the era's equivalent of a link.", spread: "AOL · 1996–1998" },
        ],
        sites: [
            { icon: "fa-solid fa-magnifying-glass", name: "AltaVista", desc: "The dominant search engine before Google. Supports complex Boolean queries and feels very powerful.", visits: "80M pages indexed" },
            { icon: "fa-solid fa-envelope-open-text", name: "AOL.com", desc: "40 million Americans are now subscribed. The internet, for most, is AOL.", visits: "40M subscribers" },
            { icon: "fa-solid fa-chess-king", name: "IBM Deep Blue Site", desc: "IBM's official coverage of the Man vs. Machine match became one of the most visited pages of 1997.", visits: "Record traffic" },
            { icon: "fa-solid fa-store", name: "Amazon.com", desc: "Now selling books at massive scale with a recommendation engine that felt futuristic.", visits: "2M customer accounts" },
        ],
        events: [
            { date: "May 1997", title: "Deep Blue Defeats Kasparov", desc: "IBM's chess computer wins the rematch. Kasparov demands a rematch. IBM retires Deep Blue. The internet debates machine intelligence for the rest of the decade." },
            { date: "Jul 1997", title: "Netflix Founded", desc: "Reed Hastings and Marc Randolph found Netflix as a DVD-by-mail service. Streaming is still a decade away." },
            { date: "Sep 1997", title: "Google Domain Registered", desc: "Larry Page and Sergey Brin register google.com. Their search engine is still running out of a Stanford dorm room." },
        ]
    },
    1998: {
        videos: [
            { title: "Google.com Goes Live — First Demo Videos", tag: "Tech", meta: "Stanford / Web · Sep 1998", desc: "Early footage and screen captures of Google's astonishing search results circulated on web forums, impressing power users who had grown tired of AltaVista.", views: "Viral among tech community", bar: 85, featured: true },
            { title: "Titanic — Most-Downloaded Trailer of 1998", tag: "Film", meta: "Paramount · 1998", desc: "James Cameron's blockbuster led to unprecedented trailer downloads — millions of dial-up users waiting hours for a 2-minute clip.", views: "Record downloads", bar: 90 },
            { title: "WinAmp Visualizer Screens — Shared Online", tag: "Music", meta: "Nullsoft · 1998", desc: "Users shared screenshots of WinAmp's trippy visualizers as informal digital art — early screen-culture aesthetics.", views: "Every dorm room", bar: 60 },
            { title: "MP3 Download Tutorial Videos", tag: "Tech", meta: "Various · 1998", desc: "As MP3 format exploded, instructional videos and forum guides on ripping and downloading music spread across the early web.", views: "Enormous reach", bar: 70 },
        ],
        music: [
            { num: "01", song: "Too Close", artist: "Next", wks: "8 wks at #1" },
            { num: "02", song: "The Boy Is Mine", artist: "Brandy & Monica", wks: "13 wks at #1" },
            { num: "03", song: "You're Still the One", artist: "Shania Twain", wks: "4 wks at #1" },
            { num: "04", song: "My Heart Will Go On", artist: "Céline Dion", wks: "5 wks at #1" },
            { num: "05", song: "Gettin' Jiggy Wit It", artist: "Will Smith", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-music", name: "Winamp It Really Whips", desc: "Winamp 2.0 launched with the tagline 'It really whips the llama's ass' — one of the first pieces of software humor to spread virally online.", spread: "Download sites & IRC · 1998" },
            { icon: "fa-solid fa-compact-disc", name: "MP3 Revolution", desc: "The MP3 format democratized music distribution. Ripping a CD and sharing it online went from niche skill to universal teen activity.", spread: "Every dorm · 1997–1998" },
            { icon: "fa-solid fa-desktop", name: "GeoCities At Its Peak", desc: "Millions of personal homepages with tiled backgrounds, animated GIFs, and visitor counters. The amateur-made web at its most glorious.", spread: "GeoCities / Tripod · 1997–2000" },
        ],
        sites: [
            { icon: "fa-brands fa-google", name: "Google (Beta)", desc: "Larry Page and Sergey Brin's PageRank algorithm launches from Stanford. It returns better results than anything else, immediately.", visits: "10K searches/day" },
            { icon: "fa-solid fa-music", name: "MP3.com", desc: "Independent artists upload tracks. Users discover music outside the mainstream label system for the first time.", visits: "1M+ tracks" },
            { icon: "fa-solid fa-city", name: "GeoCities", desc: "19 million users have their own personal webpage. The amateur web is at its peak.", visits: "19M sites" },
            { icon: "fa-brands fa-paypal", name: "PayPal (Confinity)", desc: "The company that will become PayPal is founded. Secure internet payments inch toward reality.", visits: "Startup phase" },
        ],
        events: [
            { date: "Sep 1998", title: "Google Incorporates", desc: "Larry Page and Sergey Brin found Google Inc. with $1M in funding from Andy Bechtolsheim. The search engine era is about to change forever." },
            { date: "Jan 1998", title: "MP3.com Launches", desc: "The first major MP3 distribution platform opens, giving independent musicians a direct path to listeners — and scaring the record labels." },
            { date: "Nov 1998", title: "iMac G3 Ships", desc: "Apple's translucent, colorful all-in-one computer makes personal computing desirable. It also features USB and no floppy drive — the future." },
        ]
    },
    1999: {
        videos: [
            { title: "The Blair Witch Project — Viral Marketing Site", tag: "Horror", meta: "Artisan Entertainment · 1999", desc: "The film's fake-documentary marketing, with a 'missing persons' website, was the internet's first major viral marketing campaign — millions believed it was real.", views: "50M+ site visits", bar: 100, featured: true },
            { title: "Napster Launch Demo Videos", tag: "Tech", meta: "Shawn Fanning · 1999", desc: "Early screen captures and demos of Napster's revolutionary peer-to-peer file sharing circulated online as stunned music fans realized free music was now one click away.", views: "Growing exponentially", bar: 90 },
            { title: "Star Wars Episode I Trailer — Most Downloaded Ever", tag: "Film", meta: "Lucasfilm · 1999", desc: "The trailer for The Phantom Menace became the most-downloaded video in internet history at the time — some people paid movie admission just to see it on the big screen.", views: "3M downloads in 24hrs", bar: 95 },
            { title: "Office Space — Cult following via email chains", tag: "Comedy", meta: "20th Century Fox · 1999", desc: "Mike Judge's office satire found its true audience through email forwards and early web forums, building a cult following that would define workplace humor for decades.", views: "Millions of forwards", bar: 65 },
        ],
        music: [
            { num: "01", song: "Believe", artist: "Cher", wks: "4 wks at #1" },
            { num: "02", song: "No Scrubs", artist: "TLC", wks: "4 wks at #1" },
            { num: "03", song: "Livin' la Vida Loca", artist: "Ricky Martin", wks: "5 wks at #1" },
            { num: "04", song: "Genie in a Bottle", artist: "Christina Aguilera", wks: "2 wks at #1" },
            { num: "05", song: "...Baby One More Time", artist: "Britney Spears", wks: "2 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-ghost", name: "Y2K Panic", desc: "Every day brought new warnings that computers would crash at midnight on January 1, 2000. Survivalists prepared. Programmers worked overtime. Nothing happened.", spread: "Every newspaper & web forum · 1999" },
            { icon: "fa-solid fa-music", name: "Napster Changes Everything", desc: "Shawn Fanning released Napster in June. By December, 10 million users were sharing music. The record industry filed suit. The revolution was already unstoppable.", spread: "College campuses → everywhere · 1999" },
            { icon: "fa-solid fa-film", name: "Matrix Red Pill / Blue Pill", desc: "The Wachowski's sci-fi film released in March. The red pill/blue pill choice became immediate internet philosophy — one of the most-quoted films online.", spread: "Web forums · Mar 1999" },
        ],
        sites: [
            { icon: "fa-solid fa-music", name: "Napster", desc: "Launched in June 1999. 10 million users by year's end. The music industry's worst nightmare and teenagers' best dream.", visits: "10M users" },
            { icon: "fa-brands fa-yahoo", name: "Yahoo!", desc: "The most-visited site on the web at the height of the dot-com boom. Portal culture at its peak.", visits: "120M/month" },
            { icon: "fa-solid fa-ghost", name: "Blair Witch Project Site", desc: "The fake-documentary marketing site fooled millions and proved the internet could be used for immersive storytelling.", visits: "50M+ hits" },
            { icon: "fa-solid fa-shopping-cart", name: "eToys / Pets.com", desc: "Dot-com excess: a toy site with a $8B valuation. Sock puppet ads. The bubble's most famous faces.", visits: "Millions — then zero" },
        ],
        events: [
            { date: "Jun 1999", title: "Napster Launches", desc: "Shawn Fanning's dorm-room project goes live. In 6 months it will have 10 million users and the music industry will sue." },
            { date: "Mar 1999", title: "The Matrix Released", desc: "The Wachowskis release a film about digital reality. The red pill/blue pill metaphor immediately colonizes the internet." },
            { date: "Dec 1999", title: "Y2K Countdown Begins", desc: "The world holds its breath. Programmers are exhausted. Survivalists have hoarded supplies. The web is full of predictions, good and terrible." },
        ]
    },
    2000: {
        videos: [
            { title: "Napster: The Movie (Documentary)", tag: "Tech", meta: "Internet culture · 2000", desc: "Documentary footage capturing the rise of peer-to-peer file sharing and the cultural revolution it ignited — before the lawsuits shut it down.", views: "Downloaded by millions", bar: 95 },
            { title: "All Your Base Are Belong To Us", tag: "Gaming", meta: "Zero Wing · 2000", desc: "A badly translated cutscene from a 1989 Sega game became the definitive early-internet meme — remixed into thousands of images and videos.", views: "Millions of forwards", bar: 100 },
            { title: "Mahir Cagri — 'I Kiss You!!!'", tag: "Viral", meta: "Personal homepage · 2000", desc: "Mahir's GeoCities page reached global fame as curious netizens discovered and shared his charming, enthusiastic online persona.", views: "3M+ visits", bar: 70 },
            { title: "Numa Numa (early spread)", tag: "Flash", meta: "Newgrounds · 2000", desc: "Gary Brolsma lip-syncing to a Romanian pop song in his webcam chair — one of the earliest examples of an everyday person becoming an internet celebrity.", views: "1M+ downloads", bar: 60 },
        ],
        music: [
            { num: "01", song: "Breathe", artist: "Faith Hill", wks: "4 wks at #1" },
            { num: "02", song: "Say My Name", artist: "Destiny's Child", wks: "3 wks at #1" },
            { num: "03", song: "Amazed", artist: "Lonestar", wks: "8 wks at #1" },
            { num: "04", song: "Smooth", artist: "Santana ft. Rob Thomas", wks: "12 wks at #1" },
            { num: "05", song: "Maria Maria", artist: "Santana", wks: "10 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-plane", name: "All Your Base", desc: "Broken English from a bad Sega translation became the defining meme of early internet culture.", spread: "Forums & IRC · 2000" },
            { icon: "fa-solid fa-lips", name: "I Kiss You", desc: "A Turkish man's personal website became an object of bemused global fascination.", spread: "Email chains · 1999–2000" },
            { icon: "fa-solid fa-explosion", name: "Dot-com Bubble Burst", desc: "Not technically a meme but culturally memetic — thousands of sock puppet mascots vanished overnight.", spread: "Business news · 2000" },
        ],
        sites: [
            { icon: "fa-solid fa-compact-disc", name: "Napster", desc: "The P2P music revolution. 80 million users before the lawsuits hit.", visits: "80M users" },
            { icon: "fa-brands fa-google", name: "Google", desc: "The upstart search engine overtaking AltaVista.", visits: "18M/month" },
            { icon: "fa-solid fa-comment", name: "ICQ / AIM", desc: "Uh oh — instant messaging before it was on your phone.", visits: "100M installs" },
            { icon: "fa-solid fa-newspaper", name: "Slashdot", desc: "News for nerds. Stuff that matters. The HN of its day.", visits: "7M/month" },
        ],
        events: [
            { date: "Jan 2000", title: "Y2K is a Non-Event", desc: "The world survives midnight. Panic gives way to embarrassment. The internet makes fun of itself." },
            { date: "Mar 2000", title: "Dot-com Bubble Peaks", desc: "NASDAQ hits 5,048. Hundreds of internet companies with no revenue are worth billions." },
            { date: "Dec 2000", title: "Napster Lawsuit Decision", desc: "Recording Industry wins. 80 million users brace for the end of free music." },
        ]
    },

    // ── 2001 ──
    2001: {
        videos: [
            { title: "9/11 News Streams — The Web as Crisis Medium", tag: "News", meta: "CNN / MSNBC streams · Sep 2001", desc: "For the first time, millions turned to the web for live news during a national crisis — and crashed every major news site in the process.", views: "Millions overwhelmed servers", bar: 100, featured: true },
            { title: "Badger Badger Badger (first upload)", tag: "Flash", meta: "Weebls-stuff · 2001", desc: "An endlessly looping Flash animation of dancing badgers set to a hypnotic chant — early proof that weird, repetitive content was the internet's native language.", views: "Millions of loops", bar: 85 },
            { title: "Napster Final Days Livestreams", tag: "Tech", meta: "Various · 2001", desc: "As Napster prepared to shut down under RIAA pressure, users streamed farewell sessions and mourned the end of free music online.", views: "Goodbye streams", bar: 60 },
            { title: "Windows XP Launch Video", tag: "Tech", meta: "Microsoft · Oct 2001", desc: "Microsoft's campaign for XP — featuring 'Mad World' — introduced the luna desktop and convinced millions to upgrade.", views: "Broadcast & early web", bar: 70 },
        ],
        music: [
            { num: "01", song: "Hanging by a Moment", artist: "Lifehouse", wks: "8 wks at #1" },
            { num: "02", song: "Fallin'", artist: "Alicia Keys", wks: "6 wks at #1" },
            { num: "03", song: "Drops of Jupiter", artist: "Train", wks: "4 wks at #1" },
            { num: "04", song: "Ms. Jackson", artist: "Outkast", wks: "5 wks at #1" },
            { num: "05", song: "It Wasn't Me", artist: "Shaggy ft. Rik Rok", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-tower-broadcast", name: "9/11 & The Web", desc: "News websites crashed under demand as millions tried to reach CNN.com and MSNBC. The internet became a crisis lifeline for the first time.", spread: "Every platform · Sep 2001" },
            { icon: "fa-solid fa-wifi", name: "Wikipedia Launches", desc: "Jimmy Wales and Larry Sanger quietly launch Wikipedia. The free encyclopedia for everyone begins with a single edit.", spread: "Web · Jan 2001" },
            { icon: "fa-solid fa-compact-disc", name: "Napster Shuts Down", desc: "After losing the RIAA lawsuit, Napster powers down. Millions migrate to Kazaa overnight.", spread: "Music forums · Feb 2001" },
            { icon: "fa-solid fa-frog", name: "Frog in a Blender", desc: "Gross-out interactive Flash games proliferate. This one becomes a twisted classic of early shock humor.", spread: "Albino Blacksheep · 2001" },
        ],
        sites: [
            { icon: "fa-brands fa-wikipedia-w", name: "Wikipedia", desc: "Launched January 15, 2001. The free encyclopedia that anyone can edit — and everyone mistrusts in school.", visits: "First 20K articles" },
            { icon: "fa-solid fa-gamepad", name: "Newgrounds", desc: "The Flash animation and game portal that ruled early 2000s internet culture.", visits: "18M/month" },
            { icon: "fa-solid fa-envelope", name: "Hotmail / AOL Mail", desc: "Free email remains the killer app. Every teen has their first email address.", visits: "170M+ users combined" },
            { icon: "fa-brands fa-google", name: "Google Images", desc: "Google launches Image Search after the JLo Grammys dress becomes the most-searched thing ever.", visits: "Exponential growth" },
        ],
        events: [
            { date: "Jan 2001", title: "Wikipedia Goes Live", desc: "The free encyclopedia launches quietly. Nobody predicts it will become one of the most visited sites on Earth." },
            { date: "Feb 2001", title: "Napster Ordered to Shut Down", desc: "The 9th Circuit Court rules against Napster. 70 million users scramble for alternatives." },
            { date: "Sep 2001", title: "9/11 — The Internet as Lifeline", desc: "CNN.com and MSNBC go down under demand. The web becomes the primary medium for crisis communication for the first time." },
        ]
    },

    // ── 2002 ──
    2002: {
        videos: [
            { title: "Star Wars Kid (leaked to internet)", tag: "Viral", meta: "Kazaa · Apr 2002", desc: "A Quebec teenager's self-filmed lightsaber practice leaked onto Kazaa without his knowledge and became one of the most-watched videos of the pre-YouTube era.", views: "First viral video — 900M+ views over time", bar: 100, featured: true },
            { title: "Eminem — 'Without Me' Music Video Stream", tag: "Music", meta: "MTV.com · 2002", desc: "Eminem's MTV music video became one of the most-streamed clips on the early web, crashing servers as dial-up users queued up to watch.", views: "Record web streams at launch", bar: 80 },
            { title: "Flash Game Collections — Albino Blacksheep", tag: "Flash", meta: "Albino Blacksheep · 2002", desc: "Browser-based Flash games and animations flourished on sites like Albino Blacksheep, forming the creative backbone of early internet culture.", views: "Millions of plays", bar: 70 },
            { title: "GTA Vice City Trailer (downloaded)", tag: "Gaming", meta: "Rockstar · 2002", desc: "The neon-soaked trailer for Rockstar's Miami crime epic was passed around on Kazaa and IRC, often taking hours to download over dial-up.", views: "Millions of downloads via dial-up", bar: 65 },
        ],
        music: [
            { num: "01", song: "How You Remind Me", artist: "Nickelback", wks: "4 wks at #1" },
            { num: "02", song: "Complicated", artist: "Avril Lavigne", wks: "3 wks at #1" },
            { num: "03", song: "A Thousand Miles", artist: "Vanessa Carlton", wks: "2 wks at #1" },
            { num: "04", song: "Without Me", artist: "Eminem", wks: "5 wks at #1" },
            { num: "05", song: "In the End", artist: "Linkin Park", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-jedi", name: "Star Wars Kid", desc: "A Quebec teenager films himself swinging a golf ball retriever. The video leaks to Kazaa and becomes one of the most-viewed clips in internet history.", spread: "Kazaa → everywhere · 2002" },
            { icon: "fa-solid fa-ghost", name: "Friendster Beta", desc: "The world's first major social network launches. Everyone is suddenly six degrees from everyone.", spread: "Web · 2002" },
            { icon: "fa-solid fa-music", name: "Kazaa's Wild West", desc: "Post-Napster, Kazaa reigns. Every song, movie, and software is a free download — for now.", spread: "Every dorm room · 2002" },
            { icon: "fa-solid fa-envelope-open", name: "Email Chain Letters", desc: "Forwarded HTML emails with dancing animations, horoscopes, and fake virus warnings clog every inbox.", spread: "Email · Universal · 2002" },
        ],
        sites: [
            { icon: "fa-solid fa-ghost", name: "Friendster", desc: "The original social network. You could see who viewed your profile. The internet was never the same.", visits: "3M users at launch" },
            { icon: "fa-brands fa-google", name: "Google.com", desc: "Now handling 200M searches per day. Google News launches after 9/11.", visits: "200M searches/day" },
            { icon: "fa-solid fa-compact-disc", name: "Kazaa", desc: "Napster's successor. P2P at its peak with 60M+ users trading everything.", visits: "60M+ users" },
            { icon: "fa-solid fa-gamepad", name: "Miniclip", desc: "Free online Flash games for browsers. The school computer lab's best friend.", visits: "15M/month" },
        ],
        events: [
            { date: "Mar 2002", title: "Friendster Launches", desc: "The first major social network opens to the public, pioneering the concept of an online social graph." },
            { date: "Apr 2002", title: "Star Wars Kid Goes Viral", desc: "Ghyslain Raza's self-filmed video leaks on Kazaa. Within weeks it's seen by hundreds of millions — before 'viral' is even a word." },
            { date: "Nov 2002", title: "GTA: Vice City Smashes Records", desc: "Rockstar's Miami-set crime game sells 1.5M copies in its first day. Forums and dial-up download sites go into overdrive." },
        ]
    },

    // ── 2003 ──
    2003: {
        videos: [
            { title: "Gary Brolsma 'Numa Numa' — Original Recording", tag: "Viral", meta: "Self-recorded · 2003", desc: "Gary Brolsma filmed himself joyfully lip-syncing to the Romanian pop song 'Dragostea Din Tei' on his webcam — and quietly uploaded it. The internet did the rest.", views: "700M+ eventually", bar: 100, featured: true },
            { title: "Matrix: Reloaded Trailer Streams", tag: "Film", meta: "Warner Bros · 2003", desc: "The sequel to the most-discussed film on the internet generated unprecedented demand for its online trailer, crashing download servers across the web.", views: "Record web streams", bar: 85 },
            { title: "Avril Lavigne — 'Sk8er Boi' on early YouTube precursors", tag: "Music", meta: "MTV.com / Kazaa · 2003", desc: "Before YouTube existed, music videos were traded via P2P and watched in low resolution on MTV's website — Avril Lavigne was one of the most pirated.", views: "Millions via P2P", bar: 70 },
            { title: "SARS Coverage — First Major News Blog Moment", tag: "News", meta: "Various blogs · 2003", desc: "Independent bloggers broke and contextualized SARS news faster than traditional media, marking the moment when blogs became a legitimate news source.", views: "Millions of readers", bar: 60 },
        ],
        music: [
            { num: "01", song: "Crazy in Love", artist: "Beyoncé ft. Jay-Z", wks: "8 wks at #1" },
            { num: "02", song: "In da Club", artist: "50 Cent", wks: "9 wks at #1" },
            { num: "03", song: "Beautiful", artist: "Christina Aguilera", wks: "4 wks at #1" },
            { num: "04", song: "Bring Me to Life", artist: "Evanescence", wks: "3 wks at #1" },
            { num: "05", song: "Sk8er Boi", artist: "Avril Lavigne", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-music", name: "iTunes Launches", desc: "Apple opens iTunes Store with 200,000 songs at 99¢ each. The era of legal digital music begins — barely.", spread: "Mac users worldwide · Apr 2003" },
            { icon: "fa-solid fa-comment", name: "Skype Beta Arrives", desc: "Free internet calls launch and nobody believes it works until they try it.", spread: "Web download · 2003" },
            { icon: "fa-solid fa-face-angry", name: "ORLY Owl", desc: "O RLY? YA RLY — the snowy owl macro that defined forum arguments for a decade is traced to 2003.", spread: "4chan → everywhere · 2003" },
            { icon: "fa-brands fa-wordpress", name: "WordPress Launches", desc: "Free blog software democratizes publishing. Millions of opinions, suddenly, have a home.", spread: "Web · May 2003" },
            { icon: "fa-solid fa-cat", name: "Caturday Beginnings", desc: "Early cat image threads on 4chan lay the groundwork for what would become LOLcats.", spread: "4chan · 2003" },
        ],
        sites: [
            { icon: "fa-brands fa-itunes", name: "iTunes Store", desc: "Apple launches digital music sales. 1 million songs sold in the first week.", visits: "Mac ecosystem" },
            { icon: "fa-solid fa-comment", name: "Skype", desc: "Free voice calls over the internet, courtesy of the Kazaa founders. Telecom panics.", visits: "Millions in beta" },
            { icon: "fa-brands fa-wordpress", name: "WordPress", desc: "The blog software that powers the open web. Launched May 27, 2003.", visits: "Rapid blogger adoption" },
            { icon: "fa-brands fa-myspace", name: "MySpace", desc: "Social networking for musicians and teens. The era of profile songs and Top 8 begins.", visits: "1M+ in launch year" },
        ],
        events: [
            { date: "Apr 2003", title: "iTunes Store Opens", desc: "Apple sells 1 million songs in its first week at 99 cents each. The music industry's future is digitized." },
            { date: "May 2003", title: "WordPress 0.7 Released", desc: "A tiny blogging platform is open-sourced. It will eventually power 43% of the entire web." },
            { date: "Aug 2003", title: "MySpace Launches", desc: "Tom Anderson creates a social network in Los Angeles. Your first friend is Tom. Everyone's first friend is Tom." },
        ]
    },

    2004: {
        videos: [
            { title: "Numa Numa Guy (Gary Brolsma)", tag: "Viral", meta: "Newgrounds · Dec 2004", desc: "Gary Brolsma's webcam lip-sync to 'Dragostea Din Tei' became the defining symbol of early YouTube-era joy — pure, unironic, and unstoppable.", views: "700M+ views", bar: 100, featured: true },
            { title: "Star Wars Kid", tag: "Viral", meta: "Kazaa leak · 2004", desc: "Ghyslain Raza's backyard lightsaber practice went from embarrassing leak to international phenomenon, landing him on TV shows worldwide.", views: "900M+ views", bar: 97 },
            { title: "JibJab — 'This Land'", tag: "Political", meta: "JibJab.com · Jul 2004", desc: "A Flash-animated parody of the 2004 presidential election featuring Bush and Kerry went massively viral — one of the first political memes.", views: "80M views", bar: 75 },
            { title: "Badger Badger Badger", tag: "Flash", meta: "Weebls-stuff · 2003", desc: "Badger badger badger badger — the infinitely looping Flash animation with no point and no end became a rite of passage for early internet users.", views: "Still looping", bar: 65 },
        ],
        music: [
            { num: "01", song: "Yeah!", artist: "Usher ft. Lil Jon & Ludacris", wks: "12 wks at #1" },
            { num: "02", song: "Burn", artist: "Usher", wks: "8 wks at #1" },
            { num: "03", song: "Confessions Part II", artist: "Usher", wks: "4 wks at #1" },
            { num: "04", song: "The Reason", artist: "Hoobastank", wks: "3 wks at #1" },
            { num: "05", song: "If I Ain't Got You", artist: "Alicia Keys", wks: "5 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-jedi", name: "Star Wars Kid", desc: "A Quebec teen swinging a golf ball retriever. One of the most-watched videos in internet history.", spread: "Kazaa → everywhere · 2004" },
            { icon: "fa-solid fa-music", name: "Numa Numa", desc: "Gary Brolsma lip-syncing to a Romanian pop song became the joyful face of early viral video.", spread: "Newgrounds · Dec 2003" },
            { icon: "fa-solid fa-otter", name: "Badger Badger Badger", desc: "BADGER BADGER BADGER BADGER MUSHROOM MUSHROOM — a Flash animation that never ends.", spread: "Weebls-stuff · 2003" },
            { icon: "fa-solid fa-cat", name: "I Can Haz Cheezburger?", desc: "LOLcats were brewing — the macro format taking shape on forums everywhere.", spread: "Forums · 2003–2005" },
            { icon: "fa-solid fa-envelope", name: "Nigerian Prince Email", desc: "The classic scam email becomes a cultural touchstone and cautionary tale.", spread: "Email inboxes · eternal" },
            { icon: "fa-solid fa-crow", name: "ORLY Owl", desc: "O RLY? YA RLY. The owl image macro that defined forum arguments for a decade.", spread: "4chan → everywhere · 2004" },
        ],
        sites: [
            { icon: "fa-brands fa-facebook", name: "Facebook (Beta)", desc: "Launched for Harvard students in February. The college network that ate the world.", visits: "1M users (end of year)" },
            { icon: "fa-solid fa-film", name: "Newgrounds", desc: "Flash animations, games, and user content before YouTube existed.", visits: "15M/month" },
            { icon: "fa-solid fa-music", name: "MySpace", desc: "Customize your page, blast your top 8, obsess over your song choice.", visits: "22M/month" },
            { icon: "fa-brands fa-google", name: "Google (GMail launch)", desc: "Google launched email with 1GB storage. Everyone thought it was an April Fool's joke.", visits: "800M searches/day" },
        ],
        events: [
            { date: "Feb 2004", title: "Facebook Launches at Harvard", desc: "Mark Zuckerberg launches thefacebook.com. Within 24 hours, 1,200 students sign up." },
            { date: "Apr 2004", title: "Gmail Announced (April 1st)", desc: "Google announces 1GB free email. Half the internet thinks it's a prank. It is not." },
            { date: "Nov 2004", title: "Mozilla Firefox 1.0", desc: "The browser that gave Internet Explorer its first real competition launches to mass enthusiasm." },
        ]
    },
    2005: {
        videos: [
            { title: "Me at the Zoo — First YouTube Video", tag: "YouTube", meta: "Jawed Karim · Apr 2005", desc: "The very first video uploaded to YouTube: co-founder Jawed Karim talking about elephants at the San Diego Zoo. 18 seconds that changed everything.", views: "300M+ over time", bar: 100, featured: true },
            { title: "Evolution of Dance", tag: "Comedy", meta: "YouTube · Nov 2005", desc: "Judson Laipply dancing through decades of pop music became YouTube's first truly viral video hit, proving the platform could produce superstars.", views: "50M+ views", bar: 90 },
            { title: "Lazy Sunday (SNL Digital Short)", tag: "Comedy", meta: "NBC / YouTube · Dec 2005", desc: "SNL's digital short about seeing The Chronicles of Narnia leaked onto YouTube and racked up 5M views in days — one of the first viral TV clips online.", views: "5M in 10 days", bar: 85 },
            { title: "Numa Numa — Final Explosion", tag: "Viral", meta: "YouTube · 2005", desc: "Gary Brolsma's lip-sync video migrated to YouTube and reached its full viral potential, making him an unwilling celebrity.", views: "700M+ over time", bar: 80 },
        ],
        music: [
            { num: "01", song: "We Belong Together", artist: "Mariah Carey", wks: "14 wks at #1" },
            { num: "02", song: "Gold Digger", artist: "Kanye West ft. Jamie Foxx", wks: "10 wks at #1" },
            { num: "03", song: "Hollaback Girl", artist: "Gwen Stefani", wks: "4 wks at #1" },
            { num: "04", song: "Since U Been Gone", artist: "Kelly Clarkson", wks: "3 wks at #1" },
            { num: "05", song: "Let Me Love You", artist: "Mario", wks: "9 wks at #1" },
        ],
        memes: [
            { icon: "fa-brands fa-youtube", name: "YouTube Launches", desc: "Three ex-PayPal employees launch a video hosting site in February 2005. By December, 8M videos are being watched per day. Nothing would ever be the same.", spread: "Web · Feb 2005" },
            { icon: "fa-solid fa-cat", name: "LOLcats Take Shape", desc: "The earliest cat macro images start circulating on 4chan. 'I Can Haz Cheezburger' is not yet a site, but the format is crystallizing.", spread: "4chan · 2005" },
            { icon: "fa-solid fa-music", name: "MySpace Music Explosion", desc: "Bands post their music directly to MySpace profiles. Arctic Monkeys and Lily Allen build fanbases entirely online before signing to labels.", spread: "MySpace · 2005" },
            { icon: "fa-solid fa-gamepad", name: "World of Warcraft Dominates", desc: "WoW hits 6 million subscribers. The 'I have no life' meme is born as people genuinely stop going outside.", spread: "Web culture · 2005" },
        ],
        sites: [
            { icon: "fa-brands fa-youtube", name: "YouTube", desc: "Launched February 14, 2005. By December, it's serving 8M videos/day and growing exponentially.", visits: "8M videos/day" },
            { icon: "fa-brands fa-myspace", name: "MySpace", desc: "The internet's social hub. 50M users customize their pages, blast profile songs, and obsess over Top 8s.", visits: "50M users" },
            { icon: "fa-brands fa-facebook", name: "Facebook (expanding)", desc: "Facebook opens to all US colleges and high schools. Growth is explosive.", visits: "6M users" },
            { icon: "fa-solid fa-rss", name: "RSS & Blog Culture", desc: "Blogger, LiveJournal, and personal blogs peak. Everyone has something to say and an RSS feed to say it on.", visits: "Millions of blogs" },
        ],
        events: [
            { date: "Feb 2005", title: "YouTube Launches", desc: "Jawed Karim, Chad Hurley, and Steve Chen launch YouTube.com from a garage in San Mateo. The world's video library is open for business." },
            { date: "Apr 2005", title: "First YouTube Video Uploaded", desc: "'Me at the zoo' — 18 seconds of Jawed Karim at the San Diego Zoo. The entire future of video on the internet, in one casual clip." },
            { date: "Oct 2005", title: "Hurricane Katrina & Citizen Journalism", desc: "Blogs and early social media document the disaster faster and more personally than news networks. Citizen journalism arrives." },
        ]
    },
    2006: {
        videos: [
            { title: "Google Buys YouTube — Announcement Reaction Videos", tag: "Tech", meta: "YouTube · Oct 2006", desc: "When Google announced it was buying YouTube for $1.65 billion, the reaction videos were the first time YouTube users reflected on YouTube itself as a phenomenon.", views: "Millions of reactions", bar: 85, featured: true },
            { title: "Twitter's First Year — SXSW Clips", tag: "Tech", meta: "Twitter · Mar 2006", desc: "Twitter launched publicly at SXSW Interactive in Austin and was immediately described as confusing and pointless — and immediately addictive.", views: "Conference buzz", bar: 65 },
            { title: "Chocolate Rain (Tay Zonday)", tag: "Music", meta: "YouTube · 2006", desc: "Tay Zonday's impossibly deep voice singing a haunting song about racial inequality became one of YouTube's most beloved and remixed early hits.", views: "100M+ views", bar: 95 },
            { title: "OK Go — 'Here It Goes Again' Treadmill Video", tag: "Music", meta: "YouTube · 2006", desc: "OK Go performed a choreographed treadmill routine in a single take and uploaded it to YouTube — one of the first bands to build their career via YouTube views.", views: "50M+ views", bar: 88 },
        ],
        music: [
            { num: "01", song: "Bad Day", artist: "Daniel Powter", wks: "5 wks at #1" },
            { num: "02", song: "Temperature", artist: "Sean Paul", wks: "7 wks at #1" },
            { num: "03", song: "Hips Don't Lie", artist: "Shakira ft. Wyclef Jean", wks: "5 wks at #1" },
            { num: "04", song: "Crazy", artist: "Gnarls Barkley", wks: "4 wks at #1" },
            { num: "05", song: "Unwritten", artist: "Natasha Bedingfield", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-brands fa-twitter", name: "Twitter Launches", desc: "Jack Dorsey sends the first tweet on March 21: 'just setting up my twttr.' Nobody could predict what it would become.", spread: "SXSW → Web · Mar 2006" },
            { icon: "fa-solid fa-cat", name: "I Can Haz Cheezburger", desc: "The LOLcat format becomes a website. Ben Huh buys it for $10. Millions of cat macros flood the internet.", spread: "4chan → cheezburger.com · 2006" },
            { icon: "fa-solid fa-bolt", name: "The Numa Numa Guy Goes Mainstream TV", desc: "Gary Brolsma appears on TV morning shows. Early YouTube stars are being discovered by traditional media for the first time.", spread: "YouTube → TV · 2006" },
            { icon: "fa-solid fa-film", name: "Snakes on a Plane Internet Hype", desc: "The internet decided Samuel L. Jackson + snakes on a plane was the greatest film concept ever, generating mountains of memes before release.", spread: "Forums → mainstream · 2006" },
        ],
        sites: [
            { icon: "fa-brands fa-youtube", name: "YouTube (pre-Google)", desc: "Now serving 100M videos per day before Google's acquisition. The web's video library is official.", visits: "100M videos/day" },
            { icon: "fa-brands fa-twitter", name: "Twitter", desc: "Microblogging in 140 characters launches at SXSW. Confusing, addictive, transformative.", visits: "5K users at launch" },
            { icon: "fa-brands fa-facebook", name: "Facebook News Feed", desc: "The News Feed launches in September 2006 to user outrage — then universal adoption.", visits: "12M users" },
            { icon: "fa-solid fa-gamepad", name: "Newgrounds / Flash era peak", desc: "The Flash animation era peaks with millions of user-made animations, games, and interactive art.", visits: "20M/month" },
        ],
        events: [
            { date: "Mar 2006", title: "Twitter Goes Public at SXSW", desc: "Jack Dorsey's SMS-inspired microblog debuts. Conference-goers use it to coordinate meetups. The world will never stop talking." },
            { date: "Oct 2006", title: "Google Acquires YouTube for $1.65B", desc: "The biggest acquisition in internet history at the time. YouTube founders become instant billionaires. The video age is officially sanctioned." },
            { date: "Sep 2006", title: "Facebook News Feed Launches", desc: "Users revolt against the new feed showing everyone's activity in real time. They protest, then become addicted. The social feed model is born." },
        ]
    },
    2007: {
        videos: [
            { title: "Charlie Bit My Finger", tag: "Viral", meta: "YouTube · May 2007", desc: "A British father uploaded a home video of his baby biting his toddler brother's finger. It became the most-viewed YouTube video of its era — simple, human, and impossible to explain.", views: "880M views", bar: 100, featured: true },
            { title: "Leave Britney Alone!", tag: "Pop Culture", meta: "YouTube · Sep 2007", desc: "Chris Crocker's tearful plea defending Britney Spears became one of the most-parodied and remixed videos of 2007, a defining moment in celebrity internet culture.", views: "70M views", bar: 75 },
            { title: "Fred Figglehorn Channel", tag: "Comedy", meta: "YouTube · 2006–2007", desc: "Lucas Cruikshank's pitch-shifted, hyper-anxious character 'Fred' became YouTube's first channel to reach 1 million subscribers.", views: "1M subs", bar: 60 },
            { title: "Keyboard Cat (first upload)", tag: "Meme", meta: "YouTube · 2007", desc: "A 1984 home video of a cat 'playing' a keyboard gets uploaded to YouTube and quietly waits. The meme — used to 'play off' embarrassing moments — would explode years later.", views: "50M views", bar: 55 },
        ],
        music: [
            { num: "01", song: "Irreplaceable", artist: "Beyoncé", wks: "10 wks at #1" },
            { num: "02", song: "Umbrella", artist: "Rihanna", wks: "7 wks at #1" },
            { num: "03", song: "Big Girls Don't Cry", artist: "Fergie", wks: "6 wks at #1" },
            { num: "04", song: "Buy U a Drank", artist: "T-Pain", wks: "5 wks at #1" },
            { num: "05", song: "Crank That", artist: "Soulja Boy", wks: "7 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-cat", name: "O HAI IM IN UR ___", desc: "LOLcat captions spread from 4chan to mainstream media. 'I Can Haz Cheezburger' launches as a site.", spread: "4chan → Cheezeburger · 2007" },
            { icon: "fa-solid fa-keyboard", name: "Keyboard Cat", desc: "A 1984 home video of a cat 'playing' keyboard becomes the internet's reaction GIF before GIFs dominated.", spread: "YouTube · 2007" },
            { icon: "fa-brands fa-apple", name: "iPhone Reaction Videos", desc: "First-generation iPhone unboxing and reaction videos flood YouTube in June.", spread: "YouTube · Jun 2007" },
        ],
        sites: [
            { icon: "fa-brands fa-youtube", name: "YouTube", desc: "One year after Google's $1.6B acquisition, video reigns supreme.", visits: "60M/month" },
            { icon: "fa-brands fa-twitter", name: "Twitter (Year 1)", desc: "140 characters. What is everyone doing? The world discovers microblogging.", visits: "500K users" },
            { icon: "fa-brands fa-tumblr", name: "Tumblr", desc: "Blogging meets image sharing. Fandoms, aesthetics, and the long dash.", visits: "2M blogs" },
            { icon: "fa-brands fa-facebook", name: "Facebook Opens Up", desc: "Facebook launches the News Feed and opens to everyone over 13.", visits: "100M users" },
        ],
        events: [
            { date: "Jan 2007", title: "iPhone Announced", desc: "Steve Jobs announces 'an iPod, a phone, and an internet communicator.' The smartphone era begins." },
            { date: "Mar 2007", title: "Twitter Wins SXSW", desc: "Twitter's SMS-based microblogging takes off at South by Southwest. The internet changes forever." },
            { date: "Jul 2007", title: "iPhone Goes on Sale", desc: "People line up for blocks. The mobile web becomes real." },
        ]
    },
    2008: {
        videos: [
            { title: "Obama's 'Yes We Can' Music Video", tag: "Politics", meta: "YouTube · Feb 2008", desc: "Will.i.am's musical remix of Barack Obama's New Hampshire speech went viral, becoming one of the first political videos to organically spread across the internet.", views: "20M+ views", bar: 90, featured: true },
            { title: "Christian Bale On-Set Rant", tag: "Celebrity", meta: "Leaked Audio · 2008", desc: "Audio of Christian Bale's explosive expletive-filled tirade on the Terminator Salvation set leaked online and was immediately remixed into songs and parodies.", views: "Millions of plays", bar: 70 },
            { title: "Rick Astley Rickroll Peak", tag: "Meme", meta: "YouTube · 2008", desc: "The Rickroll — tricking someone into watching Rick Astley's 'Never Gonna Give You Up' — reached peak cultural saturation in 2008, even appearing in the Macy's Thanksgiving Parade.", views: "100M+ rickrolled", bar: 80 },
            { title: "The Dark Knight Viral Campaign", tag: "Film", meta: "Warner Bros · 2008", desc: "One of the first transmedia viral campaigns: a fictional Joker website, a scavenger hunt, and a real-world game preceded the film's blockbuster release.", views: "10M campaign participants", bar: 75 },
        ],
        music: [
            { num: "01", song: "Low", artist: "Flo Rida ft. T-Pain", wks: "10 wks at #1" },
            { num: "02", song: "Bleeding Love", artist: "Leona Lewis", wks: "4 wks at #1" },
            { num: "03", song: "No Air", artist: "Jordin Sparks ft. Chris Brown", wks: "3 wks at #1" },
            { num: "04", song: "Forever", artist: "Chris Brown", wks: "2 wks at #1" },
            { num: "05", song: "Lollipop", artist: "Lil Wayne", wks: "5 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-music", name: "Rickroll", desc: "Rick Astley's 1987 hit becomes the internet's favorite bait-and-switch. Even the Macy's Parade fell for it.", spread: "YouTube · everywhere · 2008" },
            { icon: "fa-solid fa-face-laugh-beam", name: "Chocolate Rain", desc: "Tay Zonday's deep-voiced, camera-panning YouTube original becomes an accidental anthem.", spread: "YouTube · 2008" },
            { icon: "fa-solid fa-fire", name: "This Is Sparta", desc: "300's most quotable moment becomes the year's default reaction GIF substitute.", spread: "Forums → everywhere · 2008" },
            { icon: "fa-solid fa-person-running", name: "Fail Blog", desc: "FailBlog.org aggregates schadenfreude at scale. FAIL becomes a universal reaction.", spread: "Cheezburger Network · 2008" },
        ],
        sites: [
            { icon: "fa-brands fa-tumblr", name: "Tumblr", desc: "Short-form blogging for the image-sharing era. Fandoms, fanfic, and GIFs.", visits: "7M blogs" },
            { icon: "fa-brands fa-spotify", name: "Spotify Launches", desc: "Swedish startup launches streaming music in Europe. The download era starts to end.", visits: "EU launch" },
            { icon: "fa-brands fa-youtube", name: "YouTube HD", desc: "YouTube introduces high-definition video. Internet video quality leaps forward.", visits: "300M/day views" },
            { icon: "fa-solid fa-store", name: "App Store Opens", desc: "Apple launches the App Store. 500 apps on day one. Mobile changes everything.", visits: "500 apps at launch" },
        ],
        events: [
            { date: "Jan 2008", title: "Apple Unveils MacBook Air", desc: "Steve Jobs pulls a laptop out of an envelope. The ultrabook era begins. The internet watches the liveblog." },
            { date: "Jul 2008", title: "App Store Launches", desc: "Apple opens the App Store with 500 apps. Developers rush to create the next hit. Mobile internet explodes." },
            { date: "Sep 2008", title: "Lehman Brothers Collapses", desc: "Financial crisis unfolds in real time on Twitter and blogs. Social media becomes economic news." },
        ]
    },
    2009: {
        videos: [
            { title: "Susan Boyle on Britain's Got Talent", tag: "TV/Viral", meta: "YouTube · Apr 2009", desc: "An unassuming Scottish woman silences a skeptical crowd the moment she opens her mouth to sing 'I Dreamed a Dream.' Her audition became the most-watched video of 2009.", views: "120M+ views", bar: 100, featured: true },
            { title: "David After Dentist", tag: "Comedy", meta: "YouTube · Jan 2009", desc: "A seven-year-old's post-anesthesia philosophical questions — 'Is this real life?' — become one of YouTube's most quoted video moments.", views: "130M+ views", bar: 85 },
            { title: "Michael Jackson Tribute Outpouring", tag: "News", meta: "YouTube · Jun 2009", desc: "The King of Pop's unexpected death on June 25 crashed Twitter, Wikipedia, and Google News. Tribute videos and memorial streams dominated YouTube for weeks.", views: "Billions of plays", bar: 95 },
            { title: "JK Wedding Entrance Dance", tag: "Viral", meta: "YouTube · Jul 2009", desc: "A bridal party dancing down the aisle to Chris Brown's 'Forever' captured something genuinely joyful. 50M views in weeks. Chris Brown's song re-entered the charts.", views: "50M+ views", bar: 80 },
        ],
        music: [
            { num: "01", song: "Boom Boom Pow", artist: "Black Eyed Peas", wks: "12 wks at #1" },
            { num: "02", song: "Right Round", artist: "Flo Rida", wks: "6 wks at #1" },
            { num: "03", song: "I Gotta Feeling", artist: "Black Eyed Peas", wks: "14 wks at #1" },
            { num: "04", song: "Poker Face", artist: "Lady Gaga", wks: "1 wks at #1" },
            { num: "05", song: "Empire State of Mind", artist: "Jay-Z ft. Alicia Keys", wks: "5 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-bear", name: "Pedobear", desc: "4chan's satirical character about online predators becomes a widespread internet shorthand. Controversial from day one.", spread: "4chan → internet · 2009" },
            { icon: "fa-solid fa-camera", name: "Kanye Interrupts Taylor", desc: "Kanye West's VMAs moment becomes the defining celebrity meme of the year and a cultural flashpoint.", spread: "MTV → Twitter · Sep 2009" },
            { icon: "fa-solid fa-face-meh", name: "Forever Alone", desc: "The rage comic face expressing profound, comedic loneliness becomes the internet's emotional shorthand.", spread: "Reddit/4chan · 2009" },
            { icon: "fa-solid fa-baby", name: "Double Rainbow", desc: "A man's overwhelming emotional reaction to a double rainbow becomes a transcendent YouTube moment.", spread: "YouTube · 2009" },
        ],
        sites: [
            { icon: "fa-brands fa-twitter", name: "Twitter", desc: "Hashtags introduced. 'Trending topics' reshape news. 55M tweets per day.", visits: "55M tweets/day" },
            { icon: "fa-brands fa-facebook", name: "Facebook", desc: "Surpasses MySpace in traffic. 350M users. The social graph takes over.", visits: "350M users" },
            { icon: "fa-solid fa-magnifying-glass", name: "Bing Launches", desc: "Microsoft's rebranded search engine launches, challenging Google head-on.", visits: "~8% search share" },
            { icon: "fa-solid fa-file-video", name: "Hulu Plus", desc: "TV online with ads, finally done right. Networks reluctantly join the stream.", visits: "40M visitors/month" },
        ],
        events: [
            { date: "Jan 2009", title: "Obama Inauguration Streamed Live", desc: "President Obama's inauguration streams crash dozens of servers. The most-watched online event to date." },
            { date: "Jun 2009", title: "Michael Jackson Dies", desc: "Twitter, Google, and Wikipedia all crash under the surge of traffic. The first celebrity death that broke the internet." },
            { date: "Oct 2009", title: "Bitcoin Whitepaper Anniversary", desc: "Satoshi Nakamoto's whitepaper turns one. Bitcoin has been mined. Basically nobody notices." },
        ]
    },
    2010: {
        videos: [
            { title: "Old Spice: 'The Man Your Man Could Smell Like'", tag: "Advertising", meta: "YouTube · Feb 2010", desc: "Isaiah Mustafa's absurdist, one-take Old Spice ad redefined viral marketing. The brand then responded to fan comments with personalized YouTube videos — an unprecedented interactive campaign.", views: "50M+ views", bar: 95, featured: true },
            { title: "Double Rainbow Full Video", tag: "Viral", meta: "YouTube · Jan 2010", desc: "Paul Vasquez's overwhelming, tearful reaction to a double rainbow in Yosemite became the year's most remixed and parodied video — pure unfiltered human wonder.", views: "35M+ views", bar: 80 },
            { title: "Antoine Dodson 'Bed Intruder Song'", tag: "Viral", meta: "YouTube · Jul 2010", desc: "A local news interview about an intruder was auto-tuned into a song by Gregory Brothers. It charted on iTunes and made Antoine Dodson briefly famous.", spread: "Auto-Tune the News · 2010", views: "60M+ views", bar: 85 },
            { title: "Justin Bieber 'Baby' Music Video", tag: "Music", meta: "YouTube · Feb 2010", desc: "The most-disliked video in YouTube history at its time. The most-discussed teen pop phenomenon since Spice Girls. Bieber mania officially goes global.", views: "2B+ views", bar: 100 },
        ],
        music: [
            { num: "01", song: "TiK ToK", artist: "Ke$ha", wks: "9 wks at #1" },
            { num: "02", song: "Nothin' on You", artist: "B.o.B ft. Bruno Mars", wks: "6 wks at #1" },
            { num: "03", song: "Baby", artist: "Justin Bieber ft. Ludacris", wks: "1 wk at #1" },
            { num: "04", song: "OMG", artist: "Usher ft. will.i.am", wks: "6 wks at #1" },
            { num: "05", song: "Just the Way You Are", artist: "Bruno Mars", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-face-angry", name: "Rage Comics", desc: "Stick-figure rage comics — FUUUU-, Troll Face, Me Gusta — become the dominant visual language of early Reddit.", spread: "Reddit · 2010" },
            { icon: "fa-solid fa-person-running", name: "Epic Fail", desc: "FAIL Blog spawns a generation of schadenfreude. 'Epic fail' becomes everyday vocabulary.", spread: "Internet · 2010" },
            { icon: "fa-solid fa-cat", name: "Nyan Cat", desc: "A pixelated cat with a Pop-Tart body flying through space with a rainbow trail and 8-bit music. Peak 2010.", spread: "YouTube · 2010" },
            { icon: "fa-solid fa-eye", name: "Everything Is Cake", desc: "Hyperrealistic cake videos fool the entire internet. 'Is this real?' becomes the default response.", spread: "Instagram/YouTube · 2010" },
        ],
        sites: [
            { icon: "fa-brands fa-instagram", name: "Instagram Launches", desc: "A simple photo filter app launches on iOS. Kevin Systrom posts a dog at a taco stand. History is made.", visits: "Launch day · Oct 2010" },
            { icon: "fa-brands fa-pinterest", name: "Pinterest Launches", desc: "Visual bookmarking for the aspirational internet. Recipes, dream homes, wedding boards.", visits: "Beta launch · 2010" },
            { icon: "fa-brands fa-reddit", name: "Reddit Redesign", desc: "Reddit hits 1 billion pageviews per month. Subreddits become the internet's town squares.", visits: "1B pageviews/month" },
            { icon: "fa-brands fa-apple", name: "iPad Launches", desc: "Apple's tablet redefines browsing on the couch. A new device class means new web habits.", visits: "3M units, first 80 days" },
        ],
        events: [
            { date: "Jan 2010", title: "iPad Announced", desc: "Steve Jobs unveils the iPad. The tablet market explodes and a new era of casual web browsing begins." },
            { date: "Apr 2010", title: "Facebook Hits 400M Users", desc: "Facebook crosses 400 million users. If it were a country, it would be the third largest on Earth." },
            { date: "Oct 2010", title: "The Social Network Released", desc: "David Fincher's film about Facebook's founding becomes a cultural touchstone. Zuckerberg is now a character." },
        ]
    },
    2011: {
        videos: [
            { title: "Rebecca Black 'Friday'", tag: "Viral", meta: "YouTube · Mar 2011", desc: "A 13-year-old's auto-tuned song about the days of the week became one of the most disliked videos in YouTube history — and made Rebecca Black the internet's unlikely celebrity.", views: "167M views", bar: 95, featured: true },
            { title: "Shit Girls Say (web series)", tag: "Comedy", meta: "YouTube · Dec 2011", desc: "A parody Twitter account-turned-video series sparked a thousand imitations. 'Shit ___ Say' became the year's most replicated video format.", views: "30M+ views", bar: 70 },
            { title: "Osama Bin Laden Death — Twitter First", tag: "News", meta: "Twitter/YouTube · May 2011", desc: "Keith Urbahn tweeted the news before any official announcement, and the story exploded on social media. News first broke on Twitter, not television.", views: "Twitter record traffic", bar: 80 },
            { title: "Planking Goes Mainstream", tag: "Trend", meta: "Facebook/YouTube · 2011", desc: "Lying face-down in increasingly absurd public locations and posting the photo online became a genuine international craze.", views: "Millions of photos", bar: 65 },
        ],
        music: [
            { num: "01", song: "Rolling in the Deep", artist: "Adele", wks: "7 wks at #1" },
            { num: "02", song: "Party Rock Anthem", artist: "LMFAO ft. Lauren Bennett", wks: "6 wks at #1" },
            { num: "03", song: "Born This Way", artist: "Lady Gaga", wks: "6 wks at #1" },
            { num: "04", song: "Give Me Everything", artist: "Pitbull ft. Ne-Yo", wks: "6 wks at #1" },
            { num: "05", song: "Moves Like Jagger", artist: "Maroon 5", wks: "9 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-hands", name: "Planking", desc: "Lie rigid as a plank in a public place and post the photo. Simple. Global. Baffling.", spread: "Facebook/YouTube · 2011" },
            { icon: "fa-solid fa-music", name: "Rebecca Black Friday", desc: "'Which seat can I take?' becomes impossible to forget. The worst song of 2011 was inescapable.", spread: "YouTube → everywhere · 2011" },
            { icon: "fa-solid fa-face-laugh", name: "Y U NO Guy", desc: "The rage-face demanding explanations rules early Reddit. Y U NO post more memes?", spread: "Reddit/9GAG · 2011" },
            { icon: "fa-solid fa-cat", name: "Nyan Cat Peaks", desc: "The rainbow-trailing Pop-Tart cat hits 100M views. A 10-hour version exists.", spread: "YouTube · Apr 2011" },
        ],
        sites: [
            { icon: "fa-brands fa-snapchat", name: "Snapchat Launches", desc: "Ephemeral photos with a countdown timer. Stanford students build what becomes a generation's preferred app.", visits: "Launch · Sep 2011" },
            { icon: "fa-brands fa-twitter", name: "Twitter", desc: "250M tweets per day. Arab Spring demonstrates the platform's political power.", visits: "250M tweets/day" },
            { icon: "fa-brands fa-google", name: "Google+", desc: "Google's answer to Facebook. Circles, Hangouts, and a ghost town waiting to happen.", visits: "20M users in 3 weeks" },
            { icon: "fa-brands fa-quora", name: "Quora Rises", desc: "Q&A for the intellectual internet. Silicon Valley's open secret becomes public.", visits: "1.5M monthly" },
        ],
        events: [
            { date: "Jan 2011", title: "Arab Spring on Twitter", desc: "Twitter and Facebook coordinate protesters across Egypt, Tunisia, and Libya. Social media becomes a political force." },
            { date: "May 2011", title: "Osama Bin Laden Death on Twitter", desc: "News breaks on Twitter hours before CNN. Social media's role as the new wire service is confirmed." },
            { date: "Oct 2011", title: "Steve Jobs Dies", desc: "Apple's founder passes. The internet mourns in a way it had never mourned before. Posts, tributes, and threads dominate every platform." },
        ]
    },
    2012: {
        videos: [
            { title: "Gangnam Style", tag: "K-Pop", meta: "YouTube · Jul 2012", desc: "PSY's absurdist horse-riding dance became the first YouTube video to hit 1 billion views, cracking YouTube's view counter and bringing K-Pop to the global mainstream.", views: "1B+ views (first ever)", bar: 100, featured: true },
            { title: "Kony 2012", tag: "Activism", meta: "Invisible Children · Mar 2012", desc: "A 30-minute documentary about Ugandan warlord Joseph Kony reached 100 million views in 6 days — the fastest a viral campaign had ever spread.", views: "100M in 6 days", bar: 90 },
            { title: "Harlem Shake", tag: "Trend", meta: "YouTube · Jan 2012", desc: "A 30-second video format where one person dances alone before a chaotic crowd erupts — millions of parodies were made by offices, schools, sports teams, and militaries.", views: "Millions of parodies", bar: 80 },
            { title: "Felix Baumgartner's Space Jump", tag: "Sports", meta: "Red Bull · Oct 2012", desc: "Baumgartner jumped from 39km above Earth, breaking the sound barrier in freefall. 52 million people watched the livestream — a record at the time.", views: "52M live viewers", bar: 85 },
        ],
        music: [
            { num: "01", song: "We Are Young", artist: "fun. ft. Janelle Monáe", wks: "9 wks at #1" },
            { num: "02", song: "Somebody That I Used to Know", artist: "Gotye ft. Kimbra", wks: "8 wks at #1" },
            { num: "03", song: "Call Me Maybe", artist: "Carly Rae Jepsen", wks: "9 wks at #1" },
            { num: "04", song: "Gangnam Style", artist: "PSY", wks: "5 wks at #1" },
            { num: "05", song: "Payphone", artist: "Maroon 5", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-horse", name: "Gangnam Style Horse Dance", desc: "PSY breaks YouTube's view counter. 'Oppa Gangnam Style' becomes inescapable from July onward.", spread: "YouTube → everywhere · 2012" },
            { icon: "fa-solid fa-face-angry", name: "Y U NO Guy", desc: "The rage comic stick figure demanding explanations rules Reddit and Facebook.", spread: "9GAG · Reddit · 2012" },
            { icon: "fa-solid fa-dog", name: "Doge", desc: "A Shiba Inu in Comic Sans. Much wow. Very internet. Such meme.", spread: "Reddit · Oct 2012" },
            { icon: "fa-solid fa-face-meh", name: "McKayla Is Not Impressed", desc: "Olympic gymnast's pursed-lip expression becomes an instant meme at the London Olympics.", spread: "Olympics · Aug 2012" },
        ],
        sites: [
            { icon: "fa-brands fa-instagram", name: "Instagram", desc: "Just acquired by Facebook for $1B. Filters for everything.", visits: "100M users" },
            { icon: "fa-brands fa-pinterest", name: "Pinterest", desc: "The visual bookmarking board that became the internet's corkboard.", visits: "25M users" },
            { icon: "fa-brands fa-twitch", name: "Twitch", desc: "Gaming streams go mainstream as Twitch spins out from Justin.tv.", visits: "20M/month" },
            { icon: "fa-brands fa-reddit", name: "Reddit", desc: "The front page of the internet. AMAs, r/funny, and endless karma farming.", visits: "400M/month" },
        ],
        events: [
            { date: "Apr 2012", title: "Instagram Acquired for $1B", desc: "Facebook buys a 13-person photo filter app for a billion dollars. Wall Street thinks Zuckerberg is crazy." },
            { date: "Jul 2012", title: "Gangnam Style Goes Viral", desc: "PSY's horse-dance video spreads globally. First YouTube video to hit 1 billion views." },
            { date: "Oct 2012", title: "Sandy Hook: Twitter as News", desc: "Twitter becomes primary news source during Hurricane Sandy, reshaping real-time reporting forever." },
        ]
    },
    2013: {
        videos: [
            { title: "Harlem Shake (Peak & Backlash)", tag: "Trend", meta: "YouTube · Feb 2013", desc: "The 30-second format where one person dances alone then chaos erupts had already launched in 2012, but February 2013 saw the avalanche: 4,000 versions uploaded per day, 10M views per day, then instant cultural fatigue.", views: "1B+ total views", bar: 100, featured: true },
            { title: "What Does the Fox Say?", tag: "Comedy", meta: "YouTube · Sep 2013", desc: "Norwegian comedy duo Ylvis created a deadpan music video asking the world's most profound question. 800M views. No one knows what the fox says.", views: "800M views", bar: 90 },
            { title: "Miley Cyrus VMA Twerking", tag: "Pop Culture", meta: "YouTube · Aug 2013", desc: "Miley Cyrus's performance with Robin Thicke at the VMAs generated more tweets per minute than any previous TV broadcast and dominated social media for weeks.", views: "Twitter record", bar: 80 },
            { title: "Dumb Ways to Die", tag: "Animation", meta: "YouTube · 2013", desc: "Melbourne's Metro Trains released a safety PSA with an earworm song and cute characters dying in absurd ways. Won every advertising award. Still annoyingly catchy.", views: "80M+ views", bar: 70 },
        ],
        music: [
            { num: "01", song: "Thrift Shop", artist: "Macklemore & Ryan Lewis", wks: "6 wks at #1" },
            { num: "02", song: "Blurred Lines", artist: "Robin Thicke ft. T.I.", wks: "12 wks at #1" },
            { num: "03", song: "Royals", artist: "Lorde", wks: "9 wks at #1" },
            { num: "04", song: "Mirrors", artist: "Justin Timberlake", wks: "2 wks at #1" },
            { num: "05", song: "Suit & Tie", artist: "Justin Timberlake ft. Jay-Z", wks: "3 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-dog", name: "Doge", desc: "Shiba Inu + Comic Sans + broken English = the internet's defining aesthetic of 2013. Much meme. So viral. Wow.", spread: "Reddit → everywhere · Oct 2013" },
            { icon: "fa-solid fa-hand-point-right", name: "What Are Those", desc: "A police officer's footwear gets roasted on Vine. The clip spawns 10,000 iterations.", spread: "Vine · 2013" },
            { icon: "fa-solid fa-face-rolling-eyes", name: "You Had One Job", desc: "Compilations of baffling workplace failures spread across Facebook and Tumblr.", spread: "Facebook/Tumblr · 2013" },
            { icon: "fa-solid fa-person-walking", name: "Twerking Goes Mainstream", desc: "Miley Cyrus brings twerking to the VMAs. The word enters the Oxford Dictionary.", spread: "MTV/Twitter · Aug 2013" },
        ],
        sites: [
            { icon: "fa-brands fa-vine", name: "Vine", desc: "Six-second looping videos. Comedy gold. Twitter acquires it and later kills it.", visits: "40M users" },
            { icon: "fa-brands fa-snapchat", name: "Snapchat Stories", desc: "Snapchat launches Stories. The format that will eventually colonize every social platform.", visits: "350M snaps/day" },
            { icon: "fa-brands fa-reddit", name: "Reddit AMA", desc: "Barack Obama's Ask Me Anything crashes Reddit's servers. The platform is now cultural infrastructure.", visits: "5.7B pageviews/month" },
            { icon: "fa-brands fa-buzzfeed", name: "BuzzFeed", desc: "Listicles, quizzes, and 'Which ___ Are You?' define a new era of social media publishing.", visits: "130M/month" },
        ],
        events: [
            { date: "Jun 2013", title: "Edward Snowden Leaks NSA Documents", desc: "Snowden reveals mass surveillance. The internet debates privacy. Encryption downloads spike overnight." },
            { date: "Jul 2013", title: "Snapchat Reaches 200M Snaps/Day", desc: "Snapchat's disappearing messages hit a daily milestone. Facebook tries (and fails) to buy it for $3B." },
            { date: "Nov 2013", title: "Twitter IPO", desc: "Twitter goes public at $26/share. The company is valued at $31B. Trolls and all." },
        ]
    },
    2014: {
        videos: [
            { title: "ALS Ice Bucket Challenge", tag: "Charity", meta: "YouTube/Facebook · Aug 2014", desc: "The most successful social media charity campaign in history. Celebrities, athletes, and world leaders dumped ice water on their heads to raise awareness of ALS. $115 million raised in two months.", views: "2.4M videos on Facebook alone", bar: 100, featured: true },
            { title: "Kim Kardashian Breaks the Internet", tag: "Pop Culture", meta: "Paper Magazine · Nov 2014", desc: "Kim Kardashian's oiled-up Paper Magazine cover was photographed by Jean-Paul Goude and crashed servers across the internet the moment it published.", views: "Broke the internet", bar: 85 },
            { title: "Frozen 'Let It Go' Covers", tag: "Music", meta: "YouTube · 2014", desc: "After Frozen's Oscar win, YouTube was flooded with thousands of amateur 'Let It Go' covers — in every language, on every instrument, from every age group.", views: "Billions combined", bar: 80 },
            { title: "Selfie at the Oscars", tag: "Pop Culture", meta: "Twitter · Mar 2014", desc: "Ellen DeGeneres's star-studded selfie during the Academy Awards became the most retweeted tweet in history at the time, crashing Twitter for 20 minutes.", views: "3.4M RTs", bar: 75 },
        ],
        music: [
            { num: "01", song: "Happy", artist: "Pharrell Williams", wks: "10 wks at #1" },
            { num: "02", song: "Fancy", artist: "Iggy Azalea ft. Charli XCX", wks: "7 wks at #1" },
            { num: "03", song: "All About That Bass", artist: "Meghan Trainor", wks: "8 wks at #1" },
            { num: "04", song: "Stay With Me", artist: "Sam Smith", wks: "4 wks at #1" },
            { num: "05", song: "Shake It Off", artist: "Taylor Swift", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-ice-cream", name: "Ice Bucket Challenge", desc: "Charity meets internet: dump a bucket of ice water on your head, nominate three friends. $115M raised.", spread: "Facebook/YouTube · Aug 2014" },
            { icon: "fa-solid fa-dress", name: "The Dress", desc: "Is it black and blue or white and gold? The internet divides into two camps and no one recovers.", spread: "Tumblr · Feb 2015 (debate starts)" },
            { icon: "fa-solid fa-pizza", name: "Pizza Rat", desc: "A New York City rat dragging an entire pizza slice down subway stairs becomes an aspirational figure.", spread: "Twitter/YouTube · Sep 2015" },
            { icon: "fa-solid fa-face-smile-wink", name: "2014 FIFA World Cup Twitter", desc: "Every goal, every red card, every controversy produces simultaneous viral moments and memes.", spread: "Twitter · Jun-Jul 2014" },
        ],
        sites: [
            { icon: "fa-brands fa-twitch", name: "Twitch", desc: "Gaming livestreams hit mainstream. Twitch Plays Pokémon gets 1M concurrent viewers.", visits: "55M unique visitors/month" },
            { icon: "fa-brands fa-product-hunt", name: "Product Hunt", desc: "The daily leaderboard for new apps and startups becomes Silicon Valley's launch pad.", visits: "2014 launch" },
            { icon: "fa-brands fa-medium", name: "Medium", desc: "Ev Williams's clean-reading blogging platform becomes the home of long-form tech thought.", visits: "30M readers/month" },
            { icon: "fa-brands fa-slack", name: "Slack Launches", desc: "Office messaging for the internet era. Email's death is announced for the thousandth time.", visits: "Launch · Aug 2014" },
        ],
        events: [
            { date: "Mar 2014", title: "Malaysia Airlines MH370 Disappears", desc: "The first major global news story that played out almost entirely on social media and Reddit speculation." },
            { date: "Jul 2014", title: "FIFA World Cup Sets Twitter Records", desc: "Brazil vs Germany (7-1) generates 35.6M tweets — a live sports record. Twitter becomes sports second screen." },
            { date: "Aug 2014", title: "Ferguson Protests on Twitter", desc: "The hashtag #Ferguson trends for months. Twitter becomes the primary channel for protest organizing and news." },
        ]
    },
    2015: {
        videos: [
            { title: "Left Shark at Super Bowl", tag: "Pop Culture", meta: "YouTube · Feb 2015", desc: "One of Katy Perry's backup dancers dressed as a shark danced completely out of sync during the halftime show. 'Left Shark' became the instant mascot of being authentically, magnificently wrong.", views: "20M+ views", bar: 85, featured: true },
            { title: "The Dress (Black & Blue vs White & Gold)", tag: "Viral", meta: "Tumblr/Twitter · Feb 2015", desc: "A single photo of a dress went viral because people genuinely could not agree on its colors. The internet chose sides. Science articles were written. Friendships ended.", views: "73M tweets in 24hrs", bar: 100 },
            { title: "Hotline Bling Music Video", tag: "Music", meta: "YouTube · Oct 2015", desc: "Drake's music video was deliberately low-fi and oddly choreographed. The internet reacted by meme-ifying every frame, adding props, and superimposing Drake into every pop culture moment.", views: "300M+ views", bar: 90 },
            { title: "Charlie Sheen HIV Announcement", tag: "News", meta: "Today Show · Nov 2015", desc: "Charlie Sheen's live HIV disclosure on the Today Show was among the most-watched celebrity news moments of the year, discussed across every social platform simultaneously.", views: "100M+ across platforms", bar: 70 },
        ],
        music: [
            { num: "01", song: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", wks: "14 wks at #1" },
            { num: "02", song: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth", wks: "12 wks at #1" },
            { num: "03", song: "Thinking Out Loud", artist: "Ed Sheeran", wks: "2 wks at #1" },
            { num: "04", song: "Bad Blood", artist: "Taylor Swift ft. Kendrick Lamar", wks: "1 wk at #1" },
            { num: "05", song: "Hello", artist: "Adele", wks: "10 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-fish", name: "Left Shark", desc: "The backup dancer who danced to his own rhythm during the Super Bowl halftime show. Forever iconic.", spread: "Twitter/YouTube · Feb 2015" },
            { icon: "fa-solid fa-person-running", name: "Hotline Bling Drake", desc: "Drake's awkward dance becomes the year's most versatile reaction image. Used in every conceivable context.", spread: "Twitter/Tumblr · Oct 2015" },
            { icon: "fa-solid fa-star", name: "Netflix and Chill", desc: "An innocent invitation becomes a loaded phrase. Became a universal cultural euphemism at internet speed.", spread: "Twitter → everywhere · 2015" },
            { icon: "fa-solid fa-robot", name: "The Dress (Blue vs Gold)", desc: "The most violent internet disagreement about a mundane object in history. Color perception goes viral.", spread: "Tumblr/Twitter · Feb 2015" },
        ],
        sites: [
            { icon: "fa-brands fa-reddit", name: "Reddit", desc: "Ellen Pao steps down as CEO. Reddit's internal drama becomes external news. 8B pageviews/month.", visits: "8B pageviews/month" },
            { icon: "fa-brands fa-snapchat", name: "Snapchat Discover", desc: "Snapchat launches Discover: branded news and entertainment channels for the swipe generation.", visits: "100M daily users" },
            { icon: "fa-brands fa-periscope", name: "Periscope", desc: "Twitter's livestreaming app lets anyone broadcast live from their phone. Journalism changes.", visits: "Launch · Mar 2015" },
            { icon: "fa-brands fa-youtube", name: "YouTube Red", desc: "YouTube launches an ad-free subscription tier. The platform is now a media empire.", visits: "1B hours/day watched" },
        ],
        events: [
            { date: "Feb 2015", title: "The Dress Divides the Internet", desc: "A single dress photo on Tumblr generates 73M tweets in 24 hours. The debate is never resolved." },
            { date: "Jun 2015", title: "Apple Music Launches", desc: "Apple enters streaming with a star-studded launch. Taylor Swift writes an open letter. Apple relents." },
            { date: "Nov 2015", title: "Paris Attacks on Social Media", desc: "The first major terrorist attack to have a dedicated Facebook Safety Check. Social media's role in crisis response evolves." },
        ]
    },
    2016: {
        videos: [
            { title: "Damn Daniel", tag: "Viral", meta: "Twitter · Feb 2016", desc: "Josh Holz's Snapchat voiceover narrating his friend Daniel's white Vans became a Twitter sensation overnight — the first major Snapchat-to-Twitter crossover hit.", views: "400M+ views", bar: 85, featured: true },
            { title: "Running Man Challenge", tag: "Trend", meta: "Instagram · 2016", desc: "Two University of Maryland basketball players started a challenge where people run in place to a Ghost Town DJ track. NFL teams, schools, and military units joined.", views: "500M+ impressions", bar: 90 },
            { title: "Ken Bone at the Debate", tag: "Politics", meta: "Twitter · Oct 2016", desc: "A red-sweatered undecided voter asked a question at the presidential debate and was immediately turned into a beloved meme — briefly the most adored man on the internet.", views: "Immediate meme-ification", bar: 70 },
            { title: "Bottle Cap Challenge (early)", tag: "Challenge", meta: "Instagram · 2016", desc: "The challenge to spin-kick a bottle cap off without knocking the bottle — kicked off by martial artists and copied by millions of amateurs worldwide.", views: "Multi-million entries", bar: 65 },
        ],
        music: [
            { num: "01", song: "One Dance", artist: "Drake", wks: "10 wks at #1" },
            { num: "02", song: "Work", artist: "Rihanna ft. Drake", wks: "9 wks at #1" },
            { num: "03", song: "Love Yourself", artist: "Justin Bieber", wks: "2 wks at #1" },
            { num: "04", song: "7 Years", artist: "Lukas Graham", wks: "2 wks at #1" },
            { num: "05", song: "Closer", artist: "The Chainsmokers", wks: "12 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-shoe-prints", name: "Damn Daniel", desc: "A Snapchat video of Daniel's white Vans became the first major Snapchat-to-Twitter viral moment.", spread: "Snapchat → Twitter · Feb 2016" },
            { icon: "fa-solid fa-heart-crack", name: "Harambe", desc: "Rest in power. The gorilla who became everything and nothing at once.", spread: "Twitter · May 2016" },
            { icon: "fa-solid fa-frog", name: "Pepe the Frog", desc: "Matt Furie's cartoon frog is weaponized by online communities and becomes politically charged.", spread: "4chan → everywhere · 2016" },
            { icon: "fa-solid fa-location-crosshairs", name: "Pokémon GO Fever", desc: "Millions walk into fountains, traffic, and restricted zones chasing digital creatures.", spread: "Mobile · Jul 2016" },
        ],
        sites: [
            { icon: "fa-brands fa-netflix", name: "Netflix Originals Boom", desc: "Stranger Things, The Crown — Netflix becomes a content powerhouse.", visits: "90M subscribers" },
            { icon: "fa-brands fa-spotify", name: "Spotify", desc: "Music streaming beats downloads. The algorithm becomes your DJ.", visits: "100M users" },
            { icon: "fa-brands fa-snapchat", name: "Snapchat", desc: "Stories, lenses, and the platform teens preferred over Facebook.", visits: "150M/day" },
            { icon: "fa-brands fa-discord", name: "Discord", desc: "Gaming communities migrate from Skype. Servers, bots, and voice chat.", visits: "25M users" },
        ],
        events: [
            { date: "Jul 2016", title: "Pokémon GO Launches", desc: "Augmented reality meets nostalgia. Millions go outside. Parks are crowded. Servers crash." },
            { date: "Nov 2016", title: "U.S. Election Night on Twitter", desc: "Twitter reaches 40,000 tweets per minute as election results roll in. The timeline breaks." },
            { date: "Dec 2016", title: "TikTok's Precursor Musical.ly Peaks", desc: "60 million users lip-sync on Musical.ly. ByteDance is watching." },
        ]
    },
    2017: {
        videos: [
            { title: "United Airlines Dragging Incident", tag: "News", meta: "Twitter · Apr 2017", desc: "Passenger video of a man being forcibly dragged off a United Airlines flight went viral within hours. The company lost $1.4B in market value in a day. Everyone re-read their flight terms.", views: "100M+ across platforms", bar: 95, featured: true },
            { title: "Despacito ft. Justin Bieber", tag: "Music", meta: "YouTube · Apr 2017", desc: "Luis Fonsi and Daddy Yankee's Despacito became the first YouTube video to reach 3 billion views, and with Bieber's remix, the most-streamed song in history at the time.", views: "3B+ views", bar: 100 },
            { title: "Ed Sheeran Game of Thrones Cameo", tag: "TV", meta: "HBO/YouTube · Jul 2017", desc: "Ed Sheeran's surprise appearance in Game of Thrones season 7 broke Twitter for an episode. His character's name was later revealed to be 'Ed Sheeran' in the credits.", views: "Twitter trending #1 globally", bar: 65 },
            { title: "Fyre Festival Documentaries", tag: "Culture", meta: "Twitter/YouTube · Apr 2017", desc: "The fraudulent luxury music festival's collapse played out in real-time on Instagram Stories and Twitter. The schadenfreude was immense and immediate.", views: "Viral chaos", bar: 80 },
        ],
        music: [
            { num: "01", song: "Shape of You", artist: "Ed Sheeran", wks: "12 wks at #1" },
            { num: "02", song: "Despacito", artist: "Luis Fonsi ft. Daddy Yankee & Justin Bieber", wks: "16 wks at #1" },
            { num: "03", song: "That's What I Like", artist: "Bruno Mars", wks: "9 wks at #1" },
            { num: "04", song: "Rockstar", artist: "Post Malone ft. 21 Savage", wks: "8 wks at #1" },
            { num: "05", song: "I'm the One", artist: "DJ Khaled ft. Justin Bieber", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-spider", name: "Spider-Man Pointing", desc: "The classic 1967 cartoon frame of two Spider-Men pointing at each other becomes the year's go-to accountability meme.", spread: "Twitter/Reddit · 2017" },
            { icon: "fa-solid fa-fire", name: "This Is Fine Dog", desc: "A dog in a burning room calmly drinking coffee. The definitive meme for 2017's political climate.", spread: "Twitter · 2017" },
            { icon: "fa-solid fa-hand", name: "Salt Bae", desc: "Turkish restaurateur Nusret Gökçe goes viral for his theatrical, wrist-flicking salt technique. The meme is everywhere.", spread: "Instagram/Twitter · Jan 2017" },
            { icon: "fa-solid fa-car", name: "Cash Me Ousside", desc: "Dr. Phil guest Danielle Bregoli challenges the audience. The phrase gets auto-tuned, remixed, and adopted globally.", spread: "YouTube/Twitter · Feb 2017" },
        ],
        sites: [
            { icon: "fa-brands fa-tiktok", name: "TikTok (Musical.ly merge)", desc: "ByteDance launches TikTok internationally. Nobody in the West notices. Yet.", visits: "100M users (China)" },
            { icon: "fa-brands fa-twitter", name: "Twitter's 280-Character Limit", desc: "Twitter doubles character count. The platform debates whether this is good or catastrophic.", visits: "330M users" },
            { icon: "fa-brands fa-instagram", name: "Instagram Stories", desc: "One year after copying Snapchat's Stories format, Instagram has 250M daily Story users. Snapchat suffers.", visits: "800M users" },
            { icon: "fa-brands fa-netflix", name: "Netflix", desc: "The crown jewel of prestige TV. Stranger Things, Mindhunter, The Crown dominate the cultural conversation.", visits: "110M subscribers" },
        ],
        events: [
            { date: "Jan 2017", title: "Trump Inauguration Twitter Frenzy", desc: "Donald Trump's inauguration generates the most political tweets in the platform's history. The era of political Twitter begins." },
            { date: "Apr 2017", title: "United Airlines Goes Viral for Wrong Reasons", desc: "Passenger removal video crashes the company's PR. Customer-filmed video redefines corporate accountability." },
            { date: "Oct 2017", title: "#MeToo Goes Viral", desc: "Alyssa Milano's tweet sparks a global conversation. #MeToo trends in 85 countries within 24 hours." },
        ]
    },
    2018: {
        videos: [
            { title: "Bird Box Challenge", tag: "Trend", meta: "YouTube · Dec 2018", desc: "Netflix's Sandra Bullock thriller inspired millions to attempt everyday tasks while blindfolded. Netflix asked people to stop. They did not stop.", views: "45M Netflix households in first week", bar: 85, featured: true },
            { title: "Fortnite Dances in Real Life", tag: "Gaming", meta: "YouTube · 2018", desc: "Fortnite's iconic emotes — the Floss, the Orange Justice, the Robot — became dances performed by real athletes, kids in schools, and at weddings. The game crossed into mainstream culture.", views: "Billions of views combined", bar: 100 },
            { title: "Drake 'God's Plan' Music Video", tag: "Music", meta: "YouTube · Feb 2018", desc: "Drake gave away the entire $999,631 budget of his God's Plan video to students, shelters, and strangers. The video went viral before it was even released.", views: "1B+ views", bar: 90 },
            { title: "Paul Allen's Stratolaunch First Flight", tag: "Tech", meta: "YouTube · Apr 2018", desc: "The world's largest airplane by wingspan takes flight for the first time. Silicon Valley's obsession with private space ventures goes mainstream.", views: "5M live viewers", bar: 60 },
        ],
        music: [
            { num: "01", song: "God's Plan", artist: "Drake", wks: "11 wks at #1" },
            { num: "02", song: "Perfect", artist: "Ed Sheeran ft. Beyoncé", wks: "5 wks at #1" },
            { num: "03", song: "Rockstar", artist: "Post Malone ft. 21 Savage", wks: "8 wks at #1" },
            { num: "04", song: "Nice for What", artist: "Drake", wks: "8 wks at #1" },
            { num: "05", song: "In My Feelings", artist: "Drake", wks: "10 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-dancer", name: "Fortnite Dances", desc: "The Floss, the Orange Justice, the Robot — video game emotes performed by real humans everywhere.", spread: "IRL/YouTube · 2018" },
            { icon: "fa-solid fa-face-laugh-squint", name: "Is This a Pigeon?", desc: "A butterfly-misidentified anime screenshot becomes the definitive meme for misattributing things.", spread: "Twitter/Reddit · 2018" },
            { icon: "fa-solid fa-skull", name: "Tide Pod Challenge", desc: "Teens eating laundry detergent pods as a 'challenge.' FDA issues warnings. Parents panic. The internet is cooked.", spread: "YouTube/Twitter · Jan 2018" },
            { icon: "fa-solid fa-microphone", name: "In My Feelings Challenge", desc: "#InMyFeelings — dancing next to a moving car to Drake's song. Everyone from Will Smith to local police departments joined.", spread: "Instagram/Twitter · Jul 2018" },
        ],
        sites: [
            { icon: "fa-brands fa-tiktok", name: "TikTok Merges with Musical.ly", desc: "ByteDance acquires Musical.ly and merges it with TikTok. The app arrives globally. A billion-user platform is born.", visits: "500M users worldwide" },
            { icon: "fa-brands fa-facebook", name: "Facebook Cambridge Analytica", desc: "Data scandal reveals 87M users' data harvested without consent. Congress questions Zuckerberg. Nothing changes.", visits: "2.3B users despite scandal" },
            { icon: "fa-brands fa-twitch", name: "Twitch Fortnite Boom", desc: "Ninja streams Fortnite with Drake. 635,000 concurrent viewers. Twitch breaks its record.", visits: "15M daily users" },
            { icon: "fa-brands fa-youtube", name: "YouTube Rewind", desc: "YouTube's annual recap becomes the most-disliked video on the platform. Later deleted entirely.", visits: "2B logged-in users/month" },
        ],
        events: [
            { date: "Mar 2018", title: "Cambridge Analytica Scandal Breaks", desc: "The Facebook data harvesting story reveals how social media can be weaponized for political influence." },
            { date: "Jun 2018", title: "Twitch Ninja + Drake Stream", desc: "Fortnite gaming stream with Drake breaks Twitch's concurrent viewer record at 635,000. Gaming culture goes mainstream." },
            { date: "Nov 2018", title: "TikTok Downloads Surge in US", desc: "TikTok becomes the most downloaded app in the US. No one in Silicon Valley takes it seriously. A mistake." },
        ]
    },
    2019: {
        videos: [
            { title: "Area 51 Raid Memes", tag: "Viral", meta: "Facebook/YouTube · 2019", desc: "A Facebook event calling to 'storm Area 51' as a joke attracted 2 million RSVPs and spawned the most prolific meme cycle of the year. A small festival actually happened outside the base.", views: "2M RSVPs; billions of impressions", bar: 100, featured: true },
            { title: "Old Town Road (Billy Ray Cyrus Remix)", tag: "Music", meta: "YouTube · Apr 2019", desc: "Lil Nas X's country-trap mashup went viral on TikTok, got removed from Billboard's country chart, then with Billy Ray Cyrus became the longest-running #1 in Hot 100 history at 19 weeks.", views: "400M+ views", bar: 95 },
            { title: "Baby Yoda (The Child) Revealed", tag: "TV", meta: "Disney+ · Nov 2019", desc: "The Mandalorian's final scene revealed a miniature Yoda-like creature. The internet lost its mind. Fan art flooded every platform within hours.", views: "Immediate viral saturation", bar: 90 },
            { title: "Avengers: Endgame Reactions", tag: "Film", meta: "YouTube · Apr 2019", desc: "Cinema reaction videos of Avengers: Endgame flooded YouTube. The film broke every box office record. Theaters were like congregations.", views: "$2.8B box office", bar: 85 },
        ],
        music: [
            { num: "01", song: "Old Town Road", artist: "Lil Nas X ft. Billy Ray Cyrus", wks: "19 wks at #1" },
            { num: "02", song: "Without Me", artist: "Halsey", wks: "3 wks at #1" },
            { num: "03", song: "Sunflower", artist: "Post Malone & Swae Lee", wks: "1 wk at #1" },
            { num: "04", song: "Baby Shark", artist: "Pinkfong", wks: "Perpetual · Eternal" },
            { num: "05", song: "7 Rings", artist: "Ariana Grande", wks: "8 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-ufo", name: "Area 51 Memes", desc: "The 'Naruto run' into Area 51 Facebook event became the summer's defining meme. 2M RSVPs.", spread: "Facebook/Twitter · Jul 2019" },
            { icon: "fa-solid fa-baby", name: "Baby Yoda / The Child", desc: "The most meme-able creature since Grumpy Cat arrives on Disney+. No one had seen anything cuter.", spread: "Twitter/Reddit · Nov 2019" },
            { icon: "fa-solid fa-person-running", name: "Bottle Cap Challenge", desc: "Spin-kick a bottle cap off. Enter: celebrities, martial artists, and billions of failed attempts.", spread: "Instagram · Jul 2019" },
            { icon: "fa-solid fa-brain", name: "OK Boomer", desc: "Gen Z's dismissal of generational condescension becomes the year's defining phrase. Headlines everywhere.", spread: "TikTok/Twitter · Oct 2019" },
        ],
        sites: [
            { icon: "fa-brands fa-tiktok", name: "TikTok", desc: "1B downloads globally. The algorithm doesn't care who you follow. It just knows what you want.", visits: "1B downloads milestone" },
            { icon: "fa-brands fa-discord", name: "Discord", desc: "Gaming, fan communities, and study groups. 250M registered users find their servers.", visits: "250M registered users" },
            { icon: "fa-solid fa-tv", name: "Disney+", desc: "Disney launches its streaming service with The Mandalorian. Baby Yoda immediately breaks the internet.", visits: "Launch · Nov 2019" },
            { icon: "fa-brands fa-twitter", name: "Twitter Lists & Moments", desc: "Twitter refines its tools as political discourse becomes the platform's primary product.", visits: "330M monthly users" },
        ],
        events: [
            { date: "Apr 2019", title: "Avengers: Endgame Breaks Records", desc: "The culmination of a decade of Marvel films becomes the highest-grossing movie ever. Theaters overflow." },
            { date: "Jul 2019", title: "Area 51 Meme Goes Stratospheric", desc: "A joke Facebook event with 2M RSVPs becomes the internet's defining cultural moment of the summer." },
            { date: "Nov 2019", title: "Disney+ Launches with Baby Yoda", desc: "Disney's streaming service debuts. The Mandalorian's Baby Yoda immediately becomes the most-memed character of the year." },
        ]
    },
    2020: {
        videos: [
            { title: "'Imagine' Celebrity Video", tag: "Culture", meta: "Instagram · Mar 2020", desc: "A parade of A-list celebrities filmed themselves singing John Lennon's 'Imagine' from their mansions. The internet's unified response: mockery so swift it became its own meme.", views: "Universally mocked", bar: 90, featured: true },
            { title: "WAP Music Video", tag: "Music", meta: "YouTube · Aug 2020", desc: "Cardi B and Megan Thee Stallion's unapologetic celebration of female sexuality became the most talked-about video of the year, racking up 100M views in 3 days.", views: "100M in 3 days", bar: 100 },
            { title: "Tiger King Trailer", tag: "Documentary", meta: "Netflix · Mar 2020", desc: "Released the same week as global lockdowns, Tiger King's wild story of feuding big cat owners consumed the early pandemic internet and became a cultural event.", views: "64M households", bar: 88 },
            { title: "Sea Shanties on TikTok", tag: "Trend", meta: "TikTok · Dec 2020", desc: "Nathan Evans's 'Wellerman' shanty launched a global TikTok duet chain of sea shanties — a moment of communal joy in an otherwise grim year.", views: "100M+ views", bar: 75 },
        ],
        music: [
            { num: "01", song: "Blinding Lights", artist: "The Weeknd", wks: "4 wks at #1" },
            { num: "02", song: "Rockstar", artist: "DaBaby ft. Roddy Ricch", wks: "7 wks at #1" },
            { num: "03", song: "WAP", artist: "Cardi B ft. Megan Thee Stallion", wks: "4 wks at #1" },
            { num: "04", song: "Savage", artist: "Megan Thee Stallion ft. Beyoncé", wks: "6 wks at #1" },
            { num: "05", song: "Say So", artist: "Doja Cat", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-video", name: "Zoom Backgrounds", desc: "Blurring backgrounds, accidentally leaving microphones on, kids interrupting. Endless material.", spread: "Every Zoom call · 2020" },
            { icon: "fa-solid fa-virus", name: "Pandemic Memes", desc: "Two weeks to flatten the curve. Day 47 of quarantine. We're all in this together... mostly on memes.", spread: "Every platform · 2020" },
            { icon: "fa-solid fa-user-secret", name: "Among Us", desc: "'Emergency meeting!' The space social deduction game takes over. Everyone is sus.", spread: "Twitch → TikTok · 2020" },
            { icon: "fa-solid fa-paw", name: "Tiger King", desc: "Joe Exotic and Carole Baskin consume March and April. Everyone in lockdown watched it.", spread: "Netflix · Mar 2020" },
        ],
        sites: [
            { icon: "fa-solid fa-video", name: "Zoom", desc: "The video call app nobody used becomes the app everyone uses, every day.", visits: "300M daily meetings" },
            { icon: "fa-brands fa-tiktok", name: "TikTok", desc: "The algorithm that knows you better than you know yourself. Banned panic follows.", visits: "800M users" },
            { icon: "fa-brands fa-twitch", name: "Twitch", desc: "Lockdown pushes streaming to 1.4B hours watched per month.", visits: "1.4B hrs/month" },
            { icon: "fa-solid fa-box", name: "Instacart / DoorDash", desc: "Delivery services become infrastructure. Gig economy reality check.", visits: "700% growth" },
        ],
        events: [
            { date: "Mar 2020", title: "COVID-19 Lockdowns Begin", desc: "The world logs on. Zoom, Netflix, TikTok, and Amazon reach unprecedented scale overnight." },
            { date: "Jun 2020", title: "BLM Goes Global Online", desc: "Black squares, Blackout Tuesday, bail funds — social media becomes the organizing layer." },
            { date: "Dec 2020", title: "Sea Shanties Take TikTok", desc: "Nathan Evans sings 'Wellerman' and spawns a global folk-music duet chain. Joy, briefly, prevails." },
        ]
    },
    2021: {
        videos: [
            { title: "Squid Game Global Phenomenon", tag: "TV", meta: "Netflix · Oct 2021", desc: "The South Korean survival drama became Netflix's most-watched series ever in its first month, generating more memes, challenges, and cosplay than any show before it. The internet had a collective watch-party.", views: "111M households", bar: 100, featured: true },
            { title: "Bernie Sanders Inauguration Mittens", tag: "Politics", meta: "Twitter · Jan 2021", desc: "Vermont Senator Bernie Sanders sat cross-armed in his parka and mittens at the Biden inauguration and immediately became a Photoshop canvas. He was inserted into thousands of scenes within hours.", views: "Millions of remixes", bar: 90 },
            { title: "Olivia Rodrigo 'drivers license' MV", tag: "Music", meta: "YouTube · Jan 2021", desc: "The debut single broke Spotify records and generated weeks of Taylor Swift comparisons and internet detective work about who the song was really about.", views: "76.1M Spotify streams in a week", bar: 85 },
            { title: "GME Short Squeeze (Wall Street Bets)", tag: "Finance", meta: "Reddit/YouTube · Jan 2021", desc: "Reddit's WallStreetBets forum coordinated a short squeeze on GameStop stock. Hedge funds lost billions. Elon Musk tweeted. Congress held hearings. Diamond hands.", views: "2.4M WSB members overnight", bar: 95 },
        ],
        music: [
            { num: "01", song: "Levitating", artist: "Dua Lipa ft. DaBaby", wks: "7 wks at #1" },
            { num: "02", song: "Drivers License", artist: "Olivia Rodrigo", wks: "8 wks at #1" },
            { num: "03", song: "Leave the Door Open", artist: "Silk Sonic", wks: "6 wks at #1" },
            { num: "04", song: "Butter", artist: "BTS", wks: "10 wks at #1" },
            { num: "05", song: "good 4 u", artist: "Olivia Rodrigo", wks: "6 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-mitten", name: "Bernie Mittens", desc: "Senator Sanders bundled up at the inauguration becomes the most Photoshopped image of the year.", spread: "Twitter · Jan 2021" },
            { icon: "fa-solid fa-hands-holding-dollar", name: "Diamond Hands", desc: "WallStreetBets' rallying cry during the GameStop saga. Holding the stock regardless of loss.", spread: "Reddit · Jan 2021" },
            { icon: "fa-solid fa-squid", name: "Squid Game Everything", desc: "The red jumpsuit, the shapes, the doll — Squid Game imagery colonizes Halloween, TikTok, and every platform.", spread: "Netflix/TikTok · Oct 2021" },
            { icon: "fa-solid fa-music", name: "Sea Shanty TikTok (Peak)", desc: "'Wellerman' and a wave of folk duets on TikTok provide the internet's unlikely 2021 joy moment.", spread: "TikTok · Jan 2021" },
        ],
        sites: [
            { icon: "fa-brands fa-discord", name: "Discord", desc: "NFT communities, WallStreetBets overflow, and every subculture finds its server. 150M users.", visits: "150M users" },
            { icon: "fa-solid fa-microphone-lines", name: "Clubhouse", desc: "Drop-in audio chat is the hottest app of Q1 2021. Everyone wants an invite. The hype fades by summer.", visits: "10M weekly users (peak)" },
            { icon: "fa-brands fa-twitter", name: "Twitter Spaces", desc: "Twitter copies Clubhouse. Audio rooms for news, commentary, and drama. Permanently on.", visits: "396M users" },
            { icon: "fa-brands fa-tiktok", name: "TikTok", desc: "1 billion active users. The algorithm is unstoppable. 'For You Page' becomes a universal cultural concept.", visits: "1B monthly users" },
        ],
        events: [
            { date: "Jan 2021", title: "GameStop Short Squeeze", desc: "Reddit's WallStreetBets drives GME stock from $20 to $480. Hedge funds lose billions. Congress investigates." },
            { date: "Jan 2021", title: "Capitol Riot on Social Media", desc: "Livestreamed insurrection on every platform. Twitter, Facebook, and YouTube ban Trump indefinitely. Platform power is the story." },
            { date: "Oct 2021", title: "Squid Game Released", desc: "Netflix's Korean survival drama becomes the platform's most-watched original ever. Global meme saturation follows." },
        ]
    },
    2022: {
        videos: [
            { title: "Will Smith Slaps Chris Rock at Oscars", tag: "Pop Culture", meta: "YouTube/Twitter · Mar 2022", desc: "Will Smith walked on stage and slapped Chris Rock at the Academy Awards. The live broadcast moment generated the biggest single-event Twitter reaction in Oscars history. Memes followed within seconds.", views: "100M+ clips across platforms", bar: 100, featured: true },
            { title: "Ukraine War on TikTok", tag: "News", meta: "TikTok · Feb 2022", desc: "For the first time, a major ground war was documented in real time through TikTok videos — from both sides. The conflict's documentation on social media redefined war reporting.", views: "Billions of views", bar: 85 },
            { title: "Elon Musk Buys Twitter — Chaos Unfolds", tag: "Tech", meta: "Twitter · Oct 2022", desc: "Musk's $44B acquisition of Twitter played out as performance art on the platform itself. The blue checkmark drama, mass layoffs, and 'free speech' pledges dominated tech discourse for months.", views: "Continuous coverage", bar: 90 },
            { title: "Beyoncé 'Renaissance' Visual Rollout", tag: "Music", meta: "YouTube · Jul 2022", desc: "The Renaissance album's slow-drip visual rollout on social media was a masterclass in internet marketing. 'Break My Soul' and 'Cuff It' became immediate dance challenge anthems.", views: "1B+ streams", bar: 80 },
        ],
        music: [
            { num: "01", song: "As It Was", artist: "Harry Styles", wks: "15 wks at #1" },
            { num: "02", song: "About Damn Time", artist: "Lizzo", wks: "2 wks at #1" },
            { num: "03", song: "Heat Waves", artist: "Glass Animals", wks: "5 wks at #1" },
            { num: "04", song: "Easy On Me", artist: "Adele", wks: "9 wks at #1" },
            { num: "05", song: "Anti-Hero", artist: "Taylor Swift", wks: "8 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-hand", name: "Will Smith Slap", desc: "The most replayed, remixed, and referenced award show moment of the decade. Still not over.", spread: "Twitter/YouTube · Mar 2022" },
            { icon: "fa-solid fa-bird", name: "Twitter Bird vs X", desc: "The impending Musk acquisition births endless jokes about the platform's identity crisis.", spread: "Twitter · Oct 2022" },
            { icon: "fa-solid fa-person-running", name: "Running Man Challenge Revival", desc: "Challenges never truly die on TikTok. Each month brings a resurrected format.", spread: "TikTok · 2022" },
            { icon: "fa-solid fa-crown", name: "Wordle", desc: "The NYT word game conquers every morning feed. Green, yellow, and grey squares fill every timeline.", spread: "Twitter · Jan 2022" },
        ],
        sites: [
            { icon: "fa-brands fa-x-twitter", name: "Twitter (Musk Era Begins)", desc: "$44B acquisition. Blue check chaos. Mass resignations. The API closes. A platform in freefall.", visits: "238M daily users" },
            { icon: "fa-brands fa-mastodon", name: "Mastodon", desc: "Twitter refugees flock to the decentralized alternative. 2.5M new sign-ups in a week.", visits: "2.5M new users (Nov 2022)" },
            { icon: "fa-solid fa-gamepad", name: "Wordle / NYT Games", desc: "The daily word game becomes a morning ritual for millions. The New York Times buys it for seven figures.", visits: "2M+ daily players" },
            { icon: "fa-brands fa-tiktok", name: "TikTok US Ban Threat #1", desc: "Congress first holds hearings about a TikTok ban. CEO Shou Zi Chew prepares to testify.", visits: "1B monthly users" },
        ],
        events: [
            { date: "Feb 2022", title: "Ukraine Invasion Livestreamed", desc: "TikTok, Telegram, and Twitter become the primary news sources for the Ukraine conflict. A new kind of war coverage." },
            { date: "Mar 2022", title: "Oscars Slap Heard Around the World", desc: "Will Smith slapping Chris Rock generates the fastest viral spike in Academy Awards history." },
            { date: "Oct 2022", title: "Elon Musk Acquires Twitter", desc: "The $44B deal closes. A sink is carried into HQ. Chaos begins and never quite ends." },
        ]
    },
    2023: {
        videos: [
            { title: "Barbie vs Oppenheimer ('Barbenheimer')", tag: "Film", meta: "YouTube/TikTok · Jul 2023", desc: "The internet spontaneously decided two wildly opposite movies releasing the same day was a double feature. Barbenheimer became a viral phenomenon, a fashion statement, and the most-memed cinema event in years.", views: "Collective $2.4B box office", bar: 100, featured: true },
            { title: "Taylor Swift's Eras Tour Stampede", tag: "Music", meta: "TikTok/YouTube · 2023", desc: "The Eras Tour was documented obsessively on TikTok. Outfit reveals, setlist updates, and friendship bracelet trades dominated the platform's cultural conversation for the entire year.", views: "Billions of views", bar: 95 },
            { title: "Sam Altman Fired and Rehired", tag: "Tech", meta: "Twitter/LinkedIn · Nov 2023", desc: "OpenAI's board fired CEO Sam Altman on a Friday. By Monday he was back. The saga played out on Twitter in real time. LinkedIn had a collective aneurysm.", views: "Dominated tech Twitter", bar: 85 },
            { title: "Threads Launches vs Twitter", tag: "Tech", meta: "YouTube/Twitter · Jul 2023", desc: "Instagram's Threads app gained 100M users in 5 days — the fastest-growing app in history. Most left within a week. The battle for Twitter refugees continued.", views: "100M in 5 days", bar: 75 },
        ],
        music: [
            { num: "01", song: "Flowers", artist: "Miley Cyrus", wks: "8 wks at #1" },
            { num: "02", song: "Anti-Hero", artist: "Taylor Swift", wks: "8 wks continued" },
            { num: "03", song: "Ella Baila Sola", artist: "Eslabon Armado & Peso Pluma", wks: "5 wks at #1" },
            { num: "04", song: "Kill Bill", artist: "SZA", wks: "2 wks at #1" },
            { num: "05", song: "Cruel Summer", artist: "Taylor Swift", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-film", name: "Barbenheimer", desc: "Pink vs atomic: Barbie and Oppenheimer release the same day. The internet makes it a cultural event.", spread: "TikTok/Twitter · Jul 2023" },
            { icon: "fa-solid fa-robot", name: "AI Art Discourse", desc: "Every platform debates whether AI art is real art. Artists are furious. Brands love it.", spread: "Twitter/Reddit · 2023" },
            { icon: "fa-solid fa-microchip", name: "ChatGPT for Everything", desc: "'Just ask ChatGPT' becomes the answer to every question. Professors panic. Students comply.", spread: "Everywhere · 2023" },
            { icon: "fa-solid fa-crown", name: "Swifties on Twitter", desc: "The Eras Tour Swifties effectively own Twitter. Friendship bracelets and setlist speculation dominate.", spread: "Twitter/TikTok · 2023" },
        ],
        sites: [
            { icon: "fa-brands fa-threads", name: "Threads", desc: "Instagram's Twitter rival hits 100M users in 5 days — the fastest app launch ever. Engagement drops after a week.", visits: "100M in 5 days" },
            { icon: "fa-solid fa-microchip", name: "ChatGPT", desc: "OpenAI's chatbot hits 100M monthly users faster than any product in history. Everything is disrupted.", visits: "100M monthly users" },
            { icon: "fa-brands fa-x-twitter", name: "X (Twitter)", desc: "Rebranded to X. The blue bird is gone. Elon's platform becomes increasingly chaotic and increasingly opinionated.", visits: "550M monthly users" },
            { icon: "fa-brands fa-reddit", name: "Reddit API Blackout", desc: "Third-party apps shut down over API pricing. Subreddits go dark in protest. Reddit goes public anyway.", visits: "57M daily users" },
        ],
        events: [
            { date: "Jan 2023", title: "ChatGPT Hits 100M Users", desc: "The fastest product to reach 100M users in history. Schools ban it. Enterprises adopt it. Everyone uses it." },
            { date: "Jul 2023", title: "Barbenheimer Weekend", desc: "Barbie and Oppenheimer release simultaneously. $235M opening weekend. The internet had planned the event for months." },
            { date: "Nov 2023", title: "Sam Altman OpenAI Drama", desc: "OpenAI fires and rehires its CEO within 72 hours. The governance of AI becomes front-page news globally." },
        ]
    },
    2024: {
        videos: [
            { title: "Wicked Trailer — Ariana & Cynthia", tag: "Film", meta: "Universal · Mar 2024", desc: "The first official trailer for the Wicked film adaptation shattered records with 170M views in 24 hours, proving the Broadway-to-film pipeline still commands internet attention.", views: "170M in 24 hrs", bar: 100, featured: true },
            { title: "Kendrick vs Drake Diss Tracks", tag: "Music", meta: "Various · Apr–May 2024", desc: "A sustained rap beef played out entirely online: Kendrick Lamar's 'Not Like Us' and 'Euphoria' vs Drake's responses. Billions of streams and one clear winner.", views: "Billions combined", bar: 98 },
            { title: "Sora AI Video Generation Demo", tag: "AI", meta: "OpenAI · Feb 2024", desc: "OpenAI's text-to-video model produced photorealistic footage from a single sentence prompt — and left the entire film industry wondering what just happened.", views: "100M impressions", bar: 85 },
            { title: "Brat Summer Announcement", tag: "Music", meta: "Charli XCX · May 2024", desc: "Charli XCX declared 'brat summer' via a green graphic, and within weeks the lime green aesthetic had colonized the entire internet and the US political campaign.", views: "Became a cultural season", bar: 80 },
        ],
        music: [
            { num: "01", song: "Not Like Us", artist: "Kendrick Lamar", wks: "9 wks at #1" },
            { num: "02", song: "Espresso", artist: "Sabrina Carpenter", wks: "7 wks at #1" },
            { num: "03", song: "360", artist: "Charli XCX", wks: "5 wks at #1" },
            { num: "04", song: "Birds of a Feather", artist: "Billie Eilish", wks: "6 wks at #1" },
            { num: "05", song: "Good Luck, Babe!", artist: "Chappell Roan", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-brain", name: "Brain Rot", desc: "Gen Alpha's vocabulary invades the internet. Skibidi, rizz, and 'no cap' hit mainstream media. Oxford names 'brain rot' word of the year.", spread: "TikTok → everywhere · 2024" },
            { icon: "fa-solid fa-music", name: "Brat Summer", desc: "Charli XCX's lime-green aesthetic becomes the defining cultural energy of summer 2024.", spread: "X / Instagram · Jun 2024" },
            { icon: "fa-solid fa-microphone", name: "Kendrick vs Drake", desc: "The most-followed rap beef in internet history. 'Not Like Us' plays everywhere. Lamar wins unambiguously.", spread: "Streaming + Social · Apr 2024" },
            { icon: "fa-solid fa-robot", name: "AI Overload", desc: "AI-generated content floods every feed. 'Is this AI?' becomes the internet's most-asked question.", spread: "Every platform · 2024" },
            { icon: "fa-solid fa-star", name: "Demure / Very Mindful", desc: "'Very demure, very mindful' — Jools Lebron's TikTok series becomes the summer's viral phrase.", spread: "TikTok · Aug 2024" },
            { icon: "fa-solid fa-magnifying-glass", name: "Hawk Tuah Girl", desc: "A street interview clip launches Hailey Welch into overnight internet celebrity. Podcasts follow.", spread: "X / TikTok · Jun 2024" },
        ],
        sites: [
            { icon: "fa-solid fa-microchip", name: "ChatGPT", desc: "200M weekly users. The fastest-growing product in history keeps growing.", visits: "200M weekly users" },
            { icon: "fa-brands fa-tiktok", name: "TikTok", desc: "Facing a US ban. Congress debates. 170M Americans use it. The saga continues.", visits: "170M US users" },
            { icon: "fa-brands fa-x-twitter", name: "X (Twitter)", desc: "Year 2 under Musk. Advertisers flee. Community Notes and chaos coexist.", visits: "550M users" },
            { icon: "fa-solid fa-gamepad", name: "Twitch / YouTube Live", desc: "Streaming wars: IShowSpeed, MrBeast, and creators blur the line between YouTube and TV.", visits: "2B hours/month" },
        ],
        events: [
            { date: "Feb 2024", title: "OpenAI Unveils Sora", desc: "Text-to-video AI that generates cinematic footage from a sentence. Hollywood takes notice. Fear follows." },
            { date: "Apr 2024", title: "Kendrick Drops 'Not Like Us'", desc: "The diss track heard around the world. Spotify records for a song. Drake goes quiet. Culture chooses a winner." },
            { date: "Nov 2024", title: "US Election Dominates Social Media", desc: "The most-discussed election in social media history. X, TikTok, and YouTube each become their own reality." },
        ]
    },
    2025: {
        videos: [
            { title: "DeepSeek R1 Reaction Marathon", tag: "AI", meta: "YouTube · Jan 2025", desc: "When DeepSeek's open-source model outperformed GPT-4 at a fraction of the cost, every tech YouTuber posted a reaction. Over 200M combined views across the week-long media firestorm.", views: "200M+ combined views", bar: 100, featured: true },
            { title: "GTA VI Trailer 2 — Record Views", tag: "Gaming", meta: "Rockstar · Apr 2025", desc: "Rockstar Games dropped the second trailer for GTA VI and the internet stopped everything — 180M views in 24 hours confirmed it as the most anticipated game in history.", views: "180M in 24hrs", bar: 95 },
            { title: "Pope Leo XIV Announcement", tag: "News", meta: "Live streams · May 2025", desc: "The election of the first American pope was announced live, breaking simultaneously on X, TikTok, and YouTube with 120M concurrent viewers across platforms.", views: "120M concurrent", bar: 88 },
            { title: "AI Music vs. Real Artists Debates", tag: "Culture", meta: "YouTube · 2025", desc: "As AI-generated music grew indistinguishable from human-made tracks, a wave of YouTube debate videos, manifestos, and comparison tests collected billions of impressions.", views: "Billions of impressions", bar: 80 },
        ],
        music: [
            { num: "01", song: "Luther", artist: "Kendrick Lamar ft. SZA", wks: "9 wks at #1" },
            { num: "02", song: "APT.", artist: "ROSE & Bruno Mars", wks: "8 wks at #1" },
            { num: "03", song: "Die With a Smile", artist: "Lady Gaga & Bruno Mars", wks: "5 wks at #1" },
            { num: "04", song: "Who", artist: "Jimin", wks: "3 wks at #1" },
            { num: "05", song: "Abracadabra", artist: "Lady Gaga", wks: "4 wks at #1" },
        ],
        memes: [
            { icon: "fa-solid fa-robot", name: "AI Slop Everywhere", desc: "AI-generated images, videos, and text flood every platform. 'Is this AI?' becomes the internet's default question.", spread: "Every platform · 2025" },
            { icon: "fa-solid fa-brain", name: "Vibe Coding", desc: "Developers describe what they want in plain English and AI writes the code. 'I just vibed it into existence.'", spread: "X / Dev Twitter · 2025" },
            { icon: "fa-solid fa-skull", name: "NPC Livestreams", desc: "TikTok Live NPC streamers reach peak absurdity. Creators go viral pretending to be video game characters.", spread: "TikTok · 2025" },
            { icon: "fa-solid fa-wand-magic-sparkles", name: "Ghibli Everything", desc: "ChatGPT's image mode turns every photo into Studio Ghibli art. OpenAI servers buckle under demand.", spread: "ChatGPT → everywhere · Mar 2025" },
            { icon: "fa-solid fa-hand-peace", name: "Brat Summer II", desc: "Charli XCX extends her cultural moment into 2025. Lime green stays.", spread: "X / Instagram · 2025" },
            { icon: "fa-solid fa-circle-question", name: "Lore Dumping", desc: "'The lore dropped' — posting dense backstory about minor internet personalities as if it's ancient myth.", spread: "TikTok / Reddit · 2025" },
        ],
        sites: [
            { icon: "fa-solid fa-microchip", name: "ChatGPT / Claude", desc: "AI assistants become the new search engine. Half the web's traffic reroutes through prompts.", visits: "700M+ users" },
            { icon: "fa-brands fa-tiktok", name: "TikTok", desc: "Survived a US ban scare. Still the algorithm feeding everyone's every interest and anxiety.", visits: "1.7B users" },
            { icon: "fa-brands fa-x-twitter", name: "X (Twitter)", desc: "Rebrand, chaos, and somehow still the place where news breaks first.", visits: "600M users" },
            { icon: "fa-solid fa-gamepad", name: "Discord", desc: "The de facto home for every community: AI labs, indie devs, fandoms, and friend groups.", visits: "200M monthly" },
        ],
        events: [
            { date: "Jan 2025", title: "DeepSeek Shocks Silicon Valley", desc: "A Chinese AI lab releases a model that rivals GPT-4 at a fraction of the cost. NVIDIA stock drops 17% in a day." },
            { date: "Mar 2025", title: "ChatGPT Image Generation Goes Viral", desc: "OpenAI's GPT-4o image mode launches. Ghibli-style portraits break the internet. 1M images generated per hour." },
            { date: "May 2025", title: "First American Pope Elected", desc: "Pope Leo XIV — the first American pope — is announced. The news breaks simultaneously across X, TikTok, and YouTube." },
        ]
    }
};

let ARCHIVE_DATA = DATA;
let archiveDataPromise = null;
window.CHRONONET_DATA_SOURCE = 'embedded';

async function loadArchiveData() {
    if (archiveDataPromise) return archiveDataPromise;

    archiveDataPromise = (async () => {
        if (window.location.protocol === 'file:') {
            return ARCHIVE_DATA;
        }

        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        try {
            const response = await fetch('/api/years', {
                headers: { 'accept': 'application/json' },
                signal: controller.signal,
            });

            if (!response.ok) {
                throw new Error(`Archive API returned ${response.status}`);
            }

            const payload = await response.json();
            const years = payload.years || payload;

            if (years && typeof years === 'object' && Object.keys(years).length) {
                ARCHIVE_DATA = years;
                window.CHRONONET_DATA_SOURCE = payload.source || 'api';
            }
        } catch (error) {
            window.CHRONONET_DATA_SOURCE = 'embedded-fallback';
            console.warn('Using embedded ChronoNet archive data.', error);
        } finally {
            clearTimeout(timeout);
        }

        return ARCHIVE_DATA;
    })();

    return archiveDataPromise;
}

function getDataForYear(year) {
    const source = ARCHIVE_DATA || DATA;
    const years = Object.keys(source).map(Number).sort((a, b) => a - b);
    let closest = years[0];
    for (const y of years) { if (y <= year) closest = y; }
    return { data: source[closest], closestYear: closest };
}

// ── PAGE SYSTEM ──
function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    document.querySelectorAll('nav a[data-page]').forEach(a => {
        a.classList.toggle('active', a.dataset.page === name);
    });
    window.scrollTo(0, 0);
    // close mobile nav and restore toggle visibility
    document.getElementById('mainNav').classList.remove('open');
    document.getElementById('navToggle').style.visibility = 'visible';
}

// ── MOBILE NAV TOGGLE ──
document.getElementById('navToggle').addEventListener('click', () => {
    const nav = document.getElementById('mainNav');
    const toggle = document.getElementById('navToggle');
    nav.classList.toggle('open');
    // Hide the toggle while the menu is open so it doesn't overlap the close button
    toggle.style.visibility = nav.classList.contains('open') ? 'hidden' : 'visible';
});

document.getElementById('navClose').addEventListener('click', () => {
    document.getElementById('mainNav').classList.remove('open');
    document.getElementById('navToggle').style.visibility = 'visible';
});

// ── ABOUT SIDEBAR TYPEWRITER (no-op — replaced by canvas) ──
function initSidebarTypewriter() { /* replaced by aboutCanvas */ }

// Add the fadeChar keyframe (kept for safety)
const styleSheet = document.createElement('style');
styleSheet.textContent = `@keyframes fadeChar { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(styleSheet);

initSidebarTypewriter();

// ── ABOUT PAGE: MEMORY WEB CANVAS ──
(function () {
    const canvas = document.getElementById('aboutCanvas');
    if (!canvas) return;

    // Words that float as nodes — internet culture vocabulary
    const WORDS = [
        // eras & tech
        { t: 'GeoCities', tier: 0 }, { t: 'Napster', tier: 0 },
        { t: 'Flash', tier: 0 }, { t: 'Dial-up', tier: 0 },
        { t: 'AIM', tier: 1 }, { t: 'Geocaching', tier: 2 },
        { t: 'Myspace', tier: 1 }, { t: 'Friendster', tier: 2 },
        { t: 'YouTube', tier: 0 }, { t: 'Twitter', tier: 0 },
        { t: 'iPhone', tier: 0 }, { t: 'Facebook', tier: 0 },
        { t: 'Wikipedia', tier: 1 }, { t: 'BitTorrent', tier: 1 },
        { t: 'RSS', tier: 2 }, { t: 'Tumblr', tier: 1 },
        { t: 'Vine', tier: 1 }, { t: 'Reddit', tier: 0 },
        { t: 'TikTok', tier: 0 }, { t: 'ChatGPT', tier: 0 },
        // memes / culture
        { t: 'LOLcats', tier: 1 }, { t: 'Rickroll', tier: 1 },
        { t: 'Doge', tier: 1 }, { t: 'Harambe', tier: 2 },
        { t: 'Gangnam Style', tier: 1 }, { t: 'Ice Bucket', tier: 2 },
        { t: 'Numa Numa', tier: 2 }, { t: 'Nyan Cat', tier: 2 },
        { t: 'Pepe', tier: 1 }, { t: '404', tier: 2 },
        { t: 'Y2K', tier: 1 }, { t: 'Minecraft', tier: 1 },
    ];

    const SEPIA = [196, 170, 133];
    const PAPER = [244, 240, 232];
    const ACCENT = [192, 57, 43];

    function rgba([r, g, b], a) { return `rgba(${r},${g},${b},${a})`; }

    let nodes = [], raf, t = 0;
    let mouseX = -999, mouseY = -999;
    let ripples = []; // { x, y, r, life }

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.floor(rect.width * devicePixelRatio);
        canvas.height = Math.floor(canvas.offsetHeight * devicePixelRatio);
    }

    function initNodes() {
        const W = canvas.width, H = canvas.height;
        nodes = WORDS.map((w, i) => {
            const angle = (i / WORDS.length) * Math.PI * 2 + Math.random() * 0.4;
            // tier 0 = close to centre, tier 2 = outer ring
            const radiusFrac = 0.18 + w.tier * 0.22 + Math.random() * 0.1;
            const r = Math.min(W, H) * 0.5 * radiusFrac;
            return {
                word: w.t,
                tier: w.tier,
                x: W / 2 + Math.cos(angle) * r,
                y: H / 2 + Math.sin(angle) * r,
                vx: (Math.random() - 0.5) * 0.18,
                vy: (Math.random() - 0.5) * 0.18,
                orbitAngle: angle,
                orbitR: r,
                orbitSpeed: (0.0003 + Math.random() * 0.0004) * (Math.random() < 0.5 ? 1 : -1),
                baseAlpha: 0.35 + (2 - w.tier) * 0.18,
                alpha: 0,               // animated in
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: 0.4 + Math.random() * 0.6,
                hovered: false,
                fontSize: (11 - w.tier * 2),  // px before dpr
            };
        });
    }

    function draw() {
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        const cx = W / 2, cy = H / 2;
        const dpr = devicePixelRatio;

        ctx.clearRect(0, 0, W, H);

        // ── BACKGROUND ──
        const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.min(W, H) * 0.6);
        bg.addColorStop(0, 'rgba(18,15,10,1)');
        bg.addColorStop(0.6, 'rgba(14,13,11,1)');
        bg.addColorStop(1, 'rgba(8,7,5,1)');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        // ── CENTRAL CORE ──
        // Breathing glow
        const breathe = 0.5 + 0.5 * Math.sin(t * 0.7);
        const coreR = (8 + breathe * 4) * dpr;

        // Outer halos
        for (const [frac, alpha] of [[2.2, 0.04], [1.5, 0.09], [1.0, 0.18]]) {
            const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * frac * 5);
            g.addColorStop(0, rgba(SEPIA, alpha));
            g.addColorStop(1, rgba(SEPIA, 0));
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(cx, cy, coreR * frac * 5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Core ring
        ctx.save();
        ctx.strokeStyle = rgba(SEPIA, 0.3 + breathe * 0.25);
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.arc(cx, cy, coreR * 2.8, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        // Core dot
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR);
        coreGrad.addColorStop(0, rgba(PAPER, 0.9));
        coreGrad.addColorStop(0.5, rgba(SEPIA, 0.6));
        coreGrad.addColorStop(1, rgba(SEPIA, 0));
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
        ctx.fill();

        // ── ORBIT RINGS (decorative dashed) ──
        ctx.save();
        ctx.setLineDash([2 * dpr, 8 * dpr]);
        for (const [tier, a] of [[0, 0.06], [1, 0.04], [2, 0.03]]) {
            const refNode = nodes.find(n => n.tier === tier);
            if (!refNode) continue;
            const orR = Math.hypot(refNode.x - cx, refNode.y - cy);
            ctx.strokeStyle = rgba(SEPIA, a);
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(cx, cy, orR, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.setLineDash([]);
        ctx.restore();

        // ── CONNECTIONS ──
        // Draw edges between nearby nodes and from each node to core
        const CONNECT_DIST_SQ = (Math.min(W, H) * 0.28) ** 2;

        for (let i = 0; i < nodes.length; i++) {
            const a = nodes[i];

            // Node → core
            const distCoreSq = (a.x - cx) ** 2 + (a.y - cy) ** 2;
            const distCore = Math.sqrt(distCoreSq);
            const coreAlpha = Math.max(0, 0.12 - distCore / (Math.min(W, H) * 0.6)) * a.alpha;
            if (coreAlpha > 0.005) {
                ctx.strokeStyle = rgba(SEPIA, coreAlpha);
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(cx, cy);
                ctx.stroke();
            }

            // Node → node
            for (let j = i + 1; j < nodes.length; j++) {
                const b = nodes[j];
                const dsq = (a.x - b.x) ** 2 + (a.y - b.y) ** 2;
                if (dsq > CONNECT_DIST_SQ) continue;
                const frac = 1 - dsq / CONNECT_DIST_SQ;
                const edgeAlpha = frac * 0.14 * Math.min(a.alpha, b.alpha);
                if (edgeAlpha < 0.005) continue;

                const isHighlighted = a.hovered || b.hovered;
                ctx.strokeStyle = isHighlighted
                    ? rgba(PAPER, edgeAlpha * 3)
                    : rgba(SEPIA, edgeAlpha);
                ctx.lineWidth = isHighlighted ? 1 : 0.5;
                ctx.beginPath();
                ctx.moveTo(a.x, a.y);
                ctx.lineTo(b.x, b.y);
                ctx.stroke();
            }
        }

        // ── NODES ──
        for (const node of nodes) {
            // Orbit motion
            node.orbitAngle += node.orbitSpeed;
            node.x += ((cx + Math.cos(node.orbitAngle) * node.orbitR) - node.x) * 0.008;
            node.y += ((cy + Math.sin(node.orbitAngle) * node.orbitR) - node.y) * 0.008;

            // Mouse repulsion (gentle)
            const mdx = node.x - mouseX * dpr;
            const mdy = node.y - mouseY * dpr;
            const md = Math.sqrt(mdx * mdx + mdy * mdy);
            const repulseR = 60 * dpr;
            if (md < repulseR && md > 0.1) {
                const force = (repulseR - md) / repulseR * 0.4;
                node.vx += (mdx / md) * force;
                node.vy += (mdy / md) * force;
            }
            node.x += node.vx;
            node.y += node.vy;
            node.vx *= 0.92;
            node.vy *= 0.92;

            // Fade in
            node.alpha = Math.min(1, node.alpha + 0.006);

            // Pulse
            node.pulse += node.pulseSpeed * 0.016;
            const pulseFac = 0.85 + 0.15 * Math.sin(node.pulse);

            // Hover detection
            const tx = (mouseX * dpr - node.x), ty = (mouseY * dpr - node.y);
            node.hovered = Math.sqrt(tx * tx + ty * ty) < 28 * dpr;

            const finalAlpha = node.baseAlpha * node.alpha * pulseFac * (node.hovered ? 2 : 1);

            // Glow behind hovered node
            if (node.hovered) {
                const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 22 * dpr);
                glow.addColorStop(0, rgba(SEPIA, 0.35));
                glow.addColorStop(1, rgba(SEPIA, 0));
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(node.x, node.y, 22 * dpr, 0, Math.PI * 2);
                ctx.fill();
            }

            // Dot
            const dotR = (2.2 - node.tier * 0.4) * dpr * (node.hovered ? 1.6 : 1);
            ctx.fillStyle = rgba(node.tier === 0 ? PAPER : SEPIA, finalAlpha);
            ctx.beginPath();
            ctx.arc(node.x, node.y, dotR, 0, Math.PI * 2);
            ctx.fill();

            // Label
            const fsize = (node.fontSize + (node.hovered ? 1 : 0)) * dpr;
            const fontW = node.tier === 0 ? '600' : '400';
            ctx.font = `${fontW} ${fsize}px 'DM Mono', monospace`;
            ctx.fillStyle = rgba(node.tier === 0 ? PAPER : SEPIA,
                finalAlpha * (node.hovered ? 1 : 0.9));
            ctx.textAlign = 'center';
            ctx.fillText(node.word, node.x, node.y - dotR - 4 * dpr);
        }

        // ── RIPPLES ──
        ripples = ripples.filter(r => r.life > 0);
        for (const rp of ripples) {
            ctx.strokeStyle = rgba(SEPIA, rp.life * 0.5);
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
            ctx.stroke();
            rp.r += 2.5 * dpr;
            rp.life -= 0.025;
        }

        // ── LABEL ──
        ctx.font = `${8 * dpr}px 'DM Mono', monospace`;
        ctx.fillStyle = rgba(SEPIA, 0.28);
        ctx.textAlign = 'left';
        ctx.fillText('OUR MISSION', 0, 10 * dpr);

        // CRT vignette
        const vig = ctx.createRadialGradient(cx, cy, Math.min(W, H) * 0.25, cx, cy, Math.min(W, H) * 0.7);
        vig.addColorStop(0, 'rgba(0,0,0,0)');
        vig.addColorStop(1, 'rgba(0,0,0,0.55)');
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, W, H);

        t += 0.016;
        raf = requestAnimationFrame(draw);
    }

    // Mouse tracking
    canvas.addEventListener('mousemove', e => {
        const r = canvas.getBoundingClientRect();
        mouseX = e.clientX - r.left;
        mouseY = e.clientY - r.top;
    });
    canvas.addEventListener('mouseleave', () => { mouseX = -999; mouseY = -999; });
    canvas.addEventListener('click', e => {
        const r = canvas.getBoundingClientRect();
        const dpr = devicePixelRatio;
        ripples.push({ x: (e.clientX - r.left) * dpr, y: (e.clientY - r.top) * dpr, r: 4 * dpr, life: 1 });
    });

    function start() {
        resize();
        initNodes();
        canvas.classList.add('visible');
        if (raf) cancelAnimationFrame(raf);
        draw();
    }

    window.addEventListener('resize', () => { resize(); initNodes(); });

    const obs = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) { start(); obs.disconnect(); }
    }, { threshold: 0.15 });
    obs.observe(canvas);
})();

// ── MANIFESTO CANVAS ANIMATION ──
(function () {
    const canvas = document.getElementById('manifestoCanvas');
    if (!canvas) return;

    // Milestones: [year, label, weight 0-1]
    const MILESTONES = [
        [1994, 'Netscape', 0.15],
        [1995, 'Amazon', 0.28],
        [1996, 'Hotmail', 0.22],
        [1998, 'Google', 0.72],
        [1999, 'Napster', 0.55],
        [2000, 'Dot-com Crash', 0.08],
        [2001, 'Wikipedia', 0.44],
        [2003, 'MySpace', 0.38],
        [2004, 'Facebook', 0.81],
        [2005, 'YouTube', 0.88],
        [2006, 'Twitter', 0.76],
        [2007, 'iPhone', 0.95],
        [2008, 'App Store', 0.82],
        [2009, 'Bitcoin', 0.41],
        [2010, 'Instagram', 0.77],
        [2012, 'Gangnam Style', 0.91],
        [2013, 'Vine', 0.58],
        [2016, 'Pokémon GO', 0.85],
        [2020, 'Zoom Era', 0.62],
        [2022, 'ChatGPT', 0.98],
        [2025, 'Now', 1.00],
    ];

    const SEPIA = 'rgba(196,170,133,';
    const ACCENT = 'rgba(192,57,43,';
    const PAPER = 'rgba(244,240,232,';

    let raf, t = 0;
    let scanLine = 0;   // 0..1, the "read head" crawling down
    let particles = []; // floating data-particles
    let glitchTimer = 0;
    let hoveredMs = null;

    function resize() {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = Math.floor(rect.width * devicePixelRatio);
        canvas.height = Math.floor(canvas.offsetHeight * devicePixelRatio);
    }

    function yearToY(year, h) {
        return ((year - 1994) / (2025 - 1994)) * (h * 0.88) + h * 0.06;
    }

    // Smooth noise
    function noise(x) {
        return Math.sin(x * 1.7) * 0.5 + Math.sin(x * 3.1) * 0.3 + Math.sin(x * 7.3) * 0.2;
    }

    function spawnParticle(x, y) {
        particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 0.6,
            vy: -Math.random() * 0.8 - 0.2,
            life: 1,
            decay: 0.012 + Math.random() * 0.015,
            size: Math.random() * 1.5 + 0.5,
        });
    }

    function draw() {
        const ctx = canvas.getContext('2d');
        const W = canvas.width, H = canvas.height;
        const dpr = devicePixelRatio;

        // === BACKGROUND ===
        ctx.clearRect(0, 0, W, H);

        // Dark panel with subtle gradient
        const bg = ctx.createLinearGradient(0, 0, 0, H);
        bg.addColorStop(0, 'rgba(10,9,7,0.97)');
        bg.addColorStop(0.5, 'rgba(14,13,11,1)');
        bg.addColorStop(1, 'rgba(10,9,7,0.97)');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, W, H);

        // Horizontal grid lines — like oscilloscope
        ctx.strokeStyle = SEPIA + '0.06)';
        ctx.lineWidth = 0.5;
        for (let i = 0; i <= 10; i++) {
            const y = H * 0.06 + (H * 0.88) * (i / 10);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
            ctx.stroke();
        }

        // Center axis
        const axisX = W * 0.38;
        ctx.strokeStyle = SEPIA + '0.12)';
        ctx.lineWidth = 0.5;
        ctx.setLineDash([3, 6]);
        ctx.beginPath();
        ctx.moveTo(axisX, H * 0.04);
        ctx.lineTo(axisX, H * 0.96);
        ctx.stroke();
        ctx.setLineDash([]);

        // === THE SIGNAL LINE ===
        // A waveform running from top (1994) to bottom (2025)
        // with organic noise + milestones creating spikes

        const signalPoints = [];
        const STEPS = Math.floor(H * 0.88 / 2);
        for (let i = 0; i <= STEPS; i++) {
            const fy = i / STEPS;                    // 0..1 top to bottom
            const year = 1994 + fy * 31;
            const py = H * 0.06 + fy * H * 0.88;

            // Base organic noise
            let signal = noise(fy * 8 + t * 0.3) * 0.18;

            // Add milestone spikes
            for (const [ms, , wt] of MILESTONES) {
                const dist = Math.abs(year - ms);
                if (dist < 1.5) {
                    const spike = Math.exp(-dist * dist * 2.5) * wt * 0.72;
                    signal += spike;
                }
            }

            // Glitch wobble
            if (glitchTimer > 0) {
                signal += (Math.random() - 0.5) * 0.12 * glitchTimer;
            }

            signal = Math.max(-0.5, Math.min(0.9, signal));
            const px = axisX + signal * (W * 0.55);
            signalPoints.push([px, py, signal]);
        }

        // Glow pass (wide, faint)
        ctx.save();
        ctx.strokeStyle = SEPIA + '0.18)';
        ctx.lineWidth = 6 * dpr;
        ctx.filter = `blur(${4 * dpr}px)`;
        ctx.beginPath();
        signalPoints.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();
        ctx.filter = 'none';
        ctx.restore();

        // Core line
        const lineGrad = ctx.createLinearGradient(0, H * 0.06, 0, H * 0.94);
        lineGrad.addColorStop(0, SEPIA + '0.3)');
        lineGrad.addColorStop(0.35, SEPIA + '0.7)');
        lineGrad.addColorStop(0.65, PAPER + '0.85)');
        lineGrad.addColorStop(1, SEPIA + '0.4)');

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.5;
        ctx.lineJoin = 'round';
        ctx.beginPath();
        signalPoints.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
        ctx.stroke();

        // === SCAN LINE (read head) ===
        const scanY = H * 0.06 + scanLine * H * 0.88;
        const scanGrad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
        scanGrad.addColorStop(0, SEPIA + '0)');
        scanGrad.addColorStop(0.5, SEPIA + '0.22)');
        scanGrad.addColorStop(1, SEPIA + '0)');
        ctx.fillStyle = scanGrad;
        ctx.fillRect(0, scanY - 40, W, 80);

        // Scan line cursor dot
        const scanIdx = Math.floor(scanLine * STEPS);
        if (signalPoints[scanIdx]) {
            const [sx, sy] = signalPoints[scanIdx];
            // Halo
            ctx.save();
            ctx.filter = `blur(${3 * dpr}px)`;
            ctx.fillStyle = PAPER + '0.5)';
            ctx.beginPath();
            ctx.arc(sx, sy, 5, 0, Math.PI * 2);
            ctx.fill();
            ctx.filter = 'none';
            ctx.restore();
            // Dot
            ctx.fillStyle = PAPER + '0.95)';
            ctx.beginPath();
            ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Occasionally spawn particles at scan position
            if (Math.random() < 0.15) spawnParticle(sx, sy);
        }

        // === MILESTONES ===
        const monoFont = `${10 * dpr}px 'DM Mono', monospace`;
        const serifFont = `700 ${11 * dpr}px 'Playfair Display', Georgia, serif`;

        for (const ms of MILESTONES) {
            const [year, label, wt] = ms;
            const fy = (year - 1994) / 31;
            const py = H * 0.06 + fy * H * 0.88;

            // Find signal X at this Y
            const idx = Math.floor(fy * STEPS);
            const [sigX] = signalPoints[Math.min(idx, signalPoints.length - 1)] || [axisX, py];

            // Distance of scan from this milestone (0=at, 1=far)
            const scanDist = Math.abs(scanLine - fy);
            const proximity = Math.max(0, 1 - scanDist * 8);

            // Base opacity pulses gently; spikes when scan is near
            const baseOpacity = 0.25 + wt * 0.15 + Math.sin(t * 0.8 + year * 0.4) * 0.08;
            const totalOpacity = Math.min(1, baseOpacity + proximity * 0.7);

            const isHovered = hoveredMs === ms;
            const finalOpacity = isHovered ? 1 : totalOpacity;

            // Dot on the signal line
            const dotR = isHovered ? 4 : 2.5 + wt * 1.5;
            ctx.save();
            if (proximity > 0.1 || isHovered) {
                ctx.filter = `blur(${2 * dpr}px)`;
                ctx.fillStyle = PAPER + `${finalOpacity * 0.6})`;
                ctx.beginPath();
                ctx.arc(sigX, py, dotR + 4, 0, Math.PI * 2);
                ctx.fill();
                ctx.filter = 'none';
            }
            ctx.fillStyle = PAPER + `${finalOpacity})`;
            ctx.beginPath();
            ctx.arc(sigX, py, dotR, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();

            // Tick line to label
            const labelX = sigX + 14 * dpr;
            const tickEndX = labelX - 4 * dpr;
            ctx.strokeStyle = SEPIA + `${finalOpacity * 0.6})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(sigX + dotR, py);
            ctx.lineTo(tickEndX, py);
            ctx.stroke();

            // Year label
            ctx.font = monoFont;
            ctx.fillStyle = SEPIA + `${finalOpacity})`;
            ctx.fillText(String(year), labelX, py + 3 * dpr);

            // Event label (only when proximity or hover)
            if (proximity > 0.05 || isHovered || wt > 0.85) {
                const labelOpacity = isHovered ? 1 : Math.max(wt > 0.85 ? 0.35 : 0, proximity * 0.9);
                ctx.font = serifFont;
                ctx.fillStyle = PAPER + `${labelOpacity})`;
                ctx.fillText(label, labelX, py - 5 * dpr);
            }

            // Impact bar — tiny horizontal bar proportional to weight
            const barW = wt * 28 * dpr;
            ctx.fillStyle = ACCENT + `${finalOpacity * 0.55})`;
            ctx.fillRect(axisX - barW - 6 * dpr, py - 1, barW, 2);
        }

        // === PARTICLES ===
        particles = particles.filter(p => p.life > 0);
        for (const p of particles) {
            ctx.fillStyle = SEPIA + `${p.life * 0.7})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;
        }

        // === YEAR LABELS on left edge ===
        ctx.font = monoFont;
        for (const yr of [1994, 2000, 2005, 2010, 2015, 2020, 2025]) {
            const fy = (yr - 1994) / 31;
            const py = H * 0.06 + fy * H * 0.88;
            ctx.fillStyle = SEPIA + '0.22)';
            ctx.fillText(String(yr), 4 * dpr, py + 3 * dpr);
        }

        // CRT vignette
        const vig = ctx.createRadialGradient(W / 2, H / 2, H * 0.3, W / 2, H / 2, H * 0.85);
        vig.addColorStop(0, 'rgba(0,0,0,0)');
        vig.addColorStop(1, 'rgba(0,0,0,0.45)');
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, W, H);

        // === ADVANCE TIME ===
        t += 0.016;
        scanLine += 0.0018;
        if (scanLine > 1.04) scanLine = -0.04;

        // Random glitch moments
        glitchTimer = Math.max(0, glitchTimer - 0.05);
        if (Math.random() < 0.003) glitchTimer = 1;

        raf = requestAnimationFrame(draw);
    }

    // Mouse hover for milestone highlight
    canvas.addEventListener('mousemove', (e) => {
        const rect = canvas.getBoundingClientRect();
        const my = (e.clientY - rect.top) * devicePixelRatio;
        const H = canvas.height;
        hoveredMs = null;
        for (const ms of MILESTONES) {
            const fy = (ms[0] - 1994) / 31;
            const py = H * 0.06 + fy * H * 0.88;
            if (Math.abs(my - py) < 14 * devicePixelRatio) { hoveredMs = ms; break; }
        }
        canvas.style.cursor = hoveredMs ? 'pointer' : 'default';
    });

    canvas.addEventListener('mouseleave', () => { hoveredMs = null; });

    canvas.addEventListener('click', (e) => {
        if (hoveredMs) {
            const yr = hoveredMs[0];
            const sl = document.getElementById('yearSlider');
            const by = document.getElementById('bigYear');
            if (sl && by) {
                sl.value = yr;
                by.textContent = yr;
                by.classList.add('active');
                loadYear(yr);
            }
        }
    });

    function start() {
        resize();
        canvas.classList.add('visible');
        if (raf) cancelAnimationFrame(raf);
        draw();
    }

    window.addEventListener('resize', () => { resize(); });

    // Trigger when scrolled into view
    const obs = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) { start(); obs.disconnect(); }
    }, { threshold: 0.1 });
    obs.observe(canvas);
})();

// ── HERO GRID ──
function buildHeroGrid() {
    const grid = document.getElementById('heroGrid');
    const years = [];
    for (let y = 1994; y <= 2025; y++) years.push(y);
    years.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 40; i++) {
        const div = document.createElement('div');
        div.className = 'hero-grid-year';
        div.textContent = years[i] || '';
        grid.appendChild(div);
    }
}
buildHeroGrid();

// ── YEAR SLIDER ──
const slider = document.getElementById('yearSlider');
const bigYear = document.getElementById('bigYear');

slider.addEventListener('input', () => {
    const yr = parseInt(slider.value);
    bigYear.textContent = yr;
    bigYear.classList.add('active');
    clearTimeout(window._autoload);
    window._autoload = setTimeout(() => loadYear(yr), 500);
});

// ── PRESETS CAROUSEL ──
(function () {
    const track = document.getElementById('presetsTrack');
    const prevBtn = document.getElementById('presetPrev');
    const nextBtn = document.getElementById('presetNext');
    let offset = 0;

    function isMobile() {
        return window.innerWidth <= 768;
    }

    function getStep() {
        // step = width of ~4 buttons + gaps
        const btn = track.querySelector('.preset-btn');
        if (!btn) return 200;
        return (btn.offsetWidth + 8) * 4;
    }

    function getMaxOffset() {
        if (isMobile()) return 0;
        const wrapper = track.parentElement;
        return Math.max(0, track.scrollWidth - wrapper.offsetWidth);
    }

    function updateCarousel() {
        if (isMobile()) {
            track.style.transform = '';
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            return;
        }
        const max = getMaxOffset();
        offset = Math.max(0, Math.min(offset, max));
        track.style.transform = `translateX(-${offset}px)`;
        prevBtn.disabled = offset <= 0;
        nextBtn.disabled = offset >= max;
    }

    prevBtn.addEventListener('click', () => {
        offset = Math.max(0, offset - getStep());
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        offset = Math.min(getMaxOffset(), offset + getStep());
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    setTimeout(updateCarousel, 100);

    // Scroll active preset into view in carousel
    function scrollActiveIntoView(btn) {
        if (isMobile()) return;
        const wrapper = track.parentElement;
        const btnLeft = btn.offsetLeft;
        const btnRight = btnLeft + btn.offsetWidth;
        const wrapperWidth = wrapper.offsetWidth;
        if (btnLeft < offset) {
            offset = btnLeft - 8;
        } else if (btnRight > offset + wrapperWidth) {
            offset = btnRight - wrapperWidth + 8;
        }
        updateCarousel();
    }

    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const yr = parseInt(btn.dataset.year);
            slider.value = yr;
            bigYear.textContent = yr;
            bigYear.classList.add('active');
            document.querySelectorAll('.preset-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            scrollActiveIntoView(btn);
            loadYear(yr);
        });
    });
})();

// ── TABS ──
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('panel-' + tab.dataset.tab).classList.add('active');
    });
});

// ── LOAD YEAR ──
async function loadYear(year) {
    showPage('home');
    const loadEl = document.getElementById('loading');
    const loadYearEl = document.getElementById('loading-year');
    loadYearEl.textContent = year;
    loadEl.classList.add('active');

    await loadArchiveData();

    setTimeout(() => {
        loadEl.classList.remove('active');
        const { data, closestYear } = getDataForYear(year);
        renderYear(year, closestYear, data);
        document.getElementById('results').classList.add('visible');
        document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
        document.querySelector('[data-tab="videos"]').classList.add('active');
        document.getElementById('panel-videos').classList.add('active');
    }, 1200);
}

function jumpToYear(year) {
    slider.value = year;
    bigYear.textContent = year;
    bigYear.classList.add('active');
    loadYear(year);
}

function renderYear(year, closestYear, data) {
    document.getElementById('resultYear').textContent = year;
    document.getElementById('resultMeta').textContent =
        closestYear !== year
            ? `Data from ${closestYear} · ${data.videos.length + data.music.length + data.memes.length + data.sites.length + data.events.length} artifacts`
            : `${data.videos.length + data.music.length + data.memes.length + data.sites.length + data.events.length} artifacts · 5 categories`;

    renderVideos(data.videos);
    renderMusic(data.music);
    renderMemes(data.memes);
    renderSites(data.sites);
    renderEvents(data.events);
}

function renderVideos(videos) {
    const grid = document.getElementById('videos-grid');
    grid.innerHTML = '';
    videos.forEach((v, i) => {
        const div = document.createElement('div');
        div.className = 'mag-card' + (i === 0 ? ' featured' : '');
        div.innerHTML = `
        <div class="card-tag">${v.tag}</div>
        <div class="card-rank">No. ${String(i + 1).padStart(2, '0')}</div>
        <div class="card-title">${v.title}</div>
        <div class="card-meta">${v.meta}</div>
        ${v.desc ? `<div class="card-desc">${v.desc}</div>` : ''}
        <div class="card-views">
          <span>${v.views}</span>
          <div class="card-bar"><div class="card-bar-fill" style="width:${v.bar}%"></div></div>
        </div>`;
        grid.appendChild(div);
    });
}

function renderMusic(tracks) {
    const list = document.getElementById('music-list');
    list.innerHTML = '';
    tracks.forEach(t => {
        const row = document.createElement('div');
        row.className = 'chart-row';
        row.innerHTML = `
        <div class="chart-num">${t.num}</div>
        <div class="chart-info">
          <div class="chart-song">${t.song}</div>
          <div class="chart-artist">${t.artist}</div>
        </div>
        <div class="chart-wks">${t.wks}</div>`;
        list.appendChild(row);
    });
}

function renderMemes(memes) {
    const grid = document.getElementById('memes-grid');
    grid.innerHTML = '';
    memes.forEach(m => {
        const div = document.createElement('div');
        div.className = 'meme-card';
        div.innerHTML = `
        <div class="meme-icon"><i class="${m.icon}"></i></div>
        <div class="meme-name">${m.name}</div>
        <div class="meme-desc">${m.desc}</div>
        <div class="meme-spread">${m.spread}</div>`;
        grid.appendChild(div);
    });
}

function renderSites(sites) {
    const grid = document.getElementById('sites-grid');
    grid.innerHTML = '';
    sites.forEach(s => {
        const div = document.createElement('div');
        div.className = 'site-card';
        div.innerHTML = `
        <div class="site-icon"><i class="${s.icon}"></i></div>
        <div>
          <div class="site-name">${s.name}</div>
          <div class="site-desc">${s.desc}</div>
          <div class="site-visits">${s.visits}</div>
        </div>`;
        grid.appendChild(div);
    });
}

function renderEvents(events) {
    const list = document.getElementById('events-list');
    list.innerHTML = '';
    events.forEach(e => {
        const row = document.createElement('div');
        row.className = 'event-row';
        row.innerHTML = `
        <div class="event-date">${e.date}</div>
        <div class="event-line"></div>
        <div class="event-body">
          <div class="event-title">${e.title}</div>
          <div class="event-desc">${e.desc}</div>
        </div>`;
        list.appendChild(row);
    });
}

function scrollToExplore() {
    showPage('home');
    setTimeout(() => {
        document.getElementById('explore').scrollIntoView({ behavior: 'smooth' });
    }, 50);
}

// FAQ accordion
function toggleFaq(el) {
    el.classList.toggle('open');
}

// Nav CTA
document.getElementById('enterYearBtn').addEventListener('click', scrollToExplore);

// Load default
setTimeout(() => { loadYear(2004); }, 200);
