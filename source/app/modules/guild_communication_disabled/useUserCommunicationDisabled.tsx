// app/modules/guild_communication_disabled/useUserCommunicationDisabled.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: getUserGuildMember
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            report = argFoo;
            tangon = argBar;
            zuuluu = argBaz;
            oscard = null;
            michal = oscard != tangon;
            entity = null;
            if(!michal) { _fun00002_ip = 41; continue _fun00001 }
 20:
            michal = oscard != report;
            entity = null;
            if(!michal) { _fun00002_ip = 41; continue _fun00001 }
 29:
            michal = zuuluu.getMember;
            entity = michal.bind(zuuluu)(tangon, report);
 41:
            return entity;
        }
    };
    var _closure1_slot4 = entity;
    entity = function(argFoo) { // Original name: isCommunicationDisabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = argFoo;
            michal = null;
            zuuluu = michal == tangon;
            report = undefined;
            entity = undefined;
            if(zuuluu) { _fun00004_ip = 22; continue _fun00003 }
 16:
            entity = tangon.communicationDisabledUntil;
 22:
            zuuluu = michal != entity;
            michal = null;
            if(!zuuluu) { _fun00004_ip = 34; continue _fun00003 }
 31:
            michal = entity;
 34:
            entity = new Array(2);
            entity[0] = michal;
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot1;
            michal = 3;
            michal = oscard[michal];
            zuuluu = zuuluu.bind(report)(michal);
            michal = zuuluu.isMemberCommunicationDisabled;
            michal = michal.bind(zuuluu)(tangon);
            entity[1] = michal;
            return entity;
        }
    };
    var _closure1_slot5 = entity;
    tangon = function(argFoo, argBar) { // Original name: useUserCommunicationDisabled
        option = argFoo;
        verify = argBar;
        var _closure2_slot0 = option;
        var _closure2_slot1 = verify;
        zuuluu = _closure1_slot5;
        oscard = _closure1_slot0;
        report = _closure1_slot1;
        michal = 2;
        report = report[michal];
        michal = undefined;
        golfie = oscard.bind(michal)(report);
        oscard = golfie.useStateFromStores;
        tangon = _closure1_slot2;
        report = new Array(1);
        report[0] = tangon;
        tangon = new Array(2);
        tangon[0] = verify;
        tangon[1] = option;
        entity = function() {
            report = _closure1_slot4;
            tangon = _closure2_slot0;
            zuuluu = _closure2_slot1;
            michal = _closure1_slot2;
            entity = undefined;
            entity = report.bind(entity)(tangon, zuuluu, michal);
            return entity;
        };
        entity = oscard.bind(golfie)(report, entity, tangon);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    var _closure1_slot6 = tangon;
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
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_communication_disabled/useUserCommunicationDisabled.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    tangon = function(argFoo) { // Original name: useCurrentUserCommunicationDisabled
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 2;
            entity = tangon[entity];
            tangon = undefined;
            oscard = zuuluu.bind(tangon)(entity);
            report = oscard.useStateFromStores;
            entity = _closure1_slot3;
            zuuluu = new Array(1);
            zuuluu[0] = entity;
            entity = function() {
                michal = _closure1_slot3;
                entity = michal.getCurrentUser;
                entity = entity.bind(michal)();
                return entity;
            };
            entity = report.bind(oscard)(zuuluu, entity);
            zuuluu = _closure1_slot6;
            michal = null;
            report = michal == entity;
            michal = undefined;
            if(report) { _fun00006_ip = 75; continue _fun00005 }
 70:
            michal = entity.id;
 75:
            entity = argFoo;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        }
    };
    zuuluu['useCurrentUserCommunicationDisabled'] = tangon;
    michal = function(argFoo, argBar) { // Original name: userCommunicationDisabled
        zuuluu = _closure1_slot5;
        oscard = _closure1_slot4;
        report = _closure1_slot2;
        michal = undefined;
        tangon = argFoo;
        entity = argBar;
        entity = oscard.bind(michal)(tangon, entity, report);
        entity = zuuluu.bind(michal)(entity);
        return entity;
    };
    zuuluu['userCommunicationDisabled'] = michal;
    return entity;
})();