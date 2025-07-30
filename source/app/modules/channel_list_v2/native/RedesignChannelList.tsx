// app/modules/channel_list_v2/native/RedesignChannelList.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var13 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var6;
    var1 = function useDrawerAwareScrollToTop(arg1, arg2) {
        var6 = arg1;
        var7 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 11;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.useNavigation;
        var8 = var4.bind(var5)();
        var _closure2_slot2 = var8;
        var5 = _closure1_slot4;
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var8;
        var3[1] = var7;
        var3[2] = var6;
        var2 = function() {
            var2 = -1;
            var _closure3_slot0 = var2;
            var5 = _closure2_slot2;
            var4 = var5.addListener;
            var3 = 'tabPress';
            var2 = function(arg1) {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    var1 = arg1;
                    var _closure4_slot0 = var1;
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
                    if(!(var3 != var4)) { _fun0001_ip = 157; continue _fun0001 }
 71:
                    var5 = _closure3_slot0;
                    var4 = -1;
                    if(!(var4 !== var5)) { _fun0001_ip = 111; continue _fun0001 }
 88:
                    var5 = global;
                    var6 = var5.clearTimeout;
                    var5 = _closure3_slot0;
                    var5 = var6.bind(var1)(var5);
                    _closure3_slot0 = var4;
                    _fun0001_ip = 157; continue _fun0001;
 111:
                    var4 = global;
                    var6 = var4.clearTimeout;
                    var5 = _closure3_slot0;
                    var5 = var6.bind(var1)(var5);
                    var5 = var4.setTimeout;
                    var4 = function() {
                        var3 = global;
                        var6 = var3.clearTimeout;
                        var4 = _closure3_slot0;
                        var1 = undefined;
                        var4 = var6.bind(var1)(var4);
                        var4 = -1;
                        _closure3_slot0 = var4;
                        var5 = _closure2_slot2;
                        var4 = var5.isFocused;
                        var4 = var4.bind(var5)();
                        var _closure5_slot0 = var4;
                        var3 = var3.requestAnimationFrame;
                        var2 = function() {
                            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                                var1 = _closure1_slot6;
                                var4 = var1.useReducedMotion;
                                var1 = _closure5_slot0;
                                if(!var1) { _fun0002_ip = 39; continue _fun0002 }
 23:
                                var2 = _closure4_slot0;
                                var2 = var2.defaultPrevented;
                                var1 = !var2;
 39:
                                if(!var1) { _fun0002_ip = 157; continue _fun0002 }
 42:
                                var2 = _closure2_slot0;
                                var5 = null;
                                if(!(var5 != var2)) { _fun0002_ip = 68; continue _fun0002 }
 55:
                                var2 = _closure2_slot0;
                                var2 = var2.current;
                                if(!(var5 == var2)) { _fun0002_ip = 120; continue _fun0002 }
 68:
                                var2 = _closure2_slot1;
                                var2 = var5 != var2;
                                if(!var2) { _fun0002_ip = 92; continue _fun0002 }
 79:
                                var3 = _closure2_slot1;
                                var3 = var3.current;
                                var2 = var5 != var3;
 92:
                                if(!var2) { _fun0002_ip = 157; continue _fun0002 }
 95:
                                var2 = _closure2_slot1;
                                var5 = var2.current;
                                var3 = var5.scrollToTop;
                                var2 = !var4;
                                var2 = var3.bind(var5)(var2);
                                _fun0002_ip = 157; continue _fun0002;
 120:
                                var1 = _closure2_slot0;
                                var3 = var1.current;
                                var2 = var3.scrollToOffset;
                                var1 = {};
                                var5 = 0;
                                var1['offset'] = var5;
                                var4 = !var4;
                                var1['animated'] = var4;
                                var1 = var2.bind(var3)(var1);
 157:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = 300;
                    var2 = var5.bind(var1)(var4, var2);
                    _closure3_slot0 = var2;
 157:
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            var _closure3_slot1 = var2;
            var1 = function() {
                var2 = _closure3_slot1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var _closure1_slot23 = var1;
    var1 = function getInitialPosition(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
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
            if(!(var6 != var3)) { _fun0003_ip = 112; continue _fun0003 }
 50:
            var2 = var3.row;
            if(!(var6 != var2)) { _fun0003_ip = 112; continue _fun0003 }
 60:
            var2 = var3.row;
            if(!(!(var2 < var4))) { _fun0003_ip = 112; continue _fun0003 }
 70:
            var2 = var3.section;
            if(!(!(var2 < var4))) { _fun0003_ip = 112; continue _fun0003 }
 79:
            var2 = 'section';
            if(!(var2 !== var5)) { _fun0003_ip = 105; continue _fun0003 }
 87:
            var4 = 'item';
            var2 = undefined;
            if(!(var4 === var5)) { _fun0003_ip = 103; continue _fun0003 }
 97:
            var2 = var3.row;
 103:
            _fun0003_ip = 110; continue _fun0003;
 105:
            var2 = var3.section;
 110:
            return var2;
 112:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function GuildChannels(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 46;
            var1 = var5[var1];
            var6 = undefined;
            var8 = var4.bind(var6)(var1);
            var1 = var7.guild;
            var1 = var8.bind(var6)(var1);
            var _closure2_slot1 = var1;
            var1 = 47;
            var1 = var5[var1];
            var8 = var4.bind(var6)(var1);
            var5 = var7.guild;
            var9 = var7.enableFasterChannelListExperiment;
            var1 = null;
            var4 = var1 != var9;
            if(!var4) { _fun0004_ip = 83; continue _fun0004 }
 80:
            var4 = var9;
 83:
            var4 = var8.bind(var6)(var5, var4);
            var _closure2_slot2 = var4;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var8 = 48;
            var8 = var5[var8];
            var10 = var4.bind(var6)(var8);
            var9 = var10.useStateFromStoresObject;
            var11 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var11;
            var2 = function() {
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
            var2 = var9.bind(var10)(var8, var2);
            var9 = var2.guildChannels;
            var8 = var2.guildChannelsVersion;
            var2 = 49;
            var2 = var5[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.useShouldRenderChannelList;
            var2 = var2.bind(var4)();
            var1 = null;
            if(!var2) { _fun0004_ip = 281; continue _fun0004 }
 183:
            var2 = var7.enableFasterChannelListExperiment;
            var5 = _closure1_slot17;
            if(var2) { _fun0004_ip = 238; continue _fun0004 }
 196:
            var4 = _closure1_slot22;
            var2 = {};
            var13 = var2;
            var12 = var7;
            var10 = copyDataProperties(var13, var12);
            var10 = 'guildChannels';
            var2[var10] = var9;
            var10 = 'guildChannelsVersion';
            var2[var10] = var8;
            var2 = var5.bind(var6)(var4, var2);
            _fun0004_ip = 278; continue _fun0004;
 238:
            var4 = _closure1_slot20;
            var3 = {};
            var13 = var3;
            var12 = var7;
            var7 = copyDataProperties(var13, var12);
            var7 = 'guildChannels';
            var3[var7] = var9;
            var7 = 'guildChannelsVersion';
            var3[var7] = var8;
            var2 = var5.bind(var6)(var4, var3);
 278:
            var1 = var2;
 281:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function FavoriteChannels(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var7 = arg1;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 50;
            var1 = var4[var1];
            var6 = undefined;
            var5 = var2.bind(var6)(var1);
            var1 = var5.useFavoritesServerChannelList;
            var8 = var1.bind(var5)();
            var1 = 49;
            var1 = var4[var1];
            var2 = var2.bind(var6)(var1);
            var1 = var2.useShouldRenderChannelList;
            var2 = var1.bind(var2)();
            var1 = null;
            if(!var2) { _fun0005_ip = 167; continue _fun0005 }
 65:
            var2 = var7.enableFasterChannelListExperiment;
            var5 = _closure1_slot17;
            if(var2) { _fun0005_ip = 122; continue _fun0005 }
 78:
            var4 = _closure1_slot22;
            var2 = {};
            var12 = var2;
            var11 = var7;
            var9 = copyDataProperties(var12, var11);
            var9 = 'guildChannels';
            var2[var9] = var8;
            var10 = 0;
            var9 = 'guildChannelsVersion';
            var2[var9] = var10;
            var2 = var5.bind(var6)(var4, var2);
            _fun0005_ip = 164; continue _fun0005;
 122:
            var4 = _closure1_slot20;
            var3 = {};
            var12 = var3;
            var11 = var7;
            var7 = copyDataProperties(var12, var11);
            var7 = 'guildChannels';
            var3[var7] = var8;
            var8 = 0;
            var7 = 'guildChannelsVersion';
            var3[var7] = var8;
            var2 = var5.bind(var6)(var4, var3);
 164:
            var1 = var2;
 167:
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var4 = native4;
    var8 = var4.bind(var1)(var7);
    var _closure1_slot4 = var8;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot5 = var7;
    var4 = var4.Platform;
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
    var7 = var4.STICKY_BANNER_ASPECT_RATIO;
    var _closure1_slot10 = var7;
    var7 = var4.getScaledChannelRowHeight;
    var _closure1_slot11 = var7;
    var7 = var4.VIEWABILITY_CONFIG;
    var _closure1_slot12 = var7;
    var4 = var4.BANNER_MAX_HEIGHT_PERCENTAGE;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.EMPTY_NUX_SERVER;
    var _closure1_slot14 = var7;
    var4 = var4.FAVORITES;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.FAVORITES_RAW_GUILD_ID;
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot17 = var7;
    var4 = var4.jsxs;
    var _closure1_slot18 = var4;
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
    var _closure1_slot19 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var17 = var3.contentInset;
            var _closure2_slot0 = var17;
            var15 = var3.guild;
            var _closure2_slot1 = var15;
            var21 = var3.guildChannels;
            var _closure2_slot2 = var21;
            var20 = var3.selectedChannelId;
            var _closure2_slot3 = var20;
            var2 = var3.selectedVoiceChannelId;
            var _closure2_slot4 = var2;
            var12 = var3.style;
            var _closure2_slot5 = var12;
            var3 = _closure1_slot19;
            var4 = undefined;
            var10 = var3.bind(var4)();
            var _closure2_slot6 = var10;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            var3 = 16;
            var3 = var16[var3];
            var3 = var13.bind(var4)(var3);
            var6 = var3.bind(var4)(var15);
            var23 = var6.bannerHeight;
            var _closure2_slot7 = var23;
            var19 = var6.bannerWidth;
            var _closure2_slot8 = var19;
            var3 = var6.headerHeight;
            var _closure2_slot9 = var3;
            var5 = var6.fontScale;
            var _closure2_slot10 = var5;
            var34 = var6.listTop;
            var33 = var6.listBottom;
            var32 = var6.listPaddingBottom;
            var22 = var6.listViewportHeight;
            var _closure2_slot11 = var22;
            var7 = _closure1_slot4;
            var6 = var7.useRef;
            var14 = null;
            var36 = var6.bind(var7)(var14);
            var _closure2_slot12 = var36;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var7 = new Array(2);
            var7[0] = var36;
            var7[1] = var21;
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
            var6 = var8.bind(var9)(var6, var7);
            var7 = var21.getSections;
            var6 = false;
            var29 = var7.bind(var21)(var6);
            var _closure2_slot13 = var29;
            var11 = var15.id;
            var6 = _closure1_slot0;
            var7 = 18;
            var7 = var16[var7];
            var9 = var6.bind(var4)(var7);
            var8 = var9.useExternalScrollEventHandler;
            var7 = {};
            var7['id'] = var11;
            var7 = var8.bind(var9)(var7);
            var _closure2_slot14 = var7;
            var11 = _closure1_slot4;
            var9 = var11.useCallback;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function(arg1) {
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
            var11 = var9.bind(var11)(var7, var8);
            var24 = _closure1_slot4;
            var9 = var24.useCallback;
            var8 = new Array(3);
            var8[0] = var21;
            var8[1] = var15;
            var8[2] = var3;
            var7 = function(arg1) {
                var4 = _closure1_slot17;
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
            var30 = var9.bind(var24)(var7, var8);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = new Array(4);
            var7[0] = var15;
            var7[1] = var23;
            var7[2] = var19;
            var7[3] = var3;
            var3 = function(arg1) {
                var5 = _closure1_slot17;
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
            var35 = var8.bind(var9)(var3, var7);
            var9 = _closure1_slot4;
            var8 = var9.useCallback;
            var7 = function() {
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
            var3 = new Array(0);
            var31 = var8.bind(var9)(var7, var3);
            var3 = 22;
            var3 = var16[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useMobileQuestDockHeight;
            var3 = var3.bind(var7)();
            var _closure2_slot15 = var3;
            var9 = _closure1_slot4;
            var8 = var9.useMemo;
            var7 = new Array(4);
            var7[0] = var17;
            var7[1] = var12;
            var7[2] = var10;
            var7[3] = var3;
            var3 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                    if(var4) { _fun0007_ip = 46; continue _fun0007 }
 37:
                    var4 = _closure2_slot0;
                    var8 = var4.top;
 46:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0007_ip = 58; continue _fun0007 }
 55:
                    var7 = var8;
 58:
                    var3['marginTop'] = var7;
                    var7 = _closure2_slot0;
                    var8 = var6 == var7;
                    var7 = undefined;
                    if(var8) { _fun0007_ip = 84; continue _fun0007 }
 75:
                    var8 = _closure2_slot0;
                    var7 = var8.bottom;
 84:
                    var9 = var6 != var7;
                    var8 = 0;
                    if(!var9) { _fun0007_ip = 96; continue _fun0007 }
 93:
                    var8 = var7;
 96:
                    var7 = _closure2_slot15;
                    var7 = var8 + var7;
                    var3['paddingBottom'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0007_ip = 131; continue _fun0007 }
 122:
                    var7 = _closure2_slot0;
                    var8 = var7.left;
 131:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0007_ip = 143; continue _fun0007 }
 140:
                    var7 = var8;
 143:
                    var3['marginLeft'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var5 = undefined;
                    if(var7) { _fun0007_ip = 170; continue _fun0007 }
 161:
                    var7 = _closure2_slot0;
                    var5 = var7.right;
 170:
                    var6 = var6 != var5;
                    var4 = 0;
                    if(!var6) { _fun0007_ip = 182; continue _fun0007 }
 179:
                    var4 = var5;
 182:
                    var3['marginRight'] = var4;
                    var1[1] = var3;
                    var2 = _closure2_slot5;
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = var8.bind(var9)(var3, var7);
            var3 = 23;
            var3 = var16[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.useRecentlyActiveChannelsEnabled;
            var17 = var3.bind(var7)();
            var _closure2_slot16 = var17;
            var3 = 24;
            var3 = var16[var3];
            var7 = var13.bind(var4)(var3);
            var3 = var15.id;
            var9 = var7.bind(var4)(var3);
            var _closure2_slot17 = var9;
            var3 = 25;
            var3 = var16[var3];
            var12 = var6.bind(var4)(var3);
            var7 = var12.useOptInEnabledForGuild;
            var3 = var15.id;
            var12 = var7.bind(var12)(var3);
            var _closure2_slot18 = var12;
            var3 = 26;
            var3 = var16[var3];
            var19 = var6.bind(var4)(var3);
            var7 = var19.useGuildLiveChannelNoticeInfo;
            var3 = var15.id;
            var19 = var7.bind(var19)(var3);
            var3 = 27;
            var3 = var16[var3];
            var7 = var6.bind(var4)(var3);
            var3 = var7.getScaledLiveChannelNoticeHeight;
            var7 = var3.bind(var7)(var5, var19);
            var _closure2_slot19 = var7;
            var3 = _closure1_slot23;
            var3 = var3.bind(var4)(var14, var36);
            var23 = _closure1_slot4;
            var19 = var23.useCallback;
            var14 = new Array(2);
            var14[0] = var21;
            var14[1] = var29;
            var3 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = arg1;
                    var8 = 1;
                    var9 = var3 - var8;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 28;
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
                    var2 = 29;
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
            var3 = var19.bind(var23)(var3, var14);
            var _closure2_slot20 = var3;
            var23 = _closure1_slot4;
            var19 = var23.useCallback;
            var14 = new Array(5);
            var14[0] = var21;
            var14[1] = var5;
            var14[2] = var9;
            var14[3] = var7;
            var14[4] = var22;
            var7 = function(arg1, arg2) {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 29;
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
                var8 = _closure2_slot17;
                var2['voiceStates'] = var8;
                var8 = _closure2_slot19;
                var2['liveChannelNoticeHeight'] = var8;
                var7 = _closure2_slot11;
                var2['listViewportHeight'] = var7;
                var2 = var4.bind(var6)(var2);
                var4 = _closure1_slot1;
                var1 = 30;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var25 = var19.bind(var23)(var7, var14);
            var23 = _closure1_slot4;
            var19 = var23.useCallback;
            var14 = new Array(3);
            var14[0] = var21;
            var14[1] = var20;
            var14[2] = var15;
            var7 = function(arg1, arg2) {
                var4 = _closure1_slot17;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 29;
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
            var26 = var19.bind(var23)(var7, var14);
            var19 = _closure1_slot4;
            var14 = var19.useCallback;
            var7 = new Array(3);
            var7[0] = var21;
            var7[1] = var5;
            var7[2] = var3;
            var5 = function(arg1) {
                var9 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 29;
                var2 = var5[var2];
                var3 = undefined;
                var8 = var4.bind(var3)(var2);
                var7 = var8.getChannelListSectionHeaderSize;
                var6 = _closure2_slot2;
                var11 = _closure2_slot10;
                var2 = _closure2_slot20;
                var10 = var2.bind(var3)(var9);
                var14 = var8;
                var13 = var6;
                var12 = var9;
                var2 = var14[var7](var13, var12, var11, var10, var9);
                var4 = _closure1_slot1;
                var1 = 30;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var27 = var14.bind(var19)(var5, var7);
            var14 = _closure1_slot4;
            var7 = var14.useCallback;
            var5 = new Array(3);
            var5[0] = var21;
            var5[1] = var17;
            var5[2] = var3;
            var3 = function(arg1) {
                var8 = arg1;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 29;
                var2 = var4[var2];
                var4 = undefined;
                var7 = var3.bind(var4)(var2);
                var6 = var7.renderChannelListSectionHeader;
                var5 = _closure2_slot2;
                var10 = _closure2_slot16;
                var2 = _closure2_slot20;
                var9 = var2.bind(var4)(var8);
                var13 = var7;
                var12 = var5;
                var11 = var8;
                var5 = var13[var6](var12, var11, var10, var9, var8);
                var3 = _closure1_slot17;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var28 = var7.bind(var14)(var3, var5);
            var14 = _closure1_slot4;
            var7 = var14.useCallback;
            var5 = new Array(5);
            var5[0] = var21;
            var5[1] = var12;
            var5[2] = var9;
            var5[3] = var20;
            var5[4] = var2;
            var3 = function(arg1) {
                var8 = arg1;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 29;
                var6 = var5[var2];
                var3 = undefined;
                var10 = var4.bind(var3)(var6);
                var9 = var10.calculateVoiceSummary;
                var6 = {};
                var7 = _closure2_slot2;
                var6['guildChannels'] = var7;
                var6['section'] = var8;
                var12 = _closure2_slot18;
                var6['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot17;
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
                var1 = 30;
                var1 = var5[var1];
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var23 = var7.bind(var14)(var3, var5);
            var7 = _closure1_slot4;
            var5 = var7.useCallback;
            var3 = new Array(5);
            var3[0] = var21;
            var3[1] = var12;
            var3[2] = var9;
            var3[3] = var20;
            var3[4] = var2;
            var2 = function(arg1) {
                var8 = arg1;
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 29;
                var2 = var9[var3];
                var4 = undefined;
                var11 = var5.bind(var4)(var2);
                var10 = var11.calculateVoiceSummary;
                var6 = {};
                var7 = _closure2_slot2;
                var6['guildChannels'] = var7;
                var6['section'] = var8;
                var12 = _closure2_slot18;
                var6['optInChannelsEnabled'] = var12;
                var12 = _closure2_slot17;
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
                var3 = _closure1_slot17;
                var2 = _closure1_slot5;
                var1 = {};
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var24 = var5.bind(var7)(var2, var3);
            var7 = _closure1_slot4;
            var5 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var29;
            var2 = function() {
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
            var12 = var5.bind(var7)(var2, var3);
            var5 = _closure1_slot4;
            var3 = var5.useCallback;
            var2 = new Array(1);
            var2[0] = var21;
            var1 = function(arg1, arg2, arg3) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 29;
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
            var19 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot4;
            var2 = var3.useContext;
            var1 = 31;
            var1 = var16[var1];
            var1 = var13.bind(var4)(var1);
            var37 = var2.bind(var3)(var1);
            var3 = _closure1_slot17;
            var5 = 32;
            var1 = var16[var5];
            var2 = var13.bind(var4)(var1);
            var1 = {};
            var5 = var16[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Channels;
            var1['profile'] = var5;
            var7 = _closure1_slot17;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var8;
            var9 = _closure1_slot18;
            var8 = {};
            var10 = var10.listWrapper;
            var8['style'] = var10;
            var14 = _closure1_slot17;
            var10 = 33;
            var10 = var16[var10];
            var13 = var13.bind(var4)(var10);
            var10 = {};
            var10['guild'] = var15;
            var13 = var14.bind(var4)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var14 = _closure1_slot17;
            var13 = _closure1_slot1;
            var16 = _closure1_slot2;
            if(var12) { _fun0006_ip = 1341; continue _fun0006 }
 1145:
            var12 = 35;
            var12 = var16[var12];
            var17 = var13.bind(var4)(var12);
            var12 = {};
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
            var19 = _closure1_slot24;
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
            _fun0006_ip = 1365; continue _fun0006;
 1341:
            var12 = 34;
            var12 = var16[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['guild'] = var15;
            var11 = var14.bind(var4)(var13, var12);
 1365:
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
    var _closure1_slot20 = var4;
    var4 = {};
    var7 = 'function RedesignChannelListTsx1(event){const{scrollPosition,handleGuildsNavigationScroll}=this.__closure;scrollPosition.set(event.contentOffset.y);handleGuildsNavigationScroll(event.contentOffset.y,event.contentSize.height,event.layoutMeasurement.height);}';
    var4['code'] = var7;
    var _closure1_slot21 = var4;
    var7 = var8.memo;
    var4 = function(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var2 = arg1;
            var14 = var2.contentInset;
            var _closure2_slot0 = var14;
            var30 = var2.guild;
            var _closure2_slot1 = var30;
            var19 = var2.guildChannels;
            var17 = var2.guildChannelsVersion;
            var21 = var2.selectedChannelId;
            var _closure2_slot2 = var21;
            var5 = var2.style;
            var _closure2_slot3 = var5;
            var4 = undefined;
            var _closure2_slot17 = var4;
            var _closure2_slot18 = var4;
            var _closure2_slot19 = var4;
            var35 = var30.id;
            var _closure2_slot4 = var35;
            var2 = _closure1_slot19;
            var12 = var2.bind(var4)();
            var _closure2_slot5 = var12;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 36;
            var2 = var10[var2];
            var3 = var9.bind(var4)(var2);
            var2 = var3.useFontScale;
            var2 = var2.bind(var3)();
            var6 = _closure1_slot4;
            var3 = var6.useRef;
            var20 = null;
            var32 = var3.bind(var6)(var20);
            var _closure2_slot6 = var32;
            var3 = 37;
            var6 = var10[var3];
            var7 = var9.bind(var4)(var6);
            var6 = var7.useSharedValue;
            var24 = 0;
            var15 = var6.bind(var7)(var24);
            var _closure2_slot7 = var15;
            var6 = 18;
            var6 = var10[var6];
            var8 = var9.bind(var4)(var6);
            var7 = var8.useExternalScrollEventHandler;
            var6 = {};
            var6['id'] = var35;
            var11 = var7.bind(var8)(var6);
            var _closure2_slot8 = var11;
            var3 = var10[var3];
            var7 = var9.bind(var4)(var3);
            var6 = var7.useAnimatedScrollHandler;
            var3 = function S(arg1) {
                var1 = arg1;
                var5 = _closure2_slot7;
                var4 = var5.set;
                var3 = var1.contentOffset;
                var3 = var3.y;
                var3 = var4.bind(var5)(var3);
                var5 = _closure2_slot8;
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
            var8 = {};
            var8['scrollPosition'] = var15;
            var8['handleGuildsNavigationScroll'] = var11;
            var3['__closure'] = var8;
            var8 = 10052897147972.0;
            var3['__workletHash'] = var8;
            var8 = _closure1_slot21;
            var3['__initData'] = var8;
            var23 = var6.bind(var7)(var3);
            var8 = _closure1_slot1;
            var3 = 38;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var27 = var3.height;
            var3 = 39;
            var3 = var10[var3];
            var3 = var8.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var3 = var3.top;
            var6 = 22;
            var6 = var10[var6];
            var7 = var9.bind(var4)(var6);
            var6 = var7.useMobileQuestDockHeight;
            var7 = var6.bind(var7)();
            var18 = 16;
            var6 = var10[var18];
            var6 = var9.bind(var4)(var6);
            var6 = var6.CHANNEL_LIST_PADDING_BOTTOM;
            var7 = var6 + var7;
            var _closure2_slot9 = var7;
            var3 = var27 - var3;
            var _closure2_slot10 = var3;
            var6 = 40;
            var6 = var10[var6];
            var6 = var8.bind(var4)(var6);
            var38 = var6.bind(var4)();
            var _closure2_slot11 = var38;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var11 = var6.bind(var8)(var24);
            var8 = _closure1_slot3;
            var6 = 2;
            var8 = var8.bind(var4)(var11, var6);
            var13 = var8[var24];
            var6 = 1;
            var6 = var8[var6];
            var _closure2_slot12 = var6;
            var22 = _closure1_slot4;
            var11 = var22.useCallback;
            var8 = new Array(2);
            var8[0] = var32;
            var8[1] = var3;
            var6 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var4 = _closure2_slot12;
                    var1 = undefined;
                    var3 = function(arg1) {
                        var2 = arg1;
                        var1 = 1;
                        var1 = var2 + var1;
                        return var1;
                    };
                    var3 = var4.bind(var1)(var3);
                    var3 = _closure2_slot6;
                    var5 = var3.current;
                    var3 = null;
                    var6 = var3 == var5;
                    var4 = undefined;
                    if(var6) { _fun0010_ip = 73; continue _fun0010 }
 43:
                    var6 = var5.recyclerlistview_unsafe;
                    var5 = var3 == var6;
                    var4 = undefined;
                    if(var5) { _fun0010_ip = 73; continue _fun0010 }
 58:
                    var5 = var6.getContentDimension;
                    var5 = var5.bind(var6)();
                    var4 = var5.height;
 73:
                    var5 = var3 != var4;
                    var3 = 0;
                    if(!var5) { _fun0010_ip = 85; continue _fun0010 }
 82:
                    var3 = var4;
 85:
                    var2 = _closure2_slot10;
                    if(!(var3 > var2)) { _fun0010_ip = 126; continue _fun0010 }
 93:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 21;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.logChannelListEndReached;
                    var2 = var2.bind(var3)();
 126:
                    return var1;
                }
            };
            var22 = var11.bind(var22)(var6, var8);
            var11 = _closure1_slot4;
            var8 = var11.useMemo;
            var6 = new Array(3);
            var6[0] = var14;
            var6[1] = var5;
            var6[2] = var12;
            var5 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var1 = _closure2_slot5;
                    var3 = var1.container;
                    var1 = new Array(3);
                    var1[0] = var3;
                    var3 = {};
                    var4 = _closure2_slot0;
                    var6 = null;
                    var4 = var6 == var4;
                    var8 = undefined;
                    if(var4) { _fun0011_ip = 46; continue _fun0011 }
 37:
                    var4 = _closure2_slot0;
                    var8 = var4.top;
 46:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0011_ip = 58; continue _fun0011 }
 55:
                    var7 = var8;
 58:
                    var3['marginTop'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0011_ip = 84; continue _fun0011 }
 75:
                    var7 = _closure2_slot0;
                    var8 = var7.bottom;
 84:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0011_ip = 96; continue _fun0011 }
 93:
                    var7 = var8;
 96:
                    var3['paddingBottom'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var8 = undefined;
                    if(var7) { _fun0011_ip = 123; continue _fun0011 }
 114:
                    var7 = _closure2_slot0;
                    var8 = var7.left;
 123:
                    var9 = var6 != var8;
                    var7 = 0;
                    if(!var9) { _fun0011_ip = 135; continue _fun0011 }
 132:
                    var7 = var8;
 135:
                    var3['marginLeft'] = var7;
                    var7 = _closure2_slot0;
                    var7 = var6 == var7;
                    var5 = undefined;
                    if(var7) { _fun0011_ip = 162; continue _fun0011 }
 153:
                    var7 = _closure2_slot0;
                    var5 = var7.right;
 162:
                    var6 = var6 != var5;
                    var4 = 0;
                    if(!var6) { _fun0011_ip = 174; continue _fun0011 }
 171:
                    var4 = var5;
 174:
                    var3['marginRight'] = var4;
                    var1[1] = var3;
                    var2 = _closure2_slot3;
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = var8.bind(var11)(var5, var6);
            var5 = 41;
            var6 = var10[var5];
            var14 = var9.bind(var4)(var6);
            var11 = var14.useChannelListData;
            var6 = {};
            var6['guildChannels'] = var19;
            var6['guildChannelsVersion'] = var17;
            var6['listRef'] = var32;
            var6['selectedChannelId'] = var21;
            var6 = var11.bind(var14)(var6);
            var31 = var6.data;
            var _closure2_slot13 = var31;
            var34 = var6.unreadBarsData;
            var14 = _closure1_slot4;
            var11 = var14.useMemo;
            var6 = new Array(3);
            var6[0] = var3;
            var3 = var31.length;
            var6[1] = var3;
            var6[2] = var38;
            var3 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot13;
                    var2 = var1.length;
                    var1 = 0;
                    var2 = var2 > var1;
                    var1 = undefined;
                    if(!var2) { _fun0012_ip = 44; continue _fun0012 }
 23:
                    var2 = {};
                    var4 = _closure2_slot10;
                    var2['height'] = var4;
                    var3 = _closure2_slot11;
                    var2['width'] = var3;
                    var1 = var2;
 44:
                    return var1;
                }
            };
            var26 = var11.bind(var14)(var3, var6);
            var _closure2_slot14 = var26;
            var14 = _closure1_slot4;
            var11 = var14.useMemo;
            var6 = new Array(2);
            var6[0] = var31;
            var6[1] = var21;
            var3 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot13;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var4 = arg1;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var2 = var2[var1];
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            var1 = var2.isReadableItem;
                            var1 = var1.bind(var2)(var4);
                            if(!var1) { _fun0014_ip = 84; continue _fun0014 }
 42:
                            var3 = _closure2_slot2;
                            var5 = var4.kind;
                            var2 = 'thread';
                            if(!(var2 !== var5)) { _fun0014_ip = 74; continue _fun0014 }
 62:
                            var2 = var4.channel;
                            var2 = var2.id;
                            _fun0014_ip = 80; continue _fun0014;
 74:
                            var2 = var4.threadId;
 80:
                            var1 = var3 === var2;
 84:
                            return var1;
                        }
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0013_ip = 42; continue _fun0013 }
 37:
                    var1 = var2.index;
 42:
                    return var1;
                }
            };
            var6 = var11.bind(var14)(var3, var6);
            var _closure2_slot15 = var6;
            var17 = _closure1_slot4;
            var14 = var17.useMemo;
            var11 = new Array(1);
            var11[0] = var31;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                    var3 = _closure2_slot13;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.kind;
                        var1 = 'channel';
                        var1 = var1 === var2;
                        return var1;
                    };
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var3 = var1 == var2;
                    var1 = undefined;
                    if(var3) { _fun0015_ip = 42; continue _fun0015 }
 37:
                    var1 = var2.index;
 42:
                    return var1;
                }
            };
            var3 = var14.bind(var17)(var3, var11);
            var11 = 23;
            var11 = var10[var11];
            var14 = var9.bind(var4)(var11);
            var11 = var14.useRecentlyActiveChannelsEnabled;
            var25 = var11.bind(var14)();
            var11 = 29;
            var11 = var10[var11];
            var17 = var9.bind(var4)(var11);
            var14 = var17.useRenderChannelListItem;
            var11 = {};
            var11['recentlyActiveSectionEnabled'] = var25;
            var11['guildChannels'] = var19;
            var11['guild'] = var30;
            var11['listRef'] = var32;
            var29 = var14.bind(var17)(var11);
            var5 = var10[var5];
            var11 = var9.bind(var4)(var5);
            var5 = var11.useViewableChannelListItems;
            var5 = var5.bind(var11)();
            var33 = var5.viewableIndices;
            var _closure2_slot16 = var33;
            var17 = var5.handleViewableItemsChanged;
            var5 = 20;
            var5 = var10[var5];
            var9 = var9.bind(var4)(var5);
            var5 = var9.useRedesignGuildHeaderHeight;
            var37 = var5.bind(var9)(var30);
            var5 = var30.banner;
            var9 = var20 != var5;
            var5 = 0;
            if(!var9) { _fun0009_ip = 885; continue _fun0009 }
 825:
            var11 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 30;
            var10 = var14[var10];
            var11 = var11.bind(var4)(var10);
            var10 = global;
            var25 = var10.Math;
            var19 = var25.min;
            var10 = _closure1_slot10;
            var14 = var38 / var10;
            var10 = _closure1_slot13;
            var10 = var27 * var10;
            var10 = var19.bind(var25)(var14, var10);
            var5 = var11.bind(var4)(var10);
 885:
            var39 = var37;
            if(!var9) { _fun0009_ip = 894; continue _fun0009 }
 891:
            var39 = var5;
 894:
            var10 = _closure1_slot4;
            var9 = var10.useRef;
            var9 = var9.bind(var10)(var4);
            _closure2_slot17 = var9;
            var11 = _closure1_slot4;
            var10 = var11.useCallback;
            var9 = new Array(2);
            var9[0] = var26;
            var9[1] = var6;
            var6 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                    var1 = _closure2_slot6;
                    var3 = var1.current;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0016_ip = 113; continue _fun0016 }
 18:
                    var2 = _closure2_slot14;
                    if(!(var1 != var2)) { _fun0016_ip = 113; continue _fun0016 }
 26:
                    var2 = _closure2_slot15;
                    if(!(var1 != var2)) { _fun0016_ip = 113; continue _fun0016 }
 34:
                    var5 = var3.recyclerlistview_unsafe;
                    var1 = var1 != var5;
                    if(!var1) { _fun0016_ip = 75; continue _fun0016 }
 47:
                    var2 = var5.getContentDimension;
                    var2 = var2.bind(var5)();
                    var5 = var2.height;
                    var2 = _closure2_slot14;
                    var2 = var2.height;
                    var1 = var5 <= var2;
 75:
                    if(var1) { _fun0016_ip = 113; continue _fun0016 }
 78:
                    var2 = var3.scrollToIndex;
                    var1 = {'animated': false, 'index': null, 'viewPosition': 0.3};
                    var4 = _closure2_slot15;
                    var1['index'] = var4;
                    var1 = var2.bind(var3)(var1);
 113:
                    var1 = undefined;
                    return var1;
                }
            };
            var27 = var10.bind(var11)(var6, var9);
            _closure2_slot18 = var27;
            var10 = _closure1_slot4;
            var9 = var10.useLayoutEffect;
            var6 = var20 == var26;
            var11 = undefined;
            if(var6) { _fun0009_ip = 974; continue _fun0009 }
 969:
            var11 = var26.height;
 974:
            var6 = new Array(5);
            var6[0] = var11;
            var6[1] = var35;
            var6[2] = var3;
            var6[3] = var33;
            var6[4] = var27;
            var3 = function() {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var4 = _closure2_slot4;
                    var3 = _closure2_slot17;
                    var3 = var3.current;
                    if(!(var4 === var3)) { _fun0017_ip = 26; continue _fun0017 }
 22:
                    var3 = undefined;
                    return var3;
 26:
                    var4 = _closure2_slot17;
                    var3 = _closure2_slot4;
                    var4['current'] = var3;
                    var3 = _closure2_slot18;
                    var5 = undefined;
                    var3 = var3.bind(var5)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = _closure2_slot18;
                    var2 = 0;
                    var2 = var4.bind(var5)(var3, var2);
                    var _closure3_slot0 = var2;
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var2 = _closure3_slot0;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                }
            };
            var3 = var9.bind(var10)(var3, var6);
            var10 = _closure1_slot4;
            var9 = var10.useEffect;
            var6 = new Array(2);
            var6[0] = var31;
            var6[1] = var33;
            var3 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.registerFlashListChannelVisibilityMethod;
                var3 = _closure2_slot13;
                var2 = _closure2_slot16;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var3 = var9.bind(var10)(var3, var6);
            var10 = _closure1_slot4;
            var9 = var10.useMemo;
            var6 = new Array(1);
            var6[0] = var30;
            var3 = function() {
                var4 = _closure1_slot17;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 34;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot1;
                var1['guild'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var28 = var9.bind(var10)(var3, var6);
            var3 = 8;
            var14 = var5 + var3;
            _closure2_slot19 = var14;
            var6 = _closure1_slot4;
            var5 = var6.useMemo;
            var3 = new Array(2);
            var3[0] = var7;
            var3[1] = var14;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot9;
                var1['paddingBottom'] = var3;
                var2 = _closure2_slot19;
                var1['paddingTop'] = var2;
                return var1;
            };
            var25 = var5.bind(var6)(var1, var3);
            var1 = _closure1_slot11;
            var19 = var1.bind(var4)(var2);
            var1 = _closure1_slot23;
            var1 = var1.bind(var4)(var32, var20);
            var3 = _closure1_slot17;
            var10 = _closure1_slot1;
            var36 = _closure1_slot2;
            var5 = 32;
            var1 = var36[var5];
            var2 = var10.bind(var4)(var1);
            var1 = {};
            var6 = _closure1_slot0;
            var5 = var36[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.Profiles;
            var5 = var5.Channels;
            var1['profile'] = var5;
            var7 = _closure1_slot18;
            var6 = _closure1_slot5;
            var5 = {};
            var5['style'] = var8;
            var11 = _closure1_slot17;
            var8 = 42;
            var8 = var36[var8];
            var9 = var10.bind(var4)(var8);
            var8 = {};
            var8['guild'] = var30;
            var8['scrollPosition'] = var15;
            var8['bannerHeight'] = var39;
            var8['bannerWidth'] = var38;
            var8['headerHeight'] = var37;
            var9 = var11.bind(var4)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var11 = _closure1_slot17;
            var9 = 43;
            var9 = var36[var9];
            var10 = var10.bind(var4)(var9);
            var9 = {};
            var9['guild'] = var30;
            var9['guildId'] = var35;
            var9['listRef'] = var32;
            var9['data'] = var34;
            var9['viewableIndices'] = var33;
            var33 = var20 != var21;
            var20 = undefined;
            if(!var33) { _fun0009_ip = 1317; continue _fun0009 }
 1314:
            var20 = var21;
 1317:
            var9['selectedChannelId'] = var20;
            var9['scrollPosition'] = var15;
            var9['listPaddingTop'] = var14;
            var9['endReachedCounter'] = var13;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var11 = _closure1_slot18;
            var10 = _closure1_slot5;
            var9 = {};
            var12 = var12.listWrapper;
            var9['style'] = var12;
            var14 = _closure1_slot17;
            var13 = _closure1_slot1;
            var21 = _closure1_slot2;
            var12 = 33;
            var12 = var21[var12];
            var13 = var13.bind(var4)(var12);
            var12 = {};
            var12['guild'] = var30;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var15 = _closure1_slot17;
            var20 = _closure1_slot0;
            var13 = 44;
            var13 = var21[var13];
            var13 = var20.bind(var4)(var13);
            var14 = var13.AnimatedFlashList;
            var13 = {};
            var13['ref'] = var32;
            var13['data'] = var31;
            var13['extraData'] = var30;
            var13['renderItem'] = var29;
            var13['ListEmptyComponent'] = var28;
            var13['onLoad'] = var27;
            var13['estimatedListSize'] = var26;
            var13['contentContainerStyle'] = var25;
            var13['estimatedFirstItemOffset'] = var24;
            var24 = false;
            var13['automaticallyAdjustsScrollIndicatorInsets'] = var24;
            var24 = true;
            var13['scrollsToTop'] = var24;
            var13['onScroll'] = var23;
            var13['onEndReached'] = var22;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var18 = var18.CHANNEL_LIST_PADDING_BOTTOM;
            var13['onEndReachedThreshold'] = var18;
            var13['estimatedItemSize'] = var19;
            var18 = 45;
            var22 = var21[var18];
            var22 = var20.bind(var4)(var22);
            var22 = var22.redesignChannelListOverrideItemLayout;
            var13['overrideItemLayout'] = var22;
            var22 = var21[var18];
            var22 = var20.bind(var4)(var22);
            var22 = var22.getRedesignChannelListItemType;
            var13['getItemType'] = var22;
            var18 = var21[var18];
            var18 = var20.bind(var4)(var18);
            var18 = var18.redesignChannelListKeyExtractor;
            var13['keyExtractor'] = var18;
            var18 = 3;
            var18 = var18 * var19;
            var13['drawDistance'] = var18;
            var13['onViewableItemsChanged'] = var17;
            var16 = _closure1_slot12;
            var13['viewabilityConfig'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot22 = var4;
    var4 = 56;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel_list_v2/native/RedesignChannelList.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelsWrapper(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var5 = arg1;
            var6 = var5.selectedGuildId;
            var _closure2_slot0 = var6;
            var12 = var5.selectedChannelId;
            var3 = null;
            var2 = Object.create(var3);
            var1 = 0;
            var2['selectedGuildId'] = var1;
            var2['selectedChannelId'] = var1;
            var19 = {};
            var18 = var5;
            var17 = var2;
            var7 = copyDataProperties(var19, var18, var17);
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var1 = 51;
            var1 = var11[var1];
            var5 = undefined;
            var9 = var8.bind(var5)(var1);
            var8 = var9.useExperiment;
            var1 = {};
            var10 = 'channel-list-wrapper';
            var1['location'] = var10;
            var1 = var8.bind(var9)(var1);
            var10 = var1.enabled;
            var1 = var1.enableProfiling;
            var9 = _closure1_slot0;
            var8 = 48;
            var13 = var11[var8];
            var16 = var9.bind(var5)(var13);
            var15 = var16.useStateFromStores;
            var13 = _closure1_slot8;
            var14 = new Array(1);
            var14[0] = var13;
            var13 = function() {
                var3 = _closure1_slot8;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var15.bind(var16)(var14, var13);
            var8 = var11[var8];
            var11 = var9.bind(var5)(var8);
            var9 = var11.useStateFromStores;
            var14 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var14;
            var4 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getVoiceChannelId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var11 = var9.bind(var11)(var8, var4);
            if(!(var3 != var13)) { _fun0018_ip = 551; continue _fun0018 }
 201:
            var3 = _closure1_slot14;
            if(!(var6 !== var3)) { _fun0018_ip = 551; continue _fun0018 }
 212:
            var3 = _closure1_slot16;
            if(!(var6 !== var3)) { _fun0018_ip = 487; continue _fun0018 }
 223:
            var3 = _closure1_slot15;
            if(!(var6 !== var3)) { _fun0018_ip = 487; continue _fun0018 }
 234:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 53;
            var3 = var8[var3];
            var4 = var4.bind(var5)(var3);
            var3 = var4.shouldNSFWGateGuild;
            var3 = var3.bind(var4)(var6);
            var8 = _closure1_slot17;
            if(var3) { _fun0018_ip = 444; continue _fun0018 }
 275:
            if(var1) { _fun0018_ip = 338; continue _fun0018 }
 278:
            var3 = _closure1_slot25;
            var1 = {};
            var19 = var1;
            var18 = var7;
            var4 = copyDataProperties(var19, var18);
            var4 = 'guild';
            var1[var4] = var13;
            var4 = 'selectedChannelId';
            var1[var4] = var12;
            var4 = 'selectedVoiceChannelId';
            var1[var4] = var11;
            var4 = 'enableFasterChannelListExperiment';
            var1[var4] = var10;
            var1 = var8.bind(var5)(var3, var1);
            _fun0018_ip = 442; continue _fun0018;
 338:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 55;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = 'guild-channels';
            var3['id'] = var9;
            var15 = _closure1_slot17;
            var14 = _closure1_slot25;
            var9 = {};
            var19 = var9;
            var18 = var7;
            var16 = copyDataProperties(var19, var18);
            var16 = 'guild';
            var9[var16] = var13;
            var16 = 'selectedChannelId';
            var9[var16] = var12;
            var16 = 'selectedVoiceChannelId';
            var9[var16] = var11;
            var16 = 'enableFasterChannelListExperiment';
            var9[var16] = var10;
            var9 = var15.bind(var5)(var14, var9);
            var3['children'] = var9;
            var1 = var8.bind(var5)(var4, var3);
 442:
            _fun0018_ip = 485; continue _fun0018;
 444:
            var4 = _closure1_slot1;
            var9 = _closure1_slot2;
            var3 = 54;
            var3 = var9[var3];
            var4 = var4.bind(var5)(var3);
            var3 = {};
            var9 = var7.style;
            var3['style'] = var9;
            var3['guildId'] = var6;
            var1 = var8.bind(var5)(var4, var3);
 485:
            _fun0018_ip = 549; continue _fun0018;
 487:
            var8 = _closure1_slot17;
            var4 = _closure1_slot26;
            var3 = {};
            var19 = var3;
            var18 = var7;
            var9 = copyDataProperties(var19, var18);
            var9 = 'guild';
            var3[var9] = var13;
            var9 = 'selectedChannelId';
            var3[var9] = var12;
            var9 = 'selectedVoiceChannelId';
            var3[var9] = var11;
            var9 = 'enableFasterChannelListExperiment';
            var3[var9] = var10;
            var1 = var8.bind(var5)(var4, var3);
 549:
            _fun0018_ip = 597; continue _fun0018;
 551:
            var4 = _closure1_slot17;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 52;
            var2 = var8[var2];
            var3 = var3.bind(var5)(var2);
            var2 = {};
            var7 = var7.style;
            var2['style'] = var7;
            var2['selectedGuildId'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 597:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();