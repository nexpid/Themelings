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
    var9 = {'borderRadius': null, 'borderColor': null, 'borderWidth': 1, 'borderStyle': 'solid', 'overflow': 'hidden'};
    var10 = 4;
    var11 = var6[var10];
    var11 = var13.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.md;
    var9['borderRadius'] = var11;
    var11 = var6[var10];
    var11 = var13.bind(var1)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_MOD_MUTED;
    var9['borderColor'] = var11;
    var4['cardNormal'] = var9;
    var9 = {};
    var11 = 5;
    var12 = var6[var11];
    var14 = var13.bind(var1)(var12);
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
            var1 = arg1;
            var8 = var1.children;
            var10 = var1.cardStyle;
            var7 = var1.containerStyle;
            var11 = var1.status;
            var9 = var1.onPress;
            var1 = _closure1_slot4;
            var4 = undefined;
            var12 = var1.bind(var4)();
            var3 = _closure1_slot3;
            var2 = _closure1_slot2;
            var1 = {};
            var13 = var12.cardNormal;
            var6 = new Array(5);
            var6[0] = var13;
            var13 = null;
            var14 = var13 == var11;
            var15 = undefined;
            if(var14) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var15 = var11.type;
case 2:
            var14 = 'active';
            var14 = var14 === var15;
            if(!var14) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = var12.cardActive;
case 4:
            var6[1] = var14;
            var14 = var13 == var11;
            var15 = undefined;
            if(var14) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var15 = var11.type;
case 6:
            var14 = 'expiring';
            var14 = var14 === var15;
            if(!var14) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var14 = var12.cardExpiring;
case 8:
            var6[2] = var14;
            var14 = var13 == var11;
            var13 = undefined;
            if(var14) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var13 = var11.type;
case 10:
            var11 = 'removing';
            var11 = var11 === var13;
            if(!var11) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var11 = var12.cardRemoving;
case 12:
            var6[3] = var11;
            var6[4] = var7;
            var1['style'] = var6;
            var7 = _closure1_slot3;
            var6 = _closure1_slot0;
            var11 = _closure1_slot1;
            var5 = 6;
            var5 = var11[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.Card;
            var5 = {};
            var5['style'] = var10;
            var10 = 'none';
            var5['border'] = var10;
            var5['onPress'] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();