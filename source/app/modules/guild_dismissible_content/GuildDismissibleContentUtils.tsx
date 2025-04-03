// app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = option;
    var _closure1_slot2 = golfie;
    tangon = function(argFoo, argBar) { // Original name: isContentDismissed
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot3;
            zuuluu = tangon.getDismissedGuildContent;
            entity = argBar;
            report = zuuluu.bind(tangon)(entity);
            entity = null;
            entity = entity != report;
            if(!entity) { _fun00002_ip = 67; continue _fun00001 }
 30:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            michal = 4;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.hasBit;
            michal = argFoo;
            entity = zuuluu.bind(tangon)(report, michal);
 67:
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
    var _closure1_slot3 = report;
    report = 1;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.AnalyticEvents;
    var _closure1_slot4 = report;
    report = 2;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.ContentDismissActionType;
    var _closure1_slot5 = report;
    report = 3;
    report = golfie[report];
    report = oscard.bind(entity)(report);
    report = report.UserSettingsDelay;
    var _closure1_slot6 = report;
    report = 9;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['isContentDismissed'] = tangon;
    tangon = function(argFoo, argBar) { // Original name: useIsContentDismissed
        michal = argFoo;
        var _closure2_slot0 = michal;
        michal = argBar;
        var _closure2_slot1 = michal;
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 5;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        tangon = report.bind(zuuluu)(tangon);
        zuuluu = tangon.useStateFromStores;
        report = _closure1_slot3;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            tangon = _closure1_slot7;
            zuuluu = _closure2_slot0;
            michal = _closure2_slot1;
            entity = undefined;
            entity = tangon.bind(entity)(zuuluu, michal);
            return entity;
        };
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    zuuluu['useIsContentDismissed'] = tangon;
    michal = function(argFoo, argBar, argBaz, argCor) { // Original name: markContentAsDismissed
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            offset = argFoo;
            option = argBar;
            oscard = argCor;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = option;
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot2;
            entity = 6;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.updateUserGuildSettings;
            zuuluu = _closure1_slot6;
            zuuluu = zuuluu.INFREQUENT_USER_ACTION;
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = _closure1_slot7;
                    oscard = _closure2_slot0;
                    report = _closure2_slot1;
                    entity = undefined;
                    report = golfie.bind(entity)(oscard, report);
                    if(report) { _fun00006_ip = 82; continue _fun00005 }
 32:
                    report = _closure1_slot0;
                    oscard = _closure1_slot2;
                    tangon = 4;
                    tangon = oscard[tangon];
                    oscard = report.bind(entity)(tangon);
                    report = oscard.addBit;
                    tangon = zuuluu.dismissedGuildContent;
                    michal = _closure2_slot0;
                    michal = report.bind(oscard)(tangon, michal);
                    zuuluu['dismissedGuildContent'] = michal;
                    return entity;
 82:
                    entity = false;
                    return entity;
                }
            };
            michal = tangon.bind(report)(option, michal, zuuluu);
            michal = argBaz;
            if(!michal) { _fun00004_ip = 177; continue _fun00003 }
 80:
            zuuluu = _closure1_slot1;
            romeon = _closure1_slot2;
            michal = 7;
            michal = romeon[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot4;
            zuuluu = michal.DISMISSIBLE_CONTENT_DISMISSED;
            michal = {};
            yankee = _closure1_slot0;
            verify = 8;
            verify = romeon[verify];
            verify = yankee.bind(entity)(verify);
            verify = verify.DismissibleGuildContent;
            verify = verify[offset];
            michal['type'] = verify;
            michal['guild_id'] = option;
            option = null;
            if(!(option == oscard)) { _fun00004_ip = 167; continue _fun00003 }
 157:
            golfie = _closure1_slot5;
            oscard = golfie.UNKNOWN;
 167:
            michal['action'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 177:
            return entity;
        }
    };
    zuuluu['markContentAsDismissed'] = michal;
    return entity;
})();