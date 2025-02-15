// discord_common/js/packages/media-engine/native/videoSinks.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun50310: for(var _fun50310_ip = 0; ; ) switch(_fun50310_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun50310_ip = 46; continue _fun50310 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun50310_ip = 55; continue _fun50310 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun50310_ip = 343; continue _fun50310 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun50310_ip = 323; continue _fun50310 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun50310_ip = 283; continue _fun50310 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun50310_ip = 270; continue _fun50310 }
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
            if(!golf) { _fun50310_ip = 163; continue _fun50310 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun50310_ip = 179; continue _fun50310 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun50310_ip = 249; continue _fun50310 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun50310_ip = 249; continue _fun50310 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun50310_ip = 234; continue _fun50310 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun50310_ip = 247; continue _fun50310 }
 234:
            verify = _closure1_slot5;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun50310_ip = 265; continue _fun50310;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun50310_ip = 283; continue _fun50310;
 270:
            golf = _closure1_slot5;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun50310_ip = 323; continue _fun50310 }
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
            if(!tango) { _fun50310_ip = 330; continue _fun50310 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun50311: for(var _fun50311_ip = 0; ; ) switch(_fun50311_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun50311_ip = 56; continue _fun50311 }
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
                    _fun50311_ip = 67; continue _fun50311;
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
    var _closure1_slot4 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun50312: for(var _fun50312_ip = 0; ; ) switch(_fun50312_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun50312_ip = 23; continue _fun50312 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun50312_ip = 33; continue _fun50312 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun50312_ip = 70; continue _fun50312 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun50312_ip = 55; continue _fun50312 }
 70:
            return entity;
        }
    };
    var _closure1_slot5 = entity;
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
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function() { // Original name: VideoSinks
            zulu = this;
            tango = _closure1_slot2;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = {};
            zulu['streams'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'addSink';
        entity['key'] = mike;
        mike = function(argFoo, argBar, argBaz) { // Original name: value
            _fun50315: for(var _fun50315_ip = 0; ; ) switch(_fun50315_ip) {
 0:
                oscar = argFoo;
                options = this;
                mike = options.streams;
                tango = mike[oscar];
                entity = null;
                if(!(entity == tango)) { _fun50315_ip = 57; continue _fun50315 }
 22:
                entity = global;
                entity = entity.Map;
                zulu = entity.prototype;
                zulu = Object.create(zulu, {constructor: {value: entity}});
                foxtrot = zulu;
                entity = new foxtrot[entity](romeo);
                entity = entity instanceof Object ? entity : zulu;
                mike[oscar] = entity;
                tango = entity;
 57:
                mike = tango.size;
                entity = 0;
                if(!(entity === mike)) { _fun50315_ip = 157; continue _fun50315 }
 68:
                zulu = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getVoiceEngine;
                report = entity.bind(mike)();
                zulu = report.setVideoOutputSink;
                golf = options.handleImageData;
                mike = golf.bind;
                verify = report.signalVideoOutputSinkReady;
                entity = verify.bind;
                entity = entity.bind(verify)(report, oscar);
                mike = mike.bind(golf)(options, entity, tango);
                entity = true;
                entity = zulu.bind(report)(oscar, mike, entity);
 157:
                zulu = tango.set;
                mike = argBar;
                entity = argBaz;
                entity = zulu.bind(tango)(mike, entity);
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = mike;
        mike = new Array(3);
        mike[0] = entity;
        entity = {};
        oscar = 'removeSink';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun50316: for(var _fun50316_ip = 0; ; ) switch(_fun50316_ip) {
 0:
                zulu = argFoo;
                entity = this;
                entity = entity.streams;
                mike = entity[zulu];
                tango = null;
                if(!(tango != mike)) { _fun50316_ip = 96; continue _fun50316 }
 22:
                report = mike.delete;
                tango = argBar;
                tango = report.bind(mike)(tango);
                tango = mike.size;
                mike = 0;
                if(!(mike === tango)) { _fun50316_ip = 96; continue _fun50316 }
 46:
                entity = delete entity[zulu];
                tango = _closure1_slot0;
                mike = _closure1_slot1;
                entity = 2;
                mike = mike[entity];
                entity = undefined;
                mike = tango.bind(entity)(mike);
                entity = mike.getVoiceEngine;
                mike = entity.bind(mike)();
                entity = mike.setVideoOutputSink;
                entity = entity.bind(mike)(zulu);
 96:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'handleImageData';
        entity['key'] = oscar;
        report = function(argFoo, argBar, argBaz) { // Original name: value
            _fun50317: for(var _fun50317_ip = 0; ; ) switch(_fun50317_ip) {
 0:
                mike = argBar;
                report = argBaz;
                zulu = _closure1_slot4;
                entity = mike.values;
                mike = entity.bind(mike)();
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.bind(entity)();
                mike = zulu.done;
                if(mike) { _fun50317_ip = 66; continue _fun50317 }
 41:
                mike = zulu.value;
                mike = mike.bind(entity)(report);
                oscar = tango.bind(entity)();
                mike = oscar.done;
                zulu = oscar;
                if(!mike) { _fun50317_ip = 41; continue _fun50317 }
 66:
                mike = argFoo;
                mike = mike.bind(entity)();
                return entity;
            }
        };
        entity['value'] = report;
        mike[2] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    foxtrot = tango;
    mike = new foxtrot[mike](romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = '../discord_common/js/packages/media-engine/native/videoSinks.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();