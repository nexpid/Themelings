// app/stores/native/ScreenStore.tsx
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
            _closure1_slot13 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: isDimensionsChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.isAndroid;
            entity = entity.bind(michal)();
            report = _closure1_slot8;
            michal = report.get;
            if(entity) { _fun00006_ip = 57; continue _fun00005 }
 46:
            entity = 'window';
            zuuluu = michal.bind(report)(entity);
            _fun00006_ip = 66; continue _fun00005;
 57:
            entity = 'screen';
            zuuluu = michal.bind(report)(entity);
 66:
            michal = _closure1_slot11;
            entity = !michal;
            if(michal) { _fun00006_ip = 108; continue _fun00005 }
 76:
            report = _closure1_slot9;
            michal = zuuluu.width;
            michal = report !== michal;
            if(michal) { _fun00006_ip = 105; continue _fun00005 }
 92:
            tangon = _closure1_slot10;
            zuuluu = zuuluu.height;
            michal = tangon !== zuuluu;
 105:
            entity = michal;
 108:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: onDimensionsChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = arguments[0];
            entity = undefined;
            if(!(michal === entity)) { _fun00008_ip = 62; continue _fun00007 }
 9:
            zuuluu = {};
            golfie = _closure1_slot8;
            oscard = golfie.get;
            report = 'screen';
            report = oscard.bind(golfie)(report);
            zuuluu['screen'] = report;
            oscard = _closure1_slot8;
            report = oscard.get;
            tangon = 'window';
            tangon = report.bind(oscard)(tangon);
            zuuluu['window'] = tangon;
            michal = zuuluu;
 62:
            golfie = michal.screen;
            oscard = michal.window;
            michal = true;
            _closure1_slot11 = michal;
            zuuluu = _closure1_slot1;
            verify = _closure1_slot2;
            michal = 7;
            michal = verify[michal];
            tangon = zuuluu.bind(entity)(michal);
            zuuluu = tangon.dispatch;
            michal = {};
            report = 'SCREEN_UPDATE';
            michal['type'] = report;
            report = {};
            yankee = _closure1_slot0;
            offset = 6;
            verify = verify[offset];
            yankee = yankee.bind(entity)(verify);
            verify = yankee.isAndroid;
            verify = verify.bind(yankee)();
            if(verify) { _fun00008_ip = 156; continue _fun00007 }
 149:
            verify = oscard.width;
            _fun00008_ip = 161; continue _fun00007;
 156:
            verify = golfie.width;
 161:
            report['width'] = verify;
            verify = _closure1_slot0;
            option = _closure1_slot2;
            option = option[offset];
            verify = verify.bind(entity)(option);
            option = verify.isAndroid;
            option = option.bind(verify)();
            if(option) { _fun00008_ip = 201; continue _fun00007 }
 194:
            oscard = oscard.height;
            _fun00008_ip = 206; continue _fun00007;
 201:
            oscard = golfie.height;
 206:
            report['height'] = oscard;
            michal['dimensions'] = report;
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    michal = 0;
    option = oscard[michal];
    entity = undefined;
    option = golfie.bind(entity)(option);
    var _closure1_slot3 = option;
    option = 1;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = golfie.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = report.bind(entity)(option);
    option = option.Dimensions;
    var _closure1_slot8 = option;
    var _closure1_slot9 = michal;
    var _closure1_slot10 = michal;
    michal = false;
    var _closure1_slot11 = michal;
    michal = 8;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function(argFoo) { // Original name: ScreenStore
            report = this;
            offset = 0;
            oscard = copyRestArgs(offset);
            zuuluu = _closure1_slot3;
            tangon = _closure2_slot0;
            michal = undefined;
            zuuluu = zuuluu.bind(michal)(report, tangon);
            zuuluu = _closure1_slot12;
            entity = new Array(0);
            offset = entity;
            verify = oscard;
            option = 0;
            oscard = arraySpread(offset, verify, option);
            entity = zuuluu.bind(michal)(report, tangon, entity);
            entity['_dimensionsChangeListener'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = _closure1_slot15;
            entity = undefined;
            zuuluu = report.bind(entity)();
            tangon = _closure1_slot8;
            zuuluu = tangon.addEventListener;
            michal = 'change';
            zuuluu = zuuluu.bind(tangon)(michal, report);
            michal = this;
            michal['_dimensionsChangeListener'] = zuuluu;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golfie = 'destroy';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                michal = entity._dimensionsChangeListener;
                entity = null;
                if(!(entity != michal)) { _fun00010_ip = 25; continue _fun00009 }
 15:
                entity = michal.remove;
                entity = entity.bind(michal)();
 25:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getWidth';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                michal = _closure1_slot14;
                zuuluu = undefined;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00012_ip = 24; continue _fun00011 }
 16:
                michal = _closure1_slot15;
                michal = michal.bind(zuuluu)();
 24:
                entity = _closure1_slot9;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getHeight';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                michal = _closure1_slot14;
                zuuluu = undefined;
                michal = michal.bind(zuuluu)();
                if(!michal) { _fun00014_ip = 24; continue _fun00013 }
 16:
                michal = _closure1_slot15;
                michal = michal.bind(zuuluu)();
 24:
                entity = _closure1_slot10;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[3] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    option = michal.bind(entity)(option);
    michal = 'ScreenStore';
    option['displayName'] = michal;
    michal = 7;
    michal = oscard[michal];
    romeon = golfie.bind(entity)(michal);
    michal = {};
    tangon = function(argFoo) { // Original name: handleScreenUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = false;
            _closure1_slot11 = entity;
            entity = argFoo;
            entity = entity.dimensions;
            michal = entity.width;
            report = null;
            if(!(report != michal)) { _fun00016_ip = 40; continue _fun00015 }
 29:
            tangon = entity.width;
            michal = 0;
            if(!(michal === tangon)) { _fun00016_ip = 46; continue _fun00015 }
 40:
            tangon = _closure1_slot9;
            _fun00016_ip = 51; continue _fun00015;
 46:
            tangon = entity.width;
 51:
            michal = entity.height;
            if(!(report != michal)) { _fun00016_ip = 71; continue _fun00015 }
 60:
            report = entity.height;
            michal = 0;
            if(!(michal === report)) { _fun00016_ip = 77; continue _fun00015 }
 71:
            michal = _closure1_slot10;
            _fun00016_ip = 82; continue _fun00015;
 77:
            michal = entity.height;
 82:
            entity = _closure1_slot9;
            entity = tangon !== entity;
            if(entity) { _fun00016_ip = 101; continue _fun00015 }
 93:
            report = _closure1_slot10;
            entity = michal !== report;
 101:
            _closure1_slot9 = tangon;
            _closure1_slot10 = michal;
            return entity;
        }
    };
    michal['SCREEN_UPDATE'] = tangon;
    tangon = option.prototype;
    tangon = Object.create(tangon, {constructor: {value: option}});
    foxtra = tangon;
    yankee = michal;
    michal = new foxtra[option](romeon, yankee, offset);
    michal = michal instanceof Object ? michal : tangon;
    tangon = 9;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/native/ScreenStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();