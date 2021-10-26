import {
USER,
USER_LASTEST,
USER_SEARCH,
WITHDRAW,
NEWS,
STATS,
WITHDRAW_SEARCH,
ADD_NEWS,
SHOW_ERROR
} from '../constants/Auth';

export const stats = (data) => {
    return {
        type: STATS,
        data
    }
};

export const getAllUser = (data) => {
    return {
        type: USER,
        data
    }
};

export const getLastestUser = (data) => {
    return {
        type: USER_LASTEST,
        data
    };
};

export const searchUser = (data) => {
    return {
        type: USER_SEARCH,
        data
    }
};


export const getWithdraw = (data) => {
    return {
        type: WITHDRAW_SEARCH,
        data
    };
};

export const setWithdraw = (data) => {
    return {
        type: WITHDRAW,
        data
    };
};

export const getNews = (data) => {
    return {
        type: NEWS,
        data
    };
};
export const addNews = (data) => {
    return {
        type: ADD_NEWS,
        data
    };
};

export const showError = (data) => {
    return {
        type: SHOW_ERROR,
        data
    };
};