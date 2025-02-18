// app/modules/blocking/BlockedUserUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo) { // Original name: voiceStateHasBlockedUsers
        zuuluu = _closure1_slot3;
        michal = zuuluu.isBlockedOrIgnored;
        entity = argFoo;
        entity = entity.userId;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    var _closure1_slot4 = tangon;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/blocking/BlockedUserUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo, argBar) { // Original name: filterOutBlockedOrIgnoredUsers
        tangon = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        zuuluu = tangon.filter;
        michal = function(argFoo) {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 1;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.isNotNullish;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                michal = argFoo;
                tangon = _closure2_slot0;
                entity = null;
                if(!(entity == tangon)) { _fun00002_ip = 41; continue _fun00001 }
 16:
                report = _closure1_slot3;
                tangon = report.isBlockedOrIgnored;
                entity = michal.id;
                entity = tangon.bind(report)(entity);
                _fun00002_ip = 60; continue _fun00001;
 41:
                tangon = _closure2_slot0;
                zuuluu = tangon.includes;
                michal = michal.id;
                entity = zuuluu.bind(tangon)(michal);
 60:
                entity = !entity;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['filterOutBlockedOrIgnoredUsers'] = report;
    report = function(argFoo, argBar) { // Original name: filterOutBlockedOrIgnoredUserIds
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00004_ip = 36; continue _fun00003 }
 16:
                zuuluu = _closure1_slot3;
                entity = zuuluu.isBlockedOrIgnored;
                entity = entity.bind(zuuluu)(tangon);
                _fun00004_ip = 50; continue _fun00003;
 36:
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = michal.bind(zuuluu)(tangon);
 50:
                entity = !entity;
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['filterOutBlockedOrIgnoredUserIds'] = report;
    report = function(argFoo) { // Original name: filterOutStreamsByBlockedOwner
        zuuluu = argFoo;
        michal = zuuluu.filter;
        entity = function(argFoo) {
            zuuluu = _closure1_slot3;
            michal = zuuluu.isBlockedOrIgnored;
            entity = argFoo;
            entity = entity.ownerId;
            entity = michal.bind(zuuluu)(entity);
            entity = !entity;
            return entity;
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['filterOutStreamsByBlockedOwner'] = report;
    report = function(argFoo, argBar) { // Original name: hasBlockedOrIgnoredUserIds
        zuuluu = argFoo;
        michal = argBar;
        var _closure2_slot0 = michal;
        michal = zuuluu.some;
        entity = function(argFoo) {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = argFoo;
                zuuluu = _closure2_slot0;
                entity = null;
                if(!(entity == zuuluu)) { _fun00006_ip = 36; continue _fun00005 }
 16:
                zuuluu = _closure1_slot3;
                entity = zuuluu.isBlockedOrIgnored;
                entity = entity.bind(zuuluu)(tangon);
                _fun00006_ip = 50; continue _fun00005;
 36:
                zuuluu = _closure2_slot0;
                michal = zuuluu.includes;
                entity = michal.bind(zuuluu)(tangon);
 50:
                return entity;
            }
        };
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    zuuluu['hasBlockedOrIgnoredUserIds'] = report;
    zuuluu['voiceStateHasBlockedUsers'] = tangon;
    michal = function(argFoo) { // Original name: filterBlockedUsersFromVoiceStates
        michal = _closure1_slot1;
        zuuluu = _closure1_slot2;
        entity = 2;
        entity = zuuluu[entity];
        zuuluu = undefined;
        michal = michal.bind(zuuluu)(entity);
        entity = argFoo;
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.filter;
        entity = function(argFoo) {
            zuuluu = _closure1_slot4;
            michal = undefined;
            entity = argFoo;
            entity = zuuluu.bind(michal)(entity);
            entity = !entity;
            return entity;
        };
        zuuluu = michal.bind(zuuluu)(entity);
        michal = zuuluu.keyBy;
        entity = 'userId';
        michal = michal.bind(zuuluu)(entity);
        entity = michal.value;
        entity = entity.bind(michal)();
        return entity;
    };
    zuuluu['filterBlockedUsersFromVoiceStates'] = michal;
    return entity;
})();