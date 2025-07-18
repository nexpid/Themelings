// app/modules/stage_channels/native/components/AudienceTile.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native2;
    var12 = native3;
    var3 = native6;
    var8 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var8;
    var1 = function RaisedHandIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.rtsState;
            var1 = _closure1_slot8;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 6;
            var1 = var6[var1];
            var1 = var3.bind(var4)(var1);
            var1 = var1.RequestToSpeakStates;
            var1 = var1.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            var7 = var2 === var1;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.unsafe_rawColors;
            if(var7) { _fun0001_ip = 94; continue _fun0001 }
 86:
            var8 = var1.PRIMARY_800;
            _fun0001_ip = 100; continue _fun0001;
 94:
            var8 = var1.WHITE_500;
 100:
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var10 = var9.raisedHandContainer;
            var6 = new Array(2);
            var6[0] = var10;
            if(!var7) { _fun0001_ip = 133; continue _fun0001 }
 127:
            var7 = var9.activeBackground;
 133:
            var6[1] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot6;
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var5 = 7;
            var5 = var11[var5];
            var6 = var10.bind(var4)(var5);
            var5 = {};
            var9 = var9.raisedHand;
            var5['style'] = var9;
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
    var _closure1_slot10 = var1;
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
    var2 = native4;
    var1 = undefined;
    var9 = var2.bind(var1)(var4);
    var2 = 1;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.useWindowDimensions;
    var _closure1_slot3 = var4;
    var2 = var2.View;
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var8[var2];
    var2 = var12.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var8[var2];
    var2 = var7.bind(var1)(var2);
    var4 = var2.jsx;
    var _closure1_slot6 = var4;
    var2 = var2.jsxs;
    var _closure1_slot7 = var2;
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
    var _closure1_slot8 = var4;
    var2 = function getTileWidthStyle(arg1) {
        var2 = arg1;
        var1 = 46;
        var2 = var2 - var1;
        var1 = 4;
        var1 = var2 / var1;
        return var1;
    };
    var _closure1_slot9 = var2;
    var6 = var9.memo;
    var5 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var1 = var2.channel;
            var _closure2_slot0 = var1;
            var3 = var2.participant;
            var17 = var3.user;
            var _closure2_slot1 = var17;
            var19 = var3.rtsState;
            var13 = var3.blocked;
            var12 = var3.ignored;
            var21 = var2.theme;
            var2 = _closure1_slot8;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var2 = _closure1_slot3;
            var2 = var2.bind(var4)();
            var3 = var2.width;
            var2 = _closure1_slot9;
            var22 = var2.bind(var4)(var3);
            var2 = var1.getGuildId;
            var23 = var2.bind(var1)();
            var _closure2_slot2 = var23;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 9;
            var2 = var6[var2];
            var10 = var3.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var8 = new Array(1);
            var8[0] = var2;
            var7 = new Array(2);
            var7[0] = var23;
            var2 = var17.id;
            var7[1] = var2;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = global;
                    var3 = var1.Boolean;
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0003_ip = 75; continue _fun0003 }
 24:
                    var7 = _closure1_slot5;
                    var6 = var7.getMember;
                    var5 = _closure2_slot2;
                    var1 = _closure2_slot1;
                    var1 = var1.id;
                    var5 = var6.bind(var7)(var5, var1);
                    var6 = var4 == var5;
                    var1 = undefined;
                    if(var6) { _fun0003_ip = 71; continue _fun0003 }
 65:
                    var1 = var5.premiumSince;
 71:
                    var2 = var4 != var1;
 75:
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var10 = var9.bind(var10)(var8, var2, var7);
            var2 = 10;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isRequestedToSpeakAll;
            var8 = var2.bind(var3)(var19);
            var3 = _closure1_slot1;
            var2 = 11;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getName;
            var1 = var1.id;
            var15 = var2.bind(var3)(var23, var1, var17);
            var20 = var13;
            if(var13) { _fun0002_ip = 235; continue _fun0002 }
 232:
            var20 = var12;
 235:
            var3 = _closure1_slot7;
            var9 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 12;
            var1 = var7[var1];
            var1 = var9.bind(var4)(var1);
            var2 = var1.Pressable;
            var1 = {};
            var6 = 13;
            var14 = var7[var6];
            var14 = var9.bind(var4)(var14);
            var18 = var14.intl;
            var14 = var18.formatToPlainString;
            var6 = var7[var6];
            var6 = var9.bind(var4)(var6);
            var6 = var6.t;
            var9 = var6.QLMGho;
            var6 = {};
            var6['name'] = var15;
            var6 = var14.bind(var18)(var9, var6);
            var1['accessibilityLabel'] = var6;
            var9 = var16.touchableContainer;
            var6 = new Array(3);
            var6[0] = var9;
            var9 = var16.container;
            var6[1] = var9;
            var9 = {};
            var9['width'] = var22;
            var6[2] = var9;
            var1['style'] = var6;
            var6 = 'button';
            var1['accessibilityRole'] = var6;
            var5 = function onPress() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
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
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var16.avatarContainer;
            var5['style'] = var9;
            var14 = _closure1_slot6;
            var9 = _closure1_slot1;
            var24 = 15;
            var7 = var7[var24];
            var9 = var9.bind(var4)(var7);
            var7 = {};
            var7['user'] = var17;
            var17 = null;
            var25 = var17 != var23;
            var18 = undefined;
            if(!var25) { _fun0002_ip = 439; continue _fun0002 }
 436:
            var18 = var23;
 439:
            var7['guildId'] = var18;
            var23 = _closure1_slot0;
            var18 = _closure1_slot2;
            var18 = var18[var24];
            var18 = var23.bind(var4)(var18);
            var18 = var18.AvatarSizes;
            var18 = var18.LARGE;
            var7['size'] = var18;
            var18 = var20;
            if(!var20) { _fun0002_ip = 488; continue _fun0002 }
 482:
            var18 = var16.faded;
 488:
            var7['style'] = var18;
            var9 = var14.bind(var4)(var9, var7);
            var7 = new Array(2);
            var7[0] = var9;
            if(!var8) { _fun0002_ip = 530; continue _fun0002 }
 509:
            var18 = _closure1_slot6;
            var14 = _closure1_slot10;
            var9 = {};
            var9['rtsState'] = var19;
            var8 = var18.bind(var4)(var14, var9);
 530:
            var7[1] = var8;
            var5['children'] = var7;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot4;
            var6 = {};
            var14 = var16.nameplateContainer;
            var9 = new Array(1);
            var9[0] = var14;
            var6['style'] = var9;
            if(!var13) { _fun0002_ip = 621; continue _fun0002 }
 583:
            var18 = _closure1_slot6;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 16;
            var9 = var19[var9];
            var9 = var14.bind(var4)(var9);
            var14 = var9.BlockedStatus;
            var9 = {};
            var13 = var18.bind(var4)(var14, var9);
 621:
            var9 = new Array(4);
            var9[0] = var13;
            if(!var12) { _fun0002_ip = 670; continue _fun0002 }
 632:
            var18 = _closure1_slot6;
            var14 = _closure1_slot0;
            var19 = _closure1_slot2;
            var13 = 16;
            var13 = var19[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.IgnoredStatus;
            var13 = {};
            var12 = var18.bind(var4)(var14, var13);
 670:
            var9[1] = var12;
            var14 = _closure1_slot6;
            var13 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 17;
            var12 = var18[var12];
            var12 = var13.bind(var4)(var12);
            var13 = var12.LegacyText;
            var12 = {};
            var18 = var16.usernameText;
            var16 = new Array(3);
            var16[0] = var18;
            var18 = var10;
            if(var10) { _fun0002_ip = 729; continue _fun0002 }
 726:
            var18 = var20;
 729:
            if(!var18) { _fun0002_ip = 771; continue _fun0002 }
 732:
            var19 = {};
            var24 = 1;
            var23 = var24;
            if(!var10) { _fun0002_ip = 752; continue _fun0002 }
 743:
            var23 = var24;
            if(!var20) { _fun0002_ip = 752; continue _fun0002 }
 749:
            var23 = 2;
 752:
            var20 = 18;
            var20 = var20 * var23;
            var20 = var22 - var20;
            var19['maxWidth'] = var20;
            var18 = var19;
 771:
            var16[1] = var18;
            var17 = var17 != var21;
            if(!var17) { _fun0002_ip = 864; continue _fun0002 }
 782:
            var18 = {};
            var20 = _closure1_slot0;
            var22 = _closure1_slot2;
            var19 = 18;
            var19 = var22[var19];
            var20 = var20.bind(var4)(var19);
            var19 = var20.isThemeDark;
            var19 = var19.bind(var20)(var21);
            var21 = _closure1_slot1;
            var22 = _closure1_slot2;
            var20 = 5;
            var20 = var22[var20];
            var20 = var21.bind(var4)(var20);
            var20 = var20.unsafe_rawColors;
            if(var19) { _fun0002_ip = 851; continue _fun0002 }
 843:
            var19 = var20.PRIMARY_860;
            _fun0002_ip = 857; continue _fun0002;
 851:
            var19 = var20.WHITE_500;
 857:
            var18['color'] = var19;
            var17 = var18;
 864:
            var16[2] = var17;
            var12['style'] = var16;
            var16 = 1;
            var12['numberOfLines'] = var16;
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            var9[2] = var12;
            if(!var10) { _fun0002_ip = 997; continue _fun0002 }
 897:
            var13 = _closure1_slot6;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 7;
            var11 = var16[var14];
            var12 = var15.bind(var4)(var11);
            var11 = {};
            var17 = 19;
            var17 = var16[var17];
            var17 = var15.bind(var4)(var17);
            var11['source'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
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
 997:
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
    var6 = 20;
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