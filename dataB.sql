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
