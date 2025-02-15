// app/modules/channel/SelectedChannelManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun124510: for(var _fun124510_ip = 0; ; ) switch(_fun124510_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot17;
            entity = entity.bind(zulu)();
            if(entity) { _fun124510_ip = 51; continue _fun124510 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun124510_ip = 92; continue _fun124510;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun124510_ip = 71; continue _fun124510 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun124511: for(var _fun124511_ip = 0; ; ) switch(_fun124511_ip) {
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
 72: // try_end0
            _fun124511_ip = 76; continue _fun124511;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot17 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot17 = entity;
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
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 5;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 6;
    options = oscar[tango];
    options = golf.bind(entity)(options);
    var _closure1_slot9 = options;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.findFirstVoiceChannelId;
    var _closure1_slot10 = tango;
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    options = tango.ChannelTypes;
    var _closure1_slot12 = options;
    options = tango.Routes;
    var _closure1_slot13 = options;
    options = tango.ME;
    var _closure1_slot14 = options;
    tango = tango.NULL_STRING_GUILD_ID;
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: SelectedChannelManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot3;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot16;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            zulu = entity.handleGuildCreate;
            mike['GUILD_CREATE'] = zulu;
            zulu = entity.handleChannelCreate;
            mike['CHANNEL_CREATE'] = zulu;
            zulu = entity.handleLogout;
            mike['LOGOUT'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'handleGuildCreate';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun124516: for(var _fun124516_ip = 0; ; ) switch(_fun124516_ip) {
 0:
                entity = argFoo;
                entity = entity.guild;
                report = _closure1_slot9;
                zulu = report.getChannelId;
                mike = _closure1_slot14;
                zulu = zulu.bind(report)(mike);
                mike = report.getVoiceChannelId;
                report = mike.bind(report)();
                mike = entity.id;
                if(!(mike === zulu)) { _fun124516_ip = 87; continue _fun124516 }
 49:
                oscar = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 9;
                zulu = zulu[mike];
                mike = undefined;
                oscar = oscar.bind(mike)(zulu);
                zulu = oscar.transitionToGuild;
                mike = entity.id;
                mike = zulu.bind(oscar)(mike);
 87:
                mike = entity.id;
                mike = mike === report;
                if(!mike) { _fun124516_ip = 111; continue _fun124516 }
 99:
                oscar = entity.unavailable;
                zulu = false;
                mike = zulu !== oscar;
 111:
                if(!mike) { _fun124516_ip = 120; continue _fun124516 }
 114:
                zulu = null;
                mike = zulu == report;
 120:
                if(!mike) { _fun124516_ip = 170; continue _fun124516 }
 123:
                zulu = _closure1_slot1;
                report = _closure1_slot2;
                mike = 10;
                mike = report[mike];
                report = undefined;
                zulu = zulu.bind(report)(mike);
                mike = zulu.selectVoiceChannel;
                tango = _closure1_slot10;
                entity = entity.id;
                entity = tango.bind(report)(entity);
                entity = mike.bind(zulu)(entity);
 170:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golf = 'handleChannelCreate';
        report['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun124517: for(var _fun124517_ip = 0; ; ) switch(_fun124517_ip) {
 0:
                entity = argFoo;
                mike = entity.channel;
                tango = mike.type;
                zulu = _closure1_slot12;
                zulu = zulu.GROUP_DM;
                if(!(tango === zulu)) { _fun124517_ip = 234; continue _fun124517 }
 33:
                report = mike.originChannelId;
                oscar = _closure1_slot9;
                tango = oscar.getChannelId;
                zulu = _closure1_slot15;
                oscar = tango.bind(oscar)(zulu);
                tango = _closure1_slot11;
                zulu = tango.getGuildId;
                tango = zulu.bind(tango)();
                zulu = null;
                tango = zulu == tango;
                if(!tango) { _fun124517_ip = 85; continue _fun124517 }
 81:
                tango = zulu != report;
 85:
                if(!tango) { _fun124517_ip = 92; continue _fun124517 }
 88:
                tango = report === oscar;
 92:
                if(!tango) { _fun124517_ip = 153; continue _fun124517 }
 95:
                golf = _closure1_slot0;
                oscar = _closure1_slot2;
                tango = 11;
                oscar = oscar[tango];
                tango = undefined;
                golf = golf.bind(tango)(oscar);
                oscar = golf.transitionTo;
                offset = _closure1_slot13;
                verify = offset.CHANNEL;
                options = _closure1_slot14;
                tango = mike.id;
                tango = verify.bind(offset)(options, tango);
                tango = oscar.bind(golf)(tango);
 153:
                zulu = zulu != report;
                if(!zulu) { _fun124517_ip = 178; continue _fun124517 }
 160:
                oscar = _closure1_slot9;
                tango = oscar.getVoiceChannelId;
                tango = tango.bind(oscar)();
                zulu = report === tango;
 178:
                if(!zulu) { _fun124517_ip = 234; continue _fun124517 }
 181:
                report = _closure1_slot1;
                tango = _closure1_slot2;
                zulu = 10;
                tango = tango[zulu];
                zulu = undefined;
                tango = report.bind(zulu)(tango);
                zulu = tango.selectVoiceChannel;
                mike = mike.id;
                report = _closure1_slot8;
                entity = report.isVideoEnabled;
                entity = entity.bind(report)();
                entity = zulu.bind(tango)(mike, entity);
 234:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'handleLogout';
        report['key'] = golf;
        oscar = function() { // Original name: value
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 12;
            mike = mike[entity];
            entity = undefined;
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {'type': 'VOICE_CHANNEL_SELECT', 'channelId': null, 'guildId': null, 'video': false, 'currentVoiceChannelId': null};
            mike = zulu.bind(tango)(mike);
            return entity;
        };
        report['value'] = oscar;
        entity[2] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 14;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/channel/SelectedChannelManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();