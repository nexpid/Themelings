// app/modules/applications/getApplicationFromBotUserId.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot3 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/applications/getApplicationFromBotUserId.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useGetApplicationFromBotUserId
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 2;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.useStateFromStores;
            oscard = _closure1_slot2;
            zuuluu = new Array(1);
            zuuluu[0] = oscard;
            michal = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = _closure2_slot0;
                    tangon = null;
                    entity = undefined;
                    if(!(tangon !== zuuluu)) { _fun00004_ip = 68; continue _fun00003 }
 15:
                    oscard = _closure1_slot2;
                    report = oscard.getUserProfile;
                    option = _closure2_slot0;
                    if(!(tangon == option)) { _fun00004_ip = 42; continue _fun00003 }
 36:
                    zuuluu = _closure1_slot3;
                    _fun00004_ip = 46; continue _fun00003;
 42:
                    zuuluu = _closure2_slot0;
 46:
                    zuuluu = report.bind(oscard)(zuuluu);
                    tangon = tangon == zuuluu;
                    michal = undefined;
                    if(tangon) { _fun00004_ip = 65; continue _fun00003 }
 60:
                    michal = zuuluu.application;
 65:
                    entity = michal;
 68:
                    return entity;
                }
            };
            michal = tangon.bind(report)(zuuluu, michal);
            zuuluu = null;
            zuuluu = zuuluu != michal;
            if(!zuuluu) { _fun00002_ip = 76; continue _fun00001 }
 73:
            entity = michal;
 76:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();