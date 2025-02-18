// app/modules/user_profile/DisplayProfile.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    golfie = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = golfie;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar) { // Original name: _getStringFieldDefault
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            michal = argFoo;
            entity = argBar;
            zuuluu = null;
            if(!(zuuluu != entity)) { _fun00002_ip = 20; continue _fun00001 }
 12:
            zuuluu = '';
            if(!(zuuluu === entity)) { _fun00002_ip = 23; continue _fun00001 }
 20:
            entity = michal;
 23:
            return entity;
        }
    };
    var _closure1_slot6 = entity;
    entity = global;
    verify = entity.Object;
    option = verify.defineProperty;
    tangon = {};
    entity = true;
    tangon['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, tangon);
    entity = 0;
    tangon = oscard[entity];
    entity = undefined;
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot3 = tangon;
    tangon = 1;
    tangon = oscard[tangon];
    tangon = golfie.bind(entity)(tangon);
    var _closure1_slot4 = tangon;
    tangon = 2;
    tangon = oscard[tangon];
    tangon = report.bind(entity)(tangon);
    tangon = tangon.PremiumTypes;
    var _closure1_slot5 = tangon;
    michal = function() {
        tangon = _closure1_slot4;
        zuuluu = function(argFoo, argBar) { // Original name: DisplayProfile
            _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
                tangon = argFoo;
                zuuluu = argBar;
                michal = this;
                golfie = _closure1_slot3;
                oscard = _closure2_slot0;
                entity = undefined;
                oscard = golfie.bind(entity)(michal, oscard);
                oscard = tangon.userId;
                michal['userId'] = oscard;
                oscard = null;
                option = oscard == zuuluu;
                golfie = undefined;
                if(option) { _fun00004_ip = 58; continue _fun00003 }
 53:
                golfie = zuuluu.guildId;
 58:
                michal['guildId'] = golfie;
                option = oscard == zuuluu;
                golfie = undefined;
                if(option) { _fun00004_ip = 79; continue _fun00003 }
 73:
                golfie = zuuluu.banner;
 79:
                if(!(oscard == golfie)) { _fun00004_ip = 89; continue _fun00003 }
 83:
                golfie = tangon.banner;
 89:
                michal['banner'] = golfie;
                verify = _closure1_slot6;
                option = tangon.bio;
                offset = oscard == zuuluu;
                golfie = undefined;
                if(offset) { _fun00004_ip = 120; continue _fun00003 }
 114:
                golfie = zuuluu.bio;
 120:
                golfie = verify.bind(entity)(option, golfie);
                michal['bio'] = golfie;
                option = _closure1_slot6;
                golfie = tangon.pronouns;
                verify = oscard == zuuluu;
                report = undefined;
                if(verify) { _fun00004_ip = 157; continue _fun00003 }
 151:
                report = zuuluu.pronouns;
 157:
                report = option.bind(entity)(golfie, report);
                michal['pronouns'] = report;
                report = tangon.accentColor;
                michal['accentColor'] = report;
                golfie = oscard == zuuluu;
                report = undefined;
                if(golfie) { _fun00004_ip = 196; continue _fun00003 }
 190:
                report = zuuluu.themeColors;
 196:
                if(!(oscard == report)) { _fun00004_ip = 206; continue _fun00003 }
 200:
                report = tangon.themeColors;
 206:
                michal['themeColors'] = report;
                golfie = oscard == zuuluu;
                report = undefined;
                if(golfie) { _fun00004_ip = 227; continue _fun00003 }
 221:
                report = zuuluu.popoutAnimationParticleType;
 227:
                if(!(oscard == report)) { _fun00004_ip = 237; continue _fun00003 }
 231:
                report = tangon.popoutAnimationParticleType;
 237:
                michal['popoutAnimationParticleType'] = report;
                golfie = oscard == zuuluu;
                report = undefined;
                if(golfie) { _fun00004_ip = 258; continue _fun00003 }
 252:
                report = zuuluu.profileEffectId;
 258:
                if(!(oscard == report)) { _fun00004_ip = 298; continue _fun00003 }
 262:
                report = tangon.profileEffectId;
                if(!(oscard != report)) { _fun00004_ip = 322; continue _fun00003 }
 272:
                report = tangon.profileEffectId;
                michal['profileEffectId'] = report;
                report = tangon.profileEffectExpiresAt;
                michal['profileEffectExpiresAt'] = report;
                _fun00004_ip = 322; continue _fun00003;
 298:
                report = zuuluu.profileEffectId;
                michal['profileEffectId'] = report;
                report = zuuluu.profileEffectExpiresAt;
                michal['profileEffectExpiresAt'] = report;
 322:
                michal['_userProfile'] = tangon;
                michal['_guildMemberProfile'] = zuuluu;
                return entity;
            }
        };
        var _closure2_slot0 = zuuluu;
        entity = {};
        michal = 'premiumSince';
        entity['key'] = michal;
        michal = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumSince;
            return entity;
        };
        entity['get'] = michal;
        michal = new Array(19);
        michal[0] = entity;
        entity = {};
        oscard = 'premiumGuildSince';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumGuildSince;
            return entity;
        };
        entity['get'] = oscard;
        michal[1] = entity;
        entity = {};
        oscard = 'premiumType';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.premiumType;
            return entity;
        };
        entity['get'] = oscard;
        michal[2] = entity;
        entity = {};
        oscard = 'primaryColor';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
                michal = this;
                report = michal.themeColors;
                zuuluu = null;
                tangon = zuuluu == report;
                entity = undefined;
                if(tangon) { _fun00006_ip = 26; continue _fun00005 }
 20:
                tangon = 0;
                entity = report[tangon];
 26:
                if(!(zuuluu == entity)) { _fun00006_ip = 36; continue _fun00005 }
 30:
                entity = michal.accentColor;
 36:
                return entity;
            }
        };
        entity['get'] = oscard;
        michal[3] = entity;
        entity = {};
        oscard = 'canUsePremiumProfileCustomization';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            tangon = _closure1_slot1;
            zuuluu = _closure1_slot2;
            michal = 3;
            zuuluu = zuuluu[michal];
            michal = undefined;
            tangon = tangon.bind(michal)(zuuluu);
            zuuluu = tangon.isPremiumAtLeast;
            michal = this;
            michal = michal.premiumType;
            entity = _closure1_slot5;
            entity = entity.TIER_2;
            entity = zuuluu.bind(tangon)(michal, entity);
            return entity;
        };
        entity['get'] = oscard;
        michal[4] = entity;
        entity = {};
        oscard = 'canEditThemes';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity.canUsePremiumProfileCustomization;
            return entity;
        };
        entity['get'] = oscard;
        michal[5] = entity;
        entity = {};
        oscard = 'application';
        entity['key'] = oscard;
        oscard = function() { // Original name: get
            entity = this;
            entity = entity._userProfile;
            entity = entity.application;
            return entity;
        };
        entity['get'] = oscard;
        michal[6] = entity;
        entity = {};
        oscard = 'hasThemeColors';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
                tangon = this;
                oscard = tangon.themeColors;
                zuuluu = null;
                report = zuuluu == oscard;
                entity = undefined;
                if(report) { _fun00008_ip = 26; continue _fun00007 }
 20:
                report = 0;
                entity = oscard[report];
 26:
                entity = zuuluu != entity;
                if(entity) { _fun00008_ip = 59; continue _fun00007 }
 33:
                report = tangon.themeColors;
                tangon = zuuluu == report;
                michal = undefined;
                if(tangon) { _fun00008_ip = 55; continue _fun00007 }
 48:
                tangon = 1;
                michal = report[tangon];
 55:
                entity = zuuluu != michal;
 59:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[7] = entity;
        entity = {};
        oscard = 'hasPremiumCustomization';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                michal = this;
                entity = michal.isUsingGuildMemberBanner;
                entity = entity.bind(michal)();
                if(entity) { _fun00010_ip = 26; continue _fun00009 }
 16:
                zuuluu = michal.isUsingGuildMemberBio;
                entity = zuuluu.bind(michal)();
 26:
                if(entity) { _fun00010_ip = 41; continue _fun00009 }
 29:
                tangon = michal.banner;
                zuuluu = null;
                entity = zuuluu != tangon;
 41:
                if(entity) { _fun00010_ip = 54; continue _fun00009 }
 44:
                zuuluu = michal.hasThemeColors;
                entity = zuuluu.bind(michal)();
 54:
                if(entity) { _fun00010_ip = 69; continue _fun00009 }
 57:
                zuuluu = michal.popoutAnimationParticleType;
                michal = null;
                entity = michal != zuuluu;
 69:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[8] = entity;
        entity = {};
        oscard = 'hasFullProfile';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                zuuluu = this;
                entity = zuuluu._userProfile;
                tangon = undefined;
                entity = tangon !== entity;
                if(!entity) { _fun00012_ip = 45; continue _fun00011 }
 18:
                report = zuuluu.guildId;
                michal = null;
                michal = michal == report;
                if(michal) { _fun00012_ip = 42; continue _fun00011 }
 32:
                zuuluu = zuuluu._guildMemberProfile;
                michal = tangon !== zuuluu;
 42:
                entity = michal;
 45:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[9] = entity;
        entity = {};
        oscard = 'isUsingGuildMemberBanner';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                entity = this;
                zuuluu = entity._guildMemberProfile;
                michal = null;
                tangon = michal == zuuluu;
                entity = undefined;
                if(tangon) { _fun00014_ip = 26; continue _fun00013 }
 20:
                entity = zuuluu.banner;
 26:
                entity = michal != entity;
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[10] = entity;
        entity = {};
        oscard = 'isUsingGuildMemberBio';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
                michal = this;
                report = michal._guildMemberProfile;
                tangon = null;
                oscard = tangon == report;
                entity = undefined;
                if(oscard) { _fun00016_ip = 26; continue _fun00015 }
 20:
                entity = report.bio;
 26:
                entity = tangon != entity;
                if(!entity) { _fun00016_ip = 62; continue _fun00015 }
 33:
                michal = michal._guildMemberProfile;
                tangon = tangon == michal;
                zuuluu = undefined;
                if(tangon) { _fun00016_ip = 54; continue _fun00015 }
 48:
                zuuluu = michal.bio;
 54:
                michal = '';
                entity = michal !== zuuluu;
 62:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[11] = entity;
        entity = {};
        oscard = 'isUsingGuildMemberPronouns';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
                michal = this;
                report = michal._guildMemberProfile;
                tangon = null;
                oscard = tangon == report;
                entity = undefined;
                if(oscard) { _fun00018_ip = 26; continue _fun00017 }
 20:
                entity = report.pronouns;
 26:
                entity = tangon != entity;
                if(!entity) { _fun00018_ip = 62; continue _fun00017 }
 33:
                michal = michal._guildMemberProfile;
                tangon = tangon == michal;
                zuuluu = undefined;
                if(tangon) { _fun00018_ip = 54; continue _fun00017 }
 48:
                zuuluu = michal.pronouns;
 54:
                michal = '';
                entity = michal !== zuuluu;
 62:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[12] = entity;
        entity = {};
        oscard = 'getBannerURL';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
                entity = argFoo;
                golfie = this;
                oscard = entity.canAnimate;
                report = entity.size;
                michal = golfie.guildId;
                entity = null;
                if(!(entity != michal)) { _fun00020_ip = 41; continue _fun00019 }
 28:
                entity = golfie.isUsingGuildMemberBanner;
                entity = entity.bind(golfie)();
                if(entity) { _fun00020_ip = 110; continue _fun00019 }
 41:
                zuuluu = _closure1_slot0;
                michal = _closure1_slot2;
                entity = 4;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.getUserBannerURL;
                entity = {};
                tangon = golfie.userId;
                entity['id'] = tangon;
                tangon = golfie.banner;
                entity['banner'] = tangon;
                entity['canAnimate'] = oscard;
                entity['size'] = report;
                entity = michal.bind(zuuluu)(entity);
                _fun00020_ip = 186; continue _fun00019;
 110:
                tangon = _closure1_slot0;
                zuuluu = _closure1_slot2;
                michal = 4;
                zuuluu = zuuluu[michal];
                michal = undefined;
                tangon = tangon.bind(michal)(zuuluu);
                zuuluu = tangon.getGuildMemberBannerURL;
                michal = {};
                option = golfie.userId;
                michal['id'] = option;
                option = golfie.guildId;
                michal['guildId'] = option;
                golfie = golfie.banner;
                michal['banner'] = golfie;
                michal['canAnimate'] = oscard;
                michal['size'] = report;
                entity = zuuluu.bind(tangon)(michal);
 186:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[13] = entity;
        entity = {};
        oscard = 'getPreviewBanner';
        entity['key'] = oscard;
        oscard = function(argFoo, argBar) { // Original name: value
            _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
                michal = argFoo;
                option = argBar;
                golfie = arguments[2];
                verify = this;
                oscard = undefined;
                if(!(golfie === oscard)) { _fun00022_ip = 24; continue _fun00021 }
 18:
                golfie = 480;
 24:
                zuuluu = null;
                entity = michal;
                if(!(zuuluu == entity)) { _fun00022_ip = 162; continue _fun00021 }
 36:
                if(!(zuuluu !== michal)) { _fun00022_ip = 70; continue _fun00021 }
 40:
                tangon = verify.getBannerURL;
                michal = {};
                michal['canAnimate'] = option;
                report = 480;
                michal['size'] = report;
                michal = tangon.bind(verify)(michal);
                _fun00022_ip = 159; continue _fun00021;
 70:
                tangon = verify.isUsingGuildMemberBanner;
                tangon = tangon.bind(verify)();
                zuuluu = null;
                if(!tangon) { _fun00022_ip = 156; continue _fun00021 }
 85:
                report = _closure1_slot0;
                offset = _closure1_slot2;
                tangon = 4;
                tangon = offset[tangon];
                oscard = report.bind(oscard)(tangon);
                report = oscard.getUserBannerURL;
                tangon = {};
                offset = verify.userId;
                tangon['id'] = offset;
                verify = verify._userProfile;
                verify = verify.banner;
                tangon['banner'] = verify;
                tangon['canAnimate'] = option;
                tangon['size'] = golfie;
                zuuluu = report.bind(oscard)(tangon);
 156:
                michal = zuuluu;
 159:
                entity = michal;
 162:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[14] = entity;
        entity = {};
        oscard = 'getPreviewBio';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                entity = this;
                zuuluu = _closure1_slot0;
                tangon = _closure1_slot2;
                michal = 5;
                michal = tangon[michal];
                tangon = undefined;
                oscard = zuuluu.bind(tangon)(michal);
                report = oscard.getProfilePreviewField;
                zuuluu = entity._guildMemberProfile;
                michal = null;
                golfie = michal == zuuluu;
                if(golfie) { _fun00024_ip = 55; continue _fun00023 }
 49:
                tangon = zuuluu.bio;
 55:
                zuuluu = entity._userProfile;
                verify = zuuluu.bio;
                entity = entity.guildId;
                option = michal != entity;
                yankee = argFoo;
                romeon = oscard;
                offset = tangon;
                entity = romeon[report](yankee, offset, verify, option, golfie);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[15] = entity;
        entity = {};
        oscard = 'getPreviewThemeColors';
        entity['key'] = oscard;
        oscard = function(argFoo) { // Original name: value
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                tangon = argFoo;
                zuuluu = this;
                oscard = null;
                report = oscard == tangon;
                michal = undefined;
                entity = undefined;
                if(report) { _fun00026_ip = 25; continue _fun00025 }
 19:
                report = 0;
                entity = tangon[report];
 25:
                if(!(oscard != entity)) { _fun00026_ip = 52; continue _fun00025 }
 29:
                entity = oscard == tangon;
                report = undefined;
                if(entity) { _fun00026_ip = 45; continue _fun00025 }
 38:
                entity = 1;
                report = tangon[entity];
 45:
                entity = tangon;
                if(!(oscard == report)) { _fun00026_ip = 79; continue _fun00025 }
 52:
                if(!(michal === tangon)) { _fun00026_ip = 64; continue _fun00025 }
 56:
                michal = zuuluu.themeColors;
                _fun00026_ip = 76; continue _fun00025;
 64:
                zuuluu = zuuluu._userProfile;
                michal = zuuluu.themeColors;
 76:
                entity = michal;
 79:
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[16] = entity;
        entity = {};
        oscard = 'getBadges';
        entity['key'] = oscard;
        oscard = function() { // Original name: value
            _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                michal = this;
                entity = michal._userProfile;
                report = entity.badges;
                tangon = null;
                if(!(tangon == report)) { _fun00028_ip = 25; continue _fun00027 }
 21:
                report = new Array(0);
 25:
                entity = new Array(0);
                golfie = 0;
                verify = entity;
                option = report;
                zuuluu = arraySpread(verify, option, golfie);
                report = michal._guildMemberProfile;
                oscard = tangon == report;
                michal = undefined;
                if(oscard) { _fun00028_ip = 62; continue _fun00027 }
 56:
                michal = report.badges;
 62:
                if(!(tangon == michal)) { _fun00028_ip = 70; continue _fun00027 }
 66:
                michal = new Array(0);
 70:
                verify = entity;
                option = michal;
                golfie = zuuluu;
                michal = arraySpread(verify, option, golfie);
                return entity;
            }
        };
        entity['value'] = oscard;
        michal[17] = entity;
        entity = {};
        oscard = 'getLegacyUsername';
        entity['key'] = oscard;
        report = function() { // Original name: value
            entity = this;
            entity = entity._userProfile;
            entity = entity.legacyUsername;
            return entity;
        };
        entity['value'] = report;
        michal[18] = entity;
        entity = undefined;
        entity = tangon.bind(entity)(zuuluu, michal);
        return entity;
    };
    michal = michal.bind(entity)();
    tangon = 6;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/DisplayProfile.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();