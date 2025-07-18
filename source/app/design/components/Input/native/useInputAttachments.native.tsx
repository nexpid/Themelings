// app/design/components/Input/native/useInputAttachments.native.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var8 = native2;
    var3 = native6;
    var9 = native7;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var6 = function estimateAttachmentWidth(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = null;
            var1 = arg1;
            var2 = var2 != var1;
            var1 = 0;
            if(!var2) { _fun0001_ip = 58; continue _fun0001 }
 14:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 4;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ICON_SIZE;
            var3 = var2.xs;
            var2 = arg2;
            var1 = var3 + var2;
 58:
            return var1;
        }
    };
    var _closure1_slot7 = var6;
    var5 = function renderInputAttachment(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arg1;
            var7 = arg2;
            var1 = null;
            if(!(var1 == var5)) { _fun0002_ip = 86; continue _fun0002 }
 12:
            var2 = var1 != var7;
            var1 = null;
            if(!var2) { _fun0002_ip = 84; continue _fun0002 }
 21:
            var6 = _closure1_slot6;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
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
 84:
            _fun0002_ip = 115; continue _fun0002;
 86:
            var4 = _closure1_slot6;
            var3 = undefined;
            var2 = {'size': 'xs', 'color': 'text-normal'};
            var1 = var4.bind(var3)(var5, var2);
 115:
            return var1;
        }
    };
    var _closure1_slot8 = var5;
    var4 = function InputAttachmentContainer(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
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
            if(var5) { _fun0003_ip = 174; continue _fun0003 }
 49:
            if(!(var4 == var8)) { _fun0003_ip = 94; continue _fun0003 }
 53:
            var6 = _closure1_slot6;
            var5 = _closure1_slot5;
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
            _fun0003_ip = 171; continue _fun0003;
 94:
            var6 = _closure1_slot6;
            var5 = _closure1_slot4;
            var4 = {};
            var9 = 'button';
            var4['role'] = var9;
            var11 = var4;
            var10 = var8;
            var8 = copyDataProperties(var11, var10);
            var9 = function style(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
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
                    if(!var3) { _fun0004_ip = 63; continue _fun0004 }
 44:
                    var3 = {};
                    var4 = 0.2;
                    var3['opacity'] = var4;
                    var2 = var3;
 63:
                    var1[2] = var2;
                    return var1;
                }
            };
            var8 = 'style';
            var4[var8] = var9;
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
            var4[var3] = var8;
            var3 = 'children';
            var4[var3] = var7;
            var3 = undefined;
            var2 = var6.bind(var3)(var5, var4);
 171:
            var1 = var2;
 174:
            return var1;
        }
    };
    var _closure1_slot9 = var4;
    var1 = global;
    var11 = var1.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var10 = var9[var1];
    var7 = native3;
    var1 = undefined;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot2 = var7;
    var7 = 1;
    var10 = var9[var7];
    var7 = native4;
    var7 = var7.bind(var1)(var10);
    var _closure1_slot3 = var7;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var10 = var7.Platform;
    var10 = var7.Pressable;
    var _closure1_slot4 = var10;
    var7 = var7.View;
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var1)(var7);
    var7 = var7.jsx;
    var _closure1_slot6 = var7;
    var7 = 7;
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
 0:
            var7 = arg1;
            var14 = arg2;
            var5 = _closure1_slot0;
            var4 = _closure1_slot1;
            var3 = 6;
            var4 = var4[var3];
            var3 = undefined;
            var6 = var5.bind(var3)(var4);
            var5 = var6.useInputStyles;
            var4 = {};
            var8 = var7.size;
            var4['size'] = var8;
            var8 = var7.leadingIcon;
            var13 = null;
            var8 = var13 != var8;
            var4['hasLeadingIcon'] = var8;
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
            if(var7) { _fun0005_ip = 135; continue _fun0005 }
 129:
            var20 = var14.leading;
 135:
            if(!(var13 == var20)) { _fun0005_ip = 155; continue _fun0005 }
 139:
            var8 = _closure1_slot8;
            var7 = var4.text;
            var20 = var8.bind(var3)(var6, var10, var7);
 155:
            var7 = var13 == var14;
            var15 = undefined;
            if(var7) { _fun0005_ip = 170; continue _fun0005 }
 164:
            var15 = var14.trailing;
 170:
            if(!(var13 == var15)) { _fun0005_ip = 190; continue _fun0005 }
 174:
            var8 = _closure1_slot8;
            var7 = var4.text;
            var15 = var8.bind(var3)(var5, var9, var7);
 190:
            if(!(var13 == var6)) { _fun0005_ip = 213; continue _fun0005 }
 194:
            var7 = var13 == var14;
            var6 = undefined;
            if(var7) { _fun0005_ip = 209; continue _fun0005 }
 203:
            var6 = var14.leading;
 209:
            if(!(var13 != var6)) { _fun0005_ip = 221; continue _fun0005 }
 213:
            var17 = var4.leadingIcon;
            _fun0005_ip = 227; continue _fun0005;
 221:
            var17 = var4.leadingText;
 227:
            if(!(var13 == var5)) { _fun0005_ip = 250; continue _fun0005 }
 231:
            var6 = var13 == var14;
            var5 = undefined;
            if(var6) { _fun0005_ip = 246; continue _fun0005 }
 240:
            var5 = var14.trailing;
 246:
            if(!(var13 != var5)) { _fun0005_ip = 258; continue _fun0005 }
 250:
            var10 = var4.trailingIcon;
            _fun0005_ip = 264; continue _fun0005;
 258:
            var10 = var4.trailingText;
 264:
            var16 = _closure1_slot3;
            var6 = var16.useState;
            var5 = function() {
                var4 = _closure1_slot7;
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
            var8 = _closure1_slot2;
            var5 = 2;
            var12 = var8.bind(var3)(var6, var5);
            var6 = 0;
            var9 = var12[var6];
            var7 = 1;
            var19 = var12[var7];
            var12 = var16.useState;
            var1 = function() {
                var4 = _closure1_slot7;
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
            var16 = _closure1_slot6;
            var8 = _closure1_slot9;
            var7 = {};
            var7['content'] = var20;
            var7['setWidth'] = var19;
            var20 = var13 == var14;
            var19 = undefined;
            if(var20) { _fun0005_ip = 374; continue _fun0005 }
 368:
            var19 = var14.leadingPressableProps;
 374:
            if(!(var13 != var19)) { _fun0005_ip = 381; continue _fun0005 }
 378:
            var18 = var19;
 381:
            var7['pressableProps'] = var18;
            var7['style'] = var17;
            var7 = var16.bind(var3)(var8, var7);
            var1['leading'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot9;
            var2 = {};
            var2['content'] = var15;
            var2['setWidth'] = var12;
            var15 = var13 == var14;
            var12 = undefined;
            if(var15) { _fun0005_ip = 435; continue _fun0005 }
 429:
            var12 = var14.trailingPressableProps;
 435:
            if(!(var13 != var12)) { _fun0005_ip = 442; continue _fun0005 }
 439:
            var11 = var12;
 442:
            var2['pressableProps'] = var11;
            var2['style'] = var10;
            var2 = var8.bind(var3)(var7, var2);
            var1['trailing'] = var2;
            var2 = {};
            var7 = undefined;
            if(!(var6 !== var9)) { _fun0005_ip = 484; continue _fun0005 }
 470:
            var8 = var4.padding;
            var8 = var8.paddingHorizontal;
            var7 = var9 - var8;
 484:
            var2['marginStart'] = var7;
            var3 = undefined;
            if(!(var6 !== var5)) { _fun0005_ip = 509; continue _fun0005 }
 495:
            var4 = var4.padding;
            var4 = var4.paddingHorizontal;
            var3 = var5 - var4;
 509:
            var2['marginEnd'] = var3;
            var1['inputStyle'] = var2;
            return var1;
        }
    };
    var3['useInputAttachments'] = var2;
    return var1;
})();