// app/modules/local_message_caching/LocalMessageCacheManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun111235: for(var _fun111235_ip = 0; ; ) switch(_fun111235_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun111235_ip = 46; continue _fun111235 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun111235_ip = 55; continue _fun111235 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun111235_ip = 345; continue _fun111235 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun111235_ip = 323; continue _fun111235 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun111235_ip = 283; continue _fun111235 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun111235_ip = 270; continue _fun111235 }
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
            if(!golf) { _fun111235_ip = 163; continue _fun111235 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun111235_ip = 179; continue _fun111235 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun111235_ip = 249; continue _fun111235 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun111235_ip = 249; continue _fun111235 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun111235_ip = 234; continue _fun111235 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun111235_ip = 247; continue _fun111235 }
 234:
            verify = _closure1_slot37;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun111235_ip = 265; continue _fun111235;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun111235_ip = 283; continue _fun111235;
 270:
            golf = _closure1_slot37;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun111235_ip = 323; continue _fun111235 }
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
            if(!tango) { _fun111235_ip = 330; continue _fun111235 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun111236: for(var _fun111236_ip = 0; ; ) switch(_fun111236_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun111236_ip = 56; continue _fun111236 }
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
                    _fun111236_ip = 67; continue _fun111236;
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
    var _closure1_slot36 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun111237: for(var _fun111237_ip = 0; ; ) switch(_fun111237_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun111237_ip = 23; continue _fun111237 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun111237_ip = 33; continue _fun111237 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun111237_ip = 70; continue _fun111237 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun111237_ip = 55; continue _fun111237 }
 70:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun111238: for(var _fun111238_ip = 0; ; ) switch(_fun111238_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot7;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot6;
            entity = _closure1_slot39;
            entity = entity.bind(zulu)();
            if(entity) { _fun111238_ip = 51; continue _fun111238 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun111238_ip = 92; continue _fun111238;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun111238_ip = 71; continue _fun111238 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot7;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun111239: for(var _fun111239_ip = 0; ; ) switch(_fun111239_ip) {
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
            _fun111239_ip = 76; continue _fun111239;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot39 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot39 = entity;
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
    var _closure1_slot4 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot5 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot7 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot8 = tango;
    yankee = 5;
    tango = oscar[yankee];
    tango = golf.bind(entity)(tango);
    var _closure1_slot9 = tango;
    tango = 6;
    tango = oscar[tango];
    options = golf.bind(entity)(tango);
    tango = 7;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot10 = tango;
    tango = 8;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot11 = tango;
    tango = 9;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot12 = tango;
    tango = 10;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot13 = tango;
    tango = 11;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot14 = tango;
    tango = 12;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot15 = tango;
    tango = 13;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.MessageStates;
    var _closure1_slot16 = tango;
    verify = 14;
    tango = oscar[verify];
    offset = report.bind(entity)(tango);
    tango = offset.createLock;
    tango = tango.bind(offset)();
    var _closure1_slot17 = tango;
    tango = 15;
    tango = oscar[tango];
    romeo = golf.bind(entity)(tango);
    tango = romeo.prototype;
    offset = Object.create(tango, {constructor: {value: romeo}});
    kilo = 'LocalMessageCacheManager';
    sizing = offset;
    tango = new sizing[romeo](kilo, backup);
    tango = tango instanceof Object ? tango : offset;
    var _closure1_slot18 = tango;
    tango = 16;
    offset = oscar[tango];
    offset = golf.bind(entity)(offset);
    offset = offset.Millis;
    offset = offset.MINUTE;
    offset = yankee * offset;
    var _closure1_slot19 = offset;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    tango = tango.Millis;
    tango = tango.DAY;
    tango = verify * tango;
    var _closure1_slot20 = tango;
    tango = function() { // Original name: _getMessages
        _fun111242: for(var _fun111242_ip = 0; ; ) switch(_fun111242_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.Storage;
            mike = zulu.get;
            entity = 'LocalMessageCacheManagerMessageCacheKey';
            entity = mike.bind(zulu)(entity);
            mike = null;
            if(!(mike == entity)) { _fun111242_ip = 55; continue _fun111242 }
 53:
            entity = {};
 55:
            return entity;
        }
    };
    var _closure1_slot21 = tango;
    tango = function(argFoo) { // Original name: _getMessage
        mike = _closure1_slot21;
        entity = undefined;
        mike = mike.bind(entity)();
        entity = argFoo;
        entity = mike[entity];
        return entity;
    };
    var _closure1_slot22 = tango;
    tango = function(argFoo, argBar) { // Original name: _writeMessage
        _fun111244: for(var _fun111244_ip = 0; ; ) switch(_fun111244_ip) {
 0:
            zulu = argFoo;
            oscar = argBar;
            offset = _closure1_slot18;
            verify = offset.verbose;
            golf = null;
            entity = golf == oscar;
            tango = undefined;
            options = undefined;
            if(entity) { _fun111244_ip = 37; continue _fun111244 }
 32:
            options = oscar.id;
 37:
            entity = golf == oscar;
            report = undefined;
            if(entity) { _fun111244_ip = 51; continue _fun111244 }
 46:
            report = oscar.channel_id;
 51:
            entity = '_writeMessage';
            entity = verify.bind(offset)(entity, options, report);
            entity = _closure1_slot21;
            entity = entity.bind(tango)();
            if(!(golf == oscar)) { _fun111244_ip = 82; continue _fun111244 }
 76:
            report = delete entity[zulu];
            _fun111244_ip = 167; continue _fun111244;
 82:
            report = {};
            foxtrot = report;
            romeo = oscar;
            options = copyDataProperties(foxtrot, romeo);
            oscar = oscar.content;
            options = golf != oscar;
            golf = '';
            if(!options) { _fun111244_ip = 113; continue _fun111244 }
 110:
            golf = oscar;
 113:
            oscar = 'content';
            report[oscar] = golf;
            entity[zulu] = report;
            options = _closure1_slot18;
            golf = options.verbose;
            report = entity[zulu];
            oscar = report.id;
            zulu = entity[zulu];
            report = zulu.channel_id;
            zulu = '_writeMessage after write';
            zulu = golf.bind(options)(zulu, oscar, report);
 167:
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 17;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            tango = mike.Storage;
            zulu = tango.set;
            mike = 'LocalMessageCacheManagerMessageCacheKey';
            mike = zulu.bind(tango)(mike, entity);
            return entity;
        }
    };
    var _closure1_slot23 = tango;
    tango = function(argFoo) { // Original name: _getKeyForFileId
        _fun111245: for(var _fun111245_ip = 0; ; ) switch(_fun111245_ip) {
 0:
            yankee = argFoo;
            entity = _closure1_slot21;
            mike = undefined;
            tango = entity.bind(mike)();
            entity = global;
            zulu = entity.Object;
            entity = zulu.entries;
            verify = entity.bind(zulu)(tango);
            entity = verify.length;
            options = 0;
            entity = options < entity;
            golf = 2;
            oscar = 1;
            report = null;
            tango = 0;
            if(!entity) { _fun111245_ip = 117; continue _fun111245 }
 59:
            zulu = verify[tango];
            entity = _closure1_slot11;
            zulu = entity.bind(mike)(zulu, golf);
            entity = zulu[options];
            zulu = zulu[oscar];
            romeo = zulu.file;
            foxtrot = report == romeo;
            zulu = undefined;
            if(foxtrot) { _fun111245_ip = 101; continue _fun111245 }
 96:
            zulu = romeo.id;
 101:
            if(!(zulu !== yankee)) { _fun111245_ip = 119; continue _fun111245 }
 105:
            tango = tango + 1;
            zulu = verify.length;
            if(tango < zulu) { _fun111245_ip = 59; continue _fun111245 }
 117:
            return mike;
 119:
            return entity;
        }
    };
    var _closure1_slot24 = tango;
    tango = function(argFoo) { // Original name: cacheSendingMessage
        zulu = argFoo;
        mike = zulu.key;
        var _closure2_slot0 = mike;
        mike = zulu.message;
        tango = zulu.file;
        var _closure2_slot1 = tango;
        zulu = zulu.sendMessageOptions;
        var _closure2_slot2 = zulu;
        zulu = mike.content;
        var _closure2_slot3 = zulu;
        zulu = mike.id;
        var _closure2_slot4 = zulu;
        zulu = mike.channel_id;
        var _closure2_slot5 = zulu;
        zulu = mike.tts;
        var _closure2_slot6 = zulu;
        zulu = mike.nonce;
        var _closure2_slot7 = zulu;
        zulu = mike.timestamp;
        var _closure2_slot8 = zulu;
        zulu = mike.type;
        var _closure2_slot9 = zulu;
        zulu = mike.flags;
        var _closure2_slot10 = zulu;
        mike = mike.state;
        var _closure2_slot11 = mike;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function() {
            _fun111247: for(var _fun111247_ip = 0; ; ) switch(_fun111247_ip) {
 0:
                mike = _closure1_slot22;
                tango = _closure2_slot0;
                entity = undefined;
                oscar = mike.bind(entity)(tango);
                zulu = _closure1_slot23;
                mike = {};
                golf = _closure2_slot3;
                mike['content'] = golf;
                golf = _closure2_slot9;
                mike['type'] = golf;
                golf = _closure2_slot11;
                verify = null;
                if(!(verify == golf)) { _fun111247_ip = 65; continue _fun111247 }
 53:
                report = _closure1_slot16;
                report = report.SENDING;
                _fun111247_ip = 69; continue _fun111247;
 65:
                report = _closure2_slot11;
 69:
                mike['state'] = report;
                report = _closure2_slot5;
                mike['channel_id'] = report;
                report = _closure2_slot6;
                mike['tts'] = report;
                report = _closure2_slot4;
                mike['id'] = report;
                report = _closure2_slot7;
                mike['nonce'] = report;
                report = _closure2_slot8;
                mike['timestamp'] = report;
                report = _closure2_slot10;
                mike['flags'] = report;
                report = _closure2_slot1;
                if(!(verify == report)) { _fun111247_ip = 149; continue _fun111247 }
 132:
                golf = verify == oscar;
                report = undefined;
                if(golf) { _fun111247_ip = 147; continue _fun111247 }
 141:
                report = oscar.file;
 147:
                _fun111247_ip = 153; continue _fun111247;
 149:
                report = _closure2_slot1;
 153:
                mike['file'] = report;
                report = _closure2_slot2;
                if(!(verify == report)) { _fun111247_ip = 183; continue _fun111247 }
 166:
                golf = verify == oscar;
                report = undefined;
                if(golf) { _fun111247_ip = 181; continue _fun111247 }
 175:
                report = oscar.sendMessageOptions;
 181:
                _fun111247_ip = 214; continue _fun111247;
 183:
                oscar = {};
                golf = _closure2_slot2;
                if(!(verify == golf)) { _fun111247_ip = 197; continue _fun111247 }
 193:
                golf = {};
                _fun111247_ip = 201; continue _fun111247;
 197:
                golf = _closure2_slot2;
 201:
                yankee = oscar;
                offset = golf;
                golf = copyDataProperties(yankee, offset);
                report = oscar;
 214:
                mike['sendMessageOptions'] = report;
                mike = zulu.bind(entity)(tango, mike);
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot25 = tango;
    tango = function(argFoo) { // Original name: removeCachedMessage
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function() {
            tango = _closure1_slot23;
            zulu = _closure2_slot0;
            mike = undefined;
            entity = null;
            entity = tango.bind(mike)(zulu, entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot26 = tango;
    tango = function(argFoo) { // Original name: removeCachedMessageWithMessageId
        mike = argFoo;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function() {
            _fun111251: for(var _fun111251_ip = 0; ; ) switch(_fun111251_ip) {
 0:
                offset = _closure2_slot0;
                zulu = _closure1_slot21;
                entity = undefined;
                report = zulu.bind(entity)();
                zulu = global;
                tango = zulu.Object;
                zulu = tango.entries;
                verify = zulu.bind(tango)(report);
                zulu = verify.length;
                options = 0;
                zulu = options < zulu;
                golf = 2;
                oscar = 1;
                report = 0;
                tango = undefined;
                if(!zulu) { _fun111251_ip = 111; continue _fun111251 }
 63:
                yankee = verify[report];
                zulu = _closure1_slot11;
                zulu = zulu.bind(entity)(yankee, golf);
                tango = zulu[options];
                zulu = zulu[oscar];
                zulu = zulu.id;
                if(!(zulu !== offset)) { _fun111251_ip = 111; continue _fun111251 }
 94:
                report = report + 1;
                zulu = verify.length;
                zulu = report < zulu;
                tango = undefined;
                if(zulu) { _fun111251_ip = 63; continue _fun111251 }
 111:
                zulu = null;
                if(!(zulu != tango)) { _fun111251_ip = 127; continue _fun111251 }
 117:
                mike = _closure1_slot23;
                mike = mike.bind(entity)(tango, zulu);
 127:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot27 = tango;
    tango = function(argFoo, argBar) { // Original name: updateCachedMessage
        mike = argFoo;
        var _closure2_slot0 = mike;
        mike = argBar;
        var _closure2_slot1 = mike;
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function() {
            _fun111253: for(var _fun111253_ip = 0; ; ) switch(_fun111253_ip) {
 0:
                report = _closure1_slot22;
                tango = _closure2_slot0;
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = null;
                if(!(tango != report)) { _fun111253_ip = 64; continue _fun111253 }
 27:
                tango = {};
                golf = tango;
                oscar = report;
                report = copyDataProperties(golf, oscar);
                oscar = _closure2_slot1;
                golf = tango;
                report = copyDataProperties(golf, oscar);
                zulu = _closure1_slot23;
                mike = _closure2_slot0;
                mike = zulu.bind(entity)(mike, tango);
 64:
                return entity;
            }
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot28 = tango;
    tango = function() { // Original name: getAllCachedMessages
        zulu = _closure1_slot17;
        mike = _closure1_slot21;
        entity = undefined;
        entity = zulu.bind(entity)(mike);
        return entity;
    };
    var _closure1_slot29 = tango;
    tango = function() { // Original name: removeAllCachedMessages
        zulu = _closure1_slot17;
        mike = undefined;
        entity = function() {
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 17;
            mike = mike[entity];
            entity = undefined;
            entity = zulu.bind(entity)(mike);
            zulu = entity.Storage;
            mike = zulu.remove;
            entity = 'LocalMessageCacheManagerMessageCacheKey';
            entity = mike.bind(zulu)(entity);
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        return entity;
    };
    var _closure1_slot30 = tango;
    tango = function(argFoo, argBar) { // Original name: messageTimestampIsInInterval
        _fun111257: for(var _fun111257_ip = 0; ; ) switch(_fun111257_ip) {
 0:
            tango = argFoo;
            entity = null;
            if(!(entity == tango)) { _fun111257_ip = 13; continue _fun111257 }
 9:
            entity = false;
            return entity;
 13:
            golf = _closure1_slot1;
            oscar = _closure1_slot2;
            mike = 18;
            report = oscar[mike];
            zulu = undefined;
            report = golf.bind(zulu)(report);
            report = report.bind(zulu)();
            mike = oscar[mike];
            mike = golf.bind(zulu)(mike);
            tango = mike.bind(zulu)(tango);
            mike = _closure1_slot0;
            entity = 19;
            entity = oscar[entity];
            zulu = mike.bind(zulu)(entity);
            mike = zulu.isWithinInterval;
            entity = argBar;
            entity = mike.bind(zulu)(report, tango, entity);
            return entity;
        }
    };
    var _closure1_slot31 = tango;
    tango = function(argFoo) { // Original name: createFailedMessage
        _fun111258: for(var _fun111258_ip = 0; ; ) switch(_fun111258_ip) {
 0:
            report = argFoo;
            offset = report.channel_id;
            romeo = report.content;
            tango = report.tts;
            yankee = report.state;
            golf = _closure1_slot1;
            options = _closure1_slot2;
            entity = 20;
            oscar = options[entity];
            entity = undefined;
            verify = golf.bind(entity)(oscar);
            oscar = {};
            oscar['channelId'] = offset;
            oscar['content'] = romeo;
            oscar['tts'] = tango;
            tango = _closure1_slot16;
            romeo = tango.SEND_FAILED;
            oscar['state'] = romeo;
            verify = verify.bind(entity)(oscar);
            oscar = report.timestamp;
            verify['timestamp'] = oscar;
            report = report.file;
            var _closure2_slot0 = report;
            oscar = verify.id;
            var _closure2_slot1 = oscar;
            oscar = 21;
            oscar = options[oscar];
            options = golf.bind(entity)(oscar);
            golf = options.receiveMessage;
            oscar = {};
            tango = tango.SENDING;
            tango = yankee === tango;
            oscar['isHydratingExpiredPendingMessage'] = tango;
            kilo = true;
            result = options;
            output = offset;
            sizing = verify;
            backup = oscar;
            tango = result[golf](output, sizing, kilo, backup, foxtrot);
            tango = null;
            if(!(tango != report)) { _fun111258_ip = 213; continue _fun111258 }
 175:
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 22;
            zulu = report[zulu];
            tango = tango.bind(entity)(zulu);
            zulu = tango.wait;
            mike = function() {
                zulu = _closure1_slot1;
                mike = _closure1_slot2;
                entity = 23;
                mike = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(mike);
                zulu = tango.restoreFailedUpload;
                mike = _closure2_slot1;
                entity = _closure2_slot0;
                entity = zulu.bind(tango)(mike, entity);
                return entity;
            };
            mike = zulu.bind(tango)(mike);
 213:
            return entity;
        }
    };
    var _closure1_slot32 = tango;
    tango = function() {
        tango = _closure1_slot10;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun111262: for(var _fun111262_ip = 0; ; ) switch(_fun111262_ip) {
 0:
                    StartGenerator();
                    verify = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun111262_ip = 202; continue _fun111262 }
 13:
                    oscar = verify.channel_id;
                    report = verify.file;
                    options = verify.sendMessageOptions;
                    tango = _closure1_slot14;
                    mike = tango.getChannel;
                    golf = mike.bind(tango)(oscar);
                    tango = null;
                    if(!(tango == golf)) { _fun111262_ip = 58; continue _fun111262 }
 53:
                    mike = false;
                    return mike;
 58:
                    offset = tango == report;
                    oscar = undefined;
                    mike = undefined;
                    if(offset) { _fun111262_ip = 75; continue _fun111262 }
 69:
                    mike = report.items;
 75:
                    tango = tango != mike;
                    report = undefined;
                    if(!tango) { _fun111262_ip = 87; continue _fun111262 }
 84:
                    report = mike;
 87:
                    offset = _closure1_slot0;
                    mike = _closure1_slot2;
                    tango = 25;
                    tango = mike[tango];
                    offset = offset.bind(oscar)(tango);
                    tango = 24;
                    tango = mike[tango];
                    mike = mike.paths;
                    mike = offset.bind(oscar)(tango, mike);
                    SaveGenerator(address=129);
 127:
                    return mike;
 129:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun111262_ip = 199; continue _fun111262 }
 135:
                    tango = mike.default;
                    offset = _closure1_slot12;
                    zulu = {};
                    backup = zulu;
                    foxtrot = verify;
                    verify = copyDataProperties(backup, foxtrot);
                    verify = offset.prototype;
                    verify = Object.create(verify, {constructor: {value: offset}});
                    kilo = verify;
                    backup = zulu;
                    zulu = new kilo[offset](backup, foxtrot);
                    foxtrot = zulu instanceof Object ? zulu : verify;
                    kilo = undefined;
                    backup = golf;
                    romeo = report;
                    yankee = options;
                    zulu = kilo[tango](backup, foxtrot, romeo, yankee, offset);
                    zulu = true;
                    return zulu;
 199:
                    return mike;
 202:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot33 = tango;
    tango = function() {
        tango = _closure1_slot10;
        zulu = undefined;
        mike = function* (argFoo) {
            entity = function* (argFoo) { // Original name: ?anon_0_
                _fun111266: for(var _fun111266_ip = 0; ; ) switch(_fun111266_ip) {
 0:
                    StartGenerator();
                    echo = argFoo;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun111266_ip = 500; continue _fun111266 }
 13:
                    tango = _closure1_slot1;
                    zulu = _closure1_slot2;
                    mike = 26;
                    mike = zulu[mike];
                    zulu = undefined;
                    report = tango.bind(zulu)(mike);
                    tango = report.trackExposure;
                    mike = {};
                    oscar = '96f63c_1';
                    mike['location'] = oscar;
                    mike = tango.bind(report)(mike);
                    mike = _closure1_slot29;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=73);
 71:
                    return mike;
 73:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tango) { _fun111266_ip = 497; continue _fun111266 }
 82:
                    oscar = _closure1_slot18;
                    report = oscar.verbose;
                    foxtrot = global;
                    golf = foxtrot.Object;
                    tango = golf.keys;
                    tango = tango.bind(golf)(mike);
                    verify = tango.length;
                    tango = foxtrot.HermesInternal;
                    options = tango.concat;
                    golf = 'rehydrateFailedMessages with ';
                    tango = ' messagess';
                    tango = options.bind(golf)(verify, tango);
                    tango = report.bind(oscar)(tango);
                    sizing = mike;
                    yankee = 'sending message with data ';
                    offset = 'failed message with data ';
                    verify = 'dropping stale message, timestamp ';
                    options = null;
                    golf = undefined;
                    oscar = undefined;
                    for(romeo in sizing)
 187:
                    {
 199:
                        update = romeo;
                        report = mike[update];
                        tango = report.channel_id;
                        if(tango !== echo) { _fun111266_ip = 187; continue _fun111266 }
 215:
                        tango = _closure1_slot26;
                        tango = tango.bind(zulu)(update);
                        source = _closure1_slot15;
                        update = source.getMessage;
                        tango = report.id;
                        tango = update.bind(source)(echo, tango);
                        if(options != tango) { _fun111266_ip = 187; continue _fun111266 }
 249:
                        source = report.timestamp;
                        update = report.state;
                        control = _closure1_slot31;
                        tango = _closure1_slot20;
                        tango = control.bind(zulu)(source, tango);
                        if(tango) { _fun111266_ip = 316; continue _fun111266 }
 277:
                        vacuum = _closure1_slot18;
                        control = vacuum.verbose;
                        tango = foxtrot.HermesInternal;
                        tango = tango.concat;
                        tango = tango.bind(verify)(source);
                        tango = control.bind(vacuum)(tango);
                        golf = source;
                        oscar = update;
                        _fun111266_ip = 187; continue _fun111266;
 316:
                        tango = _closure1_slot16;
                        tango = tango.SENDING;
                        if(!(update === tango)) { _fun111266_ip = 347; continue _fun111266 }
 330:
                        control = _closure1_slot31;
                        tango = _closure1_slot19;
                        tango = control.bind(zulu)(source, tango);
                        if(tango) { _fun111266_ip = 415; continue _fun111266 }
 347:
                        vacuum = _closure1_slot18;
                        control = vacuum.info;
                        sequence = foxtrot.JSON;
                        tango = sequence.stringify;
                        sequence = tango.bind(sequence)(report);
                        tango = foxtrot.HermesInternal;
                        tango = tango.concat;
                        tango = tango.bind(offset)(sequence);
                        tango = control.bind(vacuum)(tango);
                        tango = _closure1_slot32;
                        tango = tango.bind(zulu)(report);
                        golf = source;
                        oscar = update;
                        _fun111266_ip = 187; continue _fun111266;
 415:
                        vacuum = _closure1_slot18;
                        control = vacuum.verbose;
                        sequence = foxtrot.JSON;
                        tango = sequence.stringify;
                        sequence = tango.bind(sequence)(report);
                        tango = foxtrot.HermesInternal;
                        tango = tango.concat;
                        tango = tango.bind(yankee)(sequence);
                        tango = control.bind(vacuum)(tango);
                        tango = _closure1_slot33;
                        tango = tango.bind(zulu)(report);
                        SaveGenerator(address=476);
 474:
                        return tango;
 476:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        golf = source;
                        oscar = update;
                        if(!report) { _fun111266_ip = 187; continue _fun111266 }
 491:
                        return tango;
                    }
 494:
                    return zulu;
 497:
                    return mike;
 500:
                    return entity;
                }
            };
            return entity;
        };
        mike = tango.bind(zulu)(mike);
        var _closure2_slot0 = mike;
        entity = function() {
            entity = undefined;
            tango = _closure2_slot0;
            zulu = tango.apply;
            entity = arguments;
            mike = entity;
            entity = this;
            entity = zulu.bind(tango)(entity, mike);
            return entity;
        };
        return entity;
    };
    tango = tango.bind(entity)();
    var _closure1_slot34 = tango;
    tango = 26;
    tango = oscar[tango];
    yankee = golf.bind(entity)(tango);
    offset = yankee.subscribe;
    verify = {};
    tango = '1';
    verify['location'] = tango;
    tango = function(argFoo) {
        _fun111268: for(var _fun111268_ip = 0; ; ) switch(_fun111268_ip) {
 0:
            entity = argFoo;
            mike = null;
            if(!(mike != entity)) { _fun111268_ip = 56; continue _fun111268 }
 9:
            mike = entity.writeCache;
            zulu = _closure1_slot3;
            zulu = mike !== zulu;
            if(!zulu) { _fun111268_ip = 39; continue _fun111268 }
 29:
            report = _closure1_slot3;
            tango = undefined;
            zulu = tango !== report;
 39:
            if(!zulu) { _fun111268_ip = 52; continue _fun111268 }
 42:
            tango = _closure1_slot30;
            zulu = undefined;
            zulu = tango.bind(zulu)();
 52:
            var _closure1_slot3 = mike;
 56:
            entity = undefined;
            return entity;
        }
    };
    tango = offset.bind(yankee)(verify, tango);
    tango = 'loadedChannels';
    tango = options.bind(entity)(tango);
    var _closure1_slot35 = tango;
    tango = 29;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: LocalMessageCacheManager
            golf = this;
            foxtrot = 0;
            options = copyRestArgs(foxtrot);
            entity = _closure1_slot4;
            oscar = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(golf, oscar);
            report = _closure1_slot38;
            entity = new Array(0);
            foxtrot = entity;
            romeo = options;
            yankee = 0;
            options = arraySpread(foxtrot, romeo, yankee);
            entity = report.bind(tango)(golf, oscar, entity);
            var _closure3_slot0 = entity;
            verify = global;
            options = verify.Object;
            golf = options.defineProperty;
            oscar = _closure1_slot35;
            report = {};
            offset = true;
            report['writable'] = offset;
            verify = verify.Set;
            offset = verify.prototype;
            offset = Object.create(offset, {constructor: {value: verify}});
            backup = offset;
            verify = new backup[verify](foxtrot);
            verify = verify instanceof Object ? verify : offset;
            report['value'] = verify;
            report = golf.bind(options)(entity, oscar, report);
            report = _closure1_slot10;
            zulu = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun111272: for(var _fun111272_ip = 0; ; ) switch(_fun111272_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun111272_ip = 403; continue _fun111272 }
 12:
                        zulu = undefined;
                        var _closure5_slot0 = zulu;
                        mike = _closure1_slot29;
                        mike = mike.bind(zulu)();
                        SaveGenerator(address=33);
 31:
                        return mike;
 33:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                        if(tango) { _fun111272_ip = 400; continue _fun111272 }
 42:
                        romeo = function* (argFoo) { // Original name: _loop
                            entity = function* (argFoo) { // Original name: ?anon_0__loop
                                _fun111274: for(var _fun111274_ip = 0; ; ) switch(_fun111274_ip) {
 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                                    if(zulu) { _fun111274_ip = 70; continue _fun111274 }
 9:
                                    zulu = argFoo;
                                    var _closure7_slot0 = zulu;
                                    tango = _closure5_slot0;
                                    zulu = _closure1_slot16;
                                    zulu = zulu.SENDING;
                                    if(!(tango === zulu)) { _fun111274_ip = 65; continue _fun111274 }
 40:
                                    zulu = global;
                                    report = zulu.setTimeout;
                                    tango = undefined;
                                    zulu = function() {
                                        zulu = _closure1_slot1;
                                        mike = _closure1_slot2;
                                        entity = 27;
                                        mike = mike[entity];
                                        entity = undefined;
                                        tango = zulu.bind(entity)(mike);
                                        zulu = tango.fetchMessages;
                                        mike = {};
                                        report = _closure7_slot0;
                                        mike['channelId'] = report;
                                        mike = zulu.bind(tango)(mike);
                                        return entity;
                                    };
                                    mike = 0;
                                    mike = report.bind(tango)(zulu, mike);
 65:
                                    mike = undefined;
                                    return mike;
 70:
                                    return entity;
                                }
                            };
                            return entity;
                        };
                        yankee = global;
                        report = yankee.Object;
                        tango = report.values;
                        offset = tango.bind(report)(mike);
                        tango = offset.length;
                        verify = 0;
                        tango = verify < tango;
                        options = 'iterator is not an object';
                        golf = 'iterator.throw() did not return an object';
                        oscar = 'throw';
                        report = 'iterator.next() did not return an object';
                        if(!tango) { _fun111272_ip = 397; continue _fun111272 }
 106:
                        backup = offset[verify];
                        tango = backup.channel_id;
                        backup = backup.state;
                        _closure5_slot0 = backup;
                        backup = romeo.bind(zulu)(tango);
                        tango = yankee.Symbol;
                        tango = tango.iterator;
                        tango = backup[tango];
                        kilo = tango.bind(backup)();
                        vacuum = kilo;
                        control = options;
                        tango = ensureObject(vacuum, control);
                        update = kilo.next;
                        echo = undefined;
 166:
                        backup = echo;
                        backup = update.bind(kilo)(backup);
                        vacuum = backup;
                        control = report;
                        sizing = ensureObject(vacuum, control);
                        tango = backup;
                        sizing = backup.done;
                        if(sizing) { _fun111272_ip = 377; continue _fun111272 }
 198: // try_start_0
                        sizing = generatorSetDelegated();
                        SaveGenerator(address=253);
 204:
                        return backup;
 206: // try_end0 // catch_target0 // catch_target1
                        CatchBlockStart(arg_register=15);
                        vacuum = kilo;
                        control = oscar;
                        backup = getMethod(vacuum, control);
                        if(!(backup !== zulu)) { _fun111272_ip = 336; continue _fun111272 }
 222:
                        backup = backup.bind(kilo)(sizing);
                        vacuum = backup;
                        control = golf;
                        sizing = ensureObject(vacuum, control);
                        sizing = backup.done;
                        if(sizing) { _fun111272_ip = 331; continue _fun111272 }
 245:
                        sizing = generatorSetDelegated();
                        SaveGenerator(address=253);
 251:
                        return backup;
 253: // try_start_1
                        ResumeGenerator(result_out_reg=15, return_bool_out_reg=17);
                        echo = sizing;
                        output = result;
                        if(!output) { _fun111272_ip = 166; continue _fun111272 }
 265:
                        echo = sizing;
 268: // try_end1
                        control = 'return';
                        vacuum = kilo;
                        source = getMethod(vacuum, control);
                        if(!(source !== zulu)) { _fun111272_ip = 328; continue _fun111272 }
 283:
                        output = echo;
                        output = source.bind(kilo)(output);
                        control = 'iterator.return() did not return an object';
                        vacuum = output;
                        source = ensureObject(vacuum, control);
                        source = output.done;
                        if(source) { _fun111272_ip = 320; continue _fun111272 }
 312:
                        source = generatorSetDelegated();
                        SaveGenerator(address=253);
 318:
                        return output;
 320:
                        output = output.value;
                        return output;
 328:
                        return sizing;
 331:
                        tango = backup;
                        _fun111272_ip = 377; continue _fun111272;
 336:
                        control = 'return';
                        vacuum = kilo;
                        backup = getMethod(vacuum, control);
                        if(!(backup !== zulu)) { _fun111272_ip = 365; continue _fun111272 }
 351:
                        vacuum = backup.bind(kilo)();
                        control = 'iterator.return() did not return an object';
                        backup = ensureObject(vacuum, control);
 365:
                        vacuum = 'yield* delegate must have a .throw() method';
                        backup = throwTypeError(vacuum);
                        throw zulu;
 377:
                        tango = tango.value;
                        verify = verify + 1;
                        tango = offset.length;
                        if(verify < tango) { _fun111272_ip = 106; continue _fun111272 }
 397:
                        return zulu;
 400:
                        return mike;
 403:
                        return entity;
                    }
                };
                return entity;
            };
            zulu = report.bind(tango)(zulu);
            entity['handlePostConnectionOpen'] = zulu;
            zulu = function(argFoo) {
                entity = argFoo;
                zulu = entity.id;
                mike = _closure1_slot27;
                entity = undefined;
                mike = mike.bind(entity)(zulu);
                return entity;
            };
            entity['handleMessageDelete'] = zulu;
            zulu = function() {
                mike = _closure1_slot30;
                entity = undefined;
                mike = mike.bind(entity)();
                return entity;
            };
            entity['handleLogout'] = zulu;
            zulu = function(argFoo) {
                _fun111278: for(var _fun111278_ip = 0; ; ) switch(_fun111278_ip) {
 0:
                    entity = argFoo;
                    report = entity.message;
                    tango = entity.sendMessageOptions;
                    mike = report.author;
                    zulu = null;
                    oscar = zulu == mike;
                    entity = undefined;
                    golf = undefined;
                    if(oscar) { _fun111278_ip = 38; continue _fun111278 }
 33:
                    golf = mike.id;
 38:
                    options = _closure1_slot13;
                    oscar = options.getId;
                    oscar = oscar.bind(options)();
                    if(!(golf === oscar)) { _fun111278_ip = 200; continue _fun111278 }
 62:
                    oscar = _closure1_slot3;
                    if(!oscar) { _fun111278_ip = 200; continue _fun111278 }
 72:
                    oscar = report.nonce;
                    if(!(zulu == oscar)) { _fun111278_ip = 87; continue _fun111278 }
 82:
                    oscar = report.id;
 87:
                    golf = report.state;
                    zulu = _closure1_slot16;
                    zulu = zulu.SENDING;
                    if(!(golf !== zulu)) { _fun111278_ip = 136; continue _fun111278 }
 106:
                    golf = report.state;
                    zulu = _closure1_slot16;
                    zulu = zulu.SEND_FAILED;
                    if(!(golf !== zulu)) { _fun111278_ip = 136; continue _fun111278 }
 125:
                    zulu = _closure1_slot26;
                    zulu = zulu.bind(entity)(oscar);
                    _fun111278_ip = 200; continue _fun111278;
 136:
                    options = _closure1_slot9;
                    zulu = _closure3_slot0;
                    golf = _closure1_slot35;
                    zulu = options.bind(entity)(zulu, golf);
                    options = zulu[golf];
                    golf = options.add;
                    zulu = report.channel_id;
                    zulu = golf.bind(options)(zulu);
                    zulu = _closure1_slot25;
                    mike = {};
                    mike['key'] = oscar;
                    mike['message'] = report;
                    mike['sendMessageOptions'] = tango;
                    mike = zulu.bind(entity)(mike);
 200:
                    return entity;
                }
            };
            entity['handleMessageCreate'] = zulu;
            zulu = function(argFoo) {
                _fun111279: for(var _fun111279_ip = 0; ; ) switch(_fun111279_ip) {
 0:
                    entity = argFoo;
                    zulu = entity.channelId;
                    entity = _closure1_slot3;
                    if(!entity) { _fun111279_ip = 36; continue _fun111279 }
 18:
                    mike = _closure3_slot0;
                    entity = mike.handleChannelLoaded;
                    entity = entity.bind(mike)(zulu);
 36:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleLoadMessagesSuccess'] = zulu;
            zulu = function(argFoo) {
                _fun111280: for(var _fun111280_ip = 0; ; ) switch(_fun111280_ip) {
 0:
                    entity = argFoo;
                    mike = entity.privateChannels;
                    entity = entity.initialGuildChannels;
                    zulu = _closure1_slot3;
                    if(!zulu) { _fun111280_ip = 133; continue _fun111280 }
 25:
                    report = new Array(2);
                    report[0] = mike;
                    report[1] = entity;
                    entity = report.length;
                    tango = 0;
                    entity = tango < entity;
                    zulu = undefined;
                    if(!entity) { _fun111280_ip = 133; continue _fun111280 }
 56:
                    golf = _closure1_slot36;
                    entity = report[tango];
                    options = golf.bind(zulu)(entity);
                    golf = options.bind(zulu)();
                    entity = golf.done;
                    if(entity) { _fun111280_ip = 121; continue _fun111280 }
 81:
                    entity = golf.value;
                    offset = entity.id;
                    verify = _closure3_slot0;
                    entity = verify.handleChannelLoaded;
                    entity = entity.bind(verify)(offset);
                    verify = options.bind(zulu)();
                    entity = verify.done;
                    golf = verify;
                    if(!entity) { _fun111280_ip = 81; continue _fun111280 }
 121:
                    tango = tango + 1;
                    entity = report.length;
                    if(tango < entity) { _fun111280_ip = 56; continue _fun111280 }
 133:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleCacheLoaded'] = zulu;
            zulu = function() {
                tango = _closure1_slot10;
                zulu = undefined;
                mike = function* (argFoo) {
                    entity = function* (argFoo) { // Original name: ?anon_0_
                        _fun111283: for(var _fun111283_ip = 0; ; ) switch(_fun111283_ip) {
 0:
                            StartGenerator();
                            tango = argFoo;
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(mike) { _fun111283_ip = 88; continue _fun111283 }
 10:
                            golf = _closure1_slot9;
                            report = _closure3_slot0;
                            oscar = _closure1_slot35;
                            mike = undefined;
                            report = golf.bind(mike)(report, oscar);
                            oscar = report[oscar];
                            report = oscar.has;
                            report = report.bind(oscar)(tango);
                            if(report) { _fun111283_ip = 85; continue _fun111283 }
 53:
                            report = oscar.add;
                            report = report.bind(oscar)(tango);
                            zulu = _closure1_slot34;
                            zulu = zulu.bind(mike)(tango);
                            SaveGenerator(address=76);
 74:
                            return zulu;
 76:
                            ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                            if(!tango) { _fun111283_ip = 85; continue _fun111283 }
 82:
                            return zulu;
 85:
                            return mike;
 88:
                            return entity;
                        }
                    };
                    return entity;
                };
                mike = tango.bind(zulu)(mike);
                var _closure4_slot0 = mike;
                entity = function(argFoo) {
                    entity = undefined;
                    tango = _closure4_slot0;
                    zulu = tango.apply;
                    entity = arguments;
                    mike = entity;
                    entity = this;
                    entity = zulu.bind(tango)(entity, mike);
                    return entity;
                };
                return entity;
            };
            zulu = zulu.bind(tango)();
            entity['handleChannelLoaded'] = zulu;
            zulu = function(argFoo) {
                _fun111285: for(var _fun111285_ip = 0; ; ) switch(_fun111285_ip) {
 0:
                    entity = argFoo;
                    tango = entity.message;
                    entity = entity.file;
                    zulu = _closure1_slot3;
                    if(!zulu) { _fun111285_ip = 67; continue _fun111285 }
 24:
                    report = tango.nonce;
                    zulu = null;
                    if(!(zulu == report)) { _fun111285_ip = 41; continue _fun111285 }
 36:
                    report = tango.id;
 41:
                    zulu = _closure1_slot25;
                    mike = {};
                    mike['key'] = report;
                    mike['message'] = tango;
                    mike['file'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(mike);
 67:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleFileUploadStart'] = zulu;
            zulu = function(argFoo) {
                _fun111286: for(var _fun111286_ip = 0; ; ) switch(_fun111286_ip) {
 0:
                    mike = argFoo;
                    mike = mike.file;
                    var _closure4_slot0 = mike;
                    zulu = _closure1_slot3;
                    if(!zulu) { _fun111286_ip = 43; continue _fun111286 }
 25:
                    zulu = _closure1_slot17;
                    mike = undefined;
                    entity = function() {
                        _fun111287: for(var _fun111287_ip = 0; ; ) switch(_fun111287_ip) {
 0:
                            tango = _closure1_slot24;
                            entity = _closure4_slot0;
                            zulu = entity.id;
                            entity = undefined;
                            tango = tango.bind(entity)(zulu);
                            zulu = null;
                            if(!(zulu != tango)) { _fun111287_ip = 53; continue _fun111287 }
 32:
                            zulu = _closure1_slot28;
                            mike = {};
                            report = _closure4_slot0;
                            mike['file'] = report;
                            mike = zulu.bind(entity)(tango, mike);
 53:
                            return entity;
                        }
                    };
                    entity = zulu.bind(mike)(entity);
 43:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleUploadProgress'] = zulu;
            zulu = function(argFoo) {
                _fun111288: for(var _fun111288_ip = 0; ; ) switch(_fun111288_ip) {
 0:
                    entity = argFoo;
                    tango = entity.aborted;
                    zulu = entity.file;
                    entity = undefined;
                    var _closure4_slot0 = entity;
                    if(!tango) { _fun111288_ip = 49; continue _fun111288 }
 26:
                    _closure4_slot0 = zulu;
                    zulu = _closure1_slot17;
                    mike = function() {
                        _fun111289: for(var _fun111289_ip = 0; ; ) switch(_fun111289_ip) {
 0:
                            tango = _closure1_slot24;
                            entity = _closure4_slot0;
                            zulu = entity.id;
                            entity = undefined;
                            tango = tango.bind(entity)(zulu);
                            zulu = null;
                            if(!(zulu != tango)) { _fun111289_ip = 42; continue _fun111289 }
 32:
                            mike = _closure1_slot23;
                            mike = mike.bind(entity)(tango, zulu);
 42:
                            return entity;
                        }
                    };
                    mike = zulu.bind(entity)(mike);
 49:
                    return entity;
                }
            };
            entity['handleUploadComplete'] = zulu;
            zulu = function(argFoo) {
                _fun111290: for(var _fun111290_ip = 0; ; ) switch(_fun111290_ip) {
 0:
                    mike = argFoo;
                    entity = mike.file;
                    tango = mike.messageId;
                    zulu = _closure1_slot3;
                    if(!zulu) { _fun111290_ip = 43; continue _fun111290 }
 24:
                    zulu = _closure1_slot28;
                    mike = {};
                    mike['file'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
 43:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleRestoreFailedUpload'] = zulu;
            mike = function(argFoo) {
                _fun111291: for(var _fun111291_ip = 0; ; ) switch(_fun111291_ip) {
 0:
                    entity = argFoo;
                    tango = entity.messageId;
                    mike = _closure1_slot3;
                    if(!mike) { _fun111291_ip = 46; continue _fun111291 }
 18:
                    zulu = _closure1_slot28;
                    mike = {};
                    entity = _closure1_slot16;
                    entity = entity.SEND_FAILED;
                    mike['state'] = entity;
                    entity = undefined;
                    entity = zulu.bind(entity)(tango, mike);
 46:
                    entity = undefined;
                    return entity;
                }
            };
            entity['handleTextMessageFailed'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot8;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot5;
        report = {};
        entity = '_terminate';
        report['key'] = entity;
        entity = function() { // Original name: _terminate
            mike = this;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 22;
            oscar = report[zulu];
            entity = undefined;
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleLogout;
            oscar = 'LOGOUT';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessageCreate;
            oscar = 'MESSAGE_CREATE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleTextMessageFailed;
            oscar = 'MESSAGE_SEND_FAILED';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleFileUploadStart;
            oscar = 'UPLOAD_START';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleMessageDelete;
            oscar = 'MESSAGE_DELETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleRestoreFailedUpload;
            oscar = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleUploadComplete;
            oscar = 'UPLOAD_COMPLETE';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleUploadProgress;
            oscar = 'UPLOAD_PROGRESS';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleLoadMessagesSuccess;
            oscar = 'LOAD_MESSAGES_SUCCESS';
            oscar = options.bind(verify)(oscar, golf);
            oscar = report[zulu];
            verify = tango.bind(entity)(oscar);
            options = verify.unsubscribe;
            golf = mike.handleCacheLoaded;
            oscar = 'CACHE_LOADED';
            oscar = options.bind(verify)(oscar, golf);
            zulu = report[zulu];
            report = tango.bind(entity)(zulu);
            tango = report.unsubscribe;
            zulu = mike.handlePostConnectionOpen;
            mike = 'POST_CONNECTION_OPEN';
            mike = tango.bind(report)(mike, zulu);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = '_initialize';
        report['key'] = golf;
        oscar = function() { // Original name: _initialize
            tango = this;
            var _closure3_slot0 = tango;
            oscar = _closure1_slot18;
            report = oscar.verbose;
            entity = 'cache manager initialize';
            entity = report.bind(oscar)(entity);
            oscar = _closure1_slot1;
            golf = _closure1_slot2;
            report = 22;
            options = golf[report];
            entity = undefined;
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleLogout;
            options = 'LOGOUT';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleMessageCreate;
            options = 'MESSAGE_CREATE';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleTextMessageFailed;
            options = 'MESSAGE_SEND_FAILED';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleFileUploadStart;
            options = 'UPLOAD_START';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleMessageDelete;
            options = 'MESSAGE_DELETE';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleRestoreFailedUpload;
            options = 'UPLOAD_RESTORE_FAILED_UPLOAD';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleUploadComplete;
            options = 'UPLOAD_COMPLETE';
            options = offset.bind(yankee)(options, verify);
            options = golf[report];
            yankee = oscar.bind(entity)(options);
            offset = yankee.subscribe;
            verify = tango.handleUploadProgress;
            options = 'UPLOAD_PROGRESS';
            options = offset.bind(yankee)(options, verify);
            report = golf[report];
            golf = oscar.bind(entity)(report);
            oscar = golf.subscribe;
            report = tango.handlePostConnectionOpen;
            tango = 'POST_CONNECTION_OPEN';
            tango = oscar.bind(golf)(tango, report);
            zulu = _closure1_slot10;
            mike = function* () {
                entity = function* () { // Original name: ?anon_0_
                    _fun111295: for(var _fun111295_ip = 0; ; ) switch(_fun111295_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(mike) { _fun111295_ip = 428; continue _fun111295 }
 10:
                        mike = _closure1_slot29;
                        tango = undefined;
                        mike = mike.bind(tango)();
                        SaveGenerator(address=27);
 25:
                        return mike;
 27:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(zulu) { _fun111295_ip = 425; continue _fun111295 }
 36:
                        golf = _closure1_slot18;
                        report = golf.verbose;
                        output = global;
                        options = output.Object;
                        zulu = options.keys;
                        zulu = zulu.bind(options)(mike);
                        offset = zulu.length;
                        zulu = output.HermesInternal;
                        verify = zulu.concat;
                        options = 'initialized with ';
                        zulu = ' messages in local cache';
                        zulu = verify.bind(options)(offset, zulu);
                        zulu = report.bind(golf)(zulu);
                        report = output.Object;
                        zulu = report.values;
                        sizing = zulu.bind(report)(mike);
                        zulu = sizing.length;
                        kilo = 0;
                        zulu = kilo < zulu;
                        backup = 'manually invoking handleChannelLoaded';
                        foxtrot = 'rehydrating cached messages ';
                        romeo = ' {ready: ';
                        yankee = ', cached: ';
                        offset = '}';
                        verify = 28;
                        options = null;
                        if(!zulu) { _fun111295_ip = 342; continue _fun111295 }
 174:
                        zulu = sizing[kilo];
                        result = zulu.channel_id;
                        golf = _closure1_slot1;
                        zulu = _closure1_slot2;
                        zulu = zulu[verify];
                        golf = golf.bind(tango)(zulu);
                        zulu = golf.get;
                        golf = zulu.bind(golf)(result);
                        if(!(options == golf)) { _fun111295_ip = 224; continue _fun111295 }
 214:
                        golf = {'ready': false, 'cached': false};
 224:
                        zulu = golf.ready;
                        vacuum = golf.cached;
                        update = _closure1_slot18;
                        echo = update.verbose;
                        golf = output.HermesInternal;
                        golf = golf.concat;
                        papa = foxtrot;
                        context = result;
                        record = romeo;
                        config = zulu;
                        sequence = yankee;
                        control = offset;
                        golf = papa[golf](context, record, config, sequence, vacuum, control, source);
                        golf = echo.bind(update)(golf);
                        if(!zulu) { _fun111295_ip = 327; continue _fun111295 }
 287:
                        golf = _closure1_slot18;
                        zulu = golf.verbose;
                        zulu = zulu.bind(golf)(backup);
                        golf = _closure3_slot0;
                        zulu = golf.handleChannelLoaded;
                        zulu = zulu.bind(golf)(result);
                        SaveGenerator(address=321);
 319:
                        return zulu;
 321:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                        if(golf) { _fun111295_ip = 422; continue _fun111295 }
 327:
                        kilo = kilo + 1;
                        golf = sizing.length;
                        if(kilo < golf) { _fun111295_ip = 174; continue _fun111295 }
 342:
                        golf = _closure1_slot1;
                        options = _closure1_slot2;
                        oscar = 22;
                        verify = options[oscar];
                        romeo = golf.bind(tango)(verify);
                        yankee = romeo.subscribe;
                        report = _closure3_slot0;
                        offset = report.handleLoadMessagesSuccess;
                        verify = 'LOAD_MESSAGES_SUCCESS';
                        verify = yankee.bind(romeo)(verify, offset);
                        oscar = options[oscar];
                        options = golf.bind(tango)(oscar);
                        golf = options.subscribe;
                        oscar = report.handleCacheLoaded;
                        report = 'CACHE_LOADED';
                        report = golf.bind(options)(report, oscar);
                        return tango;
 422:
                        return zulu;
 425:
                        return mike;
 428:
                        return entity;
                    }
                };
                return entity;
            };
            mike = zulu.bind(entity)(mike);
            mike = mike.bind(entity)();
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    mike = mike.bind(entity)(tango);
    tango = mike.prototype;
    tango = Object.create(tango, {constructor: {value: mike}});
    sizing = tango;
    mike = new sizing[mike](kilo);
    mike = mike instanceof Object ? mike : tango;
    tango = 30;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/local_message_caching/LocalMessageCacheManager.native.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();