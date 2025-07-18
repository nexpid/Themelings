// app/modules/stage_channels/native/components/SpeakerTile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var9 = native2;
    var13 = native3;
    var3 = native6;
    var10 = native7;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var10;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var3, var1, var2);
    var1 = 0;
    var4 = var10[var1];
    var2 = native4;
    var1 = undefined;
    var11 = var2.bind(var1)(var4);
    var _closure1_slot3 = var11;
    var2 = 1;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var4 = var2.useWindowDimensions;
    var _closure1_slot4 = var4;
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 2;
    var2 = var10[var2];
    var2 = var13.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var2 = var2.ParticipantTypes;
    var _closure1_slot7 = var2;
    var2 = 4;
    var2 = var10[var2];
    var2 = var9.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot8 = var4;
    var2 = var2.jsxs;
    var _closure1_slot9 = var2;
    var6 = {};
    var4 = 212;
    var6['FULL'] = var4;
    var2 = 'FULL';
    var6[var4] = var2;
    var4 = 112;
    var6['HALF'] = var4;
    var2 = 'HALF';
    var6[var4] = var2;
    var6['THIRD'] = var4;
    var2 = 'THIRD';
    var6[var4] = var2;
    var2 = 5;
    var2 = var10[var2];
    var5 = var9.bind(var1)(var2);
    var4 = var5.createStyles;
    var2 = {};
    var8 = {'marginHorizontal': 4, 'marginVertical': 4, 'alignItems': 'center', 'flex': 1};
    var2['container'] = var8;
    var8 = {};
    var12 = var6.FULL;
    var8['height'] = var12;
    var2['full'] = var8;
    var8 = {};
    var12 = var6.HALF;
    var8['height'] = var12;
    var2['half'] = var8;
    var8 = {};
    var12 = var6.THIRD;
    var8['height'] = var12;
    var2['third'] = var8;
    var8 = {'flex': 1, 'width': '100%', 'alignItems': 'center', 'justifyContent': 'center', 'overflow': 'hidden'};
    var12 = 6;
    var14 = var10[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var8['borderRadius'] = var14;
    var2['avatarContainer'] = var8;
    var8 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'alignSelf': 'stretch'};
    var2['imageBackground'] = var8;
    var8 = {'position': 'absolute', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'bottom': 4, 'marginHorizontal': 4, 'paddingVertical': 4, 'paddingHorizontal': 8, 'backgroundColor': null, 'borderRadius': 6};
    var14 = 7;
    var14 = var10[var14];
    var17 = var9.bind(var1)(var14);
    var16 = var17.hexWithOpacity;
    var14 = var10[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var15 = var14.BLACK_500;
    var14 = 0.3;
    var14 = var16.bind(var17)(var15, var14);
    var8['backgroundColor'] = var14;
    var2['nameplateContainer'] = var8;
    var8 = {};
    var14 = var10[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.WHITE;
    var8['color'] = var14;
    var2['nameplateText'] = var8;
    var8 = {'borderRadius': null, 'width': 16, 'height': 16, 'justifyContent': 'center', 'alignItems': 'center', 'marginEnd': 4};
    var14 = var10[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var8['borderRadius'] = var14;
    var2['restricted'] = var8;
    var8 = {};
    var12 = var10[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.WHITE;
    var8['backgroundColor'] = var12;
    var2['blocked'] = var8;
    var5 = var4.bind(var5)(var2);
    var _closure1_slot10 = var5;
    var4 = function getSizeStyle(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
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
            if(!(var4 !== var3)) { _fun0001_ip = 96; continue _fun0001 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.StageTileSize;
            var2 = var2.HALF;
            if(!(var2 !== var3)) { _fun0001_ip = 88; continue _fun0001 }
 80:
            var2 = var1.third;
            return var2;
 88:
            var2 = var1.half;
            return var2;
 96:
            var1 = var1.full;
            return var1;
        }
    };
    var _closure1_slot11 = var4;
    var2 = function getTileWidthStyle(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 8;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.StageTileSize;
            var2 = var1.THIRD;
            var1 = arg1;
            if(!(var1 !== var2)) { _fun0002_ip = 55; continue _fun0002 }
 44:
            var1 = {};
            var2 = 1;
            var1['flex'] = var2;
            _fun0002_ip = 82; continue _fun0002;
 55:
            var2 = {};
            var4 = arg2;
            var3 = 36;
            var4 = var4 - var3;
            var3 = 3;
            var3 = var4 / var3;
            var2['maxWidth'] = var3;
            var1 = var2;
 82:
            return var1;
        }
    };
    var _closure1_slot12 = var2;
    var8 = function getImageBackgroundStyle(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(!(var1 !== var3)) { _fun0003_ip = 63; continue _fun0003 }
 47:
            var3 = var2.imageBackground;
            var1 = new Array(1);
            var1[0] = var3;
            _fun0003_ip = 94; continue _fun0003;
 63:
            var3 = var2.imageBackground;
            var2 = new Array(2);
            var2[0] = var3;
            var3 = {};
            var4 = 12;
            var3['paddingBottom'] = var4;
            var2[1] = var3;
            var1 = var2;
 94:
            return var1;
        }
    };
    var _closure1_slot13 = var8;
    var8 = var11.memo;
    var7 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = arg1;
            var16 = var3.channel;
            var _closure2_slot0 = var16;
            var2 = var3.participant;
            var _closure2_slot1 = var2;
            var23 = var3.size;
            var3 = _closure1_slot10;
            var5 = undefined;
            var15 = var3.bind(var5)();
            var3 = _closure1_slot4;
            var3 = var3.bind(var5)();
            var10 = var3.width;
            var17 = var2.user;
            var _closure2_slot2 = var17;
            var19 = var2.blocked;
            var18 = var2.ignored;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var7 = var4.bind(var5)(var3);
            var6 = var7.useStateFromStores;
            var3 = _closure1_slot6;
            var4 = new Array(1);
            var4[0] = var3;
            var8 = var16.id;
            var3 = new Array(2);
            var3[0] = var8;
            var2 = var2.id;
            var3[1] = var2;
            var2 = function() {
                var4 = _closure1_slot6;
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
                var1 = 10;
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
            if(!(var1 != var13)) { _fun0004_ip = 1067; continue _fun0004 }
 202:
            var3 = var13.type;
            var2 = _closure1_slot7;
            var2 = var2.USER;
            if(!(var3 === var2)) { _fun0004_ip = 1067; continue _fun0004 }
 224:
            var12 = var19;
            if(var19) { _fun0004_ip = 233; continue _fun0004 }
 230:
            var12 = var18;
 233:
            var9 = _closure1_slot1;
            var22 = _closure1_slot2;
            var2 = 11;
            var2 = var22[var2];
            var2 = var9.bind(var5)(var2);
            var14 = var2.bind(var5)(var16, var13);
            var4 = _closure1_slot9;
            var21 = _closure1_slot0;
            var2 = 12;
            var2 = var22[var2];
            var2 = var21.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var7 = 13;
            var8 = var22[var7];
            var8 = var21.bind(var5)(var8);
            var24 = var8.intl;
            var20 = var24.formatToPlainString;
            var7 = var22[var7];
            var7 = var21.bind(var5)(var7);
            var7 = var7.t;
            var8 = var7.ODlyvr;
            var7 = {};
            var7['name'] = var14;
            var7 = var20.bind(var24)(var8, var7);
            var2['accessibilityLabel'] = var7;
            var7 = 'button';
            var2['accessibilityRole'] = var7;
            var8 = var15.container;
            var7 = new Array(3);
            var7[0] = var8;
            var8 = _closure1_slot11;
            var8 = var8.bind(var5)(var23, var15);
            var7[1] = var8;
            var8 = _closure1_slot12;
            var8 = var8.bind(var5)(var23, var10);
            var7[2] = var8;
            var2['style'] = var7;
            var2['onPress'] = var6;
            var7 = _closure1_slot5;
            var6 = {};
            var8 = var15.avatarContainer;
            var6['style'] = var8;
            var10 = _closure1_slot8;
            var8 = 14;
            var8 = var22[var8];
            var9 = var9.bind(var5)(var8);
            var8 = {};
            var20 = _closure1_slot13;
            var20 = var20.bind(var5)(var23, var15);
            var8['style'] = var20;
            var24 = var17.getAvatarURL;
            var23 = var16.guild_id;
            var20 = 64;
            var20 = var24.bind(var17)(var23, var20);
            var8['url'] = var20;
            var13 = var13.speaking;
            var8['speaking'] = var13;
            var13 = true;
            var8['animate'] = var13;
            var20 = 15;
            var20 = var22[var20];
            var20 = var21.bind(var5)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XLARGE;
            var8['size'] = var20;
            var8['isStageCall'] = var13;
            var13 = var12;
            if(!var12) { _fun0004_ip = 552; continue _fun0004 }
 533:
            var20 = {};
            var21 = 0.5;
            var20['opacity'] = var21;
            var13 = var20;
 552:
            var8['avatarStyle'] = var13;
            var9 = var10.bind(var5)(var9, var8);
            var8 = new Array(3);
            var8[0] = var9;
            var13 = _closure1_slot8;
            var10 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 16;
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
            var9 = _closure1_slot9;
            var8 = _closure1_slot5;
            var7 = {};
            var10 = var15.nameplateContainer;
            var7['style'] = var10;
            if(!var12) { _fun0004_ip = 964; continue _fun0004 }
 720:
            var16 = _closure1_slot9;
            var13 = _closure1_slot5;
            var10 = {};
            var20 = var15.restricted;
            var17 = new Array(2);
            var17[0] = var20;
            var20 = null;
            if(!var19) { _fun0004_ip = 755; continue _fun0004 }
 749:
            var20 = var15.blocked;
 755:
            var17[1] = var20;
            var10['style'] = var17;
            if(!var19) { _fun0004_ip = 866; continue _fun0004 }
 766:
            var21 = _closure1_slot8;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 17;
            var17 = var24[var22];
            var20 = var23.bind(var5)(var17);
            var17 = {};
            var25 = 18;
            var25 = var24[var25];
            var25 = var23.bind(var5)(var25);
            var17['source'] = var25;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.Sizes;
            var22 = var22.EXTRA_SMALL;
            var17['size'] = var22;
            var22 = 6;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.unsafe_rawColors;
            var22 = var22.RED_400;
            var17['color'] = var22;
            var19 = var21.bind(var5)(var20, var17);
 866:
            var17 = new Array(2);
            var17[0] = var19;
            if(!var18) { _fun0004_ip = 950; continue _fun0004 }
 877:
            var21 = _closure1_slot8;
            var23 = _closure1_slot1;
            var24 = _closure1_slot2;
            var22 = 17;
            var19 = var24[var22];
            var20 = var23.bind(var5)(var19);
            var19 = {};
            var25 = 19;
            var25 = var24[var25];
            var25 = var23.bind(var5)(var25);
            var19['source'] = var25;
            var22 = var24[var22];
            var22 = var23.bind(var5)(var22);
            var22 = var22.Sizes;
            var22 = var22.EXTRA_SMALL;
            var19['size'] = var22;
            var18 = var21.bind(var5)(var20, var19);
 950:
            var17[1] = var18;
            var10['children'] = var17;
            var12 = var16.bind(var5)(var13, var10);
 964:
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot8;
            var12 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = 20;
            var11 = var16[var11];
            var11 = var12.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'lineClamp': 1, 'style': null, 'variant': 'text-sm/medium', 'color': 'always-white'};
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
 1067:
            return var1;
        }
    };
    var7 = var8.bind(var11)(var7);
    var8 = 21;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'modules/stage_channels/native/components/SpeakerTile.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['SPEAKER_TILE_HEIGHTS'] = var6;
    var3['useSpeakerTileStyles'] = var5;
    var3['getSizeStyle'] = var4;
    var3['getTileWidthStyle'] = var2;
    return var1;
})();