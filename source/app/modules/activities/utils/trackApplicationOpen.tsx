// app/modules/activities/utils/trackApplicationOpen.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot2 = tango;
    tango = 2;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/activities/utils/trackApplicationOpen.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: trackApplicationOpen
        _fun73592: for(var _fun73592_ip = 0; ; ) switch(_fun73592_ip) {
 0:
            entity = argFoo;
            result = entity.type;
            output = entity.source;
            yankee = entity.userId;
            sizing = entity.guildId;
            kilo = entity.channelId;
            backup = entity.channelType;
            romeo = entity.applicationId;
            foxtrot = entity.partyId;
            offset = entity.messageId;
            verify = entity.locationObject;
            options = entity.analyticsLocations;
            golf = entity.referrerId;
            oscar = entity.inviterUserId;
            tango = _closure1_slot0;
            zulu = _closure1_slot1;
            entity = 1;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.track;
            mike = _closure1_slot2;
            zulu = mike.APPLICATION_OPENED;
            mike = {};
            mike['type'] = result;
            mike['source'] = output;
            mike['guild_id'] = sizing;
            mike['channel_id'] = kilo;
            mike['channel_type'] = backup;
            mike['application_id'] = romeo;
            romeo = null;
            backup = romeo != foxtrot;
            romeo = undefined;
            if(!backup) { _fun73592_ip = 156; continue _fun73592 }
 153:
            romeo = foxtrot;
 156:
            mike['party_id'] = romeo;
            mike['other_user_id'] = yankee;
            mike['message_id'] = offset;
            mike['location'] = verify;
            mike['location_stack'] = options;
            mike['referrer_id'] = golf;
            mike['invite_inviter_id'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();