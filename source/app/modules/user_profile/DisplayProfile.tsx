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
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            mike = argFoo;
            entity = argBar;
            zulu = null;
            if(!(zulu != entity)) { _fun00002_ip = 20; continue _fun00001 }
 12:
            zulu = '';
            if(!(zulu === entity)) { _fun00002_ip = 23; continue _fun00001 }
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
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
                if(options) { _fun00004_ip = 58; continue _fun00003 }
 53:
                golf = zulu.guildId;
 58:
                mike['guildId'] = golf;
                options = oscar == zulu;
                golf = undefined;
                if(options) { _fun00004_ip = 79; continue _fun00003 }
 73:
                golf = zulu.banner;
 79:
                if(!(oscar == golf)) { _fun00004_ip = 89; continue _fun00003 }
 83:
                golf = tango.banner;
 89:
                mike['banner'] = golf;
                verify = _closure1_slot6;
                options = tango.bio;
                offset = oscar == zulu;
                golf = undefined;
                if(offset) { _fun00004_ip = 120; continue _fun00003 }
 114:
                golf = zulu.bio;
 120:
                golf = verify.bind(entity)(options, golf);
                mike['bio'] = golf;
                options = _closure1_slot6;
                golf = tango.pronouns;
                verify = oscar == zulu;
                report = undefined;
                if(verify) { _fun00004_ip = 157; continue _fun00003 }
 151:
                report = zulu.pronouns;
 157:
                report = options.bind(entity)(golf, report);
                mike['pronouns'] = report;
                report = tango.accentColor;
                mike['accentColor'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun00004_ip = 196; continue _fun00003 }
 190:
                report = zulu.themeColors;
 196:
                if(!(oscar == report)) { _fun00004_ip = 206; continue _fun00003 }
 200:
                report = tango.themeColors;
 206:
                mike['themeColors'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun00004_ip = 227; continue _fun00003 }
 221:
                report = zulu.popoutAnimationParticleType;
 227:
                if(!(oscar == report)) { _fun00004_ip = 237; continue _fun00003 }
 231:
                report = tango.popoutAnimationParticleType;
 237:
                mike['popoutAnimationParticleType'] = report;
                golf = oscar == zulu;
                report = undefined;
                if(golf) { _fun00004_ip = 258; continue _fun00003 }
 252:
                report = zulu.profileEffectId;
 258:
                if(!(oscar == report)) { _fun00004_ip = 298; continue _fun00003 }
 262:
                report = tango.profileEffectId;
                if(!(oscar != report)) { _fun00004_ip = 322; continue _fun00003 }
 272:
                report = tango.profileEffectId;
                mike['profileEffectId'] = report;
                report = tango.profileEffectExpiresAt;
                mike['profileEffectExpiresAt'] = report;
                _fun00004_ip = 322; continue _fun00003;
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
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                mike = this;
                report = mike.themeColors;
                zulu = null;
                tango = zulu == report;
                entity = undefined;
                if(tango) { _fun00006_ip = 26; continue _fun00005 }
 20:
                tango = 0;
                entity = report[tango];
 26:
                if(!(zulu == entity)) { _fun00006_ip = 36; continue _fun00005 }
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
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tango = this;
                oscar = tango.themeColors;
                zulu = null;
                report = zulu == oscar;
                entity = undefined;
                if(report) { _fun00008_ip = 26; continue _fun00007 }
 20:
                report = 0;
                entity = oscar[report];
 26:
                entity = zulu != entity;
                if(entity) { _fun00008_ip = 59; continue _fun00007 }
 33:
                report = tango.themeColors;
                tango = zulu == report;
                mike = undefined;
                if(tango) { _fun00008_ip = 55; continue _fun00007 }
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
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                mike = this;
                entity = mike.isUsingGuildMemberBanner;
                entity = entity.bind(mike)();
                if(entity) { _fun00010_ip = 26; continue _fun00009 }
 16:
                zulu = mike.isUsingGuildMemberBio;
                entity = zulu.bind(mike)();
 26:
                if(entity) { _fun00010_ip = 41; continue _fun00009 }
 29:
                tango = mike.banner;
                zulu = null;
                entity = zulu != tango;
 41:
                if(entity) { _fun00010_ip = 54; continue _fun00009 }
 44:
                zulu = mike.hasThemeColors;
                entity = zulu.bind(mike)();
 54:
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
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
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zulu = this;
                entity = zulu._userProfile;
                tango = undefined;
                entity = tango !== entity;
                if(!entity) { _fun00012_ip = 45; continue _fun00011 }
 18:
                report = zulu.guildId;
                mike = null;
                mike = mike == report;
                if(mike) { _fun00012_ip = 42; continue _fun00011 }
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
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = this;
                zulu = entity._guildMemberProfile;
                mike = null;
                tango = mike == zulu;
                entity = undefined;
                if(tango) { _fun00014_ip = 26; continue _fun00013 }
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
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                mike = this;
                report = mike._guildMemberProfile;
                tango = null;
                oscar = tango == report;
                entity = undefined;
                if(oscar) { _fun00016_ip = 26; continue _fun00015 }
 20:
                entity = report.bio;
 26:
                entity = tango != entity;
                if(!entity) { _fun00016_ip = 62; continue _fun00015 }
 33:
                mike = mike._guildMemberProfile;
                tango = tango == mike;
                zulu = undefined;
                if(tango) { _fun00016_ip = 54; continue _fun00015 }
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
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                mike = this;
                report = mike._guildMemberProfile;
                tango = null;
                oscar = tango == report;
                entity = undefined;
                if(oscar) { _fun00018_ip = 26; continue _fun00017 }
 20:
                entity = report.pronouns;
 26:
                entity = tango != entity;
                if(!entity) { _fun00018_ip = 62; continue _fun00017 }
 33:
                mike = mike._guildMemberProfile;
                tango = tango == mike;
                zulu = undefined;
                if(tango) { _fun00018_ip = 54; continue _fun00017 }
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
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                golf = this;
                oscar = entity.canAnimate;
                report = entity.size;
                mike = golf.guildId;
                entity = null;
                if(!(entity != mike)) { _fun00020_ip = 41; continue _fun00019 }
 28:
                entity = golf.isUsingGuildMemberBanner;
                entity = entity.bind(golf)();
                if(entity) { _fun00020_ip = 110; continue _fun00019 }
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
                _fun00020_ip = 186; continue _fun00019;
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
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                mike = argFoo;
                options = argBar;
                golf = arguments[2];
                verify = this;
                oscar = undefined;
                if(!(golf === oscar)) { _fun00022_ip = 24; continue _fun00021 }
 18:
                golf = 480;
 24:
                zulu = null;
                entity = mike;
                if(!(zulu == entity)) { _fun00022_ip = 162; continue _fun00021 }
 36:
                if(!(zulu !== mike)) { _fun00022_ip = 70; continue _fun00021 }
 40:
                tango = verify.getBannerURL;
                mike = {};
                mike['canAnimate'] = options;
                report = 480;
                mike['size'] = report;
                mike = tango.bind(verify)(mike);
                _fun00022_ip = 159; continue _fun00021;
 70:
                tango = verify.isUsingGuildMemberBanner;
                tango = tango.bind(verify)();
                zulu = null;
                if(!tango) { _fun00022_ip = 156; continue _fun00021 }
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
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
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
                if(golf) { _fun00024_ip = 55; continue _fun00023 }
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
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tango = argFoo;
                zulu = this;
                oscar = null;
                report = oscar == tango;
                mike = undefined;
                entity = undefined;
                if(report) { _fun00026_ip = 25; continue _fun00025 }
 19:
                report = 0;
                entity = tango[report];
 25:
                if(!(oscar != entity)) { _fun00026_ip = 52; continue _fun00025 }
 29:
                entity = oscar == tango;
                report = undefined;
                if(entity) { _fun00026_ip = 45; continue _fun00025 }
 38:
                entity = 1;
                report = tango[entity];
 45:
                entity = tango;
                if(!(oscar == report)) { _fun00026_ip = 79; continue _fun00025 }
 52:
                if(!(mike === tango)) { _fun00026_ip = 64; continue _fun00025 }
 56:
                mike = zulu.themeColors;
                _fun00026_ip = 76; continue _fun00025;
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
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                mike = this;
                entity = mike._userProfile;
                report = entity.badges;
                tango = null;
                if(!(tango == report)) { _fun00028_ip = 25; continue _fun00027 }
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
                if(oscar) { _fun00028_ip = 62; continue _fun00027 }
 56:
                mike = report.badges;
 62:
                if(!(tango == mike)) { _fun00028_ip = 70; continue _fun00027 }
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