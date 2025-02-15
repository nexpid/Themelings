// app/modules/guild_settings/audit_log/AuditLogUtils.tsx
export default (function(argFoo, argBar, argBaz, argCorge, argGrault, argFred, argPlugh) {
    verify = argBar;
    options = argBaz;
    zulu = argFred;
    offset = argPlugh;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = options;
    entity = argCorge;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = offset;
    report = function(argFoo, argBar) { // Original name: findChangeByKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = zulu.changes;
            entity = null;
            tango = entity != tango;
            if(!tango) { _fun00002_ip = 50; continue _fun00001 }
 27:
            tango = zulu.changes;
            zulu = tango.find;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 50:
            return entity;
        }
    };
    var _closure1_slot39 = report;
    entity = function(argFoo, argBar) { // Original name: findAllChangeByKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            tango = zulu.changes;
            entity = null;
            if(!(entity == tango)) { _fun00004_ip = 30; continue _fun00003 }
 24:
            entity = new Array(0);
            _fun00004_ip = 53; continue _fun00003;
 30:
            tango = zulu.changes;
            zulu = tango.filter;
            mike = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            entity = zulu.bind(tango)(mike);
 53:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar) { // Original name: getPermissionChanges
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscar = argFoo;
            report = argBar;
            mike = _closure1_slot2;
            entity = _closure1_slot3;
            yankee = 21;
            entity = entity[yankee];
            offset = undefined;
            tango = mike.bind(offset)(entity);
            mike = tango.deserialize;
            golf = 'string';
            options = typeof oscar;
            entity = 0;
            if(!(golf === options)) { _fun00006_ip = 53; continue _fun00005 }
 50:
            entity = oscar;
 53:
            tango = mike.bind(tango)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot3;
            entity = entity[yankee];
            mike = mike.bind(offset)(entity);
            entity = mike.deserialize;
            oscar = typeof report;
            zulu = 0;
            if(!(golf === oscar)) { _fun00006_ip = 93; continue _fun00005 }
 90:
            zulu = report;
 93:
            zulu = entity.bind(mike)(zulu);
            mike = _closure1_slot2;
            entity = _closure1_slot3;
            report = entity[yankee];
            oscar = mike.bind(offset)(report);
            report = oscar.remove;
            verify = report.bind(oscar)(zulu, tango);
            entity = entity[yankee];
            mike = mike.bind(offset)(entity);
            entity = mike.remove;
            options = entity.bind(mike)(tango, zulu);
            zulu = new Array(0);
            mike = new Array(0);
            oscar = _closure1_slot23;
            for(entity in oscar)
 168:
            {
 177:
                backup = entity;
                foxtrot = _closure1_slot23;
                backup = foxtrot[backup];
                kilo = _closure1_slot2;
                foxtrot = _closure1_slot3;
                foxtrot = foxtrot[yankee];
                kilo = kilo.bind(offset)(foxtrot);
                foxtrot = kilo.has;
                foxtrot = foxtrot.bind(kilo)(verify, backup);
                if(!foxtrot) { _fun00006_ip = 229; continue _fun00005 }
 219:
                foxtrot = zulu.push;
                foxtrot = foxtrot.bind(zulu)(backup);
 229:
                kilo = _closure1_slot2;
                foxtrot = _closure1_slot3;
                foxtrot = foxtrot[yankee];
                kilo = kilo.bind(offset)(foxtrot);
                foxtrot = kilo.has;
                foxtrot = foxtrot.bind(kilo)(options, backup);
                if(!foxtrot) { _fun00006_ip = 168; continue _fun00005 }
 260:
                foxtrot = mike.push;
                foxtrot = foxtrot.bind(mike)(backup);
                _fun00006_ip = 168; continue _fun00005;
            }
 272:
            entity = {};
            entity['added'] = zulu;
            entity['removed'] = mike;
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: convertForumTag
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zulu = argFoo;
            entity = null;
            mike = entity == zulu;
            if(mike) { _fun00008_ip = 82; continue _fun00007 }
 12:
            mike = {};
            tango = zulu.id;
            mike['id'] = tango;
            tango = zulu.name;
            mike['name'] = tango;
            oscar = zulu.emoji_id;
            report = 0;
            tango = undefined;
            if(!(report !== oscar)) { _fun00008_ip = 52; continue _fun00007 }
 46:
            tango = zulu.emoji_id;
 52:
            mike['emojiId'] = tango;
            tango = zulu.emoji_name;
            mike['emojiName'] = tango;
            zulu = zulu.moderated;
            mike['moderated'] = zulu;
            entity = mike;
 82:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    mike = function(argFoo) { // Original name: transformAvailableForumTagChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zulu = entity.oldValue;
            mike = entity.newValue;
            report = global;
            golf = report.Array;
            oscar = golf.isArray;
            oscar = oscar.bind(golf)(zulu);
            if(oscar) { _fun00010_ip = 42; continue _fun00009 }
 38:
            zulu = new Array(0);
 42:
            oscar = report.Array;
            report = oscar.isArray;
            report = report.bind(oscar)(mike);
            if(report) { _fun00010_ip = 65; continue _fun00009 }
 61:
            mike = new Array(0);
 65:
            report = zulu.length;
            oscar = 0;
            if(!(oscar === report)) { _fun00010_ip = 88; continue _fun00009 }
 76:
            report = mike.length;
            if(!(oscar !== report)) { _fun00010_ip = 518; continue _fun00009 }
 88:
            backup = {};
            var _closure2_slot0 = backup;
            foxtrot = {};
            var _closure2_slot1 = foxtrot;
            oscar = zulu.forEach;
            report = function(argFoo) {
                zulu = argFoo;
                mike = _closure2_slot0;
                entity = zulu.id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            report = oscar.bind(zulu)(report);
            report = mike.forEach;
            tango = function(argFoo) {
                zulu = argFoo;
                mike = _closure2_slot1;
                entity = zulu.id;
                mike[entity] = zulu;
                entity = undefined;
                return entity;
            };
            tango = report.bind(mike)(tango);
            report = zulu.length;
            tango = mike.length;
            if(!(report < tango)) { _fun00010_ip = 240; continue _fun00009 }
 148:
            offset = foxtrot;
            options = null;
            for(oscar in offset)
 161:
            {
 170:
                tango = oscar;
                report = backup[tango];
                if(options != report) { _fun00010_ip = 161; continue _fun00009 }
 181:
                golf = _closure1_slot9;
                oscar = _closure1_slot16;
                oscar = oscar.AVAILABLE_TAG_ADD;
                verify = _closure1_slot42;
                report = foxtrot[tango];
                tango = undefined;
                kilo = verify.bind(tango)(report);
                report = golf.prototype;
                report = Object.create(report, {constructor: {value: golf}});
                result = report;
                output = oscar;
                sizing = null;
                tango = new result[golf](output, sizing, kilo, backup);
                tango = tango instanceof Object ? tango : report;
                return tango;
            }
 240:
            zulu = zulu.length;
            mike = mike.length;
            if(!(zulu > mike)) { _fun00010_ip = 346; continue _fun00009 }
 254:
            options = backup;
            oscar = null;
            for(tango in options)
 267:
            {
 276:
                mike = tango;
                zulu = foxtrot[mike];
                if(oscar != zulu) { _fun00010_ip = 267; continue _fun00009 }
 287:
                report = _closure1_slot9;
                tango = _closure1_slot16;
                tango = tango.AVAILABLE_TAG_DELETE;
                golf = _closure1_slot42;
                zulu = backup[mike];
                mike = undefined;
                kilo = golf.bind(mike)(zulu);
                zulu = report.prototype;
                zulu = Object.create(zulu, {constructor: {value: report}});
                result = zulu;
                output = tango;
                sizing = null;
                mike = new result[report](output, sizing, kilo, backup);
                mike = mike instanceof Object ? mike : zulu;
                return mike;
            }
 346:
            yankee = backup;
            oscar = null;
            golf = undefined;
            for(options in yankee)
 364:
            {
 376:
                mike = options;
                tango = backup[mike];
                zulu = foxtrot[mike];
                mike = oscar == zulu;
                report = undefined;
                if(mike) { _fun00010_ip = 401; continue _fun00009 }
 396:
                report = zulu.name;
 401:
                mike = tango.name;
                if(!(report === mike)) { _fun00010_ip = 460; continue _fun00009 }
 410:
                mike = oscar == zulu;
                report = undefined;
                if(mike) { _fun00010_ip = 425; continue _fun00009 }
 419:
                report = zulu.emoji_id;
 425:
                mike = tango.emoji_id;
                if(!(report === mike)) { _fun00010_ip = 460; continue _fun00009 }
 435:
                mike = oscar == zulu;
                report = undefined;
                if(mike) { _fun00010_ip = 450; continue _fun00009 }
 444:
                report = zulu.emoji_name;
 450:
                mike = tango.emoji_name;
                if(report === mike) { _fun00010_ip = 364; continue _fun00009 }
 460:
                oscar = _closure1_slot9;
                report = _closure1_slot16;
                report = report.AVAILABLE_TAG_EDIT;
                mike = _closure1_slot42;
                sizing = mike.bind(golf)(tango);
                kilo = mike.bind(golf)(zulu);
                zulu = oscar.prototype;
                zulu = Object.create(zulu, {constructor: {value: oscar}});
                result = zulu;
                output = report;
                mike = new result[oscar](output, sizing, kilo, backup);
                mike = mike instanceof Object ? mike : zulu;
                return mike;
            }
 516:
            return entity;
 518:
            return entity;
        }
    };
    var _closure1_slot43 = mike;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertValue
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            mike = argFoo;
            options = argBar;
            golf = argBaz;
            report = mike.newValue;
            tango = mike.oldValue;
            zulu = mike.newValue;
            entity = null;
            if(!(entity != zulu)) { _fun00012_ip = 71; continue _fun00011 }
 33:
            zulu = mike.newValue;
            verify = undefined;
            oscar = options.bind(verify)(zulu);
            offset = entity != golf;
            if(!offset) { _fun00012_ip = 57; continue _fun00011 }
 53:
            offset = entity != oscar;
 57:
            zulu = oscar;
            if(!offset) { _fun00012_ip = 68; continue _fun00011 }
 63:
            zulu = golf.bind(verify)(oscar);
 68:
            report = zulu;
 71:
            zulu = mike.oldValue;
            if(!(entity != zulu)) { _fun00012_ip = 119; continue _fun00011 }
 81:
            zulu = mike.oldValue;
            oscar = undefined;
            zulu = options.bind(oscar)(zulu);
            options = entity != golf;
            if(!options) { _fun00012_ip = 105; continue _fun00011 }
 101:
            options = entity != zulu;
 105:
            entity = zulu;
            if(!options) { _fun00012_ip = 116; continue _fun00011 }
 111:
            entity = golf.bind(oscar)(zulu);
 116:
            tango = entity;
 119:
            zulu = _closure1_slot9;
            entity = mike.key;
            if(tango) { _fun00012_ip = 140; continue _fun00011 }
 134:
            tango = mike.oldValue;
 140:
            if(report) { _fun00012_ip = 149; continue _fun00011 }
 143:
            report = mike.newValue;
 149:
            mike = zulu.prototype;
            mike = Object.create(mike, {constructor: {value: zulu}});
            backup = mike;
            foxtrot = entity;
            romeo = tango;
            yankee = report;
            entity = new backup[zulu](foxtrot, romeo, yankee, offset);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    var _closure1_slot44 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge, argGrault) { // Original name: getTargetValue
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscar = argFoo;
            golf = argCorge;
            entity = argGrault;
            mike = argBar;
            var _closure2_slot0 = mike;
            zulu = null;
            if(!(zulu == entity)) { _fun00014_ip = 30; continue _fun00013 }
 24:
            entity = oscar.targetId;
 30:
            mike = argBaz;
            tango = undefined;
            mike = mike.bind(tango)(entity);
            verify = zulu != mike;
            if(!verify) { _fun00014_ip = 51; continue _fun00013 }
 47:
            verify = zulu != golf;
 51:
            options = null;
            if(!verify) { _fun00014_ip = 61; continue _fun00013 }
 56:
            options = golf.bind(tango)(mike);
 61:
            tango = options;
            if(!(zulu == tango)) { _fun00014_ip = 118; continue _fun00013 }
 68:
            mike = _closure1_slot14;
            golf = mike.deletedTargets;
            mike = oscar.targetType;
            mike = golf[mike];
            golf = zulu != mike;
            if(!golf) { _fun00014_ip = 108; continue _fun00013 }
 100:
            verify = mike[entity];
            golf = zulu != verify;
 108:
            tango = options;
            if(!golf) { _fun00014_ip = 118; continue _fun00013 }
 114:
            tango = mike[entity];
 118:
            mike = tango;
            if(!(zulu == mike)) { _fun00014_ip = 186; continue _fun00013 }
 125:
            golf = oscar.changes;
            mike = tango;
            if(!(zulu != golf)) { _fun00014_ip = 186; continue _fun00013 }
 138:
            golf = oscar.changes;
            oscar = golf.find;
            report = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            report = oscar.bind(golf)(report);
            mike = tango;
            if(!(zulu != report)) { _fun00014_ip = 186; continue _fun00013 }
 168:
            tango = report.newValue;
            if(tango) { _fun00014_ip = 183; continue _fun00013 }
 177:
            tango = report.oldValue;
 183:
            mike = tango;
 186:
            if(!(zulu != mike)) { _fun00014_ip = 193; continue _fun00013 }
 190:
            entity = mike;
 193:
            return entity;
        }
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertSubtarget
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tango = argBaz;
            mike = argBar;
            zulu = undefined;
            mike = mike.bind(zulu)(entity);
            oscar = null;
            report = oscar != mike;
            if(!report) { _fun00016_ip = 29; continue _fun00015 }
 25:
            report = oscar != tango;
 29:
            if(!report) { _fun00016_ip = 37; continue _fun00015 }
 32:
            entity = tango.bind(zulu)(mike);
 37:
            return entity;
        }
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo, argBar) { // Original name: getNullableOldValueString
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                mike = entity.oldValue;
                entity = null;
                if(!(entity != mike)) { _fun00018_ip = 24; continue _fun00017 }
 15:
                entity = _closure2_slot1;
                _fun00018_ip = 31; continue _fun00017;
 24:
                entity = _closure2_slot0;
 31:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot47 = entity;
    entity = function(argFoo, argBar) { // Original name: getNullableNewValueString
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                mike = entity.newValue;
                entity = null;
                if(!(entity != mike)) { _fun00020_ip = 24; continue _fun00019 }
 15:
                entity = _closure2_slot1;
                _fun00020_ip = 31; continue _fun00019;
 24:
                entity = _closure2_slot0;
 31:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot48 = entity;
    entity = function(argFoo, argBar, argBaz, argCorge) { // Original name: getNullableNewOrOldValueString
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        mike = argBaz;
        var _closure2_slot2 = mike;
        mike = argCorge;
        var _closure2_slot3 = mike;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                zulu = entity.newValue;
                mike = null;
                if(!(mike != zulu)) { _fun00022_ip = 25; continue _fun00021 }
 15:
                zulu = entity.oldValue;
                if(!(mike == zulu)) { _fun00022_ip = 72; continue _fun00021 }
 25:
                zulu = entity.newValue;
                if(!(mike == zulu)) { _fun00022_ip = 63; continue _fun00021 }
 35:
                entity = entity.oldValue;
                if(!(mike == entity)) { _fun00022_ip = 54; continue _fun00021 }
 45:
                entity = _closure2_slot3;
                _fun00022_ip = 61; continue _fun00021;
 54:
                entity = _closure2_slot2;
 61:
                _fun00022_ip = 70; continue _fun00021;
 63:
                entity = _closure2_slot1;
 70:
                _fun00022_ip = 79; continue _fun00021;
 72:
                entity = _closure2_slot0;
 79:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot49 = entity;
    entity = function(argFoo, argBar) { // Original name: getNewValueStringByBoolean
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = argFoo;
                entity = entity.newValue;
                if(entity) { _fun00024_ip = 21; continue _fun00023 }
 15:
                entity = _closure2_slot1;
                _fun00024_ip = 25; continue _fun00023;
 21:
                entity = _closure2_slot0;
 25:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot50 = entity;
    entity = function(argFoo) { // Original name: getNullableNewValueStringByKey
        mike = argFoo;
        var _closure2_slot0 = mike;
        entity = function(argFoo) {
            entity = argFoo;
            mike = entity.newValue;
            entity = _closure2_slot0;
            entity = entity[mike];
            return entity;
        };
        return entity;
    };
    var _closure1_slot51 = entity;
    entity = function(argFoo, argBar) { // Original name: getNewValueStringByKeyOrDefault
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        entity = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zulu = _closure2_slot0;
                entity = argFoo;
                entity = entity.newValue;
                entity = zulu[entity];
                zulu = null;
                if(!(zulu == entity)) { _fun00026_ip = 30; continue _fun00025 }
 26:
                entity = _closure2_slot1;
 30:
                return entity;
            }
        };
        return entity;
    };
    var _closure1_slot52 = entity;
    entity = global;
    yankee = entity.Object;
    golf = yankee.defineProperty;
    oscar = {};
    foxtrot = true;
    oscar['value'] = foxtrot;
    entity = '__esModule';
    entity = golf.bind(yankee)(zulu, entity, oscar);
    entity = 0;
    oscar = offset[entity];
    entity = undefined;
    oscar = options.bind(entity)(oscar);
    var _closure1_slot4 = oscar;
    oscar = 1;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot5 = oscar;
    oscar = 2;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot6 = oscar;
    oscar = 3;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot7 = oscar;
    oscar = 4;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot8 = oscar;
    oscar = 5;
    oscar = offset[oscar];
    oscar = verify.bind(entity)(oscar);
    oscar = oscar.AuditLogChange;
    var _closure1_slot9 = oscar;
    oscar = 6;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot10 = oscar;
    oscar = 7;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot11 = oscar;
    oscar = 8;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot12 = oscar;
    oscar = 9;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot13 = oscar;
    oscar = 10;
    oscar = offset[oscar];
    oscar = options.bind(entity)(oscar);
    var _closure1_slot14 = oscar;
    oscar = 11;
    oscar = offset[oscar];
    golf = verify.bind(entity)(oscar);
    oscar = golf.AuditLogActions;
    var _closure1_slot15 = oscar;
    romeo = golf.AuditLogChangeKeys;
    var _closure1_slot16 = romeo;
    oscar = golf.AuditLogTargetTypes;
    var _closure1_slot17 = oscar;
    yankee = golf.MFALevels;
    var _closure1_slot18 = yankee;
    yankee = golf.VerificationLevels;
    var _closure1_slot19 = yankee;
    yankee = golf.UserNotificationSettings;
    var _closure1_slot20 = yankee;
    yankee = golf.GuildExplicitContentFilterTypes;
    var _closure1_slot21 = yankee;
    yankee = golf.ChannelTypes;
    var _closure1_slot22 = yankee;
    yankee = golf.Permissions;
    var _closure1_slot23 = yankee;
    yankee = golf.NOOP_NULL;
    var _closure1_slot24 = yankee;
    yankee = golf.VideoQualityMode;
    var _closure1_slot25 = yankee;
    yankee = golf.ApplicationCommandPermissionTypes;
    var _closure1_slot26 = yankee;
    yankee = golf.AuditLogSubtargetTypes;
    var _closure1_slot27 = yankee;
    golf = golf.SystemChannelFlags;
    var _closure1_slot28 = golf;
    golf = 12;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.ChannelFlags;
    var _closure1_slot29 = golf;
    golf = 13;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    golf = golf.AutomodTriggerType;
    var _closure1_slot30 = golf;
    golf = 14;
    golf = offset[golf];
    golf = verify.bind(entity)(golf);
    yankee = golf.GuildScheduledEventEntityTypes;
    var _closure1_slot31 = yankee;
    yankee = golf.GuildScheduledEventStatus;
    var _closure1_slot32 = yankee;
    golf = golf.GuildScheduledEventPrivacyLevel;
    var _closure1_slot33 = golf;
    golf = 15;
    golf = offset[golf];
    yankee = options.bind(entity)(golf);
    golf = yankee.prototype;
    options = Object.create(golf, {constructor: {value: yankee}});
    result = 'AuditLogUtils';
    echo = options;
    golf = new echo[yankee](result, output);
    golf = golf instanceof Object ? golf : options;
    var _closure1_slot34 = golf;
    yankee = 16;
    golf = offset[yankee];
    golf = verify.bind(entity)(golf);
    golf = golf.TimeUnits;
    options = golf.DAYS;
    golf = new Array(4);
    golf[0] = options;
    options = offset[yankee];
    options = verify.bind(entity)(options);
    options = options.TimeUnits;
    options = options.HOURS;
    golf[1] = options;
    options = offset[yankee];
    options = verify.bind(entity)(options);
    options = options.TimeUnits;
    options = options.MINUTES;
    golf[2] = options;
    options = offset[yankee];
    options = verify.bind(entity)(options);
    options = options.TimeUnits;
    options = options.SECONDS;
    golf[3] = options;
    var _closure1_slot35 = golf;
    golf = function() { // Original name: CommonChangeStrings
        entity = {};
        mike = _closure1_slot16;
        zulu = mike.REASON;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[zulu] = mike;
        return entity;
    };
    var _closure1_slot36 = golf;
    golf = {};
    backup = oscar.CHANNEL;
    options = {};
    kilo = romeo.ID;
    options[kilo] = foxtrot;
    kilo = romeo.PERMISSION_OVERWRITES;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.CHANNEL_OVERWRITE;
    options = {};
    kilo = romeo.TYPE;
    options[kilo] = foxtrot;
    kilo = romeo.ID;
    options[kilo] = foxtrot;
    kilo = romeo.PERMISSION_OVERWRITES;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.INVITE;
    options = {};
    kilo = romeo.INVITER_ID;
    options[kilo] = foxtrot;
    kilo = romeo.USES;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.WEBHOOK;
    options = {};
    kilo = romeo.TYPE;
    options[kilo] = foxtrot;
    kilo = romeo.APPLICATION_ID;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.INTEGRATION;
    options = {};
    kilo = romeo.TYPE;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.THREAD;
    options = {};
    kilo = romeo.ID;
    options[kilo] = foxtrot;
    kilo = romeo.TYPE;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.STICKER;
    options = {};
    kilo = romeo.ID;
    options[kilo] = foxtrot;
    kilo = romeo.TYPE;
    options[kilo] = foxtrot;
    kilo = romeo.ASSET;
    options[kilo] = foxtrot;
    kilo = romeo.FORMAT_TYPE;
    options[kilo] = foxtrot;
    kilo = romeo.AVAILABLE;
    options[kilo] = foxtrot;
    kilo = romeo.GUILD_ID;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.GUILD_HOME;
    options = {};
    kilo = romeo.ENTITY_TYPE;
    options[kilo] = foxtrot;
    golf[backup] = options;
    backup = oscar.GUILD_ONBOARDING;
    options = {};
    kilo = romeo.PROMPTS;
    options[kilo] = foxtrot;
    golf[backup] = options;
    options = oscar.GUILD_SOUNDBOARD;
    oscar = {};
    backup = romeo.ID;
    oscar[backup] = foxtrot;
    romeo = romeo.SOUND_ID;
    oscar[romeo] = foxtrot;
    golf[options] = oscar;
    oscar = function() { // Original name: ACTION_FILTER_ITEMS
        mike = {};
        tango = _closure1_slot15;
        zulu = tango.ALL;
        mike['value'] = zulu;
        golf = _closure1_slot0;
        options = _closure1_slot3;
        zulu = 17;
        entity = options[zulu];
        oscar = undefined;
        entity = golf.bind(oscar)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = options[zulu];
        entity = golf.bind(oscar)(entity);
        entity = entity.t;
        entity = entity.QxEVcn;
        entity = report.bind(verify)(entity);
        mike['label'] = entity;
        entity = options[zulu];
        entity = golf.bind(oscar)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = options[zulu];
        entity = golf.bind(oscar)(entity);
        entity = entity.t;
        entity = entity.an9Ry8;
        entity = report.bind(verify)(entity);
        mike['valueLabel'] = entity;
        entity = new Array(67);
        entity[0] = mike;
        mike = {};
        report = tango.GUILD_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.5INZa2;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[1] = mike;
        mike = {};
        report = tango.CHANNEL_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.2uh4vL;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[2] = mike;
        mike = {};
        report = tango.CHANNEL_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.mGsBLS;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[3] = mike;
        mike = {};
        report = tango.CHANNEL_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.hCHzAg;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[4] = mike;
        mike = {};
        report = tango.CHANNEL_OVERWRITE_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.8TnAMD;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[5] = mike;
        mike = {};
        report = tango.CHANNEL_OVERWRITE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.Jqx0Bg;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[6] = mike;
        mike = {};
        report = tango.CHANNEL_OVERWRITE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.gBXOr6;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[7] = mike;
        mike = {};
        report = tango.MEMBER_KICK;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.Q1/hNz;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[8] = mike;
        mike = {};
        report = tango.MEMBER_PRUNE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.tOTTjY;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[9] = mike;
        mike = {};
        report = tango.MEMBER_BAN_ADD;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.NfPn+f;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[10] = mike;
        mike = {};
        report = tango.MEMBER_BAN_REMOVE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.XCsGfH;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[11] = mike;
        mike = {};
        report = tango.MEMBER_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.F/jmND;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[12] = mike;
        mike = {};
        report = tango.MEMBER_ROLE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.zAveSE;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[13] = mike;
        mike = {};
        report = tango.MEMBER_MOVE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.QshteX;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[14] = mike;
        mike = {};
        report = tango.MEMBER_DISCONNECT;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.Z45os7;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[15] = mike;
        mike = {};
        report = tango.BOT_ADD;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.vuH24e;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[16] = mike;
        mike = {};
        report = tango.THREAD_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.+zl0DA;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[17] = mike;
        mike = {};
        report = tango.THREAD_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.rbIry8;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[18] = mike;
        mike = {};
        report = tango.THREAD_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.hFjNEB;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[19] = mike;
        mike = {};
        report = tango.ROLE_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.AbxKtr;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[20] = mike;
        mike = {};
        report = tango.ROLE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.t3Z6sb;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[21] = mike;
        mike = {};
        report = tango.ROLE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.YsFpa2;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[22] = mike;
        mike = {};
        report = tango.ONBOARDING_PROMPT_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.ZV9tqa;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[23] = mike;
        mike = {};
        report = tango.ONBOARDING_PROMPT_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.PcOdvb;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[24] = mike;
        mike = {};
        report = tango.ONBOARDING_PROMPT_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.+r33NT;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[25] = mike;
        mike = {};
        report = tango.ONBOARDING_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.uDADdX;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[26] = mike;
        mike = {};
        report = tango.ONBOARDING_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.J1H1ws;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[27] = mike;
        mike = {};
        report = tango.HOME_SETTINGS_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.Di4cvL;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[28] = mike;
        mike = {};
        report = tango.HOME_SETTINGS_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.tzyrJC;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[29] = mike;
        mike = {};
        report = tango.INVITE_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.0BNJdX;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[30] = mike;
        mike = {};
        report = tango.INVITE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.o++obW;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[31] = mike;
        mike = {};
        report = tango.INVITE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.iP40Aw;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[32] = mike;
        mike = {};
        report = tango.WEBHOOK_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.tBF4+f;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[33] = mike;
        mike = {};
        report = tango.WEBHOOK_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.eV3McH;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[34] = mike;
        mike = {};
        report = tango.WEBHOOK_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.AAL3Ky;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[35] = mike;
        mike = {};
        report = tango.EMOJI_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.RuWm0d;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[36] = mike;
        mike = {};
        report = tango.EMOJI_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.WzdUY2;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[37] = mike;
        mike = {};
        report = tango.EMOJI_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.c3dK2N;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[38] = mike;
        mike = {};
        report = tango.MESSAGE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.daTfXl;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[39] = mike;
        mike = {};
        report = tango.MESSAGE_BULK_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.nrBxen;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[40] = mike;
        mike = {};
        report = tango.MESSAGE_PIN;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.MUldyM;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[41] = mike;
        mike = {};
        report = tango.MESSAGE_UNPIN;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.n4zKhI;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[42] = mike;
        mike = {};
        report = tango.INTEGRATION_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.deNm8/;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[43] = mike;
        mike = {};
        report = tango.INTEGRATION_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.HT7Sfn;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[44] = mike;
        mike = {};
        report = tango.INTEGRATION_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.+kJ09v;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[45] = mike;
        mike = {};
        report = tango.STICKER_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.3DzNjY;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[46] = mike;
        mike = {};
        report = tango.STICKER_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.tdhW5e;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[47] = mike;
        mike = {};
        report = tango.STICKER_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.+ZhGOj;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[48] = mike;
        mike = {};
        report = tango.STAGE_INSTANCE_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.sPbjAw;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[49] = mike;
        mike = {};
        report = tango.STAGE_INSTANCE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.cW9LfH;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[50] = mike;
        mike = {};
        report = tango.STAGE_INSTANCE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.U1r+yM;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[51] = mike;
        mike = {};
        report = tango.GUILD_SCHEDULED_EVENT_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.H81Zy8;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[52] = mike;
        mike = {};
        report = tango.GUILD_SCHEDULED_EVENT_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.FM69l5;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[53] = mike;
        mike = {};
        report = tango.GUILD_SCHEDULED_EVENT_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.Rq28Bg;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[54] = mike;
        mike = {};
        report = tango.APPLICATION_COMMAND_PERMISSION_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.iPdFOj;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[55] = mike;
        mike = {};
        report = tango.AUTO_MODERATION_BLOCK_MESSAGE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.gNq5z8;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[56] = mike;
        mike = {};
        report = tango.AUTO_MODERATION_RULE_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.f72Zqa;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[57] = mike;
        mike = {};
        report = tango.AUTO_MODERATION_RULE_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.XeqIio;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[58] = mike;
        mike = {};
        report = tango.AUTO_MODERATION_RULE_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.syAApa;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[59] = mike;
        mike = {};
        report = tango.GUILD_HOME_FEATURE_ITEM;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.lhG5KC;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[60] = mike;
        mike = {};
        report = tango.GUILD_HOME_REMOVE_ITEM;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.lRPRwc;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[61] = mike;
        mike = {};
        report = tango.SOUNDBOARD_SOUND_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.yoRi5u;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[62] = mike;
        mike = {};
        report = tango.SOUNDBOARD_SOUND_UPDATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.uKlG0d;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[63] = mike;
        mike = {};
        report = tango.SOUNDBOARD_SOUND_DELETE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.gq0iCQ;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[64] = mike;
        mike = {};
        report = tango.VOICE_CHANNEL_STATUS_CREATE;
        mike['value'] = report;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        offset = report.intl;
        verify = offset.string;
        report = options[zulu];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.rGr0YG;
        report = verify.bind(offset)(report);
        mike['label'] = report;
        entity[65] = mike;
        mike = {};
        tango = tango.VOICE_CHANNEL_STATUS_DELETE;
        mike['value'] = tango;
        tango = options[zulu];
        tango = golf.bind(oscar)(tango);
        report = tango.intl;
        tango = report.string;
        zulu = options[zulu];
        zulu = golf.bind(oscar)(zulu);
        zulu = zulu.t;
        zulu = zulu.V9PEQ0;
        zulu = tango.bind(report)(zulu);
        mike['label'] = zulu;
        entity[66] = mike;
        return entity;
    };
    var _closure1_slot37 = oscar;
    options = {};
    romeo = offset[yankee];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.TimeUnits;
    foxtrot = romeo.SECONDS;
    romeo = function(argFoo) {
        report = _closure1_slot0;
        oscar = _closure1_slot3;
        entity = 17;
        zulu = oscar[entity];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = oscar[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        mike = entity.geSp4O;
        entity = {};
        report = argFoo;
        entity['seconds'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    options[foxtrot] = romeo;
    romeo = offset[yankee];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.TimeUnits;
    foxtrot = romeo.MINUTES;
    romeo = function(argFoo) {
        report = _closure1_slot0;
        oscar = _closure1_slot3;
        entity = 17;
        zulu = oscar[entity];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = oscar[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        mike = entity.iXLF9f;
        entity = {};
        report = argFoo;
        entity['minutes'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    options[foxtrot] = romeo;
    romeo = offset[yankee];
    romeo = verify.bind(entity)(romeo);
    romeo = romeo.TimeUnits;
    foxtrot = romeo.HOURS;
    romeo = function(argFoo) {
        report = _closure1_slot0;
        oscar = _closure1_slot3;
        entity = 17;
        zulu = oscar[entity];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = oscar[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        mike = entity.xCjYxM;
        entity = {};
        report = argFoo;
        entity['hours'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    options[foxtrot] = romeo;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.TimeUnits;
    romeo = yankee.DAYS;
    yankee = function(argFoo) {
        report = _closure1_slot0;
        oscar = _closure1_slot3;
        entity = 17;
        zulu = oscar[entity];
        mike = undefined;
        zulu = report.bind(mike)(zulu);
        tango = zulu.intl;
        zulu = tango.formatToPlainString;
        entity = oscar[entity];
        entity = report.bind(mike)(entity);
        entity = entity.t;
        mike = entity.k2UNz8;
        entity = {};
        report = argFoo;
        entity['days'] = report;
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    options[romeo] = yankee;
    var _closure1_slot38 = options;
    options = 31;
    options = offset[options];
    offset = verify.bind(entity)(options);
    verify = offset.fileFinishedImporting;
    options = 'modules/guild_settings/audit_log/AuditLogUtils.tsx';
    options = verify.bind(offset)(options);
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        report = zulu.NAME;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.CkDiND;
            return entity;
        };
        entity[report] = zulu;
        zulu = _closure1_slot16;
        golf = zulu.DESCRIPTION;
        foxtrot = _closure1_slot48;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscar = offset[report];
        zulu = undefined;
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.RP3Ey8;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.QAVj1d;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.ICON_HASH;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.iLZ8Q0;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.SPLASH_HASH;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.4VV6dn;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.DISCOVERY_SPLASH_HASH;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.2pds6u;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.BANNER_HASH;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.Cxq4zM;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.H7eE//;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.OWNER_ID;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.8ltsLS;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.REGION;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.X9r5KS;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.PREFERRED_LOCALE;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.UnXuDQ;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.AFK_CHANNEL_ID;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.ClBuAw;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.ms+xtL;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.AFK_TIMEOUT;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.q21fHR;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.SYSTEM_CHANNEL_ID;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.H1VXaW;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.XhtmxM;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.RULES_CHANNEL_ID;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.OI6MGx;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.lik3tL;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.PUBLIC_UPDATES_CHANNEL_ID;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.YxBKra;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.Ehsnio;
        oscar = foxtrot.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.MFA_LEVEL;
        yankee = _closure1_slot51;
        oscar = {};
        options = _closure1_slot18;
        backup = options.NONE;
        romeo = offset[report];
        romeo = verify.bind(zulu)(romeo);
        romeo = romeo.t;
        romeo = romeo.voaCCQ;
        oscar[backup] = romeo;
        romeo = options.ELEVATED;
        options = offset[report];
        options = verify.bind(zulu)(options);
        options = options.t;
        options = options.pRNVw8;
        oscar[romeo] = options;
        oscar = yankee.bind(zulu)(oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.WIDGET_ENABLED;
        options = _closure1_slot50;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        romeo = oscar.ADIty8;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.nf58VV;
        oscar = options.bind(zulu)(romeo, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.WIDGET_CHANNEL_ID;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        romeo = oscar.6SBsDQ;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.deQ5wM;
        oscar = foxtrot.bind(zulu)(romeo, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.VERIFICATION_LEVEL;
        oscar = {};
        romeo = _closure1_slot19;
        kilo = romeo.NONE;
        backup = offset[report];
        backup = verify.bind(zulu)(backup);
        backup = backup.t;
        backup = backup.W27rsb;
        oscar[kilo] = backup;
        kilo = romeo.LOW;
        backup = offset[report];
        backup = verify.bind(zulu)(backup);
        backup = backup.t;
        backup = backup.V8P+Pz;
        oscar[kilo] = backup;
        kilo = romeo.MEDIUM;
        backup = offset[report];
        backup = verify.bind(zulu)(backup);
        backup = backup.t;
        backup = backup.ERQFam;
        oscar[kilo] = backup;
        kilo = romeo.HIGH;
        backup = offset[report];
        backup = verify.bind(zulu)(backup);
        backup = backup.t;
        backup = backup.83fN0t;
        oscar[kilo] = backup;
        backup = romeo.VERY_HIGH;
        romeo = offset[report];
        romeo = verify.bind(zulu)(romeo);
        romeo = romeo.t;
        romeo = romeo.PnkQJC;
        oscar[backup] = romeo;
        oscar = yankee.bind(zulu)(oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.DEFAULT_MESSAGE_NOTIFICATIONS;
        oscar = {};
        romeo = _closure1_slot20;
        kilo = romeo.ALL_MESSAGES;
        backup = offset[report];
        backup = verify.bind(zulu)(backup);
        backup = backup.t;
        backup = backup.LDi76O;
        oscar[kilo] = backup;
        backup = romeo.ONLY_MENTIONS;
        romeo = offset[report];
        romeo = verify.bind(zulu)(romeo);
        romeo = romeo.t;
        romeo = romeo.6K83bW;
        oscar[backup] = romeo;
        oscar = yankee.bind(zulu)(oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.VANITY_URL_CODE;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        romeo = oscar.Zplsoq;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.u6cArq;
        oscar = foxtrot.bind(zulu)(romeo, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.EXPLICIT_CONTENT_FILTER;
        oscar = {};
        romeo = _closure1_slot21;
        backup = romeo.DISABLED;
        foxtrot = offset[report];
        foxtrot = verify.bind(zulu)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.fmOeLy;
        oscar[backup] = foxtrot;
        backup = romeo.MEMBERS_WITHOUT_ROLES;
        foxtrot = offset[report];
        foxtrot = verify.bind(zulu)(foxtrot);
        foxtrot = foxtrot.t;
        foxtrot = foxtrot.4FghY2;
        oscar[backup] = foxtrot;
        foxtrot = romeo.ALL_MEMBERS;
        romeo = offset[report];
        romeo = verify.bind(zulu)(romeo);
        romeo = romeo.t;
        romeo = romeo.olyrSk;
        oscar[foxtrot] = romeo;
        oscar = yankee.bind(zulu)(oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        oscar = oscar.PREMIUM_PROGRESS_BAR_ENABLED;
        golf = offset[report];
        golf = verify.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.rBT0sr;
        report = offset[report];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.gc+te3;
        report = options.bind(zulu)(golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.YbouFB;
            return entity;
        };
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.g3DMjI;
            return entity;
        };
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.+fQAen;
            return entity;
        };
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.E1fc4u;
            return entity;
        };
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.XbwtSE;
            return entity;
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        sizing = mike.bind(zulu)();
        output = entity;
        mike = copyDataProperties(output, sizing);
        return entity;
    };
    zulu['GuildChangeStrings'] = options;
    options = function() {
        entity = {};
        mike = _closure1_slot16;
        verify = mike.NAME;
        yankee = _closure1_slot47;
        golf = _closure1_slot0;
        options = _closure1_slot3;
        mike = 17;
        report = options[mike];
        oscar = undefined;
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.f8Rh0d;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.ebD4Qk;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.POSITION;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.isS8tb;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.t5uBio;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.TOPIC;
        foxtrot = _closure1_slot49;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        romeo = report.esQcxs;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.m+veAg;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.ws/1FB;
        report = foxtrot.bind(oscar)(romeo, offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.BITRATE;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.fw81am;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.MFNlgY;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.RTC_REGION_OVERRIDE;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        romeo = report.6kajx8;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.eGOlmZ;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.0JMZd3;
        report = foxtrot.bind(oscar)(romeo, offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.USER_LIMIT;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.wk5t7u;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.XgjCEh;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.RATE_LIMIT_PER_USER;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.7lirhI;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.j4CCJS;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_RESET;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.+vSBFR;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_GRANTED;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.EKLJv7;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_DENIED;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.U3rO5e;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.REASON;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.NSFW;
        romeo = _closure1_slot50;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.H8Ri2d;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.WW6cJy;
        report = romeo.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.TYPE;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.Vn5zn5;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.aq4uWF;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.VIDEO_QUALITY_MODE;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.e68fAQ;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.djbES0;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.DEFAULT_AUTO_ARCHIVE_DURATION;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        offset = report.nYz2mp;
        report = options[mike];
        report = golf.bind(oscar)(report);
        report = report.t;
        report = report.oczvRE;
        report = yankee.bind(oscar)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.FLAGS;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.ImCQkp;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.AVAILABLE_TAG_ADD;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.H86QQU;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.AVAILABLE_TAG_EDIT;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.YtUzlp;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        report = report.AVAILABLE_TAG_DELETE;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.8QOsen;
            return entity;
        };
        entity[report] = zulu;
        zulu = _closure1_slot16;
        zulu = zulu.LINKED_LOBBY;
        report = _closure1_slot48;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.+/3TkJ;
        mike = options[mike];
        mike = golf.bind(oscar)(mike);
        mike = mike.t;
        mike = mike.5kDYS0;
        mike = report.bind(oscar)(tango, mike);
        entity[zulu] = mike;
        return entity;
    };
    zulu['ChannelChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        golf = zulu.NICK;
        foxtrot = _closure1_slot49;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscar = offset[report];
        zulu = undefined;
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        yankee = oscar.qXDsHh;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.m+qur6;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.DvLvjI;
        oscar = foxtrot.bind(zulu)(yankee, options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.DEAF;
        options = _closure1_slot50;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        yankee = oscar.mArLlZ;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.ddvVYG;
        oscar = options.bind(zulu)(yankee, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.MUTE;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        yankee = oscar.bxs/lZ;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.FjecQE;
        oscar = options.bind(zulu)(yankee, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.ROLES_REMOVE;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.+2SDWV;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.ROLES_ADD;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.B3/3IC;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.PRUNE_DELETE_DAYS;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.+Cvc+P;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.COMMUNICATION_DISABLED_UNTIL;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        romeo = oscar.LXTQr6;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        yankee = oscar.LXTQr6;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.ULSdnJ;
        oscar = foxtrot.bind(zulu)(romeo, yankee, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        oscar = oscar.BYPASSES_VERIFICATION;
        golf = offset[report];
        golf = verify.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.NBPBur;
        report = offset[report];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.zATosr;
        report = options.bind(zulu)(golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.YbouFB;
            return entity;
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        kilo = mike.bind(zulu)();
        sizing = entity;
        mike = copyDataProperties(sizing, kilo);
        return entity;
    };
    zulu['UserChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        golf = zulu.NAME;
        yankee = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscar = offset[report];
        zulu = undefined;
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.QBmlaG;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.Lfs4r6;
        oscar = yankee.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.DESCRIPTION;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        options = oscar.XeYKWF;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.PSfeIi;
        oscar = yankee.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.PERMISSIONS_GRANTED;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.9i/DvL;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.PERMISSIONS_DENIED;
        oscar = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.pa1ZVl;
            return entity;
        };
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.COLOR;
        yankee = _closure1_slot52;
        options = {};
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.TK6E1N;
        options['#000000'] = oscar;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.2FQFi4;
        oscar = yankee.bind(zulu)(options, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        golf = oscar.HOIST;
        options = _closure1_slot50;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        yankee = oscar.gWfe29;
        oscar = offset[report];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.+tb8kJ;
        oscar = options.bind(zulu)(yankee, oscar);
        entity[golf] = oscar;
        oscar = _closure1_slot16;
        oscar = oscar.MENTIONABLE;
        golf = offset[report];
        golf = verify.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.LL8VFB;
        report = offset[report];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.Z7xzmJ;
        report = options.bind(zulu)(golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.ICON_HASH;
        report = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.iEE79/;
            return entity;
        };
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.UNICODE_EMOJI;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.KiLMMz;
            return entity;
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        romeo = mike.bind(zulu)();
        foxtrot = entity;
        mike = copyDataProperties(foxtrot, romeo);
        return entity;
    };
    zulu['RoleChangeStrings'] = options;
    options = function() {
        entity = {};
        mike = _closure1_slot36;
        oscar = undefined;
        yankee = mike.bind(oscar)();
        romeo = entity;
        mike = copyDataProperties(romeo, yankee);
        mike = _closure1_slot16;
        report = mike.TITLE;
        offset = _closure1_slot47;
        golf = _closure1_slot0;
        options = _closure1_slot3;
        mike = 17;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        verify = tango.sNpuy8;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.3Ukc/v;
        tango = offset.bind(oscar)(verify, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.DESCRIPTION;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        verify = tango.PP1q09;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.z7pYLi;
        tango = offset.bind(oscar)(verify, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.OPTIONS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.3G5C9/;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        verify = tango.SINGLE_SELECT;
        report = _closure1_slot50;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        offset = tango.v4WnR0;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.6Qg3uL;
        tango = report.bind(oscar)(offset, tango);
        entity[verify] = tango;
        zulu = _closure1_slot16;
        zulu = zulu.REQUIRED;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.0MPAMz;
        mike = options[mike];
        mike = golf.bind(oscar)(mike);
        mike = mike.t;
        mike = mike.pwsXio;
        mike = report.bind(oscar)(tango, mike);
        entity[zulu] = mike;
        return entity;
    };
    zulu['OnboardingPromptChangeStrings'] = options;
    options = function() {
        entity = {};
        mike = _closure1_slot36;
        oscar = undefined;
        yankee = mike.bind(oscar)();
        romeo = entity;
        mike = copyDataProperties(romeo, yankee);
        mike = _closure1_slot16;
        tango = mike.DEFAULT_CHANNEL_IDS;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.8M+D2t;
            return entity;
        };
        entity[tango] = mike;
        mike = _closure1_slot16;
        verify = mike.ENABLE_DEFAULT_CHANNELS;
        report = _closure1_slot50;
        golf = _closure1_slot0;
        options = _closure1_slot3;
        mike = 17;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        offset = tango.EYd/lp;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.36OZeX;
        tango = report.bind(oscar)(offset, tango);
        entity[verify] = tango;
        tango = _closure1_slot16;
        verify = tango.ENABLE_ONBOARDING_PROMPTS;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        offset = tango.V3u8PT;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.r66lc3;
        tango = report.bind(oscar)(offset, tango);
        entity[verify] = tango;
        zulu = _closure1_slot16;
        zulu = zulu.ENABLED;
        tango = options[mike];
        tango = golf.bind(oscar)(tango);
        tango = tango.t;
        tango = tango.SODVIi;
        mike = options[mike];
        mike = golf.bind(oscar)(mike);
        mike = mike.t;
        mike = mike.u8HY5e;
        mike = report.bind(oscar)(tango, mike);
        entity[zulu] = mike;
        return entity;
    };
    zulu['OnboardingChangeStrings'] = options;
    options = function() {
        entity = {};
        report = _closure1_slot36;
        tango = undefined;
        oscar = report.bind(tango)();
        golf = entity;
        tango = copyDataProperties(golf, oscar);
        tango = _closure1_slot16;
        report = tango.WELCOME_MESSAGE;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.dKQ1xc;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.NEW_MEMBER_ACTIONS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.jDUInp;
            return entity;
        };
        entity[report] = tango;
        zulu = _closure1_slot16;
        zulu = zulu.RESOURCE_CHANNELS;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.SIX0mp;
            return entity;
        };
        entity[zulu] = mike;
        return entity;
    };
    zulu['HomeSettingsChangeStrings'] = options;
    options = function() {
        entity = {};
        tango = _closure1_slot16;
        report = tango.CODE;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.rrRHgY;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        tango = tango.CHANNEL_ID;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.Q1vd5u;
            return entity;
        };
        entity[tango] = zulu;
        zulu = _closure1_slot16;
        report = zulu.MAX_USES;
        options = _closure1_slot52;
        oscar = {};
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        golf = 17;
        tango = offset[golf];
        zulu = undefined;
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.Yx8LNj;
        oscar[0] = tango;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.3ygnwc;
        tango = options.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.MAX_AGE;
        oscar = {};
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        romeo = tango.intl;
        yankee = romeo.string;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.PqEzn5;
        yankee = yankee.bind(romeo)(tango);
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.uWrLv7;
        oscar[yankee] = tango;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.Q+5kcH;
        tango = options.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.TEMPORARY;
        options = _closure1_slot50;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        oscar = tango.MWp6Hx;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.omiqTE;
        tango = options.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.FLAGS;
        oscar = _closure1_slot51;
        tango = {};
        options = 18;
        options = offset[options];
        options = verify.bind(zulu)(options);
        options = options.GuildInviteFlags;
        options = options.IS_GUEST_INVITE;
        golf = offset[golf];
        golf = verify.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.XYZMbG;
        tango[options] = golf;
        tango = oscar.bind(zulu)(tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        foxtrot = mike.bind(zulu)();
        backup = entity;
        mike = copyDataProperties(backup, foxtrot);
        return entity;
    };
    zulu['InviteChangeStrings'] = options;
    options = function() {
        entity = {};
        tango = _closure1_slot16;
        oscar = tango.CHANNEL_ID;
        options = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        tango = 17;
        report = offset[tango];
        golf = undefined;
        report = verify.bind(golf)(report);
        report = report.t;
        yankee = report.jhPpra;
        report = offset[tango];
        report = verify.bind(golf)(report);
        report = report.t;
        report = report.ar4qYG;
        report = options.bind(golf)(yankee, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.NAME;
        oscar = offset[tango];
        oscar = verify.bind(golf)(oscar);
        oscar = oscar.t;
        oscar = oscar.ZVGrzc;
        tango = offset[tango];
        tango = verify.bind(golf)(tango);
        tango = tango.t;
        tango = tango.tywdZW;
        tango = options.bind(golf)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AVATAR_HASH;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.KB52Ul;
            return entity;
        };
        entity[report] = tango;
        zulu = _closure1_slot16;
        zulu = zulu.REASON;
        mike = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[zulu] = mike;
        return entity;
    };
    zulu['WebhookChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        report = zulu.NAME;
        golf = _closure1_slot47;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 17;
        oscar = verify[tango];
        zulu = undefined;
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.ahU1o6;
        tango = verify[tango];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.wxs+vb;
        tango = golf.bind(zulu)(oscar, tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        offset = mike.bind(zulu)();
        yankee = entity;
        mike = copyDataProperties(yankee, offset);
        return entity;
    };
    zulu['EmojiChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        oscar = zulu.NAME;
        golf = _closure1_slot47;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 17;
        report = verify[tango];
        zulu = undefined;
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.cdl0Ym;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.o3W2l5;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.TAGS;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.zwL+S0;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.VYfKAw;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.DESCRIPTION;
        oscar = verify[tango];
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.XeYKWF;
        tango = verify[tango];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.PSfeIi;
        tango = golf.bind(zulu)(oscar, tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        yankee = mike.bind(zulu)();
        romeo = entity;
        mike = copyDataProperties(romeo, yankee);
        return entity;
    };
    zulu['StickerChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        report = zulu.ENABLE_EMOTICONS;
        offset = _closure1_slot50;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        golf = 17;
        tango = verify[golf];
        zulu = undefined;
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        oscar = tango.FI0m5+;
        tango = verify[golf];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.olpKCw;
        tango = offset.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.EXPIRE_BEHAVIOR;
        oscar = _closure1_slot51;
        tango = {};
        offset = verify[golf];
        offset = options.bind(zulu)(offset);
        offset = offset.t;
        offset = offset.1Bb1+v;
        tango[0] = offset;
        golf = verify[golf];
        golf = options.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.vjlW6u;
        tango[1] = golf;
        tango = oscar.bind(zulu)(tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.EXPIRE_GRACE_PERIOD;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.iovXMT;
            return entity;
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        yankee = mike.bind(zulu)();
        romeo = entity;
        mike = copyDataProperties(romeo, yankee);
        return entity;
    };
    zulu['IntegrationChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        report = zulu.TOPIC;
        options = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        golf = 17;
        tango = offset[golf];
        zulu = undefined;
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        oscar = tango.m+veAg;
        tango = offset[golf];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.esQcxs;
        tango = options.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.PRIVACY_LEVEL;
        oscar = _closure1_slot51;
        tango = {};
        options = _closure1_slot33;
        romeo = options.GUILD_ONLY;
        yankee = offset[golf];
        yankee = verify.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.EC+CDg;
        tango[romeo] = yankee;
        options = options.PUBLIC;
        golf = offset[golf];
        golf = verify.bind(zulu)(golf);
        golf = golf.t;
        golf = golf.pK/WGx;
        tango[options] = golf;
        tango = oscar.bind(zulu)(tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        foxtrot = mike.bind(zulu)();
        backup = entity;
        mike = copyDataProperties(backup, foxtrot);
        return entity;
    };
    zulu['StageInstanceChangeStrings'] = options;
    options = function() {
        entity = {};
        tango = _closure1_slot16;
        report = tango.NAME;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.21EXHR;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        tango = tango.DESCRIPTION;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.Vm1of3;
            return entity;
        };
        entity[tango] = zulu;
        zulu = _closure1_slot16;
        oscar = zulu.PRIVACY_LEVEL;
        golf = _closure1_slot51;
        report = {};
        offset = _closure1_slot33;
        romeo = offset.GUILD_ONLY;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 17;
        yankee = verify[tango];
        zulu = undefined;
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.EC+CDg;
        report[romeo] = yankee;
        yankee = offset.PUBLIC;
        offset = verify[tango];
        offset = options.bind(zulu)(offset);
        offset = offset.t;
        offset = offset.pK/WGx;
        report[yankee] = offset;
        report = golf.bind(zulu)(report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.STATUS;
        report = {};
        offset = _closure1_slot32;
        romeo = offset.SCHEDULED;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.hXKDgo;
        report[romeo] = yankee;
        romeo = offset.ACTIVE;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.lRX1n5;
        report[romeo] = yankee;
        romeo = offset.COMPLETED;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee./eFIho;
        report[romeo] = yankee;
        yankee = offset.CANCELED;
        offset = verify[tango];
        offset = options.bind(zulu)(offset);
        offset = offset.t;
        offset = offset.NWIYho;
        report[yankee] = offset;
        report = golf.bind(zulu)(report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.ENTITY_TYPE;
        report = {};
        offset = _closure1_slot31;
        romeo = offset.NONE;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.6sO3Sk;
        report[romeo] = yankee;
        romeo = offset.STAGE_INSTANCE;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.Wo+s19;
        report[romeo] = yankee;
        romeo = offset.VOICE;
        yankee = verify[tango];
        yankee = options.bind(zulu)(yankee);
        yankee = yankee.t;
        yankee = yankee.XCVaIC;
        report[romeo] = yankee;
        yankee = offset.EXTERNAL;
        offset = verify[tango];
        offset = options.bind(zulu)(offset);
        offset = offset.t;
        offset = offset.IvhAj4;
        report[yankee] = offset;
        report = golf.bind(zulu)(report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.CHANNEL_ID;
        golf = _closure1_slot48;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.yJBIcX;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.+PqSsr;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.LOCATION;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.GaMBHx;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.PsICk5;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.IMAGE_HASH;
        oscar = verify[tango];
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.S3vcRE;
        tango = verify[tango];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.KQu47O;
        tango = golf.bind(zulu)(oscar, tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        foxtrot = mike.bind(zulu)();
        backup = entity;
        mike = copyDataProperties(backup, foxtrot);
        return entity;
    };
    zulu['GuildScheduledEventChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        oscar = zulu.SCHEDULED_START_TIME;
        golf = _closure1_slot48;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 17;
        report = verify[tango];
        zulu = undefined;
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.zMIYVl;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.fzF8GR;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.SCHEDULED_END_TIME;
        oscar = verify[tango];
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.vONSQE;
        tango = verify[tango];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.IlIti4;
        tango = golf.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.IS_CANCELED;
        tango = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                zulu = entity.oldValue;
                mike = null;
                if(!(mike == zulu)) { _fun00028_ip = 27; continue _fun00027 }
 15:
                zulu = entity.newValue;
                mike = true;
                if(!(mike === zulu)) { _fun00028_ip = 139; continue _fun00027 }
 27:
                mike = entity.oldValue;
                if(mike) { _fun00028_ip = 83; continue _fun00027 }
 36:
                mike = entity.newValue;
                if(!mike) { _fun00028_ip = 83; continue _fun00027 }
 45:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.t;
                mike = mike.7RkicX;
                return mike;
 83:
                mike = entity.oldValue;
                if(!mike) { _fun00028_ip = 139; continue _fun00027 }
 92:
                entity = entity.newValue;
                if(entity) { _fun00028_ip = 139; continue _fun00027 }
 101:
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.t;
                entity = entity.dRNTWV;
                return entity;
 139:
                entity = undefined;
                return entity;
            }
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        yankee = mike.bind(zulu)();
        romeo = entity;
        mike = copyDataProperties(romeo, yankee);
        return entity;
    };
    zulu['GuildScheduledEventExceptionChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        oscar = zulu.NAME;
        golf = _closure1_slot47;
        options = _closure1_slot0;
        verify = _closure1_slot3;
        tango = 17;
        report = verify[tango];
        zulu = undefined;
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.tUKRzc;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.kPCHOD;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.ARCHIVED;
        yankee = _closure1_slot50;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.jDi9FB;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.F6dvbW;
        report = yankee.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.LOCKED;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.JSy1QU;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.C7Jgo6;
        report = yankee.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.INVITABLE;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.dxNUs7;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.biJvYG;
        report = yankee.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.AUTO_ARCHIVE_DURATION;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        offset = report.LuaG39;
        report = verify[tango];
        report = options.bind(zulu)(report);
        report = report.t;
        report = report.18d9qq;
        report = golf.bind(zulu)(offset, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.RATE_LIMIT_PER_USER;
        oscar = verify[tango];
        oscar = options.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.7lirhI;
        tango = verify[tango];
        tango = options.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.j4CCJS;
        tango = golf.bind(zulu)(oscar, tango);
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.FLAGS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.sSAQtr;
            return entity;
        };
        entity[report] = tango;
        mike = _closure1_slot36;
        romeo = mike.bind(zulu)();
        foxtrot = entity;
        mike = copyDataProperties(foxtrot, romeo);
        return entity;
    };
    zulu['ThreadChangeStrings'] = options;
    options = function(argFoo) {
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tango = argFoo;
            entity = {};
            report = _closure1_slot36;
            zulu = undefined;
            oscar = report.bind(zulu)();
            golf = entity;
            zulu = copyDataProperties(golf, oscar);
            var _closure2_slot0 = entity;
            zulu = null;
            if(!(zulu != tango)) { _fun00030_ip = 54; continue _fun00029 }
 37:
            zulu = tango.forEach;
            mike = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    mike = argFoo;
                    tango = mike.newValue;
                    if(tango) { _fun00032_ip = 39; continue _fun00031 }
 17:
                    oscar = _closure2_slot0;
                    report = mike.key;
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        entity = entity.t;
                        entity = entity.vynxnZ;
                        return entity;
                    };
                    oscar[report] = tango;
                    _fun00032_ip = 87; continue _fun00031;
 39:
                    tango = mike.newValue;
                    tango = tango.permission;
                    zulu = _closure2_slot0;
                    mike = mike.key;
                    if(tango) { _fun00032_ip = 76; continue _fun00031 }
 63:
                    tango = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        entity = entity.t;
                        entity = entity.HUrFDg;
                        return entity;
                    };
                    zulu[mike] = tango;
                    _fun00032_ip = 87; continue _fun00031;
 76:
                    entity = function() {
                        zulu = _closure1_slot0;
                        mike = _closure1_slot3;
                        entity = 17;
                        mike = mike[entity];
                        entity = undefined;
                        entity = zulu.bind(entity)(mike);
                        entity = entity.t;
                        entity = entity.JH+89P;
                        return entity;
                    };
                    zulu[mike] = entity;
 87:
                    entity = undefined;
                    return entity;
                }
            };
            mike = zulu.bind(tango)(mike);
 54:
            return entity;
        }
    };
    zulu['CommandPermissionChangeStrings'] = options;
    options = function() {
        entity = {};
        tango = _closure1_slot16;
        report = tango.NAME;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.XwxAJS;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_TRIGGER_TYPE;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.fx0pys;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_EVENT_TYPE;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.46Y+Ly;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_ACTIONS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.8efxfn;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_ENABLED;
        tango = function(argFoo) {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                mike = entity.newValue;
                zulu = null;
                if(!(zulu == mike)) { _fun00034_ip = 21; continue _fun00033 }
 15:
                mike = entity.oldValue;
 21:
                entity = true;
                if(!(entity !== mike)) { _fun00034_ip = 65; continue _fun00033 }
 27:
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.t;
                entity = entity.Wrg9Ji;
                _fun00034_ip = 101; continue _fun00033;
 65:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.t;
                entity = mike.fCmxCw;
 101:
                return entity;
            }
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_EXEMPT_ROLES;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.TRb7Nz;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_EXEMPT_CHANNELS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.mzitLC;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_TRIGGER_METADATA;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.h/lM6+;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_ADD_KEYWORDS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.9V2yaG;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_REMOVE_KEYWORDS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.4Qe9n5;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_ADD_REGEX_PATTERNS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.GyZtxs;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.OQDadX;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        report = tango.AUTO_MODERATION_ADD_ALLOW_LIST;
        tango = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.FvvR+P;
            return entity;
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        tango = tango.AUTO_MODERATION_REMOVE_ALLOW_LIST;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.p5nSv7;
            return entity;
        };
        entity[tango] = zulu;
        zulu = _closure1_slot36;
        mike = undefined;
        oscar = zulu.bind(mike)();
        golf = entity;
        mike = copyDataProperties(golf, oscar);
        return entity;
    };
    zulu['AutoModerationRuleChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        oscar = zulu.NAME;
        options = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        tango = 17;
        report = offset[tango];
        zulu = undefined;
        report = verify.bind(zulu)(report);
        report = report.t;
        golf = report.VOtRSE;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.OK7B8P;
        report = options.bind(zulu)(golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.VOLUME;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        golf = report.igrDBw;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.L5lDFB;
        report = options.bind(zulu)(golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        oscar = report.EMOJI_NAME;
        options = _closure1_slot49;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        yankee = report.IIanaW;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        golf = report.z4w4U1;
        report = offset[tango];
        report = verify.bind(zulu)(report);
        report = report.t;
        report = report.V8Tfyc;
        report = options.bind(zulu)(yankee, golf, report);
        entity[oscar] = report;
        report = _closure1_slot16;
        report = report.EMOJI_ID;
        oscar = offset[tango];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        golf = oscar.ainxMD;
        oscar = offset[tango];
        oscar = verify.bind(zulu)(oscar);
        oscar = oscar.t;
        oscar = oscar.2NPsYm;
        tango = offset[tango];
        tango = verify.bind(zulu)(tango);
        tango = tango.t;
        tango = tango.8crtnp;
        tango = options.bind(zulu)(golf, oscar, tango);
        entity[report] = tango;
        mike = _closure1_slot36;
        foxtrot = mike.bind(zulu)();
        backup = entity;
        mike = copyDataProperties(backup, foxtrot);
        return entity;
    };
    zulu['GuildSoundboardChangeStrings'] = options;
    options = function() {
        entity = {};
        tango = _closure1_slot16;
        report = tango.VERIFICATION_ENABLED;
        tango = function(argFoo) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                mike = entity.newValue;
                entity = true;
                if(!(entity !== mike)) { _fun00036_ip = 53; continue _fun00035 }
 15:
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.t;
                entity = entity.WYT6kZ;
                _fun00036_ip = 89; continue _fun00035;
 53:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.t;
                entity = mike.fnkzDQ;
 89:
                return entity;
            }
        };
        entity[report] = tango;
        tango = _closure1_slot16;
        tango = tango.MANUAL_APPROVAL_ENABLED;
        zulu = function(argFoo) {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                entity = argFoo;
                mike = entity.newValue;
                entity = true;
                if(!(entity !== mike)) { _fun00038_ip = 53; continue _fun00037 }
 15:
                zulu = _closure1_slot0;
                mike = _closure1_slot3;
                entity = 17;
                mike = mike[entity];
                entity = undefined;
                entity = zulu.bind(entity)(mike);
                entity = entity.t;
                entity = entity.WxyOtr;
                _fun00038_ip = 89; continue _fun00037;
 53:
                tango = _closure1_slot0;
                zulu = _closure1_slot3;
                mike = 17;
                zulu = zulu[mike];
                mike = undefined;
                mike = tango.bind(mike)(zulu);
                mike = mike.t;
                entity = mike.jzSvVV;
 89:
                return entity;
            }
        };
        entity[tango] = zulu;
        zulu = _closure1_slot36;
        mike = undefined;
        oscar = zulu.bind(mike)();
        golf = entity;
        mike = copyDataProperties(golf, oscar);
        return entity;
    };
    zulu['MemberVerificationChangeStrings'] = options;
    options = function() {
        entity = {};
        zulu = _closure1_slot16;
        tango = zulu.STATUS;
        zulu = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.HyCSnJ;
            return entity;
        };
        entity[tango] = zulu;
        zulu = _closure1_slot36;
        mike = undefined;
        report = zulu.bind(mike)();
        oscar = entity;
        mike = copyDataProperties(oscar, report);
        return entity;
    };
    zulu['VoiceChannelStatusStrings'] = options;
    zulu['NotRenderedChanges'] = golf;
    zulu['ACTION_FILTER_ITEMS'] = oscar;
    zulu['findChangeByKey'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogTitleFromChange
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zulu = _closure1_slot37;
            oscar = undefined;
            tango = zulu.bind(oscar)();
            zulu = tango.find;
            entity = function(argFoo) {
                entity = argFoo;
                mike = entity.value;
                entity = _closure2_slot0;
                entity = entity.action;
                entity = mike === entity;
                return entity;
            };
            tango = zulu.bind(tango)(entity);
            zulu = _closure1_slot39;
            entity = _closure1_slot16;
            entity = entity.COMMUNICATION_DISABLED_UNTIL;
            zulu = zulu.bind(oscar)(entity, report);
            entity = null;
            if(!(entity == zulu)) { _fun00040_ip = 93; continue _fun00039 }
 65:
            report = entity == tango;
            zulu = undefined;
            if(report) { _fun00040_ip = 79; continue _fun00039 }
 74:
            zulu = tango.label;
 79:
            tango = entity != zulu;
            entity = null;
            if(!tango) { _fun00040_ip = 91; continue _fun00039 }
 88:
            entity = zulu;
 91:
            _fun00040_ip = 148; continue _fun00039;
 93:
            report = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            zulu = report.bind(oscar)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = report.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.z3wbj4;
            entity = zulu.bind(tango)(mike);
 148:
            return entity;
        }
    };
    zulu['getSimpleAuditLogTitleFromChange'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogTitleContextFromChange
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            tango = argFoo;
            mike = _closure1_slot39;
            entity = _closure1_slot16;
            entity = entity.COMMUNICATION_DISABLED_UNTIL;
            yankee = undefined;
            report = mike.bind(yankee)(entity, tango);
            golf = _closure1_slot40;
            entity = _closure1_slot16;
            entity = entity.ROLES_ADD;
            entity = golf.bind(yankee)(entity, tango);
            entity = entity.length;
            oscar = 0;
            mike = entity > oscar;
            entity = _closure1_slot16;
            entity = entity.ROLES_REMOVE;
            entity = golf.bind(yankee)(entity, tango);
            entity = entity.length;
            oscar = entity > oscar;
            entity = null;
            if(!(entity == report)) { _fun00042_ip = 281; continue _fun00041 }
 93:
            if(!mike) { _fun00042_ip = 102; continue _fun00041 }
 96:
            if(oscar) { _fun00042_ip = 224; continue _fun00041 }
 102:
            if(mike) { _fun00042_ip = 167; continue _fun00041 }
 105:
            mike = null;
            if(!oscar) { _fun00042_ip = 165; continue _fun00041 }
 110:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 17;
            golf = offset[oscar];
            golf = verify.bind(yankee)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(yankee)(oscar);
            oscar = oscar.t;
            oscar = oscar.8mQ6x8;
            mike = golf.bind(options)(oscar);
 165:
            _fun00042_ip = 222; continue _fun00041;
 167:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 17;
            golf = offset[oscar];
            golf = verify.bind(yankee)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(yankee)(oscar);
            oscar = oscar.t;
            oscar = oscar.4GQqs7;
            mike = golf.bind(options)(oscar);
 222:
            _fun00042_ip = 279; continue _fun00041;
 224:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscar = 17;
            golf = offset[oscar];
            golf = verify.bind(yankee)(golf);
            options = golf.intl;
            golf = options.string;
            oscar = offset[oscar];
            oscar = verify.bind(yankee)(oscar);
            oscar = oscar.t;
            oscar = oscar.RdMMe3;
            mike = golf.bind(options)(oscar);
 279:
            return mike;
 281:
            oscar = entity == report;
            mike = undefined;
            if(oscar) { _fun00042_ip = 296; continue _fun00041 }
 290:
            mike = report.newValue;
 296:
            if(!(entity == mike)) { _fun00042_ip = 379; continue _fun00041 }
 300:
            oscar = entity == report;
            mike = undefined;
            if(oscar) { _fun00042_ip = 315; continue _fun00041 }
 309:
            mike = report.oldValue;
 315:
            if(!(entity != mike)) { _fun00042_ip = 577; continue _fun00041 }
 322:
            options = _closure1_slot0;
            verify = _closure1_slot3;
            mike = 17;
            oscar = verify[mike];
            oscar = options.bind(yankee)(oscar);
            golf = oscar.intl;
            oscar = golf.string;
            mike = verify[mike];
            mike = options.bind(yankee)(mike);
            mike = mike.t;
            mike = mike.MA1ltr;
            mike = oscar.bind(golf)(mike);
            return mike;
 379:
            oscar = global;
            golf = oscar.Date;
            options = entity == report;
            mike = undefined;
            if(options) { _fun00042_ip = 402; continue _fun00041 }
 396:
            mike = report.newValue;
 402:
            report = golf.prototype;
            report = Object.create(report, {constructor: {value: golf}});
            kilo = report;
            backup = mike;
            mike = new kilo[golf](backup, foxtrot);
            report = mike instanceof Object ? mike : report;
            mike = report.getTime;
            report = mike.bind(report)();
            options = _closure1_slot1;
            mike = _closure1_slot3;
            golf = 19;
            golf = mike[golf];
            options = options.bind(yankee)(golf);
            golf = options.extractTimestamp;
            tango = tango.id;
            tango = golf.bind(options)(tango);
            options = report - tango;
            verify = oscar.Math;
            golf = verify.round;
            report = 1000;
            offset = options / report;
            tango = 60;
            tango = offset / tango;
            verify = golf.bind(verify)(tango);
            tango = _closure1_slot0;
            romeo = 16;
            mike = mike[romeo];
            golf = tango.bind(yankee)(mike);
            tango = golf.getTimeAndUnit;
            mike = _closure1_slot35;
            tango = tango.bind(golf)(verify, mike);
            mike = tango.unit;
            if(!(entity != mike)) { _fun00042_ip = 667; continue _fun00041 }
 550:
            mike = tango.time;
            if(!(entity != mike)) { _fun00042_ip = 667; continue _fun00041 }
 560:
            golf = tango.unit;
            mike = _closure1_slot38;
            mike = golf in mike;
            if(mike) { _fun00042_ip = 579; continue _fun00041 }
 577:
            return entity;
 579:
            mike = tango.unit;
            verify = tango.unit;
            offset = _closure1_slot0;
            golf = _closure1_slot3;
            golf = golf[romeo];
            golf = offset.bind(yankee)(golf);
            golf = golf.TimeUnits;
            golf = golf.SECONDS;
            if(!(verify !== golf)) { _fun00042_ip = 632; continue _fun00041 }
 624:
            tango = tango.time;
            _fun00042_ip = 652; continue _fun00041;
 632:
            golf = oscar.Math;
            oscar = golf.round;
            report = options / report;
            tango = oscar.bind(golf)(report);
 652:
            zulu = _closure1_slot38;
            mike = zulu[mike];
            mike = mike.bind(zulu)(tango);
            return mike;
 667:
            return entity;
        }
    };
    zulu['getSimpleAuditLogTitleContextFromChange'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogChangeDetails
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            oscar = argFoo;
            zulu = _closure1_slot40;
            entity = _closure1_slot16;
            entity = entity.ROLES_ADD;
            options = undefined;
            report = zulu.bind(options)(entity, oscar);
            entity = _closure1_slot16;
            entity = entity.ROLES_REMOVE;
            zulu = zulu.bind(options)(entity, oscar);
            entity = null;
            oscar = entity == report;
            golf = undefined;
            if(oscar) { _fun00044_ip = 90; continue _fun00043 }
 57:
            verify = report.map;
            oscar = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    tango = entity.newValue;
                    entity = null;
                    mike = entity == tango;
                    entity = undefined;
                    if(mike) { _fun00046_ip = 55; continue _fun00045 }
 20:
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.name;
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.join;
                    mike = ', ';
                    entity = zulu.bind(tango)(mike);
 55:
                    return entity;
                }
            };
            offset = verify.bind(report)(oscar);
            verify = offset.join;
            oscar = ', ';
            golf = verify.bind(offset)(oscar);
 90:
            verify = entity == zulu;
            oscar = undefined;
            if(verify) { _fun00044_ip = 132; continue _fun00043 }
 99:
            verify = zulu.map;
            tango = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    tango = entity.newValue;
                    entity = null;
                    mike = entity == tango;
                    entity = undefined;
                    if(mike) { _fun00048_ip = 55; continue _fun00047 }
 20:
                    zulu = tango.map;
                    mike = function(argFoo) {
                        entity = argFoo;
                        entity = entity.name;
                        return entity;
                    };
                    tango = zulu.bind(tango)(mike);
                    zulu = tango.join;
                    mike = ', ';
                    entity = zulu.bind(tango)(mike);
 55:
                    return entity;
                }
            };
            offset = verify.bind(zulu)(tango);
            verify = offset.join;
            tango = ', ';
            oscar = verify.bind(offset)(tango);
 132:
            verify = report.length;
            tango = 0;
            if(!(verify > tango)) { _fun00044_ip = 155; continue _fun00043 }
 143:
            verify = zulu.length;
            if(!(!(verify > tango))) { _fun00044_ip = 308; continue _fun00043 }
 155:
            report = report.length;
            if(!(!(report > tango))) { _fun00044_ip = 243; continue _fun00043 }
 164:
            zulu = zulu.length;
            zulu = zulu > tango;
            entity = null;
            if(!zulu) { _fun00044_ip = 241; continue _fun00043 }
 178:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            zulu = 17;
            report = offset[zulu];
            report = tango.bind(options)(report);
            verify = report.intl;
            report = verify.formatToPlainString;
            zulu = offset[zulu];
            zulu = tango.bind(options)(zulu);
            zulu = zulu.t;
            tango = zulu.Wk4pAA;
            zulu = {};
            zulu['roleNames'] = oscar;
            entity = report.bind(verify)(tango, zulu);
 241:
            _fun00044_ip = 306; continue _fun00043;
 243:
            tango = _closure1_slot0;
            offset = _closure1_slot3;
            zulu = 17;
            report = offset[zulu];
            report = tango.bind(options)(report);
            verify = report.intl;
            report = verify.formatToPlainString;
            zulu = offset[zulu];
            zulu = tango.bind(options)(zulu);
            zulu = zulu.t;
            tango = zulu./mTqt7;
            zulu = {};
            zulu['roleNames'] = golf;
            entity = report.bind(verify)(tango, zulu);
 306:
            _fun00044_ip = 380; continue _fun00043;
 308:
            zulu = _closure1_slot0;
            verify = _closure1_slot3;
            mike = 17;
            tango = verify[mike];
            tango = zulu.bind(options)(tango);
            report = tango.intl;
            tango = report.formatToPlainString;
            mike = verify[mike];
            mike = zulu.bind(options)(mike);
            mike = mike.t;
            zulu = mike.tZw1ER;
            mike = {};
            mike['roleNamesAdded'] = golf;
            mike['roleNamesRemoved'] = oscar;
            entity = tango.bind(report)(zulu, mike);
 380:
            return entity;
        }
    };
    zulu['getSimpleAuditLogChangeDetails'] = report;
    report = function(argFoo) { // Original name: getChangeTitle
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            report = argFoo;
            zulu = report.action;
            mike = _closure1_slot15;
            mike = mike.GUILD_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 4613; continue _fun00049 }
 30:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 4339; continue _fun00049 }
 47:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 4304; continue _fun00049 }
 64:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 4269; continue _fun00049 }
 81:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_OVERWRITE_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 4234; continue _fun00049 }
 98:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_OVERWRITE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 4199; continue _fun00049 }
 115:
            mike = _closure1_slot15;
            mike = mike.CHANNEL_OVERWRITE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 4164; continue _fun00049 }
 132:
            mike = _closure1_slot15;
            mike = mike.MEMBER_KICK;
            if(!(mike !== zulu)) { _fun00050_ip = 4129; continue _fun00049 }
 149:
            mike = _closure1_slot15;
            mike = mike.MEMBER_PRUNE;
            if(!(mike !== zulu)) { _fun00050_ip = 4094; continue _fun00049 }
 166:
            mike = _closure1_slot15;
            mike = mike.MEMBER_BAN_ADD;
            if(!(mike !== zulu)) { _fun00050_ip = 4059; continue _fun00049 }
 183:
            mike = _closure1_slot15;
            mike = mike.MEMBER_BAN_REMOVE;
            if(!(mike !== zulu)) { _fun00050_ip = 4024; continue _fun00049 }
 200:
            mike = _closure1_slot15;
            mike = mike.MEMBER_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3989; continue _fun00049 }
 217:
            mike = _closure1_slot15;
            mike = mike.MEMBER_ROLE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3954; continue _fun00049 }
 234:
            mike = _closure1_slot15;
            mike = mike.MEMBER_MOVE;
            if(!(mike !== zulu)) { _fun00050_ip = 3919; continue _fun00049 }
 251:
            mike = _closure1_slot15;
            mike = mike.MEMBER_DISCONNECT;
            if(!(mike !== zulu)) { _fun00050_ip = 3884; continue _fun00049 }
 268:
            mike = _closure1_slot15;
            mike = mike.BOT_ADD;
            if(!(mike !== zulu)) { _fun00050_ip = 3849; continue _fun00049 }
 285:
            mike = _closure1_slot15;
            mike = mike.ROLE_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3814; continue _fun00049 }
 302:
            mike = _closure1_slot15;
            mike = mike.ROLE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3779; continue _fun00049 }
 319:
            mike = _closure1_slot15;
            mike = mike.ROLE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3744; continue _fun00049 }
 336:
            mike = _closure1_slot15;
            mike = mike.INVITE_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3709; continue _fun00049 }
 353:
            mike = _closure1_slot15;
            mike = mike.INVITE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3674; continue _fun00049 }
 370:
            mike = _closure1_slot15;
            mike = mike.INVITE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3639; continue _fun00049 }
 387:
            mike = _closure1_slot15;
            mike = mike.WEBHOOK_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3604; continue _fun00049 }
 404:
            mike = _closure1_slot15;
            mike = mike.WEBHOOK_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3569; continue _fun00049 }
 421:
            mike = _closure1_slot15;
            mike = mike.WEBHOOK_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3534; continue _fun00049 }
 438:
            mike = _closure1_slot15;
            mike = mike.EMOJI_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3499; continue _fun00049 }
 455:
            mike = _closure1_slot15;
            mike = mike.EMOJI_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3464; continue _fun00049 }
 472:
            mike = _closure1_slot15;
            mike = mike.EMOJI_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3429; continue _fun00049 }
 489:
            mike = _closure1_slot15;
            mike = mike.STICKER_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3394; continue _fun00049 }
 506:
            mike = _closure1_slot15;
            mike = mike.STICKER_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3359; continue _fun00049 }
 523:
            mike = _closure1_slot15;
            mike = mike.STICKER_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3324; continue _fun00049 }
 540:
            mike = _closure1_slot15;
            mike = mike.MESSAGE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3289; continue _fun00049 }
 557:
            mike = _closure1_slot15;
            mike = mike.MESSAGE_BULK_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3254; continue _fun00049 }
 574:
            mike = _closure1_slot15;
            mike = mike.MESSAGE_PIN;
            if(!(mike !== zulu)) { _fun00050_ip = 3219; continue _fun00049 }
 591:
            mike = _closure1_slot15;
            mike = mike.MESSAGE_UNPIN;
            if(!(mike !== zulu)) { _fun00050_ip = 3184; continue _fun00049 }
 608:
            mike = _closure1_slot15;
            mike = mike.INTEGRATION_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3149; continue _fun00049 }
 625:
            mike = _closure1_slot15;
            mike = mike.INTEGRATION_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3114; continue _fun00049 }
 642:
            mike = _closure1_slot15;
            mike = mike.INTEGRATION_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 3079; continue _fun00049 }
 659:
            mike = _closure1_slot15;
            mike = mike.STAGE_INSTANCE_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3044; continue _fun00049 }
 676:
            mike = _closure1_slot15;
            mike = mike.STAGE_INSTANCE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 3009; continue _fun00049 }
 693:
            mike = _closure1_slot15;
            mike = mike.STAGE_INSTANCE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 2928; continue _fun00049 }
 710:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2893; continue _fun00049 }
 727:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2858; continue _fun00049 }
 744:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 2823; continue _fun00049 }
 761:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2788; continue _fun00049 }
 778:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2788; continue _fun00049 }
 795:
            mike = _closure1_slot15;
            mike = mike.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 2753; continue _fun00049 }
 812:
            mike = _closure1_slot15;
            mike = mike.THREAD_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2531; continue _fun00049 }
 829:
            mike = _closure1_slot15;
            mike = mike.THREAD_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2496; continue _fun00049 }
 846:
            mike = _closure1_slot15;
            mike = mike.THREAD_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 2461; continue _fun00049 }
 863:
            mike = _closure1_slot15;
            mike = mike.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2426; continue _fun00049 }
 880:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(mike !== zulu)) { _fun00050_ip = 2391; continue _fun00049 }
 897:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(mike !== zulu)) { _fun00050_ip = 2276; continue _fun00049 }
 914:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(mike !== zulu)) { _fun00050_ip = 2241; continue _fun00049 }
 931:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_QUARANTINE_USER;
            if(!(mike !== zulu)) { _fun00050_ip = 2206; continue _fun00049 }
 948:
            mike = _closure1_slot15;
            mike = mike.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(mike !== zulu)) { _fun00050_ip = 2171; continue _fun00049 }
 965:
            mike = _closure1_slot15;
            mike = mike.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(mike !== zulu)) { _fun00050_ip = 2136; continue _fun00049 }
 982:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_RULE_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2101; continue _fun00049 }
 999:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_RULE_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 2066; continue _fun00049 }
 1016:
            mike = _closure1_slot15;
            mike = mike.AUTO_MODERATION_RULE_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 2031; continue _fun00049 }
 1033:
            mike = _closure1_slot15;
            mike = mike.ONBOARDING_PROMPT_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1996; continue _fun00049 }
 1050:
            mike = _closure1_slot15;
            mike = mike.ONBOARDING_PROMPT_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1961; continue _fun00049 }
 1067:
            mike = _closure1_slot15;
            mike = mike.ONBOARDING_PROMPT_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 1926; continue _fun00049 }
 1084:
            mike = _closure1_slot15;
            mike = mike.ONBOARDING_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1891; continue _fun00049 }
 1101:
            mike = _closure1_slot15;
            mike = mike.ONBOARDING_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1856; continue _fun00049 }
 1118:
            mike = _closure1_slot15;
            mike = mike.HOME_SETTINGS_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1821; continue _fun00049 }
 1135:
            mike = _closure1_slot15;
            mike = mike.HOME_SETTINGS_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1786; continue _fun00049 }
 1152:
            mike = _closure1_slot15;
            mike = mike.GUILD_HOME_FEATURE_ITEM;
            if(!(mike !== zulu)) { _fun00050_ip = 1528; continue _fun00049 }
 1169:
            mike = _closure1_slot15;
            mike = mike.GUILD_HOME_REMOVE_ITEM;
            if(!(mike !== zulu)) { _fun00050_ip = 1493; continue _fun00049 }
 1186:
            mike = _closure1_slot15;
            mike = mike.SOUNDBOARD_SOUND_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1458; continue _fun00049 }
 1203:
            mike = _closure1_slot15;
            mike = mike.SOUNDBOARD_SOUND_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1423; continue _fun00049 }
 1220:
            mike = _closure1_slot15;
            mike = mike.SOUNDBOARD_SOUND_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 1388; continue _fun00049 }
 1237:
            mike = _closure1_slot15;
            mike = mike.VOICE_CHANNEL_STATUS_CREATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1353; continue _fun00049 }
 1251:
            mike = _closure1_slot15;
            mike = mike.VOICE_CHANNEL_STATUS_DELETE;
            if(!(mike !== zulu)) { _fun00050_ip = 1318; continue _fun00049 }
 1265:
            mike = _closure1_slot15;
            mike = mike.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(mike !== zulu)) { _fun00050_ip = 1283; continue _fun00049 }
 1279:
            mike = null;
            return mike;
 1283:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NUKUb2;
            return mike;
 1318:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.aS8Krq;
            return mike;
 1353:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.MWjnU1;
            return mike;
 1388:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.kVz4//;
            return mike;
 1423:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.CM8n19;
            return mike;
 1458:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.0PD83d;
            return mike;
 1493:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.kPReur;
            return mike;
 1528:
            mike = report.changes;
            zulu = null;
            oscar = zulu != mike;
            mike = null;
            if(!oscar) { _fun00050_ip = 1568; continue _fun00049 }
 1545:
            options = report.changes;
            golf = options.find;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure1_slot16;
                entity = entity.ENTITY_TYPE;
                entity = mike === entity;
                return entity;
            };
            mike = golf.bind(options)(oscar);
 1568:
            if(!(zulu != mike)) { _fun00050_ip = 1751; continue _fun00049 }
 1575:
            zulu = mike.newValue;
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            options = 20;
            mike = mike[options];
            oscar = undefined;
            mike = golf.bind(oscar)(mike);
            mike = mike.GuildFeedItemTypes;
            mike = mike.MESSAGE;
            if(!(mike !== zulu)) { _fun00050_ip = 1718; continue _fun00049 }
 1619:
            golf = _closure1_slot0;
            mike = _closure1_slot3;
            mike = mike[options];
            mike = golf.bind(oscar)(mike);
            mike = mike.GuildFeedItemTypes;
            mike = mike.FORUM_POST;
            if(!(mike !== zulu)) { _fun00050_ip = 1685; continue _fun00049 }
 1652:
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.UZ+U3N;
            return mike;
 1685:
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.hCuAb2;
            return mike;
 1718:
            zulu = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            mike = golf[mike];
            mike = zulu.bind(oscar)(mike);
            mike = mike.t;
            mike = mike.PyEa+P;
            return mike;
 1751:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.UZ+U3N;
            return mike;
 1786:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.XHE8qq;
            return mike;
 1821:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.dSdCjI;
            return mike;
 1856:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.yONu/v;
            return mike;
 1891:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.wDaq39;
            return mike;
 1926:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.IuBTam;
            return mike;
 1961:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ArIrWF;
            return mike;
 1996:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike./8A1g4;
            return mike;
 2031:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.umua3t;
            return mike;
 2066:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.3wEA9v;
            return mike;
 2101:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NKljj4;
            return mike;
 2136:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ryGLk5;
            return mike;
 2171:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ONvWys;
            return mike;
 2206:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike./W5u5u;
            return mike;
 2241:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.Vk4Twc;
            return mike;
 2276:
            mike = report.options;
            zulu = null;
            oscar = zulu == mike;
            golf = undefined;
            zulu = undefined;
            if(oscar) { _fun00050_ip = 2302; continue _fun00049 }
 2294:
            zulu = mike.auto_moderation_rule_trigger_type;
 2302:
            mike = _closure1_slot30;
            oscar = mike.USER_PROFILE;
            mike = oscar.toString;
            mike = mike.bind(oscar)();
            if(!(zulu !== mike)) { _fun00050_ip = 2358; continue _fun00049 }
 2325:
            zulu = _closure1_slot0;
            oscar = _closure1_slot3;
            mike = 17;
            mike = oscar[mike];
            mike = zulu.bind(golf)(mike);
            mike = mike.t;
            mike = mike.SD0PwM;
            _fun00050_ip = 2389; continue _fun00049;
 2358:
            oscar = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            zulu = options[zulu];
            zulu = oscar.bind(golf)(zulu);
            zulu = zulu.t;
            mike = zulu.YQsjen;
 2389:
            return mike;
 2391:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NqWv2N;
            return mike;
 2426:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.uzCqBg;
            return mike;
 2461:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.s3Khn5;
            return mike;
 2496:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.PSsy4u;
            return mike;
 2531:
            mike = report.changes;
            zulu = null;
            oscar = zulu != mike;
            mike = null;
            if(!oscar) { _fun00050_ip = 2571; continue _fun00049 }
 2548:
            options = report.changes;
            golf = options.find;
            oscar = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure1_slot16;
                entity = entity.TYPE;
                entity = mike === entity;
                return entity;
            };
            mike = golf.bind(options)(oscar);
 2571:
            if(!(zulu != mike)) { _fun00050_ip = 2717; continue _fun00049 }
 2578:
            zulu = mike.newValue;
            mike = _closure1_slot22;
            mike = mike.PRIVATE_THREAD;
            if(!(mike !== zulu)) { _fun00050_ip = 2682; continue _fun00049 }
 2598:
            mike = _closure1_slot22;
            mike = mike.ANNOUNCEMENT_THREAD;
            if(!(mike !== zulu)) { _fun00050_ip = 2647; continue _fun00049 }
 2612:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.2cxQ7O;
            return mike;
 2647:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.6uaMmJ;
            return mike;
 2682:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.Br0y5+;
            return mike;
 2717:
            mike = global;
            oscar = mike.Error;
            mike = oscar.prototype;
            zulu = Object.create(mike, {constructor: {value: oscar}});
            verify = '[AuditLog] Could not find type change for thread create';
            offset = zulu;
            mike = new offset[oscar](verify, options);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 2753:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.zYb2dX;
            return mike;
 2788:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.8qCI39;
            return mike;
 2823:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike./ARPKS;
            return mike;
 2858:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ebTK19;
            return mike;
 2893:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.S7k52t;
            return mike;
 2928:
            zulu = report.userId;
            mike = null;
            if(!(mike == zulu)) { _fun00050_ip = 2974; continue _fun00049 }
 2939:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.7ZIFm5;
            _fun00050_ip = 3007; continue _fun00049;
 2974:
            golf = _closure1_slot0;
            oscar = _closure1_slot3;
            zulu = 17;
            oscar = oscar[zulu];
            zulu = undefined;
            zulu = golf.bind(zulu)(oscar);
            zulu = zulu.t;
            mike = zulu.Oi/in5;
 3007:
            return mike;
 3009:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.0hQYU1;
            return mike;
 3044:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.n7x/DA;
            return mike;
 3079:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.8zScWV;
            return mike;
 3114:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ibCCOT;
            return mike;
 3149:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.HYvCb2;
            return mike;
 3184:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NCxXUV;
            return mike;
 3219:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.Yna7Ex;
            return mike;
 3254:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.3RIvLC;
            return mike;
 3289:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.HPkD+P;
            return mike;
 3324:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.rGEP9f;
            return mike;
 3359:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.bhujGR;
            return mike;
 3394:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.DRZifn;
            return mike;
 3429:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.JnUaVF;
            return mike;
 3464:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.IsCKfn;
            return mike;
 3499:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.7vekRE;
            return mike;
 3534:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.in0VjY;
            return mike;
 3569:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.6GTlWF;
            return mike;
 3604:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.MhYhio;
            return mike;
 3639:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.3n/iWl;
            return mike;
 3674:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ja3kGR;
            return mike;
 3709:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.YHOXW1;
            return mike;
 3744:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.4s63tb;
            return mike;
 3779:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NRbN19;
            return mike;
 3814:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.UTLTx8;
            return mike;
 3849:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.fWvX0N;
            return mike;
 3884:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.K4eCZ2;
            return mike;
 3919:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.Yt6NkZ;
            return mike;
 3954:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.VngfiY;
            return mike;
 3989:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.pznhLC;
            return mike;
 4024:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.o3Y6HB;
            return mike;
 4059:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.XklUm5;
            return mike;
 4094:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.qKOZTE;
            return mike;
 4129:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.B5hDZW;
            return mike;
 4164:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.HASt//;
            return mike;
 4199:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.uhtbNT;
            return mike;
 4234:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.l5Cu1d;
            return mike;
 4269:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.ynfvkp;
            return mike;
 4304:
            oscar = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = oscar.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.nTYk6O;
            return mike;
 4339:
            mike = report.changes;
            zulu = null;
            oscar = zulu != mike;
            mike = null;
            if(!oscar) { _fun00050_ip = 4379; continue _fun00049 }
 4356:
            oscar = report.changes;
            report = oscar.find;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.key;
                entity = _closure1_slot16;
                entity = entity.TYPE;
                entity = mike === entity;
                return entity;
            };
            mike = report.bind(oscar)(tango);
 4379:
            if(!(zulu != mike)) { _fun00050_ip = 4577; continue _fun00049 }
 4386:
            zulu = mike.newValue;
            mike = _closure1_slot22;
            mike = mike.GUILD_STAGE_VOICE;
            if(!(mike !== zulu)) { _fun00050_ip = 4542; continue _fun00049 }
 4409:
            mike = _closure1_slot22;
            mike = mike.GUILD_VOICE;
            if(!(mike !== zulu)) { _fun00050_ip = 4507; continue _fun00049 }
 4423:
            mike = _closure1_slot22;
            mike = mike.GUILD_CATEGORY;
            if(!(mike !== zulu)) { _fun00050_ip = 4472; continue _fun00049 }
 4437:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.wrYNGx;
            return mike;
 4472:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.T3KIj4;
            return mike;
 4507:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.NPOy4O;
            return mike;
 4542:
            tango = _closure1_slot0;
            zulu = _closure1_slot3;
            mike = 17;
            zulu = zulu[mike];
            mike = undefined;
            mike = tango.bind(mike)(zulu);
            mike = mike.t;
            mike = mike.OKp4+v;
            return mike;
 4577:
            mike = global;
            tango = mike.Error;
            mike = tango.prototype;
            zulu = Object.create(mike, {constructor: {value: tango}});
            verify = '[AuditLog] Could not find type change for channel create';
            offset = zulu;
            mike = new offset[tango](verify, options);
            mike = mike instanceof Object ? mike : zulu;
            throw mike;
 4613:
            zulu = _closure1_slot0;
            mike = _closure1_slot3;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            entity = entity.t;
            entity = entity.LjZO39;
            return entity;
        }
    };
    zulu['getChangeTitle'] = report;
    report = function(argFoo) { // Original name: getStringForAddedChannelFlag
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot29;
            mike = mike.GUILD_FEED_REMOVED;
            if(!(mike !== zulu)) { _fun00052_ip = 173; continue _fun00051 }
 23:
            mike = _closure1_slot29;
            mike = mike.ACTIVE_CHANNELS_REMOVED;
            if(!(mike !== zulu)) { _fun00052_ip = 114; continue _fun00051 }
 37:
            mike = _closure1_slot29;
            mike = mike.PINNED;
            if(!(mike !== zulu)) { _fun00052_ip = 55; continue _fun00051 }
 51:
            mike = null;
            return mike;
 55:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.1QLRYW;
            mike = zulu.bind(tango)(mike);
            return mike;
 114:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.4YLtzM;
            mike = zulu.bind(tango)(mike);
            return mike;
 173:
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 17;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.5G8ZDw;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getStringForAddedChannelFlag'] = report;
    report = function(argFoo) { // Original name: getStringForRemovedChannelFlag
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zulu = argFoo;
            mike = _closure1_slot29;
            mike = mike.GUILD_FEED_REMOVED;
            if(!(mike !== zulu)) { _fun00054_ip = 173; continue _fun00053 }
 23:
            mike = _closure1_slot29;
            mike = mike.ACTIVE_CHANNELS_REMOVED;
            if(!(mike !== zulu)) { _fun00054_ip = 114; continue _fun00053 }
 37:
            mike = _closure1_slot29;
            mike = mike.PINNED;
            if(!(mike !== zulu)) { _fun00054_ip = 55; continue _fun00053 }
 51:
            mike = null;
            return mike;
 55:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.CMweGB;
            mike = zulu.bind(tango)(mike);
            return mike;
 114:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.8qpgc3;
            mike = zulu.bind(tango)(mike);
            return mike;
 173:
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 17;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.S5kuWV;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getStringForRemovedChannelFlag'] = report;
    report = function(argFoo, argBar) { // Original name: getStringForPermission
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            tango = argFoo;
            mike = argBar;
            zulu = _closure1_slot23;
            zulu = zulu.CREATE_INSTANT_INVITE;
            if(!(zulu !== tango)) { _fun00056_ip = 3718; continue _fun00055 }
 26:
            zulu = _closure1_slot23;
            zulu = zulu.KICK_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 3659; continue _fun00055 }
 43:
            zulu = _closure1_slot23;
            zulu = zulu.BAN_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 3600; continue _fun00055 }
 60:
            zulu = _closure1_slot23;
            zulu = zulu.ADMINISTRATOR;
            if(!(zulu !== tango)) { _fun00056_ip = 3541; continue _fun00055 }
 77:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_CHANNELS;
            if(!(zulu !== tango)) { _fun00056_ip = 3383; continue _fun00055 }
 94:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_GUILD;
            if(!(zulu !== tango)) { _fun00056_ip = 3324; continue _fun00055 }
 111:
            zulu = _closure1_slot23;
            zulu = zulu.VIEW_GUILD_ANALYTICS;
            if(!(zulu !== tango)) { _fun00056_ip = 3265; continue _fun00055 }
 128:
            zulu = _closure1_slot23;
            zulu = zulu.VIEW_CREATOR_MONETIZATION_ANALYTICS;
            if(!(zulu !== tango)) { _fun00056_ip = 3206; continue _fun00055 }
 145:
            zulu = _closure1_slot23;
            zulu = zulu.CHANGE_NICKNAME;
            if(!(zulu !== tango)) { _fun00056_ip = 3147; continue _fun00055 }
 162:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_NICKNAMES;
            if(!(zulu !== tango)) { _fun00056_ip = 3088; continue _fun00055 }
 179:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_ROLES;
            if(!(zulu !== tango)) { _fun00056_ip = 3029; continue _fun00055 }
 196:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_WEBHOOKS;
            if(!(zulu !== tango)) { _fun00056_ip = 2970; continue _fun00055 }
 213:
            zulu = _closure1_slot23;
            zulu = zulu.CREATE_GUILD_EXPRESSIONS;
            if(!(zulu !== tango)) { _fun00056_ip = 2911; continue _fun00055 }
 230:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_GUILD_EXPRESSIONS;
            if(!(zulu !== tango)) { _fun00056_ip = 2852; continue _fun00055 }
 247:
            zulu = _closure1_slot23;
            zulu = zulu.VIEW_AUDIT_LOG;
            if(!(zulu !== tango)) { _fun00056_ip = 2793; continue _fun00055 }
 264:
            zulu = _closure1_slot23;
            zulu = zulu.VIEW_CHANNEL;
            if(!(zulu !== tango)) { _fun00056_ip = 2635; continue _fun00055 }
 281:
            zulu = _closure1_slot23;
            zulu = zulu.SEND_MESSAGES;
            if(!(zulu !== tango)) { _fun00056_ip = 2576; continue _fun00055 }
 298:
            zulu = _closure1_slot23;
            zulu = zulu.SEND_TTS_MESSAGES;
            if(!(zulu !== tango)) { _fun00056_ip = 2517; continue _fun00055 }
 315:
            zulu = _closure1_slot23;
            zulu = zulu.USE_APPLICATION_COMMANDS;
            if(!(zulu !== tango)) { _fun00056_ip = 2458; continue _fun00055 }
 332:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_MESSAGES;
            if(!(zulu !== tango)) { _fun00056_ip = 2399; continue _fun00055 }
 349:
            zulu = _closure1_slot23;
            zulu = zulu.EMBED_LINKS;
            if(!(zulu !== tango)) { _fun00056_ip = 2340; continue _fun00055 }
 366:
            zulu = _closure1_slot23;
            zulu = zulu.ATTACH_FILES;
            if(!(zulu !== tango)) { _fun00056_ip = 2281; continue _fun00055 }
 383:
            zulu = _closure1_slot23;
            zulu = zulu.READ_MESSAGE_HISTORY;
            if(!(zulu !== tango)) { _fun00056_ip = 2222; continue _fun00055 }
 400:
            zulu = _closure1_slot23;
            zulu = zulu.MENTION_EVERYONE;
            if(!(zulu !== tango)) { _fun00056_ip = 2163; continue _fun00055 }
 417:
            zulu = _closure1_slot23;
            zulu = zulu.USE_EXTERNAL_EMOJIS;
            if(!(zulu !== tango)) { _fun00056_ip = 2104; continue _fun00055 }
 434:
            zulu = _closure1_slot23;
            zulu = zulu.USE_EXTERNAL_STICKERS;
            if(!(zulu !== tango)) { _fun00056_ip = 2045; continue _fun00055 }
 451:
            zulu = _closure1_slot23;
            zulu = zulu.ADD_REACTIONS;
            if(!(zulu !== tango)) { _fun00056_ip = 1986; continue _fun00055 }
 468:
            zulu = _closure1_slot23;
            zulu = zulu.CONNECT;
            if(!(zulu !== tango)) { _fun00056_ip = 1927; continue _fun00055 }
 485:
            zulu = _closure1_slot23;
            zulu = zulu.SPEAK;
            if(!(zulu !== tango)) { _fun00056_ip = 1868; continue _fun00055 }
 502:
            zulu = _closure1_slot23;
            zulu = zulu.MUTE_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 1809; continue _fun00055 }
 519:
            zulu = _closure1_slot23;
            zulu = zulu.DEAFEN_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 1750; continue _fun00055 }
 536:
            zulu = _closure1_slot23;
            zulu = zulu.MOVE_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 1691; continue _fun00055 }
 553:
            zulu = _closure1_slot23;
            zulu = zulu.USE_VAD;
            if(!(zulu !== tango)) { _fun00056_ip = 1632; continue _fun00055 }
 570:
            zulu = _closure1_slot23;
            zulu = zulu.PRIORITY_SPEAKER;
            if(!(zulu !== tango)) { _fun00056_ip = 1573; continue _fun00055 }
 587:
            zulu = _closure1_slot23;
            zulu = zulu.STREAM;
            if(!(zulu !== tango)) { _fun00056_ip = 1514; continue _fun00055 }
 604:
            zulu = _closure1_slot23;
            zulu = zulu.REQUEST_TO_SPEAK;
            if(!(zulu !== tango)) { _fun00056_ip = 1455; continue _fun00055 }
 621:
            zulu = _closure1_slot23;
            zulu = zulu.CREATE_EVENTS;
            if(!(zulu !== tango)) { _fun00056_ip = 1396; continue _fun00055 }
 638:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_EVENTS;
            if(!(zulu !== tango)) { _fun00056_ip = 1337; continue _fun00055 }
 655:
            zulu = _closure1_slot23;
            zulu = zulu.CREATE_PUBLIC_THREADS;
            if(!(zulu !== tango)) { _fun00056_ip = 1278; continue _fun00055 }
 672:
            zulu = _closure1_slot23;
            zulu = zulu.CREATE_PRIVATE_THREADS;
            if(!(zulu !== tango)) { _fun00056_ip = 1219; continue _fun00055 }
 689:
            zulu = _closure1_slot23;
            zulu = zulu.SEND_MESSAGES_IN_THREADS;
            if(!(zulu !== tango)) { _fun00056_ip = 1160; continue _fun00055 }
 706:
            zulu = _closure1_slot23;
            zulu = zulu.MANAGE_THREADS;
            if(!(zulu !== tango)) { _fun00056_ip = 1101; continue _fun00055 }
 723:
            zulu = _closure1_slot23;
            zulu = zulu.MODERATE_MEMBERS;
            if(!(zulu !== tango)) { _fun00056_ip = 1042; continue _fun00055 }
 740:
            zulu = _closure1_slot23;
            zulu = zulu.USE_CLYDE_AI;
            if(!(zulu !== tango)) { _fun00056_ip = 983; continue _fun00055 }
 757:
            zulu = _closure1_slot23;
            zulu = zulu.SET_VOICE_CHANNEL_STATUS;
            if(!(zulu !== tango)) { _fun00056_ip = 924; continue _fun00055 }
 774:
            zulu = _closure1_slot23;
            zulu = zulu.SEND_POLLS;
            if(!(zulu !== tango)) { _fun00056_ip = 865; continue _fun00055 }
 788:
            zulu = _closure1_slot23;
            zulu = zulu.USE_EXTERNAL_APPS;
            if(!(zulu !== tango)) { _fun00056_ip = 806; continue _fun00055 }
 802:
            zulu = null;
            return zulu;
 806:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.TtA5rK;
            zulu = tango.bind(report)(zulu);
            return zulu;
 865:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.UMQ7W1;
            zulu = tango.bind(report)(zulu);
            return zulu;
 924:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.VBwkUV;
            zulu = tango.bind(report)(zulu);
            return zulu;
 983:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.8eeEZm;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1042:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.+RL6p6;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1101:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.kEqgr6;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1160:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.fTE74u;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1219:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.QwbTSU;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1278:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.25rKnZ;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1337:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.HIgA5e;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1396:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.qyjZub;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1455:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.5kicT0;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1514:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.FlNoSU;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1573:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.BVK71t;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1632:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.08zAV1;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1691:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.YtjJPT;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1750:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.9L47Fh;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1809:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.8EI309;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1868:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.8w1tIS;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1927:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.S0W8Z2;
            zulu = tango.bind(report)(zulu);
            return zulu;
 1986:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.yEoJAg;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2045:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.UeRs+f;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2104:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.BpBGZW;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2163:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.Y78KGB;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2222:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.l9ufaW;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2281:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.3AS4UF;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2340:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.969dEB;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2399:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.6lU9xM;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2458:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.shbR1d;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2517:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.Mg7bkp;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2576:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.T32rkJ;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2635:
            tango = mike.targetType;
            zulu = _closure1_slot17;
            zulu = zulu.CHANNEL;
            if(!(tango !== zulu)) { _fun00056_ip = 2734; continue _fun00055 }
 2655:
            tango = mike.targetType;
            zulu = _closure1_slot17;
            zulu = zulu.CHANNEL_OVERWRITE;
            if(!(tango !== zulu)) { _fun00056_ip = 2734; continue _fun00055 }
 2675:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.uV83ys;
            zulu = tango.bind(report)(zulu);
            _fun00056_ip = 2791; continue _fun00055;
 2734:
            options = _closure1_slot0;
            verify = _closure1_slot3;
            tango = 17;
            report = verify[tango];
            golf = undefined;
            report = options.bind(golf)(report);
            oscar = report.intl;
            report = oscar.string;
            tango = verify[tango];
            tango = options.bind(golf)(tango);
            tango = tango.t;
            tango = tango.W/A4Qk;
            zulu = report.bind(oscar)(tango);
 2791:
            return zulu;
 2793:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.fZgLpK;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2852:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.bbuXIi;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2911:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.HarVuL;
            zulu = tango.bind(report)(zulu);
            return zulu;
 2970:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu./ADKmJ;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3029:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.C8d+oK;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3088:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.t+Ct5+;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3147:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.dilOFx;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3206:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.0lTLTk;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3265:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.rQJBEx;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3324:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.QZRcfH;
            zulu = tango.bind(report)(zulu);
            return zulu;
 3383:
            tango = mike.targetType;
            zulu = _closure1_slot17;
            zulu = zulu.CHANNEL;
            if(!(tango !== zulu)) { _fun00056_ip = 3482; continue _fun00055 }
 3403:
            zulu = mike.targetType;
            mike = _closure1_slot17;
            mike = mike.CHANNEL_OVERWRITE;
            if(!(zulu !== mike)) { _fun00056_ip = 3482; continue _fun00055 }
 3423:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.9qLtWl;
            mike = zulu.bind(tango)(mike);
            _fun00056_ip = 3539; continue _fun00055;
 3482:
            golf = _closure1_slot0;
            options = _closure1_slot3;
            zulu = 17;
            tango = options[zulu];
            oscar = undefined;
            tango = golf.bind(oscar)(tango);
            report = tango.intl;
            tango = report.string;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.t;
            zulu = zulu.nAw15O;
            mike = tango.bind(report)(zulu);
 3539:
            return mike;
 3541:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.PGvZqa;
            mike = zulu.bind(tango)(mike);
            return mike;
 3600:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.oTBA7O;
            mike = zulu.bind(tango)(mike);
            return mike;
 3659:
            oscar = _closure1_slot0;
            golf = _closure1_slot3;
            mike = 17;
            zulu = golf[mike];
            report = undefined;
            zulu = oscar.bind(report)(zulu);
            tango = zulu.intl;
            zulu = tango.string;
            mike = golf[mike];
            mike = oscar.bind(report)(mike);
            mike = mike.t;
            mike = mike.pBNv6u;
            mike = zulu.bind(tango)(mike);
            return mike;
 3718:
            report = _closure1_slot0;
            oscar = _closure1_slot3;
            entity = 17;
            mike = oscar[entity];
            tango = undefined;
            mike = report.bind(tango)(mike);
            zulu = mike.intl;
            mike = zulu.string;
            entity = oscar[entity];
            entity = report.bind(tango)(entity);
            entity = entity.t;
            entity = entity.zJrgTE;
            entity = mike.bind(zulu)(entity);
            return entity;
        }
    };
    zulu['getStringForPermission'] = report;
    tango = function(argFoo, argBar) { // Original name: transformLogs
        tango = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zulu = tango.forEach;
        mike = function(argFoo) {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                verify = argFoo;
                var _closure3_slot0 = verify;
                tango = _closure2_slot0;
                zulu = function(argFoo, argBar) { // Original name: transformTarget
                    _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                        golf = argFoo;
                        entity = argBar;
                        var _closure4_slot0 = golf;
                        var _closure4_slot1 = entity;
                        report = golf.targetType;
                        tango = _closure1_slot17;
                        tango = tango.GUILD;
                        if(!(tango !== report)) { _fun00060_ip = 1225; continue _fun00059 }
 42:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_HOME;
                        if(!(tango !== report)) { _fun00060_ip = 1225; continue _fun00059 }
 59:
                        tango = _closure1_slot17;
                        tango = tango.CHANNEL;
                        if(!(tango !== report)) { _fun00060_ip = 1186; continue _fun00059 }
 76:
                        tango = _closure1_slot17;
                        tango = tango.CHANNEL_OVERWRITE;
                        if(!(tango !== report)) { _fun00060_ip = 1186; continue _fun00059 }
 93:
                        tango = _closure1_slot17;
                        tango = tango.USER;
                        if(!(tango !== report)) { _fun00060_ip = 1147; continue _fun00059 }
 110:
                        tango = _closure1_slot17;
                        tango = tango.ROLE;
                        if(!(tango !== report)) { _fun00060_ip = 1108; continue _fun00059 }
 127:
                        tango = _closure1_slot17;
                        tango = tango.ONBOARDING_PROMPT;
                        if(!(tango !== report)) { _fun00060_ip = 998; continue _fun00059 }
 144:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_ONBOARDING;
                        if(!(tango !== report)) { _fun00060_ip = 996; continue _fun00059 }
 161:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_MEMBER_VERIFICATION;
                        if(!(tango !== report)) { _fun00060_ip = 996; continue _fun00059 }
 178:
                        tango = _closure1_slot17;
                        tango = tango.INVITE;
                        if(!(tango !== report)) { _fun00060_ip = 967; continue _fun00059 }
 195:
                        tango = _closure1_slot17;
                        tango = tango.INTEGRATION;
                        if(!(tango !== report)) { _fun00060_ip = 928; continue _fun00059 }
 212:
                        tango = _closure1_slot17;
                        tango = tango.WEBHOOK;
                        if(!(tango !== report)) { _fun00060_ip = 889; continue _fun00059 }
 229:
                        tango = _closure1_slot17;
                        tango = tango.EMOJI;
                        if(!(tango !== report)) { _fun00060_ip = 850; continue _fun00059 }
 246:
                        tango = _closure1_slot17;
                        tango = tango.STICKER;
                        if(!(tango !== report)) { _fun00060_ip = 811; continue _fun00059 }
 263:
                        tango = _closure1_slot17;
                        tango = tango.STAGE_INSTANCE;
                        if(!(tango !== report)) { _fun00060_ip = 772; continue _fun00059 }
 280:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_SCHEDULED_EVENT;
                        if(!(tango !== report)) { _fun00060_ip = 733; continue _fun00059 }
 297:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_SCHEDULED_EVENT_EXCEPTION;
                        if(!(tango !== report)) { _fun00060_ip = 733; continue _fun00059 }
 314:
                        tango = _closure1_slot17;
                        tango = tango.THREAD;
                        if(!(tango !== report)) { _fun00060_ip = 694; continue _fun00059 }
 331:
                        tango = _closure1_slot17;
                        tango = tango.APPLICATION_COMMAND;
                        if(!(tango !== report)) { _fun00060_ip = 586; continue _fun00059 }
 348:
                        tango = _closure1_slot17;
                        tango = tango.AUTO_MODERATION_RULE;
                        if(!(tango !== report)) { _fun00060_ip = 547; continue _fun00059 }
 365:
                        tango = _closure1_slot17;
                        tango = tango.GUILD_SOUNDBOARD;
                        if(!(tango !== report)) { _fun00060_ip = 518; continue _fun00059 }
 382:
                        tango = _closure1_slot17;
                        tango = tango.HOME_SETTINGS;
                        if(!(tango !== report)) { _fun00060_ip = 474; continue _fun00059 }
 396:
                        tango = _closure1_slot17;
                        tango = tango.VOICE_CHANNEL_STATUS;
                        if(!(tango !== report)) { _fun00060_ip = 435; continue _fun00059 }
 410:
                        oscar = _closure1_slot34;
                        report = oscar.warn;
                        tango = 'Unknown targetType for log';
                        tango = report.bind(oscar)(tango, golf);
                        tango = null;
                        return tango;
 435:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.STATUS;
                        output = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot10;
                            mike = zulu.getChannel;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            mike = 23;
                            zulu = zulu[mike];
                            mike = undefined;
                            oscar = tango.bind(mike)(zulu);
                            report = oscar.computeChannelName;
                            verify = _closure1_slot13;
                            options = _closure1_slot12;
                            offset = argFoo;
                            golf = true;
                            yankee = oscar;
                            entity = yankee[report](offset, verify, options, golf, oscar);
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 474:
                        offset = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.GUILD_ID;
                        romeo = entity.id;
                        output = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot6;
                            mike = zulu.getSettings;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function() {
                            report = _closure1_slot0;
                            oscar = _closure1_slot3;
                            entity = 17;
                            mike = oscar[entity];
                            tango = undefined;
                            mike = report.bind(tango)(mike);
                            zulu = mike.intl;
                            mike = zulu.string;
                            entity = oscar[entity];
                            entity = report.bind(tango)(entity);
                            entity = entity.t;
                            entity = entity.VbpLyc;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        sizing = golf;
                        tango = output[offset](sizing, kilo, backup, foxtrot, romeo, yankee);
                        return tango;
 518:
                        options = _closure1_slot45;
                        tango = _closure1_slot16;
                        oscar = tango.NAME;
                        report = _closure1_slot24;
                        tango = undefined;
                        tango = options.bind(tango)(golf, oscar, report);
                        return tango;
 547:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.automodRules;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 586:
                        report = golf.targetId;
                        tango = golf.options;
                        tango = tango.application_id;
                        if(!(report !== tango)) { _fun00060_ip = 646; continue _fun00059 }
 607:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.applicationCommands;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                                entity = argFoo;
                                zulu = entity.name_localized;
                                mike = null;
                                if(!(mike != zulu)) { _fun00062_ip = 29; continue _fun00061 }
 15:
                                zulu = entity.name_localized;
                                mike = '';
                                if(!(mike === zulu)) { _fun00062_ip = 36; continue _fun00061 }
 29:
                                tango = entity.name;
                                _fun00062_ip = 42; continue _fun00061;
 36:
                                tango = entity.name_localized;
 42:
                                zulu = entity.type;
                                report = _closure1_slot0;
                                mike = _closure1_slot3;
                                entity = 24;
                                mike = mike[entity];
                                entity = undefined;
                                entity = report.bind(entity)(mike);
                                entity = entity.ApplicationCommandType;
                                mike = entity.CHAT;
                                entity = tango;
                                if(!(zulu === mike)) { _fun00062_ip = 115; continue _fun00061 }
 91:
                                mike = global;
                                mike = mike.HermesInternal;
                                zulu = mike.concat;
                                mike = '/\u2060';
                                entity = zulu.bind(mike)(tango);
 115:
                                return entity;
                            }
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 646:
                        tango = _closure1_slot14;
                        oscar = tango.integrations;
                        report = oscar.find;
                        tango = function(argFoo) {
                            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                                entity = argFoo;
                                entity = entity.application;
                                mike = null;
                                zulu = mike == entity;
                                mike = undefined;
                                if(zulu) { _fun00064_ip = 24; continue _fun00063 }
 19:
                                mike = entity.id;
 24:
                                entity = _closure4_slot0;
                                entity = entity.targetId;
                                entity = mike === entity;
                                return entity;
                            }
                        };
                        report = report.bind(oscar)(tango);
                        tango = null;
                        if(!(tango == report)) { _fun00060_ip = 687; continue _fun00059 }
 679:
                        tango = golf.targetId;
                        _fun00060_ip = 692; continue _fun00059;
 687:
                        tango = report.name;
 692:
                        return tango;
 694:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.threads;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 733:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.guildScheduledEvents;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 772:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.TOPIC;
                        output = undefined;
                        backup = function(argFoo) {
                            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                                entity = argFoo;
                                var _closure5_slot0 = entity;
                                entity = global;
                                tango = entity.Object;
                                zulu = tango.values;
                                oscar = _closure1_slot7;
                                report = oscar.getStageInstancesByGuild;
                                entity = _closure4_slot1;
                                entity = entity.id;
                                entity = report.bind(oscar)(entity);
                                tango = zulu.bind(tango)(entity);
                                entity = null;
                                zulu = entity == tango;
                                entity = undefined;
                                if(zulu) { _fun00066_ip = 85; continue _fun00065 }
 68:
                                zulu = tango.find;
                                mike = function(argFoo) {
                                    entity = argFoo;
                                    mike = entity.id;
                                    entity = _closure5_slot0;
                                    entity = mike === entity;
                                    return entity;
                                };
                                entity = zulu.bind(tango)(mike);
 85:
                                return entity;
                            }
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.topic;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 811:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot8;
                            mike = zulu.getStickerById;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 850:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            tango = _closure1_slot4;
                            zulu = tango.getGuildEmoji;
                            mike = _closure4_slot1;
                            mike = mike.id;
                            zulu = zulu.bind(tango)(mike);
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 889:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.webhooks;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 928:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.TYPE;
                        output = undefined;
                        backup = function(argFoo) {
                            mike = argFoo;
                            var _closure5_slot0 = mike;
                            mike = _closure1_slot14;
                            zulu = mike.integrations;
                            mike = zulu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                mike = entity.id;
                                entity = _closure5_slot0;
                                entity = mike === entity;
                                return entity;
                            };
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 967:
                        options = _closure1_slot45;
                        tango = _closure1_slot16;
                        oscar = tango.CODE;
                        report = _closure1_slot24;
                        tango = undefined;
                        tango = options.bind(tango)(golf, oscar, report);
                        return tango;
 996:
                        return entity;
 998:
                        options = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.ID;
                        offset = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot5;
                            mike = zulu.getOnboardingPrompt;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.title;
                            return entity;
                        };
                        output = undefined;
                        sizing = golf;
                        tango = output[options](sizing, kilo, backup, foxtrot, romeo);
                        report = null;
                        if(!(report != tango)) { _fun00060_ip = 1051; continue _fun00059 }
 1043:
                        report = '';
                        if(!(report === tango)) { _fun00060_ip = 1106; continue _fun00059 }
 1051:
                        verify = _closure1_slot0;
                        yankee = _closure1_slot3;
                        report = 17;
                        oscar = yankee[report];
                        oscar = verify.bind(offset)(oscar);
                        options = oscar.intl;
                        oscar = options.string;
                        report = yankee[report];
                        report = verify.bind(offset)(report);
                        report = report.t;
                        report = report.ZNQyiY;
                        tango = oscar.bind(options)(report);
 1106:
                        return tango;
 1108:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            tango = _closure1_slot11;
                            zulu = tango.getRole;
                            entity = _closure4_slot1;
                            mike = entity.id;
                            entity = argFoo;
                            entity = zulu.bind(tango)(mike, entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 1147:
                        verify = _closure1_slot45;
                        tango = _closure1_slot16;
                        kilo = tango.NICK;
                        output = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot13;
                            mike = zulu.getUser;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            return entity;
                        };
                        sizing = golf;
                        tango = output[verify](sizing, kilo, backup, foxtrot, romeo);
                        return tango;
 1186:
                        oscar = _closure1_slot45;
                        zulu = _closure1_slot16;
                        kilo = zulu.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            zulu = _closure1_slot10;
                            mike = zulu.getChannel;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            tango = _closure1_slot0;
                            zulu = _closure1_slot3;
                            mike = 23;
                            zulu = zulu[mike];
                            mike = undefined;
                            oscar = tango.bind(mike)(zulu);
                            report = oscar.computeChannelName;
                            verify = _closure1_slot13;
                            options = _closure1_slot12;
                            offset = argFoo;
                            golf = true;
                            yankee = oscar;
                            entity = yankee[report](offset, verify, options, golf, oscar);
                            return entity;
                        };
                        sizing = golf;
                        mike = output[oscar](sizing, kilo, backup, foxtrot, romeo);
                        return mike;
 1225:
                        return entity;
                    }
                };
                entity = undefined;
                options = zulu.bind(entity)(verify, tango);
                golf = _closure1_slot13;
                oscar = golf.getUser;
                tango = verify.userId;
                golf = oscar.bind(golf)(tango);
                oscar = null;
                if(!(oscar == options)) { _fun00058_ip = 139; continue _fun00057 }
 60:
                zulu = _closure1_slot15;
                tango = zulu.MEMBER_PRUNE;
                offset = new Array(5);
                offset[0] = tango;
                tango = zulu.MEMBER_DISCONNECT;
                offset[1] = tango;
                tango = zulu.MEMBER_MOVE;
                offset[2] = tango;
                tango = zulu.CREATOR_MONETIZATION_REQUEST_CREATED;
                offset[3] = tango;
                zulu = zulu.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                offset[4] = zulu;
                tango = offset.includes;
                zulu = verify.action;
                zulu = tango.bind(offset)(zulu);
                if(!zulu) { _fun00058_ip = 288; continue _fun00057 }
 139:
                tango = verify.set;
                zulu = 'user';
                golf = tango.bind(verify)(zulu, golf);
                _closure3_slot0 = golf;
                tango = golf.set;
                zulu = 'target';
                options = tango.bind(golf)(zulu, options);
                _closure3_slot0 = options;
                golf = options.set;
                zulu = function(argFoo) { // Original name: transformOptions
                    _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                        report = argFoo;
                        var _closure4_slot0 = report;
                        entity = report.options;
                        mike = null;
                        if(!(mike == entity)) { _fun00068_ip = 27; continue _fun00067 }
 20:
                        entity = report.options;
                        return entity;
 27:
                        entity = {};
                        kilo = report.options;
                        sizing = entity;
                        zulu = copyDataProperties(sizing, kilo);
                        zulu = report.options;
                        golf = zulu.type;
                        oscar = _closure1_slot27;
                        oscar = oscar.USER;
                        if(!(oscar !== golf)) { _fun00068_ip = 119; continue _fun00067 }
 68:
                        oscar = _closure1_slot27;
                        oscar = oscar.ROLE;
                        if(!(oscar === golf)) { _fun00068_ip = 162; continue _fun00067 }
 82:
                        verify = _closure1_slot46;
                        oscar = report.options;
                        options = oscar.role_name;
                        golf = _closure1_slot24;
                        oscar = undefined;
                        oscar = verify.bind(oscar)(options, golf);
                        entity['subtarget'] = oscar;
                        _fun00068_ip = 162; continue _fun00067;
 119:
                        offset = _closure1_slot46;
                        oscar = report.options;
                        verify = oscar.id;
                        options = undefined;
                        golf = function(argFoo) {
                            zulu = _closure1_slot13;
                            mike = zulu.getUser;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        oscar = function(argFoo) {
                            entity = argFoo;
                            entity = entity.tag;
                            return entity;
                        };
                        oscar = offset.bind(options)(verify, golf, oscar);
                        entity['subtarget'] = oscar;
 162:
                        oscar = report.options;
                        oscar = oscar.channel_id;
                        if(!(mike != oscar)) { _fun00068_ip = 223; continue _fun00067 }
 176:
                        yankee = _closure1_slot45;
                        oscar = report.options;
                        romeo = oscar.channel_id;
                        output = undefined;
                        kilo = '';
                        backup = function(argFoo) {
                            zulu = _closure1_slot10;
                            mike = zulu.getChannel;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        foxtrot = function(argFoo) {
                            entity = argFoo;
                            return entity;
                        };
                        sizing = report;
                        oscar = output[yankee](sizing, kilo, backup, foxtrot, romeo, yankee);
                        entity['channel'] = oscar;
 223:
                        oscar = report.options;
                        oscar = oscar.members_removed;
                        oscar = mike != oscar;
                        if(!oscar) { _fun00068_ip = 258; continue _fun00067 }
 241:
                        golf = report.options;
                        options = golf.members_removed;
                        golf = 0;
                        oscar = golf !== options;
 258:
                        if(!oscar) { _fun00068_ip = 278; continue _fun00067 }
 261:
                        oscar = report.options;
                        oscar = oscar.members_removed;
                        entity['count'] = oscar;
 278:
                        report = report.options;
                        report = report.event_exception_id;
                        if(!(mike != report)) { _fun00068_ip = 474; continue _fun00067 }
 296:
                        report = _closure1_slot14;
                        golf = report.guildScheduledEvents;
                        oscar = golf.find;
                        report = function(argFoo) {
                            entity = argFoo;
                            mike = entity.id;
                            entity = _closure4_slot0;
                            entity = entity.targetId;
                            entity = mike === entity;
                            return entity;
                        };
                        report = oscar.bind(golf)(report);
                        golf = mike == report;
                        oscar = undefined;
                        offset = undefined;
                        if(golf) { _fun00068_ip = 357; continue _fun00067 }
 334:
                        golf = report.guild_scheduled_event_exceptions;
                        report = golf.find;
                        tango = function(argFoo) {
                            entity = argFoo;
                            mike = entity.event_exception_id;
                            entity = _closure4_slot0;
                            entity = entity.options;
                            entity = entity.event_exception_id;
                            entity = mike === entity;
                            return entity;
                        };
                        offset = report.bind(golf)(tango);
 357:
                        report = _closure1_slot0;
                        verify = _closure1_slot3;
                        tango = 29;
                        tango = verify[tango];
                        report = report.bind(oscar)(tango);
                        tango = report.dateFormat;
                        options = _closure1_slot1;
                        zulu = 30;
                        zulu = verify[zulu];
                        zulu = options.bind(oscar)(zulu);
                        golf = 19;
                        golf = verify[golf];
                        options = options.bind(oscar)(golf);
                        golf = options.extractTimestamp;
                        yankee = mike == offset;
                        verify = undefined;
                        if(yankee) { _fun00068_ip = 432; continue _fun00067 }
 426:
                        verify = offset.event_exception_id;
 432:
                        offset = mike != verify;
                        mike = '0';
                        if(!offset) { _fun00068_ip = 448; continue _fun00067 }
 445:
                        mike = verify;
 448:
                        mike = golf.bind(options)(mike);
                        zulu = zulu.bind(oscar)(mike);
                        mike = 'LL';
                        mike = tango.bind(report)(zulu, mike);
                        entity['subtarget'] = mike;
 474:
                        return entity;
                    }
                };
                tango = zulu.bind(entity)(options);
                zulu = 'options';
                options = golf.bind(options)(zulu, tango);
                _closure3_slot0 = options;
                zulu = options.changes;
                tango = options;
                if(!(oscar != zulu)) { _fun00058_ip = 274; continue _fun00057 }
 221:
                golf = new Array(0);
                var _closure3_slot1 = golf;
                verify = options.changes;
                oscar = verify.forEach;
                zulu = function(argFoo) {
                    _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                        golf = _closure3_slot0;
                        oscar = _closure2_slot0;
                        report = function(argFoo, argBar, argBaz) { // Original name: transformChange
                            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                                entity = argFoo;
                                zulu = argBar;
                                report = argBaz;
                                var _closure5_slot0 = report;
                                golf = zulu.action;
                                oscar = _closure1_slot15;
                                oscar = oscar.APPLICATION_COMMAND_PERMISSION_UPDATE;
                                if(!(golf !== oscar)) { _fun00072_ip = 1888; continue _fun00071 }
 40:
                                golf = entity.key;
                                oscar = _closure1_slot16;
                                oscar = oscar.OWNER_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1867; continue _fun00071 }
 62:
                                oscar = _closure1_slot16;
                                oscar = oscar.CHANNEL_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1838; continue _fun00071 }
 79:
                                oscar = _closure1_slot16;
                                oscar = oscar.AFK_CHANNEL_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1838; continue _fun00071 }
 96:
                                oscar = _closure1_slot16;
                                oscar = oscar.SYSTEM_CHANNEL_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1838; continue _fun00071 }
 113:
                                oscar = _closure1_slot16;
                                oscar = oscar.RULES_CHANNEL_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1838; continue _fun00071 }
 130:
                                oscar = _closure1_slot16;
                                oscar = oscar.PUBLIC_UPDATES_CHANNEL_ID;
                                if(!(oscar !== golf)) { _fun00072_ip = 1838; continue _fun00071 }
 147:
                                oscar = _closure1_slot16;
                                oscar = oscar.AFK_TIMEOUT;
                                if(!(oscar !== golf)) { _fun00072_ip = 1817; continue _fun00071 }
 164:
                                oscar = _closure1_slot16;
                                oscar = oscar.BITRATE;
                                if(!(oscar !== golf)) { _fun00072_ip = 1796; continue _fun00071 }
 181:
                                oscar = _closure1_slot16;
                                oscar = oscar.COLOR;
                                if(!(oscar !== golf)) { _fun00072_ip = 1775; continue _fun00071 }
 198:
                                oscar = _closure1_slot16;
                                oscar = oscar.THEME_COLORS;
                                if(!(oscar !== golf)) { _fun00072_ip = 1754; continue _fun00071 }
 215:
                                oscar = _closure1_slot16;
                                oscar = oscar.MAX_AGE;
                                if(!(oscar !== golf)) { _fun00072_ip = 1733; continue _fun00071 }
 232:
                                oscar = _closure1_slot16;
                                oscar = oscar.PERMISSIONS;
                                if(!(oscar !== golf)) { _fun00072_ip = 1573; continue _fun00071 }
 249:
                                oscar = _closure1_slot16;
                                oscar = oscar.PERMISSIONS_GRANTED;
                                if(!(oscar !== golf)) { _fun00072_ip = 1417; continue _fun00071 }
 266:
                                oscar = _closure1_slot16;
                                oscar = oscar.PERMISSIONS_DENIED;
                                if(!(oscar !== golf)) { _fun00072_ip = 1417; continue _fun00071 }
 283:
                                oscar = _closure1_slot16;
                                oscar = oscar.FLAGS;
                                if(!(oscar !== golf)) { _fun00072_ip = 1058; continue _fun00071 }
 300:
                                oscar = _closure1_slot16;
                                oscar = oscar.PREFERRED_LOCALE;
                                if(!(oscar !== golf)) { _fun00072_ip = 1037; continue _fun00071 }
 317:
                                oscar = _closure1_slot16;
                                oscar = oscar.VIDEO_QUALITY_MODE;
                                if(!(oscar !== golf)) { _fun00072_ip = 1016; continue _fun00071 }
 334:
                                oscar = _closure1_slot16;
                                oscar = oscar.SYSTEM_CHANNEL_FLAGS;
                                if(!(oscar !== golf)) { _fun00072_ip = 1000; continue _fun00071 }
 351:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_ACTIONS;
                                if(!(oscar !== golf)) { _fun00072_ip = 948; continue _fun00071 }
 368:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_EVENT_TYPE;
                                if(!(oscar !== golf)) { _fun00072_ip = 885; continue _fun00071 }
 385:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_TRIGGER_TYPE;
                                if(!(oscar !== golf)) { _fun00072_ip = 822; continue _fun00071 }
 402:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_TRIGGER_METADATA;
                                if(!(oscar !== golf)) { _fun00072_ip = 778; continue _fun00071 }
 419:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_ADD_KEYWORDS;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 436:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_REMOVE_KEYWORDS;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 453:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 470:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 487:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_ADD_ALLOW_LIST;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 504:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                                if(!(oscar !== golf)) { _fun00072_ip = 734; continue _fun00071 }
 521:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_EXEMPT_CHANNELS;
                                if(!(oscar !== golf)) { _fun00072_ip = 682; continue _fun00071 }
 538:
                                oscar = _closure1_slot16;
                                oscar = oscar.AUTO_MODERATION_EXEMPT_ROLES;
                                if(!(oscar !== golf)) { _fun00072_ip = 630; continue _fun00071 }
 552:
                                oscar = _closure1_slot16;
                                oscar = oscar.AVAILABLE_TAGS;
                                if(!(oscar !== golf)) { _fun00072_ip = 617; continue _fun00071 }
 566:
                                oscar = _closure1_slot16;
                                oscar = oscar.SCHEDULED_START_TIME;
                                if(!(oscar !== golf)) { _fun00072_ip = 596; continue _fun00071 }
 580:
                                oscar = _closure1_slot16;
                                oscar = oscar.SCHEDULED_END_TIME;
                                if(!(oscar !== golf)) { _fun00072_ip = 596; continue _fun00071 }
 594:
                                return entity;
 596:
                                options = _closure1_slot44;
                                golf = undefined;
                                oscar = function(argFoo) {
                                    zulu = _closure1_slot0;
                                    oscar = _closure1_slot3;
                                    mike = 29;
                                    mike = oscar[mike];
                                    report = undefined;
                                    tango = zulu.bind(report)(mike);
                                    zulu = tango.dateFormat;
                                    mike = _closure1_slot1;
                                    entity = 30;
                                    entity = oscar[entity];
                                    mike = mike.bind(report)(entity);
                                    entity = global;
                                    golf = entity.Date;
                                    entity = golf.prototype;
                                    oscar = Object.create(entity, {constructor: {value: golf}});
                                    verify = argFoo;
                                    offset = oscar;
                                    entity = new offset[golf](verify, options);
                                    entity = entity instanceof Object ? entity : oscar;
                                    mike = mike.bind(report)(entity);
                                    entity = 'LLLL';
                                    entity = zulu.bind(tango)(mike, entity);
                                    return entity;
                                };
                                oscar = options.bind(golf)(entity, oscar);
                                return oscar;
 617:
                                golf = _closure1_slot43;
                                oscar = undefined;
                                oscar = golf.bind(oscar)(entity);
                                return oscar;
 630:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 680; continue _fun00071 }
 653:
                                offset = _closure1_slot44;
                                verify = undefined;
                                options = function(argFoo) {
                                    tango = argFoo;
                                    zulu = tango.map;
                                    mike = function(argFoo) {
                                        tango = _closure1_slot11;
                                        zulu = tango.getRole;
                                        entity = _closure5_slot0;
                                        mike = entity.id;
                                        entity = argFoo;
                                        entity = zulu.bind(tango)(mike, entity);
                                        return entity;
                                    };
                                    tango = zulu.bind(tango)(mike);
                                    zulu = tango.filter;
                                    mike = function(argFoo) {
                                        mike = null;
                                        entity = argFoo;
                                        entity = mike != entity;
                                        return entity;
                                    };
                                    zulu = zulu.bind(tango)(mike);
                                    mike = zulu.map;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.name;
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                golf = function(argFoo) {
                                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                                        tango = argFoo;
                                        entity = null;
                                        if(!(entity != tango)) { _fun00074_ip = 20; continue _fun00073 }
 9:
                                        mike = tango.length;
                                        entity = 0;
                                        if(!(!(mike > entity))) { _fun00074_ip = 82; continue _fun00073 }
 20:
                                        oscar = _closure1_slot0;
                                        golf = _closure1_slot3;
                                        entity = 17;
                                        mike = golf[entity];
                                        report = undefined;
                                        mike = oscar.bind(report)(mike);
                                        zulu = mike.intl;
                                        mike = zulu.string;
                                        entity = golf[entity];
                                        entity = oscar.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.K/EdV1;
                                        entity = mike.bind(zulu)(entity);
                                        _fun00074_ip = 98; continue _fun00073;
 82:
                                        zulu = tango.join;
                                        mike = ', ';
                                        entity = zulu.bind(tango)(mike);
 98:
                                        return entity;
                                    }
                                };
                                oscar = offset.bind(verify)(entity, options, golf);
 680:
                                return oscar;
 682:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 732; continue _fun00071 }
 705:
                                offset = _closure1_slot44;
                                verify = undefined;
                                options = function(argFoo) {
                                    tango = argFoo;
                                    zulu = tango.map;
                                    mike = _closure1_slot10;
                                    mike = mike.getChannel;
                                    tango = zulu.bind(tango)(mike);
                                    zulu = tango.filter;
                                    mike = function(argFoo) {
                                        mike = null;
                                        entity = argFoo;
                                        entity = mike != entity;
                                        return entity;
                                    };
                                    zulu = zulu.bind(tango)(mike);
                                    mike = zulu.map;
                                    entity = function(argFoo) {
                                        tango = _closure1_slot0;
                                        zulu = _closure1_slot3;
                                        mike = 23;
                                        zulu = zulu[mike];
                                        mike = undefined;
                                        oscar = tango.bind(mike)(zulu);
                                        report = oscar.computeChannelName;
                                        verify = _closure1_slot13;
                                        options = _closure1_slot12;
                                        offset = argFoo;
                                        golf = true;
                                        yankee = oscar;
                                        entity = yankee[report](offset, verify, options, golf, oscar);
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                golf = function(argFoo) {
                                    _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                                        tango = argFoo;
                                        entity = null;
                                        if(!(entity != tango)) { _fun00076_ip = 20; continue _fun00075 }
 9:
                                        mike = tango.length;
                                        entity = 0;
                                        if(!(!(mike > entity))) { _fun00076_ip = 82; continue _fun00075 }
 20:
                                        oscar = _closure1_slot0;
                                        golf = _closure1_slot3;
                                        entity = 17;
                                        mike = golf[entity];
                                        report = undefined;
                                        mike = oscar.bind(report)(mike);
                                        zulu = mike.intl;
                                        mike = zulu.string;
                                        entity = golf[entity];
                                        entity = oscar.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.K/EdV1;
                                        entity = mike.bind(zulu)(entity);
                                        _fun00076_ip = 98; continue _fun00075;
 82:
                                        zulu = tango.join;
                                        mike = ', ';
                                        entity = zulu.bind(tango)(mike);
 98:
                                        return entity;
                                    }
                                };
                                oscar = offset.bind(verify)(entity, options, golf);
 732:
                                return oscar;
 734:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 776; continue _fun00071 }
 757:
                                verify = _closure1_slot44;
                                options = undefined;
                                golf = function(argFoo) {
                                    _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                                        tango = argFoo;
                                        entity = null;
                                        if(!(entity != tango)) { _fun00078_ip = 30; continue _fun00077 }
 9:
                                        entity = global;
                                        mike = entity.Array;
                                        entity = mike.isArray;
                                        entity = entity.bind(mike)(tango);
                                        if(entity) { _fun00078_ip = 51; continue _fun00077 }
 30:
                                        entity = global;
                                        mike = entity.JSON;
                                        entity = mike.stringify;
                                        entity = entity.bind(mike)(tango);
                                        _fun00078_ip = 86; continue _fun00077;
 51:
                                        zulu = tango.map;
                                        mike = function(argFoo) {
                                            entity = global;
                                            entity = entity.HermesInternal;
                                            zulu = entity.concat;
                                            mike = "'";
                                            entity = argFoo;
                                            entity = zulu.bind(mike)(entity, mike);
                                            return entity;
                                        };
                                        tango = zulu.bind(tango)(mike);
                                        zulu = tango.join;
                                        mike = ', ';
                                        entity = zulu.bind(tango)(mike);
 86:
                                        return entity;
                                    }
                                };
                                oscar = verify.bind(options)(entity, golf);
 776:
                                return oscar;
 778:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 820; continue _fun00071 }
 801:
                                verify = _closure1_slot44;
                                options = undefined;
                                golf = function(argFoo) {
                                    _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                                        golf = argFoo;
                                        zulu = null;
                                        entity = golf;
                                        if(!(zulu != golf)) { _fun00080_ip = 203; continue _fun00079 }
 15:
                                        tango = 'object';
                                        mike = typeof golf;
                                        entity = golf;
                                        if(!(tango === mike)) { _fun00080_ip = 203; continue _fun00079 }
 32:
                                        mike = golf.keyword_filter;
                                        if(!(zulu != mike)) { _fun00080_ip = 69; continue _fun00079 }
 42:
                                        mike = global;
                                        tango = mike.Array;
                                        zulu = tango.isArray;
                                        mike = golf.keyword_filter;
                                        mike = zulu.bind(tango)(mike);
                                        if(mike) { _fun00080_ip = 90; continue _fun00079 }
 69:
                                        mike = global;
                                        zulu = mike.JSON;
                                        mike = zulu.stringify;
                                        mike = mike.bind(zulu)(golf);
                                        _fun00080_ip = 200; continue _fun00079;
 90:
                                        options = _closure1_slot0;
                                        verify = _closure1_slot3;
                                        zulu = 17;
                                        report = verify[zulu];
                                        tango = undefined;
                                        report = options.bind(tango)(report);
                                        oscar = report.intl;
                                        report = oscar.formatToMarkdownString;
                                        zulu = verify[zulu];
                                        zulu = options.bind(tango)(zulu);
                                        zulu = zulu.t;
                                        tango = zulu.y91UXV;
                                        zulu = {};
                                        verify = golf.keyword_filter;
                                        options = verify.map;
                                        golf = function(argFoo) {
                                            entity = global;
                                            entity = entity.HermesInternal;
                                            zulu = entity.concat;
                                            mike = "'";
                                            entity = argFoo;
                                            entity = zulu.bind(mike)(entity, mike);
                                            return entity;
                                        };
                                        verify = options.bind(verify)(golf);
                                        options = verify.join;
                                        golf = ', ';
                                        golf = options.bind(verify)(golf);
                                        zulu['newValue'] = golf;
                                        mike = report.bind(oscar)(tango, zulu);
 200:
                                        entity = mike;
 203:
                                        return entity;
                                    }
                                };
                                oscar = verify.bind(options)(entity, golf);
 820:
                                return oscar;
 822:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 883; continue _fun00071 }
 845:
                                verify = _closure1_slot44;
                                offset = _closure1_slot0;
                                options = _closure1_slot3;
                                golf = 28;
                                golf = options[golf];
                                options = undefined;
                                golf = offset.bind(options)(golf);
                                golf = golf.triggerTypeToName;
                                oscar = verify.bind(options)(entity, golf);
 883:
                                return oscar;
 885:
                                options = zulu.targetType;
                                oscar = _closure1_slot17;
                                golf = oscar.AUTO_MODERATION_RULE;
                                oscar = entity;
                                if(!(options === golf)) { _fun00072_ip = 946; continue _fun00071 }
 908:
                                verify = _closure1_slot44;
                                offset = _closure1_slot0;
                                options = _closure1_slot3;
                                golf = 28;
                                golf = options[golf];
                                options = undefined;
                                golf = offset.bind(options)(golf);
                                golf = golf.eventTypeToName;
                                oscar = verify.bind(options)(entity, golf);
 946:
                                return oscar;
 948:
                                golf = zulu.targetType;
                                zulu = _closure1_slot17;
                                oscar = zulu.AUTO_MODERATION_RULE;
                                zulu = entity;
                                if(!(golf === oscar)) { _fun00072_ip = 998; continue _fun00071 }
 971:
                                verify = _closure1_slot44;
                                options = undefined;
                                golf = function(argFoo) {
                                    zulu = argFoo;
                                    mike = zulu.map;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.type;
                                        return entity;
                                    };
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                oscar = function(argFoo) {
                                    zulu = argFoo;
                                    mike = zulu.map;
                                    report = _closure1_slot0;
                                    tango = _closure1_slot3;
                                    entity = 28;
                                    tango = tango[entity];
                                    entity = undefined;
                                    entity = report.bind(entity)(tango);
                                    entity = entity.actionTypeToName;
                                    zulu = mike.bind(zulu)(entity);
                                    mike = zulu.join;
                                    entity = ', ';
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                zulu = verify.bind(options)(entity, golf, oscar);
 998:
                                return zulu;
 1000:
                                oscar = function(argFoo) { // Original name: transformSystemChannelFlagsChanges
                                    entity = argFoo;
                                    var _closure6_slot0 = entity;
                                    entity = {};
                                    report = _closure1_slot28;
                                    oscar = report.SUPPRESS_JOIN_NOTIFICATIONS;
                                    tango = _closure1_slot16;
                                    tango = tango.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                                    entity[oscar] = tango;
                                    oscar = report.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                                    tango = _closure1_slot16;
                                    tango = tango.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                                    entity[oscar] = tango;
                                    oscar = report.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                                    tango = _closure1_slot16;
                                    tango = tango.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                                    entity[oscar] = tango;
                                    tango = report.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                                    zulu = _closure1_slot16;
                                    zulu = zulu.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                                    entity[tango] = zulu;
                                    var _closure6_slot1 = entity;
                                    entity = new Array(0);
                                    var _closure6_slot2 = entity;
                                    zulu = global;
                                    tango = zulu.Object;
                                    zulu = tango.values;
                                    tango = zulu.bind(tango)(report);
                                    zulu = tango.forEach;
                                    mike = function(argFoo) {
                                        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                                            report = argFoo;
                                            mike = _closure6_slot0;
                                            zulu = mike.oldValue;
                                            zulu = zulu & report;
                                            tango = zulu === report;
                                            mike = mike.newValue;
                                            mike = mike & report;
                                            mike = mike === report;
                                            if(!(tango !== mike)) { _fun00082_ip = 97; continue _fun00081 }
 42:
                                            oscar = _closure1_slot9;
                                            zulu = _closure6_slot1;
                                            verify = zulu[report];
                                            zulu = oscar.prototype;
                                            zulu = Object.create(zulu, {constructor: {value: oscar}});
                                            options = !tango;
                                            golf = !mike;
                                            offset = zulu;
                                            mike = new offset[oscar](verify, options, golf, oscar);
                                            zulu = mike instanceof Object ? mike : zulu;
                                            mike = _closure6_slot2;
                                            entity = mike.push;
                                            entity = entity.bind(mike)(zulu);
 97:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    mike = zulu.bind(tango)(mike);
                                    return entity;
                                };
                                zulu = undefined;
                                zulu = oscar.bind(zulu)(entity);
                                return zulu;
 1016:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                                        entity = _closure1_slot25;
                                        zulu = entity.FULL;
                                        entity = argFoo;
                                        if(!(entity !== zulu)) { _fun00084_ip = 79; continue _fun00083 }
 20:
                                        oscar = _closure1_slot0;
                                        golf = _closure1_slot3;
                                        entity = 17;
                                        zulu = golf[entity];
                                        report = undefined;
                                        zulu = oscar.bind(report)(zulu);
                                        tango = zulu.intl;
                                        zulu = tango.string;
                                        entity = golf[entity];
                                        entity = oscar.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.jjKYpq;
                                        entity = zulu.bind(tango)(entity);
                                        _fun00084_ip = 136; continue _fun00083;
 79:
                                        oscar = _closure1_slot0;
                                        golf = _closure1_slot3;
                                        mike = 17;
                                        zulu = golf[mike];
                                        report = undefined;
                                        zulu = oscar.bind(report)(zulu);
                                        tango = zulu.intl;
                                        zulu = tango.string;
                                        mike = golf[mike];
                                        mike = oscar.bind(report)(mike);
                                        mike = mike.t;
                                        mike = mike.7jOoJC;
                                        entity = zulu.bind(tango)(mike);
 136:
                                        return entity;
                                    }
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1037:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                                        mike = argFoo;
                                        var _closure6_slot0 = mike;
                                        tango = _closure1_slot0;
                                        zulu = _closure1_slot3;
                                        mike = 17;
                                        zulu = zulu[mike];
                                        mike = undefined;
                                        zulu = tango.bind(mike)(zulu);
                                        mike = zulu.getAvailableLocales;
                                        zulu = mike.bind(zulu)();
                                        mike = zulu.find;
                                        entity = function(argFoo) {
                                            entity = argFoo;
                                            mike = entity.value;
                                            entity = _closure6_slot0;
                                            entity = mike === entity;
                                            return entity;
                                        };
                                        mike = mike.bind(zulu)(entity);
                                        entity = null;
                                        zulu = entity != mike;
                                        if(!zulu) { _fun00086_ip = 75; continue _fun00085 }
 70:
                                        entity = mike.name;
 75:
                                        return entity;
                                    }
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1058:
                                zulu = new Array(0);
                                options = entity.oldValue;
                                oscar = entity.newValue;
                                golf = 0;
                                yankee = 'number';
                                verify = typeof options;
                                offset = 0;
                                if(!(yankee === verify)) { _fun00072_ip = 1092; continue _fun00071 }
 1089:
                                offset = options;
 1092:
                                options = typeof oscar;
                                verify = 0;
                                if(!(yankee === options)) { _fun00072_ip = 1104; continue _fun00071 }
 1101:
                                verify = oscar;
 1104:
                                options = _closure1_slot2;
                                oscar = _closure1_slot3;
                                output = 22;
                                yankee = oscar[output];
                                sizing = undefined;
                                romeo = options.bind(sizing)(yankee);
                                yankee = romeo.removeFlag;
                                kilo = yankee.bind(romeo)(verify, offset);
                                oscar = oscar[output];
                                options = options.bind(sizing)(oscar);
                                oscar = options.removeFlag;
                                backup = oscar.bind(options)(offset, verify);
                                verify = new Array(0);
                                options = new Array(0);
                                romeo = _closure1_slot29;
                                for(oscar in romeo)
 1179:
                                {
 1188:
                                    echo = oscar;
                                    result = _closure1_slot29;
                                    echo = result[echo];
                                    update = _closure1_slot2;
                                    result = _closure1_slot3;
                                    result = result[output];
                                    update = update.bind(sizing)(result);
                                    result = update.hasFlag;
                                    result = result.bind(update)(kilo, echo);
                                    if(!result) { _fun00072_ip = 1241; continue _fun00071 }
 1231:
                                    result = verify.push;
                                    result = result.bind(verify)(echo);
 1241:
                                    update = _closure1_slot2;
                                    result = _closure1_slot3;
                                    result = result[output];
                                    update = update.bind(sizing)(result);
                                    result = update.hasFlag;
                                    result = result.bind(update)(backup, echo);
                                    if(!result) { _fun00072_ip = 1179; continue _fun00071 }
 1273:
                                    result = options.push;
                                    result = result.bind(options)(echo);
                                    _fun00072_ip = 1179; continue _fun00071;
                                }
 1285:
                                oscar = {};
                                oscar['added'] = verify;
                                oscar['removed'] = options;
                                romeo = oscar.added;
                                offset = oscar.removed;
                                oscar = romeo.length;
                                if(!(oscar > golf)) { _fun00072_ip = 1362; continue _fun00071 }
 1318:
                                yankee = _closure1_slot9;
                                vacuum = entity.key;
                                oscar = yankee.prototype;
                                options = Object.create(oscar, {constructor: {value: yankee}});
                                control = null;
                                sequence = options;
                                source = romeo;
                                oscar = new sequence[yankee](vacuum, control, source, update);
                                options = oscar instanceof Object ? oscar : options;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(options);
 1362:
                                oscar = offset.length;
                                if(!(oscar > golf)) { _fun00072_ip = 1415; continue _fun00071 }
 1371:
                                verify = _closure1_slot9;
                                vacuum = entity.key;
                                oscar = verify.prototype;
                                golf = Object.create(oscar, {constructor: {value: verify}});
                                source = null;
                                sequence = golf;
                                control = offset;
                                oscar = new sequence[verify](vacuum, control, source, update);
                                golf = oscar instanceof Object ? oscar : golf;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(golf);
 1415:
                                return zulu;
 1417:
                                zulu = new Array(0);
                                verify = _closure1_slot41;
                                options = entity.oldValue;
                                golf = entity.newValue;
                                oscar = undefined;
                                oscar = verify.bind(oscar)(options, golf);
                                romeo = oscar.added;
                                verify = oscar.removed;
                                oscar = romeo.length;
                                golf = 0;
                                if(!(oscar > golf)) { _fun00072_ip = 1512; continue _fun00071 }
 1468:
                                yankee = _closure1_slot9;
                                vacuum = entity.key;
                                oscar = yankee.prototype;
                                options = Object.create(oscar, {constructor: {value: yankee}});
                                control = null;
                                sequence = options;
                                source = romeo;
                                oscar = new sequence[yankee](vacuum, control, source, update);
                                options = oscar instanceof Object ? oscar : options;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(options);
 1512:
                                oscar = verify.length;
                                if(!(oscar > golf)) { _fun00072_ip = 1571; continue _fun00071 }
 1521:
                                options = _closure1_slot9;
                                oscar = _closure1_slot16;
                                vacuum = oscar.PERMISSIONS_RESET;
                                golf = options.prototype;
                                golf = Object.create(golf, {constructor: {value: options}});
                                sequence = golf;
                                control = verify;
                                source = verify;
                                oscar = new sequence[options](vacuum, control, source, update);
                                golf = oscar instanceof Object ? oscar : golf;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(golf);
 1571:
                                return zulu;
 1573:
                                zulu = new Array(0);
                                verify = _closure1_slot41;
                                options = entity.oldValue;
                                golf = entity.newValue;
                                oscar = undefined;
                                oscar = verify.bind(oscar)(options, golf);
                                romeo = oscar.added;
                                offset = oscar.removed;
                                oscar = romeo.length;
                                golf = 0;
                                if(!(oscar > golf)) { _fun00072_ip = 1673; continue _fun00071 }
 1624:
                                yankee = _closure1_slot9;
                                oscar = _closure1_slot16;
                                vacuum = oscar.PERMISSIONS_GRANTED;
                                oscar = yankee.prototype;
                                options = Object.create(oscar, {constructor: {value: yankee}});
                                control = null;
                                sequence = options;
                                source = romeo;
                                oscar = new sequence[yankee](vacuum, control, source, update);
                                options = oscar instanceof Object ? oscar : options;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(options);
 1673:
                                oscar = offset.length;
                                if(!(oscar > golf)) { _fun00072_ip = 1731; continue _fun00071 }
 1682:
                                verify = _closure1_slot9;
                                oscar = _closure1_slot16;
                                vacuum = oscar.PERMISSIONS_DENIED;
                                oscar = verify.prototype;
                                golf = Object.create(oscar, {constructor: {value: verify}});
                                control = null;
                                sequence = golf;
                                source = offset;
                                oscar = new sequence[verify](vacuum, control, source, update);
                                golf = oscar instanceof Object ? oscar : golf;
                                oscar = zulu.push;
                                oscar = oscar.bind(zulu)(golf);
 1731:
                                return zulu;
 1733:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                                        entity = argFoo;
                                        var _closure6_slot0 = entity;
                                        report = _closure1_slot1;
                                        tango = _closure1_slot3;
                                        zulu = 27;
                                        tango = tango[zulu];
                                        zulu = undefined;
                                        zulu = report.bind(zulu)(tango);
                                        tango = zulu.getMaxAgeOptions;
                                        zulu = tango.find;
                                        mike = function(argFoo) {
                                            entity = argFoo;
                                            mike = entity.value;
                                            entity = _closure6_slot0;
                                            entity = entity === mike;
                                            return entity;
                                        };
                                        mike = zulu.bind(tango)(mike);
                                        if(!mike) { _fun00088_ip = 65; continue _fun00087 }
 60:
                                        entity = mike.label;
 65:
                                        return entity;
                                    }
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1754:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    tango = argFoo;
                                    zulu = _closure1_slot0;
                                    oscar = _closure1_slot3;
                                    entity = 26;
                                    report = oscar[entity];
                                    mike = undefined;
                                    options = zulu.bind(mike)(report);
                                    golf = options.int2hex;
                                    report = 0;
                                    report = tango[report];
                                    golf = golf.bind(options)(report);
                                    report = golf.toUpperCase;
                                    report = report.bind(golf)();
                                    entity = oscar[entity];
                                    zulu = zulu.bind(mike)(entity);
                                    mike = zulu.int2hex;
                                    entity = 1;
                                    entity = tango[entity];
                                    mike = mike.bind(zulu)(entity);
                                    entity = mike.toUpperCase;
                                    tango = entity.bind(mike)();
                                    entity = global;
                                    entity = entity.HermesInternal;
                                    zulu = entity.concat;
                                    mike = '';
                                    entity = ', ';
                                    entity = zulu.bind(mike)(report, entity, tango);
                                    return entity;
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1775:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    zulu = _closure1_slot0;
                                    mike = _closure1_slot3;
                                    entity = 26;
                                    mike = mike[entity];
                                    entity = undefined;
                                    zulu = zulu.bind(entity)(mike);
                                    mike = zulu.int2hex;
                                    entity = argFoo;
                                    mike = mike.bind(zulu)(entity);
                                    entity = mike.toUpperCase;
                                    entity = entity.bind(mike)();
                                    return entity;
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1796:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    mike = argFoo;
                                    entity = 1000;
                                    entity = mike / entity;
                                    return entity;
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1817:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    mike = argFoo;
                                    entity = 60;
                                    entity = mike / entity;
                                    return entity;
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1838:
                                options = _closure1_slot44;
                                golf = undefined;
                                oscar = function(argFoo) {
                                    zulu = _closure1_slot10;
                                    mike = zulu.getChannel;
                                    entity = argFoo;
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                zulu = function(argFoo) {
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    mike = 23;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    oscar = tango.bind(mike)(zulu);
                                    report = oscar.computeChannelName;
                                    verify = _closure1_slot13;
                                    options = _closure1_slot12;
                                    offset = argFoo;
                                    golf = true;
                                    yankee = oscar;
                                    entity = yankee[report](offset, verify, options, golf, oscar);
                                    return entity;
                                };
                                zulu = options.bind(golf)(entity, oscar, zulu);
                                return zulu;
 1867:
                                golf = _closure1_slot44;
                                oscar = undefined;
                                zulu = function(argFoo) {
                                    zulu = _closure1_slot13;
                                    mike = zulu.getUser;
                                    entity = argFoo;
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                zulu = golf.bind(oscar)(entity, zulu);
                                return zulu;
 1888:
                                zulu = entity.newValue;
                                if(zulu) { _fun00072_ip = 1903; continue _fun00071 }
 1897:
                                zulu = entity.oldValue;
 1903:
                                golf = zulu.type;
                                oscar = _closure1_slot26;
                                oscar = oscar.ROLE;
                                if(!(oscar !== golf)) { _fun00072_ip = 2167; continue _fun00071 }
 1925:
                                oscar = _closure1_slot26;
                                oscar = oscar.USER;
                                if(!(oscar !== golf)) { _fun00072_ip = 2127; continue _fun00071 }
 1942:
                                oscar = _closure1_slot26;
                                oscar = oscar.CHANNEL;
                                if(!(oscar === golf)) { _fun00072_ip = 2205; continue _fun00071 }
 1959:
                                oscar = zulu.id;
                                options = _closure1_slot1;
                                verify = _closure1_slot3;
                                golf = 25;
                                golf = verify[golf];
                                verify = undefined;
                                golf = options.bind(verify)(golf);
                                report = report.id;
                                options = golf.bind(verify)(report);
                                golf = options.subtract;
                                report = 1;
                                golf = golf.bind(options)(report);
                                report = golf.toString;
                                report = report.bind(golf)();
                                if(!(oscar !== report)) { _fun00072_ip = 2064; continue _fun00071 }
 2023:
                                options = _closure1_slot46;
                                golf = zulu.id;
                                oscar = function(argFoo) {
                                    zulu = _closure1_slot10;
                                    mike = zulu.getChannel;
                                    entity = argFoo;
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                report = function(argFoo) {
                                    tango = _closure1_slot0;
                                    zulu = _closure1_slot3;
                                    mike = 23;
                                    zulu = zulu[mike];
                                    mike = undefined;
                                    oscar = tango.bind(mike)(zulu);
                                    report = oscar.computeChannelName;
                                    verify = _closure1_slot13;
                                    options = _closure1_slot12;
                                    offset = argFoo;
                                    golf = true;
                                    yankee = oscar;
                                    entity = yankee[report](offset, verify, options, golf, oscar);
                                    return entity;
                                };
                                report = options.bind(verify)(golf, oscar, report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2205; continue _fun00071;
 2064:
                                options = _closure1_slot0;
                                offset = _closure1_slot3;
                                report = 17;
                                oscar = offset[report];
                                oscar = options.bind(verify)(oscar);
                                golf = oscar.intl;
                                oscar = golf.string;
                                report = offset[report];
                                report = options.bind(verify)(report);
                                report = report.t;
                                report = report.MSYhgo;
                                report = oscar.bind(golf)(report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2205; continue _fun00071;
 2127:
                                verify = _closure1_slot46;
                                options = zulu.id;
                                golf = undefined;
                                oscar = function(argFoo) {
                                    zulu = _closure1_slot13;
                                    mike = zulu.getUser;
                                    entity = argFoo;
                                    entity = mike.bind(zulu)(entity);
                                    return entity;
                                };
                                report = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.tag;
                                    return entity;
                                };
                                report = verify.bind(golf)(options, oscar, report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2205; continue _fun00071;
 2167:
                                oscar = _closure1_slot46;
                                report = zulu.id;
                                tango = undefined;
                                zulu = function(argFoo) {
                                    tango = _closure1_slot11;
                                    zulu = tango.getRole;
                                    entity = _closure5_slot0;
                                    mike = entity.id;
                                    entity = argFoo;
                                    entity = zulu.bind(tango)(mike, entity);
                                    return entity;
                                };
                                mike = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.name;
                                    return entity;
                                };
                                mike = oscar.bind(tango)(report, zulu, mike);
                                entity['subtarget'] = mike;
 2205:
                                return entity;
                            }
                        };
                        entity = undefined;
                        tango = argFoo;
                        tango = report.bind(entity)(tango, golf, oscar);
                        report = global;
                        oscar = report.Array;
                        report = oscar.isArray;
                        report = report.bind(oscar)(tango);
                        if(report) { _fun00070_ip = 72; continue _fun00069 }
 56:
                        report = _closure3_slot1;
                        zulu = report.push;
                        zulu = zulu.bind(report)(tango);
                        _fun00070_ip = 89; continue _fun00069;
 72:
                        zulu = tango.forEach;
                        mike = function(argFoo) {
                            zulu = _closure3_slot1;
                            mike = zulu.push;
                            entity = argFoo;
                            entity = mike.bind(zulu)(entity);
                            return entity;
                        };
                        mike = zulu.bind(tango)(mike);
 89:
                        return entity;
                    }
                };
                zulu = oscar.bind(verify)(zulu);
                oscar = options.set;
                zulu = 'changes';
                zulu = oscar.bind(options)(zulu, golf);
                _closure3_slot0 = zulu;
                tango = zulu;
 274:
                zulu = _closure2_slot1;
                mike = zulu.push;
                mike = mike.bind(zulu)(tango);
 288:
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    zulu['transformLogs'] = tango;
    zulu['transformAvailableForumTagChange'] = mike;
    return entity;
})();