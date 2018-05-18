 DECLARE

  l_vc_name VARCHAR2(100);

BEGIN

  FOR loop_emp IN

  (

    SELECT C_ID ||', '||C_NAME name

    INTO l_vc_name

    FROM CUSTOMER

    WHERE MOD(C_ID,2) = 1 

  )

  LOOP

    dbms_output.put_line('Cursor Result: '||loop_emp.name);


  END LOOP loop_emp;

END;
