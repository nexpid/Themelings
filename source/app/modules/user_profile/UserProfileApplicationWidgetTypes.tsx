// app/modules/user_profile/UserProfileApplicationWidgetTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var7[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = function() {
        var4 = function ApplicationWidget(arg1) {
            var1 = arg1;
            var3 = this;
            var5 = var1.id;
            var2 = var1.applicationId;
            var7 = _closure1_slot2;
            var6 = _closure2_slot0;
            var1 = undefined;
            var6 = var7.bind(var1)(var3, var6);
            var3['id'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var4 = 2;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var4 = var4.WidgetType;
            var4 = var4.APPLICATION;
            var3['type'] = var4;
            var3['applicationId'] = var2;
            return var1;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
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
        var2 = new Array(7);
        var2[0] = var1;
        var1 = {};
        var6 = 'isDiscardable';
        var1['key'] = var6;
        var6 = function value() {
            var1 = false;
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isValid';
        var1['key'] = var6;
        var6 = function value() {
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'isEqual';
        var1['key'] = var6;
        var6 = function value(arg1) {
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
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getUniqueKey';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var5 = var1.type;
            var4 = var1.applicationId;
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = '-';
            var1 = var3.bind(var2)(var5, var1, var4);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'getProfileAnalyticsOptions';
        var1['key'] = var6;
        var6 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.type;
            var1['widgetType'] = var3;
            var2 = var2.applicationId;
            var1['applicationId'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'getProfileEditAnalyticsOptions';
        var1['key'] = var6;
        var5 = function value() {
            var2 = this;
            var1 = {};
            var3 = var2.type;
            var1['widgetEdited'] = var3;
            var2 = var2.applicationId;
            var1['applicationId'] = var2;
            return var1;
        };
        var1['value'] = var5;
        var2[6] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var _closure1_slot4 = var4;
    var5 = 3;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/user_profile/UserProfileApplicationWidgetTypes.tsx';
    var5 = var6.bind(var7)(var5);
    var3['ApplicationWidget'] = var4;
    var2 = function isApplicationWidgetWithId(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var4 = _closure1_slot4;
            var1 = var2 instanceof var4;
case 4:
            if(!var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var2 = var2.applicationId;
            var1 = var2 === var3;
case 6:
            return var1;
        }
    };
    var3['isApplicationWidgetWithId'] = var2;
    return var1;
})();