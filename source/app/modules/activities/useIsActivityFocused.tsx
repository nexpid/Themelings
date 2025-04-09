// app/modules/activities/useIsActivityFocused.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: isActivityFocused
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = argFoo;
            tangon = entity.channelId;
            michal = entity.ChannelRTCStore;
            zuuluu = entity.EmbeddedActivitiesStore;
            entity = michal.getSelectedParticipant;
            michal = entity.bind(michal)(tangon);
            entity = zuuluu.getCurrentEmbeddedActivity;
            golfie = entity.bind(zuuluu)();
            option = null;
            entity = option != michal;
            if(!entity) { _fun00002_ip = 54; continue _fun00001 }
 50:
            entity = option != golfie;
 54:
            if(!entity) { _fun00002_ip = 131; continue _fun00001 }
 57:
            zuuluu = michal.id;
            tangon = _closure1_slot0;
            report = _closure1_slot1;
            michal = 2;
            michal = report[michal];
            oscard = undefined;
            report = tangon.bind(oscard)(michal);
            tangon = report.getEmbeddedActivityParticipantId;
            michal = {};
            verify = golfie.applicationId;
            michal['applicationId'] = verify;
            option = option == golfie;
            if(option) { _fun00002_ip = 117; continue _fun00001 }
 111:
            oscard = golfie.compositeInstanceId;
 117:
            michal['instanceId'] = oscard;
            michal = tangon.bind(report)(michal);
            entity = zuuluu === michal;
 131:
            return entity;
        }
    };
    var _closure1_slot4 = michal;
    entity = global;
    offset = entity.Object;
    verify = offset.defineProperty;
    report = {};
    entity = true;
    report['value'] = entity;
    entity = '__esModule';
    entity = verify.bind(offset)(zuuluu, entity, report);
    entity = 0;
    report = golfie[entity];
    entity = undefined;
    report = option.bind(entity)(report);
    var _closure1_slot2 = report;
    report = 1;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot3 = report;
    report = 4;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/activities/useIsActivityFocused.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useIsActivityFocused
        michal = argFoo;
        var _closure2_slot0 = michal;
        tangon = _closure1_slot0;
        zuuluu = _closure1_slot1;
        michal = 3;
        zuuluu = zuuluu[michal];
        michal = undefined;
        tangon = tangon.bind(michal)(zuuluu);
        zuuluu = tangon.useStateFromStores;
        oscard = _closure1_slot2;
        michal = new Array(2);
        michal[0] = oscard;
        report = _closure1_slot3;
        michal[1] = report;
        entity = function() {
            zuuluu = _closure1_slot4;
            michal = {};
            tangon = _closure2_slot0;
            michal['channelId'] = tangon;
            tangon = _closure1_slot2;
            michal['ChannelRTCStore'] = tangon;
            entity = _closure1_slot3;
            michal['EmbeddedActivitiesStore'] = entity;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['isActivityFocused'] = michal;
    return entity;
})();