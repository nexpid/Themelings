// app/modules/stage_channels/LiveStageNotificationsUtils.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
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
    var _closure1_slot2 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.Permissions;
    var _closure1_slot4 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/stage_channels/LiveStageNotificationsUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: useCanSendStageStartNotification
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 3;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        michal = _closure1_slot3;
        zuuluu = new Array(1);
        zuuluu[0] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                zuuluu = _closure2_slot0;
                entity = null;
                entity = entity != zuuluu;
                if(!entity) { _fun00002_ip = 49; continue _fun00001 }
 16:
                report = _closure1_slot3;
                tangon = report.can;
                zuuluu = _closure1_slot4;
                zuuluu = zuuluu.MENTION_EVERYONE;
                michal = _closure2_slot0;
                entity = tangon.bind(report)(zuuluu, michal);
 49:
                return entity;
            }
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useCanSendStageStartNotification'] = tangon;
    michal = function(argFoo) { // Original name: useDefaultSendStartStageNotificationToggle
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            entity = argFoo;
            michal = null;
            tangon = michal == entity;
            golfie = undefined;
            option = undefined;
            if(tangon) { _fun00004_ip = 23; continue _fun00003 }
 18:
            option = entity.guild_id;
 23:
            var _closure2_slot0 = option;
            oscard = _closure1_slot0;
            verify = _closure1_slot1;
            report = 3;
            report = verify[report];
            golfie = oscard.bind(golfie)(report);
            oscard = golfie.useStateFromStores;
            tangon = _closure1_slot2;
            report = new Array(1);
            report[0] = tangon;
            tangon = new Array(1);
            tangon[0] = option;
            zuuluu = function() {
                zuuluu = _closure1_slot2;
                michal = zuuluu.getMemberCount;
                entity = _closure2_slot0;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            tangon = oscard.bind(golfie)(report, zuuluu, tangon);
            entity = michal == entity;
            if(entity) { _fun00004_ip = 114; continue _fun00003 }
 94:
            michal = michal == tangon;
            if(michal) { _fun00004_ip = 111; continue _fun00003 }
 101:
            zuuluu = 50000;
            michal = tangon > zuuluu;
 111:
            entity = !michal;
 114:
            return entity;
        }
    };
    zuuluu['useDefaultSendStartStageNotificationToggle'] = michal;
    return entity;
})();