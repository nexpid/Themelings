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
        var1 = _closure1_slot11;
        var4 = undefined;
        var6 = var1.bind(var4)();
        var2 = _closure1_slot0;
        var8 = _closure1_slot2;
        var1 = 8;
        var1 = var8[var1];
        var3 = var2.bind(var4)(var1);
        var2 = var3.useToken;
        var7 = _closure1_slot1;
        var1 = 6;
        var1 = var8[var1];
        var1 = var7.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.INTERACTIVE_NORMAL;
        var8 = var2.bind(var3)(var1);
        var3 = _closure1_slot9;
        var2 = _closure1_slot7;
        var1 = {};
        var6 = var6.resolvingContainer;
        var1['style'] = var6;
        var7 = _closure1_slot9;
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
    var _closure1_slot14 = var1;
    var1 = function AcceptInviteCardComponent(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var7 = var6.invite;
            var _closure2_slot0 = var7;
            var8 = _closure1_slot4;
            var5 = var8.useState;
            var3 = _closure1_slot13;
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
 0:
                    var5 = _closure1_slot13;
                    var3 = _closure2_slot0;
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var5 = _closure2_slot1;
                    if(!(var3 !== var5)) { _fun0002_ip = 68; continue _fun0002 }
 29:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var5 = var5.bind(var1)(var4);
                    var4 = var5.DeprecatedLayoutAnimation;
                    var4 = var4.bind(var5)();
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
 68:
                    return var1;
                }
            };
            var2 = var8.bind(var9)(var2, var5);
            var2 = null;
            if(!(var2 != var7)) { _fun0001_ip = 272; continue _fun0001 }
 120:
            var2 = _closure1_slot12;
            var2 = var2.DETAILS;
            if(!(var2 !== var3)) { _fun0001_ip = 219; continue _fun0001 }
 134:
            var2 = _closure1_slot12;
            var2 = var2.ERROR;
            if(!(var2 !== var3)) { _fun0001_ip = 166; continue _fun0001 }
 148:
            var5 = _closure1_slot9;
            var3 = _closure1_slot14;
            var2 = {};
            var2 = var5.bind(var4)(var3, var2);
            return var2;
 166:
            var5 = _closure1_slot9;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 11;
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
 219:
            var5 = _closure1_slot9;
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 10;
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
 272:
            var3 = _closure1_slot9;
            var2 = _closure1_slot14;
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot15 = var1;
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteStates;
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var11 = var5.bind(var1)(var4);
    var7 = var11.createStyles;
    var4 = {};
    var12 = {'backgroundColor': null, 'alignItems': 'center', 'justifyContent': 'center'};
    var13 = 6;
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_PRIMARY;
    var12['backgroundColor'] = var15;
    var4['parentContainer'] = var12;
    var12 = {'marginVertical': 0, 'resizeMode': 'cover'};
    var4['imageStyle'] = var12;
    var12 = {'position': 'absolute', 'flex': 1, 'width': '90%', 'alignItems': 'center', 'justifyContent': 'center'};
    var4['cardContainer'] = var12;
    var12 = {};
    var15 = 64;
    var12['padding'] = var15;
    var4['resolvingContainer'] = var12;
    var12 = {'marginTop': 16, 'shadowColor': null, 'shadowOpacity': 0.2, 'shadowRadius': 16};
    var15 = var6[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BLACK;
    var12['shadowColor'] = var15;
    var15 = {'height': 8, 'width': 0};
    var12['shadowOffset'] = var15;
    var13 = var6[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_PRIMARY;
    var12['backgroundColor'] = var13;
    var4['expirationNotice'] = var12;
    var4 = var7.bind(var11)(var4);
    var _closure1_slot11 = var4;
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
    var _closure1_slot12 = var4;
    var4 = function getInviteState(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var1 = arg1;
            var5 = null;
            var4 = var5 == var1;
            var2 = undefined;
            var3 = undefined;
            if(var4) { _fun0003_ip = 21; continue _fun0003 }
 16:
            var3 = var1.state;
 21:
            var3 = var5 == var3;
            if(!var3) { _fun0003_ip = 46; continue _fun0003 }
 28:
            var6 = var5 == var1;
            var4 = undefined;
            if(var6) { _fun0003_ip = 42; continue _fun0003 }
 37:
            var4 = var1.channel;
 42:
            var3 = var5 == var4;
 46:
            if(!(var5 != var1)) { _fun0003_ip = 300; continue _fun0003 }
 53:
            var4 = var1.state;
            if(!(var5 != var4)) { _fun0003_ip = 300; continue _fun0003 }
 65:
            if(var3) { _fun0003_ip = 300; continue _fun0003 }
 71:
            var5 = var1.state;
            var3 = _closure1_slot8;
            var3 = var3.RESOLVED;
            if(!(var3 !== var5)) { _fun0003_ip = 288; continue _fun0003 }
 96:
            var3 = _closure1_slot8;
            var3 = var3.ACCEPTED;
            if(!(var3 !== var5)) { _fun0003_ip = 288; continue _fun0003 }
 113:
            var3 = _closure1_slot8;
            var3 = var3.EXPIRED;
            if(!(var3 !== var5)) { _fun0003_ip = 276; continue _fun0003 }
 130:
            var3 = _closure1_slot8;
            var3 = var3.BANNED;
            if(!(var3 !== var5)) { _fun0003_ip = 276; continue _fun0003 }
 147:
            var3 = _closure1_slot8;
            var3 = var3.ERROR;
            if(!(var3 !== var5)) { _fun0003_ip = 276; continue _fun0003 }
 161:
            var3 = _closure1_slot8;
            var3 = var3.RESOLVING;
            if(!(var3 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 175:
            var3 = _closure1_slot8;
            var3 = var3.APP_NOT_OPENED;
            if(!(var3 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 189:
            var3 = _closure1_slot8;
            var3 = var3.APP_OPENED;
            if(!(var3 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 203:
            var3 = _closure1_slot8;
            var3 = var3.APP_OPENING;
            if(!(var3 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 217:
            var3 = _closure1_slot8;
            var3 = var3.ACCEPTING;
            if(!(var3 !== var5)) { _fun0003_ip = 264; continue _fun0003 }
 231:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 7;
            var3 = var6[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.assertNever;
            var3 = var3.bind(var4)(var5);
            return var2;
 264:
            var2 = _closure1_slot12;
            var2 = var2.LOADING;
            return var2;
 276:
            var2 = _closure1_slot12;
            var2 = var2.ERROR;
            return var2;
 288:
            var1 = _closure1_slot12;
            var1 = var1.DETAILS;
            return var1;
 300:
            var1 = _closure1_slot12;
            var1 = var1.LOADING;
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'uikit-native/modals/AcceptInvite.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AcceptInvite(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var13 = var4.invite;
            var1 = null;
            var3 = Object.create(var1);
            var2 = 0;
            var3['invite'] = var2;
            var17 = {};
            var16 = var4;
            var15 = var3;
            var12 = copyDataProperties(var17, var16, var15);
            var2 = _closure1_slot11;
            var4 = undefined;
            var10 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var14 = var2.height;
            var11 = var2.width;
            var2 = var13;
            if(!(var1 == var2)) { _fun0004_ip = 89; continue _fun0004 }
 87:
            var2 = {};
 89:
            var6 = var2.guild;
            var3 = var1 == var6;
            var2 = undefined;
            if(var3) { _fun0004_ip = 109; continue _fun0004 }
 103:
            var2 = var6.splash;
 109:
            if(!(var1 != var2)) { _fun0004_ip = 204; continue _fun0004 }
 113:
            var3 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 12;
            var2 = var8[var2];
            var5 = var3.bind(var4)(var2);
            var3 = var5.getGuildSplashSource;
            var2 = {};
            var7 = var6.id;
            var2['id'] = var7;
            var6 = var6.splash;
            var2['splash'] = var6;
            var7 = _closure1_slot0;
            var6 = 13;
            var6 = var8[var6];
            var7 = var7.bind(var4)(var6);
            var6 = var7.getDevicePixelRatio;
            var6 = var6.bind(var7)();
            var6 = var11 * var6;
            var2['size'] = var6;
            var8 = var3.bind(var5)(var2);
            if(!(var1 == var8)) { _fun0004_ip = 224; continue _fun0004 }
 204:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 14;
            var1 = var3[var1];
            var8 = var2.bind(var4)(var1);
 224:
            var3 = _closure1_slot10;
            var2 = _closure1_slot7;
            var1 = {};
            var6 = var10.parentContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var6['height'] = var14;
            var6['width'] = var11;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot9;
            var6 = _closure1_slot6;
            var5 = {};
            var5['source'] = var8;
            var8 = var10.imageStyle;
            var5['imageStyle'] = var8;
            var8 = {};
            var8['height'] = var14;
            var8['width'] = var11;
            var5['style'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 16;
            var6 = var11[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Card;
            var6 = {};
            var10 = var10.cardContainer;
            var6['style'] = var10;
            var11 = _closure1_slot9;
            var10 = _closure1_slot15;
            var9 = {};
            var9['invite'] = var13;
            var17 = var9;
            var16 = var12;
            var12 = copyDataProperties(var17, var16);
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();