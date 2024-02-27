module.exports = {
    CHECK_USER_AUTHENTICATION_QUERY: `select * from user_master where job_status = 'PR' and active_flag = 'A' and user_master_id = %user_master_id% `,

    GET_USER_LIST: `select * from user_master where active_flag in('A','DI') `,

    GET_USER: `select * from user_master where job_status = 'PR' and active_flag = 'A' and login_id = '%login_id%' `,

    CREATE_USER: `INSERT INTO user_master
    (branch_master_id,
    user_designation_master_id,
    user_name,
    login_id,
    password,
    salt,
    mobile_primary,
    mobile_secondary,
    email_primary,
    email_secondary,
    job_status,
    active_flag,
    created_by,
    created_on)
    VALUES
    (%branch_master_id% ,
    %user_designation_master_id% ,
    '%user_name%' ,
    '%login_id%' ,
    '%password%' ,
    '%salt%' ,
    '%mobile_primary%' ,
    %mobile_secondary% ,
    %email_primary% ,
    %email_secondary% ,
    '%job_status%' ,
    '%active_flag%' ,
    %created_by% ,
    '%created_on%' );`,

    UPDATE_USER: ``,

    DELETE_USER: ``,
}