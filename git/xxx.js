//第一步 git init 把文件夹交给git托管
//第二步 git add . 
//第三步 git commit -m "master" 提交代码
//第四步 git remote add origin https://github.com/dongzhenhao123/root.git 创建仓库
//第五步  git push -u origin master  提交代码到github



//进公司以后步骤
//配置
//git config --global user.name 'github的用户名'
//git config --global user.email 'github的邮箱'
//第一步 公钥 私钥
//创建公钥
//ssh-keygen -t rsa -C "你的github邮箱"
//打开公钥
//cat ~/.ssh/id_ras.pub