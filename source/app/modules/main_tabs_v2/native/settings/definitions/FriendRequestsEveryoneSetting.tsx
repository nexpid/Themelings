// app/modules/main_tabs_v2/native/settings/definitions/FriendRequestsEveryoneSetting.tsx
export default (function(argFoo, argBar, _, argCor, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    michal = {};
    entity = true;
    michal['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, michal);
    entity = 0;
    golfie = oscard[entity];
    michal = argCor;
    entity = undefined;
    michal = michal.bind(entity)(golfie);
    var _closure1_slot2 = michal;
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
    var _closure1_slot3 = verify;
    michal = michal.FriendSourceFlags;
    var _closure1_slot4 = michal;
    michal = {};
    option = option.TOGGLE;
    michal['type'] = option;
    option = function() { // Original name: title
        report = _closure1_slot0;
        oscard = _closure1_slot1;
        entity = 6;
        michal = oscard[entity];
        tangon = undefined;
        michal = report.bind(tangon)(michal);
        zuuluu = michal.intl;
        michal = zuuluu.string;
        entity = oscard[entity];
        entity = report.bind(tangon)(entity);
        entity = entity.t;
        entity = entity.mGr3CQ;
        entity = michal.bind(zuuluu)(entity);
        return entity;
    };
    michal['title'] = option;
    golfie = golfie.CONTENT_AND_SOCIAL_DISCORD;
    michal['parent'] = golfie;
    golfie = function() { // Original name: useFriendRequestsEveryoneSettingValue
        report = _closure1_slot0;
        tangon = _closure1_slot1;
        zuuluu = 4;
        tangon = tangon[zuuluu];
        zuuluu = undefined;
        zuuluu = report.bind(zuuluu)(tangon);
        tangon = zuuluu.FriendSourceFlagsSetting;
        zuuluu = tangon.useSetting;
        report = zuuluu.bind(tangon)();
        var _closure2_slot0 = report;
        tangon = _closure1_slot2;
        zuuluu = tangon.useMemo;
        michal = new Array(1);
        michal[0] = report;
        entity = function() {
            zuuluu = _closure1_slot0;
            michal = _closure1_slot1;
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
        entity = entity.all;
        return entity;
    };
    michal['useValue'] = golfie;
    tangon = function(argFoo) { // Original name: onFriendRequestsEveryoneSettingValueChange
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = _closure1_slot0;
            zuuluu = _closure1_slot1;
            entity = 4;
            zuuluu = zuuluu[entity];
            entity = undefined;
            zuuluu = tangon.bind(entity)(zuuluu);
            tangon = zuuluu.FriendSourceFlagsSetting;
            zuuluu = tangon.updateSetting;
            report = _closure1_slot3;
            oscard = argFoo;
            if(oscard) { _fun00002_ip = 66; continue _fun00001 }
 47:
            michal = _closure1_slot4;
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
    michal['onValueChange'] = tangon;
    tangon = 7;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/main_tabs_v2/native/settings/definitions/FriendRequestsEveryoneSetting.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();