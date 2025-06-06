// app/modules/search_v2/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx
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
    michal = 'modules/search_v2/native/components/tabs/pages/placeholders/PlaceholderUtils.tsx';
    michal = tangon.bind(report)(michal);
    michal = function(argFoo) { // Original name: getAdjustedPlaceholderCount
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.numColumns;
            michal = entity.numResults;
            zuuluu = entity.placeholderCount;
            entity = 0;
            if(!(entity !== zuuluu)) { _fun00002_ip = 39; continue _fun00001 }
 27:
            michal = michal % tangon;
            michal = tangon - michal;
            entity = zuuluu + michal;
 39:
            return entity;
        }
    };
    zuuluu['getAdjustedPlaceholderCount'] = michal;
    return entity;
})();