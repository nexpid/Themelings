// app/modules/a11y/native/AccessibilityManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
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
    var _closure1_slot3 = mike;
    mike = 1;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AccessibilityInfo;
    var _closure1_slot4 = mike;
    mike = 2;
    mike = oscar[mike];
    mike = golf.bind(entity)(mike);
    var _closure1_slot5 = mike;
    mike = 3;
    mike = oscar[mike];
    mike = report.bind(entity)(mike);
    mike = mike.AnalyticEvents;
    var _closure1_slot6 = mike;
    mike = {};
    golf = function() { // Original name: init
        zulu = this;
        var _closure2_slot0 = zulu;
        report = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 4;
        tango = oscar[entity];
        entity = undefined;
        options = report.bind(entity)(tango);
        tango = options.init;
        tango = tango.bind(options)();
        tango = zulu.updateNativeColors;
        tango = tango.bind(zulu)();
        tango = zulu.updateMotionSettings;
        tango = tango.bind(zulu)();
        verify = _closure1_slot5;
        options = verify.addChangeListener;
        tango = zulu.updateNativeColors;
        tango = options.bind(verify)(tango);
        options = verify.addChangeListener;
        tango = zulu.updateMotionSettings;
        tango = options.bind(verify)(tango);
        tango = 5;
        options = oscar[tango];
        yankee = report.bind(entity)(options);
        offset = yankee.subscribe;
        verify = zulu.updateMotionSettings;
        options = 'CONNECTION_OPEN';
        options = offset.bind(yankee)(options, verify);
        offset = _closure1_slot4;
        verify = offset.addEventListener;
        options = 'screenReaderChanged';
        golf = function(argFoo) {
            zulu = _closure2_slot0;
            mike = zulu.updateScreenReaderEnabled;
            entity = argFoo;
            entity = mike.bind(zulu)(entity);
            entity = undefined;
            return entity;
        };
        golf = verify.bind(offset)(options, golf);
        tango = oscar[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.subscribe;
        tango = 'ACCESSIBILITY_COLORBLIND_TOGGLE';
        mike = function() {
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 6;
            mike = mike[entity];
            entity = undefined;
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot6;
            zulu = mike.LOCAL_SETTINGS_UPDATED;
            mike = {};
            oscar = _closure1_slot5;
            oscar = oscar.colorblindMode;
            mike['colorblind_enabled'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        };
        mike = report.bind(oscar)(tango, mike);
        mike = zulu.startAnnouncementQueue;
        mike = mike.bind(zulu)();
        return entity;
    };
    mike['init'] = golf;
    golf = function() { // Original name: updateNativeColors
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 7;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.updateSaturation;
        mike = _closure1_slot5;
        mike = mike.saturation;
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    mike['updateNativeColors'] = golf;
    golf = function() { // Original name: updateMotionSettings
        zulu = _closure1_slot1;
        oscar = _closure1_slot2;
        entity = 8;
        mike = oscar[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = _closure1_slot0;
        mike = 9;
        mike = oscar[mike];
        mike = zulu.bind(entity)(mike);
        zulu = mike.accessibilityPreferencesSharedValue;
        mike = {};
        report = _closure1_slot5;
        oscar = report.useReducedMotion;
        mike['reduceMotion'] = oscar;
        report = report.systemPrefersCrossfades;
        mike['prefersCrossfades'] = report;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['updateMotionSettings'] = golf;
    golf = function() { // Original name: checkScreenreaderEnabled
        mike = this;
        var _closure2_slot0 = mike;
        zulu = _closure1_slot3;
        mike = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun109291: for(var _fun109291_ip = 0; ; ) switch(_fun109291_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(mike) { _fun109291_ip = 60; continue _fun109291 }
 7:
                    zulu = _closure1_slot4;
                    mike = zulu.isScreenReaderEnabled;
                    mike = mike.bind(zulu)();
                    SaveGenerator(address=28);
 26:
                    return mike;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zulu) { _fun109291_ip = 57; continue _fun109291 }
 34:
                    tango = _closure2_slot0;
                    zulu = tango.updateScreenReaderEnabled;
                    zulu = zulu.bind(tango)(mike);
                    zulu = undefined;
                    return zulu;
 57:
                    return mike;
 60:
                    return entity;
                }
            };
            return entity;
        };
        entity = zulu.bind(mike)(entity);
        entity = entity.bind(mike)();
        return entity;
    };
    mike['checkScreenreaderEnabled'] = golf;
    golf = function(argFoo) { // Original name: updateScreenReaderEnabled
        tango = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        zulu = report[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = _closure1_slot0;
        mike = 9;
        mike = report[mike];
        mike = zulu.bind(entity)(mike);
        zulu = mike.accessibilityPreferencesSharedValue;
        mike = {};
        report = argFoo;
        mike['screenReaderEnabled'] = report;
        mike = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike['updateScreenReaderEnabled'] = golf;
    tango = function() { // Original name: startAnnouncementQueue
        mike = global;
        mike = mike.Set;
        zulu = mike.prototype;
        zulu = Object.create(zulu, {constructor: {value: mike}});
        golf = zulu;
        mike = new golf[mike](oscar);
        mike = mike instanceof Object ? mike : zulu;
        var _closure2_slot0 = mike;
        tango = _closure1_slot4;
        zulu = tango.addEventListener;
        mike = 'announcementFinished';
        entity = function(argFoo) {
            _fun109294: for(var _fun109294_ip = 0; ; ) switch(_fun109294_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                zulu = entity.success;
                if(zulu) { _fun109294_ip = 92; continue _fun109294 }
 18:
                oscar = _closure2_slot0;
                report = oscar.has;
                tango = entity.announcement;
                tango = report.bind(oscar)(tango);
                if(tango) { _fun109294_ip = 92; continue _fun109294 }
 44:
                report = _closure2_slot0;
                tango = report.add;
                zulu = entity.announcement;
                zulu = tango.bind(report)(zulu);
                zulu = global;
                report = zulu.setTimeout;
                tango = undefined;
                zulu = function() {
                    zulu = _closure1_slot0;
                    mike = _closure1_slot2;
                    entity = 10;
                    mike = mike[entity];
                    entity = undefined;
                    mike = zulu.bind(entity)(mike);
                    tango = mike.AccessibilityAnnouncer;
                    zulu = tango.announce;
                    mike = _closure3_slot0;
                    mike = mike.announcement;
                    mike = zulu.bind(tango)(mike);
                    return entity;
                };
                mike = 150;
                mike = report.bind(tango)(zulu, mike);
                _fun109294_ip = 115; continue _fun109294;
 92:
                zulu = _closure2_slot0;
                mike = zulu.delete;
                entity = entity.announcement;
                entity = mike.bind(zulu)(entity);
 115:
                entity = undefined;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        entity = undefined;
        return entity;
    };
    mike['startAnnouncementQueue'] = tango;
    tango = 11;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/a11y/native/AccessibilityManager.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();