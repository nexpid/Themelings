// app/modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListExperiment.tsx
export default (function(_, argBar, __, ___, ____, argFre, argPlu) {
    golfie = argBar;
    zuuluu = argFre;
    option = argPlu;
    var _closure1_slot0 = golfie;
    var _closure1_slot1 = option;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    entity = 0;
    tangon = option[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    offset = tangon.CommonTriggerPoints;
    tangon = 1;
    report = option[tangon];
    verify = golfie.bind(entity)(report);
    oscard = verify.createExperiment;
    report = {'kind': 'user', 'id': '2024-12_swipe_to_view_memberlist', 'label': 'Swipe to view member list'};
    yankee = {};
    yankee['defaultValue'] = entity;
    report['defaultConfig'] = yankee;
    yankee = offset.CONNECTION_OPEN_MOBILE;
    report['commonTriggerPoint'] = yankee;
    foxtra = {'id': 1, 'label': 'Swipe to view member list is default'};
    yankee = {};
    romeon = 2;
    backup = option[romeon];
    backup = golfie.bind(entity)(backup);
    backup = backup.SwipeRightToLeftMode;
    backup = backup.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
    yankee['defaultValue'] = backup;
    foxtra['config'] = yankee;
    yankee = new Array(1);
    yankee[0] = foxtra;
    report['treatments'] = yankee;
    report = oscard.bind(verify)(report);
    var _closure1_slot2 = report;
    tangon = option[tangon];
    verify = golfie.bind(entity)(tangon);
    oscard = verify.createExperiment;
    tangon = {'kind': 'user', 'id': '2025-04_swipe_to_view_memberlist_2', 'label': 'Swipe to view member list 2'};
    yankee = {};
    yankee['defaultValue'] = entity;
    tangon['defaultConfig'] = yankee;
    offset = offset.CONNECTION_OPEN_MOBILE;
    tangon['commonTriggerPoint'] = offset;
    yankee = {'id': 1, 'label': 'Swipe to view member list is default'};
    offset = {};
    romeon = option[romeon];
    romeon = golfie.bind(entity)(romeon);
    romeon = romeon.SwipeRightToLeftMode;
    romeon = romeon.SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS;
    offset['defaultValue'] = romeon;
    yankee['config'] = offset;
    offset = new Array(1);
    offset[0] = yankee;
    tangon['treatments'] = offset;
    tangon = oscard.bind(verify)(tangon);
    var _closure1_slot3 = tangon;
    oscard = 3;
    oscard = option[oscard];
    option = golfie.bind(entity)(oscard);
    golfie = option.fileFinishedImporting;
    oscard = 'modules/main_tabs_v2/native/sidebar/member_list/SwipeToMemberListExperiment.tsx';
    oscard = golfie.bind(option)(oscard);
    zuuluu['SwipeToMemberListExperiment'] = report;
    zuuluu['SwipeToMemberList2Experiment'] = tangon;
    tangon = function() { // Original name: useSwipeActionDefaultValue
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.useExperiment;
            entity = {};
            oscard = 'hook';
            entity['location'] = oscard;
            entity = zuuluu.bind(tangon)(entity);
            tangon = entity.defaultValue;
            report = _closure1_slot3;
            zuuluu = report.useExperiment;
            entity = {};
            entity['location'] = oscard;
            entity = zuuluu.bind(report)(entity);
            entity = entity.defaultValue;
            zuuluu = null;
            if(!(zuuluu != tangon)) { _fun00002_ip = 70; continue _fun00001 }
 67:
            entity = tangon;
 70:
            if(!(zuuluu == entity)) { _fun00002_ip = 108; continue _fun00001 }
 74:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.SwipeRightToLeftMode;
            entity = michal.SWIPE_RIGHT_TO_LEFT_REPLY;
 108:
            return entity;
        }
    };
    zuuluu['useSwipeActionDefaultValue'] = tangon;
    michal = function() { // Original name: getSwipeActionDefaultValue
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            tangon = _closure1_slot2;
            zuuluu = tangon.getCurrentConfig;
            entity = {};
            golfie = 'getter';
            entity['location'] = golfie;
            entity = zuuluu.bind(tangon)(entity);
            entity = entity.defaultValue;
            zuuluu = null;
            if(!(zuuluu == entity)) { _fun00004_ip = 67; continue _fun00003 }
 40:
            oscard = _closure1_slot3;
            report = oscard.getCurrentConfig;
            tangon = {};
            tangon['location'] = golfie;
            tangon = report.bind(oscard)(tangon);
            entity = tangon.defaultValue;
 67:
            if(!(zuuluu == entity)) { _fun00004_ip = 105; continue _fun00003 }
 71:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            michal = 2;
            zuuluu = zuuluu[michal];
            michal = undefined;
            michal = tangon.bind(michal)(zuuluu);
            michal = michal.SwipeRightToLeftMode;
            entity = michal.SWIPE_RIGHT_TO_LEFT_REPLY;
 105:
            return entity;
        }
    };
    zuuluu['getSwipeActionDefaultValue'] = michal;
    return entity;
})();