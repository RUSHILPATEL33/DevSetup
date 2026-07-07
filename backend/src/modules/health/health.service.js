const getHealthStatus = () => {

    return {
        status: "UP",
        application: "DevSetup Doctor",
        version: "1.0.0",
        environment: process.env.NODE_ENV || "development"
    };

};

export default {
    getHealthStatus
};