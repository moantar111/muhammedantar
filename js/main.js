document.addEventListener('DOMContentLoaded', function() {

    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    
    increaseFont.addEventListener('click', function() {
        changeFontSize(1);
    });
    
    decreaseFont.addEventListener('click', function() {
        changeFontSize(-1);
    });
    
    function changeFontSize(direction) {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        const newSize = currentSize + (direction * 2);
        document.body.style.fontSize = newSize + 'px';
    }
    

    const toggleContrast = document.getElementById('toggleContrast');
    toggleContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});


if (document.body.classList.contains('high-contrast')) {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.querySelectorAll('a').forEach(a => {
        a.style.color = '#ffff00';
    });
}


        // Accessibility functions
        document.getElementById('increaseFont').addEventListener('click', function() {
            changeFontSize(1);
        });
        
        document.getElementById('decreaseFont').addEventListener('click', function() {
            changeFontSize(-1);
        });
        
        document.getElementById('toggleContrast').addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        function changeFontSize(direction) {
            const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
            document.body.style.fontSize = (currentSize + direction * 2) + 'px';
        }
        
        // Category filter
        document.querySelectorAll('.btn-outline-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.btn-outline-primary').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Accessibility functions
        document.getElementById('increaseFont').addEventListener('click', function() {
            changeFontSize(1);
        });
        
        document.getElementById('decreaseFont').addEventListener('click', function() {
            changeFontSize(-1);
        });
        
        document.getElementById('toggleContrast').addEventListener('click', function() {
            document.body.classList.toggle('high-contrast');
        });
        
        function changeFontSize(direction) {
            const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
            document.body.style.fontSize = (currentSize + direction * 2) + 'px';
        }
        
        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('شكرًا لك! تم استلام رسالتك وسأرد عليك في أقرب وقت ممكن.');
            this.reset();
        });

// أدوات الوصول
document.addEventListener('DOMContentLoaded', function() {
    // تكبير وتصغير الخط
    const increaseFont = document.getElementById('increaseFont');
    const decreaseFont = document.getElementById('decreaseFont');
    
    increaseFont.addEventListener('click', function() {
        changeFontSize(1);
    });
    
    decreaseFont.addEventListener('click', function() {
        changeFontSize(-1);
    });
    
    function changeFontSize(direction) {
        const currentSize = parseFloat(getComputedStyle(document.body).fontSize);
        const newSize = currentSize + (direction * 2);
        document.body.style.fontSize = newSize + 'px';
    }
    
    // تبديل التباين العالي
    const toggleContrast = document.getElementById('toggleContrast');
    toggleContrast.addEventListener('click', function() {
        document.body.classList.toggle('high-contrast');
    });
});

// وضع التباين العالي
if (document.body.classList.contains('high-contrast')) {
    document.body.style.backgroundColor = '#000';
    document.body.style.color = '#fff';
    document.querySelectorAll('a').forEach(a => {
        a.style.color = '#ffff00';
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    const container = document.getElementById('latestPostsContainer');

    try {
        const response = await fetch('http://127.0.0.1:8000/api/posts/');
        const posts = await response.json();

        posts.slice(0, 3).forEach(post => {
            const card = document.createElement('div');
            card.className = 'col-md-4';
            card.innerHTML = `
                <div class="card h-100 border-0 shadow-sm">
                    <img src="article1.jpg" class="card-img-top" alt="صورة للمنشور">
                    <div class="card-body">
                        <h3 class="card-title">${post.title}</h3>
                        <p class="card-text">${truncateText(post.content, 150)}</p>
                        <a href="blog.html#post-${post.id}" class="btn btn-outline-primary">اقرأ المزيد</a>
                    </div>
                </div>

            `;
            container.appendChild(card);
        });
    } catch (error) {
        container.innerHTML = `<p class="text-danger text-center">حدث خطأ أثناء تحميل المقالات.</p>`;
        console.error('Fetch error:', error);
    }
});

function truncateText(text, maxLength) {
    return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
}

document.getElementById('loginForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();

    if (response.ok) {
        // حفظ التوكن في localStorage
        localStorage.setItem("access", result.access);
        localStorage.setItem("refresh", result.refresh);

        // الانتقال للوحة التحكم أو الصفحة الرئيسية
        window.location.href = "/dashboard/";
    } else {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'alert alert-danger';
        errorDiv.textContent = result.detail || "Login failed";
        this.prepend(errorDiv);
    }
});
