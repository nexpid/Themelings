// app/stores/web/WindowStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
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
            _closure1_slot10 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function(argFoo) { // Original name: getWindowIdState
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot9;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            michal = null;
            if(!(michal == entity)) { _fun00004_ip = 55; continue _fun00003 }
 26:
            michal = {'isElementFullscreen': false, 'focused': false, 'windowSize': null, 'visible': false};
            zuuluu = {'width': 0, 'height': 0};
            michal['windowSize'] = zuuluu;
            entity = michal;
 55:
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    michal = global;
    offset = michal.Object;
    verify = offset.defineProperty;
    option = {};
    entity = true;
    option['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, option);
    entity = 0;
    option = oscard[entity];
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
    option = null;
    var _closure1_slot8 = option;
    michal = michal.Map;
    option = michal.prototype;
    option = Object.create(option, {constructor: {value: michal}});
    backup = option;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : option;
    var _closure1_slot9 = michal;
    michal = 7;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    option = michal.Store;
    michal = function(argFoo) {
        tangon = function() { // Original name: WindowStore
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                tangon = this;
                zuuluu = undefined;
                report = undefined;
                entity = _closure1_slot3;
                michal = _closure2_slot0;
                entity = entity.bind(zuuluu)(tangon, michal);
                entity = _closure1_slot6;
                verify = entity.bind(zuuluu)(michal);
                michal = _closure1_slot5;
                entity = _closure1_slot10;
                entity = entity.bind(zuuluu)();
                if(entity) { _fun00006_ip = 69; continue _fun00005 }
 51:
                golfie = verify.apply;
                report = arguments;
                entity = report;
                entity = golfie.bind(verify)(tangon, entity);
                _fun00006_ip = 105; continue _fun00005;
 69:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
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
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'isFocused';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = arguments[0];
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00008_ip = 42; continue _fun00007 }
 9:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tangon = tangon.bind(michal)(entity);
                entity = tangon.getMainWindowId;
                zuuluu = entity.bind(tangon)();
 42:
                entity = _closure1_slot11;
                entity = entity.bind(michal)(zuuluu);
                entity = entity.focused;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golfie = 'isVisible';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = arguments[0];
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00010_ip = 42; continue _fun00009 }
 9:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tangon = tangon.bind(michal)(entity);
                entity = tangon.getMainWindowId;
                zuuluu = entity.bind(tangon)();
 42:
                entity = _closure1_slot11;
                entity = entity.bind(michal)(zuuluu);
                entity = entity.visible;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'getFocusedWindowId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            michal = null;
            var _closure3_slot0 = michal;
            tangon = _closure1_slot9;
            zuuluu = tangon.forEach;
            michal = function(argFoo, argBar) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    entity = entity.focused;
                    if(!entity) { _fun00012_ip = 22; continue _fun00011 }
 12:
                    entity = argBar;
                    _closure3_slot0 = entity;
 22:
                    entity = undefined;
                    return entity;
                }
            };
            michal = zuuluu.bind(tangon)(michal);
            entity = _closure3_slot0;
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'getLastFocusedWindowId';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'isElementFullScreen';
        report['key'] = golfie;
        golfie = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zuuluu = arguments[0];
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00014_ip = 42; continue _fun00013 }
 9:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tangon = tangon.bind(michal)(entity);
                entity = tangon.getMainWindowId;
                zuuluu = entity.bind(tangon)();
 42:
                entity = _closure1_slot11;
                entity = entity.bind(michal)(zuuluu);
                entity = entity.isElementFullscreen;
                return entity;
            }
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'windowSize';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zuuluu = arguments[0];
                michal = undefined;
                if(!(zuuluu === michal)) { _fun00016_ip = 42; continue _fun00015 }
 9:
                tangon = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tangon = tangon.bind(michal)(entity);
                entity = tangon.getMainWindowId;
                zuuluu = entity.bind(tangon)();
 42:
                entity = _closure1_slot11;
                entity = entity.bind(michal)(zuuluu);
                entity = entity.windowSize;
                return entity;
            }
        };
        report['value'] = oscard;
        entity[5] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    verify = michal.bind(entity)(option);
    michal = 'WindowStore';
    verify['displayName'] = michal;
    michal = 8;
    michal = oscard[michal];
    foxtra = golfie.bind(entity)(michal);
    michal = {};
    golfie = function(argFoo) { // Original name: handleWindowInit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tangon = _closure1_slot1;
            report = _closure1_slot2;
            zuuluu = 5;
            zuuluu = report[zuuluu];
            oscard = undefined;
            report = tangon.bind(oscard)(zuuluu);
            golfie = _closure1_slot9;
            tangon = golfie.has;
            zuuluu = entity.windowId;
            zuuluu = tangon.bind(golfie)(zuuluu);
            tangon = !zuuluu;
            zuuluu = 'Window initialized multiple times';
            zuuluu = report.bind(oscard)(tangon, zuuluu);
            romeon = entity.width;
            yankee = entity.height;
            verify = entity.isElementFullscreen;
            zuuluu = entity.focused;
            option = entity.visible;
            golfie = _closure1_slot9;
            oscard = golfie.set;
            report = entity.windowId;
            tangon = {};
            offset = {};
            offset['width'] = romeon;
            offset['height'] = yankee;
            tangon['windowSize'] = offset;
            tangon['isElementFullscreen'] = verify;
            tangon['focused'] = zuuluu;
            tangon['visible'] = option;
            tangon = oscard.bind(golfie)(report, tangon);
            if(!zuuluu) { _fun00018_ip = 157; continue _fun00017 }
 147:
            entity = entity.windowId;
            _closure1_slot8 = entity;
 157:
            entity = true;
            return entity;
        }
    };
    michal['WINDOW_INIT'] = golfie;
    golfie = function(argFoo) { // Original name: handleWindowFullscreenChange
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot11;
            zuuluu = oscard.windowId;
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = golfie.isElementFullscreen;
            entity = oscard.isElementFullscreen;
            entity = zuuluu !== entity;
            if(!entity) { _fun00020_ip = 92; continue _fun00019 }
 42:
            report = _closure1_slot9;
            tangon = report.set;
            zuuluu = oscard.windowId;
            michal = {};
            verify = michal;
            option = golfie;
            golfie = copyDataProperties(verify, option);
            golfie = oscard.isElementFullscreen;
            oscard = 'isElementFullscreen';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = true;
 92:
            return entity;
        }
    };
    michal['WINDOW_FULLSCREEN_CHANGE'] = golfie;
    golfie = function(argFoo) { // Original name: handleWindowFocus
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot11;
            zuuluu = oscard.windowId;
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = golfie.focused;
            entity = oscard.focused;
            entity = zuuluu !== entity;
            if(!entity) { _fun00022_ip = 111; continue _fun00021 }
 42:
            zuuluu = oscard.focused;
            if(!zuuluu) { _fun00022_ip = 61; continue _fun00021 }
 51:
            zuuluu = oscard.windowId;
            _closure1_slot8 = zuuluu;
 61:
            report = _closure1_slot9;
            tangon = report.set;
            zuuluu = oscard.windowId;
            michal = {};
            verify = michal;
            option = golfie;
            golfie = copyDataProperties(verify, option);
            golfie = oscard.focused;
            oscard = 'focused';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = true;
 111:
            return entity;
        }
    };
    michal['WINDOW_FOCUS'] = golfie;
    golfie = function(argFoo) { // Original name: handleWindowResize
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot11;
            zuuluu = oscard.windowId;
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            entity = golfie.windowSize;
            zuuluu = entity.width;
            entity = oscard.width;
            entity = zuuluu !== entity;
            if(entity) { _fun00024_ip = 66; continue _fun00023 }
 46:
            zuuluu = golfie.windowSize;
            tangon = zuuluu.height;
            zuuluu = oscard.height;
            entity = tangon !== zuuluu;
 66:
            if(!entity) { _fun00024_ip = 133; continue _fun00023 }
 69:
            report = _closure1_slot9;
            tangon = report.set;
            zuuluu = oscard.windowId;
            michal = {};
            offset = michal;
            verify = golfie;
            golfie = copyDataProperties(offset, verify);
            golfie = {};
            option = oscard.width;
            golfie['width'] = option;
            oscard = oscard.height;
            golfie['height'] = oscard;
            oscard = 'windowSize';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = true;
 133:
            return entity;
        }
    };
    michal['WINDOW_RESIZED'] = golfie;
    golfie = function(argFoo) { // Original name: handleWindowUnload
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot9;
            tangon = report.delete;
            zuuluu = entity.windowId;
            zuuluu = tangon.bind(report)(zuuluu);
            zuuluu = _closure1_slot8;
            entity = entity.windowId;
            if(!(zuuluu === entity)) { _fun00026_ip = 46; continue _fun00025 }
 40:
            entity = null;
            _closure1_slot8 = entity;
 46:
            entity = true;
            return entity;
        }
    };
    michal['WINDOW_UNLOAD'] = golfie;
    golfie = function(argFoo) { // Original name: handleWindowVisibilityChange
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            oscard = argFoo;
            tangon = _closure1_slot11;
            zuuluu = oscard.windowId;
            entity = undefined;
            golfie = tangon.bind(entity)(zuuluu);
            zuuluu = golfie.visible;
            entity = oscard.visible;
            entity = zuuluu !== entity;
            if(!entity) { _fun00028_ip = 92; continue _fun00027 }
 42:
            report = _closure1_slot9;
            tangon = report.set;
            zuuluu = oscard.windowId;
            michal = {};
            verify = michal;
            option = golfie;
            golfie = copyDataProperties(verify, option);
            golfie = oscard.visible;
            oscard = 'visible';
            michal[oscard] = golfie;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = true;
 92:
            return entity;
        }
    };
    michal['WINDOW_VISIBILITY_CHANGE'] = golfie;
    golfie = verify.prototype;
    golfie = Object.create(golfie, {constructor: {value: verify}});
    backup = golfie;
    romeon = michal;
    michal = new backup[verify](foxtra, romeon, yankee);
    michal = michal instanceof Object ? michal : golfie;
    golfie = 10;
    golfie = oscard[golfie];
    verify = report.bind(entity)(golfie);
    golfie = 9;
    option = oscard[golfie];
    golfie = oscard.paths;
    option = verify.bind(entity)(option, golfie);
    golfie = option.then;
    tangon = function(argFoo) {
        entity = argFoo;
        zuuluu = entity.addExtraAnalyticsDecorator;
        entity = undefined;
        michal = function() {
            entity = undefined;
            return entity;
        };
        michal = zuuluu.bind(entity)(michal);
        return entity;
    };
    tangon = golfie.bind(option)(tangon);
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'stores/web/WindowStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();