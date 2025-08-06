// app/modules/user_settings/native/UserSettingsAuthedAppPermissions.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 345; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot9;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot9;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 345:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ScrollView;
    var _closure1_slot3 = var7;
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
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = {'paddingHorizontal': 16, 'paddingVertical': 24};
    var7['container'] = var4;
    var4 = {'flexDirection': 'row', 'marginTop': 8};
    var7['permissionContainer'] = var4;
    var4 = {};
    var4['marginTop'] = var10;
    var7['permissionIcon'] = var4;
    var4 = 12;
    var10 = {'flexShrink': 1, 'marginLeft': 12};
    var7['permissionText'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot7 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/UserSettingsAuthedAppPermissions.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function UserSettingsAuthedAppPermissions(arg1) {
        var1 = arg1;
        var2 = var1.oauth2Token;
        var3 = _closure1_slot7;
        var4 = undefined;
        var6 = var3.bind(var4)();
        var _closure2_slot0 = var6;
        var3 = var2.application;
        var _closure2_slot1 = var3;
        var3 = var2.scopes;
        var _closure2_slot2 = var3;
        var2 = var2.disclosures;
        var _closure2_slot3 = var2;
        var3 = _closure1_slot5;
        var2 = _closure1_slot3;
        var1 = {};
        var6 = var6.container;
        var1['contentContainerStyle'] = var6;
        var5 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var10 = new Array(0);
                var _closure3_slot0 = var10;
                var2 = _closure1_slot8;
                var1 = _closure2_slot2;
                var4 = undefined;
                var11 = var2.bind(var4)(var1);
                var3 = var11.bind(var4)();
                var1 = var3.done;
                var16 = 6;
                var9 = 4;
                var2 = 0;
                var6 = 5;
                if(var1) { _fun0004_ip = 231; continue _fun0004 }
 57:
                var12 = var3.value;
                var15 = var10.push;
                var13 = _closure1_slot0;
                var1 = _closure1_slot2;
                var14 = var1[var9];
                var18 = var13.bind(var4)(var14);
                var17 = var18.getScopeNames;
                var14 = _closure2_slot2;
                var20 = var17.bind(var18)(var12, var14);
                var14 = new Array(0);
                var21 = var14;
                var19 = 0;
                var17 = arraySpread(var21, var20, var19);
                var21 = var15;
                var20 = var14;
                var19 = var10;
                var14 = apply(var21, var20, var19);
                var1 = var1[var6];
                var1 = var13.bind(var4)(var1);
                var1 = var1.OAuth2Scopes;
                var1 = var1.APPLICATIONS_COMMANDS;
                if(!(var12 === var1)) { _fun0004_ip = 213; continue _fun0004 }
 151:
                var12 = var10.push;
                var15 = _closure1_slot0;
                var1 = _closure1_slot2;
                var13 = var1[var16];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var1 = var1[var16];
                var1 = var15.bind(var4)(var1);
                var1 = var1.t;
                var1 = var1.Ls2XRk;
                var1 = var13.bind(var14)(var1);
                var1 = var12.bind(var10)(var1);
 213:
                var12 = var11.bind(var4)();
                var1 = var12.done;
                var3 = var12;
                if(!var1) { _fun0004_ip = 57; continue _fun0004 }
 231:
                var1 = var10.length;
                if(!(!(var1 > var2))) { _fun0004_ip = 265; continue _fun0004 }
 240:
                var3 = _closure2_slot3;
                var1 = null;
                if(!(var1 != var3)) { _fun0004_ip = 263; continue _fun0004 }
 250:
                var1 = _closure2_slot3;
                var1 = var1.length;
                if(!(!(var1 > var2))) { _fun0004_ip = 265; continue _fun0004 }
 263:
                return var4;
 265:
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var11 = _closure1_slot5;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var6 = 7;
                var5 = var12[var6];
                var5 = var15.bind(var4)(var5);
                var9 = var5.Text;
                var5 = {'variant': 'heading-sm/semibold', 'color': 'header-primary'};
                var13 = _closure2_slot1;
                var13 = var13.name;
                var5['children'] = var13;
                var9 = var11.bind(var4)(var9, var5);
                var5 = new Array(4);
                var5[0] = var9;
                var6 = var12[var6];
                var6 = var15.bind(var4)(var6);
                var9 = var6.Text;
                var6 = {'variant': 'heading-sm/semibold', 'color': 'header-secondary'};
                var13 = var12[var16];
                var13 = var15.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var12[var16];
                var12 = var15.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.xrmhRU;
                var12 = var13.bind(var14)(var12);
                var6['children'] = var12;
                var6 = var11.bind(var4)(var9, var6);
                var5[1] = var6;
                var9 = var10.map;
                var6 = function(arg1, arg2) {
                    var5 = _closure1_slot6;
                    var4 = _closure1_slot4;
                    var3 = {};
                    var9 = _closure2_slot0;
                    var1 = var9.permissionContainer;
                    var3['style'] = var1;
                    var8 = _closure1_slot5;
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var1 = 8;
                    var1 = var10[var1];
                    var2 = undefined;
                    var1 = var7.bind(var2)(var1);
                    var6 = var1.CircleCheckIcon;
                    var1 = {};
                    var12 = var9.permissionIcon;
                    var1['style'] = var12;
                    var12 = 'xs';
                    var1['size'] = var12;
                    var12 = _closure1_slot1;
                    var11 = 9;
                    var11 = var10[var11];
                    var11 = var12.bind(var2)(var11);
                    var11 = var11.colors;
                    var11 = var11.STATUS_POSITIVE;
                    var1['color'] = var11;
                    var6 = var8.bind(var2)(var6, var1);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = 7;
                    var6 = var10[var6];
                    var6 = var7.bind(var2)(var6);
                    var7 = var6.Text;
                    var6 = {'style': null, 'variant': 'text-sm/normal', 'color': 'text-normal'};
                    var9 = var9.permissionText;
                    var6['style'] = var9;
                    var9 = arg1;
                    var6['children'] = var9;
                    var6 = var8.bind(var2)(var7, var6);
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = arg2;
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                };
                var6 = var9.bind(var10)(var6);
                var5[2] = var6;
                var9 = _closure2_slot3;
                var6 = null;
                var9 = var6 == var9;
                var6 = undefined;
                if(var9) { _fun0004_ip = 488; continue _fun0004 }
 467:
                var9 = _closure2_slot3;
                var8 = var9.map;
                var7 = function(arg1, arg2) {
                    _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                        var13 = arg1;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 10;
                        var1 = var4[var1];
                        var6 = undefined;
                        var3 = var3.bind(var6)(var1);
                        var1 = var3.getTextForDisclosure;
                        var10 = var1.bind(var3)(var13);
                        var1 = null;
                        var3 = var1 != var10;
                        if(!var3) { _fun0005_ip = 222; continue _fun0005 }
 51:
                        var5 = _closure1_slot6;
                        var4 = _closure1_slot4;
                        var3 = {};
                        var11 = _closure2_slot0;
                        var7 = var11.permissionContainer;
                        var3['style'] = var7;
                        var9 = _closure1_slot5;
                        var8 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 11;
                        var2 = var12[var2];
                        var2 = var8.bind(var6)(var2);
                        var7 = var2.DisclosureIcon;
                        var2 = {};
                        var14 = var11.permissionIcon;
                        var2['style'] = var14;
                        var2['disclosure'] = var13;
                        var7 = var9.bind(var6)(var7, var2);
                        var2 = new Array(2);
                        var2[0] = var7;
                        var7 = 7;
                        var7 = var12[var7];
                        var7 = var8.bind(var6)(var7);
                        var8 = var7.Text;
                        var7 = {};
                        var11 = var11.permissionText;
                        var7['style'] = var11;
                        var11 = 'text-sm/normal';
                        var7['variant'] = var11;
                        var7['children'] = var10;
                        var7 = var9.bind(var6)(var8, var7);
                        var2[1] = var7;
                        var3['children'] = var2;
                        var2 = _closure3_slot0;
                        var7 = var2.length;
                        var2 = arg2;
                        var2 = var2 + var7;
                        var1 = var5.bind(var6)(var4, var3, var2);
 222:
                        return var1;
                    }
                };
                var6 = var8.bind(var9)(var7);
 488:
                var5[3] = var6;
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5 = var5.bind(var4)();
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();