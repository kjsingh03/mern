class ApiFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    pagination() {
        const limit = Number(this.queryStr.limit) || 12;
        const page = Number(this.queryStr.page) || 1;
        const skip = limit * (page - 1);
        this.query = this.query.limit(limit).skip(skip);
        return this;
    }
    search() {
        const keyword = this.queryStr.keyword ? {
            name: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            }
        } : {};
        this.query = this.query.find({ ...keyword });
        //{...keyword}={name:{iphone1,iphone2,iphone3}}
        return this;
    }
    filter() {
        const remove = ['keyword', 'page', 'limit', 'sort', 'order'];
        const copy = { ...this.queryStr };
        remove.forEach(key => delete copy[key]);
        let queryStr = JSON.stringify(copy);
        queryStr = queryStr.replace(/\b(gt|gte|lt|lte)/g, (key) => `$${key}`);
        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }
    sort() {
        const field = this.queryStr.sort || "rating";
        const order = Number(this.queryStr.order) || -1;
        this.query = this.query.sort([[field, order]]);
        return this;
    }
}
export default ApiFeatures;