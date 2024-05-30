export const getProfile = async ()=>{
    const postData = new FormData();
    if (localStorage.getItem('site')) {
        postData.append('email',localStorage.getItem('site'))
    }


    try {
    const response = await fetch("https://xse.egd.mybluehost.me/api/get/user.php", {
        method: "POST",
        body: postData
    });
    const res = await response.json();
    return res;

    
    } catch (err) {
        return false
    }

}