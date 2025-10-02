// app/modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
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
    var4 = 1;
    var4 = var6[var4];
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
    var10 = 4;
    var9 = {'lineHeight': 16, 'textAlign': 'center', 'textAlignVertical': 'center', 'padding': 4};
    var4['overflow'] = var9;
    var9 = {'backgroundColor': null, 'borderRadius': null, 'display': 'flex', 'alignItems': 'center', 'justifyContent': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_TERTIARY;
    var9['backgroundColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.xs;
    var9['borderRadius'] = var10;
    var4['overflowContainer'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'row'};
    var4['container'] = var9;
    var9 = {};
    var10 = 0.3;
    var9['opacity'] = var10;
    var4['modeMuted'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_sidebar/native/ChannelItemEmbeddedActivities.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ChannelItemEmbeddedActivities(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.embeddedApps;
            var7 = var1.size;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.GameIconSizes;
            var7 = var2.SIZE_24;
case 2:
            var5 = var1.muted;
            var2 = _closure1_slot6;
            var6 = var2.bind(var4)();
            var2 = var9.length;
            var8 = 0;
            if(!(!(var2 <= var8))) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var9.length;
            var3 = 1;
            if(!(var3 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var9[var8];
            var14 = var2.application;
            var2 = var9[var3];
            var16 = var2.application;
            var2 = var9.length;
            var21 = var2 - var3;
            var3 = _closure1_slot0;
            var11 = _closure1_slot2;
            var17 = 5;
            var2 = var11[var17];
            var2 = var3.bind(var4)(var2);
            var2 = var2.GameIconImageSize;
            var19 = var2[var7];
            var10 = _closure1_slot5;
            var3 = _closure1_slot3;
            var2 = {};
            var12 = var6.container;
            var2['style'] = var12;
            var13 = _closure1_slot4;
            var12 = _closure1_slot1;
            var11 = var11[var17];
            var12 = var12.bind(var4)(var11);
            var11 = {};
            var11['game'] = var14;
            var11['size'] = var7;
            var14 = {};
            var15 = 4;
            var14['marginRight'] = var15;
            var11['style'] = var14;
            var12 = var13.bind(var4)(var12, var11);
            var11 = new Array(2);
            var11[0] = var12;
            var13 = var9.length;
            var12 = 2;
            if(!(var12 !== var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = _closure1_slot4;
            var13 = _closure1_slot3;
            var12 = {};
            var18 = var6.overflowContainer;
            var15 = new Array(2);
            var15[0] = var18;
            var18 = {};
            var18['height'] = var19;
            var18['minWidth'] = var19;
            var15[1] = var18;
            var12['style'] = var15;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 6;
            var15 = var19[var15];
            var15 = var18.bind(var4)(var15);
            var18 = var15.Text;
            var15 = {};
            var19 = var6.overflow;
            var15['style'] = var19;
            var19 = 'text-xs/bold';
            var15['variant'] = var19;
            var19 = global;
            var19 = var19.HermesInternal;
            var20 = var19.concat;
            var19 = '+';
            var19 = var20.bind(var19)(var21);
            var15['children'] = var19;
            var15 = var14.bind(var4)(var18, var15);
            var12['children'] = var15;
            var12 = var14.bind(var4)(var13, var12);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var15 = _closure1_slot4;
            var14 = _closure1_slot1;
            var13 = _closure1_slot2;
            var13 = var13[var17];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var13['game'] = var16;
            var13['size'] = var7;
            var12 = var15.bind(var4)(var14, var13);
case 10:
            var11[1] = var12;
            var2['children'] = var11;
            var2 = var10.bind(var4)(var3, var2);
            return var2;
case 6:
            var3 = _closure1_slot4;
            var2 = _closure1_slot1;
            var10 = _closure1_slot2;
            var1 = 5;
            var1 = var10[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var8 = var9[var8];
            var8 = var8.application;
            var1['game'] = var8;
            var1['size'] = var7;
            if(!var5) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var5 = var6.modeMuted;
case 11:
            var1['style'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 4:
            var1 = null;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();