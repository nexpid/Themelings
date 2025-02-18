// app/modules/auth/LoginHandoffSource.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    oscard = argBar;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    entity = global;
    option = entity.Object;
    report = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = golfie[entity];
    entity = undefined;
    tangon = oscard.bind(entity)(tangon);
    report = tangon.Routes;
    var _closure1_slot2 = report;
    tangon = tangon.UserSettingsSections;
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = golfie[tangon];
    tangon = oscard.bind(entity)(tangon);
    tangon = tangon.StaticChannelRoute;
    var _closure1_slot4 = tangon;
    tangon = {};
    report = 'role_subscription';
    tangon['ROLE_SUBSCRIPTION'] = report;
    report = 'role_subscription_setting';
    tangon['ROLE_SUBSCRIPTION_SETTING'] = report;
    var _closure1_slot5 = tangon;
    report = 3;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/auth/LoginHandoffSource.tsx';
    report = oscard.bind(golfie)(report);
    zuuluu['LoginHandoffSource'] = tangon;
    michal = function(argFoo) { // Original name: getLoginHandoffSourceFromRedirectTo
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            entity = global;
            zuuluu = entity.decodeURIComponent;
            entity = undefined;
            michal = argFoo;
            tangon = zuuluu.bind(entity)(michal);
            report = _closure1_slot0;
            oscard = _closure1_slot1;
            zuuluu = 2;
            zuuluu = oscard[zuuluu];
            report = report.bind(entity)(zuuluu);
            zuuluu = report.tryParseChannelPath;
            zuuluu = zuuluu.bind(report)(tangon);
            report = null;
            if(!(report != zuuluu)) { _fun00002_ip = 77; continue _fun00001 }
 58:
            report = zuuluu.channelId;
            zuuluu = _closure1_slot4;
            zuuluu = zuuluu.ROLE_SUBSCRIPTIONS;
            if(!(report !== zuuluu)) { _fun00002_ip = 127; continue _fun00001 }
 77:
            golfie = _closure1_slot2;
            oscard = golfie.SETTINGS;
            zuuluu = _closure1_slot3;
            report = zuuluu.SUBSCRIPTIONS;
            zuuluu = 'role-subscriptions';
            zuuluu = oscard.bind(golfie)(report, zuuluu);
            entity = undefined;
            if(!(tangon === zuuluu)) { _fun00002_ip = 125; continue _fun00001 }
 115:
            zuuluu = _closure1_slot5;
            entity = zuuluu.ROLE_SUBSCRIPTION_SETTING;
 125:
            _fun00002_ip = 137; continue _fun00001;
 127:
            michal = _closure1_slot5;
            entity = michal.ROLE_SUBSCRIPTION;
 137:
            return entity;
        }
    };
    zuuluu['getLoginHandoffSourceFromRedirectTo'] = michal;
    return entity;
})();