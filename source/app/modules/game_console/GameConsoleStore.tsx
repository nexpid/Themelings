// app/modules/game_console/GameConsoleStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot3;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot2;
            entity = _closure1_slot15;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot3;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot15 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = function(argFoo, argBar) { // Original name: _createForOfIteratorHelperLoose
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = argFoo;
            var _closure2_slot0 = zuuluu;
            report = global;
            michal = report.Symbol;
            tangon = 'undefined';
            michal = typeof michal;
            michal = tangon !== michal;
            if(!michal) { _fun00006_ip = 46; continue _fun00005 }
 30:
            tangon = report.Symbol;
            tangon = tangon.iterator;
            michal = zuuluu[tangon];
 46:
            if(michal) { _fun00006_ip = 55; continue _fun00005 }
 49:
            michal = zuuluu.@@iterator;
 55:
            if(michal) { _fun00006_ip = 343; continue _fun00005 }
 61:
            oscard = report.Array;
            tangon = oscard.isArray;
            oscard = tangon.bind(oscard)(zuuluu);
            tangon = michal;
            if(oscard) { _fun00006_ip = 323; continue _fun00005 }
 86:
            option = undefined;
            oscard = undefined;
            if(!zuuluu) { _fun00006_ip = 283; continue _fun00005 }
 96:
            verify = 'string';
            golfie = typeof zuuluu;
            if(!(verify !== golfie)) { _fun00006_ip = 270; continue _fun00005 }
 110:
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
            if(!golfie) { _fun00006_ip = 163; continue _fun00005 }
 158:
            golfie = zuuluu.constructor;
 163:
            offset = verify;
            if(!golfie) { _fun00006_ip = 179; continue _fun00005 }
 169:
            golfie = zuuluu.constructor;
            offset = golfie.name;
 179:
            golfie = 'Map';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 187:
            golfie = 'Set';
            if(!(golfie !== offset)) { _fun00006_ip = 249; continue _fun00005 }
 195:
            golfie = 'Arguments';
            if(!(golfie !== offset)) { _fun00006_ip = 234; continue _fun00005 }
 205:
            verify = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            golfie = verify.test;
            verify = golfie.bind(verify)(offset);
            golfie = undefined;
            if(!verify) { _fun00006_ip = 247; continue _fun00005 }
 234:
            verify = _closure1_slot17;
            golfie = verify.bind(option)(zuuluu, option);
 247:
            _fun00006_ip = 265; continue _fun00005;
 249:
            offset = report.Array;
            verify = offset.from;
            golfie = verify.bind(offset)(zuuluu);
 265:
            oscard = golfie;
            _fun00006_ip = 283; continue _fun00005;
 270:
            golfie = _closure1_slot17;
            oscard = golfie.bind(option)(zuuluu, option);
 283:
            tangon = oscard;
            if(tangon) { _fun00006_ip = 323; continue _fun00005 }
 289:
            golfie = report.TypeError;
            report = golfie.prototype;
            oscard = Object.create(report, {constructor: {value: golfie}});
            foxtra = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            backup = oscard;
            report = new backup[golfie](foxtra, romeon);
            report = report instanceof Object ? report : oscard;
            throw report;
 323:
            if(!tangon) { _fun00006_ip = 330; continue _fun00005 }
 326:
            _closure2_slot0 = tangon;
 330:
            tangon = 0;
            var _closure2_slot1 = tangon;
            entity = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    michal = _closure2_slot1;
                    entity = _closure2_slot0;
                    entity = entity.length;
                    if(!(!(michal >= entity))) { _fun00008_ip = 56; continue _fun00007 }
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
                    _fun00008_ip = 67; continue _fun00007;
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
 343:
            entity = michal.call;
            zuuluu = entity.bind(michal)(zuuluu);
            michal = zuuluu.next;
            entity = michal.bind;
            entity = entity.bind(michal)(zuuluu);
            return entity;
        }
    };
    var _closure1_slot16 = entity;
    entity = function(argFoo, argBar) { // Original name: _arrayLikeToArray
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            tangon = argFoo;
            entity = null;
            zuuluu = undefined;
            entity = entity == zuuluu;
            if(entity) { _fun00010_ip = 23; continue _fun00009 }
 14:
            michal = tangon.length;
            entity = zuuluu > michal;
 23:
            michal = undefined;
            if(!entity) { _fun00010_ip = 33; continue _fun00009 }
 28:
            michal = tangon.length;
 33:
            entity = global;
            entity = entity.Array;
            entity = entity.bind(zuuluu)(michal);
            zuuluu = 0;
            report = zuuluu < michal;
            if(!report) { _fun00010_ip = 70; continue _fun00009 }
 55:
            report = tangon[zuuluu];
            entity[zuuluu] = report;
            zuuluu = zuuluu + 1;
            if(zuuluu < michal) { _fun00010_ip = 55; continue _fun00009 }
 70:
            return entity;
        }
    };
    var _closure1_slot17 = entity;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot0 = golfie;
    golfie = 1;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot1 = golfie;
    golfie = 2;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot2 = golfie;
    golfie = 3;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 4;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot4 = golfie;
    golfie = 5;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot5 = golfie;
    golfie = 6;
    golfie = report[golfie];
    golfie = oscard.bind(entity)(golfie);
    var _closure1_slot6 = golfie;
    golfie = null;
    var _closure1_slot7 = golfie;
    var _closure1_slot8 = golfie;
    golfie = michal.Set;
    option = golfie.prototype;
    option = Object.create(option, {constructor: {value: golfie}});
    foxtra = option;
    golfie = new foxtra[golfie](romeon);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot9 = golfie;
    golfie = {};
    var _closure1_slot10 = golfie;
    golfie = {};
    var _closure1_slot11 = golfie;
    golfie = michal.Set;
    option = golfie.prototype;
    option = Object.create(option, {constructor: {value: golfie}});
    foxtra = option;
    golfie = new foxtra[golfie](romeon);
    golfie = golfie instanceof Object ? golfie : option;
    var _closure1_slot12 = golfie;
    option = michal.Object;
    golfie = option.freeze;
    michal = {};
    michal = golfie.bind(option)(michal);
    var _closure1_slot13 = michal;
    michal = 7;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.DeviceSettingsStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: GameConsoleStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot14;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot4;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                entity = argFoo;
                tangon = this;
                michal = null;
                if(!(michal != entity)) { _fun00012_ip = 25; continue _fun00011 }
 12:
                michal = entity.lastSelectedDeviceByPlatform;
                _closure1_slot11 = michal;
 25:
                zuuluu = tangon.waitFor;
                michal = _closure1_slot5;
                entity = _closure1_slot6;
                entity = zuuluu.bind(tangon)(michal, entity);
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(9);
        entity[0] = report;
        report = {};
        golfie = 'getUserAgnosticState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = {};
            michal = _closure1_slot11;
            entity['lastSelectedDeviceByPlatform'] = michal;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getDevicesForPlatform';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = _closure1_slot10;
                entity = argFoo;
                entity = zuuluu[entity];
                zuuluu = null;
                if(!(zuuluu == entity)) { _fun00014_ip = 24; continue _fun00013 }
 20:
                entity = _closure1_slot13;
 24:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLastSelectedDeviceByPlatform';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            michal = _closure1_slot11;
            entity = argFoo;
            entity = michal[entity];
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getDevice';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = _closure1_slot10;
                entity = argFoo;
                zuuluu = michal[entity];
                entity = null;
                michal = entity == zuuluu;
                entity = undefined;
                if(michal) { _fun00016_ip = 32; continue _fun00015 }
 25:
                michal = argBar;
                entity = zuuluu[michal];
 32:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getFetchingDevices';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot12;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getPendingDeviceCommands';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot9;
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getRemoteSessionId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot7;
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getAwaitingRemoteSessionInfo';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = oscard;
        entity[8] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'GameConsoleStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = 8;
    michal = report[michal];
    romeon = oscard.bind(entity)(michal);
    michal = {};
    option = function(argFoo) { // Original name: handleRemoteSessionConnect
        entity = argFoo;
        entity = entity.sessionId;
        _closure1_slot7 = entity;
        entity = null;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['REMOTE_SESSION_CONNECT'] = option;
    option = function() { // Original name: handleRemoteSessionDisconnect
        entity = null;
        _closure1_slot7 = entity;
        _closure1_slot8 = entity;
        entity = undefined;
        return entity;
    };
    michal['REMOTE_SESSION_DISCONNECT'] = option;
    option = function(argFoo) { // Original name: handleWaitForRemoteSession
        entity = argFoo;
        oscard = entity.sessionType;
        report = entity.nonce;
        tangon = entity.channelId;
        zuuluu = entity.deviceId;
        entity = entity.commandId;
        michal = {};
        michal['type'] = oscard;
        michal['nonce'] = report;
        michal['channelId'] = tangon;
        tangon = global;
        report = tangon.Date;
        tangon = report.now;
        tangon = tangon.bind(report)();
        michal['startedAt'] = tangon;
        michal['deviceId'] = zuuluu;
        michal['commandId'] = entity;
        _closure1_slot8 = michal;
        entity = undefined;
        return entity;
    };
    michal['WAIT_FOR_REMOTE_SESSION'] = option;
    option = function(argFoo) { // Original name: handleFetchDevicesStart
        entity = argFoo;
        zuuluu = entity.platform;
        michal = _closure1_slot12;
        entity = michal.add;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    michal['GAME_CONSOLE_FETCH_DEVICES_START'] = option;
    option = function(argFoo) { // Original name: handleFetchDevicesSuccess
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            option = entity.platform;
            report = entity.devices;
            michal = _closure1_slot12;
            entity = michal.delete;
            entity = entity.bind(michal)(option);
            entity = _closure1_slot10;
            golfie = {};
            entity[option] = golfie;
            michal = {};
            tangon = _closure1_slot16;
            entity = undefined;
            oscard = tangon.bind(entity)(report);
            report = oscard.bind(entity)();
            tangon = report.done;
            if(tangon) { _fun00018_ip = 122; continue _fun00017 }
 67:
            tangon = report.value;
            verify = tangon.id;
            golfie[verify] = tangon;
            verify = _closure1_slot11;
            offset = verify[option];
            verify = tangon.id;
            if(!(offset === verify)) { _fun00018_ip = 107; continue _fun00017 }
 98:
            tangon = tangon.id;
            michal[option] = tangon;
 107:
            verify = oscard.bind(entity)();
            tangon = verify.done;
            report = verify;
            if(!tangon) { _fun00018_ip = 67; continue _fun00017 }
 122:
            _closure1_slot11 = michal;
            return entity;
        }
    };
    michal['GAME_CONSOLE_FETCH_DEVICES_SUCCESS'] = option;
    option = function(argFoo) { // Original name: handleFetchDevicesFail
        entity = argFoo;
        zuuluu = entity.platform;
        michal = _closure1_slot12;
        entity = michal.delete;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    michal['GAME_CONSOLE_FETCH_DEVICES_FAIL'] = option;
    tangon = function(argFoo) { // Original name: handleSelectDevice
        entity = argFoo;
        zuuluu = entity.platform;
        michal = entity.deviceId;
        entity = _closure1_slot11;
        entity[zuuluu] = michal;
        entity = undefined;
        return entity;
    };
    michal['GAME_CONSOLE_SELECT_DEVICE'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[golfie](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/game_console/GameConsoleStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();