// app/modules/guild_dismissible_content/GuildDismissibleContentUtils.tsx
export default (function(argFoo, argBar, argBaz, argCor, argGra, argFre, argPlu) {
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
    entity = function(argFoo, argBar, argBaz, argCor, argGra) { // Original name: toggleContentSeen
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            zuuluu = argFoo;
            offset = argBar;
            option = argBaz;
            oscard = argGra;
            var _closure2_slot0 = zuuluu;
            var _closure2_slot1 = offset;
            var _closure2_slot2 = option;
            report = _closure1_slot0;
            tangon = _closure1_slot2;
            entity = 6;
            tangon = tangon[entity];
            entity = undefined;
            report = report.bind(entity)(tangon);
            tangon = report.updateUserGuildSettings;
            verify = _closure1_slot6;
            if(zuuluu) { _fun00004_ip = 72; continue _fun00003 }
 64:
            zuuluu = verify.FREQUENT_USER_ACTION;
            _fun00004_ip = 78; continue _fun00003;
 72:
            zuuluu = verify.INFREQUENT_USER_ACTION;
 78:
            michal = function(argFoo) {
                _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                    zuuluu = argFoo;
                    golfie = _closure1_slot7;
                    oscard = _closure2_slot1;
                    report = _closure2_slot2;
                    entity = undefined;
                    report = golfie.bind(entity)(oscard, report);
                    oscard = _closure2_slot0;
                    if(!oscard) { _fun00006_ip = 39; continue _fun00005 }
 36:
                    if(report) { _fun00006_ip = 114; continue _fun00005 }
 39:
                    oscard = _closure2_slot0;
                    if(oscard) { _fun00006_ip = 49; continue _fun00005 }
 46:
                    if(!report) { _fun00006_ip = 114; continue _fun00005 }
 49:
                    report = _closure2_slot0;
                    oscard = _closure1_slot0;
                    golfie = _closure1_slot2;
                    tangon = 4;
                    tangon = golfie[tangon];
                    tangon = oscard.bind(entity)(tangon);
                    if(report) { _fun00006_ip = 84; continue _fun00005 }
 76:
                    report = tangon.removeBit;
                    _fun00006_ip = 90; continue _fun00005;
 84:
                    report = tangon.addBit;
 90:
                    tangon = zuuluu.dismissedGuildContent;
                    michal = _closure2_slot1;
                    michal = report.bind(entity)(tangon, michal);
                    zuuluu['dismissedGuildContent'] = michal;
                    return entity;
 114:
                    entity = false;
                    return entity;
                }
            };
            michal = tangon.bind(report)(option, michal, zuuluu);
            michal = argCor;
            if(!michal) { _fun00004_ip = 195; continue _fun00003 }
 98:
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
            if(!(option == oscard)) { _fun00004_ip = 185; continue _fun00003 }
 175:
            golfie = _closure1_slot5;
            oscard = golfie.UNKNOWN;
 185:
            michal['action'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
 195:
            return entity;
        }
    };
    var _closure1_slot8 = entity;
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
    tangon = function(argFoo, argBar, argBaz, argCor) { // Original name: markContentAsDismissed
        golfie = _closure1_slot8;
        entity = undefined;
        romeon = true;
        yankee = argFoo;
        offset = argBar;
        verify = argBaz;
        option = argCor;
        foxtra = undefined;
        michal = foxtra[golfie](romeon, yankee, offset, verify, option, golfie);
        return entity;
    };
    zuuluu['markContentAsDismissed'] = tangon;
    michal = function(argFoo, argBar) { // Original name: unmarkContentAsDismissed
        report = _closure1_slot8;
        entity = undefined;
        tangon = false;
        zuuluu = argFoo;
        michal = argBar;
        michal = report.bind(entity)(tangon, zuuluu, michal);
        return entity;
    };
    zuuluu['unmarkContentAsDismissed'] = michal;
    return entity;
})();