// app/modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Permissions;
    var _closure1_slot8 = golf;
    tango = tango.SystemChannelFlags;
    var _closure1_slot9 = tango;
    tango = 10;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/messages/native/renderer/system_messages/useIsStickerReplyEnabled.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: useIsStickerReplyEnabled
        _fun72337: for(var _fun72337_ip = 0; ; ) switch(_fun72337_ip) {
 0:
            zulu = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot1;
            yankee = 8;
            entity = mike[yankee];
            offset = undefined;
            romeo = report.bind(offset)(entity);
            verify = romeo.useStateFromStores;
            entity = _closure1_slot2;
            options = new Array(1);
            options[0] = entity;
            tango = function() {
                mike = _closure1_slot2;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            entity = new Array(0);
            tango = verify.bind(romeo)(options, tango, entity);
            var _closure2_slot0 = tango;
            entity = zulu.getChannelId;
            entity = entity.bind(zulu)();
            var _closure2_slot1 = entity;
            mike = mike[yankee];
            verify = report.bind(offset)(mike);
            options = verify.useStateFromStores;
            mike = _closure1_slot3;
            report = new Array(1);
            report[0] = mike;
            mike = new Array(1);
            mike[0] = entity;
            entity = function() {
                zulu = _closure1_slot3;
                mike = zulu.getChannel;
                entity = _closure2_slot1;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            entity = options.bind(verify)(report, entity, mike);
            var _closure2_slot2 = entity;
            mike = null;
            report = mike == entity;
            foxtrot = undefined;
            if(report) { _fun72337_ip = 156; continue _fun72337 }
 146:
            report = entity.getGuildId;
            foxtrot = report.bind(entity)();
 156:
            var _closure2_slot3 = foxtrot;
            verify = _closure1_slot0;
            options = _closure1_slot1;
            report = options[yankee];
            kilo = verify.bind(offset)(report);
            backup = kilo.useStateFromStores;
            report = _closure1_slot4;
            romeo = new Array(1);
            romeo[0] = report;
            report = new Array(2);
            report[0] = tango;
            report[1] = foxtrot;
            tango = function() {
                _fun72340: for(var _fun72340_ip = 0; ; ) switch(_fun72340_ip) {
 0:
                    entity = _closure2_slot3;
                    mike = null;
                    entity = mike != entity;
                    if(!entity) { _fun72340_ip = 61; continue _fun72340 }
 16:
                    oscar = _closure1_slot4;
                    report = oscar.getMember;
                    tango = _closure2_slot3;
                    zulu = _closure2_slot0;
                    zulu = report.bind(oscar)(tango, zulu);
                    tango = mike == zulu;
                    mike = undefined;
                    if(tango) { _fun72340_ip = 58; continue _fun72340 }
 52:
                    mike = zulu.isPending;
 58:
                    entity = mike;
 61:
                    return entity;
                }
            };
            tango = backup.bind(kilo)(romeo, tango, report);
            report = options[yankee];
            kilo = verify.bind(offset)(report);
            backup = kilo.useStateFromStoresObject;
            report = _closure1_slot6;
            romeo = new Array(1);
            romeo[0] = report;
            report = new Array(1);
            report[0] = entity;
            entity = function() {
                _fun72341: for(var _fun72341_ip = 0; ; ) switch(_fun72341_ip) {
 0:
                    entity = {};
                    tango = _closure2_slot2;
                    zulu = null;
                    zulu = zulu != tango;
                    if(!zulu) { _fun72341_ip = 58; continue _fun72341 }
 18:
                    oscar = _closure1_slot0;
                    report = _closure1_slot1;
                    tango = 7;
                    report = report[tango];
                    tango = undefined;
                    oscar = oscar.bind(tango)(report);
                    report = oscar.computeIsReadOnlyThread;
                    tango = _closure2_slot2;
                    zulu = report.bind(oscar)(tango);
 58:
                    entity['isReadOnlyThread'] = zulu;
                    report = _closure1_slot6;
                    tango = report.can;
                    zulu = _closure1_slot8;
                    zulu = zulu.SEND_MESSAGES;
                    mike = _closure2_slot2;
                    mike = tango.bind(report)(zulu, mike);
                    entity['canSendMessages'] = mike;
                    return entity;
                }
            };
            entity = backup.bind(kilo)(romeo, entity, report);
            report = entity.isReadOnlyThread;
            entity = entity.canSendMessages;
            options = options[yankee];
            romeo = verify.bind(offset)(options);
            yankee = romeo.useStateFromStores;
            options = _closure1_slot5;
            verify = new Array(1);
            verify[0] = options;
            options = new Array(1);
            options[0] = foxtrot;
            golf = function() {
                zulu = _closure1_slot5;
                mike = zulu.getGuild;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = yankee.bind(romeo)(verify, golf, options);
            mike = mike != golf;
            if(!mike) { _fun72337_ip = 387; continue _fun72337 }
 336:
            verify = _closure1_slot0;
            yankee = _closure1_slot1;
            options = 9;
            options = yankee[options];
            verify = verify.bind(offset)(options);
            options = verify.hasFlag;
            golf = golf.systemChannelFlags;
            oscar = _closure1_slot9;
            oscar = oscar.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
            oscar = options.bind(verify)(golf, oscar);
            mike = !oscar;
 387:
            zulu = zulu.author;
            zulu = zulu.bot;
            if(!entity) { _fun72337_ip = 405; continue _fun72337 }
 402:
            entity = !report;
 405:
            if(!entity) { _fun72337_ip = 411; continue _fun72337 }
 408:
            entity = !tango;
 411:
            if(!entity) { _fun72337_ip = 417; continue _fun72337 }
 414:
            entity = !zulu;
 417:
            if(!entity) { _fun72337_ip = 423; continue _fun72337 }
 420:
            entity = mike;
 423:
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar, argBaz, argCorge) { // Original name: computeIsStickerReplyEnabled
        _fun72343: for(var _fun72343_ip = 0; ; ) switch(_fun72343_ip) {
 0:
            golf = argBar;
            mike = argCorge;
            tango = _closure1_slot7;
            zulu = tango.getCurrentUser;
            report = zulu.bind(tango)();
            zulu = null;
            tango = zulu != report;
            if(!tango) { _fun72343_ip = 73; continue _fun72343 }
 31:
            verify = _closure1_slot4;
            options = verify.getMember;
            oscar = report.id;
            report = argFoo;
            report = options.bind(verify)(report, oscar);
            oscar = zulu == report;
            zulu = undefined;
            if(oscar) { _fun72343_ip = 70; continue _fun72343 }
 64:
            zulu = report.isPending;
 70:
            tango = zulu;
 73:
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            zulu = 7;
            report = report[zulu];
            zulu = undefined;
            report = oscar.bind(zulu)(report);
            zulu = report.computeIsReadOnlyThread;
            report = zulu.bind(report)(golf);
            oscar = _closure1_slot6;
            zulu = oscar.can;
            entity = _closure1_slot8;
            entity = entity.SEND_MESSAGES;
            entity = zulu.bind(oscar)(entity, golf);
            zulu = argBaz;
            zulu = zulu.author;
            zulu = zulu.bot;
            if(!entity) { _fun72343_ip = 153; continue _fun72343 }
 150:
            entity = !report;
 153:
            if(!entity) { _fun72343_ip = 159; continue _fun72343 }
 156:
            entity = !tango;
 159:
            if(!entity) { _fun72343_ip = 165; continue _fun72343 }
 162:
            entity = !zulu;
 165:
            if(!entity) { _fun72343_ip = 171; continue _fun72343 }
 168:
            entity = mike;
 171:
            return entity;
        }
    };
    zulu['computeIsStickerReplyEnabled'] = mike;
    return entity;
})();