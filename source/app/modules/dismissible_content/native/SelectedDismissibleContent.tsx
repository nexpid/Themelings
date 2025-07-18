// app/modules/dismissible_content/native/SelectedDismissibleContent.tsx
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
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Fragment;
    var _closure1_slot3 = var7;
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/dismissible_content/native/SelectedDismissibleContent.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function SelectedDismissibleContent(arg1) {
        var1 = arg1;
        var10 = var1.contentTypes;
        var6 = var1.children;
        var8 = var1.groupName;
        var5 = var1.bypassAutoDismiss;
        var3 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useGetDismissibleContent;
        var8 = var2.bind(var7)(var10, var8);
        var7 = _closure1_slot2;
        var2 = 2;
        var7 = var7.bind(var4)(var8, var2);
        var2 = 0;
        var8 = var7[var2];
        var2 = 1;
        var7 = var7[var2];
        var2 = 4;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSelectedDismissibleContentShared;
        var2 = var2.bind(var3)(var8, var7, var5);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = {};
        var5['visibleContent'] = var8;
        var5['markAsDismissed'] = var7;
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var4;
    var4 = function useSelectedDismissibleContent(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var5 = arguments[2];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 11; continue _fun0001 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var9 = var4.bind(var6)(var2);
            var8 = var9.useGetDismissibleContent;
            var3 = arg1;
            var2 = arg2;
            var3 = var8.bind(var9)(var3, var2);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useSelectedDismissibleContentShared;
            var1 = var1.bind(var4)(var3, var2, var5);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useSelectedDismissibleContent'] = var4;
    var4 = function useSelectedVersionedDismissibleContent(arg1, arg2, arg3) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var5 = arguments[3];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0002_ip = 11; continue _fun0002 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var10 = var4.bind(var6)(var2);
            var9 = var10.useGetVersionedDismissibleContent;
            var8 = arg1;
            var3 = arg2;
            var2 = arg3;
            var3 = var9.bind(var10)(var8, var3, var2);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useSelectedDismissibleContentShared;
            var1 = var1.bind(var4)(var3, var2, var5);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useSelectedVersionedDismissibleContent'] = var4;
    var4 = function useSelectedTimeRecurringDismissibleContent(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var5 = arguments[3];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0003_ip = 11; continue _fun0003 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var10 = var4.bind(var6)(var2);
            var9 = var10.useGetTimeRecurringDismissibleContent;
            var8 = arg1;
            var3 = arg2;
            var2 = arg3;
            var3 = var9.bind(var10)(var8, var3, var2);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useSelectedDismissibleContentShared;
            var1 = var1.bind(var4)(var3, var2, var5);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useSelectedTimeRecurringDismissibleContent'] = var4;
    var4 = function useSelectedSnowflakeBoundDismissibleContent(arg1, arg2, arg3) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arguments[3];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0004_ip = 11; continue _fun0004 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var10 = var4.bind(var6)(var2);
            var9 = var10.useGetSnowflakeBoundDismissibleContent;
            var8 = arg1;
            var3 = arg2;
            var2 = arg3;
            var3 = var9.bind(var10)(var8, var3, var2);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useSelectedDismissibleContentShared;
            var1 = var1.bind(var4)(var3, var2, var5);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useSelectedSnowflakeBoundDismissibleContent'] = var4;
    var4 = function useSelectedTimeReccuringSnowflakeBoundDismissibleContent(arg1, arg2, arg3, arg4) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var5 = arguments[4];
            var6 = undefined;
            if(!(var5 === var6)) { _fun0005_ip = 11; continue _fun0005 }
 9:
            var5 = false;
 11:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var11 = var4.bind(var6)(var2);
            var10 = var11.useGetTimeReccuringSnowflakeBoundDismissibleContent;
            var15 = arg1;
            var14 = arg3;
            var13 = arg2;
            var12 = arg4;
            var16 = var11;
            var3 = var16[var10](var15, var14, var13, var12, var11);
            var2 = _closure1_slot2;
            var1 = 2;
            var2 = var2.bind(var6)(var3, var1);
            var1 = 0;
            var3 = var2[var1];
            var1 = 1;
            var2 = var2[var1];
            var1 = 4;
            var1 = var7[var1];
            var4 = var4.bind(var6)(var1);
            var1 = var4.useSelectedDismissibleContentShared;
            var1 = var1.bind(var4)(var3, var2, var5);
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        }
    };
    var3['useSelectedTimeReccuringSnowflakeBoundDismissibleContent'] = var4;
    var4 = function SelectedVersionedDismissibleContent(arg1) {
        var1 = arg1;
        var11 = var1.contentType;
        var10 = var1.latestVersion;
        var8 = var1.groupName;
        var5 = var1.bypassAutoDismiss;
        var6 = var1.children;
        var3 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useGetVersionedDismissibleContent;
        var8 = var2.bind(var7)(var11, var10, var8);
        var7 = _closure1_slot2;
        var2 = 2;
        var7 = var7.bind(var4)(var8, var2);
        var2 = 0;
        var8 = var7[var2];
        var2 = 1;
        var7 = var7[var2];
        var2 = 4;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSelectedDismissibleContentShared;
        var2 = var2.bind(var3)(var8, var7, var5);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = {};
        var5['visibleContent'] = var8;
        var5['markAsDismissed'] = var7;
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SelectedVersionedDismissibleContent'] = var4;
    var4 = function SelectedTimeRecurringDismissibleContent(arg1) {
        var1 = arg1;
        var11 = var1.contentType;
        var10 = var1.timeRecurringConfig;
        var8 = var1.groupName;
        var5 = var1.bypassAutoDismiss;
        var6 = var1.children;
        var3 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useGetTimeRecurringDismissibleContent;
        var8 = var2.bind(var7)(var11, var10, var8);
        var7 = _closure1_slot2;
        var2 = 2;
        var7 = var7.bind(var4)(var8, var2);
        var2 = 0;
        var8 = var7[var2];
        var2 = 1;
        var7 = var7[var2];
        var2 = 4;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSelectedDismissibleContentShared;
        var2 = var2.bind(var3)(var8, var7, var5);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = {};
        var5['visibleContent'] = var8;
        var5['markAsDismissed'] = var7;
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SelectedTimeRecurringDismissibleContent'] = var4;
    var4 = function SelectedSnowflakeBoundDismissibleContent(arg1) {
        var1 = arg1;
        var11 = var1.contentType;
        var10 = var1.newSnowflakeId;
        var8 = var1.groupName;
        var5 = var1.bypassAutoDismiss;
        var6 = var1.children;
        var3 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useGetSnowflakeBoundDismissibleContent;
        var8 = var2.bind(var7)(var11, var10, var8);
        var7 = _closure1_slot2;
        var2 = 2;
        var7 = var7.bind(var4)(var8, var2);
        var2 = 0;
        var8 = var7[var2];
        var2 = 1;
        var7 = var7[var2];
        var2 = 4;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSelectedDismissibleContentShared;
        var2 = var2.bind(var3)(var8, var7, var5);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = {};
        var5['visibleContent'] = var8;
        var5['markAsDismissed'] = var7;
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SelectedSnowflakeBoundDismissibleContent'] = var4;
    var2 = function SelectedTimeReccuringSnowflakeBoundDismissibleContent(arg1) {
        var1 = arg1;
        var12 = var1.contentType;
        var14 = var1.newSnowflakeId;
        var15 = var1.timeRecurringConfig;
        var13 = var1.groupName;
        var5 = var1.bypassAutoDismiss;
        var6 = var1.children;
        var3 = _closure1_slot0;
        var9 = _closure1_slot1;
        var2 = 3;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var2 = var7.useGetTimeReccuringSnowflakeBoundDismissibleContent;
        var17 = var7;
        var16 = var12;
        var8 = var17[var2](var16, var15, var14, var13, var12);
        var7 = _closure1_slot2;
        var2 = 2;
        var7 = var7.bind(var4)(var8, var2);
        var2 = 0;
        var8 = var7[var2];
        var2 = 1;
        var7 = var7[var2];
        var2 = 4;
        var2 = var9[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useSelectedDismissibleContentShared;
        var2 = var2.bind(var3)(var8, var7, var5);
        var3 = _closure1_slot4;
        var2 = _closure1_slot3;
        var1 = {};
        var5 = {};
        var5['visibleContent'] = var8;
        var5['markAsDismissed'] = var7;
        var5 = var6.bind(var4)(var5);
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['SelectedTimeReccuringSnowflakeBoundDismissibleContent'] = var2;
    return var1;
})();