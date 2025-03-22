// app/modules/video_calls/native/useScreenshareUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    option = argBar;
    offset = argBaz;
    zuuluu = argFre;
    verify = argPlu;
    var _closure1_slot0 = option;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = verify;
    oscard = global;
    golfie = oscard.Object;
    report = golfie.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(golfie)(zuuluu, entity, tangon);
    entity = 0;
    tangon = verify[entity];
    entity = undefined;
    report = option.bind(entity)(tangon);
    tangon = report.NativeModules;
    report = report.Platform;
    golfie = 1;
    golfie = verify[golfie];
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 2;
    golfie = verify[golfie];
    golfie = option.bind(entity)(golfie);
    golfie = golfie.ApplicationStreamStates;
    var _closure1_slot4 = golfie;
    golfie = oscard.parseInt;
    oscard = report.Version;
    report = 10;
    report = golfie.bind(entity)(oscard, report);
    var _closure1_slot5 = report;
    tangon = tangon.BroadcastUploadManager;
    var _closure1_slot6 = tangon;
    tangon = function() { // Original name: startAndroidScreenshare
        zuuluu = _closure1_slot1;
        michal = _closure1_slot2;
        entity = 3;
        michal = michal[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = tangon.isForegroundServiceRunning;
        michal = function(argFoo) {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = argFoo;
                if(entity) { _fun00002_ip = 43; continue _fun00001 }
 17:
                entity = 5;
                tangon = michal[entity];
                entity = undefined;
                tangon = zuuluu.bind(entity)(tangon);
                entity = tangon.showScreenshareDisabledAlert;
                entity = entity.bind(tangon)();
                _fun00002_ip = 79; continue _fun00001;
 43:
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                entity = michal.getVoiceEngine;
                michal = entity.bind(michal)();
                entity = michal.startBroadcast;
                entity = entity.bind(michal)();
 79:
                entity = undefined;
                return entity;
            }
        };
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    var _closure1_slot7 = tangon;
    tangon = function() { // Original name: showScreensharePicker
        michal = _closure1_slot6;
        entity = michal.showPicker;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot8 = tangon;
    oscard = function() { // Original name: handleCloseScreenshare
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = _closure1_slot3;
            michal = zuuluu.getCurrentUserActiveStream;
            golfie = michal.bind(zuuluu)();
            tangon = null;
            if(!(tangon != golfie)) { _fun00004_ip = 79; continue _fun00003 }
 23:
            option = _closure1_slot0;
            verify = _closure1_slot2;
            michal = 6;
            michal = verify[michal];
            oscard = undefined;
            report = option.bind(oscard)(michal);
            zuuluu = report.stopStream;
            michal = 7;
            michal = verify[michal];
            oscard = option.bind(oscard)(michal);
            michal = oscard.encodeStreamKey;
            michal = michal.bind(oscard)(golfie);
            michal = zuuluu.bind(report)(michal);
 79:
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 8;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.setGoLiveSource;
            michal = michal.bind(zuuluu)(tangon);
            return entity;
        }
    };
    var _closure1_slot9 = oscard;
    report = function() { // Original name: stopScreenshare
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 4;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.getVoiceEngine;
        tangon = zuuluu.bind(tangon)();
        zuuluu = tangon.stopBroadcast;
        zuuluu = zuuluu.bind(tangon)();
        michal = _closure1_slot9;
        michal = michal.bind(entity)();
        return entity;
    };
    var _closure1_slot10 = report;
    tangon = function(argFoo) { // Original name: handleOnboard
        entity = argFoo;
        var _closure2_slot0 = entity;
        golfie = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 9;
        report = zuuluu[entity];
        entity = undefined;
        report = golfie.bind(entity)(report);
        verify = report.Storage;
        option = verify.set;
        report = 10;
        report = zuuluu[report];
        report = golfie.bind(entity)(report);
        report = report.StorageKeys;
        oscard = report.SCREENSHARE_ONBOARD;
        report = true;
        report = option.bind(verify)(oscard, report);
        report = _closure1_slot1;
        tangon = 11;
        tangon = zuuluu[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.openLazy;
        tangon = 13;
        tangon = zuuluu[tangon];
        golfie = golfie.bind(entity)(tangon);
        tangon = 12;
        tangon = zuuluu[tangon];
        zuuluu = zuuluu.paths;
        tangon = golfie.bind(entity)(tangon, zuuluu);
        zuuluu = {};
        golfie = function() { // Original name: onScreensharePress
            michal = _closure2_slot0;
            entity = undefined;
            michal = michal.bind(entity)();
            zuuluu = _closure1_slot1;
            tangon = _closure1_slot2;
            michal = 11;
            michal = tangon[michal];
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.hideActionSheet;
            michal = michal.bind(zuuluu)();
            return entity;
        };
        zuuluu['onScreensharePress'] = golfie;
        michal = function() { // Original name: onSkip
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 11;
            michal = michal[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            entity = michal.hideActionSheet;
            entity = entity.bind(michal)();
            return entity;
        };
        zuuluu['onSkip'] = michal;
        michal = 'NUF_SCREENSHARE_ACTIONSHEET';
        michal = report.bind(oscard)(tangon, michal, zuuluu);
        return entity;
    };
    var _closure1_slot11 = tangon;
    golfie = 20;
    golfie = verify[golfie];
    verify = option.bind(entity)(golfie);
    option = verify.fileFinishedImporting;
    golfie = 'modules/video_calls/native/useScreenshareUtils.tsx';
    golfie = option.bind(verify)(golfie);
    golfie = function(argFoo) { // Original name: _default
        tangon = argFoo;
        var _closure2_slot0 = tangon;
        golfie = _closure1_slot1;
        oscard = _closure1_slot2;
        zuuluu = 14;
        zuuluu = oscard[zuuluu];
        report = undefined;
        zuuluu = golfie.bind(report)(zuuluu);
        zuuluu = zuuluu.bind(report)(tangon);
        var _closure2_slot1 = zuuluu;
        tangon = _closure1_slot0;
        zuuluu = 15;
        zuuluu = oscard[zuuluu];
        tangon = tangon.bind(report)(zuuluu);
        zuuluu = tangon.useStateFromStoresObject;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                zuuluu = _closure1_slot5;
                michal = 12;
                golfie = zuuluu >= michal;
                zuuluu = _closure1_slot3;
                michal = zuuluu.getCurrentUserActiveStream;
                michal = michal.bind(zuuluu)();
                zuuluu = null;
                report = zuuluu != michal;
                if(!report) { _fun00006_ip = 56; continue _fun00005 }
 37:
                zuuluu = michal.state;
                michal = _closure1_slot4;
                michal = michal.ACTIVE;
                report = zuuluu === michal;
 56:
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 4;
                michal = tangon[michal];
                verify = undefined;
                zuuluu = zuuluu.bind(verify)(michal);
                michal = zuuluu.getVoiceEngine;
                michal = michal.bind(zuuluu)();
                zuuluu = michal.platform;
                michal = 'android';
                if(!(michal !== zuuluu)) { _fun00006_ip = 108; continue _fun00005 }
 102:
                michal = _closure1_slot8;
                _fun00006_ip = 112; continue _fun00005;
 108:
                michal = _closure1_slot7;
 112:
                if(golfie) { _fun00006_ip = 124; continue _fun00005 }
 115:
                zuuluu = function() { // Original name: u
                    zuuluu = _closure1_slot0;
                    tangon = _closure1_slot2;
                    michal = 16;
                    report = tangon[michal];
                    entity = undefined;
                    golfie = zuuluu.bind(entity)(report);
                    oscard = golfie.reportAVError;
                    michal = tangon[michal];
                    michal = zuuluu.bind(entity)(michal);
                    michal = michal.AVError;
                    report = michal.SCREENSHARE_OS_NOT_SUPPORTED;
                    michal = {};
                    option = _closure2_slot0;
                    option = option.id;
                    michal['channelId'] = option;
                    michal = oscard.bind(golfie)(report, michal);
                    michal = 5;
                    michal = tangon[michal];
                    zuuluu = zuuluu.bind(entity)(michal);
                    michal = zuuluu.showMinOSScreenshareRequirementAlert;
                    michal = michal.bind(zuuluu)();
                    return entity;
                };
                _fun00006_ip = 172; continue _fun00005;
 124:
                tangon = _closure2_slot1;
                if(tangon) { _fun00006_ip = 162; continue _fun00005 }
 134:
                oscard = _closure1_slot0;
                option = _closure1_slot2;
                tangon = 5;
                tangon = option[tangon];
                tangon = oscard.bind(verify)(tangon);
                zuuluu = tangon.showScreenshareDisabledAlert;
                _fun00006_ip = 172; continue _fun00005;
 162:
                zuuluu = michal;
                if(!report) { _fun00006_ip = 172; continue _fun00005 }
 168:
                zuuluu = _closure1_slot10;
 172:
                tangon = _closure1_slot1;
                option = _closure1_slot2;
                if(report) { _fun00006_ip = 192; continue _fun00005 }
 183:
                michal = 18;
                michal = option[michal];
                _fun00006_ip = 199; continue _fun00005;
 192:
                oscard = 17;
                michal = option[oscard];
 199:
                michal = tangon.bind(verify)(michal);
                tangon = _closure1_slot0;
                offset = _closure1_slot2;
                entity = 19;
                oscard = offset[entity];
                oscard = tangon.bind(verify)(oscard);
                option = oscard.intl;
                oscard = option.string;
                entity = offset[entity];
                entity = tangon.bind(verify)(entity);
                entity = entity.t;
                if(report) { _fun00006_ip = 266; continue _fun00005 }
 251:
                tangon = entity.fjBNo6;
                tangon = oscard.bind(option)(tangon);
                _fun00006_ip = 277; continue _fun00005;
 266:
                entity = entity.CpkXwc;
                tangon = oscard.bind(option)(entity);
 277:
                entity = {};
                oscard = _closure2_slot1;
                if(!oscard) { _fun00006_ip = 292; continue _fun00005 }
 289:
                oscard = golfie;
 292:
                entity['isFeatureEnabled'] = oscard;
                entity['isActive'] = report;
                entity['text'] = tangon;
                entity['onPress'] = zuuluu;
                entity['imgSource'] = michal;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = golfie;
    zuuluu['handleCloseScreenshare'] = oscard;
    zuuluu['stopScreenshare'] = report;
    zuuluu['handleOnboard'] = tangon;
    michal = function(argFoo) {
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            var _closure2_slot0 = entity;
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            zuuluu = 9;
            zuuluu = option[zuuluu];
            oscard = undefined;
            zuuluu = golfie.bind(oscard)(zuuluu);
            report = zuuluu.Storage;
            tangon = report.get;
            zuuluu = 10;
            zuuluu = option[zuuluu];
            zuuluu = golfie.bind(oscard)(zuuluu);
            zuuluu = zuuluu.StorageKeys;
            zuuluu = zuuluu.SCREENSHARE_ONBOARD;
            zuuluu = tangon.bind(report)(zuuluu);
            if(zuuluu) { _fun00008_ip = 82; continue _fun00007 }
 77:
            entity = function() {
                zuuluu = _closure1_slot11;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
 82:
            return entity;
        }
    };
    zuuluu['handleOnPressWithOnboard'] = michal;
    return entity;
})();