// app/modules/saved_messages/message_reminders/MessageRemindersTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var4;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = {};
    var2 = function getDueAt() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var4 = var1.bind(var2)();
        var3 = var4.add;
        var2 = 30;
        var1 = 'minutes';
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.toDate;
        var1 = var1.bind(var2)();
        return var1;
    };
    var1['getDueAt'] = var2;
    var2 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 1;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.OV8l/P;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1['getLabel'] = var2;
    var2 = new Array(5);
    var2[0] = var1;
    var1 = {};
    var7 = function getDueAt() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var4 = var1.bind(var2)();
        var3 = var4.add;
        var2 = 1;
        var1 = 'hour';
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.toDate;
        var1 = var1.bind(var2)();
        return var1;
    };
    var1['getDueAt'] = var7;
    var7 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 1;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.zf0R+/;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1['getLabel'] = var7;
    var2[1] = var1;
    var1 = {};
    var7 = function getDueAt() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 0;
        var1 = var2[var1];
        var2 = undefined;
        var1 = var3.bind(var2)(var1);
        var4 = var1.bind(var2)();
        var3 = var4.add;
        var2 = 4;
        var1 = 'hour';
        var2 = var3.bind(var4)(var2, var1);
        var1 = var2.toDate;
        var1 = var1.bind(var2)();
        return var1;
    };
    var1['getDueAt'] = var7;
    var7 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 1;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.5gztZG;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1['getLabel'] = var7;
    var2[2] = var1;
    var1 = {};
    var7 = function getDueAt() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var1 = 0;
            var2 = var7[var1];
            var3 = undefined;
            var2 = var6.bind(var3)(var2);
            var4 = var2.bind(var3)();
            var2 = var4.startOf;
            var5 = 'day';
            var9 = var2.bind(var4)(var5);
            var8 = var9.add;
            var2 = 9;
            var4 = 'hours';
            var4 = var8.bind(var9)(var2, var4);
            var1 = var7[var1];
            var1 = var6.bind(var3)(var1);
            var3 = var1.bind(var3)();
            var1 = var3.hour;
            var1 = var1.bind(var3)();
            if(!(!(var1 >= var2))) { _fun0001_ip = 100; continue _fun0001 }
 88:
            var1 = var4.toDate;
            var1 = var1.bind(var4)();
            _fun0001_ip = 124; continue _fun0001;
 100:
            var3 = var4.add;
            var2 = 1;
            var3 = var3.bind(var4)(var2, var5);
            var2 = var3.toDate;
            var1 = var2.bind(var3)();
 124:
            return var1;
        }
    };
    var1['getDueAt'] = var7;
    var7 = function getLabel() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 0;
            var1 = var4[var1];
            var6 = undefined;
            var1 = var3.bind(var6)(var1);
            var3 = var1.bind(var6)();
            var1 = var3.hour;
            var3 = var1.bind(var3)();
            var1 = 9;
            if(!(!(var3 >= var1))) { _fun0002_ip = 104; continue _fun0002 }
 45:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 1;
            var3 = var7[var1];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var1 = var7[var1];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.FnFI3t;
            var1 = var3.bind(var4)(var1);
            _fun0002_ip = 161; continue _fun0002;
 104:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 1;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.7MKr2N;
            var1 = var3.bind(var4)(var2);
 161:
            return var1;
        }
    };
    var1['getLabel'] = var7;
    var2[3] = var1;
    var1 = {};
    var7 = function getDueAt() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var5 = 0;
            var3 = var2[var5];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var4 = var3.bind(var2)();
            var3 = var4.day;
            var7 = var3.bind(var4)();
            if(!(var5 !== var7)) { _fun0003_ip = 139; continue _fun0003 }
 42:
            var6 = 8;
            var4 = 1;
            var3 = var6;
            if(!(var4 === var7)) { _fun0003_ip = 142; continue _fun0003 }
 55:
            var9 = _closure1_slot1;
            var4 = _closure1_slot2;
            var7 = var4[var5];
            var7 = var9.bind(var2)(var7);
            var10 = var7.bind(var2)();
            var8 = var10.startOf;
            var7 = 'day';
            var11 = var8.bind(var10)(var7);
            var10 = var11.add;
            var8 = 9;
            var7 = 'hours';
            var8 = var10.bind(var11)(var8, var7);
            var7 = var8.isAfter;
            var4 = var4[var5];
            var4 = var9.bind(var2)(var4);
            var4 = var4.bind(var2)();
            var4 = var7.bind(var8)(var4);
            var3 = var6;
            if(!var4) { _fun0003_ip = 142; continue _fun0003 }
 139:
            var3 = 1;
 142:
            var4 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var5];
            var1 = var4.bind(var2)(var1);
            var2 = var1.bind(var2)();
            var1 = var2.day;
            var3 = var1.bind(var2)(var3);
            var2 = var3.startOf;
            var1 = 'day';
            var4 = var2.bind(var3)(var1);
            var3 = var4.add;
            var2 = 9;
            var1 = 'hours';
            var2 = var3.bind(var4)(var2, var1);
            var1 = var2.toDate;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var1['getDueAt'] = var7;
    var6 = function getLabel() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 1;
        var2 = var6[var1];
        var4 = undefined;
        var2 = var5.bind(var4)(var2);
        var3 = var2.intl;
        var2 = var3.string;
        var1 = var6[var1];
        var1 = var5.bind(var4)(var1);
        var1 = var1.t;
        var1 = var1.q+Ls09;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var1['getLabel'] = var6;
    var2[4] = var1;
    var1 = 2;
    var4 = var4[var1];
    var1 = undefined;
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/saved_messages/message_reminders/MessageRemindersTypes.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MESSAGE_REMINDER_DURATION_ITEMS'] = var2;
    return var1;
})();