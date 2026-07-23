// app/modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx
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
    var7 = var4.Image;
    var _closure1_slot2 = var7;
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
    var9 = {'flexDirection': 'row', 'alignItems': 'center'};
    var10 = 4;
    var11 = var6[var10];
    var10 = metroImportDefault;
    var10 = var10.bind(var1)(var11);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['gap'] = var10;
    var4['fieldTextRow'] = var9;
    var9 = {'width': 16, 'height': 16};
    var4['fieldIcon'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot6 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileApplicationWidgetFieldUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function formatDurationNarrow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var8 = arg1;
            var2 = global;
            var3 = var2.Number;
            var1 = var3.isFinite;
            var1 = var1.bind(var3)(var8);
            var4 = 0;
            var7 = 0;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = var2.Math;
            var3 = var5.max;
            var6 = var2.Math;
            var1 = var6.floor;
            var1 = var1.bind(var6)(var8);
            var7 = var3.bind(var5)(var4, var1);
case 2:
            var1 = {};
            var6 = var2.Math;
            var5 = var6.floor;
            var3 = 3600000;
            var3 = var7 / var3;
            var3 = var5.bind(var6)(var3);
            var1['hours'] = var3;
            var6 = var2.Math;
            var5 = var6.floor;
            var3 = 60000;
            var3 = var7 / var3;
            var5 = var5.bind(var6)(var3);
            var3 = 60;
            var5 = var5 % var3;
            var1['minutes'] = var5;
            var6 = var2.Math;
            var5 = var6.floor;
            var2 = 1000;
            var2 = var7 / var2;
            var2 = var5.bind(var6)(var2);
            var2 = var2 % var3;
            var1['seconds'] = var2;
            var10 = var1.hours;
            var9 = var1.minutes;
            var7 = var1.seconds;
            var3 = new Array(0);
            if(!(var10 > var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.push;
            var11 = _closure1_slot0;
            var12 = _closure1_slot1;
            var1 = 5;
            var6 = var12[var1];
            var5 = undefined;
            var6 = var11.bind(var5)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var1 = var12[var1];
            var1 = var11.bind(var5)(var1);
            var1 = var1.t;
            var5 = var1.rhY1Rs;
            var1 = {};
            var1['hours'] = var10;
            var1 = var6.bind(var8)(var5, var1);
            var1 = var2.bind(var3)(var1);
case 4:
            if(!(var9 > var4)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = var3.push;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 5;
            var6 = var11[var1];
            var5 = undefined;
            var6 = var10.bind(var5)(var6);
            var8 = var6.intl;
            var6 = var8.formatToPlainString;
            var1 = var11[var1];
            var1 = var10.bind(var5)(var1);
            var1 = var1.t;
            var5 = var1.XIGt+W;
            var1 = {};
            var1['minutes'] = var9;
            var1 = var6.bind(var8)(var5, var1);
            var1 = var2.bind(var3)(var1);
case 6:
            var1 = var7 > var4;
            if(var1) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = var3.length;
            var1 = var4 === var2;
case 8:
            if(!var1) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = var3.push;
            var8 = _closure1_slot0;
            var9 = _closure1_slot1;
            var1 = 5;
            var5 = var9[var1];
            var4 = undefined;
            var5 = var8.bind(var4)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var1 = var9[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.t;
            var4 = var1.pyvjRp;
            var1 = {};
            var1['seconds'] = var7;
            var1 = var5.bind(var6)(var4, var1);
            var1 = var2.bind(var3)(var1);
case 10:
            var2 = var3.join;
            var1 = ' ';
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['formatDurationNarrow'] = var4;
    var2 = function FieldText(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var16 = var1.field;
            var8 = var1.variant;
            var13 = var1.color;
            var7 = var1.skeletonWidthChars;
            var1 = _closure1_slot6;
            var6 = undefined;
            var14 = var1.bind(var6)();
            var4 = var16.status;
            var11 = null;
            var2 = 'hidden';
            var1 = null;
            if(!(var2 !== var4)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var4 = var16.status;
            var2 = 'skeleton';
            if(!(var2 !== var4)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var5 = _closure1_slot5;
            var4 = _closure1_slot3;
            var2 = {};
            var9 = var14.fieldTextRow;
            var2['style'] = var9;
            var12 = _closure1_slot4;
            var10 = _closure1_slot0;
            var15 = _closure1_slot1;
            var9 = 7;
            var9 = var15[var9];
            var9 = var10.bind(var6)(var9);
            var10 = var9.Text;
            var9 = {};
            var9['variant'] = var8;
            var9['color'] = var13;
            var13 = 2;
            var9['lineClamp'] = var13;
            var13 = var16.text;
            var9['children'] = var13;
            var10 = var12.bind(var6)(var10, var9);
            var9 = new Array(2);
            var9[0] = var10;
            var10 = var16.icon;
            var10 = var11 != var10;
            if(!var10) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var13 = _closure1_slot4;
            var12 = _closure1_slot2;
            var11 = {};
            var15 = {};
            var16 = var16.icon;
            var16 = var16.url;
            var15['uri'] = var16;
            var11['source'] = var15;
            var14 = var14.fieldIcon;
            var11['style'] = var14;
            var14 = 'contain';
            var11['resizeMode'] = var14;
            var10 = var13.bind(var6)(var12, var11);
case 16:
            var9[1] = var10;
            var2['children'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0002_ip = 18; continue _fun0002;
case 14:
            var5 = _closure1_slot4;
            var4 = _closure1_slot0;
            var9 = _closure1_slot1;
            var3 = 6;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.TextSkeleton;
            var3 = {};
            var3['variant'] = var8;
            var3['widthChars'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 18:
            var1 = var2;
case 12:
            return var1;
        }
    };
    var3['FieldText'] = var2;
    return var1;
})();