// app/modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    report = argPlu;
    var _closure1_slot0 = oscard;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = report;
    tangon = function(argFoo) { // Original name: useIsSwipeToMemberListExperimentEnabled
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            oscard = arguments[1];
            report = undefined;
            if(!(oscard === report)) { _fun00002_ip = 14; continue _fun00001 }
 12:
            oscard = false;
 14:
            golfie = _closure1_slot1;
            option = _closure1_slot2;
            zuuluu = 0;
            entity = option[zuuluu];
            yankee = golfie.bind(report)(entity);
            offset = yankee.useExperiment;
            verify = {};
            verify['location'] = michal;
            entity = {};
            golfie = true;
            entity['autoTrackExposure'] = golfie;
            entity['disable'] = oscard;
            entity = offset.bind(yankee)(verify, entity);
            entity = entity.enabled;
            tangon = _closure1_slot0;
            zuuluu = option[zuuluu];
            zuuluu = tangon.bind(report)(zuuluu);
            report = zuuluu.SwipeToMemberList2Experiment;
            tangon = report.useExperiment;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = golfie;
            michal['disable'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            michal = michal.enabled;
            if(entity) { _fun00002_ip = 133; continue _fun00001 }
 130:
            entity = michal;
 133:
            return entity;
        }
    };
    var _closure1_slot3 = tangon;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 3;
    report = report[entity];
    entity = undefined;
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListUtils.tsx';
    report = oscard.bind(golfie)(report);
    report = function(argFoo) { // Original name: getIsSwipeToMemberListExperimentEnabled
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            report = _closure1_slot1;
            romeon = _closure1_slot2;
            zuuluu = 0;
            entity = romeon[zuuluu];
            verify = undefined;
            option = report.bind(verify)(entity);
            oscard = option.getCurrentConfig;
            report = {};
            report['location'] = michal;
            entity = {};
            yankee = true;
            entity['autoTrackExposure'] = yankee;
            backup = _closure1_slot0;
            golfie = 1;
            offset = romeon[golfie];
            foxtra = backup.bind(verify)(offset);
            offset = foxtra.getSwipeToReplySettingValue;
            foxtra = offset.bind(foxtra)();
            offset = 2;
            romeon = romeon[offset];
            romeon = backup.bind(verify)(romeon);
            romeon = romeon.SwipeRightToLeftMode;
            romeon = romeon.SWIPE_RIGHT_TO_LEFT_REPLY;
            romeon = foxtra === romeon;
            entity['disable'] = romeon;
            entity = oscard.bind(option)(report, entity);
            entity = entity.enabled;
            if(entity) { _fun00004_ip = 223; continue _fun00003 }
 121:
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            zuuluu = oscard[zuuluu];
            zuuluu = option.bind(verify)(zuuluu);
            report = zuuluu.SwipeToMemberList2Experiment;
            tangon = report.getCurrentConfig;
            zuuluu = {};
            zuuluu['location'] = michal;
            michal = {};
            michal['autoTrackExposure'] = yankee;
            golfie = oscard[golfie];
            yankee = option.bind(verify)(golfie);
            golfie = yankee.getSwipeToReplySettingValue;
            golfie = golfie.bind(yankee)();
            oscard = oscard[offset];
            oscard = option.bind(verify)(oscard);
            oscard = oscard.SwipeRightToLeftMode;
            oscard = oscard.SWIPE_RIGHT_TO_LEFT_REPLY;
            oscard = golfie === oscard;
            michal['disable'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            entity = michal.enabled;
 223:
            return entity;
        }
    };
    zuuluu['getIsSwipeToMemberListExperimentEnabled'] = report;
    zuuluu['useIsSwipeToMemberListExperimentEnabled'] = tangon;
    michal = function() { // Original name: useIsSwipeToMemberListAllowed
        tangon = _closure1_slot3;
        michal = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 1;
        entity = oscard[entity];
        zuuluu = undefined;
        report = michal.bind(zuuluu)(entity);
        entity = report.useSwipeToReplySettingValue;
        report = entity.bind(report)();
        entity = 2;
        entity = oscard[entity];
        entity = michal.bind(zuuluu)(entity);
        entity = entity.SwipeRightToLeftMode;
        entity = entity.SWIPE_RIGHT_TO_LEFT_REPLY;
        michal = 'useIsMessageSwipeActionsEnabled';
        entity = report === entity;
        entity = tangon.bind(zuuluu)(michal, entity);
        return entity;
    };
    zuuluu['useIsSwipeToMemberListAllowed'] = michal;
    return entity;
})();