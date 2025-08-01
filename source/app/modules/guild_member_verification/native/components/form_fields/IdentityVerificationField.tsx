// app/modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function BaseIdentityVerificationField(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var12 = var1.label;
            var6 = var1.passesVerification;
            var8 = var1.onPress;
            var13 = var1.icon;
            var1 = _closure1_slot7;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var10.container;
            var1['style'] = var5;
            var7 = null;
            var5 = var7 != var13;
            if(!var5) { _fun0001_ip = 119; continue _fun0001 }
 65:
            var11 = _closure1_slot5;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var5 = 5;
            var5 = var14[var5];
            var9 = var9.bind(var4)(var5);
            var5 = {};
            var5['source'] = var13;
            var13 = var10.icon;
            var5['style'] = var13;
            var13 = 'contain';
            var5['resizeMode'] = var13;
            var7 = var11.bind(var4)(var9, var5);
 119:
            var5 = new Array(3);
            var5[0] = var7;
            var11 = _closure1_slot5;
            var9 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 6;
            var7 = var13[var7];
            var7 = var9.bind(var4)(var7);
            var9 = var7.Text;
            var7 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var14 = var10.label;
            var13 = new Array(1);
            var13[0] = var14;
            var7['style'] = var13;
            var7['children'] = var12;
            var7 = var11.bind(var4)(var9, var7);
            var5[1] = var7;
            var9 = _closure1_slot5;
            if(var6) { _fun0001_ip = 365; continue _fun0001 }
 213:
            var12 = _closure1_slot1;
            var15 = _closure1_slot2;
            var11 = 8;
            var6 = var15[var11];
            var7 = var12.bind(var4)(var6);
            var6 = {};
            var13 = var10.ctaButton;
            var6['style'] = var13;
            var13 = var15[var11];
            var13 = var12.bind(var4)(var13);
            var13 = var13.Colors;
            var13 = var13.BRAND;
            var6['color'] = var13;
            var11 = var15[var11];
            var11 = var12.bind(var4)(var11);
            var11 = var11.Sizes;
            var11 = var11.SMALL;
            var6['size'] = var11;
            var14 = _closure1_slot0;
            var11 = 9;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.13ofGh;
            var11 = var12.bind(var13)(var11);
            var6['text'] = var11;
            var6['onPress'] = var8;
            var6 = var9.bind(var4)(var7, var6);
            _fun0001_ip = 495; continue _fun0001;
 365:
            var8 = _closure1_slot4;
            var7 = {};
            var10 = var10.verifiedContainer;
            var7['style'] = var10;
            var12 = _closure1_slot5;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var13 = 5;
            var10 = var15[var13];
            var11 = var14.bind(var4)(var10);
            var10 = {};
            var17 = 7;
            var17 = var15[var17];
            var17 = var14.bind(var4)(var17);
            var10['source'] = var17;
            var16 = _closure1_slot0;
            var13 = var15[var13];
            var13 = var16.bind(var4)(var13);
            var13 = var13.IconSizes;
            var13 = var13.MEDIUM;
            var10['size'] = var13;
            var13 = 4;
            var13 = var15[var13];
            var13 = var14.bind(var4)(var13);
            var13 = var13.unsafe_rawColors;
            var13 = var13.GREEN_360;
            var10['color'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 495:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'padding': 8, 'marginTop': 8, 'borderRadius': null, 'height': 48, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between'};
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_SECONDARY;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'marginLeft': 4, 'marginRight': 8};
    var4['icon'] = var9;
    var9 = {'flex': 1, 'marginLeft': 4, 'lineHeight': 20};
    var4['label'] = var9;
    var9 = {'paddingVertical': 7, 'paddingHorizontal': 4, 'flexDirection': 'row', 'alignItems': 'center'};
    var4['verifiedContainer'] = var9;
    var9 = {};
    var9['paddingHorizontal'] = var10;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var9['color'] = var12;
    var4['verifiedText'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['color'] = var10;
    var4['verifiedLabel'] = var9;
    var9 = {'flexGrow': 0, 'alignSelf': 'center', 'paddingHorizontal': 16};
    var4['ctaButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_member_verification/native/components/form_fields/IdentityVerificationField.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function IdentityVerificationField(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.platform;
            var _closure2_slot0 = var3;
            var6 = var1.passesVerification;
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 10;
            var5 = var4[var8];
            var4 = undefined;
            var5 = var7.bind(var4)(var5);
            var5 = var5.UserVerificationFieldPlatforms;
            var5 = var5.EMAIL;
            if(!(var5 !== var3)) { _fun0002_ip = 240; continue _fun0002 }
 65:
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var7.bind(var4)(var5);
            var5 = var5.UserVerificationFieldPlatforms;
            var5 = var5.PHONE;
            if(!(var5 !== var3)) { _fun0002_ip = 160; continue _fun0002 }
 98:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 9;
            var7 = var10[var5];
            var7 = var9.bind(var4)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var10[var5];
            var5 = var9.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.mhv8BA;
            var8 = var7.bind(var8)(var5);
            _fun0002_ip = 318; continue _fun0002;
 160:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 9;
            var9 = var11[var5];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.t;
            if(var6) { _fun0002_ip = 222; continue _fun0002 }
 207:
            var5 = var7.woMjLS;
            var5 = var9.bind(var10)(var5);
            _fun0002_ip = 235; continue _fun0002;
 222:
            var7 = var7.xO2XIy;
            var5 = var9.bind(var10)(var7);
 235:
            var8 = var5;
            _fun0002_ip = 318; continue _fun0002;
 240:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 9;
            var9 = var11[var5];
            var9 = var7.bind(var4)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var5 = var11[var5];
            var5 = var7.bind(var4)(var5);
            var7 = var5.t;
            if(var6) { _fun0002_ip = 302; continue _fun0002 }
 287:
            var5 = var7.c6EUJC;
            var5 = var9.bind(var10)(var5);
            _fun0002_ip = 315; continue _fun0002;
 302:
            var7 = var7.INsLgI;
            var5 = var9.bind(var10)(var7);
 315:
            var8 = var5;
 318:
            var10 = _closure1_slot3;
            var9 = var10.useMemo;
            var7 = new Array(1);
            var7[0] = var3;
            var5 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var6 = 10;
                    var1 = var1[var6];
                    var4 = undefined;
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.UserVerificationFieldPlatforms;
                    var1 = var1.EMAIL;
                    if(!(var1 !== var3)) { _fun0003_ip = 125; continue _fun0003 }
 48:
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var1 = var1[var6];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.UserVerificationFieldPlatforms;
                    var1 = var1.PHONE;
                    if(!(var1 !== var3)) { _fun0003_ip = 103; continue _fun0003 }
 81:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 16;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    _fun0003_ip = 145; continue _fun0003;
 103:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 17;
                    var3 = var6[var3];
                    var1 = var5.bind(var4)(var3);
                    _fun0003_ip = 145; continue _fun0003;
 125:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 16;
                    var2 = var5[var2];
                    var1 = var3.bind(var4)(var2);
 145:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var5, var7);
            var2 = function getHandlePress(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var6 = 10;
                    var4 = var4[var6];
                    var5 = undefined;
                    var4 = var7.bind(var5)(var4);
                    var4 = var4.UserVerificationFieldPlatforms;
                    var4 = var4.EMAIL;
                    if(!(var4 !== var3)) { _fun0004_ip = 93; continue _fun0004 }
 46:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var2 = var4.bind(var5)(var2);
                    var2 = var2.UserVerificationFieldPlatforms;
                    var2 = var2.PHONE;
                    if(!(var2 !== var3)) { _fun0004_ip = 86; continue _fun0004 }
 79:
                    var2 = function() {
                        var1 = undefined;
                        return var1;
                    };
                    return var2;
 86:
                    var2 = function() {
                        var4 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 12;
                        var3 = var8[var1];
                        var1 = undefined;
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.pushLazy;
                        var7 = _closure1_slot0;
                        var2 = 14;
                        var2 = var8[var2];
                        var6 = var7.bind(var1)(var2);
                        var2 = 13;
                        var3 = var8[var2];
                        var2 = var8.paths;
                        var3 = var6.bind(var1)(var3, var2);
                        var2 = {};
                        var6 = 15;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var6 = var6.ChangePhoneReason;
                        var6 = var6.GUILD_PHONE_REQUIRED;
                        var2['reason'] = var6;
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    return var2;
 93:
                    var1 = function() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 11;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.open;
                        var2 = var2.bind(var3)();
                        return var1;
                    };
                    return var1;
                }
            };
            var5 = var2.bind(var4)(var3);
            var3 = _closure1_slot5;
            var2 = _closure1_slot8;
            var1 = {};
            var1['label'] = var8;
            var1['icon'] = var7;
            var1['passesVerification'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();