// app/modules/screen/native/drawer/useDrawerWidth.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = golfie;
    entity = function(argFoo, argBar) { // Original name: computeTabletDrawerWidth
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argBar;
            if(entity) { _fun00002_ip = 45; continue _fun00001 }
 9:
            entity = global;
            report = entity.Math;
            tangon = report.min;
            zuuluu = _closure1_slot4;
            oscard = _closure1_slot5;
            entity = argFoo;
            entity = entity - oscard;
            entity = tangon.bind(report)(zuuluu, entity);
            _fun00002_ip = 49; continue _fun00001;
 45:
            entity = _closure1_slot3;
 49:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    option = tangon.DM_WIDTH;
    tangon = 260;
    tangon = tangon + option;
    var _closure1_slot3 = tangon;
    report = 300;
    report = report + option;
    var _closure1_slot4 = report;
    report = 32;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/screen/native/drawer/useDrawerWidth.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['DRAWER_LEFT_WIDTH_MIN'] = tangon;
    tangon = function() { // Original name: getDrawerWidth
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot2;
            entity = 1;
            entity = oscard[entity];
            report = undefined;
            tangon = zuuluu.bind(report)(entity);
            entity = tangon.getAppContainerDimensions;
            entity = entity.bind(tangon)();
            tangon = entity.width;
            entity = 2;
            entity = oscard[entity];
            zuuluu = zuuluu.bind(report)(entity);
            entity = zuuluu.getChatLayout;
            entity = entity.bind(zuuluu)();
            oscard = entity.isChatBesideChannelList;
            zuuluu = entity.isChatLockedOpen;
            entity = tangon;
            if(!oscard) { _fun00004_ip = 90; continue _fun00003 }
 80:
            michal = _closure1_slot6;
            entity = michal.bind(report)(tangon, zuuluu);
 90:
            return entity;
        }
    };
    zuuluu['getDrawerWidth'] = tangon;
    michal = function() { // Original name: useDrawerWidth
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            entity = 1;
            entity = oscard[entity];
            report = undefined;
            entity = zuuluu.bind(report)(entity);
            entity = entity.bind(report)();
            tangon = entity.width;
            entity = 2;
            entity = oscard[entity];
            entity = zuuluu.bind(report)(entity);
            entity = entity.bind(report)();
            oscard = entity.isChatBesideChannelList;
            zuuluu = entity.isChatLockedOpen;
            entity = tangon;
            if(!oscard) { _fun00006_ip = 78; continue _fun00005 }
 68:
            michal = _closure1_slot6;
            entity = michal.bind(report)(tangon, zuuluu);
 78:
            return entity;
        }
    };
    zuuluu['useDrawerWidth'] = michal;
    return entity;
})();