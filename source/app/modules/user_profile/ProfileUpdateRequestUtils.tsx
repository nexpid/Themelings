// app/modules/user_profile/ProfileUpdateRequestUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    report = argBar;
    zuuluu = argFre;
    tangon = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = tangon;
    entity = global;
    option = entity.Object;
    golfie = option.defineProperty;
    oscard = {};
    entity = true;
    oscard['value'] = entity;
    entity = '__esModule';
    entity = golfie.bind(option)(zuuluu, entity, oscard);
    entity = 1;
    tangon = tangon[entity];
    entity = undefined;
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/ProfileUpdateRequestUtils.tsx';
    tangon = report.bind(oscard)(tangon);
    tangon = function(argFoo) { // Original name: getProfileChangesForUpdateRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zuuluu = argFoo;
            entity = {};
            michal = zuuluu.pendingBanner;
            report = undefined;
            if(!(report !== michal)) { _fun00002_ip = 29; continue _fun00001 }
 17:
            michal = zuuluu.pendingBanner;
            entity['banner'] = michal;
 29:
            tangon = zuuluu.pendingBio;
            michal = null;
            if(!(michal != tangon)) { _fun00002_ip = 53; continue _fun00001 }
 41:
            tangon = zuuluu.pendingBio;
            entity['bio'] = tangon;
 53:
            tangon = zuuluu.pendingPronouns;
            if(!(michal != tangon)) { _fun00002_ip = 75; continue _fun00001 }
 63:
            tangon = zuuluu.pendingPronouns;
            entity['pronouns'] = tangon;
 75:
            tangon = zuuluu.pendingAccentColor;
            if(!(report !== tangon)) { _fun00002_ip = 97; continue _fun00001 }
 85:
            tangon = zuuluu.pendingAccentColor;
            entity['accent_color'] = tangon;
 97:
            tangon = zuuluu.pendingThemeColors;
            if(!(report !== tangon)) { _fun00002_ip = 119; continue _fun00001 }
 107:
            tangon = zuuluu.pendingThemeColors;
            entity['theme_colors'] = tangon;
 119:
            tangon = zuuluu.pendingProfileEffectId;
            if(!(report !== tangon)) { _fun00002_ip = 156; continue _fun00001 }
 129:
            tangon = zuuluu.pendingProfileEffectId;
            tangon = michal != tangon;
            michal = null;
            if(!tangon) { _fun00002_ip = 150; continue _fun00001 }
 144:
            michal = zuuluu.pendingProfileEffectId;
 150:
            entity['profile_effect_id'] = michal;
 156:
            return entity;
        }
    };
    zuuluu['getProfileChangesForUpdateRequest'] = tangon;
    tangon = function(argFoo) { // Original name: getAccountUpdateForUpdateRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.pendingGlobalName;
            tangon = undefined;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 29; continue _fun00003 }
 17:
            zuuluu = michal.pendingGlobalName;
            entity['globalName'] = zuuluu;
 29:
            zuuluu = michal.pendingNameplate;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 51; continue _fun00003 }
 39:
            zuuluu = michal.pendingNameplate;
            entity['nameplate'] = zuuluu;
 51:
            zuuluu = michal.pendingAvatar;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 167; continue _fun00003 }
 61:
            report = michal.pendingAvatar;
            zuuluu = null;
            if(!(zuuluu !== report)) { _fun00004_ip = 161; continue _fun00003 }
 73:
            golfie = report.assetOrigin;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 0;
            oscard = verify[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.AssetOriginTypes;
            oscard = oscard.ARCHIVED_ASSET;
            if(!(golfie !== oscard)) { _fun00004_ip = 142; continue _fun00003 }
 117:
            oscard = report.imageUri;
            entity['avatar'] = oscard;
            oscard = report.description;
            entity['avatarDescription'] = oscard;
            _fun00004_ip = 167; continue _fun00003;
 142:
            report = report.originalAsset;
            report = report.id;
            entity['avatarId'] = report;
            _fun00004_ip = 167; continue _fun00003;
 161:
            entity['avatar'] = zuuluu;
 167:
            zuuluu = michal.pendingAvatarDecoration;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 189; continue _fun00003 }
 177:
            michal = michal.pendingAvatarDecoration;
            entity['avatarDecoration'] = michal;
 189:
            return entity;
        }
    };
    zuuluu['getAccountUpdateForUpdateRequest'] = tangon;
    tangon = function(argFoo) { // Original name: getGuildMemberChangesForUpdateRequest
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.pendingAvatar;
            tangon = undefined;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 123; continue _fun00005 }
 17:
            report = michal.pendingAvatar;
            zuuluu = null;
            if(!(zuuluu !== report)) { _fun00006_ip = 117; continue _fun00005 }
 29:
            golfie = report.assetOrigin;
            option = _closure1_slot0;
            verify = _closure1_slot1;
            oscard = 0;
            oscard = verify[oscard];
            oscard = option.bind(tangon)(oscard);
            oscard = oscard.AssetOriginTypes;
            oscard = oscard.ARCHIVED_ASSET;
            if(!(golfie !== oscard)) { _fun00006_ip = 98; continue _fun00005 }
 73:
            oscard = report.imageUri;
            entity['avatar'] = oscard;
            oscard = report.description;
            entity['avatarDescription'] = oscard;
            _fun00006_ip = 123; continue _fun00005;
 98:
            report = report.originalAsset;
            report = report.id;
            entity['avatarId'] = report;
            _fun00006_ip = 123; continue _fun00005;
 117:
            entity['avatar'] = zuuluu;
 123:
            zuuluu = michal.pendingNickname;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 161; continue _fun00005 }
 133:
            report = michal.pendingNickname;
            zuuluu = null;
            oscard = zuuluu != report;
            zuuluu = '';
            if(!oscard) { _fun00006_ip = 155; continue _fun00005 }
 152:
            zuuluu = report;
 155:
            entity['nick'] = zuuluu;
 161:
            zuuluu = michal.pendingAvatarDecoration;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 183; continue _fun00005 }
 171:
            michal = michal.pendingAvatarDecoration;
            entity['avatarDecoration'] = michal;
 183:
            return entity;
        }
    };
    zuuluu['getGuildMemberChangesForUpdateRequest'] = tangon;
    michal = function(argFoo) { // Original name: getPrimaryGuildChangesForUpdateRequest
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            michal = argFoo;
            entity = {};
            tangon = michal.pendingPrimaryGuildId;
            zuuluu = undefined;
            if(!(zuuluu !== tangon)) { _fun00008_ip = 29; continue _fun00007 }
 17:
            michal = michal.pendingPrimaryGuildId;
            entity['primaryGuildId'] = michal;
 29:
            return entity;
        }
    };
    zuuluu['getPrimaryGuildChangesForUpdateRequest'] = michal;
    return entity;
})();