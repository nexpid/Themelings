// app/modules/connectivity/native/ConnectivityStatusStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golfie;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
 72: // try_end0
            _fun00002_ip = 76; continue _fun00001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot25 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot25 = entity;
    entity = function() { // Original name: getStateActiveMillis
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot18;
            entity = null;
            zuuluu = entity != zuuluu;
            entity = 0;
            if(!zuuluu) { _fun00004_ip = 46; continue _fun00003 }
 18:
            michal = _closure1_slot18;
            zuuluu = -michal;
            michal = global;
            tangon = michal.Date;
            michal = tangon.now;
            michal = michal.bind(tangon)();
            entity = zuuluu + michal;
 46:
            return entity;
        }
    };
    var _closure1_slot26 = entity;
    entity = function() { // Original name: updateConnectivityState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot21;
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00006_ip = 426; continue _fun00005 }
 18:
            zuuluu = _closure1_slot20;
            if(!(oscard != zuuluu)) { _fun00006_ip = 426; continue _fun00005 }
 29:
            zuuluu = _closure1_slot21;
            if(zuuluu) { _fun00006_ip = 81; continue _fun00005 }
 36:
            zuuluu = _closure1_slot20;
            if(!zuuluu) { _fun00006_ip = 57; continue _fun00005 }
 43:
            zuuluu = _closure1_slot22;
            if(!zuuluu) { _fun00006_ip = 69; continue _fun00005 }
 50:
            zuuluu = _closure1_slot23;
            if(zuuluu) { _fun00006_ip = 69; continue _fun00005 }
 57:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.ONLINE;
            _fun00006_ip = 79; continue _fun00005;
 69:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.CONNECTING;
 79:
            _fun00006_ip = 91; continue _fun00005;
 81:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.OFFLINE;
 91:
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot15;
            zuuluu = zuuluu === tangon;
            if(!zuuluu) { _fun00006_ip = 114; continue _fun00005 }
 106:
            report = _closure1_slot18;
            zuuluu = oscard != report;
 114:
            if(zuuluu) { _fun00006_ip = 250; continue _fun00005 }
 120:
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            _closure1_slot18 = zuuluu;
            option = _closure1_slot15;
            zuuluu = _closure1_slot13;
            report = zuuluu.ONLINE;
            zuuluu = 0;
            if(!(report !== tangon)) { _fun00006_ip = 246; continue _fun00005 }
 161:
            report = _closure1_slot13;
            report = report.OFFLINE;
            golfie = 1000;
            zuuluu = golfie;
            if(!(report !== tangon)) { _fun00006_ip = 246; continue _fun00005 }
 184:
            report = _closure1_slot13;
            report = report.CONNECTING;
            zuuluu = undefined;
            if(!(report === tangon)) { _fun00006_ip = 246; continue _fun00005 }
 200:
            report = _closure1_slot13;
            oscard = report.OFFLINE;
            report = golfie;
            if(!(option !== oscard)) { _fun00006_ip = 243; continue _fun00005 }
 217:
            option = _closure1_slot7;
            oscard = option.hasCache;
            oscard = oscard.bind(option)();
            report = golfie;
            if(!oscard) { _fun00006_ip = 243; continue _fun00005 }
 237:
            report = 10000;
 243:
            zuuluu = report;
 246:
            _closure1_slot19 = zuuluu;
 250:
            report = _closure1_slot19;
            oscard = _closure1_slot26;
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)();
            golfie = report - zuuluu;
            zuuluu = global;
            option = zuuluu.Math;
            report = option.round;
            oscard = 100;
            report = report.bind(option)(oscard);
            report = golfie / report;
            golfie = report * oscard;
            oscard = zuuluu.Math;
            report = oscard.max;
            zuuluu = 0;
            zuuluu = report.bind(oscard)(golfie, zuuluu);
            report = _closure1_slot15;
            report = report === tangon;
            if(!report) { _fun00006_ip = 335; continue _fun00005 }
 327:
            oscard = _closure1_slot16;
            report = oscard === zuuluu;
 335:
            if(report) { _fun00006_ip = 422; continue _fun00005 }
 338:
            _closure1_slot15 = tangon;
            _closure1_slot16 = zuuluu;
            report = _closure1_slot12;
            tangon = report.verbose;
            oscard = _closure1_slot15;
            zuuluu = 'State set to ';
            golfie = zuuluu + oscard;
            oscard = _closure1_slot16;
            zuuluu = ', with delay: ';
            zuuluu = golfie + zuuluu;
            zuuluu = zuuluu + oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            report = _closure1_slot14;
            tangon = report.start;
            zuuluu = _closure1_slot16;
            michal = function() {
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    zuuluu = _closure1_slot17;
                    michal = _closure1_slot15;
                    if(!(zuuluu !== michal)) { _fun00008_ip = 66; continue _fun00007 }
 15:
                    report = _closure1_slot12;
                    tangon = report.verbose;
                    zuuluu = _closure1_slot15;
                    michal = 'New connectivity state published:';
                    michal = tangon.bind(report)(michal, zuuluu);
                    michal = _closure2_slot0;
                    _closure1_slot17 = michal;
                    michal = _closure1_slot24;
                    entity = michal.emitChange;
                    entity = entity.bind(michal)();
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = true;
            entity = tangon.bind(report)(zuuluu, michal, entity);
 422:
            entity = false;
            return entity;
 426:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot27 = entity;
    option = function() { // Original name: handleConnectionClosed
        entity = false;
        _closure1_slot22 = entity;
        report = _closure1_slot12;
        tangon = report.verbose;
        zuuluu = 'Connection closed';
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot27;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        return entity;
    };
    entity = function() { // Original name: handleLoadingMessagesChanged
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            zuuluu = _closure1_slot10;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != tangon)) { _fun00010_ip = 95; continue _fun00009 }
 23:
            zuuluu = _closure1_slot9;
            entity = zuuluu.isLoadingMessages;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = _closure1_slot23;
            entity = zuuluu !== entity;
            if(!entity) { _fun00010_ip = 93; continue _fun00009 }
 51:
            _closure1_slot23 = zuuluu;
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = _closure1_slot23;
            zuuluu = 'Loading messages: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot27;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            entity = false;
 93:
            return entity;
 95:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: handleAuthStoreChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot8;
            entity = zuuluu.isAuthenticated;
            zuuluu = entity.bind(zuuluu)();
            entity = _closure1_slot20;
            entity = entity !== zuuluu;
            if(!entity) { _fun00012_ip = 70; continue _fun00011 }
 28:
            _closure1_slot20 = zuuluu;
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = _closure1_slot20;
            zuuluu = 'Is authenticated: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot27;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            entity = false;
 70:
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = global;
    offset = entity.Object;
    tangon = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(offset)(zuuluu, entity, michal);
    yankee = 0;
    michal = golfie[yankee];
    entity = undefined;
    michal = verify.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 2;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 3;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 4;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot6 = michal;
    michal = 5;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot7 = michal;
    michal = 6;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot8 = michal;
    michal = 7;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot9 = michal;
    michal = 8;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    var _closure1_slot10 = michal;
    michal = 9;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.AppStates;
    var _closure1_slot11 = michal;
    michal = 10;
    michal = golfie[michal];
    michal = verify.bind(entity)(michal);
    tangon = michal.prototype;
    offset = Object.create(tangon, {constructor: {value: michal}});
    tangon = 'ConnectivityStatusStore';
    sizing = offset;
    kiloes = tangon;
    michal = new sizing[michal](kiloes, backup);
    michal = michal instanceof Object ? michal : offset;
    var _closure1_slot12 = michal;
    michal = {};
    offset = 'ONLINE';
    michal['ONLINE'] = offset;
    offset = 'OFFLINE';
    michal['OFFLINE'] = offset;
    offset = 'CONNECTING';
    michal['CONNECTING'] = offset;
    var _closure1_slot13 = michal;
    offset = 11;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.Timeout;
    romeon = offset.prototype;
    romeon = Object.create(romeon, {constructor: {value: offset}});
    sizing = romeon;
    offset = new sizing[offset](kiloes);
    offset = offset instanceof Object ? offset : romeon;
    var _closure1_slot14 = offset;
    offset = null;
    var _closure1_slot15 = offset;
    var _closure1_slot16 = yankee;
    yankee = michal.ONLINE;
    var _closure1_slot17 = yankee;
    var _closure1_slot18 = offset;
    yankee = 10000;
    var _closure1_slot19 = yankee;
    var _closure1_slot20 = offset;
    var _closure1_slot21 = offset;
    offset = false;
    var _closure1_slot22 = offset;
    var _closure1_slot23 = offset;
    offset = 13;
    offset = golfie[offset];
    offset = verify.bind(entity)(offset);
    yankee = offset.Store;
    offset = function(argFoo) {
        tangon = function() { // Original name: ConnectivityStatusStore
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot2;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot5;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot4;
                entity = _closure1_slot25;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00014_ip = 69; continue _fun00013 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00014_ip = 105; continue _fun00013;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot5;
                oscard = oscard.bind(zuuluu)(tangon);
                oscard = oscard.constructor;
                report = arguments;
                entity = golfie.bind(option)(verify, report, oscard);
 105:
                entity = michal.bind(zuuluu)(tangon, entity);
                return entity;
            }
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot6;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot3;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            report = tangon.syncWith;
            michal = _closure1_slot9;
            zuuluu = new Array(1);
            zuuluu[0] = michal;
            michal = _closure1_slot28;
            michal = report.bind(tangon)(zuuluu, michal);
            zuuluu = tangon.syncWith;
            report = _closure1_slot8;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot29;
            entity = zuuluu.bind(tangon)(michal, entity);
            michal = function() { // Original name: handleInitialize
                tangon = _closure1_slot0;
                report = _closure1_slot1;
                zuuluu = 12;
                golfie = report[zuuluu];
                entity = undefined;
                verify = tangon.bind(entity)(golfie);
                option = verify.addOfflineCallback;
                golfie = function() {
                    michal = true;
                    _closure1_slot21 = michal;
                    michal = _closure1_slot27;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                golfie = option.bind(verify)(golfie);
                golfie = report[zuuluu];
                option = tangon.bind(entity)(golfie);
                golfie = option.addOnlineCallback;
                oscard = function() {
                    michal = false;
                    _closure1_slot21 = michal;
                    michal = _closure1_slot27;
                    entity = undefined;
                    michal = michal.bind(entity)();
                    return entity;
                };
                oscard = golfie.bind(option)(oscard);
                zuuluu = report[zuuluu];
                tangon = tangon.bind(entity)(zuuluu);
                zuuluu = tangon.isOnline;
                zuuluu = zuuluu.bind(tangon)();
                zuuluu = !zuuluu;
                _closure1_slot21 = zuuluu;
                tangon = _closure1_slot8;
                zuuluu = tangon.isAuthenticated;
                zuuluu = zuuluu.bind(tangon)();
                _closure1_slot20 = zuuluu;
                michal = _closure1_slot27;
                michal = michal.bind(entity)();
                return entity;
            };
            entity = undefined;
            michal = michal.bind(entity)();
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'isConnected';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = _closure1_slot17;
            entity = _closure1_slot13;
            entity = entity.ONLINE;
            entity = michal === entity;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            entity = _closure1_slot17;
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    offset = offset.bind(entity)(yankee);
    offset['displayName'] = tangon;
    tangon = 14;
    tangon = golfie[tangon];
    kiloes = verify.bind(entity)(tangon);
    tangon = {};
    yankee = function() { // Original name: handleConnectionOpen
        michal = true;
        _closure1_slot22 = michal;
        tangon = _closure1_slot12;
        zuuluu = tangon.verbose;
        michal = 'Connection open.';
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot27;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = false;
        return entity;
    };
    tangon['CONNECTION_OPEN'] = yankee;
    yankee = function() { // Original name: handleConnectionResumed
        michal = true;
        _closure1_slot22 = michal;
        tangon = _closure1_slot12;
        zuuluu = tangon.verbose;
        michal = 'Connection resumed.';
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot27;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = false;
        return entity;
    };
    tangon['CONNECTION_RESUMED'] = yankee;
    tangon['CONNECTION_CLOSED'] = option;
    tangon['CONNECTION_INTERRUPTED'] = option;
    option = function(argFoo) { // Original name: handleAppStateUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            zuuluu = argFoo;
            tangon = zuuluu.state;
            entity = _closure1_slot11;
            entity = entity.INACTIVE;
            entity = tangon !== entity;
            if(!entity) { _fun00016_ip = 167; continue _fun00015 }
 31:
            report = zuuluu.state;
            tangon = _closure1_slot11;
            tangon = tangon.BACKGROUND;
            if(!(report === tangon)) { _fun00016_ip = 72; continue _fun00015 }
 50:
            report = _closure1_slot19;
            oscard = _closure1_slot26;
            tangon = undefined;
            tangon = oscard.bind(tangon)();
            tangon = report - tangon;
            _closure1_slot19 = tangon;
 72:
            report = zuuluu.state;
            tangon = _closure1_slot11;
            tangon = tangon.ACTIVE;
            tangon = report === tangon;
            if(!tangon) { _fun00016_ip = 104; continue _fun00015 }
 94:
            oscard = _closure1_slot18;
            report = null;
            tangon = report != oscard;
 104:
            if(!tangon) { _fun00016_ip = 128; continue _fun00015 }
 107:
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            _closure1_slot18 = tangon;
 128:
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = zuuluu.state;
            zuuluu = 'App state updated: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot27;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            entity = false;
 167:
            return entity;
        }
    };
    tangon['APP_STATE_UPDATE'] = option;
    option = offset.prototype;
    option = Object.create(option, {constructor: {value: offset}});
    sizing = option;
    backup = tangon;
    tangon = new sizing[offset](kiloes, backup, foxtra);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot24 = tangon;
    report = 15;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/connectivity/native/ConnectivityStatusStore.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['default'] = tangon;
    zuuluu['ConnectivityState'] = michal;
    return entity;
})();