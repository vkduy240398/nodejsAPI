import sha1 from 'sha1';
import md5 from 'md5';
export const Function = {
    DecryptPass(password,salt)
    {
        return sha1(md5(password)+salt);
    }
}