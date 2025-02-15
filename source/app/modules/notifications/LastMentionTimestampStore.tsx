// app/modules/notifications/LastMentionTimestampStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot19;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot5;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot18 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            mike = global;
            zulu = mike.Boolean;
            zulu = zulu.prototype;
            tango = zulu.valueOf;
            zulu = tango.call;
            options = mike.Reflect;
            golf = options.construct;
            oscar = mike.Boolean;
            report = new Array(0);
            mike = function() {
                entity = undefined;
                return entity;
            };
            mike = golf.bind(options)(oscar, report, mike);
            mike = zulu.bind(tango)(mike);
            mike = !mike;
            var _closure2_slot0 = mike;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot19 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot19 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = null;
    var _closure1_slot10 = tango;
    var _closure1_slot11 = tango;
    var _closure1_slot12 = tango;
    var _closure1_slot13 = tango;
    tango = {};
    var _closure1_slot14 = tango;
    tango = {};
    var _closure1_slot15 = tango;
    tango = {};
    var _closure1_slot16 = tango;
    tango = {};
    var _closure1_slot17 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    golf = tango.Store;
    tango = function(argFoo) {
        tango = function() { // Original name: LastMentionTimestampStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot2;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot18;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'getGlobalStats';
        report['key'] = entity;
        entity = function() { // Original name: value
            tango = function(argFoo) { // Original name: age
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    report = argFoo;
                    entity = null;
                    mike = entity == report;
                    if(mike) { _fun00006_ip = 60; continue _fun00005 }
 12:
                    mike = global;
                    tango = mike.Math;
                    zulu = tango.floor;
                    oscar = mike.Date;
                    mike = oscar.now;
                    mike = mike.bind(oscar)();
                    report = mike - report;
                    mike = 1000;
                    mike = report / mike;
                    entity = zulu.bind(tango)(mike);
 60:
                    return entity;
                }
            };
            entity = {};
            report = _closure1_slot10;
            zulu = undefined;
            report = tango.bind(zulu)(report);
            entity['approx_seconds_since_last_notification'] = report;
            report = _closure1_slot11;
            report = tango.bind(zulu)(report);
            entity['approx_seconds_since_last_mention'] = report;
            report = _closure1_slot12;
            report = tango.bind(zulu)(report);
            entity['approx_seconds_since_last_role_mention'] = report;
            mike = _closure1_slot13;
            mike = tango.bind(zulu)(mike);
            entity['approx_seconds_since_last_everyone_mention'] = mike;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getStats';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                oscar = argFoo;
                report = function(argFoo) { // Original name: age
                    _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                        report = argFoo;
                        entity = null;
                        mike = entity == report;
                        if(mike) { _fun00010_ip = 60; continue _fun00009 }
 12:
                        mike = global;
                        tango = mike.Math;
                        zulu = tango.floor;
                        oscar = mike.Date;
                        mike = oscar.now;
                        mike = mike.bind(oscar)();
                        report = mike - report;
                        mike = 1000;
                        mike = report / mike;
                        entity = zulu.bind(tango)(mike);
 60:
                        return entity;
                    }
                };
                entity = {};
                mike = _closure1_slot10;
                tango = undefined;
                mike = report.bind(tango)(mike);
                entity['approx_seconds_since_last_notification'] = mike;
                mike = _closure1_slot11;
                mike = report.bind(tango)(mike);
                entity['approx_seconds_since_last_mention'] = mike;
                mike = _closure1_slot12;
                mike = report.bind(tango)(mike);
                entity['approx_seconds_since_last_role_mention'] = mike;
                mike = _closure1_slot13;
                mike = report.bind(tango)(mike);
                entity['approx_seconds_since_last_everyone_mention'] = mike;
                mike = null;
                options = mike == oscar;
                golf = null;
                if(options) { _fun00008_ip = 97; continue _fun00007 }
 84:
                options = _closure1_slot14;
                options = options[oscar];
                golf = report.bind(tango)(options);
 97:
                entity['approx_seconds_since_last_guild_notification'] = golf;
                options = mike == oscar;
                golf = null;
                if(options) { _fun00008_ip = 126; continue _fun00007 }
 113:
                options = _closure1_slot15;
                options = options[oscar];
                golf = report.bind(tango)(options);
 126:
                entity['approx_seconds_since_last_guild_mention'] = golf;
                options = mike == oscar;
                golf = null;
                if(options) { _fun00008_ip = 155; continue _fun00007 }
 142:
                options = _closure1_slot17;
                options = options[oscar];
                golf = report.bind(tango)(options);
 155:
                entity['approx_seconds_since_last_guild_role_mention'] = golf;
                golf = mike == oscar;
                mike = null;
                if(golf) { _fun00008_ip = 184; continue _fun00007 }
 171:
                zulu = _closure1_slot16;
                zulu = zulu[oscar];
                mike = report.bind(tango)(zulu);
 184:
                entity['approx_seconds_since_last_guild_everyone_mention'] = mike;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = tango.bind(entity)(golf);
    tango = 8;
    tango = oscar[tango];
    yankee = report.bind(entity)(tango);
    tango = {};
    report = function() { // Original name: handleConnectionOpen
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            options = function(argFoo) { // Original name: isRecent
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    zulu = argFoo;
                    entity = null;
                    entity = entity != zulu;
                    if(!entity) { _fun00014_ip = 43; continue _fun00013 }
 12:
                    mike = global;
                    tango = mike.Date;
                    mike = tango.now;
                    mike = mike.bind(tango)();
                    zulu = mike - zulu;
                    mike = 60000;
                    entity = zulu < mike;
 43:
                    return entity;
                }
            };
            mike = _closure1_slot10;
            entity = undefined;
            mike = options.bind(entity)(mike);
            if(mike) { _fun00012_ip = 30; continue _fun00011 }
 24:
            mike = null;
            _closure1_slot10 = mike;
 30:
            mike = _closure1_slot11;
            mike = options.bind(entity)(mike);
            if(mike) { _fun00012_ip = 48; continue _fun00011 }
 42:
            mike = null;
            _closure1_slot11 = mike;
 48:
            mike = _closure1_slot12;
            mike = options.bind(entity)(mike);
            if(mike) { _fun00012_ip = 66; continue _fun00011 }
 60:
            mike = null;
            _closure1_slot12 = mike;
 66:
            mike = _closure1_slot13;
            mike = options.bind(entity)(mike);
            if(mike) { _fun00012_ip = 84; continue _fun00011 }
 78:
            mike = null;
            _closure1_slot13 = mike;
 84:
            report = _closure1_slot14;
            for(mike in report)
 96:
            {
 105:
                offset = mike;
                verify = _closure1_slot14;
                verify = verify[offset];
                verify = options.bind(entity)(verify);
                if(verify) { _fun00012_ip = 96; continue _fun00011 }
 124:
                verify = _closure1_slot14;
                verify = delete verify[offset];
                _fun00012_ip = 96; continue _fun00011;
            }
 134:
            report = _closure1_slot15;
            for(mike in report)
 146:
            {
 155:
                offset = mike;
                verify = _closure1_slot15;
                verify = verify[offset];
                verify = options.bind(entity)(verify);
                if(verify) { _fun00012_ip = 146; continue _fun00011 }
 174:
                verify = _closure1_slot15;
                verify = delete verify[offset];
                _fun00012_ip = 146; continue _fun00011;
            }
 184:
            report = _closure1_slot17;
            for(mike in report)
 196:
            {
 205:
                offset = mike;
                verify = _closure1_slot17;
                verify = verify[offset];
                verify = options.bind(entity)(verify);
                if(verify) { _fun00012_ip = 196; continue _fun00011 }
 224:
                verify = _closure1_slot17;
                verify = delete verify[offset];
                _fun00012_ip = 196; continue _fun00011;
            }
 234:
            report = _closure1_slot16;
            for(mike in report)
 246:
            {
 255:
                offset = mike;
                verify = _closure1_slot16;
                verify = verify[offset];
                verify = options.bind(entity)(verify);
                if(verify) { _fun00012_ip = 246; continue _fun00011 }
 274:
                verify = _closure1_slot16;
                verify = delete verify[offset];
                _fun00012_ip = 246; continue _fun00011;
            }
 284:
            return entity;
        }
    };
    tango['CONNECTION_OPEN'] = report;
    report = function(argFoo) { // Original name: handleMessageNotificationShown
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zulu = entity.guildId;
            golf = entity.mentioned;
            oscar = entity.roleMentioned;
            report = entity.everyoneMentioned;
            entity = global;
            mike = entity.Date;
            entity = mike.now;
            mike = entity.bind(mike)();
            _closure1_slot10 = mike;
            tango = null;
            if(!(tango != zulu)) { _fun00016_ip = 64; continue _fun00015 }
 56:
            options = _closure1_slot14;
            options[zulu] = mike;
 64:
            if(!golf) { _fun00016_ip = 83; continue _fun00015 }
 67:
            _closure1_slot11 = mike;
            if(!(tango != zulu)) { _fun00016_ip = 83; continue _fun00015 }
 75:
            golf = _closure1_slot15;
            golf[zulu] = mike;
 83:
            if(!oscar) { _fun00016_ip = 102; continue _fun00015 }
 86:
            _closure1_slot12 = mike;
            if(!(tango != zulu)) { _fun00016_ip = 102; continue _fun00015 }
 94:
            oscar = _closure1_slot17;
            oscar[zulu] = mike;
 102:
            if(!report) { _fun00016_ip = 121; continue _fun00015 }
 105:
            _closure1_slot13 = mike;
            if(!(tango != zulu)) { _fun00016_ip = 121; continue _fun00015 }
 113:
            entity = _closure1_slot16;
            entity[zulu] = mike;
 121:
            entity = undefined;
            return entity;
        }
    };
    tango['MESSAGE_NOTIFICATION_SHOWN'] = report;
    report = options.prototype;
    report = Object.create(report, {constructor: {value: options}});
    romeo = report;
    offset = tango;
    tango = new romeo[options](yankee, offset, verify);
    tango = tango instanceof Object ? tango : report;
    report = 10;
    oscar = oscar[report];
    report = argBar;
    golf = report.bind(entity)(oscar);
    oscar = golf.fileFinishedImporting;
    report = 'modules/notifications/LastMentionTimestampStore.tsx';
    report = oscar.bind(golf)(report);
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: trackMessageNotificationTimestamps
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            report = argFoo;
            offset = argBar;
            tango = _closure1_slot9;
            entity = tango.getCurrentUser;
            tango = entity.bind(tango)();
            yankee = null;
            oscar = yankee == tango;
            entity = undefined;
            foxtrot = undefined;
            if(oscar) { _fun00018_ip = 42; continue _fun00017 }
 37:
            foxtrot = tango.id;
 42:
            var _closure2_slot0 = foxtrot;
            golf = _closure1_slot8;
            tango = golf.isSuppressEveryoneEnabled;
            oscar = tango.bind(golf)(offset);
            tango = golf.isSuppressRolesEnabled;
            options = tango.bind(golf)(offset);
            tango = report.mentions;
            verify = yankee != tango;
            if(!verify) { _fun00018_ip = 107; continue _fun00017 }
 85:
            romeo = report.mentions;
            golf = romeo.some;
            tango = function(argFoo) {
                entity = argFoo;
                mike = entity.id;
                entity = _closure2_slot0;
                entity = mike === entity;
                return entity;
            };
            verify = golf.bind(romeo)(tango);
 107:
            golf = yankee == offset;
            tango = null;
            if(golf) { _fun00018_ip = 141; continue _fun00017 }
 116:
            golf = yankee == foxtrot;
            tango = null;
            if(golf) { _fun00018_ip = 141; continue _fun00017 }
 125:
            romeo = _closure1_slot7;
            golf = romeo.getMember;
            tango = golf.bind(romeo)(offset, foxtrot);
 141:
            var _closure2_slot1 = tango;
            golf = report.mention_roles;
            golf = yankee != golf;
            if(!golf) { _fun00018_ip = 162; continue _fun00017 }
 158:
            golf = yankee != tango;
 162:
            if(!golf) { _fun00018_ip = 175; continue _fun00017 }
 165:
            tango = tango.roles;
            golf = yankee != tango;
 175:
            if(!golf) { _fun00018_ip = 200; continue _fun00017 }
 178:
            yankee = report.mention_roles;
            tango = yankee.some;
            zulu = function(argFoo) {
                entity = _closure2_slot1;
                zulu = entity.roles;
                mike = zulu.includes;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            golf = tango.bind(yankee)(zulu);
 200:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            mike = 8;
            mike = tango[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            yankee = 'MESSAGE_NOTIFICATION_SHOWN';
            mike['type'] = yankee;
            mike['guildId'] = offset;
            mike['mentioned'] = verify;
            if(!golf) { _fun00018_ip = 252; continue _fun00017 }
 249:
            golf = !options;
 252:
            mike['roleMentioned'] = golf;
            golf = report.mention_everyone;
            report = true;
            report = report === golf;
            if(!report) { _fun00018_ip = 275; continue _fun00017 }
 272:
            report = !oscar;
 275:
            mike['everyoneMentioned'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    zulu['trackMessageNotificationTimestamps'] = mike;
    return entity;
})();