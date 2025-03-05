// app/modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    oscard = argBar;
    option = argBaz;
    zuuluu = argFre;
    golfie = argPlu;
    var _closure1_slot0 = oscard;
    var _closure1_slot1 = golfie;
    michal = function(argFoo) { // Original name: getChannelRoleSubscriptionStatus
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = arguments[1];
            tangon = arguments[2];
            golfie = arguments[3];
            entity = undefined;
            if(!(zuuluu === entity)) { _fun00002_ip = 22; continue _fun00001 }
 15:
            zuuluu = _closure1_slot3;
 22:
            if(!(tangon === entity)) { _fun00002_ip = 33; continue _fun00001 }
 26:
            tangon = _closure1_slot2;
 33:
            if(!(golfie === entity)) { _fun00002_ip = 44; continue _fun00001 }
 37:
            golfie = _closure1_slot4;
 44:
            michal = zuuluu.getChannel;
            entity = argFoo;
            oscard = michal.bind(zuuluu)(entity);
            entity = null;
            if(!(entity != oscard)) { _fun00002_ip = 76; continue _fun00001 }
 63:
            michal = oscard.isRoleSubscriptionTemplatePreviewChannel;
            michal = michal.bind(oscard)();
            if(michal) { _fun00002_ip = 191; continue _fun00001 }
 76:
            if(!(entity != oscard)) { _fun00002_ip = 105; continue _fun00001 }
 80:
            zuuluu = tangon.isChannelGated;
            michal = oscard.guild_id;
            entity = oscard.id;
            entity = zuuluu.bind(tangon)(michal, entity);
            if(entity) { _fun00002_ip = 114; continue _fun00001 }
 105:
            entity = _closure1_slot6;
            _fun00002_ip = 189; continue _fun00001;
 114:
            michal = {};
            zuuluu = true;
            michal['isSubscriptionGated'] = zuuluu;
            zuuluu = oscard.isGuildVocal;
            zuuluu = zuuluu.bind(oscard)();
            report = golfie.can;
            tangon = _closure1_slot5;
            if(zuuluu) { _fun00002_ip = 166; continue _fun00001 }
 149:
            zuuluu = tangon.VIEW_CHANNEL;
            zuuluu = report.bind(golfie)(zuuluu, oscard);
            zuuluu = !zuuluu;
            _fun00002_ip = 181; continue _fun00001;
 166:
            tangon = tangon.CONNECT;
            tangon = report.bind(golfie)(tangon, oscard);
            zuuluu = !tangon;
 181:
            michal['needSubscriptionToAccess'] = zuuluu;
            entity = michal;
 189:
            _fun00002_ip = 201; continue _fun00001;
 191:
            entity = {'isSubscriptionGated': true, 'needSubscriptionToAccess': true};
 201:
            return entity;
        }
    };
    var _closure1_slot7 = michal;
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
    report = report.Permissions;
    var _closure1_slot5 = report;
    report = {'needSubscriptionToAccess': false, 'isSubscriptionGated': false};
    var _closure1_slot6 = report;
    report = 5;
    report = golfie[report];
    golfie = oscard.bind(entity)(report);
    oscard = golfie.fileFinishedImporting;
    report = 'modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx';
    report = oscard.bind(golfie)(report);
    tangon = function(argFoo) { // Original name: useChannelRoleSubscriptionStatus
        oscard = argFoo;
        var _closure2_slot0 = oscard;
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        report = report.bind(zuuluu)(tangon);
        tangon = report.useStateFromStoresObject;
        golfie = _closure1_slot3;
        zuuluu = new Array(3);
        zuuluu[0] = golfie;
        golfie = _closure1_slot2;
        zuuluu[1] = golfie;
        michal = _closure1_slot4;
        zuuluu[2] = michal;
        michal = new Array(1);
        michal[0] = oscard;
        entity = function() {
            oscard = _closure1_slot7;
            offset = _closure2_slot0;
            verify = _closure1_slot3;
            option = _closure1_slot2;
            golfie = _closure1_slot4;
            yankee = undefined;
            entity = yankee[oscard](offset, verify, option, golfie, oscard);
            return entity;
        };
        entity = tangon.bind(report)(zuuluu, entity, michal);
        return entity;
    };
    zuuluu['default'] = tangon;
    zuuluu['getChannelRoleSubscriptionStatus'] = michal;
    return entity;
})();