// app/modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/fastest_list/utils/getFastestListSectionsWithErrorChecking.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getFastestListSectionsWithErrorChecking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            michal = entity.itemSizes;
            michal = michal.length;
            tangon = 1000;
            michal = michal > tangon;
            if(michal) { _fun00002_ip = 42; continue _fun00001 }
 27:
            zuuluu = entity.itemKeys;
            zuuluu = zuuluu.length;
            michal = zuuluu > tangon;
 42:
            if(!michal) { _fun00002_ip = 147; continue _fun00001 }
 45:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 0;
            zuuluu = zuuluu[michal];
            michal = undefined;
            report = tangon.bind(michal)(zuuluu);
            tangon = report.logFastestListError;
            zuuluu = {};
            michal = entity.itemSizes;
            michal = michal.length;
            zuuluu['itemSizesLength'] = michal;
            michal = entity.itemKeys;
            michal = michal.length;
            zuuluu['itemKeysLength'] = michal;
            michal = entity.listId;
            zuuluu['listId'] = michal;
            michal = 'Using non-uniform item sizes or list keys forces a full iteration of the list entries. This will cause performance issues on slower devices, please consider using a uniform configuration.';
            zuuluu['detail'] = michal;
            michal = 'Non-uniform configuration with large data set detected.';
            michal = tangon.bind(report)(michal, zuuluu);
 147:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();