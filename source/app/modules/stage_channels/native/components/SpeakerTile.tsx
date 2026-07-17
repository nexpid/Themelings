// app/modules/stage_channels/native/components/SpeakerTile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var17 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var17;
    var _closure1_slot2 = var12;
    var4 = function getSizeStyle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var1 = arg2;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = 8;
            var4 = var4[var6];
            var5 = undefined;
            var4 = var7.bind(var5)(var4);
            var4 = var4.StageTileSize;
            var4 = var4.FULL;
            if(!(var4 !== var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.StageTileSize;
            var2 = var2.HALF;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.third;
            return var2;
case 4:
            var2 = var1.half;
            return var2;
case 2:
            var1 = var1.full;
            return var1;
        }
    };
    var _closure1_slot12 = var4;
    var2 = function getTileWidthStyle(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.StageTileSize;
            var1 = arg3;
            if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var1 = var3.THIRD;
            if(!(var5 !== var1)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var1 = {};
            var2 = 1;
            var1['flex'] = var2;
            _fun0002_ip = 4; continue _fun0002;
case 8:
            var2 = {};
            var7 = arg2;
            var6 = 36;
            var7 = var7 - var6;
            var6 = 3;
            var6 = var7 / var6;
            var2['maxWidth'] = var6;
            var1 = var2;
case 4:
            _fun0002_ip = 10; continue _fun0002;
case 6:
            var2 = {};
            var3 = var3.FULL;
            if(!(var5 !== var3)) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var3 = _closure1_slot10;
            _fun0002_ip = 13; continue _fun0002;
case 11:
            var3 = _closure1_slot9;
case 13:
            var2['maxWidth'] = var3;
            var1 = var2;
case 10:
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = function getImageBackgroundStyle(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var3 = var3[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var1 = var1.StageTileSize;
            var3 = var1.THIRD;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0003_ip = 14; continue _fun0003 }
case 3:
            var3 = var2.imageBackground;
            var1 = new Array(1);
            var1[0] = var3;
            _fun0003_ip = 15; continue _fun0003;
case 14:
            var3 = var2.imageBackground;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = {};
            var4 = 12;
            var3['paddingBottom'] = var4;
            var2[1] = var3;
            var1 = var2;
case 15:
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var5);
    var1 = 0;
    var6 = var12[var1];
    var5 = metroImportAll;
    var1 = undefined;
    var13 = var5.bind(var1)(var6);
    var _closure1_slot3 = var13;
    var5 = 1;
    var5 = var12[var5];
    var5 = var11.bind(var1)(var5);
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var12[var5];
    var5 = var17.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var12[var5];
    var5 = var11.bind(var1)(var5);
    var5 = var5.ParticipantTypes;
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var12[var5];
    var5 = var11.bind(var1)(var5);
    var6 = var5.jsx;
    var _closure1_slot7 = var6;
    var5 = var5.jsxs;
    var _closure1_slot8 = var5;
    var8 = {};
    var6 = 212;
    var8['FULL'] = var6;
    var5 = 'FULL';
    var8[var6] = var5;
    var6 = 112;
    var8['HALF'] = var6;
    var5 = 'HALF';
    var8[var6] = var5;
    var8['THIRD'] = var6;
    var5 = 'THIRD';
    var8[var6] = var5;
    var5 = var8.FULL;
    var6 = 1.7777777777777777;
    var7 = var5 * var6;
    var _closure1_slot9 = var7;
    var5 = var8.HALF;
    var6 = var5 * var6;
    var _closure1_slot10 = var6;
    var5 = 5;
    var5 = var12[var5];
    var14 = var11.bind(var1)(var5);
    var10 = var14.createStyles;
    var5 = {};
    var15 = {'marginHorizontal': 4, 'marginVertical': 4, 'alignItems': 'center', 'flex': 1};
    var5['container'] = var15;
    var15 = {};
    var16 = var8.FULL;
    var15['height'] = var16;
    var5['full'] = var15;
    var15 = {};
    var16 = var8.HALF;
    var15['height'] = var16;
    var5['half'] = var15;
    var15 = {};
    var16 = var8.THIRD;
    var15['height'] = var16;
    var5['third'] = var15;
    var15 = {'flex': 1, 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var16 = 6;
    var18 = var12[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var15['borderRadius'] = var18;
    var5['avatarContainer'] = var15;
    var15 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch'};
    var5['imageBackground'] = var15;
    var15 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'bottom': 4, 'marginHorizontal': 4, 'paddingVertical': 4, 'paddingHorizontal': 8, 'backgroundColor': null, 'borderRadius': 6};
    var18 = 7;
    var18 = var12[var18];
    var21 = var11.bind(var1)(var18);
    var20 = var21.hexWithOpacity;
    var18 = var12[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.unsafe_rawColors;
    var19 = var18.BLACK;
    var18 = 0.3;
    var18 = var20.bind(var21)(var19, var18);
    var15['backgroundColor'] = var18;
    var5['nameplateContainer'] = var15;
    var15 = {};
    var18 = var12[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var15['color'] = var18;
    var5['nameplateText'] = var15;
    var15 = {'borderRadius': null, 'width': 16, 'height': 16, 'justifyContent': 'center', 'alignItems': 'center', 'marginEnd': 4};
    var18 = var12[var16];
    var18 = var17.bind(var1)(var18);
    var18 = var18.radii;
    var18 = var18.sm;
    var15['borderRadius'] = var18;
    var5['restricted'] = var15;
    var15 = {};
    var16 = var12[var16];
    var16 = var17.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.WHITE;
    var15['backgroundColor'] = var16;
    var5['blocked'] = var15;
    var5 = var10.bind(var14)(var5);
    var _closure1_slot11 = var5;
    var10 = var13.memo;
    var9 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var3 = arg1;
            var16 = var3.channel;
            var _closure2_slot0 = var16;
            var2 = var3.participant;
            var _closure2_slot1 = var2;
            var23 = var3.size;
            var3 = _closure1_slot11;
            var5 = undefined;
            var15 = var3.bind(var5)();
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var3 = var4.bind(var5)(var3);
            var3 = var3.bind(var5)();
            var22 = var3.width;
            var4 = _closure1_slot0;
            var3 = 10;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var3 = var7.useIsScreenLandscape;
            var10 = var3.bind(var7)();
            var17 = var2.user;
            var _closure2_slot2 = var17;
            var19 = var2.blocked;
            var18 = var2.ignored;
            var3 = 11;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var3;
            var8 = var16.id;
            var3 = new Array(2);
            var3[0] = var8;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot5;
                var3 = var4.getParticipant;
                var2 = _closure2_slot0;
                var2 = var2.id;
                var1 = _closure2_slot1;
                var1 = var1.id;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var13 = var6.bind(var7)(var4, var2, var3);
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var6 = var16.id;
            var2 = new Array(2);
            var2[0] = var6;
            var6 = var17.id;
            var2[1] = var6;
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 12;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showUserProfile;
                var2 = {};
                var6 = _closure2_slot2;
                var6 = var6.id;
                var2['userId'] = var6;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var6 = var3.bind(var4)(var1, var2);
            var1 = null;
            if(!(var1 != var13)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = var13.type;
            var2 = _closure1_slot6;
            var2 = var2.USER;
            if(!(var3 === var2)) { _fun0004_ip = 16; continue _fun0004 }
case 18:
            var12 = var19;
            if(var19) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var12 = var18;
case 19:
            var9 = _closure1_slot1;
            var20 = _closure1_slot2;
            var2 = 13;
            var2 = var20[var2];
            var2 = var9.bind(var5)(var2);
            var14 = var2.bind(var5)(var16, var13);
            var4 = _closure1_slot8;
            var21 = _closure1_slot0;
            var2 = 14;
            var2 = var20[var2];
            var2 = var21.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = 15;
            var8 = var20[var7];
            var8 = var21.bind(var5)(var8);
            var25 = var8.intl;
            var24 = var25.formatToPlainString;
            var7 = var20[var7];
            var7 = var21.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.ODlyvk;
            var7 = {};
            var7['name'] = var14;
            var7 = var24.bind(var25)(var8, var7);
            var2['accessibilityLabel'] = var7;
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var8 = var15.container;
            var7 = new Array(3);
            var7[0] = var8;
            var8 = _closure1_slot12;
            var8 = var8.bind(var5)(var23, var15);
            var7[1] = var8;
            var8 = _closure1_slot13;
            var8 = var8.bind(var5)(var23, var22, var10);
            var7[2] = var8;
            var2['style'] = var7;
            var2['onPress'] = var6;
            var7 = _closure1_slot4;
            var6 = {};
            var8 = var15.avatarContainer;
            var6['style'] = var8;
            var10 = _closure1_slot7;
            var8 = 16;
            var8 = var20[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var22 = _closure1_slot14;
            var22 = var22.bind(var5)(var23, var15);
            var8['style'] = var22;
            var24 = var17.getAvatarURL;
            var23 = var16.guild_id;
            var22 = 64;
            var22 = var24.bind(var17)(var23, var22);
            var8['url'] = var22;
            var13 = var13.speaking;
            var8['speaking'] = var13;
            var13 = true;
            var8['animate'] = var13;
            var24 = 17;
            var20 = var20[var24];
            var20 = var21.bind(var5)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XLARGE;
            var8['size'] = var20;
            var8['isStageCall'] = var13;
            var13 = var12;
            if(!var12) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var20 = {};
            var21 = 0.5;
            var20['opacity'] = var21;
            var13 = var20;
case 21:
            var8['avatarStyle'] = var13;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var13 = _closure1_slot7;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 18;
            var21 = var20[var9];
            var21 = var10.bind(var5)(var21);
            var22 = var21.VoiceStatus;
            var21 = {};
            var23 = var17.id;
            var21['userId'] = var23;
            var23 = var16.id;
            var21['channelId'] = var23;
            var21 = var13.bind(var5)(var22, var21);
            var8[1] = var21;
            var9 = var20[var9];
            var9 = var10.bind(var5)(var9);
            var10 = var9.ModeratorStatus;
            var9 = {};
            var17 = var17.id;
            var9['userId'] = var17;
            var16 = var16.id;
            var9['channelId'] = var16;
            var9 = var13.bind(var5)(var10, var9);
            var8[2] = var9;
            var6['children'] = var8;
            var7 = var4.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot8;
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var15.nameplateContainer;
            var7['style'] = var10;
            if(!var12) { _fun0004_ip = 23; continue _fun0004 }
case 24:
            var16 = _closure1_slot8;
            var13 = _closure1_slot4;
            var10 = {};
            var20 = var15.restricted;
            var17 = new Array(2);
            var17[0] = var20;
            var20 = null;
            if(!var19) { _fun0004_ip = 25; continue _fun0004 }
case 26:
            var20 = var15.blocked;
case 25:
            var17[1] = var20;
            var10['style'] = var17;
            if(!var19) { _fun0004_ip = 27; continue _fun0004 }
case 28:
            var21 = _closure1_slot7;
            var26 = _closure1_slot0;
            var25 = _closure1_slot2;
            var17 = var25[var24];
            var17 = var26.bind(var5)(var17);
            var20 = var17.Icon;
            var17 = {};
            var23 = _closure1_slot1;
            var22 = 19;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var17['source'] = var22;
            var22 = var25[var24];
            var22 = var26.bind(var5)(var22);
            var22 = var22.Icon;
            var22 = var22.Sizes;
            var22 = var22.EXTRA_SMALL;
            var17['size'] = var22;
            var22 = 6;
            var22 = var25[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.RED_400;
            var17['color'] = var22;
            var19 = var21.bind(var5)(var20, var17);
case 27:
            var17 = new Array(2);
            var17[0] = var19;
            if(!var18) { _fun0004_ip = 29; continue _fun0004 }
case 30:
            var21 = _closure1_slot7;
            var23 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = var22[var24];
            var19 = var23.bind(var5)(var19);
            var20 = var19.Icon;
            var19 = {};
            var26 = _closure1_slot1;
            var25 = 20;
            var25 = var22[var25];
            var25 = var26.bind(var5)(var25);
            var19['source'] = var25;
            var22 = var22[var24];
            var22 = var23.bind(var5)(var22);
            var22 = var22.Icon;
            var22 = var22.Sizes;
            var22 = var22.EXTRA_SMALL;
            var19['size'] = var22;
            var18 = var21.bind(var5)(var20, var19);
case 29:
            var17[1] = var18;
            var10['children'] = var17;
            var12 = var16.bind(var5)(var13, var10);
case 23:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot7;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 21;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'lineClamp': 1, 'style': null, 'variant': 'text-sm/medium', 'color': 'text-overlay-light'};
            var15 = var15.nameplateText;
            var11['style'] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var5)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
case 16:
            return var1;
        }
    };
    var9 = var10.bind(var13)(var9);
    var10 = 22;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/stage_channels/native/components/SpeakerTile.tsx';
    var10 = var11.bind(var12)(var10);
    var3['default'] = var9;
    var3['SPEAKER_TILE_HEIGHTS'] = var8;
    var3['LANDSCAPE_MAX_TILE_WIDTH_FULL'] = var7;
    var3['LANDSCAPE_MAX_TILE_WIDTH'] = var6;
    var3['useSpeakerTileStyles'] = var5;
    var3['getSizeStyle'] = var4;
    var3['getTileWidthStyle'] = var2;
    return var1;
})();