1. where in 使用join update
    
    ```mysql
    -- select (u.e_money+w.yf) as new_money from user as u left join withdraw as w on w.user_id=u.user_id  where w.user_id in (1,2,3);
    -- update u.e_money,w.yf,(u.e_money+w.yf) as new_money from user as u join withdraw as w on w.user_id=u.user_id  where w.user_id in (1,2,3);
    update user as u join withdraw as w on w.user_id=u.user_id set u.e_money=(u.e_money+w.yf) where w.user_id in (1,2,3) order by w.id desc;
    ```
