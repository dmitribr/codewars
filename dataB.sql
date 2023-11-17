  -- вернуть записи из с стобца isActive со значением true (1) 
SELECT isActive
FROM students
WHERE isActive = 1

-- вернуть все столбцы чей возраст превышает 50 лет, упорядочить в убывании
SELECT * FROM people
WHERE age > 50 
ORDER BY age DESC
