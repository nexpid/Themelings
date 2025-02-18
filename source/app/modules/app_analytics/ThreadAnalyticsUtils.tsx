// app/modules/app_analytics/ThreadAnalyticsUtils.tsx
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
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.THREAD_CHANNEL_TYPES;
    var _closure1_slot5 = tangon;
    tangon = 3;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot6 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot7 = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/app_analytics/ThreadAnalyticsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: collectThreadMetadata
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            option = arguments[1];
            golfie = undefined;
            if(!(option === golfie)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            option = false;
 14:
            report = null;
            michal = report != zuuluu;
            entity = null;
            if(!michal) { _fun00002_ip = 353; continue _fun00001 }
 28:
            verify = _closure1_slot5;
            oscard = verify.has;
            michal = zuuluu.type;
            michal = oscard.bind(verify)(michal);
            entity = null;
            if(!michal) { _fun00002_ip = 353; continue _fun00001 }
 58:
            michal = {};
            oscard = undefined;
            if(!option) { _fun00002_ip = 95; continue _fun00001 }
 65:
            verify = _closure1_slot0;
            offset = _closure1_slot2;
            option = 5;
            option = offset[option];
            verify = verify.bind(golfie)(option);
            option = verify.getLastRouteChangeSource;
            oscard = option.bind(verify)();
 95:
            michal['location'] = oscard;
            verify = _closure1_slot3;
            option = verify.getMemberCount;
            oscard = zuuluu.id;
            oscard = option.bind(verify)(oscard);
            michal['thread_approximate_member_count'] = oscard;
            verify = _closure1_slot4;
            option = verify.getCount;
            oscard = zuuluu.id;
            oscard = option.bind(verify)(oscard);
            michal['thread_approximate_message_count'] = oscard;
            oscard = zuuluu.threadMetadata;
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00002_ip = 174; continue _fun00001 }
 168:
            option = oscard.archived;
 174:
            oscard = true;
            oscard = oscard === option;
            michal['thread_archived'] = oscard;
            oscard = zuuluu.threadMetadata;
            verify = report == oscard;
            option = undefined;
            if(verify) { _fun00002_ip = 208; continue _fun00001 }
 202:
            option = oscard.locked;
 208:
            oscard = report != option;
            if(!oscard) { _fun00002_ip = 218; continue _fun00001 }
 215:
            oscard = option;
 218:
            michal['thread_locked'] = oscard;
            option = zuuluu.threadMetadata;
            verify = report == option;
            oscard = undefined;
            if(verify) { _fun00002_ip = 246; continue _fun00001 }
 240:
            oscard = option.autoArchiveDuration;
 246:
            option = report != oscard;
            report = 0;
            if(!option) { _fun00002_ip = 258; continue _fun00001 }
 255:
            report = oscard;
 258:
            michal['thread_auto_archive_duration_minutes'] = report;
            oscard = _closure1_slot1;
            option = _closure1_slot2;
            report = 6;
            report = option[report];
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.extractTimestamp;
            report = zuuluu.id;
            report = oscard.bind(golfie)(report);
            michal['thread_approximate_creation_date'] = report;
            oscard = _closure1_slot6;
            report = oscard.can;
            tangon = _closure1_slot7;
            tangon = tangon.SEND_MESSAGES;
            tangon = report.bind(oscard)(tangon, zuuluu);
            michal['can_send_message'] = tangon;
            zuuluu = zuuluu.parentChannelThreadType;
            michal['parent_channel_type'] = zuuluu;
            entity = michal;
 353:
            return entity;
        }
    };
    zuuluu['collectThreadMetadata'] = michal;
    return entity;
})();