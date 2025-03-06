// app/modules/app_database/stores/FileSystemStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBaz;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = report;
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
            entity = _closure1_slot11;
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
    var _closure1_slot10 = entity;
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
            _closure1_slot11 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = report[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot5 = tangon;
    tangon = 4;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 5;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    var _closure1_slot7 = tangon;
    tangon = 6;
    tangon = report[tangon];
    option = oscard.bind(entity)(tangon);
    tangon = option.prototype;
    golfie = Object.create(tangon, {constructor: {value: option}});
    yankee = 'FileSystemStore';
    romeon = golfie;
    tangon = new romeon[option](yankee, offset);
    tangon = tangon instanceof Object ? tangon : golfie;
    var _closure1_slot8 = tangon;
    tangon = 7;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Millis;
    golfie = tangon.MINUTE;
    tangon = 10;
    golfie = tangon * golfie;
    var _closure1_slot9 = golfie;
    tangon = report[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: FileSystemStore
            verify = this;
            entity = _closure1_slot3;
            oscard = _closure2_slot1;
            report = undefined;
            entity = entity.bind(report)(verify, oscard);
            tangon = _closure1_slot10;
            golfie = _closure1_slot0;
            option = _closure1_slot1;
            entity = 8;
            entity = option[entity];
            offset = golfie.bind(report)(entity);
            entity = new Array(2);
            entity[0] = offset;
            offset = {};
            yankee = function(argFoo) { // Original name: APP_STATE_UPDATE
                zuuluu = _closure3_slot0;
                michal = zuuluu.handleAppStateUpdate;
                entity = argFoo;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            offset['APP_STATE_UPDATE'] = yankee;
            yankee = function() { // Original name: POST_CONNECTION_OPEN
                michal = _closure3_slot0;
                entity = michal.handlePostConnectionOpen;
                entity = entity.bind(michal)();
                return entity;
            };
            offset['POST_CONNECTION_OPEN'] = yankee;
            entity[1] = offset;
            entity = tangon.bind(report)(verify, oscard, entity);
            var _closure3_slot0 = entity;
            tangon = false;
            entity['isLowDisk'] = tangon;
            tangon = entity.refresh;
            tangon = tangon.bind(entity)();
            oscard = entity.waitFor;
            tangon = 9;
            tangon = option[tangon];
            tangon = golfie.bind(report)(tangon);
            tangon = oscard.bind(entity)(tangon);
            tangon = global;
            tangon = tangon.setInterval;
            zuuluu = _closure1_slot9;
            michal = function() {
                michal = _closure3_slot0;
                entity = michal.refresh;
                entity = entity.bind(michal)();
                return entity;
            };
            michal = tangon.bind(report)(michal, zuuluu);
            return entity;
        };
        var _closure2_slot1 = tangon;
        michal = _closure1_slot7;
        zuuluu = undefined;
        entity = argFoo;
        entity = michal.bind(zuuluu)(tangon, entity);
        michal = _closure1_slot4;
        report = {};
        entity = 'handlePostConnectionOpen';
        report['key'] = entity;
        entity = function() { // Original name: value
            michal = this;
            entity = michal.refresh;
            entity = entity.bind(michal)();
            entity = false;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(3);
        entity[0] = report;
        report = {};
        option = 'handleAppStateUpdate';
        report['key'] = option;
        option = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                entity = argFoo;
                zuuluu = entity.state;
                entity = 'active';
                if(!(entity !== zuuluu)) { _fun00006_ip = 29; continue _fun00005 }
 19:
                entity = michal.refresh;
                entity = entity.bind(michal)();
 29:
                entity = false;
                return entity;
            }
        };
        report['value'] = option;
        entity[1] = report;
        report = {};
        option = 'refresh';
        report['key'] = option;
        option = _closure1_slot2;
        golfie = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                    StartGenerator();
                    report = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00008_ip = 376; continue _fun00007 }
 13:
                    tangon = _closure1_slot0;
                    zuuluu = _closure1_slot1;
                    michal = 9;
                    michal = zuuluu[michal];
                    zuuluu = undefined;
                    tangon = tangon.bind(zuuluu)(michal);
                    michal = tangon.database;
                    golfie = michal.bind(tangon)();
                    oscard = null;
                    tangon = oscard == golfie;
                    michal = undefined;
                    if(tangon) { _fun00008_ip = 98; continue _fun00007 }
 59:
                    tangon = golfie.fsInfo;
                    option = tangon.bind(golfie)();
                    tangon = oscard == option;
                    michal = undefined;
                    if(tangon) { _fun00008_ip = 98; continue _fun00007 }
 80:
                    golfie = option.catch;
                    tangon = function(argFoo) {
                        tangon = _closure1_slot8;
                        zuuluu = tangon.warn;
                        michal = "couldn't get fs info";
                        entity = argFoo;
                        entity = zuuluu.bind(tangon)(michal, entity);
                        return entity;
                    };
                    michal = golfie.bind(option)(tangon);
 98:
                    SaveGenerator(address=102);
 100:
                    return michal;
 102:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(tangon) { _fun00008_ip = 373; continue _fun00007 }
 111:
                    if(!(oscard != michal)) { _fun00008_ip = 370; continue _fun00007 }
 118:
                    tangon = michal.fs;
                    golfie = tangon.available;
                    tangon = 268435456;
                    golfie = golfie < tangon;
                    if(golfie) { _fun00008_ip = 178; continue _fun00007 }
 143:
                    tangon = michal.fs;
                    option = tangon.available;
                    tangon = michal.database;
                    verify = tangon.used;
                    tangon = 3;
                    tangon = tangon * verify;
                    golfie = option < tangon;
 178:
                    if(golfie) { _fun00008_ip = 216; continue _fun00007 }
 181:
                    tangon = michal.fs;
                    option = tangon.available;
                    tangon = michal.database;
                    verify = tangon.total;
                    tangon = 2;
                    tangon = tangon * verify;
                    golfie = option < tangon;
 216:
                    tangon = michal.fs;
                    option = tangon.available;
                    tangon = 805306368;
                    option = option > tangon;
                    if(!option) { _fun00008_ip = 276; continue _fun00007 }
 241:
                    tangon = michal.fs;
                    verify = tangon.available;
                    tangon = michal.database;
                    offset = tangon.used;
                    tangon = 4;
                    tangon = tangon * offset;
                    option = verify > tangon;
 276:
                    if(!option) { _fun00008_ip = 314; continue _fun00007 }
 279:
                    tangon = michal.fs;
                    verify = tangon.available;
                    tangon = michal.database;
                    offset = tangon.total;
                    tangon = 4;
                    tangon = tangon * offset;
                    option = verify > tangon;
 314:
                    tangon = !golfie;
                    tangon = !tangon;
                    if(golfie) { _fun00008_ip = 334; continue _fun00007 }
 323:
                    golfie = !option;
                    if(option) { _fun00008_ip = 331; continue _fun00007 }
 329:
                    golfie = null;
 331:
                    tangon = golfie;
 334:
                    oscard = oscard != tangon;
                    if(!oscard) { _fun00008_ip = 351; continue _fun00007 }
 341:
                    golfie = report.isLowDisk;
                    oscard = golfie !== tangon;
 351:
                    if(!oscard) { _fun00008_ip = 370; continue _fun00007 }
 354:
                    report['isLowDisk'] = tangon;
                    tangon = report.emitChange;
                    tangon = tangon.bind(report)();
 370:
                    return zuuluu;
 373:
                    return michal;
 376:
                    return entity;
                }
            };
            return entity;
        };
        golfie = option.bind(zuuluu)(golfie);
        var _closure2_slot0 = golfie;
        oscard = function() { // Original name: refresh
            entity = undefined;
            tangon = _closure2_slot0;
            zuuluu = tangon.apply;
            entity = arguments;
            michal = entity;
            entity = this;
            entity = zuuluu.bind(tangon)(entity, michal);
            return entity;
        };
        report['value'] = oscard;
        entity[2] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(tangon);
    tangon = michal.prototype;
    tangon = Object.create(tangon, {constructor: {value: michal}});
    romeon = tangon;
    michal = new romeon[michal](yankee);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 11;
    report = report[tangon];
    tangon = argBar;
    oscard = tangon.bind(entity)(report);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_database/stores/FileSystemStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();