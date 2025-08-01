// app/modules/oauth2/native/AuthorizeScopes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function Scope(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var13 = var1.text;
            var14 = var1.error;
            var17 = var1.isFake;
            var1 = _closure1_slot6;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var9.scopeContainer;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var6 = _closure1_slot3;
            var5 = {};
            var8 = var9.iconWrapper;
            var5['style'] = var8;
            var15 = _closure1_slot4;
            var12 = _closure1_slot0;
            var19 = _closure1_slot2;
            if(var17) { _fun0001_ip = 154; continue _fun0001 }
 87:
            var8 = 6;
            var8 = var19[var8];
            var8 = var12.bind(var4)(var8);
            var10 = var8.CircleCheckIcon;
            var8 = {};
            var18 = _closure1_slot1;
            var16 = 4;
            var16 = var19[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.TEXT_MUTED;
            var8['color'] = var16;
            var16 = 'refresh_sm';
            var8['size'] = var16;
            var8 = var15.bind(var4)(var10, var8);
            _fun0001_ip = 229; continue _fun0001;
 154:
            var10 = 5;
            var10 = var19[var10];
            var10 = var12.bind(var4)(var10);
            var12 = var10.CircleXIcon;
            var10 = {};
            var16 = var9.fakeScopeIcon;
            var10['style'] = var16;
            var18 = _closure1_slot1;
            var16 = 4;
            var16 = var19[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.colors;
            var16 = var16.TEXT_MUTED;
            var10['color'] = var16;
            var16 = 'refresh_sm';
            var10['size'] = var16;
            var8 = var15.bind(var4)(var12, var10);
 229:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.scope;
            var6['style'] = var9;
            var12 = _closure1_slot4;
            var10 = _closure1_slot0;
            var9 = _closure1_slot2;
            var15 = 7;
            var9 = var9[var15];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {};
            var16 = 'text-md/normal';
            var9['variant'] = var16;
            var16 = undefined;
            if(!var17) { _fun0001_ip = 319; continue _fun0001 }
 313:
            var16 = 'text-muted';
 319:
            var9['color'] = var16;
            var9['children'] = var13;
            var10 = var12.bind(var4)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = null;
            var12 = var10 != var14;
            if(!var12) { _fun0001_ip = 398; continue _fun0001 }
 350:
            var13 = _closure1_slot4;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var11 = var11[var15];
            var11 = var12.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {};
            var15 = 'text-xs/normal';
            var11['variant'] = var15;
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 398:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['scopesContainer'] = var9;
    var9 = {'flexDirection': 'column', 'gap': 16};
    var4['scopes'] = var9;
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var4['scopeContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'column', 'justifyContent': 'center'};
    var4['scope'] = var9;
    var9 = {'fontSize': 12, 'lineHeight': 16};
    var10 = 4;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var9['color'] = var10;
    var4['error'] = var9;
    var9 = {'marginRight': 12, 'width': 20, 'height': 20};
    var4['iconWrapper'] = var9;
    var9 = {};
    var10 = 0.6;
    var9['opacity'] = var10;
    var4['fakeScopeIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/oauth2/native/AuthorizeScopes.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function AuthorizeScopes(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var18 = var1.application;
            var14 = var1.accountScopes;
            var _closure2_slot0 = var14;
            var3 = var1.requestedScopes;
            var2 = var1.integrationType;
            var4 = var1.errors;
            var _closure2_slot1 = var4;
            var5 = var1.isTrustedName;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 56; continue _fun0002 }
 54:
            var5 = false;
 56:
            var1 = _closure1_slot6;
            var12 = var1.bind(var4)();
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 8;
            var1 = var7[var1];
            var6 = var6.bind(var4)(var1);
            var1 = function() {
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var1 = 9;
                var2 = var8[var1];
                var6 = undefined;
                var2 = var7.bind(var6)(var2);
                var2 = var2.FAKE_SCOPES;
                var5 = global;
                var4 = var5.Math;
                var3 = var4.floor;
                var9 = var5.Math;
                var5 = var9.random;
                var5 = var5.bind(var9)();
                var1 = var8[var1];
                var1 = var7.bind(var6)(var1);
                var1 = var1.FAKE_SCOPES;
                var1 = var1.length;
                var1 = var5 * var1;
                var1 = var3.bind(var4)(var1);
                var1 = var2[var1];
                return var1;
            };
            var1 = var6.bind(var4)(var1);
            var7 = var14.length;
            var6 = 0;
            if(!(var6 !== var7)) { _fun0002_ip = 548; continue _fun0002 }
 111:
            var13 = var1.bind(var4)();
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var20 = 10;
            var1 = var1[var20];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            if(var5) { _fun0002_ip = 153; continue _fun0002 }
 143:
            var17 = var1.1Hz+Sk;
            _fun0002_ip = 161; continue _fun0002;
 153:
            var17 = var1.PZpY9f;
 161:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.ApplicationIntegrationType;
            var1 = var1.USER_INSTALL;
            var11 = var2 === var1;
            if(!var11) { _fun0002_ip = 242; continue _fun0002 }
 200:
            var2 = var3.includes;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 12;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.OAuth2Scopes;
            var1 = var1.APPLICATIONS_COMMANDS;
            var11 = var2.bind(var3)(var1);
 242:
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var12.scopesContainer;
            var1['style'] = var5;
            var7 = _closure1_slot4;
            var15 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 7;
            var5 = var8[var5];
            var5 = var15.bind(var4)(var5);
            var6 = var5.Text;
            var5 = {'variant': 'heading-sm/normal', 'color': 'header-secondary'};
            var8 = var8[var20];
            var8 = var15.bind(var4)(var8);
            var16 = var8.intl;
            var15 = var16.format;
            var8 = {};
            var18 = var18.name;
            var8['application'] = var18;
            var8 = var15.bind(var16)(var17, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot5;
            var7 = _closure1_slot3;
            var6 = {};
            var12 = var12.scopes;
            var6['style'] = var12;
            var12 = var14.map;
            var9 = function(arg1) {
                var5 = arg1;
                var _closure3_slot0 = var5;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 9;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.getScopeNames;
                var2 = _closure2_slot0;
                var3 = var3.bind(var4)(var5, var2);
                var2 = var3.map;
                var1 = function(arg1, arg2) {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                        var9 = arg2;
                        var5 = _closure1_slot4;
                        var4 = _closure1_slot7;
                        var3 = {};
                        var1 = arg1;
                        var3['text'] = var1;
                        var2 = undefined;
                        var8 = 0;
                        var1 = undefined;
                        if(!(var8 === var9)) { _fun0003_ip = 82; continue _fun0003 }
 33:
                        var6 = _closure2_slot1;
                        var10 = null;
                        var11 = var10 == var6;
                        var6 = undefined;
                        if(var11) { _fun0003_ip = 79; continue _fun0003 }
 51:
                        var11 = _closure2_slot1;
                        var7 = _closure3_slot0;
                        var7 = var11[var7];
                        var10 = var10 == var7;
                        var6 = undefined;
                        if(var10) { _fun0003_ip = 79; continue _fun0003 }
 75:
                        var6 = var7[var8];
 79:
                        var1 = var6;
 82:
                        var3['error'] = var1;
                        var8 = _closure3_slot0;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var6 = '';
                        var1 = '-';
                        var1 = var7.bind(var6)(var8, var1, var9);
                        var1 = var5.bind(var2)(var4, var3, var1);
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var12.bind(var14)(var9);
            var9 = var12.flat;
            var12 = var9.bind(var12)();
            var9 = new Array(3);
            var9[0] = var12;
            if(!var11) { _fun0002_ip = 487; continue _fun0002 }
 415:
            var15 = _closure1_slot4;
            var14 = _closure1_slot7;
            var12 = {};
            var19 = _closure1_slot0;
            var16 = _closure1_slot2;
            var17 = var16[var20];
            var17 = var19.bind(var4)(var17);
            var18 = var17.intl;
            var17 = var18.string;
            var16 = var16[var20];
            var16 = var19.bind(var4)(var16);
            var16 = var16.t;
            var16 = var16.Ls2XRk;
            var16 = var17.bind(var18)(var16);
            var12['text'] = var16;
            var11 = var15.bind(var4)(var14, var12);
 487:
            var9[1] = var11;
            var12 = _closure1_slot4;
            var11 = _closure1_slot7;
            var10 = {};
            var10['text'] = var13;
            var13 = true;
            var10['isFake'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
 548:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();