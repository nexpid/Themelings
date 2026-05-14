// app/modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx
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
    var4 = var4.getSingleRequirementThreshold;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.TIER_COLORS;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9['gap'] = var12;
    var12 = '100%';
    var9['width'] = var12;
    var4['container'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var4['barRow'] = var9;
    var9 = {'flex': 1, 'height': 6, 'borderRadius': null, 'backgroundColor': null, 'overflow': 'hidden'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var9['borderRadius'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_MOD_NORMAL;
    var9['backgroundColor'] = var12;
    var4['progressBarTrack'] = var9;
    var9 = {};
    var9['height'] = var10;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.round;
    var9['borderRadius'] = var10;
    var4['progressBarFill'] = var9;
    var9 = {'flexDirection': 'row', 'justifyContent': 'space-between'};
    var4['labels'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/native/views/GiftingBadgeLevelUpProgress.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GiftingBadgeLevelUpProgress(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = var2.progress;
            var14 = var2.currentTier;
            var12 = var2.newTier;
            var2 = _closure1_slot8;
            var4 = undefined;
            var9 = var2.bind(var4)();
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 7;
            var2 = var6[var2];
            var2 = var3.bind(var4)(var2);
            var5 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var2 = 8;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.isThemeDark;
            var2 = var2.bind(var3)(var5);
            var18 = '#40556A';
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var18 = '#279EFF';
case 2:
            var3 = _closure1_slot4;
            var8 = null;
            var5 = var8 != var14;
            var2 = undefined;
            if(!var5) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var14;
case 4:
            var23 = var3.bind(var4)(var2);
            var2 = _closure1_slot4;
            var17 = var2.bind(var4)(var12);
            var11 = var17 - var23;
            var5 = 100;
            var10 = 0;
            var22 = var5;
            if(!(var11 > var10)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = global;
            var3 = var6.Math;
            var2 = var3.min;
            var7 = var6.Math;
            var6 = var7.max;
            var1 = var1 - var23;
            var1 = var1 / var11;
            var1 = var1 * var5;
            var1 = var6.bind(var7)(var1, var10);
            var22 = var2.bind(var3)(var1, var5);
case 6:
            var19 = var18;
            if(!(var8 != var14)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = _closure1_slot5;
            var1 = var14.key;
            var1 = var2[var1];
            var19 = var18;
            if(!(var8 != var1)) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var19 = var1;
case 8:
            var2 = _closure1_slot5;
            var1 = var12.key;
            var1 = var2[var1];
            if(!(var8 != var1)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var18 = var1;
case 11:
            var3 = _closure1_slot7;
            var2 = _closure1_slot3;
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var5 = {};
            var6 = var9.barRow;
            var5['style'] = var6;
            var7 = var8 == var14;
            var6 = undefined;
            if(var7) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var6 = var14.simple_icon_url;
case 13:
            var7 = var8 != var6;
            if(!var7) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            var11 = _closure1_slot6;
            var10 = _closure1_slot1;
            var15 = _closure1_slot2;
            var6 = 9;
            var6 = var15[var6];
            var10 = var10.bind(var4)(var6);
            var6 = {};
            var14 = var14.simple_icon_url;
            var6['icon'] = var14;
            var14 = 24;
            var6['size'] = var14;
            var7 = var11.bind(var4)(var10, var6);
case 15:
            var6 = new Array(3);
            var6[0] = var7;
            var11 = _closure1_slot6;
            var10 = _closure1_slot3;
            var7 = {};
            var14 = var9.progressBarTrack;
            var7['style'] = var14;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var14 = 10;
            var14 = var16[var14];
            var15 = var15.bind(var4)(var14);
            var14 = {};
            var16 = new Array(2);
            var16[0] = var19;
            var16[1] = var18;
            var14['colors'] = var16;
            var16 = {'x': 0, 'y': 0};
            var14['start'] = var16;
            var16 = {'x': 1, 'y': 0};
            var14['end'] = var16;
            var18 = var9.progressBarFill;
            var16 = new Array(2);
            var16[0] = var18;
            var18 = {};
            var19 = global;
            var19 = var19.HermesInternal;
            var21 = var19.concat;
            var20 = '';
            var19 = '%';
            var19 = var21.bind(var20)(var22, var19);
            var18['width'] = var19;
            var16[1] = var18;
            var14['style'] = var16;
            var14 = var11.bind(var4)(var15, var14);
            var7['children'] = var14;
            var7 = var11.bind(var4)(var10, var7);
            var6[1] = var7;
            var7 = var12.simple_icon_url;
            var7 = var8 != var7;
            if(!var7) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var11 = _closure1_slot6;
            var10 = _closure1_slot1;
            var14 = _closure1_slot2;
            var8 = 9;
            var8 = var14[var8];
            var10 = var10.bind(var4)(var8);
            var8 = {};
            var12 = var12.simple_icon_url;
            var8['icon'] = var12;
            var12 = 24;
            var8['size'] = var12;
            var7 = var11.bind(var4)(var10, var8);
case 17:
            var6[2] = var7;
            var5['children'] = var6;
            var6 = var3.bind(var4)(var2, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot7;
            var7 = _closure1_slot3;
            var6 = {};
            var9 = var9.labels;
            var6['style'] = var9;
            var12 = _closure1_slot6;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = 11;
            var9 = var18[var10];
            var9 = var16.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'variant': 'text-xs/normal', 'color': 'text-muted'};
            var15 = 12;
            var14 = var18[var15];
            var14 = var16.bind(var4)(var14);
            var22 = var14.intl;
            var21 = var22.format;
            var14 = _closure1_slot1;
            var13 = 13;
            var19 = var18[var13];
            var19 = var14.bind(var4)(var19);
            var20 = var19.QsbVMM;
            var19 = {};
            var19['count'] = var23;
            var19 = var21.bind(var22)(var20, var19);
            var9['children'] = var19;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var10 = var18[var10];
            var10 = var16.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xs/normal', 'color': 'text-strong'};
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.format;
            var13 = var18[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.QsbVMM;
            var13 = {};
            var13['count'] = var17;
            var13 = var15.bind(var16)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
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