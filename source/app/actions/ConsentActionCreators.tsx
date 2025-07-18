// app/actions/ConsentActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function handleRequestSuccess(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var4 = null;
            var2 = var4 != var1;
            if(!var2) { _fun0001_ip = 21; continue _fun0001 }
 12:
            var3 = var1.body;
            var2 = var4 != var3;
 21:
            if(!var2) { _fun0001_ip = 90; continue _fun0001 }
 24:
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 1;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'UPDATE_CONSENTS';
            var2['type'] = var5;
            var5 = {};
            var7 = var1.body;
            var8 = var5;
            var6 = copyDataProperties(var8, var7);
            var2['consents'] = var5;
            var2 = var3.bind(var4)(var2);
 90:
            var1 = var1.body;
            return var1;
        }
    };
    var _closure1_slot4 = var1;
    var1 = function handleRequestFailure(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var3 = var1.status;
            var2 = 500;
            if(!(var3 >= var2)) { _fun0002_ip = 33; continue _fun0002 }
 18:
            var3 = var1.status;
            var2 = 599;
            if(!(!(var3 <= var2))) { _fun0002_ip = 136; continue _fun0002 }
 33:
            var3 = null;
            if(!(var3 != var1)) { _fun0002_ip = 62; continue _fun0002 }
 39:
            var2 = var1.body;
            if(!(var3 != var2)) { _fun0002_ip = 62; continue _fun0002 }
 48:
            var2 = var1.body;
            var2 = var2.message;
            if(!(var3 == var2)) { _fun0002_ip = 124; continue _fun0002 }
 62:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 2;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.cvJdtr;
            var3 = var3.bind(var4)(var2);
            _fun0002_ip = 134; continue _fun0002;
 124:
            var1 = var1.body;
            var3 = var1.message;
 134:
            _fun0002_ip = 196; continue _fun0002;
 136:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 2;
            var2 = var7[var1];
            var5 = undefined;
            var2 = var6.bind(var5)(var2);
            var4 = var2.intl;
            var2 = var4.string;
            var1 = var7[var1];
            var1 = var6.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.cvJdtr;
            var3 = var2.bind(var4)(var1);
 196:
            var1 = global;
            var1 = var1.Error;
            var2 = var1.prototype;
            var2 = Object.create(var2, {constructor: {value: var1}});
            var9 = var2;
            var8 = var3;
            var1 = new var9[var1](var8, var7);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot5 = var1;
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
    var4 = var4.Endpoints;
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/ConsentActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function fetchConsents() {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.get;
        var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': false};
        var5 = _closure1_slot3;
        var5 = var5.SETTINGS_CONSENT;
        var2['url'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = _closure1_slot4;
        var1 = function(arg1) {
            var1 = global;
            var3 = var1.Promise;
            var2 = var3.reject;
            var5 = var1.Error;
            var1 = arg1;
            var1 = var1.body;
            var6 = var1.message;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var7 = var4;
            var1 = new var7[var5](var6, var5);
            var1 = var1 instanceof Object ? var1 : var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['fetchConsents'] = var4;
    var2 = function setConsents(arg1, arg2) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 3;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var4 = var2.HTTP;
        var3 = var4.post;
        var2 = {};
        var5 = _closure1_slot3;
        var5 = var5.SETTINGS_CONSENT;
        var2['url'] = var5;
        var5 = {};
        var6 = arg1;
        var5['grant'] = var6;
        var6 = arg2;
        var5['revoke'] = var6;
        var2['body'] = var5;
        var5 = true;
        var2['oldFormErrors'] = var5;
        var5 = false;
        var2['rejectWithError'] = var5;
        var4 = var3.bind(var4)(var2);
        var3 = var4.then;
        var2 = _closure1_slot4;
        var1 = _closure1_slot5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['setConsents'] = var2;
    return var1;
})();