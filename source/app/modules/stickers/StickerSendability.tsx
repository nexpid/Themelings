// app/modules/stickers/StickerSendability.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = options;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    oscar = 0;
    tango = options[oscar];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot4 = tango;
    report = {};
    report['SENDABLE'] = oscar;
    tango = 'SENDABLE';
    report[oscar] = tango;
    oscar = 1;
    report['SENDABLE_WITH_PREMIUM'] = oscar;
    tango = 'SENDABLE_WITH_PREMIUM';
    report[oscar] = tango;
    oscar = 2;
    report['NONSENDABLE'] = oscar;
    tango = 'NONSENDABLE';
    report[oscar] = tango;
    oscar = 3;
    report['SENDABLE_WITH_BOOSTED_GUILD'] = oscar;
    tango = 'SENDABLE_WITH_BOOSTED_GUILD';
    report[oscar] = tango;
    var _closure1_slot5 = report;
    tango = function(argFoo, argBar, argBaz) { // Original name: getStickerSendability
        _fun65442: for(var _fun65442_ip = 0; ; ) switch(_fun65442_ip) {
 0:
            tango = argFoo;
            verify = argBar;
            options = argBaz;
            oscar = null;
            if(!(oscar != verify)) { _fun65442_ip = 333; continue _fun65442 }
 18:
            report = _closure1_slot1;
            entity = _closure1_slot3;
            zulu = 1;
            zulu = entity[zulu];
            golf = undefined;
            report = report.bind(golf)(zulu);
            zulu = report.canUseCustomStickersEverywhere;
            report = zulu.bind(report)(verify);
            zulu = _closure1_slot0;
            offset = 2;
            entity = entity[offset];
            zulu = zulu.bind(golf)(entity);
            entity = zulu.isStandardSticker;
            entity = entity.bind(zulu)(tango);
            if(entity) { _fun65442_ip = 321; continue _fun65442 }
 87:
            zulu = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[offset];
            zulu = zulu.bind(golf)(entity);
            entity = zulu.isGuildSticker;
            entity = entity.bind(zulu)(tango);
            if(!entity) { _fun65442_ip = 122; continue _fun65442 }
 118:
            if(!(oscar == options)) { _fun65442_ip = 137; continue _fun65442 }
 122:
            entity = _closure1_slot5;
            entity = entity.NONSENDABLE;
            _fun65442_ip = 319; continue _fun65442;
 137:
            zulu = tango.available;
            if(zulu) { _fun65442_ip = 161; continue _fun65442 }
 146:
            zulu = _closure1_slot5;
            zulu = zulu.SENDABLE_WITH_BOOSTED_GUILD;
            _fun65442_ip = 316; continue _fun65442;
 161:
            offset = options.guild_id;
            if(!(oscar != offset)) { _fun65442_ip = 197; continue _fun65442 }
 170:
            yankee = options.guild_id;
            offset = '';
            if(!(offset !== yankee)) { _fun65442_ip = 197; continue _fun65442 }
 183:
            offset = options.guild_id;
            tango = tango.guild_id;
            if(!(offset !== tango)) { _fun65442_ip = 303; continue _fun65442 }
 197:
            tango = options.guild_id;
            if(!(oscar != tango)) { _fun65442_ip = 277; continue _fun65442 }
 206:
            oscar = _closure1_slot2;
            offset = _closure1_slot3;
            tango = 3;
            tango = offset[tango];
            golf = oscar.bind(golf)(tango);
            oscar = golf.can;
            tango = {};
            offset = _closure1_slot4;
            offset = offset.USE_EXTERNAL_STICKERS;
            tango['permission'] = offset;
            tango['user'] = verify;
            tango['context'] = options;
            tango = oscar.bind(golf)(tango);
            if(tango) { _fun65442_ip = 277; continue _fun65442 }
 265:
            tango = _closure1_slot5;
            tango = tango.NONSENDABLE;
            _fun65442_ip = 301; continue _fun65442;
 277:
            oscar = _closure1_slot5;
            if(report) { _fun65442_ip = 292; continue _fun65442 }
 284:
            report = oscar.SENDABLE_WITH_PREMIUM;
            _fun65442_ip = 298; continue _fun65442;
 292:
            report = oscar.SENDABLE;
 298:
            tango = report;
 301:
            _fun65442_ip = 313; continue _fun65442;
 303:
            report = _closure1_slot5;
            tango = report.SENDABLE;
 313:
            zulu = tango;
 316:
            entity = zulu;
 319:
            _fun65442_ip = 331; continue _fun65442;
 321:
            mike = _closure1_slot5;
            entity = mike.SENDABLE;
 331:
            return entity;
 333:
            entity = _closure1_slot5;
            entity = entity.NONSENDABLE;
            return entity;
        }
    };
    var _closure1_slot6 = tango;
    oscar = 4;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/stickers/StickerSendability.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['StickerSendability'] = report;
    zulu['getStickerSendability'] = tango;
    mike = function(argFoo, argBar, argBaz) {
        oscar = _closure1_slot6;
        report = undefined;
        tango = argFoo;
        zulu = argBar;
        mike = argBaz;
        mike = oscar.bind(report)(tango, zulu, mike);
        entity = _closure1_slot5;
        entity = entity.SENDABLE;
        entity = mike === entity;
        return entity;
    };
    zulu['isSendableSticker'] = mike;
    return entity;
})();