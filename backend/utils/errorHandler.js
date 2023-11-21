class ErrorHandler extends Error{
    constructor(message,statuscode){
        super();
        this.message=message;
        this.statuscode=statuscode;

        Error.captureStackTrace(this,this.constructor);
    }
}
export default ErrorHandler; 