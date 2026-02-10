// app/uikit-native/modals/AcceptInvite.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var6;
    var1 = function InviteResolving() {
        var1 = _closure1_slot12;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 9;
        var1 = var8[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.useToken;
        var7 = _closure1_slot1;
        var1 = 7;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.INTERACTIVE_TEXT_DEFAULT;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var6.resolvingContainer;
        var1['style'] = var6;
        var7 = _closure1_slot10;
        var6 = _closure1_slot5;
        var5 = {};
        var5['color'] = var8;
        var8 = 'large';
        var5['size'] = var8;
        var5 = var7.bind(var4)(var6, var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function AcceptInviteCardComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg1;
            var7 = var6.invite;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var3 = _closure1_slot14;
            var4 = undefined;
            var3 = var3.bind(var4)(var7);
            var8 = var5.bind(var8)(var3);
            var5 = _closure1_slot3;
            var3 = 2;
            var8 = var5.bind(var4)(var8, var3);
            var3 = 0;
            var3 = var8[var3];
            var _closure2_slot1 = var3;
            var5 = 1;
            var5 = var8[var5];
            var _closure2_slot2 = var5;
            var9 = _closure1_slot4;
            var8 = var9.useEffect;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var3;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot14;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    if(!(var3 !== var5)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 10;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.DeprecatedLayoutAnimation;
                    var4 = var4.bind(var5)();
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
case 2:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var5);
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot13;
            var2 = var2.DETAILS;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot13;
            var2 = var2.ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = _closure1_slot10;
            var3 = _closure1_slot15;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 8:
            var5 = _closure1_slot10;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = var2;
            var11 = var6;
            var8 = copyDataProperties(var12, var11);
            var8 = 'invite';
            var2[var8] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 6:
            var5 = _closure1_slot10;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
            var2 = var8[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var12 = var2;
            var11 = var6;
            var6 = copyDataProperties(var12, var11);
            var6 = 'invite';
            var2[var6] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 4:
            var3 = _closure1_slot10;
            var2 = _closure1_slot15;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
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
    var10 = 0;
    var4 = var6[var10];
    var1 = undefined;
    var4 = var14.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var9 = 1;
    var7 = var6[var9];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var8 = 2;
    var4 = var6[var8];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot5 = var7;
    var7 = var4.ImageBackground;
    var _closure1_slot6 = var7;
    var4 = var4.View;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteStates;
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 6;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var7 = var11.createStyles;
    var4 = {};
    var12 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = 7;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var12['backgroundColor'] = var15;
    var4['parentContainer'] = var12;
    var12 = {'marginVertical': 0, 'resizeMode': 'cover'};
    var4['imageStyle'] = var12;
    var12 = {'position': 'absolute', 'flex': 1, 'width': '90%', 'alignItems': 'center', 'justifyContent': 'center', 'padding': 0};
    var4['cardContainer'] = var12;
    var12 = {'padding': 16, 'flex': 1, 'justifyContent': 'center', 'alignItems': 'center', 'width': '100%'};
    var4['cardContent'] = var12;
    var12 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'center', 'gap': 8, 'padding': 16, 'borderBottomWidth': 1, 'borderBottomColor': null, 'width': '100%'};
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var12['borderBottomColor'] = var13;
    var4['cardHeader'] = var12;
    var12 = {};
    var13 = 64;
    var12['padding'] = var13;
    var4['resolvingContainer'] = var12;
    var4 = var7.bind(var11)(var4);
    var _closure1_slot12 = var4;
    var4 = {};
    var4['LOADING'] = var10;
    var7 = 'LOADING';
    var4[var10] = var7;
    var4['DETAILS'] = var9;
    var7 = 'DETAILS';
    var4[var9] = var7;
    var4['ERROR'] = var8;
    var7 = 'ERROR';
    var4[var8] = var7;
    var _closure1_slot13 = var4;
    var4 = function getInviteState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var5 = null;
            var4 = var5 == var1;
            var2 = undefined;
            var3 = undefined;
            if(var4) { _fun0003_ip = 10; continue _fun0003 }
case 11:
            var3 = var1.state;
case 10:
            var3 = var5 == var3;
            if(!var3) { _fun0003_ip = 12; continue _fun0003 }
case 13:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0003_ip = 14; continue _fun0003 }
case 15:
            var4 = var1.channel;
case 14:
            var3 = var5 == var4;
case 12:
            if(!(var5 != var1)) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var4 = var1.state;
            if(!(var5 != var4)) { _fun0003_ip = 16; continue _fun0003 }
case 18:
            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 19:
            var5 = var1.state;
            var3 = _closure1_slot9;
            var3 = var3.RESOLVED;
            if(!(var3 !== var5)) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var3 = _closure1_slot9;
            var3 = var3.ACCEPTED;
            if(!(var3 !== var5)) { _fun0003_ip = 20; continue _fun0003 }
case 22:
            var3 = _closure1_slot9;
            var3 = var3.EXPIRED;
            if(!(var3 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 24:
            var3 = _closure1_slot9;
            var3 = var3.BANNED;
            if(!(var3 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 25:
            var3 = _closure1_slot9;
            var3 = var3.ERROR;
            if(!(var3 !== var5)) { _fun0003_ip = 23; continue _fun0003 }
case 26:
            var3 = _closure1_slot9;
            var3 = var3.RESOLVING;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var3 = _closure1_slot9;
            var3 = var3.APP_NOT_OPENED;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 29:
            var3 = _closure1_slot9;
            var3 = var3.APP_OPENED;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 30:
            var3 = _closure1_slot9;
            var3 = var3.APP_OPENING;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 31:
            var3 = _closure1_slot9;
            var3 = var3.ACCEPTING;
            if(!(var3 !== var5)) { _fun0003_ip = 27; continue _fun0003 }
case 32:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var5);
            return var2;
case 27:
            var2 = _closure1_slot13;
            var2 = var2.LOADING;
            return var2;
case 23:
            var2 = _closure1_slot13;
            var2 = var2.ERROR;
            return var2;
case 20:
            var1 = _closure1_slot13;
            var1 = var1.DETAILS;
            return var1;
case 16:
            var1 = _closure1_slot13;
            var1 = var1.LOADING;
            return var1;
        }
    };
    var _closure1_slot14 = var4;
    var4 = 22;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/AcceptInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AcceptInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = arg1;
            var17 = var6.invite;
            var _closure2_slot0 = var17;
            var5 = var6.friendMemberIds;
            var2 = null;
            var4 = Object.create(var2);
            var3 = 0;
            var4['invite'] = var3;
            var4['friendMemberIds'] = var3;
            var29 = {};
            var28 = var6;
            var27 = var4;
            var15 = copyDataProperties(var29, var28, var27);
            var1 = _closure1_slot12;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 16;
            var1 = var7[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var11 = var1.height;
            var10 = var1.width;
            var1 = var17;
            if(!(var2 == var1)) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var1 = {};
case 33:
            var9 = var1.guild;
            var6 = var2 == var9;
            var1 = undefined;
            if(var6) { _fun0004_ip = 35; continue _fun0004 }
case 5:
            var1 = var9.splash;
case 35:
            if(!(var2 != var1)) { _fun0004_ip = 36; continue _fun0004 }
case 24:
            var6 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 13;
            var1 = var16[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var7.getGuildSplashSource;
            var1 = {};
            var8 = var9.id;
            var1['id'] = var8;
            var8 = var9.splash;
            var1['splash'] = var8;
            var14 = _closure1_slot0;
            var8 = 14;
            var8 = var16[var8];
            var14 = var14.bind(var4)(var8);
            var8 = var14.getDevicePixelRatio;
            var8 = var8.bind(var14)();
            var8 = var10 * var8;
            var1['size'] = var8;
            var8 = var6.bind(var7)(var1);
            if(!(var2 == var8)) { _fun0004_ip = 37; continue _fun0004 }
case 36:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 15;
            var1 = var7[var1];
            var8 = var6.bind(var4)(var1);
case 37:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 17;
            var1 = var7[var1];
            var7 = var6.bind(var4)(var1);
            var6 = var7.useEligibleInviteFriendMembersExperiment;
            var1 = {};
            var14 = 'accept_invite_modal_native';
            var1['location'] = var14;
            var1['guild'] = var9;
            var1 = var6.bind(var7)(var1);
            var6 = var1.showFriendsInServer;
            var16 = undefined;
            if(!var6) { _fun0004_ip = 38; continue _fun0004 }
case 39:
            var16 = var5;
case 38:
            var9 = var1.showInviter;
            if(!var9) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var1 = var2 == var16;
            var5 = undefined;
            if(var1) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var5 = var16.length;
case 42:
            var6 = var2 != var5;
            var1 = 0;
            if(!var6) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var1 = var5;
case 44:
            var9 = var1 > var3;
case 40:
            if(!var9) { _fun0004_ip = 46; continue _fun0004 }
case 47:
            var3 = var2 == var17;
            var1 = undefined;
            if(var3) { _fun0004_ip = 48; continue _fun0004 }
case 49:
            var1 = var17.inviter;
case 48:
            var9 = var2 != var1;
case 46:
            var3 = _closure1_slot11;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var13.parentContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['height'] = var11;
            var6['width'] = var10;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot10;
            var6 = _closure1_slot6;
            var5 = {};
            var5['source'] = var8;
            var8 = var13.imageStyle;
            var5['imageStyle'] = var8;
            var8 = {};
            var8['height'] = var11;
            var8['width'] = var10;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 18;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Card;
            var6 = {};
            var8 = var13.cardContainer;
            var6['style'] = var8;
            if(!var9) { _fun0004_ip = 50; continue _fun0004 }
case 51:
            var11 = _closure1_slot11;
            var10 = _closure1_slot7;
            var8 = {};
            var14 = var13.cardHeader;
            var8['style'] = var14;
            var19 = _closure1_slot10;
            var18 = _closure1_slot1;
            var26 = _closure1_slot2;
            var20 = 19;
            var14 = var26[var20];
            var18 = var18.bind(var4)(var14);
            var14 = {};
            var23 = _closure1_slot8;
            var29 = var17.inviter;
            var22 = var23.prototype;
            var22 = Object.create(var22, {constructor: {value: var23}});
            var30 = var22;
            var21 = new var30[var23](var29, var28);
            var21 = var21 instanceof Object ? var21 : var22;
            var14['user'] = var21;
            var22 = _closure1_slot0;
            var20 = var26[var20];
            var20 = var22.bind(var4)(var20);
            var20 = var20.AvatarSizes;
            var20 = var20.XSMALL_20;
            var14['size'] = var20;
            var14['guildId'] = var4;
            var18 = var19.bind(var4)(var18, var14);
            var14 = new Array(2);
            var14[0] = var18;
            var20 = _closure1_slot10;
            var18 = 20;
            var18 = var26[var18];
            var18 = var22.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-md/normal', 'color': 'text-subtle'};
            var21 = 21;
            var23 = var26[var21];
            var23 = var22.bind(var4)(var23);
            var24 = var23.intl;
            var23 = var24.format;
            var21 = var26[var21];
            var21 = var22.bind(var4)(var21);
            var21 = var21.t;
            var22 = var21.ri1ubC;
            var21 = {};
            var25 = function usernameHook(arg1, arg2) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = _closure1_slot10;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 20;
                    var1 = var3[var1];
                    var4 = undefined;
                    var1 = var2.bind(var4)(var1);
                    var3 = var1.Text;
                    var2 = {'variant': 'text-md/semibold', 'color': 'text-strong'};
                    var1 = _closure2_slot0;
                    var6 = var1.inviter;
                    var1 = null;
                    var7 = var1 == var6;
                    var1 = undefined;
                    if(var7) { _fun0005_ip = 52; continue _fun0005 }
case 53:
                    var1 = var6.username;
case 52:
                    var2['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var4)(var3, var2, var1);
                    return var1;
                }
            };
            var21['usernameHook'] = var25;
            var21 = var23.bind(var24)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var14[1] = var18;
            var8['children'] = var14;
            var9 = var11.bind(var4)(var10, var8);
case 50:
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot10;
            var10 = _closure1_slot7;
            var9 = {};
            var13 = var13.cardContent;
            var9['style'] = var13;
            var14 = _closure1_slot10;
            var13 = _closure1_slot16;
            var12 = {};
            var12['invite'] = var17;
            var12['friendMemberIds'] = var16;
            var29 = var12;
            var28 = var15;
            var15 = copyDataProperties(var29, var28);
            var12 = var14.bind(var4)(var13, var12);
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var6['children'] = var8;
            var6 = var3.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();