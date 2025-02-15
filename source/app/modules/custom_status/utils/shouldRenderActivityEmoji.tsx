// app/modules/custom_status/utils/shouldRenderActivityEmoji.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = golf;
    entity = argCorge;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.isGuildTextChannelType;
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.ActivityTypes;
    var _closure1_slot5 = golf;
    tango = tango.Permissions;
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/custom_status/utils/shouldRenderActivityEmoji.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: shouldRenderActivityEmoji
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = mike.activity;
            oscar = mike.user;
            report = mike.channel;
            mike = null;
            if(!(mike != oscar)) { _fun00002_ip = 251; continue _fun00001 }
 28:
            zulu = mike == entity;
            tango = undefined;
            options = undefined;
            if(zulu) { _fun00002_ip = 44; continue _fun00001 }
 39:
            options = entity.type;
 44:
            zulu = _closure1_slot5;
            zulu = zulu.CUSTOM_STATUS;
            if(!(options === zulu)) { _fun00002_ip = 251; continue _fun00001 }
 64:
            zulu = entity.emoji;
            if(!(mike != zulu)) { _fun00002_ip = 251; continue _fun00001 }
 77:
            entity = entity.emoji;
            zulu = entity.id;
            if(!(mike != zulu)) { _fun00002_ip = 247; continue _fun00001 }
 95:
            if(!(mike != report)) { _fun00002_ip = 247; continue _fun00001 }
 102:
            zulu = _closure1_slot4;
            mike = report.type;
            mike = zulu.bind(tango)(mike);
            if(!mike) { _fun00002_ip = 247; continue _fun00001 }
 122:
            zulu = _closure1_slot3;
            mike = zulu.getUsableCustomEmojiById;
            entity = entity.id;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot0;
            options = _closure1_slot2;
            entity = 3;
            entity = options[entity];
            zulu = mike.bind(tango)(entity);
            mike = zulu.isInternalEmojiForGuildId;
            entity = report.getGuildId;
            entity = entity.bind(report)();
            entity = mike.bind(zulu)(verify, entity);
            zulu = _closure1_slot1;
            mike = 4;
            mike = options[mike];
            tango = zulu.bind(tango)(mike);
            zulu = tango.can;
            mike = {};
            golf = _closure1_slot6;
            golf = golf.USE_EXTERNAL_EMOJIS;
            mike['permission'] = golf;
            mike['user'] = oscar;
            mike['context'] = report;
            mike = zulu.bind(tango)(mike);
            entity = !entity;
            if(entity) { _fun00002_ip = 245; continue _fun00001 }
 242:
            entity = mike;
 245:
            return entity;
 247:
            entity = true;
            return entity;
 251:
            entity = false;
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();