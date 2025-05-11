document.addEventListener('DOMContentLoaded', function() {
    // 信封卡片交互
    const envelope = document.querySelector('.envelope');
    const mail = document.querySelector('.mail');
    
    mail.addEventListener('click', function() {
        envelope.classList.add('open');
        playSound('card_open');
    });
    
    // 吹蜡烛交互
    const blowButton = document.getElementById('blowButton');
    const flame = document.querySelector('.flame');
    
    blowButton.addEventListener('click', function() {
        if (flame.style.display !== 'none') {
            flame.style.display = 'none';
            playSound('blow');
            showConfetti();
            changeBackgroundColor();
            blowButton.textContent = '生日快乐！';
            blowButton.disabled = true;
        }
    });
    
    // 祝福标签动画和点击功能
    const wishes = document.querySelectorAll('.wish');
    const echoResult = document.getElementById('echo-result');
    
    // 祝福详细说明
    const wishDetails = {
        "健康快乐": "愿你身体健康，天天开心，没有烦恼，笑口常开。",
        "学业有成": "愿你学习进步，知识广博，成绩优异，前途无量。",
        "心想事成": "愿你所有的愿望都能成真，所有的期待都能如约而至。",
        "💗朴志晟爱上你💗": "愿你和你喜欢的偶像近距离接触，他将会被你的魅力所吸引，爱上你！（bushi"
    };
    
    wishes.forEach(wish => {
        wish.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        wish.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
        
        // 排除回声洞按钮
        if (!wish.classList.contains('echo-well')) {
            wish.addEventListener('click', function() {
                const wishText = this.textContent;
                if (wishDetails[wishText] && echoResult) {
                    // 显示详细祝福
                    showTypingText(wishDetails[wishText], echoResult);
                    
                    // 添加震动效果
                    this.classList.add('shake');
                    setTimeout(() => {
                        this.classList.remove('shake');
                    }, 500);
                }
            });
        }
    });
    
    // 回声洞功能
    const echoWell = document.querySelector('.echo-well');
    
    if (echoWell && echoResult) {
        // 回声洞祝福语列表
        const echoWishes = [
            "愿你的生日充满欢笑和惊喜！",
            "生日快乐！愿你的愿望都能实现！",
            "祝你在新的一岁里事事顺心！",
            "愿世界上最好的礼物都属于你！",
            "祝福你心想事成，健康幸福！",
            "愿你的生活如彩虹般绚丽多彩！",
            "愿你永远保持笑容，快乐每一天！",
            "祝你的日子甜如蜜，幸福无极限！",
            "愿你所有的梦想都能成真！",
            "希望你永远年轻，永远快乐！",
            "愿你被世界温柔以待！",
            "祝你所有的愿望都能一一实现！",
            "生命因你而精彩，世界因你而美丽！"
        ];
        
        echoWell.addEventListener('click', function() {
            // 随机选择一条祝福语
            const randomWish = echoWishes[Math.floor(Math.random() * echoWishes.length)];
            
            // 显示打字效果
            showTypingText(randomWish, echoResult);
            
            // 添加震动效果
            this.classList.add('shake');
            setTimeout(() => {
                this.classList.remove('shake');
            }, 500);
        });
    }
    
    // 通用打字效果函数
    function showTypingText(text, element) {
        // 显示效果
        element.innerHTML = "";
        element.classList.add('show');
        
        // 打字效果
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 50);
    }
    
    // 回忆卡片翻页效果
    const memoryCards = document.querySelectorAll('.memory-card');
    
    memoryCards.forEach(card => {
        const memoryCover = card.querySelector('.memory-cover');
        
        memoryCover.addEventListener('click', function() {
            card.classList.toggle('flipped');
            playSound('card_flip');
        });
        
        // 点击卡片内容区域也可以翻回
        const memoryContent = card.querySelector('.memory-content');
        memoryContent.addEventListener('click', function() {
            card.classList.toggle('flipped');
            playSound('card_flip');
        });
    });
    
    // 添加声音效果
    function playSound(soundType) {
        // 实际项目中可以添加声音文件
        console.log('播放声音：' + soundType);
    }
    
    // 彩色纸屑效果
    function showConfetti() {
        for (let i = 0; i < 1000; i++) {
            createConfetti();
        }
    }
    
    // 更改背景颜色
    function changeBackgroundColor() {
        // 创建彩虹背景
        document.body.style.transition = "background 2s ease";
        document.body.style.background = "linear-gradient(135deg, #FF9AA2, #FFB7B2, #FFDAC1, #E2F0CB, #B5EAD7, #C7CEEA)";
    }
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        
        // 随机样式
        confetti.style.backgroundColor = randomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        confetti.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
        
        document.body.appendChild(confetti);
        
        // 几秒后移除
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
    
    function randomColor() {
        const colors = [
            '#ff5252', '#ff4081', '#e040fb', '#7c4dff', 
            '#536dfe', '#448aff', '#40c4ff', '#18ffff', 
            '#64ffda', '#69f0ae', '#b2ff59', '#eeff41', 
            '#ffff00', '#ffd740', '#ffab40', '#ff6e40'
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // 添加彩色纸屑的CSS
    const confettiStyle = document.createElement('style');
    confettiStyle.innerHTML = `
        .confetti {
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: red;
            top: -10px;
            z-index: 1000;
            animation: fall linear forwards;
        }
        
        @keyframes fall {
            to {
                transform: translateY(100vh) rotate(720deg);
            }
        }
        
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
            20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
    `;
    document.head.appendChild(confettiStyle);
});

// 添加背景音乐（可选）
function addBackgroundMusic() {
    const audio = document.createElement('audio');
    audio.autoplay = true;
    audio.loop = true;
    audio.volume = 0.5;
    // 在实际使用时，您需要添加一个音乐文件
    // audio.src = 'happy_birthday.mp3';
    document.body.appendChild(audio);
    
    // 添加音乐控制按钮
    const musicBtn = document.createElement('button');
    musicBtn.textContent = '🔇';
    musicBtn.style.position = 'fixed';
    musicBtn.style.bottom = '20px';
    musicBtn.style.right = '20px';
    musicBtn.style.zIndex = '1000';
    musicBtn.style.padding = '10px';
    musicBtn.style.borderRadius = '50%';
    musicBtn.style.background = 'white';
    musicBtn.style.border = 'none';
    musicBtn.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    musicBtn.style.cursor = 'pointer';
    
    let isMuted = false;
    musicBtn.addEventListener('click', function() {
        if (isMuted) {
            audio.volume = 0.5;
            musicBtn.textContent = '🔇';
        } else {
            audio.volume = 0;
            musicBtn.textContent = '🔊';
        }
        isMuted = !isMuted;
    });
    
    document.body.appendChild(musicBtn);
}

// 如果想添加背景音乐，取消下面这行的注释
// window.addEventListener('click', addBackgroundMusic, { once: true }); 