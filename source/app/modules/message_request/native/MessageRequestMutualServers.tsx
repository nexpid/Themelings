// app/modules/message_request/native/MessageRequestMutualServers.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var10 = 1;
    var4 = var6[var10];
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
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['container'] = var9;
    var9 = {};
    var9['flexShrink'] = var10;
    var4['label'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/message_request/native/MessageRequestMutualServers.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageRequestMutualServers(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var4 = var1.userId;
            var10 = var1.style;
            var7 = var1.onPress;
            var16 = var1.iconSize;
            var5 = undefined;
            if(!(var16 === var5)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var3.bind(var5)(var2);
            var2 = var2.GuildIconSizes;
            var16 = var2.XXSMALL_12;
case 2:
            var _closure2_slot0 = var16;
            var14 = var1.textVariant;
            if(!(var14 === var5)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = 'text-xs/medium';
case 4:
            var1 = _closure1_slot6;
            var13 = var1.bind(var5)();
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.useMutualGuildsForMessageRequests;
            var8 = var1.bind(var3)(var4);
            var4 = var8.length;
            var6 = var8.slice;
            var3 = 0;
            var1 = 3;
            var17 = var6.bind(var8)(var3, var1);
            var8 = _closure1_slot5;
            var6 = _closure1_slot3;
            var1 = {};
            var11 = var13.container;
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var1['style'] = var9;
            var10 = var4 > var3;
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 6;
            var9 = var18[var9];
            var9 = var11.bind(var5)(var9);
            var11 = var9.GuildIconPile;
            var9 = {};
            var9['size'] = var16;
            var18 = var17.map;
            var16 = function(arg1) {
                var1 = arg1;
                var1 = var1.name;
                return var1;
            };
            var16 = var18.bind(var17)(var16);
            var9['names'] = var16;
            var16 = var17.map;
            var15 = function(arg1) {
                var1 = arg1;
                var5 = _closure1_slot4;
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = {};
                var2['guild'] = var1;
                var6 = _closure2_slot0;
                var2['size'] = var6;
                var1 = var1.id;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15);
            var9['children'] = var15;
            var10 = var12.bind(var5)(var11, var9);
case 6:
            var9 = new Array(2);
            var9[0] = var10;
            var12 = _closure1_slot4;
            var11 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 7;
            var10 = var15[var10];
            var10 = var11.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': null, 'color': 'text-muted', 'lineClamp': 1};
            var10['variant'] = var14;
            var13 = var13.label;
            var10['style'] = var13;
            if(!(!(var4 > var3))) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 8;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13.jpY0X5;
            var13 = var14.bind(var15)(var13);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var15 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 8;
            var16 = var18[var14];
            var16 = var15.bind(var5)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var14 = var18[var14];
            var14 = var15.bind(var5)(var14);
            var14 = var14.t;
            var15 = var14.eE3oep;
            var14 = {};
            var14['count'] = var4;
            var13 = var16.bind(var17)(var15, var14);
case 10:
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var9[1] = var10;
            var1['children'] = var9;
            var6 = var8.bind(var5)(var6, var1);
            var8 = null;
            var1 = var6;
            if(!(var8 != var7)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var1 = var6;
            if(!(var4 > var3)) { _fun0001_ip = 11; continue _fun0001 }
case 13:
            var4 = _closure1_slot4;
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 9;
            var2 = var8[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.PressableOpacity;
            var2 = {};
            var8 = 'button';
            var2['accessibilityRole'] = var8;
            var2['onPress'] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 11:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();