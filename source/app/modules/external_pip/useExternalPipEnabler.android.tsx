// app/modules/external_pip/useExternalPipEnabler.android.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/external_pip/useExternalPipEnabler.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useExternalPIPEnabler
        michal = argFoo;
        oscard = michal.disabled;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot2;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot4;
        zuuluu[1] = golfie;
        michal = _closure1_slot3;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot4;
                zuuluu = tangon.getChannelId;
                golfie = zuuluu.bind(tangon)();
                zuuluu = null;
                if(!(zuuluu != golfie)) { _fun00002_ip = 189; continue _fun00001 }
 28:
                tangon = _closure2_slot0;
                if(tangon) { _fun00002_ip = 189; continue _fun00001 }
 41:
                report = _closure1_slot2;
                tangon = report.getVideoParticipants;
                oscard = tangon.bind(report)(golfie);
                report = oscard.filter;
                tangon = function(argFoo) {
                    entity = argFoo;
                    entity = entity.localVideoDisabled;
                    entity = !entity;
                    return entity;
                };
                tangon = report.bind(oscard)(tangon);
                report = tangon.length;
                tangon = 0;
                tangon = report > tangon;
                if(tangon) { _fun00002_ip = 141; continue _fun00001 }
 87:
                oscard = _closure1_slot2;
                report = oscard.getStreamParticipants;
                golfie = report.bind(oscard)(golfie);
                oscard = golfie.filter;
                report = function(argFoo) {
                    entity = argFoo;
                    entity = entity.user;
                    michal = entity.id;
                    zuuluu = _closure1_slot3;
                    entity = zuuluu.getId;
                    entity = entity.bind(zuuluu)();
                    entity = michal !== entity;
                    return entity;
                };
                oscard = oscard.bind(golfie)(report);
                report = oscard.find;
                michal = function(argFoo) {
                    entity = argFoo;
                    michal = entity.streamId;
                    entity = null;
                    entity = entity != michal;
                    return entity;
                };
                michal = report.bind(oscard)(michal);
                tangon = zuuluu != michal;
 141:
                michal = {};
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 4;
                report = report[zuuluu];
                zuuluu = undefined;
                zuuluu = oscard.bind(zuuluu)(report);
                option = zuuluu.DEFAULT_STATE;
                verify = michal;
                zuuluu = copyDataProperties(verify, option);
                zuuluu = 'externalPipEnabled';
                michal[zuuluu] = tangon;
                return michal;
 189:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot1;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.DEFAULT_STATE;
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();