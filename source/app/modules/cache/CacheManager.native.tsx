// app/modules/cache/CacheManager.native.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot13;
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
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot12 = entity;
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
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
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot8 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot9 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    verify = golfie.bind(entity)(tangon);
    tangon = verify.prototype;
    option = Object.create(tangon, {constructor: {value: verify}});
    romeon = 'CacheStore';
    foxtra = option;
    tangon = new foxtra[verify](romeon, yankee);
    tangon = tangon instanceof Object ? tangon : option;
    var _closure1_slot10 = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    tangon = tangon.Millis;
    option = tangon.MINUTE;
    tangon = 15;
    tangon = tangon * option;
    var _closure1_slot11 = tangon;
    tangon = 13;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: CacheManager
            oscard = this;
            yankee = 0;
            golfie = copyRestArgs(yankee);
            michal = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            michal = michal.bind(tangon)(oscard, report);
            michal = _closure1_slot12;
            entity = new Array(0);
            yankee = entity;
            offset = golfie;
            verify = 0;
            golfie = arraySpread(yankee, offset, verify);
            entity = michal.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            michal = {};
            tangon = entity.handleConnectionOpen;
            michal['POST_CONNECTION_OPEN'] = tangon;
            tangon = entity.handleConnectionClose;
            michal['CONNECTION_CLOSED'] = tangon;
            tangon = function(argFoo) { // Original name: APP_STATE_UPDATE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleAppStateUpdate;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['APP_STATE_UPDATE'] = tangon;
            zuuluu = function(argFoo) { // Original name: WINDOW_FOCUS
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleWindowFocus;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            michal['WINDOW_FOCUS'] = zuuluu;
            entity['actions'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'handleConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 9;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.doesDatabaseVersionMatchJsConstants;
            tangon = michal.bind(zuuluu)();
            zuuluu = tangon.then;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    entity = argFoo;
                    if(entity) { _fun00006_ip = 41; continue _fun00005 }
 6:
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    entity = michal.writeCaches;
                    entity = entity.bind(michal)();
 41:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'handleConnectionClose';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = false;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'handleAppStateUpdate';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = argFoo;
                tangon = entity.state;
                report = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 11;
                michal = zuuluu[michal];
                zuuluu = undefined;
                report = report.bind(zuuluu)(michal);
                michal = report.isAndroid;
                michal = michal.bind(report)();
                oscard = _closure1_slot0;
                golfie = _closure1_slot2;
                report = 12;
                report = golfie[report];
                report = oscard.bind(zuuluu)(report);
                report = report.AppStates;
                if(michal) { _fun00008_ip = 79; continue _fun00007 }
 71:
                michal = report.INACTIVE;
                _fun00008_ip = 85; continue _fun00007;
 79:
                michal = report.BACKGROUND;
 85:
                michal = michal === tangon;
                if(!michal) { _fun00008_ip = 106; continue _fun00007 }
 92:
                report = _closure1_slot8;
                tangon = report.isConnected;
                michal = tangon.bind(report)();
 106:
                if(!michal) { _fun00008_ip = 139; continue _fun00007 }
 109:
                michal = _closure1_slot0;
                tangon = _closure1_slot2;
                entity = 10;
                entity = tangon[entity];
                michal = michal.bind(zuuluu)(entity);
                entity = michal.writeCaches;
                entity = entity.bind(michal)();
 139:
                entity = false;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'handleWindowFocus';
        report['key'] = golfie;
        oscard = function(argFoo) { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = argFoo;
                entity = entity.focused;
                if(entity) { _fun00010_ip = 132; continue _fun00009 }
 12:
                entity = global;
                michal = entity.Date;
                entity = michal.now;
                zuuluu = entity.bind(michal)();
                michal = _closure1_slot9;
                michal = michal.lastWriteTime;
                zuuluu = zuuluu - michal;
                michal = _closure1_slot11;
                if(!(!(zuuluu > michal))) { _fun00010_ip = 79; continue _fun00009 }
 56:
                tangon = _closure1_slot10;
                zuuluu = tangon.verbose;
                michal = 'Not writing cache from window unfocus';
                michal = zuuluu.bind(tangon)(michal);
                _fun00010_ip = 132; continue _fun00009;
 79:
                tangon = _closure1_slot10;
                zuuluu = tangon.verbose;
                michal = 'Writing cache from window unfocus';
                michal = zuuluu.bind(tangon)(michal);
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 10;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.writeCaches;
                entity = entity.bind(michal)();
 132:
                entity = false;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    foxtra = tangon;
    michal = new foxtra[michal](romeon);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 14;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/cache/CacheManager.native.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();