// app/modules/application_commands/CommandPermissionContext.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    verify = argCorge;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = verify;
    var _closure1_slot2 = golf;
    entity = function(argFoo, argBar, argBaz) { // Original name: computeAllowNsfw
        _fun71221: for(var _fun71221_ip = 0; ; ) switch(_fun71221_ip) {
 0:
            tango = argFoo;
            zulu = argBaz;
            entity = argBar;
            mike = !entity;
            entity = !mike;
            if(mike) { _fun71221_ip = 58; continue _fun71221 }
 18:
            mike = _closure1_slot5;
            report = tango instanceof mike;
            mike = !report;
            if(!report) { _fun71221_ip = 55; continue _fun71221 }
 35:
            oscar = tango.guild_id;
            report = null;
            if(!(report != oscar)) { _fun71221_ip = 52; continue _fun71221 }
 46:
            zulu = tango.nsfw;
 52:
            mike = zulu;
 55:
            entity = mike;
 58:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: computePermissions
        _fun71222: for(var _fun71222_ip = 0; ; ) switch(_fun71222_ip) {
 0:
            golf = argFoo;
            entity = _closure1_slot5;
            entity = golf instanceof entity;
            if(!entity) { _fun71222_ip = 33; continue _fun71222 }
 17:
            entity = golf.isPrivate;
            entity = entity.bind(golf)();
            if(entity) { _fun71222_ip = 293; continue _fun71222 }
 33:
            entity = null;
            if(!(entity != golf)) { _fun71222_ip = 293; continue _fun71222 }
 42:
            zulu = _closure1_slot9;
            entity = zulu.computePermissions;
            report = entity.bind(zulu)(golf);
            zulu = _closure1_slot1;
            entity = _closure1_slot2;
            verify = 11;
            entity = entity[verify];
            options = undefined;
            tango = zulu.bind(options)(entity);
            zulu = tango.has;
            entity = _closure1_slot12;
            entity = entity.ADMINISTRATOR;
            entity = zulu.bind(tango)(report, entity);
            tango = true;
            zulu = true;
            if(entity) { _fun71222_ip = 274; continue _fun71222 }
 110:
            entity = _closure1_slot5;
            golf = golf instanceof entity;
            offset = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            yankee = offset.bind(options)(entity);
            offset = yankee.has;
            entity = _closure1_slot12;
            entity = entity.VIEW_CHANNEL;
            entity = offset.bind(yankee)(report, entity);
            if(golf) { _fun71222_ip = 166; continue _fun71222 }
 159:
            tango = entity;
            zulu = true;
            _fun71222_ip = 274; continue _fun71222;
 166:
            oscar = entity;
            if(!entity) { _fun71222_ip = 210; continue _fun71222 }
 172:
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            offset = golf.bind(options)(entity);
            golf = offset.has;
            entity = _closure1_slot12;
            entity = entity.USE_APPLICATION_COMMANDS;
            oscar = golf.bind(offset)(report, entity);
 210:
            golf = _closure1_slot1;
            entity = _closure1_slot2;
            entity = entity[verify];
            verify = golf.bind(options)(entity);
            options = verify.has;
            golf = _closure1_slot12;
            entity = argBar;
            if(entity) { _fun71222_ip = 256; continue _fun71222 }
 242:
            entity = golf.SEND_MESSAGES;
            entity = options.bind(verify)(report, entity);
            _fun71222_ip = 268; continue _fun71222;
 256:
            golf = golf.SEND_MESSAGES_IN_THREADS;
            entity = options.bind(verify)(report, golf);
 268:
            zulu = entity;
            tango = oscar;
 274:
            entity = {};
            entity['computedPermissions'] = report;
            entity['hasBaseAccessPermissions'] = tango;
            entity['hasSendMessagesPermission'] = zulu;
            return entity;
 293:
            entity = {'computedPermissions': null, 'hasBaseAccessPermissions': true, 'hasSendMessagesPermission': true};
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 11;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.deserialize;
            mike = 0;
            mike = zulu.bind(tango)(mike);
            entity['computedPermissions'] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    mike = function(argFoo) { // Original name: getContextGuildId
        _fun71223: for(var _fun71223_ip = 0; ; ) switch(_fun71223_ip) {
 0:
            mike = argFoo;
            entity = _closure1_slot5;
            entity = mike instanceof entity;
            if(entity) { _fun71223_ip = 24; continue _fun71223 }
 17:
            entity = mike.id;
            _fun71223_ip = 29; continue _fun71223;
 24:
            entity = mike.guild_id;
 29:
            return entity;
        }
    };
    var _closure1_slot15 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = verify.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 1;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.ChannelRecordBase;
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot6 = report;
    report = 4;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot7 = report;
    report = 5;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot8 = report;
    report = 6;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot9 = report;
    report = 7;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot10 = report;
    report = 8;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.ChannelTypes;
    var _closure1_slot11 = options;
    report = report.Permissions;
    var _closure1_slot12 = report;
    report = 13;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/application_commands/CommandPermissionContext.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo, argBar) { // Original name: buildPermissionContext
        _fun71224: for(var _fun71224_ip = 0; ; ) switch(_fun71224_ip) {
 0:
            romeo = argFoo;
            entity = _closure1_slot5;
            entity = romeo instanceof entity;
            oscar = romeo;
            if(!entity) { _fun71224_ip = 68; continue _fun71224 }
 20:
            entity = romeo.isThread;
            entity = entity.bind(romeo)();
            oscar = romeo;
            if(!entity) { _fun71224_ip = 68; continue _fun71224 }
 36:
            tango = _closure1_slot7;
            zulu = tango.getChannel;
            entity = romeo.parent_id;
            entity = zulu.bind(tango)(entity);
            zulu = null;
            oscar = romeo;
            if(!(zulu != entity)) { _fun71224_ip = 68; continue _fun71224 }
 65:
            oscar = entity;
 68:
            entity = null;
            zulu = entity != oscar;
            report = undefined;
            options = undefined;
            if(!zulu) { _fun71224_ip = 90; continue _fun71224 }
 81:
            zulu = _closure1_slot15;
            options = zulu.bind(report)(oscar);
 90:
            tango = _closure1_slot0;
            golf = _closure1_slot2;
            zulu = 9;
            zulu = golf[zulu];
            zulu = tango.bind(report)(zulu);
            tango = zulu.ViewNsfwCommands;
            zulu = tango.getSetting;
            tango = zulu.bind(tango)();
            golf = _closure1_slot6;
            zulu = golf.getId;
            offset = zulu.bind(golf)();
            golf = _closure1_slot10;
            zulu = golf.getCurrentUser;
            zulu = zulu.bind(golf)();
            verify = entity == zulu;
            golf = undefined;
            if(verify) { _fun71224_ip = 168; continue _fun71224 }
 162:
            golf = zulu.nsfwAllowed;
 168:
            zulu = entity != golf;
            if(!zulu) { _fun71224_ip = 178; continue _fun71224 }
 175:
            zulu = golf;
 178:
            if(!(entity != options)) { _fun71224_ip = 217; continue _fun71224 }
 182:
            verify = _closure1_slot8;
            golf = verify.getMember;
            golf = golf.bind(verify)(options, offset);
            yankee = entity == golf;
            verify = undefined;
            if(yankee) { _fun71224_ip = 213; continue _fun71224 }
 207:
            verify = golf.roles;
 213:
            if(!(entity == verify)) { _fun71224_ip = 221; continue _fun71224 }
 217:
            verify = new Array(0);
 221:
            golf = _closure1_slot4;
            entity = golf.isViewingRoles;
            options = entity.bind(golf)(options);
            golf = _closure1_slot14;
            entity = _closure1_slot5;
            entity = romeo instanceof entity;
            if(!entity) { _fun71224_ip = 261; continue _fun71224 }
 251:
            yankee = romeo.isThread;
            entity = yankee.bind(romeo)();
 261:
            golf = golf.bind(report)(oscar, entity);
            entity = {};
            entity['context'] = oscar;
            entity['userId'] = offset;
            entity['roleIds'] = verify;
            entity['isImpersonating'] = options;
            options = argBar;
            entity['commandTypes'] = options;
            options = golf.computedPermissions;
            entity['computedPermissions'] = options;
            options = golf.hasBaseAccessPermissions;
            entity['hasBaseAccessPermissions'] = options;
            golf = golf.hasSendMessagesPermission;
            entity['hasSendMessagesPermission'] = golf;
            mike = _closure1_slot13;
            mike = mike.bind(report)(oscar, zulu, tango);
            entity['allowNsfw'] = mike;
            return entity;
        }
    };
    zulu['buildPermissionContext'] = report;
    report = function(argFoo, argBar) { // Original name: usePermissionContext
        _fun71225: for(var _fun71225_ip = 0; ; ) switch(_fun71225_ip) {
 0:
            report = argFoo;
            romeo = argBar;
            var _closure2_slot0 = report;
            var _closure2_slot1 = romeo;
            golf = _closure1_slot3;
            oscar = golf.useMemo;
            tango = new Array(1);
            tango[0] = report;
            zulu = function() {
                _fun71226: for(var _fun71226_ip = 0; ; ) switch(_fun71226_ip) {
 0:
                    tango = _closure2_slot0;
                    zulu = _closure1_slot5;
                    zulu = tango instanceof zulu;
                    if(!zulu) { _fun71226_ip = 68; continue _fun71226 }
 21:
                    tango = _closure2_slot0;
                    zulu = tango.isThread;
                    zulu = zulu.bind(tango)();
                    if(!zulu) { _fun71226_ip = 68; continue _fun71226 }
 38:
                    tango = _closure1_slot7;
                    zulu = tango.getChannel;
                    entity = _closure2_slot0;
                    entity = entity.parent_id;
                    entity = zulu.bind(tango)(entity);
                    zulu = null;
                    if(!(zulu == entity)) { _fun71226_ip = 72; continue _fun71226 }
 68:
                    entity = _closure2_slot0;
 72:
                    return entity;
                }
            };
            yankee = oscar.bind(golf)(zulu, tango);
            var _closure2_slot2 = yankee;
            zulu = null;
            tango = zulu != yankee;
            offset = undefined;
            zulu = undefined;
            if(!tango) { _fun71225_ip = 75; continue _fun71225 }
 66:
            tango = _closure1_slot15;
            zulu = tango.bind(offset)(yankee);
 75:
            var _closure2_slot3 = zulu;
            tango = _closure1_slot0;
            foxtrot = _closure1_slot2;
            zulu = 9;
            zulu = foxtrot[zulu];
            zulu = tango.bind(offset)(zulu);
            oscar = zulu.ViewNsfwCommands;
            zulu = oscar.useSetting;
            oscar = zulu.bind(oscar)();
            var _closure2_slot4 = oscar;
            zulu = 10;
            golf = foxtrot[zulu];
            backup = tango.bind(offset)(golf);
            verify = backup.useStateFromStores;
            golf = _closure1_slot6;
            options = new Array(1);
            options[0] = golf;
            golf = function() {
                mike = _closure1_slot6;
                entity = mike.getId;
                entity = entity.bind(mike)();
                return entity;
            };
            options = verify.bind(backup)(options, golf);
            var _closure2_slot5 = options;
            golf = foxtrot[zulu];
            kilo = tango.bind(offset)(golf);
            backup = kilo.useStateFromStores;
            golf = _closure1_slot10;
            verify = new Array(1);
            verify[0] = golf;
            golf = function() {
                _fun71228: for(var _fun71228_ip = 0; ; ) switch(_fun71228_ip) {
 0:
                    mike = _closure1_slot10;
                    entity = mike.getCurrentUser;
                    zulu = entity.bind(mike)();
                    entity = null;
                    tango = entity == zulu;
                    mike = undefined;
                    if(tango) { _fun71228_ip = 33; continue _fun71228 }
 27:
                    mike = zulu.nsfwAllowed;
 33:
                    entity = entity != mike;
                    if(!entity) { _fun71228_ip = 43; continue _fun71228 }
 40:
                    entity = mike;
 43:
                    return entity;
                }
            };
            golf = backup.bind(kilo)(verify, golf);
            var _closure2_slot6 = golf;
            verify = foxtrot[zulu];
            sizing = tango.bind(offset)(verify);
            kilo = sizing.useStateFromStoresArray;
            verify = _closure1_slot8;
            backup = new Array(1);
            backup[0] = verify;
            verify = function() {
                _fun71229: for(var _fun71229_ip = 0; ; ) switch(_fun71229_ip) {
 0:
                    zulu = _closure2_slot3;
                    mike = null;
                    if(!(mike != zulu)) { _fun71229_ip = 59; continue _fun71229 }
 13:
                    report = _closure1_slot8;
                    tango = report.getMember;
                    zulu = _closure2_slot3;
                    entity = _closure2_slot5;
                    zulu = tango.bind(report)(zulu, entity);
                    tango = mike == zulu;
                    entity = undefined;
                    if(tango) { _fun71229_ip = 55; continue _fun71229 }
 49:
                    entity = zulu.roles;
 55:
                    if(!(mike == entity)) { _fun71229_ip = 63; continue _fun71229 }
 59:
                    entity = new Array(0);
 63:
                    return entity;
                }
            };
            verify = kilo.bind(sizing)(backup, verify);
            var _closure2_slot7 = verify;
            zulu = foxtrot[zulu];
            foxtrot = tango.bind(offset)(zulu);
            offset = foxtrot.useStateFromStores;
            zulu = _closure1_slot4;
            tango = new Array(1);
            tango[0] = zulu;
            zulu = function() {
                zulu = _closure1_slot4;
                mike = zulu.isViewingRoles;
                entity = _closure2_slot3;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            offset = offset.bind(foxtrot)(tango, zulu);
            var _closure2_slot8 = offset;
            tango = _closure1_slot3;
            zulu = tango.useMemo;
            mike = new Array(8);
            mike[0] = romeo;
            mike[1] = yankee;
            mike[2] = offset;
            mike[3] = verify;
            mike[4] = options;
            mike[5] = golf;
            mike[6] = oscar;
            mike[7] = report;
            entity = function() {
                _fun71231: for(var _fun71231_ip = 0; ; ) switch(_fun71231_ip) {
 0:
                    report = _closure1_slot14;
                    tango = _closure2_slot2;
                    oscar = _closure2_slot0;
                    entity = _closure1_slot5;
                    entity = oscar instanceof entity;
                    if(!entity) { _fun71231_ip = 43; continue _fun71231 }
 29:
                    golf = _closure2_slot0;
                    oscar = golf.isThread;
                    entity = oscar.bind(golf)();
 43:
                    oscar = undefined;
                    entity = report.bind(oscar)(tango, entity);
                    options = entity.computedPermissions;
                    golf = entity.hasBaseAccessPermissions;
                    tango = entity.hasSendMessagesPermission;
                    entity = {};
                    report = _closure2_slot2;
                    entity['context'] = report;
                    verify = _closure2_slot5;
                    entity['userId'] = verify;
                    verify = _closure2_slot7;
                    entity['roleIds'] = verify;
                    verify = _closure2_slot1;
                    entity['commandTypes'] = verify;
                    verify = _closure2_slot8;
                    entity['isImpersonating'] = verify;
                    entity['computedPermissions'] = options;
                    entity['hasBaseAccessPermissions'] = golf;
                    entity['hasSendMessagesPermission'] = tango;
                    tango = _closure1_slot13;
                    zulu = _closure2_slot6;
                    mike = _closure2_slot4;
                    mike = tango.bind(oscar)(report, zulu, mike);
                    entity['allowNsfw'] = mike;
                    return entity;
                }
            };
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        }
    };
    zulu['usePermissionContext'] = report;
    tango = function(argFoo, argBar) { // Original name: computeCommandContextType
        _fun71232: for(var _fun71232_ip = 0; ; ) switch(_fun71232_ip) {
 0:
            oscar = argFoo;
            entity = _closure1_slot5;
            entity = oscar instanceof entity;
            if(!entity) { _fun71232_ip = 39; continue _fun71232 }
 17:
            mike = null;
            tango = mike == oscar;
            report = undefined;
            entity = undefined;
            if(tango) { _fun71232_ip = 35; continue _fun71232 }
 30:
            entity = oscar.guild_id;
 35:
            if(!(mike != entity)) { _fun71232_ip = 78; continue _fun71232 }
 39:
            golf = _closure1_slot0;
            tango = _closure1_slot2;
            entity = 12;
            tango = tango[entity];
            entity = undefined;
            entity = golf.bind(entity)(tango);
            entity = entity.InteractionContextType;
            entity = entity.GUILD;
            _fun71232_ip = 201; continue _fun71232;
 78:
            tango = mike == oscar;
            golf = undefined;
            if(tango) { _fun71232_ip = 92; continue _fun71232 }
 87:
            golf = oscar.type;
 92:
            tango = _closure1_slot11;
            tango = tango.DM;
            if(!(golf === tango)) { _fun71232_ip = 132; continue _fun71232 }
 106:
            mike = mike == oscar;
            tango = undefined;
            if(mike) { _fun71232_ip = 125; continue _fun71232 }
 115:
            mike = oscar.getRecipientId;
            tango = mike.bind(oscar)();
 125:
            mike = argBar;
            if(!(tango !== mike)) { _fun71232_ip = 166; continue _fun71232 }
 132:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            mike = 12;
            mike = oscar[mike];
            mike = tango.bind(report)(mike);
            mike = mike.InteractionContextType;
            mike = mike.PRIVATE_CHANNEL;
            _fun71232_ip = 198; continue _fun71232;
 166:
            tango = _closure1_slot0;
            oscar = _closure1_slot2;
            zulu = 12;
            zulu = oscar[zulu];
            zulu = tango.bind(report)(zulu);
            zulu = zulu.InteractionContextType;
            mike = zulu.BOT_DM;
 198:
            entity = mike;
 201:
            return entity;
        }
    };
    zulu['computeCommandContextType'] = tango;
    zulu['getContextGuildId'] = mike;
    return entity;
})();