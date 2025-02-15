// app/stores/web/WindowStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot6;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot5;
            entity = _closure1_slot11;
            entity = entity.bind(zulu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscar = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot10 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            _fun00004_ip = 76; continue _fun00003;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot11 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot11 = entity;
    entity = function(argFoo) { // Original name: getWindowIdState
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot9;
            mike = zulu.get;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            mike = null;
            if(!(mike == entity)) { _fun00006_ip = 55; continue _fun00005 }
 26:
            mike = {'isElementFullscreen': false, 'focused': false, 'windowSize': null, 'visible': false};
            zulu = {'width': 0, 'height': 0};
            mike['windowSize'] = zulu;
            entity = mike;
 55:
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    mike = global;
    offset = mike.Object;
    verify = offset.defineProperty;
    options = {};
    entity = true;
    options['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot5 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot6 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot7 = options;
    options = null;
    var _closure1_slot8 = options;
    mike = mike.Map;
    options = mike.prototype;
    options = Object.create(options, {constructor: {value: mike}});
    backup = options;
    mike = new backup[mike](foxtrot);
    mike = mike instanceof Object ? mike : options;
    var _closure1_slot9 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function() { // Original name: WindowStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot3;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot10;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'isFocused';
        report['key'] = entity;
        entity = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zulu = arguments[0];
                mike = undefined;
                if(!(zulu === mike)) { _fun00008_ip = 42; continue _fun00007 }
 9:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tango = tango.bind(mike)(entity);
                entity = tango.getMainWindowId;
                zulu = entity.bind(tango)();
 42:
                entity = _closure1_slot12;
                entity = entity.bind(mike)(zulu);
                entity = entity.focused;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(6);
        entity[0] = report;
        report = {};
        golf = 'isVisible';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zulu = arguments[0];
                mike = undefined;
                if(!(zulu === mike)) { _fun00010_ip = 42; continue _fun00009 }
 9:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tango = tango.bind(mike)(entity);
                entity = tango.getMainWindowId;
                zulu = entity.bind(tango)();
 42:
                entity = _closure1_slot12;
                entity = entity.bind(mike)(zulu);
                entity = entity.visible;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getFocusedWindowId';
        report['key'] = golf;
        golf = function() { // Original name: value
            mike = null;
            var _closure3_slot0 = mike;
            tango = _closure1_slot9;
            zulu = tango.forEach;
            mike = function(argFoo, argBar) {
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
            mike = zulu.bind(tango)(mike);
            entity = _closure3_slot0;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getLastFocusedWindowId';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot8;
            return entity;
        };
        report['value'] = golf;
        entity[3] = report;
        report = {};
        golf = 'isElementFullScreen';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                zulu = arguments[0];
                mike = undefined;
                if(!(zulu === mike)) { _fun00014_ip = 42; continue _fun00013 }
 9:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tango = tango.bind(mike)(entity);
                entity = tango.getMainWindowId;
                zulu = entity.bind(tango)();
 42:
                entity = _closure1_slot12;
                entity = entity.bind(mike)(zulu);
                entity = entity.isElementFullscreen;
                return entity;
            }
        };
        report['value'] = golf;
        entity[4] = report;
        report = {};
        golf = 'windowSize';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                zulu = arguments[0];
                mike = undefined;
                if(!(zulu === mike)) { _fun00016_ip = 42; continue _fun00015 }
 9:
                tango = _closure1_slot0;
                report = _closure1_slot2;
                entity = 6;
                entity = report[entity];
                tango = tango.bind(mike)(entity);
                entity = tango.getMainWindowId;
                zulu = entity.bind(tango)();
 42:
                entity = _closure1_slot12;
                entity = entity.bind(mike)(zulu);
                entity = entity.windowSize;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[5] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    verify = mike.bind(entity)(options);
    mike = 'WindowStore';
    verify['displayName'] = mike;
    mike = 8;
    mike = oscar[mike];
    foxtrot = golf.bind(entity)(mike);
    mike = {};
    golf = function(argFoo) { // Original name: handleWindowInit
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            tango = _closure1_slot1;
            report = _closure1_slot2;
            zulu = 5;
            zulu = report[zulu];
            oscar = undefined;
            report = tango.bind(oscar)(zulu);
            golf = _closure1_slot9;
            tango = golf.has;
            zulu = entity.windowId;
            zulu = tango.bind(golf)(zulu);
            tango = !zulu;
            zulu = 'Window initialized multiple times';
            zulu = report.bind(oscar)(tango, zulu);
            romeo = entity.width;
            yankee = entity.height;
            verify = entity.isElementFullscreen;
            zulu = entity.focused;
            options = entity.visible;
            golf = _closure1_slot9;
            oscar = golf.set;
            report = entity.windowId;
            tango = {};
            offset = {};
            offset['width'] = romeo;
            offset['height'] = yankee;
            tango['windowSize'] = offset;
            tango['isElementFullscreen'] = verify;
            tango['focused'] = zulu;
            tango['visible'] = options;
            tango = oscar.bind(golf)(report, tango);
            if(!zulu) { _fun00018_ip = 157; continue _fun00017 }
 147:
            entity = entity.windowId;
            _closure1_slot8 = entity;
 157:
            entity = true;
            return entity;
        }
    };
    mike['WINDOW_INIT'] = golf;
    golf = function(argFoo) { // Original name: handleWindowFullscreenChange
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot12;
            zulu = oscar.windowId;
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            zulu = golf.isElementFullscreen;
            entity = oscar.isElementFullscreen;
            entity = zulu !== entity;
            if(!entity) { _fun00020_ip = 92; continue _fun00019 }
 42:
            report = _closure1_slot9;
            tango = report.set;
            zulu = oscar.windowId;
            mike = {};
            verify = mike;
            options = golf;
            golf = copyDataProperties(verify, options);
            golf = oscar.isElementFullscreen;
            oscar = 'isElementFullscreen';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            entity = true;
 92:
            return entity;
        }
    };
    mike['WINDOW_FULLSCREEN_CHANGE'] = golf;
    golf = function(argFoo) { // Original name: handleWindowFocus
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot12;
            zulu = oscar.windowId;
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            zulu = golf.focused;
            entity = oscar.focused;
            entity = zulu !== entity;
            if(!entity) { _fun00022_ip = 111; continue _fun00021 }
 42:
            zulu = oscar.focused;
            if(!zulu) { _fun00022_ip = 61; continue _fun00021 }
 51:
            zulu = oscar.windowId;
            _closure1_slot8 = zulu;
 61:
            report = _closure1_slot9;
            tango = report.set;
            zulu = oscar.windowId;
            mike = {};
            verify = mike;
            options = golf;
            golf = copyDataProperties(verify, options);
            golf = oscar.focused;
            oscar = 'focused';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            entity = true;
 111:
            return entity;
        }
    };
    mike['WINDOW_FOCUS'] = golf;
    golf = function(argFoo) { // Original name: handleWindowResize
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot12;
            zulu = oscar.windowId;
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            entity = golf.windowSize;
            zulu = entity.width;
            entity = oscar.width;
            entity = zulu !== entity;
            if(entity) { _fun00024_ip = 66; continue _fun00023 }
 46:
            zulu = golf.windowSize;
            tango = zulu.height;
            zulu = oscar.height;
            entity = tango !== zulu;
 66:
            if(!entity) { _fun00024_ip = 133; continue _fun00023 }
 69:
            report = _closure1_slot9;
            tango = report.set;
            zulu = oscar.windowId;
            mike = {};
            offset = mike;
            verify = golf;
            golf = copyDataProperties(offset, verify);
            golf = {};
            options = oscar.width;
            golf['width'] = options;
            oscar = oscar.height;
            golf['height'] = oscar;
            oscar = 'windowSize';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            entity = true;
 133:
            return entity;
        }
    };
    mike['WINDOW_RESIZED'] = golf;
    golf = function(argFoo) { // Original name: handleWindowUnload
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            entity = argFoo;
            report = _closure1_slot9;
            tango = report.delete;
            zulu = entity.windowId;
            zulu = tango.bind(report)(zulu);
            zulu = _closure1_slot8;
            entity = entity.windowId;
            if(!(zulu === entity)) { _fun00026_ip = 46; continue _fun00025 }
 40:
            entity = null;
            _closure1_slot8 = entity;
 46:
            entity = true;
            return entity;
        }
    };
    mike['WINDOW_UNLOAD'] = golf;
    golf = function(argFoo) { // Original name: handleWindowVisibilityChange
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            oscar = argFoo;
            tango = _closure1_slot12;
            zulu = oscar.windowId;
            entity = undefined;
            golf = tango.bind(entity)(zulu);
            zulu = golf.visible;
            entity = oscar.visible;
            entity = zulu !== entity;
            if(!entity) { _fun00028_ip = 92; continue _fun00027 }
 42:
            report = _closure1_slot9;
            tango = report.set;
            zulu = oscar.windowId;
            mike = {};
            verify = mike;
            options = golf;
            golf = copyDataProperties(verify, options);
            golf = oscar.visible;
            oscar = 'visible';
            mike[oscar] = golf;
            mike = tango.bind(report)(zulu, mike);
            entity = true;
 92:
            return entity;
        }
    };
    mike['WINDOW_VISIBILITY_CHANGE'] = golf;
    golf = verify.prototype;
    golf = Object.create(golf, {constructor: {value: verify}});
    backup = golf;
    romeo = mike;
    mike = new backup[verify](foxtrot, romeo, yankee);
    mike = mike instanceof Object ? mike : golf;
    golf = 10;
    golf = oscar[golf];
    verify = report.bind(entity)(golf);
    golf = 9;
    options = oscar[golf];
    golf = oscar.paths;
    options = verify.bind(entity)(options, golf);
    golf = options.then;
    tango = function(argFoo) {
        entity = argFoo;
        zulu = entity.addExtraAnalyticsDecorator;
        entity = undefined;
        mike = function() {
            entity = undefined;
            return entity;
        };
        mike = zulu.bind(entity)(mike);
        return entity;
    };
    tango = golf.bind(options)(tango);
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/web/WindowStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();