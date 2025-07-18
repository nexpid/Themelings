// app/modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx
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
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelWrapper(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var9 = var1.channel;
            var7 = var1.layout;
            var12 = var1.fontScale;
            var5 = var1.launchpad;
            var6 = var1.panelVariant;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0001_ip = 40; continue _fun0001 }
 38:
            var6 = false;
 40:
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var10 = 3;
            var2 = var2[var10];
            var11 = var3.bind(var4)(var2);
            var3 = var11.getScaledChannelRowHeight;
            var8 = null;
            var13 = var8 == var9;
            var2 = undefined;
            if(var13) { _fun0001_ip = 90; continue _fun0001 }
 80:
            var13 = var9.isThread;
            var2 = var13.bind(var9)();
 90:
            if(!var2) { _fun0001_ip = 96; continue _fun0001 }
 93:
            var2 = !var5;
 96:
            var12 = var3.bind(var11)(var12, var7, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var10];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getLayoutStyles;
            var7 = var2.bind(var3)(var7, var5);
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var5 = new Array(3);
            var10 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'position': 'relative'};
            var5[0] = var10;
            var10 = {};
            if(!(var8 != var9)) { _fun0001_ip = 183; continue _fun0001 }
 170:
            var11 = var9.isThread;
            var11 = var11.bind(var9)();
            if(var11) { _fun0001_ip = 210; continue _fun0001 }
 183:
            var11 = var7.layout;
            var11 = var11.margin;
            var13 = var11.marginVertical;
            var11 = 2;
            var11 = var11 * var13;
            _fun0001_ip = 235; continue _fun0001;
 210:
            var13 = var7.layout;
            var13 = var13.marginThread;
            var14 = var13.marginVertical;
            var13 = 2;
            var11 = var13 * var14;
 235:
            var11 = var12 - var11;
            var10['minHeight'] = var11;
            var5[1] = var10;
            if(!(var8 != var9)) { _fun0001_ip = 265; continue _fun0001 }
 252:
            var8 = var9.isThread;
            var8 = var8.bind(var9)();
            if(var8) { _fun0001_ip = 288; continue _fun0001 }
 265:
            var8 = var7.container;
            if(var6) { _fun0001_ip = 280; continue _fun0001 }
 273:
            var6 = var8.padding;
            _fun0001_ip = 286; continue _fun0001;
 280:
            var6 = var8.paddingPanels;
 286:
            _fun0001_ip = 299; continue _fun0001;
 288:
            var7 = var7.container;
            var6 = var7.paddingThread;
 299:
            var5[2] = var6;
            var1['style'] = var5;
            var5 = arg1;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['renderChannelWrapper'] = var2;
    return var1;
})();