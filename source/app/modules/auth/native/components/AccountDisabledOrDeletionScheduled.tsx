// app/modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.LoginStates;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot7 = var7;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = {'display': 'flex', 'height': '100%', 'flex': 1};
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var8 = 6;
            var3 = var3[var8];
            var7 = undefined;
            var3 = var6.bind(var7)(var3);
            var6 = var3.spacing;
            if(var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var6.PX_16;
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var3 = var6.PX_8;
case 4:
            var2['paddingBottom'] = var3;
            var3 = 0;
            if(var4) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            var9 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var8];
            var6 = var9.bind(var7)(var6);
            var6 = var6.spacing;
            var3 = var6.PX_16;
case 5:
            var2['paddingHorizontal'] = var3;
            var3 = 'transparent';
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var6 = _closure1_slot1;
            var5 = _closure1_slot2;
            var5 = var5[var8];
            var5 = var6.bind(var7)(var5);
            var5 = var5.colors;
            var3 = var5.BACKGROUND_BASE_LOW;
case 7:
            var2['backgroundColor'] = var3;
            var3 = 'center';
            if(!var4) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var3 = 'space-between';
case 9:
            var2['justifyContent'] = var3;
            var1['container'] = var2;
            var2 = {'marginBottom': 32, 'alignSelf': 'center'};
            var1['image'] = var2;
            var2 = {'textAlign': 'center', 'marginBottom': 8};
            var1['title'] = var2;
            var2 = {'lineHeight': 18, 'marginBottom': 24, 'textAlign': 'center'};
            var1['description'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AccountDisabledOrDeletionScheduled(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var8 = var2.handleLogin;
            var _closure2_slot0 = var8;
            var3 = var2.onReset;
            var _closure2_slot1 = var3;
            var7 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 7;
            var2 = var5[var2];
            var4 = undefined;
            var6 = var7.bind(var4)(var2);
            var2 = var6.useNavigation;
            var6 = var2.bind(var6)();
            var _closure2_slot2 = var6;
            var2 = 8;
            var2 = var5[var2];
            var11 = var7.bind(var4)(var2);
            var10 = var11.useStateFromStores;
            var2 = _closure1_slot5;
            var7 = new Array(1);
            var7[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getLoginStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var10.bind(var11)(var7, var2);
            var _closure2_slot3 = var2;
            var7 = _closure1_slot3;
            var11 = var7.useRef;
            var10 = null;
            var10 = var11.bind(var7)(var10);
            var _closure2_slot4 = var10;
            var11 = var7.useEffect;
            var10 = new Array(2);
            var10[0] = var2;
            var10[1] = var6;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = _closure2_slot3;
                    if(!(var3 !== var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var3['current'] = var2;
                    _fun0003_ip = 11; continue _fun0003;
case 13:
                    var4 = _closure2_slot3;
                    var2 = _closure1_slot6;
                    var2 = var2.ACCOUNT_SCHEDULED_FOR_DELETION;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0003_ip = 15; continue _fun0003 }
case 6:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot6;
                    var3 = var3.ACCOUNT_DISABLED;
                    var2 = var4 !== var3;
case 15:
                    if(!var2) { _fun0003_ip = 11; continue _fun0003 }
case 16:
                    var2 = _closure2_slot2;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
case 11:
                    var1 = undefined;
                    return var1;
                }
            };
            var6 = var11.bind(var7)(var6, var10);
            var10 = var7.useCallback;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0004_ip = 19; continue _fun0004;
case 17:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.loginReset;
                    var1 = var1.bind(var2)();
case 19:
                    var1 = undefined;
                    return var1;
                }
            };
            var17 = var10.bind(var7)(var3, var6);
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCredentials;
                    var1 = var1.bind(var2)();
                    var5 = var1.login;
                    var2 = var1.password;
                    var4 = _closure2_slot0;
                    var3 = '';
                    var1 = undefined;
                    if(!(var1 !== var2)) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var3 = var2;
case 20:
                    var2 = true;
                    var2 = var4.bind(var1)(var5, var3, var2);
                    return var1;
                }
            };
            var15 = var6.bind(var7)(var1, var3);
            var3 = _closure1_slot1;
            var1 = 10;
            var1 = var5[var1];
            var1 = var3.bind(var4)(var1);
            var3 = var1.bind(var4)();
            var1 = _closure1_slot9;
            var13 = var1.bind(var4)(var3);
            var1 = _closure1_slot6;
            var1 = var1.ACCOUNT_DISABLED;
            var5 = var2 === var1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var20 = 11;
            var2 = var1[var20];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var6 = var1.ZFWofo;
            var18 = var2.bind(var3)(var6);
            _fun0002_ip = 24; continue _fun0002;
case 22:
            var1 = var1.j3rC+U;
            var18 = var2.bind(var3)(var1);
case 24:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var20];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var20];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var5 = var1.pCBti+;
            var12 = var2.bind(var3)(var5);
            _fun0002_ip = 27; continue _fun0002;
case 25:
            var1 = var1.6eNTWe;
            var12 = var2.bind(var3)(var1);
case 27:
            var3 = _closure1_slot7;
            var2 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 12;
            var1 = var16[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var5 = {};
            var6 = 1;
            var5['flexGrow'] = var6;
            var1['contentStyle'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var8 = var13.container;
            var5['style'] = var8;
            var8 = {};
            var19 = _closure1_slot0;
            var9 = 13;
            var9 = var16[var9];
            var9 = var19.bind(var4)(var9);
            var10 = var9.WumpTrash;
            var9 = {};
            var11 = var13.image;
            var9['style'] = var11;
            var10 = var3.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = 14;
            var11 = var16[var10];
            var11 = var19.bind(var4)(var11);
            var14 = var11.Text;
            var11 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'mobile-text-heading-primary'};
            var21 = var13.title;
            var11['style'] = var21;
            var11['children'] = var18;
            var11 = var3.bind(var4)(var14, var11);
            var9[1] = var11;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-default'};
            var13 = var13.description;
            var10['style'] = var13;
            var10['children'] = var12;
            var10 = var3.bind(var4)(var11, var10);
            var9[2] = var10;
            var8['children'] = var9;
            var9 = var7.bind(var4)(var6, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var9 = {};
            var10 = 15;
            var10 = var16[var10];
            var10 = var19.bind(var4)(var10);
            var11 = var10.ButtonGroup;
            var10 = {};
            var13 = 16;
            var12 = var16[var13];
            var12 = var19.bind(var4)(var12);
            var14 = var12.Button;
            var12 = {};
            var18 = 'primary';
            var12['variant'] = var18;
            var18 = var16[var20];
            var18 = var19.bind(var4)(var18);
            var22 = var18.intl;
            var21 = var22.string;
            var18 = var16[var20];
            var18 = var19.bind(var4)(var18);
            var18 = var18.t;
            var18 = var18.JhDw5o;
            var18 = var21.bind(var22)(var18);
            var12['text'] = var18;
            var12['onPress'] = var17;
            var14 = var3.bind(var4)(var14, var12);
            var12 = new Array(2);
            var12[0] = var14;
            var13 = var16[var13];
            var13 = var19.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var17 = 'secondary';
            var13['variant'] = var17;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.v51oiN;
            var16 = var17.bind(var18)(var16);
            var13['text'] = var16;
            var13['onPress'] = var15;
            var13 = var3.bind(var4)(var14, var13);
            var12[1] = var13;
            var10['children'] = var12;
            var10 = var7.bind(var4)(var11, var10);
            var9['children'] = var10;
            var9 = var3.bind(var4)(var6, var9);
            var8[1] = var9;
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