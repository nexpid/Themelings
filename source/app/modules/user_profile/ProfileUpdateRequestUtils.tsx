// app/modules/user_profile/ProfileUpdateRequestUtils.tsx
export default (function(argFoo, argBar, _, __, ___, argFred, argPlugh) {
    zulu = argFred;
    entity = global;
    oscar = entity.Object;
    report = oscar.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = report.bind(oscar)(zulu, entity, tango);
    tango = argPlugh;
    entity = 0;
    report = tango[entity];
    tango = argBar;
    entity = undefined;
    oscar = tango.bind(entity)(report);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/ProfileUpdateRequestUtils.tsx';
    tango = report.bind(oscar)(tango);
    tango = function(argFoo) { // Original name: getProfileChangesForUpdateRequest
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = zulu.pendingBanner;
            report = undefined;
            if(!(report !== mike)) { _fun00002_ip = 29; continue _fun00001 }
 17:
            mike = zulu.pendingBanner;
            entity['banner'] = mike;
 29:
            tango = zulu.pendingBio;
            mike = null;
            if(!(mike != tango)) { _fun00002_ip = 53; continue _fun00001 }
 41:
            tango = zulu.pendingBio;
            entity['bio'] = tango;
 53:
            tango = zulu.pendingPronouns;
            if(!(mike != tango)) { _fun00002_ip = 75; continue _fun00001 }
 63:
            tango = zulu.pendingPronouns;
            entity['pronouns'] = tango;
 75:
            tango = zulu.pendingAccentColor;
            if(!(report !== tango)) { _fun00002_ip = 97; continue _fun00001 }
 85:
            tango = zulu.pendingAccentColor;
            entity['accent_color'] = tango;
 97:
            tango = zulu.pendingThemeColors;
            if(!(report !== tango)) { _fun00002_ip = 119; continue _fun00001 }
 107:
            tango = zulu.pendingThemeColors;
            entity['theme_colors'] = tango;
 119:
            tango = zulu.pendingProfileEffectId;
            if(!(report !== tango)) { _fun00002_ip = 156; continue _fun00001 }
 129:
            tango = zulu.pendingProfileEffectId;
            tango = mike != tango;
            mike = null;
            if(!tango) { _fun00002_ip = 150; continue _fun00001 }
 144:
            mike = zulu.pendingProfileEffectId;
 150:
            entity['profile_effect_id'] = mike;
 156:
            return entity;
        }
    };
    zulu['getProfileChangesForUpdateRequest'] = tango;
    tango = function(argFoo) { // Original name: getAccountUpdateForUpdateRequest
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.pendingGlobalName;
            tango = undefined;
            if(!(tango !== zulu)) { _fun00004_ip = 29; continue _fun00003 }
 17:
            zulu = mike.pendingGlobalName;
            entity['globalName'] = zulu;
 29:
            zulu = mike.pendingAvatar;
            if(!(tango !== zulu)) { _fun00004_ip = 51; continue _fun00003 }
 39:
            zulu = mike.pendingAvatar;
            entity['avatar'] = zulu;
 51:
            zulu = mike.pendingAvatarDecoration;
            if(!(tango !== zulu)) { _fun00004_ip = 73; continue _fun00003 }
 61:
            mike = mike.pendingAvatarDecoration;
            entity['avatarDecoration'] = mike;
 73:
            return entity;
        }
    };
    zulu['getAccountUpdateForUpdateRequest'] = tango;
    mike = function(argFoo) { // Original name: getGuildMemberChangesForUpdateRequest
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.pendingAvatar;
            tango = undefined;
            if(!(tango !== zulu)) { _fun00006_ip = 29; continue _fun00005 }
 17:
            zulu = mike.pendingAvatar;
            entity['avatar'] = zulu;
 29:
            zulu = mike.pendingNickname;
            if(!(tango !== zulu)) { _fun00006_ip = 67; continue _fun00005 }
 39:
            report = mike.pendingNickname;
            zulu = null;
            oscar = zulu != report;
            zulu = '';
            if(!oscar) { _fun00006_ip = 61; continue _fun00005 }
 58:
            zulu = report;
 61:
            entity['nick'] = zulu;
 67:
            zulu = mike.pendingAvatarDecoration;
            if(!(tango !== zulu)) { _fun00006_ip = 89; continue _fun00005 }
 77:
            mike = mike.pendingAvatarDecoration;
            entity['avatarDecoration'] = mike;
 89:
            return entity;
        }
    };
    zulu['getGuildMemberChangesForUpdateRequest'] = mike;
    return entity;
})();