// app/modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var11 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var4 = native4;
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
    var4 = var11.bind(var1)(var4);
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
    var4 = {};
    var9 = {'flex': 1, 'paddingBottom': 16, 'paddingHorizontal': 16};
    var10 = 6;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_PRIMARY;
    var9['backgroundColor'] = var10;
    var4['container'] = var9;
    var9 = {'marginBottom': 32, 'alignSelf': 'center'};
    var4['image'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['title'] = var9;
    var9 = {'lineHeight': 18, 'marginBottom': 24, 'textAlign': 'center'};
    var4['description'] = var9;
    var9 = {};
    var10 = 12;
    var9['marginBottom'] = var10;
    var4['deleteButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot9 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/AccountDisabledOrDeletionScheduled.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AccountDisabledOrDeletionScheduled(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.handleLogin;
            var _closure2_slot0 = var7;
            var3 = var2.onReset;
            var _closure2_slot1 = var3;
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 7;
            var2 = var9[var2];
            var4 = undefined;
            var5 = var6.bind(var4)(var2);
            var2 = var5.useNavigation;
            var5 = var2.bind(var5)();
            var _closure2_slot2 = var5;
            var2 = 8;
            var2 = var9[var2];
            var10 = var6.bind(var4)(var2);
            var9 = var10.useStateFromStores;
            var2 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var2;
            var2 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getLoginStatus;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var9.bind(var10)(var6, var2);
            var _closure2_slot3 = var2;
            var6 = _closure1_slot3;
            var10 = var6.useRef;
            var9 = null;
            var9 = var10.bind(var6)(var9);
            var _closure2_slot4 = var9;
            var10 = var6.useEffect;
            var9 = new Array(2);
            var9[0] = var2;
            var9[1] = var5;
            var5 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = _closure2_slot3;
                    if(!(var3 !== var2)) { _fun0002_ip = 110; continue _fun0002 }
 20:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 == var3)) { _fun0002_ip = 51; continue _fun0002 }
 35:
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot3;
                    var3['current'] = var2;
                    _fun0002_ip = 110; continue _fun0002;
 51:
                    var4 = _closure2_slot3;
                    var2 = _closure1_slot6;
                    var2 = var2.ACCOUNT_SCHEDULED_FOR_DELETION;
                    var2 = var4 !== var2;
                    if(!var2) { _fun0002_ip = 93; continue _fun0002 }
 75:
                    var4 = _closure2_slot3;
                    var3 = _closure1_slot6;
                    var3 = var3.ACCOUNT_DISABLED;
                    var2 = var4 !== var3;
 93:
                    if(!var2) { _fun0002_ip = 110; continue _fun0002 }
 96:
                    var2 = _closure2_slot2;
                    var1 = var2.pop;
                    var1 = var1.bind(var2)();
 110:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var10.bind(var6)(var5, var9);
            var9 = var6.useCallback;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0003_ip = 25; continue _fun0003 }
 13:
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                    _fun0003_ip = 60; continue _fun0003;
 25:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.loginReset;
                    var1 = var1.bind(var2)();
 60:
                    var1 = undefined;
                    return var1;
                }
            };
            var18 = var9.bind(var6)(var3, var5);
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var7;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure1_slot5;
                    var1 = var2.getCredentials;
                    var1 = var1.bind(var2)();
                    var5 = var1.login;
                    var2 = var1.password;
                    var4 = _closure2_slot0;
                    var3 = '';
                    var1 = undefined;
                    if(!(var1 !== var2)) { _fun0004_ip = 49; continue _fun0004 }
 46:
                    var3 = var2;
 49:
                    var2 = true;
                    var2 = var4.bind(var1)(var5, var3, var2);
                    return var1;
                }
            };
            var13 = var5.bind(var6)(var1, var3);
            var1 = _closure1_slot9;
            var12 = var1.bind(var4)();
            var1 = _closure1_slot6;
            var1 = var1.ACCOUNT_DISABLED;
            var5 = var2 === var1;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var17 = 10;
            var2 = var1[var17];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var17];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0001_ip = 296; continue _fun0001 }
 281:
            var6 = var1.ZFWofn;
            var19 = var2.bind(var3)(var6);
            _fun0001_ip = 309; continue _fun0001;
 296:
            var1 = var1.j3rC+f;
            var19 = var2.bind(var3)(var1);
 309:
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var2 = var1[var17];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var1[var17];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0001_ip = 368; continue _fun0001 }
 353:
            var5 = var1.pCBti4;
            var11 = var2.bind(var3)(var5);
            _fun0001_ip = 381; continue _fun0001;
 368:
            var1 = var1.6eNTWV;
            var11 = var2.bind(var3)(var1);
 381:
            var3 = _closure1_slot7;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var1 = 11;
            var1 = var16[var1];
            var2 = var15.bind(var4)(var1);
            var1 = {};
            var7 = _closure1_slot8;
            var6 = _closure1_slot4;
            var5 = {};
            var9 = var12.container;
            var5['style'] = var9;
            var20 = _closure1_slot0;
            var8 = 12;
            var8 = var16[var8];
            var8 = var20.bind(var4)(var8);
            var9 = var8.WumpTrash;
            var8 = {};
            var10 = var12.image;
            var8['style'] = var10;
            var9 = var3.bind(var4)(var9, var8);
            var8 = new Array(4);
            var8[0] = var9;
            var9 = 13;
            var10 = var16[var9];
            var10 = var20.bind(var4)(var10);
            var14 = var10.Text;
            var10 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/extrabold', 'color': 'header-primary'};
            var21 = var12.title;
            var10['style'] = var21;
            var10['children'] = var19;
            var10 = var3.bind(var4)(var14, var10);
            var8[1] = var10;
            var9 = var16[var9];
            var9 = var20.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-sm/medium', 'color': 'header-secondary'};
            var14 = var12.description;
            var9['style'] = var14;
            var9['children'] = var11;
            var9 = var3.bind(var4)(var10, var9);
            var8[2] = var9;
            var9 = {};
            var14 = 14;
            var10 = var16[var14];
            var11 = var15.bind(var4)(var10);
            var10 = {};
            var19 = var16[var14];
            var19 = var15.bind(var4)(var19);
            var19 = var19.Sizes;
            var19 = var19.MEDIUM;
            var10['size'] = var19;
            var19 = var16[var17];
            var19 = var20.bind(var4)(var19);
            var22 = var19.intl;
            var21 = var22.string;
            var19 = var16[var17];
            var19 = var20.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.JhDw5u;
            var19 = var21.bind(var22)(var19);
            var10['text'] = var19;
            var10['onPress'] = var18;
            var12 = var12.deleteButton;
            var10['style'] = var12;
            var11 = var3.bind(var4)(var11, var10);
            var10 = new Array(2);
            var10[0] = var11;
            var11 = var16[var14];
            var12 = var15.bind(var4)(var11);
            var11 = {};
            var18 = var16[var14];
            var18 = var15.bind(var4)(var18);
            var18 = var18.Sizes;
            var18 = var18.MEDIUM;
            var11['size'] = var18;
            var18 = var16[var17];
            var18 = var20.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var16[var17];
            var17 = var20.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.v51oiI;
            var17 = var18.bind(var19)(var17);
            var11['text'] = var17;
            var14 = var16[var14];
            var14 = var15.bind(var4)(var14);
            var14 = var14.Colors;
            var14 = var14.GREY;
            var11['color'] = var14;
            var11['onPress'] = var13;
            var11 = var3.bind(var4)(var12, var11);
            var10[1] = var11;
            var9['children'] = var10;
            var9 = var7.bind(var4)(var6, var9);
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