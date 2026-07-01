// app/modules/premium/powerups/native/GuildPowerupsCard.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var13 = metroImportDefault;
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
    var4 = var4.jsx;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 4;
    var10 = var6[var11];
    var14 = var13.bind(var1)(var10);
    var10 = 5;
    var12 = var6[var10];
    var12 = var13.bind(var1)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.GREEN_360;
    var15 = var14.bind(var1)(var12);
    var14 = var15.alpha;
    var12 = 0.35;
    var15 = var14.bind(var15)(var12);
    var14 = var15.hex;
    var14 = var14.bind(var15)();
    var9['borderColor'] = var14;
    var4['cardActive'] = var9;
    var9 = {};
    var14 = var6[var11];
    var15 = var13.bind(var1)(var14);
    var14 = var6[var10];
    var14 = var13.bind(var1)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.YELLOW_300;
    var15 = var15.bind(var1)(var14);
    var14 = var15.alpha;
    var15 = var14.bind(var15)(var12);
    var14 = var15.hex;
    var14 = var14.bind(var15)();
    var9['borderColor'] = var14;
    var4['cardExpiring'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var13.bind(var1)(var11);
    var10 = var6[var10];
    var10 = var13.bind(var1)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.YELLOW_300;
    var11 = var11.bind(var1)(var10);
    var10 = var11.alpha;
    var11 = var10.bind(var11)(var12);
    var10 = var11.hex;
    var10 = var10.bind(var11)();
    var9['borderColor'] = var10;
    var4['cardRemoving'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/powerups/native/GuildPowerupsCard.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildPowerupsCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var8 = var3.children;
            var6 = var3.containerStyle;
            var10 = var3.status;
            var7 = var3.style;
            var2 = {'children': 0, 'containerStyle': 0, 'status': 0, 'style': 0};
            var12 = null;
            var17 = var2;
            var16 = null;
            var1 = silentSetPrototypeOf(var17, var16);
            var17 = {};
            var16 = var3;
            var15 = var2;
            var16 = copyDataProperties(var17, var16, var15);
            var1 = _closure1_slot4;
            var4 = undefined;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var1['style'] = var6;
            var6 = _closure1_slot0;
            var13 = _closure1_slot1;
            var5 = 6;
            var5 = var13[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Card;
            var5 = {'border': 'faint', 'radius': 16, 'shadow': 'none'};
            var17 = var5;
            var9 = copyDataProperties(var17, var16);
            var9 = var12 == var10;
            var13 = undefined;
            if(var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = var10.type;
case 2:
            var9 = 'active';
            var13 = var9 === var13;
            if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var13 = var11.cardActive;
case 4:
            var9 = new Array(4);
            var9[0] = var13;
            var13 = var12 == var10;
            var14 = undefined;
            if(var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var14 = var10.type;
case 6:
            var13 = 'expiring';
            var13 = var13 === var14;
            if(!var13) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = var11.cardExpiring;
case 8:
            var9[1] = var13;
            var13 = var12 == var10;
            var12 = undefined;
            if(var13) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var12 = var10.type;
case 10:
            var10 = 'removing';
            var10 = var10 === var12;
            if(!var10) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var10 = var11.cardRemoving;
case 12:
            var9[2] = var10;
            var9[3] = var7;
            var7 = 'style';
            var5[6] = var9;
            var7 = 'children';
            var5[6] = var8;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();