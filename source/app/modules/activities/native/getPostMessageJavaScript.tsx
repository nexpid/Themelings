// app/modules/activities/native/getPostMessageJavaScript.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    report = entity.Object;
    tangon = report.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(report)(zuuluu, entity, michal);
    michal = argPlu;
    entity = 0;
    tangon = michal[entity];
    michal = argBar;
    entity = undefined;
    report = michal.bind(entity)(tangon);
    tangon = report.fileFinishedImporting;
    michal = 'modules/activities/native/getPostMessageJavaScript.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: getPostMessageJavaScript
        entity = global;
        tangon = entity.JSON;
        zuuluu = tangon.stringify;
        michal = argFoo;
        tangon = zuuluu.bind(tangon)(michal);
        entity = entity.HermesInternal;
        zuuluu = entity.concat;
        michal = "\n    (function() {\n      const iFrame = document.getElementById('activityFrame');\n      iFrame.contentWindow.postMessage(";
        entity = ", '*');\n    })()\n  ";
        entity = zuuluu.bind(michal)(tangon, entity);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();