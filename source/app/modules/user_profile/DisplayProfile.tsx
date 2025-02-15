// app/modules/user_profile/DisplayProfile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFred, argPlugh) {
    report = argBar;
    golf = argBaz;
    zulu = argFred;
    oscar = argPlugh;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golf;
    var _closure1_slot2 = oscar;
    entity = function(argFoo, argBar) { // Original name: _getStringFieldDefault
        _fun77133: for(var _fun77133_ip = 0; ; ) switch(_fun77133_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu != entity)) { _fun77133_ip = 20; continue _fun77133 }
 12:
            zulu = '';
            if(!(zulu === entity)) { _fun77133_ip = 23; continue _fun77133 }
 20:
            entity = mike;
 23:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    options = verify.defineProperty;
    tango = {};
    entity = true;
    tango['value'] = entity;
    entity = '__esModule';
    entity = options.bind(verify)(zulu, entity, tango);
    entity = 0;
    tango = oscar[entity];
    entity = undefined;
    tango = golf.bind(entity)(tango);
    var _closure1_slot3 = tango;
    tango = 1;
    tango = oscar[tango];
    tango = golf.bind(entity)(tango);
    var _closure1_slot4 = tango;
    tango = 2;
    tango = oscar[tango];
    tango = report.bind(entity)(tango);
    tango = tango.PremiumTypes;
    var _closure1_slot5 = tango;
    mike = function() {
        tango = _closure1_slot4;
        zulu = function(argFoo, argBar) { // Original name: DisplayProfile
            _fun77135: for(var _fun77135_ip = 0; ; ) switch(_fun77135_ip) {
 0:
                tango = argFoo;
                zulu = argBar;
                mike = this;
                golf = _closure1_slot3;
                oscar = _closure2_slot0;
                entity = undefined;
                oscar = golf.bind(entity)(mike, oscar);
                oscar = tango.userId;
                mike['userId'] = oscar;
                oscar = null;
                options = oscar == zulu;
                golf = undefined;
                if(options) { _fun77135_ip = 58; continue _fun77135 }
 53:
                golf = zulu.guildId;
 58:
                mike['guildId'] = golf;
                options = oscar == zulu;
                golf = undefined;
                if(options) { _fun77135_ip = 79; continue _fun77135 }
 73:
                golf = zulu.banner;
 79:
                if(!(oscar == golf)) { _fun77135_ip = 89; continue _fun77135 }
 83:
                golf = tango.banner;
 89:
                mike['banner'] = golf;
                verify = _closure1_slot6;
                options = tango.bio;
                offset = oscar == zulu;
                golf = undefined;
                if(offset) { _fun77135_ip = 120; continue _fun77135 }
 114:
                golf = zulu.bio;
 120:
                golf = verify.bind(entity)(options, golf);
                mike['bio'] = golf;
                options = _closure1_slot6;
                golf = tango.pronouns;
                verify = oscar == zulu;
                report = undefined;
                if(verify) { _fun77135_ip = 157; continue _fun77135 }
 151:
                report = zulu.pronouns;
 157:
                report = options.bind(entity)(golf, report);
                mike['pronouns'] = report;
                report = tango.accentColor;
                mike['accentColor'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun77135_ip = 196; continue _fun77135 }
 190:
                report = zulu.themeColors;
 196:
                if(!(oscar == report)) { _fun77135_ip = 206; continue _fun77135 }
 200:
                report = tango.themeColors;
 206:
                mike['themeColors'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun77135_ip = 227; continue _fun77135 }
 221:
                report = zulu.popoutAnimationParticleType;
 227:
                if(!(oscar == report)) { _fun77135_ip = 237; continue _fun77135 }
 231:
                report = tango.popoutAnimationParticleType;
 237:
                mike['popoutAnimationParticleType'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun77135_ip = 258; continue _fun77135 }
 252:
                report = zulu.profileEffectId;
 258:
                if(!(oscar == report)) { _fun77135_ip = 298; continue _fun77135 }
 262:
                report = tango.profileEffectId;
                if(!(oscar != report)) { _fun77135_ip = 322; continue _fun77135 }
 272:
                report = tango.profileEffectId;
                mike['profileEffectId'] = report;
                report = tango.profileEffectExpiresAt;
                mike['profileEffectExpiresAt'] = report;
                _fun77135_ip = 322; continue _fun77135;
 298:
                report = zulu.profileEffectId;
                mike['profileEffectId'] = report;
                report = zulu.profileEffectExpiresAt;
                mike['profileEffectExpiresAt'] = report;
 322:
                mike['_userProfile'] = tango;
                mike['_guildMemberProfile'] = zulu;
                return entity;
            }
        };
        var _closure2_slot0 = zulu;
        entity = {};
        mike = 'premiumSince';
        entity['key'] = mike;
        mike = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumSince;
            return entity;
        };
        entity['get'] = mike;
        mike = new Array(19);
        mike[0] = entity;
        entity = {};
        oscar = 'premiumGuildSince';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumGuildSince;
            return entity;
        };
        entity['get'] = oscar;
        mike[1] = entity;
        entity = {};
        oscar = 'premiumType';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumType;
            return entity;
        };
        entity['get'] = oscar;
        mike[2] = entity;
        entity = {};
        oscar = 'primaryColor';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            _fun77139: for(var _fun77139_ip = 0; ; ) switch(_fun77139_ip) {
 0:
                mike = this;
                report = mike.themeColors;
                zulu = null;
                tango = zulu == report;
                entity = undefined;
                if(tango) { _fun77139_ip = 26; continue _fun77139 }
 20:
                tango = 0;
                entity = report[tango];
 26:
                if(!(zulu == entity)) { _fun77139_ip = 36; continue _fun77139 }
 30:
                entity = mike.accentColor;
 36:
                return entity;
            }
        };
        entity['get'] = oscar;
        mike[3] = entity;
        entity = {};
        oscar = 'canUsePremiumProfileCustomization';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            tango = _closure1_slot1;
            zulu = _closure1_slot2;
            mike = 3;
            zulu = zulu[mike];
            mike = undefined;
            tango = tango.bind(mike)(zulu);
            zulu = tango.isPremiumAtLeast;
            mike = this;
            mike = mike.premiumType;
            entity = _closure1_slot5;
            entity = entity.TIER_2;
            entity = zulu.bind(tango)(mike, entity);
            return entity;
        };
        entity['get'] = oscar;
        mike[4] = entity;
        entity = {};
        oscar = 'canEditThemes';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity.canUsePremiumProfileCustomization;
            return entity;
        };
        entity['get'] = oscar;
        mike[5] = entity;
        entity = {};
        oscar = 'application';
        entity['key'] = oscar;
        oscar = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.application;
            return entity;
        };
        entity['get'] = oscar;
        mike[6] = entity;
        entity = {};
        oscar = 'hasThemeColors';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77143: for(var _fun77143_ip = 0; ; ) switch(_fun77143_ip) {
 0:
                tango = this;
                oscar = tango.themeColors;
                zulu = null;
                report = zulu == oscar;
                entity = undefined;
                if(report) { _fun77143_ip = 26; continue _fun77143 }
 20:
                report = 0;
                entity = oscar[report];
 26:
                entity = zulu != entity;
                if(entity) { _fun77143_ip = 59; continue _fun77143 }
 33:
                report = tango.themeColors;
                tango = zulu == report;
                mike = undefined;
                if(tango) { _fun77143_ip = 55; continue _fun77143 }
 48:
                tango = 1;
                mike = report[tango];
 55:
                entity = zulu != mike;
 59:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[7] = entity;
        entity = {};
        oscar = 'hasPremiumCustomization';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77144: for(var _fun77144_ip = 0; ; ) switch(_fun77144_ip) {
 0:
                mike = this;
                entity = mike.isUsingGuildMemberBanner;
                entity = entity.bind(mike)();
                if(entity) { _fun77144_ip = 26; continue _fun77144 }
 16:
                zulu = mike.isUsingGuildMemberBio;
                entity = zulu.bind(mike)();
 26:
                if(entity) { _fun77144_ip = 41; continue _fun77144 }
 29:
                tango = mike.banner;
                zulu = null;
                entity = zulu != tango;
 41:
                if(entity) { _fun77144_ip = 54; continue _fun77144 }
 44:
                zulu = mike.hasThemeColors;
                entity = zulu.bind(mike)();
 54:
                if(entity) { _fun77144_ip = 69; continue _fun77144 }
 57:
                zulu = mike.popoutAnimationParticleType;
                mike = null;
                entity = mike != zulu;
 69:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[8] = entity;
        entity = {};
        oscar = 'hasFullProfile';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77145: for(var _fun77145_ip = 0; ; ) switch(_fun77145_ip) {
 0:
                zulu = this;
                entity = zulu._userProfile;
                tango = undefined;
                entity = tango !== entity;
                if(!entity) { _fun77145_ip = 45; continue _fun77145 }
 18:
                report = zulu.guildId;
                mike = null;
                mike = mike == report;
                if(mike) { _fun77145_ip = 42; continue _fun77145 }
 32:
                zulu = zulu._guildMemberProfile;
                mike = tango !== zulu;
 42:
                entity = mike;
 45:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[9] = entity;
        entity = {};
        oscar = 'isUsingGuildMemberBanner';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77146: for(var _fun77146_ip = 0; ; ) switch(_fun77146_ip) {
 0:
                entity = this;
                zulu = entity._guildMemberProfile;
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun77146_ip = 26; continue _fun77146 }
 20:
                entity = zulu.banner;
 26:
                entity = mike != entity;
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[10] = entity;
        entity = {};
        oscar = 'isUsingGuildMemberBio';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77147: for(var _fun77147_ip = 0; ; ) switch(_fun77147_ip) {
 0:
                mike = this;
                report = mike._guildMemberProfile;
                tango = null;
                oscar = tango == report;
                entity = undefined;
                if(oscar) { _fun77147_ip = 26; continue _fun77147 }
 20:
                entity = report.bio;
 26:
                entity = tango != entity;
                if(!entity) { _fun77147_ip = 62; continue _fun77147 }
 33:
                mike = mike._guildMemberProfile;
                tango = tango == mike;
                zulu = undefined;
                if(tango) { _fun77147_ip = 54; continue _fun77147 }
 48:
                zulu = mike.bio;
 54:
                mike = '';
                entity = mike !== zulu;
 62:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[11] = entity;
        entity = {};
        oscar = 'isUsingGuildMemberPronouns';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77148: for(var _fun77148_ip = 0; ; ) switch(_fun77148_ip) {
 0:
                mike = this;
                report = mike._guildMemberProfile;
                tango = null;
                oscar = tango == report;
                entity = undefined;
                if(oscar) { _fun77148_ip = 26; continue _fun77148 }
 20:
                entity = report.pronouns;
 26:
                entity = tango != entity;
                if(!entity) { _fun77148_ip = 62; continue _fun77148 }
 33:
                mike = mike._guildMemberProfile;
                tango = tango == mike;
                zulu = undefined;
                if(tango) { _fun77148_ip = 54; continue _fun77148 }
 48:
                zulu = mike.pronouns;
 54:
                mike = '';
                entity = mike !== zulu;
 62:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[12] = entity;
        entity = {};
        oscar = 'getBannerURL';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun77149: for(var _fun77149_ip = 0; ; ) switch(_fun77149_ip) {
 0:
                entity = argFoo;
                golf = this;
                oscar = entity.canAnimate;
                report = entity.size;
                mike = golf.guildId;
                entity = null;
                if(!(entity != mike)) { _fun77149_ip = 41; continue _fun77149 }
 28:
                entity = golf.isUsingGuildMemberBanner;
                entity = entity.bind(golf)();
                if(entity) { _fun77149_ip = 110; continue _fun77149 }
 41:
                zulu = _closure1_slot0;
                mike = _closure1_slot2;
                entity = 4;
                mike = mike[entity];
                entity = undefined;
                zulu = zulu.bind(entity)(mike);
                mike = zulu.getUserBannerURL;
                entity = {};
                tango = golf.userId;
                entity['id'] = tango;
                tango = golf.banner;
                entity['banner'] = tango;
                entity['canAnimate'] = oscar;
                entity['size'] = report;
                entity = mike.bind(zulu)(entity);
                _fun77149_ip = 186; continue _fun77149;
 110:
                tango = _closure1_slot0;
                zulu = _closure1_slot2;
                mike = 4;
                zulu = zulu[mike];
                mike = undefined;
                tango = tango.bind(mike)(zulu);
                zulu = tango.getGuildMemberBannerURL;
                mike = {};
                options = golf.userId;
                mike['id'] = options;
                options = golf.guildId;
                mike['guildId'] = options;
                golf = golf.banner;
                mike['banner'] = golf;
                mike['canAnimate'] = oscar;
                mike['size'] = report;
                entity = zulu.bind(tango)(mike);
 186:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[13] = entity;
        entity = {};
        oscar = 'getPreviewBanner';
        entity['key'] = oscar;
        oscar = function(argFoo, argBar) { // Original name: value
            _fun77150: for(var _fun77150_ip = 0; ; ) switch(_fun77150_ip) {
 0:
                mike = argFoo;
                options = argBar;
                golf = arguments[2];
                verify = this;
                oscar = undefined;
                if(!(golf === oscar)) { _fun77150_ip = 24; continue _fun77150 }
 18:
                golf = 480;
 24:
                zulu = null;
                entity = mike;
                if(!(zulu == entity)) { _fun77150_ip = 162; continue _fun77150 }
 36:
                if(!(zulu !== mike)) { _fun77150_ip = 70; continue _fun77150 }
 40:
                tango = verify.getBannerURL;
                mike = {};
                mike['canAnimate'] = options;
                report = 480;
                mike['size'] = report;
                mike = tango.bind(verify)(mike);
                _fun77150_ip = 159; continue _fun77150;
 70:
                tango = verify.isUsingGuildMemberBanner;
                tango = tango.bind(verify)();
                zulu = null;
                if(!tango) { _fun77150_ip = 156; continue _fun77150 }
 85:
                report = _closure1_slot0;
                offset = _closure1_slot2;
                tango = 4;
                tango = offset[tango];
                oscar = report.bind(oscar)(tango);
                report = oscar.getUserBannerURL;
                tango = {};
                offset = verify.userId;
                tango['id'] = offset;
                verify = verify._userProfile;
                verify = verify.banner;
                tango['banner'] = verify;
                tango['canAnimate'] = options;
                tango['size'] = golf;
                zulu = report.bind(oscar)(tango);
 156:
                mike = zulu;
 159:
                entity = mike;
 162:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[14] = entity;
        entity = {};
        oscar = 'getPreviewBio';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun77151: for(var _fun77151_ip = 0; ; ) switch(_fun77151_ip) {
 0:
                entity = this;
                zulu = _closure1_slot0;
                tango = _closure1_slot2;
                mike = 5;
                mike = tango[mike];
                tango = undefined;
                oscar = zulu.bind(tango)(mike);
                report = oscar.getProfilePreviewField;
                zulu = entity._guildMemberProfile;
                mike = null;
                golf = mike == zulu;
                if(golf) { _fun77151_ip = 55; continue _fun77151 }
 49:
                tango = zulu.bio;
 55:
                zulu = entity._userProfile;
                verify = zulu.bio;
                entity = entity.guildId;
                options = mike != entity;
                yankee = argFoo;
                romeo = oscar;
                offset = tango;
                entity = romeo[report](yankee, offset, verify, options, golf);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[15] = entity;
        entity = {};
        oscar = 'getPreviewThemeColors';
        entity['key'] = oscar;
        oscar = function(argFoo) { // Original name: value
            _fun77152: for(var _fun77152_ip = 0; ; ) switch(_fun77152_ip) {
 0:
                tango = argFoo;
                zulu = this;
                oscar = null;
                report = oscar == tango;
                mike = undefined;
                entity = undefined;
                if(report) { _fun77152_ip = 25; continue _fun77152 }
 19:
                report = 0;
                entity = tango[report];
 25:
                if(!(oscar != entity)) { _fun77152_ip = 52; continue _fun77152 }
 29:
                entity = oscar == tango;
                report = undefined;
                if(entity) { _fun77152_ip = 45; continue _fun77152 }
 38:
                entity = 1;
                report = tango[entity];
 45:
                entity = tango;
                if(!(oscar == report)) { _fun77152_ip = 79; continue _fun77152 }
 52:
                if(!(mike === tango)) { _fun77152_ip = 64; continue _fun77152 }
 56:
                mike = zulu.themeColors;
                _fun77152_ip = 76; continue _fun77152;
 64:
                zulu = zulu._userProfile;
                mike = zulu.themeColors;
 76:
                entity = mike;
 79:
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[16] = entity;
        entity = {};
        oscar = 'getBadges';
        entity['key'] = oscar;
        oscar = function() { // Original name: value
            _fun77153: for(var _fun77153_ip = 0; ; ) switch(_fun77153_ip) {
 0:
                mike = this;
                entity = mike._userProfile;
                report = entity.badges;
                tango = null;
                if(!(tango == report)) { _fun77153_ip = 25; continue _fun77153 }
 21:
                report = new Array(0);
 25:
                entity = new Array(0);
                golf = 0;
                verify = entity;
                options = report;
                zulu = arraySpread(verify, options, golf);
                report = mike._guildMemberProfile;
                oscar = tango == report;
                mike = undefined;
                if(oscar) { _fun77153_ip = 62; continue _fun77153 }
 56:
                mike = report.badges;
 62:
                if(!(tango == mike)) { _fun77153_ip = 70; continue _fun77153 }
 66:
                mike = new Array(0);
 70:
                verify = entity;
                options = mike;
                golf = zulu;
                mike = arraySpread(verify, options, golf);
                return entity;
            }
        };
        entity['value'] = oscar;
        mike[17] = entity;
        entity = {};
        oscar = 'getLegacyUsername';
        entity['key'] = oscar;
        report = function() { // Original name: value
            entity = this;
            entity = entity._userProfile;
            entity = entity.legacyUsername;
            return entity;
        };
        entity['value'] = report;
        mike[18] = entity;
        entity = undefined;
        entity = tango.bind(entity)(zulu, mike);
        return entity;
    };
    mike = mike.bind(entity)();
    tango = 6;
    tango = oscar[tango];
    oscar = report.bind(entity)(tango);
    report = oscar.fileFinishedImporting;
    tango = 'modules/user_profile/DisplayProfile.tsx';
    tango = report.bind(oscar)(tango);
    zulu['default'] = mike;
    return entity;
})();