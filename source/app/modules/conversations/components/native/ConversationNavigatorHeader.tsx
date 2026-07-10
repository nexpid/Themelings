// app/modules/conversations/components/native/ConversationNavigatorHeader.tsx
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = {};
            var2 = {'flex': 1, 'paddingVertical': null, 'paddingRight': null, 'alignItems': 'center', 'justifyContent': 'center'};
            var5 = _closure1_slot1;
            var3 = _closure1_slot2;
            var7 = 5;
            var3 = var3[var7];
            var6 = undefined;
            var3 = var5.bind(var6)(var3);
            var3 = var3.space;
            var3 = var3.PX_16;
            var2['paddingVertical'] = var3;
            var5 = arg1;
            var3 = 0;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = _closure1_slot1;
            var4 = _closure1_slot2;
            var4 = var4[var7];
            var4 = var5.bind(var6)(var4);
            var4 = var4.space;
            var3 = var4.PX_64;
case 2:
            var2['paddingRight'] = var3;
            var1['container'] = var2;
            return var1;
        }
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/components/native/ConversationNavigatorHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ConversationNavigatorHeader(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channelId;
            var _closure2_slot0 = var12;
            var7 = var1.title;
            var5 = var1.hasRightAction;
            var4 = undefined;
            if(!(var5 === var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var5 = false;
case 4:
            var3 = _closure1_slot6;
            var5 = var3.bind(var4)(var5);
            var6 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 6;
            var3 = var9[var3];
            var11 = var6.bind(var4)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot4;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = new Array(1);
            var3[0] = var12;
            var2 = function() {
                var3 = _closure1_slot4;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var10.bind(var11)(var8, var2, var3);
            var3 = _closure1_slot1;
            var2 = 7;
            var2 = var9[var2];
            var3 = var3.bind(var4)(var2);
            var2 = true;
            var8 = var3.bind(var4)(var8, var2);
            var3 = _closure1_slot5;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var5.container;
            var1['style'] = var5;
            var5 = 8;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GenericHeaderTitle;
            var5 = {};
            var5['title'] = var7;
            var7 = null;
            var9 = var7 != var8;
            var7 = undefined;
            if(!var9) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var7 = var8;
case 6:
            var5['subtitle'] = var7;
            var7 = 'heading-lg/semibold';
            var5['variant'] = var7;
            var7 = 'text-muted';
            var5['subtitleColor'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();