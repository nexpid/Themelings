// app/modules/connectivity/native/ConnectivityStatusStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    verify = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = verify;
    var _closure1_slot1 = golfie;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot5;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot4;
            entity = _closure1_slot30;
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
            report = _closure1_slot5;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot29 = entity;
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
 72: // try_end0
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot30 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function() { // Original name: getStateActiveMillis
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot22;
            entity = null;
            zuuluu = entity != zuuluu;
            entity = 0;
            if(!zuuluu) { _fun00006_ip = 46; continue _fun00005 }
 18:
            michal = _closure1_slot22;
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
    var _closure1_slot31 = entity;
    entity = function() { // Original name: updateConnectivityState
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            zuuluu = _closure1_slot25;
            oscard = null;
            if(!(oscard != zuuluu)) { _fun00008_ip = 429; continue _fun00007 }
 18:
            zuuluu = _closure1_slot24;
            if(!(oscard != zuuluu)) { _fun00008_ip = 429; continue _fun00007 }
 29:
            zuuluu = _closure1_slot25;
            if(zuuluu) { _fun00008_ip = 81; continue _fun00007 }
 36:
            zuuluu = _closure1_slot24;
            if(!zuuluu) { _fun00008_ip = 57; continue _fun00007 }
 43:
            zuuluu = _closure1_slot26;
            if(!zuuluu) { _fun00008_ip = 69; continue _fun00007 }
 50:
            zuuluu = _closure1_slot27;
            if(zuuluu) { _fun00008_ip = 69; continue _fun00007 }
 57:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.ONLINE;
            _fun00008_ip = 79; continue _fun00007;
 69:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.CONNECTING;
 79:
            _fun00008_ip = 91; continue _fun00007;
 81:
            zuuluu = _closure1_slot13;
            tangon = zuuluu.OFFLINE;
 91:
            var _closure2_slot0 = tangon;
            zuuluu = _closure1_slot19;
            zuuluu = zuuluu === tangon;
            if(!zuuluu) { _fun00008_ip = 114; continue _fun00007 }
 106:
            report = _closure1_slot22;
            zuuluu = oscard != report;
 114:
            if(zuuluu) { _fun00008_ip = 249; continue _fun00007 }
 120:
            zuuluu = global;
            report = zuuluu.Date;
            zuuluu = report.now;
            zuuluu = zuuluu.bind(report)();
            _closure1_slot22 = zuuluu;
            oscard = _closure1_slot19;
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.ONLINE;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 241; continue _fun00007 }
 159:
            zuuluu = _closure1_slot13;
            zuuluu = zuuluu.OFFLINE;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 235; continue _fun00007 }
 173:
            zuuluu = _closure1_slot13;
            report = zuuluu.CONNECTING;
            zuuluu = undefined;
            if(!(report === tangon)) { _fun00008_ip = 245; continue _fun00007 }
 189:
            report = _closure1_slot13;
            report = report.OFFLINE;
            if(!(oscard !== report)) { _fun00008_ip = 220; continue _fun00007 }
 203:
            oscard = _closure1_slot7;
            report = oscard.hasCache;
            report = report.bind(oscard)();
            if(report) { _fun00008_ip = 226; continue _fun00007 }
 220:
            report = _closure1_slot15;
            _fun00008_ip = 230; continue _fun00007;
 226:
            report = _closure1_slot16;
 230:
            zuuluu = report;
            _fun00008_ip = 245; continue _fun00007;
 235:
            zuuluu = _closure1_slot15;
            _fun00008_ip = 245; continue _fun00007;
 241:
            zuuluu = _closure1_slot14;
 245:
            _closure1_slot23 = zuuluu;
 249:
            report = _closure1_slot23;
            oscard = _closure1_slot31;
            zuuluu = undefined;
            zuuluu = oscard.bind(zuuluu)();
            oscard = report - zuuluu;
            zuuluu = global;
            option = zuuluu.Math;
            golfie = option.round;
            report = 100;
            report = golfie.bind(option)(report);
            oscard = oscard / report;
            report = _closure1_slot17;
            golfie = oscard * report;
            oscard = zuuluu.Math;
            report = oscard.max;
            zuuluu = 0;
            zuuluu = report.bind(oscard)(golfie, zuuluu);
            report = _closure1_slot19;
            report = report === tangon;
            if(!report) { _fun00008_ip = 338; continue _fun00007 }
 330:
            oscard = _closure1_slot20;
            report = oscard === zuuluu;
 338:
            if(report) { _fun00008_ip = 425; continue _fun00007 }
 341:
            _closure1_slot19 = tangon;
            _closure1_slot20 = zuuluu;
            report = _closure1_slot12;
            tangon = report.verbose;
            oscard = _closure1_slot19;
            zuuluu = 'State set to ';
            golfie = zuuluu + oscard;
            oscard = _closure1_slot20;
            zuuluu = ', with delay: ';
            zuuluu = golfie + zuuluu;
            zuuluu = zuuluu + oscard;
            zuuluu = tangon.bind(report)(zuuluu);
            report = _closure1_slot18;
            tangon = report.start;
            zuuluu = _closure1_slot20;
            michal = function() {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    zuuluu = _closure1_slot21;
                    michal = _closure1_slot19;
                    if(!(zuuluu !== michal)) { _fun00010_ip = 66; continue _fun00009 }
 15:
                    report = _closure1_slot12;
                    tangon = report.verbose;
                    zuuluu = _closure1_slot19;
                    michal = 'New connectivity state published:';
                    michal = tangon.bind(report)(michal, zuuluu);
                    michal = _closure2_slot0;
                    _closure1_slot21 = michal;
                    michal = _closure1_slot28;
                    entity = michal.emitChange;
                    entity = entity.bind(michal)();
 66:
                    entity = undefined;
                    return entity;
                }
            };
            entity = true;
            entity = tangon.bind(report)(zuuluu, michal, entity);
 425:
            entity = false;
            return entity;
 429:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    option = function() { // Original name: handleConnectionClosed
        entity = false;
        _closure1_slot26 = entity;
        report = _closure1_slot12;
        tangon = report.verbose;
        zuuluu = 'Connection closed';
        zuuluu = tangon.bind(report)(zuuluu);
        zuuluu = _closure1_slot32;
        michal = undefined;
        michal = zuuluu.bind(michal)();
        return entity;
    };
    entity = function() { // Original name: handleLoadingMessagesChanged
        _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
            zuuluu = _closure1_slot10;
            entity = zuuluu.getChannelId;
            tangon = entity.bind(zuuluu)();
            entity = null;
            if(!(entity != tangon)) { _fun00012_ip = 95; continue _fun00011 }
 23:
            zuuluu = _closure1_slot9;
            entity = zuuluu.isLoadingMessages;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = _closure1_slot27;
            entity = zuuluu !== entity;
            if(!entity) { _fun00012_ip = 93; continue _fun00011 }
 51:
            _closure1_slot27 = zuuluu;
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = _closure1_slot27;
            zuuluu = 'Loading messages: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot32;
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
    var _closure1_slot33 = entity;
    entity = function() { // Original name: handleAuthStoreChanged
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            zuuluu = _closure1_slot8;
            entity = zuuluu.isAuthenticated;
            zuuluu = entity.bind(zuuluu)();
            entity = _closure1_slot24;
            entity = entity !== zuuluu;
            if(!entity) { _fun00014_ip = 70; continue _fun00013 }
 28:
            _closure1_slot24 = zuuluu;
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = _closure1_slot24;
            zuuluu = 'Is authenticated: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot32;
            michal = undefined;
            michal = zuuluu.bind(michal)();
            entity = false;
 70:
            return entity;
        }
    };
    var _closure1_slot34 = entity;
    entity = global;
    offset = entity.Object;
    tangon = offset.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = tangon.bind(offset)(zuuluu, entity, michal);
    romeon = 0;
    michal = golfie[romeon];
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
    output = offset;
    sizing = tangon;
    michal = new output[michal](sizing, kiloes);
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
    var _closure1_slot14 = romeon;
    offset = 1000;
    var _closure1_slot15 = offset;
    yankee = 10000;
    var _closure1_slot16 = yankee;
    offset = 100;
    var _closure1_slot17 = offset;
    offset = 11;
    offset = golfie[offset];
    offset = oscard.bind(entity)(offset);
    offset = offset.Timeout;
    foxtra = offset.prototype;
    foxtra = Object.create(foxtra, {constructor: {value: offset}});
    output = foxtra;
    offset = new output[offset](sizing);
    offset = offset instanceof Object ? offset : foxtra;
    var _closure1_slot18 = offset;
    offset = null;
    var _closure1_slot19 = offset;
    var _closure1_slot20 = romeon;
    romeon = michal.ONLINE;
    var _closure1_slot21 = romeon;
    var _closure1_slot22 = offset;
    var _closure1_slot23 = yankee;
    var _closure1_slot24 = offset;
    var _closure1_slot25 = offset;
    offset = false;
    var _closure1_slot26 = offset;
    var _closure1_slot27 = offset;
    offset = 13;
    offset = golfie[offset];
    offset = verify.bind(entity)(offset);
    yankee = offset.Store;
    offset = function(argFoo) {
        tangon = function() { // Original name: ConnectivityStatusStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot2;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot29;
            entity = arguments;
            entity = michal.bind(tangon)(report, zuuluu, entity);
            return entity;
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
            michal = _closure1_slot33;
            michal = report.bind(tangon)(zuuluu, michal);
            zuuluu = tangon.syncWith;
            report = _closure1_slot8;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot34;
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
                    _closure1_slot25 = michal;
                    michal = _closure1_slot32;
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
                    _closure1_slot25 = michal;
                    michal = _closure1_slot32;
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
                _closure1_slot25 = zuuluu;
                tangon = _closure1_slot8;
                zuuluu = tangon.isAuthenticated;
                zuuluu = zuuluu.bind(tangon)();
                _closure1_slot24 = zuuluu;
                michal = _closure1_slot32;
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
            michal = _closure1_slot21;
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
            entity = _closure1_slot21;
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
    sizing = verify.bind(entity)(tangon);
    tangon = {};
    yankee = function() { // Original name: handleConnectionOpen
        michal = true;
        _closure1_slot26 = michal;
        tangon = _closure1_slot12;
        zuuluu = tangon.verbose;
        michal = 'Connection open.';
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot32;
        entity = undefined;
        entity = michal.bind(entity)();
        entity = false;
        return entity;
    };
    tangon['CONNECTION_OPEN'] = yankee;
    yankee = function() { // Original name: handleConnectionResumed
        michal = true;
        _closure1_slot26 = michal;
        tangon = _closure1_slot12;
        zuuluu = tangon.verbose;
        michal = 'Connection resumed.';
        michal = zuuluu.bind(tangon)(michal);
        michal = _closure1_slot32;
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
            report = _closure1_slot23;
            oscard = _closure1_slot31;
            tangon = undefined;
            tangon = oscard.bind(tangon)();
            tangon = report - tangon;
            _closure1_slot23 = tangon;
 72:
            report = zuuluu.state;
            tangon = _closure1_slot11;
            tangon = tangon.ACTIVE;
            tangon = report === tangon;
            if(!tangon) { _fun00016_ip = 104; continue _fun00015 }
 94:
            oscard = _closure1_slot22;
            report = null;
            tangon = report != oscard;
 104:
            if(!tangon) { _fun00016_ip = 128; continue _fun00015 }
 107:
            tangon = global;
            report = tangon.Date;
            tangon = report.now;
            tangon = tangon.bind(report)();
            _closure1_slot22 = tangon;
 128:
            oscard = _closure1_slot12;
            report = oscard.verbose;
            tangon = zuuluu.state;
            zuuluu = 'App state updated: ';
            zuuluu = report.bind(oscard)(zuuluu, tangon);
            zuuluu = _closure1_slot32;
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
    output = option;
    kiloes = tangon;
    tangon = new output[offset](sizing, kiloes, backup);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot28 = tangon;
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