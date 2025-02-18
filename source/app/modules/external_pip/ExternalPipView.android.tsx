// app/modules/external_pip/ExternalPipView.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo) { // Original name: requestFreezeLock
        michal = _closure1_slot5;
        entity = michal.getState;
        zuuluu = entity.bind(michal)();
        michal = zuuluu.requestFreezeLock;
        entity = {};
        tangon = argFoo;
        entity['lockEnabled'] = tangon;
        tangon = 'external-pip';
        entity['key'] = tangon;
        entity = michal.bind(zuuluu)(entity);
        entity = undefined;
        return entity;
    };
    var _closure1_slot7 = entity;
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
    var _closure1_slot3 = tangon;
    tangon = 1;
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.jsx;
    var _closure1_slot6 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/external_pip/ExternalPipView.android.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function() { // Original name: ExternalPipView
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 5;
            zuuluu = option[zuuluu];
            report = undefined;
            tangon = golfie.bind(report)(zuuluu);
            zuuluu = {};
            oscard = 6;
            oscard = option[oscard];
            golfie = golfie.bind(report)(oscard);
            oscard = golfie.isSupported;
            oscard = oscard.bind(golfie)();
            oscard = !oscard;
            zuuluu['disabled'] = oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            tangon = zuuluu.externalPipEnabled;
            var _closure2_slot0 = tangon;
            zuuluu = function() { // Original name: useExternalPipActive
                oscard = _closure1_slot4;
                tangon = oscard.useState;
                zuuluu = false;
                report = tangon.bind(oscard)(zuuluu);
                tangon = _closure1_slot3;
                zuuluu = undefined;
                michal = 2;
                tangon = tangon.bind(zuuluu)(report, michal);
                michal = 0;
                zuuluu = tangon[michal];
                michal = 1;
                michal = tangon[michal];
                var _closure3_slot0 = michal;
                report = oscard.useCallback;
                tangon = function(argFoo) {
                    entity = argFoo;
                    var _closure4_slot0 = entity;
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    entity = 4;
                    zuuluu = zuuluu[entity];
                    entity = undefined;
                    tangon = tangon.bind(entity)(zuuluu);
                    zuuluu = tangon.batchUpdates;
                    michal = function() {
                        michal = _closure3_slot0;
                        zuuluu = _closure4_slot0;
                        entity = undefined;
                        michal = michal.bind(entity)(zuuluu);
                        michal = _closure1_slot7;
                        michal = michal.bind(entity)(zuuluu);
                        return entity;
                    };
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = new Array(0);
                michal = report.bind(oscard)(tangon, michal);
                report = oscard.useEffect;
                tangon = function() {
                    entity = function() {
                        zuuluu = _closure1_slot7;
                        entity = undefined;
                        michal = false;
                        michal = zuuluu.bind(entity)(michal);
                        return entity;
                    };
                    return entity;
                };
                entity = new Array(0);
                entity = report.bind(oscard)(tangon, entity);
                entity = {};
                entity['externalPipActive'] = zuuluu;
                entity['setExternalPipActive'] = michal;
                return entity;
            };
            oscard = zuuluu.bind(report)();
            zuuluu = oscard.externalPipActive;
            option = oscard.setExternalPipActive;
            var _closure2_slot1 = option;
            golfie = _closure1_slot4;
            verify = golfie.useEffect;
            oscard = new Array(1);
            oscard[0] = tangon;
            tangon = function() {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(michal);
                zuuluu = tangon.setEnabled;
                michal = _closure2_slot0;
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            };
            tangon = verify.bind(golfie)(tangon, oscard);
            verify = golfie.useEffect;
            oscard = new Array(1);
            oscard[0] = option;
            tangon = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.addOnPipModeChangedListener;
                michal = function(argFoo) {
                    zuuluu = _closure2_slot1;
                    entity = undefined;
                    michal = argFoo;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        entity = null;
                        zuuluu = entity == zuuluu;
                        entity = undefined;
                        if(zuuluu) { _fun00004_ip = 32; continue _fun00003 }
 18:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.remove;
                        entity = michal.bind(zuuluu)();
 32:
                        return entity;
                    }
                };
                return entity;
            };
            tangon = verify.bind(golfie)(tangon, oscard);
            oscard = golfie.useEffect;
            tangon = new Array(1);
            tangon[0] = option;
            entity = function() {
                tangon = _closure1_slot1;
                zuuluu = _closure1_slot2;
                michal = 6;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.addOnPipModeWillChangeListener;
                michal = function() {
                    zuuluu = _closure2_slot1;
                    entity = undefined;
                    michal = true;
                    michal = zuuluu.bind(entity)(michal);
                    return entity;
                };
                michal = zuuluu.bind(tangon)(michal);
                var _closure3_slot0 = michal;
                entity = function() {
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        entity = null;
                        zuuluu = entity == zuuluu;
                        entity = undefined;
                        if(zuuluu) { _fun00006_ip = 32; continue _fun00005 }
 18:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.remove;
                        entity = michal.bind(zuuluu)();
 32:
                        return entity;
                    }
                };
                return entity;
            };
            entity = oscard.bind(golfie)(entity, tangon);
            entity = null;
            if(!zuuluu) { _fun00002_ip = 219; continue _fun00001 }
 187:
            tangon = _closure1_slot6;
            zuuluu = _closure1_slot1;
            oscard = _closure1_slot2;
            michal = 7;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = {};
            entity = tangon.bind(report)(zuuluu, michal);
 219:
            return entity;
        }
    };
    zuuluu['default'] = michal;
    return entity;
})();