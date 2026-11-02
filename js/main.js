(function () {
    'use strict';

    const characters = [
        { emoji: '🐱', name: '多啦A梦', role: '来自2112年', desc: '来自未来的猫型机器人，善良可靠，总是用神奇道具帮助大雄解决困难。' },
        { emoji: '👦', name: '野比大雄', role: '主角 · 小学生', desc: '心地善良但有些懦弱的男孩，成绩不佳，遇到困难时总会呼唤多啦A梦。' },
        { emoji: '👧', name: '源静香', role: '大雄的暗恋对象', desc: '温柔善良、成绩优秀的女孩，梦想是成为一名飞行员。' },
        { emoji: '💪', name: '胖虎', role: '孩子王', desc: '强壮有力的男孩，虽然爱欺负人，但关键时刻也会挺身而出保护朋友。' },
        { emoji: '💰', name: '小夫', role: '富家子弟', desc: '家境优渥，爱炫耀，但在大雄需要帮助时也会伸出援手。' },
        { emoji: '🐈‍⬛', name: '多啦美', role: '多啦A梦的妹妹', desc: '温柔善良的猫型机器人，常常来照顾哥哥，更加细心能干。' }
    ];

    const gadgets = [
        { emoji: '🚪', name: '任意门', desc: '打开门就能去任何想去的地方，是最常用的道具之一。' },
        { emoji: '🎒', name: '竹蜻蜓', desc: '戴在头上就能飞起来，速度还可以调整，简单又好用。' },
        { emoji: '🍞', name: '记忆面包', desc: '把面包印在书上吃下去，就能把内容记住，考试神器！' },
        { emoji: '⏳', name: '时光机', desc: '可以穿越到过去或未来，体验不同时代的冒险。' },
        { emoji: '🖊️', name: '神奇蜡笔', desc: '画什么变什么，画出的东西会变成真实存在的物体。' },
        { emoji: '🔔', name: '呼唤铃', desc: '摇响铃铛，就能召唤任何人到你身边来。' },
        { emoji: '🎭', name: '如果电话亭', desc: '拨打电话就能创造一个平行世界，体验不同可能性。' },
        { emoji: '👀', name: '隐身斗篷', desc: '披上就能隐身，别人看不到你，适合恶作剧和秘密行动。' },
        { emoji: '🐟', name: '翻译蒟蒻', desc: '吃下去就能听懂任何语言，包括动物的语言。' }
    ];

    const stories = [
        { year: '1969', title: '漫画诞生', desc: '藤子·F·不二雄大师开始创作多啦A梦漫画，这部陪伴无数人成长的作品就此诞生。' },
        { year: '1973', title: '首次动画化', desc: '多啦A梦首次被搬上电视荧幕，虽然只播出了半年，但开启了动画化的大门。' },
        { year: '1979', title: '正式TV动画', desc: '朝日电视台版多啦A梦正式开播，一直播放至今，成为日本最长寿的动画之一。' },
        { year: '1980', title: '第一部剧场版', desc: '《大雄的恐龙》上映，开启了每年一部剧场版的传统，至今已超过40部。' },
        { year: '1996', title: '大师离世', desc: '藤子·F·不二雄先生逝世，但他留下的作品继续温暖着一代又一代的观众。' },
        { year: '2015', title: '3D剧场版', desc: '《哆啦A梦：伴我同行》上映，用3D CG技术重新演绎经典故事，感动了无数成年人。' },
        { year: '2021', title: '全球热播', desc: '多啦A梦已被翻译成数十种语言，在全球超过100个国家和地区播出。' }
    ];

    const movies = [
        { emoji: '🦕', year: '1980', title: '大雄的恐龙', desc: '大雄养了一只小恐龙，却不得不将它送回远古时代，充满温情与冒险。' },
        { emoji: '🌋', year: '1983', title: '大雄的海底鬼岩城', desc: '深海探险，海底王国，一场惊心动魄的海底冒险等待着大雄一行。' },
        { emoji: '🗺️', year: '1988', title: '大雄的侏罗纪', desc: '回到一亿年前，与恐龙同行，体验史前世界的惊险与壮丽。' },
        { emoji: '🏰', year: '2004', title: '大雄的猫狗时空传', desc: '大雄收养的小狗和小猫，原来有着跨越时空的精彩故事。' },
        { emoji: '👑', year: '2007', title: '大雄的新魔界大冒险', desc: '魔法世界的冒险，大雄化身魔法师，拯救魔法王国的危机。' },
        { emoji: '🌏', year: '2009', title: '大雄的宇宙开拓史', desc: '在一颗神秘星球上的冒险，与外星伙伴共同对抗威胁。' },
        { emoji: '🎁', year: '2014', title: '新大雄的大魔境', desc: '全新重制版，大雄和多啦A梦穿越到非洲丛林，帮助动物王国。' },
        { emoji: '💙', year: '2015', title: '伴我同行', desc: '3D CG特别版，多啦A梦要离开了，大雄与它的友情令人泪目。' },
        { emoji: '🌠', year: '2019', title: '大雄的月球探险记', desc: '大雄在月球上发现了神秘的生命，开启了一段奇幻之旅。' }
    ];

    const characterGrid = document.getElementById('characterGrid');
    const gadgetsGrid = document.getElementById('gadgetsGrid');
    const storiesTimeline = document.getElementById('storiesTimeline');
    const moviesGrid = document.getElementById('moviesGrid');
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    const backToTop = document.getElementById('backToTop');
    const navLinks = document.querySelectorAll('.nav-link');

    function renderCharacters() {
        if (!characterGrid) return;
        characterGrid.innerHTML = '';
        characters.forEach((c, idx) => {
            const card = document.createElement('div');
            card.className = 'char-card reveal';
            card.style.animationDelay = (idx * 80) + 'ms';
            card.innerHTML = `
                <div class="char-avatar">${c.emoji}</div>
                <div class="char-name">${c.name}</div>
                <div class="char-role">${c.role}</div>
                <div class="char-desc">${c.desc}</div>
            `;
            characterGrid.appendChild(card);
        });
    }

    function renderGadgets() {
        if (!gadgetsGrid) return;
        gadgetsGrid.innerHTML = '';
        gadgets.forEach((g, idx) => {
            const card = document.createElement('div');
            card.className = 'gadget-card reveal';
            card.style.animationDelay = (idx * 60) + 'ms';
            card.innerHTML = `
                <div class="gadget-icon">${g.emoji}</div>
                <div class="gadget-name">${g.name}</div>
                <div class="gadget-desc">${g.desc}</div>
            `;
            gadgetsGrid.appendChild(card);
        });
    }

    function renderStories() {
        if (!storiesTimeline) return;
        storiesTimeline.innerHTML = '';
        stories.forEach((s, idx) => {
            const item = document.createElement('div');
            item.className = 'story-item reveal';
            item.style.animationDelay = (idx * 100) + 'ms';
            item.innerHTML = `
                <div class="story-dot"></div>
                <div class="story-card">
                    <span class="story-year">${s.year}</span>
                    <h3 class="story-title">${s.title}</h3>
                    <p class="story-desc">${s.desc}</p>
                </div>
            `;
            storiesTimeline.appendChild(item);
        });
    }

    function renderMovies() {
        if (!moviesGrid) return;
        moviesGrid.innerHTML = '';
        movies.forEach((m, idx) => {
            const card = document.createElement('div');
            card.className = 'movie-card reveal';
            card.style.animationDelay = (idx * 70) + 'ms';
            card.innerHTML = `
                <div class="movie-poster">${m.emoji}</div>
                <div class="movie-info">
                    <div class="movie-year">${m.year}年</div>
                    <div class="movie-title">${m.title}</div>
                    <div class="movie-desc">${m.desc}</div>
                </div>
            `;
            moviesGrid.appendChild(card);
        });
    }

    function handleNavScroll() {
        const onScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            if (window.scrollY > 400) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }

            updateActiveLink();
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    function updateActiveLink() {
        const sections = Array.from(navLinks)
            .map(l => document.querySelector(l.getAttribute('href')))
            .filter(Boolean);

        const y = window.scrollY + 120;
        let currentId = '';
        sections.forEach(sec => {
            if (sec.offsetTop <= y) currentId = sec.id;
        });

        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
        });
    }

    function handleMobileNav() {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    function handleBackToTop() {
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    function handleReveal() {
        const targets = document.querySelectorAll('.reveal');
        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        targets.forEach(el => io.observe(el));
    }

    function init() {
        renderCharacters();
        renderGadgets();
        renderStories();
        renderMovies();
        handleNavScroll();
        handleMobileNav();
        handleBackToTop();
        handleReveal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
