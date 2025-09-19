// app/modules/channel_list_v2/native/RedesignChannelList.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function getInitialPosition(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var5 = arg3;
            var2 = var3.getSectionRowsFromChannel;
            var1 = arg2;
            var4 = var2.bind(var3)(var1);
            var3 = _closure1_slot3;
            var1 = undefined;
            var2 = 1;
            var2 = var3.bind(var1)(var4, var2);
            var4 = 0;
            var3 = var2[var4];
            var6 = null;
            if(!(var6 != var3)) { _fun0001_ip = 112; continue _fun0001 }
 50:
            var2 = var3.row;
            if(!(var6 != var2)) { _fun0001_ip = 112; continue _fun0001 }
 60:
            var2 = var3.row;
            if(!(!(var2 < var4))) { _fun0001_ip = 112; continue _fun0001 }
 70:
            var2 = var3.section;
            if(!(!(var2 < var4))) { _fun0001_ip = 112; continue _fun0001 }
 79:
            var2 = 'section';
            if(!(var2 !== var5)) { _fun0001_ip = 105; continue _fun0001 }
 87:
            var4 = 'item';
            var2 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 103; continue _fun0001 }
 97:
            var2 = var3.row;
 103:
            _fun0001_ip = 110; continue _fun0001;
 105:
            var2 = var3.section;
 110:
            return var2;
 112:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function GuildChannels(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var7 = _closure1_slot1;
            var4 = _closure1_slot2;
            var3 = 35;
            var3 = var4[var3];
            var5 = undefined;
            var8 = var7.bind(var5)(var3);
            var3 = var6.guild;
            var3 = var8.bind(var5)(var3);
            var _closure2_slot1 = var3;
            var3 = 36;
            var3 = var4[var3];
            var7 = var7.bind(var5)(var3);
            var3 = var6.guild;
            var3 = var7.bind(var5)(var3);
            var _closure2_slot2 = var3;
            var3 = _closure1_slot0;
            var7 = 37;
            var7 = var4[var7];
            var9 = var3.bind(var5)(var7);
            var8 = var9.useStateFromStoresObject;
            var10 = _closure1_slot7;
            var7 = new Array(1);
            var7[0] = var10;
            var1 = function() {
                var4 = _closure1_slot7;
                var3 = var4.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.guild;
                var2 = var1.id;
                var1 = {};
                var6 = _closure2_slot1;
                var1['guildActionRows'] = var6;
                var5 = _closure2_slot2;
                var1['channelNoticeRows'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var8.bind(var9)(var7, var1);
            var8 = var1.guildChannels;
            var7 = var1.guildChannelsVersion;
            var1 = 38;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0002_ip = 204; continue _fun0002 }
 160:
            var4 = _closure1_slot14;
            var3 = _closure1_slot17;
            var2 = {};
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'guildChannels';
            var2[var6] = var8;
            var6 = 'guildChannelsVersion';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 204:
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function FavoriteChannels(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 39;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var1 = var6.useFavoritesServerChannelList;
            var7 = var1.bind(var6)();
            var1 = 38;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useShouldRenderChannelList;
            var3 = var1.bind(var3)();
            var1 = null;
            if(!var3) { _fun0003_ip = 108; continue _fun0003 }
 62:
            var4 = _closure1_slot14;
            var3 = _closure1_slot17;
            var2 = {};
            var8 = arg1;
            var9 = var2;
            var6 = copyDataProperties(var9, var8);
            var6 = 'guildChannels';
            var2[var6] = var7;
            var7 = 0;
            var6 = 'guildChannelsVersion';
            var2[var6] = var7;
            var1 = var4.bind(var5)(var3, var2);
 108:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var13.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var11 = 1;
    var7 = var6[var11];
    var4 = metroImportAll;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var13.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_NUX_SERVER;
    var _closure1_slot10 = var7;
    var4 = var4.FAVORITES;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.useYouBarTotalHeight;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 14;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'position': 'relative', 'overflow': 'hidden'};
    var12 = 15;
    var12 = var6[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.PANEL_BG;
    var10['backgroundColor'] = var12;
    var4['container'] = var10;
    var10 = {};
    var10['flex'] = var11;
    var4['listWrapper'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot16 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var2 = arg1;
            var14 = var2.contentInset;
            var _closure2_slot0 = var14;
            var15 = var2.guild;
            var _closure2_slot1 = var15;
            var21 = var2.guildChannels;
            var _closure2_slot2 = var21;
            var20 = var2.selectedChannelId;
            var _closure2_slot3 = var20;
            var3 = var2.selectedVoiceChannelId;
            var _closure2_slot4 = var3;
            var7 = var2.style;
            var _closure2_slot5 = var7;
            var2 = _closure1_slot16;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var _closure2_slot6 = var10;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var2 = 16;
            var5 = var16[var2];
            var5 = var13.bind(var4)(var5);
            var5 = var5.bind(var4)(var15);
            var23 = var5.bannerHeight;
            var _closure2_slot7 = var23;
            var19 = var5.bannerWidth;
            var _closure2_slot8 = var19;
            var8 = var5.headerHeight;
            var _closure2_slot9 = var8;
            var9 = var5.fontScale;
            var _closure2_slot10 = var9;
            var34 = var5.listTop;
            var33 = var5.listBottom;
            var32 = var5.listPaddingBottom;
            var22 = var5.listViewportHeight;
            var _closure2_slot11 = var22;
            var5 = _closure1_slot4;
            var11 = var5.useRef;
            var6 = null;
            var36 = var11.bind(var5)(var6);
            var _closure2_slot12 = var36;
            var12 = var5.useEffect;
            var11 = new Array(2);
            var11[0] = var36;
            var11[1] = var21;
            var6 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.registerFastListChannelVisibilityMethod;
                var3 = _closure2_slot12;
                var2 = _closure2_slot2;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6 = var12.bind(var5)(var6, var11);
            var11 = var21.getSections;
            var6 = false;
            var29 = var11.bind(var21)(var6);
            var _closure2_slot13 = var29;
            var24 = var15.id;
            var6 = _closure1_slot0;
            var11 = 18;
            var11 = var16[var11];
            var17 = var6.bind(var4)(var11);
            var12 = var17.useExternalScrollEventHandler;
            var11 = {};
            var11['id'] = var24;
            var11 = var12.bind(var17)(var11);
            var _closure2_slot14 = var11;
            var17 = var5.useCallback;
            var12 = new Array(1);
            var12[0] = var11;
            var11 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var5 = _closure2_slot14;
                var2 = var1.contentOffset;
                var4 = var2.y;
                var2 = var1.contentSize;
                var3 = var2.height;
                var1 = var1.layoutMeasurement;
                var2 = var1.height;
                var1 = undefined;
                var2 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var11 = var17.bind(var5)(var11, var12);
            var24 = var5.useCallback;
            var17 = new Array(3);
            var17[0] = var21;
            var17[1] = var15;
            var17[2] = var8;
            var12 = function(arg1) {
                var4 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 19;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = arg1;
                var1['fastList'] = var5;
                var6 = _closure2_slot2;
                var1['guildChannels'] = var6;
                var6 = _closure2_slot1;
                var1['guild'] = var6;
                var5 = _closure2_slot9;
                var1['headerHeight'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var30 = var24.bind(var5)(var12, var17);
            var17 = var5.useCallback;
            var12 = new Array(4);
            var12[0] = var15;
            var12[1] = var23;
            var12[2] = var19;
            var12[3] = var8;
            var8 = function(arg1) {
                var5 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 20;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = _closure2_slot1;
                var2['guild'] = var1;
                var7 = arg1;
                var7 = var7.scrollPosValue;
                var2['scrollPosition'] = var7;
                var7 = _closure2_slot7;
                var2['bannerHeight'] = var7;
                var7 = _closure2_slot8;
                var2['bannerWidth'] = var7;
                var6 = _closure2_slot9;
                var2['headerHeight'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var35 = var17.bind(var5)(var8, var12);
            var17 = var5.useCallback;
            var12 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 21;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.logChannelListEndReached;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = new Array(0);
            var31 = var17.bind(var5)(var12, var8);
            var12 = var5.useMemo;
            var8 = new Array(3);
            var8[0] = var14;
            var8[1] = var7;
            var8[2] = var10;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var1 = _closure2_slot6;
                    var3 = var1.container;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 == var4;
                    var8 = undefined;
                    if(var4) { _fun0005_ip = 46; continue _fun0005 }
 37:
                    var4 = _closure2_slot0;
                    var8 = var4.top;
 46:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0005_ip = 58; continue _fun0005 }
 55:
                    var7 = var8;
 58:
                    var3['marginTop'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 84; continue _fun0005 }
 75:
                    var7 = _closure2_slot0;
                    var8 = var7.bottom;
 84:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0005_ip = 96; continue _fun0005 }
 93:
                    var7 = var8;
 96:
                    var3['paddingBottom'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0005_ip = 123; continue _fun0005 }
 114:
                    var7 = _closure2_slot0;
                    var8 = var7.left;
 123:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0005_ip = 135; continue _fun0005 }
 132:
                    var7 = var8;
 135:
                    var3['marginLeft'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var5 = undefined;
                    if(var7) { _fun0005_ip = 162; continue _fun0005 }
 153:
                    var7 = _closure2_slot0;
                    var5 = var7.right;
 162:
                    var6 = var6 != var5;
                    var4 = 0;
                    if(!var6) { _fun0005_ip = 174; continue _fun0005 }
 171:
                    var4 = var5;
 174:
                    var3['marginRight'] = var4;
                    var1[1] = var3;
                    var2 = _closure2_slot5;
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = var12.bind(var5)(var7, var8);
            var7 = 22;
            var7 = var16[var7];
            var12 = var6.bind(var4)(var7);
            var7 = var12.useRecentlyActiveChannelsEnabled;
            var19 = var7.bind(var12)();
            var _closure2_slot15 = var19;
            var7 = 23;
            var7 = var16[var7];
            var12 = var13.bind(var4)(var7);
            var7 = var15.id;
            var12 = var12.bind(var4)(var7);
            var _closure2_slot16 = var12;
            var7 = 24;
            var7 = var16[var7];
            var17 = var6.bind(var4)(var7);
            var14 = var17.useOptInEnabledForGuild;
            var7 = var15.id;
            var14 = var14.bind(var17)(var7);
            var _closure2_slot17 = var14;
            var7 = 25;
            var7 = var16[var7];
            var23 = var6.bind(var4)(var7);
            var17 = var23.useGuildLiveChannelNoticeInfo;
            var7 = var15.id;
            var23 = var17.bind(var23)(var7);
            var7 = 26;
            var7 = var16[var7];
            var17 = var6.bind(var4)(var7);
            var7 = var17.getScaledLiveChannelNoticeHeight;
            var17 = var7.bind(var17)(var9, var23);
            var _closure2_slot18 = var17;
            var7 = function useDrawerAwareScrollToTop(arg1) {
                var6 = arg1;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.useNavigation;
                var7 = var4.bind(var5)();
                var _closure3_slot1 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(2);
                var3[0] = var7;
                var3[1] = var6;
                var2 = function() {
                    var2 = -1;
                    var _closure4_slot0 = var2;
                    var5 = _closure3_slot1;
                    var4 = var5.addListener;
                    var3 = 'tabPress';
                    var2 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var _closure5_slot0 = var1;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 12;
                            var4 = var7[var1];
                            var1 = undefined;
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.coerceGuildsRoute;
                            var6 = _closure1_slot1;
                            var3 = 13;
                            var3 = var7[var3];
                            var3 = var6.bind(var1)(var3);
                            var3 = var3.bind(var1)();
                            var4 = var4.bind(var5)(var3);
                            var3 = null;
                            if(!(var3 != var4)) { _fun0006_ip = 157; continue _fun0006 }
 71:
                            var5 = _closure4_slot0;
                            var4 = -1;
                            if(!(var4 !== var5)) { _fun0006_ip = 111; continue _fun0006 }
 88:
                            var5 = global;
                            var6 = var5.clearTimeout;
                            var5 = _closure4_slot0;
                            var5 = var6.bind(var1)(var5);
                            _closure4_slot0 = var4;
                            _fun0006_ip = 157; continue _fun0006;
 111:
                            var4 = global;
                            var6 = var4.clearTimeout;
                            var5 = _closure4_slot0;
                            var5 = var6.bind(var1)(var5);
                            var5 = var4.setTimeout;
                            var4 = function() {
                                var3 = global;
                                var6 = var3.clearTimeout;
                                var4 = _closure4_slot0;
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var4 = -1;
                                _closure4_slot0 = var4;
                                var5 = _closure3_slot1;
                                var4 = var5.isFocused;
                                var4 = var4.bind(var5)();
                                var _closure6_slot0 = var4;
                                var3 = var3.requestAnimationFrame;
                                var2 = function() {
                                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                                        var1 = _closure1_slot6;
                                        var1 = var1.useReducedMotion;
                                        var2 = _closure6_slot0;
                                        if(!var2) { _fun0007_ip = 39; continue _fun0007 }
 23:
                                        var3 = _closure5_slot0;
                                        var3 = var3.defaultPrevented;
                                        var2 = !var3;
 39:
                                        if(!var2) { _fun0007_ip = 60; continue _fun0007 }
 42:
                                        var3 = _closure3_slot0;
                                        var4 = var3.current;
                                        var3 = null;
                                        var2 = var3 != var4;
 60:
                                        if(!var2) { _fun0007_ip = 89; continue _fun0007 }
 63:
                                        var2 = _closure3_slot0;
                                        var3 = var2.current;
                                        var2 = var3.scrollToTop;
                                        var1 = !var1;
                                        var1 = var2.bind(var3)(var1);
 89:
                                        var1 = undefined;
                                        return var1;
                                    }
                                };
                                var2 = var3.bind(var1)(var2);
                                return var1;
                            };
                            var2 = 300;
                            var2 = var5.bind(var1)(var4, var2);
                            _closure4_slot0 = var2;
 157:
                            return var1;
                        }
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure4_slot1 = var2;
                    var1 = function() {
                        var2 = _closure4_slot1;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    return var1;
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var7 = var7.bind(var4)(var36);
            var24 = var5.useCallback;
            var23 = new Array(2);
            var23[0] = var21;
            var23[1] = var29;
            var7 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var8 = 1;
                    var9 = var3 - var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 27;
                    var1 = var4[var1];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.SECTION_INDEX_FIRST_NAMED_CATEGORY;
                    var5 = var9;
                    if(!(var3 <= var1)) { _fun0008_ip = 107; continue _fun0008 }
 48:
                    var7 = 0;
                    var5 = var9;
                    if(!(var9 >= var7)) { _fun0008_ip = 107; continue _fun0008 }
 57:
                    var1 = _closure2_slot13;
                    var1 = var1[var9];
                    var3 = var9;
                    var5 = var3;
                    if(!(!(var1 > var7))) { _fun0008_ip = 107; continue _fun0008 }
 78:
                    var9 = var3 - var8;
                    var5 = var9;
                    if(!(var5 >= var7)) { _fun0008_ip = 107; continue _fun0008 }
 89:
                    var1 = _closure2_slot13;
                    var1 = var1[var9];
                    var3 = var9;
                    var5 = var3;
                    if(!(var1 > var7)) { _fun0008_ip = 78; continue _fun0008 }
 107:
                    var1 = -1;
                    var1 = var1 !== var5;
                    if(!var1) { _fun0008_ip = 162; continue _fun0008 }
 120:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 28;
                    var2 = var6[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.getChannelListSectionHasFooterDivider;
                    var2 = _closure2_slot2;
                    var2 = var3.bind(var4)(var2, var5);
                    var1 = !var2;
 162:
                    return var1;
                }
            };
            var7 = var24.bind(var5)(var7, var23);
            var _closure2_slot19 = var7;
            var24 = var5.useCallback;
            var23 = new Array(5);
            var23[0] = var21;
            var23[1] = var9;
            var23[2] = var12;
            var23[3] = var17;
            var23[4] = var22;
            var17 = function(arg1, arg2) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var3 = undefined;
                var6 = var4.bind(var3)(var2);
                var4 = var6.getChannelListItemSize;
                var2 = {};
                var8 = _closure2_slot2;
                var2['guildChannels'] = var8;
                var8 = arg1;
                var2['section'] = var8;
                var8 = arg2;
                var2['row'] = var8;
                var8 = _closure2_slot10;
                var2['fontScale'] = var8;
                var8 = _closure2_slot16;
                var2['voiceStates'] = var8;
                var8 = _closure2_slot18;
                var2['liveChannelNoticeHeight'] = var8;
                var7 = _closure2_slot11;
                var2['listViewportHeight'] = var7;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var25 = var24.bind(var5)(var17, var23);
            var24 = var5.useCallback;
            var23 = new Array(3);
            var23[0] = var21;
            var23[1] = var20;
            var23[2] = var15;
            var17 = function(arg1, arg2) {
                var4 = _closure1_slot14;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 28;
                var5 = var5[var1];
                var1 = undefined;
                var7 = var6.bind(var1)(var5);
                var6 = var7.renderChannelListItem;
                var5 = {};
                var9 = _closure2_slot2;
                var5['guildChannels'] = var9;
                var9 = arg1;
                var5['section'] = var9;
                var9 = arg2;
                var5['row'] = var9;
                var9 = _closure2_slot3;
                var5['selectedChannelId'] = var9;
                var8 = _closure2_slot1;
                var5['guild'] = var8;
                var5 = var6.bind(var7)(var5);
                var2['children'] = var5;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var26 = var24.bind(var5)(var17, var23);
            var23 = var5.useCallback;
            var17 = new Array(3);
            var17[0] = var21;
            var17[1] = var9;
            var17[2] = var7;
            var9 = function(arg1) {
                var9 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var2 = var5[var2];
                var3 = undefined;
                var8 = var4.bind(var3)(var2);
                var7 = var8.getChannelListSectionHeaderSize;
                var6 = _closure2_slot2;
                var11 = _closure2_slot10;
                var2 = _closure2_slot19;
                var10 = var2.bind(var3)(var9);
                var14 = var8;
                var13 = var6;
                var12 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var27 = var23.bind(var5)(var9, var17);
            var17 = var5.useCallback;
            var9 = new Array(3);
            var9[0] = var21;
            var9[1] = var19;
            var9[2] = var7;
            var7 = function(arg1) {
                var8 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 28;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.renderChannelListSectionHeader;
                var5 = _closure2_slot2;
                var10 = _closure2_slot15;
                var2 = _closure2_slot19;
                var9 = var2.bind(var4)(var8);
                var13 = var7;
                var12 = var5;
                var11 = var8;
                var5 = var13[var6](var12, var11, var10, var9, var8);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var28 = var17.bind(var5)(var7, var9);
            var17 = var5.useCallback;
            var9 = new Array(5);
            var9[0] = var21;
            var9[1] = var14;
            var9[2] = var12;
            var9[3] = var20;
            var9[4] = var3;
            var7 = function(arg1) {
                var8 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 28;
                var6 = var5[var2];
                var3 = undefined;
                var10 = var4.bind(var3)(var6);
                var9 = var10.calculateVoiceSummary;
                var6 = {};
                var7 = _closure2_slot2;
                var6['guildChannels'] = var7;
                var6['section'] = var8;
                var12 = _closure2_slot17;
                var6['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot16;
                var6['voiceStates'] = var12;
                var12 = _closure2_slot3;
                var6['selectedChannelId'] = var12;
                var11 = _closure2_slot4;
                var6['selectedVoiceChannelId'] = var11;
                var6 = var9.bind(var10)(var6);
                var2 = var5[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.getChannelListSectionFooterSize;
                var2 = var2.bind(var4)(var7, var8, var6);
                var4 = _closure1_slot1;
                var1 = 29;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var23 = var17.bind(var5)(var7, var9);
            var9 = var5.useCallback;
            var7 = new Array(5);
            var7[0] = var21;
            var7[1] = var14;
            var7[2] = var12;
            var7[3] = var20;
            var7[4] = var3;
            var3 = function(arg1) {
                var8 = arg1;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 28;
                var2 = var9[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.calculateVoiceSummary;
                var6 = {};
                var7 = _closure2_slot2;
                var6['guildChannels'] = var7;
                var6['section'] = var8;
                var12 = _closure2_slot17;
                var6['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot16;
                var6['voiceStates'] = var12;
                var12 = _closure2_slot3;
                var6['selectedChannelId'] = var12;
                var12 = _closure2_slot4;
                var6['selectedVoiceChannelId'] = var12;
                var13 = var10.bind(var11)(var6);
                var3 = var9[var3];
                var5 = var5.bind(var4)(var3);
                var3 = var5.renderChannelListSectionFooter;
                var14 = _closure2_slot12;
                var17 = var5;
                var16 = var7;
                var15 = var8;
                var5 = var17[var3](var16, var15, var14, var13, var12);
                var3 = _closure1_slot14;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var24 = var9.bind(var5)(var3, var7);
            var9 = var5.useMemo;
            var7 = new Array(1);
            var7[0] = var29;
            var3 = function() {
                var4 = _closure2_slot13;
                var3 = var4.reduce;
                var1 = function(arg1, arg2) {
                    var2 = arg1;
                    var1 = arg2;
                    var1 = var2 + var1;
                    return var1;
                };
                var2 = 0;
                var1 = var3.bind(var4)(var1, var2);
                var1 = var2 === var1;
                return var1;
            };
            var12 = var9.bind(var5)(var3, var7);
            var7 = var5.useCallback;
            var3 = new Array(1);
            var3[0] = var21;
            var1 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 28;
                var2 = var2[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.getFastListRecyclerKey;
                var10 = _closure2_slot2;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var1;
            };
            var19 = var7.bind(var5)(var1, var3);
            var3 = var5.useContext;
            var1 = 30;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var37 = var3.bind(var5)(var1);
            var1 = _closure1_slot13;
            var38 = var1.bind(var4)(var2);
            var3 = _closure1_slot14;
            var5 = 31;
            var1 = var16[var5];
            var2 = var13.bind(var4)(var1);
            var1 = {};
            var5 = var16[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Channels;
            var1['profile'] = var5;
            var7 = _closure1_slot14;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var8;
            var9 = _closure1_slot15;
            var8 = {};
            var10 = var10.listWrapper;
            var8['style'] = var10;
            var14 = _closure1_slot14;
            var10 = 32;
            var10 = var16[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['guild'] = var15;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var14 = _closure1_slot14;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var12) { _fun0004_ip = 1263; continue _fun0004 }
 1062:
            var12 = 34;
            var12 = var16[var12];
            var17 = var13.bind(var4)(var12);
            var12 = {};
            var12['insetEnd'] = var38;
            var12['waitFor'] = var37;
            var12['ref'] = var36;
            var12['chunkBase'] = var22;
            var22 = true;
            var12['stickyHeaderFooter'] = var22;
            var12['renderHeader'] = var35;
            var12['headerSize'] = var34;
            var34 = var33 + var32;
            var12['footerSize'] = var34;
            var32 = var33 + var32;
            var12['endReachedThreshold'] = var32;
            var12['onEndReached'] = var31;
            var12['renderAccessory'] = var30;
            var12['disableContentWrappers'] = var22;
            var12['sections'] = var29;
            var29 = 'disabled';
            var12['stickySectionsVariant'] = var29;
            var12['renderSection'] = var28;
            var12['sectionSize'] = var27;
            var12['renderItem'] = var26;
            var12['itemSize'] = var25;
            var12['renderSectionFooter'] = var24;
            var12['sectionFooterSize'] = var23;
            var12['optimizeListItemRender'] = var22;
            var12['getRecyclerKey'] = var19;
            var19 = _closure1_slot18;
            var18 = 'section';
            var18 = var19.bind(var4)(var21, var20, var18);
            var12['initialScrollSection'] = var18;
            var18 = 'item';
            var18 = var19.bind(var4)(var21, var20, var18);
            var12['initialScrollItem'] = var18;
            var18 = 'center';
            var12['initialScrollOrientation'] = var18;
            var12['onScroll'] = var11;
            var11 = var15.id;
            var11 = var14.bind(var4)(var17, var12, var11);
            _fun0004_ip = 1287; continue _fun0004;
 1263:
            var12 = 33;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['guild'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 1287:
            var10[1] = var11;
            var8['children'] = var10;
            var8 = var9.bind(var4)(var6, var8);
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = 43;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelsWrapper(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var5 = arg1;
            var6 = var5.selectedGuildId;
            var _closure2_slot0 = var6;
            var11 = var5.selectedChannelId;
            var1 = null;
            var4 = Object.create(var1);
            var2 = 0;
            var4['selectedGuildId'] = var2;
            var4['selectedChannelId'] = var2;
            var17 = {};
            var16 = var5;
            var15 = var4;
            var7 = copyDataProperties(var17, var16, var15);
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 37;
            var10 = var9[var4];
            var5 = undefined;
            var14 = var8.bind(var5)(var10);
            var13 = var14.useStateFromStores;
            var10 = _closure1_slot8;
            var12 = new Array(1);
            var12[0] = var10;
            var10 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var13.bind(var14)(var12, var10);
            var4 = var9[var4];
            var9 = var8.bind(var5)(var4);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot9;
            var4 = new Array(1);
            var4[0] = var10;
            var3 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var8.bind(var9)(var4, var3);
            if(!(var1 != var12)) { _fun0009_ip = 371; continue _fun0009 }
 151:
            var1 = _closure1_slot10;
            if(!(var6 !== var1)) { _fun0009_ip = 371; continue _fun0009 }
 162:
            var1 = _closure1_slot12;
            if(!(var6 !== var1)) { _fun0009_ip = 316; continue _fun0009 }
 173:
            var1 = _closure1_slot11;
            if(!(var6 !== var1)) { _fun0009_ip = 316; continue _fun0009 }
 184:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 41;
            var1 = var4[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.shouldNSFWGateGuild;
            var1 = var1.bind(var3)(var6);
            var8 = _closure1_slot14;
            if(var1) { _fun0009_ip = 273; continue _fun0009 }
 222:
            var3 = _closure1_slot19;
            var1 = {};
            var17 = var1;
            var16 = var7;
            var4 = copyDataProperties(var17, var16);
            var4 = 'guild';
            var1[var4] = var12;
            var4 = 'selectedChannelId';
            var1[var4] = var11;
            var4 = 'selectedVoiceChannelId';
            var1[var4] = var10;
            var1 = var8.bind(var5)(var3, var1);
            _fun0009_ip = 314; continue _fun0009;
 273:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 42;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = var7.style;
            var3['style'] = var9;
            var3['guildId'] = var6;
            var1 = var8.bind(var5)(var4, var3);
 314:
            _fun0009_ip = 369; continue _fun0009;
 316:
            var8 = _closure1_slot14;
            var4 = _closure1_slot20;
            var3 = {};
            var17 = var3;
            var16 = var7;
            var9 = copyDataProperties(var17, var16);
            var9 = 'guild';
            var3[var9] = var12;
            var9 = 'selectedChannelId';
            var3[var9] = var11;
            var9 = 'selectedVoiceChannelId';
            var3[var9] = var10;
            var1 = var8.bind(var5)(var4, var3);
 369:
            _fun0009_ip = 417; continue _fun0009;
 371:
            var4 = _closure1_slot14;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 40;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var7.style;
            var2['style'] = var7;
            var2['selectedGuildId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 417:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();