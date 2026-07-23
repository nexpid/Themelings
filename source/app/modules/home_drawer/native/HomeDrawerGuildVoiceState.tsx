// app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function VoiceUsers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.voiceUsers;
            var2 = var2.guildId;
            var _closure2_slot0 = var2;
            var2 = var1.length;
            var4 = 3;
            var11 = var1;
            if(!(var2 > var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.slice;
            var2 = 0;
            var11 = var3.bind(var1)(var2, var4);
case 2:
            var3 = var1.length;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var5 = _closure1_slot11;
            var4 = _closure1_slot4;
            var3 = {};
            var6 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
            var3['style'] = var6;
            var8 = _closure1_slot11;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 10;
            var6 = var13[var2];
            var2 = undefined;
            var6 = var12.bind(var2)(var6);
            var7 = var6.AvatarPile;
            var6 = {};
            var10 = 11;
            var10 = var13[var10];
            var10 = var12.bind(var2)(var10);
            var10 = var10.AvatarSizes;
            var10 = var10.XSMALL;
            var6['size'] = var10;
            var12 = var11.map;
            var10 = function(arg1) {
                var1 = arg1;
                var1 = var1.username;
                return var1;
            };
            var10 = var12.bind(var11)(var10);
            var6['names'] = var10;
            var10 = var11.length;
            var6['totalCount'] = var10;
            var10 = var11.map;
            var9 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot11;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 11;
                var2 = var8[var6];
                var4 = undefined;
                var2 = var7.bind(var4)(var2);
                var3 = var2.Avatar;
                var2 = {};
                var6 = var8[var6];
                var6 = var7.bind(var4)(var6);
                var6 = var6.AvatarSizes;
                var6 = var6.XSMALL;
                var2['size'] = var6;
                var2['user'] = var1;
                var6 = _closure2_slot0;
                var2['guildId'] = var6;
                var6 = false;
                var2['animate'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var10.bind(var11)(var9);
            var6['children'] = var9;
            var6 = var8.bind(var2)(var7, var6);
            var3['children'] = var6;
            var1 = var5.bind(var2)(var4, var3);
case 4:
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function LiveTag() {
        var1 = _closure1_slot14;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var3 = _closure1_slot11;
        var2 = _closure1_slot4;
        var1 = {};
        var6 = var8.tag;
        var1['style'] = var6;
        var7 = _closure1_slot11;
        var11 = _closure1_slot0;
        var12 = _closure1_slot2;
        var5 = 12;
        var5 = var12[var5];
        var5 = var11.bind(var4)(var5);
        var6 = var5.Text;
        var5 = {'variant': 'text-xxs/bold', 'style': null, 'lineClamp': 1};
        var8 = var8.tagText;
        var5['style'] = var8;
        var8 = 13;
        var9 = var12[var8];
        var9 = var11.bind(var4)(var9);
        var10 = var9.intl;
        var9 = var10.string;
        var8 = var12[var8];
        var8 = var11.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.dI3q4h;
        var9 = var9.bind(var10)(var8);
        var8 = var9.toUpperCase;
        var8 = var8.bind(var9)();
        var5['children'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var7 = var6[var4];
    var7 = var11.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GUILD_VOCAL_CHANNELS_KEY;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelTypes;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 8;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var10 = {'paddingRight': 8, 'height': 40, 'gap': 4, 'justifyContent': 'center'};
    var7['voiceContainer'] = var10;
    var12 = {};
    var10 = 9;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12['borderRadius'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.shadows;
    var15 = var13.SHADOW_MEDIUM;
    var16 = var12;
    var13 = copyDataProperties(var16, var15);
    var7['streamPreviewShadow'] = var12;
    var12 = {'width': 72, 'height': 44, 'borderRadius': null, 'overflow': 'hidden'};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12['borderRadius'] = var13;
    var7['streamPreview'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'opacity': 0.8};
    var7['streamPreviewDarkGradient'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'opacity': 0.2};
    var7['streamPreviewGradient'] = var12;
    var12 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'bottom': 0, 'borderWidth': 1};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12['borderColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.radii;
    var13 = var13.sm;
    var12['borderRadius'] = var13;
    var7['streamPreviewBorder'] = var12;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 4, 'paddingVertical': 1, 'borderBottomRightRadius': null, 'overflow': 'hidden', 'justifyContent': 'center', 'alignItems': 'center', 'backgroundColor': null, 'position': 'absolute', 'top': 0, 'left': 0};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.xs;
    var9['borderBottomRightRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.RED_400;
    var9['backgroundColor'] = var12;
    var4['tag'] = var9;
    var9 = {'textAlign': 'center', 'color': null, 'includeFontPadding': false};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.WHITE;
    var9['color'] = var10;
    var4['tagText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 21;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function GuildVoiceState(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var11 = var2.voiceUsers;
            var1 = var2.streamingChannelId;
            var12 = var2.streamingUser;
            var10 = var2.guildId;
            var2 = _closure1_slot13;
            var5 = undefined;
            var20 = var2.bind(var5)();
            var3 = var11.length;
            var2 = 0;
            var2 = var3 > var2;
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 14;
            var3 = var6[var3];
            var4 = var4.bind(var5)(var3);
            var6 = null;
            var8 = var6 != var1;
            var3 = undefined;
            if(!var8) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var1;
case 6:
            var8 = var6 == var12;
            var1 = undefined;
            if(var8) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = var12.id;
case 8:
            var1 = var4.bind(var5)(var10, var3, var1);
            var22 = var1.previewUrl;
            var1 = null;
            if(!var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var4 = _closure1_slot11;
            var3 = _closure1_slot4;
            var2 = {};
            var9 = var20.voiceContainer;
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var13 = var6 != var12;
            var12 = 32;
            if(!var13) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var12 = 48;
case 12:
            var9['height'] = var12;
            var8[1] = var9;
            var2['style'] = var8;
            if(!(var6 != var22)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = _closure1_slot11;
            var8 = _closure1_slot4;
            var6 = {};
            var12 = var20.streamPreviewShadow;
            var6['style'] = var12;
            var14 = _closure1_slot12;
            var13 = _closure1_slot4;
            var12 = {};
            var15 = var20.streamPreview;
            var12['style'] = var15;
            var18 = _closure1_slot11;
            var17 = _closure1_slot1;
            var21 = _closure1_slot2;
            var15 = 15;
            var15 = var21[var15];
            var16 = var17.bind(var5)(var15);
            var15 = {};
            var19 = var20.streamPreview;
            var15['style'] = var19;
            var19 = {};
            var19['uri'] = var22;
            var15['source'] = var19;
            var16 = var18.bind(var5)(var16, var15);
            var15 = new Array(5);
            var15[0] = var16;
            var23 = _closure1_slot11;
            var16 = 16;
            var18 = var21[var16];
            var22 = var17.bind(var5)(var18);
            var18 = {};
            var19 = ['rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 0)'];
            var18['colors'] = var19;
            var19 = {'x': 0, 'y': 0};
            var18['start'] = var19;
            var19 = {'x': 0, 'y': 1};
            var18['end'] = var19;
            var19 = var20.streamPreviewDarkGradient;
            var18['style'] = var19;
            var19 = 'none';
            var18['pointerEvents'] = var19;
            var18 = var23.bind(var5)(var22, var18);
            var15[1] = var18;
            var18 = _closure1_slot11;
            var16 = var21[var16];
            var17 = var17.bind(var5)(var16);
            var16 = {};
            var21 = ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)'];
            var16['colors'] = var21;
            var21 = {'x': 0, 'y': 0};
            var16['start'] = var21;
            var21 = {'x': 1, 'y': 1};
            var16['end'] = var21;
            var21 = var20.streamPreviewGradient;
            var16['style'] = var21;
            var16['pointerEvents'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[2] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot4;
            var16 = {};
            var20 = var20.streamPreviewBorder;
            var16['style'] = var20;
            var16['pointerEvents'] = var19;
            var16 = var18.bind(var5)(var17, var16);
            var15[3] = var16;
            var18 = _closure1_slot11;
            var17 = _closure1_slot16;
            var16 = {};
            var16 = var18.bind(var5)(var17, var16);
            var15[4] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var5)(var13, var12);
            var6['children'] = var12;
            var6 = var9.bind(var5)(var8, var6);
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var9 = _closure1_slot11;
            var8 = _closure1_slot15;
            var7 = {};
            var7['voiceUsers'] = var11;
            var7['guildId'] = var10;
            var6 = var9.bind(var5)(var8, var7);
case 16:
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 10:
            return var1;
        }
    };
    var3['GuildVoiceState'] = var4;
    var2 = function useVoiceUsers(arg1) {
        var7 = arg1;
        var _closure2_slot0 = var7;
        var8 = var7.id;
        var _closure2_slot1 = var8;
        var5 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 17;
        var2 = var9[var2];
        var4 = undefined;
        var6 = var5.bind(var4)(var2);
        var2 = var6.useIsHomeDrawerChannelInChannelList;
        var6 = var2.bind(var6)();
        var _closure2_slot2 = var6;
        var2 = 18;
        var10 = var9[var2];
        var13 = var5.bind(var4)(var10);
        var12 = var13.useStateFromStoresArray;
        var10 = _closure1_slot5;
        var11 = new Array(2);
        var11[0] = var10;
        var10 = _closure1_slot8;
        var11[1] = var10;
        var10 = new Array(2);
        var10[0] = var8;
        var10[1] = var6;
        var6 = function() {
            var5 = _closure1_slot5;
            var4 = var5.getChannels;
            var3 = _closure2_slot1;
            var3 = var4.bind(var5)(var3);
            var2 = _closure1_slot6;
            var4 = var3[var2];
            var3 = var4.filter;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var4 = var1.channel;
                    var3 = var4.type;
                    var1 = _closure1_slot10;
                    var1 = var1.GUILD_VOICE;
                    var1 = var3 === var1;
                    if(!var1) { _fun0003_ip = 5; continue _fun0003 }
case 17:
                    var6 = _closure1_slot8;
                    var5 = var6.isGuildOrCategoryOrChannelMuted;
                    var3 = _closure2_slot1;
                    var2 = var4.id;
                    var2 = var5.bind(var6)(var3, var2);
                    var1 = !var2;
case 5:
                    if(!var1) { _fun0003_ip = 7; continue _fun0003 }
case 18:
                    var3 = _closure2_slot2;
                    var2 = undefined;
                    var1 = var3.bind(var2)(var4);
case 7:
                    return var1;
                }
            };
            var3 = var3.bind(var4)(var2);
            var2 = var3.map;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.channel;
                var1 = var1.id;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6 = var12.bind(var13)(var11, var6, var10);
        var _closure2_slot3 = var6;
        var10 = var9[var2];
        var13 = var5.bind(var4)(var10);
        var12 = var13.useStateFromStores;
        var10 = _closure1_slot9;
        var11 = new Array(1);
        var11[0] = var10;
        var10 = new Array(1);
        var10[0] = var8;
        var8 = function() {
            var3 = _closure1_slot9;
            var2 = var3.getVoiceStates;
            var1 = _closure2_slot1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var8 = var12.bind(var13)(var11, var8, var10);
        var _closure2_slot4 = var8;
        var2 = var9[var2];
        var9 = var5.bind(var4)(var2);
        var5 = var9.useStateFromStoresArray;
        var2 = _closure1_slot7;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var2 = _closure1_slot7;
            var1 = var2.getBlockedOrIgnoredIDs;
            var1 = var1.bind(var2)();
            return var1;
        };
        var2 = var5.bind(var9)(var4, var2);
        var _closure2_slot5 = var2;
        var5 = _closure1_slot3;
        var4 = var5.useMemo;
        var3 = new Array(4);
        var3[0] = var6;
        var3[1] = var8;
        var9 = var7.afkChannelId;
        var3[2] = var9;
        var3[3] = var2;
        var2 = function() {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.flatMap;
            var2 = _closure2_slot3;
            var1 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var2 = _closure2_slot0;
                    var2 = var2.afkChannelId;
                    if(!(var3 !== var2)) { _fun0004_ip = 19; continue _fun0004 }
case 20:
                    var2 = _closure2_slot4;
                    var4 = var2[var3];
                    var2 = null;
                    if(!(var2 == var4)) { _fun0004_ip = 21; continue _fun0004 }
case 22:
                    var4 = new Array(0);
case 21:
                    var3 = var4.map;
                    var2 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.user;
                        return var1;
                    };
                    var4 = var3.bind(var4)(var2);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 20;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var5.bind(var2)(var3);
                    var2 = var3.filterOutBlockedOrIgnoredUsers;
                    var1 = _closure2_slot5;
                    var1 = var2.bind(var3)(var4, var1);
                    return var1;
case 19:
                    var1 = new Array(0);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var3 = var4.bind(var5)(var2, var3);
        var4 = var5.useMemo;
        var2 = new Array(3);
        var2[0] = var8;
        var7 = var7.afkChannelId;
        var2[1] = var7;
        var2[2] = var6;
        var1 = function() {
            var1 = null;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var1;
            var1 = global;
            var4 = var1.Object;
            var3 = var4.keys;
            var1 = _closure2_slot4;
            var4 = var3.bind(var4)(var1);
            var3 = var4.forEach;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = arg1;
                    var3 = _closure2_slot0;
                    var3 = var3.afkChannelId;
                    if(!(var2 !== var3)) { _fun0005_ip = 23; continue _fun0005 }
case 20:
                    var4 = _closure2_slot3;
                    var3 = var4.includes;
                    var3 = var3.bind(var4)(var2);
                    if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var1 = _closure2_slot4;
                    var4 = var1[var2];
                    var5 = null;
                    if(!(var5 == var4)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                    var4 = new Array(0);
case 25:
                    var3 = var4.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.voiceState;
                        var1 = var1.selfStream;
                        return var1;
                    };
                    var1 = var3.bind(var4)(var1);
                    var3 = var5 != var1;
                    if(!var3) { _fun0005_ip = 9; continue _fun0005 }
case 27:
                    var4 = _closure3_slot0;
                    var3 = var5 == var4;
case 9:
                    if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 28:
                    var3 = var1.user;
                    _closure3_slot0 = var3;
                    _closure3_slot1 = var2;
case 23:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var1);
            var1 = {};
            var3 = _closure3_slot0;
            var1['streamingUser'] = var3;
            var2 = _closure3_slot1;
            var1['streamingChannelId'] = var2;
            return var1;
        };
        var2 = var4.bind(var5)(var1, var2);
        var1 = {};
        var1['voiceUsers'] = var3;
        var3 = var2.streamingUser;
        var1['streamingUser'] = var3;
        var2 = var2.streamingChannelId;
        var1['streamingChannelId'] = var2;
        return var1;
    };
    var3['useVoiceUsers'] = var2;
    return var1;
})();