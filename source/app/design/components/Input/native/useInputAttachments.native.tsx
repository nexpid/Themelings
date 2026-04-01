// app/design/components/Input/native/useInputAttachments.native.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var6 = function estimateAttachmentWidth(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = null;
            var1 = arg1;
            var2 = var2 != var1;
            var1 = 0;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ICON_SIZE;
            var3 = var2.xs;
            var2 = arg2;
            var1 = var3 + var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot8 = var6;
    var5 = function renderInputAttachment(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var2 = var1 != var7;
            var1 = null;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var6 = _closure1_slot7;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 5;
            var2 = var4[var2];
            var4 = undefined;
            var2 = var3.bind(var4)(var2);
            var3 = var2.Text;
            var2 = {};
            var8 = 'text-md/normal';
            var2['variant'] = var8;
            var8 = arg3;
            var2['style'] = var8;
            var2['children'] = var7;
            var1 = var6.bind(var4)(var3, var2);
case 6:
            _fun0002_ip = 8; continue _fun0002;
case 4:
            var4 = _closure1_slot7;
            var3 = undefined;
            var2 = {'size': 'xs', 'color': 'input-icon-default'};
            var1 = var4.bind(var3)(var5, var2);
case 8:
            return var1;
        }
    };
    var _closure1_slot9 = var5;
    var4 = function InputAttachmentContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var7 = var1.content;
            var2 = var1.style;
            var _closure2_slot0 = var2;
            var4 = var1.setWidth;
            var _closure2_slot1 = var4;
            var8 = var1.pressableProps;
            var4 = null;
            var5 = var4 == var7;
            var1 = null;
            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            if(!(var4 == var8)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var6 = _closure1_slot7;
            var5 = _closure1_slot6;
            var4 = {};
            var4['style'] = var2;
            var2 = function onLayout(arg1) {
                var3 = _closure2_slot1;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var4['onLayout'] = var2;
            var4['children'] = var7;
            var2 = undefined;
            var2 = var6.bind(var2)(var5, var4);
            _fun0003_ip = 13; continue _fun0003;
case 11:
            var6 = _closure1_slot7;
            var5 = _closure1_slot5;
            var4 = {};
            var9 = 'button';
            var4['role'] = var9;
            var11 = var4;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var9 = function style(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.pressed;
                    var2 = _closure2_slot0;
                    var1 = new Array(3);
                    var1[0] = var2;
                    var2 = {};
                    var4 = 'auto';
                    var2['pointerEvents'] = var4;
                    var1[1] = var2;
                    var2 = undefined;
                    if(!var3) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = {};
                    var4 = 0.2;
                    var3['opacity'] = var4;
                    var2 = var3;
case 14:
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = 'style';
            var4[7] = var9;
            var8 = function onLayout(arg1) {
                var3 = _closure2_slot1;
                var1 = arg1;
                var1 = var1.nativeEvent;
                var1 = var1.layout;
                var2 = var1.width;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var3 = 'onLayout';
            var4[2] = var8;
            var3 = 'children';
            var4[2] = var7;
            var3 = undefined;
            var2 = var6.bind(var3)(var5, var4);
case 13:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var12 = var1.Object;
    var11 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var9[var1];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var10 = var9[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.Platform;
    var10 = var7.Pressable;
    var _closure1_slot5 = var10;
    var7 = var7.View;
    var _closure1_slot6 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot7 = var7;
    var7 = 8;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'design/components/Input/native/useInputAttachments.native.tsx';
    var7 = var8.bind(var9)(var7);
    var3['estimateAttachmentWidth'] = var6;
    var3['renderInputAttachment'] = var5;
    var3['InputAttachmentContainer'] = var4;
    var2 = function useInputAttachments(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var7 = arg1;
            var14 = arg2;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 6;
            var4 = var6[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = 'useInputAttachments';
            var8 = var5.bind(var3)(var4);
            var5 = _closure1_slot0;
            var4 = 7;
            var4 = var6[var4];
            var6 = var5.bind(var3)(var4);
            var5 = var6.useInputStyles;
            var4 = {};
            var9 = var7.size;
            var4['size'] = var9;
            var9 = var7.leadingIcon;
            var13 = null;
            var9 = var13 != var9;
            var4['hasLeadingIcon'] = var9;
            var4['isRefreshEnabled'] = var8;
            var4 = var5.bind(var6)(var4);
            var _closure2_slot0 = var4;
            var6 = var7.leadingIcon;
            var _closure2_slot1 = var6;
            var10 = var7.leadingText;
            var18 = var7.leadingPressableProps;
            var5 = var7.trailingIcon;
            var _closure2_slot2 = var5;
            var9 = var7.trailingText;
            var11 = var7.trailingPressableProps;
            var7 = var13 == var14;
            var20 = undefined;
            if(var7) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            var20 = var14.leading;
case 16:
            if(!(var13 == var20)) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var8 = _closure1_slot9;
            var7 = var4.text;
            var20 = var8.bind(var3)(var6, var10, var7);
case 18:
            var7 = var13 == var14;
            var15 = undefined;
            if(var7) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var15 = var14.trailing;
case 20:
            if(!(var13 == var15)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var8 = _closure1_slot9;
            var7 = var4.text;
            var15 = var8.bind(var3)(var5, var9, var7);
case 22:
            if(!(var13 == var6)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var7 = var13 == var14;
            var6 = undefined;
            if(var7) { _fun0005_ip = 26; continue _fun0005 }
case 27:
            var6 = var14.leading;
case 26:
            if(!(var13 != var6)) { _fun0005_ip = 28; continue _fun0005 }
case 24:
            var17 = var4.leadingIcon;
            _fun0005_ip = 29; continue _fun0005;
case 28:
            var17 = var4.leadingText;
case 29:
            if(!(var13 == var5)) { _fun0005_ip = 30; continue _fun0005 }
case 31:
            var6 = var13 == var14;
            var5 = undefined;
            if(var6) { _fun0005_ip = 32; continue _fun0005 }
case 33:
            var5 = var14.trailing;
case 32:
            if(!(var13 != var5)) { _fun0005_ip = 34; continue _fun0005 }
case 30:
            var10 = var4.trailingIcon;
            _fun0005_ip = 35; continue _fun0005;
case 34:
            var10 = var4.trailingText;
case 35:
            var16 = _closure1_slot4;
            var6 = var16.useState;
            var5 = function() {
                var4 = _closure1_slot8;
                var3 = _closure2_slot1;
                var1 = _closure2_slot0;
                var2 = var1.leadingIcon;
                var2 = var2.paddingStart;
                var1 = var1.leadingIcon;
                var1 = var1.paddingEnd;
                var2 = var2 + var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var6 = var6.bind(var16)(var5);
            var8 = _closure1_slot3;
            var5 = 2;
            var12 = var8.bind(var3)(var6, var5);
            var6 = 0;
            var9 = var12[var6];
            var7 = 1;
            var19 = var12[var7];
            var12 = var16.useState;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = _closure2_slot2;
                var1 = _closure2_slot0;
                var2 = var1.trailingIcon;
                var2 = var2.paddingStart;
                var1 = var1.trailingIcon;
                var1 = var1.paddingEnd;
                var2 = var2 + var1;
                var1 = undefined;
                var1 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var1 = var12.bind(var16)(var1);
            var1 = var8.bind(var3)(var1, var5);
            var5 = var1[var6];
            var12 = var1[var7];
            var1 = {};
            var16 = _closure1_slot7;
            var8 = _closure1_slot10;
            var7 = {};
            var7['content'] = var20;
            var7['setWidth'] = var19;
            var20 = var13 == var14;
            var19 = undefined;
            if(var20) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var19 = var14.leadingPressableProps;
case 36:
            if(!(var13 != var19)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
            var18 = var19;
case 38:
            var7['pressableProps'] = var18;
            var7['style'] = var17;
            var7 = var16.bind(var3)(var8, var7);
            var1['leading'] = var7;
            var8 = _closure1_slot7;
            var7 = _closure1_slot10;
            var2 = {};
            var2['content'] = var15;
            var2['setWidth'] = var12;
            var15 = var13 == var14;
            var12 = undefined;
            if(var15) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var12 = var14.trailingPressableProps;
case 40:
            if(!(var13 != var12)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var11 = var12;
case 42:
            var2['pressableProps'] = var11;
            var2['style'] = var10;
            var2 = var8.bind(var3)(var7, var2);
            var1['trailing'] = var2;
            var2 = {};
            var7 = undefined;
            if(!(var6 !== var9)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var8 = var4.padding;
            var8 = var8.paddingHorizontal;
            var7 = var9 - var8;
case 44:
            var2['marginStart'] = var7;
            var3 = undefined;
            if(!(var6 !== var5)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
            var4 = var4.padding;
            var4 = var4.paddingHorizontal;
            var3 = var5 - var4;
case 46:
            var2['marginEnd'] = var3;
            var1['inputStyle'] = var2;
            return var1;
        }
    };
    var3['useInputAttachments'] = var2;
    return var1;
})();