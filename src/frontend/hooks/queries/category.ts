import Category from "@/frontend/types/Category";
import axios from "axios";
import { useQuery } from "react-query";

const CategoryQueryKeys = {
    CATEGORY_LIST: "categoryList",
};

const useCategoryListQuery = () => {
    return useQuery([CategoryQueryKeys.CATEGORY_LIST], async () => {
        const { data } = await axios.get("/api/category/list");

        return data as Array<Category>;
    });
};

export { CategoryQueryKeys, useCategoryListQuery };
