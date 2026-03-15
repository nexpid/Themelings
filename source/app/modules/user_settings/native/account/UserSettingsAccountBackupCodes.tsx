// app/modules/user_settings/native/account/UserSettingsAccountBackupCodes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function CodeRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var5 = var2.code;
            var _closure2_slot0 = var5;
            var6 = var2.showCheckMark;
            var4 = _closure1_slot3;
            var3 = var4.useCallback;
            var2 = new Array(1);
            var2[0] = var5;
            var1 = function() {
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 6;
                var2 = var4[var1];
                var1 = undefined;
                var6 = var3.bind(var1)(var2);
                var5 = var6.copy;
                var9 = _closure2_slot0;
                var8 = var9.replace;
                var7 = /[^a-zA-Z0-9]/g;
                var2 = '';
                var2 = var8.bind(var9)(var7, var2);
                var2 = var5.bind(var6)(var2);
                var2 = 7;
                var2 = var4[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.presentCopiedToClipboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var8 = var3.bind(var4)(var1, var2);
            var4 = _closure1_slot6;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 8;
            var1 = var3[var1];
            var3 = undefined;
            var1 = var2.bind(var3)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var7 = undefined;
            if(var6) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var8;
case 2:
            var1['onPress'] = var7;
            var1['label'] = var5;
            var5 = null;
            if(!var6) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = _closure1_slot6;
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var6 = 9;
            var6 = var11[var6];
            var6 = var7.bind(var3)(var6);
            var7 = var6.CheckmarkSmallIcon;
            var6 = {};
            var10 = _closure1_slot1;
            var9 = 5;
            var9 = var11[var9];
            var9 = var10.bind(var3)(var9);
            var9 = var9.colors;
            var9 = var9.TEXT_BRAND;
            var6['color'] = var9;
            var5 = var8.bind(var3)(var7, var6);
case 4:
            var1['trailing'] = var5;
            var1 = var4.bind(var3)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
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
    var4 = var4.ScrollView;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 5;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_BRAND;
    var9['color'] = var10;
    var4['generateCode'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/account/UserSettingsAccountBackupCodes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsAccountBackupCodes(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var10 = var1.onGenerate;
            var11 = var1.headerLabel;
            var4 = undefined;
            if(!(var11 === var4)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 10;
            var3 = var6[var1];
            var3 = var2.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.format;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var1 = var1.t;
            var2 = var1.OhmvYt;
            var1 = {};
            var11 = var3.bind(var5)(var2, var1);
case 6:
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 11;
            var1 = var13[var1];
            var3 = var6.bind(var4)(var1);
            var2 = var3.useToken;
            var12 = _closure1_slot1;
            var9 = 5;
            var1 = var13[var9];
            var1 = var12.bind(var4)(var1);
            var1 = var1.modules;
            var1 = var1.mobile;
            var1 = var1.TABLE_ROW_PADDING;
            var14 = var2.bind(var3)(var1);
            var1 = _closure1_slot8;
            var20 = var1.bind(var4)();
            var1 = 12;
            var1 = var13[var1];
            var5 = var6.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot5;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getBackupCodes;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var3.bind(var5)(var2, var1);
            _closure2_slot0 = var1;
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = new Array(0);
                var _closure3_slot0 = var3;
                var2 = new Array(0);
                var _closure3_slot1 = var2;
                var5 = _closure2_slot0;
                var4 = var5.forEach;
                var1 = function(arg1) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var4 = arg1;
                        var1 = var4.consumed;
                        if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                        var3 = _closure3_slot1;
                        var1 = var3.push;
                        var1 = var1.bind(var3)(var4);
                        _fun0003_ip = 10; continue _fun0003;
case 8:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var1 = var2.bind(var3)(var4);
case 10:
                        return var1;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var1 = {};
                var1['usedCodes'] = var3;
                var1['unusedCodes'] = var2;
                return var1;
            };
            var1 = var3.bind(var5)(var1, var2);
            var18 = var1.usedCodes;
            var21 = var1.unusedCodes;
            var5 = _closure1_slot3;
            var3 = var5.useEffect;
            var2 = function() {
                var1 = function() {
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.clearBackupCodes;
                    var2 = var2.bind(var3)();
                    return var1;
                };
                return var1;
            };
            var1 = new Array(0);
            var1 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot6;
            var2 = _closure1_slot4;
            var1 = {};
            var7 = _closure1_slot7;
            var5 = 14;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Stack;
            var5 = {};
            var8 = var13[var9];
            var8 = var12.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_24;
            var5['spacing'] = var8;
            var8 = {};
            var8['paddingHorizontal'] = var14;
            var9 = var13[var9];
            var9 = var12.bind(var4)(var9);
            var9 = var9.spacing;
            var9 = var9.PX_16;
            var8['paddingTop'] = var9;
            var5['style'] = var8;
            var9 = var11.map;
            var8 = function(arg1, arg2) {
                var5 = _closure1_slot6;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 15;
                var1 = var3[var1];
                var4 = undefined;
                var1 = var2.bind(var4)(var1);
                var3 = var1.Text;
                var2 = {};
                var1 = 'text-sm/medium';
                var2['variant'] = var1;
                var1 = arg1;
                var2['children'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var9 = var9.bind(var11)(var8);
            var8 = new Array(4);
            var8[0] = var9;
            var9 = var21.length;
            var11 = 0;
            var9 = var9 > var11;
            if(!var9) { _fun0002_ip = 11; continue _fun0002 }
case 12:
            var14 = _closure1_slot6;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var12 = 16;
            var12 = var24[var12];
            var12 = var23.bind(var4)(var12);
            var13 = var12.TableRowGroup;
            var12 = {};
            var15 = 10;
            var19 = var24[var15];
            var19 = var23.bind(var4)(var19);
            var22 = var19.intl;
            var19 = var22.string;
            var15 = var24[var15];
            var15 = var23.bind(var4)(var15);
            var15 = var15.t;
            var15 = var15.zdzyFo;
            var15 = var19.bind(var22)(var15);
            var12['title'] = var15;
            var19 = var21.map;
            var15 = function(arg1, arg2) {
                var5 = _closure1_slot6;
                var4 = _closure1_slot9;
                var3 = {};
                var1 = arg1;
                var1 = var1.code;
                var3['code'] = var1;
                var1 = false;
                var3['showCheckMark'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var15 = var19.bind(var21)(var15);
            var12['children'] = var15;
            var9 = var14.bind(var4)(var13, var12);
case 11:
            var8[1] = var9;
            var9 = var18.length;
            var9 = var9 > var11;
            if(!var9) { _fun0002_ip = 13; continue _fun0002 }
case 14:
            var13 = _closure1_slot6;
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var11 = 16;
            var11 = var22[var11];
            var11 = var21.bind(var4)(var11);
            var12 = var11.TableRowGroup;
            var11 = {};
            var14 = 10;
            var15 = var22[var14];
            var15 = var21.bind(var4)(var15);
            var19 = var15.intl;
            var15 = var19.string;
            var14 = var22[var14];
            var14 = var21.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.FkFLDN;
            var14 = var15.bind(var19)(var14);
            var11['title'] = var14;
            var15 = var18.map;
            var14 = function(arg1, arg2) {
                var5 = _closure1_slot6;
                var4 = _closure1_slot9;
                var3 = {};
                var1 = arg1;
                var1 = var1.code;
                var3['code'] = var1;
                var1 = true;
                var3['showCheckMark'] = var1;
                var2 = undefined;
                var1 = arg2;
                var1 = var5.bind(var2)(var4, var3, var1);
                return var1;
            };
            var14 = var15.bind(var18)(var14);
            var11['children'] = var14;
            var9 = var13.bind(var4)(var12, var11);
case 13:
            var8[2] = var9;
            var9 = null;
            var9 = var9 !== var10;
            if(!var9) { _fun0002_ip = 15; continue _fun0002 }
case 16:
            var12 = _closure1_slot6;
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var10 = 16;
            var10 = var24[var10];
            var10 = var23.bind(var4)(var10);
            var11 = var10.TableRowGroup;
            var10 = {};
            var15 = _closure1_slot6;
            var13 = 8;
            var13 = var24[var13];
            var13 = var23.bind(var4)(var13);
            var14 = var13.TableRow;
            var13 = {};
            var19 = _closure1_slot6;
            var17 = 15;
            var17 = var24[var17];
            var17 = var23.bind(var4)(var17);
            var18 = var17.Text;
            var17 = {};
            var21 = 'text-md/semibold';
            var17['variant'] = var21;
            var20 = var20.generateCode;
            var17['style'] = var20;
            var20 = 10;
            var21 = var24[var20];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var20 = var24[var20];
            var20 = var23.bind(var4)(var20);
            var20 = var20.t;
            var20 = var20.RIThUu;
            var20 = var21.bind(var22)(var20);
            var17['children'] = var20;
            var17 = var19.bind(var4)(var18, var17);
            var13['label'] = var17;
            var16 = function onPress() {
                var3 = _closure1_slot5;
                var2 = var3.getVerificationKey;
                var5 = var2.bind(var3)();
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 13;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.confirmViewBackupCodes;
                var2 = true;
                var2 = var3.bind(var4)(var5, var2);
                return var1;
            };
            var13['onPress'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var9 = var12.bind(var4)(var11, var10);
case 15:
            var8[3] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();