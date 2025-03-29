// app/modules/user_profile/utils/trackUserAvatarUpdated.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    entity = argBaz;
    var _closure1_slot1 = entity;
    var _closure1_slot2 = oscard;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = report.bind(entity)(tangon);
    tangon = tangon.AnalyticEvents;
    var _closure1_slot3 = tangon;
    tangon = 4;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/utils/trackUserAvatarUpdated.tsx';
    tangon = report.bind(oscard)(tangon);
    michal = function(argFoo) { // Original name: trackUserAvatarUpdated
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            backup = michal.avatarHash;
            yankee = michal.avatarId;
            verify = michal.isGuildProfile;
            entity = undefined;
            if(!(verify === entity)) { _fun00002_ip = 29; continue _fun00001 }
 27:
            verify = false;
 29:
            golfie = michal.avatarAssetOrigin;
            if(!(golfie === entity)) { _fun00002_ip = 74; continue _fun00001 }
 39:
            zuuluu = _closure1_slot0;
            tangon = _closure1_slot2;
            michal = 1;
            michal = tangon[michal];
            michal = zuuluu.bind(entity)(michal);
            michal = michal.AssetOriginTypes;
            golfie = michal.NEW_ASSET;
 74:
            zuuluu = _closure1_slot1;
            option = _closure1_slot2;
            michal = 2;
            michal = option[michal];
            report = zuuluu.bind(entity)(michal);
            tangon = report.track;
            michal = _closure1_slot3;
            zuuluu = michal.USER_AVATAR_UPDATED;
            michal = {};
            offset = _closure1_slot0;
            romeon = 3;
            romeon = option[romeon];
            foxtra = offset.bind(entity)(romeon);
            romeon = foxtra.isAnimatedIconHash;
            romeon = romeon.bind(foxtra)(backup);
            michal['animated'] = romeon;
            michal['is_guild_profile'] = verify;
            verify = 1;
            option = option[verify];
            option = offset.bind(entity)(option);
            option = option.AssetOriginTypes;
            offset = option.ARCHIVED_ASSET;
            option = undefined;
            if(!(golfie === offset)) { _fun00002_ip = 194; continue _fun00001 }
 181:
            offset = global;
            offset = offset.Number;
            option = offset.bind(entity)(yankee);
 194:
            michal['recent_avatar_id'] = option;
            option = _closure1_slot0;
            oscard = _closure1_slot2;
            oscard = oscard[verify];
            oscard = option.bind(entity)(oscard);
            oscard = oscard.AssetOriginTypes;
            oscard = oscard.EDITED_ARCHIVED_ASSET;
            oscard = golfie === oscard;
            michal['is_edited_recent_avatar'] = oscard;
            michal = tangon.bind(report)(zuuluu, michal);
            return entity;
        }
    };
    zuuluu['trackUserAvatarUpdated'] = michal;
    return entity;
})();