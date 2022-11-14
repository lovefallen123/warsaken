class URL{
    constructor(link){
        this.link=link
        this.query={}
    }

    add(dictionary) {
        for (const [key, value] of Object.entries(dictionary)) {
            this.query[key]= value;
        }
    }

    stringify(){
        let linkreturn = this.link+"?"
        for (const [key, value] of Object.entries(this.query)) {
            linkreturn+=key+"="+value+"&";
        }
        linkreturn = linkreturn.slice(0,-1)
        return linkreturn
    }
}

export default URL;