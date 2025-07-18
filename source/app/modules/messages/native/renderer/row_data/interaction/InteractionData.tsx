// app/modules/messages/native/renderer/row_data/interaction/InteractionData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot4 = var7;
    var7 = var4.Fragment;
    var _closure1_slot5 = var7;
    var4 = var4.jsxs;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/row_data/interaction/InteractionData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function InteractionData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var12 = var2.message;
            var _closure2_slot0 = var12;
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 3;
            var2 = var9[var2];
            var4 = undefined;
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = new Array(1);
            var2[0] = var12;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getInteraction;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var10 = var5.bind(var6)(var3, var1, var2);
            var11 = var12.components;
            var3 = _closure1_slot6;
            var2 = _closure1_slot5;
            var1 = {};
            var8 = _closure1_slot4;
            var6 = _closure1_slot1;
            var5 = 4;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['message'] = var12;
            var5['interaction'] = var10;
            var6 = var8.bind(var4)(var6, var5);
            var5 = new Array(3);
            var5[0] = var6;
            var8 = var12.interaction;
            var6 = null;
            var6 = var6 != var8;
            if(!var6) { _fun0001_ip = 201; continue _fun0001 }
 154:
            var13 = _closure1_slot4;
            var9 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 5;
            var8 = var14[var8];
            var9 = var9.bind(var4)(var8);
            var8 = {};
            var8['message'] = var12;
            var14 = var12.interaction;
            var8['interaction'] = var14;
            var6 = var13.bind(var4)(var9, var8);
 201:
            var5[1] = var6;
            var8 = var11.length;
            var6 = 0;
            var6 = var8 > var6;
            if(!var6) { _fun0001_ip = 265; continue _fun0001 }
 219:
            var9 = _closure1_slot4;
            var8 = _closure1_slot1;
            var13 = _closure1_slot2;
            var7 = 6;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['message'] = var12;
            var7['components'] = var11;
            var7['interaction'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 265:
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();