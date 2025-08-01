// app/modules/instant_invite/native/DCDSendUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.Linking;
    var _closure1_slot3 = var7;
    var4 = var4.NativeModules;
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/instant_invite/native/DCDSendUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(var4) { _fun0001_ip = 67; continue _fun0001 }
 40:
            var4 = _closure1_slot4;
            var6 = var4.DCDSend;
            var5 = var6.sendSMS;
            var4 = arg2;
            var4 = var5.bind(var6)(var2, var4);
            _fun0001_ip = 134; continue _fun0001;
 67:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var5 = var4.bind(var1)(var3);
            var4 = var5.sendSMS;
            var7 = var2.body;
            var6 = null;
            var8 = var6 != var7;
            var3 = '';
            if(!var8) { _fun0001_ip = 114; continue _fun0001 }
 111:
            var3 = var7;
 114:
            var2 = var2.recipients;
            if(!(var6 == var2)) { _fun0001_ip = 128; continue _fun0001 }
 124:
            var2 = new Array(0);
 128:
            var2 = var4.bind(var5)(var3, var2);
 134:
            return var1;
        }
    };
    var3['sendSMS'] = var4;
    var4 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.isAndroid;
            var4 = var4.bind(var5)();
            if(var4) { _fun0002_ip = 67; continue _fun0002 }
 40:
            var4 = _closure1_slot4;
            var6 = var4.DCDSend;
            var5 = var6.sendMail;
            var4 = arg2;
            var4 = var5.bind(var6)(var2, var4);
            _fun0002_ip = 154; continue _fun0002;
 67:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 2;
            var3 = var5[var3];
            var6 = var4.bind(var1)(var3);
            var5 = var6.sendMail;
            var8 = var2.subject;
            var7 = null;
            var9 = var7 != var8;
            var4 = '';
            var3 = var4;
            if(!var9) { _fun0002_ip = 118; continue _fun0002 }
 115:
            var3 = var8;
 118:
            var8 = var2.body;
            var9 = var7 != var8;
            if(!var9) { _fun0002_ip = 133; continue _fun0002 }
 130:
            var4 = var8;
 133:
            var2 = var2.recipients;
            if(!(var7 == var2)) { _fun0002_ip = 147; continue _fun0002 }
 143:
            var2 = new Array(0);
 147:
            var2 = var5.bind(var6)(var3, var4, var2);
 154:
            return var1;
        }
    };
    var3['sendMail'] = var4;
    var4 = function() {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0003_ip = 59; continue _fun0003 }
 37:
            var1 = _closure1_slot4;
            var3 = var1.DCDSend;
            var1 = var3.canSendSMS;
            var1 = var1.bind(var3)();
            _fun0003_ip = 108; continue _fun0003;
 59:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.canSendSMS;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
 108:
            return var1;
        }
    };
    var3['canSendSMS'] = var4;
    var4 = function() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 1;
            var1 = var4[var1];
            var6 = undefined;
            var3 = var3.bind(var6)(var1);
            var1 = var3.isAndroid;
            var1 = var1.bind(var3)();
            if(var1) { _fun0004_ip = 59; continue _fun0004 }
 37:
            var1 = _closure1_slot4;
            var3 = var1.DCDSend;
            var1 = var3.canSendMail;
            var1 = var1.bind(var3)();
            _fun0004_ip = 108; continue _fun0004;
 59:
            var3 = global;
            var4 = var3.Promise;
            var3 = var4.resolve;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 2;
            var2 = var7[var2];
            var5 = var5.bind(var6)(var2);
            var2 = var5.canSendMail;
            var2 = var2.bind(var5)();
            var1 = var3.bind(var4)(var2);
 108:
            return var1;
        }
    };
    var3['canSendMail'] = var4;
    var2 = function canOpenUrlScheme(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var3 = arg1;
            var1 = var3;
            var _closure2_slot0 = var3;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 1;
            var3 = var6[var3];
            var6 = undefined;
            var5 = var5.bind(var6)(var3);
            var3 = var5.isAndroid;
            var3 = var3.bind(var5)();
            if(var3) { _fun0005_ip = 86; continue _fun0005 }
 49:
            var3 = global;
            var5 = var3.Promise;
            var3 = var5.prototype;
            var3 = Object.create(var3, {constructor: {value: var5}});
            var8 = function(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var4 = _closure1_slot3;
                var3 = var4.canOpenURL;
                var7 = _closure2_slot0;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = '://app';
                var2 = var6.bind(var5)(var7, var2);
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg1) {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = arg1;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var2 = false;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var9 = var3;
            var2 = new var9[var5](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            return var2;
 86: // try_start_0
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 2;
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.canOpenUrlScheme;
            var1 = var4.bind(var5)(var1);
            var1 = var2.bind(var3)(var1);
 136: // try_end0
            return var1;
 138: // catch_target0
            CatchBlockStart(arg_register=0);
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.resolve;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['canOpenUrlScheme'] = var2;
    return var1;
})();