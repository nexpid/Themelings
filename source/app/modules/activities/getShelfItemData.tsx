// app/modules/activities/getShelfItemData.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var3 = native6;
    var5 = native7;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var4);
    var1 = 0;
    var6 = var5[var1];
    var4 = native3;
    var1 = undefined;
    var4 = var4.bind(var1)(var6);
    var _closure1_slot0 = var4;
    var4 = 1;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/getShelfItemData.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getShelfItemData(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var7 = var2.applicationId;
            var _closure2_slot0 = var7;
            var4 = var2.activityConfigs;
            var8 = var2.applications;
            var5 = null;
            var2 = var5 == var8;
            var3 = undefined;
            if(var2) { _fun0001_ip = 52; continue _fun0001 }
 37:
            var6 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var3 = var6.bind(var8)(var2);
 52:
            if(!(var5 == var3)) { _fun0001_ip = 74; continue _fun0001 }
 56:
            var6 = _closure1_slot0;
            var2 = var6.getApplication;
            var3 = var2.bind(var6)(var7);
 74:
            var2 = var4.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.application_id;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var4 = var2.bind(var4)(var1);
            var2 = var5 == var4;
            var1 = null;
            if(var2) { _fun0001_ip = 121; continue _fun0001 }
 98:
            var2 = var5 == var3;
            var1 = null;
            if(var2) { _fun0001_ip = 121; continue _fun0001 }
 107:
            var2 = {};
            var2['activity'] = var4;
            var2['application'] = var3;
            var1 = var2;
 121:
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();