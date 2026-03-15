// app/modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var7;
    var1 = function renderUnreadIndicatorNoEntering(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg3;
            var8 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = 10;
            var4 = var2[var3];
            var3 = undefined;
            var5 = var8.bind(var3)(var4);
            var4 = var5.renderUnreadIndicator;
            var7 = 11;
            var2 = var2[var7];
            var2 = var8.bind(var3)(var2);
            var2 = var2.TransitionStates;
            var2 = var2.ENTERED;
            if(!(var6 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var2.bind(var3)(var1);
            var1 = var1.TransitionStates;
            var6 = var1.MOUNTED;
case 2:
            var12 = arg1;
            var11 = arg2;
            var9 = arg4;
            var13 = var5;
            var10 = var6;
            var1 = var13[var4](var12, var11, var10, var9, var8);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var2 = function handleCreateJoinGuildPress() {
        var1 = undefined;
        var4 = _closure1_slot21;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot20 = var2;
    var1 = function _handleCreateJoinGuildPress() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var5 = 15;
                    var3 = var2[var5];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var3);
                    var3 = 14;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var2 = var6.bind(var4)(var3, var2);
                    SaveGenerator(address=57);
case 6:
                    return var2;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var8 = var2.default;
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var5 = var3[var5];
                    var6 = var6.bind(var4)(var5);
                    var5 = 16;
                    var5 = var3[var5];
                    var3 = var3.paths;
                    var3 = var6.bind(var4)(var5, var3);
                    SaveGenerator(address=110);
case 10:
                    return var3;
case 11:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var6 = var3.default;
                    var7 = var8.acknowledgeTooltip;
                    var5 = _closure1_slot11;
                    var5 = var5.GUILD_TOOLTIP;
                    var5 = var7.bind(var8)(var5);
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 17;
                    var5 = var8[var5];
                    var7 = var7.bind(var4)(var5);
                    var5 = var7.isAtGuildCapAndNonPremium;
                    var5 = var5.bind(var7)();
                    if(var5) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var5 = 20;
                    var5 = var8[var5];
                    var5 = var7.bind(var4)(var5);
                    var8 = var5.GameCommunityUpsellMultiExperiment;
                    var7 = var8.getConfig;
                    var5 = {};
                    var10 = 'GuildsBarCreateJoinButton';
                    var5['location'] = var10;
                    var5 = var7.bind(var8)(var5);
                    var5 = var5.enabled;
                    if(!var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var7 = _closure1_slot7;
                    var5 = var7.hasGuilds;
                    var5 = var5.bind(var7)();
                    if(var5) { _fun0002_ip = 18; continue _fun0002 }
case 16:
                    var5 = var6.openCreateGuildModal;
                    var5 = var5.bind(var6)();
                    _fun0002_ip = 19; continue _fun0002;
case 18:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 21;
                    var5 = var7[var5];
                    var7 = var6.bind(var4)(var5);
                    var6 = var7.transitionToGuild;
                    var5 = _closure1_slot13;
                    var5 = var6.bind(var7)(var5);
                    _fun0002_ip = 19; continue _fun0002;
case 14:
                    var10 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var5 = 18;
                    var5 = var11[var5];
                    var7 = var10.bind(var4)(var5);
                    var6 = var7.handleShowUpsellAlert;
                    var5 = {};
                    var8 = _closure1_slot12;
                    var8 = var8.GUILD_CAP;
                    var5['initialUpsellKey'] = var8;
                    var8 = {};
                    var12 = _closure1_slot9;
                    var12 = var12.CREATE_JOIN_GUILD_MODAL;
                    var8['page'] = var12;
                    var5['analyticsLocation'] = var8;
                    var8 = 19;
                    var8 = var11[var8];
                    var8 = var10.bind(var4)(var8);
                    var10 = var8.NEW_GUILD_BUTTON;
                    var8 = new Array(1);
                    var8[0] = var10;
                    var5['analyticsLocations'] = var8;
                    var8 = {};
                    var9 = _closure1_slot15;
                    var9 = var9.GUILD_CAP_MODAL_UPSELL;
                    var8['type'] = var9;
                    var5['analyticsProperties'] = var8;
                    var5 = var6.bind(var7)(var5);
case 19:
                    return var4;
case 12:
                    return var3;
case 8:
                    return var2;
case 4:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot21 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot21 = var1;
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var8 = var7[var5];
    var5 = metroImportAll;
    var8 = var5.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var9.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.AnalyticsPages;
    var _closure1_slot9 = var9;
    var9 = var5.DM_WIDTH;
    var _closure1_slot10 = var9;
    var9 = var5.TooltipNames;
    var _closure1_slot11 = var9;
    var9 = var5.UpsellTypes;
    var _closure1_slot12 = var9;
    var5 = var5.MOBILE_GUILD_UPSELL_LIST;
    var _closure1_slot13 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot14 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.PremiumUpsellTypes;
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var9 = var5.jsx;
    var _closure1_slot16 = var9;
    var5 = var5.jsxs;
    var _closure1_slot17 = var5;
    var5 = 12;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var2 = {};
            var5 = 0;
            var2['marginTop'] = var5;
            var1['marginOverrides'] = var2;
            var2 = {'position': 'absolute', 'left': null, 'top': 0};
            var4 = _closure1_slot10;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 13;
            var6 = var6[var3];
            var3 = undefined;
            var3 = var7.bind(var3)(var6);
            var3 = var3.BG_CONTAINER_SIZE;
            var3 = var4 - var3;
            var4 = -var3;
            var3 = 2;
            var4 = var4 / var3;
            var3 = 1;
            var6 = arg1;
            if(!var6) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = 0;
case 20:
            var3 = var4 - var3;
            var2['left'] = var3;
            var1['guildIndicator'] = var2;
            return var1;
        }
    };
    var5 = var9.bind(var10)(var5);
    var _closure1_slot18 = var5;
    var5 = var8.memo;
    var4 = function GuildsBarCreateJoinButton() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var2 = 22;
            var2 = var13[var2];
            var4 = undefined;
            var2 = var7.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var3 = var2.height;
            var _closure2_slot0 = var3;
            var2 = 23;
            var2 = var13[var2];
            var2 = var7.bind(var4)(var2);
            var8 = 'GuildsBarCreateJoinButton';
            var14 = var2.bind(var4)(var8);
            var10 = _closure1_slot0;
            var2 = 24;
            var2 = var13[var2];
            var6 = var10.bind(var4)(var2);
            var5 = var6.useToken;
            var2 = 25;
            var2 = var13[var2];
            var2 = var7.bind(var4)(var2);
            var2 = var2.modules;
            var2 = var2.mobile;
            var2 = var2.GUILD_BAR_ITEM_SIZE;
            var5 = var5.bind(var6)(var2);
            var _closure2_slot1 = var5;
            var2 = 20;
            var2 = var13[var2];
            var2 = var10.bind(var4)(var2);
            var7 = var2.GameCommunityUpsellMultiExperiment;
            var6 = var7.useConfig;
            var2 = {};
            var2['location'] = var8;
            var2 = var6.bind(var7)(var2);
            var11 = var2.enabled;
            var _closure2_slot2 = var11;
            var2 = 26;
            var6 = var13[var2];
            var9 = var10.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(1);
            var7[0] = var6;
            var6 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuildId;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot13;
                var1 = var2 === var1;
                return var1;
            };
            var8 = var8.bind(var9)(var7, var6);
            var _closure2_slot3 = var8;
            var6 = _closure1_slot18;
            var9 = var6.bind(var4)(var8);
            var2 = var13[var2];
            var15 = var10.bind(var4)(var2);
            var7 = var15.useStateFromStoresArray;
            var2 = _closure1_slot7;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.getPresentableUpsellGuilds;
                var4 = var1.bind(var2)();
                var3 = var4.slice;
                var2 = 0;
                var1 = 2;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var7.bind(var15)(var6, var2);
            var _closure2_slot4 = var16;
            var2 = 27;
            var2 = var13[var2];
            var7 = var10.bind(var4)(var2);
            var6 = var7.useSelectedDismissibleContent;
            var2 = 28;
            var2 = var13[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.DismissibleContent;
            var10 = var2.MOBILE_MULTI_GUILD_CREATE_UPSELL_ANIMATION;
            var2 = new Array(1);
            var2[0] = var10;
            var7 = var6.bind(var7)(var2);
            var2 = _closure1_slot3;
            var6 = 2;
            var7 = var2.bind(var4)(var7, var6);
            var2 = 0;
            var15 = var7[var2];
            var _closure2_slot5 = var15;
            var2 = 1;
            var2 = var7[var2];
            var _closure2_slot6 = var2;
            var13 = _closure1_slot5;
            var10 = var13.useMemo;
            var7 = new Array(3);
            var7[0] = var11;
            var7[1] = var16;
            var7[2] = var5;
            var5 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(var2) { _fun0005_ip = 22; continue _fun0005 }
case 5:
                    var2 = undefined;
                    return var2;
case 22:
                    var2 = _closure2_slot4;
                    var3 = var2.length;
                    var2 = 2;
                    if(!(!(var3 < var2))) { _fun0005_ip = 6; continue _fun0005 }
case 23:
                    var3 = _closure2_slot4;
                    var2 = var3.map;
                    var1 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                            var6 = arg1;
                            var1 = var6.icon;
                            var5 = null;
                            var2 = var5 != var1;
                            if(!var2) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                            var5 = var1;
case 24:
                            var2 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var1 = 29;
                            var1 = var8[var1];
                            var7 = undefined;
                            var3 = var2.bind(var7)(var1);
                            var2 = var3.getGuildIconSource;
                            var1 = {};
                            var6 = var6.id;
                            var1['id'] = var6;
                            var1['icon'] = var5;
                            var5 = false;
                            var1['canAnimate'] = var5;
                            var5 = _closure2_slot1;
                            var6 = _closure1_slot0;
                            var4 = 30;
                            var4 = var8[var4];
                            var6 = var6.bind(var7)(var4);
                            var4 = var6.getDevicePixelRatio;
                            var4 = var4.bind(var6)();
                            var4 = var5 * var4;
                            var1['size'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0005_ip = 26; continue _fun0005;
case 6:
                    var1 = new Array(0);
case 26:
                    return var1;
                }
            };
            var13 = var10.bind(var13)(var5, var7);
            var10 = null;
            var17 = var10 != var13;
            if(!var17) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var5 = var13.length;
            var17 = var5 >= var6;
case 27:
            if(!var17) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var17 = var10 != var15;
case 29:
            var _closure2_slot7 = var17;
            var7 = _closure1_slot5;
            var5 = var7.useRef;
            var6 = var5.bind(var7)(var10);
            var _closure2_slot8 = var6;
            var5 = var7.useRef;
            var5 = var5.bind(var7)(var10);
            var _closure2_slot9 = var5;
            var10 = var7.useRef;
            var5 = false;
            var5 = var10.bind(var7)(var5);
            var _closure2_slot10 = var5;
            var16 = var7.useCallback;
            var10 = function() {
                var2 = _closure2_slot10;
                var1 = true;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var5 = new Array(0);
            var5 = var16.bind(var7)(var10, var5);
            var16 = var7.useEffect;
            var10 = new Array(2);
            var10[0] = var17;
            var10[1] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot7;
                    if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                    var3 = undefined;
                    return var3;
case 31:
                    var3 = _closure2_slot9;
                    var2 = global;
                    var6 = var2.setInterval;
                    var5 = undefined;
                    var4 = function() {
                        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                            var2 = _closure2_slot10;
                            var2 = var2.current;
                            if(!var2) { _fun0008_ip = 33; continue _fun0008 }
case 34:
                            var1 = _closure2_slot8;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0008_ip = 33; continue _fun0008 }
case 23:
                            var2 = var3.measureInWindow;
                            var1 = function(arg1, arg2, arg3, arg4) {
                                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                                    var4 = arg2;
                                    var2 = arg4;
                                    var3 = 0;
                                    var1 = var2 > var3;
                                    if(!var1) { _fun0009_ip = 35; continue _fun0009 }
case 34:
                                    var5 = _closure2_slot0;
                                    var1 = var4 < var5;
case 35:
                                    if(!var1) { _fun0009_ip = 36; continue _fun0009 }
case 37:
                                    var2 = var4 + var2;
                                    var1 = var2 > var3;
case 36:
                                    if(!var1) { _fun0009_ip = 38; continue _fun0009 }
case 39:
                                    var1 = global;
                                    var3 = var1.clearInterval;
                                    var1 = _closure2_slot9;
                                    var2 = var1.current;
                                    var1 = undefined;
                                    var1 = var3.bind(var1)(var2);
case 38:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
case 33:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = 500;
                    var2 = var6.bind(var5)(var4, var2);
                    var3['current'] = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearInterval;
                        var1 = _closure2_slot9;
                        var2 = var1.current;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var16.bind(var7)(var3, var10);
            var10 = var7.useCallback;
            var3 = new Array(3);
            var3[0] = var11;
            var3[1] = var15;
            var3[2] = var2;
            var2 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                    var2 = _closure2_slot2;
                    if(!var2) { _fun0010_ip = 9; continue _fun0010 }
case 5:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var2 = _closure2_slot9;
                    var2 = var2.current;
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var4 = _closure2_slot5;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0010_ip = 9; continue _fun0010 }
case 40:
                    var2 = _closure2_slot6;
                    var1 = _closure1_slot14;
                    var1 = var1.TAKE_ACTION;
                    var1 = var2.bind(var3)(var1);
case 9:
                    var2 = _closure1_slot20;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                }
            };
            var10 = var10.bind(var7)(var2, var3);
            var3 = var7.useMemo;
            var2 = new Array(2);
            var2[0] = var8;
            var2[1] = var11;
            var1 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var1 = _closure2_slot3;
                    if(!var1) { _fun0011_ip = 25; continue _fun0011 }
case 5:
                    var1 = _closure2_slot2;
                    if(var1) { _fun0011_ip = 41; continue _fun0011 }
case 25:
                    var1 = undefined;
                    return var1;
case 41:
                    var1 = {};
                    var2 = _closure2_slot3;
                    var1['selected'] = var2;
                    var2 = 'unread';
                    var1['id'] = var2;
                    return var1;
                }
            };
            var11 = var3.bind(var7)(var1, var2);
            var3 = _closure1_slot17;
            var2 = _closure1_slot6;
            var1 = {};
            var1['ref'] = var6;
            var1['onLayout'] = var5;
            var7 = _closure1_slot16;
            var15 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 13;
            var5 = var6[var5];
            var6 = var15.bind(var4)(var5);
            var5 = {};
            var17 = _closure1_slot2;
            if(var14) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var14 = 32;
            var14 = var17[var14];
            _fun0004_ip = 44; continue _fun0004;
case 42:
            var16 = 31;
            var14 = var17[var16];
case 44:
            var14 = var15.bind(var4)(var14);
            var5['iconSource'] = var14;
            var5['backgroundIcons'] = var13;
            var5['onPress'] = var10;
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 33;
            var15 = var14[var10];
            var15 = var13.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.l5WIbf;
            var10 = var15.bind(var16)(var10);
            var5['accessibilityLabel'] = var10;
            var5['selected'] = var8;
            var8 = var9.marginOverrides;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot16;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var9.guildIndicator;
            var6['style'] = var9;
            var9 = 11;
            var9 = var14[var9];
            var9 = var13.bind(var4)(var9);
            var10 = var9.TransitionItem;
            var9 = {};
            var9['item'] = var11;
            var11 = 34;
            var11 = var14[var11];
            var13 = var13.bind(var4)(var11);
            var11 = var13.isAndroid;
            var11 = var11.bind(var13)();
            if(var11) { _fun0004_ip = 45; continue _fun0004 }
case 46:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = 10;
            var11 = var14[var11];
            var11 = var13.bind(var4)(var11);
            var11 = var11.renderUnreadIndicator;
            _fun0004_ip = 47; continue _fun0004;
case 45:
            var11 = _closure1_slot19;
case 47:
            var9['renderItem'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 35;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/guilds_bar/native/GuildsBarCreateJoinButton.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['handleCreateJoinGuildPress'] = var2;
    return var1;
})();