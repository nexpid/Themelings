// app/modules/threads/ThreadNotificationSettings.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    tangon = function(argFoo) { // Original name: computeThreadNotificationSetting
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            report = _closure1_slot4;
            tangon = report.flags;
            michal = zuuluu.id;
            golfie = tangon.bind(report)(michal);
            michal = null;
            if(!(michal != golfie)) { _fun00002_ip = 366; continue _fun00001 }
 34:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            option = 5;
            tangon = tangon[option];
            oscard = undefined;
            verify = report.bind(oscard)(tangon);
            report = verify.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.ALL_MESSAGES;
            tangon = report.bind(verify)(golfie, tangon);
            if(tangon) { _fun00002_ip = 354; continue _fun00001 }
 84:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            verify = report.bind(oscard)(tangon);
            report = verify.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.ONLY_MENTIONS;
            tangon = report.bind(verify)(golfie, tangon);
            if(tangon) { _fun00002_ip = 342; continue _fun00001 }
 129:
            report = _closure1_slot0;
            tangon = _closure1_slot1;
            tangon = tangon[option];
            oscard = report.bind(oscard)(tangon);
            report = oscard.hasFlag;
            tangon = _closure1_slot5;
            tangon = tangon.NO_MESSAGES;
            tangon = report.bind(oscard)(golfie, tangon);
            if(tangon) { _fun00002_ip = 330; continue _fun00001 }
 174:
            report = _closure1_slot2;
            tangon = report.getChannel;
            zuuluu = zuuluu.parent_id;
            tangon = tangon.bind(report)(zuuluu);
            if(!(michal != tangon)) { _fun00002_ip = 318; continue _fun00001 }
 198:
            oscard = _closure1_slot3;
            report = oscard.isGuildOrCategoryOrChannelMuted;
            zuuluu = tangon.guild_id;
            michal = tangon.id;
            michal = report.bind(oscard)(zuuluu, michal);
            if(michal) { _fun00002_ip = 306; continue _fun00001 }
 227:
            zuuluu = _closure1_slot3;
            michal = zuuluu.resolvedMessageNotifications;
            zuuluu = michal.bind(zuuluu)(tangon);
            michal = _closure1_slot6;
            michal = michal.NO_MESSAGES;
            if(!(zuuluu !== michal)) { _fun00002_ip = 294; continue _fun00001 }
 256:
            michal = _closure1_slot6;
            michal = michal.ONLY_MENTIONS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 282; continue _fun00001 }
 270:
            michal = _closure1_slot5;
            michal = michal.ALL_MESSAGES;
            _fun00002_ip = 292; continue _fun00001;
 282:
            zuuluu = _closure1_slot5;
            michal = zuuluu.ONLY_MENTIONS;
 292:
            _fun00002_ip = 304; continue _fun00001;
 294:
            zuuluu = _closure1_slot5;
            michal = zuuluu.NO_MESSAGES;
 304:
            return michal;
 306:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 318:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 330:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 342:
            michal = _closure1_slot5;
            michal = michal.ONLY_MENTIONS;
            return michal;
 354:
            michal = _closure1_slot5;
            michal = michal.ALL_MESSAGES;
            return michal;
 366:
            entity = _closure1_slot5;
            entity = entity.NO_MESSAGES;
            return entity;
        }
    };
    var _closure1_slot7 = tangon;
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
    report = 2;
    report = golfie[report];
    report = option.bind(entity)(report);
    var _closure1_slot4 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ThreadMemberFlags;
    var _closure1_slot5 = report;
    report = 4;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.UserNotificationSettings;
    var _closure1_slot6 = report;
    report = 7;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/threads/ThreadNotificationSettings.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['computeThreadNotificationSetting'] = tangon;
    michal = function(argFoo) { // Original name: useThreadNotificationSetting
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 6;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStores;
        golfie = _closure1_slot4;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot3;
        zuuluu[1] = golfie;
        michal = _closure1_slot2;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            zuuluu = _closure1_slot7;
            michal = _closure2_slot0;
            entity = undefined;
            entity = zuuluu.bind(entity)(michal);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['useThreadNotificationSetting'] = michal;
    return entity;
})();