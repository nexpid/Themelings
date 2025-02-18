// app/modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    report = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = golfie[entity];
    entity = undefined;
    michal = report.bind(entity)(michal);
    var _closure1_slot2 = michal;
    michal = 1;
    michal = golfie[michal];
    michal = oscard.bind(entity)(michal);
    michal = michal.AnalyticEvents;
    var _closure1_slot3 = michal;
    michal = {};
    report = 'store';
    michal['STORE'] = report;
    report = 'gesture';
    michal['GESTURE'] = report;
    report = 'prejoin button';
    michal['PREJOIN_BUTTON'] = report;
    report = 'connected button';
    michal['CONNECTED_BUTTON'] = report;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/voice_panel/native/controls/trackVoicePanelTabOpened.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo, argBar, argBaz) { // Original name: trackVoicePanelTabOpened
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            zuuluu = _closure1_slot2;
            entity = zuuluu.hasUnread;
            oscard = entity.bind(zuuluu)(tangon);
            if(oscard) { _fun00002_ip = 45; continue _fun00001 }
 24:
            zuuluu = _closure1_slot2;
            entity = zuuluu.getMentionCount;
            zuuluu = entity.bind(zuuluu)(tangon);
            entity = 0;
            oscard = zuuluu > entity;
 45:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 2;
            zuuluu = zuuluu[entity];
            entity = undefined;
            report = tangon.bind(entity)(zuuluu);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.VOICE_PANEL_TAB_OPENED;
            michal = {};
            golfie = argBar;
            michal['tab'] = golfie;
            golfie = argBaz;
            michal['source'] = golfie;
            michal['is_chat_badged'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['default'] = tangon;
    zuuluu['VoicePanelTabAnalyticsSources'] = michal;
    return entity;
})();