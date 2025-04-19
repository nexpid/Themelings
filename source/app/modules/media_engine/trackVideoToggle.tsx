// app/modules/media_engine/trackVideoToggle.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/media_engine/trackVideoToggle.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo, argBar, argBaz) { // Original name: trackVideoToggle
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 1;
            michal = tangon[entity];
            entity = undefined;
            michal = zuuluu.bind(entity)(michal);
            michal = michal.VideoHealthManager;
            michal = michal.defaultConfig;
            option = michal.featureEnabled;
            romeon = michal.windowLength;
            yankee = michal.allowedPoorFpsRatio;
            offset = michal.fpsThreshold;
            golfie = michal.backoffTimeSec;
            zuuluu = _closure1_slot1;
            michal = 2;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot5;
            zuuluu = michal.VIDEO_TOGGLED;
            michal = {};
            oscard = argBar;
            michal['video_toggle_reason'] = oscard;
            oscard = argFoo;
            michal['toggled_user_id'] = oscard;
            verify = _closure1_slot3;
            oscard = null;
            backup = oscard == verify;
            verify = undefined;
            if(backup) { _fun00002_ip = 143; continue _fun00001 }
 135:
            backup = _closure1_slot3;
            verify = backup.bind(entity)();
 143:
            michal['rtc_connection_id'] = verify;
            verify = _closure1_slot4;
            backup = oscard == verify;
            verify = undefined;
            if(backup) { _fun00002_ip = 169; continue _fun00001 }
 161:
            foxtra = _closure1_slot4;
            verify = foxtra.bind(entity)();
 169:
            michal['media_session_id'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 182; continue _fun00001 }
 179:
            verify = romeon;
 182:
            michal['video_health_manager_window_length'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 197; continue _fun00001 }
 194:
            verify = yankee;
 197:
            michal['video_health_manager_poor_fps_ratio'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 212; continue _fun00001 }
 209:
            verify = offset;
 212:
            michal['video_health_manager_fps_threshold'] = verify;
            verify = argBaz;
            michal['is_video_shown'] = verify;
            oscard = null;
            if(!option) { _fun00002_ip = 237; continue _fun00001 }
 234:
            oscard = golfie;
 237:
            michal['video_health_manager_backoff_time_seconds'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setVideoToggleAnalyticsParams
        entity = argFoo;
        var _closure1_slot3 = entity;
        entity = argBar;
        var _closure1_slot4 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setVideoToggleAnalyticsParams'] = michal;
    return entity;
})();