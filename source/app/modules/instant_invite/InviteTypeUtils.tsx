// app/modules/instant_invite/InviteTypeUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    options = argBar;
    zulu = argFred;
    verify = argPlugh;
    report = function(argFoo) { // Original name: isGroupDMInvite
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            entity = _closure1_slot3;
            entity = entity.GROUP_DM;
            entity = mike === entity;
            if(entity) { _fun00002_ip = 66; continue _fun00001 }
 28:
            report = zulu.channel;
            mike = null;
            mike = mike != report;
            if(!mike) { _fun00002_ip = 63; continue _fun00001 }
 42:
            report = _closure1_slot1;
            zulu = zulu.channel;
            tango = zulu.type;
            zulu = undefined;
            mike = report.bind(zulu)(tango);
 63:
            entity = mike;
 66:
            return entity;
        }
    };
    var _closure1_slot4 = report;
    tango = function(argFoo) { // Original name: isFriendInvite
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argFoo;
            mike = zulu.type;
            entity = _closure1_slot3;
            entity = entity.FRIEND;
            entity = mike === entity;
            if(entity) { _fun00004_ip = 55; continue _fun00003 }
 28:
            mike = zulu.guild;
            tango = null;
            mike = tango == mike;
            if(!mike) { _fun00004_ip = 52; continue _fun00003 }
 42:
            zulu = zulu.inviter;
            mike = tango != zulu;
 52:
            entity = mike;
 55:
            return entity;
        }
    };
    var _closure1_slot5 = tango;
    entity = global;
    offset = entity.Object;
    golf = offset.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(offset)(zulu, entity, oscar);
    entity = 0;
    oscar = verify[entity];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    oscar = oscar.isEventUpcoming;
    var _closure1_slot0 = oscar;
    oscar = 1;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.isMultiUserDM;
    var _closure1_slot1 = oscar;
    oscar = 2;
    golf = verify[oscar];
    golf = options.bind(entity)(golf);
    offset = golf.InviteTargetTypes;
    var _closure1_slot2 = offset;
    golf = golf.InviteTypes;
    var _closure1_slot3 = golf;
    oscar = verify[oscar];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.InviteTypes;
    golf = 3;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/instant_invite/InviteTypeUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['InviteTypes'] = oscar;
    zulu['isGroupDMInvite'] = report;
    report = function(argFoo) { // Original name: isGuildScheduledEventInviteEmbed
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            entity = argFoo;
            tango = entity.guild_scheduled_event;
            entity = null;
            entity = entity != tango;
            if(!entity) { _fun00006_ip = 32; continue _fun00005 }
 18:
            zulu = _closure1_slot0;
            mike = undefined;
            entity = zulu.bind(mike)(tango);
 32:
            return entity;
        }
    };
    zulu['isGuildScheduledEventInviteEmbed'] = report;
    report = function(argFoo) { // Original name: isRoleSubscriptionInvite
        entity = argFoo;
        mike = entity.target_type;
        entity = _closure1_slot2;
        entity = entity.ROLE_SUBSCRIPTIONS_PURCHASE;
        entity = mike === entity;
        return entity;
    };
    zulu['isRoleSubscriptionInvite'] = report;
    report = function(argFoo) { // Original name: isStageInviteEmbed
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = argFoo;
            entity = mike.channel;
            zulu = null;
            entity = zulu != entity;
            if(!entity) { _fun00008_ip = 27; continue _fun00007 }
 17:
            mike = mike.stage_instance;
            entity = zulu != mike;
 27:
            return entity;
        }
    };
    zulu['isStageInviteEmbed'] = report;
    report = function(argFoo) { // Original name: isStreamInvite
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            mike = argFoo;
            zulu = mike.target_type;
            entity = _closure1_slot2;
            entity = entity.STREAM;
            entity = zulu === entity;
            if(!entity) { _fun00010_ip = 41; continue _fun00009 }
 29:
            zulu = mike.target_user;
            mike = null;
            entity = mike != zulu;
 41:
            return entity;
        }
    };
    zulu['isStreamInvite'] = report;
    zulu['isFriendInvite'] = tango;
    tango = function(argFoo) { // Original name: isEmbeddedApplicationInvite
        entity = argFoo;
        mike = entity.target_type;
        entity = _closure1_slot2;
        entity = entity.EMBEDDED_APPLICATION;
        entity = mike === entity;
        return entity;
    };
    zulu['isEmbeddedApplicationInvite'] = tango;
    mike = function(argFoo) { // Original name: getInviteType
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            entity = mike.type;
            zulu = 'number';
            entity = typeof entity;
            if(!(zulu !== entity)) { _fun00012_ip = 80; continue _fun00011 }
 19:
            entity = _closure1_slot4;
            tango = undefined;
            entity = entity.bind(tango)(mike);
            if(entity) { _fun00012_ip = 68; continue _fun00011 }
 36:
            entity = _closure1_slot5;
            entity = entity.bind(tango)(mike);
            tango = _closure1_slot3;
            if(entity) { _fun00012_ip = 60; continue _fun00011 }
 52:
            entity = tango.GUILD;
            _fun00012_ip = 66; continue _fun00011;
 60:
            entity = tango.FRIEND;
 66:
            _fun00012_ip = 78; continue _fun00011;
 68:
            zulu = _closure1_slot3;
            entity = zulu.GROUP_DM;
 78:
            _fun00012_ip = 85; continue _fun00011;
 80:
            entity = mike.type;
 85:
            return entity;
        }
    };
    zulu['getInviteType'] = mike;
    return entity;
})();