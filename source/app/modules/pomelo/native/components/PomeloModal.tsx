// app/modules/pomelo/native/components/PomeloModal.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var1 = function PomeloModal(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.user;
            var _closure2_slot0 = var2;
            var13 = var1.source;
            var _closure2_slot1 = var13;
            var2 = var1.onCloseModal;
            var _closure2_slot2 = var2;
            var12 = var1.oneClickFlow;
            var4 = undefined;
            if(!(var12 === var4)) { _fun0001_ip = 47; continue _fun0001 }
 45:
            var12 = false;
 47:
            var _closure2_slot3 = var12;
            var5 = _closure1_slot4;
            var2 = var5.useState;
            var7 = {};
            var8 = _closure1_slot7;
            if(var12) { _fun0001_ip = 80; continue _fun0001 }
 72:
            var1 = var8.DETAILS;
            _fun0001_ip = 86; continue _fun0001;
 80:
            var1 = var8.EDIT;
 86:
            var7['name'] = var1;
            var1 = new Array(1);
            var1[0] = var7;
            var5 = var2.bind(var5)(var1);
            var2 = _closure1_slot3;
            var1 = 1;
            var2 = var2.bind(var4)(var5, var1);
            var1 = 0;
            var5 = var2[var1];
            var7 = {};
            var1 = _closure1_slot7;
            var2 = var1.DETAILS;
            var1 = {};
            var8 = false;
            var1['headerShown'] = var8;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var14 = 6;
            var10 = var9[var14];
            var10 = var8.bind(var4)(var10);
            var10 = var10.ImpressionNames;
            var10 = var10.POMELO_LANDING;
            var1['impressionName'] = var10;
            var10 = {};
            var11 = var9[var14];
            var11 = var8.bind(var4)(var11);
            var11 = var11.ImpressionGroups;
            var11 = var11.POMELO_FLOW;
            var10['impression_group'] = var11;
            var10['source'] = var13;
            var10['one_click_flow'] = var12;
            var1['impressionProperties'] = var10;
            var10 = function render() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 7;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot0;
                var1['user'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['render'] = var10;
            var10 = true;
            var1['fullscreen'] = var10;
            var7[var2] = var1;
            var1 = _closure1_slot7;
            var2 = var1.EDIT;
            var1 = {};
            var11 = var9[var14];
            var11 = var8.bind(var4)(var11);
            var11 = var11.ImpressionNames;
            var11 = var11.POMELO_LANDING;
            var1['impressionName'] = var11;
            var11 = {};
            var14 = var9[var14];
            var14 = var8.bind(var4)(var14);
            var14 = var14.ImpressionGroups;
            var14 = var14.POMELO_FLOW;
            var11['impression_group'] = var14;
            var11['source'] = var13;
            var11['one_click_flow'] = var12;
            var1['impressionProperties'] = var11;
            var11 = function render() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 8;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var6 = _closure2_slot2;
                var1['onCloseModal'] = var6;
                var6 = _closure2_slot0;
                var1['user'] = var6;
                var6 = _closure2_slot1;
                var1['source'] = var6;
                var5 = _closure2_slot3;
                var1['oneClickFlow'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['render'] = var11;
            var1['fullscreen'] = var10;
            var7[var2] = var1;
            var1 = _closure1_slot7;
            var2 = var1.REMINDER;
            var1 = {'title': '', 'render': null, 'fullscreen': true};
            var3 = function render() {
                var4 = _closure1_slot8;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = {};
                var5 = _closure2_slot2;
                var1['onCloseModal'] = var5;
                var1 = var4.bind(var3)(var2, var1);
                return var1;
            };
            var1['render'] = var3;
            var7[var2] = var1;
            var3 = _closure1_slot8;
            var1 = 10;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var2 = var1.Navigator;
            var1 = {};
            var1['screens'] = var7;
            var6 = _closure1_slot7;
            var6 = var6.DETAILS;
            var1['initialRouteName'] = var6;
            var1['initialRouteStack'] = var5;
            var5 = 'center';
            var1['headerTitleAlign'] = var5;
            var5 = 11;
            var6 = var9[var5];
            var6 = var8.bind(var4)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var9[var5];
            var5 = var8.bind(var4)(var5);
            var5 = var5.t;
            var5 = var5.13/7kZ;
            var5 = var6.bind(var7)(var5);
            var1['headerBackTitle'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var7 = var4.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TIMEOUT_TIME;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.PomeloScreens;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.source;
            var7 = var1.onCloseModal;
            var6 = var1.oneClickFlow;
            var5 = undefined;
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var5;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 12;
            var1 = var9[var1];
            var10 = var4.bind(var5)(var1);
            var9 = var10.useStateFromStores;
            var1 = _closure1_slot5;
            var4 = new Array(1);
            var4[0] = var1;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var9 = var9.bind(var10)(var4, var1);
            var _closure2_slot0 = var9;
            var1 = null;
            var4 = var1 == var9;
            var13 = undefined;
            if(var4) { _fun0002_ip = 105; continue _fun0002 }
 100:
            var13 = var9.id;
 105:
            _closure2_slot1 = var13;
            var12 = _closure1_slot4;
            var11 = var12.useMemo;
            var10 = new Array(1);
            var10[0] = var9;
            var4 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 == var3;
                    if(var3) { _fun0003_ip = 56; continue _fun0003 }
 16:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 13;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getUserAvatarURLForPomelo;
                    var2 = _closure2_slot0;
                    var1 = var3.bind(var4)(var2);
 56:
                    return var1;
                }
            };
            var12 = var11.bind(var12)(var4, var10);
            _closure2_slot2 = var12;
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 14;
            var4 = var11[var4];
            var11 = var10.bind(var5)(var4);
            var10 = var11.useUsernameSuggestion;
            var4 = undefined;
            if(!var6) { _fun0002_ip = 178; continue _fun0002 }
 174:
            var4 = _closure1_slot6;
 178:
            var4 = var10.bind(var11)(var4);
            var11 = _closure1_slot4;
            var10 = var11.useLayoutEffect;
            var4 = new Array(2);
            var4[0] = var13;
            var4[1] = var12;
            var3 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure2_slot1;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0004_ip = 24; continue _fun0004 }
 16:
                    var3 = _closure2_slot2;
                    var2 = var4 != var3;
 24:
                    if(!var2) { _fun0004_ip = 66; continue _fun0004 }
 27:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 15;
                    var2 = var4[var2];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var2);
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var2, var1);
 66:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var10.bind(var11)(var3, var4);
            var3 = var1 == var9;
            var1 = null;
            if(var3) { _fun0002_ip = 261; continue _fun0002 }
 227:
            var4 = _closure1_slot8;
            var3 = _closure1_slot9;
            var2 = {};
            var2['user'] = var9;
            var2['source'] = var8;
            var2['onCloseModal'] = var7;
            var2['oneClickFlow'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 261:
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 16;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/native/components/PomeloModal.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();