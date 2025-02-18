// app/modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx
export default (function(argFoo, argBar, argBaz, argCor, _, argFre, argPlu) {
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
    golfie = oscard[tangon];
    tangon = argCor;
    tangon = tangon.bind(entity)(golfie);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING;
    var _closure1_slot5 = tangon;
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/notifications/settings_unread_notice/utils/useUnreadSettingNotice.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: useUnreadSettingNotice
        zuuluu = argFoo;
        var _closure2_slot0 = zuuluu;
        golfie = _closure1_slot0;
        yankee = _closure1_slot2;
        tangon = 3;
        tangon = yankee[tangon];
        offset = undefined;
        oscard = golfie.bind(offset)(tangon);
        report = oscard.useShouldUseNewNotificationSystem;
        tangon = 'useShouldRenderBanner';
        option = report.bind(oscard)(tangon);
        var _closure2_slot1 = option;
        oscard = _closure1_slot4;
        report = oscard.useState;
        tangon = '';
        verify = report.bind(oscard)(tangon);
        report = _closure1_slot3;
        tangon = 2;
        verify = report.bind(offset)(verify, tangon);
        tangon = 0;
        tangon = verify[tangon];
        var _closure2_slot2 = tangon;
        report = 1;
        report = verify[report];
        var _closure2_slot3 = report;
        romeon = oscard.useEffect;
        report = zuuluu.id;
        verify = new Array(1);
        verify[0] = report;
        report = function() {
            zuuluu = _closure2_slot3;
            entity = undefined;
            michal = '';
            michal = zuuluu.bind(entity)(michal);
            return entity;
        };
        report = romeon.bind(oscard)(report, verify);
        report = 4;
        report = yankee[report];
        verify = golfie.bind(offset)(report);
        golfie = verify.useStateFromStores;
        report = _closure1_slot1;
        michal = 5;
        michal = yankee[michal];
        michal = report.bind(offset)(michal);
        report = new Array(1);
        report[0] = michal;
        michal = function() {
            zuuluu = _closure1_slot1;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.getLastActionTime;
            entity = _closure2_slot0;
            entity = entity.id;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        michal = golfie.bind(verify)(report, michal);
        golfie = oscard.useEffect;
        report = new Array(4);
        report[0] = tangon;
        report[1] = option;
        report[2] = michal;
        report[3] = zuuluu;
        michal = function() {
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                report = _closure1_slot5;
                tangon = report.has;
                michal = _closure2_slot0;
                michal = michal.type;
                michal = tangon.bind(report)(michal);
                if(!michal) { _fun00002_ip = 49; continue _fun00001 }
 32:
                report = _closure2_slot2;
                tangon = _closure2_slot0;
                tangon = tangon.id;
                michal = report !== tangon;
 49:
                if(!michal) { _fun00002_ip = 56; continue _fun00001 }
 52:
                michal = _closure2_slot1;
 56:
                if(!michal) { _fun00002_ip = 103; continue _fun00001 }
 59:
                report = _closure1_slot1;
                tangon = _closure1_slot2;
                zuuluu = 5;
                tangon = tangon[zuuluu];
                zuuluu = undefined;
                report = report.bind(zuuluu)(tangon);
                tangon = report.maybeAutoUpgradeChannel;
                zuuluu = _closure2_slot0;
                zuuluu = zuuluu.id;
                michal = tangon.bind(report)(zuuluu);
 103:
                if(!michal) { _fun00002_ip = 126; continue _fun00001 }
 106:
                zuuluu = _closure2_slot3;
                entity = _closure2_slot0;
                michal = entity.id;
                entity = undefined;
                entity = zuuluu.bind(entity)(michal);
 126:
                entity = undefined;
                return entity;
            }
        };
        michal = golfie.bind(oscard)(michal, report);
        report = oscard.useCallback;
        michal = function() {
            zuuluu = _closure2_slot3;
            michal = undefined;
            entity = '';
            entity = zuuluu.bind(michal)(entity);
            return entity;
        };
        entity = new Array(0);
        michal = report.bind(oscard)(michal, entity);
        entity = {};
        zuuluu = zuuluu.id;
        zuuluu = tangon === zuuluu;
        entity['showUnreadsNotice'] = zuuluu;
        entity['clearUnreadsNotice'] = michal;
        return entity;
    };
    zuuluu['default'] = michal;
    return entity;
})();