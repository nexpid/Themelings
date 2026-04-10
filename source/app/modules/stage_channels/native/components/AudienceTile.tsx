// app/modules/stage_channels/native/components/AudienceTile.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = function RaisedHandIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.rtsState;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 6;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var6 = var2 === var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var1.PRIMARY_800;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var8 = var1.WHITE;
case 4:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var10.raisedHandContainer;
            var5 = new Array(2);
            var5[0] = var7;
            if(!var6) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var6 = var10.activeBackground;
case 5:
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot5;
            var6 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Icon;
            var5 = {};
            var10 = var10.raisedHand;
            var5['style'] = var10;
            var10 = _closure1_slot1;
            var9 = 8;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var5['source'] = var9;
            var5['color'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var6 = var1.Object;
    var4 = var6.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var6)(var3, var1, var2);
    var1 = 0;
    var4 = var8[var1];
    var2 = metroImportAll;
    var1 = undefined;
    var9 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot5 = var4;
    var2 = var2.jsxs;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var8[var2];
    var6 = var7.bind(var1)(var2);
    var4 = var6.createStyles;
    var2 = {};
    var10 = {};
    var11 = 'visible';
    var10['overflow'] = var11;
    var2['touchableContainer'] = var10;
    var10 = {};
    var11 = 'center';
    var10['alignItems'] = var11;
    var2['container'] = var10;
    var10 = {'position': 'relative', 'padding': 8, 'paddingTop': 0, 'paddingBottom': 4};
    var2['avatarContainer'] = var10;
    var10 = {'position': 'absolute', 'top': 4294967288, 'right': 0, 'height': 24, 'width': 24, 'alignItems': 'center', 'justifyContent': 'center', 'borderRadius': 12, 'borderWidth': 2};
    var11 = 5;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.PRIMARY_800;
    var10['borderColor'] = var13;
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.WHITE;
    var10['backgroundColor'] = var13;
    var2['raisedHandContainer'] = var10;
    var10 = {};
    var13 = var8[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var13 = var13.GREEN_360;
    var10['backgroundColor'] = var13;
    var2['activeBackground'] = var10;
    var10 = {'height': 13, 'width': 13, 'alignItems': 'center', 'justifyContent': 'center', 'resizeMode': 'contain'};
    var2['raisedHand'] = var10;
    var10 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center'};
    var2['nameplateContainer'] = var10;
    var10 = {};
    var13 = 14;
    var10['fontSize'] = var13;
    var11 = var8[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.WHITE;
    var10['color'] = var11;
    var2['usernameText'] = var10;
    var10 = {};
    var11 = 0.5;
    var10['opacity'] = var11;
    var2['faded'] = var10;
    var4 = var4.bind(var6)(var2);
    var _closure1_slot7 = var4;
    var2 = function getTileWidthStyle(arg1) {
        var2 = arg1;
        var1 = 46;
        var2 = var2 - var1;
        var1 = 4;
        var1 = var2 / var1;
        return var1;
    };
    var _closure1_slot8 = var2;
    var6 = var9.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = var2.channel;
            var _closure2_slot0 = var1;
            var3 = var2.participant;
            var18 = var3.user;
            var _closure2_slot1 = var18;
            var20 = var3.rtsState;
            var12 = var3.blocked;
            var11 = var3.ignored;
            var22 = var2.theme;
            var2 = _closure1_slot7;
            var4 = undefined;
            var17 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var7 = var2.width;
            var2 = _closure1_slot8;
            var23 = var2.bind(var4)(var7);
            var2 = var1.getGuildId;
            var24 = var2.bind(var1)();
            var _closure2_slot2 = var24;
            var7 = _closure1_slot0;
            var2 = 10;
            var2 = var6[var2];
            var13 = var7.bind(var4)(var2);
            var10 = var13.useStateFromStores;
            var2 = _closure1_slot4;
            var9 = new Array(1);
            var9[0] = var2;
            var8 = new Array(2);
            var8[0] = var24;
            var2 = var18.id;
            var8[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = global;
                    var3 = var1.Boolean;
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 7; continue _fun0003 }
case 8:
                    var7 = _closure1_slot4;
                    var6 = var7.getMember;
                    var5 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var5 = var6.bind(var7)(var5, var1);
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                    var1 = var5.premiumSince;
case 9:
                    var2 = var4 != var1;
case 7:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var10.bind(var13)(var9, var2, var8);
            var2 = 11;
            var2 = var6[var2];
            var7 = var7.bind(var4)(var2);
            var2 = var7.isRequestedToSpeakAll;
            var8 = var2.bind(var7)(var20);
            var2 = 12;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getName;
            var1 = var1.id;
            var16 = var2.bind(var3)(var24, var1, var18);
            var21 = var12;
            if(var12) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var21 = var11;
case 11:
            var3 = _closure1_slot6;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 13;
            var1 = var7[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Pressable;
            var1 = {};
            var6 = 14;
            var13 = var7[var6];
            var13 = var9.bind(var4)(var13);
            var19 = var13.intl;
            var14 = var19.formatToPlainString;
            var6 = var7[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var13 = var6.QLMGhv;
            var6 = {};
            var6['name'] = var16;
            var6 = var14.bind(var19)(var13, var6);
            var1['accessibilityLabel'] = var6;
            var13 = var17.touchableContainer;
            var6 = new Array(3);
            var6[0] = var13;
            var13 = var17.container;
            var6[1] = var13;
            var13 = {};
            var13['width'] = var23;
            var6[2] = var13;
            var1['style'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 15;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.showUserProfile;
                var2 = {};
                var6 = _closure2_slot1;
                var6 = var6.id;
                var2['userId'] = var6;
                var5 = _closure2_slot0;
                var5 = var5.id;
                var2['channelId'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var1['onPress'] = var5;
            var6 = _closure1_slot3;
            var5 = {};
            var13 = var17.avatarContainer;
            var5['style'] = var13;
            var13 = _closure1_slot5;
            var14 = 7;
            var7 = var7[var14];
            var7 = var9.bind(var4)(var7);
            var9 = var7.CutoutableAvatarImage;
            var7 = {};
            var7['user'] = var18;
            var18 = null;
            var25 = var18 != var24;
            var19 = undefined;
            if(!var25) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var19 = var24;
case 13:
            var7['guildId'] = var19;
            var24 = _closure1_slot0;
            var19 = _closure1_slot2;
            var19 = var19[var14];
            var19 = var24.bind(var4)(var19);
            var19 = var19.AvatarSizes;
            var19 = var19.LARGE;
            var7['size'] = var19;
            var19 = var21;
            if(!var21) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var19 = var17.faded;
case 15:
            var7['style'] = var19;
            var9 = var13.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            if(!var8) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var19 = _closure1_slot5;
            var13 = _closure1_slot9;
            var9 = {};
            var9['rtsState'] = var20;
            var8 = var19.bind(var4)(var13, var9);
case 17:
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot6;
            var7 = _closure1_slot3;
            var6 = {};
            var13 = var17.nameplateContainer;
            var9 = new Array(1);
            var9[0] = var13;
            var6['style'] = var9;
            if(!var12) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var19 = _closure1_slot5;
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var9 = 16;
            var9 = var20[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.BlockedStatus;
            var9 = {};
            var12 = var19.bind(var4)(var13, var9);
case 19:
            var9 = new Array(4);
            var9[0] = var12;
            if(!var11) { _fun0002_ip = 21; continue _fun0002 }
case 22:
            var19 = _closure1_slot5;
            var13 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = 16;
            var12 = var20[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.IgnoredStatus;
            var12 = {};
            var11 = var19.bind(var4)(var13, var12);
case 21:
            var9[1] = var11;
            var13 = _closure1_slot5;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var14];
            var11 = var12.bind(var4)(var11);
            var12 = var11.LegacyText;
            var11 = {};
            var19 = var17.usernameText;
            var17 = new Array(3);
            var17[0] = var19;
            var19 = var10;
            if(var10) { _fun0002_ip = 23; continue _fun0002 }
case 24:
            var19 = var21;
case 23:
            if(!var19) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var20 = {};
            var25 = 1;
            var24 = var25;
            if(!var10) { _fun0002_ip = 27; continue _fun0002 }
case 28:
            var24 = var25;
            if(!var21) { _fun0002_ip = 27; continue _fun0002 }
case 29:
            var24 = 2;
case 27:
            var21 = 18;
            var21 = var21 * var24;
            var21 = var23 - var21;
            var20['maxWidth'] = var21;
            var19 = var20;
case 25:
            var17[1] = var19;
            var18 = var18 != var22;
            if(!var18) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            var19 = {};
            var21 = _closure1_slot0;
            var23 = _closure1_slot2;
            var20 = 17;
            var20 = var23[var20];
            var21 = var21.bind(var4)(var20);
            var20 = var21.isThemeDark;
            var20 = var20.bind(var21)(var22);
            var22 = _closure1_slot1;
            var23 = _closure1_slot2;
            var21 = 5;
            var21 = var23[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.unsafe_rawColors;
            if(var20) { _fun0002_ip = 32; continue _fun0002 }
case 33:
            var20 = var21.PRIMARY_860;
            _fun0002_ip = 34; continue _fun0002;
case 32:
            var20 = var21.WHITE;
case 34:
            var19['color'] = var20;
            var18 = var19;
case 30:
            var17[2] = var18;
            var11['style'] = var17;
            var17 = 1;
            var11['numberOfLines'] = var17;
            var11['children'] = var16;
            var11 = var13.bind(var4)(var12, var11);
            var9[2] = var11;
            if(!var10) { _fun0002_ip = 35; continue _fun0002 }
case 36:
            var13 = _closure1_slot5;
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var11 = var16[var14];
            var11 = var17.bind(var4)(var11);
            var12 = var11.Icon;
            var11 = {};
            var15 = _closure1_slot1;
            var18 = 18;
            var18 = var16[var18];
            var18 = var15.bind(var4)(var18);
            var11['source'] = var18;
            var14 = var16[var14];
            var14 = var17.bind(var4)(var14);
            var14 = var14.Icon;
            var14 = var14.Sizes;
            var14 = var14.SMALL;
            var11['size'] = var14;
            var14 = 5;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.unsafe_rawColors;
            var14 = var14.GUILD_BOOSTING_PINK;
            var11['color'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 35:
            var9[3] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var5 = var6.bind(var9)(var5);
    var6 = 19;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/stage_channels/native/components/AudienceTile.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['useAudienceTileStyles'] = var4;
    var3['getTileWidthStyle'] = var2;
    return var1;
})();