// app/modules/main_tabs_v2/native/settings/definitions/SendFriendRequestsSetting.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    golfie = argCor;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, michal);
    entity = 0;
    michal = oscard[entity];
    entity = undefined;
    michal = golfie.bind(entity)(michal);
    var _closure1_slot3 = michal;
    michal = 1;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    golfie = michal.MobileSetting;
    michal = 2;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    option = michal.RendererType;
    michal = 3;
    michal = oscard[michal];
    michal = report.bind(entity)(michal);
    verify = michal.AllFriendSourceFlags;
    var _closure1_slot4 = verify;
    michal = michal.FriendSourceFlags;
    var _closure1_slot5 = michal;
    michal = {};
    option = option.CHECKBOX;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.XlGG9f;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    tangon = function() { // Original name: useSendFriendRequestsSettingOptions
        verify = _closure1_slot0;
        offset = _closure1_slot2;
        entity = 4;
        entity = offset[entity];
        option = undefined;
        entity = verify.bind(option)(entity);
        tangon = entity.FriendSourceFlagsSetting;
        entity = tangon.useSetting;
        entity = entity.bind(tangon)();
        var _closure2_slot0 = entity;
        report = _closure1_slot3;
        tangon = report.useMemo;
        michal = new Array(1);
        michal[0] = entity;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot2;
            entity = 5;
            michal = michal[entity];
            entity = undefined;
            zuuluu = zuuluu.bind(entity)(michal);
            michal = zuuluu.computeFlags;
            entity = _closure2_slot0;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        tangon = tangon.bind(report)(entity, michal);
        michal = {};
        report = 6;
        entity = offset[report];
        entity = verify.bind(option)(entity);
        golfie = entity.intl;
        oscard = golfie.string;
        entity = offset[report];
        entity = verify.bind(option)(entity);
        entity = entity.t;
        entity = entity.mGr3CQ;
        entity = oscard.bind(golfie)(entity);
        michal['label'] = entity;
        entity = tangon.all;
        michal['checked'] = entity;
        entity = function(argFoo) { // Original name: onPress
            _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                zuuluu = zuuluu[entity];
                entity = undefined;
                zuuluu = tangon.bind(entity)(zuuluu);
                tangon = zuuluu.FriendSourceFlagsSetting;
                zuuluu = tangon.updateSetting;
                report = _closure1_slot4;
                oscard = argFoo;
                if(oscard) { _fun00002_ip = 66; continue _fun00001 }
 47:
                michal = _closure1_slot5;
                michal = michal.NO_RELATION;
                michal = ~michal;
                michal = report & michal;
                _fun00002_ip = 69; continue _fun00001;
 66:
                michal = report;
 69:
                michal = zuuluu.bind(tangon)(michal);
                return entity;
            }
        };
        michal['onPress'] = entity;
        entity = new Array(3);
        entity[0] = michal;
        michal = {};
        oscard = offset[report];
        oscard = verify.bind(option)(oscard);
        yankee = oscard.intl;
        golfie = yankee.string;
        oscard = offset[report];
        oscard = verify.bind(option)(oscard);
        oscard = oscard.t;
        oscard = oscard.IqlCSk;
        oscard = golfie.bind(yankee)(oscard);
        michal['label'] = oscard;
        oscard = tangon.mutualFriends;
        michal['checked'] = oscard;
        oscard = function(argFoo) { // Original name: onPress
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                entity = zuuluu[entity];
                oscard = undefined;
                entity = michal.bind(oscard)(entity);
                zuuluu = entity.FriendSourceFlagsSetting;
                michal = zuuluu.updateSetting;
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 7;
                entity = golfie[entity];
                golfie = report.bind(oscard)(entity);
                entity = argFoo;
                if(entity) { _fun00004_ip = 101; continue _fun00003 }
 63:
                option = golfie.removeFlags;
                oscard = _closure2_slot0;
                entity = _closure1_slot5;
                report = entity.MUTUAL_FRIENDS;
                entity = entity.NO_RELATION;
                entity = option.bind(golfie)(oscard, report, entity);
                _fun00004_ip = 130; continue _fun00003;
 101:
                oscard = golfie.addFlag;
                report = _closure2_slot0;
                tangon = _closure1_slot5;
                tangon = tangon.MUTUAL_FRIENDS;
                entity = oscard.bind(golfie)(report, tangon);
 130:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        michal['onPress'] = oscard;
        entity[1] = michal;
        michal = {};
        oscard = offset[report];
        oscard = verify.bind(option)(oscard);
        golfie = oscard.intl;
        oscard = golfie.string;
        report = offset[report];
        report = verify.bind(option)(report);
        report = report.t;
        report = report.mozb8f;
        report = oscard.bind(golfie)(report);
        michal['label'] = report;
        tangon = tangon.mutualGuilds;
        michal['checked'] = tangon;
        zuuluu = function(argFoo) { // Original name: onPress
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = _closure1_slot0;
                zuuluu = _closure1_slot2;
                entity = 4;
                entity = zuuluu[entity];
                oscard = undefined;
                entity = michal.bind(oscard)(entity);
                zuuluu = entity.FriendSourceFlagsSetting;
                michal = zuuluu.updateSetting;
                report = _closure1_slot1;
                golfie = _closure1_slot2;
                entity = 7;
                entity = golfie[entity];
                golfie = report.bind(oscard)(entity);
                entity = argFoo;
                if(entity) { _fun00006_ip = 101; continue _fun00005 }
 63:
                option = golfie.removeFlags;
                oscard = _closure2_slot0;
                entity = _closure1_slot5;
                report = entity.MUTUAL_GUILDS;
                entity = entity.NO_RELATION;
                entity = option.bind(golfie)(oscard, report, entity);
                _fun00006_ip = 130; continue _fun00005;
 101:
                oscard = golfie.addFlag;
                report = _closure2_slot0;
                tangon = _closure1_slot5;
                tangon = tangon.MUTUAL_GUILDS;
                entity = oscard.bind(golfie)(report, tangon);
 130:
                entity = michal.bind(zuuluu)(entity);
                return entity;
            }
        };
        michal['onPress'] = zuuluu;
        entity[2] = michal;
        return entity;
    };
    michal['useOptions'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/SendFriendRequestsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    zuuluu['SafetySendFriendRequestsSetting'] = michal;
    return entity;
})();