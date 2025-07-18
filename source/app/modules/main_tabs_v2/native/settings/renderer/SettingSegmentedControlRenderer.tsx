// app/modules/main_tabs_v2/native/settings/renderer/SettingSegmentedControlRenderer.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var12 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var12.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var10 = 1;
    var7 = var6[var10];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.getSelectedSearchResult;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.RendererType;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var11 = 7;
    var13 = var6[var11];
    var13 = var12.bind(var1)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9['paddingHorizontal'] = var13;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['paddingTop'] = var11;
    var4['controlContainer'] = var9;
    var9 = {};
    var9['flex'] = var10;
    var4['pageContainer'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/settings/renderer/SettingSegmentedControlRenderer.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function SettingSegmentedControl(arg1) {
        var4 = arg1;
        var11 = var4.settings;
        var _closure2_slot0 = var11;
        var2 = null;
        var3 = Object.create(var2);
        var6 = 0;
        var3['settings'] = var6;
        var17 = {};
        var16 = var4;
        var15 = var3;
        var2 = copyDataProperties(var17, var16, var15);
        var _closure2_slot1 = var2;
        var2 = _closure1_slot11;
        var4 = undefined;
        var9 = var2.bind(var4)();
        var10 = _closure1_slot4;
        var2 = var10.useState;
        var2 = var2.bind(var10)(var6);
        var12 = _closure1_slot3;
        var7 = 2;
        var2 = var12.bind(var4)(var2, var7);
        var8 = var2[var6];
        var3 = 1;
        var2 = var2[var3];
        var _closure2_slot2 = var2;
        var13 = var10.useState;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot6;
                var8 = undefined;
                var5 = var1.bind(var8)();
                var1 = null;
                if(!(var1 != var5)) { _fun0004_ip = 148; continue _fun0004 }
 22:
                var3 = _closure2_slot0;
                var1 = var3.indexOf;
                var1 = var1.bind(var3)(var5);
                var6 = -1;
                if(!(var6 === var1)) { _fun0004_ip = 163; continue _fun0004 }
 50:
                var3 = _closure1_slot12;
                var4 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 8;
                var2 = var9[var2];
                var4 = var4.bind(var8)(var2);
                var2 = var4.getAncestors;
                var2 = var2.bind(var4)(var5);
                var5 = var3.bind(var8)(var2);
                var3 = var5.bind(var8)();
                var2 = var3.done;
                var4 = var3;
                if(var2) { _fun0004_ip = 148; continue _fun0004 }
 105:
                var9 = var4.value;
                var3 = _closure2_slot0;
                var2 = var3.indexOf;
                var2 = var2.bind(var3)(var9);
                if(!(var6 === var2)) { _fun0004_ip = 146; continue _fun0004 }
 129:
                var9 = var5.bind(var8)();
                var3 = var9.done;
                var4 = var9;
                if(var3) { _fun0004_ip = 148; continue _fun0004 }
 144:
                _fun0004_ip = 105; continue _fun0004;
 146:
                return var2;
 148:
                var2 = _closure2_slot1;
                var2 = var2.defaultIndex;
                return var2;
 163:
                return var1;
            }
        };
        var2 = var13.bind(var10)(var2);
        var2 = var12.bind(var4)(var2, var7);
        var7 = var2[var6];
        var2 = var2[var3];
        var6 = var10.useCallback;
        var3 = function(arg1) {
            var1 = arg1;
            var1 = var1.nativeEvent;
            var1 = var1.layout;
            var3 = var1.width;
            var2 = _closure2_slot2;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            return var1;
        };
        var2 = new Array(0);
        var6 = var6.bind(var10)(var3, var2);
        var3 = var10.useMemo;
        var2 = new Array(1);
        var2[0] = var11;
        var1 = function() {
            var1 = new Array(0);
            var _closure3_slot0 = var1;
            var4 = _closure2_slot0;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var6 = arg1;
                var9 = _closure1_slot0;
                var11 = _closure1_slot2;
                var1 = 9;
                var2 = var11[var1];
                var1 = undefined;
                var2 = var9.bind(var1)(var2);
                var2 = var2.SETTING_RENDERER_CONFIG;
                var2 = var2[var6];
                var4 = _closure1_slot1;
                var3 = 10;
                var3 = var11[var3];
                var7 = var4.bind(var1)(var3);
                var8 = var2.type;
                var3 = _closure1_slot7;
                var3 = var3.ROUTE;
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var4 = 'Invalid setting type for segmented control: ';
                var4 = var10.bind(var4)(var6);
                var3 = var8 === var3;
                var3 = var7.bind(var1)(var3, var4);
                var10 = var2.title;
                var3 = var2.screen;
                var2 = var3.getComponent;
                var7 = var2.bind(var3)();
                var4 = _closure3_slot0;
                var3 = var4.push;
                var2 = {};
                var8 = 11;
                var8 = var11[var8];
                var9 = var9.bind(var1)(var8);
                var8 = var9.transformSettingTitle;
                var8 = var8.bind(var9)(var10);
                var2['label'] = var8;
                var2['id'] = var6;
                var6 = _closure1_slot8;
                var5 = {};
                var5 = var6.bind(var1)(var7, var5);
                var2['page'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var11 = var3.bind(var10)(var1, var2);
        var10 = _closure1_slot0;
        var12 = _closure1_slot2;
        var1 = 12;
        var1 = var12[var1];
        var3 = var10.bind(var4)(var1);
        var2 = var3.useSegmentedControlState;
        var1 = {};
        var1['items'] = var11;
        var1['pageWidth'] = var8;
        var1['defaultIndex'] = var7;
        var11 = var2.bind(var3)(var1);
        var3 = _closure1_slot10;
        var2 = _closure1_slot9;
        var1 = {};
        var8 = _closure1_slot8;
        var7 = _closure1_slot5;
        var5 = {};
        var13 = var9.controlContainer;
        var5['style'] = var13;
        var5['onLayout'] = var6;
        var6 = 13;
        var6 = var12[var6];
        var6 = var10.bind(var4)(var6);
        var13 = var6.SegmentedControl;
        var6 = {};
        var6['state'] = var11;
        var6 = var8.bind(var4)(var13, var6);
        var5['children'] = var6;
        var6 = var8.bind(var4)(var7, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var9 = var9.pageContainer;
        var6['style'] = var9;
        var9 = 14;
        var9 = var12[var9];
        var9 = var10.bind(var4)(var9);
        var10 = var9.SegmentedControlPages;
        var9 = {};
        var9['state'] = var11;
        var9 = var8.bind(var4)(var10, var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();