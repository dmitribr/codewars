  -- вернуть записи из с стобца isActive со значением true (1) 
SELECT isActive
FROM students
WHERE isActive = 1

-- вернуть все столбцы чей возраст превышает 50 лет, упорядочить в убывании
SELECT * FROM people
WHERE age > 50 
ORDER BY age DESC

-- вернуть все столбцы учащихся кто не оплатил обучение
SELECT *
FROM students
WHERE tuition_received = false

--вернуть таблицу mod, выходными значениями которой являются number1 и number2
--https://www.codewars.com/kata/594a9592704e4d21bc000131/train/sql
SELECT mod(number1, number2) AS mod
FROM decimals;

--вернуть ту же таблицу. где все значения race являются строчными символами
--https://www.codewars.com/kata/594800ba6fb152624300006d/train/sql
SELECT id, name, birthday, LOWER (race) AS race
FROM demographics;

--подсчитать число одинаковых race строк и вернуть в порядке убывания
--https://www.codewars.com/kata/594633020a561e329a0000a2/train/sql
SELECT race, COUNT(race) AS count1
FROM demographics     
GROUP BY race
ORDER BY count1 DESC;
