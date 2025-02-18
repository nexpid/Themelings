// app/modules/a11y/native/AccessibilityManager.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AccessibilityInfo;
    var _closure1_slot4 = michal;
    michal = 2;
    michal = oscard[michal];
    michal = golfie.bind(entity)(michal);
    var _closure1_slot5 = michal;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot6 = michal;
    michal = {};
    golfie = function() { // Original name: init
        zuuluu = this;
        var _closure2_slot0 = zuuluu;
        report = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 4;
        tangon = oscard[entity];
        entity = undefined;
        option = report.bind(entity)(tangon);
        tangon = option.init;
        tangon = tangon.bind(option)();
        tangon = zuuluu.updateNativeColors;
        tangon = tangon.bind(zuuluu)();
        tangon = zuuluu.updateMotionSettings;
        tangon = tangon.bind(zuuluu)();
        verify = _closure1_slot5;
        option = verify.addChangeListener;
        tangon = zuuluu.updateNativeColors;
        tangon = option.bind(verify)(tangon);
        option = verify.addChangeListener;
        tangon = zuuluu.updateMotionSettings;
        tangon = option.bind(verify)(tangon);
        tangon = 5;
        option = oscard[tangon];
        yankee = report.bind(entity)(option);
        offset = yankee.subscribe;
        verify = zuuluu.updateMotionSettings;
        option = 'CONNECTION_OPEN';
        option = offset.bind(yankee)(option, verify);
        offset = _closure1_slot4;
        verify = offset.addEventListener;
        option = 'screenReaderChanged';
        golfie = function(argFoo) {
            zuuluu = _closure2_slot0;
            michal = zuuluu.updateScreenReaderEnabled;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            entity = undefined;
            return entity;
        };
        golfie = verify.bind(offset)(option, golfie);
        tangon = oscard[tangon];
        oscard = report.bind(entity)(tangon);
        report = oscard.subscribe;
        tangon = 'ACCESSIBILITY_COLORBLIND_TOGGLE';
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 6;
            michal = michal[entity];
            entity = undefined;
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot6;
            zuuluu = michal.LOCAL_SETTINGS_UPDATED;
            michal = {};
            oscard = _closure1_slot5;
            oscard = oscard.colorblindMode;
            michal['colorblind_enabled'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        };
        michal = report.bind(oscard)(tangon, michal);
        michal = zuuluu.startAnnouncementQueue;
        michal = michal.bind(zuuluu)();
        return entity;
    };
    michal['init'] = golfie;
    golfie = function() { // Original name: updateNativeColors
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot2;
        entity = 7;
        zuuluu = zuuluu[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = tangon.updateSaturation;
        michal = _closure1_slot5;
        michal = michal.saturation;
        michal = zuuluu.bind(tangon)(michal);
        return entity;
    };
    michal['updateNativeColors'] = golfie;
    golfie = function() { // Original name: updateMotionSettings
        zuuluu = _closure1_slot1;
        oscard = _closure1_slot2;
        entity = 8;
        michal = oscard[entity];
        entity = undefined;
        tangon = zuuluu.bind(entity)(michal);
        zuuluu = _closure1_slot0;
        michal = 9;
        michal = oscard[michal];
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.accessibilityPreferencesSharedValue;
        michal = {};
        report = _closure1_slot5;
        oscard = report.useReducedMotion;
        michal['reduceMotion'] = oscard;
        report = report.systemPrefersCrossfades;
        michal['prefersCrossfades'] = report;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['updateMotionSettings'] = golfie;
    golfie = function() { // Original name: checkScreenreaderEnabled
        michal = this;
        var _closure2_slot0 = michal;
        zuuluu = _closure1_slot3;
        michal = undefined;
        entity = function* () {
            entity = function* () { // Original name: ?anon_0_
                _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(michal) { _fun00002_ip = 60; continue _fun00001 }
 7:
                    zuuluu = _closure1_slot4;
                    michal = zuuluu.isScreenReaderEnabled;
                    michal = michal.bind(zuuluu)();
                    SaveGenerator(address=28);
 26:
                    return michal;
 28:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(zuuluu) { _fun00002_ip = 57; continue _fun00001 }
 34:
                    tangon = _closure2_slot0;
                    zuuluu = tangon.updateScreenReaderEnabled;
                    zuuluu = zuuluu.bind(tangon)(michal);
                    zuuluu = undefined;
                    return zuuluu;
 57:
                    return michal;
 60:
                    return entity;
                }
            };
            return entity;
        };
        entity = zuuluu.bind(michal)(entity);
        entity = entity.bind(michal)();
        return entity;
    };
    michal['checkScreenreaderEnabled'] = golfie;
    golfie = function(argFoo) { // Original name: updateScreenReaderEnabled
        tangon = _closure1_slot1;
        report = _closure1_slot2;
        entity = 8;
        zuuluu = report[entity];
        entity = undefined;
        tangon = tangon.bind(entity)(zuuluu);
        zuuluu = _closure1_slot0;
        michal = 9;
        michal = report[michal];
        michal = zuuluu.bind(entity)(michal);
        zuuluu = michal.accessibilityPreferencesSharedValue;
        michal = {};
        report = argFoo;
        michal['screenReaderEnabled'] = report;
        michal = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal['updateScreenReaderEnabled'] = golfie;
    tangon = function() { // Original name: startAnnouncementQueue
        michal = global;
        michal = michal.Set;
        zuuluu = michal.prototype;
        zuuluu = Object.create(zuuluu, {constructor: {value: michal}});
        golfie = zuuluu;
        michal = new golfie[michal](oscard);
        michal = michal instanceof Object ? michal : zuuluu;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot4;
        zuuluu = tangon.addEventListener;
        michal = 'announcementFinished';
        entity = function(argFoo) {
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                entity = argFoo;
                var _closure3_slot0 = entity;
                zuuluu = entity.success;
                if(zuuluu) { _fun00004_ip = 92; continue _fun00003 }
 18:
                oscard = _closure2_slot0;
                report = oscard.has;
                tangon = entity.announcement;
                tangon = report.bind(oscard)(tangon);
                if(tangon) { _fun00004_ip = 92; continue _fun00003 }
 44:
                report = _closure2_slot0;
                tangon = report.add;
                zuuluu = entity.announcement;
                zuuluu = tangon.bind(report)(zuuluu);
                zuuluu = global;
                report = zuuluu.setTimeout;
                tangon = undefined;
                zuuluu = function() {
                    zuuluu = _closure1_slot0;
                    michal = _closure1_slot2;
                    entity = 10;
                    michal = michal[entity];
                    entity = undefined;
                    michal = zuuluu.bind(entity)(michal);
                    tangon = michal.AccessibilityAnnouncer;
                    zuuluu = tangon.announce;
                    michal = _closure3_slot0;
                    michal = michal.announcement;
                    michal = zuuluu.bind(tangon)(michal);
                    return entity;
                };
                michal = 150;
                michal = report.bind(tangon)(zuuluu, michal);
                _fun00004_ip = 115; continue _fun00003;
 92:
                zuuluu = _closure2_slot0;
                michal = zuuluu.delete;
                entity = entity.announcement;
                entity = michal.bind(zuuluu)(entity);
 115:
                entity = undefined;
                return entity;
            }
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        entity = undefined;
        return entity;
    };
    michal['startAnnouncementQueue'] = tangon;
    tangon = 11;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/a11y/native/AccessibilityManager.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();