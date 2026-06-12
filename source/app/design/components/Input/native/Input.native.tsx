// app/design/components/Input/native/Input.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
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
    var4 = 3;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var10 = 'row';
    var9['flexDirection'] = var10;
    var10 = 4;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_8;
    var9['gap'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['marginTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['marginBottom'] = var12;
    var4['inputRow'] = var9;
    var9 = {'marginBottom': null, 'flexDirection': 'row', 'alignItems': 'center'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['marginBottom'] = var12;
    var4['labelWrapper'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['marginBottom'] = var12;
    var4['label'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.space;
    var12 = var12.PX_4;
    var9['marginTop'] = var12;
    var4['description'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.space;
    var10 = var10.PX_4;
    var9['marginTop'] = var10;
    var10 = 'auto';
    var9['width'] = var10;
    var4['error'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot5 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'design/components/Input/native/Input.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Input(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = _closure1_slot5;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var20 = var1.label;
            var17 = var1.labelTrailing;
            var21 = var1.labelId;
            var14 = var1.description;
            var10 = var1.errorMessage;
            var13 = var1.children;
            var5 = var1.containerStyle;
            var18 = var1.required;
            var2 = 'string';
            var1 = typeof var20;
            var15 = undefined;
            if(!(var2 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = true;
            var15 = undefined;
            if(!(var1 === var18)) { _fun0001_ip = 2; continue _fun0001 }
case 4:
            var6 = _closure1_slot0;
            var8 = _closure1_slot1;
            var1 = 5;
            var2 = var8[var1];
            var2 = var6.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var8[var1];
            var1 = var6.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.EkokLy;
            var25 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var6 = var1.concat;
            var28 = '';
            var26 = ' (';
            var24 = ')';
            var27 = var20;
            var15 = var28[var6](var27, var26, var25, var24, var23);
case 2:
            var3 = _closure1_slot4;
            var2 = _closure1_slot2;
            var1 = {};
            var1['style'] = var5;
            var6 = null;
            var5 = var6 != var20;
            var8 = null;
            if(!var5) { _fun0001_ip = 5; continue _fun0001 }
case 6:
            if(!(var6 == var17)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var12 = _closure1_slot4;
            var9 = _closure1_slot0;
            var5 = _closure1_slot1;
            var23 = 6;
            var5 = var5[var23];
            var5 = var9.bind(var4)(var5);
            var9 = var5.Text;
            var5 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var16 = var11.label;
            var5['style'] = var16;
            var5['nativeID'] = var21;
            var5['accessibilityLabel'] = var15;
            var15 = new Array(2);
            var15[0] = var20;
            var16 = null;
            if(!var18) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var22 = _closure1_slot4;
            var19 = _closure1_slot0;
            var18 = _closure1_slot1;
            var18 = var18[var23];
            var18 = var19.bind(var4)(var18);
            var19 = var18.Text;
            var18 = {'variant': 'text-sm/bold', 'color': 'text-feedback-critical', 'aria-hidden': true};
            var23 = [' ', '*'];
            var18['children'] = var23;
            var16 = var22.bind(var4)(var19, var18);
case 9:
            var15[1] = var16;
            var5['children'] = var15;
            var5 = var12.bind(var4)(var9, var5);
            _fun0001_ip = 11; continue _fun0001;
case 7:
            var15 = _closure1_slot4;
            var12 = _closure1_slot2;
            var9 = {};
            var16 = var11.labelWrapper;
            var9['style'] = var16;
            var19 = _closure1_slot3;
            var18 = _closure1_slot0;
            var22 = _closure1_slot1;
            var16 = 6;
            var16 = var22[var16];
            var16 = var18.bind(var4)(var16);
            var18 = var16.Text;
            var16 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var16['nativeID'] = var21;
            var16['children'] = var20;
            var18 = var19.bind(var4)(var18, var16);
            var16 = new Array(2);
            var16[0] = var18;
            var16[1] = var17;
            var9['children'] = var16;
            var5 = var15.bind(var4)(var12, var9);
case 11:
            var8 = var5;
case 5:
            var5 = new Array(4);
            var5[0] = var8;
            var12 = _closure1_slot3;
            var9 = _closure1_slot2;
            var8 = {};
            var15 = var11.inputRow;
            var8['style'] = var15;
            var8['children'] = var13;
            var8 = var12.bind(var4)(var9, var8);
            var5[1] = var8;
            var9 = var6 != var14;
            var8 = null;
            if(!var9) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var13 = _closure1_slot3;
            var12 = _closure1_slot0;
            var15 = _closure1_slot1;
            var9 = 6;
            var9 = var15[var9];
            var9 = var12.bind(var4)(var9);
            var12 = var9.Text;
            var9 = {'variant': 'text-xs/medium', 'color': 'text-muted'};
            var15 = var11.description;
            var9['style'] = var15;
            var9['children'] = var14;
            var8 = var13.bind(var4)(var12, var9);
case 12:
            var5[2] = var8;
            var8 = var6 != var10;
            var6 = null;
            if(!var8) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = _closure1_slot3;
            var8 = _closure1_slot0;
            var12 = _closure1_slot1;
            var7 = 7;
            var7 = var12[var7];
            var7 = var8.bind(var4)(var7);
            var8 = var7.ErrorText;
            var7 = {};
            var11 = var11.error;
            var7['style'] = var11;
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 14:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['Input'] = var2;
    return var1;
})();