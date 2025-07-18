// app/records/LibraryApplicationRecord.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var8 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var8;
    var1 = native4;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot13 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var8.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var1)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var1)(var7);
    var8 = var7.LibraryApplicationFlags;
    var _closure1_slot10 = var8;
    var8 = var7.Distributors;
    var _closure1_slot11 = var8;
    var7 = var7.SKUTypes;
    var _closure1_slot12 = var7;
    var2 = function(arg1) {
        var5 = function LibraryApplicationRecord(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot3;
                var3 = _closure2_slot0;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var1 = _closure1_slot6;
                var10 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot13;
                var1 = var1.bind(var4)();
                if(var1) { _fun0002_ip = 65; continue _fun0002 }
 52:
                var1 = var10.apply;
                var1 = var1.bind(var10)(var5, var4);
                _fun0002_ip = 103; continue _fun0002;
 65:
                var7 = global;
                var9 = var7.Reflect;
                var8 = var9.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var7 = var6.constructor;
                var6 = new Array(0);
                var1 = var8.bind(var9)(var10, var6, var7);
 103:
                var1 = var3.bind(var4)(var5, var1);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.createdAt;
                var1['createdAt'] = var3;
                var3 = var2.flags;
                var1['flags'] = var3;
                var3 = var2.branchId;
                var1['branchId'] = var3;
                var3 = var2.entitlements;
                var1['entitlements'] = var3;
                var3 = var2.branch;
                var1['branch'] = var3;
                var3 = var2.sku;
                var1['sku'] = var3;
                var2 = var2.isTestMode;
                if(var2) { _fun0002_ip = 202; continue _fun0002 }
 200:
                var2 = false;
 202:
                var1['isTestMode'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var3 = _closure1_slot7;
        var4 = undefined;
        var2 = arg1;
        var2 = var3.bind(var4)(var5, var2);
        var3 = _closure1_slot4;
        var1 = {};
        var2 = 'getFlags';
        var1['key'] = var2;
        var2 = function value() {
            var1 = this;
            var1 = var1.flags;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(15);
        var2[0] = var1;
        var1 = {};
        var6 = 'hasFlag';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.hasFlag;
            var1 = this;
            var2 = var1.flags;
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'isHidden';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot10;
            var1 = var1.HIDDEN;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'isLegacyOverlayEnabled';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot10;
            var1 = var1.OVERLAY_DISABLED;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'isOverlayV3Enabled';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.hasFlag;
            var1 = _closure1_slot10;
            var1 = var1.OVERLAY_V3_DISABLED;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'isOverlayEnabled';
        var1['key'] = var6;
        var6 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = this;
                var1 = var3.isLegacyOverlayEnabled;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 30; continue _fun0003 }
 18:
                var2 = var3.isOverlayV3Enabled;
                var1 = var2.bind(var3)();
 30:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[5] = var1;
        var1 = {};
        var6 = 'isMasterBranch';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.branchId;
            var1 = var1.id;
            var1 = var2 === var1;
            return var1;
        };
        var1['value'] = var6;
        var2[6] = var1;
        var1 = {};
        var6 = 'isDiscordApplication';
        var1['key'] = var6;
        var6 = function value() {
            var1 = true;
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'isEntitled';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = arg1;
                var _closure3_slot1 = var1;
                var1 = arg2;
                var _closure3_slot2 = var1;
                var1 = var3.isTestMode;
                var4 = !var1;
                var1 = !var4;
                if(!var4) { _fun0004_ip = 60; continue _fun0004 }
 38:
                var4 = var3.entitlements;
                var3 = var4.some;
                var2 = function(arg1) {
                    var5 = arg1;
                    var4 = var5.isValid;
                    var3 = _closure3_slot1;
                    var2 = _closure3_slot2;
                    var1 = _closure3_slot0;
                    var1 = var1.branchId;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var2);
 60:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[8] = var1;
        var1 = {};
        var6 = 'isPreorder';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var1 = var2.sku;
                var1 = var1.preorderReleaseAt;
                var3 = null;
                var1 = var3 != var1;
                if(var1) { _fun0005_ip = 40; continue _fun0005 }
 24:
                var2 = var2.sku;
                var2 = var2.preorderApproximateReleaseDate;
                var1 = var3 != var2;
 40:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[9] = var1;
        var1 = {};
        var6 = 'getDistributor';
        var1['key'] = var6;
        var6 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.DISCORD;
            return var1;
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'getBranchName';
        var1['key'] = var6;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = this;
                var3 = var2.branch;
                var1 = null;
                var3 = var1 != var3;
                var1 = 'master';
                if(!var3) { _fun0006_ip = 35; continue _fun0006 }
 24:
                var2 = var2.branch;
                var1 = var2.name;
 35:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'getBranchedName';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var1 = this;
                var3 = var1.isMasterBranch;
                var3 = var3.bind(var1)();
                if(var3) { _fun0007_ip = 82; continue _fun0007 }
 21:
                var4 = var1.branch;
                var3 = null;
                if(!(var3 != var4)) { _fun0007_ip = 82; continue _fun0007 }
 33:
                var11 = var2.name;
                var1 = var1.branch;
                var9 = var1.name;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var12 = '';
                var10 = ' (';
                var8 = ')';
                var1 = var12[var5](var11, var10, var9, var8, var7);
                _fun0007_ip = 87; continue _fun0007;
 82:
                var1 = var2.name;
 87:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'getSkuIdForAnalytics';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.sku;
            var1 = var1.id;
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
        var1 = {};
        var6 = 'getAnalyticsData';
        var1['key'] = var6;
        var6 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot8;
                var2 = var4.getApplication;
                var1 = var3.id;
                var4 = var2.bind(var4)(var1);
                var1 = {};
                var2 = null;
                var6 = var2 != var4;
                var5 = null;
                if(!var6) { _fun0008_ip = 44; continue _fun0008 }
 39:
                var5 = var4.id;
 44:
                var1['application_id'] = var5;
                var5 = var2 != var4;
                var2 = null;
                if(!var5) { _fun0008_ip = 63; continue _fun0008 }
 58:
                var2 = var4.name;
 63:
                var1['application_name'] = var2;
                var2 = var3.getSkuIdForAnalytics;
                var2 = var2.bind(var3)();
                var1['sku_id'] = var2;
                var2 = var3.getDistributor;
                var2 = var2.bind(var3)();
                var1['launcher_platform'] = var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[14] = var1;
        var6 = {};
        var1 = 'createFromServer';
        var6['key'] = var1;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var5 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var2 = var5.application;
                var2 = var2.id;
                var1['id'] = var2;
                var2 = var5.branch_id;
                var1['branchId'] = var2;
                var2 = var5.entitlements;
                var4 = null;
                if(!(var4 == var2)) { _fun0009_ip = 55; continue _fun0009 }
 49:
                var2 = new Array(0);
                _fun0009_ip = 78; continue _fun0009;
 55:
                var8 = var5.entitlements;
                var7 = var8.map;
                var6 = function(arg1) {
                    var3 = _closure1_slot9;
                    var2 = var3.createFromServer;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var7.bind(var8)(var6);
 78:
                var1['entitlements'] = var2;
                var2 = var5.branch;
                var1['branch'] = var2;
                var2 = var5.flags;
                var1['flags'] = var2;
                var2 = var5.created_at;
                var1['createdAt'] = var2;
                var2 = {};
                var6 = var5.sku;
                var6 = var6.id;
                var2['id'] = var6;
                var6 = var5.sku;
                var6 = var6.type;
                var2['type'] = var6;
                var6 = var5.sku;
                var6 = var6.premium;
                var2['premium'] = var6;
                var6 = var5.sku;
                var6 = var6.preorder_release_at;
                var7 = var4 != var6;
                var6 = null;
                if(!var7) { _fun0009_ip = 226; continue _fun0009 }
 184:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var7 = 10;
                var7 = var9[var7];
                var9 = undefined;
                var8 = var8.bind(var9)(var7);
                var7 = var5.sku;
                var7 = var7.preorder_release_at;
                var6 = var8.bind(var9)(var7);
 226:
                var2['preorderReleaseAt'] = var6;
                var6 = var5.sku;
                var6 = var6.preorder_approximate_release_date;
                var6 = var4 != var6;
                var4 = null;
                if(!var6) { _fun0009_ip = 264; continue _fun0009 }
 252:
                var5 = var5.sku;
                var4 = var5.preorder_approximate_release_date;
 264:
                var2['preorderApproximateReleaseDate'] = var4;
                var1['sku'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var11 = var2;
                var10 = var1;
                var1 = new var11[var3](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(2);
        var1[0] = var6;
        var6 = {};
        var8 = 'createForTestMode';
        var6['key'] = var8;
        var7 = function value(arg1) {
            var5 = arg1;
            var3 = _closure2_slot0;
            var1 = {};
            var2 = var5.id;
            var1['id'] = var2;
            var2 = new Array(0);
            var1['entitlements'] = var2;
            var2 = var5.branch;
            var2 = var2.id;
            var1['branchId'] = var2;
            var2 = var5.branch;
            var1['branch'] = var2;
            var2 = _closure1_slot10;
            var2 = var2.ENTITLED;
            var1['flags'] = var2;
            var2 = var5.branch;
            var2 = var2.created_at;
            var1['createdAt'] = var2;
            var2 = {};
            var5 = var5.skuId;
            var2['id'] = var5;
            var4 = _closure1_slot12;
            var4 = var4.DURABLE_PRIMARY;
            var2['type'] = var4;
            var4 = false;
            var2['premium'] = var4;
            var1['sku'] = var2;
            var2 = true;
            var1['isTestMode'] = var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var7 = var2;
            var6 = var1;
            var1 = new var7[var3](var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var7;
        var1[1] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/LibraryApplicationRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();