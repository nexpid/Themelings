// app/modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx
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
    var4 = var7.bind(var1)(var4);
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
    var9 = {'alignItems': 'center', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {'marginStart': 8, 'flexGrow': 1};
    var4['content'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/components/FormChannelPicker.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function FormChannelPicker(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.channelId;
            var _closure2_slot0 = var12;
            var2 = var1.guildId;
            var _closure2_slot1 = var2;
            var1 = var1.onChange;
            var4 = undefined;
            var _closure2_slot3 = var4;
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var7 = var2.bind(var4)();
            var2 = _closure1_slot6;
            var13 = var2.bind(var4)();
            var8 = _closure1_slot0;
            var2 = 5;
            var2 = var6[var2];
            var14 = var8.bind(var4)(var2);
            var11 = var14.useStateFromStores;
            var2 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var2;
            var8 = new Array(1);
            var8[0] = var12;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var8 = var11.bind(var14)(var10, var2, var8);
            var _closure2_slot2 = var8;
            var2 = 6;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.bind(var4)(var8);
            var11 = null;
            if(!(var11 == var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = function() {
                var1 = undefined;
                return var1;
            };
case 2:
            _closure2_slot3 = var1;
            var3 = _closure1_slot5;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 7;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var15 = var13.container;
            var6 = new Array(2);
            var6[0] = var15;
            var7 = var7.textInput;
            var6[1] = var7;
            var1['style'] = var6;
            var6 = 'link';
            var1['accessibilityRole'] = var6;
            var5 = function onPress() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var4 = var2[var1];
                    var1 = undefined;
                    var6 = var5.bind(var1)(var4);
                    var5 = var6.openLazy;
                    var4 = _closure1_slot0;
                    var3 = 10;
                    var3 = var2[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = 9;
                    var3 = var2[var3];
                    var2 = var2.paths;
                    var4 = var4.bind(var1)(var3, var2);
                    var3 = {};
                    var7 = _closure2_slot1;
                    var3['guildId'] = var7;
                    var8 = _closure2_slot2;
                    var7 = null;
                    var8 = var7 == var8;
                    var7 = undefined;
                    if(var8) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var8 = _closure2_slot2;
                    var7 = var8.id;
case 4:
                    var3['selectedChannelId'] = var7;
                    var2 = _closure2_slot3;
                    var3['onChannelSelected'] = var2;
                    var2 = 'ChannelSelectorActionSheet';
                    var2 = var5.bind(var6)(var4, var2, var3);
                    return var1;
                }
            };
            var1['onPress'] = var5;
            var5 = var11 == var8;
            var6 = null;
            if(var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 11;
            var5 = var15[var5];
            var7 = var7.bind(var4)(var5);
            var5 = var7.getChannelIconComponent;
            var8 = var5.bind(var7)(var8);
            if(!(var11 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var5 = 12;
            var5 = var15[var5];
            var5 = var7.bind(var4)(var5);
            var8 = var5.TextIcon;
case 8:
            var7 = _closure1_slot4;
            var5 = {};
            var15 = 'sm';
            var5['size'] = var15;
            var6 = var7.bind(var4)(var8, var5);
case 6:
            var5 = new Array(3);
            var5[0] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var6 = 13;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {};
            var13 = var13.content;
            var6['style'] = var13;
            var13 = 'text-md/medium';
            var6['variant'] = var13;
            var13 = var11 != var12;
            var12 = 'text-muted';
            if(!var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = 'text-default';
case 10:
            var6['color'] = var12;
            if(!(var11 == var10)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var11 = 14;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.r2ptsz;
            var10 = var12.bind(var13)(var11);
case 12:
            var6['children'] = var10;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var8 = _closure1_slot4;
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var10 = 15;
            var6 = var11[var10];
            var6 = var12.bind(var4)(var6);
            var7 = var6.Icon;
            var6 = {};
            var10 = var11[var10];
            var10 = var12.bind(var4)(var10);
            var10 = var10.Icon;
            var10 = var10.Sizes;
            var10 = var10.MEDIUM;
            var6['size'] = var10;
            var10 = _closure1_slot1;
            var9 = 16;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var6['source'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();