// app/modules/app_analytics/ThreadAnalyticsUtils.tsx
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
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = tango;
    tango = 3;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot6 = tango;
    tango = 4;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.Permissions;
    var _closure1_slot7 = tango;
    tango = 7;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/app_analytics/ThreadAnalyticsUtils.tsx';
    tango = report.bind(oscar)(tango);
    mike = function(argFoo) { // Original name: collectThreadMetadata
        _fun68716: for(var _fun68716_ip = 0; ; ) switch(_fun68716_ip) {
 0:
            zulu = argFoo;
            options = arguments[1];
            golf = undefined;
            if(!(options === golf)) { _fun68716_ip = 14; continue _fun68716 }
 12:
            options = false;
 14:
            report = null;
            mike = report != zulu;
            entity = null;
            if(!mike) { _fun68716_ip = 353; continue _fun68716 }
 28:
            verify = _closure1_slot5;
            oscar = verify.has;
            mike = zulu.type;
            mike = oscar.bind(verify)(mike);
            entity = null;
            if(!mike) { _fun68716_ip = 353; continue _fun68716 }
 58:
            mike = {};
            oscar = undefined;
            if(!options) { _fun68716_ip = 95; continue _fun68716 }
 65:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            options = 5;
            options = offset[options];
            verify = verify.bind(golf)(options);
            options = verify.getLastRouteChangeSource;
            oscar = options.bind(verify)();
 95:
            mike['location'] = oscar;
            verify = _closure1_slot3;
            options = verify.getMemberCount;
            oscar = zulu.id;
            oscar = options.bind(verify)(oscar);
            mike['thread_approximate_member_count'] = oscar;
            verify = _closure1_slot4;
            options = verify.getCount;
            oscar = zulu.id;
            oscar = options.bind(verify)(oscar);
            mike['thread_approximate_message_count'] = oscar;
            oscar = zulu.threadMetadata;
            verify = report == oscar;
            options = undefined;
            if(verify) { _fun68716_ip = 174; continue _fun68716 }
 168:
            options = oscar.archived;
 174:
            oscar = true;
            oscar = oscar === options;
            mike['thread_archived'] = oscar;
            oscar = zulu.threadMetadata;
            verify = report == oscar;
            options = undefined;
            if(verify) { _fun68716_ip = 208; continue _fun68716 }
 202:
            options = oscar.locked;
 208:
            oscar = report != options;
            if(!oscar) { _fun68716_ip = 218; continue _fun68716 }
 215:
            oscar = options;
 218:
            mike['thread_locked'] = oscar;
            options = zulu.threadMetadata;
            verify = report == options;
            oscar = undefined;
            if(verify) { _fun68716_ip = 246; continue _fun68716 }
 240:
            oscar = options.autoArchiveDuration;
 246:
            options = report != oscar;
            report = 0;
            if(!options) { _fun68716_ip = 258; continue _fun68716 }
 255:
            report = oscar;
 258:
            mike['thread_auto_archive_duration_minutes'] = report;
            oscar = _closure1_slot1;
            options = _closure1_slot2;
            report = 6;
            report = options[report];
            golf = oscar.bind(golf)(report);
            oscar = golf.extractTimestamp;
            report = zulu.id;
            report = oscar.bind(golf)(report);
            mike['thread_approximate_creation_date'] = report;
            oscar = _closure1_slot6;
            report = oscar.can;
            tango = _closure1_slot7;
            tango = tango.SEND_MESSAGES;
            tango = report.bind(oscar)(tango, zulu);
            mike['can_send_message'] = tango;
            zulu = zulu.parentChannelThreadType;
            mike['parent_channel_type'] = zulu;
            entity = mike;
 353:
            return entity;
        }
    };
    zulu['collectThreadMetadata'] = mike;
    return entity;
})();