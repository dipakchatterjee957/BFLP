module.exports = {

    GET_USER_LIST: `select * from user_master`,

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