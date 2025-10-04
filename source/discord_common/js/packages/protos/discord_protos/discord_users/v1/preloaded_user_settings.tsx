// discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var76 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var77 = dependencyMap;
    var _closure1_slot0 = var76;
    var _closure1_slot1 = var77;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var6 = arg3;
            var2 = _closure1_slot6;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot5;
            var1 = _closure1_slot76;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var6);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var7 = global;
            var8 = var7.Reflect;
            var7 = var8.construct;
            if(var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = new Array(0);
case 5:
            var5 = _closure1_slot6;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot75 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 7: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 8: // try_end0
            _fun0002_ip = 9; continue _fun0002;
case 10: // catch_target0
            CatchBlockStart(arg_register=1);
case 9:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot76 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot76 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var2);
    var13 = 0;
    var2 = var77[var13];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var12 = 1;
    var2 = var77[var12];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var11 = 2;
    var2 = var77[var11];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var10 = 3;
    var2 = var77[var10];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var9 = 4;
    var2 = var77[var9];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var8 = 5;
    var2 = var77[var8];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var74 = {};
    var74['UNSPECIFIED'] = var13;
    var14 = 'UNSPECIFIED';
    var74[var13] = var14;
    var74['MENTIONS'] = var12;
    var2 = 'MENTIONS';
    var74[var12] = var2;
    var74['UNREADS'] = var11;
    var2 = 'UNREADS';
    var74[var11] = var2;
    var74['TODOS'] = var10;
    var2 = 'TODOS';
    var74[var10] = var2;
    var74['FOR_YOU'] = var9;
    var2 = 'FOR_YOU';
    var74[var9] = var2;
    var74['GAME_INVITES'] = var8;
    var2 = 'GAME_INVITES';
    var74[var8] = var2;
    var7 = 6;
    var74['BOOKMARKS'] = var7;
    var4 = 'BOOKMARKS';
    var74[var7] = var4;
    var2 = 7;
    var74['SCHEDULED'] = var2;
    var5 = 'SCHEDULED';
    var74[var2] = var5;
    var _closure1_slot8 = var74;
    var73 = {};
    var73['NO_PROGRESS'] = var13;
    var5 = 'NO_PROGRESS';
    var73[var13] = var5;
    var73['JOIN_GUILD'] = var12;
    var5 = 'JOIN_GUILD';
    var73[var12] = var5;
    var73['INVITE_USER'] = var11;
    var5 = 'INVITE_USER';
    var73[var11] = var5;
    var73['CONTACT_SYNC'] = var9;
    var5 = 'CONTACT_SYNC';
    var73[var9] = var5;
    var72 = {};
    var72['NO_GUILD_ONBOARDING'] = var13;
    var5 = 'NO_GUILD_ONBOARDING';
    var72[var13] = var5;
    var72['GUILD_NOTICE_SHOWN'] = var12;
    var5 = 'GUILD_NOTICE_SHOWN';
    var72[var12] = var5;
    var72['GUILD_NOTICE_CLEARED'] = var11;
    var5 = 'GUILD_NOTICE_CLEARED';
    var72[var11] = var5;
    var71 = {};
    var71['UNSET_EXPLICIT_CONTENT_REDACTION'] = var13;
    var5 = 'UNSET_EXPLICIT_CONTENT_REDACTION';
    var71[var13] = var5;
    var71['SHOW'] = var12;
    var5 = 'SHOW';
    var71[var12] = var5;
    var71['BLUR'] = var11;
    var5 = 'BLUR';
    var71[var11] = var5;
    var71['BLOCK'] = var10;
    var5 = 'BLOCK';
    var71[var10] = var5;
    var _closure1_slot9 = var71;
    var70 = {};
    var70['DEFAULT_UNSET'] = var13;
    var5 = 'DEFAULT_UNSET';
    var70[var13] = var5;
    var70['DISABLED'] = var12;
    var5 = 'DISABLED';
    var70[var12] = var5;
    var70['NON_FRIENDS'] = var11;
    var5 = 'NON_FRIENDS';
    var70[var11] = var5;
    var70['FRIENDS_AND_NON_FRIENDS'] = var10;
    var5 = 'FRIENDS_AND_NON_FRIENDS';
    var70[var10] = var5;
    var _closure1_slot10 = var70;
    var69 = {};
    var69['NOTIFICATIONS_ENABLED'] = var13;
    var5 = 'NOTIFICATIONS_ENABLED';
    var69[var13] = var5;
    var69['ONLY_DMS'] = var12;
    var5 = 'ONLY_DMS';
    var69[var12] = var5;
    var69['NOTIFICATIONS_DISABLED'] = var11;
    var5 = 'NOTIFICATIONS_DISABLED';
    var69[var11] = var5;
    var _closure1_slot11 = var69;
    var68 = {};
    var68['ACTIVITY_NOTIFICATIONS_UNSET'] = var13;
    var5 = 'ACTIVITY_NOTIFICATIONS_UNSET';
    var68[var13] = var5;
    var68['ACTIVITY_NOTIFICATIONS_DISABLED'] = var12;
    var5 = 'ACTIVITY_NOTIFICATIONS_DISABLED';
    var68[var12] = var5;
    var68['ACTIVITY_NOTIFICATIONS_ENABLED'] = var11;
    var5 = 'ACTIVITY_NOTIFICATIONS_ENABLED';
    var68[var11] = var5;
    var68['ONLY_GAMES_PLAYED'] = var10;
    var5 = 'ONLY_GAMES_PLAYED';
    var68[var10] = var5;
    var _closure1_slot12 = var68;
    var67 = {};
    var67['STATUS_PUSH_UNSET'] = var13;
    var5 = 'STATUS_PUSH_UNSET';
    var67[var13] = var5;
    var67['STATUS_PUSH_ENABLED'] = var12;
    var5 = 'STATUS_PUSH_ENABLED';
    var67[var12] = var5;
    var67['STATUS_PUSH_DISABLED'] = var11;
    var5 = 'STATUS_PUSH_DISABLED';
    var67[var11] = var5;
    var _closure1_slot13 = var67;
    var66 = {};
    var66['OFF'] = var13;
    var5 = 'OFF';
    var66[var13] = var5;
    var66['ON_FOR_LARGE_GUILDS'] = var12;
    var5 = 'ON_FOR_LARGE_GUILDS';
    var66[var12] = var5;
    var66['ON'] = var11;
    var5 = 'ON';
    var66[var11] = var5;
    var _closure1_slot14 = var66;
    var65 = {};
    var65['ACTIVITY_STATUS_UNSET'] = var13;
    var5 = 'ACTIVITY_STATUS_UNSET';
    var65[var13] = var5;
    var65['ACTIVITY_STATUS_OFF'] = var12;
    var5 = 'ACTIVITY_STATUS_OFF';
    var65[var12] = var5;
    var65['ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS'] = var11;
    var5 = 'ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS';
    var65[var11] = var5;
    var65['ACTIVITY_STATUS_ON'] = var10;
    var5 = 'ACTIVITY_STATUS_ON';
    var65[var10] = var5;
    var _closure1_slot15 = var65;
    var64 = {};
    var64['OFF_FOR_NEW_GUILDS'] = var13;
    var5 = 'OFF_FOR_NEW_GUILDS';
    var64[var13] = var5;
    var64['ON_FOR_NEW_GUILDS'] = var12;
    var5 = 'ON_FOR_NEW_GUILDS';
    var64[var12] = var5;
    var _closure1_slot16 = var64;
    var63 = {};
    var63['SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET'] = var13;
    var5 = 'SLAYER_SDK_RECEIVE_IN_GAME_DMS_UNSET';
    var63[var13] = var5;
    var63['SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL'] = var12;
    var5 = 'SLAYER_SDK_RECEIVE_IN_GAME_DMS_ALL';
    var63[var12] = var5;
    var63['SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME'] = var11;
    var5 = 'SLAYER_SDK_RECEIVE_IN_GAME_DMS_USERS_WITH_GAME';
    var63[var11] = var5;
    var63['SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE'] = var10;
    var5 = 'SLAYER_SDK_RECEIVE_IN_GAME_DMS_NONE';
    var63[var10] = var5;
    var _closure1_slot17 = var63;
    var62 = {};
    var62['UNSET_UI_DENSITY'] = var13;
    var5 = 'UNSET_UI_DENSITY';
    var62[var13] = var5;
    var62['COMPACT'] = var12;
    var5 = 'COMPACT';
    var62[var12] = var5;
    var62['COZY'] = var11;
    var5 = 'COZY';
    var62[var11] = var5;
    var62['RESPONSIVE'] = var10;
    var5 = 'RESPONSIVE';
    var62[var10] = var5;
    var62['DEFAULT'] = var9;
    var5 = 'DEFAULT';
    var62[var9] = var5;
    var _closure1_slot18 = var62;
    var61 = {};
    var61['UNSET'] = var13;
    var5 = 'UNSET';
    var61[var13] = var5;
    var61['DARK'] = var12;
    var5 = 'DARK';
    var61[var12] = var5;
    var61['LIGHT'] = var11;
    var5 = 'LIGHT';
    var61[var11] = var5;
    var61['DARKER'] = var10;
    var5 = 'DARKER';
    var61[var10] = var5;
    var61['MIDNIGHT'] = var9;
    var5 = 'MIDNIGHT';
    var61[var9] = var5;
    var _closure1_slot19 = var61;
    var60 = {};
    var60['MINT_APPLE'] = var13;
    var5 = 'MINT_APPLE';
    var60[var13] = var5;
    var60['CITRUS_SHERBERT'] = var12;
    var5 = 'CITRUS_SHERBERT';
    var60[var12] = var5;
    var60['RETRO_RAINCLOUD'] = var11;
    var5 = 'RETRO_RAINCLOUD';
    var60[var11] = var5;
    var60['HANAMI'] = var10;
    var5 = 'HANAMI';
    var60[var10] = var5;
    var60['SUNRISE'] = var9;
    var5 = 'SUNRISE';
    var60[var9] = var5;
    var60['COTTON_CANDY'] = var8;
    var5 = 'COTTON_CANDY';
    var60[var8] = var5;
    var60['LOFI_VIBES'] = var7;
    var5 = 'LOFI_VIBES';
    var60[var7] = var5;
    var60['DESERT_KHAKI'] = var2;
    var5 = 'DESERT_KHAKI';
    var60[var2] = var5;
    var6 = 8;
    var60['SUNSET'] = var6;
    var5 = 'SUNSET';
    var60[var6] = var5;
    var5 = 9;
    var60['CHROMA_GLOW'] = var5;
    var15 = 'CHROMA_GLOW';
    var60[var5] = var15;
    var75 = 10;
    var60['FOREST'] = var75;
    var15 = 'FOREST';
    var60[var75] = var15;
    var16 = 11;
    var60['CRIMSON_MOON'] = var16;
    var15 = 'CRIMSON_MOON';
    var60[var16] = var15;
    var16 = 12;
    var60['MIDNIGHT_BLURPLE'] = var16;
    var15 = 'MIDNIGHT_BLURPLE';
    var60[var16] = var15;
    var16 = 13;
    var60['MARS'] = var16;
    var15 = 'MARS';
    var60[var16] = var15;
    var16 = 14;
    var60['DUSK'] = var16;
    var15 = 'DUSK';
    var60[var16] = var15;
    var16 = 15;
    var60['UNDER_THE_SEA'] = var16;
    var15 = 'UNDER_THE_SEA';
    var60[var16] = var15;
    var16 = 16;
    var60['EASTER_EGG'] = var16;
    var15 = 'EASTER_EGG';
    var60[var16] = var15;
    var16 = 17;
    var60['RETRO_STORM'] = var16;
    var15 = 'RETRO_STORM';
    var60[var16] = var15;
    var16 = 18;
    var60['NEON_NIGHTS'] = var16;
    var15 = 'NEON_NIGHTS';
    var60[var16] = var15;
    var16 = 19;
    var60['SEPIA'] = var16;
    var15 = 'SEPIA';
    var60[var16] = var15;
    var16 = 20;
    var60['STRAWBERRY_LEMONADE'] = var16;
    var15 = 'STRAWBERRY_LEMONADE';
    var60[var16] = var15;
    var16 = 21;
    var60['AURORA'] = var16;
    var15 = 'AURORA';
    var60[var16] = var15;
    var16 = 22;
    var60['BLURPLE_TWILIGHT'] = var16;
    var15 = 'BLURPLE_TWILIGHT';
    var60[var16] = var15;
    var59 = {};
    var59['AUTO'] = var13;
    var15 = 'AUTO';
    var59[var13] = var15;
    var59['H12'] = var12;
    var15 = 'H12';
    var59[var12] = var15;
    var59['H23'] = var11;
    var15 = 'H23';
    var59[var11] = var15;
    var _closure1_slot20 = var59;
    var58 = {};
    var58['LAUNCH_PAD_DISABLED'] = var13;
    var15 = 'LAUNCH_PAD_DISABLED';
    var58[var13] = var15;
    var58['LAUNCH_PAD_GESTURE_FULL_SCREEN'] = var12;
    var15 = 'LAUNCH_PAD_GESTURE_FULL_SCREEN';
    var58[var12] = var15;
    var58['LAUNCH_PAD_GESTURE_RIGHT_EDGE'] = var11;
    var15 = 'LAUNCH_PAD_GESTURE_RIGHT_EDGE';
    var58[var11] = var15;
    var58['LAUNCH_PAD_PULL_TAB'] = var10;
    var15 = 'LAUNCH_PAD_PULL_TAB';
    var58[var10] = var15;
    var _closure1_slot21 = var58;
    var57 = {};
    var57['SWIPE_RIGHT_TO_LEFT_UNSET'] = var13;
    var15 = 'SWIPE_RIGHT_TO_LEFT_UNSET';
    var57[var13] = var15;
    var57['SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS'] = var12;
    var15 = 'SWIPE_RIGHT_TO_LEFT_CHANNEL_DETAILS';
    var57[var12] = var15;
    var57['SWIPE_RIGHT_TO_LEFT_REPLY'] = var11;
    var15 = 'SWIPE_RIGHT_TO_LEFT_REPLY';
    var57[var11] = var15;
    var _closure1_slot22 = var57;
    var56 = {};
    var56['UNSET_FAVORITE_CHANNEL_TYPE'] = var13;
    var15 = 'UNSET_FAVORITE_CHANNEL_TYPE';
    var56[var13] = var15;
    var56['REFERENCE_ORIGINAL'] = var12;
    var15 = 'REFERENCE_ORIGINAL';
    var56[var12] = var15;
    var56['CATEGORY'] = var11;
    var15 = 'CATEGORY';
    var56[var11] = var15;
    var _closure1_slot23 = var56;
    var55 = {};
    var55['UNSET_SAFETY_SETTINGS_PRESET'] = var13;
    var15 = 'UNSET_SAFETY_SETTINGS_PRESET';
    var55[var13] = var15;
    var55['BALANCED'] = var12;
    var15 = 'BALANCED';
    var55[var12] = var15;
    var55['STRICT'] = var11;
    var15 = 'STRICT';
    var55[var11] = var15;
    var55['RELAXED'] = var10;
    var15 = 'RELAXED';
    var55[var10] = var15;
    var55['CUSTOM'] = var9;
    var15 = 'CUSTOM';
    var55[var9] = var15;
    var _closure1_slot24 = var55;
    var54 = {};
    var54['UNSPECIFIED'] = var13;
    var54[var13] = var14;
    var54['ALL'] = var12;
    var14 = 'ALL';
    var54[var12] = var14;
    var54['BOOKMARKS'] = var11;
    var54[var11] = var4;
    var54['REMINDERS'] = var10;
    var4 = 'REMINDERS';
    var54[var10] = var4;
    var _closure1_slot25 = var54;
    var53 = {};
    var53['VOICE'] = var13;
    var4 = 'VOICE';
    var53[var13] = var4;
    var53['STREAM'] = var12;
    var4 = 'STREAM';
    var53[var12] = var4;
    var53['VIDEO_BACKGROUND'] = var11;
    var4 = 'VIDEO_BACKGROUND';
    var53[var11] = var4;
    var53['ACTIVITY'] = var10;
    var4 = 'ACTIVITY';
    var53[var10] = var4;
    var53['IN_APP_REPORTS'] = var9;
    var4 = 'IN_APP_REPORTS';
    var53[var9] = var4;
    var53['USER_DM_MUTE'] = var8;
    var4 = 'USER_DM_MUTE';
    var53[var8] = var4;
    var53['BLOCK_USER'] = var7;
    var4 = 'BLOCK_USER';
    var53[var7] = var4;
    var53['VOICE_FILTER'] = var2;
    var4 = 'VOICE_FILTER';
    var53[var2] = var4;
    var53['SEARCH_RESULTS'] = var6;
    var4 = 'SEARCH_RESULTS';
    var53[var6] = var4;
    var53['AGE_VERIFICATION'] = var5;
    var4 = 'AGE_VERIFICATION';
    var53[var5] = var4;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PreloadedUserSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'versions', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Versions;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(25);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'inbox', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot26;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'guilds', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot27;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'user_content', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot34;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'voice_and_video', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot37;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'text_and_images', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot41;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'notifications', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot42;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'privacy', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot43;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'debug', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot44;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'game_library', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot45;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'status', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot46;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'localization', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot48;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 13, 'name': 'appearance', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot50;
                return var1;
            };
            var1['T'] = var8;
            var6[12] = var1;
            var1 = {'no': 14, 'name': 'guild_folders', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot53;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 15, 'name': 'favorites', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot55;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 16, 'name': 'audio_context_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot58;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 17, 'name': 'communities', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot59;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 18, 'name': 'broadcast', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot62;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 19, 'name': 'clips', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot63;
                return var1;
            };
            var1['T'] = var8;
            var6[18] = var1;
            var1 = {'no': 20, 'name': 'for_later', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot65;
                return var1;
            };
            var1['T'] = var8;
            var6[19] = var1;
            var1 = {'no': 21, 'name': 'safety_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot64;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 22, 'name': 'icymi_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot66;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 23, 'name': 'applications', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot67;
                return var1;
            };
            var1['T'] = var8;
            var6[22] = var1;
            var1 = {'no': 24, 'name': 'ads', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot71;
                return var1;
            };
            var1['T'] = var8;
            var6[23] = var1;
            var1 = {'no': 25, 'name': 'in_app_feedback_settings', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot74;
                return var1;
            };
            var1['T'] = var7;
            var6[24] = var1;
            var1 = ['discord_protos.discord_users.v1.PreloadedUserSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=1745, default_jump_address=1547, unsigned_min_value=1, unsigned_max_value=25) // Switch table: [1475, 1419, 1363, 1307, 1251, 1195, 1139, 1083, 1027, 971, 916, 860, 804, 748, 692, 636, 580, 524, 468, 412, 356, 300, 244, 188, 132];
case 17:
                var23 = _closure1_slot74;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.inAppFeedbackSettings;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['inAppFeedbackSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 19:
                var25 = _closure1_slot71;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.ads;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['ads'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 20:
                var25 = _closure1_slot67;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.applications;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['applications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 21:
                var25 = _closure1_slot66;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.icymiSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['icymiSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 22:
                var25 = _closure1_slot64;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.safetySettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['safetySettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 23:
                var25 = _closure1_slot65;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.forLater;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['forLater'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 24:
                var25 = _closure1_slot63;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.clips;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['clips'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 25:
                var25 = _closure1_slot62;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.broadcast;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['broadcast'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 26:
                var25 = _closure1_slot59;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.communities;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['communities'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 27:
                var25 = _closure1_slot58;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.audioContextSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['audioContextSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 28:
                var25 = _closure1_slot55;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.favorites;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['favorites'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 29:
                var25 = _closure1_slot53;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.guildFolders;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['guildFolders'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 30:
                var25 = _closure1_slot50;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.appearance;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['appearance'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 31:
                var25 = _closure1_slot48;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.localization;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['localization'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 32:
                var25 = _closure1_slot46;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.status;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['status'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 33:
                var25 = _closure1_slot45;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.gameLibrary;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['gameLibrary'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 34:
                var25 = _closure1_slot44;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.debug;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['debug'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 35:
                var25 = _closure1_slot43;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.privacy;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['privacy'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 36:
                var25 = _closure1_slot42;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.notifications;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['notifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 37:
                var25 = _closure1_slot41;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.textAndImages;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['textAndImages'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 38:
                var25 = _closure1_slot37;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.voiceAndVideo;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['voiceAndVideo'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 39:
                var25 = _closure1_slot34;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.userContent;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['userContent'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 40:
                var25 = _closure1_slot27;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.guilds;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['guilds'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 41:
                var25 = _closure1_slot26;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.inbox;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['inbox'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 42:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.Versions;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.versions;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['versions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0004_ip = 18; continue _fun0004;
case 43:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0004_ip = 44; continue _fun0004 }
case 45:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0004_ip = 18; continue _fun0004 }
case 46:
                var25 = var23;
                if(!(var14 === var23)) { _fun0004_ip = 47; continue _fun0004 }
case 48:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 47:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 18:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0004_ip = 16; continue _fun0004 }
case 15:
                return var1;
case 44:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.versions;
                if(!var3) { _fun0005_ip = 49; continue _fun0005 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 6;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Versions;
                var6 = var7.internalBinaryWrite;
                var4 = var5.versions;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.inbox;
                if(!var3) { _fun0005_ip = 50; continue _fun0005 }
case 51:
                var7 = _closure1_slot26;
                var6 = var7.internalBinaryWrite;
                var4 = var5.inbox;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 50:
                var3 = var5.guilds;
                if(!var3) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                var7 = _closure1_slot27;
                var6 = var7.internalBinaryWrite;
                var4 = var5.guilds;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 52:
                var3 = var5.userContent;
                if(!var3) { _fun0005_ip = 54; continue _fun0005 }
case 55:
                var7 = _closure1_slot34;
                var6 = var7.internalBinaryWrite;
                var4 = var5.userContent;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 54:
                var3 = var5.voiceAndVideo;
                if(!var3) { _fun0005_ip = 56; continue _fun0005 }
case 57:
                var7 = _closure1_slot37;
                var6 = var7.internalBinaryWrite;
                var4 = var5.voiceAndVideo;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 56:
                var3 = var5.textAndImages;
                if(!var3) { _fun0005_ip = 58; continue _fun0005 }
case 59:
                var7 = _closure1_slot41;
                var6 = var7.internalBinaryWrite;
                var4 = var5.textAndImages;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 58:
                var3 = var5.notifications;
                if(!var3) { _fun0005_ip = 60; continue _fun0005 }
case 61:
                var7 = _closure1_slot42;
                var6 = var7.internalBinaryWrite;
                var4 = var5.notifications;
                var9 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var8 = 7;
                var10 = var3[var8];
                var3 = undefined;
                var3 = var11.bind(var3)(var10);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 60:
                var3 = var5.privacy;
                if(!var3) { _fun0005_ip = 62; continue _fun0005 }
case 63:
                var7 = _closure1_slot43;
                var6 = var7.internalBinaryWrite;
                var4 = var5.privacy;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 8;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 62:
                var3 = var5.debug;
                if(!var3) { _fun0005_ip = 64; continue _fun0005 }
case 65:
                var7 = _closure1_slot44;
                var6 = var7.internalBinaryWrite;
                var4 = var5.debug;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 9;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 64:
                var3 = var5.gameLibrary;
                if(!var3) { _fun0005_ip = 66; continue _fun0005 }
case 67:
                var7 = _closure1_slot45;
                var6 = var7.internalBinaryWrite;
                var4 = var5.gameLibrary;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 66:
                var3 = var5.status;
                if(!var3) { _fun0005_ip = 68; continue _fun0005 }
case 69:
                var7 = _closure1_slot46;
                var6 = var7.internalBinaryWrite;
                var4 = var5.status;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 68:
                var3 = var5.localization;
                if(!var3) { _fun0005_ip = 70; continue _fun0005 }
case 71:
                var7 = _closure1_slot48;
                var6 = var7.internalBinaryWrite;
                var4 = var5.localization;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 12;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 70:
                var3 = var5.appearance;
                if(!var3) { _fun0005_ip = 72; continue _fun0005 }
case 38:
                var7 = _closure1_slot50;
                var6 = var7.internalBinaryWrite;
                var4 = var5.appearance;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 13;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 72:
                var3 = var5.guildFolders;
                if(!var3) { _fun0005_ip = 73; continue _fun0005 }
case 74:
                var7 = _closure1_slot53;
                var6 = var7.internalBinaryWrite;
                var4 = var5.guildFolders;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 14;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 73:
                var3 = var5.favorites;
                if(!var3) { _fun0005_ip = 75; continue _fun0005 }
case 76:
                var7 = _closure1_slot55;
                var6 = var7.internalBinaryWrite;
                var4 = var5.favorites;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 15;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 75:
                var3 = var5.audioContextSettings;
                if(!var3) { _fun0005_ip = 77; continue _fun0005 }
case 45:
                var7 = _closure1_slot58;
                var6 = var7.internalBinaryWrite;
                var4 = var5.audioContextSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 16;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 77:
                var3 = var5.communities;
                if(!var3) { _fun0005_ip = 78; continue _fun0005 }
case 79:
                var7 = _closure1_slot59;
                var6 = var7.internalBinaryWrite;
                var4 = var5.communities;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 17;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 78:
                var3 = var5.broadcast;
                if(!var3) { _fun0005_ip = 80; continue _fun0005 }
case 81:
                var7 = _closure1_slot62;
                var6 = var7.internalBinaryWrite;
                var4 = var5.broadcast;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 18;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 80:
                var3 = var5.clips;
                if(!var3) { _fun0005_ip = 82; continue _fun0005 }
case 83:
                var7 = _closure1_slot63;
                var6 = var7.internalBinaryWrite;
                var4 = var5.clips;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 19;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 82:
                var3 = var5.forLater;
                if(!var3) { _fun0005_ip = 84; continue _fun0005 }
case 85:
                var7 = _closure1_slot65;
                var6 = var7.internalBinaryWrite;
                var4 = var5.forLater;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 20;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 84:
                var3 = var5.safetySettings;
                if(!var3) { _fun0005_ip = 86; continue _fun0005 }
case 87:
                var7 = _closure1_slot64;
                var6 = var7.internalBinaryWrite;
                var4 = var5.safetySettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 21;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 86:
                var3 = var5.icymiSettings;
                if(!var3) { _fun0005_ip = 88; continue _fun0005 }
case 89:
                var7 = _closure1_slot66;
                var6 = var7.internalBinaryWrite;
                var4 = var5.icymiSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 22;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 88:
                var3 = var5.applications;
                if(!var3) { _fun0005_ip = 90; continue _fun0005 }
case 91:
                var7 = _closure1_slot67;
                var6 = var7.internalBinaryWrite;
                var4 = var5.applications;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 23;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 90:
                var3 = var5.ads;
                if(!var3) { _fun0005_ip = 92; continue _fun0005 }
case 93:
                var7 = _closure1_slot71;
                var6 = var7.internalBinaryWrite;
                var4 = var5.ads;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 24;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 92:
                var3 = var5.inAppFeedbackSettings;
                if(!var3) { _fun0005_ip = 94; continue _fun0005 }
case 95:
                var7 = _closure1_slot74;
                var6 = var7.internalBinaryWrite;
                var4 = var5.inAppFeedbackSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 25;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 94:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0005_ip = 96; continue _fun0005 }
case 97:
                var2 = 1;
                if(!(var2 == var4)) { _fun0005_ip = 98; continue _fun0005 }
case 99:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 98:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 96:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var52 = var4 instanceof Object ? var4 : var5;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function InboxSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'current_tab', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot8;
                var1 = ['discord_protos.discord_users.v1.InboxTab'];
                var1[1] = var2;
                var2 = 'INBOX_TAB_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'viewed_tutorial', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.InboxSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'currentTab': 0, 'viewedTutorial': false};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0006_ip = 100; continue _fun0006 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0007_ip = 13; continue _fun0007 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0007_ip = 101; continue _fun0007 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0007_ip = 103; continue _fun0007 }
case 104:
                if(!(var7 !== var26)) { _fun0007_ip = 105; continue _fun0007 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0007_ip = 106; continue _fun0007 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0007_ip = 22; continue _fun0007 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0007_ip = 109; continue _fun0007 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0007_ip = 22; continue _fun0007;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['viewedTutorial'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0007_ip = 22; continue _fun0007;
case 103:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['currentTab'] = var2;
                var19 = var4;
                var18 = var3;
case 22:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0007_ip = 102; continue _fun0007 }
case 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.currentTab;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0008_ip = 111; continue _fun0008 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.currentTab;
                var2 = var3.bind(var4)(var2);
case 111:
                var3 = var5.viewedTutorial;
                var2 = false;
                if(!(var2 !== var3)) { _fun0008_ip = 110; continue _fun0008 }
case 112:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.viewedTutorial;
                var3 = var4.bind(var6)(var3);
case 110:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0008_ip = 113; continue _fun0008 }
case 114:
                var2 = 1;
                if(!(var2 == var4)) { _fun0008_ip = 115; continue _fun0008 }
case 116:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 115:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 113:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var51 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot26 = var51;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AllGuildSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'guilds', 'kind': 'map', 'K': 6};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot29;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.AllGuildSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['guilds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0009_ip = 117; continue _fun0009 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 117:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0010_ip = 13; continue _fun0010 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0010_ip = 118; continue _fun0010 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0010_ip = 21; continue _fun0010 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0010_ip = 119; continue _fun0010 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0010_ip = 121; continue _fun0010 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0010_ip = 19; continue _fun0010 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0010_ip = 121; continue _fun0010;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.guilds;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 121:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0010_ip = 102; continue _fun0010 }
case 118:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0011_ip = 123; continue _fun0011 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0011_ip = 125; continue _fun0011 }
case 126:
                if(!(var10 !== var3)) { _fun0011_ip = 127; continue _fun0011 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.AllGuildSettings.guilds';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot29;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0011_ip = 128; continue _fun0011;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0011_ip = 124; continue _fun0011 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0011_ip = 106; continue _fun0011 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0011_ip = 129; continue _fun0011 }
case 130:
                var5 = _closure1_slot29;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.guilds;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0012_ip = 131; continue _fun0012 }
case 132:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot29;
                var12 = var13.internalBinaryWrite;
                var8 = var5.guilds;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0012_ip = 132; continue _fun0012 }
case 131:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0012_ip = 133; continue _fun0012 }
case 134:
                if(!(var6 == var3)) { _fun0012_ip = 135; continue _fun0012 }
case 136:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 135:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 133:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var50 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot27 = var50;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildDismissibleContentState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(5);
            var1 = {'no': 1, 'name': 'dismissed', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'last_dismissed_version', 'kind': 'scalar', 'T': 13};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'last_dismissed_at_ms', 'kind': 'scalar', 'T': 4};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'last_dismissed_object_id', 'kind': 'scalar', 'T': 4};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'num_times_dismissed', 'kind': 'scalar', 'T': 13};
            var6[4] = var1;
            var1 = ['discord_protos.discord_users.v1.GuildDismissibleContentState'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'dismissed': false, 'lastDismissedVersion': 0, 'lastDismissedAtMs': '0', 'lastDismissedObjectId': '0', 'numTimesDismissed': 0};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0013_ip = 100; continue _fun0013 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0014_ip = 13; continue _fun0014 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0014_ip = 137; continue _fun0014 }
case 138:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var7);
                var29 = var2[var5];
                var28 = var2[var6];
                if(!(var6 !== var29)) { _fun0014_ip = 139; continue _fun0014 }
case 140:
                if(!(var7 !== var29)) { _fun0014_ip = 141; continue _fun0014 }
case 51:
                if(!(var8 !== var29)) { _fun0014_ip = 142; continue _fun0014 }
case 143:
                if(!(var9 !== var29)) { _fun0014_ip = 144; continue _fun0014 }
case 145:
                if(!(var10 !== var29)) { _fun0014_ip = 146; continue _fun0014 }
case 147:
                var23 = var19.readUnknownField;
                if(!(var11 !== var23)) { _fun0014_ip = 148; continue _fun0014 }
case 149:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var28);
                var22 = var23;
                var21 = var2;
                if(!(var12 !== var23)) { _fun0014_ip = 150; continue _fun0014 }
case 151:
                var25 = var23;
                if(!(var13 === var23)) { _fun0014_ip = 152; continue _fun0014 }
case 153:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var14];
                var24 = var26.bind(var16)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 152:
                var34 = var18.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var29;
                var31 = var28;
                var30 = var2;
                var24 = var35[var25](var34, var33, var32, var31, var30, var29);
                var22 = var23;
                var21 = var2;
                _fun0014_ip = 150; continue _fun0014;
case 148:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var30 = var18.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var29;
                var32 = var28;
                var34 = var35[var26](var34, var33, var32, var31, var30, var29);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var35 = var23;
                var2 = new var35[var24](var34, var33);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 146:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['numTimesDismissed'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0014_ip = 150; continue _fun0014;
case 144:
                var2 = var20.uint64;
                var23 = var2.bind(var20)();
                var2 = var23.toString;
                var2 = var2.bind(var23)();
                var1['lastDismissedObjectId'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0014_ip = 150; continue _fun0014;
case 142:
                var2 = var20.uint64;
                var23 = var2.bind(var20)();
                var2 = var23.toString;
                var2 = var2.bind(var23)();
                var1['lastDismissedAtMs'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0014_ip = 150; continue _fun0014;
case 141:
                var2 = var20.uint32;
                var2 = var2.bind(var20)();
                var1['lastDismissedVersion'] = var2;
                var22 = var4;
                var21 = var3;
                _fun0014_ip = 150; continue _fun0014;
case 139:
                var2 = var20.bool;
                var2 = var2.bind(var20)();
                var1['dismissed'] = var2;
                var22 = var4;
                var21 = var3;
case 150:
                var2 = var20.pos;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0014_ip = 138; continue _fun0014 }
case 137:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.dismissed;
                var2 = false;
                if(!(var2 !== var3)) { _fun0015_ip = 111; continue _fun0015 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.dismissed;
                var3 = var4.bind(var6)(var3);
case 111:
                var3 = var5.lastDismissedVersion;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0015_ip = 110; continue _fun0015 }
case 112:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 2;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.uint32;
                var3 = var5.lastDismissedVersion;
                var3 = var6.bind(var7)(var3);
case 110:
                var3 = var5.lastDismissedAtMs;
                var6 = '0';
                if(!(var6 !== var3)) { _fun0015_ip = 154; continue _fun0015 }
case 155:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 7;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var9.bind(var3)(var7);
                var3 = var3.WireType;
                var7 = var3.Varint;
                var3 = 3;
                var8 = var8.bind(var1)(var3, var7);
                var7 = var8.uint64;
                var3 = var5.lastDismissedAtMs;
                var3 = var7.bind(var8)(var3);
case 154:
                var3 = var5.lastDismissedObjectId;
                if(!(var6 !== var3)) { _fun0015_ip = 156; continue _fun0015 }
case 148:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 4;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.uint64;
                var3 = var5.lastDismissedObjectId;
                var3 = var6.bind(var7)(var3);
case 156:
                var3 = var5.numTimesDismissed;
                if(!(var4 !== var3)) { _fun0015_ip = 157; continue _fun0015 }
case 55:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 5;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.uint32;
                var3 = var5.numTimesDismissed;
                var3 = var4.bind(var6)(var3);
case 157:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0015_ip = 158; continue _fun0015 }
case 159:
                var2 = 1;
                if(!(var2 == var4)) { _fun0015_ip = 160; continue _fun0015 }
case 161:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 160:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 158:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var49 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot28 = var49;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'channels', 'kind': 'map', 'K': 6};
            var6 = {};
            var9 = 'message';
            var6['kind'] = var9;
            var7 = function T() {
                var1 = _closure1_slot31;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(12);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'hub_progress', 'kind': 'scalar', 'T': 13};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'guild_onboarding_progress', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'guild_recents_dismissed_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'dismissed_guild_content', 'kind': 'scalar', 'T': 12};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'join_sound', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot61;
                return var1;
            };
            var1['T'] = var7;
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'mobile_redesign_channel_list_settings', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot49;
                return var1;
            };
            var1['T'] = var7;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'disable_raid_alert_push', 'kind': 'scalar', 'T': 8};
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'disable_raid_alert_nag', 'kind': 'scalar', 'T': 8};
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'custom_notification_sound_config', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot32;
                return var1;
            };
            var1['T'] = var7;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'leaderboards_disabled', 'kind': 'scalar', 'T': 8};
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'guild_dismissible_content_states', 'kind': 'map', 'K': 5};
            var7 = {};
            var7['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot28;
                return var1;
            };
            var7['T'] = var8;
            var1['V'] = var7;
            var6[11] = var1;
            var1 = ['discord_protos.discord_users.v1.GuildSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'channels': null, 'hubProgress': 0, 'guildOnboardingProgress': 0, 'dismissedGuildContent': null, 'disableRaidAlertPush': false, 'disableRaidAlertNag': false, 'leaderboardsDisabled': false};
                var2 = {};
                var1['channels'] = var2;
                var14 = 0;
                var2 = global;
                var3 = var2.Uint8Array;
                var6 = var3.prototype;
                var6 = Object.create(var6, {constructor: {value: var3}});
                var15 = var6;
                var3 = new var15[var3](var14, var13);
                var3 = var3 instanceof Object ? var3 : var6;
                var1['dismissedGuildContent'] = var3;
                var11 = false;
                var3 = {};
                var1['guildDismissibleContentStates'] = var3;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0016_ip = 162; continue _fun0016 }
case 143:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 162:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0017_ip = 13; continue _fun0017 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 8;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0017_ip = 163; continue _fun0017 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=792, default_jump_address=594, unsigned_min_value=1, unsigned_max_value=12) // Switch table: [567, 540, 513, 438, 411, 355, 299, 272, 245, 189, 162, 132];
case 17:
                var21 = var2.binaryReadMap12;
                var3 = var1.guildDismissibleContentStates;
                var3 = var21.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 165:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['leaderboardsDisabled'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 151:
                var25 = _closure1_slot32;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.customNotificationSoundConfig;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['customNotificationSoundConfig'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 166:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['disableRaidAlertNag'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 167:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['disableRaidAlertPush'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 168:
                var25 = _closure1_slot49;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.mobileRedesignChannelListSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['mobileRedesignChannelListSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 169:
                var25 = _closure1_slot61;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.joinSound;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['joinSound'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 170:
                var3 = var20.bytes;
                var3 = var3.bind(var20)();
                var1['dismissedGuildContent'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 171:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.Timestamp;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.guildRecentsDismissedAt;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['guildRecentsDismissedAt'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 172:
                var3 = var20.uint32;
                var3 = var3.bind(var20)();
                var1['guildOnboardingProgress'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 173:
                var3 = var20.uint32;
                var3 = var3.bind(var20)();
                var1['hubProgress'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 174:
                var23 = var2.binaryReadMap1;
                var3 = var1.channels;
                var3 = var23.bind(var2)(var3, var20, var19);
                var22 = var5;
                var21 = var4;
                _fun0017_ip = 164; continue _fun0017;
case 175:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0017_ip = 176; continue _fun0017 }
case 177:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0017_ip = 164; continue _fun0017 }
case 178:
                var25 = var23;
                if(!(var14 === var23)) { _fun0017_ip = 179; continue _fun0017 }
case 180:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 179:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 164:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0017_ip = 16; continue _fun0017 }
case 163:
                return var1;
case 176:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0018_ip = 123; continue _fun0018 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0018_ip = 125; continue _fun0018 }
case 126:
                if(!(var10 !== var3)) { _fun0018_ip = 127; continue _fun0018 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.channels';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot31;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0018_ip = 128; continue _fun0018;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0018_ip = 124; continue _fun0018 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0018_ip = 106; continue _fun0018 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0018_ip = 129; continue _fun0018 }
case 130:
                var5 = _closure1_slot31;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'binaryReadMap12';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0019_ip = 181; continue _fun0019 }
case 124:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0019_ip = 125; continue _fun0019 }
case 126:
                if(!(var10 !== var5)) { _fun0019_ip = 127; continue _fun0019 }
case 112:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.GuildSettings.guild_dismissible_content_states';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 127:
                var15 = _closure1_slot28;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0019_ip = 182; continue _fun0019;
case 125:
                var5 = var13.int32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 182:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0019_ip = 124; continue _fun0019 }
case 181:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0019_ip = 183; continue _fun0019 }
case 184:
                var4 = var6;
case 183:
                if(!(var5 == var3)) { _fun0019_ip = 130; continue _fun0019 }
case 185:
                var5 = _closure1_slot28;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 130:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var14 = global;
                var6 = var14.Object;
                var4 = var6.keys;
                var2 = var5.channels;
                var10 = var4.bind(var6)(var2);
                var2 = var10.length;
                var13 = 0;
                var8 = var13 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var12 = 2;
                var9 = 0;
                if(!var8) { _fun0020_ip = 186; continue _fun0020 }
case 187:
                var16 = var10[var9];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var11 = var8[var7];
                var11 = var15.bind(var4)(var11);
                var11 = var11.WireType;
                var11 = var11.LengthDelimited;
                var17 = var17.bind(var1)(var6, var11);
                var11 = var17.fork;
                var18 = var11.bind(var17)();
                var17 = var18.tag;
                var11 = var8[var7];
                var11 = var15.bind(var4)(var11);
                var11 = var11.WireType;
                var11 = var11.Bit64;
                var17 = var17.bind(var18)(var6, var11);
                var11 = var17.fixed64;
                var11 = var11.bind(var17)(var16);
                var11 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var11 = var11.bind(var1)(var12, var8);
                var8 = var11.fork;
                var8 = var8.bind(var11)();
                var15 = _closure1_slot31;
                var11 = var15.internalBinaryWrite;
                var8 = var5.channels;
                var8 = var8[var16];
                var8 = var11.bind(var15)(var8, var1, var3);
                var8 = var1.join;
                var11 = var8.bind(var1)();
                var8 = var11.join;
                var8 = var8.bind(var11)();
                var9 = var9 + 1;
                var8 = var10.length;
                if(var9 < var8) { _fun0020_ip = 187; continue _fun0020 }
case 186:
                var8 = var5.hubProgress;
                if(!(var13 !== var8)) { _fun0020_ip = 188; continue _fun0020 }
case 134:
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.Varint;
                var10 = var9.bind(var1)(var12, var8);
                var9 = var10.uint32;
                var8 = var5.hubProgress;
                var8 = var9.bind(var10)(var8);
case 188:
                var8 = var5.guildOnboardingProgress;
                if(!(var13 !== var8)) { _fun0020_ip = 189; continue _fun0020 }
case 190:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.Varint;
                var8 = 3;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.uint32;
                var8 = var5.guildOnboardingProgress;
                var8 = var9.bind(var10)(var8);
case 189:
                var8 = var5.guildRecentsDismissedAt;
                if(!var8) { _fun0020_ip = 191; continue _fun0020 }
case 170:
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var9 = 8;
                var9 = var8[var9];
                var9 = var15.bind(var4)(var9);
                var11 = var9.Timestamp;
                var10 = var11.internalBinaryWrite;
                var9 = var5.guildRecentsDismissedAt;
                var16 = var1.tag;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var15 = var8.LengthDelimited;
                var8 = 4;
                var15 = var16.bind(var1)(var8, var15);
                var8 = var15.fork;
                var8 = var8.bind(var15)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 191:
                var8 = var5.dismissedGuildContent;
                var8 = var8.length;
                if(!var8) { _fun0020_ip = 192; continue _fun0020 }
case 25:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var9.bind(var4)(var8);
                var8 = var8.WireType;
                var9 = var8.LengthDelimited;
                var8 = 5;
                var10 = var10.bind(var1)(var8, var9);
                var9 = var10.bytes;
                var8 = var5.dismissedGuildContent;
                var8 = var9.bind(var10)(var8);
case 192:
                var8 = var5.joinSound;
                if(!var8) { _fun0020_ip = 193; continue _fun0020 }
case 194:
                var11 = _closure1_slot61;
                var10 = var11.internalBinaryWrite;
                var9 = var5.joinSound;
                var16 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var15 = var8.LengthDelimited;
                var8 = 6;
                var15 = var16.bind(var1)(var8, var15);
                var8 = var15.fork;
                var8 = var8.bind(var15)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 193:
                var8 = var5.mobileRedesignChannelListSettings;
                if(!var8) { _fun0020_ip = 195; continue _fun0020 }
case 196:
                var11 = _closure1_slot49;
                var10 = var11.internalBinaryWrite;
                var9 = var5.mobileRedesignChannelListSettings;
                var15 = var1.tag;
                var16 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var16.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var15 = var15.bind(var1)(var7, var8);
                var8 = var15.fork;
                var8 = var8.bind(var15)();
                var9 = var10.bind(var11)(var9, var8, var3);
                var8 = var9.join;
                var8 = var8.bind(var9)();
case 195:
                var9 = var5.disableRaidAlertPush;
                var8 = false;
                if(!(var8 !== var9)) { _fun0020_ip = 197; continue _fun0020 }
case 198:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 8;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.disableRaidAlertPush;
                var9 = var10.bind(var11)(var9);
case 197:
                var9 = var5.disableRaidAlertNag;
                if(!(var8 !== var9)) { _fun0020_ip = 199; continue _fun0020 }
case 200:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 9;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.disableRaidAlertNag;
                var9 = var10.bind(var11)(var9);
case 199:
                var9 = var5.customNotificationSoundConfig;
                if(!var9) { _fun0020_ip = 201; continue _fun0020 }
case 202:
                var15 = _closure1_slot32;
                var11 = var15.internalBinaryWrite;
                var10 = var5.customNotificationSoundConfig;
                var17 = var1.tag;
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var16.bind(var4)(var9);
                var9 = var9.WireType;
                var16 = var9.LengthDelimited;
                var9 = 10;
                var16 = var17.bind(var1)(var9, var16);
                var9 = var16.fork;
                var9 = var9.bind(var16)();
                var10 = var11.bind(var15)(var10, var9, var3);
                var9 = var10.join;
                var9 = var9.bind(var10)();
case 201:
                var9 = var5.leaderboardsDisabled;
                if(!(var8 !== var9)) { _fun0020_ip = 203; continue _fun0020 }
case 204:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var10.bind(var4)(var9);
                var9 = var9.WireType;
                var10 = var9.Varint;
                var9 = 11;
                var11 = var11.bind(var1)(var9, var10);
                var10 = var11.bool;
                var9 = var5.leaderboardsDisabled;
                var9 = var10.bind(var11)(var9);
case 203:
                var11 = var14.Object;
                var10 = var11.keys;
                var9 = var5.guildDismissibleContentStates;
                var11 = var10.bind(var11)(var9);
                var9 = var11.length;
                var9 = var13 < var9;
                var10 = 12;
                var13 = 0;
                if(!var9) { _fun0020_ip = 205; continue _fun0020 }
case 206:
                var17 = var11[var13];
                var18 = var1.tag;
                var16 = _closure1_slot0;
                var9 = _closure1_slot1;
                var15 = var9[var7];
                var15 = var16.bind(var4)(var15);
                var15 = var15.WireType;
                var15 = var15.LengthDelimited;
                var18 = var18.bind(var1)(var10, var15);
                var15 = var18.fork;
                var19 = var15.bind(var18)();
                var18 = var19.tag;
                var15 = var9[var7];
                var15 = var16.bind(var4)(var15);
                var15 = var15.WireType;
                var15 = var15.Varint;
                var19 = var18.bind(var19)(var6, var15);
                var18 = var19.int32;
                var15 = var14.parseInt;
                var15 = var15.bind(var4)(var17);
                var15 = var18.bind(var19)(var15);
                var15 = var1.tag;
                var9 = var9[var7];
                var9 = var16.bind(var4)(var9);
                var9 = var9.WireType;
                var9 = var9.LengthDelimited;
                var15 = var15.bind(var1)(var12, var9);
                var9 = var15.fork;
                var9 = var9.bind(var15)();
                var16 = _closure1_slot28;
                var15 = var16.internalBinaryWrite;
                var9 = var5.guildDismissibleContentStates;
                var9 = var9[var17];
                var9 = var15.bind(var16)(var9, var1, var3);
                var9 = var1.join;
                var15 = var9.bind(var1)();
                var9 = var15.join;
                var9 = var9.bind(var15)();
                var13 = var13 + 1;
                var9 = var11.length;
                if(var13 < var9) { _fun0020_ip = 206; continue _fun0020 }
case 205:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0020_ip = 207; continue _fun0020 }
case 208:
                if(!(var6 == var3)) { _fun0020_ip = 209; continue _fun0020 }
case 210:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 209:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 207:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var48 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot29 = var48;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ChannelIconEmoji$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'name', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'color', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.ChannelIconEmoji'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0021_ip = 11; continue _fun0021 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0022_ip = 13; continue _fun0022 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0022_ip = 211; continue _fun0022 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0022_ip = 24; continue _fun0022 }
case 213:
                if(!(var7 !== var28)) { _fun0022_ip = 142; continue _fun0022 }
case 214:
                if(!(var8 !== var28)) { _fun0022_ip = 215; continue _fun0022 }
case 216:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0022_ip = 217; continue _fun0022 }
case 145:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0022_ip = 218; continue _fun0022 }
case 219:
                var24 = var22;
                if(!(var11 === var22)) { _fun0022_ip = 220; continue _fun0022 }
case 114:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 220:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0022_ip = 218; continue _fun0022;
case 217:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 215:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt64Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.color;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['color'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0022_ip = 218; continue _fun0022;
case 142:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.StringValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.name;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['name'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0022_ip = 218; continue _fun0022;
case 24:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt64Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.id;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['id'] = var2;
                var21 = var4;
                var20 = var3;
case 218:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0022_ip = 212; continue _fun0022 }
case 211:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.id;
                if(!var3) { _fun0023_ip = 221; continue _fun0023 }
case 222:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.id;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 221:
                var3 = var5.name;
                if(!var3) { _fun0023_ip = 223; continue _fun0023 }
case 214:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.name;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 223:
                var3 = var5.color;
                if(!var3) { _fun0023_ip = 224; continue _fun0023 }
case 166:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.color;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 224:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0023_ip = 225; continue _fun0023 }
case 226:
                var2 = 1;
                if(!(var2 == var4)) { _fun0023_ip = 227; continue _fun0023 }
case 228:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 227:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 225:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var47 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot30 = var47;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ChannelSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(3);
            var1 = {'no': 1, 'name': 'collapsed_in_inbox', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'icon_emoji', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot30;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'custom_notification_sound_config', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot32;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.ChannelSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['collapsedInInbox'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0024_ip = 229; continue _fun0024 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0025_ip = 13; continue _fun0025 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0025_ip = 231; continue _fun0025 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0025_ip = 161; continue _fun0025 }
case 232:
                if(!(var7 !== var27)) { _fun0025_ip = 233; continue _fun0025 }
case 120:
                if(!(var8 !== var27)) { _fun0025_ip = 234; continue _fun0025 }
case 107:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0025_ip = 235; continue _fun0025 }
case 236:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0025_ip = 237; continue _fun0025 }
case 238:
                var23 = var21;
                if(!(var11 === var21)) { _fun0025_ip = 239; continue _fun0025 }
case 240:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 239:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0025_ip = 237; continue _fun0025;
case 235:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 234:
                var23 = _closure1_slot32;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.customNotificationSoundConfig;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['customNotificationSoundConfig'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0025_ip = 237; continue _fun0025;
case 233:
                var23 = _closure1_slot30;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.iconEmoji;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['iconEmoji'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0025_ip = 237; continue _fun0025;
case 161:
                var2 = var18.bool;
                var2 = var2.bind(var18)();
                var1['collapsedInInbox'] = var2;
                var20 = var4;
                var19 = var3;
case 237:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0025_ip = 16; continue _fun0025 }
case 231:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var4 = var5.collapsedInInbox;
                var2 = false;
                if(!(var2 !== var4)) { _fun0026_ip = 241; continue _fun0026 }
case 242:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 1;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.collapsedInInbox;
                var4 = var6.bind(var7)(var4);
case 241:
                var4 = var5.iconEmoji;
                if(!var4) { _fun0026_ip = 243; continue _fun0026 }
case 112:
                var8 = _closure1_slot30;
                var7 = var8.internalBinaryWrite;
                var6 = var5.iconEmoji;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 2;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 243:
                var4 = var5.customNotificationSoundConfig;
                if(!var4) { _fun0026_ip = 244; continue _fun0026 }
case 245:
                var8 = _closure1_slot32;
                var7 = var8.internalBinaryWrite;
                var6 = var5.customNotificationSoundConfig;
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var9 = _closure1_slot1;
                var4 = 7;
                var9 = var9[var4];
                var4 = undefined;
                var4 = var11.bind(var4)(var9);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 3;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 244:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0026_ip = 246; continue _fun0026 }
case 247:
                var2 = 1;
                if(!(var2 == var4)) { _fun0026_ip = 248; continue _fun0026 }
case 105:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 248:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 246:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var46 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot31 = var46;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CustomNotificationSoundConfig$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'notification_sound_pack_id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.CustomNotificationSoundConfig'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0027_ip = 11; continue _fun0027 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0028_ip = 13; continue _fun0028 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0028_ip = 249; continue _fun0028 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0028_ip = 250; continue _fun0028 }
case 232:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0028_ip = 251; continue _fun0028 }
case 214:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0028_ip = 252; continue _fun0028 }
case 147:
                var23 = var21;
                if(!(var10 === var21)) { _fun0028_ip = 243; continue _fun0028 }
case 165:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 243:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0028_ip = 252; continue _fun0028;
case 251:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 250:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.StringValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.notificationSoundPackId;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['notificationSoundPackId'] = var2;
                var20 = var4;
                var19 = var3;
case 252:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0028_ip = 16; continue _fun0028 }
case 249:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.notificationSoundPackId;
                if(!var3) { _fun0029_ip = 49; continue _fun0029 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.notificationSoundPackId;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0029_ip = 253; continue _fun0029 }
case 254:
                var2 = 1;
                if(!(var2 == var4)) { _fun0029_ip = 182; continue _fun0029 }
case 255:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 253:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var45 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot32 = var45;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function RecurringDismissibleContentState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'last_dismissed_version', 'kind': 'scalar', 'T': 13};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'last_dismissed_at_ms', 'kind': 'scalar', 'T': 4};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'last_dismissed_object_id', 'kind': 'scalar', 'T': 4};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'num_times_dismissed', 'kind': 'scalar', 'T': 13};
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.RecurringDismissibleContentState'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'lastDismissedVersion': 0, 'lastDismissedAtMs': '0', 'lastDismissedObjectId': '0', 'numTimesDismissed': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0030_ip = 100; continue _fun0030 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0031_ip = 13; continue _fun0031 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 7;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0031_ip = 256; continue _fun0031 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0031_ip = 257; continue _fun0031 }
case 213:
                if(!(var7 !== var28)) { _fun0031_ip = 258; continue _fun0031 }
case 214:
                if(!(var8 !== var28)) { _fun0031_ip = 259; continue _fun0031 }
case 216:
                if(!(var9 !== var28)) { _fun0031_ip = 260; continue _fun0031 }
case 236:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0031_ip = 154; continue _fun0031 }
case 147:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0031_ip = 261; continue _fun0031 }
case 114:
                var24 = var22;
                if(!(var12 === var22)) { _fun0031_ip = 262; continue _fun0031 }
case 116:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 262:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0031_ip = 261; continue _fun0031;
case 154:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 260:
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var1['numTimesDismissed'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0031_ip = 261; continue _fun0031;
case 259:
                var2 = var19.uint64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['lastDismissedObjectId'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0031_ip = 261; continue _fun0031;
case 258:
                var2 = var19.uint64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['lastDismissedAtMs'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0031_ip = 261; continue _fun0031;
case 257:
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var1['lastDismissedVersion'] = var2;
                var21 = var4;
                var20 = var3;
case 261:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0031_ip = 212; continue _fun0031 }
case 256:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.lastDismissedVersion;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0032_ip = 111; continue _fun0032 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint32;
                var2 = var5.lastDismissedVersion;
                var2 = var4.bind(var6)(var2);
case 111:
                var2 = var5.lastDismissedAtMs;
                var4 = '0';
                if(!(var4 !== var2)) { _fun0032_ip = 263; continue _fun0032 }
case 264:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 7;
                var6 = var6[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var6);
                var2 = var2.WireType;
                var6 = var2.Varint;
                var2 = 2;
                var7 = var7.bind(var1)(var2, var6);
                var6 = var7.uint64;
                var2 = var5.lastDismissedAtMs;
                var2 = var6.bind(var7)(var2);
case 263:
                var2 = var5.lastDismissedObjectId;
                if(!(var4 !== var2)) { _fun0032_ip = 265; continue _fun0032 }
case 266:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 3;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.uint64;
                var2 = var5.lastDismissedObjectId;
                var2 = var4.bind(var6)(var2);
case 265:
                var2 = var5.numTimesDismissed;
                if(!(var3 !== var2)) { _fun0032_ip = 267; continue _fun0032 }
case 268:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 4;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.numTimesDismissed;
                var2 = var3.bind(var4)(var2);
case 267:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0032_ip = 269; continue _fun0032 }
case 270:
                var2 = 1;
                if(!(var2 == var4)) { _fun0032_ip = 271; continue _fun0032 }
case 272:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 271:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 269:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var44 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot33 = var44;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function UserContentSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(7);
            var1 = {'no': 1, 'name': 'dismissed_contents', 'kind': 'scalar', 'T': 12};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'last_dismissed_outbound_promotion_start_date', 'kind': 'message'};
            var9 = 'message';
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'premium_tier_0_modal_dismissed_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'guild_onboarding_upsell_dismissed_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'safety_user_sentiment_notice_dismissed_at', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Timestamp;
                return var1;
            };
            var1['T'] = var7;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'last_received_changelog_id', 'kind': 'scalar', 'T': 6};
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'recurring_dismissible_content_states', 'kind': 'map', 'K': 5};
            var7 = {};
            var7['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot33;
                return var1;
            };
            var7['T'] = var8;
            var1['V'] = var7;
            var6[6] = var1;
            var1 = ['discord_protos.discord_users.v1.UserContentSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var7 = var2.Uint8Array;
                var3 = var7.prototype;
                var6 = Object.create(var3, {constructor: {value: var7}});
                var14 = 0;
                var15 = var6;
                var3 = new var15[var7](var14, var13);
                var3 = var3 instanceof Object ? var3 : var6;
                var1['dismissedContents'] = var3;
                var3 = '0';
                var1['lastReceivedChangelogId'] = var3;
                var3 = {};
                var1['recurringDismissibleContentStates'] = var3;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0033_ip = 273; continue _fun0033 }
case 214:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 273:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
                var23 = arg1;
                var22 = arg3;
                var1 = arg4;
                var21 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0034_ip = 13; continue _fun0034 }
case 14:
                var2 = var21.create;
                var1 = var2.bind(var21)();
case 13:
                var3 = var23.pos;
                var2 = arg2;
                var20 = var3 + var2;
                var2 = var23.pos;
                var2 = var2 < var20;
                var19 = undefined;
                var17 = 9;
                var16 = 8;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0034_ip = 274; continue _fun0034 }
case 264:
                var2 = var23.tag;
                var24 = var2.bind(var23)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var19)(var24, var7);
                var32 = var2[var5];
                var31 = var2[var6];
                if(!(var6 !== var32)) { _fun0034_ip = 275; continue _fun0034 }
case 276:
                if(!(var7 !== var32)) { _fun0034_ip = 277; continue _fun0034 }
case 278:
                if(!(var8 !== var32)) { _fun0034_ip = 279; continue _fun0034 }
case 280:
                if(!(var9 !== var32)) { _fun0034_ip = 281; continue _fun0034 }
case 282:
                if(!(var10 !== var32)) { _fun0034_ip = 283; continue _fun0034 }
case 284:
                if(!(var11 !== var32)) { _fun0034_ip = 285; continue _fun0034 }
case 162:
                if(!(var15 !== var32)) { _fun0034_ip = 226; continue _fun0034 }
case 286:
                var26 = var22.readUnknownField;
                if(!(var12 !== var26)) { _fun0034_ip = 287; continue _fun0034 }
case 19:
                var2 = var23.skip;
                var2 = var2.bind(var23)(var31);
                var25 = var26;
                var24 = var2;
                if(!(var13 !== var26)) { _fun0034_ip = 288; continue _fun0034 }
case 123:
                var28 = var26;
                if(!(var14 === var26)) { _fun0034_ip = 265; continue _fun0034 }
case 289:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var19)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 265:
                var37 = var21.typeName;
                var38 = undefined;
                var36 = var1;
                var35 = var32;
                var34 = var31;
                var33 = var2;
                var27 = var38[var28](var37, var36, var35, var34, var33, var32);
                var25 = var26;
                var24 = var2;
                _fun0034_ip = 288; continue _fun0034;
case 287:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var33 = var21.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var38 = 'Unknown field ';
                var36 = ' (wire type ';
                var34 = ') for ';
                var37 = var32;
                var35 = var31;
                var37 = var38[var29](var37, var36, var35, var34, var33, var32);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var38 = var26;
                var2 = new var38[var27](var37, var36);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 226:
                var26 = var21.binaryReadMap7;
                var2 = var1.recurringDismissibleContentStates;
                var2 = var26.bind(var21)(var2, var23, var22);
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 285:
                var2 = var23.fixed64;
                var26 = var2.bind(var23)();
                var2 = var26.toString;
                var2 = var2.bind(var26)();
                var1['lastReceivedChangelogId'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 283:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.Timestamp;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.safetyUserSentimentNoticeDismissedAt;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['safetyUserSentimentNoticeDismissedAt'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 281:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.Timestamp;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.guildOnboardingUpsellDismissedAt;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['guildOnboardingUpsellDismissedAt'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 279:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var26.bind(var19)(var2);
                var28 = var2.Timestamp;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.premiumTier0ModalDismissedAt;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['premiumTier0ModalDismissedAt'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 277:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var17];
                var2 = var26.bind(var19)(var2);
                var28 = var2.StringValue;
                var27 = var28.internalBinaryRead;
                var2 = var23.uint32;
                var36 = var2.bind(var23)();
                var34 = var1.lastDismissedOutboundPromotionStartDate;
                var38 = var28;
                var37 = var23;
                var35 = var22;
                var2 = var38[var27](var37, var36, var35, var34, var33);
                var1['lastDismissedOutboundPromotionStartDate'] = var2;
                var25 = var4;
                var24 = var3;
                _fun0034_ip = 288; continue _fun0034;
case 275:
                var2 = var23.bytes;
                var2 = var2.bind(var23)();
                var1['dismissedContents'] = var2;
                var25 = var4;
                var24 = var3;
case 288:
                var2 = var23.pos;
                var4 = var25;
                var3 = var24;
                if(var2 < var20) { _fun0034_ip = 264; continue _fun0034 }
case 274:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap7';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0035_ip = 181; continue _fun0035 }
case 124:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0035_ip = 125; continue _fun0035 }
case 126:
                if(!(var10 !== var5)) { _fun0035_ip = 127; continue _fun0035 }
case 112:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.UserContentSettings.recurring_dismissible_content_states';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 127:
                var15 = _closure1_slot33;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0035_ip = 182; continue _fun0035;
case 125:
                var5 = var13.int32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 182:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0035_ip = 124; continue _fun0035 }
case 181:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0035_ip = 183; continue _fun0035 }
case 184:
                var4 = var6;
case 183:
                if(!(var5 == var3)) { _fun0035_ip = 130; continue _fun0035 }
case 185:
                var5 = _closure1_slot33;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 130:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.dismissedContents;
                var2 = var2.length;
                if(!var2) { _fun0036_ip = 290; continue _fun0036 }
case 291:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.bytes;
                var2 = var5.dismissedContents;
                var2 = var4.bind(var6)(var2);
case 290:
                var2 = var5.lastDismissedOutboundPromotionStartDate;
                if(!var2) { _fun0036_ip = 292; continue _fun0036 }
case 293:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lastDismissedOutboundPromotionStartDate;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 2;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 292:
                var2 = var5.premiumTier0ModalDismissedAt;
                if(!var2) { _fun0036_ip = 215; continue _fun0036 }
case 294:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 8;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.premiumTier0ModalDismissedAt;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 215:
                var2 = var5.guildOnboardingUpsellDismissedAt;
                if(!var2) { _fun0036_ip = 295; continue _fun0036 }
case 188:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 8;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.guildOnboardingUpsellDismissedAt;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 4;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 295:
                var2 = var5.safetyUserSentimentNoticeDismissedAt;
                if(!var2) { _fun0036_ip = 296; continue _fun0036 }
case 237:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 8;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.Timestamp;
                var6 = var7.internalBinaryWrite;
                var4 = var5.safetyUserSentimentNoticeDismissedAt;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 5;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 296:
                var4 = var5.lastReceivedChangelogId;
                var2 = '0';
                if(!(var2 !== var4)) { _fun0036_ip = 297; continue _fun0036 }
case 298:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 6;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.fixed64;
                var2 = var5.lastReceivedChangelogId;
                var2 = var4.bind(var6)(var2);
case 297:
                var12 = global;
                var6 = var12.Object;
                var4 = var6.keys;
                var2 = var5.recurringDismissibleContentStates;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0036_ip = 299; continue _fun0036 }
case 300:
                var15 = var11[var10];
                var16 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.LengthDelimited;
                var16 = var16.bind(var1)(var7, var13);
                var13 = var16.fork;
                var17 = var13.bind(var16)();
                var16 = var17.tag;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.Varint;
                var17 = var16.bind(var17)(var6, var13);
                var16 = var17.int32;
                var13 = var12.parseInt;
                var13 = var13.bind(var4)(var15);
                var13 = var16.bind(var17)(var13);
                var13 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var9, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var14 = _closure1_slot33;
                var13 = var14.internalBinaryWrite;
                var8 = var5.recurringDismissibleContentStates;
                var8 = var8[var15];
                var8 = var13.bind(var14)(var8, var1, var3);
                var8 = var1.join;
                var13 = var8.bind(var1)();
                var8 = var13.join;
                var8 = var8.bind(var13)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0036_ip = 300; continue _fun0036 }
case 299:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0036_ip = 301; continue _fun0036 }
case 32:
                if(!(var6 == var3)) { _fun0036_ip = 302; continue _fun0036 }
case 202:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 302:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 301:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var43 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot34 = var43;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function VideoFilterAsset$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'asset_hash', 'kind': 'scalar', 'T': 9};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.VideoFilterAsset'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'id': '0', 'assetHash': ''};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0037_ip = 100; continue _fun0037 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0038_ip = 13; continue _fun0038 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0038_ip = 303; continue _fun0038 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0038_ip = 304; continue _fun0038 }
case 104:
                if(!(var7 !== var26)) { _fun0038_ip = 105; continue _fun0038 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0038_ip = 106; continue _fun0038 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0038_ip = 144; continue _fun0038 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0038_ip = 109; continue _fun0038 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0038_ip = 144; continue _fun0038;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var2 = var17.string;
                var2 = var2.bind(var17)();
                var1['assetHash'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0038_ip = 144; continue _fun0038;
case 304:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['id'] = var2;
                var19 = var4;
                var18 = var3;
case 144:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0038_ip = 102; continue _fun0038 }
case 303:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.id;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0039_ip = 305; continue _fun0039 }
case 242:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.id;
                var2 = var3.bind(var4)(var2);
case 305:
                var3 = var5.assetHash;
                var2 = '';
                if(!(var2 !== var3)) { _fun0039_ip = 238; continue _fun0039 }
case 264:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 2;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.assetHash;
                var2 = var3.bind(var4)(var2);
case 238:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0039_ip = 306; continue _fun0039 }
case 307:
                var2 = 1;
                if(!(var2 == var4)) { _fun0039_ip = 308; continue _fun0039 }
case 243:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 308:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 306:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var42 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot35 = var42;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function VideoFilterBackgroundBlur$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'use_blur', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.VideoFilterBackgroundBlur'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['useBlur'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0040_ip = 229; continue _fun0040 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0041_ip = 13; continue _fun0041 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0041_ip = 270; continue _fun0041 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0041_ip = 21; continue _fun0041 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0041_ip = 119; continue _fun0041 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0041_ip = 309; continue _fun0041 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0041_ip = 19; continue _fun0041 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0041_ip = 309; continue _fun0041;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['useBlur'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0041_ip = 102; continue _fun0041 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.useBlur;
                var2 = false;
                if(!(var2 !== var3)) { _fun0042_ip = 111; continue _fun0042 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.useBlur;
                var3 = var4.bind(var6)(var3);
case 111:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0042_ip = 273; continue _fun0042 }
case 310:
                var2 = 1;
                if(!(var2 == var4)) { _fun0042_ip = 278; continue _fun0042 }
case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 278:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 273:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var41 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot36 = var41;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function VoiceAndVideoSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'blur', 'kind': 'message', 'oneof': 'videoBackgroundFilterDesktop'};
            var6 = function T() {
                var1 = _closure1_slot36;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(10);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'preset_option', 'kind': 'scalar', 'oneof': 'videoBackgroundFilterDesktop', 'T': 13};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'custom_asset', 'kind': 'message', 'oneof': 'videoBackgroundFilterDesktop'};
            var8 = function T() {
                var1 = _closure1_slot35;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 5, 'name': 'always_preview_video', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 6, 'name': 'afk_timeout', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 7, 'name': 'stream_notifications_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 8, 'name': 'native_phone_integration_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 9, 'name': 'soundboard_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot60;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 10, 'name': 'disable_stream_previews', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 11, 'name': 'soundmoji_volume', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.FloatValue;
                return var1;
            };
            var1['T'] = var7;
            var6[9] = var1;
            var1 = ['discord_protos.discord_users.v1.VoiceAndVideoSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var6 = undefined;
                var2['oneofKind'] = var6;
                var1['videoBackgroundFilterDesktop'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0043_ip = 100; continue _fun0043 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                var23 = arg1;
                var22 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0044_ip = 13; continue _fun0044 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var23.pos;
                var3 = arg2;
                var21 = var4 + var3;
                var3 = var23.pos;
                var3 = var3 < var21;
                var20 = undefined;
                var18 = 7;
                var17 = true;
                var16 = false;
                var15 = 'throw';
                var14 = 'blur';
                var13 = 'presetOption';
                var12 = 'customAsset';
                var11 = 9;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0044_ip = 312; continue _fun0044 }
case 310:
                var3 = var23.tag;
                var7 = var3.bind(var23)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var20)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=1032, default_jump_address=834, unsigned_min_value=1, unsigned_max_value=11) // Switch table: [763, 724, 650, 834, 575, 500, 425, 350, 294, 219, 144];
case 255:
                var24 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var24.bind(var20)(var3);
                var26 = var3.FloatValue;
                var25 = var26.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.soundmojiVolume;
                var35 = var26;
                var34 = var23;
                var32 = var22;
                var3 = var35[var25](var34, var33, var32, var31, var30);
                var1['soundmojiVolume'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 289:
                var26 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var26.bind(var20)(var3);
                var28 = var3.BoolValue;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.disableStreamPreviews;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['disableStreamPreviews'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 314:
                var28 = _closure1_slot60;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.soundboardSettings;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['soundboardSettings'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 315:
                var26 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var26.bind(var20)(var3);
                var28 = var3.BoolValue;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.nativePhoneIntegrationEnabled;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['nativePhoneIntegrationEnabled'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 225:
                var26 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var26.bind(var20)(var3);
                var28 = var3.BoolValue;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.streamNotificationsEnabled;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['streamNotificationsEnabled'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 316:
                var26 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var26.bind(var20)(var3);
                var28 = var3.UInt32Value;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.afkTimeout;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['afkTimeout'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 317:
                var26 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var26.bind(var20)(var3);
                var28 = var3.BoolValue;
                var27 = var28.internalBinaryRead;
                var3 = var23.uint32;
                var33 = var3.bind(var23)();
                var31 = var1.alwaysPreviewVideo;
                var35 = var28;
                var34 = var23;
                var32 = var22;
                var3 = var35[var27](var34, var33, var32, var31, var30);
                var1['alwaysPreviewVideo'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 318:
                var3 = {};
                var3['oneofKind'] = var12;
                var29 = _closure1_slot35;
                var28 = var29.internalBinaryRead;
                var26 = var23.uint32;
                var33 = var26.bind(var23)();
                var26 = var1.videoBackgroundFilterDesktop;
                var31 = var26.customAsset;
                var35 = var29;
                var34 = var23;
                var32 = var22;
                var26 = var35[var28](var34, var33, var32, var31, var30);
                var3['customAsset'] = var26;
                var1['videoBackgroundFilterDesktop'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 319:
                var3 = {};
                var3['oneofKind'] = var13;
                var26 = var23.uint32;
                var26 = var26.bind(var23)();
                var3['presetOption'] = var26;
                var1['videoBackgroundFilterDesktop'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 320:
                var3 = {};
                var3['oneofKind'] = var14;
                var29 = _closure1_slot36;
                var28 = var29.internalBinaryRead;
                var26 = var23.uint32;
                var33 = var26.bind(var23)();
                var26 = var1.videoBackgroundFilterDesktop;
                var31 = var26.blur;
                var35 = var29;
                var34 = var23;
                var32 = var22;
                var26 = var35[var28](var34, var33, var32, var31, var30);
                var3['blur'] = var26;
                var1['videoBackgroundFilterDesktop'] = var3;
                var25 = var5;
                var24 = var4;
                _fun0044_ip = 313; continue _fun0044;
case 321:
                var26 = var22.readUnknownField;
                if(!(var15 !== var26)) { _fun0044_ip = 322; continue _fun0044 }
case 323:
                var3 = var23.skip;
                var3 = var3.bind(var23)(var7);
                var25 = var26;
                var24 = var3;
                if(!(var16 !== var26)) { _fun0044_ip = 313; continue _fun0044 }
case 324:
                var28 = var26;
                if(!(var17 === var26)) { _fun0044_ip = 325; continue _fun0044 }
case 326:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var18];
                var27 = var29.bind(var20)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 325:
                var34 = var2.typeName;
                var35 = undefined;
                var33 = var1;
                var32 = var8;
                var31 = var7;
                var30 = var3;
                var27 = var35[var28](var34, var33, var32, var31, var30, var29);
                var25 = var26;
                var24 = var3;
case 313:
                var3 = var23.pos;
                var5 = var25;
                var4 = var24;
                if(var3 < var21) { _fun0044_ip = 310; continue _fun0044 }
case 312:
                return var1;
case 322:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var30 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var35 = 'Unknown field ';
                var33 = ' (wire type ';
                var31 = ') for ';
                var34 = var8;
                var32 = var7;
                var34 = var35[var5](var34, var33, var32, var31, var30, var29);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var35 = var2;
                var1 = new var35[var3](var34, var33);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.videoBackgroundFilterDesktop;
                var4 = var3.oneofKind;
                var3 = 'blur';
                if(!(var3 === var4)) { _fun0045_ip = 120; continue _fun0045 }
case 327:
                var7 = _closure1_slot36;
                var6 = var7.internalBinaryWrite;
                var4 = var5.videoBackgroundFilterDesktop;
                var4 = var4.blur;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 120:
                var3 = var5.videoBackgroundFilterDesktop;
                var4 = var3.oneofKind;
                var3 = 'presetOption';
                if(!(var3 === var4)) { _fun0045_ip = 328; continue _fun0045 }
case 145:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.uint32;
                var3 = var5.videoBackgroundFilterDesktop;
                var3 = var3.presetOption;
                var3 = var4.bind(var6)(var3);
case 328:
                var3 = var5.videoBackgroundFilterDesktop;
                var4 = var3.oneofKind;
                var3 = 'customAsset';
                if(!(var3 === var4)) { _fun0045_ip = 270; continue _fun0045 }
case 329:
                var7 = _closure1_slot35;
                var6 = var7.internalBinaryWrite;
                var4 = var5.videoBackgroundFilterDesktop;
                var4 = var4.customAsset;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 270:
                var3 = var5.alwaysPreviewVideo;
                if(!var3) { _fun0045_ip = 330; continue _fun0045 }
case 315:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.alwaysPreviewVideo;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 330:
                var3 = var5.afkTimeout;
                if(!var3) { _fun0045_ip = 331; continue _fun0045 }
case 332:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.afkTimeout;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 331:
                var3 = var5.streamNotificationsEnabled;
                if(!var3) { _fun0045_ip = 333; continue _fun0045 }
case 334:
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var4 = 9;
                var4 = var3[var4];
                var10 = undefined;
                var4 = var11.bind(var10)(var4);
                var7 = var4.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.streamNotificationsEnabled;
                var9 = var1.tag;
                var8 = 7;
                var3 = var3[var8];
                var3 = var11.bind(var10)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var8 = var9.bind(var1)(var8, var3);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 333:
                var3 = var5.nativePhoneIntegrationEnabled;
                if(!var3) { _fun0045_ip = 335; continue _fun0045 }
case 336:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.nativePhoneIntegrationEnabled;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 8;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 335:
                var3 = var5.soundboardSettings;
                if(!var3) { _fun0045_ip = 299; continue _fun0045 }
case 337:
                var7 = _closure1_slot60;
                var6 = var7.internalBinaryWrite;
                var4 = var5.soundboardSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 9;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 299:
                var3 = var5.disableStreamPreviews;
                if(!var3) { _fun0045_ip = 338; continue _fun0045 }
case 339:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.disableStreamPreviews;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 338:
                var3 = var5.soundmojiVolume;
                if(!var3) { _fun0045_ip = 340; continue _fun0045 }
case 341:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.FloatValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.soundmojiVolume;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 340:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0045_ip = 342; continue _fun0045 }
case 343:
                var2 = 1;
                if(!(var2 == var4)) { _fun0045_ip = 344; continue _fun0045 }
case 345:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 344:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 342:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var40 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot37 = var40;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ExplicitContentSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'explicit_content_guilds', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'explicit_content_friend_dm', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'explicit_content_non_friend_dm', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.ExplicitContentSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'explicitContentGuilds': 0, 'explicitContentFriendDm': 0, 'explicitContentNonFriendDm': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0046_ip = 104; continue _fun0046 }
case 305:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 104:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0047_ip = 13; continue _fun0047 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0047_ip = 346; continue _fun0047 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0047_ip = 347; continue _fun0047 }
case 232:
                if(!(var7 !== var27)) { _fun0047_ip = 118; continue _fun0047 }
case 120:
                if(!(var8 !== var27)) { _fun0047_ip = 234; continue _fun0047 }
case 107:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0047_ip = 235; continue _fun0047 }
case 236:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0047_ip = 348; continue _fun0047 }
case 238:
                var23 = var21;
                if(!(var11 === var21)) { _fun0047_ip = 239; continue _fun0047 }
case 240:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 239:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0047_ip = 348; continue _fun0047;
case 235:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 234:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['explicitContentNonFriendDm'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0047_ip = 348; continue _fun0047;
case 118:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['explicitContentFriendDm'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0047_ip = 348; continue _fun0047;
case 347:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['explicitContentGuilds'] = var2;
                var20 = var4;
                var19 = var3;
case 348:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0047_ip = 16; continue _fun0047 }
case 346:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.explicitContentGuilds;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0048_ip = 111; continue _fun0048 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.explicitContentGuilds;
                var2 = var4.bind(var6)(var2);
case 111:
                var2 = var5.explicitContentFriendDm;
                if(!(var3 !== var2)) { _fun0048_ip = 284; continue _fun0048 }
case 349:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.explicitContentFriendDm;
                var2 = var4.bind(var6)(var2);
case 284:
                var2 = var5.explicitContentNonFriendDm;
                if(!(var3 !== var2)) { _fun0048_ip = 329; continue _fun0048 }
case 350:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.explicitContentNonFriendDm;
                var2 = var3.bind(var4)(var2);
case 329:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0048_ip = 351; continue _fun0048 }
case 352:
                var2 = 1;
                if(!(var2 == var4)) { _fun0048_ip = 353; continue _fun0048 }
case 354:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 353:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 351:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var39 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot38 = var39;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GoreContentSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'gore_content_guilds', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'gore_content_friend_dm', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'gore_content_non_friend_dm', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot9;
                var1 = ['discord_protos.discord_users.v1.ExplicitContentRedaction'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.GoreContentSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'goreContentGuilds': 0, 'goreContentFriendDm': 0, 'goreContentNonFriendDm': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0049_ip = 100; continue _fun0049 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0050_ip = 13; continue _fun0050 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0050_ip = 346; continue _fun0050 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0050_ip = 347; continue _fun0050 }
case 232:
                if(!(var7 !== var27)) { _fun0050_ip = 118; continue _fun0050 }
case 120:
                if(!(var8 !== var27)) { _fun0050_ip = 234; continue _fun0050 }
case 107:
                var21 = var17.readUnknownField;
                if(!(var9 !== var21)) { _fun0050_ip = 235; continue _fun0050 }
case 236:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var10 !== var21)) { _fun0050_ip = 348; continue _fun0050 }
case 238:
                var23 = var21;
                if(!(var11 === var21)) { _fun0050_ip = 239; continue _fun0050 }
case 240:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var12];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 239:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0050_ip = 348; continue _fun0050;
case 235:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 234:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['goreContentNonFriendDm'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0050_ip = 348; continue _fun0050;
case 118:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['goreContentFriendDm'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0050_ip = 348; continue _fun0050;
case 347:
                var2 = var18.int32;
                var2 = var2.bind(var18)();
                var1['goreContentGuilds'] = var2;
                var20 = var4;
                var19 = var3;
case 348:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0050_ip = 16; continue _fun0050 }
case 346:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.goreContentGuilds;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0051_ip = 111; continue _fun0051 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.goreContentGuilds;
                var2 = var4.bind(var6)(var2);
case 111:
                var2 = var5.goreContentFriendDm;
                if(!(var3 !== var2)) { _fun0051_ip = 284; continue _fun0051 }
case 349:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.goreContentFriendDm;
                var2 = var4.bind(var6)(var2);
case 284:
                var2 = var5.goreContentNonFriendDm;
                if(!(var3 !== var2)) { _fun0051_ip = 329; continue _fun0051 }
case 350:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.goreContentNonFriendDm;
                var2 = var3.bind(var4)(var2);
case 329:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0051_ip = 351; continue _fun0051 }
case 352:
                var2 = 1;
                if(!(var2 == var4)) { _fun0051_ip = 353; continue _fun0051 }
case 354:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 353:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 351:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var38 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot39 = var38;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function KeywordFilterSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'profanity', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'sexual_content', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'slurs', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.KeywordFilterSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0052_ip = 11; continue _fun0052 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0053_ip = 13; continue _fun0053 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0053_ip = 355; continue _fun0053 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0053_ip = 356; continue _fun0053 }
case 213:
                if(!(var7 !== var28)) { _fun0053_ip = 357; continue _fun0053 }
case 214:
                if(!(var8 !== var28)) { _fun0053_ip = 215; continue _fun0053 }
case 216:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0053_ip = 217; continue _fun0053 }
case 145:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0053_ip = 173; continue _fun0053 }
case 219:
                var24 = var22;
                if(!(var11 === var22)) { _fun0053_ip = 220; continue _fun0053 }
case 114:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 220:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0053_ip = 173; continue _fun0053;
case 217:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 215:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.slurs;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['slurs'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0053_ip = 173; continue _fun0053;
case 357:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.sexualContent;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['sexualContent'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0053_ip = 173; continue _fun0053;
case 356:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.profanity;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['profanity'] = var2;
                var21 = var4;
                var20 = var3;
case 173:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0053_ip = 212; continue _fun0053 }
case 355:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.profanity;
                if(!var3) { _fun0054_ip = 49; continue _fun0054 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.profanity;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.sexualContent;
                if(!var3) { _fun0054_ip = 113; continue _fun0054 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.sexualContent;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var3 = var5.slurs;
                if(!var3) { _fun0054_ip = 358; continue _fun0054 }
case 154:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.slurs;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 358:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0054_ip = 54; continue _fun0054 }
case 359:
                var2 = 1;
                if(!(var2 == var4)) { _fun0054_ip = 360; continue _fun0054 }
case 252:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 360:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var37 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot40 = var37;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function TextAndImagesSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'diversity_surrogate', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(33);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'use_rich_chat_input', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'use_thread_sidebar', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'render_spoilers', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'emoji_picker_collapsed_sections', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'sticker_picker_collapsed_sections', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'view_image_descriptions', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'show_command_suggestions', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'inline_attachment_media', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'inline_embed_media', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'gif_auto_play', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 12, 'name': 'render_embeds', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 13, 'name': 'render_reactions', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[12] = var1;
            var1 = {'no': 14, 'name': 'animate_emoji', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[13] = var1;
            var1 = {'no': 15, 'name': 'animate_stickers', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 16, 'name': 'enable_tts_command', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 17, 'name': 'message_display_compact', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 19, 'name': 'explicit_content_filter', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 20, 'name': 'view_nsfw_guilds', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[18] = var1;
            var1 = {'no': 21, 'name': 'convert_emoticons', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[19] = var1;
            var1 = {'no': 22, 'name': 'expression_suggestions_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 23, 'name': 'view_nsfw_commands', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 24, 'name': 'use_legacy_chat_input', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[22] = var1;
            var1 = {'no': 25, 'name': 'soundboard_picker_collapsed_sections', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[23] = var1;
            var1 = {'no': 26, 'name': 'dm_spam_filter', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[24] = var1;
            var1 = {'no': 27, 'name': 'dm_spam_filter_v2', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot10;
                var1 = ['discord_protos.discord_users.v1.DmSpamFilterV2'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[25] = var1;
            var1 = {'no': 28, 'name': 'include_stickers_in_autocomplete', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[26] = var1;
            var1 = {'no': 29, 'name': 'explicit_content_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot38;
                return var1;
            };
            var1['T'] = var8;
            var6[27] = var1;
            var1 = {'no': 30, 'name': 'keyword_filter_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot40;
                return var1;
            };
            var1['T'] = var8;
            var6[28] = var1;
            var1 = {'no': 31, 'name': 'include_soundmoji_in_autocomplete', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[29] = var1;
            var1 = {'no': 32, 'name': 'gore_content_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot39;
                return var1;
            };
            var1['T'] = var8;
            var6[30] = var1;
            var1 = {'no': 33, 'name': 'default_reaction_emoji', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot73;
                return var1;
            };
            var1['T'] = var8;
            var6[31] = var1;
            var1 = {'no': 34, 'name': 'show_mention_suggestions', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[32] = var1;
            var1 = ['discord_protos.discord_users.v1.TextAndImagesSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['emojiPickerCollapsedSections'] = var2;
                var2 = new Array(0);
                var1['stickerPickerCollapsedSections'] = var2;
                var2 = new Array(0);
                var1['soundboardPickerCollapsedSections'] = var2;
                var2 = 0;
                var1['dmSpamFilterV2'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0055_ip = 255; continue _fun0055 }
case 361:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 255:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0056_ip = 13; continue _fun0056 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 9;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0056_ip = 362; continue _fun0056 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=2561, default_jump_address=2363, unsigned_min_value=1, unsigned_max_value=34) // Switch table: [2291, 2216, 2141, 2066, 2030, 1994, 1919, 1844, 1769, 1694, 1619, 1544, 1469, 1394, 1319, 1244, 1169, 2363, 1094, 1019, 944, 869, 794, 719, 683, 608, 581, 506, 450, 394, 319, 263, 207, 132];
case 17:
                var21 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var21.bind(var17)(var3);
                var23 = var3.BoolValue;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.showMentionSuggestions;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['showMentionSuggestions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 292:
                var25 = _closure1_slot73;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.defaultReactionEmoji;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['defaultReactionEmoji'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 131:
                var25 = _closure1_slot39;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.goreContentSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['goreContentSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 351:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.includeSoundmojiInAutocomplete;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['includeSoundmojiInAutocomplete'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 364:
                var25 = _closure1_slot40;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.keywordFilterSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['keywordFilterSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 365:
                var25 = _closure1_slot38;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.explicitContentSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['explicitContentSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 366:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.includeStickersInAutocomplete;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['includeStickersInAutocomplete'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 367:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['dmSpamFilterV2'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 368:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.UInt32Value;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.dmSpamFilter;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['dmSpamFilter'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 369:
                var24 = var1.soundboardPickerCollapsedSections;
                var23 = var24.push;
                var3 = var20.string;
                var3 = var3.bind(var20)();
                var3 = var23.bind(var24)(var3);
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 370:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.useLegacyChatInput;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['useLegacyChatInput'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 371:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.viewNsfwCommands;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['viewNsfwCommands'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 372:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.expressionSuggestionsEnabled;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['expressionSuggestionsEnabled'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 373:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.convertEmoticons;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['convertEmoticons'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 374:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.viewNsfwGuilds;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['viewNsfwGuilds'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 375:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.UInt32Value;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.explicitContentFilter;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['explicitContentFilter'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 376:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.messageDisplayCompact;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['messageDisplayCompact'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 377:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.enableTtsCommand;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['enableTtsCommand'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 378:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.UInt32Value;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.animateStickers;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['animateStickers'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 379:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.animateEmoji;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['animateEmoji'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 380:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.renderReactions;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['renderReactions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 381:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.renderEmbeds;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['renderEmbeds'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 382:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.gifAutoPlay;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['gifAutoPlay'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 383:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.inlineEmbedMedia;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['inlineEmbedMedia'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 384:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.inlineAttachmentMedia;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['inlineAttachmentMedia'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 385:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.showCommandSuggestions;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['showCommandSuggestions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 386:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.viewImageDescriptions;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['viewImageDescriptions'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 387:
                var24 = var1.stickerPickerCollapsedSections;
                var23 = var24.push;
                var3 = var20.string;
                var3 = var3.bind(var20)();
                var3 = var23.bind(var24)(var3);
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 388:
                var24 = var1.emojiPickerCollapsedSections;
                var23 = var24.push;
                var3 = var20.string;
                var3 = var3.bind(var20)();
                var3 = var23.bind(var24)(var3);
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 389:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.renderSpoilers;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['renderSpoilers'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 390:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.useThreadSidebar;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['useThreadSidebar'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 391:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.useRichChatInput;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['useRichChatInput'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 392:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.diversitySurrogate;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['diversitySurrogate'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0056_ip = 363; continue _fun0056;
case 393:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0056_ip = 394; continue _fun0056 }
case 93:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0056_ip = 363; continue _fun0056 }
case 395:
                var25 = var23;
                if(!(var14 === var23)) { _fun0056_ip = 396; continue _fun0056 }
case 397:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 396:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 363:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0056_ip = 16; continue _fun0056 }
case 362:
                return var1;
case 394:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.diversitySurrogate;
                if(!var2) { _fun0057_ip = 49; continue _fun0057 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.diversitySurrogate;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 49:
                var2 = var5.useRichChatInput;
                if(!var2) { _fun0057_ip = 113; continue _fun0057 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.useRichChatInput;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 2;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 113:
                var2 = var5.useThreadSidebar;
                if(!var2) { _fun0057_ip = 358; continue _fun0057 }
case 154:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.useThreadSidebar;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 3;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 358:
                var2 = var5.renderSpoilers;
                if(!var2) { _fun0057_ip = 398; continue _fun0057 }
case 399:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.renderSpoilers;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 4;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 398:
                var2 = var5.emojiPickerCollapsedSections;
                var2 = var2.length;
                var8 = 0;
                var6 = var8 < var2;
                var7 = 7;
                var4 = undefined;
                var10 = 5;
                var9 = 0;
                if(!var6) { _fun0057_ip = 192; continue _fun0057 }
case 366:
                var11 = var1.tag;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var12 = var11.bind(var1)(var10, var6);
                var11 = var12.string;
                var6 = var5.emojiPickerCollapsedSections;
                var6 = var6[var9];
                var6 = var11.bind(var12)(var6);
                var9 = var9 + 1;
                var6 = var5.emojiPickerCollapsedSections;
                var6 = var6.length;
                if(var9 < var6) { _fun0057_ip = 366; continue _fun0057 }
case 192:
                var6 = var5.stickerPickerCollapsedSections;
                var6 = var6.length;
                var6 = var8 < var6;
                var10 = 6;
                var9 = 0;
                if(!var6) { _fun0057_ip = 400; continue _fun0057 }
case 401:
                var11 = var1.tag;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var12 = var11.bind(var1)(var10, var6);
                var11 = var12.string;
                var6 = var5.stickerPickerCollapsedSections;
                var6 = var6[var9];
                var6 = var11.bind(var12)(var6);
                var9 = var9 + 1;
                var6 = var5.stickerPickerCollapsedSections;
                var6 = var6.length;
                if(var9 < var6) { _fun0057_ip = 401; continue _fun0057 }
case 400:
                var6 = var5.viewImageDescriptions;
                if(!var6) { _fun0057_ip = 402; continue _fun0057 }
case 300:
                var13 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var13.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.viewImageDescriptions;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var13.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var12 = var12.bind(var1)(var7, var6);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 402:
                var6 = var5.showCommandSuggestions;
                if(!var6) { _fun0057_ip = 403; continue _fun0057 }
case 404:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.showCommandSuggestions;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 8;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 403:
                var6 = var5.inlineAttachmentMedia;
                if(!var6) { _fun0057_ip = 405; continue _fun0057 }
case 406:
                var14 = _closure1_slot0;
                var6 = _closure1_slot1;
                var13 = 9;
                var9 = var6[var13];
                var9 = var14.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.inlineAttachmentMedia;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var14.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var12 = var12.bind(var1)(var13, var6);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 405:
                var6 = var5.inlineEmbedMedia;
                if(!var6) { _fun0057_ip = 407; continue _fun0057 }
case 408:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.inlineEmbedMedia;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 10;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 407:
                var6 = var5.gifAutoPlay;
                if(!var6) { _fun0057_ip = 409; continue _fun0057 }
case 410:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.gifAutoPlay;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 11;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 409:
                var6 = var5.renderEmbeds;
                if(!var6) { _fun0057_ip = 205; continue _fun0057 }
case 411:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.renderEmbeds;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 12;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 205:
                var6 = var5.renderReactions;
                if(!var6) { _fun0057_ip = 412; continue _fun0057 }
case 413:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.renderReactions;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 13;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 412:
                var6 = var5.animateEmoji;
                if(!var6) { _fun0057_ip = 414; continue _fun0057 }
case 415:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.animateEmoji;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 14;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 414:
                var6 = var5.animateStickers;
                if(!var6) { _fun0057_ip = 416; continue _fun0057 }
case 417:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.UInt32Value;
                var10 = var11.internalBinaryWrite;
                var9 = var5.animateStickers;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 15;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 416:
                var6 = var5.enableTtsCommand;
                if(!var6) { _fun0057_ip = 418; continue _fun0057 }
case 419:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.enableTtsCommand;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 16;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 418:
                var6 = var5.messageDisplayCompact;
                if(!var6) { _fun0057_ip = 420; continue _fun0057 }
case 421:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.messageDisplayCompact;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 17;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 420:
                var6 = var5.explicitContentFilter;
                if(!var6) { _fun0057_ip = 422; continue _fun0057 }
case 423:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.UInt32Value;
                var10 = var11.internalBinaryWrite;
                var9 = var5.explicitContentFilter;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 19;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 422:
                var6 = var5.viewNsfwGuilds;
                if(!var6) { _fun0057_ip = 424; continue _fun0057 }
case 425:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.viewNsfwGuilds;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 20;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 424:
                var6 = var5.convertEmoticons;
                if(!var6) { _fun0057_ip = 426; continue _fun0057 }
case 427:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.convertEmoticons;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 21;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 426:
                var6 = var5.expressionSuggestionsEnabled;
                if(!var6) { _fun0057_ip = 428; continue _fun0057 }
case 429:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.expressionSuggestionsEnabled;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 22;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 428:
                var6 = var5.viewNsfwCommands;
                if(!var6) { _fun0057_ip = 430; continue _fun0057 }
case 431:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.viewNsfwCommands;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 23;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 430:
                var6 = var5.useLegacyChatInput;
                if(!var6) { _fun0057_ip = 432; continue _fun0057 }
case 433:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.BoolValue;
                var10 = var11.internalBinaryWrite;
                var9 = var5.useLegacyChatInput;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 24;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 432:
                var6 = var5.soundboardPickerCollapsedSections;
                var6 = var6.length;
                var6 = var8 < var6;
                var10 = 25;
                var9 = 0;
                if(!var6) { _fun0057_ip = 434; continue _fun0057 }
case 435:
                var11 = var1.tag;
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var6 = var6.LengthDelimited;
                var12 = var11.bind(var1)(var10, var6);
                var11 = var12.string;
                var6 = var5.soundboardPickerCollapsedSections;
                var6 = var6[var9];
                var6 = var11.bind(var12)(var6);
                var9 = var9 + 1;
                var6 = var5.soundboardPickerCollapsedSections;
                var6 = var6.length;
                if(var9 < var6) { _fun0057_ip = 435; continue _fun0057 }
case 434:
                var6 = var5.dmSpamFilter;
                if(!var6) { _fun0057_ip = 436; continue _fun0057 }
case 437:
                var12 = _closure1_slot0;
                var6 = _closure1_slot1;
                var9 = 9;
                var9 = var6[var9];
                var9 = var12.bind(var4)(var9);
                var11 = var9.UInt32Value;
                var10 = var11.internalBinaryWrite;
                var9 = var5.dmSpamFilter;
                var13 = var1.tag;
                var6 = var6[var7];
                var6 = var12.bind(var4)(var6);
                var6 = var6.WireType;
                var12 = var6.LengthDelimited;
                var6 = 26;
                var12 = var13.bind(var1)(var6, var12);
                var6 = var12.fork;
                var6 = var6.bind(var12)();
                var9 = var10.bind(var11)(var9, var6, var3);
                var6 = var9.join;
                var6 = var6.bind(var9)();
case 436:
                var6 = var5.dmSpamFilterV2;
                if(!(var8 !== var6)) { _fun0057_ip = 438; continue _fun0057 }
case 439:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var8.bind(var4)(var6);
                var6 = var6.WireType;
                var8 = var6.Varint;
                var6 = 27;
                var9 = var9.bind(var1)(var6, var8);
                var8 = var9.int32;
                var6 = var5.dmSpamFilterV2;
                var6 = var8.bind(var9)(var6);
case 438:
                var6 = var5.includeStickersInAutocomplete;
                if(!var6) { _fun0057_ip = 440; continue _fun0057 }
case 441:
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 9;
                var8 = var6[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.BoolValue;
                var9 = var10.internalBinaryWrite;
                var8 = var5.includeStickersInAutocomplete;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 28;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 440:
                var6 = var5.explicitContentSettings;
                if(!var6) { _fun0057_ip = 442; continue _fun0057 }
case 443:
                var10 = _closure1_slot38;
                var9 = var10.internalBinaryWrite;
                var8 = var5.explicitContentSettings;
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 29;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 442:
                var6 = var5.keywordFilterSettings;
                if(!var6) { _fun0057_ip = 444; continue _fun0057 }
case 445:
                var10 = _closure1_slot40;
                var9 = var10.internalBinaryWrite;
                var8 = var5.keywordFilterSettings;
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 30;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 444:
                var6 = var5.includeSoundmojiInAutocomplete;
                if(!var6) { _fun0057_ip = 446; continue _fun0057 }
case 447:
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 9;
                var8 = var6[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.BoolValue;
                var9 = var10.internalBinaryWrite;
                var8 = var5.includeSoundmojiInAutocomplete;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 31;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 446:
                var6 = var5.goreContentSettings;
                if(!var6) { _fun0057_ip = 448; continue _fun0057 }
case 449:
                var10 = _closure1_slot39;
                var9 = var10.internalBinaryWrite;
                var8 = var5.goreContentSettings;
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 32;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 448:
                var6 = var5.defaultReactionEmoji;
                if(!var6) { _fun0057_ip = 450; continue _fun0057 }
case 451:
                var10 = _closure1_slot73;
                var9 = var10.internalBinaryWrite;
                var8 = var5.defaultReactionEmoji;
                var12 = var1.tag;
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 33;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 450:
                var6 = var5.showMentionSuggestions;
                if(!var6) { _fun0057_ip = 452; continue _fun0057 }
case 453:
                var11 = _closure1_slot0;
                var6 = _closure1_slot1;
                var8 = 9;
                var8 = var6[var8];
                var8 = var11.bind(var4)(var8);
                var10 = var8.BoolValue;
                var9 = var10.internalBinaryWrite;
                var8 = var5.showMentionSuggestions;
                var12 = var1.tag;
                var6 = var6[var7];
                var6 = var11.bind(var4)(var6);
                var6 = var6.WireType;
                var11 = var6.LengthDelimited;
                var6 = 34;
                var11 = var12.bind(var1)(var6, var11);
                var6 = var11.fork;
                var6 = var6.bind(var11)();
                var8 = var9.bind(var10)(var8, var6, var3);
                var6 = var8.join;
                var6 = var6.bind(var8)();
case 452:
                var3 = var3.writeUnknownFields;
                var6 = false;
                if(!(var6 !== var3)) { _fun0057_ip = 454; continue _fun0057 }
case 455:
                var6 = 1;
                if(!(var6 == var3)) { _fun0057_ip = 456; continue _fun0057 }
case 457:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 456:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 454:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var36 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot41 = var36;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function NotificationSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'show_in_app_notifications', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(11);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'notify_friends_on_go_live', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'notification_center_acked_before_id', 'kind': 'scalar', 'T': 6};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'enable_burst_reaction_notifications', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'quiet_mode', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'focus_mode_expires_at_ms', 'kind': 'scalar', 'T': 6};
            var6[5] = var1;
            var1 = {'no': 7, 'name': 'reaction_notifications', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot11;
                var1 = ['discord_protos.discord_users.v1.ReactionNotificationType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 8, 'name': 'game_activity_notifications', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot12;
                var1 = ['discord_protos.discord_users.v1.GameActivityNotificationType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 9, 'name': 'custom_status_push_notifications', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot13;
                var1 = ['discord_protos.discord_users.v1.CustomStatusPushNotificationType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 10, 'name': 'game_activity_exclude_steam_notifications', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 11, 'name': 'enable_voice_activity_notifications', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[10] = var1;
            var1 = ['discord_protos.discord_users.v1.NotificationSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'notificationCenterAckedBeforeId': '0', 'focusModeExpiresAtMs': '0', 'reactionNotifications': 0, 'gameActivityNotifications': 0, 'customStatusPushNotifications': 0};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0058_ip = 100; continue _fun0058 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0059_ip = 13; continue _fun0059 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 9;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0059_ip = 458; continue _fun0059 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=930, default_jump_address=732, unsigned_min_value=1, unsigned_max_value=11) // Switch table: [660, 585, 549, 474, 399, 363, 336, 309, 282, 207, 132];
case 17:
                var21 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var21.bind(var17)(var3);
                var23 = var3.BoolValue;
                var22 = var23.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.enableVoiceActivityNotifications;
                var32 = var23;
                var31 = var20;
                var29 = var19;
                var3 = var32[var22](var31, var30, var29, var28, var27);
                var1['enableVoiceActivityNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 292:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.gameActivityExcludeSteamNotifications;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['gameActivityExcludeSteamNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 460:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['customStatusPushNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 461:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['gameActivityNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 462:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['reactionNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 226:
                var3 = var20.fixed64;
                var23 = var3.bind(var20)();
                var3 = var23.toString;
                var3 = var3.bind(var23)();
                var1['focusModeExpiresAtMs'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 463:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.quietMode;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['quietMode'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 464:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.enableBurstReactionNotifications;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['enableBurstReactionNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 465:
                var3 = var20.fixed64;
                var23 = var3.bind(var20)();
                var3 = var23.toString;
                var3 = var3.bind(var23)();
                var1['notificationCenterAckedBeforeId'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 466:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.notifyFriendsOnGoLive;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['notifyFriendsOnGoLive'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 467:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.showInAppNotifications;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['showInAppNotifications'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0059_ip = 459; continue _fun0059;
case 468:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0059_ip = 469; continue _fun0059 }
case 470:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0059_ip = 459; continue _fun0059 }
case 320:
                var25 = var23;
                if(!(var14 === var23)) { _fun0059_ip = 404; continue _fun0059 }
case 471:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 404:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 459:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0059_ip = 16; continue _fun0059 }
case 458:
                return var1;
case 469:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.showInAppNotifications;
                if(!var3) { _fun0060_ip = 49; continue _fun0060 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.showInAppNotifications;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.notifyFriendsOnGoLive;
                if(!var3) { _fun0060_ip = 113; continue _fun0060 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.notifyFriendsOnGoLive;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var3 = var5.notificationCenterAckedBeforeId;
                var4 = '0';
                if(!(var4 !== var3)) { _fun0060_ip = 121; continue _fun0060 }
case 352:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Bit64;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.fixed64;
                var3 = var5.notificationCenterAckedBeforeId;
                var3 = var6.bind(var7)(var3);
case 121:
                var3 = var5.enableBurstReactionNotifications;
                if(!var3) { _fun0060_ip = 472; continue _fun0060 }
case 103:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 9;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.enableBurstReactionNotifications;
                var10 = var1.tag;
                var3 = 7;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 4;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 472:
                var3 = var5.quietMode;
                if(!var3) { _fun0060_ip = 473; continue _fun0060 }
case 365:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var3 = 9;
                var3 = var12[var3];
                var9 = undefined;
                var3 = var11.bind(var9)(var3);
                var8 = var3.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.quietMode;
                var10 = var1.tag;
                var3 = 7;
                var3 = var12[var3];
                var3 = var11.bind(var9)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 5;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var6 = var7.bind(var8)(var6, var3, var2);
                var3 = var6.join;
                var3 = var3.bind(var6)();
case 473:
                var3 = var5.focusModeExpiresAtMs;
                if(!(var4 !== var3)) { _fun0060_ip = 58; continue _fun0060 }
case 174:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 6;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.focusModeExpiresAtMs;
                var3 = var4.bind(var6)(var3);
case 58:
                var3 = var5.reactionNotifications;
                var4 = 0;
                if(!(var4 !== var3)) { _fun0060_ip = 176; continue _fun0060 }
case 474:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var6 = 7;
                var8 = var3[var6];
                var3 = undefined;
                var3 = var9.bind(var3)(var8);
                var3 = var3.WireType;
                var3 = var3.Varint;
                var7 = var7.bind(var1)(var6, var3);
                var6 = var7.int32;
                var3 = var5.reactionNotifications;
                var3 = var6.bind(var7)(var3);
case 176:
                var3 = var5.gameActivityNotifications;
                if(!(var4 !== var3)) { _fun0060_ip = 402; continue _fun0060 }
case 475:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Varint;
                var3 = 8;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.int32;
                var3 = var5.gameActivityNotifications;
                var3 = var6.bind(var7)(var3);
case 402:
                var3 = var5.customStatusPushNotifications;
                if(!(var4 !== var3)) { _fun0060_ip = 476; continue _fun0060 }
case 477:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 9;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.int32;
                var3 = var5.customStatusPushNotifications;
                var3 = var4.bind(var6)(var3);
case 476:
                var3 = var5.gameActivityExcludeSteamNotifications;
                if(!var3) { _fun0060_ip = 478; continue _fun0060 }
case 479:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.gameActivityExcludeSteamNotifications;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 10;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 478:
                var3 = var5.enableVoiceActivityNotifications;
                if(!var3) { _fun0060_ip = 480; continue _fun0060 }
case 481:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.enableVoiceActivityNotifications;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 11;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 480:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0060_ip = 482; continue _fun0060 }
case 483:
                var2 = 1;
                if(!(var2 == var4)) { _fun0060_ip = 484; continue _fun0060 }
case 485:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 484:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 482:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var35 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot42 = var35;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function PrivacySettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'allow_activity_party_privacy_friends', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(28);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'allow_activity_party_privacy_voice_channel', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'restricted_guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'default_guilds_restricted', 'kind': 'scalar', 'T': 8};
            var6[3] = var1;
            var1 = {'no': 7, 'name': 'allow_accessibility_detection', 'kind': 'scalar', 'T': 8};
            var6[4] = var1;
            var1 = {'no': 8, 'name': 'detect_platform_accounts', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 9, 'name': 'passwordless', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 10, 'name': 'contact_sync_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 11, 'name': 'friend_source_flags', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 12, 'name': 'friend_discovery_flags', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 13, 'name': 'activity_restricted_guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[10] = var1;
            var1 = {'no': 14, 'name': 'default_guilds_activity_restricted', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot14;
                var1 = ['discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefault'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[11] = var1;
            var1 = {'no': 15, 'name': 'activity_joining_restricted_guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[12] = var1;
            var1 = {'no': 16, 'name': 'message_request_restricted_guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[13] = var1;
            var1 = {'no': 17, 'name': 'default_message_request_restricted', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[14] = var1;
            var1 = {'no': 18, 'name': 'drops_opted_out', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[15] = var1;
            var1 = {'no': 19, 'name': 'non_spam_retraining_opt_in', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[16] = var1;
            var1 = {'no': 20, 'name': 'family_center_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[17] = var1;
            var1 = {'no': 21, 'name': 'family_center_enabled_v2', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[18] = var1;
            var1 = {'no': 22, 'name': 'hide_legacy_username', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[19] = var1;
            var1 = {'no': 23, 'name': 'inappropriate_conversation_warnings', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[20] = var1;
            var1 = {'no': 24, 'name': 'recent_games_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[21] = var1;
            var1 = {'no': 25, 'name': 'guilds_leaderboard_opt_out_default', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot16;
                var1 = ['discord_protos.discord_users.v1.GuildsLeaderboardOptOutDefault'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[22] = var1;
            var1 = {'no': 26, 'name': 'allow_game_friend_dms_in_discord', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[23] = var1;
            var1 = {'no': 27, 'name': 'default_guilds_restricted_v2', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[24] = var1;
            var1 = {'no': 28, 'name': 'slayer_sdk_receive_dms_in_game', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot17;
                var1 = ['discord_protos.discord_users.v1.SlayerSDKReceiveInGameDMs'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[25] = var1;
            var1 = {'no': 29, 'name': 'default_guilds_activity_restricted_v2', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot15;
                var1 = ['discord_protos.discord_users.v1.GuildActivityStatusRestrictionDefaultV2'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[26] = var1;
            var1 = {'no': 30, 'name': 'quests_3p_data_opted_out', 'kind': 'message', 'jsonName': 'quests3pDataOptedOut'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[27] = var1;
            var1 = ['discord_protos.discord_users.v1.PrivacySettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'restrictedGuildIds': null, 'defaultGuildsRestricted': false, 'allowAccessibilityDetection': false, 'activityRestrictedGuildIds': null, 'defaultGuildsActivityRestricted': 0};
                var2 = new Array(0);
                var1['restrictedGuildIds'] = var2;
                var11 = false;
                var2 = new Array(0);
                var1['activityRestrictedGuildIds'] = var2;
                var2 = 0;
                var3 = new Array(0);
                var1['activityJoiningRestrictedGuildIds'] = var3;
                var3 = new Array(0);
                var1['messageRequestRestrictedGuildIds'] = var3;
                var1['guildsLeaderboardOptOutDefault'] = var2;
                var1['slayerSdkReceiveDmsInGame'] = var2;
                var1['defaultGuildsActivityRestrictedV2'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0061_ip = 486; continue _fun0061 }
case 487:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 486:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
                var24 = arg1;
                var23 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0062_ip = 13; continue _fun0062 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var24.pos;
                var3 = arg2;
                var22 = var4 + var3;
                var3 = var24.pos;
                var3 = var3 < var22;
                var21 = undefined;
                var19 = 7;
                var18 = true;
                var17 = false;
                var16 = 'throw';
                var15 = 9;
                var14 = 2;
                var13 = 0;
                var12 = 1;
                var11 = undefined;
                var10 = undefined;
                var9 = undefined;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0062_ip = 488; continue _fun0062 }
case 489:
                var3 = var24.tag;
                var7 = var3.bind(var24)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var21)(var7, var14);
                var8 = var3[var13];
                var7 = var3[var12];
                SwitchImm(value_reg=7, jump_table_address=3017, default_jump_address=2780, unsigned_min_value=1, unsigned_max_value=30) // Switch table: [2693, 2606, 2396, 2357, 2780, 2780, 2318, 2231, 2144, 2057, 1970, 1883, 1673, 1634, 1424, 1214, 1127, 1040, 953, 866, 779, 692, 605, 518, 479, 392, 305, 266, 227, 140];
case 490:
                var25 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var25.bind(var21)(var3);
                var27 = var3.BoolValue;
                var26 = var27.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.quests3PDataOptedOut;
                var40 = var27;
                var39 = var24;
                var37 = var23;
                var3 = var40[var26](var39, var38, var37, var36, var35);
                var1['quests3PDataOptedOut'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 50:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['defaultGuildsActivityRestrictedV2'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 492:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['slayerSdkReceiveDmsInGame'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 493:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.defaultGuildsRestrictedV2;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['defaultGuildsRestrictedV2'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 494:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.allowGameFriendDmsInDiscord;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['allowGameFriendDmsInDiscord'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 495:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['guildsLeaderboardOptOutDefault'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 496:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.recentGamesEnabled;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['recentGamesEnabled'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 497:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.inappropriateConversationWarnings;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['inappropriateConversationWarnings'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 28:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.hideLegacyUsername;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['hideLegacyUsername'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 498:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.familyCenterEnabledV2;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['familyCenterEnabledV2'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 499:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.familyCenterEnabled;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['familyCenterEnabled'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 500:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.nonSpamRetrainingOptIn;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['nonSpamRetrainingOptIn'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 66:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.dropsOptedOut;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['dropsOptedOut'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 501:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.defaultMessageRequestRestricted;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['defaultMessageRequestRestricted'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 502:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var31.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0062_ip = 503; continue _fun0062 }
case 504:
                var32 = var1.messageRequestRestrictedGuildIds;
                var31 = var32.push;
                var3 = var24.fixed64;
                var33 = var3.bind(var24)();
                var3 = var33.toString;
                var3 = var3.bind(var33)();
                var3 = var31.bind(var32)(var3);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 503:
                var3 = var24.int32;
                var31 = var3.bind(var24)();
                var3 = var24.pos;
                var31 = var31 + var3;
                var3 = var24.pos;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var31;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var31)) { _fun0062_ip = 491; continue _fun0062 }
case 505:
                var33 = var1.messageRequestRestrictedGuildIds;
                var32 = var33.push;
                var3 = var24.fixed64;
                var34 = var3.bind(var24)();
                var3 = var34.toString;
                var3 = var3.bind(var34)();
                var3 = var32.bind(var33)(var3);
                var3 = var24.pos;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var26 = var5;
                var25 = var4;
                var27 = var31;
                if(var3 < var27) { _fun0062_ip = 505; continue _fun0062 }
case 41:
                _fun0062_ip = 491; continue _fun0062;
case 506:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var31.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0062_ip = 507; continue _fun0062 }
case 508:
                var32 = var1.activityJoiningRestrictedGuildIds;
                var31 = var32.push;
                var3 = var24.fixed64;
                var33 = var3.bind(var24)();
                var3 = var33.toString;
                var3 = var3.bind(var33)();
                var3 = var31.bind(var32)(var3);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 507:
                var3 = var24.int32;
                var31 = var3.bind(var24)();
                var3 = var24.pos;
                var31 = var31 + var3;
                var3 = var24.pos;
                var30 = var11;
                var29 = var10;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                var28 = var31;
                if(!(var3 < var28)) { _fun0062_ip = 491; continue _fun0062 }
case 509:
                var33 = var1.activityJoiningRestrictedGuildIds;
                var32 = var33.push;
                var3 = var24.fixed64;
                var34 = var3.bind(var24)();
                var3 = var34.toString;
                var3 = var3.bind(var34)();
                var3 = var32.bind(var33)(var3);
                var3 = var24.pos;
                var30 = var11;
                var29 = var10;
                var28 = var31;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if(var3 < var31) { _fun0062_ip = 509; continue _fun0062 }
case 510:
                _fun0062_ip = 491; continue _fun0062;
case 511:
                var3 = var24.int32;
                var3 = var3.bind(var24)();
                var1['defaultGuildsActivityRestricted'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 512:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var31.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0062_ip = 513; continue _fun0062 }
case 514:
                var32 = var1.activityRestrictedGuildIds;
                var31 = var32.push;
                var3 = var24.fixed64;
                var33 = var3.bind(var24)();
                var3 = var33.toString;
                var3 = var3.bind(var33)();
                var3 = var31.bind(var32)(var3);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 513:
                var3 = var24.int32;
                var31 = var3.bind(var24)();
                var3 = var24.pos;
                var31 = var31 + var3;
                var3 = var24.pos;
                var30 = var11;
                var29 = var31;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if(!(var3 < var31)) { _fun0062_ip = 491; continue _fun0062 }
case 515:
                var33 = var1.activityRestrictedGuildIds;
                var32 = var33.push;
                var3 = var24.fixed64;
                var34 = var3.bind(var24)();
                var3 = var34.toString;
                var3 = var3.bind(var34)();
                var3 = var32.bind(var33)(var3);
                var3 = var24.pos;
                var30 = var11;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                var29 = var31;
                if(var3 < var29) { _fun0062_ip = 515; continue _fun0062 }
case 516:
                _fun0062_ip = 491; continue _fun0062;
case 517:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.UInt32Value;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.friendDiscoveryFlags;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['friendDiscoveryFlags'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 518:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.UInt32Value;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.friendSourceFlags;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['friendSourceFlags'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 519:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.contactSyncEnabled;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['contactSyncEnabled'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 520:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.passwordless;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['passwordless'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 521:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.detectPlatformAccounts;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['detectPlatformAccounts'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 522:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['allowAccessibilityDetection'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 523:
                var3 = var24.bool;
                var3 = var3.bind(var24)();
                var1['defaultGuildsRestricted'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 524:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var19];
                var3 = var31.bind(var21)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                if(!(var7 !== var3)) { _fun0062_ip = 525; continue _fun0062 }
case 526:
                var32 = var1.restrictedGuildIds;
                var31 = var32.push;
                var3 = var24.fixed64;
                var33 = var3.bind(var24)();
                var3 = var33.toString;
                var3 = var3.bind(var33)();
                var3 = var31.bind(var32)(var3);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 525:
                var3 = var24.int32;
                var31 = var3.bind(var24)();
                var3 = var24.pos;
                var31 = var31 + var3;
                var3 = var24.pos;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                var30 = var31;
                if(!(var3 < var30)) { _fun0062_ip = 491; continue _fun0062 }
case 435:
                var33 = var1.restrictedGuildIds;
                var32 = var33.push;
                var3 = var24.fixed64;
                var34 = var3.bind(var24)();
                var3 = var34.toString;
                var3 = var3.bind(var34)();
                var3 = var32.bind(var33)(var3);
                var3 = var24.pos;
                var30 = var31;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                if(var3 < var31) { _fun0062_ip = 435; continue _fun0062 }
case 527:
                _fun0062_ip = 491; continue _fun0062;
case 528:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.allowActivityPartyPrivacyVoiceChannel;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['allowActivityPartyPrivacyVoiceChannel'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 529:
                var31 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var15];
                var3 = var31.bind(var21)(var3);
                var33 = var3.BoolValue;
                var32 = var33.internalBinaryRead;
                var3 = var24.uint32;
                var38 = var3.bind(var24)();
                var36 = var1.allowActivityPartyPrivacyFriends;
                var40 = var33;
                var39 = var24;
                var37 = var23;
                var3 = var40[var32](var39, var38, var37, var36, var35);
                var1['allowActivityPartyPrivacyFriends'] = var3;
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var5;
                var25 = var4;
                _fun0062_ip = 491; continue _fun0062;
case 530:
                var31 = var23.readUnknownField;
                if(!(var16 !== var31)) { _fun0062_ip = 531; continue _fun0062 }
case 532:
                var3 = var24.skip;
                var3 = var3.bind(var24)(var7);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var31;
                var25 = var3;
                if(!(var17 !== var31)) { _fun0062_ip = 491; continue _fun0062 }
case 533:
                var33 = var31;
                if(!(var18 === var31)) { _fun0062_ip = 534; continue _fun0062 }
case 535:
                var34 = _closure1_slot0;
                var32 = _closure1_slot1;
                var32 = var32[var19];
                var32 = var34.bind(var21)(var32);
                var32 = var32.UnknownFieldHandler;
                var33 = var32.onRead;
case 534:
                var39 = var2.typeName;
                var40 = undefined;
                var38 = var1;
                var37 = var8;
                var36 = var7;
                var35 = var3;
                var32 = var40[var33](var39, var38, var37, var36, var35, var34);
                var30 = var11;
                var29 = var10;
                var28 = var9;
                var27 = var6;
                var26 = var31;
                var25 = var3;
case 491:
                var3 = var24.pos;
                var11 = var30;
                var10 = var29;
                var9 = var28;
                var6 = var27;
                var5 = var26;
                var4 = var25;
                if(var3 < var22) { _fun0062_ip = 489; continue _fun0062 }
case 488:
                return var1;
case 531:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var35 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var40 = 'Unknown field ';
                var38 = ' (wire type ';
                var36 = ') for ';
                var39 = var8;
                var37 = var7;
                var39 = var40[var5](var39, var38, var37, var36, var35, var34);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var40 = var2;
                var1 = new var40[var3](var39, var38);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.allowActivityPartyPrivacyFriends;
                if(!var2) { _fun0063_ip = 49; continue _fun0063 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.allowActivityPartyPrivacyFriends;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 1;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 49:
                var2 = var5.allowActivityPartyPrivacyVoiceChannel;
                if(!var2) { _fun0063_ip = 113; continue _fun0063 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 9;
                var2 = var11[var2];
                var8 = undefined;
                var2 = var10.bind(var8)(var2);
                var7 = var2.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.allowActivityPartyPrivacyVoiceChannel;
                var9 = var1.tag;
                var2 = 7;
                var2 = var11[var2];
                var2 = var10.bind(var8)(var2);
                var2 = var2.WireType;
                var8 = var2.LengthDelimited;
                var2 = 2;
                var8 = var9.bind(var1)(var2, var8);
                var2 = var8.fork;
                var2 = var2.bind(var8)();
                var4 = var6.bind(var7)(var4, var2, var3);
                var2 = var4.join;
                var2 = var2.bind(var4)();
case 113:
                var2 = var5.restrictedGuildIds;
                var2 = var2.length;
                if(!var2) { _fun0063_ip = 258; continue _fun0063 }
case 268:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.LengthDelimited;
                var2 = 3;
                var4 = var6.bind(var1)(var2, var4);
                var2 = var4.fork;
                var2 = var2.bind(var4)();
                var2 = var5.restrictedGuildIds;
                var2 = var2.length;
                var4 = 0;
                var2 = var4 < var2;
                if(!var2) { _fun0063_ip = 536; continue _fun0063 }
case 537:
                var6 = var1.fixed64;
                var2 = var5.restrictedGuildIds;
                var2 = var2[var4];
                var2 = var6.bind(var1)(var2);
                var4 = var4 + 1;
                var2 = var5.restrictedGuildIds;
                var2 = var2.length;
                if(var4 < var2) { _fun0063_ip = 537; continue _fun0063 }
case 536:
                var2 = var1.join;
                var2 = var2.bind(var1)();
case 258:
                var4 = var5.defaultGuildsRestricted;
                var2 = false;
                if(!(var2 !== var4)) { _fun0063_ip = 231; continue _fun0063 }
case 463:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 4;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.bool;
                var4 = var5.defaultGuildsRestricted;
                var4 = var6.bind(var7)(var4);
case 231:
                var4 = var5.allowAccessibilityDetection;
                if(!(var2 !== var4)) { _fun0063_ip = 59; continue _fun0063 }
case 538:
                var7 = var1.tag;
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = 7;
                var8 = var4[var6];
                var4 = undefined;
                var4 = var9.bind(var4)(var8);
                var4 = var4.WireType;
                var4 = var4.Varint;
                var7 = var7.bind(var1)(var6, var4);
                var6 = var7.bool;
                var4 = var5.allowAccessibilityDetection;
                var4 = var6.bind(var7)(var4);
case 59:
                var4 = var5.detectPlatformAccounts;
                if(!var4) { _fun0063_ip = 539; continue _fun0063 }
case 540:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.detectPlatformAccounts;
                var10 = var1.tag;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 8;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 539:
                var4 = var5.passwordless;
                if(!var4) { _fun0063_ip = 541; continue _fun0063 }
case 542:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var10 = 9;
                var4 = var13[var10];
                var11 = undefined;
                var4 = var12.bind(var11)(var4);
                var8 = var4.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.passwordless;
                var9 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var11)(var4);
                var4 = var4.WireType;
                var4 = var4.LengthDelimited;
                var9 = var9.bind(var1)(var10, var4);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 541:
                var4 = var5.contactSyncEnabled;
                if(!var4) { _fun0063_ip = 543; continue _fun0063 }
case 544:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.contactSyncEnabled;
                var10 = var1.tag;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 10;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 543:
                var4 = var5.friendSourceFlags;
                if(!var4) { _fun0063_ip = 405; continue _fun0063 }
case 545:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.UInt32Value;
                var7 = var8.internalBinaryWrite;
                var6 = var5.friendSourceFlags;
                var10 = var1.tag;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 11;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 405:
                var4 = var5.friendDiscoveryFlags;
                if(!var4) { _fun0063_ip = 485; continue _fun0063 }
case 408:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.UInt32Value;
                var7 = var8.internalBinaryWrite;
                var6 = var5.friendDiscoveryFlags;
                var10 = var1.tag;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 12;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 485:
                var4 = var5.activityRestrictedGuildIds;
                var4 = var4.length;
                if(!var4) { _fun0063_ip = 546; continue _fun0063 }
case 340:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.LengthDelimited;
                var4 = 13;
                var6 = var7.bind(var1)(var4, var6);
                var4 = var6.fork;
                var4 = var4.bind(var6)();
                var4 = var5.activityRestrictedGuildIds;
                var4 = var4.length;
                var6 = 0;
                var4 = var6 < var4;
                if(!var4) { _fun0063_ip = 547; continue _fun0063 }
case 548:
                var7 = var1.fixed64;
                var4 = var5.activityRestrictedGuildIds;
                var4 = var4[var6];
                var4 = var7.bind(var1)(var4);
                var6 = var6 + 1;
                var4 = var5.activityRestrictedGuildIds;
                var4 = var4.length;
                if(var6 < var4) { _fun0063_ip = 548; continue _fun0063 }
case 547:
                var4 = var1.join;
                var4 = var4.bind(var1)();
case 546:
                var4 = var5.defaultGuildsActivityRestricted;
                var6 = 0;
                if(!(var6 !== var4)) { _fun0063_ip = 549; continue _fun0063 }
case 550:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 14;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.defaultGuildsActivityRestricted;
                var4 = var7.bind(var8)(var4);
case 549:
                var4 = var5.activityJoiningRestrictedGuildIds;
                var4 = var4.length;
                if(!var4) { _fun0063_ip = 551; continue _fun0063 }
case 552:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.LengthDelimited;
                var4 = 15;
                var7 = var8.bind(var1)(var4, var7);
                var4 = var7.fork;
                var4 = var4.bind(var7)();
                var4 = var5.activityJoiningRestrictedGuildIds;
                var4 = var4.length;
                var4 = var6 < var4;
                var7 = 0;
                if(!var4) { _fun0063_ip = 553; continue _fun0063 }
case 554:
                var8 = var1.fixed64;
                var4 = var5.activityJoiningRestrictedGuildIds;
                var4 = var4[var7];
                var4 = var8.bind(var1)(var4);
                var7 = var7 + 1;
                var4 = var5.activityJoiningRestrictedGuildIds;
                var4 = var4.length;
                if(var7 < var4) { _fun0063_ip = 554; continue _fun0063 }
case 553:
                var4 = var1.join;
                var4 = var4.bind(var1)();
case 551:
                var4 = var5.messageRequestRestrictedGuildIds;
                var4 = var4.length;
                if(!var4) { _fun0063_ip = 555; continue _fun0063 }
case 556:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.LengthDelimited;
                var4 = 16;
                var7 = var8.bind(var1)(var4, var7);
                var4 = var7.fork;
                var4 = var4.bind(var7)();
                var4 = var5.messageRequestRestrictedGuildIds;
                var4 = var4.length;
                var4 = var6 < var4;
                var7 = 0;
                if(!var4) { _fun0063_ip = 557; continue _fun0063 }
case 558:
                var8 = var1.fixed64;
                var4 = var5.messageRequestRestrictedGuildIds;
                var4 = var4[var7];
                var4 = var8.bind(var1)(var4);
                var7 = var7 + 1;
                var4 = var5.messageRequestRestrictedGuildIds;
                var4 = var4.length;
                if(var7 < var4) { _fun0063_ip = 558; continue _fun0063 }
case 557:
                var4 = var1.join;
                var4 = var4.bind(var1)();
case 555:
                var4 = var5.defaultMessageRequestRestricted;
                if(!var4) { _fun0063_ip = 559; continue _fun0063 }
case 560:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.defaultMessageRequestRestricted;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 17;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 559:
                var4 = var5.dropsOptedOut;
                if(!var4) { _fun0063_ip = 561; continue _fun0063 }
case 562:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.dropsOptedOut;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 18;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 561:
                var4 = var5.nonSpamRetrainingOptIn;
                if(!var4) { _fun0063_ip = 563; continue _fun0063 }
case 516:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.nonSpamRetrainingOptIn;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 19;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 563:
                var4 = var5.familyCenterEnabled;
                if(!var4) { _fun0063_ip = 564; continue _fun0063 }
case 387:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.familyCenterEnabled;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 20;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 564:
                var4 = var5.familyCenterEnabledV2;
                if(!var4) { _fun0063_ip = 565; continue _fun0063 }
case 566:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.familyCenterEnabledV2;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 21;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 565:
                var4 = var5.hideLegacyUsername;
                if(!var4) { _fun0063_ip = 567; continue _fun0063 }
case 568:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.hideLegacyUsername;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 22;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 567:
                var4 = var5.inappropriateConversationWarnings;
                if(!var4) { _fun0063_ip = 569; continue _fun0063 }
case 570:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.inappropriateConversationWarnings;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 23;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 569:
                var4 = var5.recentGamesEnabled;
                if(!var4) { _fun0063_ip = 571; continue _fun0063 }
case 572:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.recentGamesEnabled;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 24;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 571:
                var4 = var5.guildsLeaderboardOptOutDefault;
                if(!(var6 !== var4)) { _fun0063_ip = 573; continue _fun0063 }
case 574:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 25;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.guildsLeaderboardOptOutDefault;
                var4 = var7.bind(var8)(var4);
case 573:
                var4 = var5.allowGameFriendDmsInDiscord;
                if(!var4) { _fun0063_ip = 575; continue _fun0063 }
case 576:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.allowGameFriendDmsInDiscord;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 26;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 575:
                var4 = var5.defaultGuildsRestrictedV2;
                if(!var4) { _fun0063_ip = 577; continue _fun0063 }
case 578:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.defaultGuildsRestrictedV2;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 27;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 577:
                var4 = var5.slayerSdkReceiveDmsInGame;
                if(!(var6 !== var4)) { _fun0063_ip = 579; continue _fun0063 }
case 580:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 28;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.slayerSdkReceiveDmsInGame;
                var4 = var7.bind(var8)(var4);
case 579:
                var4 = var5.defaultGuildsActivityRestrictedV2;
                if(!(var6 !== var4)) { _fun0063_ip = 581; continue _fun0063 }
case 582:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 29;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.int32;
                var4 = var5.defaultGuildsActivityRestrictedV2;
                var4 = var6.bind(var7)(var4);
case 581:
                var4 = var5.quests3PDataOptedOut;
                if(!var4) { _fun0063_ip = 583; continue _fun0063 }
case 584:
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var4 = 9;
                var4 = var12[var4];
                var9 = undefined;
                var4 = var11.bind(var9)(var4);
                var8 = var4.BoolValue;
                var7 = var8.internalBinaryWrite;
                var6 = var5.quests3PDataOptedOut;
                var10 = var1.tag;
                var4 = 7;
                var4 = var12[var4];
                var4 = var11.bind(var9)(var4);
                var4 = var4.WireType;
                var9 = var4.LengthDelimited;
                var4 = 30;
                var9 = var10.bind(var1)(var4, var9);
                var4 = var9.fork;
                var4 = var4.bind(var9)();
                var6 = var7.bind(var8)(var6, var4, var3);
                var4 = var6.join;
                var4 = var4.bind(var6)();
case 583:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0063_ip = 585; continue _fun0063 }
case 586:
                var2 = 1;
                if(!(var2 == var4)) { _fun0063_ip = 587; continue _fun0063 }
case 588:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 587:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 585:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var34 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot43 = var34;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DebugSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'rtc_panel_show_voice_states', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.DebugSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0064_ip = 11; continue _fun0064 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0065_ip = 13; continue _fun0065 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0065_ip = 249; continue _fun0065 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0065_ip = 250; continue _fun0065 }
case 232:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0065_ip = 251; continue _fun0065 }
case 214:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0065_ip = 252; continue _fun0065 }
case 147:
                var23 = var21;
                if(!(var10 === var21)) { _fun0065_ip = 243; continue _fun0065 }
case 165:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 243:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0065_ip = 252; continue _fun0065;
case 251:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 250:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.BoolValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.rtcPanelShowVoiceStates;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['rtcPanelShowVoiceStates'] = var2;
                var20 = var4;
                var19 = var3;
case 252:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0065_ip = 16; continue _fun0065 }
case 249:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.rtcPanelShowVoiceStates;
                if(!var3) { _fun0066_ip = 49; continue _fun0066 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.rtcPanelShowVoiceStates;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0066_ip = 253; continue _fun0066 }
case 254:
                var2 = 1;
                if(!(var2 == var4)) { _fun0066_ip = 182; continue _fun0066 }
case 255:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 253:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var33 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot44 = var33;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GameLibrarySettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'install_shortcut_desktop', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'install_shortcut_start_menu', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'disable_games_tab', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.GameLibrarySettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0067_ip = 11; continue _fun0067 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0068_ip = 13; continue _fun0068 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0068_ip = 355; continue _fun0068 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0068_ip = 356; continue _fun0068 }
case 213:
                if(!(var7 !== var28)) { _fun0068_ip = 357; continue _fun0068 }
case 214:
                if(!(var8 !== var28)) { _fun0068_ip = 215; continue _fun0068 }
case 216:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0068_ip = 217; continue _fun0068 }
case 145:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0068_ip = 173; continue _fun0068 }
case 219:
                var24 = var22;
                if(!(var11 === var22)) { _fun0068_ip = 220; continue _fun0068 }
case 114:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 220:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0068_ip = 173; continue _fun0068;
case 217:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 215:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.disableGamesTab;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['disableGamesTab'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0068_ip = 173; continue _fun0068;
case 357:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.installShortcutStartMenu;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['installShortcutStartMenu'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0068_ip = 173; continue _fun0068;
case 356:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.installShortcutDesktop;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['installShortcutDesktop'] = var2;
                var21 = var4;
                var20 = var3;
case 173:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0068_ip = 212; continue _fun0068 }
case 355:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.installShortcutDesktop;
                if(!var3) { _fun0069_ip = 49; continue _fun0069 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.installShortcutDesktop;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.installShortcutStartMenu;
                if(!var3) { _fun0069_ip = 113; continue _fun0069 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.installShortcutStartMenu;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var3 = var5.disableGamesTab;
                if(!var3) { _fun0069_ip = 358; continue _fun0069 }
case 154:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.disableGamesTab;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 358:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0069_ip = 54; continue _fun0069 }
case 359:
                var2 = 1;
                if(!(var2 == var4)) { _fun0069_ip = 360; continue _fun0069 }
case 252:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 360:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var32 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot45 = var32;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function StatusSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'status', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(5);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'custom_status', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot47;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'show_current_game', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'status_expires_at_ms', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'status_created_at_ms', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[4] = var1;
            var1 = ['discord_protos.discord_users.v1.StatusSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['statusExpiresAtMs'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0070_ip = 232; continue _fun0070 }
case 290:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 232:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0071_ip = 13; continue _fun0071 }
case 14:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 13:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 9;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0071_ip = 542; continue _fun0071 }
case 349:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var7);
                var30 = var2[var5];
                var29 = var2[var6];
                if(!(var6 !== var30)) { _fun0071_ip = 279; continue _fun0071 }
case 589:
                if(!(var7 !== var30)) { _fun0071_ip = 590; continue _fun0071 }
case 254:
                if(!(var8 !== var30)) { _fun0071_ip = 139; continue _fun0071 }
case 255:
                if(!(var9 !== var30)) { _fun0071_ip = 591; continue _fun0071 }
case 592:
                if(!(var10 !== var30)) { _fun0071_ip = 593; continue _fun0071 }
case 594:
                var24 = var20.readUnknownField;
                if(!(var11 !== var24)) { _fun0071_ip = 131; continue _fun0071 }
case 125:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var29);
                var23 = var24;
                var22 = var2;
                if(!(var12 !== var24)) { _fun0071_ip = 595; continue _fun0071 }
case 596:
                var26 = var24;
                if(!(var13 === var24)) { _fun0071_ip = 308; continue _fun0071 }
case 253:
                var27 = _closure1_slot0;
                var25 = _closure1_slot1;
                var25 = var25[var14];
                var25 = var27.bind(var17)(var25);
                var25 = var25.UnknownFieldHandler;
                var26 = var25.onRead;
case 308:
                var35 = var19.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var29;
                var31 = var2;
                var25 = var36[var26](var35, var34, var33, var32, var31, var30);
                var23 = var24;
                var22 = var2;
                _fun0071_ip = 595; continue _fun0071;
case 131:
                var2 = global;
                var24 = var2.globalThis;
                var25 = var24.Error;
                var31 = var19.typeName;
                var2 = var2.HermesInternal;
                var27 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var29;
                var35 = var36[var27](var35, var34, var33, var32, var31, var30);
                var24 = var25.prototype;
                var24 = Object.create(var24, {constructor: {value: var25}});
                var36 = var24;
                var2 = new var36[var25](var35, var34);
                var2 = var2 instanceof Object ? var2 : var24;
                throw var2;
case 593:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var24.bind(var17)(var2);
                var26 = var2.UInt64Value;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.statusCreatedAtMs;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['statusCreatedAtMs'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0071_ip = 595; continue _fun0071;
case 591:
                var2 = var21.fixed64;
                var24 = var2.bind(var21)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var1['statusExpiresAtMs'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0071_ip = 595; continue _fun0071;
case 139:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var24.bind(var17)(var2);
                var26 = var2.BoolValue;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.showCurrentGame;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['showCurrentGame'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0071_ip = 595; continue _fun0071;
case 590:
                var26 = _closure1_slot47;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.customStatus;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['customStatus'] = var2;
                var23 = var4;
                var22 = var3;
                _fun0071_ip = 595; continue _fun0071;
case 279:
                var24 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var24.bind(var17)(var2);
                var26 = var2.StringValue;
                var25 = var26.internalBinaryRead;
                var2 = var21.uint32;
                var34 = var2.bind(var21)();
                var32 = var1.status;
                var36 = var26;
                var35 = var21;
                var33 = var20;
                var2 = var36[var25](var35, var34, var33, var32, var31);
                var1['status'] = var2;
                var23 = var4;
                var22 = var3;
case 595:
                var2 = var21.pos;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0071_ip = 349; continue _fun0071 }
case 542:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.status;
                if(!var3) { _fun0072_ip = 221; continue _fun0072 }
case 222:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.status;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 221:
                var3 = var5.customStatus;
                if(!var3) { _fun0072_ip = 152; continue _fun0072 }
case 17:
                var7 = _closure1_slot47;
                var6 = var7.internalBinaryWrite;
                var4 = var5.customStatus;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 152:
                var3 = var5.showCurrentGame;
                if(!var3) { _fun0072_ip = 270; continue _fun0072 }
case 130:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.showCurrentGame;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 270:
                var4 = var5.statusExpiresAtMs;
                var3 = '0';
                if(!(var3 !== var4)) { _fun0072_ip = 225; continue _fun0072 }
case 358:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 4;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.statusExpiresAtMs;
                var3 = var4.bind(var6)(var3);
case 225:
                var3 = var5.statusCreatedAtMs;
                if(!var3) { _fun0072_ip = 597; continue _fun0072 }
case 598:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.statusCreatedAtMs;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 5;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 597:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0072_ip = 599; continue _fun0072 }
case 600:
                var2 = 1;
                if(!(var2 == var4)) { _fun0072_ip = 601; continue _fun0072 }
case 602:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 601:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 599:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var31 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot46 = var31;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CustomStatus$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(6);
            var1 = {'no': 1, 'name': 'text', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'emoji_id', 'kind': 'scalar', 'T': 6};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'emoji_name', 'kind': 'scalar', 'T': 9};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'expires_at_ms', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = {'no': 5, 'name': 'created_at_ms', 'kind': 'scalar', 'T': 6};
            var6[4] = var1;
            var1 = {'no': 6, 'name': 'label', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var7;
            var6[5] = var1;
            var1 = ['discord_protos.discord_users.v1.CustomStatus'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'text': '', 'emojiId': '0', 'emojiName': '', 'expiresAtMs': '0', 'createdAtMs': '0'};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0073_ip = 100; continue _fun0073 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0074_ip = 13; continue _fun0074 }
case 14:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 13:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 9;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 6;
                var10 = 5;
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0074_ip = 603; continue _fun0074 }
case 310:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var7);
                var31 = var2[var5];
                var30 = var2[var6];
                if(!(var6 !== var31)) { _fun0074_ip = 465; continue _fun0074 }
case 604:
                if(!(var7 !== var31)) { _fun0074_ip = 605; continue _fun0074 }
case 490:
                if(!(var8 !== var31)) { _fun0074_ip = 606; continue _fun0074 }
case 487:
                if(!(var9 !== var31)) { _fun0074_ip = 607; continue _fun0074 }
case 608:
                if(!(var10 !== var31)) { _fun0074_ip = 609; continue _fun0074 }
case 273:
                if(!(var11 !== var31)) { _fun0074_ip = 610; continue _fun0074 }
case 125:
                var25 = var21.readUnknownField;
                if(!(var12 !== var25)) { _fun0074_ip = 611; continue _fun0074 }
case 286:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var30);
                var24 = var25;
                var23 = var2;
                if(!(var13 !== var25)) { _fun0074_ip = 612; continue _fun0074 }
case 613:
                var27 = var25;
                if(!(var14 === var25)) { _fun0074_ip = 614; continue _fun0074 }
case 615:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var15];
                var26 = var28.bind(var18)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 614:
                var36 = var20.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var30;
                var32 = var2;
                var26 = var37[var27](var36, var35, var34, var33, var32, var31);
                var24 = var25;
                var23 = var2;
                _fun0074_ip = 612; continue _fun0074;
case 611:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var32 = var20.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var30;
                var36 = var37[var28](var36, var35, var34, var33, var32, var31);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var37 = var25;
                var2 = new var37[var26](var36, var35);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 610:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var25.bind(var18)(var2);
                var27 = var2.StringValue;
                var26 = var27.internalBinaryRead;
                var2 = var22.uint32;
                var35 = var2.bind(var22)();
                var33 = var1.label;
                var37 = var27;
                var36 = var22;
                var34 = var21;
                var2 = var37[var26](var36, var35, var34, var33, var32);
                var1['label'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0074_ip = 612; continue _fun0074;
case 609:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['createdAtMs'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0074_ip = 612; continue _fun0074;
case 607:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['expiresAtMs'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0074_ip = 612; continue _fun0074;
case 606:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['emojiName'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0074_ip = 612; continue _fun0074;
case 605:
                var2 = var22.fixed64;
                var25 = var2.bind(var22)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var1['emojiId'] = var2;
                var24 = var4;
                var23 = var3;
                _fun0074_ip = 612; continue _fun0074;
case 465:
                var2 = var22.string;
                var2 = var2.bind(var22)();
                var1['text'] = var2;
                var24 = var4;
                var23 = var3;
case 612:
                var2 = var22.pos;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0074_ip = 310; continue _fun0074 }
case 603:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.text;
                var6 = '';
                if(!(var6 !== var3)) { _fun0075_ip = 305; continue _fun0075 }
case 616:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 1;
                var7 = var7.bind(var1)(var3, var4);
                var4 = var7.string;
                var3 = var5.text;
                var3 = var4.bind(var7)(var3);
case 305:
                var3 = var5.emojiId;
                var4 = '0';
                if(!(var4 !== var3)) { _fun0075_ip = 219; continue _fun0075 }
case 617:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 7;
                var7 = var7[var3];
                var3 = undefined;
                var3 = var9.bind(var3)(var7);
                var3 = var3.WireType;
                var7 = var3.Bit64;
                var3 = 2;
                var8 = var8.bind(var1)(var3, var7);
                var7 = var8.fixed64;
                var3 = var5.emojiId;
                var3 = var7.bind(var8)(var3);
case 219:
                var3 = var5.emojiName;
                if(!(var6 !== var3)) { _fun0075_ip = 618; continue _fun0075 }
case 155:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.LengthDelimited;
                var3 = 3;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.string;
                var3 = var5.emojiName;
                var3 = var6.bind(var7)(var3);
case 618:
                var3 = var5.expiresAtMs;
                if(!(var4 !== var3)) { _fun0075_ip = 619; continue _fun0075 }
case 620:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 7;
                var6 = var6[var3];
                var3 = undefined;
                var3 = var8.bind(var3)(var6);
                var3 = var3.WireType;
                var6 = var3.Bit64;
                var3 = 4;
                var7 = var7.bind(var1)(var3, var6);
                var6 = var7.fixed64;
                var3 = var5.expiresAtMs;
                var3 = var6.bind(var7)(var3);
case 619:
                var3 = var5.createdAtMs;
                if(!(var4 !== var3)) { _fun0075_ip = 621; continue _fun0075 }
case 622:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 5;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.createdAtMs;
                var3 = var4.bind(var6)(var3);
case 621:
                var3 = var5.label;
                if(!var3) { _fun0075_ip = 623; continue _fun0075 }
case 360:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.label;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 6;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 623:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0075_ip = 194; continue _fun0075 }
case 624:
                var2 = 1;
                if(!(var2 == var4)) { _fun0075_ip = 317; continue _fun0075 }
case 625:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 317:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 194:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var30 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot47 = var30;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function LocalizationSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'locale', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'timezone_offset', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Int32Value;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.LocalizationSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0076_ip = 11; continue _fun0076 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0077_ip = 13; continue _fun0077 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0077_ip = 464; continue _fun0077 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0077_ip = 271; continue _fun0077 }
case 232:
                if(!(var7 !== var27)) { _fun0077_ip = 626; continue _fun0077 }
case 120:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0077_ip = 627; continue _fun0077 }
case 216:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0077_ip = 628; continue _fun0077 }
case 165:
                var23 = var21;
                if(!(var10 === var21)) { _fun0077_ip = 629; continue _fun0077 }
case 238:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 629:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0077_ip = 628; continue _fun0077;
case 627:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 626:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.Int32Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.timezoneOffset;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['timezoneOffset'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0077_ip = 628; continue _fun0077;
case 271:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.StringValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.locale;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['locale'] = var2;
                var20 = var4;
                var19 = var3;
case 628:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0077_ip = 16; continue _fun0077 }
case 464:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.locale;
                if(!var3) { _fun0078_ip = 49; continue _fun0078 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.locale;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.timezoneOffset;
                if(!var3) { _fun0078_ip = 113; continue _fun0078 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Int32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.timezoneOffset;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0078_ip = 630; continue _fun0078 }
case 631:
                var2 = 1;
                if(!(var2 == var4)) { _fun0078_ip = 632; continue _fun0078 }
case 148:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 632:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 630:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var29 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot48 = var29;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ChannelListSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'layout', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'message_previews', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.ChannelListSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0079_ip = 11; continue _fun0079 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0080_ip = 13; continue _fun0080 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0080_ip = 464; continue _fun0080 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0080_ip = 271; continue _fun0080 }
case 232:
                if(!(var7 !== var27)) { _fun0080_ip = 626; continue _fun0080 }
case 120:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0080_ip = 627; continue _fun0080 }
case 216:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0080_ip = 628; continue _fun0080 }
case 165:
                var23 = var21;
                if(!(var10 === var21)) { _fun0080_ip = 629; continue _fun0080 }
case 238:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 629:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0080_ip = 628; continue _fun0080;
case 627:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 626:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.StringValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.messagePreviews;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['messagePreviews'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0080_ip = 628; continue _fun0080;
case 271:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.StringValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.layout;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['layout'] = var2;
                var20 = var4;
                var19 = var3;
case 628:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0080_ip = 16; continue _fun0080 }
case 464:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.layout;
                if(!var3) { _fun0081_ip = 49; continue _fun0081 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.layout;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.messagePreviews;
                if(!var3) { _fun0081_ip = 113; continue _fun0081 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.messagePreviews;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0081_ip = 630; continue _fun0081 }
case 631:
                var2 = 1;
                if(!(var2 == var4)) { _fun0081_ip = 632; continue _fun0081 }
case 148:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 632:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 630:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var28 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot49 = var28;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AppearanceSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'theme', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot19;
                var1 = ['discord_protos.discord_users.v1.Theme'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(12);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'developer_mode', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'client_theme_settings', 'kind': 'message'};
            var8 = function T() {
                var1 = _closure1_slot52;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'mobile_redesign_disabled', 'kind': 'scalar', 'T': 8};
            var6[3] = var1;
            var1 = {'no': 6, 'name': 'channel_list_layout', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[4] = var1;
            var1 = {'no': 7, 'name': 'message_previews', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[5] = var1;
            var1 = {'no': 8, 'name': 'search_result_exact_count_enabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[6] = var1;
            var1 = {'no': 9, 'name': 'timestamp_hour_cycle', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot20;
                var1 = ['discord_protos.discord_users.v1.TimestampHourCycle'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[7] = var1;
            var1 = {'no': 10, 'name': 'happening_now_cards_disabled', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var8;
            var6[8] = var1;
            var1 = {'no': 11, 'name': 'launch_pad_mode', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot21;
                var1 = ['discord_protos.discord_users.v1.LaunchPadMode'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[9] = var1;
            var1 = {'no': 12, 'name': 'ui_density', 'kind': 'enum'};
            var8 = function T() {
                var2 = _closure1_slot18;
                var1 = ['discord_protos.discord_users.v1.UIDensity'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var8;
            var6[10] = var1;
            var1 = {'no': 13, 'name': 'swipe_right_to_left_mode', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot22;
                var1 = ['discord_protos.discord_users.v1.SwipeRightToLeftMode'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[11] = var1;
            var1 = ['discord_protos.discord_users.v1.AppearanceSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'theme': 0, 'developerMode': false, 'mobileRedesignDisabled': false, 'timestampHourCycle': 0, 'launchPadMode': 0, 'uiDensity': 0, 'swipeRightToLeftMode': 0};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0082_ip = 100; continue _fun0082 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var2 = this;
                var3 = null;
                if(!(var3 == var1)) { _fun0083_ip = 13; continue _fun0083 }
case 14:
                var3 = var2.create;
                var1 = var3.bind(var2)();
case 13:
                var4 = var20.pos;
                var3 = arg2;
                var18 = var4 + var3;
                var3 = var20.pos;
                var3 = var3 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 9;
                var10 = 2;
                var9 = 0;
                var6 = 1;
                var5 = undefined;
                var4 = undefined;
                if(!var3) { _fun0083_ip = 633; continue _fun0083 }
case 16:
                var3 = var20.tag;
                var7 = var3.bind(var20)();
                var3 = _closure1_slot2;
                var3 = var3.bind(var17)(var7, var10);
                var8 = var3[var9];
                var7 = var3[var6];
                SwitchImm(value_reg=7, jump_table_address=869, default_jump_address=671, unsigned_min_value=1, unsigned_max_value=13) // Switch table: [647, 623, 567, 540, 671, 465, 390, 315, 288, 213, 186, 159, 132];
case 17:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['swipeRightToLeftMode'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 108:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['uiDensity'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 116:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['launchPadMode'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 635:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.happeningNowCardsDisabled;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['happeningNowCardsDisabled'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 636:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['timestampHourCycle'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 630:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.BoolValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.searchResultExactCountEnabled;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['searchResultExactCountEnabled'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 348:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.messagePreviews;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['messagePreviews'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 637:
                var23 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var11];
                var3 = var23.bind(var17)(var3);
                var25 = var3.StringValue;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.channelListLayout;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['channelListLayout'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 173:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['mobileRedesignDisabled'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 174:
                var25 = _closure1_slot52;
                var24 = var25.internalBinaryRead;
                var3 = var20.uint32;
                var30 = var3.bind(var20)();
                var28 = var1.clientThemeSettings;
                var32 = var25;
                var31 = var20;
                var29 = var19;
                var3 = var32[var24](var31, var30, var29, var28, var27);
                var1['clientThemeSettings'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 638:
                var3 = var20.bool;
                var3 = var3.bind(var20)();
                var1['developerMode'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 474:
                var3 = var20.int32;
                var3 = var3.bind(var20)();
                var1['theme'] = var3;
                var22 = var5;
                var21 = var4;
                _fun0083_ip = 634; continue _fun0083;
case 639:
                var23 = var19.readUnknownField;
                if(!(var12 !== var23)) { _fun0083_ip = 640; continue _fun0083 }
case 641:
                var3 = var20.skip;
                var3 = var3.bind(var20)(var7);
                var22 = var23;
                var21 = var3;
                if(!(var13 !== var23)) { _fun0083_ip = 634; continue _fun0083 }
case 642:
                var25 = var23;
                if(!(var14 === var23)) { _fun0083_ip = 643; continue _fun0083 }
case 644:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var15];
                var24 = var26.bind(var17)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 643:
                var31 = var2.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var8;
                var28 = var7;
                var27 = var3;
                var24 = var32[var25](var31, var30, var29, var28, var27, var26);
                var22 = var23;
                var21 = var3;
case 634:
                var3 = var20.pos;
                var5 = var22;
                var4 = var21;
                if(var3 < var18) { _fun0083_ip = 16; continue _fun0083 }
case 633:
                return var1;
case 640:
                var1 = global;
                var3 = var1.globalThis;
                var3 = var3.Error;
                var27 = var2.typeName;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var8;
                var29 = var7;
                var31 = var32[var5](var31, var30, var29, var28, var27, var26);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var32 = var2;
                var1 = new var32[var3](var31, var30);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.theme;
                var6 = 0;
                if(!(var6 !== var2)) { _fun0084_ip = 241; continue _fun0084 }
case 242:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var8.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 1;
                var7 = var7.bind(var1)(var2, var4);
                var4 = var7.int32;
                var2 = var5.theme;
                var2 = var4.bind(var7)(var2);
case 241:
                var4 = var5.developerMode;
                var2 = false;
                if(!(var2 !== var4)) { _fun0084_ip = 238; continue _fun0084 }
case 645:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 2;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.bool;
                var4 = var5.developerMode;
                var4 = var7.bind(var8)(var4);
case 238:
                var4 = var5.clientThemeSettings;
                if(!var4) { _fun0084_ip = 646; continue _fun0084 }
case 286:
                var9 = _closure1_slot52;
                var8 = var9.internalBinaryWrite;
                var7 = var5.clientThemeSettings;
                var11 = var1.tag;
                var12 = _closure1_slot0;
                var10 = _closure1_slot1;
                var4 = 7;
                var10 = var10[var4];
                var4 = undefined;
                var4 = var12.bind(var4)(var10);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 3;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 646:
                var4 = var5.mobileRedesignDisabled;
                if(!(var2 !== var4)) { _fun0084_ip = 647; continue _fun0084 }
case 648:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 4;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.bool;
                var4 = var5.mobileRedesignDisabled;
                var4 = var7.bind(var8)(var4);
case 647:
                var4 = var5.channelListLayout;
                if(!var4) { _fun0084_ip = 637; continue _fun0084 }
case 649:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.StringValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.channelListLayout;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 6;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 637:
                var4 = var5.messagePreviews;
                if(!var4) { _fun0084_ip = 650; continue _fun0084 }
case 464:
                var13 = _closure1_slot0;
                var4 = _closure1_slot1;
                var7 = 9;
                var7 = var4[var7];
                var12 = undefined;
                var7 = var13.bind(var12)(var7);
                var9 = var7.StringValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.messagePreviews;
                var11 = var1.tag;
                var10 = 7;
                var4 = var4[var10];
                var4 = var13.bind(var12)(var4);
                var4 = var4.WireType;
                var4 = var4.LengthDelimited;
                var10 = var11.bind(var1)(var10, var4);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 650:
                var4 = var5.searchResultExactCountEnabled;
                if(!var4) { _fun0084_ip = 300; continue _fun0084 }
case 651:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.searchResultExactCountEnabled;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 8;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 300:
                var4 = var5.timestampHourCycle;
                if(!(var6 !== var4)) { _fun0084_ip = 652; continue _fun0084 }
case 653:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 9;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.timestampHourCycle;
                var4 = var7.bind(var8)(var4);
case 652:
                var4 = var5.happeningNowCardsDisabled;
                if(!var4) { _fun0084_ip = 654; continue _fun0084 }
case 198:
                var12 = _closure1_slot0;
                var13 = _closure1_slot1;
                var4 = 9;
                var4 = var13[var4];
                var10 = undefined;
                var4 = var12.bind(var10)(var4);
                var9 = var4.BoolValue;
                var8 = var9.internalBinaryWrite;
                var7 = var5.happeningNowCardsDisabled;
                var11 = var1.tag;
                var4 = 7;
                var4 = var13[var4];
                var4 = var12.bind(var10)(var4);
                var4 = var4.WireType;
                var10 = var4.LengthDelimited;
                var4 = 10;
                var10 = var11.bind(var1)(var4, var10);
                var4 = var10.fork;
                var4 = var4.bind(var10)();
                var7 = var8.bind(var9)(var7, var4, var3);
                var4 = var7.join;
                var4 = var4.bind(var7)();
case 654:
                var4 = var5.launchPadMode;
                if(!(var6 !== var4)) { _fun0084_ip = 655; continue _fun0084 }
case 403:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 11;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.launchPadMode;
                var4 = var7.bind(var8)(var4);
case 655:
                var4 = var5.uiDensity;
                if(!(var6 !== var4)) { _fun0084_ip = 656; continue _fun0084 }
case 657:
                var8 = var1.tag;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 7;
                var7 = var7[var4];
                var4 = undefined;
                var4 = var9.bind(var4)(var7);
                var4 = var4.WireType;
                var7 = var4.Varint;
                var4 = 12;
                var8 = var8.bind(var1)(var4, var7);
                var7 = var8.int32;
                var4 = var5.uiDensity;
                var4 = var7.bind(var8)(var4);
case 656:
                var4 = var5.swipeRightToLeftMode;
                if(!(var6 !== var4)) { _fun0084_ip = 658; continue _fun0084 }
case 659:
                var7 = var1.tag;
                var8 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 7;
                var6 = var6[var4];
                var4 = undefined;
                var4 = var8.bind(var4)(var6);
                var4 = var4.WireType;
                var6 = var4.Varint;
                var4 = 13;
                var7 = var7.bind(var1)(var4, var6);
                var6 = var7.int32;
                var4 = var5.swipeRightToLeftMode;
                var4 = var6.bind(var7)(var4);
case 658:
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0084_ip = 660; continue _fun0084 }
case 661:
                var2 = 1;
                if(!(var2 == var4)) { _fun0084_ip = 662; continue _fun0084 }
case 36:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 662:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 660:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var27 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot50 = var27;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CustomUserThemeSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'colors', 'kind': 'scalar', 'repeat': 2, 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'gradient_color_stops', 'kind': 'scalar', 'repeat': 1, 'T': 2};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'gradient_angle', 'kind': 'scalar', 'T': 5};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'base_mix', 'kind': 'scalar', 'T': 5};
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.CustomUserThemeSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['colors'] = var2;
                var2 = new Array(0);
                var1['gradientColorStops'] = var2;
                var2 = 0;
                var1['gradientAngle'] = var2;
                var1['baseMix'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0085_ip = 127; continue _fun0085 }
case 663:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 127:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
                var20 = arg1;
                var19 = arg3;
                var1 = arg4;
                var18 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0086_ip = 13; continue _fun0086 }
case 14:
                var2 = var18.create;
                var1 = var2.bind(var18)();
case 13:
                var3 = var20.pos;
                var2 = arg2;
                var17 = var3 + var2;
                var2 = var20.pos;
                var2 = var2 < var17;
                var16 = undefined;
                var14 = 7;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0086_ip = 664; continue _fun0086 }
case 4:
                var2 = var20.tag;
                var21 = var2.bind(var20)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var16)(var21, var8);
                var30 = var2[var6];
                var24 = var2[var7];
                if(!(var7 !== var30)) { _fun0086_ip = 665; continue _fun0086 }
case 666:
                if(!(var8 !== var30)) { _fun0086_ip = 357; continue _fun0086 }
case 604:
                if(!(var9 !== var30)) { _fun0086_ip = 347; continue _fun0086 }
case 490:
                if(!(var10 !== var30)) { _fun0086_ip = 55; continue _fun0086 }
case 487:
                var25 = var19.readUnknownField;
                if(!(var11 !== var25)) { _fun0086_ip = 268; continue _fun0086 }
case 282:
                var2 = var20.skip;
                var2 = var2.bind(var20)(var24);
                var23 = var5;
                var22 = var25;
                var21 = var2;
                if(!(var12 !== var25)) { _fun0086_ip = 651; continue _fun0086 }
case 307:
                var27 = var25;
                if(!(var13 === var25)) { _fun0086_ip = 119; continue _fun0086 }
case 243:
                var28 = _closure1_slot0;
                var26 = _closure1_slot1;
                var26 = var26[var14];
                var26 = var28.bind(var16)(var26);
                var26 = var26.UnknownFieldHandler;
                var27 = var26.onRead;
case 119:
                var35 = var18.typeName;
                var36 = undefined;
                var34 = var1;
                var33 = var30;
                var32 = var24;
                var31 = var2;
                var26 = var36[var27](var35, var34, var33, var32, var31, var30);
                var23 = var5;
                var22 = var25;
                var21 = var2;
                _fun0086_ip = 651; continue _fun0086;
case 268:
                var2 = global;
                var25 = var2.globalThis;
                var26 = var25.Error;
                var31 = var18.typeName;
                var2 = var2.HermesInternal;
                var28 = var2.concat;
                var36 = 'Unknown field ';
                var34 = ' (wire type ';
                var32 = ') for ';
                var35 = var30;
                var33 = var24;
                var35 = var36[var28](var35, var34, var33, var32, var31, var30);
                var25 = var26.prototype;
                var25 = Object.create(var25, {constructor: {value: var26}});
                var36 = var25;
                var2 = new var36[var26](var35, var34);
                var2 = var2 instanceof Object ? var2 : var25;
                throw var2;
case 55:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['baseMix'] = var2;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0086_ip = 651; continue _fun0086;
case 347:
                var2 = var20.int32;
                var2 = var2.bind(var20)();
                var1['gradientAngle'] = var2;
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0086_ip = 651; continue _fun0086;
case 357:
                var25 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var25.bind(var16)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var24 !== var2)) { _fun0086_ip = 24; continue _fun0086 }
case 54:
                var25 = var1.gradientColorStops;
                var24 = var25.push;
                var2 = var20.float;
                var2 = var2.bind(var20)();
                var2 = var24.bind(var25)(var2);
                var23 = var5;
                var22 = var4;
                var21 = var3;
                _fun0086_ip = 651; continue _fun0086;
case 24:
                var2 = var20.int32;
                var24 = var2.bind(var20)();
                var2 = var20.pos;
                var24 = var24 + var2;
                var2 = var20.pos;
                var22 = var4;
                var21 = var3;
                var23 = var24;
                if(!(var2 < var23)) { _fun0086_ip = 651; continue _fun0086 }
case 667:
                var26 = var1.gradientColorStops;
                var25 = var26.push;
                var2 = var20.float;
                var2 = var2.bind(var20)();
                var2 = var25.bind(var26)(var2);
                var2 = var20.pos;
                var23 = var24;
                var22 = var4;
                var21 = var3;
                if(var2 < var24) { _fun0086_ip = 667; continue _fun0086 }
case 668:
                _fun0086_ip = 651; continue _fun0086;
case 665:
                var25 = var1.colors;
                var24 = var25.push;
                var2 = var20.string;
                var2 = var2.bind(var20)();
                var2 = var24.bind(var25)(var2);
                var23 = var5;
                var22 = var4;
                var21 = var3;
case 651:
                var2 = var20.pos;
                var5 = var23;
                var4 = var22;
                var3 = var21;
                if(var2 < var17) { _fun0086_ip = 4; continue _fun0086 }
case 664:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.colors;
                var2 = var2.length;
                var8 = 0;
                var3 = var8 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 0;
                if(!var3) { _fun0087_ip = 361; continue _fun0087 }
case 3:
                var10 = var1.tag;
                var11 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var11.bind(var4)(var3);
                var3 = var3.WireType;
                var3 = var3.LengthDelimited;
                var11 = var10.bind(var1)(var6, var3);
                var10 = var11.string;
                var3 = var5.colors;
                var3 = var3[var9];
                var3 = var10.bind(var11)(var3);
                var9 = var9 + 1;
                var3 = var5.colors;
                var3 = var3.length;
                if(var9 < var3) { _fun0087_ip = 3; continue _fun0087 }
case 361:
                var3 = var5.gradientColorStops;
                var3 = var3.length;
                if(!var3) { _fun0087_ip = 618; continue _fun0087 }
case 120:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var9.bind(var4)(var3);
                var3 = var3.WireType;
                var9 = var3.LengthDelimited;
                var3 = 2;
                var9 = var10.bind(var1)(var3, var9);
                var3 = var9.fork;
                var3 = var3.bind(var9)();
                var3 = var5.gradientColorStops;
                var3 = var3.length;
                var3 = var8 < var3;
                var9 = 0;
                if(!var3) { _fun0087_ip = 235; continue _fun0087 }
case 669:
                var10 = var1.float;
                var3 = var5.gradientColorStops;
                var3 = var3[var9];
                var3 = var10.bind(var1)(var3);
                var9 = var9 + 1;
                var3 = var5.gradientColorStops;
                var3 = var3.length;
                if(var9 < var3) { _fun0087_ip = 669; continue _fun0087 }
case 235:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 618:
                var3 = var5.gradientAngle;
                if(!(var8 !== var3)) { _fun0087_ip = 351; continue _fun0087 }
case 620:
                var10 = var1.tag;
                var9 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var9.bind(var4)(var3);
                var3 = var3.WireType;
                var9 = var3.Varint;
                var3 = 3;
                var10 = var10.bind(var1)(var3, var9);
                var9 = var10.int32;
                var3 = var5.gradientAngle;
                var3 = var9.bind(var10)(var3);
case 351:
                var3 = var5.baseMix;
                if(!(var8 !== var3)) { _fun0087_ip = 670; continue _fun0087 }
case 52:
                var9 = var1.tag;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var7];
                var3 = var8.bind(var4)(var3);
                var3 = var3.WireType;
                var8 = var3.Varint;
                var3 = 4;
                var9 = var9.bind(var1)(var3, var8);
                var8 = var9.int32;
                var3 = var5.baseMix;
                var3 = var8.bind(var9)(var3);
case 670:
                var3 = arg3;
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0087_ip = 671; continue _fun0087 }
case 672:
                if(!(var6 == var3)) { _fun0087_ip = 673; continue _fun0087 }
case 674:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 673:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 671:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var26 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot51 = var26;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClientThemeSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 2, 'name': 'background_gradient_preset_id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt32Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 4, 'name': 'custom_user_theme_settings', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot51;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.ClientThemeSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0088_ip = 11; continue _fun0088 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0089_ip = 13; continue _fun0089 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 4;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0089_ip = 675; continue _fun0089 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var6];
                var27 = var2[var5];
                if(!(var7 !== var28)) { _fun0089_ip = 359; continue _fun0089 }
case 213:
                if(!(var8 !== var28)) { _fun0089_ip = 676; continue _fun0089 }
case 214:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0089_ip = 53; continue _fun0089 }
case 143:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0089_ip = 295; continue _fun0089 }
case 149:
                var24 = var22;
                if(!(var11 === var22)) { _fun0089_ip = 669; continue _fun0089 }
case 219:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 669:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0089_ip = 295; continue _fun0089;
case 53:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 676:
                var24 = _closure1_slot51;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.customUserThemeSettings;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['customUserThemeSettings'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0089_ip = 295; continue _fun0089;
case 359:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt32Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.backgroundGradientPresetId;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['backgroundGradientPresetId'] = var2;
                var21 = var4;
                var20 = var3;
case 295:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0089_ip = 212; continue _fun0089 }
case 675:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.backgroundGradientPresetId;
                if(!var3) { _fun0090_ip = 49; continue _fun0090 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt32Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.backgroundGradientPresetId;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.customUserThemeSettings;
                if(!var3) { _fun0090_ip = 50; continue _fun0090 }
case 51:
                var7 = _closure1_slot51;
                var6 = var7.internalBinaryWrite;
                var4 = var5.customUserThemeSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 50:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0090_ip = 353; continue _fun0090 }
case 677:
                var2 = 1;
                if(!(var2 == var4)) { _fun0090_ip = 287; continue _fun0090 }
case 306:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 287:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 353:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var25 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot52 = var25;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildFolders$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'folders', 'kind': 'message', 'repeat': 1};
            var6 = function T() {
                var1 = _closure1_slot54;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'guild_positions', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.GuildFolders'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['folders'] = var2;
                var2 = new Array(0);
                var1['guildPositions'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0091_ip = 120; continue _fun0091 }
case 112:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 120:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0092_ip = 13; continue _fun0092 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0092_ip = 678; continue _fun0092 }
case 111:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var8);
                var28 = var2[var6];
                var22 = var2[var7];
                if(!(var7 !== var28)) { _fun0092_ip = 137; continue _fun0092 }
case 679:
                if(!(var8 !== var28)) { _fun0092_ip = 680; continue _fun0092 }
case 140:
                var23 = var17.readUnknownField;
                if(!(var9 !== var23)) { _fun0092_ip = 614; continue _fun0092 }
case 254:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var22);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                if(!(var10 !== var23)) { _fun0092_ip = 681; continue _fun0092 }
case 284:
                var25 = var23;
                if(!(var11 === var23)) { _fun0092_ip = 245; continue _fun0092 }
case 162:
                var26 = _closure1_slot0;
                var24 = _closure1_slot1;
                var24 = var24[var12];
                var24 = var26.bind(var14)(var24);
                var24 = var24.UnknownFieldHandler;
                var25 = var24.onRead;
case 245:
                var33 = var16.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var22;
                var29 = var2;
                var24 = var34[var25](var33, var32, var31, var30, var29, var28);
                var21 = var5;
                var20 = var23;
                var19 = var2;
                _fun0092_ip = 681; continue _fun0092;
case 614:
                var2 = global;
                var23 = var2.globalThis;
                var24 = var23.Error;
                var29 = var16.typeName;
                var2 = var2.HermesInternal;
                var26 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var22;
                var33 = var34[var26](var33, var32, var31, var30, var29, var28);
                var23 = var24.prototype;
                var23 = Object.create(var23, {constructor: {value: var24}});
                var34 = var23;
                var2 = new var34[var24](var33, var32);
                var2 = var2 instanceof Object ? var2 : var23;
                throw var2;
case 680:
                var23 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var23.bind(var14)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var22 !== var2)) { _fun0092_ip = 682; continue _fun0092 }
case 224:
                var23 = var1.guildPositions;
                var22 = var23.push;
                var2 = var18.fixed64;
                var24 = var2.bind(var18)();
                var2 = var24.toString;
                var2 = var2.bind(var24)();
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
                _fun0092_ip = 681; continue _fun0092;
case 682:
                var2 = var18.int32;
                var22 = var2.bind(var18)();
                var2 = var18.pos;
                var22 = var22 + var2;
                var2 = var18.pos;
                var20 = var4;
                var19 = var3;
                var21 = var22;
                if(!(var2 < var21)) { _fun0092_ip = 681; continue _fun0092 }
case 295:
                var24 = var1.guildPositions;
                var23 = var24.push;
                var2 = var18.fixed64;
                var25 = var2.bind(var18)();
                var2 = var25.toString;
                var2 = var2.bind(var25)();
                var2 = var23.bind(var24)(var2);
                var2 = var18.pos;
                var21 = var22;
                var20 = var4;
                var19 = var3;
                if(var2 < var22) { _fun0092_ip = 295; continue _fun0092 }
case 606:
                _fun0092_ip = 681; continue _fun0092;
case 137:
                var23 = var1.folders;
                var22 = var23.push;
                var25 = _closure1_slot54;
                var24 = var25.internalBinaryRead;
                var2 = var18.uint32;
                var2 = var2.bind(var18)();
                var2 = var24.bind(var25)(var18, var2, var17);
                var2 = var22.bind(var23)(var2);
                var21 = var5;
                var20 = var4;
                var19 = var3;
case 681:
                var2 = var18.pos;
                var5 = var21;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0092_ip = 111; continue _fun0092 }
case 678:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = var5.folders;
                var2 = var2.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var10 = 0;
                if(!var8) { _fun0093_ip = 683; continue _fun0093 }
case 684:
                var13 = _closure1_slot54;
                var12 = var13.internalBinaryWrite;
                var8 = var5.folders;
                var11 = var8[var10];
                var14 = var1.tag;
                var15 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var15.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var14 = var14.bind(var1)(var6, var8);
                var8 = var14.fork;
                var8 = var8.bind(var14)();
                var11 = var12.bind(var13)(var11, var8, var3);
                var8 = var11.join;
                var8 = var8.bind(var11)();
                var10 = var10 + 1;
                var8 = var5.folders;
                var8 = var8.length;
                if(var10 < var8) { _fun0093_ip = 684; continue _fun0093 }
case 683:
                var8 = var5.guildPositions;
                var8 = var8.length;
                if(!var8) { _fun0093_ip = 648; continue _fun0093 }
case 685:
                var11 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var7];
                var8 = var10.bind(var4)(var8);
                var8 = var8.WireType;
                var10 = var8.LengthDelimited;
                var8 = 2;
                var10 = var11.bind(var1)(var8, var10);
                var8 = var10.fork;
                var8 = var8.bind(var10)();
                var8 = var5.guildPositions;
                var8 = var8.length;
                var8 = var9 < var8;
                var9 = 0;
                if(!var8) { _fun0093_ip = 167; continue _fun0093 }
case 627:
                var10 = var1.fixed64;
                var8 = var5.guildPositions;
                var8 = var8[var9];
                var8 = var10.bind(var1)(var8);
                var9 = var9 + 1;
                var8 = var5.guildPositions;
                var8 = var8.length;
                if(var9 < var8) { _fun0093_ip = 627; continue _fun0093 }
case 167:
                var8 = var1.join;
                var8 = var8.bind(var1)();
case 648:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0093_ip = 190; continue _fun0093 }
case 244:
                if(!(var6 == var3)) { _fun0093_ip = 267; continue _fun0093 }
case 632:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 267:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 190:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var24 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot53 = var24;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function GuildFolder$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'id', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.Int64Value;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'name', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'color', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.GuildFolder'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['guildIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0094_ip = 686; continue _fun0094 }
case 241:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 686:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
case 0:
                var21 = arg1;
                var20 = arg3;
                var1 = arg4;
                var19 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0095_ip = 13; continue _fun0095 }
case 14:
                var2 = var19.create;
                var1 = var2.bind(var19)();
case 13:
                var3 = var21.pos;
                var2 = arg2;
                var18 = var3 + var2;
                var2 = var21.pos;
                var2 = var2 < var18;
                var17 = undefined;
                var15 = 7;
                var14 = 9;
                var13 = true;
                var12 = false;
                var11 = 'throw';
                var10 = 4;
                var9 = 3;
                var8 = 2;
                var7 = 1;
                var6 = 0;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0095_ip = 687; continue _fun0095 }
case 489:
                var2 = var21.tag;
                var22 = var2.bind(var21)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var17)(var22, var8);
                var31 = var2[var6];
                var25 = var2[var7];
                if(!(var7 !== var31)) { _fun0095_ip = 688; continue _fun0095 }
case 689:
                if(!(var8 !== var31)) { _fun0095_ip = 137; continue _fun0095 }
case 276:
                if(!(var9 !== var31)) { _fun0095_ip = 591; continue _fun0095 }
case 278:
                if(!(var10 !== var31)) { _fun0095_ip = 270; continue _fun0095 }
case 280:
                var26 = var20.readUnknownField;
                if(!(var11 !== var26)) { _fun0095_ip = 690; continue _fun0095 }
case 685:
                var2 = var21.skip;
                var2 = var2.bind(var21)(var25);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                if(!(var12 !== var26)) { _fun0095_ip = 691; continue _fun0095 }
case 692:
                var28 = var26;
                if(!(var13 === var26)) { _fun0095_ip = 115; continue _fun0095 }
case 693:
                var29 = _closure1_slot0;
                var27 = _closure1_slot1;
                var27 = var27[var15];
                var27 = var29.bind(var17)(var27);
                var27 = var27.UnknownFieldHandler;
                var28 = var27.onRead;
case 115:
                var36 = var19.typeName;
                var37 = undefined;
                var35 = var1;
                var34 = var31;
                var33 = var25;
                var32 = var2;
                var27 = var37[var28](var36, var35, var34, var33, var32, var31);
                var24 = var5;
                var23 = var26;
                var22 = var2;
                _fun0095_ip = 691; continue _fun0095;
case 690:
                var2 = global;
                var26 = var2.globalThis;
                var27 = var26.Error;
                var32 = var19.typeName;
                var2 = var2.HermesInternal;
                var29 = var2.concat;
                var37 = 'Unknown field ';
                var35 = ' (wire type ';
                var33 = ') for ';
                var36 = var31;
                var34 = var25;
                var36 = var37[var29](var36, var35, var34, var33, var32, var31);
                var26 = var27.prototype;
                var26 = Object.create(var26, {constructor: {value: var27}});
                var37 = var26;
                var2 = new var37[var27](var36, var35);
                var2 = var2 instanceof Object ? var2 : var26;
                throw var2;
case 270:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var26.bind(var17)(var2);
                var28 = var2.UInt64Value;
                var27 = var28.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.color;
                var37 = var28;
                var36 = var21;
                var34 = var20;
                var2 = var37[var27](var36, var35, var34, var33, var32);
                var1['color'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 691; continue _fun0095;
case 591:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var26.bind(var17)(var2);
                var28 = var2.StringValue;
                var27 = var28.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.name;
                var37 = var28;
                var36 = var21;
                var34 = var20;
                var2 = var37[var27](var36, var35, var34, var33, var32);
                var1['name'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 691; continue _fun0095;
case 137:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var14];
                var2 = var26.bind(var17)(var2);
                var28 = var2.Int64Value;
                var27 = var28.internalBinaryRead;
                var2 = var21.uint32;
                var35 = var2.bind(var21)();
                var33 = var1.id;
                var37 = var28;
                var36 = var21;
                var34 = var20;
                var2 = var37[var27](var36, var35, var34, var33, var32);
                var1['id'] = var2;
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 691; continue _fun0095;
case 688:
                var26 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var26.bind(var17)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var25 !== var2)) { _fun0095_ip = 277; continue _fun0095 }
case 497:
                var26 = var1.guildIds;
                var25 = var26.push;
                var2 = var21.fixed64;
                var27 = var2.bind(var21)();
                var2 = var27.toString;
                var2 = var2.bind(var27)();
                var2 = var25.bind(var26)(var2);
                var24 = var5;
                var23 = var4;
                var22 = var3;
                _fun0095_ip = 691; continue _fun0095;
case 277:
                var2 = var21.int32;
                var25 = var2.bind(var21)();
                var2 = var21.pos;
                var25 = var25 + var2;
                var2 = var21.pos;
                var23 = var4;
                var22 = var3;
                var24 = var25;
                if(!(var2 < var24)) { _fun0095_ip = 691; continue _fun0095 }
case 694:
                var27 = var1.guildIds;
                var26 = var27.push;
                var2 = var21.fixed64;
                var28 = var2.bind(var21)();
                var2 = var28.toString;
                var2 = var2.bind(var28)();
                var2 = var26.bind(var27)(var2);
                var2 = var21.pos;
                var24 = var25;
                var23 = var4;
                var22 = var3;
                if(var2 < var25) { _fun0095_ip = 694; continue _fun0095 }
case 691:
                var2 = var21.pos;
                var5 = var24;
                var4 = var23;
                var3 = var22;
                if(var2 < var18) { _fun0095_ip = 489; continue _fun0095 }
case 687:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.guildIds;
                var3 = var3.length;
                if(!var3) { _fun0096_ip = 147; continue _fun0096 }
case 695:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 1;
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.guildIds;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0096_ip = 683; continue _fun0096 }
case 696:
                var6 = var1.fixed64;
                var3 = var5.guildIds;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.guildIds;
                var3 = var3.length;
                if(var4 < var3) { _fun0096_ip = 696; continue _fun0096 }
case 683:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 147:
                var3 = var5.id;
                if(!var3) { _fun0096_ip = 697; continue _fun0096 }
case 698:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.Int64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.id;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 697:
                var3 = var5.name;
                if(!var3) { _fun0096_ip = 303; continue _fun0096 }
case 699:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.name;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 303:
                var3 = var5.color;
                if(!var3) { _fun0096_ip = 700; continue _fun0096 }
case 701:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.color;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 700:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0096_ip = 298; continue _fun0096 }
case 702:
                var2 = 1;
                if(!(var2 == var4)) { _fun0096_ip = 600; continue _fun0096 }
case 605:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 600:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 298:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var23 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot54 = var23;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function Favorites$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'favorite_channels', 'kind': 'map', 'K': 6};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot56;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'muted', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.Favorites'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['favoriteChannels'] = var2;
                var11 = false;
                var1['muted'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0097_ip = 100; continue _fun0097 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0098_ip = 13; continue _fun0098 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0098_ip = 536; continue _fun0098 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0098_ip = 103; continue _fun0098 }
case 104:
                if(!(var7 !== var26)) { _fun0098_ip = 105; continue _fun0098 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0098_ip = 106; continue _fun0098 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0098_ip = 703; continue _fun0098 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0098_ip = 109; continue _fun0098 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0098_ip = 703; continue _fun0098;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['muted'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0098_ip = 703; continue _fun0098;
case 103:
                var20 = var15.binaryReadMap1;
                var2 = var1.favoriteChannels;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 703:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0098_ip = 102; continue _fun0098 }
case 536:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0099_ip = 123; continue _fun0099 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0099_ip = 125; continue _fun0099 }
case 126:
                if(!(var10 !== var3)) { _fun0099_ip = 127; continue _fun0099 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.Favorites.favorite_channels';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot56;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0099_ip = 128; continue _fun0099;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0099_ip = 124; continue _fun0099 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0099_ip = 106; continue _fun0099 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0099_ip = 129; continue _fun0099 }
case 130:
                var5 = _closure1_slot56;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.favoriteChannels;
                var10 = var4.bind(var6)(var2);
                var2 = var10.length;
                var9 = 0;
                var8 = var9 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var11 = 2;
                if(!var8) { _fun0100_ip = 131; continue _fun0100 }
case 132:
                var14 = var10[var9];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var11, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot56;
                var12 = var13.internalBinaryWrite;
                var8 = var5.favoriteChannels;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var9 = var9 + 1;
                var8 = var10.length;
                if(var9 < var8) { _fun0100_ip = 132; continue _fun0100 }
case 131:
                var9 = var5.muted;
                var8 = false;
                if(!(var8 !== var9)) { _fun0100_ip = 188; continue _fun0100 }
case 134:
                var10 = var1.tag;
                var12 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var7];
                var9 = var12.bind(var4)(var9);
                var9 = var9.WireType;
                var9 = var9.Varint;
                var11 = var10.bind(var1)(var11, var9);
                var10 = var11.bool;
                var9 = var5.muted;
                var9 = var10.bind(var11)(var9);
case 188:
                var3 = var3.writeUnknownFields;
                if(!(var8 !== var3)) { _fun0100_ip = 701; continue _fun0100 }
case 190:
                if(!(var6 == var3)) { _fun0100_ip = 101; continue _fun0100 }
case 704:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 101:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 701:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var22 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot55 = var22;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function FavoriteChannel$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'nickname', 'kind': 'scalar', 'T': 9};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'type', 'kind': 'enum'};
            var7 = function T() {
                var2 = _closure1_slot23;
                var1 = ['discord_protos.discord_users.v1.FavoriteChannelType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'position', 'kind': 'scalar', 'T': 13};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'parent_id', 'kind': 'scalar', 'T': 6};
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.FavoriteChannel'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0101: for(var _fun0101_ip = 0; ; ) switch(_fun0101_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'nickname': '', 'type': 0, 'position': 0, 'parentId': '0'};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0101_ip = 100; continue _fun0101 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0102: for(var _fun0102_ip = 0; ; ) switch(_fun0102_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0102_ip = 13; continue _fun0102 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 7;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0102_ip = 705; continue _fun0102 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0102_ip = 170; continue _fun0102 }
case 213:
                if(!(var7 !== var28)) { _fun0102_ip = 258; continue _fun0102 }
case 214:
                if(!(var8 !== var28)) { _fun0102_ip = 226; continue _fun0102 }
case 216:
                if(!(var9 !== var28)) { _fun0102_ip = 260; continue _fun0102 }
case 236:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0102_ip = 154; continue _fun0102 }
case 147:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0102_ip = 706; continue _fun0102 }
case 114:
                var24 = var22;
                if(!(var12 === var22)) { _fun0102_ip = 262; continue _fun0102 }
case 116:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 262:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0102_ip = 706; continue _fun0102;
case 154:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 260:
                var2 = var19.fixed64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['parentId'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0102_ip = 706; continue _fun0102;
case 226:
                var2 = var19.uint32;
                var2 = var2.bind(var19)();
                var1['position'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0102_ip = 706; continue _fun0102;
case 258:
                var2 = var19.int32;
                var2 = var2.bind(var19)();
                var1['type'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0102_ip = 706; continue _fun0102;
case 170:
                var2 = var19.string;
                var2 = var2.bind(var19)();
                var1['nickname'] = var2;
                var21 = var4;
                var20 = var3;
case 706:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0102_ip = 212; continue _fun0102 }
case 705:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0103: for(var _fun0103_ip = 0; ; ) switch(_fun0103_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.nickname;
                var2 = '';
                if(!(var2 !== var3)) { _fun0103_ip = 16; continue _fun0103 }
case 707:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.LengthDelimited;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.string;
                var2 = var5.nickname;
                var2 = var3.bind(var4)(var2);
case 16:
                var2 = var5.type;
                var3 = 0;
                if(!(var3 !== var2)) { _fun0103_ip = 149; continue _fun0103 }
case 112:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Varint;
                var2 = 2;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.int32;
                var2 = var5.type;
                var2 = var4.bind(var6)(var2);
case 149:
                var2 = var5.position;
                if(!(var3 !== var2)) { _fun0103_ip = 113; continue _fun0103 }
case 350:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 3;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.uint32;
                var2 = var5.position;
                var2 = var3.bind(var4)(var2);
case 113:
                var3 = var5.parentId;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0103_ip = 121; continue _fun0103 }
case 352:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 4;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.parentId;
                var2 = var3.bind(var4)(var2);
case 121:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0103_ip = 189; continue _fun0103 }
case 146:
                var2 = 1;
                if(!(var2 == var4)) { _fun0103_ip = 708; continue _fun0103 }
case 248:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 708:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 189:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var21 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot56 = var21;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AudioContextSetting$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(4);
            var1 = {'no': 1, 'name': 'muted', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'volume', 'kind': 'scalar', 'T': 2};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'modified_at', 'kind': 'scalar', 'T': 6};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'soundboard_muted', 'kind': 'scalar', 'T': 8};
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.AudioContextSetting'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0104: for(var _fun0104_ip = 0; ; ) switch(_fun0104_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'muted': false, 'volume': 0, 'modifiedAt': '0', 'soundboardMuted': false};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0104_ip = 100; continue _fun0104 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0105: for(var _fun0105_ip = 0; ; ) switch(_fun0105_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0105_ip = 13; continue _fun0105 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 7;
                var12 = true;
                var11 = false;
                var10 = 'throw';
                var9 = 4;
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0105_ip = 709; continue _fun0105 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0105_ip = 170; continue _fun0105 }
case 213:
                if(!(var7 !== var28)) { _fun0105_ip = 258; continue _fun0105 }
case 214:
                if(!(var8 !== var28)) { _fun0105_ip = 259; continue _fun0105 }
case 216:
                if(!(var9 !== var28)) { _fun0105_ip = 260; continue _fun0105 }
case 236:
                var22 = var18.readUnknownField;
                if(!(var10 !== var22)) { _fun0105_ip = 154; continue _fun0105 }
case 147:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var11 !== var22)) { _fun0105_ip = 710; continue _fun0105 }
case 114:
                var24 = var22;
                if(!(var12 === var22)) { _fun0105_ip = 262; continue _fun0105 }
case 116:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var13];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 262:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0105_ip = 710; continue _fun0105;
case 154:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 260:
                var2 = var19.bool;
                var2 = var2.bind(var19)();
                var1['soundboardMuted'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0105_ip = 710; continue _fun0105;
case 259:
                var2 = var19.fixed64;
                var22 = var2.bind(var19)();
                var2 = var22.toString;
                var2 = var2.bind(var22)();
                var1['modifiedAt'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0105_ip = 710; continue _fun0105;
case 258:
                var2 = var19.float;
                var2 = var2.bind(var19)();
                var1['volume'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0105_ip = 710; continue _fun0105;
case 170:
                var2 = var19.bool;
                var2 = var2.bind(var19)();
                var1['muted'] = var2;
                var21 = var4;
                var20 = var3;
case 710:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0105_ip = 212; continue _fun0105 }
case 709:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0106: for(var _fun0106_ip = 0; ; ) switch(_fun0106_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.muted;
                var2 = false;
                if(!(var2 !== var3)) { _fun0106_ip = 111; continue _fun0106 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.muted;
                var3 = var4.bind(var6)(var3);
case 111:
                var4 = var5.volume;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0106_ip = 110; continue _fun0106 }
case 112:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit32;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.float;
                var3 = var5.volume;
                var3 = var4.bind(var6)(var3);
case 110:
                var4 = var5.modifiedAt;
                var3 = '0';
                if(!(var3 !== var4)) { _fun0106_ip = 154; continue _fun0106 }
case 155:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Bit64;
                var3 = 3;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.fixed64;
                var3 = var5.modifiedAt;
                var3 = var4.bind(var6)(var3);
case 154:
                var3 = var5.soundboardMuted;
                if(!(var2 !== var3)) { _fun0106_ip = 156; continue _fun0106 }
case 148:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 4;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.soundboardMuted;
                var3 = var4.bind(var6)(var3);
case 156:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0106_ip = 269; continue _fun0106 }
case 270:
                var2 = 1;
                if(!(var2 == var4)) { _fun0106_ip = 271; continue _fun0106 }
case 272:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 271:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 269:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var20 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot57 = var20;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AudioSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'user', 'kind': 'map', 'K': 6};
            var6 = {};
            var9 = 'message';
            var6['kind'] = var9;
            var7 = function T() {
                var1 = _closure1_slot57;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'stream', 'kind': 'map', 'K': 6};
            var7 = {};
            var7['kind'] = var9;
            var8 = function T() {
                var1 = _closure1_slot57;
                return var1;
            };
            var7['T'] = var8;
            var1['V'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.AudioSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0107: for(var _fun0107_ip = 0; ; ) switch(_fun0107_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['user'] = var2;
                var2 = {};
                var1['stream'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0107_ip = 221; continue _fun0107 }
case 138:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 221:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0108: for(var _fun0108_ip = 0; ; ) switch(_fun0108_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0108_ip = 13; continue _fun0108 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0108_ip = 711; continue _fun0108 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0108_ip = 622; continue _fun0108 }
case 104:
                if(!(var7 !== var26)) { _fun0108_ip = 105; continue _fun0108 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0108_ip = 106; continue _fun0108 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0108_ip = 712; continue _fun0108 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0108_ip = 109; continue _fun0108 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0108_ip = 712; continue _fun0108;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var20 = var15.binaryReadMap2;
                var2 = var1.stream;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
                _fun0108_ip = 712; continue _fun0108;
case 622:
                var20 = var15.binaryReadMap1;
                var2 = var1.user;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 712:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0108_ip = 102; continue _fun0108 }
case 711:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0109: for(var _fun0109_ip = 0; ; ) switch(_fun0109_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0109_ip = 123; continue _fun0109 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0109_ip = 125; continue _fun0109 }
case 126:
                if(!(var10 !== var3)) { _fun0109_ip = 127; continue _fun0109 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.user';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot57;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0109_ip = 128; continue _fun0109;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0109_ip = 124; continue _fun0109 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0109_ip = 106; continue _fun0109 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0109_ip = 129; continue _fun0109 }
case 130:
                var5 = _closure1_slot57;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'binaryReadMap2';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0110: for(var _fun0110_ip = 0; ; ) switch(_fun0110_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0110_ip = 123; continue _fun0110 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0110_ip = 125; continue _fun0110 }
case 126:
                if(!(var10 !== var3)) { _fun0110_ip = 127; continue _fun0110 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.AudioSettings.stream';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot57;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0110_ip = 128; continue _fun0110;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0110_ip = 124; continue _fun0110 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0110_ip = 106; continue _fun0110 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0110_ip = 129; continue _fun0110 }
case 130:
                var5 = _closure1_slot57;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0111: for(var _fun0111_ip = 0; ; ) switch(_fun0111_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var8 = global;
                var6 = var8.Object;
                var4 = var6.keys;
                var2 = var5.user;
                var13 = var4.bind(var6)(var2);
                var2 = var13.length;
                var11 = 0;
                var9 = var11 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var10 = 2;
                var12 = 0;
                if(!var9) { _fun0111_ip = 131; continue _fun0111 }
case 713:
                var16 = var13[var12];
                var17 = var1.tag;
                var15 = _closure1_slot0;
                var9 = _closure1_slot1;
                var14 = var9[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.LengthDelimited;
                var17 = var17.bind(var1)(var6, var14);
                var14 = var17.fork;
                var18 = var14.bind(var17)();
                var17 = var18.tag;
                var14 = var9[var7];
                var14 = var15.bind(var4)(var14);
                var14 = var14.WireType;
                var14 = var14.Bit64;
                var17 = var17.bind(var18)(var6, var14);
                var14 = var17.fixed64;
                var14 = var14.bind(var17)(var16);
                var14 = var1.tag;
                var9 = var9[var7];
                var9 = var15.bind(var4)(var9);
                var9 = var9.WireType;
                var9 = var9.LengthDelimited;
                var14 = var14.bind(var1)(var10, var9);
                var9 = var14.fork;
                var9 = var9.bind(var14)();
                var15 = _closure1_slot57;
                var14 = var15.internalBinaryWrite;
                var9 = var5.user;
                var9 = var9[var16];
                var9 = var14.bind(var15)(var9, var1, var3);
                var9 = var1.join;
                var14 = var9.bind(var1)();
                var9 = var14.join;
                var9 = var9.bind(var14)();
                var12 = var12 + 1;
                var9 = var13.length;
                if(var12 < var9) { _fun0111_ip = 713; continue _fun0111 }
case 131:
                var12 = var8.Object;
                var9 = var12.keys;
                var8 = var5.stream;
                var9 = var9.bind(var12)(var8);
                var8 = var9.length;
                var8 = var11 < var8;
                var11 = 0;
                if(!var8) { _fun0111_ip = 714; continue _fun0111 }
case 715:
                var14 = var9[var11];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var10, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var10, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot57;
                var12 = var13.internalBinaryWrite;
                var8 = var5.stream;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var11 = var11 + 1;
                var8 = var9.length;
                if(var11 < var8) { _fun0111_ip = 715; continue _fun0111 }
case 714:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0111_ip = 716; continue _fun0111 }
case 172:
                if(!(var6 == var3)) { _fun0111_ip = 717; continue _fun0111 }
case 718:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 717:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 716:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var19 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot58 = var19;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CommunitiesSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'disable_home_auto_nav', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.CommunitiesSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0112: for(var _fun0112_ip = 0; ; ) switch(_fun0112_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0112_ip = 11; continue _fun0112 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0113: for(var _fun0113_ip = 0; ; ) switch(_fun0113_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0113_ip = 13; continue _fun0113 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0113_ip = 249; continue _fun0113 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0113_ip = 250; continue _fun0113 }
case 232:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0113_ip = 251; continue _fun0113 }
case 214:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0113_ip = 252; continue _fun0113 }
case 147:
                var23 = var21;
                if(!(var10 === var21)) { _fun0113_ip = 243; continue _fun0113 }
case 165:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 243:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0113_ip = 252; continue _fun0113;
case 251:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 250:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.BoolValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.disableHomeAutoNav;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['disableHomeAutoNav'] = var2;
                var20 = var4;
                var19 = var3;
case 252:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0113_ip = 16; continue _fun0113 }
case 249:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0114: for(var _fun0114_ip = 0; ; ) switch(_fun0114_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.disableHomeAutoNav;
                if(!var3) { _fun0114_ip = 49; continue _fun0114 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.disableHomeAutoNav;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0114_ip = 253; continue _fun0114 }
case 254:
                var2 = 1;
                if(!(var2 == var4)) { _fun0114_ip = 182; continue _fun0114 }
case 255:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 253:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var18 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot59 = var18;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SoundboardSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'volume', 'kind': 'scalar', 'T': 2};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.SoundboardSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0115: for(var _fun0115_ip = 0; ; ) switch(_fun0115_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['volume'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0115_ip = 117; continue _fun0115 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 117:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0116: for(var _fun0116_ip = 0; ; ) switch(_fun0116_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0116_ip = 13; continue _fun0116 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0116_ip = 270; continue _fun0116 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0116_ip = 21; continue _fun0116 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0116_ip = 119; continue _fun0116 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0116_ip = 309; continue _fun0116 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0116_ip = 19; continue _fun0116 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0116_ip = 309; continue _fun0116;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.float;
                var2 = var2.bind(var17)();
                var1['volume'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0116_ip = 102; continue _fun0116 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0117: for(var _fun0117_ip = 0; ; ) switch(_fun0117_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.volume;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0117_ip = 111; continue _fun0117 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit32;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.float;
                var2 = var5.volume;
                var2 = var3.bind(var4)(var2);
case 111:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0117_ip = 698; continue _fun0117 }
case 645:
                var2 = 1;
                if(!(var2 == var4)) { _fun0117_ip = 236; continue _fun0117 }
case 719:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 236:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 698:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var17 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot60 = var17;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function CustomCallSound$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(2);
            var1 = {'no': 1, 'name': 'sound_id', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'guild_id', 'kind': 'scalar', 'T': 6};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.CustomCallSound'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0118: for(var _fun0118_ip = 0; ; ) switch(_fun0118_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'soundId': '0', 'guildId': '0'};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0118_ip = 100; continue _fun0118 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0119: for(var _fun0119_ip = 0; ; ) switch(_fun0119_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0119_ip = 13; continue _fun0119 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0119_ip = 285; continue _fun0119 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0119_ip = 593; continue _fun0119 }
case 104:
                if(!(var7 !== var26)) { _fun0119_ip = 105; continue _fun0119 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0119_ip = 106; continue _fun0119 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0119_ip = 720; continue _fun0119 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0119_ip = 109; continue _fun0119 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0119_ip = 720; continue _fun0119;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['guildId'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0119_ip = 720; continue _fun0119;
case 593:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['soundId'] = var2;
                var19 = var4;
                var18 = var3;
case 720:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0119_ip = 102; continue _fun0119 }
case 285:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0120: for(var _fun0120_ip = 0; ; ) switch(_fun0120_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = var5.soundId;
                var3 = '0';
                if(!(var3 !== var2)) { _fun0120_ip = 212; continue _fun0120 }
case 616:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 7;
                var4 = var4[var2];
                var2 = undefined;
                var2 = var7.bind(var2)(var4);
                var2 = var2.WireType;
                var4 = var2.Bit64;
                var2 = 1;
                var6 = var6.bind(var1)(var2, var4);
                var4 = var6.fixed64;
                var2 = var5.soundId;
                var2 = var4.bind(var6)(var2);
case 212:
                var2 = var5.guildId;
                if(!(var3 !== var2)) { _fun0120_ip = 110; continue _fun0120 }
case 310:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 2;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.guildId;
                var2 = var3.bind(var4)(var2);
case 110:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0120_ip = 217; continue _fun0120 }
case 182:
                var2 = 1;
                if(!(var2 == var4)) { _fun0120_ip = 152; continue _fun0120 }
case 19:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 152:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 217:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var16 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot61 = var16;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function BroadcastSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'allow_friends', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(4);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'allowed_guild_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'allowed_user_ids', 'kind': 'scalar', 'repeat': 1, 'T': 6};
            var6[2] = var1;
            var1 = {'no': 4, 'name': 'auto_broadcast', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[3] = var1;
            var1 = ['discord_protos.discord_users.v1.BroadcastSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0121: for(var _fun0121_ip = 0; ; ) switch(_fun0121_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = new Array(0);
                var1['allowedGuildIds'] = var2;
                var2 = new Array(0);
                var1['allowedUserIds'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0121_ip = 120; continue _fun0121 }
case 112:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 120:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0122: for(var _fun0122_ip = 0; ; ) switch(_fun0122_ip) {
case 0:
                var22 = arg1;
                var21 = arg3;
                var1 = arg4;
                var20 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0122_ip = 13; continue _fun0122 }
case 14:
                var2 = var20.create;
                var1 = var2.bind(var20)();
case 13:
                var3 = var22.pos;
                var2 = arg2;
                var19 = var3 + var2;
                var2 = var22.pos;
                var2 = var2 < var19;
                var18 = undefined;
                var16 = 9;
                var15 = 7;
                var14 = true;
                var13 = false;
                var12 = 'throw';
                var11 = 4;
                var10 = 3;
                var9 = 2;
                var8 = 1;
                var7 = 0;
                var6 = undefined;
                var5 = undefined;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0122_ip = 721; continue _fun0122 }
case 722:
                var2 = var22.tag;
                var23 = var2.bind(var22)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var18)(var23, var9);
                var33 = var2[var7];
                var27 = var2[var8];
                if(!(var8 !== var33)) { _fun0122_ip = 337; continue _fun0122 }
case 214:
                if(!(var9 !== var33)) { _fun0122_ip = 723; continue _fun0122 }
case 216:
                if(!(var10 !== var33)) { _fun0122_ip = 141; continue _fun0122 }
case 236:
                if(!(var11 !== var33)) { _fun0122_ip = 647; continue _fun0122 }
case 122:
                var28 = var21.readUnknownField;
                if(!(var12 !== var28)) { _fun0122_ip = 697; continue _fun0122 }
case 165:
                var2 = var22.skip;
                var2 = var2.bind(var22)(var27);
                var26 = var6;
                var25 = var5;
                var24 = var28;
                var23 = var2;
                if(!(var13 !== var28)) { _fun0122_ip = 543; continue _fun0122 }
case 596:
                var30 = var28;
                if(!(var14 === var28)) { _fun0122_ip = 308; continue _fun0122 }
case 253:
                var31 = _closure1_slot0;
                var29 = _closure1_slot1;
                var29 = var29[var15];
                var29 = var31.bind(var18)(var29);
                var29 = var29.UnknownFieldHandler;
                var30 = var29.onRead;
case 308:
                var38 = var20.typeName;
                var39 = undefined;
                var37 = var1;
                var36 = var33;
                var35 = var27;
                var34 = var2;
                var29 = var39[var30](var38, var37, var36, var35, var34, var33);
                var26 = var6;
                var25 = var5;
                var24 = var28;
                var23 = var2;
                _fun0122_ip = 543; continue _fun0122;
case 697:
                var2 = global;
                var28 = var2.globalThis;
                var29 = var28.Error;
                var34 = var20.typeName;
                var2 = var2.HermesInternal;
                var31 = var2.concat;
                var39 = 'Unknown field ';
                var37 = ' (wire type ';
                var35 = ') for ';
                var38 = var33;
                var36 = var27;
                var38 = var39[var31](var38, var37, var36, var35, var34, var33);
                var28 = var29.prototype;
                var28 = Object.create(var28, {constructor: {value: var29}});
                var39 = var28;
                var2 = new var39[var29](var38, var37);
                var2 = var2 instanceof Object ? var2 : var28;
                throw var2;
case 647:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var28.bind(var18)(var2);
                var30 = var2.BoolValue;
                var29 = var30.internalBinaryRead;
                var2 = var22.uint32;
                var37 = var2.bind(var22)();
                var35 = var1.autoBroadcast;
                var39 = var30;
                var38 = var22;
                var36 = var21;
                var2 = var39[var29](var38, var37, var36, var35, var34);
                var1['autoBroadcast'] = var2;
                var26 = var6;
                var25 = var5;
                var24 = var4;
                var23 = var3;
                _fun0122_ip = 543; continue _fun0122;
case 141:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var28.bind(var18)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var27 !== var2)) { _fun0122_ip = 724; continue _fun0122 }
case 160:
                var29 = var1.allowedUserIds;
                var28 = var29.push;
                var2 = var22.fixed64;
                var30 = var2.bind(var22)();
                var2 = var30.toString;
                var2 = var2.bind(var30)();
                var2 = var28.bind(var29)(var2);
                var26 = var6;
                var25 = var5;
                var24 = var4;
                var23 = var3;
                _fun0122_ip = 543; continue _fun0122;
case 724:
                var2 = var22.int32;
                var28 = var2.bind(var22)();
                var2 = var22.pos;
                var28 = var28 + var2;
                var2 = var22.pos;
                var26 = var6;
                var25 = var28;
                var24 = var4;
                var23 = var3;
                if(!(var2 < var28)) { _fun0122_ip = 543; continue _fun0122 }
case 602:
                var30 = var1.allowedUserIds;
                var29 = var30.push;
                var2 = var22.fixed64;
                var31 = var2.bind(var22)();
                var2 = var31.toString;
                var2 = var2.bind(var31)();
                var2 = var29.bind(var30)(var2);
                var2 = var22.pos;
                var26 = var6;
                var24 = var4;
                var23 = var3;
                var25 = var28;
                if(var2 < var25) { _fun0122_ip = 602; continue _fun0122 }
case 725:
                _fun0122_ip = 543; continue _fun0122;
case 723:
                var28 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var15];
                var2 = var28.bind(var18)(var2);
                var2 = var2.WireType;
                var2 = var2.LengthDelimited;
                if(!(var27 !== var2)) { _fun0122_ip = 726; continue _fun0122 }
case 727:
                var28 = var1.allowedGuildIds;
                var27 = var28.push;
                var2 = var22.fixed64;
                var29 = var2.bind(var22)();
                var2 = var29.toString;
                var2 = var2.bind(var29)();
                var2 = var27.bind(var28)(var2);
                var26 = var6;
                var25 = var5;
                var24 = var4;
                var23 = var3;
                _fun0122_ip = 543; continue _fun0122;
case 726:
                var2 = var22.int32;
                var27 = var2.bind(var22)();
                var2 = var22.pos;
                var27 = var27 + var2;
                var2 = var22.pos;
                var26 = var27;
                var25 = var5;
                var24 = var4;
                var23 = var3;
                if(!(var2 < var27)) { _fun0122_ip = 543; continue _fun0122 }
case 728:
                var29 = var1.allowedGuildIds;
                var28 = var29.push;
                var2 = var22.fixed64;
                var30 = var2.bind(var22)();
                var2 = var30.toString;
                var2 = var2.bind(var30)();
                var2 = var28.bind(var29)(var2);
                var2 = var22.pos;
                var25 = var5;
                var24 = var4;
                var23 = var3;
                var26 = var27;
                if(var2 < var26) { _fun0122_ip = 728; continue _fun0122 }
case 729:
                _fun0122_ip = 543; continue _fun0122;
case 337:
                var27 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var16];
                var2 = var27.bind(var18)(var2);
                var29 = var2.BoolValue;
                var28 = var29.internalBinaryRead;
                var2 = var22.uint32;
                var37 = var2.bind(var22)();
                var35 = var1.allowFriends;
                var39 = var29;
                var38 = var22;
                var36 = var21;
                var2 = var39[var28](var38, var37, var36, var35, var34);
                var1['allowFriends'] = var2;
                var26 = var6;
                var25 = var5;
                var24 = var4;
                var23 = var3;
case 543:
                var2 = var22.pos;
                var6 = var26;
                var5 = var25;
                var4 = var24;
                var3 = var23;
                if(var2 < var19) { _fun0122_ip = 722; continue _fun0122 }
case 721:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0123: for(var _fun0123_ip = 0; ; ) switch(_fun0123_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.allowFriends;
                if(!var3) { _fun0123_ip = 49; continue _fun0123 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.allowFriends;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.allowedGuildIds;
                var3 = var3.length;
                if(!var3) { _fun0123_ip = 646; continue _fun0123 }
case 730:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 2;
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.allowedGuildIds;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0123_ip = 731; continue _fun0123 }
case 115:
                var6 = var1.fixed64;
                var3 = var5.allowedGuildIds;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.allowedGuildIds;
                var3 = var3.length;
                if(var4 < var3) { _fun0123_ip = 115; continue _fun0123 }
case 731:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 646:
                var3 = var5.allowedUserIds;
                var3 = var3.length;
                if(!var3) { _fun0123_ip = 732; continue _fun0123 }
case 636:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.LengthDelimited;
                var3 = 3;
                var4 = var6.bind(var1)(var3, var4);
                var3 = var4.fork;
                var3 = var3.bind(var4)();
                var3 = var5.allowedUserIds;
                var3 = var3.length;
                var4 = 0;
                var3 = var4 < var3;
                if(!var3) { _fun0123_ip = 674; continue _fun0123 }
case 359:
                var6 = var1.fixed64;
                var3 = var5.allowedUserIds;
                var3 = var3[var4];
                var3 = var6.bind(var1)(var3);
                var4 = var4 + 1;
                var3 = var5.allowedUserIds;
                var3 = var3.length;
                if(var4 < var3) { _fun0123_ip = 359; continue _fun0123 }
case 674:
                var3 = var1.join;
                var3 = var3.bind(var1)();
case 732:
                var3 = var5.autoBroadcast;
                if(!var3) { _fun0123_ip = 56; continue _fun0123 }
case 161:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.autoBroadcast;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 4;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 56:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0123_ip = 401; continue _fun0123 }
case 733:
                var2 = 1;
                if(!(var2 == var4)) { _fun0123_ip = 603; continue _fun0123 }
case 668:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 603:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 401:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var15 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot62 = var15;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ClipsSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'allow_voice_recording', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ClipsSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0124: for(var _fun0124_ip = 0; ; ) switch(_fun0124_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0124_ip = 11; continue _fun0124 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0125: for(var _fun0125_ip = 0; ; ) switch(_fun0125_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0125_ip = 13; continue _fun0125 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0125_ip = 249; continue _fun0125 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var6];
                var26 = var2[var5];
                if(!(var5 !== var27)) { _fun0125_ip = 250; continue _fun0125 }
case 232:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0125_ip = 251; continue _fun0125 }
case 214:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0125_ip = 252; continue _fun0125 }
case 147:
                var23 = var21;
                if(!(var10 === var21)) { _fun0125_ip = 243; continue _fun0125 }
case 165:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 243:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0125_ip = 252; continue _fun0125;
case 251:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 250:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.BoolValue;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.allowVoiceRecording;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['allowVoiceRecording'] = var2;
                var20 = var4;
                var19 = var3;
case 252:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0125_ip = 16; continue _fun0125 }
case 249:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0126: for(var _fun0126_ip = 0; ; ) switch(_fun0126_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.allowVoiceRecording;
                if(!var3) { _fun0126_ip = 49; continue _fun0126 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.allowVoiceRecording;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0126_ip = 253; continue _fun0126 }
case 254:
                var2 = 1;
                if(!(var2 == var4)) { _fun0126_ip = 182; continue _fun0126 }
case 255:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 182:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 253:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var14 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot63 = var14;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function SafetySettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'safety_settings_preset', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot24;
                var1 = ['discord_protos.discord_users.v1.SafetySettingsPresetType'];
                var1[1] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'ignore_profile_speedbump_disabled', 'kind': 'scalar', 'T': 8};
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.SafetySettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0127: for(var _fun0127_ip = 0; ; ) switch(_fun0127_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {'safetySettingsPreset': 0, 'ignoreProfileSpeedbumpDisabled': false};
                var11 = false;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0127_ip = 100; continue _fun0127 }
case 4:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 100:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0128: for(var _fun0128_ip = 0; ; ) switch(_fun0128_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0128_ip = 13; continue _fun0128 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0128_ip = 101; continue _fun0128 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0128_ip = 103; continue _fun0128 }
case 104:
                if(!(var7 !== var26)) { _fun0128_ip = 105; continue _fun0128 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0128_ip = 106; continue _fun0128 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0128_ip = 22; continue _fun0128 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0128_ip = 109; continue _fun0128 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0128_ip = 22; continue _fun0128;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['ignoreProfileSpeedbumpDisabled'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0128_ip = 22; continue _fun0128;
case 103:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['safetySettingsPreset'] = var2;
                var19 = var4;
                var18 = var3;
case 22:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0128_ip = 102; continue _fun0128 }
case 101:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0129: for(var _fun0129_ip = 0; ; ) switch(_fun0129_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.safetySettingsPreset;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0129_ip = 111; continue _fun0129 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.safetySettingsPreset;
                var2 = var3.bind(var4)(var2);
case 111:
                var3 = var5.ignoreProfileSpeedbumpDisabled;
                var2 = false;
                if(!(var2 !== var3)) { _fun0129_ip = 110; continue _fun0129 }
case 112:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.ignoreProfileSpeedbumpDisabled;
                var3 = var4.bind(var6)(var3);
case 110:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0129_ip = 113; continue _fun0129 }
case 114:
                var2 = 1;
                if(!(var2 == var4)) { _fun0129_ip = 115; continue _fun0129 }
case 116:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 115:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 113:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var13 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot64 = var13;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ForLaterSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'current_tab', 'kind': 'enum'};
            var6 = function T() {
                var2 = _closure1_slot25;
                var1 = ['discord_protos.discord_users.v1.ForLaterTab'];
                var1[1] = var2;
                var2 = 'FOR_LATER_TAB_';
                var1[2] = var2;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ForLaterSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0130: for(var _fun0130_ip = 0; ; ) switch(_fun0130_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = 0;
                var1['currentTab'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0130_ip = 117; continue _fun0130 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 117:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0131: for(var _fun0131_ip = 0; ; ) switch(_fun0131_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0131_ip = 13; continue _fun0131 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0131_ip = 270; continue _fun0131 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0131_ip = 21; continue _fun0131 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0131_ip = 119; continue _fun0131 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0131_ip = 309; continue _fun0131 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0131_ip = 19; continue _fun0131 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0131_ip = 309; continue _fun0131;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.int32;
                var2 = var2.bind(var17)();
                var1['currentTab'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0131_ip = 102; continue _fun0131 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0132: for(var _fun0132_ip = 0; ; ) switch(_fun0132_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.currentTab;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0132_ip = 111; continue _fun0132 }
case 14:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Varint;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.int32;
                var2 = var5.currentTab;
                var2 = var3.bind(var4)(var2);
case 111:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0132_ip = 698; continue _fun0132 }
case 645:
                var2 = 1;
                if(!(var2 == var4)) { _fun0132_ip = 236; continue _fun0132 }
case 719:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 236:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 698:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var12 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot65 = var12;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ICYMISettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'feed_generated_at', 'kind': 'scalar', 'T': 6};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ICYMISettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0133: for(var _fun0133_ip = 0; ; ) switch(_fun0133_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = '0';
                var1['feedGeneratedAt'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0133_ip = 232; continue _fun0133 }
case 290:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 232:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0134: for(var _fun0134_ip = 0; ; ) switch(_fun0134_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0134_ip = 13; continue _fun0134 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0134_ip = 315; continue _fun0134 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0134_ip = 21; continue _fun0134 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0134_ip = 119; continue _fun0134 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0134_ip = 734; continue _fun0134 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0134_ip = 19; continue _fun0134 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0134_ip = 734; continue _fun0134;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.fixed64;
                var20 = var2.bind(var17)();
                var2 = var20.toString;
                var2 = var2.bind(var20)();
                var1['feedGeneratedAt'] = var2;
                var19 = var4;
                var18 = var3;
case 734:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0134_ip = 102; continue _fun0134 }
case 315:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0135: for(var _fun0135_ip = 0; ; ) switch(_fun0135_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.feedGeneratedAt;
                var2 = '0';
                if(!(var2 !== var3)) { _fun0135_ip = 212; continue _fun0135 }
case 616:
                var4 = var1.tag;
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.WireType;
                var3 = var2.Bit64;
                var2 = 1;
                var4 = var4.bind(var1)(var2, var3);
                var3 = var4.fixed64;
                var2 = var5.feedGeneratedAt;
                var2 = var3.bind(var4)(var2);
case 212:
                var2 = arg3;
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0135_ip = 735; continue _fun0135 }
case 736:
                var2 = 1;
                if(!(var2 == var4)) { _fun0135_ip = 737; continue _fun0135 }
case 738:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 737:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 735:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var11 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot66 = var11;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AllApplicationSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'app_settings', 'kind': 'map', 'K': 6};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot68;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.AllApplicationSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0136: for(var _fun0136_ip = 0; ; ) switch(_fun0136_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['appSettings'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0136_ip = 117; continue _fun0136 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 117:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0137: for(var _fun0137_ip = 0; ; ) switch(_fun0137_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0137_ip = 13; continue _fun0137 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0137_ip = 118; continue _fun0137 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0137_ip = 21; continue _fun0137 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0137_ip = 119; continue _fun0137 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0137_ip = 121; continue _fun0137 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0137_ip = 19; continue _fun0137 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0137_ip = 121; continue _fun0137;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.appSettings;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 121:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0137_ip = 102; continue _fun0137 }
case 118:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0138: for(var _fun0138_ip = 0; ; ) switch(_fun0138_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var3 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var8 = 0;
                var7 = undefined;
                var5 = undefined;
                var6 = undefined;
                var4 = undefined;
                if(!var3) { _fun0138_ip = 123; continue _fun0138 }
case 124:
                var3 = var13.tag;
                var14 = var3.bind(var13)();
                var3 = _closure1_slot2;
                var14 = var3.bind(var1)(var14, var10);
                var3 = var14[var8];
                var14 = var14[var9];
                if(!(var9 !== var3)) { _fun0138_ip = 125; continue _fun0138 }
case 126:
                if(!(var10 !== var3)) { _fun0138_ip = 127; continue _fun0138 }
case 112:
                var3 = global;
                var3 = var3.globalThis;
                var15 = var3.Error;
                var3 = var15.prototype;
                var14 = Object.create(var3, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.AllApplicationSettings.app_settings';
                var19 = var14;
                var3 = new var19[var15](var18, var17);
                var3 = var3 instanceof Object ? var3 : var14;
                throw var3;
case 127:
                var15 = _closure1_slot68;
                var14 = var15.internalBinaryRead;
                var3 = var13.uint32;
                var3 = var3.bind(var13)();
                var14 = var14.bind(var15)(var13, var3, var12);
                _fun0138_ip = 128; continue _fun0138;
case 125:
                var3 = var13.fixed64;
                var15 = var3.bind(var13)();
                var3 = var15.toString;
                var7 = var3.bind(var15)();
                var14 = var5;
case 128:
                var3 = var13.pos;
                var5 = var14;
                var6 = var7;
                var4 = var5;
                if(var3 < var11) { _fun0138_ip = 124; continue _fun0138 }
case 123:
                var5 = null;
                var7 = var5 != var6;
                var3 = '0';
                if(!var7) { _fun0138_ip = 106; continue _fun0138 }
case 50:
                var3 = var6;
case 106:
                if(!(var5 == var4)) { _fun0138_ip = 129; continue _fun0138 }
case 130:
                var5 = _closure1_slot68;
                var2 = var5.create;
                var4 = var2.bind(var5)();
case 129:
                var2 = arg1;
                var2[var3] = var4;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0139: for(var _fun0139_ip = 0; ; ) switch(_fun0139_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var2 = global;
                var6 = var2.Object;
                var4 = var6.keys;
                var2 = var5.appSettings;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0139_ip = 131; continue _fun0139 }
case 132:
                var14 = var11[var10];
                var15 = var1.tag;
                var13 = _closure1_slot0;
                var8 = _closure1_slot1;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.LengthDelimited;
                var15 = var15.bind(var1)(var6, var12);
                var12 = var15.fork;
                var16 = var12.bind(var15)();
                var15 = var16.tag;
                var12 = var8[var7];
                var12 = var13.bind(var4)(var12);
                var12 = var12.WireType;
                var12 = var12.Bit64;
                var15 = var15.bind(var16)(var6, var12);
                var12 = var15.fixed64;
                var12 = var12.bind(var15)(var14);
                var12 = var1.tag;
                var8 = var8[var7];
                var8 = var13.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var12 = var12.bind(var1)(var9, var8);
                var8 = var12.fork;
                var8 = var8.bind(var12)();
                var13 = _closure1_slot68;
                var12 = var13.internalBinaryWrite;
                var8 = var5.appSettings;
                var8 = var8[var14];
                var8 = var12.bind(var13)(var8, var1, var3);
                var8 = var1.join;
                var12 = var8.bind(var1)();
                var8 = var12.join;
                var8 = var8.bind(var12)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0139_ip = 132; continue _fun0139 }
case 131:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0139_ip = 133; continue _fun0139 }
case 134:
                if(!(var6 == var3)) { _fun0139_ip = 135; continue _fun0139 }
case 136:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 135:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 133:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var10 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot67 = var10;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'app_dm_settings', 'kind': 'message'};
            var6 = function T() {
                var1 = _closure1_slot69;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'app_sharing_settings', 'kind': 'message'};
            var7 = function T() {
                var1 = _closure1_slot70;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.ApplicationSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0140: for(var _fun0140_ip = 0; ; ) switch(_fun0140_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0140_ip = 11; continue _fun0140 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0141: for(var _fun0141_ip = 0; ; ) switch(_fun0141_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0141_ip = 13; continue _fun0141 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0141_ip = 710; continue _fun0141 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var5];
                var25 = var2[var6];
                if(!(var6 !== var26)) { _fun0141_ip = 226; continue _fun0141 }
case 104:
                if(!(var7 !== var26)) { _fun0141_ip = 105; continue _fun0141 }
case 49:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0141_ip = 106; continue _fun0141 }
case 107:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0141_ip = 739; continue _fun0141 }
case 108:
                var22 = var20;
                if(!(var10 === var20)) { _fun0141_ip = 109; continue _fun0141 }
case 110:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 109:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0141_ip = 739; continue _fun0141;
case 106:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 105:
                var22 = _closure1_slot70;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.appSharingSettings;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['appSharingSettings'] = var2;
                var19 = var4;
                var18 = var3;
                _fun0141_ip = 739; continue _fun0141;
case 226:
                var22 = _closure1_slot69;
                var21 = var22.internalBinaryRead;
                var2 = var17.uint32;
                var30 = var2.bind(var17)();
                var28 = var1.appDmSettings;
                var32 = var22;
                var31 = var17;
                var29 = var16;
                var2 = var32[var21](var31, var30, var29, var28, var27);
                var1['appDmSettings'] = var2;
                var19 = var4;
                var18 = var3;
case 739:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0141_ip = 102; continue _fun0141 }
case 710:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0142: for(var _fun0142_ip = 0; ; ) switch(_fun0142_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.appDmSettings;
                if(!var3) { _fun0142_ip = 740; continue _fun0142 }
case 14:
                var7 = _closure1_slot69;
                var6 = var7.internalBinaryWrite;
                var4 = var5.appDmSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 740:
                var3 = var5.appSharingSettings;
                if(!var3) { _fun0142_ip = 635; continue _fun0142 }
case 679:
                var7 = _closure1_slot70;
                var6 = var7.internalBinaryWrite;
                var4 = var5.appSharingSettings;
                var9 = var1.tag;
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 7;
                var8 = var8[var3];
                var3 = undefined;
                var3 = var10.bind(var3)(var8);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 635:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0142_ip = 741; continue _fun0142 }
case 152:
                var2 = 1;
                if(!(var2 == var4)) { _fun0142_ip = 697; continue _fun0142 }
case 742:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 697:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 741:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var9 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot68 = var9;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationDMSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 2, 'name': 'allow_mobile_push', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ApplicationDMSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0143: for(var _fun0143_ip = 0; ; ) switch(_fun0143_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['allowMobilePush'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0143_ip = 229; continue _fun0143 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0144: for(var _fun0144_ip = 0; ; ) switch(_fun0144_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0144_ip = 13; continue _fun0144 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0144_ip = 270; continue _fun0144 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var7 !== var26)) { _fun0144_ip = 21; continue _fun0144 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0144_ip = 119; continue _fun0144 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0144_ip = 309; continue _fun0144 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0144_ip = 19; continue _fun0144 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0144_ip = 309; continue _fun0144;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['allowMobilePush'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0144_ip = 102; continue _fun0144 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0145: for(var _fun0145_ip = 0; ; ) switch(_fun0145_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.allowMobilePush;
                var2 = false;
                if(!(var2 !== var3)) { _fun0145_ip = 111; continue _fun0145 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 2;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.allowMobilePush;
                var3 = var4.bind(var6)(var3);
case 111:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0145_ip = 273; continue _fun0145 }
case 310:
                var2 = 1;
                if(!(var2 == var4)) { _fun0145_ip = 278; continue _fun0145 }
case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 278:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 273:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var8 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot69 = var8;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function ApplicationSharingSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'disable_application_activity_sharing', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.ApplicationSharingSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0146: for(var _fun0146_ip = 0; ; ) switch(_fun0146_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['disableApplicationActivitySharing'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0146_ip = 229; continue _fun0146 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0147: for(var _fun0147_ip = 0; ; ) switch(_fun0147_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0147_ip = 13; continue _fun0147 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0147_ip = 270; continue _fun0147 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0147_ip = 21; continue _fun0147 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0147_ip = 119; continue _fun0147 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0147_ip = 309; continue _fun0147 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0147_ip = 19; continue _fun0147 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0147_ip = 309; continue _fun0147;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['disableApplicationActivitySharing'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0147_ip = 102; continue _fun0147 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0148: for(var _fun0148_ip = 0; ; ) switch(_fun0148_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.disableApplicationActivitySharing;
                var2 = false;
                if(!(var2 !== var3)) { _fun0148_ip = 111; continue _fun0148 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.disableApplicationActivitySharing;
                var3 = var4.bind(var6)(var3);
case 111:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0148_ip = 273; continue _fun0148 }
case 310:
                var2 = 1;
                if(!(var2 == var4)) { _fun0148_ip = 278; continue _fun0148 }
case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 278:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 273:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var7 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot70 = var7;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function AdsSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var6 = new Array(1);
            var1 = {'no': 1, 'name': 'always_deliver', 'kind': 'scalar', 'T': 8};
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.AdsSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0149: for(var _fun0149_ip = 0; ; ) switch(_fun0149_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var11 = false;
                var1['alwaysDeliver'] = var11;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0149_ip = 229; continue _fun0149 }
case 230:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 229:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0150: for(var _fun0150_ip = 0; ; ) switch(_fun0150_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0150_ip = 13; continue _fun0150 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0150_ip = 270; continue _fun0150 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0150_ip = 21; continue _fun0150 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0150_ip = 119; continue _fun0150 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0150_ip = 309; continue _fun0150 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0150_ip = 19; continue _fun0150 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0150_ip = 309; continue _fun0150;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var2 = var17.bool;
                var2 = var2.bind(var17)();
                var1['alwaysDeliver'] = var2;
                var19 = var4;
                var18 = var3;
case 309:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0150_ip = 102; continue _fun0150 }
case 270:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0151: for(var _fun0151_ip = 0; ; ) switch(_fun0151_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = var5.alwaysDeliver;
                var2 = false;
                if(!(var2 !== var3)) { _fun0151_ip = 111; continue _fun0151 }
case 14:
                var6 = var1.tag;
                var7 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 7;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var7.bind(var3)(var4);
                var3 = var3.WireType;
                var4 = var3.Varint;
                var3 = 1;
                var6 = var6.bind(var1)(var3, var4);
                var4 = var6.bool;
                var3 = var5.alwaysDeliver;
                var3 = var4.bind(var6)(var3);
case 111:
                var3 = arg3;
                var4 = var3.writeUnknownFields;
                if(!(var2 !== var4)) { _fun0151_ip = 273; continue _fun0151 }
case 310:
                var2 = 1;
                if(!(var2 == var4)) { _fun0151_ip = 278; continue _fun0151 }
case 311:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 278:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 273:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var6 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot71 = var6;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var5 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function InAppFeedbackState$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'last_impression_time', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(2);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'opt_out_expiry_time', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var7;
            var6[1] = var1;
            var1 = ['discord_protos.discord_users.v1.InAppFeedbackState'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0152: for(var _fun0152_ip = 0; ; ) switch(_fun0152_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0152_ip = 11; continue _fun0152 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0153: for(var _fun0153_ip = 0; ; ) switch(_fun0153_ip) {
case 0:
                var18 = arg1;
                var17 = arg3;
                var1 = arg4;
                var16 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0153_ip = 13; continue _fun0153 }
case 14:
                var2 = var16.create;
                var1 = var2.bind(var16)();
case 13:
                var3 = var18.pos;
                var2 = arg2;
                var15 = var3 + var2;
                var2 = var18.pos;
                var2 = var2 < var15;
                var14 = undefined;
                var12 = 9;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0153_ip = 464; continue _fun0153 }
case 16:
                var2 = var18.tag;
                var19 = var2.bind(var18)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var14)(var19, var7);
                var27 = var2[var5];
                var26 = var2[var6];
                if(!(var6 !== var27)) { _fun0153_ip = 271; continue _fun0153 }
case 232:
                if(!(var7 !== var27)) { _fun0153_ip = 626; continue _fun0153 }
case 120:
                var21 = var17.readUnknownField;
                if(!(var8 !== var21)) { _fun0153_ip = 627; continue _fun0153 }
case 216:
                var2 = var18.skip;
                var2 = var2.bind(var18)(var26);
                var20 = var21;
                var19 = var2;
                if(!(var9 !== var21)) { _fun0153_ip = 628; continue _fun0153 }
case 165:
                var23 = var21;
                if(!(var10 === var21)) { _fun0153_ip = 629; continue _fun0153 }
case 238:
                var24 = _closure1_slot0;
                var22 = _closure1_slot1;
                var22 = var22[var11];
                var22 = var24.bind(var14)(var22);
                var22 = var22.UnknownFieldHandler;
                var23 = var22.onRead;
case 629:
                var32 = var16.typeName;
                var33 = undefined;
                var31 = var1;
                var30 = var27;
                var29 = var26;
                var28 = var2;
                var22 = var33[var23](var32, var31, var30, var29, var28, var27);
                var20 = var21;
                var19 = var2;
                _fun0153_ip = 628; continue _fun0153;
case 627:
                var2 = global;
                var21 = var2.globalThis;
                var22 = var21.Error;
                var28 = var16.typeName;
                var2 = var2.HermesInternal;
                var24 = var2.concat;
                var33 = 'Unknown field ';
                var31 = ' (wire type ';
                var29 = ') for ';
                var32 = var27;
                var30 = var26;
                var32 = var33[var24](var32, var31, var30, var29, var28, var27);
                var21 = var22.prototype;
                var21 = Object.create(var21, {constructor: {value: var22}});
                var33 = var21;
                var2 = new var33[var22](var32, var31);
                var2 = var2 instanceof Object ? var2 : var21;
                throw var2;
case 626:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt64Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.optOutExpiryTime;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['optOutExpiryTime'] = var2;
                var20 = var4;
                var19 = var3;
                _fun0153_ip = 628; continue _fun0153;
case 271:
                var21 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var12];
                var2 = var21.bind(var14)(var2);
                var23 = var2.UInt64Value;
                var22 = var23.internalBinaryRead;
                var2 = var18.uint32;
                var31 = var2.bind(var18)();
                var29 = var1.lastImpressionTime;
                var33 = var23;
                var32 = var18;
                var30 = var17;
                var2 = var33[var22](var32, var31, var30, var29, var28);
                var1['lastImpressionTime'] = var2;
                var20 = var4;
                var19 = var3;
case 628:
                var2 = var18.pos;
                var4 = var20;
                var3 = var19;
                if(var2 < var15) { _fun0153_ip = 16; continue _fun0153 }
case 464:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0154: for(var _fun0154_ip = 0; ; ) switch(_fun0154_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.lastImpressionTime;
                if(!var3) { _fun0154_ip = 49; continue _fun0154 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.lastImpressionTime;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.optOutExpiryTime;
                if(!var3) { _fun0154_ip = 113; continue _fun0154 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.optOutExpiryTime;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0154_ip = 630; continue _fun0154 }
case 631:
                var2 = 1;
                if(!(var2 == var4)) { _fun0154_ip = 632; continue _fun0154 }
case 148:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 632:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 630:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = var4.prototype;
    var5 = Object.create(var5, {constructor: {value: var4}});
    var83 = var5;
    var4 = new var83[var4](var82);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot72 = var5;
    var4 = var77[var2];
    var4 = var76.bind(var1)(var4);
    var79 = var4.MessageType;
    var4 = function(arg1) {
        var4 = function DefaultReactionEmoji$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'emoji_id', 'kind': 'message'};
            var6 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.UInt64Value;
                return var1;
            };
            var1['T'] = var6;
            var6 = new Array(3);
            var6[0] = var1;
            var1 = {'no': 2, 'name': 'emoji_name', 'kind': 'message'};
            var8 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.StringValue;
                return var1;
            };
            var1['T'] = var8;
            var6[1] = var1;
            var1 = {'no': 3, 'name': 'animated', 'kind': 'message'};
            var7 = function T() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 9;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var1 = var1.BoolValue;
                return var1;
            };
            var1['T'] = var7;
            var6[2] = var1;
            var1 = ['discord_protos.discord_users.v1.DefaultReactionEmoji'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0155: for(var _fun0155_ip = 0; ; ) switch(_fun0155_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0155_ip = 11; continue _fun0155 }
case 12:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 11:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(3);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0156: for(var _fun0156_ip = 0; ; ) switch(_fun0156_ip) {
case 0:
                var19 = arg1;
                var18 = arg3;
                var1 = arg4;
                var17 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0156_ip = 13; continue _fun0156 }
case 14:
                var2 = var17.create;
                var1 = var2.bind(var17)();
case 13:
                var3 = var19.pos;
                var2 = arg2;
                var16 = var3 + var2;
                var2 = var19.pos;
                var2 = var2 < var16;
                var15 = undefined;
                var13 = 9;
                var12 = 7;
                var11 = true;
                var10 = false;
                var9 = 'throw';
                var8 = 3;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0156_ip = 355; continue _fun0156 }
case 212:
                var2 = var19.tag;
                var20 = var2.bind(var19)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var15)(var20, var7);
                var28 = var2[var5];
                var27 = var2[var6];
                if(!(var6 !== var28)) { _fun0156_ip = 356; continue _fun0156 }
case 213:
                if(!(var7 !== var28)) { _fun0156_ip = 357; continue _fun0156 }
case 214:
                if(!(var8 !== var28)) { _fun0156_ip = 215; continue _fun0156 }
case 216:
                var22 = var18.readUnknownField;
                if(!(var9 !== var22)) { _fun0156_ip = 217; continue _fun0156 }
case 145:
                var2 = var19.skip;
                var2 = var2.bind(var19)(var27);
                var21 = var22;
                var20 = var2;
                if(!(var10 !== var22)) { _fun0156_ip = 173; continue _fun0156 }
case 219:
                var24 = var22;
                if(!(var11 === var22)) { _fun0156_ip = 220; continue _fun0156 }
case 114:
                var25 = _closure1_slot0;
                var23 = _closure1_slot1;
                var23 = var23[var12];
                var23 = var25.bind(var15)(var23);
                var23 = var23.UnknownFieldHandler;
                var24 = var23.onRead;
case 220:
                var33 = var17.typeName;
                var34 = undefined;
                var32 = var1;
                var31 = var28;
                var30 = var27;
                var29 = var2;
                var23 = var34[var24](var33, var32, var31, var30, var29, var28);
                var21 = var22;
                var20 = var2;
                _fun0156_ip = 173; continue _fun0156;
case 217:
                var2 = global;
                var22 = var2.globalThis;
                var23 = var22.Error;
                var29 = var17.typeName;
                var2 = var2.HermesInternal;
                var25 = var2.concat;
                var34 = 'Unknown field ';
                var32 = ' (wire type ';
                var30 = ') for ';
                var33 = var28;
                var31 = var27;
                var33 = var34[var25](var33, var32, var31, var30, var29, var28);
                var22 = var23.prototype;
                var22 = Object.create(var22, {constructor: {value: var23}});
                var34 = var22;
                var2 = new var34[var23](var33, var32);
                var2 = var2 instanceof Object ? var2 : var22;
                throw var2;
case 215:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.BoolValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.animated;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['animated'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0156_ip = 173; continue _fun0156;
case 357:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.StringValue;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.emojiName;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['emojiName'] = var2;
                var21 = var4;
                var20 = var3;
                _fun0156_ip = 173; continue _fun0156;
case 356:
                var22 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var13];
                var2 = var22.bind(var15)(var2);
                var24 = var2.UInt64Value;
                var23 = var24.internalBinaryRead;
                var2 = var19.uint32;
                var32 = var2.bind(var19)();
                var30 = var1.emojiId;
                var34 = var24;
                var33 = var19;
                var31 = var18;
                var2 = var34[var23](var33, var32, var31, var30, var29);
                var1['emojiId'] = var2;
                var21 = var4;
                var20 = var3;
case 173:
                var2 = var19.pos;
                var4 = var21;
                var3 = var20;
                if(var2 < var16) { _fun0156_ip = 212; continue _fun0156 }
case 355:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0157: for(var _fun0157_ip = 0; ; ) switch(_fun0157_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var2 = arg3;
                var3 = var5.emojiId;
                if(!var3) { _fun0157_ip = 49; continue _fun0157 }
case 14:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.UInt64Value;
                var6 = var7.internalBinaryWrite;
                var4 = var5.emojiId;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 1;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 49:
                var3 = var5.emojiName;
                if(!var3) { _fun0157_ip = 113; continue _fun0157 }
case 51:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.StringValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.emojiName;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 2;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 113:
                var3 = var5.animated;
                if(!var3) { _fun0157_ip = 358; continue _fun0157 }
case 154:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var3 = 9;
                var3 = var11[var3];
                var8 = undefined;
                var3 = var10.bind(var8)(var3);
                var7 = var3.BoolValue;
                var6 = var7.internalBinaryWrite;
                var4 = var5.animated;
                var9 = var1.tag;
                var3 = 7;
                var3 = var11[var3];
                var3 = var10.bind(var8)(var3);
                var3 = var3.WireType;
                var8 = var3.LengthDelimited;
                var3 = 3;
                var8 = var9.bind(var1)(var3, var8);
                var3 = var8.fork;
                var3 = var3.bind(var8)();
                var4 = var6.bind(var7)(var4, var3, var2);
                var3 = var4.join;
                var3 = var3.bind(var4)();
case 358:
                var4 = var2.writeUnknownFields;
                var2 = false;
                if(!(var2 !== var4)) { _fun0157_ip = 54; continue _fun0157 }
case 359:
                var2 = 1;
                if(!(var2 == var4)) { _fun0157_ip = 360; continue _fun0157 }
case 252:
                var6 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 7;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var6.bind(var2)(var3);
                var2 = var2.UnknownFieldHandler;
                var4 = var2.onWrite;
case 360:
                var2 = this;
                var3 = var2.typeName;
                var2 = undefined;
                var2 = var4.bind(var2)(var3, var5, var1);
case 54:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[2] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var79);
    var79 = var4.prototype;
    var79 = Object.create(var79, {constructor: {value: var4}});
    var83 = var79;
    var4 = new var83[var4](var82);
    var4 = var4 instanceof Object ? var4 : var79;
    var _closure1_slot73 = var4;
    var2 = var77[var2];
    var2 = var76.bind(var1)(var2);
    var79 = var2.MessageType;
    var2 = function(arg1) {
        var4 = function InAppFeedbackSettings$Type() {
            var5 = this;
            var2 = _closure1_slot3;
            var4 = _closure2_slot0;
            var3 = undefined;
            var2 = var2.bind(var3)(var5, var4);
            var2 = _closure1_slot75;
            var1 = {'no': 1, 'name': 'in_app_feedback_states', 'kind': 'map', 'K': 5};
            var6 = {};
            var7 = 'message';
            var6['kind'] = var7;
            var7 = function T() {
                var1 = _closure1_slot72;
                return var1;
            };
            var6['T'] = var7;
            var1['V'] = var6;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = ['discord_protos.discord_users.v1.InAppFeedbackSettings'];
            var1[1] = var6;
            var1 = var2.bind(var3)(var5, var4, var1);
            return var1;
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'create';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0158: for(var _fun0158_ip = 0; ; ) switch(_fun0158_ip) {
case 0:
                var5 = arg1;
                var4 = this;
                var1 = {};
                var2 = {};
                var1['inAppFeedbackStates'] = var2;
                var2 = global;
                var2 = var2.globalThis;
                var10 = var2.Object;
                var9 = var10.defineProperty;
                var8 = _closure1_slot0;
                var3 = _closure1_slot1;
                var7 = 7;
                var3 = var3[var7];
                var6 = undefined;
                var3 = var8.bind(var6)(var3);
                var8 = var3.MESSAGE_TYPE;
                var3 = {};
                var11 = false;
                var3['enumerable'] = var11;
                var3['value'] = var4;
                var3 = var9.bind(var10)(var1, var8, var3);
                if(!(var6 !== var5)) { _fun0158_ip = 117; continue _fun0158 }
case 16:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var3 = var3.bind(var6)(var2);
                var2 = var3.reflectionMergePartial;
                var2 = var2.bind(var3)(var4, var1, var5);
case 117:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(4);
        var1[0] = var5;
        var5 = {};
        var7 = 'internalBinaryRead';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3, arg4) {
            _fun0159: for(var _fun0159_ip = 0; ; ) switch(_fun0159_ip) {
case 0:
                var17 = arg1;
                var16 = arg3;
                var1 = arg4;
                var15 = this;
                var2 = null;
                if(!(var2 == var1)) { _fun0159_ip = 13; continue _fun0159 }
case 14:
                var2 = var15.create;
                var1 = var2.bind(var15)();
case 13:
                var3 = var17.pos;
                var2 = arg2;
                var14 = var3 + var2;
                var2 = var17.pos;
                var2 = var2 < var14;
                var13 = undefined;
                var11 = 7;
                var10 = true;
                var9 = false;
                var8 = 'throw';
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = undefined;
                var3 = undefined;
                if(!var2) { _fun0159_ip = 118; continue _fun0159 }
case 102:
                var2 = var17.tag;
                var18 = var2.bind(var17)();
                var2 = _closure1_slot2;
                var2 = var2.bind(var13)(var18, var7);
                var26 = var2[var6];
                var25 = var2[var5];
                if(!(var5 !== var26)) { _fun0159_ip = 21; continue _fun0159 }
case 104:
                var20 = var16.readUnknownField;
                if(!(var8 !== var20)) { _fun0159_ip = 119; continue _fun0159 }
case 120:
                var2 = var17.skip;
                var2 = var2.bind(var17)(var25);
                var19 = var20;
                var18 = var2;
                if(!(var9 !== var20)) { _fun0159_ip = 121; continue _fun0159 }
case 122:
                var22 = var20;
                if(!(var10 === var20)) { _fun0159_ip = 19; continue _fun0159 }
case 108:
                var23 = _closure1_slot0;
                var21 = _closure1_slot1;
                var21 = var21[var11];
                var21 = var23.bind(var13)(var21);
                var21 = var21.UnknownFieldHandler;
                var22 = var21.onRead;
case 19:
                var31 = var15.typeName;
                var32 = undefined;
                var30 = var1;
                var29 = var26;
                var28 = var25;
                var27 = var2;
                var21 = var32[var22](var31, var30, var29, var28, var27, var26);
                var19 = var20;
                var18 = var2;
                _fun0159_ip = 121; continue _fun0159;
case 119:
                var2 = global;
                var20 = var2.globalThis;
                var21 = var20.Error;
                var27 = var15.typeName;
                var2 = var2.HermesInternal;
                var23 = var2.concat;
                var32 = 'Unknown field ';
                var30 = ' (wire type ';
                var28 = ') for ';
                var31 = var26;
                var29 = var25;
                var31 = var32[var23](var31, var30, var29, var28, var27, var26);
                var20 = var21.prototype;
                var20 = Object.create(var20, {constructor: {value: var21}});
                var32 = var20;
                var2 = new var32[var21](var31, var30);
                var2 = var2 instanceof Object ? var2 : var20;
                throw var2;
case 21:
                var20 = var15.binaryReadMap1;
                var2 = var1.inAppFeedbackStates;
                var2 = var20.bind(var15)(var2, var17, var16);
                var19 = var4;
                var18 = var3;
case 121:
                var2 = var17.pos;
                var4 = var19;
                var3 = var18;
                if(var2 < var14) { _fun0159_ip = 102; continue _fun0159 }
case 118:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'binaryReadMap1';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0160: for(var _fun0160_ip = 0; ; ) switch(_fun0160_ip) {
case 0:
                var13 = arg2;
                var12 = arg3;
                var1 = var13.uint32;
                var2 = var1.bind(var13)();
                var1 = var13.pos;
                var11 = var1 + var2;
                var1 = var13.pos;
                var5 = var1 < var11;
                var1 = undefined;
                var10 = 2;
                var9 = 1;
                var4 = 0;
                var8 = undefined;
                var7 = undefined;
                var6 = undefined;
                var3 = undefined;
                if(!var5) { _fun0160_ip = 181; continue _fun0160 }
case 124:
                var5 = var13.tag;
                var14 = var5.bind(var13)();
                var5 = _closure1_slot2;
                var14 = var5.bind(var1)(var14, var10);
                var5 = var14[var4];
                var14 = var14[var9];
                if(!(var9 !== var5)) { _fun0160_ip = 125; continue _fun0160 }
case 126:
                if(!(var10 !== var5)) { _fun0160_ip = 127; continue _fun0160 }
case 112:
                var5 = global;
                var5 = var5.globalThis;
                var15 = var5.Error;
                var5 = var15.prototype;
                var14 = Object.create(var5, {constructor: {value: var15}});
                var18 = 'unknown map entry field for field discord_protos.discord_users.v1.InAppFeedbackSettings.in_app_feedback_states';
                var19 = var14;
                var5 = new var19[var15](var18, var17);
                var5 = var5 instanceof Object ? var5 : var14;
                throw var5;
case 127:
                var15 = _closure1_slot72;
                var14 = var15.internalBinaryRead;
                var5 = var13.uint32;
                var5 = var5.bind(var13)();
                var14 = var14.bind(var15)(var13, var5, var12);
                _fun0160_ip = 182; continue _fun0160;
case 125:
                var5 = var13.int32;
                var8 = var5.bind(var13)();
                var14 = var7;
case 182:
                var5 = var13.pos;
                var7 = var14;
                var6 = var8;
                var3 = var7;
                if(var5 < var11) { _fun0160_ip = 124; continue _fun0160 }
case 181:
                var5 = null;
                var7 = var5 != var6;
                var4 = 0;
                if(!var7) { _fun0160_ip = 183; continue _fun0160 }
case 184:
                var4 = var6;
case 183:
                if(!(var5 == var3)) { _fun0160_ip = 130; continue _fun0160 }
case 185:
                var5 = _closure1_slot72;
                var2 = var5.create;
                var3 = var2.bind(var5)();
case 130:
                var2 = arg1;
                var2[var4] = var3;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'internalBinaryWrite';
        var5['key'] = var7;
        var6 = function value(arg1, arg2, arg3) {
            _fun0161: for(var _fun0161_ip = 0; ; ) switch(_fun0161_ip) {
case 0:
                var5 = arg1;
                var1 = arg2;
                var3 = arg3;
                var12 = global;
                var6 = var12.Object;
                var4 = var6.keys;
                var2 = var5.inAppFeedbackStates;
                var11 = var4.bind(var6)(var2);
                var2 = var11.length;
                var10 = 0;
                var8 = var10 < var2;
                var7 = 7;
                var4 = undefined;
                var6 = 1;
                var9 = 2;
                if(!var8) { _fun0161_ip = 743; continue _fun0161 }
case 132:
                var15 = var11[var10];
                var16 = var1.tag;
                var14 = _closure1_slot0;
                var8 = _closure1_slot1;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.LengthDelimited;
                var16 = var16.bind(var1)(var6, var13);
                var13 = var16.fork;
                var17 = var13.bind(var16)();
                var16 = var17.tag;
                var13 = var8[var7];
                var13 = var14.bind(var4)(var13);
                var13 = var13.WireType;
                var13 = var13.Varint;
                var17 = var16.bind(var17)(var6, var13);
                var16 = var17.int32;
                var13 = var12.parseInt;
                var13 = var13.bind(var4)(var15);
                var13 = var16.bind(var17)(var13);
                var13 = var1.tag;
                var8 = var8[var7];
                var8 = var14.bind(var4)(var8);
                var8 = var8.WireType;
                var8 = var8.LengthDelimited;
                var13 = var13.bind(var1)(var9, var8);
                var8 = var13.fork;
                var8 = var8.bind(var13)();
                var14 = _closure1_slot72;
                var13 = var14.internalBinaryWrite;
                var8 = var5.inAppFeedbackStates;
                var8 = var8[var15];
                var8 = var13.bind(var14)(var8, var1, var3);
                var8 = var1.join;
                var13 = var8.bind(var1)();
                var8 = var13.join;
                var8 = var8.bind(var13)();
                var10 = var10 + 1;
                var8 = var11.length;
                if(var10 < var8) { _fun0161_ip = 132; continue _fun0161 }
case 743:
                var3 = var3.writeUnknownFields;
                var8 = false;
                if(!(var8 !== var3)) { _fun0161_ip = 744; continue _fun0161 }
case 745:
                if(!(var6 == var3)) { _fun0161_ip = 351; continue _fun0161 }
case 746:
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var6.bind(var4)(var2);
                var2 = var2.UnknownFieldHandler;
                var3 = var2.onWrite;
case 351:
                var2 = this;
                var2 = var2.typeName;
                var2 = var3.bind(var4)(var2, var5, var1);
case 744:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[3] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var79);
    var79 = var2.prototype;
    var79 = Object.create(var79, {constructor: {value: var2}});
    var83 = var79;
    var2 = new var83[var2](var82);
    var2 = var2 instanceof Object ? var2 : var79;
    var _closure1_slot74 = var2;
    var75 = var77[var75];
    var77 = var76.bind(var1)(var75);
    var76 = var77.fileFinishedImporting;
    var75 = '../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx';
    var75 = var76.bind(var77)(var75);
    var3['InboxTab'] = var74;
    var3['HubProgressStep'] = var73;
    var3['GuildOnboardingProgress'] = var72;
    var3['ExplicitContentRedaction'] = var71;
    var3['DmSpamFilterV2'] = var70;
    var3['ReactionNotificationType'] = var69;
    var3['GameActivityNotificationType'] = var68;
    var3['CustomStatusPushNotificationType'] = var67;
    var3['GuildActivityStatusRestrictionDefault'] = var66;
    var3['GuildActivityStatusRestrictionDefaultV2'] = var65;
    var3['GuildsLeaderboardOptOutDefault'] = var64;
    var3['SlayerSDKReceiveInGameDMs'] = var63;
    var3['UIDensity'] = var62;
    var3['Theme'] = var61;
    var3['BackgroundGradientPresetId'] = var60;
    var3['TimestampHourCycle'] = var59;
    var3['LaunchPadMode'] = var58;
    var3['SwipeRightToLeftMode'] = var57;
    var3['FavoriteChannelType'] = var56;
    var3['SafetySettingsPresetType'] = var55;
    var3['ForLaterTab'] = var54;
    var3['InAppFeedbackType'] = var53;
    var3['PreloadedUserSettings'] = var52;
    var3['InboxSettings'] = var51;
    var3['AllGuildSettings'] = var50;
    var3['GuildDismissibleContentState'] = var49;
    var3['GuildSettings'] = var48;
    var3['ChannelIconEmoji'] = var47;
    var3['ChannelSettings'] = var46;
    var3['CustomNotificationSoundConfig'] = var45;
    var3['RecurringDismissibleContentState'] = var44;
    var3['UserContentSettings'] = var43;
    var3['VideoFilterAsset'] = var42;
    var3['VideoFilterBackgroundBlur'] = var41;
    var3['VoiceAndVideoSettings'] = var40;
    var3['ExplicitContentSettings'] = var39;
    var3['GoreContentSettings'] = var38;
    var3['KeywordFilterSettings'] = var37;
    var3['TextAndImagesSettings'] = var36;
    var3['NotificationSettings'] = var35;
    var3['PrivacySettings'] = var34;
    var3['DebugSettings'] = var33;
    var3['GameLibrarySettings'] = var32;
    var3['StatusSettings'] = var31;
    var3['CustomStatus'] = var30;
    var3['LocalizationSettings'] = var29;
    var3['ChannelListSettings'] = var28;
    var3['AppearanceSettings'] = var27;
    var3['CustomUserThemeSettings'] = var26;
    var3['ClientThemeSettings'] = var25;
    var3['GuildFolders'] = var24;
    var3['GuildFolder'] = var23;
    var3['Favorites'] = var22;
    var3['FavoriteChannel'] = var21;
    var3['AudioContextSetting'] = var20;
    var3['AudioSettings'] = var19;
    var3['CommunitiesSettings'] = var18;
    var3['SoundboardSettings'] = var17;
    var3['CustomCallSound'] = var16;
    var3['BroadcastSettings'] = var15;
    var3['ClipsSettings'] = var14;
    var3['SafetySettings'] = var13;
    var3['ForLaterSettings'] = var12;
    var3['ICYMISettings'] = var11;
    var3['AllApplicationSettings'] = var10;
    var3['ApplicationSettings'] = var9;
    var3['ApplicationDMSettings'] = var8;
    var3['ApplicationSharingSettings'] = var7;
    var3['AdsSettings'] = var6;
    var3['InAppFeedbackState'] = var5;
    var3['DefaultReactionEmoji'] = var4;
    var3['InAppFeedbackSettings'] = var2;
    return var1;
})();