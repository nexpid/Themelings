// app/modules/notification_center/NotificationCenterStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
 72: // try_end0
            _fun0001_ip = 76; continue _fun0001;
 74: // catch_target0
            CatchBlockStart(arg_register=1);
 76:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var4 = function handleLoadFinished() {
        var3 = _closure1_slot11;
        var2 = false;
        var3['hasNewMentions'] = var2;
        var3 = _closure1_slot11;
        var3['isDataStale'] = var2;
        var1 = _closure1_slot11;
        var1['isRefreshing'] = var2;
        var1 = undefined;
        return var1;
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var2 = var2.Millis;
    var8 = var2.DAY;
    var2 = 90;
    var2 = var2 * var8;
    var _closure1_slot10 = var2;
    var2 = {'tab': null, 'localItemAcks': null, 'hasNewMentions': false, 'isDataStale': false, 'isRefreshing': false};
    var8 = {};
    var2['localItemAcks'] = var8;
    var _closure1_slot11 = var2;
    var2 = 10;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function NotificationCenterStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var5 = this;
                var4 = var5.waitFor;
                var2 = _closure1_slot9;
                var2 = var4.bind(var5)(var2);
                var2 = null;
                if(!(var2 != var3)) { _fun0003_ip = 177; continue _fun0003 }
 33:
                _closure1_slot11 = var3;
                var6 = var3.localItemAcks;
                if(!(var2 == var6)) { _fun0003_ip = 49; continue _fun0003 }
 47:
                var6 = {};
 49:
                var2 = {};
                var11 = global;
                var5 = var11.Object;
                var4 = var5.entries;
                var10 = var4.bind(var5)(var6);
                var4 = var10.length;
                var9 = 0;
                var4 = var9 < var4;
                var8 = undefined;
                var7 = 2;
                var6 = 1;
                var5 = 0;
                if(!var4) { _fun0003_ip = 159; continue _fun0003 }
 94:
                var12 = var10[var5];
                var4 = _closure1_slot8;
                var4 = var4.bind(var8)(var12, var7);
                var12 = var4[var9];
                var4 = var4[var6];
                var14 = var11.Date;
                var13 = var14.now;
                var13 = var13.bind(var14)();
                var14 = var13 - var4;
                var13 = _closure1_slot10;
                if(!(var14 < var13)) { _fun0003_ip = 147; continue _fun0003 }
 143:
                var2[var12] = var4;
 147:
                var5 = var5 + 1;
                var4 = var10.length;
                if(var5 < var4) { _fun0003_ip = 94; continue _fun0003 }
 159:
                var3['localItemAcks'] = var2;
                var2 = _closure1_slot11;
                var1 = true;
                var2['isDataStale'] = var1;
 177:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(8);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getTab';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot11;
                var1 = var1.tab;
                var3 = null;
                if(!(var3 == var1)) { _fun0004_ip = 53; continue _fun0004 }
 19:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 8;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.NotificationCenterTabs;
                var1 = var2.ForYou;
 53:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isLocalItemAcked';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = arg1;
                var1 = var4.local_id;
                var5 = null;
                var1 = var5 != var1;
                if(!var1) { _fun0005_ip = 97; continue _fun0005 }
 18:
                var2 = _closure1_slot11;
                var6 = var2.localItemAcks;
                var2 = var4.local_id;
                var2 = var6[var2];
                var2 = var5 != var2;
                if(var2) { _fun0005_ip = 94; continue _fun0005 }
 48:
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 9;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var7.bind(var5)(var6);
                var5 = var6.age;
                var4 = var4.id;
                var4 = var5.bind(var6)(var4);
                var3 = _closure1_slot10;
                var2 = var4 > var3;
 94:
                var1 = var2;
 97:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'hasNewMentions';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.hasNewMentions;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isDataStale';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.isDataStale;
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isRefreshing';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot11;
            var1 = var1.isRefreshing;
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'shouldReload';
        var5['key'] = var7;
        var6 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var1 = _closure1_slot11;
                var1 = var1.hasNewMentions;
                if(var1) { _fun0006_ip = 26; continue _fun0006 }
 16:
                var3 = _closure1_slot11;
                var1 = var3.isDataStale;
 26:
                if(var1) { _fun0006_ip = 39; continue _fun0006 }
 29:
                var2 = _closure1_slot11;
                var1 = var2.isRefreshing;
 39:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[7] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'NotificationCenterStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = 11;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function handleMessageCreate(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var2 = var1.message;
            var4 = _closure1_slot9;
            var3 = var4.hasMention;
            var2 = var2.id;
            var2 = var3.bind(var4)(var2);
            if(!var2) { _fun0007_ip = 48; continue _fun0007 }
 36:
            var2 = _closure1_slot11;
            var1 = true;
            var2['hasNewMentions'] = var1;
 48:
            var1 = undefined;
            return var1;
        }
    };
    var2['MESSAGE_CREATE'] = var10;
    var10 = function handleSetTab(arg1) {
        var2 = {};
        var5 = _closure1_slot11;
        var6 = var2;
        var3 = copyDataProperties(var6, var5);
        var3 = arg1;
        var4 = var3.tab;
        var3 = 'tab';
        var2[var3] = var4;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_SET_TAB'] = var10;
    var10 = function handleAck(arg1) {
        var1 = arg1;
        var3 = var1.localIds;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var2 = {};
            var6 = _closure1_slot11;
            var7 = var2;
            var3 = copyDataProperties(var7, var6);
            var4 = {};
            var3 = _closure1_slot11;
            var6 = var3.localItemAcks;
            var7 = var4;
            var3 = copyDataProperties(var7, var6);
            var3 = global;
            var5 = var3.Date;
            var3 = var5.now;
            var5 = var3.bind(var5)();
            var3 = arg1;
            var4[var3] = var5;
            var3 = 'localItemAcks';
            var2[var3] = var4;
            _closure1_slot11 = var2;
            var1 = undefined;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_ITEMS_LOCAL_ACK'] = var10;
    var9 = function handleRefreshData() {
        var2 = _closure1_slot11;
        var1 = true;
        var2['isRefreshing'] = var1;
        var1 = undefined;
        return var1;
    };
    var2['NOTIFICATION_CENTER_REFRESH'] = var9;
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_FAILURE'] = var4;
    var2['LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/NotificationCenterStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();