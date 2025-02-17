// app/modules/guild_scheduled_events/useGetEventChannelsByType.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBar;
    options = argBaz;
    zulu = argFred;
    golf = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = golf;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun00002_ip = 46; continue _fun00001 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun00002_ip = 55; continue _fun00001 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun00002_ip = 343; continue _fun00001 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun00002_ip = 323; continue _fun00001 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun00002_ip = 283; continue _fun00001 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun00002_ip = 270; continue _fun00001 }
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
            if(!golf) { _fun00002_ip = 163; continue _fun00001 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun00002_ip = 179; continue _fun00001 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun00002_ip = 249; continue _fun00001 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun00002_ip = 234; continue _fun00001 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun00002_ip = 247; continue _fun00001 }
 234:
            verify = _closure1_slot9;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun00002_ip = 265; continue _fun00001;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun00002_ip = 283; continue _fun00001;
 270:
            golf = _closure1_slot9;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun00002_ip = 323; continue _fun00001 }
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
            if(!tango) { _fun00002_ip = 330; continue _fun00001 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun00004_ip = 56; continue _fun00003 }
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
                    _fun00004_ip = 67; continue _fun00003;
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
    var _closure1_slot8 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot9 = entity;
    tango = function(argFoo, argBar) { // Original name: getEventChannelsByType
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            options = argBar;
            zulu = arguments[2];
            golf = undefined;
            if(!(zulu === golf)) { _fun00008_ip = 30; continue _fun00007 }
 12:
            mike = _closure1_slot3;
            entity = new Array(1);
            entity[0] = mike;
            zulu = entity;
 30:
            mike = zulu;
            entity = mike[Symbol.iterator];
            mike = entity().next;
            zulu = mike().value;
            mike = entity;
            mike = mike === golf;
            report = undefined;
            if(mike) { _fun00008_ip = 55; continue _fun00007 }
 52:
            report = zulu;
 55:
            if(mike) { _fun00008_ip = 61; continue _fun00007 }
 58:
            entity.return();
 61:
            entity = null;
            if(!(entity != options)) { _fun00008_ip = 259; continue _fun00007 }
 70:
            entity = new Array(0);
            zulu = _closure1_slot8;
            tango = report.getChannels;
            mike = argFoo;
            tango = tango.bind(report)(mike);
            mike = _closure1_slot4;
            mike = tango[mike];
            report = zulu.bind(golf)(mike);
            zulu = report.bind(golf)();
            mike = zulu.done;
            tango = 5;
            if(mike) { _fun00008_ip = 257; continue _fun00007 }
 126:
            mike = zulu.value;
            verify = mike.channel;
            offset = _closure1_slot0;
            mike = _closure1_slot1;
            mike = mike[tango];
            offset = offset.bind(golf)(mike);
            mike = offset.getManageResourcePermissions;
            mike = mike.bind(offset)(verify);
            yankee = mike.canCreateGuildEvent;
            mike = mike.canManageAllEvents;
            if(yankee) { _fun00008_ip = 182; continue _fun00007 }
 179:
            yankee = mike;
 182:
            mike = verify.type;
            if(!(mike === options)) { _fun00008_ip = 242; continue _fun00007 }
 191:
            mike = verify.isGuildVoice;
            mike = mike.bind(verify)();
            if(!mike) { _fun00008_ip = 207; continue _fun00007 }
 204:
            mike = yankee;
 207:
            if(mike) { _fun00008_ip = 229; continue _fun00007 }
 210:
            offset = verify.isGuildStageVoice;
            offset = offset.bind(verify)();
            if(!offset) { _fun00008_ip = 226; continue _fun00007 }
 223:
            offset = yankee;
 226:
            mike = offset;
 229:
            if(!mike) { _fun00008_ip = 242; continue _fun00007 }
 232:
            mike = entity.push;
            mike = mike.bind(entity)(verify);
 242:
            verify = report.bind(golf)();
            mike = verify.done;
            zulu = verify;
            if(!mike) { _fun00008_ip = 126; continue _fun00007 }
 257:
            return entity;
 259:
            entity = new Array(0);
            return entity;
        }
    };
    var _closure1_slot10 = tango;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, report);
    entity = 0;
    report = golf[entity];
    entity = undefined;
    report = options.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    verify = golf[report];
    verify = options.bind(entity)(verify);
    var _closure1_slot3 = verify;
    report = golf[report];
    report = oscar.bind(entity)(report);
    report = report.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot4 = report;
    report = 2;
    report = golf[report];
    report = options.bind(entity)(report);
    var _closure1_slot5 = report;
    report = 3;
    report = golf[report];
    report = oscar.bind(entity)(report);
    options = report.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS;
    var _closure1_slot6 = options;
    report = report.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS;
    var _closure1_slot7 = report;
    report = 6;
    report = golf[report];
    golf = oscar.bind(entity)(report);
    oscar = golf.fileFinishedImporting;
    report = 'modules/guild_scheduled_events/useGetEventChannelsByType.tsx';
    report = oscar.bind(golf)(report);
    report = function(argFoo) { // Original name: useCanCreateEventInStageChannel
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tango = argFoo;
            var _closure2_slot0 = tango;
            golf = _closure1_slot0;
            options = _closure1_slot1;
            report = 4;
            mike = options[report];
            oscar = undefined;
            romeo = golf.bind(oscar)(mike);
            yankee = romeo.useStateFromStores;
            mike = _closure1_slot5;
            offset = new Array(1);
            offset[0] = mike;
            verify = new Array(1);
            verify[0] = tango;
            mike = function() {
                tango = _closure1_slot5;
                zulu = tango.can;
                mike = _closure1_slot7;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = yankee.bind(romeo)(offset, mike, verify);
            report = options[report];
            oscar = golf.bind(oscar)(report);
            report = oscar.useStateFromStores;
            golf = _closure1_slot2;
            zulu = new Array(1);
            zulu[0] = golf;
            entity = function() {
                zulu = _closure1_slot2;
                mike = zulu.getStageInstanceByChannel;
                entity = _closure2_slot0;
                entity = entity.id;
                entity = mike.bind(zulu)(entity);
                return entity;
            };
            zulu = report.bind(oscar)(zulu, entity);
            entity = tango.isGuildStageVoice;
            entity = entity.bind(tango)();
            if(!entity) { _fun00010_ip = 124; continue _fun00009 }
 121:
            entity = mike;
 124:
            if(!entity) { _fun00010_ip = 133; continue _fun00009 }
 127:
            mike = null;
            entity = mike == zulu;
 133:
            return entity;
        }
    };
    zulu['useCanCreateEventInStageChannel'] = report;
    report = function(argFoo) { // Original name: useCanCreateEventInVoiceChannel
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            oscar = _closure1_slot0;
            report = _closure1_slot1;
            tango = 4;
            report = report[tango];
            tango = undefined;
            oscar = oscar.bind(tango)(report);
            report = oscar.useStateFromStores;
            mike = _closure1_slot5;
            tango = new Array(1);
            tango[0] = mike;
            mike = new Array(1);
            mike[0] = zulu;
            entity = function() {
                tango = _closure1_slot5;
                zulu = tango.can;
                mike = _closure1_slot6;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = report.bind(oscar)(tango, entity, mike);
            entity = zulu.isGuildVoice;
            entity = entity.bind(zulu)();
            if(!entity) { _fun00012_ip = 87; continue _fun00011 }
 84:
            entity = mike;
 87:
            return entity;
        }
    };
    zulu['useCanCreateEventInVoiceChannel'] = report;
    zulu['getEventChannelsByType'] = tango;
    mike = function(argFoo, argBar) { // Original name: useGetEventChannelsByType
        golf = argFoo;
        oscar = argBar;
        var _closure2_slot0 = golf;
        var _closure2_slot1 = oscar;
        report = _closure1_slot0;
        tango = _closure1_slot1;
        zulu = 4;
        tango = tango[zulu];
        zulu = undefined;
        report = report.bind(zulu)(tango);
        tango = report.useStateFromStoresArray;
        mike = _closure1_slot3;
        zulu = new Array(1);
        zulu[0] = mike;
        mike = new Array(2);
        mike[0] = golf;
        mike[1] = oscar;
        entity = function() {
            report = _closure1_slot10;
            tango = _closure2_slot0;
            zulu = _closure2_slot1;
            entity = _closure1_slot3;
            mike = new Array(1);
            mike[0] = entity;
            entity = undefined;
            entity = report.bind(entity)(tango, zulu, mike);
            return entity;
        };
        entity = tango.bind(report)(zulu, entity, mike);
        return entity;
    };
    zulu['useGetEventChannelsByType'] = mike;
    return entity;
})();