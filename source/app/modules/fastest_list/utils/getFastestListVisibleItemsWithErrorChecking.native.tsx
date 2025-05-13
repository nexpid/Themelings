// app/modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
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
    tangon = 'modules/fastest_list/utils/getFastestListVisibleItemsWithErrorChecking.native.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar, argBaz) { // Original name: getFastestListVisibleItemsWithErrorChecking
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            oscard = argFoo;
            entity = argBar;
            michal = argBaz;
            tangon = entity.sectionStart;
            zuuluu = michal.length;
            zuuluu = tangon > zuuluu;
            if(zuuluu) { _fun00002_ip = 42; continue _fun00001 }
 27:
            report = entity.sectionEnd;
            tangon = michal.length;
            zuuluu = report > tangon;
 42:
            if(!zuuluu) { _fun00002_ip = 104; continue _fun00001 }
 45:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 0;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            golfie = report.bind(zuuluu)(tangon);
            report = golfie.logFastestListError;
            tangon = {};
            tangon['listId'] = oscard;
            tangon['sections'] = michal;
            tangon['visibleItems'] = entity;
            zuuluu = 'Visible items `sectionStart/End` is greater than the number of sections';
            zuuluu = report.bind(golfie)(zuuluu, tangon);
 104:
            tangon = entity.itemStart;
            zuuluu = entity.sectionStart;
            zuuluu = michal[zuuluu];
            zuuluu = tangon > zuuluu;
            if(zuuluu) { _fun00002_ip = 147; continue _fun00001 }
 127:
            report = entity.itemEnd;
            tangon = entity.sectionEnd;
            tangon = michal[tangon];
            zuuluu = report > tangon;
 147:
            if(!zuuluu) { _fun00002_ip = 209; continue _fun00001 }
 150:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            zuuluu = 0;
            tangon = tangon[zuuluu];
            zuuluu = undefined;
            report = report.bind(zuuluu)(tangon);
            tangon = report.logFastestListError;
            zuuluu = {};
            zuuluu['listId'] = oscard;
            zuuluu['sections'] = michal;
            zuuluu['visibleItems'] = entity;
            michal = 'Visible items `itemStart/End` is greater than the number of items in the first section';
            michal = tangon.bind(report)(michal, zuuluu);
 209:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();