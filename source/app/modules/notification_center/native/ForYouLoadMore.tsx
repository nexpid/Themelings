// app/modules/notification_center/native/ForYouLoadMore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
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
    var4 = native4;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ActivityIndicator;
    var _closure1_slot2 = var7;
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var7 = var6[var4];
    var4 = native3;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var8 = var9.createStyles;
    var7 = {};
    var4 = 8;
    var10 = {'alignItems': 'center', 'flexDirection': 'row', 'justifyContent': 'center', 'marginTop': 8, 'marginBottom': 24, 'marginHorizontal': 16, 'height': 42};
    var7['container'] = var10;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot6 = var7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/native/ForYouLoadMore.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.onPressLoad;
            var1 = _closure1_slot6;
            var4 = undefined;
            var7 = var1.bind(var4)();
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var5 = var2.bind(var4)(var1);
            var3 = var5.useStateFromStores;
            var1 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.loading;
                return var1;
            };
            var5 = var3.bind(var5)(var2, var1);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var7 = var7.container;
            var1['style'] = var7;
            var8 = _closure1_slot5;
            if(var5) { _fun0001_ip = 205; continue _fun0001 }
 100:
            var13 = _closure1_slot0;
            var14 = _closure1_slot1;
            var5 = 6;
            var5 = var14[var5];
            var5 = var13.bind(var4)(var5);
            var7 = var5.Button;
            var5 = {'variant': 'secondary', 'grow': true, 'size': 'md'};
            var10 = 7;
            var11 = var14[var10];
            var11 = var13.bind(var4)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var10 = var14[var10];
            var10 = var13.bind(var4)(var10);
            var10 = var10.t;
            var10 = var10.Q/LSXl;
            var10 = var11.bind(var12)(var10);
            var5['text'] = var10;
            var5['onPress'] = var9;
            var5 = var8.bind(var4)(var7, var5);
            _fun0001_ip = 217; continue _fun0001;
 205:
            var7 = _closure1_slot2;
            var6 = {};
            var5 = var8.bind(var4)(var7, var6);
 217:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ForYouLoadMore'] = var2;
    return var1;
})();