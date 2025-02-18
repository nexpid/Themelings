// app/modules/media_engine/trackVideoToggle.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot4 = tangon;
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
            tangon = _closure1_slot1;
            entity = 1;
            michal = tangon[entity];
            entity = undefined;
            oscard = zuuluu.bind(entity)(michal);
            report = oscard.getConfig;
            michal = false;
            michal = report.bind(oscard)(michal);
            option = michal.featureEnabled;
            romeon = michal.windowLength;
            yankee = michal.allowedPoorFpsRatio;
            offset = michal.fpsThreshold;
            golfie = michal.backoffTimeSec;
            michal = 2;
            michal = tangon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.VIDEO_TOGGLED;
            michal = {};
            oscard = argBar;
            michal['video_toggle_reason'] = oscard;
            oscard = argFoo;
            michal['toggled_user_id'] = oscard;
            verify = _closure1_slot2;
            oscard = null;
            backup = oscard == verify;
            verify = undefined;
            if(backup) { _fun00002_ip = 140; continue _fun00001 }
 132:
            backup = _closure1_slot2;
            verify = backup.bind(entity)();
 140:
            michal['rtc_connection_id'] = verify;
            verify = _closure1_slot3;
            backup = oscard == verify;
            verify = undefined;
            if(backup) { _fun00002_ip = 166; continue _fun00001 }
 158:
            foxtra = _closure1_slot3;
            verify = foxtra.bind(entity)();
 166:
            michal['media_session_id'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 179; continue _fun00001 }
 176:
            verify = romeon;
 179:
            michal['video_health_manager_window_length'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 194; continue _fun00001 }
 191:
            verify = yankee;
 194:
            michal['video_health_manager_poor_fps_ratio'] = verify;
            verify = null;
            if(!option) { _fun00002_ip = 209; continue _fun00001 }
 206:
            verify = offset;
 209:
            michal['video_health_manager_fps_threshold'] = verify;
            verify = argBaz;
            michal['is_video_shown'] = verify;
            oscard = null;
            if(!option) { _fun00002_ip = 234; continue _fun00001 }
 231:
            oscard = golfie;
 234:
            michal['video_health_manager_backoff_time_seconds'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    michal = function(argFoo, argBar) { // Original name: setVideoToggleAnalyticsParams
        entity = argFoo;
        var _closure1_slot2 = entity;
        entity = argBar;
        var _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    zuuluu['setVideoToggleAnalyticsParams'] = michal;
    return entity;
})();