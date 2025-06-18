// app/modules/gateway/GatewayCompressionHandler.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00002_ip = 45; continue _fun00001 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 45:
            if(michal) { _fun00002_ip = 54; continue _fun00001 }
 48:
            michal = zuuluu.@@iterator;
 54:
            if(michal) { _fun00002_ip = 342; continue _fun00001 }
 60:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00002_ip = 322; continue _fun00001 }
 85:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00002_ip = 282; continue _fun00001 }
 95:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00002_ip = 269; continue _fun00001 }
 109:
            golfie = {};
            verify = golfie.toString;
            golfie = verify.call;
            yankee = golfie.bind(verify)(zuuluu);
            offset = yankee.slice;
            verify = 8;
            golfie = -1;
            verify = offset.bind(yankee)(verify, golfie);
            golfie = 'Object';
            golfie = golfie === verify;
            if(!golfie) { _fun00002_ip = 162; continue _fun00001 }
 157:
            golfie = zuuluu.constructor;
 162:
            offset = verify;
            if(!golfie) { _fun00002_ip = 178; continue _fun00001 }
 168:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 178:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 186:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00002_ip = 248; continue _fun00001 }
 194:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00002_ip = 233; continue _fun00001 }
 204:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00002_ip = 246; continue _fun00001 }
 233:
            verify = _closure1_slot12;
            golfie = verify.bind(option)(zuuluu, option);
 246:
            _fun00002_ip = 264; continue _fun00001;
 248:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 264:
            oscard = golfie;
            _fun00002_ip = 282; continue _fun00001;
 269:
            golfie = _closure1_slot12;
            oscard = golfie.bind(option)(zuuluu, option);
 282:
            tangon = oscard;
            if(tangon) { _fun00002_ip = 322; continue _fun00001 }
 288:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 322:
            if(!tangon) { _fun00002_ip = 329; continue _fun00001 }
 325:
            _closure2_slot0 = tangon;
 329:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00004_ip = 56; continue _fun00003 }
 20:
                    entity = {};
                    michal = false;
                    entity['done'] = michal;
                    zuuluu = _closure2_slot0;
                    michal = _closure2_slot1;
                    michal = parseFloat(michal);
                    tangon = michal + 1;
                    _closure2_slot1 = tangon;
                    michal = zuuluu[michal];
                    entity['value'] = michal;
                    _fun00004_ip = 67; continue _fun00003;
 56:
                    michal = {};
                    zuuluu = true;
                    michal['done'] = zuuluu;
                    entity = michal;
 67:
                    return entity;
                }
            };
            return entity;
 342:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00006_ip = 23; continue _fun00005 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00006_ip = 33; continue _fun00005 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00006_ip = 70; continue _fun00005 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00006_ip = 55; continue _fun00005 }
 70:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot4;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot3;
            entity = _closure1_slot14;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00008_ip = 51; continue _fun00007 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00008_ip = 92; continue _fun00007;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00008_ip = 71; continue _fun00007 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot4;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00010_ip = 74; continue _fun00009;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot14 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 5;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.NativeModules;
    var _closure1_slot8 = tangon;
    option = new Array(0);
    var _closure1_slot9 = option;
    tangon = function() {
        report = _closure1_slot7;
        tangon = function(argFoo) { // Original name: BaseGatewayCompressionHandler
            zuuluu = this;
            tangon = _closure1_slot6;
            michal = _closure2_slot0;
            entity = undefined;
            michal = tangon.bind(entity)(zuuluu, michal);
            michal = null;
            zuuluu['_onDataReady'] = michal;
            michal = argFoo;
            zuuluu['_gatewayEncoding'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        entity = {};
        zuuluu = 'bindWebSocket';
        entity['key'] = zuuluu;
        zuuluu = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = zuuluu;
        zuuluu = new Array(3);
        zuuluu[0] = entity;
        entity = {};
        oscard = 'feed';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[1] = entity;
        entity = {};
        oscard = 'dataReady';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            michal = argFoo;
            entity = this;
            entity['_onDataReady'] = michal;
            entity = undefined;
            return entity;
        };
        entity['value'] = oscard;
        zuuluu[2] = entity;
        entity = {};
        oscard = 'canUse';
        entity['key'] = oscard;
        michal = function() { // Original name: value
            entity = false;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(1);
        michal[0] = entity;
        entity = undefined;
        entity = report.bind(entity)(tangon, zuuluu, michal);
        return entity;
    };
    golfie = tangon.bind(entity)();
    verify = option.push;
    tangon = function(argFoo) {
        report = function(argFoo) { // Original name: DesktopZstdGatewayCompressionHandler
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                oscard = this;
                entity = _closure1_slot6;
                report = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(oscard, report);
                zuuluu = _closure1_slot13;
                entity = new Array(1);
                golfie = argFoo;
                entity[0] = golfie;
                entity = zuuluu.bind(tangon)(oscard, report, entity);
                zuuluu = null;
                entity['_decoder'] = zuuluu;
                oscard = entity._gatewayEncoding;
                report = oscard.wantsString;
                report = report.bind(oscard)();
                if(report) { _fun00012_ip = 82; continue _fun00011 }
 74:
                entity['_decoder'] = zuuluu;
                _fun00012_ip = 122; continue _fun00011;
 82:
                zuuluu = global;
                oscard = zuuluu.TextDecoder;
                zuuluu = oscard.prototype;
                report = Object.create(zuuluu, {constructor: {value: oscard}});
                offset = 'utf-8';
                yankee = report;
                zuuluu = new yankee[oscard](offset, verify);
                zuuluu = zuuluu instanceof Object ? zuuluu : report;
                entity['_decoder'] = zuuluu;
 122:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 6;
                michal = report[michal];
                zuuluu = zuuluu.bind(tangon)(michal);
                michal = zuuluu.createZstdContextWeb;
                michal = michal.bind(zuuluu)();
                entity['_stream'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot5;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot7;
        oscard = {};
        michal = 'getAlgorithm';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            entity = 'zstd-stream';
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        golfie = 'usesLegacyCompression';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'feed';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                report = argFoo;
                zuuluu = this;
                entity = zuuluu._stream;
                tangon = null;
                if(!(tangon != entity)) { _fun00014_ip = 151; continue _fun00013 }
 21:
                entity = global;
                michal = entity.ArrayBuffer;
                michal = report instanceof michal;
                if(michal) { _fun00014_ip = 77; continue _fun00013 }
 36:
                oscard = entity.Error;
                entity = oscard.prototype;
                michal = Object.create(entity, {constructor: {value: oscard}});
                golfie = 'Expected array buffer, but got ';
                entity = typeof report;
                option = golfie + entity;
                verify = michal;
                entity = new verify[oscard](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 77:
                michal = zuuluu._stream;
                entity = michal.decompress;
                oscard = entity.bind(michal)(report);
                entity = zuuluu._decoder;
                michal = oscard;
                if(!(tangon != entity)) { _fun00014_ip = 126; continue _fun00013 }
 109:
                report = zuuluu._decoder;
                entity = report.decode;
                michal = entity.bind(report)(oscard);
 126:
                entity = zuuluu._onDataReady;
                if(!(tangon != entity)) { _fun00014_ip = 147; continue _fun00013 }
 136:
                entity = zuuluu._onDataReady;
                entity = entity.bind(zuuluu)(michal);
 147:
                entity = undefined;
                return entity;
 151:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                option = 'Trying to decompress with zstd but did not initialize with it';
                verify = michal;
                entity = new verify[zuuluu](option, golfie);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'close';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'canUse';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    tangon = verify.bind(option)(tangon);
    verify = option.push;
    tangon = function(argFoo) {
        report = function(argFoo) { // Original name: PakoStreamGatewayCompressionHandler
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                oscard = this;
                entity = _closure1_slot6;
                report = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(oscard, report);
                zuuluu = _closure1_slot13;
                entity = new Array(1);
                golfie = argFoo;
                entity[0] = golfie;
                entity = zuuluu.bind(tangon)(oscard, report, entity);
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 7;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                entity['_pako'] = michal;
                michal = false;
                entity['_usesZstd'] = michal;
                michal = null;
                entity['_zstdDecoder'] = michal;
                entity['_zstdStream'] = michal;
                michal = entity._pako;
                tangon = michal.Inflate;
                michal = {};
                zuuluu = 65536;
                michal['chunkSize'] = zuuluu;
                report = entity._gatewayEncoding;
                zuuluu = report.wantsString;
                report = zuuluu.bind(report)();
                zuuluu = '';
                if(!report) { _fun00016_ip = 153; continue _fun00015 }
 149:
                zuuluu = 'string';
 153:
                michal['to'] = zuuluu;
                zuuluu = tangon.prototype;
                zuuluu = Object.create(zuuluu, {constructor: {value: tangon}});
                yankee = zuuluu;
                offset = michal;
                michal = new yankee[tangon](offset, verify);
                michal = michal instanceof Object ? michal : zuuluu;
                entity['_inflate'] = michal;
                zuuluu = entity._inflate;
                tangon = entity.handleFlushEnd;
                michal = tangon.bind;
                michal = michal.bind(tangon)(entity);
                zuuluu['onEnd'] = michal;
                return entity;
            }
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot5;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot7;
        oscard = {};
        michal = 'getAlgorithm';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            entity = 'zlib-stream';
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(5);
        michal[0] = oscard;
        oscard = {};
        golfie = 'usesLegacyCompression';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'feed';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                tangon = argFoo;
                report = this;
                entity = report._inflate;
                michal = null;
                if(!(michal != entity)) { _fun00018_ip = 247; continue _fun00017 }
 21:
                entity = report._onDataReady;
                if(!(michal !== entity)) { _fun00018_ip = 211; continue _fun00017 }
 34:
                entity = global;
                michal = entity.ArrayBuffer;
                michal = tangon instanceof michal;
                if(michal) { _fun00018_ip = 90; continue _fun00017 }
 49:
                oscard = entity.Error;
                michal = oscard.prototype;
                zuuluu = Object.create(michal, {constructor: {value: oscard}});
                golfie = 'Expected array buffer, but got ';
                michal = typeof tangon;
                verify = golfie + michal;
                offset = zuuluu;
                michal = new offset[oscard](verify, option);
                michal = michal instanceof Object ? michal : zuuluu;
                throw michal;
 90:
                entity = entity.DataView;
                michal = entity.prototype;
                michal = Object.create(michal, {constructor: {value: entity}});
                offset = michal;
                verify = tangon;
                entity = new offset[entity](verify, option);
                golfie = entity instanceof Object ? entity : michal;
                entity = golfie.byteLength;
                michal = 4;
                oscard = entity >= michal;
                if(!oscard) { _fun00018_ip = 169; continue _fun00017 }
 135:
                zuuluu = golfie.getUint32;
                entity = golfie.byteLength;
                michal = entity - michal;
                entity = false;
                michal = zuuluu.bind(golfie)(michal, entity);
                entity = 65535;
                oscard = entity === michal;
 169:
                zuuluu = report._inflate;
                michal = zuuluu.push;
                entity = !oscard;
                entity = !entity;
                if(!oscard) { _fun00018_ip = 201; continue _fun00017 }
 189:
                report = report._pako;
                entity = report.Z_SYNC_FLUSH;
 201:
                entity = michal.bind(zuuluu)(tangon, entity);
                entity = undefined;
                return entity;
 211:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                verify = 'Cannot feed unless a data ready callback is registered.';
                offset = michal;
                entity = new offset[zuuluu](verify, option);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
 247:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                verify = 'Trying to feed to closed compression adapter';
                offset = michal;
                entity = new offset[zuuluu](verify, option);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'close';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                michal = this;
                zuuluu = michal._inflate;
                entity = null;
                if(!(entity != zuuluu)) { _fun00020_ip = 43; continue _fun00019 }
 15:
                zuuluu = michal._inflate;
                zuuluu['onEnd'] = entity;
                tangon = michal._inflate;
                zuuluu = new Array(0);
                tangon['chunks'] = zuuluu;
 43:
                michal['_inflate'] = entity;
                entity = undefined;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'handleFlushEnd';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                oscard = argFoo;
                tangon = this;
                entity = tangon._pako;
                michal = tangon._inflate;
                report = null;
                if(!(report == michal)) { _fun00022_ip = 96; continue _fun00021 }
 24:
                option = _closure1_slot1;
                golfie = _closure1_slot2;
                zuuluu = 8;
                golfie = golfie[zuuluu];
                zuuluu = undefined;
                option = option.bind(zuuluu)(golfie);
                zuuluu = option.prototype;
                golfie = Object.create(zuuluu, {constructor: {value: option}});
                sizing = 'GatewayCompressionHandler';
                output = golfie;
                zuuluu = new output[option](sizing, kiloes);
                option = zuuluu instanceof Object ? zuuluu : golfie;
                golfie = option.error;
                zuuluu = 'flush end happened on closed compression adapter';
                zuuluu = golfie.bind(option)(zuuluu);
                _fun00022_ip = 337; continue _fun00021;
 96:
                entity = entity.Z_OK;
                if(!(oscard === entity)) { _fun00022_ip = 341; continue _fun00021 }
 109:
                golfie = michal.chunks;
                option = golfie.length;
                zuuluu = tangon._gatewayEncoding;
                entity = zuuluu.wantsString;
                zuuluu = entity.bind(zuuluu)();
                entity = 1;
                if(zuuluu) { _fun00022_ip = 279; continue _fun00021 }
 145:
                if(!(!(option > entity))) { _fun00022_ip = 160; continue _fun00021 }
 149:
                zuuluu = 0;
                zuuluu = golfie[zuuluu];
                _fun00022_ip = 308; continue _fun00021;
 160:
                verify = 0;
                foxtra = verify < option;
                yankee = 0;
                offset = 0;
                romeon = 0;
                if(!foxtra) { _fun00022_ip = 198; continue _fun00021 }
 175:
                foxtra = golfie[offset];
                foxtra = foxtra.length;
                yankee = yankee + foxtra;
                offset = offset + 1;
                romeon = yankee;
                if(offset < option) { _fun00022_ip = 175; continue _fun00021 }
 198:
                offset = global;
                offset = offset.Uint8Array;
                yankee = offset.prototype;
                yankee = Object.create(yankee, {constructor: {value: offset}});
                output = yankee;
                sizing = romeon;
                offset = new output[offset](sizing, kiloes);
                yankee = offset instanceof Object ? offset : yankee;
                romeon = verify < option;
                offset = 0;
                verify = 0;
                zuuluu = yankee;
                if(!romeon) { _fun00022_ip = 308; continue _fun00021 }
 243:
                romeon = golfie[verify];
                foxtra = yankee.set;
                foxtra = foxtra.bind(yankee)(romeon, offset);
                romeon = romeon.length;
                offset = offset + romeon;
                verify = verify + 1;
                zuuluu = yankee;
                if(verify < option) { _fun00022_ip = 243; continue _fun00021 }
 277:
                _fun00022_ip = 308; continue _fun00021;
 279:
                if(!(!(option > entity))) { _fun00022_ip = 291; continue _fun00021 }
 283:
                entity = 0;
                entity = golfie[entity];
                _fun00022_ip = 305; continue _fun00021;
 291:
                verify = golfie.join;
                option = '';
                entity = verify.bind(golfie)(option);
 305:
                zuuluu = entity;
 308:
                entity = 0;
                golfie['length'] = entity;
                entity = tangon._onDataReady;
                if(!(report != entity)) { _fun00022_ip = 337; continue _fun00021 }
 326:
                entity = tangon._onDataReady;
                entity = entity.bind(tangon)(zuuluu);
 337:
                entity = undefined;
                return entity;
 341:
                entity = global;
                zuuluu = entity.Error;
                michal = michal.strm;
                report = michal.msg;
                entity = entity.HermesInternal;
                tangon = entity.concat;
                michal = 'zlib error, ';
                entity = ', ';
                sizing = tangon.bind(michal)(oscard, entity, report);
                michal = zuuluu.prototype;
                michal = Object.create(michal, {constructor: {value: zuuluu}});
                output = michal;
                entity = new output[zuuluu](sizing, kiloes);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'canUse';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    tangon = verify.bind(option)(tangon);
    verify = option.push;
    tangon = function(argFoo) {
        report = function(argFoo) { // Original name: PakoGatewayCompressionHandler
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            entity = _closure1_slot6;
            report = _closure2_slot0;
            tangon = undefined;
            entity = entity.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot13;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            zuuluu = _closure1_slot0;
            report = _closure1_slot2;
            michal = 7;
            michal = report[michal];
            michal = zuuluu.bind(tangon)(michal);
            entity['_pako'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot5;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot7;
        oscard = {};
        michal = 'getAlgorithm';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            entity = null;
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        golfie = 'usesLegacyCompression';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = true;
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'feed';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                golfie = argFoo;
                tangon = this;
                oscard = tangon._pako;
                entity = global;
                michal = entity.ArrayBuffer;
                michal = golfie instanceof michal;
                if(!michal) { _fun00024_ip = 43; continue _fun00023 }
 27:
                report = tangon._gatewayEncoding;
                zuuluu = report.wantsString;
                michal = zuuluu.bind(report)();
 43:
                zuuluu = golfie;
                if(!michal) { _fun00024_ip = 71; continue _fun00023 }
 49:
                report = oscard.inflate;
                michal = {};
                option = 'string';
                michal['to'] = option;
                zuuluu = report.bind(oscard)(golfie, michal);
 71:
                report = tangon._onDataReady;
                michal = null;
                if(!(michal != report)) { _fun00024_ip = 98; continue _fun00023 }
 83:
                michal = tangon._onDataReady;
                michal = michal.bind(tangon)(zuuluu);
                michal = undefined;
                return michal;
 98:
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                offset = 'Cannot feed unless a data ready callback is registered.';
                yankee = michal;
                entity = new yankee[zuuluu](offset, verify);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'close';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'canUse';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    tangon = verify.bind(option)(tangon);
    verify = option.push;
    tangon = function(argFoo) {
        report = function(argFoo) { // Original name: MobileGatewayCompressionHandler
            report = this;
            michal = _closure1_slot6;
            tangon = _closure2_slot0;
            zuuluu = undefined;
            michal = michal.bind(zuuluu)(report, tangon);
            michal = _closure1_slot13;
            entity = new Array(1);
            oscard = argFoo;
            entity[0] = oscard;
            entity = michal.bind(zuuluu)(report, tangon, entity);
            michal = null;
            entity['_socketId'] = michal;
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot5;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot7;
        oscard = {};
        michal = 'bindWebSocket';
        oscard['key'] = michal;
        michal = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = this;
                entity = michal.close;
                entity = entity.bind(michal)();
                entity = argFoo;
                entity = entity._socketId;
                michal['_socketId'] = entity;
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 6;
                tangon = tangon[entity];
                entity = undefined;
                report = report.bind(entity)(tangon);
                tangon = report.supportsZstd;
                report = tangon.bind(report)();
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                tangon = 9;
                tangon = golfie[tangon];
                oscard = oscard.bind(entity)(tangon);
                tangon = oscard.isAndroid;
                tangon = tangon.bind(oscard)();
                if(report) { _fun00026_ip = 205; continue _fun00025 }
 95:
                if(tangon) { _fun00026_ip = 130; continue _fun00025 }
 98:
                report = _closure1_slot8;
                golfie = report.DCDCompressionManager;
                oscard = golfie.enableZlibStreamSupport;
                report = michal._socketId;
                report = oscard.bind(golfie)(report);
                _fun00026_ip = 310; continue _fun00025;
 130:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                golfie = 10;
                report = report[golfie];
                report = oscard.bind(entity)(report);
                oscard = report.default;
                report = null;
                if(!(report != oscard)) { _fun00026_ip = 310; continue _fun00025 }
 164:
                oscard = _closure1_slot0;
                report = _closure1_slot2;
                report = report[golfie];
                report = oscard.bind(entity)(report);
                golfie = report.default;
                oscard = golfie.enableZlibStreamSupport;
                report = michal._socketId;
                report = oscard.bind(golfie)(report);
                _fun00026_ip = 310; continue _fun00025;
 205:
                if(tangon) { _fun00026_ip = 240; continue _fun00025 }
 208:
                tangon = _closure1_slot8;
                golfie = tangon.DCDCompressionManager;
                oscard = golfie.enableZstdStreamSupport;
                report = michal._socketId;
                tangon = 0;
                tangon = oscard.bind(golfie)(report, tangon);
                _fun00026_ip = 310; continue _fun00025;
 240:
                oscard = _closure1_slot0;
                tangon = _closure1_slot2;
                report = 10;
                tangon = tangon[report];
                tangon = oscard.bind(entity)(tangon);
                oscard = tangon.default;
                tangon = null;
                if(!(tangon != oscard)) { _fun00026_ip = 310; continue _fun00025 }
 271:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                zuuluu = zuuluu[report];
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = zuuluu.default;
                zuuluu = tangon.enableZstdStreamSupport;
                michal = michal._socketId;
                michal = zuuluu.bind(tangon)(michal);
 310:
                return entity;
            }
        };
        oscard['value'] = michal;
        michal = new Array(5);
        michal[0] = oscard;
        oscard = {};
        golfie = 'getAlgorithm';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 6;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.supportsZstd;
                michal = entity.bind(michal)();
                entity = 'zlib-stream';
                if(!michal) { _fun00028_ip = 50; continue _fun00027 }
 44:
                entity = 'zstd-stream';
 50:
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'usesLegacyCompression';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'feed';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                tangon = michal._onDataReady;
                entity = null;
                if(!(entity != tangon)) { _fun00030_ip = 37; continue _fun00029 }
 18:
                if(!(entity !== zuuluu)) { _fun00030_ip = 33; continue _fun00029 }
 22:
                entity = michal._onDataReady;
                entity = entity.bind(michal)(zuuluu);
 33:
                entity = undefined;
                return entity;
 37:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                report = 'Cannot feed unless a data ready callback is registered.';
                oscard = michal;
                entity = new oscard[zuuluu](report, tangon);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'close';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                entity = this;
                zuuluu = entity._socketId;
                oscard = null;
                entity['_socketId'] = oscard;
                if(!(oscard !== zuuluu)) { _fun00032_ip = 146; continue _fun00031 }
 24:
                report = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 9;
                michal = tangon[michal];
                tangon = undefined;
                report = report.bind(tangon)(michal);
                michal = report.isAndroid;
                michal = michal.bind(report)();
                if(michal) { _fun00032_ip = 84; continue _fun00031 }
 61:
                michal = _closure1_slot8;
                report = michal.DCDCompressionManager;
                michal = report.disableZlibStreamSupport;
                michal = michal.bind(report)(zuuluu);
                _fun00032_ip = 146; continue _fun00031;
 84:
                golfie = _closure1_slot0;
                michal = _closure1_slot2;
                report = 10;
                michal = michal[report];
                michal = golfie.bind(tangon)(michal);
                michal = michal.default;
                if(!(oscard != michal)) { _fun00032_ip = 146; continue _fun00031 }
 113:
                michal = _closure1_slot0;
                entity = _closure1_slot2;
                entity = entity[report];
                entity = michal.bind(tangon)(entity);
                michal = entity.default;
                entity = michal.disableZlibStreamSupport;
                entity = entity.bind(michal)(zuuluu);
 146:
                entity = undefined;
                return entity;
            }
        };
        oscard['value'] = golfie;
        michal[4] = oscard;
        oscard = {};
        golfie = 'canUse';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 9;
                entity = tangon[entity];
                tangon = undefined;
                zuuluu = zuuluu.bind(tangon)(entity);
                entity = zuuluu.isAndroid;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00034_ip = 55; continue _fun00033 }
 37:
                entity = _closure1_slot8;
                zuuluu = entity.DCDCompressionManager;
                entity = null;
                entity = entity != zuuluu;
                _fun00034_ip = 86; continue _fun00033;
 55:
                zuuluu = _closure1_slot0;
                report = _closure1_slot2;
                michal = 10;
                michal = report[michal];
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = michal.default;
                michal = null;
                entity = michal != zuuluu;
 86:
                return entity;
            }
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    tangon = tangon.bind(entity)(golfie);
    tangon = verify.bind(option)(tangon);
    tangon = function(argFoo) {
        report = function() { // Original name: NullGatewayCompressionHandler
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot6;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot13;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = report;
        oscard = _closure1_slot5;
        tangon = undefined;
        zuuluu = argFoo;
        zuuluu = oscard.bind(tangon)(report, zuuluu);
        zuuluu = _closure1_slot7;
        oscard = {};
        michal = 'getAlgorithm';
        oscard['key'] = michal;
        michal = function() { // Original name: value
            entity = null;
            return entity;
        };
        oscard['value'] = michal;
        michal = new Array(4);
        michal[0] = oscard;
        oscard = {};
        golfie = 'usesLegacyCompression';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = false;
            return entity;
        };
        oscard['value'] = golfie;
        michal[1] = oscard;
        oscard = {};
        golfie = 'feed';
        oscard['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zuuluu = this;
                michal = zuuluu._onDataReady;
                entity = null;
                if(!(entity != michal)) { _fun00036_ip = 33; continue _fun00035 }
 15:
                michal = zuuluu._onDataReady;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                entity = undefined;
                return entity;
 33:
                entity = global;
                zuuluu = entity.Error;
                entity = zuuluu.prototype;
                michal = Object.create(entity, {constructor: {value: zuuluu}});
                tangon = 'Cannot feed unless a data ready callback is registered.';
                report = michal;
                entity = new report[zuuluu](tangon, zuuluu);
                entity = entity instanceof Object ? entity : michal;
                throw entity;
            }
        };
        oscard['value'] = golfie;
        michal[2] = oscard;
        oscard = {};
        golfie = 'close';
        oscard['key'] = golfie;
        golfie = function() { // Original name: value
            entity = undefined;
            return entity;
        };
        oscard['value'] = golfie;
        michal[3] = oscard;
        oscard = {};
        golfie = 'canUse';
        oscard['key'] = golfie;
        entity = function() { // Original name: value
            entity = true;
            return entity;
        };
        oscard['value'] = entity;
        entity = new Array(1);
        entity[0] = oscard;
        entity = zuuluu.bind(tangon)(report, michal, entity);
        return entity;
    };
    golfie = tangon.bind(entity)(golfie);
    var _closure1_slot10 = golfie;
    tangon = option.push;
    tangon = tangon.bind(option)(golfie);
    tangon = 12;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/gateway/GatewayCompressionHandler.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: getCompressionHandler
        _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
            zuuluu = argFoo;
            tangon = _closure1_slot0;
            report = _closure1_slot2;
            michal = 11;
            michal = report[michal];
            golfie = undefined;
            michal = tangon.bind(golfie)(michal);
            tangon = michal.ProcessArgs;
            michal = tangon.isDiscordGatewayPlaintextSet;
            michal = michal.bind(tangon)();
            if(michal) { _fun00038_ip = 166; continue _fun00037 }
 47:
            tangon = _closure1_slot11;
            michal = _closure1_slot9;
            oscard = tangon.bind(golfie)(michal);
            tangon = oscard.bind(golfie)();
            michal = tangon.done;
            report = tangon;
            if(michal) { _fun00038_ip = 137; continue _fun00037 }
 75:
            michal = report.value;
            tangon = michal.canUse;
            tangon = tangon.bind(michal)();
            if(tangon) { _fun00038_ip = 112; continue _fun00037 }
 95:
            option = oscard.bind(golfie)();
            tangon = option.done;
            report = option;
            if(tangon) { _fun00038_ip = 137; continue _fun00037 }
 110:
            _fun00038_ip = 75; continue _fun00037;
 112:
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            offset = tangon;
            verify = zuuluu;
            michal = new offset[michal](verify, option);
            michal = michal instanceof Object ? michal : tangon;
            return michal;
 137:
            michal = _closure1_slot10;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            offset = tangon;
            verify = zuuluu;
            michal = new offset[michal](verify, option);
            michal = michal instanceof Object ? michal : tangon;
            return michal;
 166:
            entity = _closure1_slot10;
            michal = entity.prototype;
            michal = Object.create(michal, {constructor: {value: entity}});
            offset = michal;
            verify = zuuluu;
            entity = new offset[entity](verify, option);
            entity = entity instanceof Object ? entity : michal;
            return entity;
        }
    };
    zuuluu['getCompressionHandler'] = michal;
    return entity;
})();