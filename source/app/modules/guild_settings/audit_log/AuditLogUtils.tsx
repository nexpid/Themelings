// app/modules/guild_settings/audit_log/AuditLogUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
    verify = argBar;
    option = argBaz;
    zuuluu = argFre;
    offset = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = option;
    entity = argCor;
    var _closure1_slot2 = entity;
    var _closure1_slot3 = offset;
    report = function(argFoo, argBar) { // Original name: findChangeByKey
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = zuuluu.changes;
            entity = null;
            tangon = entity != tangon;
            if(!tangon) { _fun00002_ip = 50; continue _fun00001 }
 27:
            tangon = zuuluu.changes;
            zuuluu = tangon.find;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 50:
            return entity;
        }
    };
    var _closure1_slot39 = report;
    entity = function(argFoo, argBar) { // Original name: findAllChangeByKey
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argBar;
            entity = argFoo;
            var _closure2_slot0 = entity;
            tangon = zuuluu.changes;
            entity = null;
            if(!(entity == tangon)) { _fun00004_ip = 30; continue _fun00003 }
 24:
            entity = new Array(0);
            _fun00004_ip = 53; continue _fun00003;
 30:
            tangon = zuuluu.changes;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            entity = zuuluu.bind(tangon)(michal);
 53:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo, argBar) { // Original name: getPermissionChanges
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            oscard = argFoo;
            report = argBar;
            michal = _closure1_slot2;
            entity = _closure1_slot3;
            yankee = 21;
            entity = entity[yankee];
            offset = undefined;
            tangon = michal.bind(offset)(entity);
            michal = tangon.deserialize;
            golfie = 'string';
            option = typeof oscard;
            entity = 0;
            if(!(golfie === option)) { _fun00006_ip = 53; continue _fun00005 }
 50:
            entity = oscard;
 53:
            tangon = michal.bind(tangon)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot3;
            entity = entity[yankee];
            michal = michal.bind(offset)(entity);
            entity = michal.deserialize;
            oscard = typeof report;
            zuuluu = 0;
            if(!(golfie === oscard)) { _fun00006_ip = 93; continue _fun00005 }
 90:
            zuuluu = report;
 93:
            zuuluu = entity.bind(michal)(zuuluu);
            michal = _closure1_slot2;
            entity = _closure1_slot3;
            report = entity[yankee];
            oscard = michal.bind(offset)(report);
            report = oscard.remove;
            verify = report.bind(oscard)(zuuluu, tangon);
            entity = entity[yankee];
            michal = michal.bind(offset)(entity);
            entity = michal.remove;
            option = entity.bind(michal)(tangon, zuuluu);
            zuuluu = new Array(0);
            michal = new Array(0);
            oscard = _closure1_slot23;
            for(entity in oscard)
 168:
            {
 177:
                backup = entity;
                foxtra = _closure1_slot23;
                backup = foxtra[backup];
                kiloes = _closure1_slot2;
                foxtra = _closure1_slot3;
                foxtra = foxtra[yankee];
                kiloes = kiloes.bind(offset)(foxtra);
                foxtra = kiloes.has;
                foxtra = foxtra.bind(kiloes)(verify, backup);
                if(!foxtra) { _fun00006_ip = 229; continue _fun00005 }
 219:
                foxtra = zuuluu.push;
                foxtra = foxtra.bind(zuuluu)(backup);
 229:
                kiloes = _closure1_slot2;
                foxtra = _closure1_slot3;
                foxtra = foxtra[yankee];
                kiloes = kiloes.bind(offset)(foxtra);
                foxtra = kiloes.has;
                foxtra = foxtra.bind(kiloes)(option, backup);
                if(!foxtra) { _fun00006_ip = 168; continue _fun00005 }
 260:
                foxtra = michal.push;
                foxtra = foxtra.bind(michal)(backup);
                _fun00006_ip = 168; continue _fun00005;
            }
 272:
            entity = {};
            entity['added'] = zuuluu;
            entity['removed'] = michal;
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: convertForumTag
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = argFoo;
            entity = null;
            michal = entity == zuuluu;
            if(michal) { _fun00008_ip = 82; continue _fun00007 }
 12:
            michal = {};
            tangon = zuuluu.id;
            michal['id'] = tangon;
            tangon = zuuluu.name;
            michal['name'] = tangon;
            oscard = zuuluu.emoji_id;
            report = 0;
            tangon = undefined;
            if(!(report !== oscard)) { _fun00008_ip = 52; continue _fun00007 }
 46:
            tangon = zuuluu.emoji_id;
 52:
            michal['emojiId'] = tangon;
            tangon = zuuluu.emoji_name;
            michal['emojiName'] = tangon;
            zuuluu = zuuluu.moderated;
            michal['moderated'] = zuuluu;
            entity = michal;
 82:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    michal = function(argFoo) { // Original name: transformAvailableForumTagChange
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.oldValue;
            michal = entity.newValue;
            report = global;
            golfie = report.Array;
            oscard = golfie.isArray;
            oscard = oscard.bind(golfie)(zuuluu);
            if(oscard) { _fun00010_ip = 42; continue _fun00009 }
 38:
            zuuluu = new Array(0);
 42:
            oscard = report.Array;
            report = oscard.isArray;
            report = report.bind(oscard)(michal);
            if(report) { _fun00010_ip = 65; continue _fun00009 }
 61:
            michal = new Array(0);
 65:
            report = zuuluu.length;
            oscard = 0;
            if(!(oscard === report)) { _fun00010_ip = 88; continue _fun00009 }
 76:
            report = michal.length;
            if(!(oscard !== report)) { _fun00010_ip = 518; continue _fun00009 }
 88:
            backup = {};
            var _closure2_slot0 = backup;
            foxtra = {};
            var _closure2_slot1 = foxtra;
            oscard = zuuluu.forEach;
            report = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure2_slot0;
                entity = zuuluu.id;
                michal[entity] = zuuluu;
                entity = undefined;
                return entity;
            };
            report = oscard.bind(zuuluu)(report);
            report = michal.forEach;
            tangon = function(argFoo) {
                zuuluu = argFoo;
                michal = _closure2_slot1;
                entity = zuuluu.id;
                michal[entity] = zuuluu;
                entity = undefined;
                return entity;
            };
            tangon = report.bind(michal)(tangon);
            report = zuuluu.length;
            tangon = michal.length;
            if(!(report < tangon)) { _fun00010_ip = 240; continue _fun00009 }
 148:
            offset = foxtra;
            option = null;
            for(oscard in offset)
 161:
            {
 170:
                tangon = oscard;
                report = backup[tangon];
                if(option != report) { _fun00010_ip = 161; continue _fun00009 }
 181:
                golfie = _closure1_slot9;
                oscard = _closure1_slot16;
                oscard = oscard.AVAILABLE_TAG_ADD;
                verify = _closure1_slot42;
                report = foxtra[tangon];
                tangon = undefined;
                kiloes = verify.bind(tangon)(report);
                report = golfie.prototype;
                report = Object.create(report, {constructor: {value: golfie}});
                result = report;
                output = oscard;
                sizing = null;
                tangon = new result[golfie](output, sizing, kiloes, backup);
                tangon = tangon instanceof Object ? tangon : report;
                return tangon;
            }
 240:
            zuuluu = zuuluu.length;
            michal = michal.length;
            if(!(zuuluu > michal)) { _fun00010_ip = 346; continue _fun00009 }
 254:
            option = backup;
            oscard = null;
            for(tangon in option)
 267:
            {
 276:
                michal = tangon;
                zuuluu = foxtra[michal];
                if(oscard != zuuluu) { _fun00010_ip = 267; continue _fun00009 }
 287:
                report = _closure1_slot9;
                tangon = _closure1_slot16;
                tangon = tangon.AVAILABLE_TAG_DELETE;
                golfie = _closure1_slot42;
                zuuluu = backup[michal];
                michal = undefined;
                kiloes = golfie.bind(michal)(zuuluu);
                zuuluu = report.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: report}});
                result = zuuluu;
                output = tangon;
                sizing = null;
                michal = new result[report](output, sizing, kiloes, backup);
                michal = michal instanceof Object ? michal : zuuluu;
                return michal;
            }
 346:
            yankee = backup;
            oscard = null;
            golfie = undefined;
            for(option in yankee)
 364:
            {
 376:
                michal = option;
                tangon = backup[michal];
                zuuluu = foxtra[michal];
                michal = oscard == zuuluu;
                report = undefined;
                if(michal) { _fun00010_ip = 401; continue _fun00009 }
 396:
                report = zuuluu.name;
 401:
                michal = tangon.name;
                if(!(report === michal)) { _fun00010_ip = 460; continue _fun00009 }
 410:
                michal = oscard == zuuluu;
                report = undefined;
                if(michal) { _fun00010_ip = 425; continue _fun00009 }
 419:
                report = zuuluu.emoji_id;
 425:
                michal = tangon.emoji_id;
                if(!(report === michal)) { _fun00010_ip = 460; continue _fun00009 }
 435:
                michal = oscard == zuuluu;
                report = undefined;
                if(michal) { _fun00010_ip = 450; continue _fun00009 }
 444:
                report = zuuluu.emoji_name;
 450:
                michal = tangon.emoji_name;
                if(report === michal) { _fun00010_ip = 364; continue _fun00009 }
 460:
                oscard = _closure1_slot9;
                report = _closure1_slot16;
                report = report.AVAILABLE_TAG_EDIT;
                michal = _closure1_slot42;
                sizing = michal.bind(golfie)(tangon);
                kiloes = michal.bind(golfie)(zuuluu);
                zuuluu = oscard.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
                result = zuuluu;
                output = report;
                michal = new result[oscard](output, sizing, kiloes, backup);
                michal = michal instanceof Object ? michal : zuuluu;
                return michal;
            }
 516:
            return entity;
 518:
            return entity;
        }
    };
    var _closure1_slot43 = michal;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertValue
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            michal = argFoo;
            option = argBar;
            golfie = argBaz;
            report = michal.newValue;
            tangon = michal.oldValue;
            zuuluu = michal.newValue;
            entity = null;
            if(!(entity != zuuluu)) { _fun00012_ip = 71; continue _fun00011 }
 33:
            zuuluu = michal.newValue;
            verify = undefined;
            oscard = option.bind(verify)(zuuluu);
            offset = entity != golfie;
            if(!offset) { _fun00012_ip = 57; continue _fun00011 }
 53:
            offset = entity != oscard;
 57:
            zuuluu = oscard;
            if(!offset) { _fun00012_ip = 68; continue _fun00011 }
 63:
            zuuluu = golfie.bind(verify)(oscard);
 68:
            report = zuuluu;
 71:
            zuuluu = michal.oldValue;
            if(!(entity != zuuluu)) { _fun00012_ip = 119; continue _fun00011 }
 81:
            zuuluu = michal.oldValue;
            oscard = undefined;
            zuuluu = option.bind(oscard)(zuuluu);
            option = entity != golfie;
            if(!option) { _fun00012_ip = 105; continue _fun00011 }
 101:
            option = entity != zuuluu;
 105:
            entity = zuuluu;
            if(!option) { _fun00012_ip = 116; continue _fun00011 }
 111:
            entity = golfie.bind(oscard)(zuuluu);
 116:
            tangon = entity;
 119:
            zuuluu = _closure1_slot9;
            entity = michal.key;
            if(tangon) { _fun00012_ip = 140; continue _fun00011 }
 134:
            tangon = michal.oldValue;
 140:
            if(report) { _fun00012_ip = 149; continue _fun00011 }
 143:
            report = michal.newValue;
 149:
            michal = zuuluu.prototype;
            michal = Object.create(michal, {constructor: {value: zuuluu}});
            backup = michal;
            foxtra = entity;
            romeon = tangon;
            yankee = report;
            entity = new backup[zuuluu](foxtra, romeon, yankee, offset);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    var _closure1_slot44 = entity;
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: getTargetValue
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            oscard = argFoo;
            golfie = argCor;
            entity = argGra;
            michal = argBar;
            var _closure2_slot0 = michal;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00014_ip = 30; continue _fun00013 }
 24:
            entity = oscard.targetId;
 30:
            michal = argBaz;
            tangon = undefined;
            michal = michal.bind(tangon)(entity);
            verify = zuuluu != michal;
            if(!verify) { _fun00014_ip = 51; continue _fun00013 }
 47:
            verify = zuuluu != golfie;
 51:
            option = null;
            if(!verify) { _fun00014_ip = 61; continue _fun00013 }
 56:
            option = golfie.bind(tangon)(michal);
 61:
            tangon = option;
            if(!(zuuluu == tangon)) { _fun00014_ip = 118; continue _fun00013 }
 68:
            michal = _closure1_slot14;
            golfie = michal.deletedTargets;
            michal = oscard.targetType;
            michal = golfie[michal];
            golfie = zuuluu != michal;
            if(!golfie) { _fun00014_ip = 108; continue _fun00013 }
 100:
            verify = michal[entity];
            golfie = zuuluu != verify;
 108:
            tangon = option;
            if(!golfie) { _fun00014_ip = 118; continue _fun00013 }
 114:
            tangon = michal[entity];
 118:
            michal = tangon;
            if(!(zuuluu == michal)) { _fun00014_ip = 186; continue _fun00013 }
 125:
            golfie = oscard.changes;
            michal = tangon;
            if(!(zuuluu != golfie)) { _fun00014_ip = 186; continue _fun00013 }
 138:
            golfie = oscard.changes;
            oscard = golfie.find;
            report = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure2_slot0;
                entity = michal === entity;
                return entity;
            };
            report = oscard.bind(golfie)(report);
            michal = tangon;
            if(!(zuuluu != report)) { _fun00014_ip = 186; continue _fun00013 }
 168:
            tangon = report.newValue;
            if(tangon) { _fun00014_ip = 183; continue _fun00013 }
 177:
            tangon = report.oldValue;
 183:
            michal = tangon;
 186:
            if(!(zuuluu != michal)) { _fun00014_ip = 193; continue _fun00013 }
 190:
            entity = michal;
 193:
            return entity;
        }
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: convertSubtarget
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            tangon = argBaz;
            michal = argBar;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(entity);
            oscard = null;
            report = oscard != michal;
            if(!report) { _fun00016_ip = 29; continue _fun00015 }
 25:
            report = oscard != tangon;
 29:
            if(!report) { _fun00016_ip = 37; continue _fun00015 }
 32:
            entity = tangon.bind(zuuluu)(michal);
 37:
            return entity;
        }
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo, argBar) { // Original name: getNullableOldValueString
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                entity = argFoo;
                michal = entity.oldValue;
                entity = null;
                if(!(entity != michal)) { _fun00018_ip = 24; continue _fun00017 }
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
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                michal = entity.newValue;
                entity = null;
                if(!(entity != michal)) { _fun00020_ip = 24; continue _fun00019 }
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
    entity = function(argFoo, argBar, argBaz, argCor) { // Original name: getNullableNewOrOldValueString
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        michal = argBaz;
        var _closure2_slot2 = michal;
        michal = argCor;
        var _closure2_slot3 = michal;
        entity = function(argFoo) {
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.newValue;
                michal = null;
                if(!(michal != zuuluu)) { _fun00022_ip = 25; continue _fun00021 }
 15:
                zuuluu = entity.oldValue;
                if(!(michal == zuuluu)) { _fun00022_ip = 72; continue _fun00021 }
 25:
                zuuluu = entity.newValue;
                if(!(michal == zuuluu)) { _fun00022_ip = 63; continue _fun00021 }
 35:
                entity = entity.oldValue;
                if(!(michal == entity)) { _fun00022_ip = 54; continue _fun00021 }
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
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
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
        michal = argFoo;
        var _closure2_slot0 = michal;
        entity = function(argFoo) {
            entity = argFoo;
            michal = entity.newValue;
            entity = _closure2_slot0;
            entity = entity[michal];
            return entity;
        };
        return entity;
    };
    var _closure1_slot51 = entity;
    entity = function(argFoo, argBar) { // Original name: getNewValueStringByKeyOrDefault
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        entity = function(argFoo) {
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = argFoo;
                entity = entity.newValue;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00026_ip = 30; continue _fun00025 }
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
    golfie = yankee.defineProperty;
    oscard = {};
    foxtra = true;
    oscard['value'] = foxtra;
    entity = '__esModule';
    entity = golfie.bind(yankee)(zuuluu, entity, oscard);
    entity = 0;
    oscard = offset[entity];
    entity = undefined;
    oscard = option.bind(entity)(oscard);
    var _closure1_slot4 = oscard;
    oscard = 1;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot5 = oscard;
    oscard = 2;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot6 = oscard;
    oscard = 3;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot7 = oscard;
    oscard = 4;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot8 = oscard;
    oscard = 5;
    oscard = offset[oscard];
    oscard = verify.bind(entity)(oscard);
    oscard = oscard.AuditLogChange;
    var _closure1_slot9 = oscard;
    oscard = 6;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot10 = oscard;
    oscard = 7;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot11 = oscard;
    oscard = 8;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot12 = oscard;
    oscard = 9;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot13 = oscard;
    oscard = 10;
    oscard = offset[oscard];
    oscard = option.bind(entity)(oscard);
    var _closure1_slot14 = oscard;
    oscard = 11;
    oscard = offset[oscard];
    golfie = verify.bind(entity)(oscard);
    oscard = golfie.AuditLogActions;
    var _closure1_slot15 = oscard;
    romeon = golfie.AuditLogChangeKeys;
    var _closure1_slot16 = romeon;
    oscard = golfie.AuditLogTargetTypes;
    var _closure1_slot17 = oscard;
    yankee = golfie.MFALevels;
    var _closure1_slot18 = yankee;
    yankee = golfie.VerificationLevels;
    var _closure1_slot19 = yankee;
    yankee = golfie.UserNotificationSettings;
    var _closure1_slot20 = yankee;
    yankee = golfie.GuildExplicitContentFilterTypes;
    var _closure1_slot21 = yankee;
    yankee = golfie.ChannelTypes;
    var _closure1_slot22 = yankee;
    yankee = golfie.Permissions;
    var _closure1_slot23 = yankee;
    yankee = golfie.NOOP_NULL;
    var _closure1_slot24 = yankee;
    yankee = golfie.VideoQualityMode;
    var _closure1_slot25 = yankee;
    yankee = golfie.ApplicationCommandPermissionTypes;
    var _closure1_slot26 = yankee;
    yankee = golfie.AuditLogSubtargetTypes;
    var _closure1_slot27 = yankee;
    golfie = golfie.SystemChannelFlags;
    var _closure1_slot28 = golfie;
    golfie = 12;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.ChannelFlags;
    var _closure1_slot29 = golfie;
    golfie = 13;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.AutomodTriggerType;
    var _closure1_slot30 = golfie;
    golfie = 14;
    golfie = offset[golfie];
    golfie = verify.bind(entity)(golfie);
    yankee = golfie.GuildScheduledEventEntityTypes;
    var _closure1_slot31 = yankee;
    yankee = golfie.GuildScheduledEventStatus;
    var _closure1_slot32 = yankee;
    golfie = golfie.GuildScheduledEventPrivacyLevel;
    var _closure1_slot33 = golfie;
    golfie = 15;
    golfie = offset[golfie];
    yankee = option.bind(entity)(golfie);
    golfie = yankee.prototype;
    option = Object.create(golfie, {constructor: {value: yankee}});
    result = 'AuditLogUtils';
    echoed = option;
    golfie = new echoed[yankee](result, output);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot34 = golfie;
    yankee = 16;
    golfie = offset[yankee];
    golfie = verify.bind(entity)(golfie);
    golfie = golfie.TimeUnits;
    option = golfie.DAYS;
    golfie = new Array(4);
    golfie[0] = option;
    option = offset[yankee];
    option = verify.bind(entity)(option);
    option = option.TimeUnits;
    option = option.HOURS;
    golfie[1] = option;
    option = offset[yankee];
    option = verify.bind(entity)(option);
    option = option.TimeUnits;
    option = option.MINUTES;
    golfie[2] = option;
    option = offset[yankee];
    option = verify.bind(entity)(option);
    option = option.TimeUnits;
    option = option.SECONDS;
    golfie[3] = option;
    var _closure1_slot35 = golfie;
    golfie = function() { // Original name: CommonChangeStrings
        entity = {};
        michal = _closure1_slot16;
        zuuluu = michal.REASON;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[zuuluu] = michal;
        return entity;
    };
    var _closure1_slot36 = golfie;
    golfie = {};
    backup = oscard.CHANNEL;
    option = {};
    kiloes = romeon.ID;
    option[kiloes] = foxtra;
    kiloes = romeon.PERMISSION_OVERWRITES;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.CHANNEL_OVERWRITE;
    option = {};
    kiloes = romeon.TYPE;
    option[kiloes] = foxtra;
    kiloes = romeon.ID;
    option[kiloes] = foxtra;
    kiloes = romeon.PERMISSION_OVERWRITES;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.INVITE;
    option = {};
    kiloes = romeon.INVITER_ID;
    option[kiloes] = foxtra;
    kiloes = romeon.USES;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.WEBHOOK;
    option = {};
    kiloes = romeon.TYPE;
    option[kiloes] = foxtra;
    kiloes = romeon.APPLICATION_ID;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.INTEGRATION;
    option = {};
    kiloes = romeon.TYPE;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.THREAD;
    option = {};
    kiloes = romeon.ID;
    option[kiloes] = foxtra;
    kiloes = romeon.TYPE;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.STICKER;
    option = {};
    kiloes = romeon.ID;
    option[kiloes] = foxtra;
    kiloes = romeon.TYPE;
    option[kiloes] = foxtra;
    kiloes = romeon.ASSET;
    option[kiloes] = foxtra;
    kiloes = romeon.FORMAT_TYPE;
    option[kiloes] = foxtra;
    kiloes = romeon.AVAILABLE;
    option[kiloes] = foxtra;
    kiloes = romeon.GUILD_ID;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.GUILD_HOME;
    option = {};
    kiloes = romeon.ENTITY_TYPE;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    backup = oscard.GUILD_ONBOARDING;
    option = {};
    kiloes = romeon.PROMPTS;
    option[kiloes] = foxtra;
    golfie[backup] = option;
    option = oscard.GUILD_SOUNDBOARD;
    oscard = {};
    backup = romeon.ID;
    oscard[backup] = foxtra;
    romeon = romeon.SOUND_ID;
    oscard[romeon] = foxtra;
    golfie[option] = oscard;
    oscard = function() { // Original name: ACTION_FILTER_ITEMS
        michal = {};
        tangon = _closure1_slot15;
        zuuluu = tangon.ALL;
        michal['value'] = zuuluu;
        golfie = _closure1_slot0;
        option = _closure1_slot3;
        zuuluu = 17;
        entity = option[zuuluu];
        oscard = undefined;
        entity = golfie.bind(oscard)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = option[zuuluu];
        entity = golfie.bind(oscard)(entity);
        entity = entity.t;
        entity = entity.QxEVcn;
        entity = report.bind(verify)(entity);
        michal['label'] = entity;
        entity = option[zuuluu];
        entity = golfie.bind(oscard)(entity);
        verify = entity.intl;
        report = verify.string;
        entity = option[zuuluu];
        entity = golfie.bind(oscard)(entity);
        entity = entity.t;
        entity = entity.an9Ry8;
        entity = report.bind(verify)(entity);
        michal['valueLabel'] = entity;
        entity = new Array(67);
        entity[0] = michal;
        michal = {};
        report = tangon.GUILD_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.5INZa2;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[1] = michal;
        michal = {};
        report = tangon.CHANNEL_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.2uh4vL;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[2] = michal;
        michal = {};
        report = tangon.CHANNEL_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.mGsBLS;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[3] = michal;
        michal = {};
        report = tangon.CHANNEL_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.hCHzAg;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[4] = michal;
        michal = {};
        report = tangon.CHANNEL_OVERWRITE_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.8TnAMD;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[5] = michal;
        michal = {};
        report = tangon.CHANNEL_OVERWRITE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.Jqx0Bg;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[6] = michal;
        michal = {};
        report = tangon.CHANNEL_OVERWRITE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.gBXOr6;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[7] = michal;
        michal = {};
        report = tangon.MEMBER_KICK;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.Q1/hNz;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[8] = michal;
        michal = {};
        report = tangon.MEMBER_PRUNE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.tOTTjY;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[9] = michal;
        michal = {};
        report = tangon.MEMBER_BAN_ADD;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.NfPn+f;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[10] = michal;
        michal = {};
        report = tangon.MEMBER_BAN_REMOVE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.XCsGfH;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[11] = michal;
        michal = {};
        report = tangon.MEMBER_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.F/jmND;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[12] = michal;
        michal = {};
        report = tangon.MEMBER_ROLE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.zAveSE;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[13] = michal;
        michal = {};
        report = tangon.MEMBER_MOVE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.QshteX;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[14] = michal;
        michal = {};
        report = tangon.MEMBER_DISCONNECT;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.Z45os7;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[15] = michal;
        michal = {};
        report = tangon.BOT_ADD;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.vuH24e;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[16] = michal;
        michal = {};
        report = tangon.THREAD_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.+zl0DA;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[17] = michal;
        michal = {};
        report = tangon.THREAD_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.rbIry8;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[18] = michal;
        michal = {};
        report = tangon.THREAD_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.hFjNEB;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[19] = michal;
        michal = {};
        report = tangon.ROLE_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.AbxKtr;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[20] = michal;
        michal = {};
        report = tangon.ROLE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.t3Z6sb;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[21] = michal;
        michal = {};
        report = tangon.ROLE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.YsFpa2;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[22] = michal;
        michal = {};
        report = tangon.ONBOARDING_PROMPT_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.ZV9tqa;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[23] = michal;
        michal = {};
        report = tangon.ONBOARDING_PROMPT_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.PcOdvb;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[24] = michal;
        michal = {};
        report = tangon.ONBOARDING_PROMPT_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.+r33NT;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[25] = michal;
        michal = {};
        report = tangon.ONBOARDING_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.uDADdX;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[26] = michal;
        michal = {};
        report = tangon.ONBOARDING_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.J1H1ws;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[27] = michal;
        michal = {};
        report = tangon.HOME_SETTINGS_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.Di4cvL;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[28] = michal;
        michal = {};
        report = tangon.HOME_SETTINGS_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.tzyrJC;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[29] = michal;
        michal = {};
        report = tangon.INVITE_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.0BNJdX;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[30] = michal;
        michal = {};
        report = tangon.INVITE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.o++obW;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[31] = michal;
        michal = {};
        report = tangon.INVITE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.iP40Aw;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[32] = michal;
        michal = {};
        report = tangon.WEBHOOK_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.tBF4+f;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[33] = michal;
        michal = {};
        report = tangon.WEBHOOK_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.eV3McH;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[34] = michal;
        michal = {};
        report = tangon.WEBHOOK_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.AAL3Ky;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[35] = michal;
        michal = {};
        report = tangon.EMOJI_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.RuWm0d;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[36] = michal;
        michal = {};
        report = tangon.EMOJI_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.WzdUY2;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[37] = michal;
        michal = {};
        report = tangon.EMOJI_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.c3dK2N;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[38] = michal;
        michal = {};
        report = tangon.MESSAGE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.daTfXl;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[39] = michal;
        michal = {};
        report = tangon.MESSAGE_BULK_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.nrBxen;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[40] = michal;
        michal = {};
        report = tangon.MESSAGE_PIN;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.MUldyM;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[41] = michal;
        michal = {};
        report = tangon.MESSAGE_UNPIN;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.n4zKhI;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[42] = michal;
        michal = {};
        report = tangon.INTEGRATION_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.deNm8/;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[43] = michal;
        michal = {};
        report = tangon.INTEGRATION_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.HT7Sfn;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[44] = michal;
        michal = {};
        report = tangon.INTEGRATION_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.+kJ09v;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[45] = michal;
        michal = {};
        report = tangon.STICKER_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.3DzNjY;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[46] = michal;
        michal = {};
        report = tangon.STICKER_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.tdhW5e;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[47] = michal;
        michal = {};
        report = tangon.STICKER_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.+ZhGOj;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[48] = michal;
        michal = {};
        report = tangon.STAGE_INSTANCE_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.sPbjAw;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[49] = michal;
        michal = {};
        report = tangon.STAGE_INSTANCE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.cW9LfH;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[50] = michal;
        michal = {};
        report = tangon.STAGE_INSTANCE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.U1r+yM;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[51] = michal;
        michal = {};
        report = tangon.GUILD_SCHEDULED_EVENT_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.H81Zy8;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[52] = michal;
        michal = {};
        report = tangon.GUILD_SCHEDULED_EVENT_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.FM69l5;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[53] = michal;
        michal = {};
        report = tangon.GUILD_SCHEDULED_EVENT_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.Rq28Bg;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[54] = michal;
        michal = {};
        report = tangon.APPLICATION_COMMAND_PERMISSION_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.iPdFOj;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[55] = michal;
        michal = {};
        report = tangon.AUTO_MODERATION_BLOCK_MESSAGE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.gNq5z8;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[56] = michal;
        michal = {};
        report = tangon.AUTO_MODERATION_RULE_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.f72Zqa;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[57] = michal;
        michal = {};
        report = tangon.AUTO_MODERATION_RULE_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.XeqIio;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[58] = michal;
        michal = {};
        report = tangon.AUTO_MODERATION_RULE_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.syAApa;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[59] = michal;
        michal = {};
        report = tangon.GUILD_HOME_FEATURE_ITEM;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.lhG5KC;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[60] = michal;
        michal = {};
        report = tangon.GUILD_HOME_REMOVE_ITEM;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.lRPRwc;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[61] = michal;
        michal = {};
        report = tangon.SOUNDBOARD_SOUND_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.yoRi5u;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[62] = michal;
        michal = {};
        report = tangon.SOUNDBOARD_SOUND_UPDATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.uKlG0d;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[63] = michal;
        michal = {};
        report = tangon.SOUNDBOARD_SOUND_DELETE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.gq0iCQ;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[64] = michal;
        michal = {};
        report = tangon.VOICE_CHANNEL_STATUS_CREATE;
        michal['value'] = report;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        offset = report.intl;
        verify = offset.string;
        report = option[zuuluu];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.rGr0YG;
        report = verify.bind(offset)(report);
        michal['label'] = report;
        entity[65] = michal;
        michal = {};
        tangon = tangon.VOICE_CHANNEL_STATUS_DELETE;
        michal['value'] = tangon;
        tangon = option[zuuluu];
        tangon = golfie.bind(oscard)(tangon);
        report = tangon.intl;
        tangon = report.string;
        zuuluu = option[zuuluu];
        zuuluu = golfie.bind(oscard)(zuuluu);
        zuuluu = zuuluu.t;
        zuuluu = zuuluu.V9PEQ0;
        zuuluu = tangon.bind(report)(zuuluu);
        michal['label'] = zuuluu;
        entity[66] = michal;
        return entity;
    };
    var _closure1_slot37 = oscard;
    option = {};
    romeon = offset[yankee];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.TimeUnits;
    foxtra = romeon.SECONDS;
    romeon = function(argFoo) {
        report = _closure1_slot0;
        oscard = _closure1_slot3;
        entity = 17;
        zuuluu = oscard[entity];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = oscard[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        michal = entity.geSp4O;
        entity = {};
        report = argFoo;
        entity['seconds'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    option[foxtra] = romeon;
    romeon = offset[yankee];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.TimeUnits;
    foxtra = romeon.MINUTES;
    romeon = function(argFoo) {
        report = _closure1_slot0;
        oscard = _closure1_slot3;
        entity = 17;
        zuuluu = oscard[entity];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = oscard[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        michal = entity.iXLF9f;
        entity = {};
        report = argFoo;
        entity['minutes'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    option[foxtra] = romeon;
    romeon = offset[yankee];
    romeon = verify.bind(entity)(romeon);
    romeon = romeon.TimeUnits;
    foxtra = romeon.HOURS;
    romeon = function(argFoo) {
        report = _closure1_slot0;
        oscard = _closure1_slot3;
        entity = 17;
        zuuluu = oscard[entity];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = oscard[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        michal = entity.xCjYxM;
        entity = {};
        report = argFoo;
        entity['hours'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    option[foxtra] = romeon;
    yankee = offset[yankee];
    yankee = verify.bind(entity)(yankee);
    yankee = yankee.TimeUnits;
    romeon = yankee.DAYS;
    yankee = function(argFoo) {
        report = _closure1_slot0;
        oscard = _closure1_slot3;
        entity = 17;
        zuuluu = oscard[entity];
        michal = undefined;
        zuuluu = report.bind(michal)(zuuluu);
        tangon = zuuluu.intl;
        zuuluu = tangon.formatToPlainString;
        entity = oscard[entity];
        entity = report.bind(michal)(entity);
        entity = entity.t;
        michal = entity.k2UNz8;
        entity = {};
        report = argFoo;
        entity['days'] = report;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    option[romeon] = yankee;
    var _closure1_slot38 = option;
    option = 31;
    option = offset[option];
    offset = verify.bind(entity)(option);
    verify = offset.fileFinishedImporting;
    option = 'modules/guild_settings/audit_log/AuditLogUtils.tsx';
    option = verify.bind(offset)(option);
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        report = zuuluu.NAME;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.CkDiND;
            return entity;
        };
        entity[report] = zuuluu;
        zuuluu = _closure1_slot16;
        golfie = zuuluu.DESCRIPTION;
        foxtra = _closure1_slot48;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscard = offset[report];
        zuuluu = undefined;
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.RP3Ey8;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.QAVj1d;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.ICON_HASH;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.iLZ8Q0;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.SPLASH_HASH;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.4VV6dn;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.DISCOVERY_SPLASH_HASH;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.2pds6u;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.BANNER_HASH;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.Cxq4zM;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.H7eE//;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.OWNER_ID;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.8ltsLS;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.REGION;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.X9r5KS;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.PREFERRED_LOCALE;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.UnXuDQ;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.AFK_CHANNEL_ID;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.ClBuAw;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.ms+xtL;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.AFK_TIMEOUT;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.q21fHR;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.SYSTEM_CHANNEL_ID;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.H1VXaW;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.XhtmxM;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.RULES_CHANNEL_ID;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.OI6MGx;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.lik3tL;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.PUBLIC_UPDATES_CHANNEL_ID;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.YxBKra;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.Ehsnio;
        oscard = foxtra.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.MFA_LEVEL;
        yankee = _closure1_slot51;
        oscard = {};
        option = _closure1_slot18;
        backup = option.NONE;
        romeon = offset[report];
        romeon = verify.bind(zuuluu)(romeon);
        romeon = romeon.t;
        romeon = romeon.voaCCQ;
        oscard[backup] = romeon;
        romeon = option.ELEVATED;
        option = offset[report];
        option = verify.bind(zuuluu)(option);
        option = option.t;
        option = option.pRNVw8;
        oscard[romeon] = option;
        oscard = yankee.bind(zuuluu)(oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.WIDGET_ENABLED;
        option = _closure1_slot50;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        romeon = oscard.ADIty8;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.nf58VV;
        oscard = option.bind(zuuluu)(romeon, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.WIDGET_CHANNEL_ID;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        romeon = oscard.6SBsDQ;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.deQ5wM;
        oscard = foxtra.bind(zuuluu)(romeon, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.VERIFICATION_LEVEL;
        oscard = {};
        romeon = _closure1_slot19;
        kiloes = romeon.NONE;
        backup = offset[report];
        backup = verify.bind(zuuluu)(backup);
        backup = backup.t;
        backup = backup.W27rsb;
        oscard[kiloes] = backup;
        kiloes = romeon.LOW;
        backup = offset[report];
        backup = verify.bind(zuuluu)(backup);
        backup = backup.t;
        backup = backup.V8P+Pz;
        oscard[kiloes] = backup;
        kiloes = romeon.MEDIUM;
        backup = offset[report];
        backup = verify.bind(zuuluu)(backup);
        backup = backup.t;
        backup = backup.ERQFam;
        oscard[kiloes] = backup;
        kiloes = romeon.HIGH;
        backup = offset[report];
        backup = verify.bind(zuuluu)(backup);
        backup = backup.t;
        backup = backup.83fN0t;
        oscard[kiloes] = backup;
        backup = romeon.VERY_HIGH;
        romeon = offset[report];
        romeon = verify.bind(zuuluu)(romeon);
        romeon = romeon.t;
        romeon = romeon.PnkQJC;
        oscard[backup] = romeon;
        oscard = yankee.bind(zuuluu)(oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.DEFAULT_MESSAGE_NOTIFICATIONS;
        oscard = {};
        romeon = _closure1_slot20;
        kiloes = romeon.ALL_MESSAGES;
        backup = offset[report];
        backup = verify.bind(zuuluu)(backup);
        backup = backup.t;
        backup = backup.LDi76O;
        oscard[kiloes] = backup;
        backup = romeon.ONLY_MENTIONS;
        romeon = offset[report];
        romeon = verify.bind(zuuluu)(romeon);
        romeon = romeon.t;
        romeon = romeon.6K83bW;
        oscard[backup] = romeon;
        oscard = yankee.bind(zuuluu)(oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.VANITY_URL_CODE;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        romeon = oscard.Zplsoq;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.u6cArq;
        oscard = foxtra.bind(zuuluu)(romeon, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.EXPLICIT_CONTENT_FILTER;
        oscard = {};
        romeon = _closure1_slot21;
        backup = romeon.DISABLED;
        foxtra = offset[report];
        foxtra = verify.bind(zuuluu)(foxtra);
        foxtra = foxtra.t;
        foxtra = foxtra.fmOeLy;
        oscard[backup] = foxtra;
        backup = romeon.MEMBERS_WITHOUT_ROLES;
        foxtra = offset[report];
        foxtra = verify.bind(zuuluu)(foxtra);
        foxtra = foxtra.t;
        foxtra = foxtra.4FghY2;
        oscard[backup] = foxtra;
        foxtra = romeon.ALL_MEMBERS;
        romeon = offset[report];
        romeon = verify.bind(zuuluu)(romeon);
        romeon = romeon.t;
        romeon = romeon.olyrSk;
        oscard[foxtra] = romeon;
        oscard = yankee.bind(zuuluu)(oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        oscard = oscard.PREMIUM_PROGRESS_BAR_ENABLED;
        golfie = offset[report];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.rBT0sr;
        report = offset[report];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.gc+te3;
        report = option.bind(zuuluu)(golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.YbouFB;
            return entity;
        };
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.g3DMjI;
            return entity;
        };
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.+fQAen;
            return entity;
        };
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.E1fc4u;
            return entity;
        };
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.XbwtSE;
            return entity;
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        sizing = michal.bind(zuuluu)();
        output = entity;
        michal = copyDataProperties(output, sizing);
        return entity;
    };
    zuuluu['GuildChangeStrings'] = option;
    option = function() {
        entity = {};
        michal = _closure1_slot16;
        verify = michal.NAME;
        yankee = _closure1_slot47;
        golfie = _closure1_slot0;
        option = _closure1_slot3;
        michal = 17;
        report = option[michal];
        oscard = undefined;
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.f8Rh0d;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.ebD4Qk;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.POSITION;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.isS8tb;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.t5uBio;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.TOPIC;
        foxtra = _closure1_slot49;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        romeon = report.esQcxs;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.m+veAg;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.ws/1FB;
        report = foxtra.bind(oscard)(romeon, offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.BITRATE;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.fw81am;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.MFNlgY;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.RTC_REGION_OVERRIDE;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        romeon = report.6kajx8;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.eGOlmZ;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.0JMZd3;
        report = foxtra.bind(oscard)(romeon, offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.USER_LIMIT;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.wk5t7u;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.XgjCEh;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.RATE_LIMIT_PER_USER;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.7lirhI;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.j4CCJS;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_RESET;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.+vSBFR;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_GRANTED;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.EKLJv7;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.PERMISSIONS_DENIED;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.U3rO5e;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.REASON;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.NSFW;
        romeon = _closure1_slot50;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.H8Ri2d;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.WW6cJy;
        report = romeon.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.TYPE;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.Vn5zn5;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.aq4uWF;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.VIDEO_QUALITY_MODE;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.e68fAQ;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.djbES0;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.DEFAULT_AUTO_ARCHIVE_DURATION;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        offset = report.nYz2mp;
        report = option[michal];
        report = golfie.bind(oscard)(report);
        report = report.t;
        report = report.oczvRE;
        report = yankee.bind(oscard)(offset, report);
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.FLAGS;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.ImCQkp;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.AVAILABLE_TAG_ADD;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.H86QQU;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        verify = report.AVAILABLE_TAG_EDIT;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.YtUzlp;
            return entity;
        };
        entity[verify] = report;
        report = _closure1_slot16;
        report = report.AVAILABLE_TAG_DELETE;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.8QOsen;
            return entity;
        };
        entity[report] = zuuluu;
        zuuluu = _closure1_slot16;
        zuuluu = zuuluu.LINKED_LOBBY;
        report = _closure1_slot48;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.+/3TkJ;
        michal = option[michal];
        michal = golfie.bind(oscard)(michal);
        michal = michal.t;
        michal = michal.5kDYS0;
        michal = report.bind(oscard)(tangon, michal);
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['ChannelChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        golfie = zuuluu.NICK;
        foxtra = _closure1_slot49;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscard = offset[report];
        zuuluu = undefined;
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        yankee = oscard.qXDsHh;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.m+qur6;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.DvLvjI;
        oscard = foxtra.bind(zuuluu)(yankee, option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.DEAF;
        option = _closure1_slot50;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        yankee = oscard.mArLlZ;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.ddvVYG;
        oscard = option.bind(zuuluu)(yankee, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.MUTE;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        yankee = oscard.bxs/lZ;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.FjecQE;
        oscard = option.bind(zuuluu)(yankee, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.ROLES_REMOVE;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.+2SDWV;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.ROLES_ADD;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.B3/3IC;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.PRUNE_DELETE_DAYS;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.+Cvc+P;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.COMMUNICATION_DISABLED_UNTIL;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        romeon = oscard.LXTQr6;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        yankee = oscard.LXTQr6;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.ULSdnJ;
        oscard = foxtra.bind(zuuluu)(romeon, yankee, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        oscard = oscard.BYPASSES_VERIFICATION;
        golfie = offset[report];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.NBPBur;
        report = offset[report];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.zATosr;
        report = option.bind(zuuluu)(golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.AUTO_MODERATION_TRIGGERED_RULE_NAME;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.YbouFB;
            return entity;
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        kiloes = michal.bind(zuuluu)();
        sizing = entity;
        michal = copyDataProperties(sizing, kiloes);
        return entity;
    };
    zuuluu['UserChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        golfie = zuuluu.NAME;
        yankee = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        report = 17;
        oscard = offset[report];
        zuuluu = undefined;
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.QBmlaG;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.Lfs4r6;
        oscard = yankee.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.DESCRIPTION;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        option = oscard.XeYKWF;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.PSfeIi;
        oscard = yankee.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.PERMISSIONS_GRANTED;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.9i/DvL;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.PERMISSIONS_DENIED;
        oscard = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.pa1ZVl;
            return entity;
        };
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.COLOR;
        yankee = _closure1_slot52;
        option = {};
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.TK6E1N;
        option['#000000'] = oscard;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.2FQFi4;
        oscard = yankee.bind(zuuluu)(option, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        golfie = oscard.HOIST;
        option = _closure1_slot50;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        yankee = oscard.gWfe29;
        oscard = offset[report];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.+tb8kJ;
        oscard = option.bind(zuuluu)(yankee, oscard);
        entity[golfie] = oscard;
        oscard = _closure1_slot16;
        oscard = oscard.MENTIONABLE;
        golfie = offset[report];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.LL8VFB;
        report = offset[report];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.Z7xzmJ;
        report = option.bind(zuuluu)(golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.ICON_HASH;
        report = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.iEE79/;
            return entity;
        };
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.UNICODE_EMOJI;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.KiLMMz;
            return entity;
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        romeon = michal.bind(zuuluu)();
        foxtra = entity;
        michal = copyDataProperties(foxtra, romeon);
        return entity;
    };
    zuuluu['RoleChangeStrings'] = option;
    option = function() {
        entity = {};
        michal = _closure1_slot36;
        oscard = undefined;
        yankee = michal.bind(oscard)();
        romeon = entity;
        michal = copyDataProperties(romeon, yankee);
        michal = _closure1_slot16;
        report = michal.TITLE;
        offset = _closure1_slot47;
        golfie = _closure1_slot0;
        option = _closure1_slot3;
        michal = 17;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        verify = tangon.sNpuy8;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.3Ukc/v;
        tangon = offset.bind(oscard)(verify, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.DESCRIPTION;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        verify = tangon.PP1q09;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.z7pYLi;
        tangon = offset.bind(oscard)(verify, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.OPTIONS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.3G5C9/;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        verify = tangon.SINGLE_SELECT;
        report = _closure1_slot50;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        offset = tangon.v4WnR0;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.6Qg3uL;
        tangon = report.bind(oscard)(offset, tangon);
        entity[verify] = tangon;
        zuuluu = _closure1_slot16;
        zuuluu = zuuluu.REQUIRED;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.0MPAMz;
        michal = option[michal];
        michal = golfie.bind(oscard)(michal);
        michal = michal.t;
        michal = michal.pwsXio;
        michal = report.bind(oscard)(tangon, michal);
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['OnboardingPromptChangeStrings'] = option;
    option = function() {
        entity = {};
        michal = _closure1_slot36;
        oscard = undefined;
        yankee = michal.bind(oscard)();
        romeon = entity;
        michal = copyDataProperties(romeon, yankee);
        michal = _closure1_slot16;
        tangon = michal.DEFAULT_CHANNEL_IDS;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.8M+D2t;
            return entity;
        };
        entity[tangon] = michal;
        michal = _closure1_slot16;
        verify = michal.ENABLE_DEFAULT_CHANNELS;
        report = _closure1_slot50;
        golfie = _closure1_slot0;
        option = _closure1_slot3;
        michal = 17;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        offset = tangon.EYd/lp;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.36OZeX;
        tangon = report.bind(oscard)(offset, tangon);
        entity[verify] = tangon;
        tangon = _closure1_slot16;
        verify = tangon.ENABLE_ONBOARDING_PROMPTS;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        offset = tangon.V3u8PT;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.r66lc3;
        tangon = report.bind(oscard)(offset, tangon);
        entity[verify] = tangon;
        zuuluu = _closure1_slot16;
        zuuluu = zuuluu.ENABLED;
        tangon = option[michal];
        tangon = golfie.bind(oscard)(tangon);
        tangon = tangon.t;
        tangon = tangon.SODVIi;
        michal = option[michal];
        michal = golfie.bind(oscard)(michal);
        michal = michal.t;
        michal = michal.u8HY5e;
        michal = report.bind(oscard)(tangon, michal);
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['OnboardingChangeStrings'] = option;
    option = function() {
        entity = {};
        report = _closure1_slot36;
        tangon = undefined;
        oscard = report.bind(tangon)();
        golfie = entity;
        tangon = copyDataProperties(golfie, oscard);
        tangon = _closure1_slot16;
        report = tangon.WELCOME_MESSAGE;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.dKQ1xc;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.NEW_MEMBER_ACTIONS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.jDUInp;
            return entity;
        };
        entity[report] = tangon;
        zuuluu = _closure1_slot16;
        zuuluu = zuuluu.RESOURCE_CHANNELS;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.SIX0mp;
            return entity;
        };
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['HomeSettingsChangeStrings'] = option;
    option = function() {
        entity = {};
        tangon = _closure1_slot16;
        report = tangon.CODE;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.rrRHgY;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        tangon = tangon.CHANNEL_ID;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.Q1vd5u;
            return entity;
        };
        entity[tangon] = zuuluu;
        zuuluu = _closure1_slot16;
        report = zuuluu.MAX_USES;
        option = _closure1_slot52;
        oscard = {};
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        golfie = 17;
        tangon = offset[golfie];
        zuuluu = undefined;
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.Yx8LNj;
        oscard[0] = tangon;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.3ygnwc;
        tangon = option.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.MAX_AGE;
        oscard = {};
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        romeon = tangon.intl;
        yankee = romeon.string;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.PqEzn5;
        yankee = yankee.bind(romeon)(tangon);
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.uWrLv7;
        oscard[yankee] = tangon;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.Q+5kcH;
        tangon = option.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.TEMPORARY;
        option = _closure1_slot50;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        oscard = tangon.MWp6Hx;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.omiqTE;
        tangon = option.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.FLAGS;
        oscard = _closure1_slot51;
        tangon = {};
        option = 18;
        option = offset[option];
        option = verify.bind(zuuluu)(option);
        option = option.GuildInviteFlags;
        option = option.IS_GUEST_INVITE;
        golfie = offset[golfie];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.XYZMbG;
        tangon[option] = golfie;
        tangon = oscard.bind(zuuluu)(tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        foxtra = michal.bind(zuuluu)();
        backup = entity;
        michal = copyDataProperties(backup, foxtra);
        return entity;
    };
    zuuluu['InviteChangeStrings'] = option;
    option = function() {
        entity = {};
        tangon = _closure1_slot16;
        oscard = tangon.CHANNEL_ID;
        option = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        tangon = 17;
        report = offset[tangon];
        golfie = undefined;
        report = verify.bind(golfie)(report);
        report = report.t;
        yankee = report.jhPpra;
        report = offset[tangon];
        report = verify.bind(golfie)(report);
        report = report.t;
        report = report.ar4qYG;
        report = option.bind(golfie)(yankee, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.NAME;
        oscard = offset[tangon];
        oscard = verify.bind(golfie)(oscard);
        oscard = oscard.t;
        oscard = oscard.ZVGrzc;
        tangon = offset[tangon];
        tangon = verify.bind(golfie)(tangon);
        tangon = tangon.t;
        tangon = tangon.tywdZW;
        tangon = option.bind(golfie)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AVATAR_HASH;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.KB52Ul;
            return entity;
        };
        entity[report] = tangon;
        zuuluu = _closure1_slot16;
        zuuluu = zuuluu.REASON;
        michal = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.2IW3Cw;
            return entity;
        };
        entity[zuuluu] = michal;
        return entity;
    };
    zuuluu['WebhookChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        report = zuuluu.NAME;
        golfie = _closure1_slot47;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        tangon = 17;
        oscard = verify[tangon];
        zuuluu = undefined;
        oscard = option.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.ahU1o6;
        tangon = verify[tangon];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.wxs+vb;
        tangon = golfie.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        offset = michal.bind(zuuluu)();
        yankee = entity;
        michal = copyDataProperties(yankee, offset);
        return entity;
    };
    zuuluu['EmojiChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        oscard = zuuluu.NAME;
        golfie = _closure1_slot47;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        tangon = 17;
        report = verify[tangon];
        zuuluu = undefined;
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.cdl0Ym;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.o3W2l5;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.TAGS;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.zwL+S0;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.VYfKAw;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.DESCRIPTION;
        oscard = verify[tangon];
        oscard = option.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.XeYKWF;
        tangon = verify[tangon];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.PSfeIi;
        tangon = golfie.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        yankee = michal.bind(zuuluu)();
        romeon = entity;
        michal = copyDataProperties(romeon, yankee);
        return entity;
    };
    zuuluu['StickerChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        report = zuuluu.ENABLE_EMOTICONS;
        offset = _closure1_slot50;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        golfie = 17;
        tangon = verify[golfie];
        zuuluu = undefined;
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        oscard = tangon.FI0m5+;
        tangon = verify[golfie];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.olpKCw;
        tangon = offset.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.EXPIRE_BEHAVIOR;
        oscard = _closure1_slot51;
        tangon = {};
        offset = verify[golfie];
        offset = option.bind(zuuluu)(offset);
        offset = offset.t;
        offset = offset.1Bb1+v;
        tangon[0] = offset;
        golfie = verify[golfie];
        golfie = option.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.vjlW6u;
        tangon[1] = golfie;
        tangon = oscard.bind(zuuluu)(tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.EXPIRE_GRACE_PERIOD;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.iovXMT;
            return entity;
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        yankee = michal.bind(zuuluu)();
        romeon = entity;
        michal = copyDataProperties(romeon, yankee);
        return entity;
    };
    zuuluu['IntegrationChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        report = zuuluu.TOPIC;
        option = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        golfie = 17;
        tangon = offset[golfie];
        zuuluu = undefined;
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        oscard = tangon.m+veAg;
        tangon = offset[golfie];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.esQcxs;
        tangon = option.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.PRIVACY_LEVEL;
        oscard = _closure1_slot51;
        tangon = {};
        option = _closure1_slot33;
        romeon = option.GUILD_ONLY;
        yankee = offset[golfie];
        yankee = verify.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.EC+CDg;
        tangon[romeon] = yankee;
        option = option.PUBLIC;
        golfie = offset[golfie];
        golfie = verify.bind(zuuluu)(golfie);
        golfie = golfie.t;
        golfie = golfie.pK/WGx;
        tangon[option] = golfie;
        tangon = oscard.bind(zuuluu)(tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        foxtra = michal.bind(zuuluu)();
        backup = entity;
        michal = copyDataProperties(backup, foxtra);
        return entity;
    };
    zuuluu['StageInstanceChangeStrings'] = option;
    option = function() {
        entity = {};
        tangon = _closure1_slot16;
        report = tangon.NAME;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.21EXHR;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        tangon = tangon.DESCRIPTION;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.Vm1of3;
            return entity;
        };
        entity[tangon] = zuuluu;
        zuuluu = _closure1_slot16;
        oscard = zuuluu.PRIVACY_LEVEL;
        golfie = _closure1_slot51;
        report = {};
        offset = _closure1_slot33;
        romeon = offset.GUILD_ONLY;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        tangon = 17;
        yankee = verify[tangon];
        zuuluu = undefined;
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.EC+CDg;
        report[romeon] = yankee;
        yankee = offset.PUBLIC;
        offset = verify[tangon];
        offset = option.bind(zuuluu)(offset);
        offset = offset.t;
        offset = offset.pK/WGx;
        report[yankee] = offset;
        report = golfie.bind(zuuluu)(report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.STATUS;
        report = {};
        offset = _closure1_slot32;
        romeon = offset.SCHEDULED;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.hXKDgo;
        report[romeon] = yankee;
        romeon = offset.ACTIVE;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.lRX1n5;
        report[romeon] = yankee;
        romeon = offset.COMPLETED;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee./eFIho;
        report[romeon] = yankee;
        yankee = offset.CANCELED;
        offset = verify[tangon];
        offset = option.bind(zuuluu)(offset);
        offset = offset.t;
        offset = offset.NWIYho;
        report[yankee] = offset;
        report = golfie.bind(zuuluu)(report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.ENTITY_TYPE;
        report = {};
        offset = _closure1_slot31;
        romeon = offset.NONE;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.6sO3Sk;
        report[romeon] = yankee;
        romeon = offset.STAGE_INSTANCE;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.Wo+s19;
        report[romeon] = yankee;
        romeon = offset.VOICE;
        yankee = verify[tangon];
        yankee = option.bind(zuuluu)(yankee);
        yankee = yankee.t;
        yankee = yankee.XCVaIC;
        report[romeon] = yankee;
        yankee = offset.EXTERNAL;
        offset = verify[tangon];
        offset = option.bind(zuuluu)(offset);
        offset = offset.t;
        offset = offset.IvhAj4;
        report[yankee] = offset;
        report = golfie.bind(zuuluu)(report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.CHANNEL_ID;
        golfie = _closure1_slot48;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.yJBIcX;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.+PqSsr;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.LOCATION;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.GaMBHx;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.PsICk5;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.IMAGE_HASH;
        oscard = verify[tangon];
        oscard = option.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.S3vcRE;
        tangon = verify[tangon];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.KQu47O;
        tangon = golfie.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        foxtra = michal.bind(zuuluu)();
        backup = entity;
        michal = copyDataProperties(backup, foxtra);
        return entity;
    };
    zuuluu['GuildScheduledEventChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        oscard = zuuluu.SCHEDULED_START_TIME;
        golfie = _closure1_slot48;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        tangon = 17;
        report = verify[tangon];
        zuuluu = undefined;
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.zMIYVl;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.fzF8GR;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.SCHEDULED_END_TIME;
        oscard = verify[tangon];
        oscard = option.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.vONSQE;
        tangon = verify[tangon];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.IlIti4;
        tangon = golfie.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.IS_CANCELED;
        tangon = function(argFoo) {
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                entity = argFoo;
                zuuluu = entity.oldValue;
                michal = null;
                if(!(michal == zuuluu)) { _fun00028_ip = 27; continue _fun00027 }
 15:
                zuuluu = entity.newValue;
                michal = true;
                if(!(michal === zuuluu)) { _fun00028_ip = 143; continue _fun00027 }
 27:
                michal = entity.oldValue;
                if(michal) { _fun00028_ip = 85; continue _fun00027 }
 36:
                michal = entity.newValue;
                if(!michal) { _fun00028_ip = 85; continue _fun00027 }
 45:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 17;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.t;
                michal = michal.7RkicX;
                return michal;
 85:
                michal = entity.oldValue;
                if(!michal) { _fun00028_ip = 143; continue _fun00027 }
 94:
                entity = entity.newValue;
                if(entity) { _fun00028_ip = 143; continue _fun00027 }
 103:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.t;
                entity = entity.dRNTWV;
                return entity;
 143:
                entity = undefined;
                return entity;
            }
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        yankee = michal.bind(zuuluu)();
        romeon = entity;
        michal = copyDataProperties(romeon, yankee);
        return entity;
    };
    zuuluu['GuildScheduledEventExceptionChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        oscard = zuuluu.NAME;
        golfie = _closure1_slot47;
        option = _closure1_slot0;
        verify = _closure1_slot3;
        tangon = 17;
        report = verify[tangon];
        zuuluu = undefined;
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.tUKRzc;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.kPCHOD;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.ARCHIVED;
        yankee = _closure1_slot50;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.jDi9FB;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.F6dvbW;
        report = yankee.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.LOCKED;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.JSy1QU;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.C7Jgo6;
        report = yankee.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.INVITABLE;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.dxNUs7;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.biJvYG;
        report = yankee.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.AUTO_ARCHIVE_DURATION;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        offset = report.LuaG39;
        report = verify[tangon];
        report = option.bind(zuuluu)(report);
        report = report.t;
        report = report.18d9qq;
        report = golfie.bind(zuuluu)(offset, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.RATE_LIMIT_PER_USER;
        oscard = verify[tangon];
        oscard = option.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.7lirhI;
        tangon = verify[tangon];
        tangon = option.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.j4CCJS;
        tangon = golfie.bind(zuuluu)(oscard, tangon);
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.FLAGS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.sSAQtr;
            return entity;
        };
        entity[report] = tangon;
        michal = _closure1_slot36;
        romeon = michal.bind(zuuluu)();
        foxtra = entity;
        michal = copyDataProperties(foxtra, romeon);
        return entity;
    };
    zuuluu['ThreadChangeStrings'] = option;
    option = function(argFoo) {
        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
            tangon = argFoo;
            entity = {};
            report = _closure1_slot36;
            zuuluu = undefined;
            oscard = report.bind(zuuluu)();
            golfie = entity;
            zuuluu = copyDataProperties(golfie, oscard);
            var _closure2_slot0 = entity;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00030_ip = 54; continue _fun00029 }
 37:
            zuuluu = tangon.forEach;
            michal = function(argFoo) {
                _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                    michal = argFoo;
                    tangon = michal.newValue;
                    if(tangon) { _fun00032_ip = 39; continue _fun00031 }
 17:
                    oscard = _closure2_slot0;
                    report = michal.key;
                    tangon = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        entity = entity.t;
                        entity = entity.vynxnZ;
                        return entity;
                    };
                    oscard[report] = tangon;
                    _fun00032_ip = 87; continue _fun00031;
 39:
                    tangon = michal.newValue;
                    tangon = tangon.permission;
                    zuuluu = _closure2_slot0;
                    michal = michal.key;
                    if(tangon) { _fun00032_ip = 76; continue _fun00031 }
 63:
                    tangon = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        entity = entity.t;
                        entity = entity.HUrFDg;
                        return entity;
                    };
                    zuuluu[michal] = tangon;
                    _fun00032_ip = 87; continue _fun00031;
 76:
                    entity = function() {
                        zuuluu = _closure1_slot0;
                        michal = _closure1_slot3;
                        entity = 17;
                        michal = michal[entity];
                        entity = undefined;
                        entity = zuuluu.bind(entity)(michal);
                        entity = entity.t;
                        entity = entity.JH+89P;
                        return entity;
                    };
                    zuuluu[michal] = entity;
 87:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
 54:
            return entity;
        }
    };
    zuuluu['CommandPermissionChangeStrings'] = option;
    option = function() {
        entity = {};
        tangon = _closure1_slot16;
        report = tangon.NAME;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.XwxAJS;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_TRIGGER_TYPE;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.fx0pys;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_EVENT_TYPE;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.46Y+Ly;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_ACTIONS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.8efxfn;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_ENABLED;
        tangon = function(argFoo) {
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                entity = argFoo;
                michal = entity.newValue;
                zuuluu = null;
                if(!(zuuluu == michal)) { _fun00034_ip = 21; continue _fun00033 }
 15:
                michal = entity.oldValue;
 21:
                entity = true;
                if(!(entity !== michal)) { _fun00034_ip = 67; continue _fun00033 }
 27:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.t;
                entity = entity.Wrg9Ji;
                _fun00034_ip = 105; continue _fun00033;
 67:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 17;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.t;
                entity = michal.fCmxCw;
 105:
                return entity;
            }
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_EXEMPT_ROLES;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.TRb7Nz;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_EXEMPT_CHANNELS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.mzitLC;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_TRIGGER_METADATA;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.h/lM6+;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_ADD_KEYWORDS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.9V2yaG;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_REMOVE_KEYWORDS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.4Qe9n5;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_ADD_REGEX_PATTERNS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.GyZtxs;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.OQDadX;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        report = tangon.AUTO_MODERATION_ADD_ALLOW_LIST;
        tangon = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.FvvR+P;
            return entity;
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        tangon = tangon.AUTO_MODERATION_REMOVE_ALLOW_LIST;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.p5nSv7;
            return entity;
        };
        entity[tangon] = zuuluu;
        zuuluu = _closure1_slot36;
        michal = undefined;
        oscard = zuuluu.bind(michal)();
        golfie = entity;
        michal = copyDataProperties(golfie, oscard);
        return entity;
    };
    zuuluu['AutoModerationRuleChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        oscard = zuuluu.NAME;
        option = _closure1_slot47;
        verify = _closure1_slot0;
        offset = _closure1_slot3;
        tangon = 17;
        report = offset[tangon];
        zuuluu = undefined;
        report = verify.bind(zuuluu)(report);
        report = report.t;
        golfie = report.VOtRSE;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.OK7B8P;
        report = option.bind(zuuluu)(golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.VOLUME;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        golfie = report.igrDBw;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.L5lDFB;
        report = option.bind(zuuluu)(golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        oscard = report.EMOJI_NAME;
        option = _closure1_slot49;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        yankee = report.IIanaW;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        golfie = report.z4w4U1;
        report = offset[tangon];
        report = verify.bind(zuuluu)(report);
        report = report.t;
        report = report.V8Tfyc;
        report = option.bind(zuuluu)(yankee, golfie, report);
        entity[oscard] = report;
        report = _closure1_slot16;
        report = report.EMOJI_ID;
        oscard = offset[tangon];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        golfie = oscard.ainxMD;
        oscard = offset[tangon];
        oscard = verify.bind(zuuluu)(oscard);
        oscard = oscard.t;
        oscard = oscard.2NPsYm;
        tangon = offset[tangon];
        tangon = verify.bind(zuuluu)(tangon);
        tangon = tangon.t;
        tangon = tangon.8crtnp;
        tangon = option.bind(zuuluu)(golfie, oscard, tangon);
        entity[report] = tangon;
        michal = _closure1_slot36;
        foxtra = michal.bind(zuuluu)();
        backup = entity;
        michal = copyDataProperties(backup, foxtra);
        return entity;
    };
    zuuluu['GuildSoundboardChangeStrings'] = option;
    option = function() {
        entity = {};
        tangon = _closure1_slot16;
        report = tangon.VERIFICATION_ENABLED;
        tangon = function(argFoo) {
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                entity = argFoo;
                michal = entity.newValue;
                entity = true;
                if(!(entity !== michal)) { _fun00036_ip = 55; continue _fun00035 }
 15:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.t;
                entity = entity.WYT6kZ;
                _fun00036_ip = 93; continue _fun00035;
 55:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 17;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.t;
                entity = michal.fnkzDQ;
 93:
                return entity;
            }
        };
        entity[report] = tangon;
        tangon = _closure1_slot16;
        tangon = tangon.MANUAL_APPROVAL_ENABLED;
        zuuluu = function(argFoo) {
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                entity = argFoo;
                michal = entity.newValue;
                entity = true;
                if(!(entity !== michal)) { _fun00038_ip = 55; continue _fun00037 }
 15:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot3;
                entity = 17;
                michal = michal[entity];
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
                entity = entity.t;
                entity = entity.WxyOtr;
                _fun00038_ip = 93; continue _fun00037;
 55:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot3;
                michal = 17;
                zuuluu = zuuluu[michal];
                michal = undefined;
                michal = tangon.bind(michal)(zuuluu);
                michal = michal.t;
                entity = michal.jzSvVV;
 93:
                return entity;
            }
        };
        entity[tangon] = zuuluu;
        zuuluu = _closure1_slot36;
        michal = undefined;
        oscard = zuuluu.bind(michal)();
        golfie = entity;
        michal = copyDataProperties(golfie, oscard);
        return entity;
    };
    zuuluu['MemberVerificationChangeStrings'] = option;
    option = function() {
        entity = {};
        zuuluu = _closure1_slot16;
        tangon = zuuluu.STATUS;
        zuuluu = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.HyCSnJ;
            return entity;
        };
        entity[tangon] = zuuluu;
        zuuluu = _closure1_slot36;
        michal = undefined;
        report = zuuluu.bind(michal)();
        oscard = entity;
        michal = copyDataProperties(oscard, report);
        return entity;
    };
    zuuluu['VoiceChannelStatusStrings'] = option;
    zuuluu['NotRenderedChanges'] = golfie;
    zuuluu['ACTION_FILTER_ITEMS'] = oscard;
    zuuluu['findChangeByKey'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogTitleFromChange
        _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot37;
            oscard = undefined;
            tangon = zuuluu.bind(oscard)();
            zuuluu = tangon.find;
            entity = function(argFoo) {
                entity = argFoo;
                michal = entity.value;
                entity = _closure2_slot0;
                entity = entity.action;
                entity = michal === entity;
                return entity;
            };
            tangon = zuuluu.bind(tangon)(entity);
            zuuluu = _closure1_slot39;
            entity = _closure1_slot16;
            entity = entity.COMMUNICATION_DISABLED_UNTIL;
            zuuluu = zuuluu.bind(oscard)(entity, report);
            entity = null;
            if(!(entity == zuuluu)) { _fun00040_ip = 93; continue _fun00039 }
 65:
            report = entity == tangon;
            zuuluu = undefined;
            if(report) { _fun00040_ip = 79; continue _fun00039 }
 74:
            zuuluu = tangon.label;
 79:
            tangon = entity != zuuluu;
            entity = null;
            if(!tangon) { _fun00040_ip = 91; continue _fun00039 }
 88:
            entity = zuuluu;
 91:
            _fun00040_ip = 150; continue _fun00039;
 93:
            report = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            zuuluu = report.bind(oscard)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = report.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.z3wbj4;
            entity = zuuluu.bind(tangon)(michal);
 150:
            return entity;
        }
    };
    zuuluu['getSimpleAuditLogTitleFromChange'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogTitleContextFromChange
        _fun00041: for(var _fun00042_ip = 0; ; ) switch(_fun00042_ip) {
 0:
            tangon = argFoo;
            michal = _closure1_slot39;
            entity = _closure1_slot16;
            entity = entity.COMMUNICATION_DISABLED_UNTIL;
            yankee = undefined;
            report = michal.bind(yankee)(entity, tangon);
            golfie = _closure1_slot40;
            entity = _closure1_slot16;
            entity = entity.ROLES_ADD;
            entity = golfie.bind(yankee)(entity, tangon);
            entity = entity.length;
            oscard = 0;
            michal = entity > oscard;
            entity = _closure1_slot16;
            entity = entity.ROLES_REMOVE;
            entity = golfie.bind(yankee)(entity, tangon);
            entity = entity.length;
            oscard = entity > oscard;
            entity = null;
            if(!(entity == report)) { _fun00042_ip = 287; continue _fun00041 }
 93:
            if(!michal) { _fun00042_ip = 102; continue _fun00041 }
 96:
            if(oscard) { _fun00042_ip = 228; continue _fun00041 }
 102:
            if(michal) { _fun00042_ip = 169; continue _fun00041 }
 105:
            michal = null;
            if(!oscard) { _fun00042_ip = 167; continue _fun00041 }
 110:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 17;
            golfie = offset[oscard];
            golfie = verify.bind(yankee)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(yankee)(oscard);
            oscard = oscard.t;
            oscard = oscard.8mQ6x8;
            michal = golfie.bind(option)(oscard);
 167:
            _fun00042_ip = 226; continue _fun00041;
 169:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 17;
            golfie = offset[oscard];
            golfie = verify.bind(yankee)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(yankee)(oscard);
            oscard = oscard.t;
            oscard = oscard.4GQqs7;
            michal = golfie.bind(option)(oscard);
 226:
            _fun00042_ip = 285; continue _fun00041;
 228:
            verify = _closure1_slot0;
            offset = _closure1_slot3;
            oscard = 17;
            golfie = offset[oscard];
            golfie = verify.bind(yankee)(golfie);
            option = golfie.intl;
            golfie = option.string;
            oscard = offset[oscard];
            oscard = verify.bind(yankee)(oscard);
            oscard = oscard.t;
            oscard = oscard.RdMMe3;
            michal = golfie.bind(option)(oscard);
 285:
            return michal;
 287:
            oscard = entity == report;
            michal = undefined;
            if(oscard) { _fun00042_ip = 302; continue _fun00041 }
 296:
            michal = report.newValue;
 302:
            if(!(entity == michal)) { _fun00042_ip = 387; continue _fun00041 }
 306:
            oscard = entity == report;
            michal = undefined;
            if(oscard) { _fun00042_ip = 321; continue _fun00041 }
 315:
            michal = report.oldValue;
 321:
            if(!(entity != michal)) { _fun00042_ip = 585; continue _fun00041 }
 328:
            option = _closure1_slot0;
            verify = _closure1_slot3;
            michal = 17;
            oscard = verify[michal];
            oscard = option.bind(yankee)(oscard);
            golfie = oscard.intl;
            oscard = golfie.string;
            michal = verify[michal];
            michal = option.bind(yankee)(michal);
            michal = michal.t;
            michal = michal.MA1ltr;
            michal = oscard.bind(golfie)(michal);
            return michal;
 387:
            oscard = global;
            golfie = oscard.Date;
            option = entity == report;
            michal = undefined;
            if(option) { _fun00042_ip = 410; continue _fun00041 }
 404:
            michal = report.newValue;
 410:
            report = golfie.prototype;
            report = Object.create(report, {constructor: {value: golfie}});
            kiloes = report;
            backup = michal;
            michal = new kiloes[golfie](backup, foxtra);
            report = michal instanceof Object ? michal : report;
            michal = report.getTime;
            report = michal.bind(report)();
            option = _closure1_slot1;
            michal = _closure1_slot3;
            golfie = 19;
            golfie = michal[golfie];
            option = option.bind(yankee)(golfie);
            golfie = option.extractTimestamp;
            tangon = tangon.id;
            tangon = golfie.bind(option)(tangon);
            option = report - tangon;
            verify = oscard.Math;
            golfie = verify.round;
            report = 1000;
            offset = option / report;
            tangon = 60;
            tangon = offset / tangon;
            verify = golfie.bind(verify)(tangon);
            tangon = _closure1_slot0;
            romeon = 16;
            michal = michal[romeon];
            golfie = tangon.bind(yankee)(michal);
            tangon = golfie.getTimeAndUnit;
            michal = _closure1_slot35;
            tangon = tangon.bind(golfie)(verify, michal);
            michal = tangon.unit;
            if(!(entity != michal)) { _fun00042_ip = 675; continue _fun00041 }
 558:
            michal = tangon.time;
            if(!(entity != michal)) { _fun00042_ip = 675; continue _fun00041 }
 568:
            golfie = tangon.unit;
            michal = _closure1_slot38;
            michal = golfie in michal;
            if(michal) { _fun00042_ip = 587; continue _fun00041 }
 585:
            return entity;
 587:
            michal = tangon.unit;
            verify = tangon.unit;
            offset = _closure1_slot0;
            golfie = _closure1_slot3;
            golfie = golfie[romeon];
            golfie = offset.bind(yankee)(golfie);
            golfie = golfie.TimeUnits;
            golfie = golfie.SECONDS;
            if(!(verify !== golfie)) { _fun00042_ip = 640; continue _fun00041 }
 632:
            tangon = tangon.time;
            _fun00042_ip = 660; continue _fun00041;
 640:
            golfie = oscard.Math;
            oscard = golfie.round;
            report = option / report;
            tangon = oscard.bind(golfie)(report);
 660:
            zuuluu = _closure1_slot38;
            michal = zuuluu[michal];
            michal = michal.bind(zuuluu)(tangon);
            return michal;
 675:
            return entity;
        }
    };
    zuuluu['getSimpleAuditLogTitleContextFromChange'] = report;
    report = function(argFoo) { // Original name: getSimpleAuditLogChangeDetails
        _fun00043: for(var _fun00044_ip = 0; ; ) switch(_fun00044_ip) {
 0:
            oscard = argFoo;
            zuuluu = _closure1_slot40;
            entity = _closure1_slot16;
            entity = entity.ROLES_ADD;
            option = undefined;
            report = zuuluu.bind(option)(entity, oscard);
            entity = _closure1_slot16;
            entity = entity.ROLES_REMOVE;
            zuuluu = zuuluu.bind(option)(entity, oscard);
            entity = null;
            oscard = entity == report;
            golfie = undefined;
            if(oscard) { _fun00044_ip = 90; continue _fun00043 }
 57:
            verify = report.map;
            oscard = function(argFoo) {
                _fun00045: for(var _fun00046_ip = 0; ; ) switch(_fun00046_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.newValue;
                    entity = null;
                    michal = entity == tangon;
                    entity = undefined;
                    if(michal) { _fun00046_ip = 55; continue _fun00045 }
 20:
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.name;
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.join;
                    michal = ', ';
                    entity = zuuluu.bind(tangon)(michal);
 55:
                    return entity;
                }
            };
            offset = verify.bind(report)(oscard);
            verify = offset.join;
            oscard = ', ';
            golfie = verify.bind(offset)(oscard);
 90:
            verify = entity == zuuluu;
            oscard = undefined;
            if(verify) { _fun00044_ip = 132; continue _fun00043 }
 99:
            verify = zuuluu.map;
            tangon = function(argFoo) {
                _fun00047: for(var _fun00048_ip = 0; ; ) switch(_fun00048_ip) {
 0:
                    entity = argFoo;
                    tangon = entity.newValue;
                    entity = null;
                    michal = entity == tangon;
                    entity = undefined;
                    if(michal) { _fun00048_ip = 55; continue _fun00047 }
 20:
                    zuuluu = tangon.map;
                    michal = function(argFoo) {
                        entity = argFoo;
                        entity = entity.name;
                        return entity;
                    };
                    tangon = zuuluu.bind(tangon)(michal);
                    zuuluu = tangon.join;
                    michal = ', ';
                    entity = zuuluu.bind(tangon)(michal);
 55:
                    return entity;
                }
            };
            offset = verify.bind(zuuluu)(tangon);
            verify = offset.join;
            tangon = ', ';
            oscard = verify.bind(offset)(tangon);
 132:
            verify = report.length;
            tangon = 0;
            if(!(verify > tangon)) { _fun00044_ip = 155; continue _fun00043 }
 143:
            verify = zuuluu.length;
            if(!(!(verify > tangon))) { _fun00044_ip = 312; continue _fun00043 }
 155:
            report = report.length;
            if(!(!(report > tangon))) { _fun00044_ip = 245; continue _fun00043 }
 164:
            zuuluu = zuuluu.length;
            zuuluu = zuuluu > tangon;
            entity = null;
            if(!zuuluu) { _fun00044_ip = 243; continue _fun00043 }
 178:
            tangon = _closure1_slot0;
            offset = _closure1_slot3;
            zuuluu = 17;
            report = offset[zuuluu];
            report = tangon.bind(option)(report);
            verify = report.intl;
            report = verify.formatToPlainString;
            zuuluu = offset[zuuluu];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu.Wk4pAA;
            zuuluu = {};
            zuuluu['roleNames'] = oscard;
            entity = report.bind(verify)(tangon, zuuluu);
 243:
            _fun00044_ip = 310; continue _fun00043;
 245:
            tangon = _closure1_slot0;
            offset = _closure1_slot3;
            zuuluu = 17;
            report = offset[zuuluu];
            report = tangon.bind(option)(report);
            verify = report.intl;
            report = verify.formatToPlainString;
            zuuluu = offset[zuuluu];
            zuuluu = tangon.bind(option)(zuuluu);
            zuuluu = zuuluu.t;
            tangon = zuuluu./mTqt7;
            zuuluu = {};
            zuuluu['roleNames'] = golfie;
            entity = report.bind(verify)(tangon, zuuluu);
 310:
            _fun00044_ip = 386; continue _fun00043;
 312:
            zuuluu = _closure1_slot0;
            verify = _closure1_slot3;
            michal = 17;
            tangon = verify[michal];
            tangon = zuuluu.bind(option)(tangon);
            report = tangon.intl;
            tangon = report.formatToPlainString;
            michal = verify[michal];
            michal = zuuluu.bind(option)(michal);
            michal = michal.t;
            zuuluu = michal.tZw1ER;
            michal = {};
            michal['roleNamesAdded'] = golfie;
            michal['roleNamesRemoved'] = oscard;
            entity = tangon.bind(report)(zuuluu, michal);
 386:
            return entity;
        }
    };
    zuuluu['getSimpleAuditLogChangeDetails'] = report;
    report = function(argFoo) { // Original name: getChangeTitle
        _fun00049: for(var _fun00050_ip = 0; ; ) switch(_fun00050_ip) {
 0:
            report = argFoo;
            zuuluu = report.action;
            michal = _closure1_slot15;
            michal = michal.GUILD_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4775; continue _fun00049 }
 30:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4493; continue _fun00049 }
 47:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4456; continue _fun00049 }
 64:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4419; continue _fun00049 }
 81:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_OVERWRITE_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4382; continue _fun00049 }
 98:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_OVERWRITE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4345; continue _fun00049 }
 115:
            michal = _closure1_slot15;
            michal = michal.CHANNEL_OVERWRITE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4308; continue _fun00049 }
 132:
            michal = _closure1_slot15;
            michal = michal.MEMBER_KICK;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4271; continue _fun00049 }
 149:
            michal = _closure1_slot15;
            michal = michal.MEMBER_PRUNE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4234; continue _fun00049 }
 166:
            michal = _closure1_slot15;
            michal = michal.MEMBER_BAN_ADD;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4197; continue _fun00049 }
 183:
            michal = _closure1_slot15;
            michal = michal.MEMBER_BAN_REMOVE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4160; continue _fun00049 }
 200:
            michal = _closure1_slot15;
            michal = michal.MEMBER_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4123; continue _fun00049 }
 217:
            michal = _closure1_slot15;
            michal = michal.MEMBER_ROLE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4086; continue _fun00049 }
 234:
            michal = _closure1_slot15;
            michal = michal.MEMBER_MOVE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4049; continue _fun00049 }
 251:
            michal = _closure1_slot15;
            michal = michal.MEMBER_DISCONNECT;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4012; continue _fun00049 }
 268:
            michal = _closure1_slot15;
            michal = michal.BOT_ADD;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3975; continue _fun00049 }
 285:
            michal = _closure1_slot15;
            michal = michal.ROLE_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3938; continue _fun00049 }
 302:
            michal = _closure1_slot15;
            michal = michal.ROLE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3901; continue _fun00049 }
 319:
            michal = _closure1_slot15;
            michal = michal.ROLE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3864; continue _fun00049 }
 336:
            michal = _closure1_slot15;
            michal = michal.INVITE_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3827; continue _fun00049 }
 353:
            michal = _closure1_slot15;
            michal = michal.INVITE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3790; continue _fun00049 }
 370:
            michal = _closure1_slot15;
            michal = michal.INVITE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3753; continue _fun00049 }
 387:
            michal = _closure1_slot15;
            michal = michal.WEBHOOK_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3716; continue _fun00049 }
 404:
            michal = _closure1_slot15;
            michal = michal.WEBHOOK_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3679; continue _fun00049 }
 421:
            michal = _closure1_slot15;
            michal = michal.WEBHOOK_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3642; continue _fun00049 }
 438:
            michal = _closure1_slot15;
            michal = michal.EMOJI_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3605; continue _fun00049 }
 455:
            michal = _closure1_slot15;
            michal = michal.EMOJI_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3568; continue _fun00049 }
 472:
            michal = _closure1_slot15;
            michal = michal.EMOJI_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3531; continue _fun00049 }
 489:
            michal = _closure1_slot15;
            michal = michal.STICKER_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3494; continue _fun00049 }
 506:
            michal = _closure1_slot15;
            michal = michal.STICKER_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3457; continue _fun00049 }
 523:
            michal = _closure1_slot15;
            michal = michal.STICKER_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3420; continue _fun00049 }
 540:
            michal = _closure1_slot15;
            michal = michal.MESSAGE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3383; continue _fun00049 }
 557:
            michal = _closure1_slot15;
            michal = michal.MESSAGE_BULK_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3346; continue _fun00049 }
 574:
            michal = _closure1_slot15;
            michal = michal.MESSAGE_PIN;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3309; continue _fun00049 }
 591:
            michal = _closure1_slot15;
            michal = michal.MESSAGE_UNPIN;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3272; continue _fun00049 }
 608:
            michal = _closure1_slot15;
            michal = michal.INTEGRATION_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3235; continue _fun00049 }
 625:
            michal = _closure1_slot15;
            michal = michal.INTEGRATION_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3198; continue _fun00049 }
 642:
            michal = _closure1_slot15;
            michal = michal.INTEGRATION_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3161; continue _fun00049 }
 659:
            michal = _closure1_slot15;
            michal = michal.STAGE_INSTANCE_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3124; continue _fun00049 }
 676:
            michal = _closure1_slot15;
            michal = michal.STAGE_INSTANCE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3087; continue _fun00049 }
 693:
            michal = _closure1_slot15;
            michal = michal.STAGE_INSTANCE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 3002; continue _fun00049 }
 710:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2965; continue _fun00049 }
 727:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2928; continue _fun00049 }
 744:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2891; continue _fun00049 }
 761:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2854; continue _fun00049 }
 778:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2854; continue _fun00049 }
 795:
            michal = _closure1_slot15;
            michal = michal.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2817; continue _fun00049 }
 812:
            michal = _closure1_slot15;
            michal = michal.THREAD_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2589; continue _fun00049 }
 829:
            michal = _closure1_slot15;
            michal = michal.THREAD_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2552; continue _fun00049 }
 846:
            michal = _closure1_slot15;
            michal = michal.THREAD_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2515; continue _fun00049 }
 863:
            michal = _closure1_slot15;
            michal = michal.APPLICATION_COMMAND_PERMISSION_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2478; continue _fun00049 }
 880:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_BLOCK_MESSAGE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2441; continue _fun00049 }
 897:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_FLAG_TO_CHANNEL;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2322; continue _fun00049 }
 914:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_USER_COMMUNICATION_DISABLED;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2285; continue _fun00049 }
 931:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_QUARANTINE_USER;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2248; continue _fun00049 }
 948:
            michal = _closure1_slot15;
            michal = michal.CREATOR_MONETIZATION_REQUEST_CREATED;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2211; continue _fun00049 }
 965:
            michal = _closure1_slot15;
            michal = michal.CREATOR_MONETIZATION_TERMS_ACCEPTED;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2174; continue _fun00049 }
 982:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_RULE_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2137; continue _fun00049 }
 999:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_RULE_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2100; continue _fun00049 }
 1016:
            michal = _closure1_slot15;
            michal = michal.AUTO_MODERATION_RULE_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2063; continue _fun00049 }
 1033:
            michal = _closure1_slot15;
            michal = michal.ONBOARDING_PROMPT_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2026; continue _fun00049 }
 1050:
            michal = _closure1_slot15;
            michal = michal.ONBOARDING_PROMPT_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1989; continue _fun00049 }
 1067:
            michal = _closure1_slot15;
            michal = michal.ONBOARDING_PROMPT_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1952; continue _fun00049 }
 1084:
            michal = _closure1_slot15;
            michal = michal.ONBOARDING_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1915; continue _fun00049 }
 1101:
            michal = _closure1_slot15;
            michal = michal.ONBOARDING_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1878; continue _fun00049 }
 1118:
            michal = _closure1_slot15;
            michal = michal.HOME_SETTINGS_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1841; continue _fun00049 }
 1135:
            michal = _closure1_slot15;
            michal = michal.HOME_SETTINGS_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1804; continue _fun00049 }
 1152:
            michal = _closure1_slot15;
            michal = michal.GUILD_HOME_FEATURE_ITEM;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1542; continue _fun00049 }
 1169:
            michal = _closure1_slot15;
            michal = michal.GUILD_HOME_REMOVE_ITEM;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1505; continue _fun00049 }
 1186:
            michal = _closure1_slot15;
            michal = michal.SOUNDBOARD_SOUND_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1468; continue _fun00049 }
 1203:
            michal = _closure1_slot15;
            michal = michal.SOUNDBOARD_SOUND_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1431; continue _fun00049 }
 1220:
            michal = _closure1_slot15;
            michal = michal.SOUNDBOARD_SOUND_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1394; continue _fun00049 }
 1237:
            michal = _closure1_slot15;
            michal = michal.VOICE_CHANNEL_STATUS_CREATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1357; continue _fun00049 }
 1251:
            michal = _closure1_slot15;
            michal = michal.VOICE_CHANNEL_STATUS_DELETE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1320; continue _fun00049 }
 1265:
            michal = _closure1_slot15;
            michal = michal.GUILD_MEMBER_VERIFICATION_UPDATE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1283; continue _fun00049 }
 1279:
            michal = null;
            return michal;
 1283:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NUKUb2;
            return michal;
 1320:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.aS8Krq;
            return michal;
 1357:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.MWjnU1;
            return michal;
 1394:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.kVz4//;
            return michal;
 1431:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.CM8n19;
            return michal;
 1468:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.0PD83d;
            return michal;
 1505:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.kPReur;
            return michal;
 1542:
            michal = report.changes;
            zuuluu = null;
            oscard = zuuluu != michal;
            michal = null;
            if(!oscard) { _fun00050_ip = 1582; continue _fun00049 }
 1559:
            option = report.changes;
            golfie = option.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure1_slot16;
                entity = entity.ENTITY_TYPE;
                entity = michal === entity;
                return entity;
            };
            michal = golfie.bind(option)(oscard);
 1582:
            if(!(zuuluu != michal)) { _fun00050_ip = 1769; continue _fun00049 }
 1589:
            zuuluu = michal.newValue;
            golfie = _closure1_slot0;
            michal = _closure1_slot3;
            option = 20;
            michal = michal[option];
            oscard = undefined;
            michal = golfie.bind(oscard)(michal);
            michal = michal.GuildFeedItemTypes;
            michal = michal.MESSAGE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1734; continue _fun00049 }
 1633:
            golfie = _closure1_slot0;
            michal = _closure1_slot3;
            michal = michal[option];
            michal = golfie.bind(oscard)(michal);
            michal = michal.GuildFeedItemTypes;
            michal = michal.FORUM_POST;
            if(!(michal !== zuuluu)) { _fun00050_ip = 1699; continue _fun00049 }
 1666:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            michal = golfie[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.UZ+U3N;
            return michal;
 1699:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            michal = golfie[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.hCuAb2;
            return michal;
 1734:
            zuuluu = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            michal = golfie[michal];
            michal = zuuluu.bind(oscard)(michal);
            michal = michal.t;
            michal = michal.PyEa+P;
            return michal;
 1769:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.UZ+U3N;
            return michal;
 1804:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.XHE8qq;
            return michal;
 1841:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.dSdCjI;
            return michal;
 1878:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.yONu/v;
            return michal;
 1915:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.wDaq39;
            return michal;
 1952:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.IuBTam;
            return michal;
 1989:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ArIrWF;
            return michal;
 2026:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal./8A1g4;
            return michal;
 2063:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.umua3t;
            return michal;
 2100:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.3wEA9v;
            return michal;
 2137:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NKljj4;
            return michal;
 2174:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ryGLk5;
            return michal;
 2211:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ONvWys;
            return michal;
 2248:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal./W5u5u;
            return michal;
 2285:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.Vk4Twc;
            return michal;
 2322:
            michal = report.options;
            zuuluu = null;
            oscard = zuuluu == michal;
            golfie = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00050_ip = 2348; continue _fun00049 }
 2340:
            zuuluu = michal.auto_moderation_rule_trigger_type;
 2348:
            michal = _closure1_slot30;
            oscard = michal.USER_PROFILE;
            michal = oscard.toString;
            michal = michal.bind(oscard)();
            if(!(zuuluu !== michal)) { _fun00050_ip = 2406; continue _fun00049 }
 2371:
            zuuluu = _closure1_slot0;
            oscard = _closure1_slot3;
            michal = 17;
            michal = oscard[michal];
            michal = zuuluu.bind(golfie)(michal);
            michal = michal.t;
            michal = michal.SD0PwM;
            _fun00050_ip = 2439; continue _fun00049;
 2406:
            oscard = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            zuuluu = option[zuuluu];
            zuuluu = oscard.bind(golfie)(zuuluu);
            zuuluu = zuuluu.t;
            michal = zuuluu.YQsjen;
 2439:
            return michal;
 2441:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NqWv2N;
            return michal;
 2478:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.uzCqBg;
            return michal;
 2515:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.s3Khn5;
            return michal;
 2552:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.PSsy4u;
            return michal;
 2589:
            michal = report.changes;
            zuuluu = null;
            oscard = zuuluu != michal;
            michal = null;
            if(!oscard) { _fun00050_ip = 2629; continue _fun00049 }
 2606:
            option = report.changes;
            golfie = option.find;
            oscard = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure1_slot16;
                entity = entity.TYPE;
                entity = michal === entity;
                return entity;
            };
            michal = golfie.bind(option)(oscard);
 2629:
            if(!(zuuluu != michal)) { _fun00050_ip = 2781; continue _fun00049 }
 2636:
            zuuluu = michal.newValue;
            michal = _closure1_slot22;
            michal = michal.PRIVATE_THREAD;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2744; continue _fun00049 }
 2656:
            michal = _closure1_slot22;
            michal = michal.ANNOUNCEMENT_THREAD;
            if(!(michal !== zuuluu)) { _fun00050_ip = 2707; continue _fun00049 }
 2670:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.2cxQ7O;
            return michal;
 2707:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.6uaMmJ;
            return michal;
 2744:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.Br0y5+;
            return michal;
 2781:
            michal = global;
            oscard = michal.Error;
            michal = oscard.prototype;
            zuuluu = Object.create(michal, {constructor: {value: oscard}});
            verify = '[AuditLog] Could not find type change for thread create';
            offset = zuuluu;
            michal = new offset[oscard](verify, option);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 2817:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.zYb2dX;
            return michal;
 2854:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.8qCI39;
            return michal;
 2891:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal./ARPKS;
            return michal;
 2928:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ebTK19;
            return michal;
 2965:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.S7k52t;
            return michal;
 3002:
            zuuluu = report.userId;
            michal = null;
            if(!(michal == zuuluu)) { _fun00050_ip = 3050; continue _fun00049 }
 3013:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.7ZIFm5;
            _fun00050_ip = 3085; continue _fun00049;
 3050:
            golfie = _closure1_slot0;
            oscard = _closure1_slot3;
            zuuluu = 17;
            oscard = oscard[zuuluu];
            zuuluu = undefined;
            zuuluu = golfie.bind(zuuluu)(oscard);
            zuuluu = zuuluu.t;
            michal = zuuluu.Oi/in5;
 3085:
            return michal;
 3087:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.0hQYU1;
            return michal;
 3124:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.n7x/DA;
            return michal;
 3161:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.8zScWV;
            return michal;
 3198:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ibCCOT;
            return michal;
 3235:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.HYvCb2;
            return michal;
 3272:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NCxXUV;
            return michal;
 3309:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.Yna7Ex;
            return michal;
 3346:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.3RIvLC;
            return michal;
 3383:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.HPkD+P;
            return michal;
 3420:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.rGEP9f;
            return michal;
 3457:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.bhujGR;
            return michal;
 3494:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.DRZifn;
            return michal;
 3531:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.JnUaVF;
            return michal;
 3568:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.IsCKfn;
            return michal;
 3605:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.7vekRE;
            return michal;
 3642:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.in0VjY;
            return michal;
 3679:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.6GTlWF;
            return michal;
 3716:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.MhYhio;
            return michal;
 3753:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.3n/iWl;
            return michal;
 3790:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ja3kGR;
            return michal;
 3827:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.YHOXW1;
            return michal;
 3864:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.4s63tb;
            return michal;
 3901:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NRbN19;
            return michal;
 3938:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.UTLTx8;
            return michal;
 3975:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.fWvX0N;
            return michal;
 4012:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.K4eCZ2;
            return michal;
 4049:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.Yt6NkZ;
            return michal;
 4086:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.VngfiY;
            return michal;
 4123:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.pznhLC;
            return michal;
 4160:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.o3Y6HB;
            return michal;
 4197:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.XklUm5;
            return michal;
 4234:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.qKOZTE;
            return michal;
 4271:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.B5hDZW;
            return michal;
 4308:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.HASt//;
            return michal;
 4345:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.uhtbNT;
            return michal;
 4382:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.l5Cu1d;
            return michal;
 4419:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.ynfvkp;
            return michal;
 4456:
            oscard = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = oscard.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.nTYk6O;
            return michal;
 4493:
            michal = report.changes;
            zuuluu = null;
            oscard = zuuluu != michal;
            michal = null;
            if(!oscard) { _fun00050_ip = 4533; continue _fun00049 }
 4510:
            oscard = report.changes;
            report = oscard.find;
            tangon = function(argFoo) {
                entity = argFoo;
                michal = entity.key;
                entity = _closure1_slot16;
                entity = entity.TYPE;
                entity = michal === entity;
                return entity;
            };
            michal = report.bind(oscard)(tangon);
 4533:
            if(!(zuuluu != michal)) { _fun00050_ip = 4739; continue _fun00049 }
 4540:
            zuuluu = michal.newValue;
            michal = _closure1_slot22;
            michal = michal.GUILD_STAGE_VOICE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4702; continue _fun00049 }
 4563:
            michal = _closure1_slot22;
            michal = michal.GUILD_VOICE;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4665; continue _fun00049 }
 4577:
            michal = _closure1_slot22;
            michal = michal.GUILD_CATEGORY;
            if(!(michal !== zuuluu)) { _fun00050_ip = 4628; continue _fun00049 }
 4591:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.wrYNGx;
            return michal;
 4628:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.T3KIj4;
            return michal;
 4665:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.NPOy4O;
            return michal;
 4702:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot3;
            michal = 17;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.t;
            michal = michal.OKp4+v;
            return michal;
 4739:
            michal = global;
            tangon = michal.Error;
            michal = tangon.prototype;
            zuuluu = Object.create(michal, {constructor: {value: tangon}});
            verify = '[AuditLog] Could not find type change for channel create';
            offset = zuuluu;
            michal = new offset[tangon](verify, option);
            michal = michal instanceof Object ? michal : zuuluu;
            throw michal;
 4775:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot3;
            entity = 17;
            michal = michal[entity];
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            entity = entity.t;
            entity = entity.LjZO39;
            return entity;
        }
    };
    zuuluu['getChangeTitle'] = report;
    report = function(argFoo) { // Original name: getStringForAddedChannelFlag
        _fun00051: for(var _fun00052_ip = 0; ; ) switch(_fun00052_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot29;
            michal = michal.GUILD_FEED_REMOVED;
            if(!(michal !== zuuluu)) { _fun00052_ip = 177; continue _fun00051 }
 23:
            michal = _closure1_slot29;
            michal = michal.ACTIVE_CHANNELS_REMOVED;
            if(!(michal !== zuuluu)) { _fun00052_ip = 116; continue _fun00051 }
 37:
            michal = _closure1_slot29;
            michal = michal.PINNED;
            if(!(michal !== zuuluu)) { _fun00052_ip = 55; continue _fun00051 }
 51:
            michal = null;
            return michal;
 55:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.1QLRYW;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 116:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.4YLtzM;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 177:
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 17;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.5G8ZDw;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getStringForAddedChannelFlag'] = report;
    report = function(argFoo) { // Original name: getStringForRemovedChannelFlag
        _fun00053: for(var _fun00054_ip = 0; ; ) switch(_fun00054_ip) {
 0:
            zuuluu = argFoo;
            michal = _closure1_slot29;
            michal = michal.GUILD_FEED_REMOVED;
            if(!(michal !== zuuluu)) { _fun00054_ip = 177; continue _fun00053 }
 23:
            michal = _closure1_slot29;
            michal = michal.ACTIVE_CHANNELS_REMOVED;
            if(!(michal !== zuuluu)) { _fun00054_ip = 116; continue _fun00053 }
 37:
            michal = _closure1_slot29;
            michal = michal.PINNED;
            if(!(michal !== zuuluu)) { _fun00054_ip = 55; continue _fun00053 }
 51:
            michal = null;
            return michal;
 55:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.CMweGB;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 116:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.8qpgc3;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 177:
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 17;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.S5kuWV;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getStringForRemovedChannelFlag'] = report;
    report = function(argFoo, argBar) { // Original name: getStringForPermission
        _fun00055: for(var _fun00056_ip = 0; ; ) switch(_fun00056_ip) {
 0:
            tangon = argFoo;
            michal = argBar;
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CREATE_INSTANT_INVITE;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3718; continue _fun00055 }
 26:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.KICK_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3659; continue _fun00055 }
 43:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.BAN_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3600; continue _fun00055 }
 60:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.ADMINISTRATOR;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3541; continue _fun00055 }
 77:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_CHANNELS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3383; continue _fun00055 }
 94:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_GUILD;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3324; continue _fun00055 }
 111:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.VIEW_GUILD_ANALYTICS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3265; continue _fun00055 }
 128:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.VIEW_CREATOR_MONETIZATION_ANALYTICS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3206; continue _fun00055 }
 145:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CHANGE_NICKNAME;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3147; continue _fun00055 }
 162:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_NICKNAMES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3088; continue _fun00055 }
 179:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_ROLES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 3029; continue _fun00055 }
 196:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_WEBHOOKS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2970; continue _fun00055 }
 213:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CREATE_GUILD_EXPRESSIONS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2911; continue _fun00055 }
 230:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_GUILD_EXPRESSIONS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2852; continue _fun00055 }
 247:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.VIEW_AUDIT_LOG;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2793; continue _fun00055 }
 264:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.VIEW_CHANNEL;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2635; continue _fun00055 }
 281:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SEND_MESSAGES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2576; continue _fun00055 }
 298:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SEND_TTS_MESSAGES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2517; continue _fun00055 }
 315:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_APPLICATION_COMMANDS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2458; continue _fun00055 }
 332:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_MESSAGES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2399; continue _fun00055 }
 349:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.EMBED_LINKS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2340; continue _fun00055 }
 366:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.ATTACH_FILES;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2281; continue _fun00055 }
 383:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.READ_MESSAGE_HISTORY;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2222; continue _fun00055 }
 400:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MENTION_EVERYONE;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2163; continue _fun00055 }
 417:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_EXTERNAL_EMOJIS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2104; continue _fun00055 }
 434:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_EXTERNAL_STICKERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 2045; continue _fun00055 }
 451:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.ADD_REACTIONS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1986; continue _fun00055 }
 468:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CONNECT;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1927; continue _fun00055 }
 485:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SPEAK;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1868; continue _fun00055 }
 502:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MUTE_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1809; continue _fun00055 }
 519:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.DEAFEN_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1750; continue _fun00055 }
 536:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MOVE_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1691; continue _fun00055 }
 553:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_VAD;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1632; continue _fun00055 }
 570:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.PRIORITY_SPEAKER;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1573; continue _fun00055 }
 587:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.STREAM;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1514; continue _fun00055 }
 604:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.REQUEST_TO_SPEAK;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1455; continue _fun00055 }
 621:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CREATE_EVENTS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1396; continue _fun00055 }
 638:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_EVENTS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1337; continue _fun00055 }
 655:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CREATE_PUBLIC_THREADS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1278; continue _fun00055 }
 672:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.CREATE_PRIVATE_THREADS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1219; continue _fun00055 }
 689:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SEND_MESSAGES_IN_THREADS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1160; continue _fun00055 }
 706:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MANAGE_THREADS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1101; continue _fun00055 }
 723:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.MODERATE_MEMBERS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 1042; continue _fun00055 }
 740:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_CLYDE_AI;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 983; continue _fun00055 }
 757:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SET_VOICE_CHANNEL_STATUS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 924; continue _fun00055 }
 774:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.SEND_POLLS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 865; continue _fun00055 }
 788:
            zuuluu = _closure1_slot23;
            zuuluu = zuuluu.USE_EXTERNAL_APPS;
            if(!(zuuluu !== tangon)) { _fun00056_ip = 806; continue _fun00055 }
 802:
            zuuluu = null;
            return zuuluu;
 806:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.TtA5rK;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 865:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.UMQ7W1;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 924:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.VBwkUV;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 983:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.8eeEZm;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1042:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.+RL6p6;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1101:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.kEqgr6;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1160:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.fTE74u;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1219:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.QwbTSU;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1278:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.25rKnZ;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1337:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.HIgA5e;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1396:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.qyjZub;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1455:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.5kicT0;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1514:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.FlNoSU;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1573:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BVK71t;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1632:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.08zAV1;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1691:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.YtjJPT;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1750:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.9L47Fh;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1809:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.8EI309;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1868:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.8w1tIS;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1927:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.S0W8Z2;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 1986:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.yEoJAg;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2045:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.UeRs+f;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2104:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.BpBGZW;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2163:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.Y78KGB;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2222:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.l9ufaW;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2281:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.3AS4UF;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2340:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.969dEB;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2399:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.6lU9xM;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2458:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.shbR1d;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2517:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.Mg7bkp;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2576:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.T32rkJ;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2635:
            tangon = michal.targetType;
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00056_ip = 2734; continue _fun00055 }
 2655:
            tangon = michal.targetType;
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.CHANNEL_OVERWRITE;
            if(!(tangon !== zuuluu)) { _fun00056_ip = 2734; continue _fun00055 }
 2675:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.uV83ys;
            zuuluu = tangon.bind(report)(zuuluu);
            _fun00056_ip = 2791; continue _fun00055;
 2734:
            option = _closure1_slot0;
            verify = _closure1_slot3;
            tangon = 17;
            report = verify[tangon];
            golfie = undefined;
            report = option.bind(golfie)(report);
            oscard = report.intl;
            report = oscard.string;
            tangon = verify[tangon];
            tangon = option.bind(golfie)(tangon);
            tangon = tangon.t;
            tangon = tangon.W/A4Qk;
            zuuluu = report.bind(oscard)(tangon);
 2791:
            return zuuluu;
 2793:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.fZgLpK;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2852:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.bbuXIi;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2911:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.HarVuL;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 2970:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu./ADKmJ;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3029:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.C8d+oK;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3088:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.t+Ct5+;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3147:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.dilOFx;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3206:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.0lTLTk;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3265:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.rQJBEx;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3324:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.QZRcfH;
            zuuluu = tangon.bind(report)(zuuluu);
            return zuuluu;
 3383:
            tangon = michal.targetType;
            zuuluu = _closure1_slot17;
            zuuluu = zuuluu.CHANNEL;
            if(!(tangon !== zuuluu)) { _fun00056_ip = 3482; continue _fun00055 }
 3403:
            zuuluu = michal.targetType;
            michal = _closure1_slot17;
            michal = michal.CHANNEL_OVERWRITE;
            if(!(zuuluu !== michal)) { _fun00056_ip = 3482; continue _fun00055 }
 3423:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.9qLtWl;
            michal = zuuluu.bind(tangon)(michal);
            _fun00056_ip = 3539; continue _fun00055;
 3482:
            golfie = _closure1_slot0;
            option = _closure1_slot3;
            zuuluu = 17;
            tangon = option[zuuluu];
            oscard = undefined;
            tangon = golfie.bind(oscard)(tangon);
            report = tangon.intl;
            tangon = report.string;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.t;
            zuuluu = zuuluu.nAw15O;
            michal = tangon.bind(report)(zuuluu);
 3539:
            return michal;
 3541:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.PGvZqa;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 3600:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.oTBA7O;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 3659:
            oscard = _closure1_slot0;
            golfie = _closure1_slot3;
            michal = 17;
            zuuluu = golfie[michal];
            report = undefined;
            zuuluu = oscard.bind(report)(zuuluu);
            tangon = zuuluu.intl;
            zuuluu = tangon.string;
            michal = golfie[michal];
            michal = oscard.bind(report)(michal);
            michal = michal.t;
            michal = michal.pBNv6u;
            michal = zuuluu.bind(tangon)(michal);
            return michal;
 3718:
            report = _closure1_slot0;
            oscard = _closure1_slot3;
            entity = 17;
            michal = oscard[entity];
            tangon = undefined;
            michal = report.bind(tangon)(michal);
            zuuluu = michal.intl;
            michal = zuuluu.string;
            entity = oscard[entity];
            entity = report.bind(tangon)(entity);
            entity = entity.t;
            entity = entity.zJrgTE;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        }
    };
    zuuluu['getStringForPermission'] = report;
    tangon = function(argFoo, argBar) { // Original name: transformLogs
        tangon = argFoo;
        entity = argBar;
        var _closure2_slot0 = entity;
        entity = new Array(0);
        var _closure2_slot1 = entity;
        zuuluu = tangon.forEach;
        michal = function(argFoo) {
            _fun00057: for(var _fun00058_ip = 0; ; ) switch(_fun00058_ip) {
 0:
                verify = argFoo;
                var _closure3_slot0 = verify;
                tangon = _closure2_slot0;
                zuuluu = function(argFoo, argBar) { // Original name: transformTarget
                    _fun00059: for(var _fun00060_ip = 0; ; ) switch(_fun00060_ip) {
 0:
                        golfie = argFoo;
                        entity = argBar;
                        var _closure4_slot0 = golfie;
                        var _closure4_slot1 = entity;
                        report = golfie.targetType;
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD;
                        if(!(tangon !== report)) { _fun00060_ip = 1227; continue _fun00059 }
 42:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_HOME;
                        if(!(tangon !== report)) { _fun00060_ip = 1227; continue _fun00059 }
 59:
                        tangon = _closure1_slot17;
                        tangon = tangon.CHANNEL;
                        if(!(tangon !== report)) { _fun00060_ip = 1188; continue _fun00059 }
 76:
                        tangon = _closure1_slot17;
                        tangon = tangon.CHANNEL_OVERWRITE;
                        if(!(tangon !== report)) { _fun00060_ip = 1188; continue _fun00059 }
 93:
                        tangon = _closure1_slot17;
                        tangon = tangon.USER;
                        if(!(tangon !== report)) { _fun00060_ip = 1149; continue _fun00059 }
 110:
                        tangon = _closure1_slot17;
                        tangon = tangon.ROLE;
                        if(!(tangon !== report)) { _fun00060_ip = 1110; continue _fun00059 }
 127:
                        tangon = _closure1_slot17;
                        tangon = tangon.ONBOARDING_PROMPT;
                        if(!(tangon !== report)) { _fun00060_ip = 998; continue _fun00059 }
 144:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_ONBOARDING;
                        if(!(tangon !== report)) { _fun00060_ip = 996; continue _fun00059 }
 161:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_MEMBER_VERIFICATION;
                        if(!(tangon !== report)) { _fun00060_ip = 996; continue _fun00059 }
 178:
                        tangon = _closure1_slot17;
                        tangon = tangon.INVITE;
                        if(!(tangon !== report)) { _fun00060_ip = 967; continue _fun00059 }
 195:
                        tangon = _closure1_slot17;
                        tangon = tangon.INTEGRATION;
                        if(!(tangon !== report)) { _fun00060_ip = 928; continue _fun00059 }
 212:
                        tangon = _closure1_slot17;
                        tangon = tangon.WEBHOOK;
                        if(!(tangon !== report)) { _fun00060_ip = 889; continue _fun00059 }
 229:
                        tangon = _closure1_slot17;
                        tangon = tangon.EMOJI;
                        if(!(tangon !== report)) { _fun00060_ip = 850; continue _fun00059 }
 246:
                        tangon = _closure1_slot17;
                        tangon = tangon.STICKER;
                        if(!(tangon !== report)) { _fun00060_ip = 811; continue _fun00059 }
 263:
                        tangon = _closure1_slot17;
                        tangon = tangon.STAGE_INSTANCE;
                        if(!(tangon !== report)) { _fun00060_ip = 772; continue _fun00059 }
 280:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_SCHEDULED_EVENT;
                        if(!(tangon !== report)) { _fun00060_ip = 733; continue _fun00059 }
 297:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_SCHEDULED_EVENT_EXCEPTION;
                        if(!(tangon !== report)) { _fun00060_ip = 733; continue _fun00059 }
 314:
                        tangon = _closure1_slot17;
                        tangon = tangon.THREAD;
                        if(!(tangon !== report)) { _fun00060_ip = 694; continue _fun00059 }
 331:
                        tangon = _closure1_slot17;
                        tangon = tangon.APPLICATION_COMMAND;
                        if(!(tangon !== report)) { _fun00060_ip = 586; continue _fun00059 }
 348:
                        tangon = _closure1_slot17;
                        tangon = tangon.AUTO_MODERATION_RULE;
                        if(!(tangon !== report)) { _fun00060_ip = 547; continue _fun00059 }
 365:
                        tangon = _closure1_slot17;
                        tangon = tangon.GUILD_SOUNDBOARD;
                        if(!(tangon !== report)) { _fun00060_ip = 518; continue _fun00059 }
 382:
                        tangon = _closure1_slot17;
                        tangon = tangon.HOME_SETTINGS;
                        if(!(tangon !== report)) { _fun00060_ip = 474; continue _fun00059 }
 396:
                        tangon = _closure1_slot17;
                        tangon = tangon.VOICE_CHANNEL_STATUS;
                        if(!(tangon !== report)) { _fun00060_ip = 435; continue _fun00059 }
 410:
                        oscard = _closure1_slot34;
                        report = oscard.warn;
                        tangon = 'Unknown targetType for log';
                        tangon = report.bind(oscard)(tangon, golfie);
                        tangon = null;
                        return tangon;
 435:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.STATUS;
                        output = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot10;
                            michal = zuuluu.getChannel;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            michal = 23;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            oscard = tangon.bind(michal)(zuuluu);
                            report = oscard.computeChannelName;
                            verify = _closure1_slot13;
                            option = _closure1_slot12;
                            offset = argFoo;
                            golfie = true;
                            yankee = oscard;
                            entity = yankee[report](offset, verify, option, golfie, oscard);
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 474:
                        offset = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.GUILD_ID;
                        romeon = entity.id;
                        output = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot6;
                            michal = zuuluu.getSettings;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function() {
                            report = _closure1_slot0;
                            oscard = _closure1_slot3;
                            entity = 17;
                            michal = oscard[entity];
                            tangon = undefined;
                            michal = report.bind(tangon)(michal);
                            zuuluu = michal.intl;
                            michal = zuuluu.string;
                            entity = oscard[entity];
                            entity = report.bind(tangon)(entity);
                            entity = entity.t;
                            entity = entity.VbpLyc;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[offset](sizing, kiloes, backup, foxtra, romeon, yankee);
                        return tangon;
 518:
                        option = _closure1_slot45;
                        tangon = _closure1_slot16;
                        oscard = tangon.NAME;
                        report = _closure1_slot24;
                        tangon = undefined;
                        tangon = option.bind(tangon)(golfie, oscard, report);
                        return tangon;
 547:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.automodRules;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 586:
                        report = golfie.targetId;
                        tangon = golfie.options;
                        tangon = tangon.application_id;
                        if(!(report !== tangon)) { _fun00060_ip = 646; continue _fun00059 }
 607:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.applicationCommands;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            _fun00061: for(var _fun00062_ip = 0; ; ) switch(_fun00062_ip) {
 0:
                                entity = argFoo;
                                zuuluu = entity.name_localized;
                                michal = null;
                                if(!(michal != zuuluu)) { _fun00062_ip = 29; continue _fun00061 }
 15:
                                zuuluu = entity.name_localized;
                                michal = '';
                                if(!(michal === zuuluu)) { _fun00062_ip = 36; continue _fun00061 }
 29:
                                tangon = entity.name;
                                _fun00062_ip = 42; continue _fun00061;
 36:
                                tangon = entity.name_localized;
 42:
                                zuuluu = entity.type;
                                report = _closure1_slot0;
                                michal = _closure1_slot3;
                                entity = 24;
                                michal = michal[entity];
                                entity = undefined;
                                entity = report.bind(entity)(michal);
                                entity = entity.ApplicationCommandType;
                                michal = entity.CHAT;
                                entity = tangon;
                                if(!(zuuluu === michal)) { _fun00062_ip = 115; continue _fun00061 }
 91:
                                michal = global;
                                michal = michal.HermesInternal;
                                zuuluu = michal.concat;
                                michal = '/\u2060';
                                entity = zuuluu.bind(michal)(tangon);
 115:
                                return entity;
                            }
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 646:
                        tangon = _closure1_slot14;
                        oscard = tangon.integrations;
                        report = oscard.find;
                        tangon = function(argFoo) {
                            _fun00063: for(var _fun00064_ip = 0; ; ) switch(_fun00064_ip) {
 0:
                                entity = argFoo;
                                entity = entity.application;
                                michal = null;
                                zuuluu = michal == entity;
                                michal = undefined;
                                if(zuuluu) { _fun00064_ip = 24; continue _fun00063 }
 19:
                                michal = entity.id;
 24:
                                entity = _closure4_slot0;
                                entity = entity.targetId;
                                entity = michal === entity;
                                return entity;
                            }
                        };
                        report = report.bind(oscard)(tangon);
                        tangon = null;
                        if(!(tangon == report)) { _fun00060_ip = 687; continue _fun00059 }
 679:
                        tangon = golfie.targetId;
                        _fun00060_ip = 692; continue _fun00059;
 687:
                        tangon = report.name;
 692:
                        return tangon;
 694:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.threads;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 733:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.guildScheduledEvents;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 772:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.TOPIC;
                        output = undefined;
                        backup = function(argFoo) {
                            _fun00065: for(var _fun00066_ip = 0; ; ) switch(_fun00066_ip) {
 0:
                                entity = argFoo;
                                var _closure5_slot0 = entity;
                                entity = global;
                                tangon = entity.Object;
                                zuuluu = tangon.values;
                                oscard = _closure1_slot7;
                                report = oscard.getStageInstancesByGuild;
                                entity = _closure4_slot1;
                                entity = entity.id;
                                entity = report.bind(oscard)(entity);
                                tangon = zuuluu.bind(tangon)(entity);
                                entity = null;
                                zuuluu = entity == tangon;
                                entity = undefined;
                                if(zuuluu) { _fun00066_ip = 85; continue _fun00065 }
 68:
                                zuuluu = tangon.find;
                                michal = function(argFoo) {
                                    entity = argFoo;
                                    michal = entity.id;
                                    entity = _closure5_slot0;
                                    entity = michal === entity;
                                    return entity;
                                };
                                entity = zuuluu.bind(tangon)(michal);
 85:
                                return entity;
                            }
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.topic;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 811:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot8;
                            michal = zuuluu.getStickerById;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 850:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            tangon = _closure1_slot4;
                            zuuluu = tangon.getGuildEmoji;
                            michal = _closure4_slot1;
                            michal = michal.id;
                            zuuluu = zuuluu.bind(tangon)(michal);
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 889:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.webhooks;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 928:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.TYPE;
                        output = undefined;
                        backup = function(argFoo) {
                            michal = argFoo;
                            var _closure5_slot0 = michal;
                            michal = _closure1_slot14;
                            zuuluu = michal.integrations;
                            michal = zuuluu.find;
                            entity = function(argFoo) {
                                entity = argFoo;
                                michal = entity.id;
                                entity = _closure5_slot0;
                                entity = michal === entity;
                                return entity;
                            };
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 967:
                        option = _closure1_slot45;
                        tangon = _closure1_slot16;
                        oscard = tangon.CODE;
                        report = _closure1_slot24;
                        tangon = undefined;
                        tangon = option.bind(tangon)(golfie, oscard, report);
                        return tangon;
 996:
                        return entity;
 998:
                        option = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.ID;
                        offset = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot5;
                            michal = zuuluu.getOnboardingPrompt;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.title;
                            return entity;
                        };
                        output = undefined;
                        sizing = golfie;
                        tangon = output[option](sizing, kiloes, backup, foxtra, romeon);
                        report = null;
                        if(!(report != tangon)) { _fun00060_ip = 1051; continue _fun00059 }
 1043:
                        report = '';
                        if(!(report === tangon)) { _fun00060_ip = 1108; continue _fun00059 }
 1051:
                        verify = _closure1_slot0;
                        yankee = _closure1_slot3;
                        report = 17;
                        oscard = yankee[report];
                        oscard = verify.bind(offset)(oscard);
                        option = oscard.intl;
                        oscard = option.string;
                        report = yankee[report];
                        report = verify.bind(offset)(report);
                        report = report.t;
                        report = report.ZNQyiY;
                        tangon = oscard.bind(option)(report);
 1108:
                        return tangon;
 1110:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            tangon = _closure1_slot11;
                            zuuluu = tangon.getRole;
                            entity = _closure4_slot1;
                            michal = entity.id;
                            entity = argFoo;
                            entity = zuuluu.bind(tangon)(michal, entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            entity = entity.name;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 1149:
                        verify = _closure1_slot45;
                        tangon = _closure1_slot16;
                        kiloes = tangon.NICK;
                        output = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot13;
                            michal = zuuluu.getUser;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            return entity;
                        };
                        sizing = golfie;
                        tangon = output[verify](sizing, kiloes, backup, foxtra, romeon);
                        return tangon;
 1188:
                        oscard = _closure1_slot45;
                        zuuluu = _closure1_slot16;
                        kiloes = zuuluu.NAME;
                        output = undefined;
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot10;
                            michal = zuuluu.getChannel;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            tangon = _closure1_slot0;
                            zuuluu = _closure1_slot3;
                            michal = 23;
                            zuuluu = zuuluu[michal];
                            michal = undefined;
                            oscard = tangon.bind(michal)(zuuluu);
                            report = oscard.computeChannelName;
                            verify = _closure1_slot13;
                            option = _closure1_slot12;
                            offset = argFoo;
                            golfie = true;
                            yankee = oscard;
                            entity = yankee[report](offset, verify, option, golfie, oscard);
                            return entity;
                        };
                        sizing = golfie;
                        michal = output[oscard](sizing, kiloes, backup, foxtra, romeon);
                        return michal;
 1227:
                        return entity;
                    }
                };
                entity = undefined;
                option = zuuluu.bind(entity)(verify, tangon);
                golfie = _closure1_slot13;
                oscard = golfie.getUser;
                tangon = verify.userId;
                golfie = oscard.bind(golfie)(tangon);
                oscard = null;
                if(!(oscard == option)) { _fun00058_ip = 139; continue _fun00057 }
 60:
                zuuluu = _closure1_slot15;
                tangon = zuuluu.MEMBER_PRUNE;
                offset = new Array(5);
                offset[0] = tangon;
                tangon = zuuluu.MEMBER_DISCONNECT;
                offset[1] = tangon;
                tangon = zuuluu.MEMBER_MOVE;
                offset[2] = tangon;
                tangon = zuuluu.CREATOR_MONETIZATION_REQUEST_CREATED;
                offset[3] = tangon;
                zuuluu = zuuluu.CREATOR_MONETIZATION_TERMS_ACCEPTED;
                offset[4] = zuuluu;
                tangon = offset.includes;
                zuuluu = verify.action;
                zuuluu = tangon.bind(offset)(zuuluu);
                if(!zuuluu) { _fun00058_ip = 288; continue _fun00057 }
 139:
                tangon = verify.set;
                zuuluu = 'user';
                golfie = tangon.bind(verify)(zuuluu, golfie);
                _closure3_slot0 = golfie;
                tangon = golfie.set;
                zuuluu = 'target';
                option = tangon.bind(golfie)(zuuluu, option);
                _closure3_slot0 = option;
                golfie = option.set;
                zuuluu = function(argFoo) { // Original name: transformOptions
                    _fun00067: for(var _fun00068_ip = 0; ; ) switch(_fun00068_ip) {
 0:
                        report = argFoo;
                        var _closure4_slot0 = report;
                        entity = report.options;
                        michal = null;
                        if(!(michal == entity)) { _fun00068_ip = 27; continue _fun00067 }
 20:
                        entity = report.options;
                        return entity;
 27:
                        entity = {};
                        kiloes = report.options;
                        sizing = entity;
                        zuuluu = copyDataProperties(sizing, kiloes);
                        zuuluu = report.options;
                        golfie = zuuluu.type;
                        oscard = _closure1_slot27;
                        oscard = oscard.USER;
                        if(!(oscard !== golfie)) { _fun00068_ip = 119; continue _fun00067 }
 68:
                        oscard = _closure1_slot27;
                        oscard = oscard.ROLE;
                        if(!(oscard === golfie)) { _fun00068_ip = 162; continue _fun00067 }
 82:
                        verify = _closure1_slot46;
                        oscard = report.options;
                        option = oscard.role_name;
                        golfie = _closure1_slot24;
                        oscard = undefined;
                        oscard = verify.bind(oscard)(option, golfie);
                        entity['subtarget'] = oscard;
                        _fun00068_ip = 162; continue _fun00067;
 119:
                        offset = _closure1_slot46;
                        oscard = report.options;
                        verify = oscard.id;
                        option = undefined;
                        golfie = function(argFoo) {
                            zuuluu = _closure1_slot13;
                            michal = zuuluu.getUser;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        oscard = function(argFoo) {
                            entity = argFoo;
                            entity = entity.tag;
                            return entity;
                        };
                        oscard = offset.bind(option)(verify, golfie, oscard);
                        entity['subtarget'] = oscard;
 162:
                        oscard = report.options;
                        oscard = oscard.channel_id;
                        if(!(michal != oscard)) { _fun00068_ip = 223; continue _fun00067 }
 176:
                        yankee = _closure1_slot45;
                        oscard = report.options;
                        romeon = oscard.channel_id;
                        output = undefined;
                        kiloes = '';
                        backup = function(argFoo) {
                            zuuluu = _closure1_slot10;
                            michal = zuuluu.getChannel;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        foxtra = function(argFoo) {
                            entity = argFoo;
                            return entity;
                        };
                        sizing = report;
                        oscard = output[yankee](sizing, kiloes, backup, foxtra, romeon, yankee);
                        entity['channel'] = oscard;
 223:
                        oscard = report.options;
                        oscard = oscard.members_removed;
                        oscard = michal != oscard;
                        if(!oscard) { _fun00068_ip = 258; continue _fun00067 }
 241:
                        golfie = report.options;
                        option = golfie.members_removed;
                        golfie = 0;
                        oscard = golfie !== option;
 258:
                        if(!oscard) { _fun00068_ip = 278; continue _fun00067 }
 261:
                        oscard = report.options;
                        oscard = oscard.members_removed;
                        entity['count'] = oscard;
 278:
                        report = report.options;
                        report = report.event_exception_id;
                        if(!(michal != report)) { _fun00068_ip = 474; continue _fun00067 }
 296:
                        report = _closure1_slot14;
                        golfie = report.guildScheduledEvents;
                        oscard = golfie.find;
                        report = function(argFoo) {
                            entity = argFoo;
                            michal = entity.id;
                            entity = _closure4_slot0;
                            entity = entity.targetId;
                            entity = michal === entity;
                            return entity;
                        };
                        report = oscard.bind(golfie)(report);
                        golfie = michal == report;
                        oscard = undefined;
                        offset = undefined;
                        if(golfie) { _fun00068_ip = 357; continue _fun00067 }
 334:
                        golfie = report.guild_scheduled_event_exceptions;
                        report = golfie.find;
                        tangon = function(argFoo) {
                            entity = argFoo;
                            michal = entity.event_exception_id;
                            entity = _closure4_slot0;
                            entity = entity.options;
                            entity = entity.event_exception_id;
                            entity = michal === entity;
                            return entity;
                        };
                        offset = report.bind(golfie)(tangon);
 357:
                        report = _closure1_slot0;
                        verify = _closure1_slot3;
                        tangon = 29;
                        tangon = verify[tangon];
                        report = report.bind(oscard)(tangon);
                        tangon = report.dateFormat;
                        option = _closure1_slot1;
                        zuuluu = 30;
                        zuuluu = verify[zuuluu];
                        zuuluu = option.bind(oscard)(zuuluu);
                        golfie = 19;
                        golfie = verify[golfie];
                        option = option.bind(oscard)(golfie);
                        golfie = option.extractTimestamp;
                        yankee = michal == offset;
                        verify = undefined;
                        if(yankee) { _fun00068_ip = 432; continue _fun00067 }
 426:
                        verify = offset.event_exception_id;
 432:
                        offset = michal != verify;
                        michal = '0';
                        if(!offset) { _fun00068_ip = 448; continue _fun00067 }
 445:
                        michal = verify;
 448:
                        michal = golfie.bind(option)(michal);
                        zuuluu = zuuluu.bind(oscard)(michal);
                        michal = 'LL';
                        michal = tangon.bind(report)(zuuluu, michal);
                        entity['subtarget'] = michal;
 474:
                        return entity;
                    }
                };
                tangon = zuuluu.bind(entity)(option);
                zuuluu = 'options';
                option = golfie.bind(option)(zuuluu, tangon);
                _closure3_slot0 = option;
                zuuluu = option.changes;
                tangon = option;
                if(!(oscard != zuuluu)) { _fun00058_ip = 274; continue _fun00057 }
 221:
                golfie = new Array(0);
                var _closure3_slot1 = golfie;
                verify = option.changes;
                oscard = verify.forEach;
                zuuluu = function(argFoo) {
                    _fun00069: for(var _fun00070_ip = 0; ; ) switch(_fun00070_ip) {
 0:
                        golfie = _closure3_slot0;
                        oscard = _closure2_slot0;
                        report = function(argFoo, argBar, argBaz) { // Original name: transformChange
                            _fun00071: for(var _fun00072_ip = 0; ; ) switch(_fun00072_ip) {
 0:
                                entity = argFoo;
                                zuuluu = argBar;
                                report = argBaz;
                                var _closure5_slot0 = report;
                                golfie = zuuluu.action;
                                oscard = _closure1_slot15;
                                oscard = oscard.APPLICATION_COMMAND_PERMISSION_UPDATE;
                                if(!(golfie !== oscard)) { _fun00072_ip = 1888; continue _fun00071 }
 40:
                                golfie = entity.key;
                                oscard = _closure1_slot16;
                                oscard = oscard.OWNER_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1867; continue _fun00071 }
 62:
                                oscard = _closure1_slot16;
                                oscard = oscard.CHANNEL_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1838; continue _fun00071 }
 79:
                                oscard = _closure1_slot16;
                                oscard = oscard.AFK_CHANNEL_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1838; continue _fun00071 }
 96:
                                oscard = _closure1_slot16;
                                oscard = oscard.SYSTEM_CHANNEL_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1838; continue _fun00071 }
 113:
                                oscard = _closure1_slot16;
                                oscard = oscard.RULES_CHANNEL_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1838; continue _fun00071 }
 130:
                                oscard = _closure1_slot16;
                                oscard = oscard.PUBLIC_UPDATES_CHANNEL_ID;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1838; continue _fun00071 }
 147:
                                oscard = _closure1_slot16;
                                oscard = oscard.AFK_TIMEOUT;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1817; continue _fun00071 }
 164:
                                oscard = _closure1_slot16;
                                oscard = oscard.BITRATE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1796; continue _fun00071 }
 181:
                                oscard = _closure1_slot16;
                                oscard = oscard.COLOR;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1775; continue _fun00071 }
 198:
                                oscard = _closure1_slot16;
                                oscard = oscard.THEME_COLORS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1754; continue _fun00071 }
 215:
                                oscard = _closure1_slot16;
                                oscard = oscard.MAX_AGE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1733; continue _fun00071 }
 232:
                                oscard = _closure1_slot16;
                                oscard = oscard.PERMISSIONS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1573; continue _fun00071 }
 249:
                                oscard = _closure1_slot16;
                                oscard = oscard.PERMISSIONS_GRANTED;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1417; continue _fun00071 }
 266:
                                oscard = _closure1_slot16;
                                oscard = oscard.PERMISSIONS_DENIED;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1417; continue _fun00071 }
 283:
                                oscard = _closure1_slot16;
                                oscard = oscard.FLAGS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1058; continue _fun00071 }
 300:
                                oscard = _closure1_slot16;
                                oscard = oscard.PREFERRED_LOCALE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1037; continue _fun00071 }
 317:
                                oscard = _closure1_slot16;
                                oscard = oscard.VIDEO_QUALITY_MODE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1016; continue _fun00071 }
 334:
                                oscard = _closure1_slot16;
                                oscard = oscard.SYSTEM_CHANNEL_FLAGS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 1000; continue _fun00071 }
 351:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_ACTIONS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 948; continue _fun00071 }
 368:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_EVENT_TYPE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 885; continue _fun00071 }
 385:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_TRIGGER_TYPE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 822; continue _fun00071 }
 402:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_TRIGGER_METADATA;
                                if(!(oscard !== golfie)) { _fun00072_ip = 778; continue _fun00071 }
 419:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_ADD_KEYWORDS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 436:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_REMOVE_KEYWORDS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 453:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_ADD_REGEX_PATTERNS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 470:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_REMOVE_REGEX_PATTERNS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 487:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_ADD_ALLOW_LIST;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 504:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_REMOVE_ALLOW_LIST;
                                if(!(oscard !== golfie)) { _fun00072_ip = 734; continue _fun00071 }
 521:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_EXEMPT_CHANNELS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 682; continue _fun00071 }
 538:
                                oscard = _closure1_slot16;
                                oscard = oscard.AUTO_MODERATION_EXEMPT_ROLES;
                                if(!(oscard !== golfie)) { _fun00072_ip = 630; continue _fun00071 }
 552:
                                oscard = _closure1_slot16;
                                oscard = oscard.AVAILABLE_TAGS;
                                if(!(oscard !== golfie)) { _fun00072_ip = 617; continue _fun00071 }
 566:
                                oscard = _closure1_slot16;
                                oscard = oscard.SCHEDULED_START_TIME;
                                if(!(oscard !== golfie)) { _fun00072_ip = 596; continue _fun00071 }
 580:
                                oscard = _closure1_slot16;
                                oscard = oscard.SCHEDULED_END_TIME;
                                if(!(oscard !== golfie)) { _fun00072_ip = 596; continue _fun00071 }
 594:
                                return entity;
 596:
                                option = _closure1_slot44;
                                golfie = undefined;
                                oscard = function(argFoo) {
                                    zuuluu = _closure1_slot0;
                                    oscard = _closure1_slot3;
                                    michal = 29;
                                    michal = oscard[michal];
                                    report = undefined;
                                    tangon = zuuluu.bind(report)(michal);
                                    zuuluu = tangon.dateFormat;
                                    michal = _closure1_slot1;
                                    entity = 30;
                                    entity = oscard[entity];
                                    michal = michal.bind(report)(entity);
                                    entity = global;
                                    golfie = entity.Date;
                                    entity = golfie.prototype;
                                    oscard = Object.create(entity, {constructor: {value: golfie}});
                                    verify = argFoo;
                                    offset = oscard;
                                    entity = new offset[golfie](verify, option);
                                    entity = entity instanceof Object ? entity : oscard;
                                    michal = michal.bind(report)(entity);
                                    entity = 'LLLL';
                                    entity = zuuluu.bind(tangon)(michal, entity);
                                    return entity;
                                };
                                oscard = option.bind(golfie)(entity, oscard);
                                return oscard;
 617:
                                golfie = _closure1_slot43;
                                oscard = undefined;
                                oscard = golfie.bind(oscard)(entity);
                                return oscard;
 630:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 680; continue _fun00071 }
 653:
                                offset = _closure1_slot44;
                                verify = undefined;
                                option = function(argFoo) {
                                    tangon = argFoo;
                                    zuuluu = tangon.map;
                                    michal = function(argFoo) {
                                        tangon = _closure1_slot11;
                                        zuuluu = tangon.getRole;
                                        entity = _closure5_slot0;
                                        michal = entity.id;
                                        entity = argFoo;
                                        entity = zuuluu.bind(tangon)(michal, entity);
                                        return entity;
                                    };
                                    tangon = zuuluu.bind(tangon)(michal);
                                    zuuluu = tangon.filter;
                                    michal = function(argFoo) {
                                        michal = null;
                                        entity = argFoo;
                                        entity = michal != entity;
                                        return entity;
                                    };
                                    zuuluu = zuuluu.bind(tangon)(michal);
                                    michal = zuuluu.map;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.name;
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                golfie = function(argFoo) {
                                    _fun00073: for(var _fun00074_ip = 0; ; ) switch(_fun00074_ip) {
 0:
                                        tangon = argFoo;
                                        entity = null;
                                        if(!(entity != tangon)) { _fun00074_ip = 20; continue _fun00073 }
 9:
                                        michal = tangon.length;
                                        entity = 0;
                                        if(!(!(michal > entity))) { _fun00074_ip = 82; continue _fun00073 }
 20:
                                        oscard = _closure1_slot0;
                                        golfie = _closure1_slot3;
                                        entity = 17;
                                        michal = golfie[entity];
                                        report = undefined;
                                        michal = oscard.bind(report)(michal);
                                        zuuluu = michal.intl;
                                        michal = zuuluu.string;
                                        entity = golfie[entity];
                                        entity = oscard.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.K/EdV1;
                                        entity = michal.bind(zuuluu)(entity);
                                        _fun00074_ip = 98; continue _fun00073;
 82:
                                        zuuluu = tangon.join;
                                        michal = ', ';
                                        entity = zuuluu.bind(tangon)(michal);
 98:
                                        return entity;
                                    }
                                };
                                oscard = offset.bind(verify)(entity, option, golfie);
 680:
                                return oscard;
 682:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 732; continue _fun00071 }
 705:
                                offset = _closure1_slot44;
                                verify = undefined;
                                option = function(argFoo) {
                                    tangon = argFoo;
                                    zuuluu = tangon.map;
                                    michal = _closure1_slot10;
                                    michal = michal.getChannel;
                                    tangon = zuuluu.bind(tangon)(michal);
                                    zuuluu = tangon.filter;
                                    michal = function(argFoo) {
                                        michal = null;
                                        entity = argFoo;
                                        entity = michal != entity;
                                        return entity;
                                    };
                                    zuuluu = zuuluu.bind(tangon)(michal);
                                    michal = zuuluu.map;
                                    entity = function(argFoo) {
                                        tangon = _closure1_slot0;
                                        zuuluu = _closure1_slot3;
                                        michal = 23;
                                        zuuluu = zuuluu[michal];
                                        michal = undefined;
                                        oscard = tangon.bind(michal)(zuuluu);
                                        report = oscard.computeChannelName;
                                        verify = _closure1_slot13;
                                        option = _closure1_slot12;
                                        offset = argFoo;
                                        golfie = true;
                                        yankee = oscard;
                                        entity = yankee[report](offset, verify, option, golfie, oscard);
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                golfie = function(argFoo) {
                                    _fun00075: for(var _fun00076_ip = 0; ; ) switch(_fun00076_ip) {
 0:
                                        tangon = argFoo;
                                        entity = null;
                                        if(!(entity != tangon)) { _fun00076_ip = 20; continue _fun00075 }
 9:
                                        michal = tangon.length;
                                        entity = 0;
                                        if(!(!(michal > entity))) { _fun00076_ip = 82; continue _fun00075 }
 20:
                                        oscard = _closure1_slot0;
                                        golfie = _closure1_slot3;
                                        entity = 17;
                                        michal = golfie[entity];
                                        report = undefined;
                                        michal = oscard.bind(report)(michal);
                                        zuuluu = michal.intl;
                                        michal = zuuluu.string;
                                        entity = golfie[entity];
                                        entity = oscard.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.K/EdV1;
                                        entity = michal.bind(zuuluu)(entity);
                                        _fun00076_ip = 98; continue _fun00075;
 82:
                                        zuuluu = tangon.join;
                                        michal = ', ';
                                        entity = zuuluu.bind(tangon)(michal);
 98:
                                        return entity;
                                    }
                                };
                                oscard = offset.bind(verify)(entity, option, golfie);
 732:
                                return oscard;
 734:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 776; continue _fun00071 }
 757:
                                verify = _closure1_slot44;
                                option = undefined;
                                golfie = function(argFoo) {
                                    _fun00077: for(var _fun00078_ip = 0; ; ) switch(_fun00078_ip) {
 0:
                                        tangon = argFoo;
                                        entity = null;
                                        if(!(entity != tangon)) { _fun00078_ip = 30; continue _fun00077 }
 9:
                                        entity = global;
                                        michal = entity.Array;
                                        entity = michal.isArray;
                                        entity = entity.bind(michal)(tangon);
                                        if(entity) { _fun00078_ip = 51; continue _fun00077 }
 30:
                                        entity = global;
                                        michal = entity.JSON;
                                        entity = michal.stringify;
                                        entity = entity.bind(michal)(tangon);
                                        _fun00078_ip = 86; continue _fun00077;
 51:
                                        zuuluu = tangon.map;
                                        michal = function(argFoo) {
                                            entity = global;
                                            entity = entity.HermesInternal;
                                            zuuluu = entity.concat;
                                            michal = "'";
                                            entity = argFoo;
                                            entity = zuuluu.bind(michal)(entity, michal);
                                            return entity;
                                        };
                                        tangon = zuuluu.bind(tangon)(michal);
                                        zuuluu = tangon.join;
                                        michal = ', ';
                                        entity = zuuluu.bind(tangon)(michal);
 86:
                                        return entity;
                                    }
                                };
                                oscard = verify.bind(option)(entity, golfie);
 776:
                                return oscard;
 778:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 820; continue _fun00071 }
 801:
                                verify = _closure1_slot44;
                                option = undefined;
                                golfie = function(argFoo) {
                                    _fun00079: for(var _fun00080_ip = 0; ; ) switch(_fun00080_ip) {
 0:
                                        golfie = argFoo;
                                        zuuluu = null;
                                        entity = golfie;
                                        if(!(zuuluu != golfie)) { _fun00080_ip = 205; continue _fun00079 }
 15:
                                        tangon = 'object';
                                        michal = typeof golfie;
                                        entity = golfie;
                                        if(!(tangon === michal)) { _fun00080_ip = 205; continue _fun00079 }
 32:
                                        michal = golfie.keyword_filter;
                                        if(!(zuuluu != michal)) { _fun00080_ip = 69; continue _fun00079 }
 42:
                                        michal = global;
                                        tangon = michal.Array;
                                        zuuluu = tangon.isArray;
                                        michal = golfie.keyword_filter;
                                        michal = zuuluu.bind(tangon)(michal);
                                        if(michal) { _fun00080_ip = 90; continue _fun00079 }
 69:
                                        michal = global;
                                        zuuluu = michal.JSON;
                                        michal = zuuluu.stringify;
                                        michal = michal.bind(zuuluu)(golfie);
                                        _fun00080_ip = 202; continue _fun00079;
 90:
                                        option = _closure1_slot0;
                                        verify = _closure1_slot3;
                                        zuuluu = 17;
                                        report = verify[zuuluu];
                                        tangon = undefined;
                                        report = option.bind(tangon)(report);
                                        oscard = report.intl;
                                        report = oscard.formatToMarkdownString;
                                        zuuluu = verify[zuuluu];
                                        zuuluu = option.bind(tangon)(zuuluu);
                                        zuuluu = zuuluu.t;
                                        tangon = zuuluu.y91UXV;
                                        zuuluu = {};
                                        verify = golfie.keyword_filter;
                                        option = verify.map;
                                        golfie = function(argFoo) {
                                            entity = global;
                                            entity = entity.HermesInternal;
                                            zuuluu = entity.concat;
                                            michal = "'";
                                            entity = argFoo;
                                            entity = zuuluu.bind(michal)(entity, michal);
                                            return entity;
                                        };
                                        verify = option.bind(verify)(golfie);
                                        option = verify.join;
                                        golfie = ', ';
                                        golfie = option.bind(verify)(golfie);
                                        zuuluu['newValue'] = golfie;
                                        michal = report.bind(oscard)(tangon, zuuluu);
 202:
                                        entity = michal;
 205:
                                        return entity;
                                    }
                                };
                                oscard = verify.bind(option)(entity, golfie);
 820:
                                return oscard;
 822:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 883; continue _fun00071 }
 845:
                                verify = _closure1_slot44;
                                offset = _closure1_slot0;
                                option = _closure1_slot3;
                                golfie = 28;
                                golfie = option[golfie];
                                option = undefined;
                                golfie = offset.bind(option)(golfie);
                                golfie = golfie.triggerTypeToName;
                                oscard = verify.bind(option)(entity, golfie);
 883:
                                return oscard;
 885:
                                option = zuuluu.targetType;
                                oscard = _closure1_slot17;
                                golfie = oscard.AUTO_MODERATION_RULE;
                                oscard = entity;
                                if(!(option === golfie)) { _fun00072_ip = 946; continue _fun00071 }
 908:
                                verify = _closure1_slot44;
                                offset = _closure1_slot0;
                                option = _closure1_slot3;
                                golfie = 28;
                                golfie = option[golfie];
                                option = undefined;
                                golfie = offset.bind(option)(golfie);
                                golfie = golfie.eventTypeToName;
                                oscard = verify.bind(option)(entity, golfie);
 946:
                                return oscard;
 948:
                                golfie = zuuluu.targetType;
                                zuuluu = _closure1_slot17;
                                oscard = zuuluu.AUTO_MODERATION_RULE;
                                zuuluu = entity;
                                if(!(golfie === oscard)) { _fun00072_ip = 998; continue _fun00071 }
 971:
                                verify = _closure1_slot44;
                                option = undefined;
                                golfie = function(argFoo) {
                                    zuuluu = argFoo;
                                    michal = zuuluu.map;
                                    entity = function(argFoo) {
                                        entity = argFoo;
                                        entity = entity.type;
                                        return entity;
                                    };
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                oscard = function(argFoo) {
                                    zuuluu = argFoo;
                                    michal = zuuluu.map;
                                    report = _closure1_slot0;
                                    tangon = _closure1_slot3;
                                    entity = 28;
                                    tangon = tangon[entity];
                                    entity = undefined;
                                    entity = report.bind(entity)(tangon);
                                    entity = entity.actionTypeToName;
                                    zuuluu = michal.bind(zuuluu)(entity);
                                    michal = zuuluu.join;
                                    entity = ', ';
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                zuuluu = verify.bind(option)(entity, golfie, oscard);
 998:
                                return zuuluu;
 1000:
                                oscard = function(argFoo) { // Original name: transformSystemChannelFlagsChanges
                                    entity = argFoo;
                                    var _closure6_slot0 = entity;
                                    entity = {};
                                    report = _closure1_slot28;
                                    oscard = report.SUPPRESS_JOIN_NOTIFICATIONS;
                                    tangon = _closure1_slot16;
                                    tangon = tangon.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS;
                                    entity[oscard] = tangon;
                                    oscard = report.SUPPRESS_PREMIUM_SUBSCRIPTIONS;
                                    tangon = _closure1_slot16;
                                    tangon = tangon.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS;
                                    entity[oscard] = tangon;
                                    oscard = report.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS;
                                    tangon = _closure1_slot16;
                                    tangon = tangon.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS;
                                    entity[oscard] = tangon;
                                    tangon = report.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                                    zuuluu = _closure1_slot16;
                                    zuuluu = zuuluu.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES;
                                    entity[tangon] = zuuluu;
                                    var _closure6_slot1 = entity;
                                    entity = new Array(0);
                                    var _closure6_slot2 = entity;
                                    zuuluu = global;
                                    tangon = zuuluu.Object;
                                    zuuluu = tangon.values;
                                    tangon = zuuluu.bind(tangon)(report);
                                    zuuluu = tangon.forEach;
                                    michal = function(argFoo) {
                                        _fun00081: for(var _fun00082_ip = 0; ; ) switch(_fun00082_ip) {
 0:
                                            report = argFoo;
                                            michal = _closure6_slot0;
                                            zuuluu = michal.oldValue;
                                            zuuluu = zuuluu & report;
                                            tangon = zuuluu === report;
                                            michal = michal.newValue;
                                            michal = michal & report;
                                            michal = michal === report;
                                            if(!(tangon !== michal)) { _fun00082_ip = 97; continue _fun00081 }
 42:
                                            oscard = _closure1_slot9;
                                            zuuluu = _closure6_slot1;
                                            verify = zuuluu[report];
                                            zuuluu = oscard.prototype;
                                            zuuluu = Object.create(zuuluu, {constructor: {value: oscard}});
                                            option = !tangon;
                                            golfie = !michal;
                                            offset = zuuluu;
                                            michal = new offset[oscard](verify, option, golfie, oscard);
                                            zuuluu = michal instanceof Object ? michal : zuuluu;
                                            michal = _closure6_slot2;
                                            entity = michal.push;
                                            entity = entity.bind(michal)(zuuluu);
 97:
                                            entity = undefined;
                                            return entity;
                                        }
                                    };
                                    michal = zuuluu.bind(tangon)(michal);
                                    return entity;
                                };
                                zuuluu = undefined;
                                zuuluu = oscard.bind(zuuluu)(entity);
                                return zuuluu;
 1016:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    _fun00083: for(var _fun00084_ip = 0; ; ) switch(_fun00084_ip) {
 0:
                                        entity = _closure1_slot25;
                                        zuuluu = entity.FULL;
                                        entity = argFoo;
                                        if(!(entity !== zuuluu)) { _fun00084_ip = 79; continue _fun00083 }
 20:
                                        oscard = _closure1_slot0;
                                        golfie = _closure1_slot3;
                                        entity = 17;
                                        zuuluu = golfie[entity];
                                        report = undefined;
                                        zuuluu = oscard.bind(report)(zuuluu);
                                        tangon = zuuluu.intl;
                                        zuuluu = tangon.string;
                                        entity = golfie[entity];
                                        entity = oscard.bind(report)(entity);
                                        entity = entity.t;
                                        entity = entity.jjKYpq;
                                        entity = zuuluu.bind(tangon)(entity);
                                        _fun00084_ip = 136; continue _fun00083;
 79:
                                        oscard = _closure1_slot0;
                                        golfie = _closure1_slot3;
                                        michal = 17;
                                        zuuluu = golfie[michal];
                                        report = undefined;
                                        zuuluu = oscard.bind(report)(zuuluu);
                                        tangon = zuuluu.intl;
                                        zuuluu = tangon.string;
                                        michal = golfie[michal];
                                        michal = oscard.bind(report)(michal);
                                        michal = michal.t;
                                        michal = michal.7jOoJC;
                                        entity = zuuluu.bind(tangon)(michal);
 136:
                                        return entity;
                                    }
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1037:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    _fun00085: for(var _fun00086_ip = 0; ; ) switch(_fun00086_ip) {
 0:
                                        michal = argFoo;
                                        var _closure6_slot0 = michal;
                                        tangon = _closure1_slot0;
                                        zuuluu = _closure1_slot3;
                                        michal = 17;
                                        zuuluu = zuuluu[michal];
                                        michal = undefined;
                                        zuuluu = tangon.bind(michal)(zuuluu);
                                        michal = zuuluu.getAvailableLocales;
                                        zuuluu = michal.bind(zuuluu)();
                                        michal = zuuluu.find;
                                        entity = function(argFoo) {
                                            entity = argFoo;
                                            michal = entity.value;
                                            entity = _closure6_slot0;
                                            entity = michal === entity;
                                            return entity;
                                        };
                                        michal = michal.bind(zuuluu)(entity);
                                        entity = null;
                                        zuuluu = entity != michal;
                                        if(!zuuluu) { _fun00086_ip = 75; continue _fun00085 }
 70:
                                        entity = michal.name;
 75:
                                        return entity;
                                    }
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1058:
                                zuuluu = new Array(0);
                                option = entity.oldValue;
                                oscard = entity.newValue;
                                golfie = 0;
                                yankee = 'number';
                                verify = typeof option;
                                offset = 0;
                                if(!(yankee === verify)) { _fun00072_ip = 1092; continue _fun00071 }
 1089:
                                offset = option;
 1092:
                                option = typeof oscard;
                                verify = 0;
                                if(!(yankee === option)) { _fun00072_ip = 1104; continue _fun00071 }
 1101:
                                verify = oscard;
 1104:
                                option = _closure1_slot2;
                                oscard = _closure1_slot3;
                                output = 22;
                                yankee = oscard[output];
                                sizing = undefined;
                                romeon = option.bind(sizing)(yankee);
                                yankee = romeon.removeFlag;
                                kiloes = yankee.bind(romeon)(verify, offset);
                                oscard = oscard[output];
                                option = option.bind(sizing)(oscard);
                                oscard = option.removeFlag;
                                backup = oscard.bind(option)(offset, verify);
                                verify = new Array(0);
                                option = new Array(0);
                                romeon = _closure1_slot29;
                                for(oscard in romeon)
 1179:
                                {
 1188:
                                    echoed = oscard;
                                    result = _closure1_slot29;
                                    echoed = result[echoed];
                                    update = _closure1_slot2;
                                    result = _closure1_slot3;
                                    result = result[output];
                                    update = update.bind(sizing)(result);
                                    result = update.hasFlag;
                                    result = result.bind(update)(kiloes, echoed);
                                    if(!result) { _fun00072_ip = 1241; continue _fun00071 }
 1231:
                                    result = verify.push;
                                    result = result.bind(verify)(echoed);
 1241:
                                    update = _closure1_slot2;
                                    result = _closure1_slot3;
                                    result = result[output];
                                    update = update.bind(sizing)(result);
                                    result = update.hasFlag;
                                    result = result.bind(update)(backup, echoed);
                                    if(!result) { _fun00072_ip = 1179; continue _fun00071 }
 1273:
                                    result = option.push;
                                    result = result.bind(option)(echoed);
                                    _fun00072_ip = 1179; continue _fun00071;
                                }
 1285:
                                oscard = {};
                                oscard['added'] = verify;
                                oscard['removed'] = option;
                                romeon = oscard.added;
                                offset = oscard.removed;
                                oscard = romeon.length;
                                if(!(oscard > golfie)) { _fun00072_ip = 1362; continue _fun00071 }
 1318:
                                yankee = _closure1_slot9;
                                vacuum = entity.key;
                                oscard = yankee.prototype;
                                option = Object.create(oscard, {constructor: {value: yankee}});
                                ctrled = null;
                                sequen = option;
                                source = romeon;
                                oscard = new sequen[yankee](vacuum, ctrled, source, update);
                                option = oscard instanceof Object ? oscard : option;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(option);
 1362:
                                oscard = offset.length;
                                if(!(oscard > golfie)) { _fun00072_ip = 1415; continue _fun00071 }
 1371:
                                verify = _closure1_slot9;
                                vacuum = entity.key;
                                oscard = verify.prototype;
                                golfie = Object.create(oscard, {constructor: {value: verify}});
                                source = null;
                                sequen = golfie;
                                ctrled = offset;
                                oscard = new sequen[verify](vacuum, ctrled, source, update);
                                golfie = oscard instanceof Object ? oscard : golfie;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(golfie);
 1415:
                                return zuuluu;
 1417:
                                zuuluu = new Array(0);
                                verify = _closure1_slot41;
                                option = entity.oldValue;
                                golfie = entity.newValue;
                                oscard = undefined;
                                oscard = verify.bind(oscard)(option, golfie);
                                romeon = oscard.added;
                                verify = oscard.removed;
                                oscard = romeon.length;
                                golfie = 0;
                                if(!(oscard > golfie)) { _fun00072_ip = 1512; continue _fun00071 }
 1468:
                                yankee = _closure1_slot9;
                                vacuum = entity.key;
                                oscard = yankee.prototype;
                                option = Object.create(oscard, {constructor: {value: yankee}});
                                ctrled = null;
                                sequen = option;
                                source = romeon;
                                oscard = new sequen[yankee](vacuum, ctrled, source, update);
                                option = oscard instanceof Object ? oscard : option;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(option);
 1512:
                                oscard = verify.length;
                                if(!(oscard > golfie)) { _fun00072_ip = 1571; continue _fun00071 }
 1521:
                                option = _closure1_slot9;
                                oscard = _closure1_slot16;
                                vacuum = oscard.PERMISSIONS_RESET;
                                golfie = option.prototype;
                                golfie = Object.create(golfie, {constructor: {value: option}});
                                sequen = golfie;
                                ctrled = verify;
                                source = verify;
                                oscard = new sequen[option](vacuum, ctrled, source, update);
                                golfie = oscard instanceof Object ? oscard : golfie;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(golfie);
 1571:
                                return zuuluu;
 1573:
                                zuuluu = new Array(0);
                                verify = _closure1_slot41;
                                option = entity.oldValue;
                                golfie = entity.newValue;
                                oscard = undefined;
                                oscard = verify.bind(oscard)(option, golfie);
                                romeon = oscard.added;
                                offset = oscard.removed;
                                oscard = romeon.length;
                                golfie = 0;
                                if(!(oscard > golfie)) { _fun00072_ip = 1673; continue _fun00071 }
 1624:
                                yankee = _closure1_slot9;
                                oscard = _closure1_slot16;
                                vacuum = oscard.PERMISSIONS_GRANTED;
                                oscard = yankee.prototype;
                                option = Object.create(oscard, {constructor: {value: yankee}});
                                ctrled = null;
                                sequen = option;
                                source = romeon;
                                oscard = new sequen[yankee](vacuum, ctrled, source, update);
                                option = oscard instanceof Object ? oscard : option;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(option);
 1673:
                                oscard = offset.length;
                                if(!(oscard > golfie)) { _fun00072_ip = 1731; continue _fun00071 }
 1682:
                                verify = _closure1_slot9;
                                oscard = _closure1_slot16;
                                vacuum = oscard.PERMISSIONS_DENIED;
                                oscard = verify.prototype;
                                golfie = Object.create(oscard, {constructor: {value: verify}});
                                ctrled = null;
                                sequen = golfie;
                                source = offset;
                                oscard = new sequen[verify](vacuum, ctrled, source, update);
                                golfie = oscard instanceof Object ? oscard : golfie;
                                oscard = zuuluu.push;
                                oscard = oscard.bind(zuuluu)(golfie);
 1731:
                                return zuuluu;
 1733:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    _fun00087: for(var _fun00088_ip = 0; ; ) switch(_fun00088_ip) {
 0:
                                        entity = argFoo;
                                        var _closure6_slot0 = entity;
                                        report = _closure1_slot1;
                                        tangon = _closure1_slot3;
                                        zuuluu = 27;
                                        tangon = tangon[zuuluu];
                                        zuuluu = undefined;
                                        zuuluu = report.bind(zuuluu)(tangon);
                                        tangon = zuuluu.getMaxAgeOptions;
                                        zuuluu = tangon.find;
                                        michal = function(argFoo) {
                                            entity = argFoo;
                                            michal = entity.value;
                                            entity = _closure6_slot0;
                                            entity = entity === michal;
                                            return entity;
                                        };
                                        michal = zuuluu.bind(tangon)(michal);
                                        if(!michal) { _fun00088_ip = 65; continue _fun00087 }
 60:
                                        entity = michal.label;
 65:
                                        return entity;
                                    }
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1754:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    tangon = argFoo;
                                    zuuluu = _closure1_slot0;
                                    oscard = _closure1_slot3;
                                    entity = 26;
                                    report = oscard[entity];
                                    michal = undefined;
                                    option = zuuluu.bind(michal)(report);
                                    golfie = option.int2hex;
                                    report = 0;
                                    report = tangon[report];
                                    golfie = golfie.bind(option)(report);
                                    report = golfie.toUpperCase;
                                    report = report.bind(golfie)();
                                    entity = oscard[entity];
                                    zuuluu = zuuluu.bind(michal)(entity);
                                    michal = zuuluu.int2hex;
                                    entity = 1;
                                    entity = tangon[entity];
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = michal.toUpperCase;
                                    tangon = entity.bind(michal)();
                                    entity = global;
                                    entity = entity.HermesInternal;
                                    zuuluu = entity.concat;
                                    michal = '';
                                    entity = ', ';
                                    entity = zuuluu.bind(michal)(report, entity, tangon);
                                    return entity;
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1775:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    zuuluu = _closure1_slot0;
                                    michal = _closure1_slot3;
                                    entity = 26;
                                    michal = michal[entity];
                                    entity = undefined;
                                    zuuluu = zuuluu.bind(entity)(michal);
                                    michal = zuuluu.int2hex;
                                    entity = argFoo;
                                    michal = michal.bind(zuuluu)(entity);
                                    entity = michal.toUpperCase;
                                    entity = entity.bind(michal)();
                                    return entity;
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1796:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    michal = argFoo;
                                    entity = 1000;
                                    entity = michal / entity;
                                    return entity;
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1817:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    michal = argFoo;
                                    entity = 60;
                                    entity = michal / entity;
                                    return entity;
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1838:
                                option = _closure1_slot44;
                                golfie = undefined;
                                oscard = function(argFoo) {
                                    zuuluu = _closure1_slot10;
                                    michal = zuuluu.getChannel;
                                    entity = argFoo;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                zuuluu = function(argFoo) {
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    michal = 23;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    oscard = tangon.bind(michal)(zuuluu);
                                    report = oscard.computeChannelName;
                                    verify = _closure1_slot13;
                                    option = _closure1_slot12;
                                    offset = argFoo;
                                    golfie = true;
                                    yankee = oscard;
                                    entity = yankee[report](offset, verify, option, golfie, oscard);
                                    return entity;
                                };
                                zuuluu = option.bind(golfie)(entity, oscard, zuuluu);
                                return zuuluu;
 1867:
                                golfie = _closure1_slot44;
                                oscard = undefined;
                                zuuluu = function(argFoo) {
                                    zuuluu = _closure1_slot13;
                                    michal = zuuluu.getUser;
                                    entity = argFoo;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                zuuluu = golfie.bind(oscard)(entity, zuuluu);
                                return zuuluu;
 1888:
                                zuuluu = entity.newValue;
                                if(zuuluu) { _fun00072_ip = 1903; continue _fun00071 }
 1897:
                                zuuluu = entity.oldValue;
 1903:
                                golfie = zuuluu.type;
                                oscard = _closure1_slot26;
                                oscard = oscard.ROLE;
                                if(!(oscard !== golfie)) { _fun00072_ip = 2169; continue _fun00071 }
 1925:
                                oscard = _closure1_slot26;
                                oscard = oscard.USER;
                                if(!(oscard !== golfie)) { _fun00072_ip = 2129; continue _fun00071 }
 1942:
                                oscard = _closure1_slot26;
                                oscard = oscard.CHANNEL;
                                if(!(oscard === golfie)) { _fun00072_ip = 2207; continue _fun00071 }
 1959:
                                oscard = zuuluu.id;
                                option = _closure1_slot1;
                                verify = _closure1_slot3;
                                golfie = 25;
                                golfie = verify[golfie];
                                verify = undefined;
                                golfie = option.bind(verify)(golfie);
                                report = report.id;
                                option = golfie.bind(verify)(report);
                                golfie = option.subtract;
                                report = 1;
                                golfie = golfie.bind(option)(report);
                                report = golfie.toString;
                                report = report.bind(golfie)();
                                if(!(oscard !== report)) { _fun00072_ip = 2064; continue _fun00071 }
 2023:
                                option = _closure1_slot46;
                                golfie = zuuluu.id;
                                oscard = function(argFoo) {
                                    zuuluu = _closure1_slot10;
                                    michal = zuuluu.getChannel;
                                    entity = argFoo;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                report = function(argFoo) {
                                    tangon = _closure1_slot0;
                                    zuuluu = _closure1_slot3;
                                    michal = 23;
                                    zuuluu = zuuluu[michal];
                                    michal = undefined;
                                    oscard = tangon.bind(michal)(zuuluu);
                                    report = oscard.computeChannelName;
                                    verify = _closure1_slot13;
                                    option = _closure1_slot12;
                                    offset = argFoo;
                                    golfie = true;
                                    yankee = oscard;
                                    entity = yankee[report](offset, verify, option, golfie, oscard);
                                    return entity;
                                };
                                report = option.bind(verify)(golfie, oscard, report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2207; continue _fun00071;
 2064:
                                option = _closure1_slot0;
                                offset = _closure1_slot3;
                                report = 17;
                                oscard = offset[report];
                                oscard = option.bind(verify)(oscard);
                                golfie = oscard.intl;
                                oscard = golfie.string;
                                report = offset[report];
                                report = option.bind(verify)(report);
                                report = report.t;
                                report = report.MSYhgo;
                                report = oscard.bind(golfie)(report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2207; continue _fun00071;
 2129:
                                verify = _closure1_slot46;
                                option = zuuluu.id;
                                golfie = undefined;
                                oscard = function(argFoo) {
                                    zuuluu = _closure1_slot13;
                                    michal = zuuluu.getUser;
                                    entity = argFoo;
                                    entity = michal.bind(zuuluu)(entity);
                                    return entity;
                                };
                                report = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.tag;
                                    return entity;
                                };
                                report = verify.bind(golfie)(option, oscard, report);
                                entity['subtarget'] = report;
                                _fun00072_ip = 2207; continue _fun00071;
 2169:
                                oscard = _closure1_slot46;
                                report = zuuluu.id;
                                tangon = undefined;
                                zuuluu = function(argFoo) {
                                    tangon = _closure1_slot11;
                                    zuuluu = tangon.getRole;
                                    entity = _closure5_slot0;
                                    michal = entity.id;
                                    entity = argFoo;
                                    entity = zuuluu.bind(tangon)(michal, entity);
                                    return entity;
                                };
                                michal = function(argFoo) {
                                    entity = argFoo;
                                    entity = entity.name;
                                    return entity;
                                };
                                michal = oscard.bind(tangon)(report, zuuluu, michal);
                                entity['subtarget'] = michal;
 2207:
                                return entity;
                            }
                        };
                        entity = undefined;
                        tangon = argFoo;
                        tangon = report.bind(entity)(tangon, golfie, oscard);
                        report = global;
                        oscard = report.Array;
                        report = oscard.isArray;
                        report = report.bind(oscard)(tangon);
                        if(report) { _fun00070_ip = 72; continue _fun00069 }
 56:
                        report = _closure3_slot1;
                        zuuluu = report.push;
                        zuuluu = zuuluu.bind(report)(tangon);
                        _fun00070_ip = 89; continue _fun00069;
 72:
                        zuuluu = tangon.forEach;
                        michal = function(argFoo) {
                            zuuluu = _closure3_slot1;
                            michal = zuuluu.push;
                            entity = argFoo;
                            entity = michal.bind(zuuluu)(entity);
                            return entity;
                        };
                        michal = zuuluu.bind(tangon)(michal);
 89:
                        return entity;
                    }
                };
                zuuluu = oscard.bind(verify)(zuuluu);
                oscard = option.set;
                zuuluu = 'changes';
                zuuluu = oscard.bind(option)(zuuluu, golfie);
                _closure3_slot0 = zuuluu;
                tangon = zuuluu;
 274:
                zuuluu = _closure2_slot1;
                michal = zuuluu.push;
                michal = michal.bind(zuuluu)(tangon);
 288:
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    zuuluu['transformLogs'] = tangon;
    zuuluu['transformAvailableForumTagChange'] = michal;
    return entity;
})();