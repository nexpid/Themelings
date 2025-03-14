// app/modules/go_live/utils/getTitleFromPickedStreamContent.tsx
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
    tangon = 'modules/go_live/utils/getTitleFromPickedStreamContent.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getTitleFromPickedStreamContent
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = zuuluu.windows;
            entity = entity.length;
            verify = 0;
            if(!(!(entity > verify))) { _fun00002_ip = 162; continue _fun00001 }
 25:
            entity = zuuluu.applications;
            entity = entity.length;
            if(!(!(entity > verify))) { _fun00002_ip = 123; continue _fun00001 }
 40:
            entity = zuuluu.displays;
            entity = entity.length;
            tangon = entity > verify;
            entity = null;
            if(!tangon) { _fun00002_ip = 121; continue _fun00001 }
 62:
            option = _closure1_slot0;
            tangon = _closure1_slot1;
            report = tangon[verify];
            golfie = undefined;
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = tangon[verify];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.R4wpLC;
            entity = report.bind(oscard)(tangon);
 121:
            _fun00002_ip = 160; continue _fun00001;
 123:
            oscard = zuuluu.applications;
            report = oscard.map;
            tangon = function(argFoo) {
                entity = argFoo;
                entity = entity.name;
                return entity;
            };
            oscard = report.bind(oscard)(tangon);
            report = oscard.join;
            tangon = ', ';
            entity = report.bind(oscard)(tangon);
 160:
            _fun00002_ip = 199; continue _fun00001;
 162:
            tangon = zuuluu.windows;
            zuuluu = tangon.map;
            michal = function(argFoo) {
                entity = argFoo;
                entity = entity.title;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.join;
            michal = ', ';
            entity = zuuluu.bind(tangon)(michal);
 199:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();