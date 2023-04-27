import Subcategory from "./Subcategory";

interface Category {
    name: string;
    subcategoryList: Array<Subcategory>;
}

export default Category;
