// app/design/components/AlertModal/native/useAlertStore.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
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
    option = oscard.bind(entity)(tangon);
    report = option.create;
    tangon = function() {
        entity = {};
        michal = new Array(0);
        entity['alerts'] = michal;
        return entity;
    };
    tangon = report.bind(option)(tangon);
    var _closure1_slot2 = tangon;
    report = 2;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'design/components/AlertModal/native/useAlertStore.native.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['useAlertStore'] = tangon;
    tangon = function() {
        tangon = _closure1_slot2;
        zuuluu = tangon.getState;
        zuuluu = zuuluu.bind(tangon)();
        report = zuuluu.alerts;
        tangon = report.forEach;
        zuuluu = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = argFoo;
                michal = zuuluu.onDismiss;
                entity = null;
                michal = entity == michal;
                entity = undefined;
                if(michal) { _fun00002_ip = 30; continue _fun00001 }
 20:
                michal = zuuluu.onDismiss;
                entity = michal.bind(zuuluu)();
 30:
                return entity;
            }
        };
        zuuluu = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = {};
            tangon = new Array(0);
            entity['alerts'] = tangon;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissAlerts'] = tangon;
    tangon = function(argFoo) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = _closure1_slot2;
                zuuluu = tangon.getState;
                zuuluu = zuuluu.bind(tangon)();
                report = zuuluu.alerts;
                tangon = report.find;
                zuuluu = function(argFoo) {
                    entity = argFoo;
                    michal = entity.key;
                    entity = _closure2_slot0;
                    entity = michal === entity;
                    return entity;
                };
                tangon = tangon.bind(report)(zuuluu);
                oscard = null;
                zuuluu = oscard == tangon;
                if(zuuluu) { _fun00004_ip = 60; continue _fun00003 }
 50:
                report = tangon.onDismiss;
                zuuluu = oscard == report;
 60:
                if(zuuluu) { _fun00004_ip = 73; continue _fun00003 }
 63:
                zuuluu = tangon.onDismiss;
                zuuluu = zuuluu.bind(tangon)();
 73:
                zuuluu = _closure1_slot2;
                michal = zuuluu.setState;
                entity = function(argFoo) {
                    entity = {};
                    michal = argFoo;
                    tangon = michal.alerts;
                    zuuluu = tangon.filter;
                    michal = function(argFoo) {
                        entity = argFoo;
                        michal = entity.key;
                        entity = _closure2_slot0;
                        entity = michal !== entity;
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    entity['alerts'] = michal;
                    return entity;
                };
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['dismissAlert'] = tangon;
    michal = function(argFoo, argBar, argBaz) {
        entity = argFoo;
        var _closure2_slot0 = entity;
        entity = argBar;
        var _closure2_slot1 = entity;
        entity = argBaz;
        var _closure2_slot2 = entity;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        entity = 1;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.batchUpdates;
        michal = function() {
            zuuluu = _closure1_slot2;
            michal = zuuluu.setState;
            entity = function(argFoo) {
                entity = {};
                michal = argFoo;
                option = michal.alerts;
                michal = new Array(1);
                golfie = 0;
                verify = michal;
                tangon = arraySpread(verify, option, golfie);
                zuuluu = {};
                oscard = _closure2_slot0;
                zuuluu['key'] = oscard;
                oscard = _closure2_slot1;
                zuuluu['node'] = oscard;
                report = _closure2_slot2;
                zuuluu['onDismiss'] = report;
                michal[tangon] = zuuluu;
                zuuluu = 1;
                zuuluu = tangon + zuuluu;
                entity['alerts'] = michal;
                return entity;
            };
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['openAlert'] = michal;
    return entity;
})();