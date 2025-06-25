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
            report = arguments[1];
            tangon = arguments[2];
            oscard = arguments[3];
            option = undefined;
            if(!(report === option)) { _fun00002_ip = 25; continue _fun00001 }
 18:
            report = _closure1_slot4;
 25:
            if(!(tangon === option)) { _fun00002_ip = 36; continue _fun00001 }
 29:
            tangon = _closure1_slot3;
 36:
            if(!(oscard === option)) { _fun00002_ip = 47; continue _fun00001 }
 40:
            oscard = _closure1_slot2;
 47:
            michal = report.flags;
            entity = zuuluu.id;
            verify = michal.bind(report)(entity);
            michal = null;
            if(!(michal != verify)) { _fun00002_ip = 392; continue _fun00001 }
 71:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            offset = 5;
            report = report[offset];
            yankee = golfie.bind(option)(report);
            golfie = yankee.hasFlag;
            report = _closure1_slot5;
            report = report.ALL_MESSAGES;
            report = golfie.bind(yankee)(verify, report);
            if(report) { _fun00002_ip = 380; continue _fun00001 }
 122:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            report = report[offset];
            yankee = golfie.bind(option)(report);
            golfie = yankee.hasFlag;
            report = _closure1_slot5;
            report = report.ONLY_MENTIONS;
            report = golfie.bind(yankee)(verify, report);
            if(report) { _fun00002_ip = 368; continue _fun00001 }
 167:
            golfie = _closure1_slot0;
            report = _closure1_slot1;
            report = report[offset];
            option = golfie.bind(option)(report);
            golfie = option.hasFlag;
            report = _closure1_slot5;
            report = report.NO_MESSAGES;
            report = golfie.bind(option)(verify, report);
            if(report) { _fun00002_ip = 356; continue _fun00001 }
 212:
            report = oscard.getChannel;
            zuuluu = zuuluu.parent_id;
            zuuluu = report.bind(oscard)(zuuluu);
            if(!(michal != zuuluu)) { _fun00002_ip = 344; continue _fun00001 }
 232:
            oscard = tangon.isGuildOrCategoryOrChannelMuted;
            report = zuuluu.guild_id;
            michal = zuuluu.id;
            michal = oscard.bind(tangon)(report, michal);
            if(michal) { _fun00002_ip = 332; continue _fun00001 }
 257:
            michal = tangon.resolvedMessageNotifications;
            zuuluu = michal.bind(tangon)(zuuluu);
            michal = _closure1_slot6;
            michal = michal.NO_MESSAGES;
            if(!(zuuluu !== michal)) { _fun00002_ip = 320; continue _fun00001 }
 282:
            michal = _closure1_slot6;
            michal = michal.ONLY_MENTIONS;
            if(!(zuuluu !== michal)) { _fun00002_ip = 308; continue _fun00001 }
 296:
            michal = _closure1_slot5;
            michal = michal.ALL_MESSAGES;
            _fun00002_ip = 318; continue _fun00001;
 308:
            zuuluu = _closure1_slot5;
            michal = zuuluu.ONLY_MENTIONS;
 318:
            _fun00002_ip = 330; continue _fun00001;
 320:
            zuuluu = _closure1_slot5;
            michal = zuuluu.NO_MESSAGES;
 330:
            return michal;
 332:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 344:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 356:
            michal = _closure1_slot5;
            michal = michal.NO_MESSAGES;
            return michal;
 368:
            michal = _closure1_slot5;
            michal = michal.ONLY_MENTIONS;
            return michal;
 380:
            entity = _closure1_slot5;
            entity = entity.ALL_MESSAGES;
            return entity;
 392:
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