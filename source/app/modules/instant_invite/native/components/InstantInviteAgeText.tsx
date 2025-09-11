// app/modules/instant_invite/native/components/InstantInviteAgeText.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
    var _closure1_slot2 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = metroImportDefault;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsxs;
    var _closure1_slot4 = var7;
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap'};
    var4['inviteAgeContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/components/InstantInviteAgeText.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.style;
            var2 = var1.channel;
            var _closure2_slot0 = var2;
            var2 = var1.callbackActionSheet;
            var _closure2_slot1 = var2;
            var7 = var1.canEditInvite;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0001_ip = 43; continue _fun0001 }
 41:
            var7 = true;
 43:
            var2 = var1.onEdit;
            var _closure2_slot2 = var2;
            var1 = var1.source;
            var _closure2_slot3 = var1;
            var1 = _closure1_slot6;
            var6 = var1.bind(var5)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var4 = var2.bind(var5)(var1);
            var3 = var4.useStateFromStores;
            var1 = _closure1_slot3;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var2 = _closure1_slot3;
                var1 = var2.getInviteSettings;
                var1 = var1.bind(var2)();
                return var1;
            };
            var10 = var3.bind(var4)(var2, var1);
            var1 = null;
            var2 = var1 == var10;
            if(var2) { _fun0001_ip = 507; continue _fun0001 }
 135:
            var4 = _closure1_slot4;
            var3 = _closure1_slot2;
            var2 = {};
            var11 = var6.inviteAgeContainer;
            var6 = new Array(2);
            var6[0] = var11;
            var6[1] = var9;
            var2['style'] = var6;
            var14 = _closure1_slot0;
            var15 = _closure1_slot1;
            var11 = 6;
            var6 = var15[var11];
            var6 = var14.bind(var5)(var6);
            var9 = var6.Text;
            var6 = {};
            var13 = 'text-xs/normal';
            var6['variant'] = var13;
            var13 = 7;
            var13 = var15[var13];
            var15 = var14.bind(var5)(var13);
            var14 = var15.maxAgeString;
            var13 = var10.maxAge;
            var10 = var10.maxUses;
            var13 = var14.bind(var15)(var13, var10);
            var10 = new Array(2);
            var10[0] = var13;
            var13 = ' ';
            var10[1] = var13;
            var6['children'] = var10;
            var9 = var4.bind(var5)(var9, var6);
            var6 = new Array(2);
            var6[0] = var9;
            if(!var7) { _fun0001_ip = 493; continue _fun0001 }
 280:
            var10 = _closure1_slot5;
            var16 = _closure1_slot0;
            var17 = _closure1_slot1;
            var8 = 8;
            var8 = var17[var8];
            var8 = var16.bind(var5)(var8);
            var9 = var8.PressableOpacity;
            var8 = {};
            var12 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var3.bind(var1)(var2);
                    var6 = var7.handlePressSettings;
                    var5 = _closure2_slot0;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot3;
                    var3 = var6.bind(var7)(var5, var4, var3);
                    var4 = _closure2_slot2;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 71; continue _fun0002 }
 63:
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)();
 71:
                    return var1;
                }
            };
            var8['onPress'] = var12;
            var12 = 'link';
            var8['accessibilityRole'] = var12;
            var13 = 10;
            var12 = var17[var13];
            var12 = var16.bind(var5)(var12);
            var15 = var12.intl;
            var14 = var15.string;
            var12 = var17[var13];
            var12 = var16.bind(var5)(var12);
            var12 = var12.t;
            var12 = var12.VNe8Pz;
            var12 = var14.bind(var15)(var12);
            var8['accessibilityLabel'] = var12;
            var12 = {'top': 8, 'left': 8, 'bottom': 8, 'right': 8};
            var8['hitSlop'] = var12;
            var11 = var17[var11];
            var11 = var16.bind(var5)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-xs/normal', 'color': 'text-link'};
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.VNe8Pz;
            var13 = var14.bind(var15)(var13);
            var11['children'] = var13;
            var11 = var10.bind(var5)(var12, var11);
            var8['children'] = var11;
            var7 = var10.bind(var5)(var9, var8);
 493:
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 507:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();