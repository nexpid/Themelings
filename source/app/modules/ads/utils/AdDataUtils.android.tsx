// app/modules/ads/utils/AdDataUtils.android.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    option = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(option);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.DEFAULT_TIMEOUT_MS;
    var _closure1_slot5 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/ads/utils/AdDataUtils.android.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function() { // Original name: getAdUser
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot4;
            tangon = zuuluu.adUser;
            michal = zuuluu.isFetching;
            zuuluu = zuuluu.hasFetchFailed;
            report = null;
            if(!(report == tangon)) { _fun00002_ip = 106; continue _fun00001 }
 31:
            if(zuuluu) { _fun00002_ip = 106; continue _fun00001 }
 34:
            if(michal) { _fun00002_ip = 69; continue _fun00001 }
 37:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 4;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.fetchAdUser;
            entity = entity.bind(michal)();
 69:
            entity = global;
            zuuluu = entity.Promise;
            entity = zuuluu.prototype;
            michal = Object.create(entity, {constructor: {value: zuuluu}});
            oscard = function(argFoo) {
                entity = argFoo;
                var _closure3_slot0 = entity;
                entity = false;
                var _closure3_slot1 = entity;
                entity = global;
                oscard = entity.setTimeout;
                tangon = _closure1_slot5;
                entity = undefined;
                zuuluu = function() {
                    zuuluu = _closure3_slot4;
                    michal = undefined;
                    entity = null;
                    entity = zuuluu.bind(michal)(entity);
                    return entity;
                };
                zuuluu = oscard.bind(entity)(zuuluu, tangon);
                var _closure3_slot2 = zuuluu;
                tangon = function() { // Original name: handleUpdate
                    _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                        michal = _closure1_slot4;
                        zuuluu = michal.adUser;
                        michal = null;
                        michal = michal != zuuluu;
                        if(michal) { _fun00004_ip = 32; continue _fun00003 }
 22:
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.hasFetchFailed;
 32:
                        if(!michal) { _fun00004_ip = 59; continue _fun00003 }
 35:
                        zuuluu = _closure3_slot4;
                        entity = _closure1_slot4;
                        michal = entity.adUser;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 59:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot3 = tangon;
                zuuluu = function(argFoo) { // Original name: safeResolve
                    _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                        michal = _closure3_slot1;
                        if(michal) { _fun00006_ip = 69; continue _fun00005 }
 10:
                        michal = true;
                        _closure3_slot1 = michal;
                        michal = global;
                        tangon = michal.clearTimeout;
                        michal = _closure3_slot2;
                        zuuluu = undefined;
                        michal = tangon.bind(zuuluu)(michal);
                        report = _closure1_slot4;
                        tangon = report.removeChangeListener;
                        michal = _closure3_slot3;
                        michal = tangon.bind(report)(michal);
                        michal = _closure3_slot0;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
 69:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot4 = zuuluu;
                zuuluu = _closure1_slot4;
                michal = zuuluu.addChangeListener;
                michal = michal.bind(zuuluu)(tangon);
                return entity;
            };
            golfie = michal;
            entity = new golfie[zuuluu](oscard, report);
            entity = entity instanceof Object ? entity : michal;
            _fun00002_ip = 125; continue _fun00001;
 106:
            michal = global;
            zuuluu = michal.Promise;
            michal = zuuluu.resolve;
            entity = michal.bind(zuuluu)(tangon);
 125:
            return entity;
        }
    };
    zuuluu['getAdUser'] = tangon;
    michal = function() { // Original name: useAdUser
        report = _closure1_slot3;
        tangon = report.useState;
        zuuluu = _closure1_slot4;
        zuuluu = zuuluu.adUser;
        oscard = tangon.bind(report)(zuuluu);
        tangon = _closure1_slot2;
        zuuluu = undefined;
        entity = 2;
        tangon = tangon.bind(zuuluu)(oscard, entity);
        entity = 0;
        entity = tangon[entity];
        zuuluu = 1;
        zuuluu = tangon[zuuluu];
        var _closure2_slot0 = zuuluu;
        tangon = report.useEffect;
        zuuluu = function() {
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = function() { // Original name: handleStoreChange
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        michal = _closure1_slot4;
                        zuuluu = michal.adUser;
                        michal = null;
                        michal = michal != zuuluu;
                        if(michal) { _fun00010_ip = 32; continue _fun00009 }
 22:
                        zuuluu = _closure1_slot4;
                        michal = zuuluu.hasFetchFailed;
 32:
                        if(!michal) { _fun00010_ip = 59; continue _fun00009 }
 35:
                        zuuluu = _closure2_slot0;
                        entity = _closure1_slot4;
                        michal = entity.adUser;
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
 59:
                        entity = undefined;
                        return entity;
                    }
                };
                var _closure3_slot0 = tangon;
                zuuluu = _closure1_slot4;
                golfie = zuuluu.adUser;
                oscard = zuuluu.isFetching;
                report = zuuluu.hasFetchFailed;
                zuuluu = null;
                zuuluu = zuuluu != golfie;
                if(zuuluu) { _fun00008_ip = 48; continue _fun00007 }
 45:
                zuuluu = oscard;
 48:
                if(zuuluu) { _fun00008_ip = 54; continue _fun00007 }
 51:
                zuuluu = report;
 54:
                if(zuuluu) { _fun00008_ip = 89; continue _fun00007 }
 57:
                oscard = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 4;
                report = report[zuuluu];
                zuuluu = undefined;
                report = oscard.bind(zuuluu)(report);
                zuuluu = report.fetchAdUser;
                zuuluu = zuuluu.bind(report)();
 89:
                zuuluu = _closure1_slot4;
                michal = zuuluu.addChangeListener;
                michal = michal.bind(zuuluu)(tangon);
                entity = function() {
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.removeChangeListener;
                    entity = _closure3_slot0;
                    entity = michal.bind(zuuluu)(entity);
                    return entity;
                };
                return entity;
            }
        };
        michal = new Array(0);
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    zuuluu['useAdUser'] = michal;
    return entity;
})();