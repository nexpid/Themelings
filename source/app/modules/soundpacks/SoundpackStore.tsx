// app/modules/soundpacks/SoundpackStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun97824: for(var _fun97824_ip = 0; ; ) switch(_fun97824_ip) {
 0:
            tango = argFoo;
            oscar = argBaz;
            mike = _closure1_slot3;
            zulu = undefined;
            entity = argBar;
            verify = mike.bind(zulu)(entity);
            mike = _closure1_slot2;
            entity = _closure1_slot8;
            entity = entity.bind(zulu)();
            if(entity) { _fun97824_ip = 51; continue _fun97824 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tango, oscar);
            _fun97824_ip = 92; continue _fun97824;
 51:
            golf = global;
            options = golf.Reflect;
            golf = options.construct;
            if(oscar) { _fun97824_ip = 71; continue _fun97824 }
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
    var _closure1_slot7 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun97825: for(var _fun97825_ip = 0; ; ) switch(_fun97825_ip) {
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
            _fun97825_ip = 76; continue _fun97825;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            mike = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot8 = mike;
            entity = undefined;
            entity = mike.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot8 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    mike = {};
    entity = true;
    mike['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, mike);
    entity = 0;
    mike = oscar[entity];
    entity = undefined;
    mike = golf.bind(entity)(mike);
    var _closure1_slot0 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot1 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot2 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot3 = mike;
    mike = 4;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot4 = mike;
    mike = 5;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    options = mike.Soundpacks;
    var _closure1_slot5 = options;
    mike = {};
    options = options.CLASSIC;
    mike['soundpack'] = options;
    options = null;
    mike['lastSoundpackExperimentId'] = options;
    var _closure1_slot6 = mike;
    mike = 6;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    options = mike.PersistedStore;
    mike = function(argFoo) {
        tango = function() { // Original name: SoundpackStore
            report = this;
            tango = undefined;
            entity = undefined;
            oscar = _closure1_slot0;
            zulu = _closure2_slot0;
            oscar = oscar.bind(tango)(report, zulu);
            mike = _closure1_slot7;
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
            _fun97830: for(var _fun97830_ip = 0; ; ) switch(_fun97830_ip) {
 0:
                mike = argFoo;
                entity = null;
                if(!(entity != mike)) { _fun97830_ip = 81; continue _fun97830 }
 9:
                _closure1_slot6 = mike;
                mike = global;
                tango = mike.Object;
                zulu = tango.values;
                mike = _closure1_slot5;
                tango = zulu.bind(tango)(mike);
                zulu = tango.includes;
                mike = _closure1_slot6;
                mike = mike.soundpack;
                mike = zulu.bind(tango)(mike);
                if(mike) { _fun97830_ip = 81; continue _fun97830 }
 61:
                mike = _closure1_slot6;
                entity = _closure1_slot5;
                entity = entity.CLASSIC;
                mike['soundpack'] = entity;
 81:
                entity = undefined;
                return entity;
            }
        };
        report['value'] = entity;
        entity = new Array(4);
        entity[0] = report;
        report = {};
        golf = 'getState';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            return entity;
        };
        report['value'] = golf;
        entity[1] = report;
        report = {};
        golf = 'getSoundpack';
        report['key'] = golf;
        golf = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.soundpack;
            return entity;
        };
        report['value'] = golf;
        entity[2] = report;
        report = {};
        golf = 'getLastSoundpackExperimentId';
        report['key'] = golf;
        oscar = function() { // Original name: value
            entity = _closure1_slot6;
            entity = entity.lastSoundpackExperimentId;
            return entity;
        };
        report['value'] = oscar;
        entity[3] = report;
        entity = mike.bind(zulu)(tango, entity);
        return entity;
    };
    options = mike.bind(entity)(options);
    mike = 'SoundpackStore';
    options['displayName'] = mike;
    options['persistKey'] = mike;
    mike = 7;
    mike = oscar[mike];
    romeo = golf.bind(entity)(mike);
    mike = {};
    tango = function(argFoo) { // Original name: handleSetSoundpack
        _fun97834: for(var _fun97834_ip = 0; ; ) switch(_fun97834_ip) {
 0:
            mike = argFoo;
            entity = mike.soundpack;
            mike = mike.forExperimentId;
            zulu = {};
            zulu['soundpack'] = entity;
            entity = undefined;
            if(!(entity === mike)) { _fun97834_ip = 41; continue _fun97834 }
 28:
            tango = _closure1_slot6;
            mike = tango.lastSoundpackExperimentId;
 41:
            zulu['lastSoundpackExperimentId'] = mike;
            _closure1_slot6 = zulu;
            return entity;
        }
    };
    mike['SET_SOUNDPACK'] = tango;
    tango = options.prototype;
    tango = Object.create(tango, {constructor: {value: options}});
    foxtrot = tango;
    yankee = mike;
    mike = new foxtrot[options](romeo, yankee, offset);
    mike = mike instanceof Object ? mike : tango;
    tango = 8;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/soundpacks/SoundpackStore.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();