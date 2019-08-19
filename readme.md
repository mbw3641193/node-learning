# NODE

# SQL

1.查询

SELECT * FROM user;  //从user表中查所有数据

SELECT id,firstname,lastname 
FROM user;

SELECT id,firstname,lastname 
FROM user
ORDER BY age DESC;   //ASC升序，DESC倒序 。默认ASC

SELECT CONCAT(firstname,'_',lastname) FROM user;   //连接 姓 和 名

SELECT * FROM user WHERE age = 10;  //查找年龄 = 10

SELECT * FROM user WHERE age > 10 AND age < 80;     //查找年龄大于10 并且 小于80

SELECT * FROM user WHERE age > 10 OR age < 80;      //查找年龄大于10 或者 小于80

SELECT * FROM user WHERE NOT( age > 10 OR age < 80 );  //取反 


SELECT * FROM user WHERE age BETWEEN 10 AND 80;     //查找年龄大于10 并且 小于80

SELECT * FROM user WHERE age IN (10,80);   //查找年龄10 或者 80 

SELECT * FROM user WHERE age NOT IN (10,80); //查找年龄10 或者 80 之外的

SELECT * FROM user 
WHERE DAY(NOW())=DAY(birthday) AND MONTH(NOW())=MONTH(birthday);        //查找今天过生日的数据


2. 插入 

INSERT INTO users(firstname,lastname,email,age,birthday)
VALUES(NULL,'赵','四','1@qq.com','20','2019-09-09');                 //插入一条数据 ; null有没有都行

INSERT INTO users
VALUES(NULL,'赵','四','1@qq.com',DEFAULT,'2019-09-09');                //这样也可以插入一条数据 ; null必须有.如果不知道插入什么可以用DEFAULT代替

INSERT INTO users(email)
VALUES('10@qq.com');


3. 更新

UPDATE users
SET home = '上海',birthday='1933-02-03'
WHERE id = 6;                                                       //更新一条数据

UPDATE users
SET email = '4@qq.com'
WHERE email IS NULL;                                //更新email为NULL的数据

UPDATE users
SET email = '4@qq.com'  
WHERE email IS NOT NULL;                            //更新email为不为NULL的数据



4. 删除

DELETE FROM users
WHERE id=7                                          //删除id为7的数据


5. 截断

TRUNCATE TABLE users;       //删除全部数据，并且id重置为1。 截断没有日志，没有恢复

6.其他(都需要SELECT开头)

CONCAT
CONCAT_WS           //使用指定分隔符
FORMAT              //数字格式化
LOWER           //转小写
UPPER           //转大写
LEFT             //返回字符串左边几位
RIGHT            //返回字符串右边几位


数字：
CEIL            //向上取整
FLOOR           //向下取整
DIV             //百度查一下。。。
MOD              //取余数
POWER           //幂运算
ROUND            //四舍五入
TRUNCATE              //数字截取


日期：
NOW             //当前日期和时间
CURDATE              //当前日期
CURTIME             //当前时间
DATE_ADD            //日期变化
DATEDIFF            //计算日期差
DATE_FORMAT       :   SELECT DATE_FORMAT(NOW(),'%y年%m月%d日 %H时%i分%s秒')      //日期格式化

INTERVAL 3 YEAR         //增加3年


其他：
CONNECTION_ID()  //数据库id号
DATABASE()  //数据库名
VERSION()
USER()   //当前用户名
LAST_INSERT_ID() //上次插入的id号  这个东西很有用，可以用来生成外键
```
INSERT INTO user VALUES(NULL,'mbw');  //主表中创建一条数据
INSERT INTO user_score(SELECT LAST_INSERT_ID()),0);  //子表中创建外键
```

MD5()  //算法加密
PASSWORD()  //密码加密,比MD5安全 ：只有一个作用，那就是修改密码的时候使用
```
SELECT * FROM mysql.user;  //可以查看自己的用户名和密码
```


流程控制函数:
IF()  //类似于三元运算符 SELECT IF(1>0,'a','b'); //'a'  SELECT IF(1=0,'a','b');  //'b'
CASE()  //要判断的字段和表达式 WHEN then ,ELSE ,END
```
SELECT
CASE score
WHEN score>90 then '优秀'
WHEN score>70 then '良好'
WHEN score>60 then '及格'
ELSE '不及格'
END
FROM scoretable;   
```

模糊查询

_ 一个字符 : LIKE'a_'  => ab,ac,ad...
% 任意字符: LIKE'c%' => code,cat...   // %关键字% : 模糊查询
[] 括号内指定范围的一个字符 : LIKE'1[35]5' => 135,155
[^] 不在括号内的一个字符 ： LIKE'1[^1-2]5' => 105,135,145,155...


聚合函数

SELECT SUM(score) FROM scoretable;  //求和
SELECT MAX(score) FROM scoretable;  //最大值
SELECT MIN(score) FROM scoretable;  //最小值
SELECT AVG(score) FROM scoretable;  //平均值
SELECT ROUND(AVG(score)) FROM scoretable;  四舍五入平均值

SELECT COUNT(1) FROM scoretable;  //数据条数  : 1并没有任何含义，只是为了统计总条数。任何数字均可


分组(关键字顺序不能用错)

SELECT student_id,AVG(score) FROM scoretable
WHERE score>80                          //小于80的不参与分组
GROUP BY student_id                    //根据学生id进行分组,并计算分组成绩的平均值
HAVING student_id>=2                     //对分组后的数据再次进行筛选 : id>2的保留
ORDER BY AVG(score)                     //按照平均分排序
LIMIT 1,1                               //第一个参数表示跳过几条，第二个参数表示返回几条


ALL()   //大于ALL 相当于 大于最大值
ANY()   //大于ANY 相当于 大于最小值
SOME()  //与ANY()一个意思

EXISTS() //存在


表连接































