Select stu_first_name, stu_last_name, stu_grade_level
from students
Where stu_first_name = "Charlie" 
ORDER BY 2, 1
;

SELECT DISTINCT stu_grade_level
FROM students
ORDER BY stu_grade_level
;

SELECT att_code, COUNT(*)
FROM attendance
GROUP BY att_code
ORDER BY 2 DESC
;
SELECT stu_first_name AS `First Name`, stu_last_name AS `Last Name`, skl_name AS `School Name`
FROM students
JOIN schools ON stu_skl_id = skl_id
WHERE stu_grade_level = '12' 
AND stu_status = "Active"
ORDER BY skl_name, stu_last_name, stu_first_name
;
SELECT skl_name AS `School`, COUNT(*) AS `Enrollment`
FROM students
JOIN schools ON stu_skl_id = skl_id
WHERE stu_grade_level = '12' 
AND stu_status = "Active"
GROUP BY skl_name
ORDER BY skl_name
;

-- Find all the attendance records for Suzanne Grant (shes an 11th grader)

SELECT att_date, att_code, att_time
FROM attendance
JOIN students ON att_stu_id = stu_id
WHERE stu_first_name = "Suzanne" AND stu_last_name = "Grant"
ORDER BY 1
;

-- find all active teacers in either the math or english departments

SELECT tch_first_name, tch_last_name, tch_department, tch_status
  FROM teachers
 WHERE tch_department IN ('MA','ELA' ) 
   AND tch_status = 'Active'
 ORDER BY 3, 2, 1
;

SELECT tch_first_name, tch_last_name, tch_department,  cls_course, cls_section, cls_meeting_times, cls_room
  FROM teachers
  JOIN classes ON tch_id = cls_tch_id
 WHERE tch_department IN ('MA','ELA' ) 
   AND tch_status = 'Active'
   AND cls_course <> 'DST'
   AND cls_meeting_times IS NOT NULL
 ORDER BY tch_last_name, tch_first_name, cls_meeting_times
 ;
 SELECT stu_first_name, stu_last_name, COUNT(*) AS `Number of Absents`
 FROM students
 JOIN attendance ON att_stu_id = stu_id
 WHERE stu_grade_level = '09' AND att_code = 'A' AND stu_status = 'Active'
 GROUP BY 1, 2
 ORDER BY 3, 1, 2
 ;
 
 -- find all active freshman with perfect attendance
 
 SELECT stu_first_name, stu_last_name, att_id, att_code
 FROM students
 LEFT JOIN attendance ON att_stu_id = stu_id AND att_code = 'A'
 WHERE stu_grade_level = '09' 
 AND stu_status = 'Active'
 AND att_id IS NULL
 ORDER BY stu_first_name, stu_last_name
 ;


SELECT stu_first_name, stu_last_name
 FROM students
 LEFT JOIN attendance ON att_stu_id = stu_id AND att_code = 'A'
 WHERE stu_grade_level = '09' 
 AND stu_status = 'Active'
 AND stu_id NOT IN (
	SELECT att_stu_id
    FROM attendance
    WHERE att_code = 'A'
    )
 ORDER BY stu_first_name, stu_last_name
 ;






