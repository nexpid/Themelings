// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    options = argBar;
    offset = argBaz;
    zulu = argFred;
    verify = argPlugh;
    var _closure1_slot0 = options;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscar = global;
    golf = oscar.Object;
    report = golf.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golf)(zulu, entity, tango);
    entity = 0;
    tango = verify[entity];
    entity = undefined;
    report = options.bind(entity)(tango);
    tango = report.NativeModules;
    report = report.Platform;
    golf = 1;
    golf = verify[golf];
    golf = offset.bind(entity)(golf);
    var _closure1_slot3 = golf;
    golf = 2;
    golf = verify[golf];
    golf = options.bind(entity)(golf);
    golf = golf.ApplicationStreamStates;
    var _closure1_slot4 = golf;
    golf = oscar.parseInt;
    oscar = report.Version;
    report = 10;
    report = golf.bind(entity)(oscar, report);
    var _closure1_slot5 = report;
    tango = tango.BroadcastUploadManager;
    var _closure1_slot6 = tango;
    tango = function() { // Original name: startAndroidScreenshare
        zulu = _closure1_slot1;
        mike = _closure1_slot2;
        entity = 3;
        mike = mike[entity];
        entity = undefined;
        tango = zulu.bind(entity)(mike);
        zulu = tango.isForegroundServiceRunning;
        mike = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = argFoo;
                if(entity) { _fun00002_ip = 43; continue _fun00001 }
 17:
                entity = 5;
                tango = mike[entity];
                entity = undefined;
                tango = zulu.bind(entity)(tango);
                entity = tango.showScreenshareDisabledAlert;
                entity = entity.bind(tango)();
                _fun00002_ip = 79; continue _fun00001;
 43:
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                entity = mike.getVoiceEngine;
                mike = entity.bind(mike)();
                entity = mike.startBroadcast;
                entity = entity.bind(mike)();
 79:
                entity = undefined;
                return entity;
            }
        };
        mike = zulu.bind(tango)(mike);
        return entity;
    };
    var _closure1_slot7 = tango;
    tango = function() { // Original name: showScreensharePicker
        mike = _closure1_slot6;
        entity = mike.showPicker;
        entity = entity.bind(mike)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot8 = tango;
    oscar = function() { // Original name: handleCloseScreenshare
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zulu = _closure1_slot3;
            mike = zulu.getCurrentUserActiveStream;
            golf = mike.bind(zulu)();
            tango = null;
            if(!(tango != golf)) { _fun00004_ip = 79; continue _fun00003 }
 23:
            options = _closure1_slot0;
            verify = _closure1_slot2;
            mike = 6;
            mike = verify[mike];
            oscar = undefined;
            report = options.bind(oscar)(mike);
            zulu = report.stopStream;
            mike = 7;
            mike = verify[mike];
            oscar = options.bind(oscar)(mike);
            mike = oscar.encodeStreamKey;
            mike = mike.bind(oscar)(golf);
            mike = zulu.bind(report)(mike);
 79:
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 8;
            mike = mike[entity];
            entity = undefined;
            zulu = zulu.bind(entity)(mike);
            mike = zulu.setGoLiveSource;
            mike = mike.bind(zulu)(tango);
            return entity;
        }
    };
    var _closure1_slot9 = oscar;
    report = function() { // Original name: stopScreenshare
        tango = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 4;
        zulu = zulu[entity];
        entity = undefined;
        tango = tango.bind(entity)(zulu);
        zulu = tango.getVoiceEngine;
        tango = zulu.bind(tango)();
        zulu = tango.stopBroadcast;
        zulu = zulu.bind(tango)();
        mike = _closure1_slot9;
        mike = mike.bind(entity)();
        return entity;
    };
    var _closure1_slot10 = report;
    tango = function(argFoo) { // Original name: handleOnboard
        entity = argFoo;
        var _closure2_slot0 = entity;
        golf = _closure1_slot0;
        zulu = _closure1_slot2;
        entity = 9;
        report = zulu[entity];
        entity = undefined;
        report = golf.bind(entity)(report);
        verify = report.Storage;
        options = verify.set;
        report = 10;
        report = zulu[report];
        report = golf.bind(entity)(report);
        report = report.StorageKeys;
        oscar = report.SCREENSHARE_ONBOARD;
        report = true;
        report = options.bind(verify)(oscar, report);
        report = _closure1_slot1;
        tango = 11;
        tango = zulu[tango];
        oscar = report.bind(entity)(tango);
        report = oscar.openLazy;
        tango = 13;
        tango = zulu[tango];
        golf = golf.bind(entity)(tango);
        tango = 12;
        tango = zulu[tango];
        zulu = zulu.paths;
        tango = golf.bind(entity)(tango, zulu);
        zulu = {};
        golf = function() { // Original name: onScreensharePress
            mike = _closure2_slot0;
            entity = undefined;
            mike = mike.bind(entity)();
            zulu = _closure1_slot1;
            tango = _closure1_slot2;
            mike = 11;
            mike = tango[mike];
            zulu = zulu.bind(entity)(mike);
            mike = zulu.hideActionSheet;
            mike = mike.bind(zulu)();
            return entity;
        };
        zulu['onScreensharePress'] = golf;
        mike = function() { // Original name: onSkip
            zulu = _closure1_slot1;
            mike = _closure1_slot2;
            entity = 11;
            mike = mike[entity];
            entity = undefined;
            mike = zulu.bind(entity)(mike);
            entity = mike.hideActionSheet;
            entity = entity.bind(mike)();
            return entity;
        };
        zulu['onSkip'] = mike;
        mike = 'NUF_SCREENSHARE_ACTIONSHEET';
        mike = report.bind(oscar)(tango, mike, zulu);
        return entity;
    };
    var _closure1_slot11 = tango;
    golf = 19;
    golf = verify[golf];
    verify = options.bind(entity)(golf);
    options = verify.fileFinishedImporting;
    golf = 'modules/video_calls/native/useScreenshareUtils.tsx';
    golf = options.bind(verify)(golf);
    golf = function(argFoo) { // Original name: _default
        tango = _closure1_slot1;
        oscar = _closure1_slot2;
        zulu = 14;
        zulu = oscar[zulu];
        report = undefined;
        tango = tango.bind(report)(zulu);
        zulu = argFoo;
        zulu = tango.bind(report)(zulu);
        var _closure2_slot0 = zulu;
        tango = _closure1_slot0;
        zulu = 15;
        zulu = oscar[zulu];
        tango = tango.bind(report)(zulu);
        zulu = tango.useStateFromStoresObject;
        report = _closure1_slot3;
        mike = new Array(1);
        mike[0] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zulu = _closure1_slot5;
                mike = 12;
                golf = zulu >= mike;
                zulu = _closure1_slot3;
                mike = zulu.getCurrentUserActiveStream;
                mike = mike.bind(zulu)();
                zulu = null;
                report = zulu != mike;
                if(!report) { _fun00006_ip = 56; continue _fun00005 }
 37:
                zulu = mike.state;
                mike = _closure1_slot4;
                mike = mike.ACTIVE;
                report = zulu === mike;
 56:
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 4;
                mike = tango[mike];
                verify = undefined;
                zulu = zulu.bind(verify)(mike);
                mike = zulu.getVoiceEngine;
                mike = mike.bind(zulu)();
                zulu = mike.platform;
                mike = 'android';
                if(!(mike !== zulu)) { _fun00006_ip = 108; continue _fun00005 }
 102:
                mike = _closure1_slot8;
                _fun00006_ip = 112; continue _fun00005;
 108:
                mike = _closure1_slot7;
 112:
                if(golf) { _fun00006_ip = 143; continue _fun00005 }
 115:
                tango = _closure1_slot0;
                oscar = _closure1_slot2;
                zulu = 5;
                zulu = oscar[zulu];
                zulu = tango.bind(verify)(zulu);
                zulu = zulu.showMinOSScreenshareRequirementAlert;
                _fun00006_ip = 191; continue _fun00005;
 143:
                tango = _closure2_slot0;
                if(tango) { _fun00006_ip = 181; continue _fun00005 }
 153:
                oscar = _closure1_slot0;
                options = _closure1_slot2;
                tango = 5;
                tango = options[tango];
                tango = oscar.bind(verify)(tango);
                zulu = tango.showScreenshareDisabledAlert;
                _fun00006_ip = 191; continue _fun00005;
 181:
                zulu = mike;
                if(!report) { _fun00006_ip = 191; continue _fun00005 }
 187:
                zulu = _closure1_slot10;
 191:
                tango = _closure1_slot1;
                options = _closure1_slot2;
                if(report) { _fun00006_ip = 211; continue _fun00005 }
 202:
                mike = 17;
                mike = options[mike];
                _fun00006_ip = 218; continue _fun00005;
 211:
                oscar = 16;
                mike = options[oscar];
 218:
                mike = tango.bind(verify)(mike);
                tango = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 18;
                oscar = offset[entity];
                oscar = tango.bind(verify)(oscar);
                options = oscar.intl;
                oscar = options.string;
                entity = offset[entity];
                entity = tango.bind(verify)(entity);
                entity = entity.t;
                if(report) { _fun00006_ip = 283; continue _fun00005 }
 270:
                tango = entity.fjBNo6;
                tango = oscar.bind(options)(tango);
                _fun00006_ip = 294; continue _fun00005;
 283:
                entity = entity.CpkXwc;
                tango = oscar.bind(options)(entity);
 294:
                entity = {};
                oscar = _closure2_slot0;
                if(!oscar) { _fun00006_ip = 309; continue _fun00005 }
 306:
                oscar = golf;
 309:
                entity['isFeatureEnabled'] = oscar;
                entity['isActive'] = report;
                entity['text'] = tango;
                entity['onPress'] = zulu;
                entity['imgSource'] = mike;
                return entity;
            }
        };
        entity = zulu.bind(tango)(mike, entity);
        return entity;
    };
    zulu['default'] = golf;
    zulu['handleCloseScreenshare'] = oscar;
    zulu['stopScreenshare'] = report;
    zulu['handleOnboard'] = tango;
    mike = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golf = _closure1_slot0;
            options = _closure1_slot2;
            zulu = 9;
            zulu = options[zulu];
            oscar = undefined;
            zulu = golf.bind(oscar)(zulu);
            report = zulu.Storage;
            tango = report.get;
            zulu = 10;
            zulu = options[zulu];
            zulu = golf.bind(oscar)(zulu);
            zulu = zulu.StorageKeys;
            zulu = zulu.SCREENSHARE_ONBOARD;
            zulu = tango.bind(report)(zulu);
            if(zulu) { _fun00008_ip = 84; continue _fun00007 }
 77:
            entity = function() {
                zulu = _closure1_slot11;
                mike = _closure2_slot0;
                entity = undefined;
                mike = zulu.bind(entity)(mike);
                return entity;
            };
 84:
            return entity;
        }
    };
    zulu['handleOnPressWithOnboard'] = mike;
    return entity;
})();