// app/modules/user_profile/UserProfileStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = function(argFoo, argBar, argBaz) { // Original name: _callSuper
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
 0:
            tangon = argFoo;
            oscard = argBaz;
            michal = _closure1_slot6;
            zuuluu = undefined;
            entity = argBar;
            verify = michal.bind(zuuluu)(entity);
            michal = _closure1_slot5;
            entity = _closure1_slot29;
            entity = entity.bind(zuuluu)();
            if(entity) { _fun00002_ip = 51; continue _fun00001 }
 38:
            entity = verify.apply;
            entity = entity.bind(verify)(tangon, oscard);
            _fun00002_ip = 92; continue _fun00001;
 51:
            golfie = global;
            option = golfie.Reflect;
            golfie = option.construct;
            if(oscard) { _fun00002_ip = 71; continue _fun00001 }
 67:
            oscard = new Array(0);
 71:
            report = _closure1_slot6;
            report = report.bind(zuuluu)(tangon);
            report = report.constructor;
            entity = golfie.bind(option)(verify, oscard, report);
 92:
            entity = michal.bind(zuuluu)(tangon, entity);
            return entity;
        }
    };
    var _closure1_slot28 = entity;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
 0:
 2: // try_start_0
            michal = global;
            zuuluu = michal.Boolean;
            zuuluu = zuuluu.prototype;
            tangon = zuuluu.valueOf;
            zuuluu = tangon.call;
            option = michal.Reflect;
            golfie = option.construct;
            oscard = michal.Boolean;
            report = new Array(0);
            michal = function() {
                entity = undefined;
                return entity;
            };
            michal = golfie.bind(option)(oscard, report, michal);
            michal = zuuluu.bind(tangon)(michal);
            michal = !michal;
            var _closure2_slot0 = michal;
 70: // try_end0
            _fun00004_ip = 74; continue _fun00003;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot29 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot29 = entity;
    entity = function(argFoo) { // Original name: checkUserProfileEffectExpiry
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            report = argFoo;
            var _closure2_slot0 = report;
            zuuluu = _closure1_slot19;
            entity = zuuluu.get;
            zuuluu = entity.bind(zuuluu)(report);
            golfie = null;
            option = golfie == zuuluu;
            entity = undefined;
            oscard = undefined;
            if(option) { _fun00006_ip = 45; continue _fun00005 }
 39:
            oscard = zuuluu.profileEffectExpiresAt;
 45:
            if(!(golfie != oscard)) { _fun00006_ip = 202; continue _fun00005 }
 52:
            option = zuuluu.profileEffectExpiresAt;
            oscard = 1000;
            option = oscard * option;
            oscard = _closure1_slot14;
            verify = option + oscard;
            oscard = global;
            offset = oscard.Date;
            option = offset.now;
            option = option.bind(offset)();
            yankee = verify - option;
            option = 0;
            if(!(!(yankee <= option))) { _fun00006_ip = 162; continue _fun00005 }
 103:
            verify = _closure1_slot21;
            option = verify.get;
            option = option.bind(verify)(report);
            if(!(golfie != option)) { _fun00006_ip = 160; continue _fun00005 }
 121:
            golfie = option.start;
            offset = oscard.Math;
            verify = offset.min;
            oscard = _closure1_slot18;
            oscard = verify.bind(offset)(oscard, yankee);
            tangon = function() {
                zuuluu = _closure1_slot30;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = golfie.bind(option)(oscard, tangon);
            _fun00006_ip = 202; continue _fun00005;
 160:
            return entity;
 162:
            zuuluu['profileEffectId'] = entity;
            zuuluu['profileEffectExpiresAt'] = entity;
            tangon = _closure1_slot21;
            zuuluu = tangon.delete;
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = _closure1_slot27;
            michal = zuuluu.emitChange;
            michal = michal.bind(zuuluu)();
 202:
            return entity;
        }
    };
    var _closure1_slot30 = entity;
    entity = function(argFoo, argBar) { // Original name: checkGuildMemberProfileEffectExpiry
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            offset = argFoo;
            tangon = argBar;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = tangon;
            zuuluu = _closure1_slot20;
            michal = zuuluu.get;
            golfie = michal.bind(zuuluu)(offset);
            michal = null;
            if(!(michal != golfie)) { _fun00008_ip = 271; continue _fun00007 }
 42:
            zuuluu = golfie.get;
            option = zuuluu.bind(golfie)(tangon);
            oscard = michal == option;
            verify = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00008_ip = 69; continue _fun00007 }
 63:
            zuuluu = option.profileEffectExpiresAt;
 69:
            if(!(michal != zuuluu)) { _fun00008_ip = 271; continue _fun00007 }
 76:
            oscard = _closure1_slot22;
            zuuluu = oscard.get;
            zuuluu = zuuluu.bind(oscard)(offset);
            offset = option.profileEffectExpiresAt;
            oscard = 1000;
            offset = oscard * offset;
            oscard = _closure1_slot14;
            yankee = offset + oscard;
            oscard = global;
            romeon = oscard.Date;
            offset = romeon.now;
            offset = offset.bind(romeon)();
            backup = yankee - offset;
            offset = 0;
            if(!(!(backup <= offset))) { _fun00008_ip = 202; continue _fun00007 }
 141:
            if(!(michal != zuuluu)) { _fun00008_ip = 200; continue _fun00007 }
 145:
            offset = zuuluu.get;
            yankee = offset.bind(zuuluu)(tangon);
            if(!(michal != yankee)) { _fun00008_ip = 198; continue _fun00007 }
 159:
            offset = yankee.start;
            foxtra = oscard.Math;
            romeon = foxtra.min;
            oscard = _closure1_slot18;
            oscard = romeon.bind(foxtra)(oscard, backup);
            report = function() {
                tangon = _closure1_slot31;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = offset.bind(yankee)(oscard, report);
            _fun00008_ip = 271; continue _fun00007;
 198:
            return verify;
 200:
            return verify;
 202:
            oscard = golfie.set;
            report = {};
            sizing = report;
            kiloes = option;
            option = copyDataProperties(sizing, kiloes);
            option = 'profileEffectId';
            report[option] = verify;
            option = 'profileEffectExpiresAt';
            report[option] = verify;
            report = oscard.bind(golfie)(tangon, report);
            if(!(michal != zuuluu)) { _fun00008_ip = 257; continue _fun00007 }
 247:
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 257:
            michal = _closure1_slot27;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 271:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function() { // Original name: handleLogout
        zuuluu = _closure1_slot16;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot17;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot19;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot20;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot23;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot24;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        zuuluu = _closure1_slot25;
        entity = zuuluu.clear;
        entity = entity.bind(zuuluu)();
        entity = false;
        _closure1_slot26 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchStart
        entity = argFoo;
        zuuluu = entity.userId;
        michal = _closure1_slot17;
        entity = michal.add;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    var _closure1_slot33 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchFailure
        entity = argFoo;
        zuuluu = entity.userId;
        michal = _closure1_slot17;
        entity = michal.delete;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: getMutualFriends
        zuuluu = _closure1_slot1;
        tangon = _closure1_slot2;
        michal = 13;
        michal = tangon[michal];
        tangon = undefined;
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = argFoo;
        tangon = zuuluu.bind(tangon)(michal);
        zuuluu = tangon.map;
        michal = function(argFoo) {
            michal = argFoo;
            entity = {};
            zuuluu = michal.id;
            entity['key'] = zuuluu;
            tangon = _closure1_slot9;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            golfie = report;
            oscard = michal;
            tangon = new golfie[tangon](oscard, report);
            tangon = tangon instanceof Object ? tangon : report;
            entity['user'] = tangon;
            tangon = _closure1_slot12;
            zuuluu = tangon.getStatus;
            michal = michal.id;
            michal = zuuluu.bind(tangon)(michal);
            entity['status'] = michal;
            return entity;
        };
        zuuluu = zuuluu.bind(tangon)(michal);
        michal = zuuluu.sortBy;
        entity = function(argFoo) {
            entity = argFoo;
            entity = entity.user;
            michal = entity.username;
            entity = michal.toLowerCase;
            entity = entity.bind(michal)();
            return entity;
        };
        michal = michal.bind(zuuluu)(entity);
        entity = michal.value;
        entity = entity.bind(michal)();
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchSuccess
        michal = argFoo;
        report = _closure1_slot17;
        tangon = report.delete;
        entity = michal.userId;
        entity = tangon.bind(report)(entity);
        golfie = _closure1_slot23;
        oscard = golfie.set;
        report = michal.userId;
        option = _closure1_slot35;
        tangon = michal.mutualFriends;
        entity = undefined;
        tangon = option.bind(entity)(tangon);
        tangon = oscard.bind(golfie)(report, tangon);
        report = _closure1_slot24;
        tangon = report.set;
        zuuluu = michal.userId;
        michal = michal.mutualFriends;
        michal = michal.length;
        michal = tangon.bind(report)(zuuluu, michal);
        return entity;
    };
    var _closure1_slot36 = entity;
    entity = function(argFoo) { // Original name: handleProfileFetch
        _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
            michal = argFoo;
            zuuluu = michal.guild_member_profile;
            report = null;
            tangon = report == zuuluu;
            entity = undefined;
            golfie = undefined;
            if(tangon) { _fun00010_ip = 29; continue _fun00009 }
 24:
            golfie = zuuluu.guild_id;
 29:
            if(!(report == golfie)) { _fun00010_ip = 40; continue _fun00009 }
 33:
            golfie = _closure1_slot15;
 40:
            option = _closure1_slot16;
            oscard = option.get;
            tangon = michal.user;
            tangon = tangon.id;
            oscard = oscard.bind(option)(tangon);
            if(!(report != oscard)) { _fun00010_ip = 81; continue _fun00009 }
 71:
            tangon = oscard.delete;
            tangon = tangon.bind(oscard)(golfie);
 81:
            golfie = _closure1_slot17;
            oscard = golfie.delete;
            tangon = michal.user;
            tangon = tangon.id;
            tangon = oscard.bind(golfie)(tangon);
            tangon = michal.mutual_guilds;
            if(!(report != tangon)) { _fun00010_ip = 211; continue _fun00009 }
 115:
            tangon = {};
            var _closure2_slot0 = tangon;
            golfie = michal.mutual_guilds;
            oscard = golfie.forEach;
            tangon = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.id;
                    tangon = entity.nick;
                    michal = _closure1_slot11;
                    entity = michal.getGuild;
                    report = entity.bind(michal)(zuuluu);
                    entity = null;
                    if(!(entity != report)) { _fun00012_ip = 59; continue _fun00011 }
 37:
                    michal = _closure2_slot0;
                    entity = {};
                    entity['guild'] = report;
                    entity['nick'] = tangon;
                    michal[zuuluu] = entity;
 59:
                    entity = undefined;
                    return entity;
                }
            };
            tangon = oscard.bind(golfie)(tangon);
            option = _closure1_slot25;
            golfie = option.set;
            tangon = michal.user;
            oscard = tangon.id;
            verify = _closure1_slot13;
            tangon = verify.getFlattenedGuildIds;
            offset = tangon.bind(verify)();
            verify = offset.filter;
            tangon = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity != michal;
                return entity;
            };
            offset = verify.bind(offset)(tangon);
            verify = offset.map;
            tangon = function(argFoo) {
                zuuluu = argFoo;
                entity = {};
                tangon = _closure2_slot0;
                tangon = tangon[zuuluu];
                tangon = tangon.guild;
                entity['guild'] = tangon;
                michal = _closure2_slot0;
                michal = michal[zuuluu];
                michal = michal.nick;
                entity['nick'] = michal;
                return entity;
            };
            tangon = verify.bind(offset)(tangon);
            tangon = golfie.bind(option)(oscard, tangon);
 211:
            tangon = michal.mutual_friends_count;
            if(!(report != tangon)) { _fun00010_ip = 252; continue _fun00009 }
 221:
            option = michal.mutual_friends_count;
            golfie = _closure1_slot24;
            oscard = golfie.set;
            tangon = michal.user;
            tangon = tangon.id;
            tangon = oscard.bind(golfie)(tangon, option);
 252:
            tangon = michal.mutual_friends;
            if(!(report != tangon)) { _fun00010_ip = 338; continue _fun00009 }
 262:
            option = _closure1_slot23;
            golfie = option.set;
            tangon = michal.user;
            oscard = tangon.id;
            verify = _closure1_slot35;
            tangon = michal.mutual_friends;
            tangon = verify.bind(entity)(tangon);
            tangon = golfie.bind(option)(oscard, tangon);
            option = _closure1_slot24;
            golfie = option.set;
            tangon = michal.user;
            oscard = tangon.id;
            tangon = michal.mutual_friends;
            tangon = tangon.length;
            tangon = golfie.bind(option)(oscard, tangon);
 338:
            tangon = michal.premium_since;
            tangon = report != tangon;
            offset = null;
            if(!tangon) { _fun00010_ip = 387; continue _fun00009 }
 353:
            tangon = global;
            golfie = tangon.Date;
            result = michal.premium_since;
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            echoed = oscard;
            tangon = new echoed[golfie](result, output);
            offset = tangon instanceof Object ? tangon : oscard;
 387:
            var _closure2_slot1 = offset;
            tangon = michal.premium_guild_since;
            oscard = report != tangon;
            tangon = null;
            if(!oscard) { _fun00010_ip = 440; continue _fun00009 }
 406:
            oscard = global;
            option = oscard.Date;
            result = michal.premium_guild_since;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            echoed = golfie;
            oscard = new echoed[option](result, output);
            tangon = oscard instanceof Object ? oscard : golfie;
 440:
            var _closure2_slot2 = tangon;
            foxtra = michal.application;
            verify = _closure1_slot19;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            oscard = {};
            romeon = michal.user;
            romeon = romeon.id;
            oscard['userId'] = romeon;
            backup = michal.user_profile;
            kiloes = report == backup;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 505; continue _fun00009 }
 499:
            romeon = backup.banner;
 505:
            oscard['banner'] = romeon;
            backup = michal.user_profile;
            kiloes = report == backup;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 531; continue _fun00009 }
 525:
            romeon = backup.accent_color;
 531:
            oscard['accentColor'] = romeon;
            backup = michal.user_profile;
            kiloes = report == backup;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 557; continue _fun00009 }
 551:
            romeon = backup.theme_colors;
 557:
            oscard['themeColors'] = romeon;
            backup = michal.user_profile;
            kiloes = report == backup;
            romeon = undefined;
            if(kiloes) { _fun00010_ip = 583; continue _fun00009 }
 577:
            romeon = backup.popout_animation_particle_type;
 583:
            oscard['popoutAnimationParticleType'] = romeon;
            romeon = michal.user_profile;
            backup = report == romeon;
            kiloes = undefined;
            if(backup) { _fun00010_ip = 609; continue _fun00009 }
 603:
            kiloes = romeon.bio;
 609:
            sizing = report != kiloes;
            romeon = '';
            backup = romeon;
            if(!sizing) { _fun00010_ip = 626; continue _fun00009 }
 623:
            backup = kiloes;
 626:
            oscard['bio'] = backup;
            kiloes = michal.user_profile;
            sizing = report == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 666; continue _fun00009 }
 646:
            kiloes = kiloes.profile_effect;
            sizing = report == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 666; continue _fun00009 }
 661:
            backup = kiloes.id;
 666:
            oscard['profileEffectId'] = backup;
            kiloes = michal.user_profile;
            sizing = report == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 707; continue _fun00009 }
 686:
            kiloes = kiloes.profile_effect;
            sizing = report == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 707; continue _fun00009 }
 701:
            backup = kiloes.expires_at;
 707:
            oscard['profileEffectExpiresAt'] = backup;
            kiloes = michal.user_profile;
            sizing = report == kiloes;
            backup = undefined;
            if(sizing) { _fun00010_ip = 733; continue _fun00009 }
 727:
            backup = kiloes.pronouns;
 733:
            kiloes = report != backup;
            if(!kiloes) { _fun00010_ip = 743; continue _fun00009 }
 740:
            romeon = backup;
 743:
            oscard['pronouns'] = romeon;
            kiloes = michal.connected_accounts;
            backup = kiloes.filter;
            romeon = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 14;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isSupported;
                entity = argFoo;
                entity = entity.type;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            romeon = backup.bind(kiloes)(romeon);
            if(!(report == romeon)) { _fun00010_ip = 777; continue _fun00009 }
 773:
            romeon = new Array(0);
 777:
            oscard['connectedAccounts'] = romeon;
            romeon = michal.application_role_connections;
            if(!(report == romeon)) { _fun00010_ip = 798; continue _fun00009 }
 794:
            romeon = new Array(0);
 798:
            oscard['applicationRoleConnections'] = romeon;
            oscard['premiumSince'] = offset;
            offset = michal.premium_type;
            oscard['premiumType'] = offset;
            oscard['premiumGuildSince'] = tangon;
            tangon = global;
            romeon = tangon.Date;
            offset = romeon.now;
            offset = offset.bind(romeon)();
            oscard['lastFetched'] = offset;
            offset = michal.legacy_username;
            oscard['legacyUsername'] = offset;
            romeon = report != foxtra;
            offset = null;
            if(!romeon) { _fun00010_ip = 968; continue _fun00009 }
 868:
            romeon = {};
            backup = foxtra.id;
            romeon['id'] = backup;
            backup = foxtra.primary_sku_id;
            romeon['primarySkuId'] = backup;
            backup = foxtra.custom_install_url;
            romeon['customInstallUrl'] = backup;
            backup = foxtra.install_params;
            romeon['installParams'] = backup;
            backup = foxtra.integration_types_config;
            romeon['integrationTypesConfig'] = backup;
            backup = foxtra.flags;
            romeon['flags'] = backup;
            backup = foxtra.popular_application_command_ids;
            romeon['popularApplicationCommandIds'] = backup;
            backup = foxtra.storefront_available;
            romeon['storefront_available'] = backup;
            foxtra = foxtra.name;
            romeon['name'] = foxtra;
            offset = romeon;
 968:
            oscard['application'] = offset;
            offset = michal.badges;
            if(!(report == offset)) { _fun00010_ip = 990; continue _fun00009 }
 982:
            offset = michal.badges;
            _fun00010_ip = 1011; continue _fun00009;
 990:
            foxtra = michal.badges;
            romeon = foxtra.map;
            yankee = function(argFoo) {
                _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
                    michal = argFoo;
                    zuuluu = _closure1_slot0;
                    entity = _closure1_slot2;
                    golfie = 15;
                    entity = entity[golfie];
                    verify = undefined;
                    report = zuuluu.bind(verify)(entity);
                    zuuluu = report.getTieredTenureBadgeData;
                    entity = michal.id;
                    entity = zuuluu.bind(report)(entity);
                    report = michal.id;
                    zuuluu = 'premium';
                    if(!(zuuluu !== report)) { _fun00014_ip = 63; continue _fun00013 }
 57:
                    zuuluu = null;
                    if(!(zuuluu != entity)) { _fun00014_ip = 79; continue _fun00013 }
 63:
                    zuuluu = _closure2_slot1;
                    report = null;
                    if(!(report == zuuluu)) { _fun00014_ip = 218; continue _fun00013 }
 79:
                    offset = michal.id;
                    oscard = offset.startsWith;
                    zuuluu = 'guild_booster_lvl';
                    oscard = oscard.bind(offset)(zuuluu);
                    zuuluu = michal;
                    if(!oscard) { _fun00014_ip = 216; continue _fun00013 }
 107:
                    offset = _closure2_slot2;
                    oscard = null;
                    zuuluu = michal;
                    if(!(oscard != offset)) { _fun00014_ip = 216; continue _fun00013 }
 123:
                    oscard = {};
                    output = oscard;
                    sizing = michal;
                    offset = copyDataProperties(output, sizing);
                    yankee = _closure1_slot0;
                    kiloes = _closure1_slot2;
                    offset = 16;
                    romeon = kiloes[offset];
                    romeon = yankee.bind(verify)(romeon);
                    foxtra = romeon.intl;
                    romeon = foxtra.formatToPlainString;
                    offset = kiloes[offset];
                    offset = yankee.bind(verify)(offset);
                    offset = offset.t;
                    yankee = offset.IWkAq6;
                    offset = {};
                    backup = _closure2_slot2;
                    offset['date'] = backup;
                    yankee = romeon.bind(foxtra)(yankee, offset);
                    offset = 'description';
                    oscard[offset] = yankee;
                    zuuluu = oscard;
 216:
                    return zuuluu;
 218:
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    offset = 16;
                    yankee = zuuluu[offset];
                    yankee = oscard.bind(verify)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.formatToPlainString;
                    zuuluu = zuuluu[offset];
                    zuuluu = oscard.bind(verify)(zuuluu);
                    zuuluu = zuuluu.t;
                    oscard = zuuluu.8zbGNT;
                    zuuluu = {};
                    foxtra = _closure2_slot1;
                    zuuluu['date'] = foxtra;
                    zuuluu = yankee.bind(romeon)(oscard, zuuluu);
                    if(!(report != entity)) { _fun00014_ip = 409; continue _fun00013 }
 289:
                    oscard = entity.badgeVersion;
                    report = 2;
                    if(!(report !== oscard)) { _fun00014_ip = 342; continue _fun00013 }
 302:
                    oscard = _closure1_slot0;
                    report = _closure1_slot2;
                    report = report[golfie];
                    golfie = oscard.bind(verify)(report);
                    oscard = golfie.getTieredTenureBadgeTooltipCopy;
                    report = entity.id;
                    entity = _closure2_slot1;
                    entity = oscard.bind(golfie)(report, entity);
                    _fun00014_ip = 406; continue _fun00013;
 342:
                    report = _closure1_slot0;
                    tangon = _closure1_slot2;
                    oscard = tangon[offset];
                    oscard = report.bind(verify)(oscard);
                    golfie = oscard.intl;
                    oscard = golfie.formatToPlainString;
                    tangon = tangon[offset];
                    tangon = report.bind(verify)(tangon);
                    tangon = tangon.t;
                    report = tangon.Hu4jfn;
                    tangon = {};
                    option = _closure2_slot1;
                    tangon['date'] = option;
                    entity = oscard.bind(golfie)(report, tangon);
 406:
                    zuuluu = entity;
 409:
                    entity = {};
                    output = entity;
                    sizing = michal;
                    michal = copyDataProperties(output, sizing);
                    michal = 'description';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            offset = romeon.bind(foxtra)(yankee);
 1011:
            oscard['badges'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            golfie = michal.user_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1058; continue _fun00009 }
 1037:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1058; continue _fun00009 }
 1052:
            oscard = golfie.expires_at;
 1058:
            if(!(report != oscard)) { _fun00010_ip = 1152; continue _fun00009 }
 1062:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            echoed = golfie;
            oscard = new echoed[oscard](result);
            verify = oscard instanceof Object ? oscard : golfie;
            option = _closure1_slot21;
            golfie = option.set;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(option)(oscard, verify);
            golfie = _closure1_slot30;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(entity)(oscard);
 1152:
            oscard = michal.guild_member_profile;
            if(!(report != oscard)) { _fun00010_ip = 1780; continue _fun00009 }
 1165:
            verify = {};
            oscard = michal.user;
            oscard = oscard.id;
            verify['userId'] = oscard;
            oscard = michal.guild_member_profile;
            oscard = oscard.guild_id;
            verify['guildId'] = oscard;
            oscard = michal.guild_member_profile;
            oscard = oscard.banner;
            verify['banner'] = oscard;
            oscard = michal.guild_member_profile;
            oscard = oscard.accent_color;
            verify['accentColor'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1251; continue _fun00009 }
 1245:
            oscard = golfie.theme_colors;
 1251:
            verify['themeColors'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1277; continue _fun00009 }
 1271:
            oscard = golfie.popout_animation_particle_type;
 1277:
            verify['popoutAnimationParticleType'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1317; continue _fun00009 }
 1297:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1317; continue _fun00009 }
 1312:
            oscard = golfie.id;
 1317:
            verify['profileEffectId'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1358; continue _fun00009 }
 1337:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1358; continue _fun00009 }
 1352:
            oscard = golfie.expires_at;
 1358:
            verify['profileEffectExpiresAt'] = oscard;
            oscard = michal.guild_member_profile;
            oscard = oscard.bio;
            verify['bio'] = oscard;
            oscard = michal.guild_member_profile;
            oscard = oscard.pronouns;
            verify['pronouns'] = oscard;
            oscard = michal.guild_badges;
            verify['badges'] = oscard;
            option = _closure1_slot20;
            golfie = option.get;
            oscard = michal.user;
            oscard = oscard.id;
            option = golfie.bind(option)(oscard);
            if(!(report == option)) { _fun00010_ip = 1513; continue _fun00009 }
 1438:
            oscard = tangon.Map;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            echoed = golfie;
            oscard = new echoed[oscard](result);
            yankee = oscard instanceof Object ? oscard : golfie;
            golfie = yankee.set;
            oscard = michal.guild_member_profile;
            oscard = oscard.guild_id;
            oscard = golfie.bind(yankee)(oscard, verify);
            offset = _closure1_slot20;
            golfie = offset.set;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(offset)(oscard, yankee);
            _fun00010_ip = 1535; continue _fun00009;
 1513:
            golfie = option.set;
            oscard = michal.guild_member_profile;
            oscard = oscard.guild_id;
            oscard = golfie.bind(option)(oscard, verify);
 1535:
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1571; continue _fun00009 }
 1550:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00010_ip = 1571; continue _fun00009 }
 1565:
            oscard = golfie.expires_at;
 1571:
            if(!(report != oscard)) { _fun00010_ip = 1780; continue _fun00009 }
 1578:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            echoed = golfie;
            oscard = new echoed[oscard](result);
            golfie = oscard instanceof Object ? oscard : golfie;
            verify = _closure1_slot22;
            option = verify.get;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = option.bind(verify)(oscard);
            if(!(report == oscard)) { _fun00010_ip = 1727; continue _fun00009 }
 1652:
            tangon = tangon.Map;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            echoed = report;
            tangon = new echoed[tangon](result);
            verify = tangon instanceof Object ? tangon : report;
            report = verify.set;
            tangon = michal.guild_member_profile;
            tangon = tangon.guild_id;
            tangon = report.bind(verify)(tangon, golfie);
            option = _closure1_slot22;
            report = option.set;
            tangon = michal.user;
            tangon = tangon.id;
            tangon = report.bind(option)(tangon, verify);
            _fun00010_ip = 1749; continue _fun00009;
 1727:
            report = oscard.set;
            tangon = michal.guild_member_profile;
            tangon = tangon.guild_id;
            tangon = report.bind(oscard)(tangon, golfie);
 1749:
            tangon = _closure1_slot31;
            zuuluu = michal.user;
            zuuluu = zuuluu.id;
            michal = michal.guild_member_profile;
            michal = michal.guild_id;
            michal = tangon.bind(entity)(zuuluu, michal);
 1780:
            return entity;
        }
    };
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleProfileFetchStart
        _fun00015: for(var _fun00016_ip = 0; ; ) switch(_fun00016_ip) {
 0:
            entity = argFoo;
            zuuluu = entity.userId;
            oscard = entity.guildId;
            michal = entity.withMutualFriends;
            tangon = null;
            if(!(tangon == oscard)) { _fun00016_ip = 32; continue _fun00015 }
 25:
            oscard = _closure1_slot15;
 32:
            golfie = _closure1_slot16;
            report = golfie.get;
            report = report.bind(golfie)(zuuluu);
            if(!(tangon == report)) { _fun00016_ip = 108; continue _fun00015 }
 53:
            tangon = global;
            tangon = tangon.Set;
            golfie = tangon.prototype;
            golfie = Object.create(golfie, {constructor: {value: tangon}});
            yankee = golfie;
            tangon = new yankee[tangon](offset);
            option = tangon instanceof Object ? tangon : golfie;
            tangon = option.add;
            tangon = tangon.bind(option)(oscard);
            golfie = _closure1_slot16;
            tangon = golfie.set;
            tangon = tangon.bind(golfie)(zuuluu, option);
            _fun00016_ip = 118; continue _fun00015;
 108:
            tangon = report.add;
            tangon = tangon.bind(report)(oscard);
 118:
            if(!michal) { _fun00016_ip = 135; continue _fun00015 }
 121:
            michal = _closure1_slot17;
            entity = michal.add;
            entity = entity.bind(michal)(zuuluu);
 135:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleProfileFetchFailure
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            golfie = entity.guildId;
            zuuluu = entity.apiError;
            tangon = _closure1_slot16;
            entity = tangon.get;
            oscard = entity.bind(tangon)(report);
            entity = null;
            if(!(entity != oscard)) { _fun00018_ip = 60; continue _fun00017 }
 42:
            tangon = oscard.delete;
            if(!(entity == golfie)) { _fun00018_ip = 55; continue _fun00017 }
 51:
            golfie = _closure1_slot15;
 55:
            tangon = tangon.bind(oscard)(golfie);
 60:
            oscard = _closure1_slot17;
            tangon = oscard.delete;
            tangon = tangon.bind(oscard)(report);
            oscard = _closure1_slot19;
            tangon = oscard.get;
            golfie = tangon.bind(oscard)(report);
            if(!(entity == golfie)) { _fun00018_ip = 142; continue _fun00017 }
 92:
            tangon = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'lastFetched': 0};
            oscard = new Array(0);
            tangon['connectedAccounts'] = oscard;
            oscard = new Array(0);
            tangon['applicationRoleConnections'] = oscard;
            tangon['userId'] = report;
            oscard = undefined;
            tangon['fetchError'] = oscard;
            golfie = tangon;
 142:
            tangon = global;
            oscard = tangon.Date;
            tangon = oscard.now;
            tangon = tangon.bind(oscard)();
            golfie['lastFetched'] = tangon;
            golfie['fetchError'] = zuuluu;
            oscard = _closure1_slot19;
            tangon = oscard.set;
            tangon = tangon.bind(oscard)(report, golfie);
            oscard = entity == zuuluu;
            entity = undefined;
            tangon = undefined;
            if(oscard) { _fun00018_ip = 202; continue _fun00017 }
 197:
            tangon = zuuluu.status;
 202:
            zuuluu = 404;
            if(!(zuuluu === tangon)) { _fun00018_ip = 267; continue _fun00017 }
 212:
            oscard = _closure1_slot24;
            tangon = oscard.set;
            zuuluu = 0;
            zuuluu = tangon.bind(oscard)(report, zuuluu);
            oscard = _closure1_slot23;
            tangon = oscard.set;
            zuuluu = new Array(0);
            zuuluu = tangon.bind(oscard)(report, zuuluu);
            tangon = _closure1_slot25;
            zuuluu = tangon.set;
            michal = new Array(0);
            michal = zuuluu.bind(tangon)(report, michal);
 267:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function() { // Original name: handleProfileUpdateStart
        entity = true;
        _closure1_slot26 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot40 = entity;
    entity = function(argFoo) { // Original name: handleProfileUpdateSuccess
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            zuuluu = false;
            _closure1_slot26 = zuuluu;
            zuuluu = michal.guild_id;
            report = null;
            if(!(report == zuuluu)) { _fun00020_ip = 283; continue _fun00019 }
 26:
            oscard = michal.userId;
            sizing = michal.accent_color;
            kiloes = michal.banner;
            backup = michal.bio;
            foxtra = michal.pronouns;
            romeon = michal.popout_animation_particle_type;
            yankee = michal.theme_colors;
            offset = michal.profileEffectId;
            zuuluu = michal.profileEffectExpiresAt;
            golfie = _closure1_slot19;
            tangon = golfie.get;
            verify = tangon.bind(golfie)(oscard);
            if(!(report != verify)) { _fun00020_ip = 631; continue _fun00019 }
 100:
            option = _closure1_slot19;
            golfie = option.set;
            tangon = {};
            result = tangon;
            output = verify;
            verify = copyDataProperties(result, output);
            verify = 'accentColor';
            tangon[verify] = sizing;
            verify = 'banner';
            tangon[verify] = kiloes;
            verify = 'bio';
            tangon[verify] = backup;
            verify = 'pronouns';
            tangon[verify] = foxtra;
            verify = 'popoutAnimationParticleType';
            tangon[verify] = romeon;
            verify = 'themeColors';
            tangon[verify] = yankee;
            verify = 'profileEffectId';
            tangon[verify] = offset;
            verify = 'profileEffectExpiresAt';
            tangon[verify] = zuuluu;
            tangon = golfie.bind(option)(oscard, tangon);
            if(!(report != zuuluu)) { _fun00020_ip = 631; continue _fun00019 }
 206:
            golfie = _closure1_slot0;
            tangon = _closure1_slot2;
            zuuluu = 17;
            zuuluu = tangon[zuuluu];
            tangon = undefined;
            zuuluu = golfie.bind(tangon)(zuuluu);
            zuuluu = zuuluu.Timeout;
            golfie = zuuluu.prototype;
            golfie = Object.create(golfie, {constructor: {value: zuuluu}});
            echoed = golfie;
            zuuluu = new echoed[zuuluu](result);
            option = zuuluu instanceof Object ? zuuluu : golfie;
            golfie = _closure1_slot21;
            zuuluu = golfie.set;
            zuuluu = zuuluu.bind(golfie)(oscard, option);
            zuuluu = _closure1_slot30;
            zuuluu = zuuluu.bind(tangon)(oscard);
            _fun00020_ip = 631; continue _fun00019;
 283:
            tangon = michal.userId;
            zuuluu = michal.guild_id;
            sizing = michal.accent_color;
            kiloes = michal.banner;
            backup = michal.bio;
            foxtra = michal.pronouns;
            romeon = michal.popout_animation_particle_type;
            yankee = michal.theme_colors;
            offset = michal.profileEffectId;
            michal = michal.profileEffectExpiresAt;
            golfie = _closure1_slot20;
            oscard = golfie.get;
            option = oscard.bind(golfie)(tangon);
            if(!(report != zuuluu)) { _fun00020_ip = 631; continue _fun00019 }
 362:
            if(!(report != option)) { _fun00020_ip = 631; continue _fun00019 }
 369:
            oscard = option.get;
            verify = oscard.bind(option)(zuuluu);
            if(!(report != verify)) { _fun00020_ip = 631; continue _fun00019 }
 386:
            golfie = option.set;
            oscard = {};
            result = oscard;
            output = verify;
            verify = copyDataProperties(result, output);
            verify = 'accentColor';
            oscard[verify] = sizing;
            verify = 'banner';
            oscard[verify] = kiloes;
            verify = 'bio';
            oscard[verify] = backup;
            verify = 'pronouns';
            oscard[verify] = foxtra;
            verify = 'popoutAnimationParticleType';
            oscard[verify] = romeon;
            verify = 'themeColors';
            oscard[verify] = yankee;
            verify = 'profileEffectId';
            oscard[verify] = offset;
            verify = 'profileEffectExpiresAt';
            oscard[verify] = michal;
            oscard = golfie.bind(option)(zuuluu, oscard);
            if(!(report != michal)) { _fun00020_ip = 631; continue _fun00019 }
 488:
            golfie = _closure1_slot0;
            oscard = _closure1_slot2;
            michal = 17;
            oscard = oscard[michal];
            michal = undefined;
            oscard = golfie.bind(michal)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            echoed = golfie;
            oscard = new echoed[oscard](result);
            golfie = oscard instanceof Object ? oscard : golfie;
            option = _closure1_slot22;
            oscard = option.get;
            oscard = oscard.bind(option)(tangon);
            if(!(report == oscard)) { _fun00020_ip = 610; continue _fun00019 }
 554:
            report = global;
            report = report.Map;
            option = report.prototype;
            option = Object.create(option, {constructor: {value: report}});
            echoed = option;
            report = new echoed[report](result);
            verify = report instanceof Object ? report : option;
            report = verify.set;
            report = report.bind(verify)(zuuluu, golfie);
            option = _closure1_slot22;
            report = option.set;
            report = report.bind(option)(tangon, verify);
            _fun00020_ip = 621; continue _fun00019;
 610:
            report = oscard.set;
            report = report.bind(oscard)(zuuluu, golfie);
 621:
            entity = _closure1_slot31;
            entity = entity.bind(michal)(tangon, zuuluu);
 631:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot41 = entity;
    entity = function() { // Original name: handleProfileUpdateFailure
        entity = false;
        _closure1_slot26 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot42 = entity;
    entity = function(argFoo) { // Original name: handleUserUpdate
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            entity = argFoo;
            entity = entity.user;
            tangon = entity.id;
            zuuluu = _closure1_slot16;
            entity = zuuluu.get;
            report = entity.bind(zuuluu)(tangon);
            entity = null;
            golfie = entity == report;
            zuuluu = undefined;
            oscard = undefined;
            if(golfie) { _fun00022_ip = 48; continue _fun00021 }
 43:
            oscard = report.size;
 48:
            golfie = entity != oscard;
            report = 0;
            entity = 0;
            if(!golfie) { _fun00022_ip = 62; continue _fun00021 }
 59:
            entity = oscard;
 62:
            report = entity > report;
            entity = !report;
            if(report) { _fun00022_ip = 81; continue _fun00021 }
 72:
            michal = _closure1_slot48;
            entity = michal.bind(zuuluu)(tangon);
 81:
            return entity;
        }
    };
    var _closure1_slot43 = entity;
    entity = function() { // Original name: handleGuildStatusChange
        michal = _closure1_slot19;
        entity = michal.keys;
        oscard = entity.bind(michal)();
        tangon = new Array(0);
        report = 0;
        golfie = tangon;
        entity = arraySpread(golfie, oscard, report);
        zuuluu = tangon.reduce;
        michal = function(argFoo, argBar) {
            _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
 0:
                michal = argFoo;
                tangon = _closure1_slot48;
                zuuluu = undefined;
                entity = argBar;
                entity = tangon.bind(zuuluu)(entity);
                if(entity) { _fun00024_ip = 26; continue _fun00023 }
 23:
                entity = michal;
 26:
                return entity;
            }
        };
        entity = false;
        entity = zuuluu.bind(tangon)(michal, entity);
        return entity;
    };
    var _closure1_slot44 = entity;
    entity = function(argFoo) { // Original name: handleGuildMemberStatusChange
        zuuluu = _closure1_slot48;
        entity = argFoo;
        entity = entity.user;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo) { // Original name: handleRelationshipStatusChange
        zuuluu = _closure1_slot48;
        entity = argFoo;
        entity = entity.relationship;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot46 = entity;
    entity = function() { // Original name: handleLocaleStoreChange
        zuuluu = _closure1_slot16;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        zuuluu = _closure1_slot17;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        zuuluu = _closure1_slot19;
        michal = zuuluu.clear;
        michal = michal.bind(zuuluu)();
        michal = _closure1_slot20;
        entity = michal.clear;
        entity = entity.bind(michal)();
        entity = undefined;
        return entity;
    };
    var _closure1_slot47 = entity;
    entity = function(argFoo) { // Original name: resetProfileFetch
        _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00026_ip = 52; continue _fun00025 }
 9:
            zuuluu = _closure1_slot19;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)(tangon);
            if(!(entity != michal)) { _fun00026_ip = 48; continue _fun00025 }
 30:
            entity = 0;
            michal['lastFetched'] = entity;
            entity = undefined;
            michal['fetchError'] = entity;
            return entity;
 48:
            entity = false;
            return entity;
 52:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot48 = entity;
    michal = global;
    verify = michal.Object;
    option = verify.defineProperty;
    golfie = {};
    entity = true;
    golfie['value'] = entity;
    entity = '__esModule';
    entity = option.bind(verify)(zuuluu, entity, golfie);
    entity = 0;
    golfie = oscard[entity];
    entity = undefined;
    golfie = offset.bind(entity)(golfie);
    var _closure1_slot3 = golfie;
    golfie = 1;
    option = oscard[golfie];
    option = offset.bind(entity)(option);
    var _closure1_slot4 = option;
    option = 2;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot5 = option;
    option = 3;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot6 = option;
    option = 4;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot7 = option;
    option = 5;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot8 = option;
    option = 6;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot9 = option;
    option = 7;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot10 = option;
    option = 8;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot11 = option;
    option = 9;
    option = oscard[option];
    option = offset.bind(entity)(option);
    var _closure1_slot12 = option;
    option = 10;
    option = oscard[option];
    option = offset.bind(entity)(option);
    verify = 11;
    verify = oscard[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot13 = verify;
    verify = 12;
    verify = oscard[verify];
    verify = report.bind(entity)(verify);
    verify = verify.EPHEMERAL_COLLECTIBLE_EXPIRY_GRACE_PERIOD_IN_MS;
    var _closure1_slot14 = verify;
    offset = michal.Symbol;
    verify = 'NO GUILD ID';
    verify = offset.bind(entity)(verify);
    var _closure1_slot15 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot16 = verify;
    verify = michal.Set;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot17 = verify;
    verify = 2147483647;
    var _closure1_slot18 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot19 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot20 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot21 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot22 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot23 = verify;
    verify = michal.Map;
    offset = verify.prototype;
    offset = Object.create(offset, {constructor: {value: verify}});
    backup = offset;
    verify = new backup[verify](foxtra);
    verify = verify instanceof Object ? verify : offset;
    var _closure1_slot24 = verify;
    michal = michal.Map;
    verify = michal.prototype;
    verify = Object.create(verify, {constructor: {value: michal}});
    backup = verify;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : verify;
    var _closure1_slot25 = michal;
    michal = false;
    var _closure1_slot26 = michal;
    michal = function(argFoo) {
        tangon = function() { // Original name: UserProfileStore
            oscard = this;
            zuuluu = _closure1_slot3;
            report = _closure2_slot0;
            tangon = undefined;
            zuuluu = zuuluu.bind(tangon)(oscard, report);
            zuuluu = _closure1_slot28;
            golfie = {};
            option = function() { // Original name: CACHE_LOADED_LAZY
                michal = _closure3_slot0;
                entity = michal.loadCache;
                entity = entity.bind(michal)();
                return entity;
            };
            golfie['CACHE_LOADED_LAZY'] = option;
            option = _closure1_slot38;
            golfie['USER_PROFILE_FETCH_START'] = option;
            option = _closure1_slot39;
            golfie['USER_PROFILE_FETCH_FAILURE'] = option;
            option = _closure1_slot37;
            golfie['USER_PROFILE_FETCH_SUCCESS'] = option;
            option = _closure1_slot40;
            golfie['USER_PROFILE_UPDATE_START'] = option;
            option = _closure1_slot41;
            golfie['USER_PROFILE_UPDATE_SUCCESS'] = option;
            option = _closure1_slot42;
            golfie['USER_PROFILE_UPDATE_FAILURE'] = option;
            option = _closure1_slot33;
            golfie['MUTUAL_FRIENDS_FETCH_START'] = option;
            option = _closure1_slot36;
            golfie['MUTUAL_FRIENDS_FETCH_SUCCESS'] = option;
            option = _closure1_slot34;
            golfie['MUTUAL_FRIENDS_FETCH_FAILURE'] = option;
            option = _closure1_slot43;
            golfie['USER_UPDATE'] = option;
            golfie['GUILD_MEMBER_UPDATE'] = option;
            option = _closure1_slot44;
            golfie['GUILD_JOIN'] = option;
            golfie['GUILD_DELETE'] = option;
            option = _closure1_slot45;
            golfie['GUILD_MEMBER_ADD'] = option;
            golfie['GUILD_MEMBER_REMOVE'] = option;
            option = _closure1_slot46;
            golfie['RELATIONSHIP_ADD'] = option;
            golfie['RELATIONSHIP_REMOVE'] = option;
            golfie['RELATIONSHIP_UPDATE'] = option;
            entity = _closure1_slot32;
            golfie['LOGOUT'] = entity;
            entity = new Array(1);
            entity[0] = golfie;
            entity = zuuluu.bind(tangon)(oscard, report, entity);
            var _closure3_slot0 = entity;
            michal = function() {
                _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
                    zuuluu = _closure3_slot0;
                    michal = zuuluu.readSnapshot;
                    entity = _closure2_slot0;
                    entity = entity.LATEST_SNAPSHOT_VERSION;
                    zuuluu = michal.bind(zuuluu)(entity);
                    entity = null;
                    if(!(entity != zuuluu)) { _fun00028_ip = 54; continue _fun00027 }
 37:
                    michal = zuuluu.forEach;
                    entity = function(argFoo) {
                        _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                            entity = argFoo;
                            tangon = entity.userId;
                            zuuluu = entity.profile;
                            entity = null;
                            if(!(entity != tangon)) { _fun00030_ip = 61; continue _fun00029 }
 20:
                            if(!(entity == zuuluu)) { _fun00030_ip = 43; continue _fun00029 }
 24:
                            michal = _closure1_slot19;
                            entity = michal.delete;
                            entity = entity.bind(michal)(tangon);
                            _fun00030_ip = 61; continue _fun00029;
 43:
                            michal = _closure1_slot19;
                            entity = michal.set;
                            entity = entity.bind(michal)(tangon, zuuluu);
 61:
                            entity = undefined;
                            return entity;
                        }
                    };
                    entity = michal.bind(zuuluu)(entity);
 54:
                    entity = undefined;
                    return entity;
                }
            };
            entity['loadCache'] = michal;
            return entity;
        };
        var _closure2_slot0 = tangon;
        report = _closure1_slot7;
        zuuluu = undefined;
        michal = argFoo;
        michal = report.bind(zuuluu)(tangon, michal);
        michal = _closure1_slot4;
        report = {};
        entity = 'initialize';
        report['key'] = entity;
        entity = function() { // Original name: value
            tangon = this;
            zuuluu = tangon.waitFor;
            michal = _closure1_slot13;
            michal = zuuluu.bind(tangon)(michal);
            zuuluu = tangon.syncWith;
            report = _closure1_slot8;
            michal = new Array(1);
            michal[0] = report;
            entity = _closure1_slot47;
            entity = zuuluu.bind(tangon)(michal, entity);
            entity = undefined;
            return entity;
        };
        report['value'] = entity;
        entity = new Array(10);
        entity[0] = report;
        report = {};
        golfie = 'isFetchingProfile';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                tangon = argBar;
                zuuluu = _closure1_slot16;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                oscard = null;
                entity = oscard != zuuluu;
                if(!entity) { _fun00032_ip = 50; continue _fun00031 }
 32:
                michal = zuuluu.has;
                if(!(oscard == tangon)) { _fun00032_ip = 45; continue _fun00031 }
 41:
                tangon = _closure1_slot15;
 45:
                entity = michal.bind(zuuluu)(tangon);
 50:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[1] = report;
        report = {};
        golfie = 'isFetchingFriends';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot17;
            michal = zuuluu.has;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[2] = report;
        report = {};
        golfie = 'isSubmitting';
        report['key'] = golfie;
        golfie = function() { // Original name: get
            entity = _closure1_slot26;
            return entity;
        };
        report['get'] = golfie;
        entity[3] = report;
        report = {};
        golfie = 'getUserProfile';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot19;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[4] = report;
        report = {};
        golfie = 'getGuildMemberProfile';
        report['key'] = golfie;
        golfie = function(argFoo, argBar) { // Original name: value
            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                oscard = argBar;
                michal = null;
                zuuluu = michal == oscard;
                entity = null;
                if(zuuluu) { _fun00034_ip = 68; continue _fun00033 }
 14:
                report = _closure1_slot20;
                tangon = report.get;
                zuuluu = argFoo;
                report = tangon.bind(report)(zuuluu);
                tangon = michal == report;
                zuuluu = undefined;
                if(tangon) { _fun00034_ip = 53; continue _fun00033 }
 43:
                tangon = report.get;
                zuuluu = tangon.bind(report)(oscard);
 53:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00034_ip = 65; continue _fun00033 }
 62:
                michal = zuuluu;
 65:
                entity = michal;
 68:
                return entity;
            }
        };
        report['value'] = golfie;
        entity[5] = report;
        report = {};
        golfie = 'getMutualFriends';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot23;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[6] = report;
        report = {};
        golfie = 'getMutualFriendsCount';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot24;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[7] = report;
        report = {};
        golfie = 'getMutualGuilds';
        report['key'] = golfie;
        golfie = function(argFoo) { // Original name: value
            zuuluu = _closure1_slot25;
            michal = zuuluu.get;
            entity = argFoo;
            entity = michal.bind(zuuluu)(entity);
            return entity;
        };
        report['value'] = golfie;
        entity[8] = report;
        report = {};
        golfie = 'takeSnapshot';
        report['key'] = golfie;
        oscard = function() { // Original name: value
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                zuuluu = _closure1_slot10;
                michal = zuuluu.getId;
                report = michal.bind(zuuluu)();
                michal = _closure1_slot19;
                entity = michal.get;
                zuuluu = entity.bind(michal)(report);
                entity = null;
                if(!(entity == zuuluu)) { _fun00036_ip = 67; continue _fun00035 }
 37:
                entity = {};
                michal = _closure2_slot0;
                michal = michal.LATEST_SNAPSHOT_VERSION;
                entity['version'] = michal;
                michal = new Array(0);
                entity['data'] = michal;
                _fun00036_ip = 113; continue _fun00035;
 67:
                michal = {};
                tangon = _closure2_slot0;
                tangon = tangon.LATEST_SNAPSHOT_VERSION;
                michal['version'] = tangon;
                tangon = {};
                tangon['userId'] = report;
                tangon['profile'] = zuuluu;
                zuuluu = new Array(1);
                zuuluu[0] = tangon;
                michal['data'] = zuuluu;
                entity = michal;
 113:
                return entity;
            }
        };
        report['value'] = oscard;
        entity[9] = report;
        entity = michal.bind(zuuluu)(tangon, entity);
        return entity;
    };
    michal = michal.bind(entity)(option);
    option = 'UserProfileStore';
    michal['displayName'] = option;
    michal['LATEST_SNAPSHOT_VERSION'] = golfie;
    golfie = michal.prototype;
    golfie = Object.create(golfie, {constructor: {value: michal}});
    backup = golfie;
    michal = new backup[michal](foxtra);
    michal = michal instanceof Object ? michal : golfie;
    var _closure1_slot27 = michal;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/UserProfileStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();