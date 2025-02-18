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
            zuuluu = entity.ChannelRTCStore;
            michal = entity.EmbeddedActivitiesStore;
            entity = zuuluu.getSelectedParticipant;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = michal.getSelfEmbeddedActivityForChannel;
            michal = entity.bind(michal)(tangon);
            tangon = null;
            entity = tangon != zuuluu;
            if(!entity) { _fun00002_ip = 55; continue _fun00001 }
 51:
            entity = tangon != michal;
 55:
            if(!entity) { _fun00002_ip = 108; continue _fun00001 }
 58:
            zuuluu = zuuluu.id;
            oscard = _closure1_slot0;
            report = _closure1_slot1;
            tangon = 2;
            report = report[tangon];
            tangon = undefined;
            report = oscard.bind(tangon)(report);
            tangon = report.embeddedActivityParticipantId;
            michal = michal.applicationId;
            michal = tangon.bind(report)(michal);
            entity = zuuluu === michal;
 108:
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