// app/modules/forums/tracking/ForumChannelAnalyticsManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var7 = native3;
    var3 = native6;
    var5 = native7;
    var1 = global;
    var8 = var1.Object;
    var4 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var4.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var2);
    var2 = 1;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = function ForumChannelAnalyticsManager() {
        var3 = this;
        var _closure2_slot0 = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = undefined;
        var4 = var5.bind(var1)(var3, var4);
        var4 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2['filterTagIds'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['setFilterTagIds'] = var4;
        var4 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2['sortOrder'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['setSortOrder'] = var4;
        var4 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2['layout'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['setLayout'] = var4;
        var4 = function(arg1) {
            var2 = _closure2_slot0;
            var1 = arg1;
            var2['tagSetting'] = var1;
            var1 = undefined;
            return var1;
        };
        var3['setTagSetting'] = var4;
        var4 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var1 = _closure2_slot0;
                var3 = var1.filterTagIds;
                var1 = null;
                if(!(var1 == var3)) { _fun0001_ip = 25; continue _fun0001 }
 19:
                var1 = new Array(0);
                _fun0001_ip = 53; continue _fun0001;
 25:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.from;
                var2 = _closure2_slot0;
                var2 = var2.filterTagIds;
                var1 = var3.bind(var4)(var2);
 53:
                return var1;
            }
        };
        var3['getFilterTagIdsAnalytics'] = var4;
        var4 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.sortOrder;
                var2 = null;
                if(!(var2 == var1)) { _fun0002_ip = 61; continue _fun0002 }
 19:
                var5 = _closure1_slot1;
                var4 = var5.getChannel;
                var3 = arg1;
                var4 = var4.bind(var5)(var3);
                var3 = var2 == var4;
                var2 = undefined;
                if(var3) { _fun0002_ip = 58; continue _fun0002 }
 48:
                var3 = var4.getDefaultSortOrder;
                var2 = var3.bind(var4)();
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var3['getSortOrderAnalytics'] = var4;
        var4 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.layout;
                var2 = null;
                if(!(var2 == var1)) { _fun0003_ip = 61; continue _fun0003 }
 19:
                var5 = _closure1_slot1;
                var4 = var5.getChannel;
                var3 = arg1;
                var4 = var4.bind(var5)(var3);
                var3 = var2 == var4;
                var2 = undefined;
                if(var3) { _fun0003_ip = 58; continue _fun0003 }
 48:
                var3 = var4.getDefaultLayout;
                var2 = var3.bind(var4)();
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var3['getLayoutAnalytics'] = var4;
        var2 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure2_slot0;
                var1 = var1.tagSetting;
                var2 = null;
                if(!(var2 == var1)) { _fun0004_ip = 61; continue _fun0004 }
 19:
                var5 = _closure1_slot1;
                var4 = var5.getChannel;
                var3 = arg1;
                var4 = var4.bind(var5)(var3);
                var3 = var2 == var4;
                var2 = undefined;
                if(var3) { _fun0004_ip = 58; continue _fun0004 }
 48:
                var3 = var4.getDefaultTagSetting;
                var2 = var3.bind(var4)();
 58:
                var1 = var2;
 61:
                return var1;
            }
        };
        var3['getTagSettingAnalytics'] = var2;
        return var1;
    };
    var _closure1_slot2 = var2;
    var2 = var4.bind(var1)(var2);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 3;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/forums/tracking/ForumChannelAnalyticsManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();