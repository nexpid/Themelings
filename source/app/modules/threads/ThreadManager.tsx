// app/modules/threads/ThreadManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    oscar = argBaz;
    zulu = argFred;
    report = argPlugh;
    var _closure1_slot0 = oscar;
    var _closure1_slot1 = report;
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
            if(mike) { _fun00002_ip = 345; continue _fun00001 }
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
            verify = _closure1_slot10;
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
            golf = _closure1_slot10;
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
    var _closure1_slot10 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot5;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot4;
            entity = _closure1_slot12;
            entity = entity.bind(zulu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00008_ip = 71; continue _fun00007 }
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
    var _closure1_slot11 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
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
            _fun00010_ip = 76; continue _fun00009;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = report[entity];
    entity = undefined;
    tango = oscar.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 4;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 5;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 6;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    var _closure1_slot8 = tango;
    tango = 10;
    tango = report[tango];
    tango = oscar.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: ThreadManager
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            mike = _closure1_slot2;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot11;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = mike.bind(zulu)(report, tango, entity);
            mike = {};
            zulu = entity.handleChannelDelete;
            mike['CHANNEL_DELETE'] = zulu;
            zulu = entity.handleMessageCreate;
            mike['MESSAGE_CREATE'] = zulu;
            entity['actions'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot6;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot3;
        report = {};
        entity = 'handleChannelDelete';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                tango = entity.channel;
                entity = undefined;
                var _closure3_slot0 = entity;
                report = tango.guild_id;
                zulu = null;
                if(!(zulu != report)) { _fun00012_ip = 109; continue _fun00011 }
 27:
                oscar = _closure1_slot8;
                report = oscar.getAllThreadsForParent;
                tango = tango.id;
                tango = report.bind(oscar)(tango);
                _closure3_slot0 = tango;
                report = tango.length;
                tango = 0;
                if(!(report > tango)) { _fun00012_ip = 109; continue _fun00011 }
 65:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 7;
                zulu = report[zulu];
                zulu = tango.bind(entity)(zulu);
                tango = zulu.Emitter;
                zulu = tango.batched;
                mike = function() {
                    _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                        zulu = _closure1_slot9;
                        mike = _closure3_slot0;
                        entity = undefined;
                        oscar = zulu.bind(entity)(mike);
                        zulu = oscar.bind(entity)();
                        mike = zulu.done;
                        report = 8;
                        tango = 'THREAD_DELETE';
                        if(mike) { _fun00014_ip = 97; continue _fun00013 }
 40:
                        offset = zulu.value;
                        options = _closure1_slot0;
                        mike = _closure1_slot1;
                        mike = mike[report];
                        verify = options.bind(entity)(mike);
                        options = verify.dispatch;
                        mike = {};
                        mike['type'] = tango;
                        mike['channel'] = offset;
                        mike = options.bind(verify)(mike);
                        options = oscar.bind(entity)();
                        mike = options.done;
                        zulu = options;
                        if(!mike) { _fun00014_ip = 40; continue _fun00013 }
 97:
                        return entity;
                    }
                };
                mike = zulu.bind(tango)(mike);
 109:
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'handleMessageCreate';
        report['key'] = golf;
        oscar = function(argFoo) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                entity = argFoo;
                report = entity.channelId;
                entity = entity.message;
                tango = _closure1_slot8;
                mike = tango.getChannel;
                mike = mike.bind(tango)(report);
                tango = entity.author;
                report = null;
                golf = report == tango;
                entity = undefined;
                oscar = undefined;
                if(golf) { _fun00016_ip = 54; continue _fun00015 }
 49:
                oscar = tango.id;
 54:
                golf = _closure1_slot7;
                tango = golf.getId;
                tango = tango.bind(golf)();
                if(!(oscar === tango)) { _fun00016_ip = 238; continue _fun00015 }
 75:
                if(!(report != mike)) { _fun00016_ip = 238; continue _fun00015 }
 82:
                tango = mike.isActiveThread;
                tango = tango.bind(mike)();
                if(!tango) { _fun00016_ip = 238; continue _fun00015 }
 98:
                tango = global;
                golf = tango.Date;
                options = mike.threadMetadata;
                verify = report == options;
                oscar = undefined;
                if(verify) { _fun00016_ip = 127; continue _fun00015 }
 121:
                oscar = options.archiveTimestamp;
 127:
                options = report != oscar;
                report = 0;
                if(!options) { _fun00016_ip = 139; continue _fun00015 }
 136:
                report = oscar;
 139:
                oscar = golf.prototype;
                oscar = Object.create(oscar, {constructor: {value: golf}});
                yankee = oscar;
                offset = report;
                report = new yankee[golf](offset, verify);
                oscar = report instanceof Object ? report : oscar;
                report = oscar.getTime;
                report = report.bind(oscar)();
                oscar = tango.Date;
                tango = oscar.now;
                tango = tango.bind(oscar)();
                report = tango - report;
                tango = 5000;
                if(!(report < tango)) { _fun00016_ip = 238; continue _fun00015 }
 201:
                tango = _closure1_slot0;
                report = _closure1_slot1;
                zulu = 9;
                zulu = report[zulu];
                tango = tango.bind(entity)(zulu);
                zulu = tango.resort;
                mike = mike.parent_id;
                mike = zulu.bind(tango)(mike);
 238:
                return entity;
            }
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    romeo = tango;
    mike = new romeo[mike](yankee);
    mike = mike instanceof Object ? mike : tango;
    tango = 11;
    report = report[tango];
    tango = argBar;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/threads/ThreadManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();