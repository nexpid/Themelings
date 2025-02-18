// app/modules/guild_member_verification/GuildJoinRequestUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
    tangon = function(argFoo) { // Original name: isActionedApplicationStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            entity = _closure1_slot1;
            oscard = 0;
            entity = entity[oscard];
            report = undefined;
            entity = tangon.bind(report)(entity);
            entity = entity.GuildJoinRequestApplicationStatuses;
            entity = entity.APPROVED;
            entity = zuuluu === entity;
            if(entity) { _fun00002_ip = 79; continue _fun00001 }
 46:
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            michal = michal[oscard];
            michal = tangon.bind(report)(michal);
            michal = michal.GuildJoinRequestApplicationStatuses;
            michal = michal.REJECTED;
            entity = zuuluu === michal;
 79:
            return entity;
        }
    };
    var _closure1_slot2 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 1;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_member_verification/GuildJoinRequestUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isActionedApplicationStatus'] = tangon;
    tangon = function(argFoo) { // Original name: isSubmittedApplicationStatus
        zuuluu = _closure1_slot0;
        michal = _closure1_slot1;
        entity = 0;
        michal = michal[entity];
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        entity = entity.GuildJoinRequestApplicationStatuses;
        michal = entity.SUBMITTED;
        entity = argFoo;
        entity = entity === michal;
        return entity;
    };
    zuuluu['isSubmittedApplicationStatus'] = tangon;
    tangon = function(argFoo) { // Original name: isApprovedAndAcked
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.applicationStatus;
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            entity = 0;
            tangon = tangon[entity];
            entity = undefined;
            entity = report.bind(entity)(tangon);
            entity = entity.GuildJoinRequestApplicationStatuses;
            entity = entity.APPROVED;
            entity = zuuluu === entity;
            if(!entity) { _fun00004_ip = 64; continue _fun00003 }
 52:
            zuuluu = michal.lastSeen;
            michal = null;
            entity = michal != zuuluu;
 64:
            return entity;
        }
    };
    zuuluu['isApprovedAndAcked'] = tangon;
    michal = function(argFoo) { // Original name: isActionedAndNotAcked
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            tangon = _closure1_slot2;
            zuuluu = michal.applicationStatus;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu);
            if(!entity) { _fun00006_ip = 38; continue _fun00005 }
 26:
            zuuluu = michal.lastSeen;
            michal = null;
            entity = michal == zuuluu;
 38:
            return entity;
        }
    };
    zuuluu['isActionedAndNotAcked'] = michal;
    return entity;
})();