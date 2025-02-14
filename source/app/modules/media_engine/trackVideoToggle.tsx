// app/modules/media_engine/trackVideoToggle.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    zulu = argFred;
    oscar = argPlugh;
    entity = argBaz;
    var _closure1_slot0 = entity;
    var _closure1_slot1 = oscar;
    entity = global;
    options = entity.Object;
    golf = options.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = golf.bind(options)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = report.bind(entity)(tango);
    tango = tango.AnalyticEvents;
    var _closure1_slot4 = tango;
    tango = 3;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/media_engine/trackVideoToggle.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo, argBar, argBaz) { // Original name: trackVideoToggle
        _fun105438: for(var _fun105438_ip = 0; ; ) switch(_fun105438_ip) {
 0:
            zulu = _closure1_slot0;
            tango = _closure1_slot1;
            entity = 1;
            mike = tango[entity];
            entity = undefined;
            oscar = zulu.bind(entity)(mike);
            report = oscar.getConfig;
            mike = false;
            mike = report.bind(oscar)(mike);
            options = mike.featureEnabled;
            romeo = mike.windowLength;
            yankee = mike.allowedPoorFpsRatio;
            offset = mike.fpsThreshold;
            golf = mike.backoffTimeSec;
            mike = 2;
            mike = tango[mike];
            report = zulu.bind(entity)(mike);
            tango = report.track;
            mike = _closure1_slot4;
            zulu = mike.VIDEO_TOGGLED;
            mike = {};
            oscar = argBar;
            mike['video_toggle_reason'] = oscar;
            oscar = argFoo;
            mike['toggled_user_id'] = oscar;
            verify = _closure1_slot2;
            oscar = null;
            backup = oscar == verify;
            verify = undefined;
            if(backup) { _fun105438_ip = 140; continue _fun105438 }
 132:
            backup = _closure1_slot2;
            verify = backup.bind(entity)();
 140:
            mike['rtc_connection_id'] = verify;
            verify = _closure1_slot3;
            backup = oscar == verify;
            verify = undefined;
            if(backup) { _fun105438_ip = 166; continue _fun105438 }
 158:
            foxtrot = _closure1_slot3;
            verify = foxtrot.bind(entity)();
 166:
            mike['media_session_id'] = verify;
            verify = null;
            if(!options) { _fun105438_ip = 179; continue _fun105438 }
 176:
            verify = romeo;
 179:
            mike['video_health_manager_window_length'] = verify;
            verify = null;
            if(!options) { _fun105438_ip = 194; continue _fun105438 }
 191:
            verify = yankee;
 194:
            mike['video_health_manager_poor_fps_ratio'] = verify;
            verify = null;
            if(!options) { _fun105438_ip = 209; continue _fun105438 }
 206:
            verify = offset;
 209:
            mike['video_health_manager_fps_threshold'] = verify;
            verify = argBaz;
            mike['is_video_shown'] = verify;
            oscar = null;
            if(!options) { _fun105438_ip = 234; continue _fun105438 }
 231:
            oscar = golf;
 234:
            mike['video_health_manager_backoff_time_seconds'] = oscar;
            mike = tango.bind(report)(zulu, mike);
            return entity;
        }
    };
    zulu['default'] = tango;
    mike = function(argFoo, argBar) { // Original name: setVideoToggleAnalyticsParams
        entity = argFoo;
        var _closure1_slot2 = entity;
        entity = argBar;
        var _closure1_slot3 = entity;
        entity = undefined;
        return entity;
    };
    zulu['setVideoToggleAnalyticsParams'] = mike;
    return entity;
})();