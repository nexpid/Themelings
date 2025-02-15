// app/modules/message_previews/PreviewData.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
            verify = _closure1_slot8;
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
            golf = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
    var _closure1_slot8 = entity;
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
    mike = function() {
        tango = _closure1_slot4;
        zulu = function() { // Original name: PreviewData
            zulu = this;
            tango = _closure1_slot3;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = true;
            zulu['localNeeded'] = mike;
            mike = global;
            mike = mike.Map;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            golf = tango;
            mike = new golf[mike](oscar);
            mike = mike instanceof Object ? mike : tango;
            zulu['messages'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'isLatest';
        entity['key'] = mike;
        mike = function(argFoo, argBar) { // Original name: value
            mike = argBar;
            tango = this;
            zulu = tango.messageGeneration;
            entity = argFoo;
            entity = zulu.bind(tango)(entity, mike);
            entity = entity === mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(10);
        mike[0] = entity;
        entity = {};
        oscar = 'messageGeneration';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                golf = argFoo;
                zulu = argBar;
                tango = this;
                mike = tango.messages;
                entity = mike.get;
                options = entity.bind(mike)(golf);
                report = null;
                mike = report == options;
                entity = -inf;
                if(mike) { _fun00008_ip = 147; continue _fun00007 }
 44:
                mike = options.generation;
                if(!(mike !== zulu)) { _fun00008_ip = 95; continue _fun00007 }
 54:
                mike = options.message;
                if(!(report != mike)) { _fun00008_ip = 95; continue _fun00007 }
 63:
                mike = options.message;
                report = mike.id;
                oscar = _closure1_slot6;
                mike = oscar.lastMessageId;
                mike = mike.bind(oscar)(golf);
                if(!(report !== mike)) { _fun00008_ip = 103; continue _fun00007 }
 95:
                mike = options.generation;
                _fun00008_ip = 144; continue _fun00007;
 103:
                oscar = tango.messages;
                report = oscar.set;
                tango = {};
                offset = tango;
                verify = options;
                options = copyDataProperties(offset, verify);
                options = 'generation';
                tango[options] = zulu;
                tango = report.bind(oscar)(golf, tango);
                mike = zulu;
 144:
                entity = mike;
 147:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'messageId';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                zulu = entity.messages;
                mike = zulu.get;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00010_ip = 52; continue _fun00009 }
 33:
                zulu = zulu.message;
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00010_ip = 52; continue _fun00009 }
 47:
                mike = zulu.id;
 52:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun00010_ip = 64; continue _fun00009 }
 61:
                entity = mike;
 64:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'messageRecord';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = this;
                zulu = entity.messages;
                mike = zulu.get;
                entity = argFoo;
                zulu = mike.bind(zulu)(entity);
                entity = null;
                mike = entity == zulu;
                if(mike) { _fun00012_ip = 40; continue _fun00011 }
 31:
                tango = zulu.message;
                mike = entity == tango;
 40:
                if(mike) { _fun00012_ip = 59; continue _fun00011 }
 43:
                report = zulu.message;
                tango = _closure1_slot5;
                mike = report instanceof tango;
 59:
                if(mike) { _fun00012_ip = 109; continue _fun00011 }
 62:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 4;
                tango = tango[mike];
                mike = undefined;
                report = report.bind(mike)(tango);
                tango = report.createMessageRecord;
                mike = zulu.message;
                mike = tango.bind(report)(mike);
                zulu['message'] = mike;
 109:
                tango = entity == zulu;
                mike = undefined;
                if(tango) { _fun00012_ip = 123; continue _fun00011 }
 118:
                mike = zulu.message;
 123:
                zulu = entity != mike;
                entity = null;
                if(!zulu) { _fun00012_ip = 135; continue _fun00011 }
 132:
                entity = mike;
 135:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'has';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.messages;
            mike = zulu.has;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity['value'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'put';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            entity = this;
            tango = entity.messages;
            zulu = tango.set;
            mike = {};
            entity = argBar;
            mike['message'] = entity;
            entity = argBaz;
            mike['generation'] = entity;
            entity = argFoo;
            entity = zulu.bind(tango)(entity, mike);
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'putNew';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar, argBaz) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                tango = argBar;
                zulu = this;
                mike = zulu.messages;
                entity = mike.get;
                oscar = entity.bind(mike)(report);
                mike = null;
                entity = mike != tango;
                if(!entity) { _fun00014_ip = 120; continue _fun00013 }
 34:
                verify = tango.id;
                golf = mike == oscar;
                offset = undefined;
                options = undefined;
                if(golf) { _fun00014_ip = 69; continue _fun00013 }
 50:
                oscar = oscar.message;
                golf = mike == oscar;
                options = undefined;
                if(golf) { _fun00014_ip = 69; continue _fun00013 }
 64:
                options = oscar.id;
 69:
                mike = mike == options;
                if(mike) { _fun00014_ip = 117; continue _fun00013 }
 76:
                golf = _closure1_slot1;
                yankee = _closure1_slot2;
                oscar = 5;
                oscar = yankee[oscar];
                golf = golf.bind(offset)(oscar);
                oscar = golf.compare;
                golf = oscar.bind(golf)(verify, options);
                oscar = 0;
                mike = golf > oscar;
 117:
                entity = mike;
 120:
                if(!entity) { _fun00014_ip = 139; continue _fun00013 }
 123:
                mike = zulu.put;
                entity = argBaz;
                entity = mike.bind(zulu)(report, tango, entity);
 139:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'putMany';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscar = argBar;
                report = this;
                zulu = _closure1_slot7;
                entity = undefined;
                mike = argFoo;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun00016_ip = 73; continue _fun00015 }
 35:
                options = zulu.value;
                golf = report.put;
                mike = options.channel_id;
                mike = golf.bind(report)(mike, options, oscar);
                golf = tango.bind(entity)();
                mike = golf.done;
                zulu = golf;
                if(!mike) { _fun00016_ip = 35; continue _fun00015 }
 73:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'update';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                options = argFoo;
                entity = this;
                mike = options.id;
                oscar = null;
                if(!(oscar != mike)) { _fun00018_ip = 205; continue _fun00017 }
 20:
                mike = options.channel_id;
                if(!(oscar != mike)) { _fun00018_ip = 205; continue _fun00017 }
 32:
                tango = options.channel_id;
                zulu = entity.messages;
                mike = zulu.get;
                report = mike.bind(zulu)(tango);
                mike = oscar == report;
                golf = undefined;
                zulu = undefined;
                if(mike) { _fun00018_ip = 83; continue _fun00017 }
 64:
                mike = report.message;
                oscar = oscar == mike;
                zulu = undefined;
                if(oscar) { _fun00018_ip = 83; continue _fun00017 }
 78:
                zulu = mike.id;
 83:
                mike = options.id;
                if(!(zulu === mike)) { _fun00018_ip = 205; continue _fun00017 }
 92:
                oscar = report.message;
                mike = _closure1_slot5;
                mike = oscar instanceof mike;
                oscar = _closure1_slot0;
                verify = _closure1_slot2;
                zulu = 4;
                zulu = verify[zulu];
                golf = oscar.bind(golf)(zulu);
                if(mike) { _fun00018_ip = 150; continue _fun00017 }
 131:
                zulu = golf.updateServerMessage;
                mike = report.message;
                oscar = zulu.bind(golf)(mike, options);
                _fun00018_ip = 167; continue _fun00017;
 150:
                zulu = golf.updateMessageRecord;
                mike = report.message;
                oscar = zulu.bind(golf)(mike, options);
 167:
                zulu = entity.messages;
                mike = zulu.set;
                entity = {};
                yankee = entity;
                offset = report;
                report = copyDataProperties(yankee, offset);
                report = 'message';
                entity[report] = oscar;
                entity = mike.bind(zulu)(tango, entity);
 205:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'delete';
        entity['key'] = oscar;
        report = function(argFoo) { // Original name: value
            entity = this;
            zulu = entity.messages;
            mike = zulu.delete;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        entity['value'] = report;
        mike[9] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/message_previews/PreviewData.tsx';
    tango = report.bind(oscar)(tango);
    zulu['PreviewData'] = mike;
    return entity;
})();