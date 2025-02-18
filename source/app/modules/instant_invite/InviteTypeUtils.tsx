// app/modules/instant_invite/InviteTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    option = argBar;
    zuuluu = argFre;
    verify = argPlu;
    report = function(argFoo) { // Original name: isGroupDMInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.type;
            entity = _closure1_slot3;
            entity = entity.GROUP_DM;
            entity = michal === entity;
            if(entity) { _fun00002_ip = 66; continue _fun00001 }
 28:
            report = zuuluu.channel;
            michal = null;
            michal = michal != report;
            if(!michal) { _fun00002_ip = 63; continue _fun00001 }
 42:
            report = _closure1_slot1;
            zuuluu = zuuluu.channel;
            tangon = zuuluu.type;
            zuuluu = undefined;
            michal = report.bind(zuuluu)(tangon);
 63:
            entity = michal;
 66:
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tangon = function(argFoo) { // Original name: isFriendInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            michal = zuuluu.type;
            entity = _closure1_slot3;
            entity = entity.FRIEND;
            entity = michal === entity;
            if(entity) { _fun00004_ip = 55; continue _fun00003 }
 28:
            michal = zuuluu.guild;
            tangon = null;
            michal = tangon == michal;
            if(!michal) { _fun00004_ip = 52; continue _fun00003 }
 42:
            zuuluu = zuuluu.inviter;
            michal = tangon != zuuluu;
 52:
            entity = michal;
 55:
            return entity;
        }
    };
    var _closure1_slot5 = tangon;
    entity = global;
    offset = entity.Object;
    golfie = offset.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(offset)(zuuluu, entity, oscard);
    entity = 0;
    oscard = verify[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    oscard = oscard.isEventUpcoming;
    var _closure1_slot0 = oscard;
    oscard = 1;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.isMultiUserDM;
    var _closure1_slot1 = oscard;
    oscard = 2;
    golfie = verify[oscard];
    golfie = option.bind(entity)(golfie);
    offset = golfie.InviteTargetTypes;
    var _closure1_slot2 = offset;
    golfie = golfie.InviteTypes;
    var _closure1_slot3 = golfie;
    oscard = verify[oscard];
    oscard = option.bind(entity)(oscard);
    oscard = oscard.InviteTypes;
    golfie = 3;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/instant_invite/InviteTypeUtils.tsx';
    golfie = option.bind(verify)(golfie);
    zuuluu['InviteTypes'] = oscard;
    zuuluu['isGroupDMInvite'] = report;
    report = function(argFoo) { // Original name: isGuildScheduledEventInviteEmbed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tangon = entity.guild_scheduled_event;
            entity = null;
            entity = entity != tangon;
            if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 18:
            zuuluu = _closure1_slot0;
            michal = undefined;
            entity = zuuluu.bind(michal)(tangon);
 32:
            return entity;
        }
    };
    zuuluu['isGuildScheduledEventInviteEmbed'] = report;
    report = function(argFoo) { // Original name: isRoleSubscriptionInvite
        entity = argFoo;
        michal = entity.target_type;
        entity = _closure1_slot2;
        entity = entity.ROLE_SUBSCRIPTIONS_PURCHASE;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isRoleSubscriptionInvite'] = report;
    report = function(argFoo) { // Original name: isStageInviteEmbed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = michal.channel;
            zuuluu = null;
            entity = zuuluu != entity;
            if(!entity) { _fun00008_ip = 27; continue _fun00007 }
 17:
            michal = michal.stage_instance;
            entity = zuuluu != michal;
 27:
            return entity;
        }
    };
    zuuluu['isStageInviteEmbed'] = report;
    report = function(argFoo) { // Original name: isStreamInvite
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.target_type;
            entity = _closure1_slot2;
            entity = entity.STREAM;
            entity = zuuluu === entity;
            if(!entity) { _fun00010_ip = 41; continue _fun00009 }
 29:
            zuuluu = michal.target_user;
            michal = null;
            entity = michal != zuuluu;
 41:
            return entity;
        }
    };
    zuuluu['isStreamInvite'] = report;
    zuuluu['isFriendInvite'] = tangon;
    tangon = function(argFoo) { // Original name: isEmbeddedApplicationInvite
        entity = argFoo;
        michal = entity.target_type;
        entity = _closure1_slot2;
        entity = entity.EMBEDDED_APPLICATION;
        entity = michal === entity;
        return entity;
    };
    zuuluu['isEmbeddedApplicationInvite'] = tangon;
    michal = function(argFoo) { // Original name: getInviteType
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            entity = michal.type;
            zuuluu = 'number';
            entity = typeof entity;
            if(!(zuuluu !== entity)) { _fun00012_ip = 80; continue _fun00011 }
 19:
            entity = _closure1_slot4;
            tangon = undefined;
            entity = entity.bind(tangon)(michal);
            if(entity) { _fun00012_ip = 68; continue _fun00011 }
 36:
            entity = _closure1_slot5;
            entity = entity.bind(tangon)(michal);
            tangon = _closure1_slot3;
            if(entity) { _fun00012_ip = 60; continue _fun00011 }
 52:
            entity = tangon.GUILD;
            _fun00012_ip = 66; continue _fun00011;
 60:
            entity = tangon.FRIEND;
 66:
            _fun00012_ip = 78; continue _fun00011;
 68:
            zuuluu = _closure1_slot3;
            entity = zuuluu.GROUP_DM;
 78:
            _fun00012_ip = 85; continue _fun00011;
 80:
            entity = michal.type;
 85:
            return entity;
        }
    };
    zuuluu['getInviteType'] = michal;
    return entity;
})();