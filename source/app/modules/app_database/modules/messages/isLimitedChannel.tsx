// app/modules/app_database/modules/messages/isLimitedChannel.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    golf = argBar;
    oscar = argBaz;
    zulu = argFred;
    options = argPlugh;
    tango = function(argFoo) { // Original name: isLimitedChannel
        _fun59063: for(var _fun59063_ip = 0; ; ) switch(_fun59063_ip) {
 0:
            tango = argFoo;
            oscar = _closure1_slot1;
            report = oscar.getMemberCount;
            entity = null;
            golf = entity == tango;
            zulu = undefined;
            if(golf) { _fun59063_ip = 32; continue _fun59063 }
 27:
            zulu = tango.guild_id;
 32:
            report = report.bind(oscar)(zulu);
            oscar = entity != report;
            zulu = 0;
            if(!oscar) { _fun59063_ip = 49; continue _fun59063 }
 46:
            zulu = report;
 49:
            entity = entity != tango;
            if(!entity) { _fun59063_ip = 75; continue _fun59063 }
 56:
            oscar = tango.type;
            report = _closure1_slot2;
            report = report.DM;
            entity = oscar !== report;
 75:
            if(!entity) { _fun59063_ip = 97; continue _fun59063 }
 78:
            report = tango.type;
            tango = _closure1_slot2;
            tango = tango.GROUP_DM;
            entity = report !== tango;
 97:
            if(!entity) { _fun59063_ip = 108; continue _fun59063 }
 100:
            mike = _closure1_slot3;
            entity = zulu >= mike;
 108:
            return entity;
        }
    };
    var _closure1_slot4 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = options[entity];
    entity = undefined;
    report = oscar.bind(entity)(report);
    var _closure1_slot0 = report;
    report = 1;
    report = options[report];
    report = oscar.bind(entity)(report);
    var _closure1_slot1 = report;
    report = 2;
    report = options[report];
    report = golf.bind(entity)(report);
    report = report.ChannelTypes;
    var _closure1_slot2 = report;
    report = 10000;
    var _closure1_slot3 = report;
    oscar = 3;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/app_database/modules/messages/isLimitedChannel.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['LIMITED_GUILD_MEMBER_THRESHOLD'] = report;
    zulu['isLimitedChannel'] = tango;
    mike = function(argFoo) { // Original name: isLimitedChannelId
        _fun59064: for(var _fun59064_ip = 0; ; ) switch(_fun59064_ip) {
 0:
            report = argFoo;
            zulu = _closure1_slot4;
            tango = _closure1_slot0;
            mike = tango.getBasicChannel;
            entity = null;
            oscar = entity != report;
            entity = '_';
            if(!oscar) { _fun59064_ip = 36; continue _fun59064 }
 33:
            entity = report;
 36:
            mike = mike.bind(tango)(entity);
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            return entity;
        }
    };
    zulu['isLimitedChannelId'] = mike;
    return entity;
})();