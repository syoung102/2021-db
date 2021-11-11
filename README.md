# 데이터베이스 실습: 2021-DB

## 3주차 DB 테이블
```sql
create table STUDENT(
    id int,
    name char(10),
    major char(45),
    grade int,
    adDate datetime,
    email char(50)
);
```
create table 문으로 만든 STUDENT table이다.<br>
필드는 6개이며 학번을 저장하는 int 타입의 필드 id, 이름을 저장하는 char 타입의 필드 name, 학과를 저장하는 char 타입의 필드 grade, 학년을 저장하는 int 타입의 grade, 입학날짜를 저장하는 datetime 타입의 adDate, 이메일을 저장하는 char 타입의 email이 있다.

<br>

```sql
insert into student values(12191792, '윤서영', '정보통신공학과', 3, '2019/03/02 9:00:00', '서영@inha.edu');
```

insert 문으로 STUDENT table에 값을 삽입한 결과는 다음과 같다. 

id|name|major|grade|adDate|email
---|---|---|---|---|---|
1219172|윤서영|정보통신공학과|3|2019/03/02 09:00:00|서영@inha.edu|
<br>

## 8주차 DB 테이블
```sql
CREATE TABLE EMPLOYEE( 
    Fname VARCHAR(10) NOT NULL,
    Minit CHAR,
    Lname VARCHAR(20) NOT NULL,   
    Ssn CHAR(9) NOT NULL,  
    Bdate DATE,  
    Address VARCHAR(30), 
    Sex CHAR(1),  
    Salary DECIMAL(5),  
    Super_ssn CHAR(9),  
    Dno  INT NOT NULL,
    PRIMARY KEY (Ssn)
);
```
create table 문으로 만든 Employee table이다.<br>
primary key가 Ssn이므로 같은 Ssn를 갖는 행은 존재할 수 없다.

<br>

```sql
CREATE TABLE DEPARTMENT (
    Dname VARCHAR(15) NOT NULL,
    Dnumber INT NOT NULL,
    Mgr_ssn CHAR(9) NOT NULL,
    Mgr_start_date DATE,
    PRIMARY KEY (Dnumber),
    UNIQUE (Dname),
    FOREIGN KEY (Mgr_ssn) REFERENCES EMPLOYEE(Ssn) 
);
```
create table 문으로 만든 Department table이다.<br>
Dname은 부서 이름, Dnumber은 부서 번호, Mgr_ssn은 부서장의 ssn, Mgr_start_date는 부서장이 된 날이다.<br>
department가 employee를 <strong>참조</strong>하는 관계이므로 값을 insert 하기 위해서는 employee 값부터 넣어주어야 한다.<br><br>
> 참조하고 있는 테이블에 존재하지 않는 값을 insert 할 수 없다.

<br>

```sql
insert into EMPLOYEE values('Mark', 'M', 'Lee', 12181029, '1999/8/1', 'Canada', 'M', 300, NULL, 1);

insert into DEPARTMENT values('마케팅부', 1, 12181029, '2018/2/1');
```
insert 문으로 Employee 테이블과 Department 테이블에 값을 삽입한 결과는 다음과 같다.<br>
Super_ssn는 NULL 값이 될 수 있으므로 NULL로 설정하였다.

Fname|Minit|Lname|Ssn|Bdate|Address|Sex|Salary|Super_ssn|Dno|
---|---|---|---|---|---|---|---|---|---|
Mark|M|Lee|12181029|1999-08-01|Canada|M|300||1|

NULL 값으로 설정한 부분은 비어있다.

Dname|Dnumber|Mgr_ssn|Mgr_start_date|
---|---|---|---|
마케팅부|1|12181029|2018-02-01|

<br>

## 10주차 DB 테이블
- 10주차는 실습과 과제 때 생성한 테이블이 다르므로 나누어 작성하였다.

<br>

1. 실습
```sql
CREATE TABLE USER (
    Id VARCHAR(20) NOT NULL,
    Password VARCHAR(20) NOT NULL,
    Role VARCHAR(5) NOT NULL,
    PRIMARY KEY (Id)
);
```
create table 문으로 만든 USER table이다.<br>
사용자의 id, password, role을 받는다. 10주차 실습에서는 role에 따라 로그인 후 이동하는 페이지가 다르게 설정했다. 모두 NOT NULL로 하나라도 값을 입력하지 않으면 안된다.

<br>

```sql
CREATE TABLE DEPARTMENT (
    Dname VARCHAR(15) NOT NULL,
    Dnumber INT NOT NULL,
    PRIMARY KEY (Dnumber),
    UNIQUE (Dname)
);
```
create table 문으로 만든 Department table이다.<br>
부서 이름 Dname, 부서 번호 Dnumber가 필드로 있다. primary key는 Dnumber로 같은 Dnumber를 갖는 행이 있으면 안된다. Dname도 unique로 설정해주었기 때문에 마찬가지이다.

<br>

```sql
insert into user values ("admin", "admin", "admin");
insert into user values ("test", "test1234", "users");

insert into department values ("정보통신공학과", 0);
```
insert 문으로 User 테이블과 Department 테이블에 값을 삽입한 결과는 다음과 같다.

Id|Password|Role|
---|---|---|
admin|admin1234|admin|
test|test1234|users|
<br>

Dname|Dnumber|
---|---|
정보통신공학과|0|
<br>

2. 과제
```sql
CREATE TABLE Subject (
    Sname VARCHAR(15) NOT NULL,
    Snumber INT NOT NULL,
    PRIMARY KEY (Snumber)
);
```
create table 문으로 만든 Subject table이다.<br>
필드는 2개로 과목의 이름인 Sname과 과목 번호 Snumber가 있다.

<br>

```sql
insert into Subject value ("데이터베이스설계", "ICE4016");
```
insert 문으로 Subject 테이블에 값을 삽입한 결과는 다음과 같다.

Sname|Snumber|
---|---|
데이터베이스|ICE4016|