// app/modules/messages/isMessagePinnable.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
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
    tango = tango.ChannelTypes;
    var _closure1_slot3 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/isMessagePinnable.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo, argBar, argBaz) { // Original name: isMessagePinnable
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argBar;
            zulu = argBaz;
            entity = mike.isSystemDM;
            entity = entity.bind(mike)();
            entity = !entity;
            if(!entity) { _fun00002_ip = 58; continue _fun00001 }
 22:
            report = _closure1_slot1;
            oscar = _closure1_slot2;
            tango = 1;
            tango = oscar[tango];
            oscar = undefined;
            report = report.bind(oscar)(tango);
            tango = argFoo;
            tango = report.bind(oscar)(tango);
            entity = !tango;
 58:
            if(!entity) { _fun00002_ip = 77; continue _fun00001 }
 61:
            if(zulu) { _fun00002_ip = 74; continue _fun00001 }
 64:
            tango = mike.isPrivate;
            zulu = tango.bind(mike)();
 74:
            entity = zulu;
 77:
            if(!entity) { _fun00002_ip = 116; continue _fun00001 }
 80:
            report = _closure1_slot0;
            tango = _closure1_slot2;
            zulu = 2;
            tango = tango[zulu];
            zulu = undefined;
            tango = report.bind(zulu)(tango);
            zulu = tango.getIsActiveChannelOrUnarchivableThread;
            entity = zulu.bind(tango)(mike);
 116:
            if(!entity) { _fun00002_ip = 141; continue _fun00001 }
 119:
            tango = mike.type;
            zulu = _closure1_slot3;
            zulu = zulu.GUILD_VOICE;
            entity = tango !== zulu;
 141:
            if(!entity) { _fun00002_ip = 166; continue _fun00001 }
 144:
            zulu = mike.type;
            mike = _closure1_slot3;
            mike = mike.GUILD_STAGE_VOICE;
            entity = zulu !== mike;
 166:
            return entity;
        }
    };
    zulu['default'] = mike;
    return entity;
})();