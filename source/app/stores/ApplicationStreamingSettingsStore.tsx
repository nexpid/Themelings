// app/stores/ApplicationStreamingSettingsStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot12;
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
            report = _closure1_slot3;
            report = report.bind(zulu)(tango);
            report = report.constructor;
            entity = golf.bind(options)(verify, oscar, report);
 92:
            entity = mike.bind(zulu)(tango, entity);
            return entity;
        }
    };
    var _closure1_slot11 = entity;
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
            _closure1_slot12 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot12 = entity;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    options = {};
    mike = true;
    options['value'] = mike;
    entity = '__esModule';
    entity = verify.bind(offset)(zulu, entity, options);
    entity = 0;
    options = oscar[entity];
    entity = undefined;
    options = golf.bind(entity)(options);
    var _closure1_slot0 = options;
    options = 1;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot1 = options;
    options = 2;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot2 = options;
    options = 3;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot3 = options;
    options = 4;
    options = oscar[options];
    options = golf.bind(entity)(options);
    var _closure1_slot4 = options;
    options = 5;
    options = oscar[options];
    offset = report.bind(entity)(options);
    verify = offset.ApplicationStreamResolutions;
    options = offset.ApplicationStreamFPS;
    offset = offset.ApplicationStreamPresets;
    var _closure1_slot5 = offset;
    yankee = 6;
    yankee = oscar[yankee];
    yankee = report.bind(entity)(yankee);
    yankee = yankee.MediaEngineContextTypes;
    var _closure1_slot6 = yankee;
    offset = offset.PRESET_VIDEO;
    var _closure1_slot7 = offset;
    verify = verify.RESOLUTION_720;
    var _closure1_slot8 = verify;
    options = options.FPS_30;
    var _closure1_slot9 = options;
    var _closure1_slot10 = mike;
    mike = 7;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: ApplicationStreamingSettingsStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot11;
            entity = arguments;
            entity = mike.bind(tango)(report, zulu, entity);
            return entity;
        };
        var _closure2_slot0 = tango;
        report = _closure1_slot4;
        zulu = undefined;
        mike = argFoo;
        mike = report.bind(zulu)(tango, mike);
        mike = _closure1_slot1;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function(argFoo) { // Original name: value
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = argFoo;
                entity = null;
                if(!(entity != zulu)) { _fun00006_ip = 79; continue _fun00005 }
 9:
                tango = zulu.preset;
                if(!(entity == tango)) { _fun00006_ip = 32; continue _fun00005 }
 19:
                mike = _closure1_slot5;
                tango = mike.PRESET_VIDEO;
 32:
                _closure1_slot7 = tango;
                tango = zulu.resolution;
                _closure1_slot8 = tango;
                tango = zulu.fps;
                _closure1_slot9 = tango;
                zulu = zulu.soundshareEnabled;
                entity = entity == zulu;
                if(entity) { _fun00006_ip = 75; continue _fun00005 }
 72:
                entity = zulu;
 75:
                _closure1_slot10 = entity;
 79:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(2);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = {};
            zulu = _closure1_slot7;
            entity['preset'] = zulu;
            zulu = _closure1_slot8;
            entity['resolution'] = zulu;
            zulu = _closure1_slot9;
            entity['fps'] = zulu;
            mike = _closure1_slot10;
            entity['soundshareEnabled'] = mike;
            return entity;
        };
        report['value'] = oscar;
        entity[1] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'ApplicationStreamingSettingsStore';
    options['displayName'] = mike;
    mike = 'ApplicationStreamingSettingStore';
    options['persistKey'] = mike;
    mike = 8;
    mike = oscar[mike];
    backup = golf.bind(entity)(mike);
    mike = {};
    verify = function(argFoo) { // Original name: handleSetGoLiveSource
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            mike = entity.settings;
            report = null;
            zulu = report == mike;
            entity = undefined;
            oscar = undefined;
            if(zulu) { _fun00008_ip = 27; continue _fun00007 }
 22:
            oscar = mike.context;
 27:
            tango = _closure1_slot6;
            tango = tango.STREAM;
            if(!(oscar === tango)) { _fun00008_ip = 145; continue _fun00007 }
 44:
            oscar = report == mike;
            tango = undefined;
            if(oscar) { _fun00008_ip = 59; continue _fun00007 }
 53:
            tango = mike.qualityOptions;
 59:
            if(!(report != tango)) { _fun00008_ip = 147; continue _fun00007 }
 63:
            oscar = report == mike;
            tango = undefined;
            if(oscar) { _fun00008_ip = 84; continue _fun00007 }
 72:
            oscar = mike.qualityOptions;
            tango = oscar.resolution;
 84:
            if(!(report != tango)) { _fun00008_ip = 147; continue _fun00007 }
 88:
            oscar = report == mike;
            tango = undefined;
            if(oscar) { _fun00008_ip = 109; continue _fun00007 }
 97:
            oscar = mike.qualityOptions;
            tango = oscar.frameRate;
 109:
            if(!(report != tango)) { _fun00008_ip = 147; continue _fun00007 }
 113:
            tango = mike.qualityOptions;
            tango = tango.resolution;
            _closure1_slot8 = tango;
            mike = mike.qualityOptions;
            mike = mike.frameRate;
            _closure1_slot9 = mike;
 145:
            return entity;
 147:
            entity = false;
            return entity;
        }
    };
    mike['MEDIA_ENGINE_SET_GO_LIVE_SOURCE'] = verify;
    tango = function(argFoo) { // Original name: handleUpdateSettings
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            entity = argFoo;
            golf = entity.preset;
            oscar = entity.resolution;
            report = entity.frameRate;
            zulu = entity.soundshareEnabled;
            mike = null;
            tango = mike != golf;
            entity = false;
            if(!tango) { _fun00010_ip = 47; continue _fun00009 }
 38:
            _closure1_slot7 = golf;
            entity = true;
 47:
            if(!(mike != oscar)) { _fun00010_ip = 60; continue _fun00009 }
 51:
            _closure1_slot8 = oscar;
            entity = true;
 60:
            if(!(mike != report)) { _fun00010_ip = 73; continue _fun00009 }
 64:
            _closure1_slot9 = report;
            entity = true;
 73:
            if(!(mike != zulu)) { _fun00010_ip = 86; continue _fun00009 }
 77:
            _closure1_slot10 = zulu;
            entity = true;
 86:
            return entity;
        }
    };
    mike['STREAM_UPDATE_SETTINGS'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    kilo = tango;
    foxtrot = mike;
    mike = new kilo[options](backup, foxtrot, romeo);
    mike = mike instanceof Object ? mike : tango;
    tango = 9;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'stores/ApplicationStreamingSettingsStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();