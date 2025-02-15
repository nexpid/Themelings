// app/modules/guild_onboarding/GuildOnboardingUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, _, argFred, argPlugh) {
    golf = argBar;
    verify = argBaz;
    zulu = argFred;
    options = argPlugh;
    var _closure1_slot0 = golf;
    var _closure1_slot1 = verify;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = options;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun60181: for(var _fun60181_ip = 0; ; ) switch(_fun60181_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun60181_ip = 46; continue _fun60181 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun60181_ip = 55; continue _fun60181 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun60181_ip = 343; continue _fun60181 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun60181_ip = 323; continue _fun60181 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun60181_ip = 283; continue _fun60181 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun60181_ip = 270; continue _fun60181 }
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
            if(!golf) { _fun60181_ip = 163; continue _fun60181 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun60181_ip = 179; continue _fun60181 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun60181_ip = 249; continue _fun60181 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun60181_ip = 249; continue _fun60181 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun60181_ip = 234; continue _fun60181 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun60181_ip = 247; continue _fun60181 }
 234:
            verify = _closure1_slot14;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun60181_ip = 265; continue _fun60181;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun60181_ip = 283; continue _fun60181;
 270:
            golf = _closure1_slot14;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun60181_ip = 323; continue _fun60181 }
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
            if(!tango) { _fun60181_ip = 330; continue _fun60181 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun60182: for(var _fun60182_ip = 0; ; ) switch(_fun60182_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun60182_ip = 56; continue _fun60182 }
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
                    _fun60182_ip = 67; continue _fun60182;
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
    var _closure1_slot13 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun60183: for(var _fun60183_ip = 0; ; ) switch(_fun60183_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun60183_ip = 23; continue _fun60183 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun60183_ip = 33; continue _fun60183 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun60183_ip = 70; continue _fun60183 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun60183_ip = 55; continue _fun60183 }
 70:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: getChannelCoverage
        oscar = argFoo;
        report = argBar;
        tango = argBaz;
        entity = global;
        entity = entity.Set;
        zulu = entity.prototype;
        zulu = Object.create(zulu, {constructor: {value: entity}});
        options = zulu;
        entity = new options[entity](golf);
        entity = entity instanceof Object ? entity : zulu;
        var _closure2_slot0 = entity;
        zulu = oscar.forEach;
        entity = function(argFoo) {
            entity = argFoo;
            zulu = entity.options;
            mike = zulu.forEach;
            entity = function(argFoo) {
                _fun60186: for(var _fun60186_ip = 0; ; ) switch(_fun60186_ip) {
 0:
                    zulu = argFoo;
                    report = null;
                    mike = report == zulu;
                    entity = undefined;
                    tango = undefined;
                    if(mike) { _fun60186_ip = 29; continue _fun60186 }
 16:
                    zulu = zulu.channelIds;
                    mike = report == zulu;
                    tango = zulu;
 29:
                    if(mike) { _fun60186_ip = 49; continue _fun60186 }
 32:
                    zulu = tango.forEach;
                    mike = function(argFoo) {
                        zulu = _closure2_slot0;
                        mike = zulu.add;
                        entity = argFoo;
                        entity = mike.bind(zulu)(entity);
                        entity = undefined;
                        return entity;
                    };
                    mike = zulu.bind(tango)(mike);
 49:
                    return entity;
                }
            };
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity = zulu.bind(oscar)(entity);
        zulu = report.forEach;
        entity = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.add;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(report)(entity);
        zulu = tango.filter;
        entity = function(argFoo) {
            _fun60189: for(var _fun60189_ip = 0; ; ) switch(_fun60189_ip) {
 0:
                tango = argFoo;
                entity = tango.isCategory;
                entity = entity.bind(tango)();
                entity = !entity;
                if(!entity) { _fun60189_ip = 32; continue _fun60189 }
 19:
                mike = tango.isThread;
                mike = mike.bind(tango)();
                entity = !mike;
 32:
                if(!entity) { _fun60189_ip = 68; continue _fun60189 }
 35:
                report = _closure1_slot1;
                zulu = _closure1_slot3;
                mike = 8;
                mike = zulu[mike];
                zulu = undefined;
                mike = report.bind(zulu)(mike);
                mike = mike.bind(zulu)(tango);
                entity = !mike;
 68:
                return entity;
            }
        };
        tango = zulu.bind(tango)(entity);
        zulu = tango.filter;
        entity = function(argFoo) {
            _fun60190: for(var _fun60190_ip = 0; ; ) switch(_fun60190_ip) {
 0:
                zulu = argFoo;
                report = _closure2_slot0;
                mike = report.has;
                entity = zulu.id;
                entity = mike.bind(report)(entity);
                if(entity) { _fun60190_ip = 66; continue _fun60190 }
 28:
                report = zulu.parent_id;
                mike = null;
                mike = mike != report;
                if(!mike) { _fun60190_ip = 63; continue _fun60190 }
 43:
                report = _closure2_slot0;
                tango = report.has;
                zulu = zulu.parent_id;
                mike = tango.bind(report)(zulu);
 63:
                entity = mike;
 66:
                return entity;
            }
        };
        zulu = zulu.bind(tango)(entity);
        entity = new Array(2);
        entity[0] = zulu;
        zulu = tango.filter;
        mike = function(argFoo) {
            _fun60191: for(var _fun60191_ip = 0; ; ) switch(_fun60191_ip) {
 0:
                zulu = argFoo;
                report = _closure2_slot0;
                mike = report.has;
                entity = zulu.id;
                entity = mike.bind(report)(entity);
                if(entity) { _fun60191_ip = 66; continue _fun60191 }
 28:
                report = zulu.parent_id;
                mike = null;
                mike = mike != report;
                if(!mike) { _fun60191_ip = 63; continue _fun60191 }
 43:
                report = _closure2_slot0;
                tango = report.has;
                zulu = zulu.parent_id;
                mike = tango.bind(report)(zulu);
 63:
                entity = mike;
 66:
                entity = !entity;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        entity[1] = mike;
        return entity;
    };
    var _closure1_slot15 = entity;
    tango = function(argFoo) { // Original name: isChattableChannel
        _fun60192: for(var _fun60192_ip = 0; ; ) switch(_fun60192_ip) {
 0:
            golf = argFoo;
            entity = null;
            entity = entity != golf;
            if(!entity) { _fun60192_ip = 146; continue _fun60192 }
 15:
            zulu = _closure1_slot0;
            report = _closure1_slot3;
            mike = 9;
            mike = report[mike];
            options = undefined;
            oscar = zulu.bind(options)(mike);
            report = oscar.canChannelBeDefault;
            zulu = golf.guild_id;
            mike = golf.id;
            mike = report.bind(oscar)(zulu, mike);
            zulu = !mike;
            mike = !zulu;
            if(zulu) { _fun60192_ip = 143; continue _fun60192 }
 71:
            zulu = golf.isForumChannel;
            zulu = zulu.bind(golf)();
            oscar = _closure1_slot2;
            verify = _closure1_slot3;
            report = 10;
            report = verify[report];
            oscar = oscar.bind(options)(report);
            report = oscar.canEveryoneRole;
            tango = _closure1_slot10;
            if(zulu) { _fun60192_ip = 128; continue _fun60192 }
 114:
            zulu = tango.SEND_MESSAGES;
            zulu = report.bind(oscar)(zulu, golf);
            _fun60192_ip = 140; continue _fun60192;
 128:
            tango = tango.SEND_MESSAGES_IN_THREADS;
            zulu = report.bind(oscar)(tango, golf);
 140:
            mike = zulu;
 143:
            entity = mike;
 146:
            return entity;
        }
    };
    var _closure1_slot16 = tango;
    entity = function(argFoo, argBar) { // Original name: getFlattenedDefaultChannels
        _fun60193: for(var _fun60193_ip = 0; ; ) switch(_fun60193_ip) {
 0:
            romeo = argBar;
            yankee = arguments[2];
            offset = arguments[3];
            verify = undefined;
            if(!(yankee === verify)) { _fun60193_ip = 22; continue _fun60193 }
 17:
            yankee = function(argFoo) { // Original name: r
                entity = argFoo;
                return entity;
            };
 22:
            if(!(offset === verify)) { _fun60193_ip = 31; continue _fun60193 }
 26:
            offset = function() { // Original name: l
                entity = true;
                return entity;
            };
 31:
            entity = new Array(0);
            zulu = _closure1_slot13;
            report = _closure1_slot5;
            tango = report.getChannels;
            mike = argFoo;
            tango = tango.bind(report)(mike);
            mike = _closure1_slot6;
            mike = tango[mike];
            golf = zulu.bind(verify)(mike);
            zulu = golf.bind(verify)();
            mike = zulu.done;
            oscar = null;
            report = 9;
            tango = zulu;
            zulu = undefined;
            if(mike) { _fun60193_ip = 285; continue _fun60193 }
 98:
            mike = tango.value;
            mike = mike.channel;
            backup = _closure1_slot0;
            foxtrot = _closure1_slot3;
            foxtrot = foxtrot[report];
            sizing = backup.bind(verify)(foxtrot);
            kilo = sizing.canChannelBeDefault;
            backup = mike.guild_id;
            foxtrot = mike.id;
            backup = kilo.bind(sizing)(backup, foxtrot);
            foxtrot = zulu;
            if(!backup) { _fun60193_ip = 264; continue _fun60193 }
 153:
            kilo = romeo.includes;
            backup = mike.id;
            backup = kilo.bind(romeo)(backup);
            if(!backup) { _fun60193_ip = 184; continue _fun60193 }
 171:
            backup = mike.isCategory;
            backup = backup.bind(mike)();
            if(!backup) { _fun60193_ip = 235; continue _fun60193 }
 184:
            backup = mike.isThread;
            backup = backup.bind(mike)();
            foxtrot = zulu;
            if(backup) { _fun60193_ip = 264; continue _fun60193 }
 200:
            backup = mike.parent_id;
            foxtrot = zulu;
            if(!(oscar != backup)) { _fun60193_ip = 264; continue _fun60193 }
 213:
            kilo = romeo.includes;
            backup = mike.parent_id;
            backup = kilo.bind(romeo)(backup);
            foxtrot = zulu;
            if(!backup) { _fun60193_ip = 264; continue _fun60193 }
 235:
            mike = yankee.bind(verify)(mike);
            backup = offset.bind(verify)(mike);
            foxtrot = mike;
            if(!backup) { _fun60193_ip = 264; continue _fun60193 }
 251:
            backup = entity.push;
            backup = backup.bind(entity)(mike);
            foxtrot = mike;
 264:
            backup = golf.bind(verify)();
            mike = backup.done;
            zulu = foxtrot;
            tango = backup;
            if(!mike) { _fun60193_ip = 98; continue _fun60193 }
 285:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    entity = function(argFoo, argBar) { // Original name: areStatesEqual
        _fun60196: for(var _fun60196_ip = 0; ; ) switch(_fun60196_ip) {
 0:
            tango = argFoo;
            golf = argBar;
            mike = 0;
            entity = tango[mike];
            zulu = entity.length;
            entity = golf[mike];
            entity = entity.length;
            entity = zulu === entity;
            if(!entity) { _fun60196_ip = 58; continue _fun60196 }
 33:
            zulu = 1;
            report = tango[zulu];
            report = report.length;
            zulu = golf[zulu];
            zulu = zulu.length;
            entity = report === zulu;
 58:
            if(!entity) { _fun60196_ip = 140; continue _fun60196 }
 61:
            verify = _closure1_slot1;
            report = _closure1_slot3;
            options = 12;
            report = report[options];
            oscar = undefined;
            verify = verify.bind(oscar)(report);
            report = tango[mike];
            mike = golf[mike];
            mike = verify.bind(oscar)(report, mike);
            if(!mike) { _fun60196_ip = 137; continue _fun60196 }
 103:
            report = _closure1_slot1;
            zulu = _closure1_slot3;
            zulu = zulu[options];
            report = report.bind(oscar)(zulu);
            zulu = 1;
            tango = tango[zulu];
            zulu = golf[zulu];
            mike = report.bind(oscar)(tango, zulu);
 137:
            entity = mike;
 140:
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    report = global;
    yankee = report.Object;
    offset = yankee.defineProperty;
    oscar = {};
    entity = true;
    oscar['value'] = entity;
    entity = '__esModule';
    entity = offset.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = options[entity];
    entity = undefined;
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 1;
    offset = options[oscar];
    offset = verify.bind(entity)(offset);
    var _closure1_slot5 = offset;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GUILD_SELECTABLE_CHANNELS_KEY;
    var _closure1_slot6 = oscar;
    oscar = 2;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 3;
    oscar = options[oscar];
    oscar = verify.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 4;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    verify = oscar.GuildFeatures;
    var _closure1_slot9 = verify;
    oscar = oscar.Permissions;
    var _closure1_slot10 = oscar;
    oscar = 5;
    oscar = options[oscar];
    oscar = golf.bind(entity)(oscar);
    oscar = oscar.GuildMemberFlags;
    var _closure1_slot11 = oscar;
    verify = report.Date;
    report = verify.prototype;
    oscar = Object.create(report, {constructor: {value: verify}});
    backup = 1682488800000.0;
    kilo = oscar;
    report = new kilo[verify](backup, foxtrot);
    report = report instanceof Object ? report : oscar;
    var _closure1_slot12 = report;
    oscar = 13;
    oscar = options[oscar];
    options = golf.bind(entity)(oscar);
    golf = options.fileFinishedImporting;
    oscar = 'modules/guild_onboarding/GuildOnboardingUtils.tsx';
    oscar = golf.bind(options)(oscar);
    zulu['ONBOARDING_EPOCH'] = report;
    report = function(argFoo) { // Original name: useGuildOnboardingSettingsAvailable
        mike = argFoo;
        var _closure2_slot0 = mike;
        tango = _closure1_slot0;
        zulu = _closure1_slot3;
        mike = 6;
        zulu = zulu[mike];
        mike = undefined;
        tango = tango.bind(mike)(zulu);
        zulu = tango.useStateFromStores;
        oscar = _closure1_slot7;
        mike = new Array(2);
        mike[0] = oscar;
        report = _closure1_slot8;
        mike[1] = report;
        entity = function() {
            _fun60198: for(var _fun60198_ip = 0; ; ) switch(_fun60198_ip) {
 0:
                tango = _closure1_slot7;
                zulu = tango.getGuild;
                entity = _closure2_slot0;
                golf = zulu.bind(tango)(entity);
                entity = null;
                tango = entity == golf;
                if(tango) { _fun60198_ip = 57; continue _fun60198 }
 33:
                zulu = golf.hasFeature;
                entity = _closure1_slot9;
                entity = entity.COMMUNITY;
                entity = zulu.bind(golf)(entity);
                tango = !entity;
 57:
                entity = !tango;
                oscar = _closure1_slot8;
                report = oscar.can;
                zulu = _closure1_slot10;
                zulu = zulu.MANAGE_GUILD;
                zulu = report.bind(oscar)(zulu, golf);
                report = oscar.can;
                mike = _closure1_slot10;
                mike = mike.MANAGE_ROLES;
                mike = report.bind(oscar)(mike, golf);
                if(tango) { _fun60198_ip = 114; continue _fun60198 }
 111:
                entity = zulu;
 114:
                if(!entity) { _fun60198_ip = 120; continue _fun60198 }
 117:
                entity = mike;
 120:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useGuildOnboardingSettingsAvailable'] = report;
    report = function(argFoo) { // Original name: isGuildOnboardingSettingsAvailable
        _fun60199: for(var _fun60199_ip = 0; ; ) switch(_fun60199_ip) {
 0:
            tango = _closure1_slot7;
            zulu = tango.getGuild;
            entity = argFoo;
            golf = zulu.bind(tango)(entity);
            entity = null;
            tango = entity == golf;
            if(tango) { _fun60199_ip = 53; continue _fun60199 }
 29:
            zulu = golf.hasFeature;
            entity = _closure1_slot9;
            entity = entity.COMMUNITY;
            entity = zulu.bind(golf)(entity);
            tango = !entity;
 53:
            entity = !tango;
            oscar = _closure1_slot8;
            report = oscar.can;
            zulu = _closure1_slot10;
            zulu = zulu.MANAGE_GUILD;
            zulu = report.bind(oscar)(zulu, golf);
            report = oscar.can;
            mike = _closure1_slot10;
            mike = mike.MANAGE_ROLES;
            mike = report.bind(oscar)(mike, golf);
            if(tango) { _fun60199_ip = 110; continue _fun60199 }
 107:
            entity = zulu;
 110:
            if(!entity) { _fun60199_ip = 116; continue _fun60199 }
 113:
            entity = mike;
 116:
            return entity;
        }
    };
    zulu['isGuildOnboardingSettingsAvailable'] = report;
    report = function(argFoo, argBar) { // Original name: isBlockedByOnboarding
        _fun60200: for(var _fun60200_ip = 0; ; ) switch(_fun60200_ip) {
 0:
            oscar = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu != oscar)) { _fun60200_ip = 226; continue _fun60200 }
 15:
            report = oscar.hasFeature;
            tango = _closure1_slot9;
            tango = tango.GUILD_ONBOARDING;
            tango = report.bind(oscar)(tango);
            if(!tango) { _fun60200_ip = 226; continue _fun60200 }
 45:
            if(!(zulu != entity)) { _fun60200_ip = 222; continue _fun60200 }
 52:
            tango = entity.joinedAt;
            if(!(zulu != tango)) { _fun60200_ip = 222; continue _fun60200 }
 65:
            tango = global;
            oscar = tango.Date;
            verify = entity.joinedAt;
            report = oscar.prototype;
            report = Object.create(report, {constructor: {value: oscar}});
            offset = report;
            tango = new offset[oscar](verify, options);
            report = tango instanceof Object ? tango : report;
            tango = _closure1_slot12;
            if(!(!(report < tango))) { _fun60200_ip = 218; continue _fun60200 }
 107:
            entity = entity.flags;
            tango = zulu != entity;
            zulu = 0;
            if(!tango) { _fun60200_ip = 124; continue _fun60200 }
 121:
            zulu = entity;
 124:
            tango = _closure1_slot2;
            entity = _closure1_slot3;
            golf = 7;
            entity = entity[golf];
            oscar = undefined;
            report = tango.bind(oscar)(entity);
            tango = report.hasFlag;
            entity = _closure1_slot11;
            entity = entity.STARTED_ONBOARDING;
            entity = tango.bind(report)(zulu, entity);
            report = zulu;
            if(!entity) { _fun60200_ip = 216; continue _fun60200 }
 174:
            tango = _closure1_slot2;
            zulu = _closure1_slot3;
            zulu = zulu[golf];
            tango = tango.bind(oscar)(zulu);
            zulu = tango.hasFlag;
            mike = _closure1_slot11;
            mike = mike.COMPLETED_ONBOARDING;
            mike = zulu.bind(tango)(report, mike);
            entity = !mike;
 216:
            return entity;
 218:
            entity = false;
            return entity;
 222:
            entity = false;
            return entity;
 226:
            entity = false;
            return entity;
        }
    };
    zulu['isBlockedByOnboarding'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: getChannelCoverageForOnboarding
        report = _closure1_slot15;
        tango = _closure1_slot5;
        zulu = tango.getChannels;
        mike = argFoo;
        mike = zulu.bind(tango)(mike);
        entity = _closure1_slot6;
        zulu = mike[entity];
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.channel;
            return entity;
        };
        tango = mike.bind(zulu)(entity);
        zulu = undefined;
        mike = argBar;
        entity = argBaz;
        entity = report.bind(zulu)(mike, entity, tango);
        return entity;
    };
    zulu['getChannelCoverageForOnboarding'] = report;
    report = function(argFoo, argBar, argBaz) { // Original name: useChannelCoverageForOnboarding
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot15;
        oscar = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 6;
        zulu = tango[zulu];
        tango = undefined;
        options = oscar.bind(tango)(zulu);
        golf = options.useStateFromStores;
        zulu = _closure1_slot5;
        oscar = new Array(1);
        oscar[0] = zulu;
        zulu = function() {
            zulu = _closure1_slot5;
            mike = zulu.getChannels;
            entity = _closure2_slot0;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        zulu = golf.bind(options)(oscar, zulu);
        mike = _closure1_slot6;
        zulu = zulu[mike];
        mike = zulu.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.channel;
            return entity;
        };
        zulu = mike.bind(zulu)(entity);
        mike = argBar;
        entity = argBaz;
        entity = report.bind(tango)(mike, entity, zulu);
        return entity;
    };
    zulu['useChannelCoverageForOnboarding'] = report;
    report = function(argFoo) { // Original name: isChattableChannelId
        zulu = _closure1_slot16;
        tango = _closure1_slot4;
        mike = tango.getChannel;
        entity = argFoo;
        mike = mike.bind(tango)(entity);
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    zulu['isChattableChannelId'] = report;
    zulu['isChattableChannel'] = tango;
    tango = function(argFoo) { // Original name: useIsChattableChannel
        mike = argFoo;
        var _closure2_slot0 = mike;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        tango = report.bind(zulu)(tango);
        zulu = tango.useStateFromStores;
        report = _closure1_slot4;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun60208: for(var _fun60208_ip = 0; ; ) switch(_fun60208_ip) {
 0:
                tango = _closure1_slot4;
                zulu = tango.getChannel;
                entity = _closure2_slot0;
                tango = zulu.bind(tango)(entity);
                report = _closure1_slot0;
                zulu = _closure1_slot3;
                entity = 11;
                entity = zulu[entity];
                zulu = undefined;
                report = report.bind(zulu)(entity);
                entity = report.isNotNullish;
                entity = entity.bind(report)(tango);
                if(!entity) { _fun60208_ip = 69; continue _fun60208 }
 60:
                mike = _closure1_slot16;
                entity = mike.bind(zulu)(tango);
 69:
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['useIsChattableChannel'] = tango;
    tango = function(argFoo, argBar, argBaz) { // Original name: getMinimumSetOfDefaultChannelIds
        _fun60209: for(var _fun60209_ip = 0; ; ) switch(_fun60209_ip) {
 0:
            options = argFoo;
            tango = argBaz;
            golf = arguments[3];
            var _closure2_slot0 = options;
            oscar = undefined;
            if(!(golf === oscar)) { _fun60209_ip = 26; continue _fun60209 }
 21:
            golf = function() { // Original name: t
                entity = true;
                return entity;
            };
 26:
            var _closure2_slot1 = golf;
            var _closure2_slot2 = oscar;
            report = _closure1_slot17;
            yankee = argBar;
            offset = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            foxtrot = undefined;
            romeo = options;
            verify = golf;
            entity = foxtrot[report](romeo, yankee, offset, verify, options);
            _closure2_slot2 = entity;
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun60212: for(var _fun60212_ip = 0; ; ) switch(_fun60212_ip) {
 0:
                    zulu = argFoo;
                    entity = zulu.required;
                    if(!entity) { _fun60212_ip = 135; continue _fun60212 }
 14:
                    verify = _closure1_slot17;
                    options = _closure2_slot0;
                    tango = zulu.options;
                    report = 0;
                    offset = tango[report];
                    tango = null;
                    yankee = tango == offset;
                    golf = undefined;
                    oscar = undefined;
                    if(yankee) { _fun60212_ip = 58; continue _fun60212 }
 52:
                    oscar = offset.channelIds;
 58:
                    if(!(tango == oscar)) { _fun60212_ip = 66; continue _fun60212 }
 62:
                    oscar = new Array(0);
 66:
                    tango = function(argFoo) {
                        entity = argFoo;
                        entity = entity.id;
                        return entity;
                    };
                    oscar = verify.bind(golf)(options, oscar, tango);
                    tango = zulu.options;
                    zulu = tango.reduce;
                    mike = function(argFoo, argBar) {
                        _fun60214: for(var _fun60214_ip = 0; ; ) switch(_fun60214_ip) {
 0:
                            entity = argFoo;
                            zulu = argBar;
                            report = zulu.channelIds;
                            tango = null;
                            if(!(tango != report)) { _fun60214_ip = 75; continue _fun60214 }
 20:
                            golf = _closure1_slot17;
                            yankee = _closure2_slot0;
                            offset = zulu.channelIds;
                            romeo = undefined;
                            verify = function(argFoo) {
                                entity = argFoo;
                                entity = entity.id;
                                return entity;
                            };
                            options = function(argFoo) {
                                _fun60216: for(var _fun60216_ip = 0; ; ) switch(_fun60216_ip) {
 0:
                                    tango = argFoo;
                                    zulu = _closure2_slot1;
                                    entity = undefined;
                                    entity = zulu.bind(entity)(tango);
                                    if(!entity) { _fun60216_ip = 37; continue _fun60216 }
 20:
                                    zulu = _closure2_slot2;
                                    mike = zulu.includes;
                                    mike = mike.bind(zulu)(tango);
                                    entity = !mike;
 37:
                                    return entity;
                                }
                            };
                            mike = romeo[golf](yankee, offset, verify, options, golf);
                            tango = mike.length;
                            zulu = entity.length;
                            if(!(tango < zulu)) { _fun60214_ip = 73; continue _fun60214 }
 70:
                            entity = mike;
 73:
                            return entity;
 75:
                            entity = new Array(0);
                            return entity;
                        }
                    };
                    foxtrot = zulu.bind(tango)(mike, oscar);
                    zulu = _closure2_slot2;
                    mike = zulu.push;
                    entity = new Array(0);
                    backup = entity;
                    romeo = 0;
                    tango = arraySpread(backup, foxtrot, romeo);
                    backup = mike;
                    foxtrot = entity;
                    romeo = zulu;
                    entity = apply(backup, foxtrot, romeo);
 135:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['getMinimumSetOfDefaultChannelIds'] = tango;
    tango = function(argFoo, argBar) { // Original name: getChattableDefaultChannels
        _fun60217: for(var _fun60217_ip = 0; ; ) switch(_fun60217_ip) {
 0:
            verify = argFoo;
            tango = _closure1_slot17;
            report = undefined;
            mike = argBar;
            mike = tango.bind(report)(verify, mike);
            tango = {};
            oscar = _closure1_slot13;
            options = _closure1_slot5;
            golf = options.getChannels;
            golf = golf.bind(options)(verify);
            zulu = _closure1_slot6;
            zulu = golf[zulu];
            golf = oscar.bind(report)(zulu);
            oscar = golf.bind(report)();
            zulu = oscar.done;
            if(zulu) { _fun60217_ip = 103; continue _fun60217 }
 69:
            options = oscar.value;
            zulu = options.channel;
            zulu = zulu.id;
            tango[zulu] = options;
            options = golf.bind(report)();
            zulu = options.done;
            oscar = options;
            if(!zulu) { _fun60217_ip = 69; continue _fun60217 }
 103:
            oscar = mike.map;
            zulu = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            zulu = oscar.bind(mike)(zulu);
            entity = function(argFoo, argBar) { // Original name: filterChattableChannels
                zulu = argFoo;
                mike = argBar;
                var _closure3_slot0 = mike;
                mike = zulu.filter;
                entity = function(argFoo) {
                    _fun60219: for(var _fun60219_ip = 0; ; ) switch(_fun60219_ip) {
 0:
                        zulu = _closure1_slot16;
                        mike = _closure3_slot0;
                        entity = argFoo;
                        tango = mike[entity];
                        entity = null;
                        report = entity == tango;
                        mike = undefined;
                        entity = undefined;
                        if(report) { _fun60219_ip = 39; continue _fun60219 }
 34:
                        entity = tango.channel;
 39:
                        entity = zulu.bind(mike)(entity);
                        return entity;
                    }
                };
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = entity.bind(report)(zulu, tango);
            entity = new Array(2);
            entity[0] = zulu;
            entity[1] = mike;
            return entity;
        }
    };
    zulu['getChattableDefaultChannels'] = tango;
    tango = function(argFoo, argBar) { // Original name: useChattableDefaultChannels
        options = argFoo;
        golf = argBar;
        var _closure2_slot0 = options;
        var _closure2_slot1 = golf;
        report = _closure1_slot0;
        tango = _closure1_slot3;
        zulu = 6;
        tango = tango[zulu];
        zulu = undefined;
        oscar = report.bind(zulu)(tango);
        report = oscar.useStateFromStores;
        zulu = _closure1_slot5;
        tango = new Array(1);
        tango[0] = zulu;
        zulu = new Array(2);
        zulu[0] = options;
        zulu[1] = golf;
        verify = _closure1_slot18;
        yankee = function() {
            _fun60222: for(var _fun60222_ip = 0; ; ) switch(_fun60222_ip) {
 0:
                mike = new Array(0);
                zulu = new Array(0);
                yankee = {};
                tango = _closure1_slot13;
                oscar = _closure1_slot5;
                report = oscar.getChannels;
                entity = _closure2_slot0;
                report = report.bind(oscar)(entity);
                entity = _closure1_slot6;
                entity = report[entity];
                options = undefined;
                golf = tango.bind(options)(entity);
                tango = golf.bind(options)();
                entity = tango.done;
                oscar = null;
                report = 9;
                if(entity) { _fun60222_ip = 336; continue _fun60222 }
 74:
                entity = tango.value;
                foxtrot = _closure1_slot0;
                romeo = _closure1_slot3;
                romeo = romeo[report];
                kilo = foxtrot.bind(options)(romeo);
                backup = kilo.canChannelBeDefault;
                romeo = entity.channel;
                foxtrot = romeo.guild_id;
                romeo = entity.channel;
                romeo = romeo.id;
                romeo = backup.bind(kilo)(foxtrot, romeo);
                if(!romeo) { _fun60222_ip = 249; continue _fun60222 }
 131:
                kilo = _closure2_slot1;
                backup = kilo.has;
                foxtrot = entity.channel;
                foxtrot = foxtrot.id;
                foxtrot = backup.bind(kilo)(foxtrot);
                if(!foxtrot) { _fun60222_ip = 176; continue _fun60222 }
 158:
                kilo = entity.channel;
                backup = kilo.isCategory;
                backup = backup.bind(kilo)();
                foxtrot = !backup;
 176:
                if(foxtrot) { _fun60222_ip = 246; continue _fun60222 }
 179:
                kilo = entity.channel;
                backup = kilo.isThread;
                backup = backup.bind(kilo)();
                backup = !backup;
                if(!backup) { _fun60222_ip = 215; continue _fun60222 }
 200:
                kilo = entity.channel;
                kilo = kilo.parent_id;
                backup = oscar != kilo;
 215:
                if(!backup) { _fun60222_ip = 243; continue _fun60222 }
 218:
                output = _closure2_slot1;
                sizing = output.has;
                kilo = entity.channel;
                kilo = kilo.parent_id;
                backup = sizing.bind(output)(kilo);
 243:
                foxtrot = backup;
 246:
                romeo = foxtrot;
 249:
                if(!romeo) { _fun60222_ip = 318; continue _fun60222 }
 252:
                romeo = entity.channel;
                romeo = romeo.id;
                yankee[romeo] = entity;
                foxtrot = mike.push;
                romeo = entity.channel;
                romeo = foxtrot.bind(mike)(romeo);
                foxtrot = _closure1_slot16;
                romeo = entity.channel;
                romeo = foxtrot.bind(options)(romeo);
                if(!romeo) { _fun60222_ip = 318; continue _fun60222 }
 298:
                romeo = zulu.push;
                entity = entity.channel;
                entity = entity.id;
                entity = romeo.bind(zulu)(entity);
 318:
                romeo = golf.bind(options)();
                entity = romeo.done;
                tango = romeo;
                if(!entity) { _fun60222_ip = 74; continue _fun60222 }
 336:
                entity = new Array(2);
                entity[0] = zulu;
                entity[1] = mike;
                return entity;
            }
        };
        foxtrot = oscar;
        romeo = tango;
        offset = zulu;
        entity = foxtrot[report](romeo, yankee, offset, verify, options);
        return entity;
    };
    zulu['useChattableDefaultChannels'] = tango;
    tango = function(argFoo) { // Original name: getSelectedRoleIds
        tango = argFoo;
        entity = global;
        zulu = entity.Set;
        mike = tango.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.roleIds;
            return entity;
        };
        mike = mike.bind(tango)(entity);
        entity = mike.flat;
        tango = entity.bind(mike)();
        mike = tango.filter;
        oscar = _closure1_slot0;
        report = _closure1_slot3;
        entity = 11;
        report = report[entity];
        entity = undefined;
        entity = oscar.bind(entity)(report);
        entity = entity.isNotNullish;
        golf = mike.bind(tango)(entity);
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        options = mike;
        entity = new options[zulu](golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['getSelectedRoleIds'] = tango;
    mike = function(argFoo) { // Original name: getSelectedChannelIds
        tango = argFoo;
        entity = global;
        zulu = entity.Set;
        mike = tango.map;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.channelIds;
            return entity;
        };
        mike = mike.bind(tango)(entity);
        entity = mike.flat;
        tango = entity.bind(mike)();
        mike = tango.filter;
        oscar = _closure1_slot0;
        report = _closure1_slot3;
        entity = 11;
        report = report[entity];
        entity = undefined;
        entity = oscar.bind(entity)(report);
        entity = entity.isNotNullish;
        golf = mike.bind(tango)(entity);
        mike = zulu.prototype;
        mike = Object.create(mike, {constructor: {value: zulu}});
        options = mike;
        entity = new options[zulu](golf, oscar);
        entity = entity instanceof Object ? entity : mike;
        return entity;
    };
    zulu['getSelectedChannelIds'] = mike;
    return entity;
})();