// app/modules/home_drawer/native/subtitles/TypingSubtitle.tsx
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
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot3 = var7;
    var4 = var4.jsxs;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/home_drawer/native/subtitles/TypingSubtitle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function TypingSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var5 = var1.guild;
            var3 = var1.channel;
            var15 = var1.channelName;
            var10 = var1.text;
            var2 = _closure1_slot0;
            var4 = _closure1_slot1;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.useSubtitleStyles;
            var12 = var1.bind(var2)();
            var11 = null;
            var1 = var11 != var3;
            var8 = undefined;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 4;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getChannelIconComponentWithGuild;
            var8 = var1.bind(var2)(var3, var5);
case 2:
            if(!(var11 == var8)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = _closure1_slot0;
            var3 = _closure1_slot1;
            var1 = 5;
            var1 = var3[var1];
            var1 = var2.bind(var4)(var1);
            var8 = var1.TextIcon;
case 4:
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = var12.subtitleRow;
            var1['style'] = var5;
            var5 = var11 != var15;
            var6 = null;
            if(!var5) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var7 = _closure1_slot3;
            var5 = {'size': 'xxs', 'color': 'icon-muted'};
            var13 = var12.channelIcon;
            var5['style'] = var13;
            var6 = var7.bind(var4)(var8, var5);
case 6:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot4;
            var7 = _closure1_slot0;
            var6 = _closure1_slot1;
            var16 = 6;
            var6 = var6[var16];
            var6 = var7.bind(var4)(var6);
            var7 = var6.Text;
            var6 = {'variant': 'text-xs/medium', 'color': 'text-muted', 'lineClamp': 1};
            var14 = 'text-xs/medium';
            var12 = var12.subtitleText;
            var6['style'] = var12;
            var12 = var11 != var15;
            var11 = null;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = _closure1_slot4;
            var12 = _closure1_slot0;
            var9 = _closure1_slot1;
            var9 = var9[var16];
            var9 = var12.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {};
            var9['variant'] = var14;
            var14 = new Array(2);
            var14[0] = var15;
            var15 = '  ·  ';
            var14[1] = var15;
            var9['children'] = var14;
            var11 = var13.bind(var4)(var12, var9);
case 8:
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();