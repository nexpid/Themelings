// app/modules/application_commands/CommandPermissionUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    options = argBar;
    golf = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = golf;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = verify;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun71487: for(var _fun71487_ip = 0; ; ) switch(_fun71487_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun71487_ip = 46; continue _fun71487 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun71487_ip = 55; continue _fun71487 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun71487_ip = 345; continue _fun71487 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun71487_ip = 323; continue _fun71487 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun71487_ip = 283; continue _fun71487 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun71487_ip = 270; continue _fun71487 }
 110:
            golf = {};
            verify = golf.toString;
            golf = verify.call;
            yankee = golf.bind(verify)(zulu);
            offset = yankee.slice;
            verify = 8;
            golf = -1;
            verify = offset.bind(yankee)(verify, golf);
            golf = 'Object';
            golf = golf === verify;
            if(!golf) { _fun71487_ip = 163; continue _fun71487 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun71487_ip = 179; continue _fun71487 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun71487_ip = 249; continue _fun71487 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun71487_ip = 249; continue _fun71487 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun71487_ip = 234; continue _fun71487 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun71487_ip = 247; continue _fun71487 }
 234:
            verify = _closure1_slot10;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun71487_ip = 265; continue _fun71487;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun71487_ip = 283; continue _fun71487;
 270:
            golf = _closure1_slot10;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun71487_ip = 323; continue _fun71487 }
 289:
            golf = report.TypeError;
            report = golf.prototype;
            oscar = Object.create(report, {constructor: {value: golf}});
            foxtrot = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscar;
            report = new backup[golf](foxtrot, romeo);
            report = report instanceof Object ? report : oscar;
            throw report;
 323:
            if(!tango) { _fun71487_ip = 330; continue _fun71487 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun71488: for(var _fun71488_ip = 0; ; ) switch(_fun71488_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun71488_ip = 56; continue _fun71488 }
 20:
                    entity = {};
                    mike = false;
                    entity['done'] = mike;
                    zulu = _closure2_slot0;
                    mike = _closure2_slot1;
                    mike = parseFloat(mike);
                    tango = mike + 1;
                    _closure2_slot1 = tango;
                    mike = zulu[mike];
                    entity['value'] = mike;
                    _fun71488_ip = 67; continue _fun71488;
 56:
                    mike = {};
                    zulu = true;
                    mike['done'] = zulu;
                    entity = mike;
 67:
                    return entity;
                }
            };
            return entity;
 345:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun71489: for(var _fun71489_ip = 0; ; ) switch(_fun71489_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun71489_ip = 23; continue _fun71489 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun71489_ip = 33; continue _fun71489 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun71489_ip = 70; continue _fun71489 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun71489_ip = 55; continue _fun71489 }
 70:
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: isExplicitAllow
        mike = true;
        entity = argFoo;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: isExplicitDeny
        mike = false;
        entity = argFoo;
        entity = mike === entity;
        return entity;
    };
    var _closure1_slot12 = entity;
    tango = function(argFoo, argBar, argBaz) { // Original name: computeAllowedForChannel
        _fun71492: for(var _fun71492_ip = 0; ; ) switch(_fun71492_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = null;
            if(!(entity != tango)) { _fun71492_ip = 225; continue _fun71492 }
 15:
            options = zulu.id;
            mike = zulu.isThread;
            mike = mike.bind(zulu)();
            if(!mike) { _fun71492_ip = 51; continue _fun71492 }
 33:
            mike = zulu.parent_id;
            if(!(entity == mike)) { _fun71492_ip = 48; continue _fun71492 }
 43:
            mike = zulu.id;
 48:
            options = mike;
 51:
            yankee = _closure1_slot0;
            mike = _closure1_slot3;
            report = 11;
            oscar = mike[report];
            verify = undefined;
            golf = yankee.bind(verify)(oscar);
            oscar = golf.toPermissionKey;
            offset = 5;
            mike = mike[offset];
            mike = yankee.bind(verify)(mike);
            mike = mike.ApplicationCommandPermissionType;
            mike = mike.CHANNEL;
            mike = oscar.bind(golf)(options, mike);
            mike = tango[mike];
            if(!(entity == mike)) { _fun71492_ip = 217; continue _fun71492 }
 120:
            options = _closure1_slot0;
            zulu = _closure1_slot3;
            report = zulu[report];
            golf = options.bind(verify)(report);
            oscar = golf.toPermissionKey;
            report = 10;
            report = zulu[report];
            romeo = options.bind(verify)(report);
            yankee = romeo.allChannelsSentinel;
            report = argBaz;
            report = yankee.bind(romeo)(report);
            zulu = zulu[offset];
            zulu = options.bind(verify)(zulu);
            zulu = zulu.ApplicationCommandPermissionType;
            zulu = zulu.CHANNEL;
            zulu = oscar.bind(golf)(report, zulu);
            tango = tango[zulu];
            report = entity != tango;
            zulu = null;
            if(!report) { _fun71492_ip = 215; continue _fun71492 }
 209:
            zulu = tango.permission;
 215:
            return zulu;
 217:
            mike = mike.permission;
            return mike;
 225:
            return entity;
        }
    };
    var _closure1_slot13 = tango;
    mike = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: computeAllowedForUser
        _fun71493: for(var _fun71493_ip = 0; ; ) switch(_fun71493_ip) {
 0:
            report = argFoo;
            options = argBar;
            entity = null;
            if(!(entity != report)) { _fun71493_ip = 328; continue _fun71493 }
 15:
            mike = argGrault;
            if(mike) { _fun71493_ip = 101; continue _fun71493 }
 21:
            golf = _closure1_slot0;
            verify = _closure1_slot3;
            mike = 11;
            mike = verify[mike];
            zulu = undefined;
            oscar = golf.bind(zulu)(mike);
            tango = oscar.toPermissionKey;
            mike = 5;
            mike = verify[mike];
            mike = golf.bind(zulu)(mike);
            mike = mike.ApplicationCommandPermissionType;
            zulu = mike.USER;
            mike = argBaz;
            mike = tango.bind(oscar)(mike, zulu);
            mike = report[mike];
            if(!(entity != mike)) { _fun71493_ip = 101; continue _fun71493 }
 93:
            mike = mike.permission;
            return mike;
 101:
            tango = _closure1_slot9;
            offset = undefined;
            mike = argCorge;
            backup = tango.bind(offset)(mike);
            tango = backup.bind(offset)();
            verify = tango.done;
            mike = false;
            golf = true;
            oscar = 11;
            yankee = 5;
            foxtrot = tango;
            romeo = false;
            tango = false;
            if(verify) { _fun71493_ip = 243; continue _fun71493 }
 147:
            output = foxtrot.value;
            result = _closure1_slot0;
            verify = _closure1_slot3;
            kilo = verify[oscar];
            sizing = result.bind(offset)(kilo);
            kilo = sizing.toPermissionKey;
            verify = verify[yankee];
            verify = result.bind(offset)(verify);
            verify = verify.ApplicationCommandPermissionType;
            verify = verify.ROLE;
            verify = kilo.bind(sizing)(output, verify);
            verify = report[verify];
            if(!(entity != verify)) { _fun71493_ip = 221; continue _fun71493 }
 210:
            verify = verify.permission;
            romeo = true;
            if(verify) { _fun71493_ip = 241; continue _fun71493 }
 221:
            sizing = backup.bind(offset)();
            verify = sizing.done;
            foxtrot = sizing;
            tango = romeo;
            if(verify) { _fun71493_ip = 243; continue _fun71493 }
 239:
            _fun71493_ip = 147; continue _fun71493;
 241:
            return golf;
 243:
            if(tango) { _fun71493_ip = 326; continue _fun71493 }
 246:
            golf = entity != options;
            tango = null;
            if(!golf) { _fun71493_ip = 309; continue _fun71493 }
 255:
            verify = _closure1_slot0;
            zulu = _closure1_slot3;
            oscar = zulu[oscar];
            golf = verify.bind(offset)(oscar);
            oscar = golf.toPermissionKey;
            zulu = zulu[yankee];
            zulu = verify.bind(offset)(zulu);
            zulu = zulu.ApplicationCommandPermissionType;
            zulu = zulu.ROLE;
            zulu = oscar.bind(golf)(options, zulu);
            tango = report[zulu];
 309:
            report = entity != tango;
            zulu = null;
            if(!report) { _fun71493_ip = 324; continue _fun71493 }
 318:
            zulu = tango.permission;
 324:
            return zulu;
 326:
            return mike;
 328:
            return entity;
        }
    };
    var _closure1_slot14 = mike;
    entity = global;
    yankee = entity.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    foxtrot = 0;
    oscar = verify[foxtrot];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    oscar = oscar.ChannelRecordBase;
    var _closure1_slot4 = oscar;
    romeo = 1;
    oscar = verify[romeo];
    oscar = golf.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    yankee = 2;
    oscar = verify[yankee];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.BuiltInSectionId;
    var _closure1_slot6 = oscar;
    offset = 3;
    oscar = verify[offset];
    oscar = options.bind(entity)(oscar);
    oscar = oscar.Permissions;
    var _closure1_slot7 = oscar;
    oscar = {};
    oscar['ALLOWED'] = foxtrot;
    golf = 'ALLOWED';
    oscar[foxtrot] = golf;
    oscar['NSFW_NOT_ALLOWED'] = romeo;
    golf = 'NSFW_NOT_ALLOWED';
    oscar[romeo] = golf;
    oscar['WRONG_COMMAND_TYPE'] = yankee;
    golf = 'WRONG_COMMAND_TYPE';
    oscar[yankee] = golf;
    oscar['PREDICATE_FAILED'] = offset;
    golf = 'PREDICATE_FAILED';
    oscar[offset] = golf;
    offset = 4;
    oscar['CONTEXT_NOT_ALLOWED'] = offset;
    golf = 'CONTEXT_NOT_ALLOWED';
    oscar[offset] = golf;
    offset = 5;
    oscar['MISSING_BASE_PERMISSIONS'] = offset;
    golf = 'MISSING_BASE_PERMISSIONS';
    oscar[offset] = golf;
    offset = 6;
    oscar['CHANNEL_DENIED'] = offset;
    golf = 'CHANNEL_DENIED';
    oscar[offset] = golf;
    offset = 7;
    oscar['USER_DENIED'] = offset;
    golf = 'USER_DENIED';
    oscar[offset] = golf;
    var _closure1_slot8 = oscar;
    golf = 12;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/application_commands/CommandPermissionUtils.tsx';
    golf = options.bind(verify)(golf);
    zulu['HasAccessResult'] = oscar;
    report = function(argFoo, argBar, argBaz) { // Original name: hasAccess
        _fun71494: for(var _fun71494_ip = 0; ; ) switch(_fun71494_ip) {
 0:
            zulu = argFoo;
            mike = argBar;
            tango = argBaz;
            kilo = mike.context;
            options = mike.commandTypes;
            entity = mike.allowNsfw;
            oscar = mike.computedPermissions;
            foxtrot = mike.userId;
            romeo = mike.roleIds;
            yankee = mike.isImpersonating;
            backup = mike.hasBaseAccessPermissions;
            report = tango.applicationAllowedForUser;
            verify = tango.applicationAllowedForChannel;
            mike = tango.isGuildInstalled;
            sizing = tango.isUserInstalled;
            output = tango.commandBotId;
            golf = options.includes;
            tango = zulu.type;
            tango = golf.bind(options)(tango);
            if(tango) { _fun71494_ip = 118; continue _fun71494 }
 103:
            tango = _closure1_slot8;
            tango = tango.WRONG_COMMAND_TYPE;
            return tango;
 118:
            tango = zulu.nsfw;
            if(!tango) { _fun71494_ip = 145; continue _fun71494 }
 127:
            if(entity) { _fun71494_ip = 145; continue _fun71494 }
 130:
            entity = _closure1_slot8;
            entity = entity.NSFW_NOT_ALLOWED;
            return entity;
 145:
            tango = null;
            entity = tango != kilo;
            golf = undefined;
            offset = undefined;
            if(!entity) { _fun71494_ip = 193; continue _fun71494 }
 158:
            options = _closure1_slot0;
            result = _closure1_slot3;
            entity = 4;
            entity = result[entity];
            options = options.bind(golf)(entity);
            entity = options.computeCommandContextType;
            offset = entity.bind(options)(kilo, output);
 193:
            entity = zulu.contexts;
            if(!(tango == entity)) { _fun71494_ip = 362; continue _fun71494 }
 206:
            output = zulu.inputType;
            result = _closure1_slot0;
            echo = _closure1_slot3;
            options = 5;
            options = echo[options];
            options = result.bind(golf)(options);
            options = options.ApplicationCommandInputType;
            options = options.BOT;
            if(!(output === options)) { _fun71494_ip = 400; continue _fun71494 }
 254:
            output = zulu.dmPermission;
            options = false;
            if(!(options === output)) { _fun71494_ip = 302; continue _fun71494 }
 266:
            output = _closure1_slot0;
            result = _closure1_slot3;
            options = 6;
            options = result[options];
            options = output.bind(golf)(options);
            options = options.InteractionContextType;
            options = options.BOT_DM;
            if(!(offset !== options)) { _fun71494_ip = 350; continue _fun71494 }
 302:
            output = _closure1_slot0;
            result = _closure1_slot3;
            options = 6;
            options = result[options];
            options = output.bind(golf)(options);
            options = options.InteractionContextType;
            options = options.PRIVATE_CHANNEL;
            if(!(offset === options)) { _fun71494_ip = 400; continue _fun71494 }
 338:
            options = _closure1_slot8;
            options = options.CONTEXT_NOT_ALLOWED;
            return options;
 350:
            entity = _closure1_slot8;
            entity = entity.CONTEXT_NOT_ALLOWED;
            return entity;
 362:
            if(!(tango != offset)) { _fun71494_ip = 400; continue _fun71494 }
 366:
            options = zulu.contexts;
            entity = options.includes;
            entity = entity.bind(options)(offset);
            if(entity) { _fun71494_ip = 400; continue _fun71494 }
 385:
            entity = _closure1_slot8;
            entity = entity.CONTEXT_NOT_ALLOWED;
            return entity;
 400:
            entity = zulu.predicate;
            if(!(tango != entity)) { _fun71494_ip = 479; continue _fun71494 }
 410:
            options = _closure1_slot4;
            options = kilo instanceof options;
            if(!options) { _fun71494_ip = 479; continue _fun71494 }
 424:
            output = _closure1_slot5;
            offset = output.getGuild;
            options = kilo.guild_id;
            output = offset.bind(output)(options);
            offset = zulu.predicate;
            options = {};
            options['channel'] = kilo;
            options['guild'] = output;
            options = offset.bind(zulu)(options);
            if(options) { _fun71494_ip = 479; continue _fun71494 }
 467:
            entity = _closure1_slot8;
            entity = entity.PREDICATE_FAILED;
            return entity;
 479:
            offset = zulu.applicationId;
            options = _closure1_slot6;
            options = options.BUILT_IN;
            if(!(offset !== options)) { _fun71494_ip = 1144; continue _fun71494 }
 504:
            options = tango != kilo;
            offset = undefined;
            if(!options) { _fun71494_ip = 544; continue _fun71494 }
 513:
            output = _closure1_slot0;
            result = _closure1_slot3;
            options = 4;
            options = result[options];
            output = output.bind(golf)(options);
            options = output.getContextGuildId;
            offset = options.bind(output)(kilo);
 544:
            if(!(tango != offset)) { _fun71494_ip = 1132; continue _fun71494 }
 551:
            result = _closure1_slot2;
            output = _closure1_slot3;
            options = 7;
            output = output[options];
            echo = result.bind(golf)(output);
            result = echo.has;
            output = _closure1_slot7;
            output = output.ADMINISTRATOR;
            output = result.bind(echo)(oscar, output);
            if(output) { _fun71494_ip = 1120; continue _fun71494 }
 598:
            if(!sizing) { _fun71494_ip = 659; continue _fun71494 }
 601:
            result = zulu.integration_types;
            if(!(tango != result)) { _fun71494_ip = 659; continue _fun71494 }
 611:
            output = result.includes;
            echo = _closure1_slot0;
            update = _closure1_slot3;
            sizing = 8;
            sizing = update[sizing];
            sizing = echo.bind(golf)(sizing);
            sizing = sizing.ApplicationIntegrationType;
            sizing = sizing.USER_INSTALL;
            sizing = output.bind(result)(sizing);
            if(sizing) { _fun71494_ip = 1108; continue _fun71494 }
 659:
            if(backup) { _fun71494_ip = 738; continue _fun71494 }
 662:
            if(!mike) { _fun71494_ip = 738; continue _fun71494 }
 665:
            mike = zulu.integration_types;
            if(!(tango != mike)) { _fun71494_ip = 726; continue _fun71494 }
 675:
            sizing = zulu.integration_types;
            backup = sizing.includes;
            output = _closure1_slot0;
            result = _closure1_slot3;
            mike = 8;
            mike = result[mike];
            mike = output.bind(golf)(mike);
            mike = mike.ApplicationIntegrationType;
            mike = mike.GUILD_INSTALL;
            mike = backup.bind(sizing)(mike);
            if(!mike) { _fun71494_ip = 738; continue _fun71494 }
 726:
            mike = _closure1_slot8;
            mike = mike.MISSING_BASE_PERMISSIONS;
            return mike;
 738:
            mike = _closure1_slot4;
            mike = kilo instanceof mike;
            if(!mike) { _fun71494_ip = 853; continue _fun71494 }
 749:
            backup = _closure1_slot1;
            sizing = _closure1_slot3;
            mike = 9;
            mike = sizing[mike];
            sizing = backup.bind(golf)(mike);
            backup = golf !== verify;
            mike = 'missing applicationAllowedForChannel';
            mike = sizing.bind(golf)(backup, mike);
            backup = _closure1_slot13;
            mike = zulu.permissions;
            backup = backup.bind(golf)(mike, kilo, offset);
            mike = _closure1_slot12;
            mike = mike.bind(golf)(backup);
            if(mike) { _fun71494_ip = 1096; continue _fun71494 }
 817:
            mike = _closure1_slot11;
            mike = mike.bind(golf)(backup);
            if(mike) { _fun71494_ip = 853; continue _fun71494 }
 829:
            mike = _closure1_slot12;
            mike = mike.bind(golf)(verify);
            if(!mike) { _fun71494_ip = 853; continue _fun71494 }
 841:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_DENIED;
            return mike;
 853:
            verify = _closure1_slot14;
            config = zulu.permissions;
            record = undefined;
            sequence = offset;
            vacuum = foxtrot;
            control = romeo;
            source = yankee;
            verify = record[verify](config, sequence, vacuum, control, source, update);
            mike = _closure1_slot11;
            mike = mike.bind(golf)(verify);
            if(mike) { _fun71494_ip = 1084; continue _fun71494 }
 896:
            mike = _closure1_slot12;
            mike = mike.bind(golf)(verify);
            if(mike) { _fun71494_ip = 1072; continue _fun71494 }
 911:
            mike = _closure1_slot12;
            mike = mike.bind(golf)(report);
            if(mike) { _fun71494_ip = 1072; continue _fun71494 }
 926:
            mike = zulu.defaultMemberPermissions;
            if(!(tango == mike)) { _fun71494_ip = 948; continue _fun71494 }
 936:
            mike = _closure1_slot8;
            mike = mike.ALLOWED;
            _fun71494_ip = 1070; continue _fun71494;
 948:
            report = _closure1_slot2;
            romeo = _closure1_slot3;
            tango = romeo[options];
            offset = report.bind(golf)(tango);
            verify = offset.equals;
            report = zulu.defaultMemberPermissions;
            yankee = _closure1_slot0;
            tango = 10;
            tango = romeo[tango];
            tango = yankee.bind(golf)(tango);
            tango = tango.DISABLED_BY_DEFAULT_PERMISSION_FLAG;
            tango = verify.bind(offset)(report, tango);
            if(tango) { _fun71494_ip = 1057; continue _fun71494 }
 1008:
            report = _closure1_slot2;
            tango = _closure1_slot3;
            tango = tango[options];
            report = report.bind(golf)(tango);
            tango = report.has;
            zulu = zulu.defaultMemberPermissions;
            zulu = tango.bind(report)(oscar, zulu);
            if(!zulu) { _fun71494_ip = 1057; continue _fun71494 }
 1045:
            zulu = _closure1_slot8;
            zulu = zulu.ALLOWED;
            _fun71494_ip = 1067; continue _fun71494;
 1057:
            tango = _closure1_slot8;
            zulu = tango.USER_DENIED;
 1067:
            mike = zulu;
 1070:
            _fun71494_ip = 1082; continue _fun71494;
 1072:
            zulu = _closure1_slot8;
            mike = zulu.USER_DENIED;
 1082:
            _fun71494_ip = 1094; continue _fun71494;
 1084:
            zulu = _closure1_slot8;
            mike = zulu.ALLOWED;
 1094:
            return mike;
 1096:
            mike = _closure1_slot8;
            mike = mike.CHANNEL_DENIED;
            return mike;
 1108:
            mike = _closure1_slot8;
            mike = mike.ALLOWED;
            return mike;
 1120:
            mike = _closure1_slot8;
            mike = mike.ALLOWED;
            return mike;
 1132:
            mike = _closure1_slot8;
            mike = mike.ALLOWED;
            return mike;
 1144:
            entity = _closure1_slot8;
            entity = entity.ALLOWED;
            return entity;
        }
    };
    zulu['hasAccess'] = report;
    zulu['computeAllowedForChannel'] = tango;
    zulu['computeAllowedForUser'] = mike;
    return entity;
})();