export default function checkContact(target,minLength,maxLength) {
    if(target.trim().length >= minLength && target.trim().length <= maxLength) {
        return true;
    }else{
        return false;
    }
}