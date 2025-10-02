// app/modules/user_profile/UserProfileApplicationWidgetTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var4 = function ApplicationWidget(arg1) {
            var1 = arg1;
            var3 = this;
            var5 = var1.id;
            var4 = var1.type;
            var2 = var1.applicationId;
            var7 = _closure1_slot0;
            var6 = _closure2_slot0;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var3['id'] = var5;
            var3['type'] = var4;
            var3['applicationId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot1;
        var1 = {};
        var2 = 'toSubmission';
        var1['key'] = var2;
        var2 = function value() {
            var3 = this;
            var1 = {};
            var2 = var3.id;
            var1['id'] = var2;
            var2 = {};
            var4 = var3.type;
            var2['type'] = var4;
            var3 = var3.applicationId;
            var2['application_id'] = var3;
            var1['data'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'isSaveable';
        var1['key'] = var6;
        var6 = function value() {
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isEqual';
        var1['key'] = var6;
        var5 = function value(arg1) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var1 = _closure2_slot0;
                var1 = var2 instanceof var1;
                if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var3 = var2.applicationId;
                var2 = this;
                var2 = var2.applicationId;
                var1 = var3 === var2;
case 2:
                return var1;
            }
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/UserProfileApplicationWidgetTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var3['ApplicationWidget'] = var2;
    return var1;
})();