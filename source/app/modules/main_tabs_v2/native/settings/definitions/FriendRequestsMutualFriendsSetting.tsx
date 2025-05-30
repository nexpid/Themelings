// app/modules/main_tabs_v2/native/settings/definitions/FriendRequestsMutualFriendsSetting.tsx
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
    michal = michal.FriendSourceFlags;
    var _closure1_slot4 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot2;
        entity = 7;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.IqlCSk;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useFriendRequestsMutualFriendsSettingValue
        report = _closure1_slot0;
        tangon = _closure1_slot2;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        zuuluu = report.bind(zuuluu)(tangon);
        tangon = zuuluu.FriendSourceFlagsSetting;
        zuuluu = tangon.useSetting;
        report = zuuluu.bind(tangon)();
        var _closure2_slot0 = report;
        tangon = _closure1_slot3;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
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
        entity = zuuluu.bind(tangon)(entity, michal);
        entity = entity.mutualFriends;
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onFriendRequestsMutualFriendsSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 4;
            oscard = tangon[michal];
            entity = undefined;
            oscard = zuuluu.bind(entity)(oscard);
            golfie = oscard.FriendSourceFlagsSetting;
            oscard = golfie.getSetting;
            option = oscard.bind(golfie)();
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            tangon = michal.FriendSourceFlagsSetting;
            zuuluu = tangon.updateSetting;
            oscard = _closure1_slot1;
            golfie = _closure1_slot2;
            michal = 6;
            michal = golfie[michal];
            golfie = oscard.bind(entity)(michal);
            michal = argFoo;
            if(michal) { _fun00002_ip = 119; continue _fun00001 }
 88:
            verify = golfie.removeFlags;
            michal = _closure1_slot4;
            oscard = michal.MUTUAL_FRIENDS;
            michal = michal.NO_RELATION;
            michal = verify.bind(golfie)(option, oscard, michal);
            _fun00002_ip = 141; continue _fun00001;
 119:
            oscard = golfie.addFlag;
            report = _closure1_slot4;
            report = report.MUTUAL_FRIENDS;
            michal = oscard.bind(golfie)(option, report);
 141:
            michal = zuuluu.bind(tangon)(michal);
            return entity;
        }
    };
    michal['onValueChange'] = tangon;
    tangon = 8;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/FriendRequestsMutualFriendsSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();