// app/modules/app_launcher/AppLauncherLastUsedCommandStore.tsx
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
            entity = _closure1_slot8;
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
    var _closure1_slot7 = entity;
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
            _closure1_slot8 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    michal = report[entity];
    entity = undefined;
    michal = oscard.bind(entity)(michal);
    var _closure1_slot0 = michal;
    michal = 1;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot1 = michal;
    michal = 2;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 3;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 4;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    var _closure1_slot4 = michal;
    michal = 5;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.Millis;
    golfie = michal.MINUTE;
    michal = 10;
    michal = michal * golfie;
    var _closure1_slot5 = michal;
    michal = {'lastUsedCommandId': null, 'lastUsedTimeMs': null};
    var _closure1_slot6 = michal;
    michal = 6;
    michal = report[michal];
    michal = oscard.bind(entity)(michal);
    golfie = michal.PersistedStore;
    michal = function(argFoo) {
        tangon = function() { // Original name: AppLauncherLastUsedCommandStore
            report = this;
            tangon = undefined;
            entity = undefined;
            oscard = _closure1_slot0;
            zuuluu = _closure2_slot0;
            oscard = oscard.bind(tangon)(report, zuuluu);
            michal = _closure1_slot7;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                entity = argFoo;
                michal = null;
                if(!(michal != entity)) { _fun00006_ip = 40; continue _fun00005 }
 9:
                michal = _closure1_slot6;
                zuuluu = entity.lastUsedCommandId;
                michal['lastUsedCommandId'] = zuuluu;
                entity = entity.lastUsedTimeMs;
                michal['lastUsedTimeMs'] = entity;
 40:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        golfie = 'getState';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getLastUsedCommandId';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                entity = global;
                michal = entity.Date;
                entity = michal.now;
                report = entity.bind(michal)();
                entity = _closure1_slot6;
                entity = entity.lastUsedTimeMs;
                tangon = null;
                zuuluu = tangon == entity;
                entity = null;
                if(zuuluu) { _fun00008_ip = 108; continue _fun00007 }
 41:
                zuuluu = _closure1_slot6;
                zuuluu = zuuluu.lastUsedCommandId;
                zuuluu = tangon == zuuluu;
                entity = null;
                if(zuuluu) { _fun00008_ip = 108; continue _fun00007 }
 60:
                zuuluu = _closure1_slot6;
                oscard = zuuluu.lastUsedTimeMs;
                zuuluu = _closure1_slot5;
                zuuluu = oscard + zuuluu;
                if(!(report > zuuluu)) { _fun00008_ip = 98; continue _fun00007 }
 82:
                zuuluu = _closure1_slot6;
                zuuluu['lastUsedCommandId'] = tangon;
                zuuluu['lastUsedTimeMs'] = tangon;
 98:
                michal = _closure1_slot6;
                entity = michal.lastUsedCommandId;
 108:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    golfie = michal.bind(entity)(golfie);
    michal = 'AppLauncherLastUsedCommandStore';
    golfie['displayName'] = michal;
    golfie['persistKey'] = michal;
    michal = 7;
    michal = report[michal];
    yankee = oscard.bind(entity)(michal);
    michal = {};
    tangon = function(argFoo) { // Original name: handleApplicationCommandUsed
        entity = argFoo;
        entity = entity.command;
        michal = _closure1_slot6;
        entity = entity.id;
        michal['lastUsedCommandId'] = entity;
        entity = global;
        zuuluu = entity.Date;
        entity = zuuluu.now;
        entity = entity.bind(zuuluu)();
        michal['lastUsedTimeMs'] = entity;
        entity = undefined;
        return entity;
    };
    michal['APPLICATION_COMMAND_USED'] = tangon;
    tangon = golfie.prototype;
    tangon = Object.create(tangon, {constructor: {value: golfie}});
    romeon = tangon;
    offset = michal;
    michal = new romeon[golfie](yankee, offset, verify);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 8;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_launcher/AppLauncherLastUsedCommandStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();