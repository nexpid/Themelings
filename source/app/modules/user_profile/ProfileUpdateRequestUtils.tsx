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
        _fun91700: for(var _fun91700_ip = 0; ; ) switch(_fun91700_ip) {
 0:
            zulu = argFoo;
            entity = {};
            mike = zulu.pendingBanner;
            report = undefined;
            if(!(report !== mike)) { _fun91700_ip = 29; continue _fun91700 }
 17:
            mike = zulu.pendingBanner;
            entity['banner'] = mike;
 29:
            tango = zulu.pendingBio;
            mike = null;
            if(!(mike != tango)) { _fun91700_ip = 53; continue _fun91700 }
 41:
            tango = zulu.pendingBio;
            entity['bio'] = tango;
 53:
            tango = zulu.pendingPronouns;
            if(!(mike != tango)) { _fun91700_ip = 75; continue _fun91700 }
 63:
            tango = zulu.pendingPronouns;
            entity['pronouns'] = tango;
 75:
            tango = zulu.pendingAccentColor;
            if(!(report !== tango)) { _fun91700_ip = 97; continue _fun91700 }
 85:
            tango = zulu.pendingAccentColor;
            entity['accent_color'] = tango;
 97:
            tango = zulu.pendingThemeColors;
            if(!(report !== tango)) { _fun91700_ip = 119; continue _fun91700 }
 107:
            tango = zulu.pendingThemeColors;
            entity['theme_colors'] = tango;
 119:
            tango = zulu.pendingProfileEffectId;
            if(!(report !== tango)) { _fun91700_ip = 156; continue _fun91700 }
 129:
            tango = zulu.pendingProfileEffectId;
            tango = mike != tango;
            mike = null;
            if(!tango) { _fun91700_ip = 150; continue _fun91700 }
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
        _fun91701: for(var _fun91701_ip = 0; ; ) switch(_fun91701_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.pendingGlobalName;
            tango = undefined;
            if(!(tango !== zulu)) { _fun91701_ip = 29; continue _fun91701 }
 17:
            zulu = mike.pendingGlobalName;
            entity['globalName'] = zulu;
 29:
            zulu = mike.pendingAvatar;
            if(!(tango !== zulu)) { _fun91701_ip = 51; continue _fun91701 }
 39:
            zulu = mike.pendingAvatar;
            entity['avatar'] = zulu;
 51:
            zulu = mike.pendingAvatarDecoration;
            if(!(tango !== zulu)) { _fun91701_ip = 73; continue _fun91701 }
 61:
            mike = mike.pendingAvatarDecoration;
            entity['avatarDecoration'] = mike;
 73:
            return entity;
        }
    };
    zulu['getAccountUpdateForUpdateRequest'] = tango;
    mike = function(argFoo) { // Original name: getGuildMemberChangesForUpdateRequest
        _fun91702: for(var _fun91702_ip = 0; ; ) switch(_fun91702_ip) {
 0:
            mike = argFoo;
            entity = {};
            zulu = mike.pendingAvatar;
            tango = undefined;
            if(!(tango !== zulu)) { _fun91702_ip = 29; continue _fun91702 }
 17:
            zulu = mike.pendingAvatar;
            entity['avatar'] = zulu;
 29:
            zulu = mike.pendingNickname;
            if(!(tango !== zulu)) { _fun91702_ip = 67; continue _fun91702 }
 39:
            report = mike.pendingNickname;
            zulu = null;
            oscar = zulu != report;
            zulu = '';
            if(!oscar) { _fun91702_ip = 61; continue _fun91702 }
 58:
            zulu = report;
 61:
            entity['nick'] = zulu;
 67:
            zulu = mike.pendingAvatarDecoration;
            if(!(tango !== zulu)) { _fun91702_ip = 89; continue _fun91702 }
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