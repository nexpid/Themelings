// app/modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx
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
    var7 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot2 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ChannelFlags;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot4 = var8;
    var4 = var4.jsxs;
    var _closure1_slot5 = var4;
    var4 = var7.memo;
    var2 = function(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.title;
            var8 = var1.hint;
            var11 = var1.channel;
            var6 = var1.selected;
            var _closure2_slot0 = var6;
            var1 = var1.onSelectDuration;
            var _closure2_slot1 = var1;
            var4 = undefined;
            var _closure2_slot2 = var4;
            var3 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 4;
            var2 = var7[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAutoArchiveOptions;
            var7 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var11;
            if(!var2) { _fun0001_ip = 99; continue _fun0001 }
 89:
            var3 = var11.isForumPost;
            var2 = var3.bind(var11)();
 99:
            if(!var2) { _fun0001_ip = 123; continue _fun0001 }
 102:
            var10 = var11.hasFlag;
            var3 = _closure1_slot3;
            var3 = var3.PINNED;
            var2 = var10.bind(var11)(var3);
 123:
            _closure2_slot2 = var2;
            var3 = _closure1_slot4;
            var10 = _closure1_slot0;
            var11 = _closure1_slot1;
            var1 = 5;
            var1 = var11[var1];
            var1 = var10.bind(var4)(var1);
            var2 = var1.FormRadioGroup;
            var1 = {};
            var1['title'] = var9;
            var1['hint'] = var8;
            var1['value'] = var6;
            var6 = false;
            var1['hasIcons'] = var6;
            var6 = 6;
            var8 = var11[var6];
            var8 = var10.bind(var4)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var6 = var11[var6];
            var6 = var10.bind(var4)(var6);
            var6 = var6.t;
            var6 = var6.H4mGfH;
            var6 = var8.bind(var9)(var6);
            var1['accessibilityLabel'] = var6;
            var6 = var7.map;
            var5 = function(arg1, arg2, arg3) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var8 = arg1;
                    var _closure3_slot0 = var8;
                    var5 = _closure1_slot5;
                    var4 = _closure1_slot2;
                    var3 = {};
                    var9 = _closure1_slot4;
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var11 = 5;
                    var1 = var1[var11];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var6 = var1.FormRadioRow;
                    var1 = {};
                    var10 = var8.value;
                    var1['value'] = var10;
                    var13 = _closure2_slot2;
                    var1['disabled'] = var13;
                    var13 = var8.label;
                    var1['label'] = var13;
                    var12 = function onPress() {
                        var3 = _closure2_slot1;
                        var1 = _closure3_slot0;
                        var2 = var1.value;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var1['onPress'] = var12;
                    var12 = _closure2_slot0;
                    var10 = var8.value;
                    var10 = var12 === var10;
                    var1['selected'] = var10;
                    var10 = 'right';
                    var1['align'] = var10;
                    var6 = var9.bind(var2)(var6, var1);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var6 = arg3;
                    var9 = var6.length;
                    var6 = 1;
                    var10 = var9 - var6;
                    var9 = arg2;
                    var6 = null;
                    if(!(var9 !== var10)) { _fun0002_ip = 196; continue _fun0002 }
 161:
                    var10 = _closure1_slot4;
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var7 = var9.bind(var2)(var7);
                    var9 = var7.FormDivider;
                    var7 = {};
                    var6 = var10.bind(var2)(var9, var7);
 196:
                    var1[1] = var6;
                    var3['children'] = var1;
                    var1 = global;
                    var7 = var1.JSON;
                    var6 = var7.stringify;
                    var7 = var6.bind(var7)(var8);
                    var1 = var1.HermesInternal;
                    var6 = var1.concat;
                    var1 = '';
                    var1 = var6.bind(var1)(var7);
                    var1 = var5.bind(var2)(var4, var3, var1);
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var2 = var4.bind(var7)(var2);
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/threads/native/components/ThreadAutoArchiveBottomSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AutoArchiveDurationOptions'] = var2;
    return var1;
})();