// app/utils/AnalyticsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var14 = require;
        var19 = metroImportDefault;
        var4 = metroImportAll;
        var3 = exports;
        var5 = dependencyMap;
        var _closure1_slot0 = var14;
        var _closure1_slot1 = var19;
        var _closure1_slot2 = var4;
        var _closure1_slot3 = var5;
        var8 = function expandLocation(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var2 = 'string';
                var1 = typeof var3;
                if(!(var2 !== var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var1 = {};
                var2 = var3.page;
                var1['location'] = var2;
                var2 = var3.page;
                var1['location_page'] = var2;
                var2 = var3.section;
                var1['location_section'] = var2;
                var2 = var3.object;
                var1['location_object'] = var2;
                var2 = var3.objectType;
                var1['location_object_type'] = var2;
                _fun0002_ip = 4; continue _fun0002;
case 2:
                var2 = {};
                var2['location'] = var3;
                var1 = var2;
case 4:
                return var1;
            }
        };
        var _closure1_slot23 = var8;
        var1 = function expandSource(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = arg1;
                var2 = 'string';
                var1 = typeof var3;
                if(!(var2 !== var1)) { _fun0003_ip = 5; continue _fun0003 }
case 3:
                var1 = {};
                var2 = var3.page;
                var1['source_page'] = var2;
                var2 = var3.section;
                var1['source_section'] = var2;
                var2 = var3.object;
                var1['source_object'] = var2;
                var2 = var3.objectType;
                var1['source_object_type'] = var2;
                var2 = var3.promotionId;
                var1['source_promotion_id'] = var2;
                _fun0003_ip = 6; continue _fun0003;
case 5:
                var2 = {};
                var2['source'] = var3;
                var1 = var2;
case 6:
                return var1;
            }
        };
        var _closure1_slot24 = var1;
        var7 = function expandEventProperties(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var8 = arg1;
                var6 = null;
                if(!(var6 == var8)) { _fun0004_ip = 7; continue _fun0004 }
case 8:
                var8 = {};
case 7:
                var _closure2_slot0 = var8;
                var1 = var8.location;
                var9 = var8;
                if(!(var6 != var1)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var5 = var8.location;
                var7 = _closure1_slot6;
                var1 = _closure1_slot4;
                var4 = undefined;
                var14 = var7.bind(var4)(var8, var1);
                var1 = {};
                var15 = var1;
                var7 = copyDataProperties(var15, var14);
                var3 = _closure1_slot23;
                var14 = var3.bind(var4)(var5);
                var15 = var1;
                var3 = copyDataProperties(var15, var14);
                _closure2_slot0 = var1;
                var9 = var1;
case 9:
                var3 = var9.source;
                var1 = var9;
                if(!(var6 != var3)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var7 = var9.source;
                var8 = _closure1_slot6;
                var3 = _closure1_slot5;
                var5 = undefined;
                var14 = var8.bind(var5)(var9, var3);
                var3 = {};
                var15 = var3;
                var8 = copyDataProperties(var15, var14);
                var4 = _closure1_slot24;
                var14 = var4.bind(var5)(var7);
                var15 = var3;
                var4 = copyDataProperties(var15, var14);
                _closure2_slot0 = var3;
                var1 = var3;
case 11:
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var5 = 11;
                var4 = var9[var5];
                var7 = undefined;
                var10 = var8.bind(var7)(var4);
                var4 = var10.getCurrentCPUUsagePercent;
                var4 = var4.bind(var10)();
                var1['client_performance_cpu'] = var4;
                var4 = var9[var5];
                var10 = var8.bind(var7)(var4);
                var4 = var10.getCurrentMemoryUsageKB;
                var4 = var4.bind(var10)();
                var1['client_performance_memory'] = var4;
                var4 = var9[var5];
                var10 = var8.bind(var7)(var4);
                var4 = var10.getCPUCoreCount;
                var4 = var4.bind(var10)();
                var1['cpu_core_count'] = var4;
                var4 = _closure1_slot18;
                var4 = var4.bind(var7)();
                var1['accessibility_features'] = var4;
                var10 = _closure1_slot0;
                var4 = 12;
                var4 = var9[var4];
                var4 = var10.bind(var7)(var4);
                var4 = var4.intl;
                var4 = var4.currentLocale;
                var1['rendered_locale'] = var4;
                var4 = global;
                var12 = var4.Math;
                var11 = var12.floor;
                var13 = var4.performance;
                var10 = var13.now;
                var13 = var10.bind(var13)();
                var10 = _closure1_slot15;
                var13 = var13 - var10;
                var10 = 1000;
                var10 = var13 / var10;
                var10 = var11.bind(var12)(var10);
                var1['uptime_app'] = var10;
                var5 = var9[var5];
                var7 = var8.bind(var7)(var5);
                var5 = var7.getProcessUptime;
                var7 = var5.bind(var7)();
                if(!(var6 != var7)) { _fun0004_ip = 13; continue _fun0004 }
case 14:
                var5 = var4.Math;
                var4 = var5.floor;
                var4 = var4.bind(var5)(var7);
                var1['uptime_process_renderer'] = var4;
case 13:
                var4 = _closure1_slot14;
                var8 = var4.utmSource;
                var7 = var4.utmMedium;
                var5 = var4.utmCampaign;
                var4 = var4.utmContent;
                var9 = var1.utm_source;
                if(!(var6 != var9)) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                var8 = var9;
case 15:
                var1['utm_source'] = var8;
                var8 = var1.utm_medium;
                if(!(var6 != var8)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var7 = var8;
case 17:
                var1['utm_medium'] = var7;
                var7 = var1.utm_campaign;
                if(!(var6 != var7)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                var5 = var7;
case 19:
                var1['utm_campaign'] = var5;
                var5 = var1.utm_content;
                if(!(var6 != var5)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                var4 = var5;
case 21:
                var1['utm_content'] = var4;
                var4 = _closure1_slot16;
                var1['launch_signature'] = var4;
                var4 = _closure1_slot17;
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var3 = _closure2_slot0;
                    var2 = arg1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure1_slot25 = var7;
        var6 = function debugLogEvent(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg1;
                var2 = arguments[2];
                var1 = undefined;
                if(!(var2 === var1)) { _fun0005_ip = 3; continue _fun0005 }
case 23:
                var2 = false;
case 3:
                var4 = _closure1_slot9;
                var4 = var4.isLoggingAnalyticsEvents;
                var4 = _closure1_slot2;
                var5 = _closure1_slot3;
                var3 = 13;
                var3 = var5[var3];
                var5 = var4.bind(var1)(var3);
                var4 = var5.report;
                var3 = 'Analytics';
                if(var2) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var2 = var4.bind(var5)(var3, var6);
                _fun0005_ip = 4; continue _fun0005;
case 24:
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var6, var2);
case 4:
                return var1;
            }
        };
        var _closure1_slot26 = var6;
        var1 = ['location'];
        var _closure1_slot4 = var1;
        var1 = ['source'];
        var _closure1_slot5 = var1;
        var9 = global;
        var12 = var9.Object;
        var11 = var12.defineProperty;
        var10 = {};
        var1 = true;
        var10['value'] = var1;
        var1 = '__esModule';
        var1 = var11.bind(var12)(var3, var1, var10);
        var1 = 0;
        var10 = var5[var1];
        var1 = undefined;
        var10 = var19.bind(var1)(var10);
        var _closure1_slot6 = var10;
        var10 = 1;
        var10 = var5[var10];
        var13 = var4.bind(var1)(var10);
        var10 = 2;
        var10 = var5[var10];
        var10 = var14.bind(var1)(var10);
        var11 = var10.setDebugTrackedData;
        var _closure1_slot7 = var11;
        var10 = var10.getLocation;
        var _closure1_slot8 = var10;
        var10 = 3;
        var10 = var5[var10];
        var10 = var19.bind(var1)(var10);
        var _closure1_slot9 = var10;
        var10 = 4;
        var10 = var5[var10];
        var10 = var14.bind(var1)(var10);
        var12 = var10.AnalyticEvents;
        var11 = var10.AnalyticsObjectTypes;
        var _closure1_slot10 = var11;
        var10 = var10.AnalyticsSections;
        var _closure1_slot11 = var10;
        var10 = 5;
        var10 = var5[var10];
        var10 = var14.bind(var1)(var10);
        var10 = var10.AccessibilityFeatureFlags;
        var _closure1_slot12 = var10;
        var10 = 6;
        var10 = var5[var10];
        var10 = var14.bind(var1)(var10);
        var10 = var10.ApplicationTypes;
        var _closure1_slot13 = var10;
        var11 = var13.createContext;
        var10 = {};
        var15 = {};
        var10['location'] = var15;
        var11 = var11.bind(var13)(var10);
        var10 = {};
        var _closure1_slot14 = var10;
        var10 = var9.performance;
        var9 = var10.now;
        var9 = var9.bind(var10)();
        var _closure1_slot15 = var9;
        var9 = 7;
        var10 = var5[var9];
        var13 = var14.bind(var1)(var10);
        var10 = var13.isLibdiscoreLoaded;
        var13 = var10.bind(var13)();
        var10 = null;
        if(!var13) { _fun0001_ip = 26; continue _fun0001 }
case 27:
        var9 = var5[var9];
        var15 = var14.bind(var1)(var9);
        var13 = var15.generateLaunchSignature;
        var9 = 8;
        var9 = var5[var9];
        var16 = var14.bind(var1)(var9);
        var9 = var16.getGlobalObject;
        var9 = var9.bind(var16)();
        var10 = var13.bind(var15)(var9);
case 26:
        var _closure1_slot16 = var10;
        var13 = 9;
        var9 = var5[var13];
        var16 = var4.bind(var1)(var9);
        var15 = var16.extendSuperProperties;
        var9 = {};
        var9['launch_signature'] = var10;
        var9 = var15.bind(var16)(var9);
        var9 = new Array(0);
        var _closure1_slot17 = var9;
        var9 = {};
        var16 = var12.APP_OPENED;
        var15 = {};
        var22 = 300000;
        var15['throttlePeriod'] = var22;
        var17 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.APP_BACKGROUND;
        var15 = {};
        var23 = 120000;
        var15['throttlePeriod'] = var23;
        var17 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.ACK_MESSAGES;
        var15 = function(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arg1;
                var3 = var1.location_object_type;
                var1 = _closure1_slot10;
                var2 = var1.ACK_MANUAL;
                var1 = undefined;
                if(!(var3 !== var2)) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var2 = {};
                var3 = 900000;
                var2['throttlePeriod'] = var3;
                var3 = function throttleKeys(arg1) {
                    var2 = arg1;
                    var3 = var2.guild_id;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = var2.channel_id;
                    var1[1] = var3;
                    var2 = var2.location_section;
                    var1[2] = var2;
                    return var1;
                };
                var2['throttleKeys'] = var3;
                var1 = var2;
case 28:
                return var1;
            }
        };
        var9[var16] = var15;
        var16 = var12.GUILD_VIEWED;
        var15 = {};
        var21 = 900000;
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.guild_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.is_pending;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.FRIENDS_LIST_CLICKED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.tab_opened;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.FRIENDS_LIST_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.tab_opened;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.NOW_PLAYING_CARD_HOVERED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.tab_opened;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.START_SPEAKING;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.server;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.START_LISTENING;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var17 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.server;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var16 = var12.ACTIVITY_UPDATED;
        var15 = {'throttlePeriod': 60000, 'throttleKeys': null, 'deduplicate': true};
        var17 = 60000;
        var18 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.application_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var18;
        var9[var16] = var15;
        var16 = var12.CHANNEL_OPENED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var18 = function throttleKeys(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = var3.channel_static_route;
                var1 = null;
                if(!(var1 == var2)) { _fun0007_ip = 30; continue _fun0007 }
case 31:
                var2 = var3.channel_id;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = var3.channel_view;
                var1[1] = var2;
                _fun0007_ip = 32; continue _fun0007;
case 30:
                var4 = var3.guild_id;
                var2 = new Array(3);
                var2[0] = var4;
                var4 = var3.channel_static_route;
                var2[1] = var4;
                var3 = var3.channel_view;
                var2[2] = var3;
                var1 = var2;
case 32:
                return var1;
            }
        };
        var15['throttleKeys'] = var18;
        var9[var16] = var15;
        var16 = var12.TEXT_IN_VOICE_OPENED;
        var15 = {};
        var18 = 86400000;
        var15['throttlePeriod'] = var18;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.NOTIFICATION_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.notif_type;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.MEMBER_LIST_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.DM_LIST_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.NAV_DRAWER_OPENED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var20 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.KEYBOARD_SHORTCUT_USED;
        var15 = {};
        var15['throttlePeriod'] = var23;
        var20 = function throttleKeys(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = arg1;
                var3 = var2.shortcut_name;
                var1 = new Array(2);
                var1[0] = var3;
                var3 = var2.location_object;
                var1[1] = var3;
                var3 = var2.source_class_list;
                var2 = null;
                if(!(var2 == var3)) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                var3 = new Array(0);
case 33:
                var4 = 2;
                var6 = var1;
                var5 = var3;
                var2 = arraySpread(var6, var5, var4);
                return var1;
            }
        };
        var15['throttleKeys'] = var20;
        var9[var16] = var15;
        var16 = var12.QUICKSWITCHER_OPENED;
        var15 = {};
        var20 = 10000;
        var15['throttlePeriod'] = var20;
        var24 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var24;
        var9[var16] = var15;
        var16 = var12.CHAT_INPUT_COMPONENT_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var24 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var24;
        var9[var16] = var15;
        var16 = var12.ROLE_PAGE_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var23;
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.role_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.tab_opened;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.VIDEO_INPUT_INITIALIZED;
        var15 = {};
        var15['throttlePeriod'] = var22;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.AUDIO_INPUT_INITIALIZED;
        var15 = {};
        var15['throttlePeriod'] = var22;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.HUB_ONBOARDING_CAROUSEL_SCROLLED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.HUB_STUDENT_PROMPT_CLICKED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.RPC_SERVER_ERROR_CAUGHT;
        var15 = {};
        var15['throttlePeriod'] = var18;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.RPC_COMMAND_SENT;
        var15 = {'throttlePeriod': 86400000, 'throttleKeys': null, 'throttlePercent': 0.001};
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.application_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.command;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.RPC_SUBSCRIPTION_REQUESTED;
        var15 = {'throttlePeriod': 86400000, 'throttleKeys': null, 'throttlePercent': 0.001};
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.application_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.event;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.ACTIVITY_HANDSHAKE;
        var15 = {};
        var15['throttlePeriod'] = var18;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.application_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.CHANNEL_BANNER_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var18;
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.banner_type;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.channel_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.PREMIUM_UPSELL_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var17;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.type;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.FORUM_CHANNEL_SEARCHED;
        var15 = {};
        var15['throttlePeriod'] = var17;
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.guild_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.channel_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.FORUM_CHANNEL_SCROLLED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.guild_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.channel_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var17;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.user_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.MEDIA_VIEWER_SESSION_COMPLETED;
        var15 = {};
        var15['throttlePeriod'] = var17;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.SUMMARIES_UNREAD_BAR_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var22;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.ACTIVITY_CARDS_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.context;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.guild_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.GUILD_TOOLTIP_SHOWN;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.guild_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.ACK_COMMUNITY_MESSAGES;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.REDESIGN_NAV_BAR_CLICKED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.tab;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.CHANNEL_LIST_END_REACHED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.guild_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var16] = var15;
        var16 = var12.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED;
        var15 = {};
        var15['throttlePeriod'] = var17;
        var17 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.guild_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.channel_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var17;
        var9[var16] = var15;
        var17 = var12.LIVE_ACTIVITY_SETTINGS_UPDATED;
        var15 = {};
        var16 = 3600000;
        var15['throttlePeriod'] = var16;
        var23 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var17] = var15;
        var17 = var12.KEYWORD_FILTER_MATCH;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.message_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var17] = var15;
        var17 = var12.MEDIA_INPUT_VOLUME_CHANGED;
        var15 = {};
        var15['throttlePeriod'] = var22;
        var23 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.location_stack;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var23;
        var9[var17] = var15;
        var17 = var12.MEDIA_OUTPUT_VOLUME_CHANGED;
        var15 = {};
        var15['throttlePeriod'] = var22;
        var22 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.location_stack;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var22;
        var9[var17] = var15;
        var17 = var12.APP_DMS_QUICK_LAUNCHER_IMPRESSION;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var22 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var22;
        var9[var17] = var15;
        var17 = var12.USER_VOICE_ACTIVITY_VIEWED;
        var15 = {'throttlePeriod': 300000, 'throttleKeys': null, 'deduplicate': true};
        var22 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.activity_user_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.surface;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var22;
        var9[var17] = var15;
        var17 = var12.PARTY_VOICE_ACTIVITY_VIEWED;
        var15 = {'throttlePeriod': 300000, 'throttleKeys': null, 'deduplicate': true};
        var22 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.voice_channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var22;
        var9[var17] = var15;
        var17 = var12.MEMBER_LIST_SWIPE_PEEK;
        var15 = {};
        var22 = 1000;
        var15['throttlePeriod'] = var22;
        var22 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.channel_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var22;
        var9[var17] = var15;
        var17 = var12.REDACTABLE_MESSAGE_LOADED;
        var15 = {};
        var15['throttlePeriod'] = var21;
        var21 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.channel_id;
            var1 = new Array(2);
            var1[0] = var3;
            var2 = var2.message_id;
            var1[1] = var2;
            return var1;
        };
        var15['throttleKeys'] = var21;
        var9[var17] = var15;
        var17 = var12.OPEN_MODAL;
        var15 = function(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arg1;
                var3 = var1.type;
                var1 = _closure1_slot11;
                var2 = var1.MEDIA_VIEWER;
                var1 = undefined;
                if(!(var3 === var2)) { _fun0009_ip = 35; continue _fun0009 }
case 36:
                var2 = {};
                var3 = 60000;
                var2['throttlePeriod'] = var3;
                var3 = function throttleKeys(arg1) {
                    var1 = arg1;
                    var2 = var1.type;
                    var1 = new Array(1);
                    var1[0] = var2;
                    return var1;
                };
                var2['throttleKeys'] = var3;
                var1 = var2;
case 35:
                return var1;
            }
        };
        var9[var17] = var15;
        var17 = var12.MODERATOR_QUEUE_ACTION;
        var15 = {};
        var15['throttlePeriod'] = var20;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.guild_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var17] = var15;
        var17 = var12.NOTIFICATION_PERMISSION_STATUS;
        var15 = {};
        var20 = 43200000;
        var15['throttlePeriod'] = var20;
        var20 = function throttleKeys(arg1) {
            var2 = arg1;
            var3 = var2.os_enabled;
            var1 = new Array(4);
            var1[0] = var3;
            var3 = var2.notification_authorization_status;
            var1[1] = var3;
            var3 = var2.foreground_app_enabled;
            var1[2] = var3;
            var2 = var2.background_app_enabled;
            var1[3] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var17] = var15;
        var17 = var12.SEARCH_BAR_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var16;
        var20 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.search_type;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var17] = var15;
        var17 = var12.AD_IDENTIFIER_FETCHED;
        var15 = {};
        var15['throttlePeriod'] = var18;
        var20 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var20;
        var9[var17] = var15;
        var17 = var12.ACTIVITY_PANEL_SDK_LINK_VIEWED;
        var15 = {};
        var15['throttlePeriod'] = var18;
        var18 = function throttleKeys(arg1) {
            var1 = arg1;
            var2 = var1.application_id;
            var1 = new Array(1);
            var1[0] = var2;
            return var1;
        };
        var15['throttleKeys'] = var18;
        var9[var17] = var15;
        var17 = var12.LIBDISCORE_SLOW_TIMERS;
        var15 = {};
        var15['throttlePeriod'] = var16;
        var18 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var15['throttleKeys'] = var18;
        var9[var17] = var15;
        var15 = var12.DEBUG_MISSING_STRING;
        var12 = {};
        var12['throttlePeriod'] = var16;
        var16 = function throttleKeys() {
            var1 = new Array(0);
            return var1;
        };
        var12['throttleKeys'] = var16;
        var9[var15] = var12;
        var12 = function getAccessibilityFeatures() {
            var1 = _closure1_slot12;
            var1 = var1.NONE;
            return var1;
        };
        var _closure1_slot18 = var12;
        var12 = var5[var13];
        var16 = var14.bind(var1)(var12);
        var15 = var16.trackMaker;
        var12 = {};
        var12['analyticEventConfigs'] = var9;
        var18 = 10;
        var17 = var5[var18];
        var17 = var19.bind(var1)(var17);
        var12['dispatcher'] = var17;
        var17 = 'TRACK';
        var12['TRACK_ACTION_NAME'] = var17;
        var12 = var15.bind(var16)(var12);
        var _closure1_slot19 = var12;
        var12 = false;
        var _closure1_slot20 = var12;
        var12 = {};
        var _closure1_slot21 = var12;
        var12 = var5[var13];
        var16 = var14.bind(var1)(var12);
        var15 = var16.trackMaker;
        var12 = {};
        var12['analyticEventConfigs'] = var9;
        var18 = var5[var18];
        var18 = var19.bind(var1)(var18);
        var12['dispatcher'] = var18;
        var12['TRACK_ACTION_NAME'] = var17;
        var12 = var15.bind(var16)(var12);
        var _closure1_slot22 = var12;
        var12 = {};
        var15 = var5[var13];
        var26 = var4.bind(var1)(var15);
        var27 = var12;
        var15 = copyDataProperties(var27, var26);
        var13 = var5[var13];
        var13 = var14.bind(var1)(var13);
        var15 = var13.getCampaignParams;
        var13 = 'getCampaignParams';
        var12[var13] = var15;
        var15 = function setSystemAccessibilityFeatures(arg1) {
            var1 = arg1;
            _closure1_slot18 = var1;
            var1 = undefined;
            return var1;
        };
        var13 = 'setSystemAccessibilityFeatures';
        var12[var13] = var15;
        var13 = 'expandEventProperties';
        var12[var13] = var7;
        var15 = function track(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var6 = arg1;
                var4 = arg2;
                var7 = arguments[2];
                var5 = undefined;
                if(!(var7 === var5)) { _fun0010_ip = 37; continue _fun0010 }
case 31:
                var7 = {};
case 37:
                var1 = global;
                var2 = var1.String;
                var9 = var2.bind(var5)(var6);
                var8 = _closure1_slot0;
                var10 = _closure1_slot3;
                var3 = 14;
                var3 = var10[var3];
                var3 = var8.bind(var5)(var3);
                var8 = var3.IGNORE_ANALYTICS_BREADCRUMB_EVENTS;
                var3 = var8.includes;
                var3 = var3.bind(var8)(var9);
                if(var3) { _fun0010_ip = 38; continue _fun0010 }
case 5:
                var8 = _closure1_slot1;
                var10 = _closure1_slot3;
                var3 = 15;
                var3 = var10[var3];
                var10 = var8.bind(var5)(var3);
                var8 = var10.addBreadcrumb;
                var3 = {};
                var11 = 'analytics';
                var3['category'] = var11;
                var11 = var1.HermesInternal;
                var12 = var11.concat;
                var11 = '';
                var11 = var12.bind(var11)(var9);
                var3['message'] = var11;
                var3 = var8.bind(var10)(var3);
case 38:
                var3 = _closure1_slot20;
                if(!var3) { _fun0010_ip = 39; continue _fun0010 }
case 40:
                var3 = null;
                if(!(var3 != var4)) { _fun0010_ip = 39; continue _fun0010 }
case 41:
                var10 = var1.Array;
                var8 = var10.isArray;
                var3 = _closure1_slot21;
                var3 = var3[var6];
                var8 = var8.bind(var10)(var3);
                var3 = _closure1_slot21;
                if(var8) { _fun0010_ip = 42; continue _fun0010 }
case 43:
                var8 = new Array(1);
                var8[0] = var4;
                var3[var6] = var8;
                _fun0010_ip = 39; continue _fun0010;
case 42:
                var8 = var3[var6];
                var3 = var8.push;
                var3 = var3.bind(var8)(var4);
case 39:
                var8 = var7.throttlePercent;
                var3 = null;
                if(!(var3 != var8)) { _fun0010_ip = 44; continue _fun0010 }
case 45:
                var8 = var1.Math;
                var3 = var8.random;
                var8 = var3.bind(var8)();
                var3 = var7.throttlePercent;
                if(!(!(var8 > var3))) { _fun0010_ip = 46; continue _fun0010 }
case 44:
                var3 = _closure1_slot25;
                var4 = var3.bind(var5)(var4);
                var8 = _closure1_slot26;
                var3 = var7.logEventProperties;
                var3 = var8.bind(var5)(var9, var4, var3);
                var3 = _closure1_slot19;
                var2 = {};
                var8 = var7.flush;
                var2['flush'] = var8;
                var7 = var7.fingerprint;
                var2['fingerprint'] = var7;
                var2 = var3.bind(var5)(var6, var4, var2);
                return var2;
case 46:
                var2 = var1.Promise;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                return var1;
            }
        };
        var13 = 'track';
        var12[var13] = var15;
        var13 = 17;
        var13 = var5[var13];
        var15 = var14.bind(var1)(var13);
        var14 = var15.fileFinishedImporting;
        var13 = 'utils/AnalyticsUtils.tsx';
        var13 = var14.bind(var15)(var13);
        var3['default'] = var12;
        var3['AnalyticsContext'] = var11;
        var3['launchSignature'] = var10;
        var10 = function addExtraAnalyticsDecorator(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.push;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['addExtraAnalyticsDecorator'] = var10;
        var3['AnalyticEventConfigs'] = var9;
        var3['expandLocation'] = var8;
        var8 = function setUTMContext(arg1) {
            var1 = arg1;
            _closure1_slot14 = var1;
            return var1;
        };
        var3['setUTMContext'] = var8;
        var3['expandEventProperties'] = var7;
        var3['debugLogEvent'] = var6;
        var6 = function startRecordingAnalyticsEvents() {
            var1 = true;
            _closure1_slot20 = var1;
            var1 = undefined;
            return var1;
        };
        var3['startRecordingAnalyticsEvents'] = var6;
        var6 = function stopRecordingAnalyticsEvents() {
            var1 = false;
            _closure1_slot20 = var1;
            var1 = undefined;
            return var1;
        };
        var3['stopRecordingAnalyticsEvents'] = var6;
        var6 = function getAnalyticsEventsRecording() {
            var1 = _closure1_slot21;
            return var1;
        };
        var3['getAnalyticsEventsRecording'] = var6;
        var6 = function clearAnalyticsEventsRecording() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = _closure1_slot21;
            var3 = var2.bind(var3)(var1);
            var2 = var3.forEach;
            var1 = function(arg1) {
                var2 = _closure1_slot21;
                var1 = arg1;
                var1 = delete var2[var1];
                var1 = undefined;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var3['clearAnalyticsEventsRecording'] = var6;
        var6 = function isGameApplicationType(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = arg1;
                var1 = _closure1_slot13;
                var1 = var1.GAME;
                var1 = var3 === var1;
                if(var1) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var2 = _closure1_slot13;
                var2 = var2.DEPRECATED_GAME;
                var1 = var3 === var2;
case 47:
                return var1;
            }
        };
        var3['isGameApplicationType'] = var6;
        var6 = function trackNetworkAction(arg1, arg2) {
            var4 = arg1;
            var7 = arg2;
            var5 = _closure1_slot25;
            var3 = {};
            var6 = _closure1_slot8;
            var1 = undefined;
            var6 = var6.bind(var1)();
            var3['location'] = var6;
            var10 = var3;
            var9 = var7;
            var6 = copyDataProperties(var10, var9);
            var3 = var5.bind(var1)(var3);
            var6 = _closure1_slot7;
            var5 = {};
            var8 = 'action';
            var5['type'] = var8;
            var10 = var5;
            var9 = var7;
            var7 = copyDataProperties(var10, var9);
            var5 = var6.bind(var1)(var4, var5);
            var5 = _closure1_slot26;
            var5 = var5.bind(var1)(var4, var3);
            var2 = _closure1_slot22;
            var2 = var2.bind(var1)(var4, var3);
            return var1;
        };
        var3['trackNetworkAction'] = var6;
        var2 = function getNewAnalyticsLoadId() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var1 = 16;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.v4;
            var1 = var1.bind(var2)();
            return var1;
        };
        var3['getNewAnalyticsLoadId'] = var2;
        var2 = 18;
        var2 = var5[var2];
        var2 = var4.bind(var1)(var2);
        var3['AnalyticsSchema'] = var2;
        return var1;
    }
})();