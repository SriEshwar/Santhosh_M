create database Aspire;
use Aspire;
create table Programmer (name varchar(8) not null, dob date not null, doj date not null, sex varchar(1) not null, prof1 
varchar(8), prof2 varchar(8), salary int not null);

create table Software (name varchar(8) not null, title varchar(20) not null, dev_in varchar(8) not null, scost
decimal(7,2), dcost int, sold int);

create table Studies (name varchar(8) not null, splace varchar(9) not null, course varchar(5) not null, ccost 
varchar(5) not null);

insert into Programmer values("somdutt", "1966-04-21", "1992-04-21", "M", "Pascal", "Basic", 3200),
('Vikram', '1991-11-05', '2015-09-15', 'M', 'Clipper', 'Clipper', 53000.00),
('Nikitha', '1989-06-12', '2016-06-30', 'F', 'C', 'Dbase', 62000.00),
('Ankit', '1994-01-20', '2019-03-05', 'M', 'Clipper', 'C++', 8000.00),
('Kavita', '1990-09-08', '2014-08-25', 'F', 'Basic', 'Cobol', 56000.00);

insert into Software values ("somdutt", "Parachutes", "Basic", 399.5, 6000, 43),
('Aarav', 'SpaceCraft', 'Basic', 349.99, 7000, 39),
('Priya', 'SkySail', 'Clipper', 249.95, 4500, 20),
('Rahul', 'CloudRunner', 'C#', 449.99, 6500, 35),
('Kavita', 'AeroFly', 'PHP', 399.95, 6000, 43);

insert into Studies values("somdutt","sabhari","PGDCA", "4500"), ("devdutt", "BDPS", "DCS", "5000"),
('Meera', 'JKL', 'B.Sc', 7000), ('Kavita', 'SSIL','PGDCA',500),
('Ankit', 'PQR', 'M.E', 1000), ('Neha', 'STU', 'PGDCA', 1500);

-- Queries I

select avg(scost) as average_selling_cost from Software where dev_in = "pascal";

select name, timestampdiff(YEAR, dob, CURDATE()) as age from Programmer;

select p.name, timestampdiff(YEAR, dob, CURDATE()) as age from Programmer p JOIN Studies s on p.name = s.name
where s.course = 'DCS';

select max(sold) as highest_copies_sold from Software;

select name, dob from Programmer where month(dob) = 1;

select min(cast(ccost as decimal)) as lowest_course_fee from Studies;

select count(*) as programmers_with_PGDCA from studies where course = 'pgdca';

select sum(scost * sold) as revenue_earned from software where dev_in = 'c';

select * from software where name = 'ramesh';

select count(*) as programmers_studied_at_sabhari from studies where splace = 'sabhari';

select * from software where sold > 20000;

select name, ceil(dcost/scost) from  software;

select max(scost) from software where dev_in = "basic";

select * from software where dcost <= scost * sold;

select count(*) from software;

select count(*) from studies where splace="paragathi"; 

select count(*) from studies where ccost between 5000 and 10000;

select avg(ccost) from studies;

select * from Programmer where prof1 ="c" or prof2="c";

select count(*) from Programmer where prof1 in ("Cobol", "Pascal") or prof2 in ('Cobol', 'Pascal'); 

select count(*) as programmers_count from programmer where prof1 not in ('pascal', 'c') and prof2 not in ('pascal', 'c');

select max(year(curdate()) - year(dob)) as oldest_male_age from programmer where sex = 'm';

select avg(year(curdate()) - year(dob)) as average_age_of_female_programmers from programmer where sex = 'f';

select name, year(curdate()) - year(doj) as experience_years from programmer order by experience_years desc;

select name from programmer where month(dob) = month(curdate());

select count(*) as female_programmers_count from programmer where sex = 'f';

select distinct prof1, prof2 from programmer where sex = 'm';

select avg(salary) as average_salary from programmer;

select count(*) as people_count_in_range from programmer where salary between 2000 and 4000;

select * from programmer where prof1 not in ('clipper', 'cobol', 'pascal') and prof2 not in ('clipper', 'cobol', 'pascal');

select count(*) as female_programmers_count_above_24 from programmer where sex = 'f' and prof1 = 'c' and year(curdate()) - year(dob) > 24;

select name from programmer where day(dob) between day(curdate()) and day(curdate() + interval 7 day) and month(dob) = month(curdate());

select * from programmer where doj > curdate() - interval 1 year;

select * from programmer where year(doj) = year(curdate()) - 2;

select name, (dcost - (scost * sold)) as amount_to_be_recovered from software where dcost > scost * sold;

select name from software where sold = 0;

select scost * sold as total_cost from software where name = 'mary';

select distinct splace from studies;

select count(distinct course) as different_courses_count from studies;

-- Queries II

select name from programmer where name like '%a%a%';

select name from programmer where length(name) <= 5;

select count(*) as female_programmers_count_with_more_than_2_years_exp
from programmer where sex = 'f' and prof1 = 'cobol' and year(curdate()) - year(doj) > 2;

select min(length(name)) as shortest_name_length from programmer;

select avg(dcost) as average_development_cost_in_cobol from software where dev_in = 'cobol';

select name, sex, dob, doj from programmer;

select name from programmer where day(dob) = day(last_day(dob));

select sum(salary) as total_salary_paid from programmer where sex = 'm' and (prof1 <> 'cobol' or prof2 <> 'cobol');

select title, scost, dcost, scost - dcost as difference from software order by difference desc;

select name, dob, doj from programmer where month(dob) = month(doj);

select name from software where name like '% %';

select dev_in, count(*) as package_count from software group by dev_in;

select dev_in, count(*) as package_count from software group by dev_in;

select name, count(*) as package_count from software group by name;

select sex, count(*) as programmer_count from programmer group by sex;

select dev_in, max(dcost) as costliest_package_cost, max(sold) as highest_selling from software group by dev_in;

select year(dob) as birth_year, count(*) as person_count from programmer group by birth_year;

select year(doj) as join_year, count(*) as person_count from programmer group by join_year;

select month(dob) as birth_month, count(*) as person_count from programmer group by birth_month;

select month(doj) as join_month, count(*) as person_count from programmer group by join_month;

select month(doj) as join_month, count(*) as person_count from programmer group by join_month;

select prof2, count(*) as count_of_prof2 from programmer group by prof2;

select floor(salary / 1000) as salary_group, count(*) as person_count from programmer group by salary_group;

select splace, count(*) as person_count from studies group by splace;

select course, count(*) as person_count from studies group by course;

select dev_in, sum(dcost) as total_development_cost from software group by dev_in;

select dev_in, sum(scost) as total_selling_cost from software group by dev_in;

select name, sum(dcost) as total_development_cost from software group by name;

select name, sum(sold) as total_sales from software group by name;

select name, count(*) as package_count from software group by name;

select name, dev_in, sum(scost * sold) as total_sales_cost from software group by name, dev_in;

select s.name, max(s.scost) as costliest_package, min(s.scost) as cheapest_package from software s
inner join programmer p on s.name = p.name group by s.name;

select dev_in, avg(dcost) as average_development_cost, avg(dcost + scost) as average_cost, avg(scost) as average_selling_cost, 
avg(scost / sold) as average_price_per_copy FROM Software GROUP BY dev_in;

select splace as institute_name, count(distinct(course)) as no_of_course, avg(ccost) as average_cost from Studies group by splace;

select splace as institute_name, count(*) as no_of_student from studies group by splace;

select name, sex from programmer;

select p.name, s.name as package_name from programmer p inner join software s on p.name = s.name;

select dev_in, count(*) as number_of_packages from software group by dev_in;

select dev_in, count(*) as number_of_packages_with_less_than_1000_dev_cost from software where dcost < 1000 group by dev_in;

select dev_in, avg(scost - dcost) as average_difference from software group by dev_in;

select s.name, sum(s.scost) as total_scost, sum(s.dcost) as total_dcost, sum(s.dcost - (s.scost * s.sold)) as amount_to_be_recovered
from software s group by s.name having sum(s.dcost) > sum(s.scost * s.sold);

select max(salary) as highest_salary, min(salary) as lowest_salary, avg(salary) as average_salary from programmer where salary > 2000;

-- Queries III  

select name from programmer where prof1 = 'C' order by salary desc limit 1;

select name from programmer where sex = 'f' and prof1 = 'cobol' order by salary desc limit 1;

select prof1 as language, name from programmer where (prof1, salary) in (select prof1, max(salary) from programmer group by prof1);

select name from programmer order by year(curdate()) - year(dob) limit 1;

select name from programmer order by year(curdate()) - year(dob) desc limit 1;

select prof1 from programmer group by prof1 having count(*) = 1;

select name from programmer where prof2 = 'dbase' order by year(curdate()) - year(dob) limit 1;

select splace from studies group by splace order by count(*) desc limit 1;

select name from programmer where sex = 'f' and salary > 3000 and prof1 not in ('C', 'C++', 'Oracle', 'Dbase') limit 1;

select course from studies group by course order by max(ccost) desc limit 1;

select course from studies group by course order by count(*) desc limit 1;

select splace, course from studies where ccost < (select avg(ccost) from studies) group by splace, course;

select splace from studies group by splace order by max(ccost) desc limit 1;

select course from studies group by course having count(*) < (select avg(count(*)) from studies group by course) limit 1;

select splace from studies where course = (select course from studies group by course having count(*) < (select avg(count(*)) from studies group by course) limit 1)
limit 1;

select name from software where scost between (select avg(scost) - 1000 from software) and (select avg(scost) + 1000 from software);

select name from software order by dcost desc limit 1;

select name from software order by scost asc limit 1;

select name from software order by sold  limit 1;

select dev_in from software where dcost - scost = (select min(dcost - scost) from software) limit 1;

select dev_in from software group by dev_in order by count(*) desc limit 1;

select name from programmer group by name order by count(*) desc limit 1;

select name from software order by scost desc limit 1;

select name from software where sold < (select avg(sold) from software) limit 1;

select name from programmer where sex = 'f' and salary > (select max(salary) from programmer where sex = 'm') limit 1;

select prof1 from programmer group by prof1 order by count(*) desc limit 1;

select name from software where dcost < (select 2 * scost from software where name = name);

select name, min(s.scost) as cheapest_package from software s inner join programmer p on s.name = p.name group by p.name, s.dev_in order by s.dev_in;

select name from programmer where sex = 'm' and year(dob) = 1965 order by dob limit 1;

select name, dev_in from software where (name, scost) in (select name, max(scost) from software group by name)
union
select name, dev_in from software where (name, scost) in (select name, min(scost) from software group by name);

select name, dev_in from software where (name, scost) in (select name, max(scost) from software group by name)
union
 select name, dev_in from software where (name, scost) in (select name, min(scost) from software group by name);

select name from programmer where sex = 'f' and year(dob) = 1992 order by dob limit 1;

select year(dob) as birth_year from programmer group by birth_year order by count(*) desc limit 1;

select month(doj) as join_month from programmer group by join_month order by count(*) desc limit 1;

select prof1 from programmer group by prof1 order by count(*) desc limit 1;

select name from programmer where sex = 'm' and salary < (select avg(salary) from programmer where sex = 'f') limit 1;

-- Queries IV

select * from programmer where salary in (select salary from programmer group by salary having count(*) > 1);

select * from software where name in (select name from programmer where sex = 'm' and salary > 3000);

select * from software where dev_in = 'PASCAL' and name in (select name from programmer where sex = 'f');

select * from programmer where year(doj) < 1990;

select name, count(*) as number_of_packages, sum(sold) as total_copies_sold, sum(scost * sold) as total_sales_value
from software group by name, dev_in;

select * from software
where dev_in = 'DBASE' and name in (select name from programmer where splace = (select splace from studies group by splace order by count(*) desc limit 1) and sex = 'm');

select * from software
where (dev_in = 'PASCAL' and name in (select name from programmer where sex = 'f')) or (dev_in = 'PASCAL' and name in (select name from programmer where sex = 'f'));

select * from software where dev_in not in (prof1, prof2) or dev_in not in (prof2, prof1);

select * from software where dev_in not in (select prof1 from programmer) and dev_in not in (select prof2 from programmer);

select * from software where dev_in = 'C' and name in (select name from programmer where splace = 'SABHARI' and sex = 'm');

select name from programmer where name not in (select name from software);

select sum(scost) from software where name in (select name from programmer where splace = 'APPLE');

select * from programmer where dob in (select dob from programmer group by dob having count(*) > 1);

select * from programmer where prof2 in (select prof2 from programmer group by prof2 having count(*) > 1);

select splace, sum(scost * sold) as total_sales_value from software group by splace;

select splace from studies where splace = (select splace from software order by scost desc limit 1);

select prof1 from (select prof1 from programmer union select prof2 from programmer) as combined_profs
where prof1 not in (select dev_in from software);

select salary, course from programmer where name in (select name from software order by sold desc limit 1);

select *, round((ccost / salary) * 12) as months_to_recover_course_cost
from programmer inner join studies on programmer.name = studies.name;

select * from software where name in (select name from programmer where year(curdate()) - year(doj) < 3) order by scost desc limit 1;

select avg(salary) from programmer where name in (select name from software where scost * sold > 50000);

select count(*) from software where name in (select name from studies where ccost = (select min(ccost) from studies));

select count(*) from software where name = (select name from software order by scost limit 1);

select count(*) from software
where name in (select name from programmer where sex = 'f' and salary > (select max(salary) from programmer where sex = 'm'));

select count(*) from software where name in (select name from programmer where splace = 'BDPS' order by year(curdate()) - year(dob) desc limit 1);

select p.*, s.splace from programmer p left join software s on p.name = s.name;

select prof1, count(*) as programmer_count, (select count(*) from software where dev_in = programmer.prof1) as package_count
from programmer group by prof1;

select p.name, count(s.name) as number_of_packages_developed from programmer p left join software s on p.name = s.name group by p.name;


