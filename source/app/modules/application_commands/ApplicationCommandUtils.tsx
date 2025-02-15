// app/modules/application_commands/ApplicationCommandUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    oscar = argCorge;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscar;
    var _closure1_slot3 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun59669: for(var _fun59669_ip = 0; ; ) switch(_fun59669_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun59669_ip = 46; continue _fun59669 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun59669_ip = 55; continue _fun59669 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun59669_ip = 343; continue _fun59669 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun59669_ip = 323; continue _fun59669 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun59669_ip = 283; continue _fun59669 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun59669_ip = 270; continue _fun59669 }
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
            if(!golf) { _fun59669_ip = 163; continue _fun59669 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun59669_ip = 179; continue _fun59669 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun59669_ip = 249; continue _fun59669 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun59669_ip = 249; continue _fun59669 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun59669_ip = 234; continue _fun59669 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun59669_ip = 247; continue _fun59669 }
 234:
            verify = _closure1_slot13;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun59669_ip = 265; continue _fun59669;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun59669_ip = 283; continue _fun59669;
 270:
            golf = _closure1_slot13;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun59669_ip = 323; continue _fun59669 }
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
            if(!tango) { _fun59669_ip = 330; continue _fun59669 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun59670: for(var _fun59670_ip = 0; ; ) switch(_fun59670_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun59670_ip = 56; continue _fun59670 }
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
                    _fun59670_ip = 67; continue _fun59670;
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
 343:
            entity = mike.call;
            zulu = entity.bind(mike)(zulu);
            mike = zulu.next;
            entity = mike.bind;
            entity = entity.bind(mike)(zulu);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun59671: for(var _fun59671_ip = 0; ; ) switch(_fun59671_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun59671_ip = 23; continue _fun59671 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun59671_ip = 33; continue _fun59671 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun59671_ip = 70; continue _fun59671 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun59671_ip = 55; continue _fun59671 }
 70:
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    report = function(argFoo) { // Original name: buildCommand
        _fun59672: for(var _fun59672_ip = 0; ; ) switch(_fun59672_ip) {
 0:
            zulu = argFoo;
            mike = zulu.rootCommand;
            tango = zulu.command;
            yankee = zulu.applicationId;
            verify = zulu.subCommandPath;
            zulu = zulu.useKeyedPermissions;
            romeo = undefined;
            var _closure2_slot0 = romeo;
            oscar = mike.permissions;
            report = null;
            golf = report != oscar;
            if(!golf) { _fun59672_ip = 72; continue _fun59672 }
 55:
            oscar = mike.permissions;
            options = oscar.length;
            oscar = 0;
            golf = options > oscar;
 72:
            oscar = undefined;
            if(!golf) { _fun59672_ip = 159; continue _fun59672 }
 77:
            if(zulu) { _fun59672_ip = 109; continue _fun59672 }
 80:
            zulu = {};
            _closure2_slot0 = zulu;
            offset = mike.permissions;
            options = offset.forEach;
            golf = function(argFoo) {
                zulu = argFoo;
                mike = _closure2_slot0;
                entity = zulu.id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            golf = options.bind(offset)(golf);
            _fun59672_ip = 156; continue _fun59672;
 109:
            options = _closure1_slot0;
            offset = _closure1_slot3;
            golf = 5;
            golf = offset[golf];
            offset = options.bind(romeo)(golf);
            options = offset.keyPermissions;
            golf = mike.permissions;
            golf = options.bind(offset)(golf);
            _closure2_slot0 = golf;
            zulu = golf;
 156:
            oscar = zulu;
 159:
            options = verify;
            if(!(report == verify)) { _fun59672_ip = 170; continue _fun59672 }
 166:
            options = new Array(0);
 170:
            golf = options.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.name;
                return entity;
            };
            golf = golf.bind(options)(zulu);
            options = verify;
            if(!(report == options)) { _fun59672_ip = 196; continue _fun59672 }
 192:
            options = new Array(0);
 196:
            zulu = options.map;
            entity = function(argFoo) {
                entity = argFoo;
                entity = entity.displayName;
                return entity;
            };
            options = zulu.bind(options)(entity);
            entity = {};
            zulu = mike.version;
            entity['version'] = zulu;
            zulu = mike.guild_id;
            entity['guildId'] = zulu;
            zulu = mike.id;
            kilo = new Array(1);
            kilo[0] = zulu;
            zulu = 1;
            result = kilo;
            output = golf;
            sizing = zulu;
            offset = arraySpread(result, output, sizing);
            backup = kilo.join;
            foxtrot = _closure1_slot7;
            foxtrot = backup.bind(kilo)(foxtrot);
            entity['id'] = foxtrot;
            foxtrot = mike.name;
            backup = new Array(1);
            backup[0] = foxtrot;
            result = backup;
            output = golf;
            golf = arraySpread(result, output, sizing);
            foxtrot = backup.join;
            golf = ' ';
            foxtrot = foxtrot.bind(backup)(golf);
            entity['untranslatedName'] = foxtrot;
            foxtrot = tango.name_localized;
            entity['serverLocalizedName'] = foxtrot;
            entity['applicationId'] = yankee;
            yankee = mike.type;
            if(!(report == yankee)) { _fun59672_ip = 381; continue _fun59672 }
 349:
            backup = _closure1_slot0;
            kilo = _closure1_slot3;
            foxtrot = 6;
            foxtrot = kilo[foxtrot];
            foxtrot = backup.bind(romeo)(foxtrot);
            foxtrot = foxtrot.ApplicationCommandType;
            yankee = foxtrot.CHAT;
 381:
            entity['type'] = yankee;
            foxtrot = _closure1_slot0;
            backup = _closure1_slot3;
            yankee = 7;
            yankee = backup[yankee];
            yankee = foxtrot.bind(romeo)(yankee);
            yankee = yankee.ApplicationCommandInputType;
            yankee = yankee.BOT;
            entity['inputType'] = yankee;
            yankee = tango.description;
            entity['untranslatedDescription'] = yankee;
            foxtrot = _closure1_slot15;
            yankee = tango.options;
            yankee = foxtrot.bind(romeo)(yankee);
            entity['options'] = yankee;
            entity['rootCommand'] = mike;
            entity['subCommandPath'] = verify;
            verify = mike.default_member_permissions;
            yankee = report == verify;
            verify = undefined;
            if(yankee) { _fun59672_ip = 512; continue _fun59672 }
 475:
            yankee = _closure1_slot2;
            foxtrot = _closure1_slot3;
            offset = 8;
            offset = foxtrot[offset];
            romeo = yankee.bind(romeo)(offset);
            yankee = romeo.deserialize;
            offset = mike.default_member_permissions;
            verify = yankee.bind(romeo)(offset);
 512:
            entity['defaultMemberPermissions'] = verify;
            verify = mike.dm_permission;
            entity['dmPermission'] = verify;
            entity['permissions'] = oscar;
            verify = mike.name_localized;
            if(!(report == verify)) { _fun59672_ip = 548; continue _fun59672 }
 543:
            verify = mike.name;
 548:
            oscar = new Array(1);
            oscar[0] = verify;
            result = oscar;
            output = options;
            sizing = zulu;
            zulu = arraySpread(result, output, sizing);
            zulu = oscar.join;
            zulu = zulu.bind(oscar)(golf);
            entity['displayName'] = zulu;
            zulu = tango.description_localized;
            if(!(report == zulu)) { _fun59672_ip = 598; continue _fun59672 }
 593:
            zulu = tango.description;
 598:
            entity['displayDescription'] = zulu;
            zulu = mike.nsfw;
            entity['nsfw'] = zulu;
            zulu = mike.contexts;
            entity['contexts'] = zulu;
            zulu = mike.integration_types;
            entity['integration_types'] = zulu;
            zulu = mike.global_popularity_rank;
            entity['global_popularity_rank'] = zulu;
            mike = mike.handler;
            entity['handler'] = mike;
            return entity;
        }
    };
    var _closure1_slot14 = report;
    entity = function(argFoo) { // Original name: mapOptions
        _fun59676: for(var _fun59676_ip = 0; ; ) switch(_fun59676_ip) {
 0:
            tango = argFoo;
            entity = null;
            mike = entity == tango;
            entity = undefined;
            if(mike) { _fun59676_ip = 31; continue _fun59676 }
 14:
            zulu = tango.map;
            mike = function(argFoo) {
                _fun59677: for(var _fun59677_ip = 0; ; ) switch(_fun59677_ip) {
 0:
                    zulu = argFoo;
                    tango = {};
                    offset = tango;
                    verify = zulu;
                    entity = copyDataProperties(offset, verify);
                    options = zulu.choices;
                    entity = null;
                    mike = entity == options;
                    golf = undefined;
                    report = undefined;
                    if(mike) { _fun59677_ip = 51; continue _fun59677 }
 34:
                    oscar = options.map;
                    mike = function(argFoo) {
                        _fun59678: for(var _fun59678_ip = 0; ; ) switch(_fun59678_ip) {
 0:
                            mike = argFoo;
                            entity = {};
                            oscar = entity;
                            report = mike;
                            zulu = copyDataProperties(oscar, report);
                            zulu = mike.name_localized;
                            tango = null;
                            if(!(tango == zulu)) { _fun59678_ip = 32; continue _fun59678 }
 27:
                            zulu = mike.name;
 32:
                            mike = 'displayName';
                            entity[mike] = zulu;
                            return entity;
                        }
                    };
                    report = oscar.bind(options)(mike);
 51:
                    mike = 'choices';
                    tango[mike] = report;
                    oscar = _closure1_slot15;
                    report = zulu.options;
                    oscar = oscar.bind(golf)(report);
                    report = 'options';
                    tango[report] = oscar;
                    oscar = zulu.name_localized;
                    report = 'serverLocalizedName';
                    tango[report] = oscar;
                    oscar = zulu.name_localized;
                    if(!(entity == oscar)) { _fun59677_ip = 116; continue _fun59677 }
 111:
                    oscar = zulu.name;
 116:
                    report = 'displayName';
                    tango[report] = oscar;
                    report = zulu.description_localized;
                    if(!(entity == report)) { _fun59677_ip = 140; continue _fun59677 }
 135:
                    report = zulu.description;
 140:
                    entity = 'displayDescription';
                    tango[entity] = report;
                    report = zulu.type;
                    oscar = _closure1_slot0;
                    entity = _closure1_slot3;
                    options = 6;
                    entity = entity[options];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.CHANNEL;
                    if(!(report === entity)) { _fun59677_ip = 204; continue _fun59677 }
 190:
                    entity = 'channel_types';
                    entity = entity in zulu;
                    if(entity) { _fun59677_ip = 470; continue _fun59677 }
 204:
                    report = zulu.type;
                    oscar = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[options];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.NUMBER;
                    if(!(report !== entity)) { _fun59677_ip = 280; continue _fun59677 }
 242:
                    report = zulu.type;
                    oscar = _closure1_slot0;
                    entity = _closure1_slot3;
                    entity = entity[options];
                    entity = oscar.bind(golf)(entity);
                    entity = entity.ApplicationCommandOptionType;
                    entity = entity.INTEGER;
                    if(!(report === entity)) { _fun59677_ip = 354; continue _fun59677 }
 280:
                    entity = 'min_value';
                    entity = entity in zulu;
                    if(entity) { _fun59677_ip = 306; continue _fun59677 }
 293:
                    entity = 'max_value';
                    entity = entity in zulu;
                    if(!entity) { _fun59677_ip = 354; continue _fun59677 }
 306:
                    entity = {};
                    offset = entity;
                    verify = tango;
                    report = copyDataProperties(offset, verify);
                    oscar = zulu.min_value;
                    report = 'minValue';
                    entity[report] = oscar;
                    oscar = zulu.max_value;
                    report = 'maxValue';
                    entity[report] = oscar;
                    _fun59677_ip = 468; continue _fun59677;
 354:
                    oscar = zulu.type;
                    report = _closure1_slot0;
                    mike = _closure1_slot3;
                    mike = mike[options];
                    mike = report.bind(golf)(mike);
                    mike = mike.ApplicationCommandOptionType;
                    report = mike.STRING;
                    mike = tango;
                    if(!(oscar === report)) { _fun59677_ip = 465; continue _fun59677 }
 395:
                    report = 'min_length';
                    report = report in zulu;
                    if(report) { _fun59677_ip = 420; continue _fun59677 }
 406:
                    report = 'max_length';
                    report = report in zulu;
                    mike = tango;
                    if(!report) { _fun59677_ip = 465; continue _fun59677 }
 420:
                    report = {};
                    offset = report;
                    verify = tango;
                    oscar = copyDataProperties(offset, verify);
                    golf = zulu.min_length;
                    oscar = 'minLength';
                    report[oscar] = golf;
                    golf = zulu.max_length;
                    oscar = 'maxLength';
                    report[oscar] = golf;
                    mike = report;
 465:
                    entity = mike;
 468:
                    _fun59677_ip = 500; continue _fun59677;
 470:
                    mike = {};
                    offset = mike;
                    verify = tango;
                    tango = copyDataProperties(offset, verify);
                    tango = zulu.channel_types;
                    zulu = 'channelTypes';
                    mike[zulu] = tango;
                    entity = mike;
 500:
                    return entity;
                }
            };
            entity = zulu.bind(tango)(mike);
 31:
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo) { // Original name: buildSubCommands
        _fun59679: for(var _fun59679_ip = 0; ; ) switch(_fun59679_ip) {
 0:
            entity = argFoo;
            golf = entity.rootCommand;
            oscar = entity.command;
            report = entity.applicationId;
            tango = entity.subCommandPath;
            entity = entity.useKeyedPermissions;
            zulu = oscar.hasOwnProperty;
            mike = 'id';
            mike = zulu.bind(oscar)(mike);
            if(mike) { _fun59679_ip = 214; continue _fun59679 }
 55:
            offset = oscar.type;
            yankee = _closure1_slot0;
            zulu = _closure1_slot3;
            romeo = 6;
            zulu = zulu[romeo];
            options = undefined;
            zulu = yankee.bind(options)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.SUB_COMMAND;
            if(!(offset !== zulu)) { _fun59679_ip = 247; continue _fun59679 }
 104:
            offset = oscar.type;
            yankee = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[romeo];
            zulu = yankee.bind(options)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.SUB_COMMAND_GROUP;
            if(!(offset !== zulu)) { _fun59679_ip = 247; continue _fun59679 }
 142:
            offset = oscar.options;
            zulu = null;
            if(!(zulu != offset)) { _fun59679_ip = 169; continue _fun59679 }
 153:
            zulu = oscar.options;
            offset = zulu.length;
            zulu = 0;
            if(!(zulu === offset)) { _fun59679_ip = 247; continue _fun59679 }
 169:
            zulu = _closure1_slot14;
            mike = {};
            mike['rootCommand'] = golf;
            mike['command'] = oscar;
            mike['applicationId'] = report;
            mike['subCommandPath'] = tango;
            mike['useKeyedPermissions'] = entity;
            zulu = zulu.bind(options)(mike);
            mike = new Array(1);
            mike[0] = zulu;
            return mike;
 214:
            zulu = oscar.options;
            mike = null;
            if(!(mike != zulu)) { _fun59679_ip = 779; continue _fun59679 }
 228:
            mike = oscar.options;
            zulu = mike.length;
            mike = 0;
            if(!(mike !== zulu)) { _fun59679_ip = 779; continue _fun59679 }
 247:
            mike = new Array(0);
            zulu = oscar.options;
            kilo = null;
            if(!(kilo != zulu)) { _fun59679_ip = 777; continue _fun59679 }
 265:
            offset = oscar.options;
            options = offset.filter;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND_GROUP;
                entity = mike === entity;
                return entity;
            };
            options = options.bind(offset)(zulu);
            zulu = options.length;
            yankee = 0;
            romeo = yankee < zulu;
            offset = undefined;
            backup = 6;
            foxtrot = 0;
            if(!romeo) { _fun59679_ip = 501; continue _fun59679 }
 312:
            sizing = mike.push;
            output = _closure1_slot16;
            romeo = {};
            romeo['rootCommand'] = golf;
            result = options[foxtrot];
            romeo['command'] = result;
            romeo['applicationId'] = report;
            update = tango;
            if(!(kilo == tango)) { _fun59679_ip = 352; continue _fun59679 }
 348:
            update = new Array(0);
 352:
            echo = update.concat;
            source = {};
            result = options[foxtrot];
            result = result.name;
            source['name'] = result;
            control = _closure1_slot0;
            result = _closure1_slot3;
            result = result[backup];
            result = control.bind(offset)(result);
            result = result.ApplicationCommandOptionType;
            result = result.SUB_COMMAND_GROUP;
            source['type'] = result;
            result = options[foxtrot];
            result = result.name_localized;
            if(!(kilo == result)) { _fun59679_ip = 428; continue _fun59679 }
 419:
            control = options[foxtrot];
            result = control.name;
 428:
            source['displayName'] = result;
            result = new Array(1);
            result[0] = source;
            result = echo.bind(update)(result);
            romeo['subCommandPath'] = result;
            romeo['useKeyedPermissions'] = entity;
            sequence = output.bind(offset)(romeo);
            romeo = new Array(0);
            config = romeo;
            vacuum = 0;
            output = arraySpread(config, sequence, vacuum);
            config = sizing;
            sequence = romeo;
            vacuum = mike;
            romeo = apply(config, sequence, vacuum);
            foxtrot = foxtrot + 1;
            romeo = options.length;
            if(foxtrot < romeo) { _fun59679_ip = 312; continue _fun59679 }
 501:
            foxtrot = oscar.options;
            romeo = foxtrot.filter;
            verify = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND;
                entity = mike === entity;
                return entity;
            };
            verify = romeo.bind(foxtrot)(verify);
            romeo = verify.length;
            romeo = yankee < romeo;
            foxtrot = 0;
            if(!romeo) { _fun59679_ip = 706; continue _fun59679 }
 538:
            sizing = mike.push;
            output = _closure1_slot14;
            romeo = {};
            romeo['rootCommand'] = golf;
            result = verify[foxtrot];
            romeo['command'] = result;
            romeo['applicationId'] = report;
            update = tango;
            if(!(kilo == update)) { _fun59679_ip = 578; continue _fun59679 }
 574:
            update = new Array(0);
 578:
            echo = update.concat;
            source = {};
            result = verify[foxtrot];
            result = result.name;
            source['name'] = result;
            control = _closure1_slot0;
            result = _closure1_slot3;
            result = result[backup];
            result = control.bind(offset)(result);
            result = result.ApplicationCommandOptionType;
            result = result.SUB_COMMAND;
            source['type'] = result;
            result = verify[foxtrot];
            result = result.name_localized;
            if(!(kilo == result)) { _fun59679_ip = 654; continue _fun59679 }
 645:
            control = verify[foxtrot];
            result = control.name;
 654:
            source['displayName'] = result;
            result = new Array(1);
            result[0] = source;
            result = echo.bind(update)(result);
            romeo['subCommandPath'] = result;
            romeo['useKeyedPermissions'] = entity;
            romeo = output.bind(offset)(romeo);
            romeo = sizing.bind(mike)(romeo);
            foxtrot = foxtrot + 1;
            romeo = verify.length;
            if(foxtrot < romeo) { _fun59679_ip = 538; continue _fun59679 }
 706:
            options = options.length;
            options = yankee === options;
            if(!options) { _fun59679_ip = 727; continue _fun59679 }
 718:
            verify = verify.length;
            options = yankee === verify;
 727:
            if(!options) { _fun59679_ip = 775; continue _fun59679 }
 730:
            options = mike.push;
            verify = _closure1_slot14;
            zulu = {};
            zulu['rootCommand'] = golf;
            zulu['command'] = oscar;
            zulu['applicationId'] = report;
            zulu['subCommandPath'] = tango;
            zulu['useKeyedPermissions'] = entity;
            zulu = verify.bind(offset)(zulu);
            zulu = options.bind(mike)(zulu);
 775:
            return mike;
 777:
            return mike;
 779:
            zulu = _closure1_slot14;
            mike = {};
            mike['rootCommand'] = golf;
            mike['command'] = oscar;
            mike['applicationId'] = report;
            mike['subCommandPath'] = tango;
            mike['useKeyedPermissions'] = entity;
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = new Array(1);
            entity[0] = mike;
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: hasAccessGivenPerms
        _fun59682: for(var _fun59682_ip = 0; ; ) switch(_fun59682_ip) {
 0:
            mike = argFoo;
            report = argBaz;
            yankee = _closure1_slot0;
            entity = _closure1_slot3;
            golf = 5;
            zulu = entity[golf];
            verify = undefined;
            options = yankee.bind(verify)(zulu);
            oscar = options.toPermissionKey;
            zulu = mike.userId;
            offset = 7;
            entity = entity[offset];
            entity = yankee.bind(verify)(entity);
            entity = entity.ApplicationCommandPermissionType;
            entity = entity.USER;
            entity = oscar.bind(options)(zulu, entity);
            entity = report[entity];
            zulu = null;
            if(!(zulu == entity)) { _fun59682_ip = 298; continue _fun59682 }
 85:
            oscar = _closure1_slot12;
            mike = mike.roles;
            backup = oscar.bind(verify)(mike);
            oscar = backup.bind(verify)();
            yankee = oscar.done;
            mike = false;
            options = true;
            foxtrot = oscar;
            romeo = false;
            oscar = false;
            if(yankee) { _fun59682_ip = 219; continue _fun59682 }
 123:
            output = foxtrot.value;
            result = _closure1_slot0;
            yankee = _closure1_slot3;
            kilo = yankee[golf];
            sizing = result.bind(verify)(kilo);
            kilo = sizing.toPermissionKey;
            yankee = yankee[offset];
            yankee = result.bind(verify)(yankee);
            yankee = yankee.ApplicationCommandPermissionType;
            yankee = yankee.ROLE;
            yankee = kilo.bind(sizing)(output, yankee);
            yankee = report[yankee];
            if(!(zulu != yankee)) { _fun59682_ip = 197; continue _fun59682 }
 186:
            yankee = yankee.permission;
            romeo = true;
            if(yankee) { _fun59682_ip = 217; continue _fun59682 }
 197:
            sizing = backup.bind(verify)();
            yankee = sizing.done;
            foxtrot = sizing;
            oscar = romeo;
            if(yankee) { _fun59682_ip = 219; continue _fun59682 }
 215:
            _fun59682_ip = 123; continue _fun59682;
 217:
            return options;
 219:
            if(oscar) { _fun59682_ip = 296; continue _fun59682 }
 222:
            oscar = _closure1_slot0;
            tango = _closure1_slot3;
            golf = tango[golf];
            options = oscar.bind(verify)(golf);
            golf = options.toPermissionKey;
            tango = tango[offset];
            tango = oscar.bind(verify)(tango);
            tango = tango.ApplicationCommandPermissionType;
            oscar = tango.ROLE;
            tango = argBar;
            tango = golf.bind(options)(tango, oscar);
            tango = report[tango];
            report = zulu != tango;
            zulu = null;
            if(!report) { _fun59682_ip = 294; continue _fun59682 }
 288:
            zulu = tango.permission;
 294:
            return zulu;
 296:
            return mike;
 298:
            entity = entity.permission;
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, tango);
    verify = 0;
    tango = options[verify];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    tango = tango.isReadableType;
    var _closure1_slot4 = tango;
    tango = 1;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.DraftType;
    var _closure1_slot5 = tango;
    tango = 2;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    offset = tango.BuiltInSectionId;
    var _closure1_slot6 = offset;
    tango = tango.SUB_COMMAND_KEY_SEPARATOR;
    var _closure1_slot7 = tango;
    tango = 3;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    offset = tango.AnalyticEvents;
    var _closure1_slot8 = offset;
    tango = tango.ID_REGEX;
    var _closure1_slot9 = tango;
    tango = 4;
    tango = options[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot10 = tango;
    tango = 8;
    tango = options[tango];
    oscar = oscar.bind(entity)(tango);
    tango = oscar.deserialize;
    tango = tango.bind(oscar)(verify);
    var _closure1_slot11 = tango;
    oscar = 13;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/application_commands/ApplicationCommandUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['buildCommand'] = report;
    report = function(argFoo, argBar) { // Original name: buildApplicationCommands
        mike = argBar;
        var _closure2_slot0 = mike;
        tango = _closure1_slot1;
        zulu = _closure1_slot3;
        mike = 9;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.flatMap;
        mike = argFoo;
        entity = function(argFoo) {
            tango = argFoo;
            report = _closure1_slot1;
            zulu = _closure1_slot3;
            mike = 10;
            mike = zulu[mike];
            zulu = undefined;
            oscar = report.bind(zulu)(mike);
            report = tango.id;
            mike = null;
            report = mike != report;
            mike = 'Missing command id';
            mike = oscar.bind(zulu)(report, mike);
            mike = _closure1_slot16;
            entity = {};
            entity['rootCommand'] = tango;
            entity['command'] = tango;
            tango = tango.application_id;
            entity['applicationId'] = tango;
            entity['subCommandPath'] = zulu;
            tango = _closure2_slot0;
            entity['useKeyedPermissions'] = tango;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['buildApplicationCommands'] = report;
    report = function(argFoo) { // Original name: applicationPermissionsList
        _fun59685: for(var _fun59685_ip = 0; ; ) switch(_fun59685_ip) {
 0:
            report = argFoo;
            entity = null;
            mike = entity == report;
            entity = undefined;
            if(mike) { _fun59685_ip = 37; continue _fun59685 }
 14:
            tango = report.reduce;
            zulu = function(argFoo, argBar) {
                _fun59686: for(var _fun59686_ip = 0; ; ) switch(_fun59686_ip) {
 0:
                    entity = argFoo;
                    tango = argBar;
                    zulu = tango.applicationCommandPermissions;
                    mike = null;
                    if(!(mike != zulu)) { _fun59686_ip = 50; continue _fun59686 }
 18:
                    zulu = entity.push;
                    mike = {};
                    report = tango.id;
                    mike['id'] = report;
                    tango = tango.applicationCommandPermissions;
                    mike['permissions'] = tango;
                    mike = zulu.bind(entity)(mike);
 50:
                    return entity;
                }
            };
            mike = new Array(0);
            entity = tango.bind(report)(zulu, mike);
 37:
            return entity;
        }
    };
    zulu['applicationPermissionsList'] = report;
    report = function(argFoo) { // Original name: isSnowflake
        tango = argFoo;
        zulu = _closure1_slot9;
        mike = zulu.test;
        entity = tango.trim;
        entity = entity.bind(tango)();
        entity = mike.bind(zulu)(entity);
        return entity;
    };
    zulu['isSnowflake'] = report;
    report = function(argFoo, argBar, argBaz, argCorge) { // Original name: getMatchingGroupCommands
        mike = argBar;
        var _closure2_slot0 = mike;
        mike = argBaz;
        var _closure2_slot1 = mike;
        tango = new Array(0);
        var _closure2_slot2 = tango;
        zulu = _closure1_slot1;
        report = _closure1_slot3;
        mike = 9;
        mike = report[mike];
        report = undefined;
        zulu = zulu.bind(report)(mike);
        mike = argFoo;
        zulu = zulu.bind(report)(mike);
        mike = zulu.forEach;
        entity = function(argFoo) {
            _fun59689: for(var _fun59689_ip = 0; ; ) switch(_fun59689_ip) {
 0:
                zulu = argFoo;
                report = _closure2_slot0;
                tango = report.test;
                mike = zulu.displayName;
                mike = tango.bind(report)(mike);
                if(!mike) { _fun59689_ip = 61; continue _fun59689 }
 28:
                report = zulu.predicate;
                tango = null;
                tango = tango == report;
                if(tango) { _fun59689_ip = 58; continue _fun59689 }
 43:
                oscar = zulu.predicate;
                report = _closure2_slot1;
                tango = oscar.bind(zulu)(report);
 58:
                mike = tango;
 61:
                if(!mike) { _fun59689_ip = 78; continue _fun59689 }
 64:
                mike = _closure2_slot2;
                entity = mike.push;
                entity = entity.bind(mike)(zulu);
 78:
                entity = undefined;
                return entity;
            }
        };
        entity = mike.bind(zulu)(entity);
        zulu = tango.slice;
        mike = 0;
        entity = argCorge;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['getMatchingGroupCommands'] = report;
    report = function(argFoo) { // Original name: getApplicationCommandOptionQueryOptions
        _fun59690: for(var _fun59690_ip = 0; ; ) switch(_fun59690_ip) {
 0:
            report = argFoo;
            tango = report.type;
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            verify = 6;
            zulu = mike[verify];
            options = undefined;
            zulu = golf.bind(options)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.STRING;
            tango = tango === zulu;
            oscar = report.type;
            zulu = mike[verify];
            zulu = golf.bind(options)(zulu);
            zulu = zulu.ApplicationCommandOptionType;
            zulu = zulu.CHANNEL;
            oscar = oscar === zulu;
            zulu = report.type;
            mike = mike[verify];
            mike = golf.bind(options)(mike);
            mike = mike.ApplicationCommandOptionType;
            mike = mike.USER;
            zulu = zulu === mike;
            if(zulu) { _fun59690_ip = 150; continue _fun59690 }
 112:
            golf = report.type;
            offset = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[verify];
            mike = offset.bind(options)(mike);
            mike = mike.ApplicationCommandOptionType;
            mike = mike.MENTIONABLE;
            zulu = golf === mike;
 150:
            golf = report.type;
            offset = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[verify];
            mike = offset.bind(options)(mike);
            mike = mike.ApplicationCommandOptionType;
            mike = mike.ROLE;
            mike = golf === mike;
            if(mike) { _fun59690_ip = 229; continue _fun59690 }
 191:
            report = report.type;
            golf = _closure1_slot0;
            entity = _closure1_slot3;
            entity = entity[verify];
            entity = golf.bind(options)(entity);
            entity = entity.ApplicationCommandOptionType;
            entity = entity.MENTIONABLE;
            mike = report === entity;
 229:
            entity = {};
            report = tango;
            if(tango) { _fun59690_ip = 240; continue _fun59690 }
 237:
            report = mike;
 240:
            entity['canMentionEveryone'] = report;
            entity['canMentionHere'] = tango;
            report = tango;
            if(tango) { _fun59690_ip = 259; continue _fun59690 }
 256:
            report = oscar;
 259:
            entity['canMentionChannels'] = report;
            report = tango;
            if(tango) { _fun59690_ip = 273; continue _fun59690 }
 270:
            report = zulu;
 273:
            entity['canMentionUsers'] = report;
            if(tango) { _fun59690_ip = 284; continue _fun59690 }
 281:
            tango = mike;
 284:
            entity['canMentionRoles'] = tango;
            entity['canMentionAnyGuildUser'] = zulu;
            entity['canMentionNonMentionableRoles'] = mike;
            return entity;
        }
    };
    zulu['getApplicationCommandOptionQueryOptions'] = report;
    report = function(argFoo) { // Original name: allChannelsSentinel
        mike = _closure1_slot1;
        zulu = _closure1_slot3;
        entity = 11;
        entity = zulu[entity];
        zulu = undefined;
        mike = mike.bind(zulu)(entity);
        entity = argFoo;
        zulu = mike.bind(zulu)(entity);
        mike = zulu.subtract;
        entity = 1;
        mike = mike.bind(zulu)(entity);
        entity = mike.toString;
        entity = entity.bind(mike)();
        return entity;
    };
    zulu['allChannelsSentinel'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: canUseApplicationCommands
        _fun59692: for(var _fun59692_ip = 0; ; ) switch(_fun59692_ip) {
 0:
            golf = argFoo;
            report = argBaz;
            entity = argBar;
            entity = !entity;
            if(!entity) { _fun59692_ip = 242; continue _fun59692 }
 18:
            mike = report.isMultiUserDM;
            mike = mike.bind(report)();
            zulu = !mike;
            mike = !zulu;
            if(!zulu) { _fun59692_ip = 239; continue _fun59692 }
 40:
            zulu = report.isDM;
            zulu = zulu.bind(report)();
            if(zulu) { _fun59692_ip = 223; continue _fun59692 }
 56:
            zulu = report.isArchivedLockedThread;
            zulu = zulu.bind(report)();
            if(zulu) { _fun59692_ip = 159; continue _fun59692 }
 72:
            oscar = _closure1_slot4;
            zulu = report.type;
            offset = undefined;
            zulu = oscar.bind(offset)(zulu);
            oscar = !zulu;
            zulu = !oscar;
            if(oscar) { _fun59692_ip = 157; continue _fun59692 }
 97:
            options = golf.can;
            verify = _closure1_slot2;
            yankee = _closure1_slot3;
            oscar = 8;
            oscar = yankee[oscar];
            yankee = verify.bind(offset)(oscar);
            offset = yankee.combine;
            oscar = _closure1_slot10;
            verify = oscar.USE_APPLICATION_COMMANDS;
            oscar = oscar.SEND_MESSAGES;
            oscar = offset.bind(yankee)(verify, oscar);
            zulu = options.bind(golf)(oscar, report);
 157:
            _fun59692_ip = 221; continue _fun59692;
 159:
            oscar = golf.can;
            offset = _closure1_slot2;
            verify = _closure1_slot3;
            options = 8;
            verify = verify[options];
            options = undefined;
            offset = offset.bind(options)(verify);
            verify = offset.combine;
            tango = _closure1_slot10;
            options = tango.USE_APPLICATION_COMMANDS;
            tango = tango.MANAGE_THREADS;
            tango = verify.bind(offset)(options, tango);
            zulu = oscar.bind(golf)(tango, report);
 221:
            _fun59692_ip = 236; continue _fun59692;
 223:
            tango = report.isSystemDM;
            tango = tango.bind(report)();
            zulu = !tango;
 236:
            mike = zulu;
 239:
            entity = mike;
 242:
            return entity;
        }
    };
    zulu['canUseApplicationCommands'] = report;
    zulu['DISABLED_BY_DEFAULT_PERMISSION_FLAG'] = tango;
    tango = function(argFoo) { // Original name: hasAccess
        _fun59693: for(var _fun59693_ip = 0; ; ) switch(_fun59693_ip) {
 0:
            entity = argFoo;
            options = entity.PermissionStore;
            golf = entity.guild;
            yankee = entity.selfMember;
            verify = entity.applicationLevelPermissions;
            offset = entity.commandLevelPermissions;
            oscar = entity.defaultMemberPermissions;
            mike = golf.ownerId;
            entity = yankee.userId;
            if(!(mike !== entity)) { _fun59693_ip = 235; continue _fun59693 }
 62:
            mike = options.can;
            entity = _closure1_slot10;
            entity = entity.ADMINISTRATOR;
            entity = mike.bind(options)(entity, golf);
            if(entity) { _fun59693_ip = 235; continue _fun59693 }
 93:
            report = golf.id;
            zulu = null;
            if(!(zulu != offset)) { _fun59693_ip = 128; continue _fun59693 }
 104:
            mike = _closure1_slot17;
            entity = undefined;
            entity = mike.bind(entity)(yankee, report, offset);
            offset = 'boolean';
            mike = typeof entity;
            if(!(offset !== mike)) { _fun59693_ip = 233; continue _fun59693 }
 128:
            mike = _closure1_slot17;
            offset = undefined;
            mike = mike.bind(offset)(yankee, report, verify);
            verify = 'boolean';
            report = typeof mike;
            report = verify === report;
            if(!report) { _fun59693_ip = 158; continue _fun59693 }
 155:
            report = !mike;
 158:
            mike = !report;
            if(report) { _fun59693_ip = 231; continue _fun59693 }
 164:
            zulu = zulu == oscar;
            if(zulu) { _fun59693_ip = 228; continue _fun59693 }
 171:
            verify = _closure1_slot2;
            yankee = _closure1_slot3;
            report = 8;
            report = yankee[report];
            verify = verify.bind(offset)(report);
            report = verify.equals;
            tango = _closure1_slot11;
            tango = report.bind(verify)(oscar, tango);
            tango = !tango;
            if(!tango) { _fun59693_ip = 225; continue _fun59693 }
 213:
            report = options.can;
            tango = report.bind(options)(oscar, golf);
 225:
            zulu = tango;
 228:
            mike = zulu;
 231:
            return mike;
 233:
            return entity;
 235:
            entity = true;
            return entity;
        }
    };
    zulu['hasAccess'] = tango;
    tango = function(argFoo) { // Original name: getCommandAttachmentDraftType
        _fun59694: for(var _fun59694_ip = 0; ; ) switch(_fun59694_ip) {
 0:
            tango = argFoo;
            report = _closure1_slot0;
            mike = _closure1_slot3;
            oscar = 7;
            zulu = mike[oscar];
            mike = undefined;
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.CHAT;
            if(!(zulu !== tango)) { _fun59694_ip = 589; continue _fun59694 }
 47:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.APPLICATION_LAUNCHER;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 83:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.APP_LAUNCHER_APPLICATION_VIEW;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 119:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.CONTEXT_MENU;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 155:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.VOICE_UI;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 191:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.VOICE_TILE_ACTIVITY_SUGGESTIONS;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 227:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.MINI_SHELF;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 263:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.USER_PROFILE;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 299:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.NOW_PLAYING;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 335:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.ACTIVITY_DETAILS;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 371:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.ACTIVITIES_HOME;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 407:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.ACTIVITY_INSTANCE_EMBED;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 443:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.ACTIVITY_BOOKMARK_EMBED;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 476:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 509:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.IMAGE_RECS_MENU;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 542:
            report = _closure1_slot0;
            zulu = _closure1_slot3;
            zulu = zulu[oscar];
            zulu = report.bind(mike)(zulu);
            zulu = zulu.CommandOrigin;
            zulu = zulu.IMAGE_RECS_SUBMENU;
            if(!(zulu !== tango)) { _fun59694_ip = 577; continue _fun59694 }
 575:
            return mike;
 577:
            mike = _closure1_slot5;
            mike = mike.ApplicationLauncherCommand;
            return mike;
 589:
            entity = _closure1_slot5;
            entity = entity.SlashCommand;
            return entity;
        }
    };
    zulu['getCommandAttachmentDraftType'] = tango;
    tango = function(argFoo) { // Original name: getCommandTriggerSection
        _fun59695: for(var _fun59695_ip = 0; ; ) switch(_fun59695_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike == entity)) { _fun59695_ip = 13; continue _fun59695 }
 9:
            mike = undefined;
            return mike;
 13:
            tango = entity.id;
            zulu = _closure1_slot6;
            zulu = zulu.BUILT_IN;
            if(!(tango !== zulu)) { _fun59695_ip = 126; continue _fun59695 }
 35:
            zulu = entity.id;
            entity = _closure1_slot6;
            entity = entity.FRECENCY;
            if(!(zulu !== entity)) { _fun59695_ip = 90; continue _fun59695 }
 54:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 7;
            zulu = zulu[entity];
            entity = undefined;
            entity = tango.bind(entity)(zulu);
            entity = entity.ApplicationCommandTriggerSections;
            entity = entity.APP;
            _fun59695_ip = 124; continue _fun59695;
 90:
            report = _closure1_slot0;
            tango = _closure1_slot3;
            zulu = 7;
            tango = tango[zulu];
            zulu = undefined;
            zulu = report.bind(zulu)(tango);
            zulu = zulu.ApplicationCommandTriggerSections;
            entity = zulu.FRECENCY;
 124:
            _fun59695_ip = 160; continue _fun59695;
 126:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 7;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.ApplicationCommandTriggerSections;
            entity = mike.BUILT_IN;
 160:
            return entity;
        }
    };
    zulu['getCommandTriggerSection'] = tango;
    tango = function(argFoo, argBar) { // Original name: getApplicationCommandSection
        _fun59696: for(var _fun59696_ip = 0; ; ) switch(_fun59696_ip) {
 0:
            tango = argFoo;
            zulu = argBar;
            entity = {};
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 7;
            mike = oscar[mike];
            options = undefined;
            mike = report.bind(options)(mike);
            mike = mike.ApplicationCommandSectionType;
            mike = mike.APPLICATION;
            entity['type'] = mike;
            mike = tango.id;
            entity['id'] = mike;
            mike = null;
            oscar = mike == tango;
            report = undefined;
            if(oscar) { _fun59696_ip = 89; continue _fun59696 }
 69:
            oscar = tango.bot;
            golf = mike == oscar;
            report = undefined;
            if(golf) { _fun59696_ip = 89; continue _fun59696 }
 84:
            report = oscar.username;
 89:
            if(!(mike == report)) { _fun59696_ip = 98; continue _fun59696 }
 93:
            report = tango.name;
 98:
            entity['name'] = report;
            report = tango.icon;
            entity['icon'] = report;
            entity['application'] = tango;
            mike = mike != zulu;
            if(!mike) { _fun59696_ip = 125; continue _fun59696 }
 122:
            mike = zulu;
 125:
            entity['isUserApp'] = mike;
            return entity;
        }
    };
    zulu['getApplicationCommandSection'] = tango;
    tango = function(argFoo) { // Original name: extractInteractionDataProps
        _fun59697: for(var _fun59697_ip = 0; ; ) switch(_fun59697_ip) {
 0:
            entity = argFoo;
            options = entity.id;
            mike = entity.options;
            tango = null;
            report = tango == mike;
            oscar = undefined;
            if(report) { _fun59697_ip = 41; continue _fun59697 }
 26:
            golf = mike.find;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND_GROUP;
                entity = mike === entity;
                return entity;
            };
            oscar = golf.bind(mike)(report);
 41:
            report = options;
            if(!(tango != oscar)) { _fun59697_ip = 92; continue _fun59697 }
 48:
            yankee = _closure1_slot7;
            offset = oscar.name;
            golf = global;
            golf = golf.HermesInternal;
            verify = golf.concat;
            golf = '';
            golf = verify.bind(golf)(yankee, offset);
            report = options + golf;
            mike = oscar.options;
 92:
            oscar = tango == mike;
            entity = undefined;
            if(oscar) { _fun59697_ip = 116; continue _fun59697 }
 101:
            oscar = mike.find;
            zulu = function(argFoo) {
                entity = argFoo;
                mike = entity.type;
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 6;
                zulu = zulu[entity];
                entity = undefined;
                entity = tango.bind(entity)(zulu);
                entity = entity.ApplicationCommandOptionType;
                entity = entity.SUB_COMMAND;
                entity = mike === entity;
                return entity;
            };
            entity = oscar.bind(mike)(zulu);
 116:
            zulu = report;
            if(!(tango != entity)) { _fun59697_ip = 167; continue _fun59697 }
 123:
            options = _closure1_slot7;
            golf = entity.name;
            tango = global;
            tango = tango.HermesInternal;
            oscar = tango.concat;
            tango = '';
            tango = oscar.bind(tango)(options, golf);
            zulu = report + tango;
            mike = entity.options;
 167:
            entity = {};
            entity['commandKey'] = zulu;
            entity['interactionOptions'] = mike;
            return entity;
        }
    };
    zulu['extractInteractionDataProps'] = tango;
    tango = function(argFoo) { // Original name: trackCommandSelected
        _fun59700: for(var _fun59700_ip = 0; ; ) switch(_fun59700_ip) {
 0:
            entity = argFoo;
            offset = entity.command;
            foxtrot = entity.location;
            romeo = entity.triggerSection;
            yankee = entity.queryLength;
            verify = entity.sectionName;
            options = entity.query;
            golf = entity.searchResultsPosition;
            oscar = entity.source;
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            entity = 12;
            zulu = zulu[entity];
            entity = undefined;
            report = tango.bind(entity)(zulu);
            tango = report.trackWithMetadata;
            mike = _closure1_slot8;
            zulu = mike.APPLICATION_COMMAND_SELECTED;
            mike = {};
            sizing = offset.rootCommand;
            kilo = null;
            output = kilo == sizing;
            backup = undefined;
            if(output) { _fun59700_ip = 113; continue _fun59700 }
 108:
            backup = sizing.id;
 113:
            if(!(kilo == backup)) { _fun59700_ip = 122; continue _fun59700 }
 117:
            backup = offset.id;
 122:
            mike['command_id'] = backup;
            backup = offset.applicationId;
            mike['application_id'] = backup;
            mike['location'] = foxtrot;
            mike['section'] = romeo;
            mike['query_length'] = yankee;
            offset = offset.displayName;
            offset = offset.length;
            mike['command_text_length'] = offset;
            mike['section_name'] = verify;
            mike['query'] = options;
            mike['search_results_position'] = golf;
            mike['source'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['trackCommandSelected'] = tango;
    mike = function(argFoo) { // Original name: getInitialInteractionMetadata
        _fun59701: for(var _fun59701_ip = 0; ; ) switch(_fun59701_ip) {
 0:
            entity = argFoo;
            zulu = entity.interactionMetadata;
            entity = null;
            mike = entity == zulu;
            if(mike) { _fun59701_ip = 45; continue _fun59701 }
 18:
            mike = 'triggering_interaction_metadata';
            tango = mike in zulu;
            mike = zulu;
            if(!tango) { _fun59701_ip = 42; continue _fun59701 }
 34:
            mike = zulu.triggering_interaction_metadata;
 42:
            entity = mike;
 45:
            return entity;
        }
    };
    zulu['getInitialInteractionMetadata'] = mike;
    return entity;
})();