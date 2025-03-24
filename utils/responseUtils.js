const successResponse = (data, message = "") => {
    return {
        success: true,
        data,
        message,
    };
};

const errorResponse = (message, data = null) => {
    return {
        success: false,
        data,
        message,
    };
};

module.exports = {
    successResponse,
    errorResponse,
};
