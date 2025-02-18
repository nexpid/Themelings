// app/modules/activities/utils/findActivityWithMostParticipants.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    zuuluu = argFre;
    report = argPlu;
    entity = global;
    golfie = entity.Object;
    oscard = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = oscard.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    oscard = report[entity];
    tangon = argBaz;
    entity = undefined;
    tangon = tangon.bind(entity)(oscard);
    var _closure1_slot0 = tangon;
    tangon = 1;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/activities/utils/findActivityWithMostParticipants.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: findActivityWithMostParticipants
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            report = tangon.length;
            zuuluu = 0;
            entity = null;
            if(!(zuuluu !== report)) { _fun00002_ip = 57; continue _fun00001 }
 16:
            michal = 1;
            if(!(michal !== report)) { _fun00002_ip = 50; continue _fun00001 }
 23:
            oscard = tangon.reduce;
            report = tangon[zuuluu];
            michal = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    entity = argFoo;
                    michal = argBar;
                    zuuluu = entity.userIds;
                    tangon = zuuluu.size;
                    zuuluu = michal.userIds;
                    zuuluu = zuuluu.size;
                    if(!(tangon < zuuluu)) { _fun00004_ip = 35; continue _fun00003 }
 32:
                    entity = michal;
 35:
                    return entity;
                }
            };
            michal = oscard.bind(tangon)(michal, report);
            _fun00002_ip = 54; continue _fun00001;
 50:
            michal = tangon[zuuluu];
 54:
            entity = michal;
 57:
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo) { // Original name: findActivityWithMostNonBlockedOrIgnoredParticipants
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = michal.length;
            entity = 0;
            if(!(entity !== tangon)) { _fun00006_ip = 129; continue _fun00005 }
 16:
            report = 1;
            if(!(report !== tangon)) { _fun00006_ip = 123; continue _fun00005 }
 23:
            oscard = michal[entity];
            tangon = new Array(2);
            tangon[0] = oscard;
            oscard = michal[entity];
            offset = oscard.userIds;
            option = new Array(0);
            yankee = option;
            verify = 0;
            oscard = arraySpread(yankee, offset, verify);
            golfie = option.map;
            oscard = function(argFoo) {
                zuuluu = _closure1_slot0;
                michal = zuuluu.isBlockedOrIgnored;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            oscard = golfie.bind(option)(oscard);
            oscard = oscard.length;
            tangon[1] = oscard;
            oscard = tangon[entity];
            var _closure2_slot0 = oscard;
            tangon = tangon[report];
            var _closure2_slot1 = tangon;
            report = michal.forEach;
            tangon = function(argFoo) {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = argFoo;
                    oscard = michal.userIds;
                    tangon = new Array(0);
                    report = 0;
                    golfie = tangon;
                    entity = arraySpread(golfie, oscard, report);
                    zuuluu = tangon.filter;
                    entity = function(argFoo) {
                        zuuluu = _closure1_slot0;
                        michal = zuuluu.isBlockedOrIgnored;
                        entity = argFoo;
                        entity = michal.bind(zuuluu)(entity);
                        entity = !entity;
                        return entity;
                    };
                    entity = zuuluu.bind(tangon)(entity);
                    zuuluu = entity.length;
                    tangon = _closure2_slot1;
                    if(!(zuuluu > tangon)) { _fun00008_ip = 65; continue _fun00007 }
 57:
                    _closure2_slot1 = zuuluu;
                    _closure2_slot0 = michal;
 65:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = report.bind(michal)(tangon);
            zuuluu = _closure2_slot0;
            return zuuluu;
 123:
            entity = michal[entity];
            return entity;
 129:
            entity = null;
            return entity;
        }
    };
    zuuluu['findActivityWithMostNonBlockedOrIgnoredParticipants'] = michal;
    return entity;
})();