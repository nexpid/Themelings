// app/modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivity.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    tangon = argCor;
    entity = undefined;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot2 = tangon;
    tangon = 1;
    option = oscard[tangon];
    golfie = argBaz;
    golfie = golfie.bind(entity)(option);
    var _closure1_slot3 = golfie;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NO_ACTIVITIES;
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/messages/native/renderer/row_data/embeds/coded_links/useEmbeddedActivity.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo, argBar) { // Original name: useEmbeddedActivity
        zuuluu = argFoo;
        report = argBar;
        var _closure2_slot0 = zuuluu;
        var _closure2_slot1 = report;
        golfie = _closure1_slot0;
        oscard = _closure1_slot1;
        tangon = 2;
        oscard = oscard[tangon];
        tangon = undefined;
        option = golfie.bind(tangon)(oscard);
        golfie = option.useStateFromStores;
        tangon = _closure1_slot3;
        oscard = new Array(1);
        oscard[0] = tangon;
        tangon = new Array(1);
        tangon[0] = zuuluu;
        zuuluu = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00002_ip = 22; continue _fun00001 }
 13:
                entity = _closure1_slot4;
                _fun00002_ip = 44; continue _fun00001;
 22:
                tangon = _closure1_slot3;
                zuuluu = tangon.getEmbeddedActivitiesForChannel;
                michal = _closure2_slot0;
                entity = zuuluu.bind(tangon)(michal);
 44:
                return entity;
            }
        };
        oscard = golfie.bind(option)(oscard, zuuluu, tangon);
        var _closure2_slot2 = oscard;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(2);
        michal[0] = oscard;
        michal[1] = report;
        entity = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                zuuluu = _closure2_slot1;
                entity = null;
                zuuluu = entity != zuuluu;
                entity = undefined;
                if(!zuuluu) { _fun00004_ip = 40; continue _fun00003 }
 18:
                tangon = _closure2_slot2;
                zuuluu = tangon.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.applicationId;
                    entity = _closure2_slot1;
                    entity = michal === entity;
                    return entity;
                };
                entity = zuuluu.bind(tangon)(michal);
 40:
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();