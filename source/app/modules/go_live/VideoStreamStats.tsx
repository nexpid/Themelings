// app/modules/go_live/VideoStreamStats.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = function(argFoo) { // Original name: round
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            entity = arguments[1];
            michal = undefined;
            if(!(entity === michal)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            entity = 0;
 14:
            michal = null;
            if(!(michal != tangon)) { _fun00002_ip = 38; continue _fun00001 }
 20:
            michal = global;
            zuuluu = michal.Math;
            michal = zuuluu.round;
            entity = michal.bind(zuuluu)(tangon);
 38:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.StreamLayouts;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot3;
        zuuluu = function(argFoo, argBar) { // Original name: VideoStreamStats
            zuuluu = this;
            var _closure3_slot0 = zuuluu;
            oscard = _closure1_slot2;
            report = _closure2_slot0;
            entity = undefined;
            report = oscard.bind(entity)(zuuluu, report);
            report = 0;
            zuuluu['_targetResolution'] = report;
            zuuluu['_targetFPS'] = report;
            oscard = false;
            zuuluu['_streamSettingsChanged'] = oscard;
            zuuluu['_lastLayoutChanged'] = report;
            zuuluu['_layoutChanges'] = report;
            report = function(argFoo, argBar) {
                _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                    zuuluu = argFoo;
                    michal = _closure3_slot0;
                    michal = michal._layoutBuckets;
                    tangon = michal[zuuluu];
                    michal = null;
                    if(!(michal == tangon)) { _fun00004_ip = 42; continue _fun00003 }
 26:
                    michal = _closure3_slot0;
                    tangon = michal._layoutBuckets;
                    michal = 0;
                    tangon[zuuluu] = michal;
 42:
                    entity = _closure3_slot0;
                    michal = entity._layoutBuckets;
                    tangon = michal[zuuluu];
                    entity = argBar;
                    entity = tangon + entity;
                    michal[zuuluu] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['_incrementLayout'] = report;
            tangon = function() {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    michal = _closure1_slot4;
                    entity = michal.getState;
                    entity = entity.bind(michal)();
                    report = entity.resolution;
                    tangon = entity.fps;
                    michal = _closure3_slot0;
                    entity = michal._targetResolution;
                    entity = report !== entity;
                    if(entity) { _fun00006_ip = 63; continue _fun00005 }
 49:
                    zuuluu = _closure3_slot0;
                    zuuluu = zuuluu._targetFPS;
                    entity = tangon !== zuuluu;
 63:
                    michal['_streamSettingsChanged'] = entity;
                    entity = undefined;
                    return entity;
                }
            };
            zuuluu['_sampleStats'] = tangon;
            tangon = argBar;
            zuuluu['_isSender'] = tangon;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 4;
            michal = report[michal];
            michal = tangon.bind(entity)(michal);
            michal = michal.Interval;
            tangon = michal.prototype;
            tangon = Object.create(tangon, {constructor: {value: michal}});
            verify = tangon;
            michal = new verify[michal](option);
            michal = michal instanceof Object ? michal : tangon;
            zuuluu['_statInterval'] = michal;
            michal = argFoo;
            zuuluu['_lastLayout'] = michal;
            michal = {};
            zuuluu['_layoutBuckets'] = michal;
            return entity;
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'start';
        entity['key'] = michal;
        michal = function() { // Original name: value
            zuuluu = this;
            tangon = _closure1_slot4;
            michal = tangon.getState;
            michal = michal.bind(tangon)();
            tangon = michal.resolution;
            michal = michal.fps;
            zuuluu['_targetResolution'] = tangon;
            zuuluu['_targetFPS'] = michal;
            oscard = zuuluu._statInterval;
            report = oscard.start;
            tangon = zuuluu._sampleStats;
            michal = 1000;
            michal = report.bind(oscard)(michal, tangon);
            tangon = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            tangon = tangon.bind(entity)(michal);
            michal = tangon.now;
            michal = michal.bind(tangon)();
            zuuluu['_lastLayoutChanged'] = michal;
            return entity;
        };
        entity['value'] = michal;
        michal = new Array(5);
        michal[0] = entity;
        entity = {};
        oscard = 'stop';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            report = this;
            michal = report._statInterval;
            entity = michal.stop;
            entity = entity.bind(michal)();
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.now;
            michal = michal.bind(zuuluu)();
            report['_streamEnd'] = michal;
            tangon = report._incrementLayout;
            zuuluu = report._lastLayout;
            oscard = report._streamEnd;
            michal = report._lastLayoutChanged;
            oscard = oscard - michal;
            michal = 1000;
            michal = oscard / michal;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        entity['value'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'layoutChange';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                zuuluu = argFoo;
                michal = this;
                entity = michal._lastLayout;
                if(!(zuuluu !== entity)) { _fun00008_ip = 127; continue _fun00007 }
 16:
                tangon = michal._streamEnd;
                entity = null;
                if(!(entity == tangon)) { _fun00008_ip = 127; continue _fun00007 }
 28:
                report = _closure1_slot0;
                tangon = _closure1_slot1;
                entity = 5;
                tangon = tangon[entity];
                entity = undefined;
                tangon = report.bind(entity)(tangon);
                entity = tangon.now;
                entity = entity.bind(tangon)();
                oscard = michal._incrementLayout;
                report = michal._lastLayout;
                tangon = michal._lastLayoutChanged;
                golfie = entity - tangon;
                tangon = 1000;
                tangon = golfie / tangon;
                tangon = oscard.bind(michal)(report, tangon);
                tangon = michal._layoutChanges;
                tangon = tangon + 1;
                michal['_layoutChanges'] = tangon;
                michal['_lastLayout'] = zuuluu;
                michal['_lastLayoutChanged'] = entity;
 127:
                entity = undefined;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'getLayout';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            entity = this;
            entity = entity._lastLayout;
            return entity;
        };
        entity['value'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'getStats';
        entity['key'] = oscard;
        report = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                zuuluu = this;
                tangon = {};
                entity = zuuluu._layoutChanges;
                tangon['num_layout_changes'] = entity;
                report = _closure1_slot6;
                oscard = zuuluu._layoutBuckets;
                entity = _closure1_slot5;
                michal = entity.FULL_SCREEN;
                oscard = oscard[michal];
                michal = undefined;
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_fullscreen'] = oscard;
                golfie = zuuluu._layoutBuckets;
                oscard = entity.THEATRE;
                oscard = golfie[oscard];
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_theatre'] = oscard;
                golfie = zuuluu._layoutBuckets;
                oscard = entity.PIP;
                oscard = golfie[oscard];
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_pip'] = oscard;
                golfie = zuuluu._layoutBuckets;
                oscard = entity.POPOUT;
                oscard = golfie[oscard];
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_popout'] = oscard;
                golfie = zuuluu._layoutBuckets;
                oscard = entity.PORTRAIT;
                oscard = golfie[oscard];
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_portrait'] = oscard;
                golfie = zuuluu._layoutBuckets;
                oscard = entity.LANDSCAPE;
                oscard = golfie[oscard];
                oscard = report.bind(michal)(oscard);
                tangon['duration_layout_landscape'] = oscard;
                oscard = zuuluu._layoutBuckets;
                entity = entity.MINIMIZED;
                entity = oscard[entity];
                entity = report.bind(michal)(entity);
                tangon['duration_layout_minimized'] = entity;
                michal = zuuluu._isSender;
                entity = tangon;
                if(!michal) { _fun00010_ip = 305; continue _fun00009 }
 239:
                michal = {};
                verify = michal;
                option = tangon;
                tangon = copyDataProperties(verify, option);
                report = zuuluu._targetFPS;
                tangon = 'target_fps';
                michal[tangon] = report;
                report = zuuluu._targetResolution;
                tangon = 'target_resolution_height';
                michal[tangon] = report;
                tangon = zuuluu._streamSettingsChanged;
                zuuluu = 'stream_settings_changed';
                michal[zuuluu] = tangon;
                entity = michal;
 305:
                return entity;
            }
        };
        entity['value'] = report;
        michal[4] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/go_live/VideoStreamStats.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();