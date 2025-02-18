// app/modules/user_profile/ProfileUpdateRequestUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFre, argPlu) {
    zuuluu = argFre;
    entity = global;
    oscard = entity.Object;
    report = oscard.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscard)(zuuluu, entity, tangon);
    tangon = argPlu;
    entity = 0;
    report = tangon[entity];
    tangon = argBar;
    entity = undefined;
    oscard = tangon.bind(entity)(report);
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
            zuuluu = michal.pendingAvatar;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 51; continue _fun00003 }
 39:
            zuuluu = michal.pendingAvatar;
            entity['avatar'] = zuuluu;
 51:
            zuuluu = michal.pendingAvatarDecoration;
            if(!(tangon !== zuuluu)) { _fun00004_ip = 73; continue _fun00003 }
 61:
            michal = michal.pendingAvatarDecoration;
            entity['avatarDecoration'] = michal;
 73:
            return entity;
        }
    };
    zuuluu['getAccountUpdateForUpdateRequest'] = tangon;
    michal = function(argFoo) { // Original name: getGuildMemberChangesForUpdateRequest
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            michal = argFoo;
            entity = {};
            zuuluu = michal.pendingAvatar;
            tangon = undefined;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 29; continue _fun00005 }
 17:
            zuuluu = michal.pendingAvatar;
            entity['avatar'] = zuuluu;
 29:
            zuuluu = michal.pendingNickname;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 67; continue _fun00005 }
 39:
            report = michal.pendingNickname;
            zuuluu = null;
            oscard = zuuluu != report;
            zuuluu = '';
            if(!oscard) { _fun00006_ip = 61; continue _fun00005 }
 58:
            zuuluu = report;
 61:
            entity['nick'] = zuuluu;
 67:
            zuuluu = michal.pendingAvatarDecoration;
            if(!(tangon !== zuuluu)) { _fun00006_ip = 89; continue _fun00005 }
 77:
            michal = michal.pendingAvatarDecoration;
            entity['avatarDecoration'] = michal;
 89:
            return entity;
        }
    };
    zuuluu['getGuildMemberChangesForUpdateRequest'] = michal;
    return entity;
})();