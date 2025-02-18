// app/modules/client_themes/native/useThemedHeaderOptions.tsx
export default (function(_, argBar, argBaz, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    golfie = oscard[entity];
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot4 = tangon;
    tangon = {};
    tangon['headerBackground'] = entity;
    tangon['contentStyle'] = entity;
    var _closure1_slot5 = tangon;
    tangon = function() { // Original name: headerBackground
        tangon = _closure1_slot4;
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = {'absolute': true, 'tall': true, 'wide': true};
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    var _closure1_slot6 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/client_themes/native/useThemedHeaderOptions.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: useThemedHeaderOptions
        oscard = _closure1_slot1;
        golfie = _closure1_slot2;
        zuuluu = 3;
        zuuluu = golfie[zuuluu];
        tangon = undefined;
        zuuluu = oscard.bind(tangon)(zuuluu);
        report = zuuluu.bind(tangon)();
        var _closure2_slot0 = report;
        zuuluu = 4;
        zuuluu = golfie[zuuluu];
        zuuluu = oscard.bind(tangon)(zuuluu);
        zuuluu = zuuluu.bind(tangon)();
        oscard = zuuluu.top;
        var _closure2_slot1 = oscard;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                entity = _closure2_slot0;
                if(entity) { _fun00002_ip = 19; continue _fun00001 }
 13:
                entity = _closure1_slot5;
                return entity;
 19:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 5;
                tangon = tangon[entity];
                oscard = undefined;
                report = report.bind(oscard)(tangon);
                tangon = report.isIOS;
                tangon = tangon.bind(report)();
                if(tangon) { _fun00002_ip = 82; continue _fun00001 }
 54:
                tangon = {};
                report = _closure1_slot6;
                tangon['headerBackground'] = report;
                report = _closure1_slot5;
                report = report.contentStyle;
                tangon['contentStyle'] = report;
                return tangon;
 82:
                report = _closure2_slot1;
                tangon = 50;
                report = report > tangon;
                tangon = 0;
                if(!report) { _fun00002_ip = 101; continue _fun00001 }
 98:
                tangon = entity;
 101:
                report = _closure1_slot0;
                golfie = _closure1_slot2;
                entity = 6;
                entity = golfie[entity];
                report = report.bind(oscard)(entity);
                entity = report.isIpadOS;
                entity = entity.bind(report)();
                report = 44;
                if(!entity) { _fun00002_ip = 140; continue _fun00001 }
 137:
                report = 46;
 140:
                entity = {};
                michal = _closure1_slot6;
                entity['headerBackground'] = michal;
                michal = {};
                zuuluu = _closure2_slot1;
                zuuluu = -zuuluu;
                tangon = zuuluu + tangon;
                zuuluu = 56;
                zuuluu = zuuluu - report;
                zuuluu = tangon + zuuluu;
                michal['marginTop'] = zuuluu;
                entity['contentStyle'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();