// app/modules/app_database/modules/LowDiskTrim.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native3;
    var3 = native6;
    var5 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var2 = function() {
        var4 = _closure1_slot3;
        var3 = function LowDiskTrim() {
            var5 = this;
            var _closure3_slot0 = var5;
            var6 = _closure1_slot2;
            var4 = _closure2_slot0;
            var1 = undefined;
            var4 = var6.bind(var1)(var5, var4);
            var4 = false;
            var5['isLowDisk'] = var4;
            var4 = {};
            var6 = function POST_CONNECTION_OPEN() {
                var2 = _closure3_slot0;
                var1 = var2.handlePostConnectionOpen;
                var1 = var1.bind(var2)();
                return var1;
            };
            var4['POST_CONNECTION_OPEN'] = var6;
            var5['actions'] = var4;
            var4 = _closure1_slot4;
            var3 = var4.addChangeListener;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.handleFileSystemStoreChanged;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'handlePostConnectionOpen';
        var1['key'] = var2;
        var2 = function value() {
            var2 = this;
            var1 = false;
            var2['isLowDisk'] = var1;
            var1 = var2.handleFileSystemStoreChanged;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'handleFileSystemStoreChanged';
        var1['key'] = var6;
        var6 = function value() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                var2 = this;
                var1 = _closure1_slot4;
                var1 = var1.isLowDisk;
                var4 = var1;
                if(!var4) { _fun0001_ip = 32; continue _fun0001 }
 22:
                var5 = var2.isLowDisk;
                var4 = var5 !== var1;
 32:
                if(!var4) { _fun0001_ip = 83; continue _fun0001 }
 35:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 3;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.database;
                var4 = var3.bind(var4)();
                var3 = null;
                if(!(var3 != var4)) { _fun0001_ip = 83; continue _fun0001 }
 73:
                var3 = var4.incrementalVacuum;
                var3 = var3.bind(var4)();
 83:
                var2['isLowDisk'] = var1;
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'resetInMemoryState';
        var1['key'] = var6;
        var5 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var12 = var4;
    var2 = new var12[var2](var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 4;
    var5 = var5[var4];
    var4 = native2;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/modules/LowDiskTrim.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();