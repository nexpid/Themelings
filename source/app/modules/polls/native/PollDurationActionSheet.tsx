// app/modules/polls/native/PollDurationActionSheet.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function PollDurationRadioGroup(arg1) {
        var1 = arg1;
        var6 = var1.selectedDuration;
        var2 = var1.onChange;
        var _closure2_slot0 = var2;
        var7 = _closure1_slot1;
        var13 = _closure1_slot2;
        var3 = 2;
        var3 = var13[var3];
        var4 = undefined;
        var3 = var7.bind(var4)(var3);
        var8 = var3.bind(var4)();
        var _closure2_slot1 = var8;
        var9 = _closure1_slot3;
        var7 = var9.useCallback;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var2;
        var2 = function(arg1) {
            var7 = arg1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var2.bind(var1)(var7);
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 3;
            var5 = var4[var5];
            var5 = var6.bind(var1)(var5);
            var6 = var5.AccessibilityAnnouncer;
            var5 = var6.announce;
            var3 = _closure2_slot1;
            var3 = var3[var7];
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 4;
            var2 = var4[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.hideActionSheet;
            var2 = var2.bind(var3)();
            return var1;
        };
        var7 = var7.bind(var9)(var2, var3);
        var3 = _closure1_slot4;
        var12 = _closure1_slot0;
        var1 = 5;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.TableRadioGroup;
        var1 = {};
        var9 = 6;
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.0ZStp6;
        var9 = var10.bind(var11)(var9);
        var1['title'] = var9;
        var9 = false;
        var1['hasIcons'] = var9;
        var1['onChange'] = var7;
        var1['defaultValue'] = var6;
        var6 = global;
        var7 = var6.Object;
        var6 = var7.entries;
        var7 = var6.bind(var7)(var8);
        var6 = var7.map;
        var5 = function(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var3 = arg1;
                var1 = var3[Symbol.iterator];
                var3 = var1().next;
                var6 = var3().value;
                var2 = var1;
                var5 = undefined;
                var2 = var2 === var5;
                var4 = undefined;
                if(var2) { _fun0001_ip = 27; continue _fun0001 }
 24:
                var4 = var6;
 27:
                var6 = undefined;
                if(var2) { _fun0001_ip = 57; continue _fun0001 }
 32:
                var7 = var3().value;
                var3 = var1;
                var3 = var3 === var5;
                var6 = undefined;
                var2 = var3;
                if(var3) { _fun0001_ip = 57; continue _fun0001 }
 51:
                var6 = var7;
                var2 = var3;
 57:
                if(var2) { _fun0001_ip = 63; continue _fun0001 }
 60:
                var1.return();
 63:
                var3 = _closure1_slot4;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 7;
                var1 = var7[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.TableRadioRow;
                var1 = {};
                var7 = global;
                var7 = var7.parseInt;
                var7 = var7.bind(var5)(var4);
                var1['value'] = var7;
                var1['label'] = var6;
                var1 = var3.bind(var5)(var2, var1, var4);
                return var1;
            }
        };
        var5 = var6.bind(var7)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/polls/native/PollDurationActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function PollDurationActionSheet(arg1) {
        var1 = arg1;
        var9 = var1.selectedDuration;
        var8 = var1.onChange;
        var4 = _closure1_slot4;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 8;
        var1 = var3[var1];
        var3 = undefined;
        var1 = var2.bind(var3)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var7 = _closure1_slot4;
        var6 = _closure1_slot5;
        var5 = {};
        var5['selectedDuration'] = var9;
        var5['onChange'] = var8;
        var5 = var7.bind(var3)(var6, var5);
        var1['children'] = var5;
        var1 = var4.bind(var3)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();