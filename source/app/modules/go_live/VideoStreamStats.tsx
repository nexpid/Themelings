// app/modules/go_live/VideoStreamStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscar;
    entity = function(argFoo) { // Original name: round
        _fun75353: for(var _fun75353_ip = 0; ; ) switch(_fun75353_ip) {
 0:
            tango = argFoo;
            entity = arguments[1];
            mike = undefined;
            if(!(entity === mike)) { _fun75353_ip = 14; continue _fun75353 }
 12:
            entity = 0;
 14:
            mike = null;
            if(!(mike != tango)) { _fun75353_ip = 38; continue _fun75353 }
 20:
            mike = global;
            zulu = mike.Math;
            mike = zulu.round;
            entity = mike.bind(zulu)(tango);
 38:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot2 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.StreamLayouts;
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot3;
        zulu = function(argFoo, argBar) { // Original name: VideoStreamStats
            zulu = this;
            var _closure3_slot0 = zulu;
            oscar = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscar.bind(entity)(zulu, report);
            report = 0;
            zulu['_targetResolution'] = report;
            zulu['_targetFPS'] = report;
            oscar = false;
            zulu['_streamSettingsChanged'] = oscar;
            zulu['_lastLayoutChanged'] = report;
            zulu['_layoutChanges'] = report;
            report = function(argFoo, argBar) {
                _fun75356: for(var _fun75356_ip = 0; ; ) switch(_fun75356_ip) {
 0:
                    zulu = argFoo;
                    mike = _closure3_slot0;
                    mike = mike._layoutBuckets;
                    tango = mike[zulu];
                    mike = null;
                    if(!(mike == tango)) { _fun75356_ip = 42; continue _fun75356 }
 26:
                    mike = _closure3_slot0;
                    tango = mike._layoutBuckets;
                    mike = 0;
                    tango[zulu] = mike;
 42:
                    entity = _closure3_slot0;
                    mike = entity._layoutBuckets;
                    tango = mike[zulu];
                    entity = argBar;
                    entity = tango + entity;
                    mike[zulu] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zulu['_incrementLayout'] = report;
            tango = function() {
                _fun75357: for(var _fun75357_ip = 0; ; ) switch(_fun75357_ip) {
 0:
                    mike = _closure1_slot4;
                    entity = mike.getState;
                    entity = entity.bind(mike)();
                    report = entity.resolution;
                    tango = entity.fps;
                    mike = _closure3_slot0;
                    entity = mike._targetResolution;
                    entity = report !== entity;
                    if(entity) { _fun75357_ip = 63; continue _fun75357 }
 49:
                    zulu = _closure3_slot0;
                    zulu = zulu._targetFPS;
                    entity = tango !== zulu;
 63:
                    mike['_streamSettingsChanged'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zulu['_sampleStats'] = tango;
            tango = argBar;
            zulu['_isSender'] = tango;
            tango = _closure1_slot0;
            report = _closure1_slot1;
            mike = 4;
            mike = report[mike];
            mike = tango.bind(entity)(mike);
            mike = mike.Interval;
            tango = mike.prototype;
            tango = Object.create(tango, {constructor: {value: mike}});
            verify = tango;
            mike = new verify[mike](options);
            mike = mike instanceof Object ? mike : tango;
            zulu['_statInterval'] = mike;
            mike = argFoo;
            zulu['_lastLayout'] = mike;
            mike = {};
            zulu['_layoutBuckets'] = mike;
            return entity;
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'start';
        entity['key'] = mike;
        mike = function() { // Original name: value
            zulu = this;
            tango = _closure1_slot4;
            mike = tango.getState;
            mike = mike.bind(tango)();
            tango = mike.resolution;
            mike = mike.fps;
            zulu['_targetResolution'] = tango;
            zulu['_targetFPS'] = mike;
            oscar = zulu._statInterval;
            report = oscar.start;
            tango = zulu._sampleStats;
            mike = 1000;
            mike = report.bind(oscar)(mike, tango);
            tango = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            tango = tango.bind(entity)(mike);
            mike = tango.now;
            mike = mike.bind(tango)();
            zulu['_lastLayoutChanged'] = mike;
            return entity;
        };
        entity['value'] = mike;
        mike = new Array(5);
        mike[0] = entity;
        entity = {};
        oscar = 'stop';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            report = this;
            mike = report._statInterval;
            entity = mike.stop;
            entity = entity.bind(mike)();
            zulu = _closure1_slot0;
            mike = _closure1_slot1;
            entity = 5;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.now;
            mike = mike.bind(zulu)();
            report['_streamEnd'] = mike;
            tango = report._incrementLayout;
            zulu = report._lastLayout;
            oscar = report._streamEnd;
            mike = report._lastLayoutChanged;
            oscar = oscar - mike;
            mike = 1000;
            mike = oscar / mike;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        entity['value'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'layoutChange';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun75360: for(var _fun75360_ip = 0; ; ) switch(_fun75360_ip) {
 0:
                zulu = argFoo;
                mike = this;
                entity = mike._lastLayout;
                if(!(zulu !== entity)) { _fun75360_ip = 127; continue _fun75360 }
 16:
                tango = mike._streamEnd;
                entity = null;
                if(!(entity == tango)) { _fun75360_ip = 127; continue _fun75360 }
 28:
                report = _closure1_slot0;
                tango = _closure1_slot1;
                entity = 5;
                tango = tango[entity];
                entity = undefined;
                tango = report.bind(entity)(tango);
                entity = tango.now;
                entity = entity.bind(tango)();
                oscar = mike._incrementLayout;
                report = mike._lastLayout;
                tango = mike._lastLayoutChanged;
                golf = entity - tango;
                tango = 1000;
                tango = golf / tango;
                tango = oscar.bind(mike)(report, tango);
                tango = mike._layoutChanges;
                tango = tango + 1;
                mike['_layoutChanges'] = tango;
                mike['_lastLayout'] = zulu;
                mike['_lastLayoutChanged'] = entity;
 127:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'getLayout';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            entity = this;
            entity = entity._lastLayout;
            return entity;
        };
        entity['value'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'getStats';
        entity['key'] = oscar;
        report = function() { // Original name: value
            _fun75362: for(var _fun75362_ip = 0; ; ) switch(_fun75362_ip) {
 0:
                zulu = this;
                tango = {};
                entity = zulu._layoutChanges;
                tango['num_layout_changes'] = entity;
                report = _closure1_slot6;
                oscar = zulu._layoutBuckets;
                entity = _closure1_slot5;
                mike = entity.FULL_SCREEN;
                oscar = oscar[mike];
                mike = undefined;
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_fullscreen'] = oscar;
                golf = zulu._layoutBuckets;
                oscar = entity.THEATRE;
                oscar = golf[oscar];
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_theatre'] = oscar;
                golf = zulu._layoutBuckets;
                oscar = entity.PIP;
                oscar = golf[oscar];
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_pip'] = oscar;
                golf = zulu._layoutBuckets;
                oscar = entity.POPOUT;
                oscar = golf[oscar];
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_popout'] = oscar;
                golf = zulu._layoutBuckets;
                oscar = entity.PORTRAIT;
                oscar = golf[oscar];
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_portrait'] = oscar;
                golf = zulu._layoutBuckets;
                oscar = entity.LANDSCAPE;
                oscar = golf[oscar];
                oscar = report.bind(mike)(oscar);
                tango['duration_layout_landscape'] = oscar;
                oscar = zulu._layoutBuckets;
                entity = entity.MINIMIZED;
                entity = oscar[entity];
                entity = report.bind(mike)(entity);
                tango['duration_layout_minimized'] = entity;
                mike = zulu._isSender;
                entity = tango;
                if(!mike) { _fun75362_ip = 305; continue _fun75362 }
 239:
                mike = {};
                verify = mike;
                options = tango;
                tango = copyDataProperties(verify, options);
                report = zulu._targetFPS;
                tango = 'target_fps';
                mike[tango] = report;
                report = zulu._targetResolution;
                tango = 'target_resolution_height';
                mike[tango] = report;
                tango = zulu._streamSettingsChanged;
                zulu = 'stream_settings_changed';
                mike[zulu] = tango;
                entity = mike;
 305:
                return entity;
            }
        };
        entity['value'] = report;
        mike[4] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/go_live/VideoStreamStats.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();