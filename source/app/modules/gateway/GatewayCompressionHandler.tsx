// app/modules/gateway/GatewayCompressionHandler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun106094: for(var _fun106094_ip = 0; ; ) switch(_fun106094_ip) {
 0:
            zulu = argFoo;
            var _closure2_slot0 = zulu;
            report = global;
            mike = report.Symbol;
            tango = 'undefined';
            mike = typeof mike;
            mike = tango !== mike;
            if(!mike) { _fun106094_ip = 46; continue _fun106094 }
 30:
            tango = report.Symbol;
            tango = tango.iterator;
            mike = zulu[tango];
 46:
            if(mike) { _fun106094_ip = 55; continue _fun106094 }
 49:
            mike = zulu.@@iterator;
 55:
            if(mike) { _fun106094_ip = 345; continue _fun106094 }
 61:
            oscar = report.Array;
            tango = oscar.isArray;
            oscar = tango.bind(oscar)(zulu);
            tango = mike;
            if(oscar) { _fun106094_ip = 323; continue _fun106094 }
 86:
            options = undefined;
            oscar = undefined;
            if(!zulu) { _fun106094_ip = 283; continue _fun106094 }
 96:
            verify = 'string';
            golf = typeof zulu;
            if(!(verify !== golf)) { _fun106094_ip = 270; continue _fun106094 }
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
            if(!golf) { _fun106094_ip = 163; continue _fun106094 }
 158:
            golf = zulu.constructor;
 163:
            offset = verify;
            if(!golf) { _fun106094_ip = 179; continue _fun106094 }
 169:
            golf = zulu.constructor;
            offset = golf.name;
 179:
            golf = 'Map';
            if(!(golf !== offset)) { _fun106094_ip = 249; continue _fun106094 }
 187:
            golf = 'Set';
            if(!(golf !== offset)) { _fun106094_ip = 249; continue _fun106094 }
 195:
            golf = 'Arguments';
            if(!(golf !== offset)) { _fun106094_ip = 234; continue _fun106094 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golf = verify.test;
            verify = golf.bind(verify)(offset);
            golf = undefined;
            if(!verify) { _fun106094_ip = 247; continue _fun106094 }
 234:
            verify = _closure1_slot12;
            golf = verify.bind(options)(zulu, options);
 247:
            _fun106094_ip = 265; continue _fun106094;
 249:
            offset = report.Array;
            verify = offset.from;
            golf = verify.bind(offset)(zulu);
 265:
            oscar = golf;
            _fun106094_ip = 283; continue _fun106094;
 270:
            golf = _closure1_slot12;
            oscar = golf.bind(options)(zulu, options);
 283:
            tango = oscar;
            if(tango) { _fun106094_ip = 323; continue _fun106094 }
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
            if(!tango) { _fun106094_ip = 330; continue _fun106094 }
 326:
            _closure2_slot0 = tango;
 330:
            tango = 0;
            var _closure2_slot1 = tango;
            entity = function() {
                _fun106095: for(var _fun106095_ip = 0; ; ) switch(_fun106095_ip) {
 0:
                    mike = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(mike >= entity))) { _fun106095_ip = 56; continue _fun106095 }
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
                    _fun106095_ip = 67; continue _fun106095;
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
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun106096: for(var _fun106096_ip = 0; ; ) switch(_fun106096_ip) {
 0:
            tango = argFoo;
            entity = null;
            zulu = undefined;
            entity = entity == zulu;
            if(entity) { _fun106096_ip = 23; continue _fun106096 }
 14:
            mike = tango.length;
            entity = zulu > mike;
 23:
            mike = undefined;
            if(!entity) { _fun106096_ip = 33; continue _fun106096 }
 28:
            mike = tango.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zulu)(mike);
            zulu = 0;
            report = zulu < mike;
            if(!report) { _fun106096_ip = 70; continue _fun106096 }
 55:
            report = tango[zulu];
            entity[zulu] = report;
            zulu = zulu + 1;
            if(zulu < mike) { _fun106096_ip = 55; continue _fun106096 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun106097: for(var _fun106097_ip = 0; ; ) switch(_fun106097_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot4;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot3;
            entity = _closure1_slot14;
            entity = entity.bind(zulu)();
            if(entity) { _fun106097_ip = 51; continue _fun106097 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun106097_ip = 92; continue _fun106097;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun106097_ip = 71; continue _fun106097 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun106098: for(var _fun106098_ip = 0; ; ) switch(_fun106098_ip) {
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
            _fun106098_ip = 76; continue _fun106098;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
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
    tango = report.bind(entity)(tango);
    tango = tango.NativeModules;
    var _closure1_slot8 = tango;
    options = new Array(0);
    var _closure1_slot9 = options;
    tango = function() {
        report = _closure1_slot7;
        tango = function(argFoo) { // Original name: BaseGatewayCompressionHandler
            zulu = this;
            tango = _closure1_slot6;
            mike = _closure2_slot0;
            entity = undefined;
            mike = tango.bind(entity)(zulu, mike);
            mike = null;
            zulu['_onDataReady'] = mike;
            mike = argFoo;
            zulu['_gatewayEncoding'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        entity = {};
        zulu = 'bindWebSocket';
        entity['key'] = zulu;
        zulu = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = zulu;
        zulu = new Array(3);
        zulu[0] = entity;
        entity = {};
        oscar = 'feed';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[1] = entity;
        entity = {};
        oscar = 'dataReady';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            mike = argFoo;
            entity = this;
            entity['_onDataReady'] = mike;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscar;
        zulu[2] = entity;
        entity = {};
        oscar = 'canUse';
        entity['key'] = oscar;
        mike = function() { // Original name: value
            entity = false;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(1);
        mike[0] = entity;
        entity = undefined;
        entity = report.bind(entity)(tango, zulu, mike);
        return entity;
    };
    golf = tango.bind(entity)();
    verify = options.push;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: DesktopZstdGatewayCompressionHandler
            _fun106108: for(var _fun106108_ip = 0; ; ) switch(_fun106108_ip) {
 0:
                oscar = this;
                entity = _closure1_slot6;
                report = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, report);
                zulu = _closure1_slot13;
                entity = new Array(1);
                golf = argFoo;
                entity[0] = golf;
                entity = zulu.bind(tango)(oscar, report, entity);
                zulu = null;
                entity['_decoder'] = zulu;
                oscar = entity._gatewayEncoding;
                report = oscar.wantsString;
                report = report.bind(oscar)();
                if(report) { _fun106108_ip = 82; continue _fun106108 }
 74:
                entity['_decoder'] = zulu;
                _fun106108_ip = 122; continue _fun106108;
 82:
                zulu = global;
                oscar = zulu.TextDecoder;
                zulu = oscar.prototype;
                report = Object.create(zulu, {constructor: {value: oscar}});
                offset = 'utf-8';
                yankee = report;
                zulu = new yankee[oscar](offset, verify);
                zulu = zulu instanceof Object ? zulu : report;
                entity['_decoder'] = zulu;
 122:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 6;
                mike = report[mike];
                zulu = zulu.bind(tango)(mike);
                mike = zulu.createZstdContextWeb;
                mike = mike.bind(zulu)();
                entity['_stream'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot5;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot7;
        oscar = {};
        mike = 'getAlgorithm';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            entity = 'zstd-stream';
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = {};
        golf = 'usesLegacyCompression';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'feed';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106111: for(var _fun106111_ip = 0; ; ) switch(_fun106111_ip) {
 0:
                report = argFoo;
                zulu = this;
                entity = zulu._stream;
                tango = null;
                if(!(tango != entity)) { _fun106111_ip = 151; continue _fun106111 }
 21:
                entity = global;
                mike = entity.ArrayBuffer;
                mike = report instanceof mike;
                if(mike) { _fun106111_ip = 77; continue _fun106111 }
 36:
                oscar = entity.Error;
                entity = oscar.prototype;
                mike = Object.create(entity, {constructor: {value: oscar}});
                golf = 'Expected array buffer, but got ';
                entity = typeof report;
                options = golf + entity;
                verify = mike;
                entity = new verify[oscar](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 77:
                mike = zulu._stream;
                entity = mike.decompress;
                oscar = entity.bind(mike)(report);
                entity = zulu._decoder;
                mike = oscar;
                if(!(tango != entity)) { _fun106111_ip = 126; continue _fun106111 }
 109:
                report = zulu._decoder;
                entity = report.decode;
                mike = entity.bind(report)(oscar);
 126:
                entity = zulu._onDataReady;
                if(!(tango != entity)) { _fun106111_ip = 147; continue _fun106111 }
 136:
                entity = zulu._onDataReady;
                entity = entity.bind(zulu)(mike);
 147:
                entity = undefined;
                return entity;
 151:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                options = 'Trying to decompress with zstd but did not initialize with it';
                verify = mike;
                entity = new verify[zulu](options, golf);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'close';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'canUse';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    tango = verify.bind(options)(tango);
    verify = options.push;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: PakoStreamGatewayCompressionHandler
            _fun106115: for(var _fun106115_ip = 0; ; ) switch(_fun106115_ip) {
 0:
                oscar = this;
                entity = _closure1_slot6;
                report = _closure2_slot0;
                tango = undefined;
                entity = entity.bind(tango)(oscar, report);
                zulu = _closure1_slot13;
                entity = new Array(1);
                golf = argFoo;
                entity[0] = golf;
                entity = zulu.bind(tango)(oscar, report, entity);
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 7;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                entity['_pako'] = mike;
                mike = false;
                entity['_usesZstd'] = mike;
                mike = null;
                entity['_zstdDecoder'] = mike;
                entity['_zstdStream'] = mike;
                mike = entity._pako;
                tango = mike.Inflate;
                mike = {};
                zulu = 65536;
                mike['chunkSize'] = zulu;
                report = entity._gatewayEncoding;
                zulu = report.wantsString;
                report = zulu.bind(report)();
                zulu = '';
                if(!report) { _fun106115_ip = 153; continue _fun106115 }
 149:
                zulu = 'string';
 153:
                mike['to'] = zulu;
                zulu = tango.prototype;
                zulu = Object.create(zulu, {constructor: {value: tango}});
                yankee = zulu;
                offset = mike;
                mike = new yankee[tango](offset, verify);
                mike = mike instanceof Object ? mike : zulu;
                entity['_inflate'] = mike;
                zulu = entity._inflate;
                tango = entity.handleFlushEnd;
                mike = tango.bind;
                mike = mike.bind(tango)(entity);
                zulu['onEnd'] = mike;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot5;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot7;
        oscar = {};
        mike = 'getAlgorithm';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            entity = 'zlib-stream';
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(5);
        mike[0] = oscar;
        oscar = {};
        golf = 'usesLegacyCompression';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'feed';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106118: for(var _fun106118_ip = 0; ; ) switch(_fun106118_ip) {
 0:
                tango = argFoo;
                report = this;
                entity = report._inflate;
                mike = null;
                if(!(mike != entity)) { _fun106118_ip = 247; continue _fun106118 }
 21:
                entity = report._onDataReady;
                if(!(mike !== entity)) { _fun106118_ip = 211; continue _fun106118 }
 34:
                entity = global;
                mike = entity.ArrayBuffer;
                mike = tango instanceof mike;
                if(mike) { _fun106118_ip = 90; continue _fun106118 }
 49:
                oscar = entity.Error;
                mike = oscar.prototype;
                zulu = Object.create(mike, {constructor: {value: oscar}});
                golf = 'Expected array buffer, but got ';
                mike = typeof tango;
                verify = golf + mike;
                offset = zulu;
                mike = new offset[oscar](verify, options);
                mike = mike instanceof Object ? mike : zulu;
                throw mike;
 90:
                entity = entity.DataView;
                mike = entity.prototype;
                mike = Object.create(mike, {constructor: {value: entity}});
                offset = mike;
                verify = tango;
                entity = new offset[entity](verify, options);
                golf = entity instanceof Object ? entity : mike;
                entity = golf.byteLength;
                mike = 4;
                oscar = entity >= mike;
                if(!oscar) { _fun106118_ip = 169; continue _fun106118 }
 135:
                zulu = golf.getUint32;
                entity = golf.byteLength;
                mike = entity - mike;
                entity = false;
                mike = zulu.bind(golf)(mike, entity);
                entity = 65535;
                oscar = entity === mike;
 169:
                zulu = report._inflate;
                mike = zulu.push;
                entity = !oscar;
                entity = !entity;
                if(!oscar) { _fun106118_ip = 201; continue _fun106118 }
 189:
                report = report._pako;
                entity = report.Z_SYNC_FLUSH;
 201:
                entity = mike.bind(zulu)(tango, entity);
                entity = undefined;
                return entity;
 211:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                verify = 'Cannot feed unless a data ready callback is registered.';
                offset = mike;
                entity = new offset[zulu](verify, options);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
 247:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                verify = 'Trying to feed to closed compression adapter';
                offset = mike;
                entity = new offset[zulu](verify, options);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'close';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun106119: for(var _fun106119_ip = 0; ; ) switch(_fun106119_ip) {
 0:
                mike = this;
                zulu = mike._inflate;
                entity = null;
                if(!(entity != zulu)) { _fun106119_ip = 43; continue _fun106119 }
 15:
                zulu = mike._inflate;
                zulu['onEnd'] = entity;
                tango = mike._inflate;
                zulu = new Array(0);
                tango['chunks'] = zulu;
 43:
                mike['_inflate'] = entity;
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'handleFlushEnd';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106120: for(var _fun106120_ip = 0; ; ) switch(_fun106120_ip) {
 0:
                oscar = argFoo;
                tango = this;
                entity = tango._pako;
                mike = tango._inflate;
                report = null;
                if(!(report == mike)) { _fun106120_ip = 96; continue _fun106120 }
 24:
                options = _closure1_slot1;
                golf = _closure1_slot2;
                zulu = 8;
                golf = golf[zulu];
                zulu = undefined;
                options = options.bind(zulu)(golf);
                zulu = options.prototype;
                golf = Object.create(zulu, {constructor: {value: options}});
                sizing = 'GatewayCompressionHandler';
                output = golf;
                zulu = new output[options](sizing, kilo);
                options = zulu instanceof Object ? zulu : golf;
                golf = options.error;
                zulu = 'flush end happened on closed compression adapter';
                zulu = golf.bind(options)(zulu);
                _fun106120_ip = 337; continue _fun106120;
 96:
                entity = entity.Z_OK;
                if(!(oscar === entity)) { _fun106120_ip = 341; continue _fun106120 }
 109:
                golf = mike.chunks;
                options = golf.length;
                zulu = tango._gatewayEncoding;
                entity = zulu.wantsString;
                zulu = entity.bind(zulu)();
                entity = 1;
                if(zulu) { _fun106120_ip = 279; continue _fun106120 }
 145:
                if(!(!(options > entity))) { _fun106120_ip = 160; continue _fun106120 }
 149:
                zulu = 0;
                zulu = golf[zulu];
                _fun106120_ip = 308; continue _fun106120;
 160:
                verify = 0;
                foxtrot = verify < options;
                yankee = 0;
                offset = 0;
                romeo = 0;
                if(!foxtrot) { _fun106120_ip = 198; continue _fun106120 }
 175:
                foxtrot = golf[offset];
                foxtrot = foxtrot.length;
                yankee = yankee + foxtrot;
                offset = offset + 1;
                romeo = yankee;
                if(offset < options) { _fun106120_ip = 175; continue _fun106120 }
 198:
                offset = global;
                offset = offset.Uint8Array;
                yankee = offset.prototype;
                yankee = Object.create(yankee, {constructor: {value: offset}});
                output = yankee;
                sizing = romeo;
                offset = new output[offset](sizing, kilo);
                yankee = offset instanceof Object ? offset : yankee;
                romeo = verify < options;
                offset = 0;
                verify = 0;
                zulu = yankee;
                if(!romeo) { _fun106120_ip = 308; continue _fun106120 }
 243:
                romeo = golf[verify];
                foxtrot = yankee.set;
                foxtrot = foxtrot.bind(yankee)(romeo, offset);
                romeo = romeo.length;
                offset = offset + romeo;
                verify = verify + 1;
                zulu = yankee;
                if(verify < options) { _fun106120_ip = 243; continue _fun106120 }
 277:
                _fun106120_ip = 308; continue _fun106120;
 279:
                if(!(!(options > entity))) { _fun106120_ip = 291; continue _fun106120 }
 283:
                entity = 0;
                entity = golf[entity];
                _fun106120_ip = 305; continue _fun106120;
 291:
                verify = golf.join;
                options = '';
                entity = verify.bind(golf)(options);
 305:
                zulu = entity;
 308:
                entity = 0;
                golf['length'] = entity;
                entity = tango._onDataReady;
                if(!(report != entity)) { _fun106120_ip = 337; continue _fun106120 }
 326:
                entity = tango._onDataReady;
                entity = entity.bind(tango)(zulu);
 337:
                entity = undefined;
                return entity;
 341:
                entity = global;
                zulu = entity.Error;
                mike = mike.strm;
                report = mike.msg;
                entity = entity.HermesInternal;
                tango = entity.concat;
                mike = 'zlib error, ';
                entity = ', ';
                sizing = tango.bind(mike)(oscar, entity, report);
                mike = zulu.prototype;
                mike = Object.create(mike, {constructor: {value: zulu}});
                output = mike;
                entity = new output[zulu](sizing, kilo);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'canUse';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    tango = verify.bind(options)(tango);
    verify = options.push;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: PakoGatewayCompressionHandler
            oscar = this;
            yankee = 0;
            golf = copyRestArgs(yankee);
            entity = _closure1_slot6;
            report = _closure2_slot0;
            tango = undefined;
            entity = entity.bind(tango)(oscar, report);
            zulu = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golf;
            verify = 0;
            golf = arraySpread(yankee, offset, verify);
            entity = zulu.bind(tango)(oscar, report, entity);
            zulu = _closure1_slot0;
            report = _closure1_slot2;
            mike = 7;
            mike = report[mike];
            mike = zulu.bind(tango)(mike);
            entity['_pako'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot5;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot7;
        oscar = {};
        mike = 'getAlgorithm';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            entity = null;
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = {};
        golf = 'usesLegacyCompression';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = true;
            return entity;
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'feed';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106126: for(var _fun106126_ip = 0; ; ) switch(_fun106126_ip) {
 0:
                golf = argFoo;
                tango = this;
                oscar = tango._pako;
                entity = global;
                mike = entity.ArrayBuffer;
                mike = golf instanceof mike;
                if(!mike) { _fun106126_ip = 43; continue _fun106126 }
 27:
                report = tango._gatewayEncoding;
                zulu = report.wantsString;
                mike = zulu.bind(report)();
 43:
                zulu = golf;
                if(!mike) { _fun106126_ip = 71; continue _fun106126 }
 49:
                report = oscar.inflate;
                mike = {};
                options = 'string';
                mike['to'] = options;
                zulu = report.bind(oscar)(golf, mike);
 71:
                report = tango._onDataReady;
                mike = null;
                if(!(mike != report)) { _fun106126_ip = 98; continue _fun106126 }
 83:
                mike = tango._onDataReady;
                mike = mike.bind(tango)(zulu);
                mike = undefined;
                return mike;
 98:
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                offset = 'Cannot feed unless a data ready callback is registered.';
                yankee = mike;
                entity = new yankee[zulu](offset, verify);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'close';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'canUse';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    tango = verify.bind(options)(tango);
    verify = options.push;
    tango = function(argFoo) {
        report = function(argFoo) { // Original name: MobileGatewayCompressionHandler
            report = this;
            mike = _closure1_slot6;
            tango = _closure2_slot0;
            zulu = undefined;
            mike = mike.bind(zulu)(report, tango);
            mike = _closure1_slot13;
            entity = new Array(1);
            oscar = argFoo;
            entity[0] = oscar;
            entity = mike.bind(zulu)(report, tango, entity);
            mike = null;
            entity['_socketId'] = mike;
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot5;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot7;
        oscar = {};
        mike = 'bindWebSocket';
        oscar['key'] = mike;
        mike = function(argFoo) { // Original name: value
            _fun106131: for(var _fun106131_ip = 0; ; ) switch(_fun106131_ip) {
 0:
                mike = this;
                entity = mike.close;
                entity = entity.bind(mike)();
                entity = argFoo;
                entity = entity._socketId;
                mike['_socketId'] = entity;
                report = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 6;
                tango = tango[entity];
                entity = undefined;
                report = report.bind(entity)(tango);
                tango = report.supportsZstd;
                report = tango.bind(report)();
                oscar = _closure1_slot0;
                golf = _closure1_slot2;
                tango = 9;
                tango = golf[tango];
                oscar = oscar.bind(entity)(tango);
                tango = oscar.isAndroid;
                tango = tango.bind(oscar)();
                if(report) { _fun106131_ip = 205; continue _fun106131 }
 95:
                if(tango) { _fun106131_ip = 130; continue _fun106131 }
 98:
                report = _closure1_slot8;
                golf = report.DCDCompressionManager;
                oscar = golf.enableZlibStreamSupport;
                report = mike._socketId;
                report = oscar.bind(golf)(report);
                _fun106131_ip = 310; continue _fun106131;
 130:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                golf = 10;
                report = report[golf];
                report = oscar.bind(entity)(report);
                oscar = report.default;
                report = null;
                if(!(report != oscar)) { _fun106131_ip = 310; continue _fun106131 }
 164:
                oscar = _closure1_slot0;
                report = _closure1_slot2;
                report = report[golf];
                report = oscar.bind(entity)(report);
                golf = report.default;
                oscar = golf.enableZlibStreamSupport;
                report = mike._socketId;
                report = oscar.bind(golf)(report);
                _fun106131_ip = 310; continue _fun106131;
 205:
                if(tango) { _fun106131_ip = 240; continue _fun106131 }
 208:
                tango = _closure1_slot8;
                golf = tango.DCDCompressionManager;
                oscar = golf.enableZstdStreamSupport;
                report = mike._socketId;
                tango = 0;
                tango = oscar.bind(golf)(report, tango);
                _fun106131_ip = 310; continue _fun106131;
 240:
                oscar = _closure1_slot0;
                tango = _closure1_slot2;
                report = 10;
                tango = tango[report];
                tango = oscar.bind(entity)(tango);
                oscar = tango.default;
                tango = null;
                if(!(tango != oscar)) { _fun106131_ip = 310; continue _fun106131 }
 271:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                zulu = zulu[report];
                zulu = tango.bind(entity)(zulu);
                tango = zulu.default;
                zulu = tango.enableZstdStreamSupport;
                mike = mike._socketId;
                mike = zulu.bind(tango)(mike);
 310:
                return entity;
            }
        };
        oscar['value'] = mike;
        mike = new Array(5);
        mike[0] = oscar;
        oscar = {};
        golf = 'getAlgorithm';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun106132: for(var _fun106132_ip = 0; ; ) switch(_fun106132_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 6;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.supportsZstd;
                mike = entity.bind(mike)();
                entity = 'zlib-stream';
                if(!mike) { _fun106132_ip = 50; continue _fun106132 }
 44:
                entity = 'zstd-stream';
 50:
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'usesLegacyCompression';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'feed';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106134: for(var _fun106134_ip = 0; ; ) switch(_fun106134_ip) {
 0:
                zulu = argFoo;
                mike = this;
                tango = mike._onDataReady;
                entity = null;
                if(!(entity != tango)) { _fun106134_ip = 37; continue _fun106134 }
 18:
                if(!(entity !== zulu)) { _fun106134_ip = 33; continue _fun106134 }
 22:
                entity = mike._onDataReady;
                entity = entity.bind(mike)(zulu);
 33:
                entity = undefined;
                return entity;
 37:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                report = 'Cannot feed unless a data ready callback is registered.';
                oscar = mike;
                entity = new oscar[zulu](report, tango);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'close';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            _fun106135: for(var _fun106135_ip = 0; ; ) switch(_fun106135_ip) {
 0:
                entity = this;
                zulu = entity._socketId;
                oscar = null;
                entity['_socketId'] = oscar;
                if(!(oscar !== zulu)) { _fun106135_ip = 146; continue _fun106135 }
 24:
                report = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 9;
                mike = tango[mike];
                tango = undefined;
                report = report.bind(tango)(mike);
                mike = report.isAndroid;
                mike = mike.bind(report)();
                if(mike) { _fun106135_ip = 84; continue _fun106135 }
 61:
                mike = _closure1_slot8;
                report = mike.DCDCompressionManager;
                mike = report.disableZlibStreamSupport;
                mike = mike.bind(report)(zulu);
                _fun106135_ip = 146; continue _fun106135;
 84:
                golf = _closure1_slot0;
                mike = _closure1_slot2;
                report = 10;
                mike = mike[report];
                mike = golf.bind(tango)(mike);
                mike = mike.default;
                if(!(oscar != mike)) { _fun106135_ip = 146; continue _fun106135 }
 113:
                mike = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[report];
                entity = mike.bind(tango)(entity);
                mike = entity.default;
                entity = mike.disableZlibStreamSupport;
                entity = entity.bind(mike)(zulu);
 146:
                entity = undefined;
                return entity;
            }
        };
        oscar['value'] = golf;
        mike[4] = oscar;
        oscar = {};
        golf = 'canUse';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            _fun106136: for(var _fun106136_ip = 0; ; ) switch(_fun106136_ip) {
 0:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                entity = 9;
                entity = tango[entity];
                tango = undefined;
                zulu = zulu.bind(tango)(entity);
                entity = zulu.isAndroid;
                entity = entity.bind(zulu)();
                if(entity) { _fun106136_ip = 55; continue _fun106136 }
 37:
                entity = _closure1_slot8;
                zulu = entity.DCDCompressionManager;
                entity = null;
                entity = entity != zulu;
                _fun106136_ip = 86; continue _fun106136;
 55:
                zulu = _closure1_slot0;
                report = _closure1_slot2;
                mike = 10;
                mike = report[mike];
                mike = zulu.bind(tango)(mike);
                zulu = mike.default;
                mike = null;
                entity = mike != zulu;
 86:
                return entity;
            }
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    tango = tango.bind(entity)(golf);
    tango = verify.bind(options)(tango);
    tango = function(argFoo) {
        report = function() { // Original name: NullGatewayCompressionHandler
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot6;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot13;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = report;
        oscar = _closure1_slot5;
        tango = undefined;
        zulu = argFoo;
        zulu = oscar.bind(tango)(report, zulu);
        zulu = _closure1_slot7;
        oscar = {};
        mike = 'getAlgorithm';
        oscar['key'] = mike;
        mike = function() { // Original name: value
            entity = null;
            return entity;
        };
        oscar['value'] = mike;
        mike = new Array(4);
        mike[0] = oscar;
        oscar = {};
        golf = 'usesLegacyCompression';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscar['value'] = golf;
        mike[1] = oscar;
        oscar = {};
        golf = 'feed';
        oscar['key'] = golf;
        golf = function(argFoo) { // Original name: value
            _fun106141: for(var _fun106141_ip = 0; ; ) switch(_fun106141_ip) {
 0:
                zulu = this;
                mike = zulu._onDataReady;
                entity = null;
                if(!(entity != mike)) { _fun106141_ip = 33; continue _fun106141 }
 15:
                mike = zulu._onDataReady;
                entity = argFoo;
                entity = mike.bind(zulu)(entity);
                entity = undefined;
                return entity;
 33:
                entity = global;
                zulu = entity.Error;
                entity = zulu.prototype;
                mike = Object.create(entity, {constructor: {value: zulu}});
                tango = 'Cannot feed unless a data ready callback is registered.';
                report = mike;
                entity = new report[zulu](tango, zulu);
                entity = entity instanceof Object ? entity : mike;
                throw entity;
            }
        };
        oscar['value'] = golf;
        mike[2] = oscar;
        oscar = {};
        golf = 'close';
        oscar['key'] = golf;
        golf = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscar['value'] = golf;
        mike[3] = oscar;
        oscar = {};
        golf = 'canUse';
        oscar['key'] = golf;
        entity = function() { // Original name: value
            entity = true;
            return entity;
        };
        oscar['value'] = entity;
        entity = new Array(1);
        entity[0] = oscar;
        entity = zulu.bind(tango)(report, mike, entity);
        return entity;
    };
    golf = tango.bind(entity)(golf);
    var _closure1_slot10 = golf;
    tango = options.push;
    tango = tango.bind(options)(golf);
    tango = 12;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/gateway/GatewayCompressionHandler.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: getCompressionHandler
        _fun106144: for(var _fun106144_ip = 0; ; ) switch(_fun106144_ip) {
 0:
            zulu = argFoo;
            tango = _closure1_slot0;
            report = _closure1_slot2;
            mike = 11;
            mike = report[mike];
            golf = undefined;
            mike = tango.bind(golf)(mike);
            tango = mike.ProcessArgs;
            mike = tango.isDiscordGatewayPlaintextSet;
            mike = mike.bind(tango)();
            if(mike) { _fun106144_ip = 166; continue _fun106144 }
 47:
            tango = _closure1_slot11;
            mike = _closure1_slot9;
            oscar = tango.bind(golf)(mike);
            tango = oscar.bind(golf)();
            mike = tango.done;
            report = tango;
            if(mike) { _fun106144_ip = 137; continue _fun106144 }
 75:
            mike = report.value;
            tango = mike.canUse;
            tango = tango.bind(mike)();
            if(tango) { _fun106144_ip = 112; continue _fun106144 }
 95:
            options = oscar.bind(golf)();
            tango = options.done;
            report = options;
            if(tango) { _fun106144_ip = 137; continue _fun106144 }
 110:
            _fun106144_ip = 75; continue _fun106144;
 112:
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            offset = tango;
            verify = zulu;
            mike = new offset[mike](verify, options);
            mike = mike instanceof Object ? mike : tango;
            return mike;
 137:
            mike = _closure1_slot10;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            offset = tango;
            verify = zulu;
            mike = new offset[mike](verify, options);
            mike = mike instanceof Object ? mike : tango;
            return mike;
 166:
            entity = _closure1_slot10;
            mike = entity.prototype;
            mike = Object.create(mike, {constructor: {value: entity}});
            offset = mike;
            verify = zulu;
            entity = new offset[entity](verify, options);
            entity = entity instanceof Object ? entity : mike;
            return entity;
        }
    };
    zulu['getCompressionHandler'] = mike;
    return entity;
})();