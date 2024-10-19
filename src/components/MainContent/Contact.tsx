export default () => {
    return(
        <div className="flex items-center gap-5" >
            <a title="GitHub" href="https://github.com/macleet" target="#" >
                <img className="hover:scale-110 transition-transform" alt="GitHub" width={30} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
            </a>
            <a title="LinkedIn" href="https://linkedin.com/in/macleet" target="#" >
                <img className="hover:scale-110 transition-transform" alt="LinkedIn" width={30} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/900px-LinkedIn_logo_initials.png?20140125013055" />
            </a>
            <a title="Email" href="mailto:seemin0506@gmail.com" target="#" >
                <img className="hover:scale-110 transition-transform" alt="Email" width={32} src="https://www.freepnglogos.com/uploads/email-png/email-messages-icon-16.png" />
            </a>
        </div>
    );
};