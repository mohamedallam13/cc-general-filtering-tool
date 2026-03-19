(function (root, factory) {
    root.HANDLE_APPLICATIONS_DB = factory();
})(this, function () {

    const { Toolkit } = CCLIBRARIES
    const { readFromJSON } = Toolkit

    const INDEX_FILE_ID = "1LFttAzmUIu1c6lR3jYooyACDx9LqAq2_"

    function getApplicants(activityCode) {
        const unpackedIndexFile = getUnpackedIndexFile(activityCode)
        const { map, jsonDB } = unpackedIndexFile
        const applicants = readFromJSON(jsonDB)
        const aggregatedObj = { applicants, map }
        // const pagePath = "client/components/Cards/Cards"
        // const HTMLContent = MW.include(pagePath, { data });
        // return JSON.stringify(aggregatedObj)
        return aggregatedObj
    }

    function getUnpackedIndexFile(activityCode) {
        const indexData = readFromJSON(INDEX_FILE_ID)
        return indexData[activityCode]
    }

    // function getData() {
    //     const dbData = readFromJSON(INDEX_FILE_ID)
    //     const { profInfoObj } = dbData;
    //     const arrayOfData = Object.entries(profInfoObj).map(([, professionalObj]) => professionalObj)
    //     return arrayOfData
    // }

    return {
        getApplicants
    };
});

function getApplicants(activityCode) {
    activityCode = "CCT-Camp15"
    return HANDLE_APPLICATIONS_DB.getApplicants(activityCode)
}