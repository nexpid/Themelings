// app/modules/user_profile/UserProfileStore.tsx
export default (function(argFoo, argBar, argBaz, _, __, argFre, argPlu) {
    report = argBar;
    offset = argBaz;
    zuuluu = argFre;
    oscard = argPlu;
    var _closure1_slot0 = report;
    var _closure1_slot1 = offset;
    var _closure1_slot2 = oscard;
    entity = function() { // Original name: _isNativeReflectConstruct
        _fun00001: for(var _fun00002_ip = 0; ; ) switch(_fun00002_ip) {
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
            _fun00002_ip = 74; continue _fun00001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            michal = function() { // Original name: _isNativeReflectConstruct
                entity = _closure2_slot0;
                entity = !entity;
                entity = !entity;
                return entity;
            };
            _closure1_slot31 = michal;
            entity = undefined;
            entity = michal.bind(entity)();
            return entity;
        }
    };
    var _closure1_slot31 = entity;
    entity = function(argFoo) { // Original name: checkUserProfileEffectExpiry
        _fun00003: for(var _fun00004_ip = 0; ; ) switch(_fun00004_ip) {
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
            if(option) { _fun00004_ip = 45; continue _fun00003 }
 39:
            oscard = zuuluu.profileEffectExpiresAt;
 45:
            if(!(golfie != oscard)) { _fun00004_ip = 202; continue _fun00003 }
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
            if(!(!(yankee <= option))) { _fun00004_ip = 162; continue _fun00003 }
 103:
            verify = _closure1_slot21;
            option = verify.get;
            option = option.bind(verify)(report);
            if(!(golfie != option)) { _fun00004_ip = 160; continue _fun00003 }
 121:
            golfie = option.start;
            offset = oscard.Math;
            verify = offset.min;
            oscard = _closure1_slot18;
            oscard = verify.bind(offset)(oscard, yankee);
            tangon = function() {
                zuuluu = _closure1_slot32;
                michal = _closure2_slot0;
                entity = undefined;
                michal = zuuluu.bind(entity)(michal);
                return entity;
            };
            tangon = golfie.bind(option)(oscard, tangon);
            _fun00004_ip = 202; continue _fun00003;
 160:
            return entity;
 162:
            zuuluu['profileEffectId'] = entity;
            zuuluu['profileEffectExpiresAt'] = entity;
            tangon = _closure1_slot21;
            zuuluu = tangon.delete;
            zuuluu = zuuluu.bind(tangon)(report);
            zuuluu = _closure1_slot30;
            michal = zuuluu.emitChange;
            michal = michal.bind(zuuluu)();
 202:
            return entity;
        }
    };
    var _closure1_slot32 = entity;
    entity = function(argFoo, argBar) { // Original name: checkGuildMemberProfileEffectExpiry
        _fun00005: for(var _fun00006_ip = 0; ; ) switch(_fun00006_ip) {
 0:
            offset = argFoo;
            tangon = argBar;
            var _closure2_slot0 = offset;
            var _closure2_slot1 = tangon;
            zuuluu = _closure1_slot20;
            michal = zuuluu.get;
            golfie = michal.bind(zuuluu)(offset);
            michal = null;
            if(!(michal != golfie)) { _fun00006_ip = 271; continue _fun00005 }
 42:
            zuuluu = golfie.get;
            option = zuuluu.bind(golfie)(tangon);
            oscard = michal == option;
            verify = undefined;
            zuuluu = undefined;
            if(oscard) { _fun00006_ip = 69; continue _fun00005 }
 63:
            zuuluu = option.profileEffectExpiresAt;
 69:
            if(!(michal != zuuluu)) { _fun00006_ip = 271; continue _fun00005 }
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
            if(!(!(backup <= offset))) { _fun00006_ip = 202; continue _fun00005 }
 141:
            if(!(michal != zuuluu)) { _fun00006_ip = 200; continue _fun00005 }
 145:
            offset = zuuluu.get;
            yankee = offset.bind(zuuluu)(tangon);
            if(!(michal != yankee)) { _fun00006_ip = 198; continue _fun00005 }
 159:
            offset = yankee.start;
            foxtra = oscard.Math;
            romeon = foxtra.min;
            oscard = _closure1_slot18;
            oscard = romeon.bind(foxtra)(oscard, backup);
            report = function() {
                tangon = _closure1_slot33;
                zuuluu = _closure2_slot0;
                michal = _closure2_slot1;
                entity = undefined;
                michal = tangon.bind(entity)(zuuluu, michal);
                return entity;
            };
            report = offset.bind(yankee)(oscard, report);
            _fun00006_ip = 271; continue _fun00005;
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
            if(!(michal != zuuluu)) { _fun00006_ip = 257; continue _fun00005 }
 247:
            michal = zuuluu.delete;
            michal = michal.bind(zuuluu)(tangon);
 257:
            michal = _closure1_slot30;
            entity = michal.emitChange;
            entity = entity.bind(michal)();
 271:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot33 = entity;
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
        _closure1_slot28 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot34 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchStart
        entity = argFoo;
        zuuluu = entity.userId;
        michal = _closure1_slot17;
        entity = michal.add;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    var _closure1_slot35 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchFailure
        entity = argFoo;
        zuuluu = entity.userId;
        michal = _closure1_slot17;
        entity = michal.delete;
        entity = entity.bind(michal)(zuuluu);
        entity = undefined;
        return entity;
    };
    var _closure1_slot36 = entity;
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
    var _closure1_slot37 = entity;
    entity = function(argFoo) { // Original name: handleMutualFriendsFetchSuccess
        michal = argFoo;
        report = _closure1_slot17;
        tangon = report.delete;
        entity = michal.userId;
        entity = tangon.bind(report)(entity);
        golfie = _closure1_slot23;
        oscard = golfie.set;
        report = michal.userId;
        option = _closure1_slot37;
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
    var _closure1_slot38 = entity;
    entity = function(argFoo) { // Original name: handleProfileFetch
        _fun00007: for(var _fun00008_ip = 0; ; ) switch(_fun00008_ip) {
 0:
            entity = argFoo;
            michal = entity.userProfile;
            tangon = entity.fetchStartedAt;
            entity = undefined;
            var _closure2_slot0 = entity;
            var _closure2_slot1 = entity;
            var _closure2_slot2 = entity;
            zuuluu = michal.guild_member_profile;
            report = null;
            oscard = report == zuuluu;
            option = undefined;
            if(oscard) { _fun00008_ip = 53; continue _fun00007 }
 48:
            option = zuuluu.guild_id;
 53:
            if(!(report == option)) { _fun00008_ip = 64; continue _fun00007 }
 57:
            option = _closure1_slot15;
 64:
            verify = _closure1_slot16;
            golfie = verify.get;
            oscard = michal.user;
            oscard = oscard.id;
            golfie = golfie.bind(verify)(oscard);
            if(!(report != golfie)) { _fun00008_ip = 105; continue _fun00007 }
 95:
            oscard = golfie.delete;
            oscard = oscard.bind(golfie)(option);
 105:
            option = _closure1_slot17;
            golfie = option.delete;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(option)(oscard);
            oscard = michal.mutual_guilds;
            if(!(report != oscard)) { _fun00008_ip = 235; continue _fun00007 }
 139:
            oscard = {};
            _closure2_slot0 = oscard;
            option = michal.mutual_guilds;
            golfie = option.forEach;
            oscard = function(argFoo) {
                _fun00009: for(var _fun00010_ip = 0; ; ) switch(_fun00010_ip) {
 0:
                    entity = argFoo;
                    zuuluu = entity.id;
                    tangon = entity.nick;
                    michal = _closure1_slot11;
                    entity = michal.getGuild;
                    report = entity.bind(michal)(zuuluu);
                    entity = null;
                    if(!(entity != report)) { _fun00010_ip = 59; continue _fun00009 }
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
            oscard = golfie.bind(option)(oscard);
            verify = _closure1_slot25;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            offset = _closure1_slot13;
            oscard = offset.getFlattenedGuildIds;
            yankee = oscard.bind(offset)();
            offset = yankee.filter;
            oscard = function(argFoo) {
                michal = _closure2_slot0;
                entity = argFoo;
                michal = michal[entity];
                entity = null;
                entity = entity != michal;
                return entity;
            };
            yankee = offset.bind(yankee)(oscard);
            offset = yankee.map;
            oscard = function(argFoo) {
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
            oscard = offset.bind(yankee)(oscard);
            oscard = option.bind(verify)(golfie, oscard);
 235:
            oscard = michal.mutual_friends_count;
            if(!(report != oscard)) { _fun00008_ip = 311; continue _fun00007 }
 245:
            golfie = michal.mutual_friends_count;
            verify = _closure1_slot24;
            option = verify.set;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = option.bind(verify)(oscard, golfie);
            oscard = 0;
            if(!(oscard === golfie)) { _fun00008_ip = 311; continue _fun00007 }
 282:
            verify = _closure1_slot23;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            oscard = _closure1_slot26;
            oscard = option.bind(verify)(golfie, oscard);
 311:
            oscard = michal.mutual_friends;
            if(!(report != oscard)) { _fun00008_ip = 397; continue _fun00007 }
 321:
            verify = _closure1_slot23;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            offset = _closure1_slot37;
            oscard = michal.mutual_friends;
            oscard = offset.bind(entity)(oscard);
            oscard = option.bind(verify)(golfie, oscard);
            verify = _closure1_slot24;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            oscard = michal.mutual_friends;
            oscard = oscard.length;
            oscard = option.bind(verify)(golfie, oscard);
 397:
            oscard = michal.premium_since;
            oscard = report != oscard;
            romeon = null;
            if(!oscard) { _fun00008_ip = 446; continue _fun00007 }
 412:
            oscard = global;
            option = oscard.Date;
            update = michal.premium_since;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            source = golfie;
            oscard = new source[option](update, echoed);
            romeon = oscard instanceof Object ? oscard : golfie;
 446:
            _closure2_slot1 = romeon;
            oscard = michal.premium_guild_since;
            oscard = report != oscard;
            yankee = null;
            if(!oscard) { _fun00008_ip = 499; continue _fun00007 }
 465:
            oscard = global;
            option = oscard.Date;
            update = michal.premium_guild_since;
            golfie = option.prototype;
            golfie = Object.create(golfie, {constructor: {value: option}});
            source = golfie;
            oscard = new source[option](update, echoed);
            yankee = oscard instanceof Object ? oscard : golfie;
 499:
            _closure2_slot2 = yankee;
            foxtra = michal.application;
            oscard = michal.badges;
            if(!(report == oscard)) { _fun00008_ip = 524; continue _fun00007 }
 518:
            offset = new Array(0);
            _fun00008_ip = 545; continue _fun00007;
 524:
            option = michal.badges;
            golfie = option.map;
            oscard = function(argFoo) {
                _fun00011: for(var _fun00012_ip = 0; ; ) switch(_fun00012_ip) {
 0:
                    michal = argFoo;
                    tangon = _closure1_slot0;
                    report = _closure1_slot2;
                    zuuluu = 14;
                    zuuluu = report[zuuluu];
                    option = undefined;
                    report = tangon.bind(option)(zuuluu);
                    tangon = report.getTieredTenureBadgeData;
                    zuuluu = michal.id;
                    report = tangon.bind(report)(zuuluu);
                    tangon = michal.id;
                    zuuluu = 'premium';
                    if(!(zuuluu !== tangon)) { _fun00012_ip = 63; continue _fun00011 }
 57:
                    zuuluu = null;
                    if(!(zuuluu != report)) { _fun00012_ip = 79; continue _fun00011 }
 63:
                    zuuluu = _closure2_slot1;
                    tangon = null;
                    if(!(tangon == zuuluu)) { _fun00012_ip = 218; continue _fun00011 }
 79:
                    verify = michal.id;
                    oscard = verify.startsWith;
                    zuuluu = 'guild_booster_lvl';
                    oscard = oscard.bind(verify)(zuuluu);
                    zuuluu = michal;
                    if(!oscard) { _fun00012_ip = 216; continue _fun00011 }
 107:
                    verify = _closure2_slot2;
                    oscard = null;
                    zuuluu = michal;
                    if(!(oscard != verify)) { _fun00012_ip = 216; continue _fun00011 }
 123:
                    oscard = {};
                    sizing = oscard;
                    kiloes = michal;
                    verify = copyDataProperties(sizing, kiloes);
                    offset = _closure1_slot0;
                    backup = _closure1_slot2;
                    verify = 15;
                    yankee = backup[verify];
                    yankee = offset.bind(option)(yankee);
                    romeon = yankee.intl;
                    yankee = romeon.formatToPlainString;
                    verify = backup[verify];
                    verify = offset.bind(option)(verify);
                    verify = verify.t;
                    offset = verify.IWkAq6;
                    verify = {};
                    foxtra = _closure2_slot2;
                    verify['date'] = foxtra;
                    offset = yankee.bind(romeon)(offset, verify);
                    verify = 'description';
                    oscard[verify] = offset;
                    zuuluu = oscard;
 216:
                    return zuuluu;
 218:
                    oscard = _closure1_slot0;
                    zuuluu = _closure1_slot2;
                    verify = 15;
                    offset = zuuluu[verify];
                    offset = oscard.bind(option)(offset);
                    yankee = offset.intl;
                    offset = yankee.formatToPlainString;
                    zuuluu = zuuluu[verify];
                    zuuluu = oscard.bind(option)(zuuluu);
                    zuuluu = zuuluu.t;
                    oscard = zuuluu.8zbGNT;
                    zuuluu = {};
                    romeon = _closure2_slot1;
                    zuuluu['date'] = romeon;
                    zuuluu = offset.bind(yankee)(oscard, zuuluu);
                    if(!(tangon != report)) { _fun00012_ip = 353; continue _fun00011 }
 289:
                    tangon = _closure1_slot0;
                    entity = _closure1_slot2;
                    report = entity[verify];
                    report = tangon.bind(option)(report);
                    oscard = report.intl;
                    report = oscard.formatToPlainString;
                    entity = entity[verify];
                    entity = tangon.bind(option)(entity);
                    entity = entity.t;
                    tangon = entity.Hu4jfn;
                    entity = {};
                    golfie = _closure2_slot1;
                    entity['date'] = golfie;
                    zuuluu = report.bind(oscard)(tangon, entity);
 353:
                    entity = {};
                    sizing = entity;
                    kiloes = michal;
                    michal = copyDataProperties(sizing, kiloes);
                    michal = 'description';
                    entity[michal] = zuuluu;
                    return entity;
                }
            };
            offset = golfie.bind(option)(oscard);
 545:
            oscard = _closure1_slot29;
            oscard = report != oscard;
            if(!oscard) { _fun00008_ip = 579; continue _fun00007 }
 556:
            golfie = _closure1_slot29;
            option = golfie.userId;
            golfie = michal.user;
            golfie = golfie.id;
            oscard = option === golfie;
 579:
            if(!oscard) { _fun00008_ip = 633; continue _fun00007 }
 582:
            oscard = global;
            golfie = oscard.Date;
            oscard = golfie.now;
            golfie = oscard.bind(golfie)();
            oscard = _closure1_slot29;
            oscard = oscard.expiresAtMs;
            if(!(!(golfie > oscard))) { _fun00008_ip = 629; continue _fun00007 }
 613:
            golfie = _closure1_slot40;
            oscard = _closure1_slot29;
            oscard = golfie.bind(entity)(offset, oscard);
            _fun00008_ip = 633; continue _fun00007;
 629:
            _closure1_slot29 = report;
 633:
            verify = _closure1_slot19;
            option = verify.set;
            oscard = michal.user;
            golfie = oscard.id;
            oscard = {};
            kiloes = michal.user;
            kiloes = kiloes.id;
            oscard['userId'] = kiloes;
            sizing = michal.user_profile;
            output = report == sizing;
            kiloes = undefined;
            if(output) { _fun00008_ip = 689; continue _fun00007 }
 683:
            kiloes = sizing.banner;
 689:
            oscard['banner'] = kiloes;
            sizing = michal.user_profile;
            output = report == sizing;
            kiloes = undefined;
            if(output) { _fun00008_ip = 715; continue _fun00007 }
 709:
            kiloes = sizing.accent_color;
 715:
            oscard['accentColor'] = kiloes;
            sizing = michal.user_profile;
            output = report == sizing;
            kiloes = undefined;
            if(output) { _fun00008_ip = 741; continue _fun00007 }
 735:
            kiloes = sizing.theme_colors;
 741:
            oscard['themeColors'] = kiloes;
            sizing = michal.user_profile;
            output = report == sizing;
            kiloes = undefined;
            if(output) { _fun00008_ip = 767; continue _fun00007 }
 761:
            kiloes = sizing.popout_animation_particle_type;
 767:
            oscard['popoutAnimationParticleType'] = kiloes;
            kiloes = michal.user_profile;
            sizing = report == kiloes;
            output = undefined;
            if(sizing) { _fun00008_ip = 793; continue _fun00007 }
 787:
            output = kiloes.bio;
 793:
            result = report != output;
            kiloes = '';
            sizing = kiloes;
            if(!result) { _fun00008_ip = 810; continue _fun00007 }
 807:
            sizing = output;
 810:
            oscard['bio'] = sizing;
            output = michal.user_profile;
            result = report == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 850; continue _fun00007 }
 830:
            output = output.profile_effect;
            result = report == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 850; continue _fun00007 }
 845:
            sizing = output.id;
 850:
            oscard['profileEffectId'] = sizing;
            output = michal.user_profile;
            result = report == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 891; continue _fun00007 }
 870:
            output = output.profile_effect;
            result = report == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 891; continue _fun00007 }
 885:
            sizing = output.expires_at;
 891:
            oscard['profileEffectExpiresAt'] = sizing;
            output = michal.user_profile;
            result = report == output;
            sizing = undefined;
            if(result) { _fun00008_ip = 917; continue _fun00007 }
 911:
            sizing = output.pronouns;
 917:
            output = report != sizing;
            if(!output) { _fun00008_ip = 927; continue _fun00007 }
 924:
            kiloes = sizing;
 927:
            oscard['pronouns'] = kiloes;
            sizing = michal.connected_accounts;
            kiloes = sizing.filter;
            backup = function(argFoo) {
                zuuluu = _closure1_slot1;
                michal = _closure1_slot2;
                entity = 16;
                michal = michal[entity];
                entity = undefined;
                zuuluu = zuuluu.bind(entity)(michal);
                michal = zuuluu.isSupported;
                entity = argFoo;
                entity = entity.type;
                entity = michal.bind(zuuluu)(entity);
                return entity;
            };
            backup = kiloes.bind(sizing)(backup);
            if(!(report == backup)) { _fun00008_ip = 961; continue _fun00007 }
 957:
            backup = new Array(0);
 961:
            oscard['connectedAccounts'] = backup;
            backup = michal.application_role_connections;
            if(!(report == backup)) { _fun00008_ip = 982; continue _fun00007 }
 978:
            backup = new Array(0);
 982:
            oscard['applicationRoleConnections'] = backup;
            oscard['premiumSince'] = romeon;
            romeon = michal.premium_type;
            oscard['premiumType'] = romeon;
            oscard['premiumGuildSince'] = yankee;
            oscard['fetchStartedAt'] = tangon;
            tangon = global;
            romeon = tangon.Date;
            yankee = romeon.now;
            yankee = yankee.bind(romeon)();
            oscard['fetchEndedAt'] = yankee;
            yankee = michal.legacy_username;
            oscard['legacyUsername'] = yankee;
            romeon = report != foxtra;
            yankee = null;
            if(!romeon) { _fun00008_ip = 1155; continue _fun00007 }
 1055:
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
            yankee = romeon;
 1155:
            oscard['application'] = yankee;
            oscard['badges'] = offset;
            oscard = option.bind(verify)(golfie, oscard);
            golfie = michal.user_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1206; continue _fun00007 }
 1185:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1206; continue _fun00007 }
 1200:
            oscard = golfie.expires_at;
 1206:
            if(!(report != oscard)) { _fun00008_ip = 1300; continue _fun00007 }
 1210:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            source = golfie;
            oscard = new source[oscard](update);
            verify = oscard instanceof Object ? oscard : golfie;
            option = _closure1_slot21;
            golfie = option.set;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(option)(oscard, verify);
            golfie = _closure1_slot32;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = golfie.bind(entity)(oscard);
 1300:
            oscard = michal.guild_member_profile;
            if(!(report != oscard)) { _fun00008_ip = 1928; continue _fun00007 }
 1313:
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
            if(option) { _fun00008_ip = 1399; continue _fun00007 }
 1393:
            oscard = golfie.theme_colors;
 1399:
            verify['themeColors'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1425; continue _fun00007 }
 1419:
            oscard = golfie.popout_animation_particle_type;
 1425:
            verify['popoutAnimationParticleType'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1465; continue _fun00007 }
 1445:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1465; continue _fun00007 }
 1460:
            oscard = golfie.id;
 1465:
            verify['profileEffectId'] = oscard;
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1506; continue _fun00007 }
 1485:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1506; continue _fun00007 }
 1500:
            oscard = golfie.expires_at;
 1506:
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
            if(!(report == option)) { _fun00008_ip = 1661; continue _fun00007 }
 1586:
            oscard = tangon.Map;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            source = golfie;
            oscard = new source[oscard](update);
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
            _fun00008_ip = 1683; continue _fun00007;
 1661:
            golfie = option.set;
            oscard = michal.guild_member_profile;
            oscard = oscard.guild_id;
            oscard = golfie.bind(option)(oscard, verify);
 1683:
            golfie = michal.guild_member_profile;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1719; continue _fun00007 }
 1698:
            golfie = golfie.profile_effect;
            option = report == golfie;
            oscard = undefined;
            if(option) { _fun00008_ip = 1719; continue _fun00007 }
 1713:
            oscard = golfie.expires_at;
 1719:
            if(!(report != oscard)) { _fun00008_ip = 1928; continue _fun00007 }
 1726:
            golfie = _closure1_slot0;
            option = _closure1_slot2;
            oscard = 17;
            oscard = option[oscard];
            oscard = golfie.bind(entity)(oscard);
            oscard = oscard.Timeout;
            golfie = oscard.prototype;
            golfie = Object.create(golfie, {constructor: {value: oscard}});
            source = golfie;
            oscard = new source[oscard](update);
            golfie = oscard instanceof Object ? oscard : golfie;
            verify = _closure1_slot22;
            option = verify.get;
            oscard = michal.user;
            oscard = oscard.id;
            oscard = option.bind(verify)(oscard);
            if(!(report == oscard)) { _fun00008_ip = 1875; continue _fun00007 }
 1800:
            tangon = tangon.Map;
            report = tangon.prototype;
            report = Object.create(report, {constructor: {value: tangon}});
            source = report;
            tangon = new source[tangon](update);
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
            _fun00008_ip = 1897; continue _fun00007;
 1875:
            report = oscard.set;
            tangon = michal.guild_member_profile;
            tangon = tangon.guild_id;
            tangon = report.bind(oscard)(tangon, golfie);
 1897:
            tangon = _closure1_slot33;
            zuuluu = michal.user;
            zuuluu = zuuluu.id;
            michal = michal.guild_member_profile;
            michal = michal.guild_id;
            michal = tangon.bind(entity)(zuuluu, michal);
 1928:
            return entity;
        }
    };
    var _closure1_slot39 = entity;
    entity = function(argFoo, argBar) { // Original name: mergePinnedBadges
        _fun00013: for(var _fun00014_ip = 0; ; ) switch(_fun00014_ip) {
 0:
            entity = argFoo;
            zuuluu = argBar;
            tangon = null;
            if(!(tangon == entity)) { _fun00014_ip = 18; continue _fun00013 }
 14:
            report = undefined;
            return report;
 18:
            report = global;
            golfie = report.Set;
            oscard = entity.map;
            report = function(argFoo) {
                entity = argFoo;
                entity = entity.id;
                return entity;
            };
            offset = oscard.bind(entity)(report);
            oscard = golfie.prototype;
            oscard = Object.create(oscard, {constructor: {value: golfie}});
            yankee = oscard;
            report = new yankee[golfie](offset, verify);
            report = report instanceof Object ? report : oscard;
            var _closure2_slot0 = report;
            tangon = tangon == zuuluu;
            report = undefined;
            if(tangon) { _fun00014_ip = 95; continue _fun00013 }
 74:
            tangon = zuuluu.badges;
            zuuluu = tangon.filter;
            michal = function(argFoo) {
                zuuluu = _closure2_slot0;
                michal = zuuluu.has;
                entity = argFoo;
                entity = entity.id;
                entity = michal.bind(zuuluu)(entity);
                entity = !entity;
                return entity;
            };
            report = zuuluu.bind(tangon)(michal);
 95:
            michal = report.length;
            tangon = 0;
            if(!(michal > tangon)) { _fun00014_ip = 140; continue _fun00013 }
 106:
            zuuluu = entity.push;
            michal = new Array(0);
            offset = michal;
            verify = report;
            option = 0;
            tangon = arraySpread(offset, verify, option);
            offset = zuuluu;
            verify = michal;
            option = entity;
            michal = apply(offset, verify, option);
 140:
            return entity;
        }
    };
    var _closure1_slot40 = entity;
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
    var _closure1_slot41 = entity;
    entity = function(argFoo) { // Original name: handleProfileFetchFailure
        _fun00017: for(var _fun00018_ip = 0; ; ) switch(_fun00018_ip) {
 0:
            entity = argFoo;
            report = entity.userId;
            option = entity.guildId;
            zuuluu = entity.apiError;
            tangon = entity.fetchStartedAt;
            oscard = _closure1_slot16;
            entity = oscard.get;
            golfie = entity.bind(oscard)(report);
            entity = null;
            if(!(entity != golfie)) { _fun00018_ip = 66; continue _fun00017 }
 48:
            oscard = golfie.delete;
            if(!(entity == option)) { _fun00018_ip = 61; continue _fun00017 }
 57:
            option = _closure1_slot15;
 61:
            oscard = oscard.bind(golfie)(option);
 66:
            golfie = _closure1_slot17;
            oscard = golfie.delete;
            oscard = oscard.bind(golfie)(report);
            golfie = _closure1_slot19;
            oscard = golfie.get;
            golfie = oscard.bind(golfie)(report);
            if(!(entity == golfie)) { _fun00018_ip = 148; continue _fun00017 }
 98:
            oscard = {'connectedAccounts': null, 'applicationRoleConnections': null, 'premiumSince': null, 'premiumGuildSince': null, 'application': null, 'legacyUsername': null, 'userId': null, 'banner': null, 'accentColor': null, 'bio': '', 'pronouns': '', 'premiumType': null, 'fetchStartedAt': 0, 'fetchEndedAt': 0};
            option = new Array(0);
            oscard['connectedAccounts'] = option;
            option = new Array(0);
            oscard['applicationRoleConnections'] = option;
            oscard['userId'] = report;
            option = undefined;
            oscard['fetchError'] = option;
            golfie = oscard;
 148:
            golfie['fetchStartedAt'] = tangon;
            tangon = global;
            oscard = tangon.Date;
            tangon = oscard.now;
            tangon = tangon.bind(oscard)();
            golfie['fetchEndedAt'] = tangon;
            golfie['fetchError'] = zuuluu;
            oscard = _closure1_slot19;
            tangon = oscard.set;
            tangon = tangon.bind(oscard)(report, golfie);
            oscard = entity == zuuluu;
            entity = undefined;
            tangon = undefined;
            if(oscard) { _fun00018_ip = 214; continue _fun00017 }
 209:
            tangon = zuuluu.status;
 214:
            zuuluu = 404;
            if(!(zuuluu === tangon)) { _fun00018_ip = 279; continue _fun00017 }
 224:
            oscard = _closure1_slot24;
            tangon = oscard.set;
            zuuluu = 0;
            zuuluu = tangon.bind(oscard)(report, zuuluu);
            oscard = _closure1_slot23;
            tangon = oscard.set;
            zuuluu = _closure1_slot26;
            zuuluu = tangon.bind(oscard)(report, zuuluu);
            tangon = _closure1_slot25;
            zuuluu = tangon.set;
            michal = _closure1_slot27;
            michal = zuuluu.bind(tangon)(report, michal);
 279:
            return entity;
        }
    };
    var _closure1_slot42 = entity;
    entity = function() { // Original name: handleProfileUpdateStart
        entity = true;
        _closure1_slot28 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot43 = entity;
    entity = function(argFoo) { // Original name: handleProfileUpdateSuccess
        _fun00019: for(var _fun00020_ip = 0; ; ) switch(_fun00020_ip) {
 0:
            michal = argFoo;
            zuuluu = false;
            _closure1_slot28 = zuuluu;
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
            zuuluu = _closure1_slot32;
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
            entity = _closure1_slot33;
            entity = entity.bind(michal)(tangon, zuuluu);
 631:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot44 = entity;
    entity = function() { // Original name: handleProfileUpdateFailure
        entity = false;
        _closure1_slot28 = entity;
        entity = undefined;
        return entity;
    };
    var _closure1_slot45 = entity;
    entity = function(argFoo) { // Original name: handlePinBadgesToProfile
        _fun00021: for(var _fun00022_ip = 0; ; ) switch(_fun00022_ip) {
 0:
            michal = argFoo;
            entity = michal.badges;
            report = michal.ttlInSeconds;
            tangon = michal.userId;
            michal = {};
            michal['userId'] = tangon;
            michal['badges'] = entity;
            entity = global;
            zuuluu = entity.Date;
            entity = zuuluu.now;
            zuuluu = entity.bind(zuuluu)();
            entity = 1000;
            entity = entity * report;
            entity = zuuluu + entity;
            michal['expiresAtMs'] = entity;
            _closure1_slot29 = michal;
            zuuluu = _closure1_slot19;
            michal = zuuluu.get;
            report = michal.bind(zuuluu)(tangon);
            michal = null;
            if(!(michal != report)) { _fun00022_ip = 160; continue _fun00021 }
 94:
            oscard = report.badges;
            if(!(michal == oscard)) { _fun00022_ip = 108; continue _fun00021 }
 104:
            oscard = new Array(0);
 108:
            golfie = _closure1_slot40;
            zuuluu = _closure1_slot29;
            michal = undefined;
            michal = golfie.bind(michal)(oscard, zuuluu);
            zuuluu = _closure1_slot19;
            michal = zuuluu.set;
            entity = {};
            verify = entity;
            option = report;
            report = copyDataProperties(verify, option);
            report = 'badges';
            entity[report] = oscard;
            entity = michal.bind(zuuluu)(tangon, entity);
 160:
            entity = undefined;
            return entity;
        }
    };
    var _closure1_slot46 = entity;
    entity = function(argFoo) { // Original name: handleUserUpdate
        _fun00023: for(var _fun00024_ip = 0; ; ) switch(_fun00024_ip) {
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
            if(golfie) { _fun00024_ip = 48; continue _fun00023 }
 43:
            oscard = report.size;
 48:
            golfie = entity != oscard;
            report = 0;
            entity = 0;
            if(!golfie) { _fun00024_ip = 62; continue _fun00023 }
 59:
            entity = oscard;
 62:
            report = entity > report;
            entity = !report;
            if(report) { _fun00024_ip = 81; continue _fun00023 }
 72:
            michal = _closure1_slot52;
            entity = michal.bind(zuuluu)(tangon);
 81:
            return entity;
        }
    };
    var _closure1_slot47 = entity;
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
            _fun00025: for(var _fun00026_ip = 0; ; ) switch(_fun00026_ip) {
 0:
                michal = argFoo;
                tangon = _closure1_slot52;
                zuuluu = undefined;
                entity = argBar;
                entity = tangon.bind(zuuluu)(entity);
                if(entity) { _fun00026_ip = 26; continue _fun00025 }
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
    var _closure1_slot48 = entity;
    entity = function(argFoo) { // Original name: handleGuildMemberStatusChange
        zuuluu = _closure1_slot52;
        entity = argFoo;
        entity = entity.user;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot49 = entity;
    entity = function(argFoo) { // Original name: handleRelationshipStatusChange
        zuuluu = _closure1_slot52;
        entity = argFoo;
        entity = entity.relationship;
        michal = entity.id;
        entity = undefined;
        entity = zuuluu.bind(entity)(michal);
        return entity;
    };
    var _closure1_slot50 = entity;
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
    var _closure1_slot51 = entity;
    entity = function(argFoo) { // Original name: resetProfileFetch
        _fun00027: for(var _fun00028_ip = 0; ; ) switch(_fun00028_ip) {
 0:
            tangon = argFoo;
            entity = null;
            if(!(entity != tangon)) { _fun00028_ip = 58; continue _fun00027 }
 9:
            zuuluu = _closure1_slot19;
            michal = zuuluu.get;
            michal = michal.bind(zuuluu)(tangon);
            if(!(entity != michal)) { _fun00028_ip = 54; continue _fun00027 }
 30:
            entity = 0;
            michal['fetchStartedAt'] = entity;
            michal['fetchEndedAt'] = entity;
            entity = undefined;
            michal['fetchError'] = entity;
            return entity;
 54:
            entity = false;
            return entity;
 58:
            entity = false;
            return entity;
        }
    };
    var _closure1_slot52 = entity;
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
    verify = 10;
    verify = oscard[verify];
    verify = offset.bind(entity)(verify);
    var _closure1_slot12 = verify;
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
    michal = new Array(0);
    var _closure1_slot26 = michal;
    michal = new Array(0);
    var _closure1_slot27 = michal;
    michal = false;
    var _closure1_slot28 = michal;
    michal = null;
    var _closure1_slot29 = michal;
    michal = function(argFoo) {
        tangon = function() { // Original name: UserProfileStore
            _fun00029: for(var _fun00030_ip = 0; ; ) switch(_fun00030_ip) {
 0:
                report = this;
                entity = _closure1_slot3;
                zuuluu = _closure2_slot0;
                tangon = undefined;
                entity = entity.bind(tangon)(report, zuuluu);
                entity = {};
                golfie = function() { // Original name: CACHE_LOADED_LAZY
                    michal = _closure3_slot0;
                    entity = michal.loadCache;
                    entity = entity.bind(michal)();
                    return entity;
                };
                entity['CACHE_LOADED_LAZY'] = golfie;
                golfie = _closure1_slot41;
                entity['USER_PROFILE_FETCH_START'] = golfie;
                golfie = _closure1_slot42;
                entity['USER_PROFILE_FETCH_FAILURE'] = golfie;
                golfie = _closure1_slot39;
                entity['USER_PROFILE_FETCH_SUCCESS'] = golfie;
                golfie = _closure1_slot43;
                entity['USER_PROFILE_UPDATE_START'] = golfie;
                golfie = _closure1_slot44;
                entity['USER_PROFILE_UPDATE_SUCCESS'] = golfie;
                golfie = _closure1_slot45;
                entity['USER_PROFILE_UPDATE_FAILURE'] = golfie;
                golfie = _closure1_slot46;
                entity['USER_PROFILE_PIN_BADGES_ON_CLIENT'] = golfie;
                golfie = _closure1_slot35;
                entity['MUTUAL_FRIENDS_FETCH_START'] = golfie;
                golfie = _closure1_slot38;
                entity['MUTUAL_FRIENDS_FETCH_SUCCESS'] = golfie;
                golfie = _closure1_slot36;
                entity['MUTUAL_FRIENDS_FETCH_FAILURE'] = golfie;
                golfie = _closure1_slot47;
                entity['USER_UPDATE'] = golfie;
                entity['GUILD_MEMBER_UPDATE'] = golfie;
                golfie = _closure1_slot48;
                entity['GUILD_JOIN'] = golfie;
                entity['GUILD_DELETE'] = golfie;
                entity['INVITE_ACCEPT_SUCCESS'] = golfie;
                golfie = _closure1_slot49;
                entity['GUILD_MEMBER_ADD'] = golfie;
                entity['GUILD_MEMBER_REMOVE'] = golfie;
                golfie = _closure1_slot50;
                entity['RELATIONSHIP_ADD'] = golfie;
                entity['RELATIONSHIP_REMOVE'] = golfie;
                entity['RELATIONSHIP_UPDATE'] = golfie;
                golfie = _closure1_slot34;
                entity['LOGOUT'] = golfie;
                offset = new Array(1);
                offset[0] = entity;
                entity = _closure1_slot6;
                verify = entity.bind(tangon)(zuuluu);
                zuuluu = _closure1_slot5;
                entity = _closure1_slot31;
                entity = entity.bind(tangon)();
                if(entity) { _fun00030_ip = 265; continue _fun00029 }
 252:
                entity = verify.apply;
                entity = entity.bind(verify)(report, offset);
                _fun00030_ip = 299; continue _fun00029;
 265:
                golfie = global;
                option = golfie.Reflect;
                golfie = option.construct;
                oscard = _closure1_slot6;
                oscard = oscard.bind(tangon)(report);
                oscard = oscard.constructor;
                entity = golfie.bind(option)(verify, offset, oscard);
 299:
                entity = zuuluu.bind(tangon)(report, entity);
                var _closure3_slot0 = entity;
                michal = function() {
                    _fun00031: for(var _fun00032_ip = 0; ; ) switch(_fun00032_ip) {
 0:
                        zuuluu = _closure3_slot0;
                        michal = zuuluu.readSnapshot;
                        entity = _closure2_slot0;
                        entity = entity.LATEST_SNAPSHOT_VERSION;
                        zuuluu = michal.bind(zuuluu)(entity);
                        entity = null;
                        if(!(entity != zuuluu)) { _fun00032_ip = 54; continue _fun00031 }
 37:
                        michal = zuuluu.forEach;
                        entity = function(argFoo) {
                            _fun00033: for(var _fun00034_ip = 0; ; ) switch(_fun00034_ip) {
 0:
                                entity = argFoo;
                                tangon = entity.userId;
                                zuuluu = entity.profile;
                                entity = null;
                                if(!(entity != tangon)) { _fun00034_ip = 61; continue _fun00033 }
 20:
                                if(!(entity == zuuluu)) { _fun00034_ip = 43; continue _fun00033 }
 24:
                                michal = _closure1_slot19;
                                entity = michal.delete;
                                entity = entity.bind(michal)(tangon);
                                _fun00034_ip = 61; continue _fun00033;
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
            }
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
            entity = _closure1_slot51;
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
            _fun00035: for(var _fun00036_ip = 0; ; ) switch(_fun00036_ip) {
 0:
                tangon = argBar;
                zuuluu = _closure1_slot16;
                michal = zuuluu.get;
                entity = argFoo;
                zuuluu = michal.bind(zuuluu)(entity);
                oscard = null;
                entity = oscard != zuuluu;
                if(!entity) { _fun00036_ip = 50; continue _fun00035 }
 32:
                michal = zuuluu.has;
                if(!(oscard == tangon)) { _fun00036_ip = 45; continue _fun00035 }
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
            entity = _closure1_slot28;
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
            _fun00037: for(var _fun00038_ip = 0; ; ) switch(_fun00038_ip) {
 0:
                oscard = argBar;
                michal = null;
                zuuluu = michal == oscard;
                entity = null;
                if(zuuluu) { _fun00038_ip = 68; continue _fun00037 }
 14:
                report = _closure1_slot20;
                tangon = report.get;
                zuuluu = argFoo;
                report = tangon.bind(report)(zuuluu);
                tangon = michal == report;
                zuuluu = undefined;
                if(tangon) { _fun00038_ip = 53; continue _fun00037 }
 43:
                tangon = report.get;
                zuuluu = tangon.bind(report)(oscard);
 53:
                tangon = michal != zuuluu;
                michal = null;
                if(!tangon) { _fun00038_ip = 65; continue _fun00037 }
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
            _fun00039: for(var _fun00040_ip = 0; ; ) switch(_fun00040_ip) {
 0:
                zuuluu = _closure1_slot10;
                michal = zuuluu.getId;
                report = michal.bind(zuuluu)();
                michal = _closure1_slot19;
                entity = michal.get;
                zuuluu = entity.bind(michal)(report);
                entity = null;
                if(!(entity == zuuluu)) { _fun00040_ip = 67; continue _fun00039 }
 37:
                entity = {};
                michal = _closure2_slot0;
                michal = michal.LATEST_SNAPSHOT_VERSION;
                entity['version'] = michal;
                michal = new Array(0);
                entity['data'] = michal;
                _fun00040_ip = 113; continue _fun00039;
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
    var _closure1_slot30 = michal;
    tangon = 18;
    tangon = oscard[tangon];
    oscard = report.bind(entity)(tangon);
    report = oscard.fileFinishedImporting;
    tangon = 'modules/user_profile/UserProfileStore.tsx';
    tangon = report.bind(oscard)(tangon);
    zuuluu['default'] = michal;
    return entity;
})();