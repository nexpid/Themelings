// app/stores/native/ScreenStore.tsx
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
            entity = _closure1_slot13;
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
    var _closure1_slot12 = entity;
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
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot13 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot13 = entity;
    entity = function() { // Original name: isDimensionsChanged
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            zulu = _closure1_slot0;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.isAndroid;
            entity = entity.bind(mike)();
            report = _closure1_slot8;
            mike = report.get;
            if(entity) { _fun00006_ip = 57; continue _fun00005 }
 46:
            entity = 'window';
            zulu = mike.bind(report)(entity);
            _fun00006_ip = 66; continue _fun00005;
 57:
            entity = 'screen';
            zulu = mike.bind(report)(entity);
 66:
            mike = _closure1_slot11;
            entity = !mike;
            if(mike) { _fun00006_ip = 108; continue _fun00005 }
 76:
            report = _closure1_slot9;
            mike = zulu.width;
            mike = report !== mike;
            if(mike) { _fun00006_ip = 105; continue _fun00005 }
 92:
            tango = _closure1_slot10;
            zulu = zulu.height;
            mike = tango !== zulu;
 105:
            entity = mike;
 108:
            return entity;
        }
    };
    var _closure1_slot14 = entity;
    entity = function() { // Original name: onDimensionsChange
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            mike = arguments[0];
            entity = undefined;
            if(!(mike === entity)) { _fun00008_ip = 62; continue _fun00007 }
 9:
            zulu = {};
            golf = _closure1_slot8;
            oscar = golf.get;
            report = 'screen';
            report = oscar.bind(golf)(report);
            zulu['screen'] = report;
            oscar = _closure1_slot8;
            report = oscar.get;
            tango = 'window';
            tango = report.bind(oscar)(tango);
            zulu['window'] = tango;
            mike = zulu;
 62:
            golf = mike.screen;
            oscar = mike.window;
            mike = true;
            _closure1_slot11 = mike;
            zulu = _closure1_slot1;
            verify = _closure1_slot2;
            mike = 7;
            mike = verify[mike];
            tango = zulu.bind(entity)(mike);
            zulu = tango.dispatch;
            mike = {};
            report = 'SCREEN_UPDATE';
            mike['type'] = report;
            report = {};
            yankee = _closure1_slot0;
            offset = 6;
            verify = verify[offset];
            yankee = yankee.bind(entity)(verify);
            verify = yankee.isAndroid;
            verify = verify.bind(yankee)();
            if(verify) { _fun00008_ip = 156; continue _fun00007 }
 149:
            verify = oscar.width;
            _fun00008_ip = 161; continue _fun00007;
 156:
            verify = golf.width;
 161:
            report['width'] = verify;
            verify = _closure1_slot0;
            options = _closure1_slot2;
            options = options[offset];
            verify = verify.bind(entity)(options);
            options = verify.isAndroid;
            options = options.bind(verify)();
            if(options) { _fun00008_ip = 201; continue _fun00007 }
 194:
            oscar = oscar.height;
            _fun00008_ip = 206; continue _fun00007;
 201:
            oscar = golf.height;
 206:
            report['height'] = oscar;
            mike['dimensions'] = report;
            mike = zulu.bind(tango)(mike);
            return entity;
        }
    };
    var _closure1_slot15 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    mike = 0;
    options = oscar[mike];
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
    options = 5;
    options = oscar[options];
    options = report.bind(entity)(options);
    options = options.Dimensions;
    var _closure1_slot8 = options;
    var _closure1_slot9 = mike;
    var _closure1_slot10 = mike;
    mike = false;
    var _closure1_slot11 = mike;
    mike = 8;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.Store;
    mike = function(argFoo) {
        tango = function(argFoo) { // Original name: ScreenStore
            report = this;
            offset = 0;
            oscar = copyRestArgs(offset);
            zulu = _closure1_slot3;
            tango = _closure2_slot0;
            mike = undefined;
            zulu = zulu.bind(mike)(report, tango);
            zulu = _closure1_slot12;
            entity = new Array(0);
            offset = entity;
            verify = oscar;
            options = 0;
            oscar = arraySpread(offset, verify, options);
            entity = zulu.bind(mike)(report, tango, entity);
            entity['_dimensionsChangeListener'] = mike;
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot7;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            report = _closure1_slot15;
            entity = undefined;
            zulu = report.bind(entity)();
            tango = _closure1_slot8;
            zulu = tango.addEventListener;
            mike = 'change';
            zulu = zulu.bind(tango)(mike, report);
            mike = this;
            mike['_dimensionsChangeListener'] = zulu;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'destroy';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                entity = this;
                mike = entity._dimensionsChangeListener;
                entity = null;
                if(!(entity != mike)) { _fun00010_ip = 25; continue _fun00009 }
 15:
                entity = mike.remove;
                entity = entity.bind(mike)();
 25:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getWidth';
        report['key'] = golf;
        golf = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                mike = _closure1_slot14;
                zulu = undefined;
                mike = mike.bind(zulu)();
                if(!mike) { _fun00012_ip = 24; continue _fun00011 }
 16:
                mike = _closure1_slot15;
                mike = mike.bind(zulu)();
 24:
                entity = _closure1_slot9;
                return entity;
            }
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getHeight';
        report['key'] = golf;
        oscar = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                mike = _closure1_slot14;
                zulu = undefined;
                mike = mike.bind(zulu)();
                if(!mike) { _fun00014_ip = 24; continue _fun00013 }
 16:
                mike = _closure1_slot15;
                mike = mike.bind(zulu)();
 24:
                entity = _closure1_slot10;
                return entity;
            }
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ScreenStore';
    options['displayName'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleScreenUpdate
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = false;
            _closure1_slot11 = entity;
            entity = argFoo;
            entity = entity.dimensions;
            mike = entity.width;
            report = null;
            if(!(report != mike)) { _fun00016_ip = 40; continue _fun00015 }
 29:
            tango = entity.width;
            mike = 0;
            if(!(mike === tango)) { _fun00016_ip = 46; continue _fun00015 }
 40:
            tango = _closure1_slot9;
            _fun00016_ip = 51; continue _fun00015;
 46:
            tango = entity.width;
 51:
            mike = entity.height;
            if(!(report != mike)) { _fun00016_ip = 71; continue _fun00015 }
 60:
            report = entity.height;
            mike = 0;
            if(!(mike === report)) { _fun00016_ip = 77; continue _fun00015 }
 71:
            mike = _closure1_slot10;
            _fun00016_ip = 82; continue _fun00015;
 77:
            mike = entity.height;
 82:
            entity = _closure1_slot9;
            entity = tango !== entity;
            if(entity) { _fun00016_ip = 101; continue _fun00015 }
 93:
            report = _closure1_slot10;
            entity = mike !== report;
 101:
            _closure1_slot9 = tango;
            _closure1_slot10 = mike;
            return entity;
        }
    };
    mike['SCREEN_UPDATE'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/native/ScreenStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();