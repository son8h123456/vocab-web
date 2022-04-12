const compoment = {}
compoment.mainPage = `   <div class="container">
<nav class="navbar">
    <div class="hamburger-menu">
        <div class="line line-1"></div>
        <div class="line line-2"></div>
        <div class="line line-3"></div>
    </div>
    <a class="logo">libvocab</a>
    <div class="navs">
       <div class="navs-list">
        <a href="#home" class="navs-link">Trang chủ</a>
        <a href="#aboutt" class="navs-link">Giới thiệu</a>
        <a href="#contact" class="navs-link">Liên hệ</a>
   
       </div>
            
        
    </div>
</nav>
<section>
    <div class="center-page "  id="home">
        <div class="content">
            <p> Học tiếng anh miễn phí và mãi mãi</p>
            <div class="btn-log-res">
                <div class="btn btn-register" id ="register-btn">
                   Bắt đầu
                </div>
    
                <div class="btn btn-login" id = "login-btn">
                    Tôi đã có tài khoản
                </div>
            </div>
        </div>
    </div>
    

    <div class="about" id="aboutt">
        <h1 >Học từ thông qua hình ảnh <i class="fa fa-image"></i></h1>
        <p> <i class="fa fa-check-circle"></i>Tiếp thu kiến thức nhanh hơn</p> 
        <p> <i class="fa fa-check-circle"></i>Việc học từ sẽ không bị khô khan</p> 
        <p> <i class="fa fa-check-circle"></i>Giúp ghi nhớ từ vựng lâu hơn,tốt hơn</p> 
    </div>


    <div class="about" >
        <h1 >Học từ thông qua hình ảnh <i class="fa fa-image"></i></h1>
        <p> <i class="fa fa-check-circle"></i>Tiếp thu kiến thức nhanh hơn</p> 
        <p> <i class="fa fa-check-circle"></i>Việc học từ sẽ không bị khô khan</p> 
        <p> <i class="fa fa-check-circle"></i>Giúp ghi nhớ từ vựng lâu hơn,tốt hơn</p> 
    </div>
</section>
<footer>
    <div class="footer">
        <div class="info" id="contact">
            <div class="per">
                <h2> <a href="">Nguyễn Huy Sơn</a></h2>
                <div class="img"></div>
            </div>
            <div class="per">
                <h2><a href="">Nguyễn Quý Phúc</a></h2>
                <div class="img"></div>
            </div>
            <div class="per">
                <h2><a href="">Nguyễn Duy Sinh</a></h2>
                <div class="img"></div>
            </div>
        </div>
          <br><br>
        <div class="contact">
            Liên hệ: 0326 anh có vợ rồi :D
        </div>
          
    </div>

</footer>

</div>`;

compoment.loginPage = `
  
    
  
   
    <div class="login-container">
    <div class="form-wrapper">
        <h1>LOGIN</h1>
        <form id="login-form">
            <div class="input-wrapper">
                <input type="email" placeholder="Email" name="email">
                <div id="email-error" class="err"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password" name="password">
                <div id="password-error" class="err"></div>
            </div>
            <div class="login-form-action">
                <button class="btnLogin" type="submit">LOGIN</button>
            </div>
            <div class="textLogin">
                You dont have account ? <span id="redirect-register" class="cursor-pointer"> Create a account</span>
            </div>
        </form>
    </div>
</div>
        
    
        
    
  
    
      `;

compoment.registerPage = `

    <div class="register-container">
        <div class="form-wrapper">
            <h1>REGISTER</h1>
            <form id="register-form">
                <div class="input-wrapper">
                    <input type="username" placeholder="username" name="username">
                    <div id="username-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="email" placeholder="email" name="email">
                    <div id="email-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="password" name="password">
                    <div id="password-error" class="err"></div>
                </div>
                <div class="input-wrapper">
                    <input type="password" placeholder="confirm password" name="confirmPassword">
                    <div id="cf-password-error" class="err"></div>
                </div>
                <div class="register-form-action">
                    <button class="btnregister" type="submit">REGISTER</button>
                </div>
                <div class="textregister">
                    Have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                </div>
            </form>
        </div>
    </div>
`;
compoment.loginSuccess = `
<div class="learn-container">
<nav>
    <div class="learn-navbar">
        <ul>
            <li>Libvocab</li>
            <li class="open">Học</li>
            <li>Luyện Tập</li>
            <li id="signOut">Đăng xuất</li>
            <!-- <li>Thảo Luận</li> -->
            <!-- <li>User: Nguyễn Quý Phúc</li> -->
        </ul>


    </div>
</nav>
<section>

    <div class="learn-content">
        <div class="left-column">
            <ul id="category">
                <h1>Chủ đề</h1>
                <li  class="activeCat" >ALL</li>
                <li>NATURE</li>
                <li>HUMAN</li>
                <li>WORK</li>
                <!-- <li>Nghệ thuật</li>
                <li>Truyền thông</li>
                <li>Các mối quan hệ</li>
                <li>Sự vật xung quanh</li>
                <li>Cuộc sống thường ngày</li> -->

            </ul>
        </div>
       
        <div class="right-column">
            <div class="categoryTitle" ><h1>All</h1> </div>
            <div class="libvocabb"></div>
            
            </div>
</section>
</div>
`;
compoment.practicePage =`<div class="practice">
<nav>
    <div class="learn-navbar">
        <ul>
            <li>Libvocab</li>
            <li >Học</li>
            <li class="open">Luyện Tập</li>
            <li id="signOut">Đăng xuất</li>
            <!-- <li>Thảo Luận</li> -->
            <!-- <li>User: Nguyễn Quý Phúc</li> -->
        </ul>


    </div>
</nav>
<div class="wrapper">
    <h1>Guess Word Game</h1>
    <p>Sử dụng bảng chữ cái alphabet ở dưới để đoán từ</p>
</div>

<div class="wrapper">
    <p id="catagoryName"></p>
    <div id="hold"></div>
    <p id="mylives"></p>
    <div id="buttons"></div>
    
  
   
    <p id="clue"></p>
 


<div class="container">
    <button id="hint">Gợi ý</button>
    <button id="reset">Chơi lại</button>
</div>
</div>
</div>
`